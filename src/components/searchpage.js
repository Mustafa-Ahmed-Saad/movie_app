import React from 'react';
import { search } from './api';
import Moviecard from './Moviecard';

class Searchpage extends React.Component {
   state = {
      moviessearched: [],
      searchvalue: this.props.match.params.searchmovie,
   };
   componentDidMount() {
      search(this.state.searchvalue)
         .then((response) => {
            this.setState({
               moviessearched: response.data.results,
            });
         })
         .catch((error) => {
            console.log(error);
            alert('error search movie');
         });
   }

   handelcardofserch = () => {
      let mykk = this.state.moviessearched.map((movie) => {
         return (
            <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
               <div className="card" style={{ width: '18rem' }}>
                  <Moviecard longer="longer" overview={movie.overview} title={movie.original_title} src={movie.backdrop_path} idmovie={movie.id} />
               </div>
            </div>
         );
      });
      return mykk;
   };

   render() {
      return (
         <div>
            <div className="container">
               <h3>search page</h3>
               <div className="row">{this.state.moviessearched.length === 0 ? <p>no resault</p> : this.handelcardofserch()}</div>
            </div>
         </div>
      );
   }
}

export default Searchpage;
