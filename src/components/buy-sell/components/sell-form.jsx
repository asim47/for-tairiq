import React from 'react';
import { ArtistsDropdown, PaymentMethodDropDown, CardInfo } from "./index";
import StripeWrapper from '../../stripe-wrapper';

const SellForm = (props) => {
	const { handleSubmit } = props;
	return (
		<form method="post" name="myform" className="currency_validate">
			<ArtistsDropdown {...props} />
			<PaymentMethodDropDown {...props} />
			<StripeWrapper>
				<CardInfo />
			</StripeWrapper>
			<button
				type="submit"
				name="submit"
				className="btn btn-success btn-block"
				onClick={handleSubmit}
			>
				Sell Now
			</button>
		</form>
	)
}

export default SellForm;