import axios from 'axios';

// get movie pupular
async function GetMovies() {
   const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=473677c1d644d2063c54ea98ec68113a');
   return response;
}

// get movie details
async function GetMovieDetails(id) {
   const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// get
async function GetMovieImgs(id) {
   const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// get
async function Getepisode(tvid, seasonnumber, episodenumber) {
   const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvid}/season/${seasonnumber}/episode/${episodenumber}?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// get
async function GetMovieReviews(id) {
   const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// get
async function Similar(id) {
   const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// get
async function GetToken() {
   const response = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// get
async function createRequestToken() {
   const response = await axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=473677c1d644d2063c54ea98ec68113a');
   return response;
}

// get
async function createSession(tokin) {
   const response = await axios.get(`https://api.themoviedb.org/3/authentication/session/new?api_key=473677c1d644d2063c54ea98ec68113a`, tokin);
   return response;
}

// get
async function nowplaying() {
   const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// get
async function search(searchvalue) {
   const response = await axios.get(`
   https://api.themoviedb.org/3/search/movie?api_key=473677c1d644d2063c54ea98ec68113a&query=${searchvalue}`);
   return response;
}

// get
async function tvpoupular() {
   const response = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=473677c1d644d2063c54ea98ec68113a');
   return response;
}

// get
async function tvtoprated() {
   const response = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=473677c1d644d2063c54ea98ec68113a');
   return response;
}

// get
async function tvlatest() {
   const response = await axios.get('https://api.themoviedb.org/3/tv/latest?api_key=473677c1d644d2063c54ea98ec68113a');
   return response;
}

// get
async function GetTvseason(tv_id, season_number) {
   const response = await axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number}?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// delete
async function DeleteRate(id) {
   const response = await axios.delete(`https://api.themoviedb.org/3/movie/${id}/rating?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// get
async function tvdetails(id) {
   const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// get
async function Recommend(id) {
   const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=473677c1d644d2063c54ea98ec68113a`);
   return response;
}

// post
async function SessionId(request_token) {
   const response = await axios.post('https://api.themoviedb.org/3/authentication/session/new?api_key=473677c1d644d2063c54ea98ec68113a', request_token);
   return response;
}

// post
async function GuestSessionId() {
   const response = await axios.post('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=473677c1d644d2063c54ea98ec68113a');
   return response;
}

// post
async function AddRate(id, values) {
   const response = await axios.post(`https://api.themoviedb.org/3/movie/${id}/rating?api_key=473677c1d644d2063c54ea98ec68113a`, { headers: { 'Content-Type': 'application/json' }, values: values.value });
   return response;
}

export { GetMovies, GetMovieDetails, AddRate, GetMovieImgs, GetMovieReviews, tvdetails, GetTvseason, Getepisode, createRequestToken, nowplaying, tvlatest, tvpoupular, tvtoprated, search, Recommend, createSession, GuestSessionId, GetToken, Similar, SessionId, DeleteRate };
