import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header3 from '../layout/header3';
import Footer2 from '../layout/footer2';



function Demo() {

    return (
        <>
            <Header3 />

            <div className="intro section-padding position-relative" id="intro">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 col-md-6">
                            <div className="intro-content mb-5">
                                <h2>The complete Cryptocurrency Exchange React App</h2>
                                <p>Sign in, Signup, Phone and ID card verification, One time password verify and add bank, debit card settings and profile etc pages included. </p>
                                <Link href="#" className="btn" data-scroll-nav="1">View Demo</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 py-md-5">
                            <div className="intro-demo_img">
                                <img src={require('./../../images/portfolio.jpg')} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="demo section-padding page-section" id="demo">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section-heading text-center">
                                <span>Explore</span>
                                <h2>Dashboard</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/dashboard.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Dashboard</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./buy-sell'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/buy-sell.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Buy and Sell</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./accounts'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/accounts.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Accounts</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./settings'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/edit-profile.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Edit Profile</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./settings-preferences'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/preferences.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Preferences</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./settings-security'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/security.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Security</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./settings-account'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/linked-account.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Linked Account</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./history'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/history.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>History</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./signin'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/signin.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Signin</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./signup'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/signup.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Signup</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./reset'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/reset.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Reset</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./lock'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/lock.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Locked</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./otp-1'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/otp-phone.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>OTP Number</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./otp-2'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/otp-code.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>OTP Code</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-1'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/verify-id.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Verify ID</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-2'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/upload-id.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Upload ID</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-3'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/id-verifing.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>ID Verifying</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-4'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/id-verified.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>ID Verified</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./add-debit-card'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/add-debit-card.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Add Debit Card</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-6'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/success.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Success</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./verify-step-5'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/choose-account.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Recommendation</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 col-sm-6">
                            <div className="demo_img">
                                <Link to={'./add-bank-acc'} target="_blank">
                                    <div className="img-wrap">
                                        <img src={require('./../../images/demo/add-bank.jpg')} alt="" className="img-fluid" />
                                    </div>
                                </Link>
                                <h4>Add Bank Account</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="features section-padding mb-80" id="support">
                <div className="container">
                    <div className="row py-lg-5 justify-content-center">
                        <div className="col-xl-7">
                            <div className="section_heading">
                                <span>Problem?</span>
                                <h3>Don't Worry, I am waiting your question</h3>
                                <p>Refreshing my inbox, waiting for your mail </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="features-content">
                                <span><i className="fa fa-skype"></i></span>
                                <h4>sporsho9</h4>
                                <p>Without sleeping time, I am avaiable in skype. I recommend Skype</p>
                                <Link href="skype:profile_name?sporsho9">Add Skype <i className="la la-angle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-content">
                                <span><i className="fa fa-envelope"></i></span>
                                <h4>quixlab.com@gmail.com</h4>
                                <p>When you send me email, I get notification, and quickly reply you</p>
                                <Link href="mailto:quixlab.com@gmail.com">Send Email <i className="la la-angle-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="features-content">
                                <span><i className="fa fa-life-ring"></i></span>
                                <h4>Hire me</h4>
                                <p>You have need more design or customization? Dont worry about Quality</p>
                                <Link href="https://docs.google.com/forms/d/1AD86Th5E7lBRtp3mwVN4p5xTE7X7vzj6DsTt1cgQgyc/edit#responses">Hire Now <i className="la la-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default Demo;