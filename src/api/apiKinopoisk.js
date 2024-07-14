import axios from "axios";

import {
    apiKinopoiskToken,
    DEBUG,
    apiUrl
} from "./secrets.js";

import {loadSettings} from "../utils/SettingsManager";


// Отправка GET-запроса
const getApi = async (query, incrementCounter) => {
    incrementCounter()

    const url = apiUrl + query
    const headers = {accept:'application/json', 'X-API-KEY': apiKinopoiskToken};

    return await axios.get(url, {headers: headers, method: 'GET',})
        .then(res => res.data)
        .catch(error => console.warn(error))
}


export const getMovies = async (type, incrementCounter, page) => {
    if (DEBUG) console.log("REQUEST DEBUG: get movies (start)");

    const {quantity_card} = loadSettings() || {}
    const selectFields = ['id', 'name', 'description', 'shortDescription', 'slogan', 'type', 'year', 'rating', 'poster', 'genres']
    const notNullFields = ['id', 'name', 'description', 'shortDescription', 'slogan', 'type', 'year', 'rating.kp', 'poster.url', 'genres.name']
    const moviesLimit = quantity_card > 250 ? 250 : quantity_card

    let queryUrl = `?type=${type}`
    queryUrl += `&page=${page || 1}`
    queryUrl += `&limit=${moviesLimit || 50}`
    selectFields.map(f=>queryUrl+=`&selectFields=${f}`)
    notNullFields.map(f=>queryUrl+=`&notNullFields=${f}`)
    const data = await getApi('movie' + queryUrl, incrementCounter)

    if (DEBUG) console.log(data);
    if (DEBUG) console.log("REQUEST DEBUG: get movies (finish)");

    return data ? data['docs'] : null;
}

export const getSingleMovie = async (id, incrementCounter) => {
    const query = `movie/${id}`
    const data = await getApi(query, incrementCounter)
    if (DEBUG) {console.log(data)}
    return data ? data : null;
}