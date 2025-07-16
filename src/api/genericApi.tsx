import type { ApiData, ApiResponse } from "../types/Api";
import api from "./api";
import axios, { AxiosError } from "axios";
import { getUserToken } from "../utils/localStorage";


class GenericApi {


    
    public static host: string = window.location.href
    public static baseUrl: string = new URL(this.host).origin + '/api'
    

    // public static baseUrl: string = 'https://leonext.ctrl13.ro/api';

    static handleAxiosError = (error: AxiosError<unknown> | null | Error) => {
        if (axios.isAxiosError(error)) {
            console.error('Request failed:', error.message);
            console.error('Status code:', error.response?.status);
            console.error('Response data:', error.response?.data);
            throw {
                error: error,
                data: null
            }
        }
        throw {
            error: error as Error,
            data: null
        }
    }

    static async get<T>(endPoint: string, newUrl?: string, callbackErr?: (data: T) => void): Promise<ApiResponse<T>> {

        const apiResponse: ApiResponse<T> = {
            data: null,
            error: null
        }

        try {
            const response = await api.get<T>(`${newUrl ?? this.baseUrl}${endPoint}`,
                {
                    headers: { 'Authorization': `Token ${getUserToken()}`, }
                });
            apiResponse.data = response.data;
            callbackErr?.(apiResponse.data);
            return apiResponse;
        } catch (error) {
           return this.handleAxiosError(error as Error)
        }
    }

    static async getById<T>(endPoint: string, id: number): Promise<ApiResponse<T>> {
        const apiResponse: ApiResponse<T> = {
            data: null,
            error: null
        }

        try {
            const response = await api.get<T>(`${this.baseUrl}${endPoint}/${id}`,
                {
                    headers: { 'Authorization': `Token ${getUserToken()}` }
                });
            apiResponse.data = response.data;
            return apiResponse;
        } catch (error) {
            return this.handleAxiosError(error as Error)
        }
    }

    static async post<T>(endPoint: string, data: ApiData | ApiData[], blobResponse?: boolean): Promise<ApiResponse<T>> {

        const apiResponse: ApiResponse<T> = {
            data: null,
            error: null
        }
    


        try {
            const response = await api.post<T>(`${this.baseUrl}${endPoint}`, data,
                blobResponse ? {
                    headers: { 'Authorization': `Token ${getUserToken()}`,},
                    responseType: 'blob'
                } : {
                    headers: { 'Authorization': `Token ${getUserToken()}`, 'Content-Type': 'application/json' }
                });
            apiResponse.data = response.data;
            return apiResponse;

        } catch (error) {
            return this.handleAxiosError(error as Error)
        }
    }

    static async put<T>(endPoint: string, data: ApiData): Promise<ApiResponse<T>> {

        const apiResponse: ApiResponse<T> = {
            data: null,
            error: null
        }


        try {
            const response = await api.put<T>(`${this.baseUrl}${endPoint}`, data,
                {
                    headers: { 'Authorization': `Token ${getUserToken()}`, }
                });
            apiResponse.data = response.data;
            return apiResponse;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Request failed:', error.message);
                console.error('Status code:', error.response?.status);
                console.error('Response data:', error.response?.data);
                apiResponse.error = error as Error;
                throw apiResponse;
            }
            apiResponse.error = error as Error;
            throw apiResponse;
        }
    }

    static async delete<T>(endPoint: string): Promise<ApiResponse<T>> {

        const apiResponse: ApiResponse<T> = {
            data: null,
            error: null
        }

        try {
            const response = await api.delete<T>(`${this.baseUrl}${endPoint}`,
                {
                    headers: { 'Authorization': `Token ${getUserToken()}`, }
                });
            apiResponse.data = response.data;
            return apiResponse;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Request failed:', error.message);
                console.error('Status code:', error.response?.status);
                console.error('Response data:', error.response?.data);
                apiResponse.error = error as Error;
                throw apiResponse;
            }
            apiResponse.error = error as Error;
            throw apiResponse;
        }
    }

    static async patch<T>(endPoint: string, data: ApiData): Promise<ApiResponse<T>> {

        const apiResponse: ApiResponse<T> = {
            data: null,
            error: null
        }

        try {
            const response = await api.patch<T>(`${this.baseUrl}${endPoint}`, data,
                {
                    headers: { 'Authorization': `Token ${getUserToken()}`, }
                });
            apiResponse.data = response.data;
            return apiResponse;
        } catch (error) {
            return this.handleAxiosError(error as Error)
        }
    }

}

export default GenericApi;