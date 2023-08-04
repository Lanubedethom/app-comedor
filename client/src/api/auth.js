import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/api/v1",
});

export const loginRequest = async (user) => {
    try {
        const response = await instance.post('/auth/login', user);
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

// enviar codigo de estudiante
export const bookRequest = async (code) => {
    try {
        const response = await instance.post('/book', code);
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
}

