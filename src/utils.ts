import axios from "axios";

export const API = `https://fake-store-api.mock.beeceptor.com/api`;

export const getRequest = async(path: string, defaultData:any) => {
    try {
        const { data } = await axios.get(`${API}/${path}`);
        if(data){
            return { success: true, data: data, message: "Success" }
        }
        return { success: false,  data: defaultData, message: "Couldn't fetch data" }
    }catch(err){
        return { success: false,  data: defaultData, message: "An error occurred" }
    }
}

export const postRequest = async(path: string, payload: any, defaultData:any) => {
    try {
        const { data } = await axios.post(`${API}/${path}`, payload);
        if(data){
            return { success: true, data: data, message: "Success" }
        }
        return { success: false,  data: defaultData, message: "Couldn't fetch data" }
    }catch(err){
        return { success: false,  data: defaultData, message: "An error occurred" }
    }
}

export const putRequest = async(path: string, payload: any, defaultData:any) => {
    try {
        const { data } = await axios.put(`${API}/${path}`, payload);
        if(data){
            return { success: true, data: data, message: "Success" }
        }
        return { success: false,  data: defaultData, message: "Couldn't fetch data" }
    }catch(err){
        return { success: false,  data: defaultData, message: "An error occurred" }
    }
}