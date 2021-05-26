import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";

const CardInformation = ({
  cardNumber,
  setCardNumber,
  expirationDate,
  setExpirationDate,
  securityCode,
  setSecurityCode,
}) => {
  return (
    <div>
      <div className="maincontainer">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-7 mx-auto">
              <div class="bg-white rounded-lg shadow-sm p-5">
                <ul
                  role="tablist"
                  class="nav bg-light nav-pills rounded-pill nav-fill mb-3"
                >
                  <li class="nav-item">
                    <a
                      data-toggle="pill"
                      href="#nav-tab-card"
                      class="nav-link active rounded-pill"
                    >
                      <i class="fa fa-credit-card"></i>
                      Credit Card
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      data-toggle="pill"
                      href="#nav-tab-paypal"
                      class="nav-link rounded-pill"
                    >
                      <i class="fa fa-paypal"></i>
                      Paypal
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      data-toggle="pill"
                      href="#nav-tab-bank"
                      class="nav-link rounded-pill"
                    >
                      <i class="fa fa-university"></i>
                      Bank Transfer
                    </a>
                  </li>
                </ul>

                <div class="tab-content">
                  <div id="nav-tab-card" class="tab-pane fade show active">
                    {/* <p class="alert alert-success">
                      Some text success or error
                    </p> */}
                    <form role="form">
                      <div class="form-group">
                        <label for="cardNumber">Card information</label>
                        <div class="input-group">
                          <input
                            type="number"
                            value={cardNumber}
                            onChange={(e) => {
                              setCardNumber(e.target.value);
                            }}
                            name="cardNumber"
                            placeholder="Your card number"
                            class="form-control"
                            required
                          />
                          <div class="input-group-append">
                            <span class="input-group-text text-muted">
                              <i class="fa fa-cc-visa mx-1"></i>
                              <i class="fa fa-cc-amex mx-1"></i>
                              <i class="fa fa-cc-mastercard mx-1"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-8">
                          <div class="form-group">
                            <label>
                              <span class="hidden-xs">
                                Card expiration date
                              </span>
                            </label>
                            <div class="input-group">
                              <input
                                type="number"
                                placeholder="MM YY"
                                value={expirationDate}
                                onChange={(e) => {
                                  setExpirationDate(e.target.value);
                                }}
                                class="form-control"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="form-group mb-4">
                            <label
                              data-toggle="tooltip"
                              title="Three-digits code on the back of your card"
                            >
                              CVV
                              <i class="fa fa-question-circle"></i>
                            </label>
                            <input
                              type="number"
                              value={securityCode}
                              onChange={(e) => {
                                setSecurityCode(e.target.value);
                              }}
                              class="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div id="nav-tab-paypal" class="tab-pane fade">
                    <p>Paypal is easiest way to pay online</p>
                    <p>
                      <button
                        type="button"
                        class="btn btn-primary rounded-pill"
                      >
                        <i class="fa fa-paypal mr-2"></i> Log into my Paypal
                      </button>
                    </p>
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>

                  <div id="nav-tab-bank" class="tab-pane fade">
                    <h6>Bank account details</h6>
                    <dl>
                      <dt>Bank</dt>
                      <dd> THE WORLD BANK</dd>
                    </dl>
                    <dl>
                      <dt>Account number</dt>
                      <dd>7775877975</dd>
                    </dl>
                    <dl>
                      <dt>IBAN</dt>
                      <dd>CZ7775877975656</dd>
                    </dl>
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <p>Credit Card data:</p>
    //   <label>Card Number</label>
    // <input
    //   type="number"
    //   value={cardNumber}
    //   onChange={(e) => {
    //     setCardNumber(e.target.value);
    //   }}
    //   className="input"
    // />
    //   <label>Card expiration date</label>
    // <input
    //   type="number"
    //   value={expirationDate}
    //   onChange={(e) => {
    //     setExpirationDate(e.target.value);
    //   }}
    //   className="input"
    // />
    //   <label>Card security code</label>
    // <input
    //   type="number"
    //   value={securityCode}
    //   onChange={(e) => {
    //     setSecurityCode(e.target.value);
    //   }}
    //   className="input"
    // />
    //   <p>Submit your data</p>
    // </div>
  );
};
export default CardInformation;
