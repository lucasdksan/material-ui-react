import { env } from "../../../environment";
import { api } from "../../axios";

export interface IUserListProps {
    id: number;
    name: string;
    email: string;
    cityId: number;
}

interface IUserDetailProps extends IUserListProps {}

type TUsersWithFullCountProps = {
    data: IUserListProps[],
    fullCount: number,
}

const getAll = async (page: number = 10): Promise<TUsersWithFullCountProps | Error>=> {
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

const create = async (data: Omit<IUserDetailProps, "id">): Promise<Number | Error>=> {
    try {
        const result = await api.post("/users", data);

        if(result) return result.data.id;

        return new Error("Erro ao criar usuário");
    } catch (error) {
        console.error((error as { message: string }).message || "Erro ao criar usuário");
        return new Error("Erro ao criar usuário");
    }
};

const getById = async (id: number): Promise<IUserDetailProps | Error>=> {
    try {
        const { data } = await api.get(`/users/${id}`);
        
        if(data) return data;

        return new Error("Erro ao pesquisar o usuário");
    } catch (error) {
        console.error((error as { message: string }).message || "Erro ao pesquisar o usuário");
        return new Error("Erro ao pesquisar o usuário");
    }
}; 

const updateById = async (data: Omit<IUserDetailProps, "id">, id: number): Promise<any>=> {
    try {
        const result = await api.put(`/users/${id}`, data);

        if(result) return result.data.id;

        return new Error("Erro ao atualizar o usuário");
    } catch (error) {
        console.error((error as { message: string }).message || "Erro ao atualizar o usuário");
        return new Error("Erro ao atualizar o usuário");
    }
}; 

const deleteById = async (id: number): Promise<void | Error>=> {
    try {
        await api.put(`/users/${id}`);
    } catch (error) {
        console.error((error as { message: string }).message || "Erro ao deletar o usuário");
        return new Error("Erro ao deletar o usuário");
    }
};  

export const usersServices = {
    create,
    getAll,
    getById,
    updateById,
    deleteById
}