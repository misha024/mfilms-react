import MoviesList from "../components/MoviesList";
import '../styles/MovieeListPage.css';

const MoviesListPage = (keys) => {
    return (
        <>
            <h1 className={"page-name"}>{keys.pageName}</h1>
            <div className="films-container">
                <MoviesList type={keys.pageType}/>
            </div>
        </>
    );
}

export default MoviesListPage