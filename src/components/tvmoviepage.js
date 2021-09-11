import React from 'react';
import Moviecard from './Moviecard';
import { tvdetails } from './api';

export default class Tvmoviepage extends React.Component {
   state = {
      movieImgs: [],
      movieReviews: [],
      myrate: { value: 1 },
      Recommend: [],
      similar: [],
      tvdata: {},
   };

   handelrate = (e) => {
      e.preventDefault();
      document.getElementById('myrate').classList.add('block');
   };

   handelrateinState = (e) => {
      let myrate = e.target.value;
      this.setState({
         myrate: { value: myrate },
      });
   };

   componentDidMount() {
      tvdetails(this.props.match.params.idmovie)
         .then((response) => {
            this.setState({
               tvdata: response.data,
            });
         })
         .catch((error) => {
            alert('get tv details error');
         });
   }

   render() {
      return (
         <div className="container">
            <br />
            <div className="card mb-3" style={{ maxWidth: '95%' }}>
               <div className="row g-0">
                  <div className="col-md-4">
                     <img src={`https://image.tmdb.org/t/p/w500${this.state.tvdata.backdrop_path}`} className="img-fluid h-100 rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                     <div className="card-body">
                        <h5 className="card-title">{this.state.tvdata.original_title}</h5>
                        <p className="card-text">{this.state.tvdata.overview}</p>
                        <p className="card-text d-flex justify-content-between align-items-end">
                           <span>
                              <small className="text-muted">
                                 release date: {this.state.tvdata.first_air_date} / {this.state.tvdata.last_air_date}
                              </small>
                           </span>
                           <span>
                              <small className="text-muted">vote average: {this.state.tvdata.vote_average}</small>
                           </span>
                           <span>
                              <small className="text-muted">vote count: {this.state.tvdata.vote_count}</small>
                           </span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <br />
            <br />
            <br />

            <div className="tvseason">
               <h3 className="text-center">seasons</h3>
               <br />
               <div className="row">
                  {this.state.tvdata.seasons === undefined ? (
                     <p>no seasons</p>
                  ) : (
                     this.state.tvdata.seasons.map((moviereco) => {
                        return (
                           <div key={moviereco.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
                              <div className="card" style={{ width: '18rem' }}>
                                 <Moviecard tvlonger="tvlonger" overview={moviereco.overview} title={moviereco.name} src={moviereco.poster_path} seasonnumber={moviereco.season_number} tvid={this.state.tvdata.id} />
                              </div>
                           </div>
                        );
                     })
                  )}
               </div>
            </div>

            <br />
         </div>
      );
   }
}
