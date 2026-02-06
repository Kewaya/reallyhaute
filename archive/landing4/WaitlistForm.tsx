"use client";

import { useState } from "react";
import { landing4Config } from "@/lib/landing4-content";

type FormData = {
    email: string;
    phone: string;
    role: string;
};

type FormErrors = {
    email?: string;
    phone?: string;
};

export default function Landing4WaitlistForm() {
    const [formData, setFormData] = useState<FormData>({
        email: "",
        phone: "",
        role: "buyer",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string): boolean => {
        // Basic phone validation - at least 10 digits
        const phoneRegex = /\d{10,}/;
        return phoneRegex.test(phone.replace(/\D/g, ""));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset errors
        const newErrors: FormErrors = {};

        // Validate email
        if (!formData.email) {
            newErrors.email = landing4Config.waitlist.form.email.required;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = landing4Config.waitlist.form.email.invalid;
        }

        // Validate phone
        if (!formData.phone) {
            newErrors.phone = landing4Config.waitlist.form.phone.required;
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = landing4Config.waitlist.form.phone.invalid;
        }

        // If errors, set and return
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Clear errors
        setErrors({});
        setIsSubmitting(true);

        try {
            // Submit to Formspree
            const response = await fetch('https://formspree.io/f/xjgeblaz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    phone: formData.phone,
                    role: formData.role,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit');
            }

            console.log('✅ Waitlist submission successful');

            // Success
            setStatus("success");
            setFormData({ email: "", phone: "", role: "buyer" });
        } catch (error) {
            console.error("❌ Submission error:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
        // Reset status when user starts typing again
        if (status !== "idle") {
            setStatus("idle");
        }
    };

    return (
        <section className="py-32 px-6">
            <div className="max-w-2xl mx-auto">
                {/* Heading */}
                <div className="text-center space-y-4 mb-16 animate-slide-up">
                    <h2 className="font-serif text-5xl sm:text-6xl font-light text-[rgb(var(--text))]">
                        {landing4Config.waitlist.headline}
                    </h2>
                    <p className="text-lg text-[rgb(var(--text-muted))] font-light">
                        {landing4Config.waitlist.description}
                    </p>
                </div>

                {/* Form */}
                <div
                    className="p-8 sm:p-12 rounded-3xl animate-slide-up delay-200"
                    style={{
                        background: "rgba(var(--card-glass))",
                        backdropFilter: "blur(var(--glass-blur))",
                        WebkitBackdropFilter: "blur(var(--glass-blur))",
                        border: "1px solid rgba(var(--border-glass))",
                        boxShadow: "var(--shadow-float)",
                    }}
                >
                    {status === "success" ? (
                        // Success state
                        <div className="text-center py-12 animate-scale-in">
                            <div className="mb-6">
                                <div
                                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                                    style={{
                                        background: "rgb(var(--accent))",
                                    }}
                                >
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="font-serif text-2xl font-medium text-[rgb(var(--text))] mb-2">
                                Welcome to ReallyHaute
                            </h3>
                            <p className="text-[rgb(var(--text-muted))]">
                                {landing4Config.waitlist.form.success}
                            </p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-8 text-sm text-[rgb(var(--accent))] hover:text-[rgb(var(--accent-dark))] transition-colors duration-300 cursor-pointer"
                            >
                                Submit another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-[rgb(var(--text))] mb-2"
                                >
                                    {landing4Config.waitlist.form.email.label}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={landing4Config.waitlist.form.email.placeholder}
                                    className="w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none text-[rgb(var(--text))]"
                                    style={{
                                        background: "rgb(var(--card))",
                                        borderColor: errors.email
                                            ? "#ef4444"
                                            : "rgba(var(--border))",
                                        boxShadow: errors.email
                                            ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                                            : undefined,
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = "rgb(var(--accent))";
                                        e.target.style.boxShadow =
                                            "0 0 0 4px rgba(var(--accent) / 0.1)";
                                    }}
                                    onBlur={(e) => {
                                        if (!errors.email) {
                                            e.target.style.borderColor = "rgba(var(--border))";
                                            e.target.style.boxShadow = "none";
                                        }
                                    }}
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-[rgb(var(--text))] mb-2"
                                >
                                    {landing4Config.waitlist.form.phone.label}
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder={landing4Config.waitlist.form.phone.placeholder}
                                    className="w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none text-[rgb(var(--text))]"
                                    style={{
                                        background: "rgb(var(--card))",
                                        borderColor: errors.phone
                                            ? "#ef4444"
                                            : "rgba(var(--border))",
                                        boxShadow: errors.phone
                                            ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
                                            : undefined,
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = "rgb(var(--accent))";
                                        e.target.style.boxShadow =
                                            "0 0 0 4px rgba(var(--accent) / 0.1)";
                                    }}
                                    onBlur={(e) => {
                                        if (!errors.phone) {
                                            e.target.style.borderColor = "rgba(var(--border))";
                                            e.target.style.boxShadow = "none";
                                        }
                                    }}
                                />
                                {errors.phone && (
                                    <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                                )}
                            </div>

                            {/* Role selection */}
                            <div>
                                <label className="block text-sm font-medium text-[rgb(var(--text))] mb-3">
                                    {landing4Config.waitlist.form.role.label}
                                </label>
                                <div className="flex gap-4">
                                    {landing4Config.waitlist.form.role.options.map((option) => (
                                        <label
                                            key={option.value}
                                            className="flex-1 cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="role"
                                                value={option.value}
                                                checked={formData.role === option.value}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <div
                                                className="px-4 py-3 rounded-xl text-center transition-all duration-300"
                                                style={{
                                                    background:
                                                        formData.role === option.value
                                                            ? "rgb(var(--accent))"
                                                            : "rgb(var(--card))",
                                                    color:
                                                        formData.role === option.value
                                                            ? "white"
                                                            : "rgb(var(--text))",
                                                    border:
                                                        formData.role === option.value
                                                            ? "1px solid rgb(var(--accent))"
                                                            : "1px solid rgba(var(--border))",
                                                }}
                                            >
                                                <span className="text-sm font-medium">
                                                    {option.label}
                                                </span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-5 rounded-xl font-medium text-white transition-all duration-500 hover:scale-[1.02] active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                style={{
                                    background: "rgb(var(--accent))",
                                    boxShadow: "var(--shadow-gold)",
                                }}
                            >
                                {isSubmitting
                                    ? "Joining..."
                                    : landing4Config.waitlist.form.submit}
                            </button>

                            {/* Error message */}
                            {status === "error" && (
                                <p className="text-center text-sm text-red-500 animate-scale-in">
                                    {landing4Config.waitlist.form.error}
                                </p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
