import {Link} from "react-router-dom";
import React from "react";


export const MovieItem = ({movie, settings}) => {
    const {show_poster, show_name, show_description} = settings

    return (
        <Link className={"film-card"} to={`/search/${movie['id']}`} key={movie['id']}>
            <div className={show_poster ? "card-img" : "hidden"} style={{background: `url(${movie.poster['previewUrl']})`}}></div>
            <h4 className={show_name ? "card-name" : "hidden"}>{movie['name']}</h4>
            <h5 className={show_description ? "card-title" : "hidden"}>{movie['shortDescription']}</h5>
        </Link>
    )
}

export const MovieItemPlaceholder = ({key}) => (
    <Link className={"film-card placeholder"} to={`#`} key={key}>
        <div className={"card-img"} style={{background: `#313131`}}></div>
        <h4 className={"card-name"}>PRELOADER</h4>
        <h5 className={"card-title"}>PRELOADER PRELOADER PRELOADER PRELOADER PRELOADER PRELOADER PRELOADER PRELOADER PRELOADER PRELOADER</h5>
    </Link>
)