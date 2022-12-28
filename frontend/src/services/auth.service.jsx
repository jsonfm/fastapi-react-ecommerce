import { API_URL } from "@/api";

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
            localStorage.setItem("user", response.access_token);
        }
    }

    async logout(data = {}){
        localStorage.removeItem("user");
    }


}