import React from 'react';
import { GetMovies } from './api';
import Moviecard from './Moviecard';

export default class Movies extends React.Component {
   state = {
      movies: [],
   };
   componentDidMount = () => {
      GetMovies()
         .then((response) => {
            this.setState({
               movies: response.data.results,
            });
         })
         .catch((error) => {
            alert('get users error');
         });
   };

   render() {
      return (
         <div className="Movies">
            <div></div>
            <section>
               <div className="row">
                  {this.state.movies.map((movie) => {
                     return (
                        <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
                           <div className="card" style={{ width: '18rem', minHeight: '100%' }}>
                              <Moviecard overview={movie.overview} title={movie.title} src={movie.backdrop_path} idmovie={movie.id} />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </section>
            <section>
               <h3> Top Rated</h3>
               https://api.themoviedb.org/3/movie/top_rated?api_key=api_key"
            </section>

            <section>
               <h3>recent movies</h3>
               the same you will send request Get to "https://api.themoviedb.org/3/movie/latest?api_key=api_key"
            </section>
            <section>
               <h3>up coming</h3>
               the same you will send request Get to " https://api.themoviedb.org/3/movie/upcoming?api_key=api_key"
            </section>
         </div>
      );
   }
}
