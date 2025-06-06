import { useEffect, useState } from "react";
import axios from "axios";

// import styles from "./FilmsList.module.css";

export const FilmsList = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get('https://ghibliapi.vercel.app/films')
        .then(response => {
            setFilms(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            {films.map(film => (
                <p>Nome: {film.title}, Diretor: {film.director}</p>
            ))}
        </div>
    )
}