import React, { useState } from "react";
const Footer = () => {
  return (
      <footer className="text-dark bg-white" id="footer" style={{ paddingTop: '30px' }}>
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-11 col-md-6 col-xl-3 mt-5">
                      <div className="col-12 d-flex align-items-center justify-content-between foot-head position-relative">
                          <div className="col text-dark fs-4 h-100 mx-2">
                              <h4 className="mb-0 fs-5">About</h4>
                          </div>
                      </div>
                      <div className="foot-logo col-8 col-sl-8 col-xl-10 bg-white rounded-3 p-3 mt-3 px-4">
                          <a href="#" className="d-block w-100 head-link1">
                              <img src="images/logo-dark.png" alt="#" className="w-100" />
                          </a>
                      </div>
                      <p className="mt-3">
                          Lead Management CRM platform is a systematic process in which all the opportunities of your business are qualified, analyzed, and nurtured by time to time.
                      </p>
                  </div>

                  <div className="col-11 col-md-6 col-xl-3 mt-5">
                      <div className="col-12 d-flex align-items-center justify-content-between foot-head position-relative">
                          <div className="col text-dark fs-4 h-100 mx-2">
                              <h4 className="mb-0 fs-5">Contact</h4>
                          </div>
                      </div>
                      <div className="foot-logo col-10 rounded-3 mt-3">
                          <div className="d-flex flex-wrap align-items-center mt-2">
                              <div className="col-1 me-1">
                                  <i className="fa-solid fa-envelope"></i>
                              </div>
                              <a href="mailto:info@ajasys.com" className="col-10 text-dark">Info@leadmgtcrm.com</a>
                          </div>
                          <div className="d-flex flex-wrap mt-2">
                              <div className="col-1 me-1">
                                  <i className="fa-solid fa-phone"></i>
                              </div>
                              <a href="tel:8347977595" className="col-10 text-dark">+91 83479 77566</a>
                          </div>
                          <div className="d-flex mt-4">
                              <div className="me-1">
                                  <div className="d-flex align-items-center justify-content-center rounded-circle text-secondary transition-5 foot-icon">
                                      <a href="https://www.instagram.com/ajasystechnologies/" className="transition-5 text-dark" target="_blank" rel="noopener noreferrer">
                                          <i className="fa-brands fa-instagram transition-5 icon1" style={{ '--grediunt-color': 'linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)' }}></i>
                                      </a>
                                  </div>
                              </div>
                              <div className="mx-1">
                                  <div className="d-flex align-items-center justify-content-center rounded-circle text-secondary transition-5 foot-icon">
                                      <a href="https://www.facebook.com/ajasystechno/" className="transition-5 text-dark" target="_blank" rel="noopener noreferrer">
                                          <i className="fa-brands fa-facebook transition-5 icon2 rounded-circle" style={{ '--text-color': '#4267B2' }}></i>
                                      </a>
                                  </div>
                              </div>
                              <div className="mx-1">
                                  <div className="d-flex align-items-center justify-content-center rounded-circle text-secondary transition-5 foot-icon">
                                      <a href="https://twitter.com/AjasysTech/" className="transition-5 text-dark" target="_blank" rel="noopener noreferrer">
                                          <i className="fa-brands fa-x-twitter transition-5 icon2" style={{ '--text-color': '#00acee' }}></i>
                                      </a>
                                  </div>
                              </div>
                              <div className="mx-1">
                                  <div className="d-flex align-items-center justify-content-center rounded-circle text-secondary transition-5 foot-icon">
                                      <a href="https://www.linkedin.com/company/ajasys-technologies/" className="transition-5 text-dark" target="_blank" rel="noopener noreferrer">
                                          <i className="fa-brands fa-linkedin-in transition-5 icon2" style={{ '--text-color': '#0072b1' }}></i>
                                      </a>
                                  </div>
                              </div>
                              <div className="mx-1">
                                  <div className="d-flex align-items-center justify-content-center rounded-circle text-secondary transition-5 foot-icon">
                                      <a href="https://www.youtube.com/@ajasystechnologies/" className="transition-5 text-dark" target="_blank" rel="noopener noreferrer">
                                          <i className="fa-brands fa-youtube transition-5 icon2" style={{ '--text-color': '#CD201F' }}></i>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="col-11 col-md-6 col-xl-3 mt-5">
                      <div className="col-12 d-flex align-items-center justify-content-between foot-head3 position-relative">
                          <div className="col text-dark fs-4 h-100 mx-2">
                              <h4 className="mb-0 fs-5">Quick Link</h4>
                          </div>
                      </div>
                      <ul className="mt-3">
                          <li className="foots-link"><a href="https://erp.leadmgtcrm.com/login" className="text-dark" target="_blank" rel="noopener noreferrer">Login</a></li>
                          <li className="foots-link"><a href="https://erp.leadmgtcrm.com/signup" className="text-dark mt-2" target="_blank" rel="noopener noreferrer">Sign up</a></li>
                          <li className="foots-link"><a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal" className="text-dark mt-2">Request demo</a></li>
                          <li className="foots-link"><a href="pricing.php" className="text-dark mt-2 head-link2">Pricing</a></li>
                          <li className="foots-link"><a href="contact-us.php" className="text-dark mt-2">Contact Us</a></li>
                          <li className="foots-link"><a href="Privacy-Policy.php" className="text-dark mt-2" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                          <li className="foots-link"><a href="Terms-&amp;-Conditions.php" target="_blank" className="text-dark mt-2">Terms &amp; Conditions</a></li>
                          <li className="foots-link"><a href="refund.php" target="_blank" className="text-dark mt-2">Refund Policy</a></li>
                      </ul>
                  </div>

                  <div className="col-11 col-md-6 col-xl-3 mt-5">
                      <div className="col-12 d-flex align-items-center justify-content-between foot-head3 position-relative">
                          <div className="col text-dark fs-4 h-100 mx-2">
                              <h4 className="mb-0 fs-5">More info</h4>
                          </div>
                      </div>
                      <div className="mt-3">
                          <form name="qry_insert3" id="qry_insert3">
                              <input type="text" name="full_name" id="full_name" placeholder="Enter your Name" required className="col-12 col-md-8 col-lg-12 Subscribe rounded px-3 py-2 mb-3 border border-secondary" />
                              <div className="d-flex flex-wrap col-12 px-1 my-3 rounded-3 form-items position-relative">
                                  <div className="main-selectpicker col-2">
                                      <input type="hidden" id="iso_code_hidden" name="iso_code_hidden" />
                                      <select name="country_code" id="country_code" className="selectpicker rounded border border-secondary border-end-0 form-control form-main h-100" data-live-search="true" required>
                                          {/* Add options here */}
                                          <option className="dropdown-item" value="+91" data-iso="in" selected>+91</option>
                                          {/* Add more options as needed */}
                                      </select>
                                  </div>
                                  <input type="text" min="0" minLength="10" maxLength="10" onKeyUp="if (/\D/g.test(this.value)) this.value = this.value.replace(/\D/g,'')" name="mobileno" id="mobileno" placeholder="Mobile no*" className="col-xl-10 Subscribe rounded px-3 py-2 border border-secondary py-1" required />
                                  <div className="number-error3 text-end col-12"></div>
                              </div>
                              <div className="col-5 mt-3">
                                  <button className="btn text-white btn-primary py-2 px-4 submit" id="submit" type="submit">Submit</button>
                              </div>
                          </form>
                          <p className="mt-3">Product by:</p>
                          <div className="foot-logo col-6 col-lg-10 bg-white rounded-3 p-4 mt-2">
                              <a href="https://ajasys.com/" className="d-block w-100 submit3">
                                  <img src="images/foot-sc-logo.png" alt="#" className="w-100" />
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="foot-border col-12 mt-5 border-bottom border-dark"></div>

          <div className="foot-copy py-3 col-12 text-center">
              <p className="text-dark mb-0">Copyright © 2025 traveller.</p>
          </div>
      </footer>
  );
};

export default Footer;
  