import React from 'react';
import Myform from './myform';
import { read_cookie } from 'sfcookies';
import { Link } from 'react-router-dom';

class Login extends React.Component {
   state = {
      btnname: 'login',
      user: { username: '', email: '', password: '' },
   };

   checkAccount = (values) => {
      let email = values.email;
      this.setState({
         user: {
            ...values,
            username: email.slice(0, email.length - 4),
         },
      });

      // check if email is exsist in localstorage
      const myaccount = read_cookie('email-password');
      if ((values.email === myaccount.email) & (values.password === myaccount.password)) {
         this.props.handellogin();
         this.props.history.push('/movie_app');
      } else {
         alert('email or password wrong');
      }
   };

   render() {
      return (
         <div className="container">
            <Myform values={this.state.user} onSubmit={this.checkAccount} btnname={this.state.btnname} />
            <div className="regester-btn">
               <span>if you don't have acount regester now </span> <br />
               <Link type="button" className="btn btn-danger" to="/movie_app/register">
                  register
               </Link>
            </div>
         </div>
      );
   }
}

export default Login;
