export type TPokemon = {
    id: string,
    nombre: string,
    descripcion: string,
    tipo1: string,
    tipo2?: string,
    evolucion?: string,
    altura: number,
    peso: number,
    img: string
}

export const API_URL = 'https://pokeapi-back-g5nq.onrender.com/'