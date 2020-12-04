import * as Yup from 'yup';

export const buyFormValidation = Yup.object().shape({
	sharesToBuy: Yup.string().required('Shares to Buy is mandatory'),
});
