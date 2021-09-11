import React from 'react';
import { Link } from 'react-router-dom';
import { bake_cookie } from 'sfcookies';

class Moviecard extends React.Component {
   state = {
      kk: true,
   };

   refresh = (idmovie) => {
      document.documentElement.scrollTop = 0;
      setTimeout(() => {
         document.location.reload();
      }, 1000);
   };

   handelLink = () => {
      if (this.props.tvsolonger === 'tvsolonger') {
         return (
            <Link to={`/movie_app/tv/season/${this.props.seasonnumber}/${this.props.episodenumber}`} tvid={this.props.tvid} className="btn btn-primary">
               Go it
            </Link>
         );
      } else if (this.props.tvlonger === 'tvlonger') {
         return (
            <Link
               to={`/movie_app/tv/season/${this.props.seasonnumber}`}
               tvid={this.props.tvid}
               className="btn btn-primary"
               onClick={() => {
                  bake_cookie('tvid', this.props.tvid);
               }}
            >
               Go it
            </Link>
         );
      } else {
         if (this.props.ffrom === 'tv') {
            return (
               <Link to={`/movie_app/tv/${this.props.idmovie}`} className="btn btn-primary">
                  Go it
               </Link>
            );
         } else if (this.props.longer === 'longer') {
            return (
               <Link
                  to={`/movie_app/movies/${this.props.idmovie}`}
                  className="btn btn-primary"
                  onClick={() => {
                     this.refresh(this.props.idmovie);
                  }}
               >
                  Go it
               </Link>
            );
         } else {
            return (
               <div>
                  <Link to={`/movie_app/movies/${this.props.idmovie}`} className="btn btn-primary">
                     Go it
                  </Link>
               </div>
            );
         }
      }
   };

   render() {
      return (
         <>
            <img src={`https://image.tmdb.org/t/p/w500${this.props.src}`} className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{this.props.title}</h5>
               <p className="card-text">{this.props.overview}</p>
               {this.handelLink()}
            </div>
         </>
      );
   }
}

export default Moviecard;
