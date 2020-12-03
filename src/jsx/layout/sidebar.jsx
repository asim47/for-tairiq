import React, { } from 'react';
import { Link } from 'react-router-dom';



function Sidebar() {

    return (
        <>
            <div className="sidebar">
                <div className="menu">
                    <ul>
                        <li>
                            <Link to={'./dash'} data-toggle="tooltip" data-placement="right" title="Home">
                                <span><i className="la la-igloo"></i></span>
                            </Link>
                        </li>
                        <li>
                            {/* <Link to={'./buy-sell'} data-toggle="tooltip" data-placement="right" title="Exchange"> */}
                                <a>
                                <span onClick={()=>alert("Under Development")}><i className="la la-exchange"></i></span>
                                </a>
                            {/* </Link> */}
                        </li>
                        <li>
                            {/* <Link to={'./accounts'} data-toggle="tooltip" data-placement="right" title="Account"> */}
                                <a>
                                <span onClick={()=>alert("Under Development")}><i className="la la-user"></i></span>
                                </a>
                            {/* </Link> */}
                        </li>
                        <li>
                            <Link to={'./settings'} data-toggle="tooltip" data-placement="right" title="Setting">
                                <span><i className="la la-tools"></i></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;