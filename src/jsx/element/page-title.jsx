import React, { useState} from 'react';



function PageTitle() {
    const [UserObject, setUserObject] = useState(JSON.parse(localStorage.getItem("@User")))

    return (
        <>
            <div className="page_title">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="page_title-content">
                                <p>Welcome Back,
                                <span> {UserObject.user_name} </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PageTitle;