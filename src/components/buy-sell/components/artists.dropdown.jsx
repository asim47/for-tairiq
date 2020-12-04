import React, {useEffect} from 'react';
import {useQuery} from 'react-query';
import {GET_ALL_ARTISTS} from '../queries';
import reactQueryConfig from '../../../constants/react-query-config';
import _get from 'lodash/get';
import {Field} from 'formik';
import {fieldValidateBool} from '../../../utils/form-utils';

const ArtistsDropdown = (props) => {
	const {values, setFieldValue} = props;
	const {data} = useQuery(
		['ALL_ARTISTS'], GET_ALL_ARTISTS, {
			...reactQueryConfig,
		});
	useEffect(() => {
		if (!_get(values, 'selectedArtist')) {
			setFieldValue('selectedArtist', _get(data, 'data.items[0]', {}));
		}
	}, [values])
	return (
		<div className="form-group">
			<Field name="selectedArtist">
				{({form, field}) => (
					<React.Fragment>
						<label className="mr-sm-2">
							{fieldValidateBool(field, form) ? 'Artist is required' : 'Select Artist'}
						</label>
						<div className="input-group mb-3">
							<select
								name='Artist'
								className="form-control"
								value={_get(values, 'selectedArtist.id', '')}
								onChange={e => {
									const selectElement = e.target;
									const value = selectElement.value;
									const filteredArtist = _get(data, 'data.items', []).filter(
										artist => artist.id == value);
									form.setFieldValue(field.name, _get(filteredArtist, '[0]', {}))
								}}
							>
								{_get(data, 'data.items', []).map(artist => {
										return (
											<option
												value={_get(artist, 'id')}
											>
												{_get(artist, 'name')}
											</option>
										)
									}
								)}
							</select>
							<input
								type="text"
								name="followers"
								className="form-control"
								value={
									`${_get(values, 'selectedArtist.followers',
										_get(data, 'data.items[0].followers', 0))} followers`
								}
							/>
						</div>
					</React.Fragment>
				)}
			</Field>
		</div>
	)
}
export {ArtistsDropdown};