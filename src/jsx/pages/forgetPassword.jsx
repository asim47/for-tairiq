import Axios from 'axios';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { END_POINT } from '../../endpoint';


function ForgetPassword() {

    const [Email, setEmail] = useState("")
    const [ErrorMsg, setErrorMsg] = useState("")
    const [LoggedIn, setLoggedIn] = useState(false)
    const [Loading, setLoading] = useState(false)

    async function submitFunction() {
        try {
            if (!Email) return setErrorMsg("Please enter Email")
            setErrorMsg("")
            setLoading(true)
            const res = await Axios.post(END_POINT+"/v1/users/forget-password", {
                "email": Email,
            })
            if (res.data.code == 400) {
                setErrorMsg(res.data.message)
            }

            if (res.data.code == 200) {
                setLoggedIn(true)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setErrorMsg("Something went wrong, please try again later")

        }
    }
    if (LoggedIn) {
        return <Redirect to={"./change-pass?Email="+Email} />
    }

    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-5">
                                <Link to={'./'}><img src={require('./../../images/logo.png')} alt="" /></Link>
                            </div>
                            <div className="auth-form card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Please enter your email address</h4>
                                </div>
                                <div className="card-body">
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            submitFunction()
                                        }}
                                        className="signup_validate">

                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                value={Email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="email" className="form-control" placeholder="hello@example.com"
                                                name="email" />
                                        </div>
                                        <span style={{ color: "red" }}>{ErrorMsg}</span>

                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn btn-success btn-block">
                                                {
                                                    Loading ? "Loading..." : "Submit"
                                                }
                                            </button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p><Link className="text-primary" to={'./'}>Go back</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword;