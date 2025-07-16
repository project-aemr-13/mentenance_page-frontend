
import {authStorageToken, authStorageUser} from "../config/constants/StorageKeys";
import type {AuthResponse, AuthToken} from "../types/Auth";
import type { User } from "../types/User";


const setToken = (token: AuthToken): void => {
    localStorage.setItem(authStorageToken, token)
}

const getToken = (): AuthToken | null => {
    return getData<AuthResponse>(authStorageUser)?.access ?? null
}

const saveData = (key: string, data: unknown) => localStorage.setItem(key, JSON.stringify(data))

function getData<T>(key: string): T | null {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
}

const removeData = (key: string) => localStorage.removeItem(key);

const resetLocalStorage = () => localStorage.clear()

const clearToken = () => localStorage.removeItem(authStorageToken)

const getUserToken = (): AuthToken | null => {
    return getData<AuthResponse>(authStorageUser)?.access ?? null
}

const getUser = (): User | null => {
    return getData<AuthResponse>(authStorageUser)?.user ?? null
}

const updateUserData = (user: User | null) => {
    const data = getData<AuthResponse>(authStorageUser);
    if (data && user) {
        saveData(authStorageUser, { ...data, user });
        return true
    }
    return false
}

export {
    setToken,
    getToken,
    clearToken,
    saveData,
    getData,
    getUser,
    removeData,
    getUserToken,
    resetLocalStorage,
    updateUserData
}