return (
    <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Login</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="../styles/styles.css" />
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img
                        src="../images/logo.png"
                        title="Pagina Principal"
                        width={150}
                        height={30}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="Login.html">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Logup.html">
                                Logup
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link disabled"
                                aria-disabled="true"
                                href="home.html"
                            >
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <header>
            <div className="container pt-5">
                <div className="abs-center">
                    <div className="card px-5 py-5 rounded opacity-75">
                        <form action="home.html">
                            <div className="mb-3">
                                <label htmlFor="emailTwo" className="form-label">
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailTwo"
                                    aria-describedby="emailHelp"
                                    style={{ width: 400 }}
                                    required=""
                                />
                                <div id="emailHelp" className="form-text">
                                    Nunca compartiremos su correo electrónico con nadie más.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    style={{ width: 400 }}
                                    required=""
                                />
                            </div>
                            <div className="mb-3">
                                <p>
                                    <a href="">¿Olvidaste tu Contraseña?</a>
                                </p>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Iniciar Sesion
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    </>
);