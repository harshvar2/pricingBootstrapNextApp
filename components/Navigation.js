import { Navbar, Container } from 'react-bootstrap'
import Image from 'next/image'
function Navigation() {
    return (

        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-4 bg-white border-bottom ">
            <Navbar.Brand href="#" className="d-flex md-auto justify-content-end">
                <div style={{ width: "3rem", height: "3rem",paddingTop: "0.3rem",marginRight: "0.3rem"}}>
                    <Image
                        alt=""
                        src="/bootstrap-logo.svg"
                        width={2400}
                        height={1598}
                        layout="responsive"
                    />
                </div>
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
