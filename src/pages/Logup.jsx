return (
    <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LogUp</title>
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
            <h1 className="formularioOne text-center pt-3 text-white">
                Formulario de Registro
            </h1>
            <div className="container pt-2">
                <div className="abs-left">
                    <div className="card px-5 py-1 rounded opacity-75">
                        <form action="Login.html">
                            <div className="mb-3">
                                <label htmlFor="namesOne" className="form-label text-black">
                                    Nombres
                                </label>
                                <input
                                    type="name"
                                    id="namesOne"
                                    className="form-control"
                                    style={{ width: 400 }}
                                    required=""
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="namesTwo" className="form-label text-black">
                                    Apellidos
                                </label>
                                <input
                                    type="name"
                                    id="namesTwo"
                                    className="form-control"
                                    style={{ width: 400 }}
                                    required=""
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="emailOne" className="form-label text-black">
                                    Correo Electronico
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailOne"
                                    aria-describedby="emailHelp"
                                    style={{ width: 400 }}
                                    required=""
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="PasswordOne" className="form-label text-black">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="PasswordOne"
                                    style={{ width: 400 }}
                                    required=""
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="PasswordTwo" className="form-label text-black">
                                    Confirmar Contraseña
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="PasswordTwo"
                                    style={{ width: 400 }}
                                    required=""
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="directionOne" className="form-label text-black">
                                    Dirección
                                </label>
                                <input
                                    type="direction"
                                    id="directionOne"
                                    className="form-control"
                                    style={{ width: 400 }}
                                    required=""
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onclick="verificarPassword()"
                            >
                                Registrarse
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    </>
);