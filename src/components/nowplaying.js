import React from 'react';
import { nowplaying } from './api';
import Moviecard from './Moviecard';

class Nowplaying extends React.Component {
   state = {
      movies: [],
   };
   componentDidMount() {
      nowplaying()
         .then((response) => {
            this.setState({
               movies: response.data.results,
            });
         })
         .catch((error) => {
            console.log(error);
            alert(error);
         });
   }

   render() {
      return (
         <div className="nowplaying container">
            <div className="container">
               <h3>new plaing</h3>
               <div className="row">
                  {this.state.movies.map((movie) => {
                     return (
                        <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
                           <div className="card" style={{ width: '18rem' }}>
                              <Moviecard longer="longer" overview={movie.overview} title={movie.original_title} src={movie.backdrop_path} idmovie={movie.id} />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      );
   }
}

export default Nowplaying;
