import React from 'react';
import { Link } from 'react-router-dom';
import Movies from './movies';
import Tv from './tv';

export default function HomePage(props) {
   return (
      <div className="homepage container">
         <div className="bd-example">
            <ul className="nav nav-tabs mb-3 justify-content-center" id="myTab" role="tablist">
               <li className="nav-item" role="presentation">
                  <button className="nav-link active p-0" id="movies-tab" data-bs-toggle="tab" data-bs-target="#movies" type="button" role="tab" aria-controls="home" aria-selected="true">
                     <Link className="text-decoration-none" to="/movie_app/movies">
                        Movies
                     </Link>
                  </button>
               </li>
               <li className="nav-item" role="presentation">
                  <button className="nav-link p-0" id="tv-tab" data-bs-toggle="tab" data-bs-target="#tv" type="button" role="tab" aria-controls="profile" aria-selected="false">
                     <Link className="text-decoration-none" to="/movie_app/tv">
                        TV
                     </Link>
                  </button>
               </li>
            </ul>
            <div className="tab-content" id="myTabContent">
               <div className="tab-pane fade active show" id="movies" role="tabpanel" aria-labelledby="movies-tab">
                  {/* Movies */}
                  <Movies />
               </div>
               <div className="tab-pane fade" id="tv" role="tabpanel" aria-labelledby="tv-tab">
                  {/* TV */}
                  <Tv />
               </div>
            </div>
         </div>
      </div>
   );
}
