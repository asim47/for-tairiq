import Axios from 'axios';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { END_POINT } from '../../endpoint';



function Signin(props) {


    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ErrorMsg, setErrorMsg] = useState("")
    const [LoggedIn, setLoggedIn] = useState(false)
    const [Loading, setLoading] = useState(false)

    async function submitFunction() {
        try {
            if (!Email) return setErrorMsg("Please enter Email")
            if (!Password) return setErrorMsg("Please enter Password")
            setErrorMsg("")
            setLoading(true)
            const res = await Axios.post(END_POINT + "/v1/users/login", {
                "email": Email,
                "password": Password,
            })
            if (res.data.code == 400) {
                setErrorMsg(res.data.message)
            }

            if (res.data.code == 200) {
                localStorage.setItem("@User",JSON.stringify(res.data.data.items[0]))
                props.setUserObject(res.data.data.items[0])
                setLoggedIn(true)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setErrorMsg("Something went wrong, please try again later")

        }
    }
    if (LoggedIn || localStorage.getItem("@User")) {
        return <Redirect to={"./dash"} />
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
                                    <h4 className="card-title">Sign in</h4>
                                </div>
                                <div className="card-body">
                                    <div
                                        // onSubmit={(e)=>{
                                        //     e.preventDefault()
                                        //     submitFunction()
                                        // }} 
                                        name="myform" className="signin_validate" action="#">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={Email}
                                                onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="hello@example.com"
                                                name="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                value={Password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                type="password" className="form-control" placeholder="Password"
                                                name="password" />
                                        </div>
                                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                            <div className="form-group mb-0">
                                                <label className="toggle">
                                                    <input className="toggle-checkbox" type="checkbox" />
                                                    <span className="toggle-switch"></span>
                                                    <span className="toggle-label">Remember me</span>
                                                </label>
                                            </div>
                                            <div className="form-group mb-0">
                                                <Link to={"./forget"}>Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <span style={{ color: "red" }}>{ErrorMsg}</span>

                                        <div className="text-center">
                                            <button onClick={() => submitFunction()} type="submit" className="btn btn-success btn-block">{
                                                Loading ? "Loading..." : "Sign in"
                                            }</button>
                                        </div>
                                    </div >
                                    <div className="new-account mt-3">
                                        <p>Don't have an account? <Link className="text-primary" to={"./signup"}>Sign
                                            up</Link></p>
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

export default Signin;