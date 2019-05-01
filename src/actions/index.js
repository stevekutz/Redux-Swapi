// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from "axios";
export const FETCH_CHARS = "FETCH_CHARS";
export const FETCH_GOOD = "FETCH_GOOD";
export const FETCH_FAIL = "FETCH_FAIL";

export const getChars = () => dispatch => {
  dispatch({type: FETCH_CHARS});

  axios
    .get (`https://swapi.co/api/people/`)
    .then (res =>{
      dispatch({
        type: FETCH_GOOD,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_FAIL,
        payload: err
      })
    })
};