import api from "./api";

export async function getClima(cidade: string) {
    try {
        const response = await api.get(`/clima?cidade=${cidade}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar clima:", error);
        throw error;
    }
}
