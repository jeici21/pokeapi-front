import { API_URL, TPokemon } from "./config"

export const getAllPokemon = async () => {
    const response = await fetch(`${API_URL}`)
    return response.json() as Promise<TPokemon[]>
}