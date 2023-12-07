import React from 'react'
import BreadCrumb from "../components/BreadCrumb"
import Meta from "../components/Meta"
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { forgetpasswordToken } from '../features/user/userSlice';
const forgetSchema = yup.object().shape({

    email: yup
      .string()
      .email("L'e-mail doit être valide")
      .required("L'e-mail est requis"),


  });
const Forgetpassword = () =>{
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
  
          email: "",


        },
        validationSchema: forgetSchema,
        onSubmit: (values) => {

dispatch(forgetpasswordToken(values))
        },
      });

    return(<>
    <Meta title={"Forgot Password"} />
    <BreadCrumb title="Forgot Password" />
    <Container class1="login-wrapper py-5 home-wrapper-2"> <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Réinitialisez votre mot de passe</h3>
                    <p className='text-center mt-2 mb-3'>Nous vous enverrons un e-mail pour réinitialiser le mot de passe</p>
                    <form action="" className='d-flex flex-column gap-15' onSubmit={formik.handleSubmit}>
                    <CustomInput type='email' name='email'value={formik.values.email}  onChange={formik.handleChange("email")} 
                       onBlur={formik.handleBlur("email")}    placeholder='Email' />
                                   <div className="error ">
            {formik.touched.email && formik.errors.email}
          </div>
                     
                        <div>
                        <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                            <button className='button border-0' type="submit">Submit</button>
                            <Link to="/login">Annuler</Link>
                        </div>
                        
                        </div>
                    </form>
                    
                    
                    </div></div></div></Container>
  </>)
}
export default Forgetpassword