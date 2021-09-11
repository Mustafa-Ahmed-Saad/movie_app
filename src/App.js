import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import NotFound from './components/page404';
import HomePage from './components/homepage';
import Nowplaying from './components/nowplaying';
import Login from './components/login';
import Moviepage from './components/moviepage';
import Register from './components/register';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Tvmoviepage from './components/tvmoviepage';
import Tvseasonmoviepage from './components/tvseasonmoviepage';
import { read_cookie } from 'sfcookies';
import Searchpage from './components/searchpage';
import Episode from './components/episode';
import { createSession, GuestSessionId, GetToken } from './components/api';

export default class App extends React.Component {
   state = {
      loginState: false,
      token: { request_token: '' },
      guest_session_id: { guest_session_id: '' },
      SessionId: { request_token: '' },
   };

   handellogin = () => {
      let loginState = read_cookie('email-password').email === undefined ? false : true;
      this.setState({
         loginState: loginState,
      });
   };

   handellogout = () => {
      this.setState({
         loginState: false,
      });
   };

   componentDidMount() {
      this.handellogin();

      GuestSessionId()
         .then((respone) => {
            this.setState({
               guestSessionId: { guest_session_id: respone.data.guest_session_id },
            });
         })
         .catch((error) => {
            alert('error to get guest_session_id');
         });

      GetToken()
         .then((respone) => {
            this.setState({
               token: { request_token: respone.data.request_token },
            });
         })
         .catch((error) => {
            alert('error to get GetToken');
         });

      createSession(this.state.token)
         .then((respone) => {})
         .catch((error) => {
            alert('error to get GetToken');
         });
   }

   switchRoute = (params) => {
      if (this.state.loginState === true) {
         return (
            <Switch>
               <Route path="/movie_app" exact component={HomePage} />
               <Route path="/movie_app/nowplaying/" exact component={Nowplaying} />
               <Route path={'/movie_app/movies/:idmovie'} exact render={(props) => <Moviepage guest_session_id={this.state.guest_session_id} token={this.state.token} {...props} />} />
               <Route path={'/movie_app/tv/season/:idmovie'} exact render={(props) => <Tvseasonmoviepage guest_session_id={this.state.guest_session_id} token={this.state.token} {...props} />} />
               <Route path={'/movie_app/tv/season/:idmovie/:episodes'} exact render={(props) => <Episode guest_session_id={this.state.guest_session_id} token={this.state.token} {...props} />} />
               <Route path={'/movie_app/tv/:idmovie'} exact render={(props) => <Tvmoviepage guest_session_id={this.state.guest_session_id} token={this.state.token} {...props} />} />
               <Route path={'/movie_app/searchpage/:searchmovie'} exact component={Searchpage} />
               <Route path={'/'} component={HomePage} />
               <Route component={NotFound} />
               <Route path={'/movie_app/login'} render={(props) => <Login handellogin={this.handellogin} {...props} />} />
               <Route path={'/movie_app/register'} component={Register} />
            </Switch>
         );
      } else if (this.state.loginState === false) {
         return (
            <div>
               <p className="text-center">please login or regiter to acces our movies</p>
               <Switch>
                  <Route className="nav-link" path={'/movie_app/login'} render={(props) => <Login handellogin={this.handellogin} {...props} />} />
                  <Route className="nav-link" path={'/movie_app/register'} component={Register} />
               </Switch>
            </div>
         );
      }
   };

   render() {
      return (
         <div className="App">
            <HashRouter hashType="noslash">
               <Navbar loginState={this.state.loginState} handellogout={this.handellogout} />
               {this.switchRoute()}
            </HashRouter>
         </div>
      );
   }
}
