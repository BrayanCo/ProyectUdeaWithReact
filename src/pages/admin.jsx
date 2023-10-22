return (
    <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Administrador</title>
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
                            <a className="nav-link active" aria-current="page" href="#">
                                Invetario
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Historial De Compras
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Generar Registro de ventas
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <div className="row w-100 m-0 text-light">
            <div className="col-2 py-1 vh-100">
                <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-success rounded vh-100">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                    >
                        <svg className="bi me-2" width={40} height={32}>
                            <use xlinkHref="#bootstrap" style={{ width: 280 }} />
                        </svg>
                        <span className="fs-4">Menu</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a
                                href="admin.html"
                                className="nav-link text-white"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="admin.html" className="nav-link text-white">
                                Inventario
                            </a>
                        </li>
                        <li>
                            <a href="admin.html" className="nav-link text-white">
                                Historial De Compra
                            </a>
                        </li>
                        <li>
                            <a href="admin.html" className="nav-link text-white">
                                Genera Registro de ventas
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a
                            href="#"
                            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                            id="dropdownUser1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src="../images/Autor.png"
                                alt=""
                                width={32}
                                height={32}
                                className="rounded-circle me-2"
                            />
                            <strong>Brayan Collazos</strong>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-dark text-small shadow"
                            aria-labelledby="dropdownUser1"
                        >
                            <li>
                                <a className="dropdown-item" href="#">
                                    Configuración
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Perfil
                                </a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="index.html">
                                    Salir
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className="col-10 m-0"
                style={{
                    backgroundImage: 'url("../images/ImagenPrincipal.jpg")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            ></div>
        </div>
        <footer>
            <div className="contact">
                <h4>Contactanos</h4>
            </div>
            <div className="row w-100">
                <div className="left col-4">
                    <p>Brayan Collazos</p>
                    <p>
                        <img
                            src="../images/telefono.png"
                            title="Pagina Principal"
                            width={30}
                            height={30}
                        />{" "}
                        3204036357
                    </p>
                    <p>
                        <img
                            src="../images/gmail.png"
                            title="Pagina Principal"
                            width={25}
                            height={20}
                        />
                        agrocentrobarbosa@gmail.com
                    </p>
                    <p>
                        <img
                            src="../images/ubicación.png"
                            title="Pagina Principal"
                            width={30}
                            height={30}
                        />
                        Cra 7 10-12
                    </p>
                </div>
                <div className="imageIndex col-4">
                    <a className="navbar-brand" href="index.html">
                        <img
                            src="../images/logo.png"
                            title="Pagina Principal"
                            width={500}
                            height={100}
                        />
                    </a>
                </div>
                <div className="right col-4 m-0">
                    <a
                        className="navbar-brand"
                        href="https://es-la.facebook.com/agrocentro.barbosa.90/"
                    >
                        <img
                            src="../images/facebook.png"
                            title="Facebook Agrocentro"
                            width={50}
                            height={50}
                        />
                    </a>
                    <a
                        className="navbar-brand"
                        href="https://www.instagram.com/petshoptunja1/"
                    >
                        <img
                            src="../images/instagram.png"
                            title="Instagram Agrocentro"
                            width={50}
                            height={50}
                        />
                    </a>
                    <a
                        className="navbar-brand"
                        href="https://twitter.com/AgrocentroUY?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    >
                        <img
                            src="../images/twitter.png"
                            title="Twitter Agrocentro"
                            width={50}
                            height={50}
                        />
                    </a>
                </div>
            </div>
        </footer>
    </>
);