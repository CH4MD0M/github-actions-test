import { instance } from "./index";

export const signup = async (formData) => {
    const data = await instance.post("api/auth", formData);
    return data;
};
