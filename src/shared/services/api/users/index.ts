import { env } from "../../../environment";
import { api } from "../../axios";

interface IUserList {
    id: number;
    name: string;
    email: string;
    cityId: number;
}

interface IUserDetail extends IUserList {}

type TUsersWithFullCount = {
    data: IUserList[],
    fullCount: number,
}

const getAll = async (page: number = 10): Promise<TUsersWithFullCount | Error>=> {
    try {
        const url = `/users?_page=${page}&_limit=${env.VITE_LIMIT}`; 
        const { data, headers } = await api.get(url);

        if (data) {
            return {
                data: data,
                fullCount: Number(headers["x-total-count"]) || Number(env.VITE_LIMIT)
            }
        }
    
        return new Error("Erro ao lista os usuários");
    } catch (error) {
        console.error((error as { message: string }).message || "Erro ao lista os usuários");
        return new Error("Erro ao lista os usuários");
    }
};

const create = async (): Promise<any>=> {
    try {

    } catch (error) {
        
    }
};

const getById = async (id: number): Promise<IUserDetail | Error>=> {
    try {
        const { data } = await api.get(`/users/${id}`);
        
        return data;
    } catch (error) {
        console.error((error as { message: string }).message || "Erro ao pesquisar o usuário");
        return new Error("Erro ao pesquisar o usuário");
    }
}; 

const updateById = async (): Promise<any>=> {
    try {
        
    } catch (error) {
        
    }
}; 

const deleteById = async (): Promise<any>=> {
    try {
        
    } catch (error) {
        
    }
};  

export const usersServices = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}