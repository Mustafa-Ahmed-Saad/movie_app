import React from 'react';
import { tvpoupular, tvtoprated, tvlatest } from './api';
import Moviecard from './Moviecard';

class Tv extends React.Component {
   state = {
      tvmovies: [],
      tvtoprat: [],
      tvlate: [],
   };
   componentDidMount() {
      tvpoupular()
         .then((response) => {
            this.setState({
               tvmovies: response.data.results,
            });
         })
         .catch((error) => {
            console.log(error);
            alert('error in get tvpoupular');
         });

      tvtoprated()
         .then((response) => {
            this.setState({
               tvtoprat: response.data.results,
            });
         })
         .catch((error) => {
            console.log(error);
            alert('error in get tv toprated');
         });

      tvlatest()
         .then((response) => {
            console.log(response);
            this.setState({
               tvlate: response.data.results,
            });
         })
         .catch((error) => {
            console.log(error);
            alert('error in get tv latest');
         });
   }

   handelatest = () => {
      this.state.tvlate.map((movie) => {
         return (
            <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
               <div className="card" style={{ width: '18rem', minHeight: '100%' }}>
                  <Moviecard ffrom="tv" overview={movie.overview} title={movie.title} src={movie.backdrop_path} idmovie={movie.id} />
               </div>
            </div>
         );
      });
   };

   render() {
      return (
         <div className="tvcontainer">
            <section className="tv">
               <h3>tv popular</h3>
               <div className="row">
                  {this.state.tvmovies.map((movie) => {
                     return (
                        <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
                           <div className="card" style={{ width: '18rem', minHeight: '100%' }}>
                              {/* <!-- Todo: -->*/}
                              {/* check on ffrom if it was found get details of tv */}
                              <Moviecard ffrom="tv" overview={movie.overview} title={movie.name} src={movie.backdrop_path} idmovie={movie.id} />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section className="tv">
               <h3>tv top rated</h3>
               <div className="row">
                  {this.state.tvtoprat.map((movie) => {
                     return (
                        <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
                           <div className="card" style={{ width: '18rem', minHeight: '100%' }}>
                              <Moviecard ffrom="tv" overview={movie.overview} title={movie.name} src={movie.backdrop_path} idmovie={movie.id} />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section className="tv">
               <h3>tv latest</h3>
               <div className="row">
                  {this.state.tvlate === 0 || 'undefind' ? (
                     <p>no resault</p>
                  ) : (
                     () => {
                        this.handelatest();
                     }
                  )}
               </div>
            </section>
         </div>
      );
   }
}

export default Tv;
