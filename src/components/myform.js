import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Myform(props) {
   const { btnname } = props;

   const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
   });

   return (
      <div className="container">
         <div className="myform">
            <Formik enableReinitialize={true} initialValues={props.values} onSubmit={props.onSubmit} validationSchema={schema}>
               {(props) => {
                  return (
                     <Form className="form" autoComplete="off">
                        <div className="mb-3">
                           <label htmlFor="exampleInputEmail1" className="form-label">
                              Email address
                           </label>
                           <Field name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                           <ErrorMessage name="email" />
                        </div>

                        <div className="mb-3">
                           <label htmlFor="exampleInputPassword1" className="form-label">
                              Password
                           </label>
                           <Field name="password" type="password" className="form-control" id="exampleInputPassword1" />
                           <ErrorMessage name="password" />
                        </div>

                        <button type="submit" className="btn btn-primary">
                           {btnname === 'login' ? 'login' : 'regester'}
                        </button>
                     </Form>
                  );
               }}
            </Formik>
         </div>
      </div>
   );
}
