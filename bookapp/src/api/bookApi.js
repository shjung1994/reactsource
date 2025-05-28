import axios from "axios";

export const API_SERVER_HOST = "http://localhost:8080/api/books";

export const getList = async () => {
    const res = await axios.get(API_SERVER_HOST);
    return res.data;
};
export const getBook = async (id) => {
    const res = await axios.get(`${API_SERVER_HOST}/${id}`);
    return res.data;
};
export const postBook = () => {};
export const putBook = () => {};
export const removeBook = () => {};
