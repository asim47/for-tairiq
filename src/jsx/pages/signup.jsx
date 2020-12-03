import Axios from 'axios';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { END_POINT } from '../../endpoint';



function Signup(props) {


    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ErrorMsg, setErrorMsg] = useState("")
    const [LoggedIn, setLoggedIn] = useState(false)
    const [Loading, setLoading] = useState(false)


    async function submitFunction() {
        try {
            if (!UserName) return setErrorMsg("Please enter Username")
            if (!Email) return setErrorMsg("Please enter Email")
            if (!Password) return setErrorMsg("Please enter Password")
            setErrorMsg("")
            setLoading(true)
            const res = await Axios.post(END_POINT+"/v1/users/register", {
                "user_name": UserName,
                "email": Email,
                "password": Password,
                "first_name": "",
                "last_name": ""
            })
            if (res.data.code == 400) {
                setErrorMsg(res.data.message)
            }

            if (res.data.code == 200) {
                localStorage.setItem("@User",JSON.stringify(res.data.data.items))

                props.setUserObject(res.data.data.items)
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
                                    <h4 className="card-title">Sign up your account</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        submitFunction()
                                    }} name="myform" className="signup_validate">
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input
                                                value={UserName}
                                                onChange={(e) => setUserName(e.target.value)}
                                                type="text"
                                                className="form-control"
                                                placeholder="username"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                value={Email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="email"
                                                className="form-control"
                                                placeholder="hello@example.com"
                                                name="email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                value={Password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name="password"
                                            />
                                        </div>
                                        <span style={{ color: "red" }}>{ErrorMsg}</span>
                                        <div className="text-center mt-4">
                                            {/* <Link to={"./dash"}> */}
                                            <button type="submit" className="btn btn-success btn-block">{
                                                Loading ? "Loading..." : "Sign up"
                                            }</button>
                                            {/* </Link> */}
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p>Already have an account? <Link className="text-primary" to={'./'}>Sign in</Link>
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

export default Signup;