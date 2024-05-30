import { OrderDTO } from "../controllers/OrderDTO";

export const validateOrderDTO = (data: any): data is OrderDTO => {
    return (
        data &&
        typeof data.brothId === "string" &&
        typeof data.proteinId === "string"
    );
};
