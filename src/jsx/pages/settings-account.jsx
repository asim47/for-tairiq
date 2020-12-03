import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import SettingsNav from '../element/settings-nav';
import { useEffect } from 'react';
import Axios from 'axios';
import { END_POINT } from '../../endpoint';



function SettingsAccount() {
    const [UserObject, setUserObject] = useState(JSON.parse(localStorage.getItem("@User")))
    const [CardInfo, setCardInfo] = useState([])


    useEffect(() => {
        if (UserObject) {
            getCard()
        }
    }, [UserObject])


    async function getCard() {
        try {
            const res = await Axios.get(END_POINT + "/v1/account-details/" + UserObject.id)
            setCardInfo(res.data.data.items)
        } catch (error) {

        }
    }
    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />

            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-4">
                            <SettingsNav />
                        </div>
                        <div className="col-xl-9 col-md-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Linked Account or Card</h4>
                                </div>
                                <div className="card-body">
                                    <div className="form">
                                        <ul className="linked_account">

                                            {
                                                CardInfo?.map((value, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <div className="row">
                                                                <div className="col-9">
                                                                    <div className="media my-4">
                                                                        <span className="mr-3"><i className="fa fa-cc-mastercard"></i></span>
                                                                        <div className="media-body">
                                                                            <h5 className="mt-0 mb-1">{value.card_type}</h5>
                                                                            <p>Credit Card {value.card_number}</p>
                                                                        </div>
                                                                        {/* <div className="edit-option">
                                                                            <Link to={'#'}><i className="fa fa-eye"></i></Link>
                                                                            <Link to={'#'}><i className="fa fa-pencil"></i></Link>
                                                                            <Link to={'#'}><i className="fa fa-trash"></i></Link>
                                                                        </div> */}
                                                                    </div>
                                                                </div>
                                                                <div className="col-3">
                                                                    <div className="verify">
                                                                        <div className="verified">
                                                                            <span><i className="la la-check"></i></span>
                                                                            <Link to={'#'}>Verified</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                            {
                                                CardInfo?.length == 0 ? (
                                                    <h1>No Cards Saved</h1>
                                                ) : null
                                            }
                                        </ul>

                                        <div className="mt-5">
                                            <Link to={'./add-debit-card'} className="btn btn-primary px-4 mr-3">
                                                Add card
                                            </Link>
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default SettingsAccount;