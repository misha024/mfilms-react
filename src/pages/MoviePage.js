import '../styles/MoviePage.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSingleMovie} from "../api/apiKinopoisk";
import {DEBUG} from "../api/secrets";
import {useRequestCounter} from "../api/apiRequestCounter";

const MoviePage = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState([]);

    const {incrementCounter} = useRequestCounter()

    useEffect(() => {
        const fetchSingleMovie = async () => setMovie(
            await getSingleMovie(id, incrementCounter)
        )
        fetchSingleMovie();
    }, [id]);

    if (DEBUG) console.log(movie);

    const urlMoviePoster = movie.poster ? movie.poster.url : null
    return movie ? (
        <div className="movie-container">
            <img src={urlMoviePoster} alt={movie.name}/>
            <div className="movie-info">
                <h4 className="movie-name">{movie.name}</h4>
                <p className="movie-description">{movie.description}</p>
            </div>
        </div>
    ) : (<h2>Ошибка сервера</h2>)
}

export default MoviePage