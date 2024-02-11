import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
        <div className="footer bg-dark mt-3">
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 border-top">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
            <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            </Link>
            <span className="mb-3 mb-md-0 text-muted">© 2024 Flavor Wheels, Inc</span>
            </div>
        </footer>
        </div>
        </>
    );
};

export default Footer;