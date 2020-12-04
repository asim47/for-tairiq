import React from 'react';
import {Link} from "react-router-dom";
import _get from 'lodash/get';

const UserProfiles = (props) => {
	const { values } = props;
	const userData = JSON.parse(localStorage.getItem('@User'));
	const buyerInfo = _get(values, 'process') === 'buy' ? userData : {};
	const sellerInfo = _get(values, 'process') === 'sell' ? userData : {};
	console.log('values', values);
	return (
		<div className="d-flex justify-content-between mb-3">
			<div className="buyer-info">
				<div className="media">
					{/*<img className="mr-3" src={require('./../../images/profile/2.png')} alt="" width="50"/>*/}
					<div className="media-body">
						<h4>Buyer</h4>
						<h5>{_get(buyerInfo, 'user_name', '')}</h5>
						<Link to={'#'}>{_get(buyerInfo, 'email', '')}</Link>
					</div>
				</div>
			</div>
			<div className="seller-info text-right">
				<div className="media">
					<div className="media-body">
						<h4>Seller</h4>
						<h5>{_get(sellerInfo, 'user_name', '')}</h5>
						<Link to={'#'}>{_get(sellerInfo, 'email', '')}</Link>
					</div>
					{/*<img className="ml-3" src={require('./../../images/profile/1.png')} alt="" width="50"/>*/}
				</div>
			</div>
		</div>
	)
}
export default UserProfiles;