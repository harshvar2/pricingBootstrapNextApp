import Link from 'next/link'
import {Image} from 'react-bootstrap'
function Footer() {
    return (
        <div className="container">
                <footer className="pt-4 my-md-5 pt-md-5 border-top">
                    <div className="row">
                        <div className="col-12 col-md">
                            <Image src="/bootstrap-logo.svg" className="mb-2"  alt="" width="24" height="19"/>
                            <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
                        </div>
                       
                        
                    </div>
                    <div className="row">
                    <div className="col-6 col-md">
                            <h5 className="fw-bolder">Features</h5>
                            <ul className="list-unstyled text-small">
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Cool stuff</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Random feature</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Team feature</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Stuff for developers</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Another one</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Last time</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5 className="fw-bold">Resources</h5>
                            <ul className="list-unstyled text-small">
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Resource</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Resource name</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Another resource</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Final resource</a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-6 col-md">
                            <h5 className="fw-bold">About</h5>
                            <ul className="list-unstyled text-small">
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Team</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Locations</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Privacy</a></Link></li>
                            <li className="mb-1"><Link href="#" passHref><a className="link-secondary text-decoration-none">Terms</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
    )
}

export default Footer
