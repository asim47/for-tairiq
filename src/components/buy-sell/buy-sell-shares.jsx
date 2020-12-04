import React from 'react';
import Header2 from "../../jsx/layout/header2";
import Sidebar from "../../jsx/layout/sidebar";
import PageTitle from "../../jsx/element/page-title";
import {Tab, Tabs} from "react-bootstrap";
import Footer2 from "../../jsx/layout/footer2";
import {Formik} from 'formik';
import BuyForm from './components/buy-form';
import SellForm from './components/sell-form';
import _get from 'lodash/get';
import {buyFormValidation} from './validations';
import SideTableData from './components/side-table-data';
import UserProfiles from './components/user-profiles';

const BuySellShares = () => {
	return (
		<React.Fragment>
			<Header2/>
			<Sidebar/>
			<PageTitle/>
			<div className="content-body">
				<Formik
					initialValues={{
						process: 'buy',
						selectedArtist: {},
						paymentMethod: 'stripe',
						sharesToBuy: '',
					}}
					validationSchema={buyFormValidation}
					onSubmit={async (values, {resetForm}) => {

					}}
				>
					{formikProps => (
						<div className="container-fluid">
							<div className="row">
								<div className="col-xl-5 col-lg-5 col-md-12">
									<div className="card">
										<div className="card-body">
											<div className="buy-sell-widget">
												<Tabs
													defaultActiveKey={_get(formikProps, 'values.process')}
													id="uncontrolled-tab-example"
													onSelect={(key) => {
														formikProps.setFieldValue('process', key);
													}}
												>
													<Tab eventKey="buy" title="Buy">
														<BuyForm {...formikProps} label="Select Payment Method and Shares to Buy"/>
													</Tab>
													<Tab eventKey="sell" title="Sell">
														<SellForm {...formikProps} label="Select Payment Method and Shares to Sell"/>
													</Tab>
												</Tabs>
											</div>
										</div>
									</div>
									<p className="p-4">Note: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cupiditate
										suscipit explicabo voluptas eos in tenetur error temporibus dolorum. Nulla!</p>
								</div>
								<div className="col-xl-7 col-lg-7 col-md-12">
									<div className="card">
										<div className="card-body">
											<div className="buyer-seller">
												<UserProfiles {...formikProps} />
												<SideTableData {...formikProps} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</Formik>
			</div>
			<Footer2/>
		</React.Fragment>
	)
}
export default BuySellShares;