import Axios from 'axios';
import React, { useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { END_POINT } from '../../endpoint';



function ChangePasswordWithVerify() {


    const { Email } = useParams()

    const [Code, setCode] = useState("")
    const [Password, setPassword] = useState("")
    const [ErrorMsg, setErrorMsg] = useState("")
    const [SuccessMsg, setSuccessMsg] = useState("")
    const [LoggedIn, setLoggedIn] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [Count, setCount] = useState(6)


    async function submitFunction() {
        try {
            if (!Code) return setErrorMsg("Please enter Code")
            if (!Password) return setErrorMsg("Please enter Password")
            setErrorMsg("")
            setLoading(true)
            const res = await Axios.post(END_POINT + "/v1/users/code-verfication", {
                "email": Email,
                "forget_code": Code,
                "new_password": Password
            })
            if (res.data.code == 400) {
                setErrorMsg(res.data.message)
            }

            if (res.data.code == 200) {
                setSuccessMsg("Your password has been changed!")
                // setLoggedIn(true)
                setInterval(() => {
                    setCount(Count - 1)
                }, 1000)
                setTimeout(()=>{
                    setLoggedIn(true)
                },6000)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setErrorMsg("Something went wrong, please try again later")

        }
    }
    if (LoggedIn) {
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
                                    <h4 className="card-title">Please enter code recieved in email and reset password</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        submitFunction()

                                    }} className="signup_validate">

                                        <div className="form-group">
                                            <label>Code</label>
                                            <input
                                                value={Code}
                                                onChange={(e) => setCode(e.target.value)}
                                                className="form-control" placeholder="******"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                value={Password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                type="password" className="form-control" placeholder="hello@example.com"
                                            />
                                        </div>
                                        {/* <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input type="password" className="form-control" placeholder="hello@example.com"
                                                name="email" />
                                        </div> */}
                                        <span style={{ color: "red" }}>{ErrorMsg}</span>
                                        <span style={{ color: "green" }}>{SuccessMsg} ({Count}) </span>

                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn btn-success btn-block">Submit</button>
                                        </div>
                                    </form>
                                    <div className="new-account mt-3">
                                        <p><Link className="text-primary" to={'./forget'}>Go back</Link>
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

export default ChangePasswordWithVerify;