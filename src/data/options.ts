import axios from "axios";
import { IListAvailable } from "./interface/IListAvailable";
import { IOrder } from "./interface/IOrder";
import { OrderDTO } from "../controllers/OrderDTO";
import { config } from "dotenv";

config();

const BASE_URL = "https://api.tech.redventures.com.br";

export const getAllBroths = async (): Promise<IListAvailable[]> => {
    try {
        const result = await axios.get<IListAvailable[]>(`${BASE_URL}/broths`, {
            headers: { "x-api-key": process.env.API_KEY },
        });
        return result.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data.message || error.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
};

export const getAllProteins = async (): Promise<IListAvailable[]> => {
    try {
        const result = await axios.get<IListAvailable[]>(
            `${BASE_URL}/proteins`,
            {
                headers: { "x-api-key": process.env.API_KEY },
            }
        );
        return result.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data.message || error.message);
        } else {
            throw new Error("An unexpected error occurred");
        }
    }
};

export const Order = async (body: OrderDTO): Promise<IOrder> => {
    try {
        const allBroths = await getAllBroths();
        const allProteins = await getAllProteins();

        const validateBrothsId = allBroths.find(
            (broth) => broth.id === body.brothId
        );

        if (!validateBrothsId) {
            throw new Error("Invalid brothId");
        }

        const validateProteinsId = allProteins.find(
            (protein) => protein.id === body.proteinId
        );
        if (!validateProteinsId) {
            throw new Error("Invalid proteinId");
        }

        const result = await axios.post<IOrder>(`${BASE_URL}/orders`, body, {
            headers: { "x-api-key": process.env.API_KEY },
        });
        return result.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data.message || error.message);
        } else {
            throw new Error(error);
        }
    }
};
