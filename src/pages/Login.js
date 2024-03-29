import React, { useEffect } from 'react'
import BreadCrumb from "../components/BreadCrumb"
import Meta from "../components/Meta";
import { Link, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput' 
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
const loginSchema = yup.object().shape({

    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is Required"),

    password: yup.string().required("Password is Required"),
  });
const Login = () =>{
const authState = useSelector(state => state.auth )
console.log(authState)
    const dispatch = useDispatch();
const navigate  = useNavigate()
    const formik = useFormik({
        initialValues: {
  
          email: "",

          password: "",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
dispatch(loginUser(values))


        },
      });

useEffect(() => {
if (authState.user !== null && authState.isError === false){
  navigate('/')
}
},[authState])

    return(<><Meta title={"Login"} />
    <BreadCrumb title="Login" />
    <Container class1="login-wrapper py-5 home-wrapper-2"> <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>Login</h3>
                    <form action="" className='d-flex flex-column gap-15' onSubmit={formik.handleSubmit}>
                    <CustomInput type='email' name='email'value={formik.values.email}  onChange={formik.handleChange("email")} 
                       onBlur={formik.handleBlur("email")}    placeholder='Email' />
                                   <div className="error ">
            {formik.touched.email && formik.errors.email}
          </div>
          <CustomInput type='password' name='password'value={formik.values.password} onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}     placeholder='Mot de passe'/>
                                               <div className="error ">
            {formik.touched.password && formik.errors.password}
          </div>
                        <div> <Link to="/forgot-password">Mot de passe oublié</Link>
                        <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                            <button className='button border-0' type='submit'>Login</button>
                            <Link className='button signup' to="/signup">SignUp</Link>
                        </div>
                        
                        </div>
                    </form>
                    
                    
                    </div></div></div></Container>
</>)
}
export default Login 