import styles from "./FilmsCard.module.css";

export const FilmsCard = ({ film }) => {
    return (
        <div className={styles.card}>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h2>{film.title}</h2>
                    <h3>Diretor: {film.director}</h3>
                    <div>
                        <p>Ano: {film.release_date}</p>
                        <p>Duração: {film.running_time} min</p>
                    </div>
                </div>
            </div>
            <p>{film.description}</p>

        </div>
    )
}