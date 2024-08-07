import { toast } from "react-toastify";

export function saveJWTtoLocalStorage(jwt: string): boolean {
    localStorage.setItem('auth-jwt', jwt);
    return true;
}

export function getJWTfromLocalStorage(): string | null {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('auth-jwt');
    } else {
        return null;
    }
}

export function deleteJWTfromLocalStorage(): boolean {
    if (getJWTfromLocalStorage() === null) {
        return false;
    }
    localStorage.removeItem('auth-jwt');
    return true;
}

export const loggout = () => {
    if (deleteJWTfromLocalStorage() === false) {
        toast.warning('Bạn chưa đăng nhập vào hệ thống')
    } else {
        toast.success('Đăng xuất thiết bị thành công')
    }
}

export function saveDarkMode(darkMode: boolean): void {
    localStorage.setItem('is-dark-mode', JSON.stringify(darkMode));
}

export function getDarkMode(): boolean {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('is-dark-mode') || 'false');
    }
    return false;
}