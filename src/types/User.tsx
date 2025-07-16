import { ZodType, z } from "zod";

export type User = {
    id: number;
    business_name: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    is_staff: boolean;

    permissions: string[];
    is_superuser: boolean
    date_joined: string;
    transaction_count: number;
}

export type UpdateUser = {
    first_name: string;
    last_name: string;
    email: string;
} 

export const UpdateUserSchema: ZodType<UpdateUser> = z.object({
    email: z.string().email({
        message: "Invalid email"
    }),
    first_name: z.string().min(1, {
        message: "Too short first name"
    }),
    last_name: z.string().min(1, {
        message: "Too short last name"
    })
})