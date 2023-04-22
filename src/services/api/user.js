import { settings } from "@/constants";

export const userLogin = async (data) => {
    const resp = await fetch(`${settings.baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    }).then(res => res.json());
    return resp;
};

export const userRegister = async (data) => {
    const resp = await fetch(`${settings.baseUrl}/register`, {
        method: "POST",
        body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password
        })
    }).then(res => res.json());
    return resp;
};