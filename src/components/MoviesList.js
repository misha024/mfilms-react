import React, { useEffect, useState } from 'react';

import { getMovies } from '../api/apiKinopoisk';
import {DEBUG} from "../api/secrets";

import {MovieItem, MovieItemPlaceholder} from './MovieItem'

import {loadSettings} from "../utils/SettingsManager";

import '../styles/MoviesList.css';
import {useRequestCounter} from "../api/apiRequestCounter";


const MoviesList = ({ type }) => {
    const [movies, setMovies] = useState([]);
    const {incrementCounter} = useRequestCounter()

    useEffect(() => {
        const fetchMovies = async () => setMovies(
            await getMovies(type, incrementCounter)
        )
        fetchMovies();
    }, [type]);

    if (DEBUG) console.log(movies);

    const settings = loadSettings()
    const {quantity_card} = settings

    const [placeholderItems, setPlaceholderItems] = useState([]);
    useEffect(() => {
        const items = [];
        for (let i = 0; i < quantity_card; i++) {
            items.push(i);
        }
        setPlaceholderItems(items);
    }, [quantity_card]);

    return (
        <>
            {movies === null ? (
                <h1 className={"message"}>Ошибка сервера</h1>
            ) : !movies.length ? placeholderItems.map(i => {
                return <MovieItemPlaceholder key={i} />
            }) : movies && movies.map(movie => {
                return <MovieItem key={movie.id} movie={movie} settings={settings} />}
            )}
        </>
    );
}

export default MoviesList;