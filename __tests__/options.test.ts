import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { IListAvailable } from "../src/data/interface/IListAvailable";
import { IOrder } from "../src/data/interface/IOrder";
import { OrderDTO } from "../src/controllers/OrderDTO";
import { Order, getAllBroths, getAllProteins } from "../src/data/options";
const mock = new MockAdapter(axios);

describe("Options Service", () => {
    const BASE_URL = "https://api.tech.redventures.com.br";
    const API_KEY = "test-api-key";

    beforeAll(() => {
        process.env.API_KEY = API_KEY;
    });

    afterEach(() => {
        mock.reset();
    });

    it("should fetch all broths", async () => {
        const broths: IListAvailable[] = [
            {
                id: "1",
                imageInactive: "",
                imageActive: "",
                description: "Broth 1",
                name: "Broth 1",
                price: 10,
            },
            {
                id: "2",
                imageInactive: "",
                imageActive: "",
                description: "Broth 2",
                name: "Broth 2",
                price: 12,
            },
        ];
        mock.onGet(`${BASE_URL}/broths`).reply(200, broths);

        const result = await getAllBroths();
        expect(result).toEqual(broths);
    });

    it("should fetch all proteins", async () => {
        const proteins: IListAvailable[] = [
            {
                id: "1",
                imageInactive: "",
                imageActive: "",
                description: "Protein 1",
                name: "Protein 1",
                price: 15,
            },
            {
                id: "2",
                imageInactive: "",
                imageActive: "",
                description: "Protein 2",
                name: "Protein 2",
                price: 18,
            },
        ];
        mock.onGet(`${BASE_URL}/proteins`).reply(200, proteins);

        const result = await getAllProteins();
        expect(result).toEqual(proteins);
    });

    it("should place an order successfully", async () => {
        const broths: IListAvailable[] = [
            {
                id: "1",
                imageInactive: "",
                imageActive: "",
                description: "Broth 1",
                name: "Broth 1",
                price: 10,
            },
        ];
        const proteins: IListAvailable[] = [
            {
                id: "1",
                imageInactive: "",
                imageActive: "",
                description: "Protein 1",
                name: "Protein 1",
                price: 15,
            },
        ];
        const order: IOrder = { id: "1", description: "Order 1", image: "" };

        mock.onGet(`${BASE_URL}/broths`).reply(200, broths);
        mock.onGet(`${BASE_URL}/proteins`).reply(200, proteins);
        mock.onPost(`${BASE_URL}/orders`).reply(200, order);

        const orderDTO: OrderDTO = { brothId: "1", proteinId: "1" };
        const result = await Order(orderDTO);

        expect(result).toEqual(order);
    });

    it("should throw error for invalid brothId", async () => {
        const broths: IListAvailable[] = [
            {
                id: "1",
                imageInactive: "",
                imageActive: "",
                description: "Broth 1",
                name: "Broth 1",
                price: 10,
            },
        ];
        const proteins: IListAvailable[] = [
            {
                id: "1",
                imageInactive: "",
                imageActive: "",
                description: "Protein 1",
                name: "Protein 1",
                price: 15,
            },
        ];

        mock.onGet(`${BASE_URL}/broths`).reply(200, broths);
        mock.onGet(`${BASE_URL}/proteins`).reply(200, proteins);

        const orderDTO: OrderDTO = { brothId: "2", proteinId: "1" };

        await expect(Order(orderDTO)).rejects.toThrow("Invalid brothId");
    });

    it("should throw error for invalid proteinId", async () => {
        const broths: IListAvailable[] = [
            {
                id: "1",
                imageInactive: "",
                imageActive: "",
                description: "Broth 1",
                name: "Broth 1",
                price: 10,
            },
        ];
        const proteins: IListAvailable[] = [
            {
                id: "1",
                imageInactive: "",
                imageActive: "",
                description: "Protein 1",
                name: "Protein 1",
                price: 15,
            },
        ];

        mock.onGet(`${BASE_URL}/broths`).reply(200, broths);
        mock.onGet(`${BASE_URL}/proteins`).reply(200, proteins);

        const orderDTO: OrderDTO = { brothId: "1", proteinId: "2" };

        await expect(Order(orderDTO)).rejects.toThrow("Invalid proteinId");
    });
});
