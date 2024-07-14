

function HomeAuth(keys) {
    return (
        <>
        <h1 className={"page-name"}>Привет - {keys.userName}!</h1>
        <h5>Вот фильмы по вашим предпочтениям:</h5>
        </>
    )
}

function HomeNotAuth(keys) {
    return (
        <>
            <h1 className={"page-name"}>Добро пожаловать на {keys.siteName}!</h1>
            <h5>Чтобы посмотреть фильм вам требуется зарегестрироватся</h5>
            <button>Регистрация</button>
        </>
    )
}

export {HomeAuth, HomeNotAuth}