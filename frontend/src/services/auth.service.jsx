import { API_URL } from "@/api";


const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY || "user_";


export class AuthService {
    async login(data = {}) {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json());

        if(response.access_token){
            localStorage.setItem(TOKEN_KEY, response.access_token);
        }
    }

    logout(){
        localStorage.removeItem(TOKEN_KEY);
    }

    saveUser(user = undefined) {
        if (!user) return; 
        localStorage.setItem(TOKEN_KEY, JSON.stringify(user))
    }

    getUser(){
        try {
            return JSON.parse(localStorage.getItem(TOKEN_KEY));
        }catch(err){
            return {};
        }
    }

}


export const authService = new AuthService();