import { Navbar, Container } from 'react-bootstrap'
function Navigation() {
    return (
       
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-4 bg-white border-bottom ">
            <Navbar.Brand href="#">

                <img
                    alt=""
                    src="/bootstrap-logo.svg"
                    width="40"
                    height="45"
                    className="me-3 py-2"
                />
                <a href="#" className="me-3 py-2 text-dark text-decoration-none">Pricing Example</a>
            </Navbar.Brand>
            <nav className=" d-flex ms-md-auto justify-content-end">
                <a href="#" className="me-3 py-2 text-dark text-decoration-none">
                    Features
                </a>
                <a href="#" className="me-3 py-2 text-dark text-decoration-none">
                    Enterprise
                </a>
                <a href="#" className="me-3 py-2 text-dark text-decoration-none">
                    Support
                </a>
                <a href="#" className="me-3 py-2 text-dark text-decoration-none">
                    Pricing
                </a>
            </nav>


        </div>
    )
}

export default Navigation
