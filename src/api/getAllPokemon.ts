import { API_URL, TPokemon } from "./config"

export const getAllPokemon = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener los Pokémon");
    return response.json() as Promise<TPokemon[]>;
  } catch (error) {
    console.error(error);
    return [];
  }
}