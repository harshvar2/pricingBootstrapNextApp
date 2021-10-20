
import { BsCheckLg } from "react-icons/bs";
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
function HomePage() {
  return (
    <>

      <div className="pricing-header  pb-md-3  text-center col-xs-12 col-lg-8 m-auto">
        <h1 className="display-4 fw-normal">Pricing</h1>
        <p className="fs-5 text-muted ">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>

      </div>
      <div className="container">
        <div class="row   text-center">
          <div className="col-xs-12 col-md-4 box" >
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="btn w-100 btn-lg btn-block btn-outline-primary">Sign up for free</button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 box ">
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-block btn-primary">Get started</button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-4 box">
            <div class="card mb-4 box-shadow border-primary">
              <div class="card-header text-white bg-primary border-primary">
                <h4 class="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class=" w-100 btn btn-lg btn-block btn-primary">Contact us</button>
              </div>
            </div>
          </div>
        </div>



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
          </table></div></div>
    </>
  )
}

export default HomePage
