import React from 'react';
import Moviecard from './Moviecard';
import { GetMovieDetails, GetMovieImgs, GetMovieReviews, AddRate, DeleteRate, Recommend } from './api';

export default class Moviepage extends React.Component {
   state = {
      datamovie: {},
      movieImgs: [],
      movieReviews: [],
      myrate: { value: 1 },
      Recommend: [],
      similar: [],
   };

   handelrate = (e) => {
      e.preventDefault();
      document.getElementById('myrate').classList.add('block');

      AddRate(this.state.datamovie.id, this.state.myrate)
         .then((respone) => {
            console.log(' add rate success');
         })
         .catch((error) => {
            alert('error in post rate');
         });
   };

   handelrateinState = (e) => {
      let myrate = e.target.value;
      this.setState({
         myrate: { value: myrate },
      });
   };

   deleterate = () => {
      document.getElementById('myrate').classList.remove('block');
      DeleteRate(this.props.match.params.idmovie)
         .then((response) => {
            console.log('DeleteRate success');
         })
         .catch((error) => {
            alert('delete rate error');
         });
   };

   componentDidMount() {
      GetMovieDetails(this.props.match.params.idmovie)
         .then((response) => {
            this.setState({
               datamovie: response.data,
            });
         })
         .catch((error) => {
            alert('get users error');
         });

      GetMovieImgs(this.props.match.params.idmovie)
         .then((response) => {
            this.setState({
               movieImgs: response.data.posters,
            });
         })
         .catch((error) => {
            alert('get users error');
         });

      GetMovieReviews(this.props.match.params.idmovie)
         .then((response) => {
            this.setState({
               movieReviews: response.data.results,
            });
         })
         .catch((error) => {
            alert('get users error');
         });

      Recommend(this.props.match.params.idmovie)
         .then((response) => {
            this.setState({
               Recommend: response.data.results,
            });
         })
         .catch((error) => {
            alert('get users error');
         });
   }

   render() {
      return (
         <div className="container">
            <br />
            <div className="card mb-3" style={{ maxWidth: '95%' }}>
               <div className="row g-0">
                  <div className="col-md-4">
                     <img src={`https://image.tmdb.org/t/p/w500${this.state.datamovie.backdrop_path}`} className="img-fluid h-100 rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                     <div className="card-body">
                        <h5 className="card-title">{this.state.datamovie.original_title}</h5>
                        <p className="card-text">{this.state.datamovie.overview}</p>
                        <p className="card-text d-flex justify-content-between align-items-end">
                           <span>
                              <small className="text-muted">release date: {this.state.datamovie.release_date}</small>
                           </span>
                           <span>
                              <small className="text-muted">vote average: {this.state.datamovie.vote_average}</small>
                           </span>
                           <span>
                              <small className="text-muted">vote count: {this.state.datamovie.vote_count}</small>
                           </span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <br />
            <br />
            <div className="myrate">
               <div className="text-end">
                  <div id="myrate" style={{ height: '20px' }}>
                     my rate is: {this.state.myrate.value}
                  </div>
               </div>
               <form id="formrate" onSubmit={this.handelrate}>
                  <label>rate this movie</label>
                  <br />
                  <br />
                  <input type="number" max="10" min="1" onChange={this.handelrateinState}></input>
                  <br />
                  <br />
                  <input className="btn btn-warning btn-sm" type="submit"></input>
               </form>
               <br />
               <button className="btn btn-danger btn-sm" type="submit" onClick={this.deleterate}>
                  delete rate
               </button>
            </div>

            <br />
            <br />

            <div>
               <h3 style={{ textAlign: 'center' }}>{`photo of ${this.state.datamovie.original_title}`}</h3>
               <div className="movieimgs row">
                  {this.state.movieImgs.map((img) => (
                     <div key={img.id} className="col-2 mb-4" style={{ maxHeight: '300px' }}>
                        <img src={`https://image.tmdb.org/t/p/w500${img.file_path}`} className="rounded float-start w-100 h-100" alt="..." />
                     </div>
                  ))}
               </div>
            </div>

            <br />
            <br />
            <div>
               <h3 style={{ textAlign: 'center' }}>movie reviews</h3>
               <div className="reviews">
                  {this.state.movieReviews.map((review) => (
                     <div key={review.id}>
                        <h4>{review.author}</h4>
                        <p>{review.content}</p>
                     </div>
                  ))}
               </div>
            </div>

            <br />
            <div className="recommendations">
               <h3 className="text-center">movies recommendations</h3>
               <br />
               <div className="row">
                  {this.state.Recommend.map((moviereco) => {
                     return (
                        <div key={moviereco.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
                           <div className="card" style={{ width: '18rem' }}>
                              <Moviecard longer="longer" overview={moviereco.overview} title={moviereco.original_title} src={moviereco.backdrop_path} idmovie={moviereco.id} />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

            <br />
         </div>
      );
   }
}
