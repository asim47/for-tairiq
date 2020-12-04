import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
export const CARD_ELEMENT_OPTIONS_STYLE = {
	style: {
		base: {
			color: '#ffffff',
			fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
			fontSmoothing: 'antialiased',
			height: '80px',
			fontSize: '16px',
			'::placeholder': {
				color: '#ffffff',
			},
		},
		invalid: {
			color: '#fa755a',
			iconColor: '#fa755a',
		},
	},
	hidePostalCode: true,
};

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
export {CardInfo};