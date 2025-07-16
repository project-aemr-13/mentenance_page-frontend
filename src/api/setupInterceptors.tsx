import type { AxiosInstance } from "axios";
import { getData, getUserToken, removeData, saveData } from "../utils/localStorage";
import GenericApi from "./genericAPI";
import type { AuthResponse } from "../types/Auth";
import { authStorageUser } from "../config/constants/StorageKeys";
import { ApiRoutes } from "../config/routes/ApiRoutes";

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];
let tries = 0;
const maxTries = 3;

const onRefreshed = (token: string) => {
    refreshSubscribers.forEach(cb => cb(token));
    refreshSubscribers = [];
};


export const setupInterceptors = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use((config) => {
        const token = getUserToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;


            if (error.response?.status === 401 && window.location.pathname !== '/login') {
                if (tries >= maxTries) {
                    redirectLogin();
                    return Promise.reject(error);
                }

                if (!isRefreshing) {
                    tries++;
                    isRefreshing = true;

                    try {
                        const loginData = getData<AuthResponse>(authStorageUser);
                        const loginResponse = await GenericApi.post<AuthResponse>(ApiRoutes.REFRESH_TOKEN, {
                            refresh: loginData?.refresh
                        });


                        saveData(authStorageUser, {
                            ...loginResponse.data,
                            user: loginData?.user
                        });

                        if(loginResponse.data?.access) {
                            onRefreshed(loginResponse.data?.access);
                        }else{
                            redirectLogin()
                        }

                        isRefreshing = false;
                        tries = 0;

                        return axiosInstance(originalRequest);

                    } catch (refreshError) {
                        console.error("Failed to refresh token", refreshError);
                        redirectLogin();
                        return Promise.reject(refreshError);
                    }
                }

            }

            return Promise.reject(error);
        }
    );
};

const redirectLogin = () => {
    window.location.href = '/login';
    removeData(authStorageUser);
    tries = 0;
};