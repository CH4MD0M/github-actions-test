import axios from "axios";

export const instance = axios.create({
    baseURL: "https://api.peacemarket.site/",
    headers: {
        "Content-Type": "application/json",
    },
});
