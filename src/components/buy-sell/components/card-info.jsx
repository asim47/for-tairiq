import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CARD_ELEMENT_OPTIONS_STYLE } from '../../../constants/stripe-element';

const CardInfo = () => {
	const stripe = useStripe();
	const elements = useElements();
	return (
		<div className="form-group">
			<label className="mr-sm-2">Enter your card info</label>
			<div className="input-group">
				<CardElement
					name="token"
					className="form-control card-padding"
					options={CARD_ELEMENT_OPTIONS_STYLE}
				/>
			</div>
		</div>
	)
}
export { CardInfo };