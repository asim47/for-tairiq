import React, {useEffect} from 'react';
import _get from "lodash/get";
import {Field} from "formik";
import {fieldValidateBool} from '../../../utils/form-utils';

const PaymentMethodDropDown = (props) => {
	const {values, handleChange, errors, label} = props;
	return (
		<div className="form-group">
			<Field name="sharesToBuy">
				{({form, field}) => (
					<React.Fragment>
						<label className="mr-sm-2">
							{fieldValidateBool(field, form)
								? <span style={{ color: "red" }}>{errors.sharesToBuy}</span>
								: label
							}
						</label>
						<div className="input-group mb-3">
							<select
								name='currency'
								className="form-control"
								value={_get(values, 'paymentMethod', '')}
							>
								<option data-display="Stripe" value="stripe">Stripe
								</option>
							</select>
							<input
								type="text"
								name="sharesToBuy"
								className="form-control"
								value={_get(values, 'sharesToBuy', 0)}
								onChange={handleChange}
							/>
						</div>
					</React.Fragment>
				)}
			</Field>
		</div>
	)
}
export {PaymentMethodDropDown};