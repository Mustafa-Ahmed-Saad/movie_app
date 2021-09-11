import React from 'react';
import { GetTvseason } from './api';
import Moviecard from './Moviecard';
import { read_cookie } from 'sfcookies';

class Tvseasonmoviepage extends React.Component {
   state = {
      seasondetails: {},
   };
   componentDidMount() {
      let tvid = read_cookie('tvid');
      let seasonid = this.props.match.params.idmovie;
      GetTvseason(tvid, seasonid)
         .then((response) => {
            console.log('response', response.data);
            this.setState({
               seasondetails: response.data,
            });
         })
         .catch((error) => {
            console.log(error);
            alert('get tv season error');
         });
   }
   render() {
      return (
         <div className="container">
            <h3>{this.state.seasondetails.name}</h3>
            <div className="card mb-3" style={{ maxWidth: '95%' }}>
               <div className="row g-0">
                  <div className="col-md-4">
                     <img src={`https://image.tmdb.org/t/p/w500${this.state.seasondetails.poster_path}`} className="img-fluid h-100 rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                     <div className="card-body">
                        <h5 className="card-title">{this.state.seasondetails.name}</h5>
                        <p className="card-text">{this.state.seasondetails.overview}</p>
                        <p className="card-text d-flex justify-content-between align-items-end">
                           <span>
                              <small className="text-muted">air date: {this.state.seasondetails.air_date}</small>
                           </span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <h3>episodes</h3>
            <div className="row">
               {this.state.seasondetails.episodes === undefined ? (
                  <p>no seasons</p>
               ) : (
                  this.state.seasondetails.episodes.map((moviereco) => {
                     return (
                        <div key={moviereco.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
                           <div className="card" style={{ width: '18rem' }}>
                              <Moviecard tvsolonger="tvsolonger" overview={moviereco.overview} title={moviereco.name} src={moviereco.still_path} seasonnumber={moviereco.season_number} episodenumber={moviereco.episode_number} />
                           </div>
                        </div>
                     );
                  })
               )}
            </div>
         </div>
      );
   }
}
export default Tvseasonmoviepage;
