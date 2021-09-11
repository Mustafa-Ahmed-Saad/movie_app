import React from 'react';
import { read_cookie } from 'sfcookies';
import { Getepisode } from './api';

class Episode extends React.Component {
   state = {
      episodedata: {},
   };
   componentDidMount() {
      let tvid = read_cookie('tvid');
      let seasonnumber = this.props.match.url.slice(21, this.props.match.url.length - this.props.match.params.episodes.length - 1);
      let episodenumber = this.props.match.params.episodes;
      Getepisode(tvid, seasonnumber, episodenumber)
         .then((response) => {
            this.setState({
               episodedata: response.data,
            });
         })
         .catch((error) => {
            console.log(error);
            alert('error get episode');
         });
   }
   render() {
      return (
         <div>
            {this.state.episodedata.id === undefined ? (
               <p>noresault</p>
            ) : (
               <div>
                  <div className="container">
                     <h4>
                        {this.state.episodedata.episode_number}: {this.state.episodedata.name}
                     </h4>
                     <div className="card mb-3" style={{ maxWidth: '95%' }}>
                        <div className="row g-0">
                           <div className="col-md-4">
                              <img src={`https://image.tmdb.org/t/p/w500${this.state.episodedata.still_path}`} className="img-fluid h-100 rounded-start" alt="..." />
                           </div>
                           <div className="col-md-8">
                              <div className="card-body">
                                 <h5 className="card-title">{this.state.episodedata.name}</h5>
                                 <p className="card-text">{this.state.episodedata.overview}</p>
                                 <p className="card-text d-flex justify-content-between align-items-end">
                                    <span>
                                       <small className="text-muted">release date: {this.state.episodedata.air_date}</small>
                                    </span>
                                    <span>
                                       <small className="text-muted">vote average: {this.state.episodedata.vote_average}</small>
                                    </span>
                                    <span>
                                       <small className="text-muted">vote count: {this.state.episodedata.vote_count}</small>
                                    </span>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <button
                        className="btn btn-primary"
                        onClick={() => {
                           window.history.back();
                        }}
                     >
                        go back
                     </button>
                  </div>
               </div>
            )}
         </div>
      );
   }
}

export default Episode;
