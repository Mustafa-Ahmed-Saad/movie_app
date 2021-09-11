import React from 'react';
import Myform from './myform';
import { createRequestToken } from './api';
import { bake_cookie } from 'sfcookies';

class Register extends React.Component {
   state = {
      btnname: 'register',
      user: { email: '', password: '' },
   };

   addUser = (values) => {
      this.setState({
         user: {
            ...values,
         },
      });

      createRequestToken()
         .then((response) => {
            // add token in localstorage
            bake_cookie('token', response.data.request_token);
         })
         .catch((error) => {
            console.log(error);
            alert('error in createRequestToken');
         });

      // add user in localstorage
      bake_cookie('email-password', values);
      this.setState({
         user: {
            ...this.state.user,
            email: '',
            password: '',
            formof: 'regester',
         },
      });

      this.props.history.push('/movie_app/login');
   };

   render() {
      return (
         <div className="container">
            <Myform values={this.state.user} onSubmit={this.addUser} formof={this.state.formof} btnname={this.state.btnname} />
         </div>
      );
   }
}

export default Register;
