import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { STRIP_API_KEY } from '../../constants/env';

const StripeWrapper = ({ children }) => {
	const stripePromise = loadStripe(STRIP_API_KEY);
	return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeWrapper;
