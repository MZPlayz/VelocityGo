
import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js';

export const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters.").max(50),
  lastName: z.string().min(2, "Last name must be at least 2 characters.").max(50),
  contactMethod: z.enum(['email', 'phone']),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  phone: z.string().optional().or(z.literal('')),
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions.",
  })
}).refine((data) => {
    if (data.contactMethod === 'email') {
        return !!data.email && z.string().email().safeParse(data.email).success;
    }
    return true;
}, {
    message: "A valid email is required.",
    path: ["email"],
}).refine((data) => {
    if (data.contactMethod === 'phone') {
        return !!data.phone && isValidPhoneNumber(data.phone || '', 'BD');
    }
    return true;
}, {
    message: "A valid phone number is required.",
    path: ["phone"],
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"]
});
