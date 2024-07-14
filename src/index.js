import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom';
import {HomeAuth, HomeNotAuth} from "./pages/home";
import MoviesListPage from "./pages/MoviesListPage";

import './styles/reset.css'
import './styles/index.css'
import SettingsPage from "./pages/SettingsPage";
import MoviePage from "./pages/MoviePage";

import {DEBUG} from "./api/secrets";
import {RequestCounterProvider, useRequestCounter} from "./api/apiRequestCounter";

function Page() {
    const siteName = "MFILMS"
    const isAuth = false
    const userName = "Николай"

    const { requestCounter } = useRequestCounter();

    return (
        <Router>
                <nav className="menu-container">
                    <ul className="menu">
                        <Link to={"/"}><h1 className="main-logo">{siteName.slice(0, 2)}</h1></Link>
                        <NavLink to="/movie" activeClassName="active"><li className="menu-element">Фильмы</li></NavLink>
                        <NavLink to="/tv-series" activeClassName="active"><li className="menu-element">Сериалы</li></NavLink>
                        <NavLink to="/cartoon" activeClassName="active"><li className="menu-element">Мультфильмы</li></NavLink>
                        <NavLink to="/anime" activeClassName="active"><li className="menu-element">Аниме</li></NavLink>
                    </ul>
                    <Link to={"/settings"}>
                        <div className="link-block">
                            <i className="link-icon fa fa-cog"></i>
                            <h5 className="link-title">Настройки</h5>
                        </div>
                    </Link>
                </nav>

                <main>
                <Routes>
                    <Route path="/" element={isAuth ? <HomeAuth userName={userName} /> : <HomeNotAuth siteName={siteName} />} />
                    <Route path="/movie" element={<MoviesListPage pageName={"Фильмы"} pageType={"movie"}/>} />
                    <Route path="/tv-series" element={<MoviesListPage pageName={"Сериалы"} pageType={"tv-series"}/>} />
                    <Route path="/cartoon" element={<MoviesListPage pageName={"Мультфильмы"} pageType={"cartoon"}/>} />
                    <Route path="/anime" element={<MoviesListPage pageName={"Аниме"} pageType={"anime"}/>} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/search/:id" element={<MoviePage />} />
                </Routes>
                </main>
                {DEBUG && (
                    <div className="debug-container">
                        requests: {requestCounter}
                    </div>
                )}
        </Router>
    );
}

const root = ReactDOM.createRoot(document.querySelector('body'));
root.render(
    <RequestCounterProvider>
        <Page/>
    </RequestCounterProvider>
);