
import { BsCheckLg } from "react-icons/bs";
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import PricingTable from './PricingTable'
import { Container, Col, Row } from "react-bootstrap";
function HomePage() {
  return (
    <>

      <Container  >
        <Row className="justify-content-md-center">
          <Col xs="12" lg="8" className="text-center">
            <h1 className="display-4 fw-normal">Pricing</h1>
            <p className="fs-5 text-muted ">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <PricingTable />
        <h2 className="display-6 text-center mt-3 mb-3">Compare plans</h2>
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th></th>
                <th>Free</th>
                <th>Pro</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row " className="text-start">Public</th>
                <td className="px-md-3"><BsCheckLg /></td>
                <td className="px-3"><BsCheckLg /></td>
                <td className="px-3"><BsCheckLg /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Private</th>
                <td></td>
                <td><BsCheckLg /></td>
                <td><BsCheckLg /></td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <th scope="row" className="text-start">Permissions</th>
                <td className="px-3"><BsCheckLg /></td>
                <td className="px-3"><BsCheckLg /></td>
                <td className="px-3"><BsCheckLg /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Sharing</th>
                <td className="px-3"></td>
                <td className="px-3"><BsCheckLg /></td>
                <td className="px-3"><BsCheckLg /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Unlimited members</th>
                <td className="px-3"></td>
                <td className="px-3"><BsCheckLg /></td>
                <td className="px-3"><BsCheckLg /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Extra security</th>
                <td className="px-3"></td>
                <td className="px-3"></td>
                <td className="px-3"><BsCheckLg /></td>
              </tr>
            </tbody>
          </table></div></Container>
    </>
  )
}

export default HomePage
