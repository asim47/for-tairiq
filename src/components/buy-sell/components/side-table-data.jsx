import React from 'react';
import _get from 'lodash/get';

const SideTableData = (props) => {
	const { values } = props;
	return (
		<div className="table-responsive">
			<table className="table">
				<tbody>
				<tr>
					<td><span className="text-primary">
						{
							_get(values, 'process') === 'buy'
							? 'You are Buying'
							: 'You are Selling'
						}
					</span></td>
					<td>
						<span className="text-primary">
							{_get(values, 'sharesToBuy') && `${_get(values, 'sharesToBuy')} Shares`}
						</span>
					</td>
				</tr>
				<tr>
					<td>Payment Method</td>
					<td>{_get(values, 'paymentMethod')}</td>
				</tr>
				<tr>
					<td>Fee</td>
					<td>$28.00 USD</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>$854.00 USD</td>
				</tr>
				<tr>
					<td> Sub Total</td>
					<td> $1232.00 USD</td>
				</tr>
				</tbody>
			</table>
		</div>
	)
}

export default SideTableData;