import styles from "./FilmsCard.module.css";
import { filmsImages } from "../../data/FilmsImages.js"

export const FilmsCard = ({ film }) => {
    return (
        <div className={styles.card}>
            <div>
                <div>
                    <img className={styles.cardImg} src={filmsImages[film.title]} alt={film.title} />
                    {console.log('caminho: ', filmsImages[film.title])}
                    {console.log('título: ', film.title)}
                </div>
                <div>
                    <h2 className={styles.cardTitle}>{film.title}</h2>
                    <h3><strong>Diretor:</strong> {film.director}</h3>
                    <div>
                        <p><strong>Ano:</strong> {film.release_date}</p>
                        <p><strong>Duração:</strong> {film.running_time} min</p>
                    </div>
                </div>
            </div>
            

        </div>
    )
}