import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header2 from '../layout/header2';
import Sidebar from '../layout/sidebar';
import PageTitle from '../element/page-title';
import Footer2 from '../layout/footer2';
import { Card } from 'react-bootstrap';
import Axios from 'axios';
import { END_POINT } from '../../endpoint';



function AddDebitCard() {

    const [UserObject, setUserObject] = useState(JSON.parse(localStorage.getItem("@User")))


    const [Name, setName] = useState("")
    const [Num, setNum] = useState("")
    const [Expire, setExpire] = useState("")
    const [CVC, setCVC] = useState("")
    const [Postal, setPostal] = useState("")
    const [Saved, setSaved] = useState(false)

    function getCardType(cardNum) {

        if(!luhnCheck(cardNum)){
        return "";
        }
        var payCardType = "";
        var regexMap = [
          {regEx: /^4[0-9]{5}/ig,cardType: "VISA"},
          {regEx: /^5[1-5][0-9]{4}/ig,cardType: "MASTERCARD"},
          {regEx: /^3[47][0-9]{3}/ig,cardType: "AMEX"},
          {regEx: /^(5[06-8]\d{4}|6\d{5})/ig,cardType: "MAESTRO"}
        ];
        
        for (var j = 0; j < regexMap.length; j++) {
          if (cardNum.match(regexMap[j].regEx)) {
            payCardType = regexMap[j].cardType;
            break;
          }
        }
    
        if (cardNum.indexOf("50") === 0 || cardNum.indexOf("60") === 0 || cardNum.indexOf("65") === 0) {
          var g = "508500-508999|606985-607984|608001-608500|652150-653149";
          var i = g.split("|");
          for (var d = 0; d < i.length; d++) {
            var c = parseInt(i[d].split("-")[0], 10);
            var f = parseInt(i[d].split("-")[1], 10);
            if ((cardNum.substr(0, 6) >= c && cardNum.substr(0, 6) <= f) && cardNum.length >= 6) {
             payCardType = "RUPAY";
              break;
            }
          }
        }
        return payCardType;
        
    }
        
        
    function luhnCheck(cardNum){
        // Luhn Check Code from https://gist.github.com/4075533
        // accept only digits, dashes or spaces
        var numericDashRegex = /^[\d\-\s]+$/
        if (!numericDashRegex.test(cardNum)) return false;
    
        // The Luhn Algorithm. It's so pretty.
        var nCheck = 0, nDigit = 0, bEven = false;
        var strippedField = cardNum.replace(/\D/g, "");
    
        for (var n = strippedField.length - 1; n >= 0; n--) {
            var cDigit = strippedField.charAt(n);
            nDigit = parseInt(cDigit, 10);
            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }
    
            nCheck += nDigit;
            bEven = !bEven;
        }
    
          return (nCheck % 10) === 0;
    }

    async function saveData() {
        try {
            const res = await Axios.post(END_POINT + "/v1/account-details", {
                "card_type": "Debit Card",
                "card_number": Num,
                "name_on_card": Name,
                "card_cvc": CVC,
                "card_expire_date": "2020-11-18T16:47:28.951Z",
                "postal_code": Postal,
                "isVerified": false,
                "isActive": false,
                "user_id": UserObject.id
            })

            setSaved(true)

        } catch (error) {
            console.log(error)
            setSaved(true)

        }
    }

    if(Saved){
        return <Redirect to="/settings-account" /> 
    }

    return (
        <>
            <Header2 />
            <Sidebar />
            {/* <PageTitle />  */}

            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card">
                                <div className="card-header">
                                    <h4 className="card-title">Link a debit card</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        saveData()
                                    }} className="identity-upload">
                                        <div className="form-row">
                                            <div className="form-group col-xl-12">
                                                <label className="mr-sm-2">Name on card </label>
                                                <input
                                                    value={Name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    type="text" className="form-control" placeholder="Maria Pascle" />
                                            </div>
                                            <div className="form-group col-xl-12">
                                                <label className="mr-sm-2">Card number </label>
                                                <input
                                                    value={Num}
                                                    onChange={(e) => setNum(e.target.value)}
                                                    type="text" className="form-control" placeholder="5658 4258 6358 4756" />
                                            </div>
                                            <div className="form-group col-xl-4">
                                                <label className="mr-sm-2">Expiration </label>
                                                <input
                                                    value={Expire}
                                                    onChange={(e) => setExpire(e.target.value)}
                                                    type="text" className="form-control" placeholder="10/22" />
                                            </div>
                                            <div className="form-group col-xl-4">
                                                <label className="mr-sm-2">CVC </label>
                                                <input
                                                    value={CVC}
                                                    onChange={(e) => setCVC(e.target.value)}
                                                    type="text" className="form-control" placeholder="125" />
                                            </div>
                                            <div className="form-group col-xl-4">
                                                <label className="mr-sm-2">Postal code </label>
                                                <input
                                                    value={Postal}
                                                    onChange={(e) => setPostal(e.target.value)}
                                                    type="text" className="form-control" placeholder="2368" />
                                            </div>

                                            <div className="text-center col-12">
                                                <button type="submit" className="btn btn-success pl-5 pr-5">Save</button>
                                            </div>
                                        </div>
                                    </form>
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

export default AddDebitCard;