# Deploy to GitHub Pages - Quick Guide

Your ReallyHaute website is configured for GitHub Pages deployment!

## ✅ What's Already Done

1. ✅ Git repository initialized
2. ✅ Next.js configured for static export (`output: 'export'`)
3. ✅ GitHub Actions workflow created (`.github/workflows/deploy.yml`)
4. ✅ `.gitignore` file protecting sensitive data

## 📤 Deploy Now (3 Steps)

### Step 1: Add & Commit Files

```bash
git add .
git commit -m "Initial commit - ReallyHaute waitlist pages"
```

### Step 2: Connect to GitHub

```bash
git remote add origin https://github.com/Kewaya/reallyhaute.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to https://github.com/Kewaya/reallyhaute/settings/pages
2. Under **"Build and deployment"**:
   - Source: **GitHub Actions**
3. Click **Save**

That's it! GitHub Actions will automatically build and deploy your site.

---

## 🌐 Your Live URLs

After deployment completes (~2-3 minutes):

- **Main site**: `https://kewaya.github.io/reallyhaute/`
- **Landing3**: `https://kewaya.github.io/reallyhaute/landing3`
- **Landing4**: `https://kewaya.github.io/reallyhaute/landing4`

---

## 🔄 Future Updates

Just commit and push - deployment is automatic:

```bash
git add .
git commit -m "Updated form"
git push
```

GitHub Actions will rebuild and deploy automatically.

---

## 🎨 Using a Custom Domain (Optional)

1. Add a `CNAME` file to `/public/` with your domain:
   ```
   waitlist.reallyhaute.com
   ```

2. Add these DNS records to your domain:
   ```
   Type: CNAME
   Name: waitlist (or @)
   Value: kewaya.github.io
   ```

3. In GitHub Settings → Pages, add your custom domain

---

## 🐛 Troubleshooting

**Deployment failing?**
- Check Actions tab: https://github.com/Kewaya/reallyhaute/actions
- View error logs to see what went wrong

**Pages not appearing?**
- Check that GitHub Pages source is set to "GitHub Actions"
- Wait 2-3 minutes for first deployment
- Clear browser cache

**Form not working?**
- Formspree is already configured - no additional setup needed!
- Submissions go to: https://formspree.io/f/xjgeblaz

---

## 📊 Monitor Submissions

View all waitlist submissions at [formspree.io](https://formspree.io/) dashboard.

---

## 🚀 Ready to Deploy?

Run these commands now:

```bash
cd /Users/tjeneh/Documents/reallyhautewaitlist
git add .
git commit -m "Initial commit - ReallyHaute waitlist"
git remote add origin https://github.com/Kewaya/reallyhaute.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings!
