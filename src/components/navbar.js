import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MyNavLink = (myNavLinkProps) => (
   <NavLink exact activeClassName="active" {...myNavLinkProps}>
      {myNavLinkProps.children}
   </NavLink>
);

class Navbar extends React.Component {
   state = {
      value: '',
   };
   livesearchvalue = (e) => {
      this.setState({
         value: e.target.value,
      });
   };

   render() {
      return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
               <Link className="navbar-brand" to="/">
                  MovieApp
               </Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <MyNavLink className="nav-link" aria-current="page" to="/movie_app">
                           Home
                        </MyNavLink>
                     </li>
                     <li className="nav-item">
                        <MyNavLink className="nav-link" to="/movie_app/nowplaying">
                           Now playing page
                        </MyNavLink>
                     </li>
                  </ul>
                  <form className="d-flex ms-2">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.livesearchvalue} />
                     <Link to={`/movie_app/searchpage/${this.state.value}`}>
                        <input
                           className="btn btn-outline-light"
                           type="submit"
                           onClick={() => {
                              setTimeout(() => {
                                 document.location.reload();
                              }, 1000);
                           }}
                           value="search"
                        />
                     </Link>
                  </form>
                  {this.props.loginState === false ? (
                     <Link type="button" className="btn btn-outline-success ms-3" to="/movie_app/login">
                        login / register
                     </Link>
                  ) : (
                     <Link type="button" className="btn btn-outline-danger ms-3" onClick={this.props.handellogout} to="/movie_app/login">
                        log out
                     </Link>
                  )}
               </div>
            </div>
         </nav>
      );
   }
}

export default Navbar;
