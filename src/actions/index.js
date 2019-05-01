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

