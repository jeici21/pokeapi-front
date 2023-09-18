import Modal from 'react-modal'
import { TPokemon } from '../api/config';
import styles from '../styles/PokemonDetails.module.css'

interface PokemonDetailsProps { pokemon: TPokemon; isOpen: boolean; onClose: () => void }

const PokemonDetails = ({ pokemon, isOpen, onClose }: PokemonDetailsProps) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Detalles del Pokémon"
            className={styles.modal}>
            <div className={styles.columna}>
                <div className={styles.fila1}>
                    <img src={pokemon.img} alt="Imagen pokémon" className={styles.pokemon} />
                </div>
                <div className={styles.fila2}>
                    <h2>{pokemon.id}. {pokemon.nombre}</h2>
                    <div className={styles.types}>
                        <img src={pokemon.tipo1} alt="Tipo 1" className={styles.type1} />
                        {pokemon.tipo2 && <img src={pokemon.tipo2} alt="Tipo 2" className={styles.type2} />}
                    </div>
                    <p>{pokemon.descripcion}</p>
                    <p><b>Altura: </b>{pokemon.altura}</p>
                    <p><b>Peso: </b>{pokemon.peso}</p>
                    <p><b>Evoluciona en: </b>{pokemon.evolucion ?? "-"}</p>
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </Modal>
    )
}

export default PokemonDetails