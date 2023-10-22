import imagenThree from "../images/imagenthree.jpg";
import pricipalPage from "../images/logo.png";
import cellPhone from "../images/telefono.png";
import email from "../images/gmail.png";
import direction from "../images/ubicación.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import "../styles/styles.css";

export const IndexApp = () => {

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>AgroCentro</title>
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
            <header>
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={imagenThree}
                                className="imageOfVision d-block w-100"
                                alt="..."
                            />
                            <div className="carousel-caption">
                                <h5>Quienes Somos</h5>
                                <p>Somos Agrocentro</p>
                                <p className="welcome">
                                    En Agrocentro, estamos comprometidos con el bienestar de tus
                                    queridas mascotas. Nos enorgullece ser tu fuente confiable de
                                    alimentos y productos de alta calidad para animales en Barbosa,
                                    Santander. Nuestra pasión por los animales y su salud nos impulsa
                                    a ofrecer una amplia gama de opciones nutritivas y deliciosas para
                                    satisfacer las necesidades de tus amigos peludos, ya sean perros,
                                    gatos, aves, peces, reptiles u otros compañeros de cuatro patas.
                                </p>
                                <div className="row">
                                    <div className="col">
                                        <p>Nuestra Misión</p>
                                        <p className="mision">
                                            En Agrocentro, nuestra misión es proporcionar a los dueños de
                                            mascotas una experiencia de compra excepcional, brindando
                                            alimentos de la más alta calidad y productos relacionados con
                                            la salud y el bienestar de los animales. Queremos que cada
                                            mascota se sienta amada y cuidada a través de una nutrición
                                            adecuada y productos que mejoren su calidad de vida.
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p>Nuestra Visión</p>
                                        <p className="vision">
                                            En Agrocentro, visualizamos un mundo donde cada mascota sea
                                            tratada con el amor, el cuidado y la nutrición adecuada que se
                                            merece. Nos esforzamos por ser líderes en la industria de
                                            alimentos para animales, marcando la diferencia en la vida de
                                            las mascotas y sus dueños en Barbosa, Santander y más allá.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
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
                                src= {pricipalPage}
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
                                src= {Twitter}
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