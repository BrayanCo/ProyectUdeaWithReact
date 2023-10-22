import pricipalPage from "../images/logo.png";
import cellPhone from "../images/telefono.png";
import email from "../images/gmail.png";
import direction from "../images/ubicación.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";

export const HomeApp = () => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Home</title>
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
                            src={pricipalPage}
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
                                <a className="nav-link active" aria-current="page" href="home.html">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Opciones de Usuario
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Perfil
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Carrito de compras
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Historial de compras
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Configuración
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="index.html">
                                            Cerrar Sesion
                                        </a>
                                    </li>
                                </ul>
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
            <div className="container">
                <div className="row">
                    {/* Elementos generados a partir del JSON */}
                    <main id="items" className="col-sm-10 row" />
                    {/* Carrito */}
                    <aside className="col-sm-2">
                        <h2>Carrito de Compras</h2>
                        {/* Elementos mostrados en el carrito */}
                        <ul id="carrito" className="list-group" />
                        <hr />
                        {/* Precio total de la compra */}
                        <p className="text-right">
                            Total: <span id="total" />$
                        </p>
                        <button id="boton-comprar" className="btn btn-success">
                            Comprar
                        </button>
                        <button id="boton-vaciar" className="btn btn-danger">
                            Vaciar
                        </button>
                    </aside>
                </div>
            </div>
            <footer>
                <div className="contact">
                    <h4>Contactanos</h4>
                </div>
                <div className="row w-100">
                    <div className="left col-4">
                        <p>
                            <a href="admin.html">Brayan Collazos</a>
                        </p>
                        <p>
                            <img
                                src={cellPhone}
                                title="Telefono Empresa"
                                width={30}
                                height={30}
                            />{" "}
                            3204036357
                        </p>
                        <p>
                            <img
                                src={email}
                                title="Correo Empresa"
                                width={25}
                                height={20}
                            />
                            agrocentrobarbosa@gmail.com
                        </p>
                        <p>
                            <img
                                src={direction}
                                title="Ubicación Negocio"
                                width={30}
                                height={30}
                            />
                            Cra 7 10-12
                        </p>
                    </div>
                    <div className="imageIndex col-4">
                        <a className="navbar-brand" href="index.html">
                            <img
                                src={pricipalPage}
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
                                src={Facebook}
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
                                src={Instagram}
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
                                src={Twitter}
                                title="Twitter Agrocentro"
                                width={50}
                                height={50}
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
};
