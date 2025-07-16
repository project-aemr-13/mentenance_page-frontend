import { ZodType, z } from "zod";
import type { User } from "./User";

export type AuthToken = string;
export type RefreshToken = string;

export type LoginRequest = {
    email: string
    password: string
}

export interface TokenResponse {
    access: AuthToken;
    refresh: RefreshToken;
}

export interface AuthResponse extends TokenResponse {
    user: User;
}

export type RegisterRequest = {
    first_name: string
    last_name: string
    email: string
    password: string
    terms: boolean
}

export type ChangePasswordRequest = {
    old_password: string
    new_password: string
    confirm_password: string
}

export type ResetPasswordRequest = {
    new_password: string
}

export const LoginRequestSchema: ZodType<LoginRequest> = z.object({
    email: z.string().email({
        message: "Invalid email"
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    }),
})

export const RegisterRequestSchema: ZodType<RegisterRequest> = z.object({
    email: z.string().email({
        message: "Invalid email"
    }),
    password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters long"
        })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[!@#$%^&*(),.?":{}_=+|<>-]/, { message: "Password must contain at least one special character" }),
    first_name: z.string().min(1, {
        message: "Too short first name"
    }),
    last_name: z.string().min(1, {
        message: "Too short last name"
    }),
    terms: z.boolean()
})

export const ChangePasswordRequestSchema: ZodType<ChangePasswordRequest> = z.object({
    old_password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    }),
    new_password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters long"
        })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[!@#$%^&*(),.?":{}_=+|<>-]/, { message: "Password must contain at least one special character" }),
    confirm_password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    })

}).refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
});

export type ForgotPasswordRequest = {
    email: string
}

export const ForgotPasswordRequestSchema: ZodType<ForgotPasswordRequest> = z.object({
    email: z.string().email({
        message: "Invalid email"
    })
})

export const ResetPasswordRequestSchema: ZodType<ResetPasswordRequest> = z.object({
    new_password: z.string()
        .min(8, {
            message: "Password must be at least 8 characters long"
        })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[!@#$%^&*(),.?":{}_=+|<>-]/, { message: "Password must contain at least one special character" }),
})



