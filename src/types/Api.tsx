import { AxiosError } from "axios";

export type ApiData = {
    [key: string]: unknown;
}

export interface ApiResponse<T> {
    data: T | null;
    error: AxiosError | Error | null;
}

export interface ApiError<T> {
    message: string;
    error: AxiosError<T> | Error | null;
}