import { defineStore } from 'pinia';

type user = {
    name: string;
    email: string;
}

type auth = {
    loggedIn: boolean;
    user: user | null;
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): auth => ({
        loggedIn: false,
        user: null,
    }),
    actions: {
        login(email: string, password: string) {
            if (email === 'puasa@gmail.com' && password === '30hari') {
                this.loggedIn = true;
                this.user = {
                    name: 'Arifitanto',
                    email,
                };

                return true;
            }
            return false;
        },
        logout() {
            this.loggedIn = false;
            this.user = null;
        }
    }
})