import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        // Parse request body
        const { email, phone, role } = await request.json();

        // Validate required fields
        if (!email || !phone || !role) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check for environment variables
        const sheetId = process.env.GOOGLE_SHEET_ID;
        const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY;

        if (!sheetId || !serviceAccountEmail || !privateKey) {
            console.error('Missing Google Sheets environment variables');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Set up Google Sheets authentication
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: serviceAccountEmail,
                private_key: privateKey.replace(/\\n/g, '\n'), // Handle escaped newlines
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Prepare row data
        const timestamp = new Date().toISOString();
        const rowData = [timestamp, email, phone, role];

        // Append to sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: sheetId,
            range: 'Sheet1!A:D', // Adjust sheet name if needed
            valueInputOption: 'RAW',
            requestBody: {
                values: [rowData],
            },
        });

        console.log('✅ Successfully added to Google Sheets:', { email, role });

        return NextResponse.json(
            { success: true, message: 'Waitlist entry recorded' },
            { status: 200 }
        );
    } catch (error) {
        console.error('❌ Google Sheets API Error:', error);

        return NextResponse.json(
            { error: 'Failed to save submission' },
            { status: 500 }
        );
    }
}

