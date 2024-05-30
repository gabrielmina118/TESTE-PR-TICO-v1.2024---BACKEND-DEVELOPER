import { Request, Response } from "express";
import { Order, getAllBroths, getAllProteins } from "../data/options";
import { OrderDTO } from "./OrderDTO";
import { validateOrderDTO } from "../utils/validation";

export const getBroths = async (req: Request, res: Response) => {
    try {
        const broths = await getAllBroths();
        res.json(broths);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getProteins = async (req: Request, res: Response) => {
    try {
        const proteins = await getAllProteins();
        res.json(proteins);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const placeOrder = async (req: Request, res: Response) => {
    const data = req.body;

    if (!validateOrderDTO(data)) {
        return res.status(400).json({
            error: "Invalid data format. Broth and protein must be selected.",
        });
    }

    const { brothId, proteinId }: OrderDTO = data;

    try {
        const orderId = await Order({ brothId, proteinId });
        res.json({ orderId });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
