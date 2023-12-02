import { ENV } from "@/utils";
import {jwtDecode} from "jwt-decode";
 class Token {
    setToken(token){
        localStorage.setItem(ENV.TOKEN, token)
    }

    removeToken(){
        return localStorage.removeItem(ENV.TOKEN)
    }

    getToken(){
        return localStorage.getItem(ENV.TOKEN)
    }

    hasExpired(token){
        console.log("tokendd", token)
        const tokenDecoded = jwtDecode(token)
        const expiredDate = tokenDecoded.exp * 1000;
        const currentDate = new Date().getTime();
       return Boolean(currentDate > expiredDate);
    }
}

export const tokenInstance = new Token;