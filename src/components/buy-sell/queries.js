import Axios from 'axios';
import { END_POINT } from '../../endpoint';

export const GET_ALL_ARTISTS = async (key, e) => {
  const res = await Axios.get(END_POINT + "/v1/artists")
  return res.data;
};
