import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import * as yup from "yup"
import { createAnOrder, emptyCartu, numfac } from '../features/user/userSlice';
import { AddBonCommande, AddBonCommandeEntéte, Switch,  getNumFacture } from '../util/api';

const shippingSchema = yup.object().shape({
    firstName: yup
    .string().required("First Name is Required"),
    lastName: yup
    .string().required("Last Name is Required"),
    address: yup
      .string().required("Address Details are Required"),
      state: yup.string().required("state is Required"),
    city: yup.string().required("City is Required"),
    country: yup.string().required("Country is Required"),
    pincode: yup.number().required("Pincode is Required"),
  });


const Checkout =() =>{
const dispatch = useDispatch()
const userCartState = useSelector(state => state.auth.cartProducts)
const authState = useSelector(state => state.auth )
console.log("cart" ,authState?.user?._id)
const [num , setNum] = useState([])
const navigate  = useNavigate()
const [total, setTotal]= useState(null)
const [shippingInfo , setShippingInfo]= useState(null)
const [payementInfo , setPayementInfo]= useState({razorpayOrderId:"1",razorpayPayementId:"1"})
const [cartProductState , setCartProductState]= useState([])
const authState1 = useSelector(state => state?.auth )
console.log(userCartState,"userCartState")
useEffect (() => {
    let sum = 0;
    for (let index =0 ; index < userCartState?.length; index ++){
        sum = sum + (Number (userCartState[index].quantity) * Number(userCartState[index].price))
   
    }    setTotal(sum)  
},[userCartState])
 
useEffect(() =>{

    if(authState?.orderedProduct  !== null && authState?.orderedProduct?.success == true){
navigate('/my-orders')
    }
},[authState])

useEffect(() => {
    let items = []
    for(let index=0 ; index< userCartState?.length; index++){
        items.push({product:userCartState[index].productId._id, quantity:userCartState[index].quantity, color: userCartState[index].color._id, price : userCartState[index].price })
    }
 setCartProductState(items)
},[userCartState]

)

useEffect(() => {
    dispatch(numfac())
},[]

)
useEffect(() => {
    setNum(Number(authState1?.numfac?.[0]?.valeur) + 1)
},[]

)
console.log("numFac",num)

console.log( new Date().toLocaleString(), "date")



const formik = useFormik({
    initialValues: {
        firstName:"",
        lastName:"",
        address: "",
        state :"",
        city: "",
        country: "",
        pincode: "",
        other:"",
    },
  
    validationSchema: shippingSchema,
    onSubmit: (values) => {
        
setShippingInfo(values)
        console.log(shippingInfo,"shippingInfo")

setTimeout(()=>{
   
    AddBonCommandeEntéte ( {codcli:authState?.user?._id, raisoc:`${values?.firstName}" "${ values?.lastName}` , datfac: new Date().toLocaleString()})
},300)

setTimeout(()=>{
    for(let index=0 ; index< userCartState?.length; index++){ 
        AddBonCommande ({numfac:num.toString(),numlig:index ,codeArt:userCartState[index]?.productId?.codeArt , quantity:userCartState[index].quantity ,desart:userCartState[index]?.productId?.title,datfac:new Date().toLocaleString() ,priuni:userCartState[index]?.productId?.price })
    }
   
},300)
setTimeout(()=>{
  
    dispatch(emptyCartu())
},300)
setTimeout(()=>{
  
    Switch()
},300)


setTimeout(()=>{
    dispatch(createAnOrder({totalPrice:total ,totalPriceAfterDiscount:total , orderItems:cartProductState,  payementInfo , shippingInfo:values}))

 
},2000)


    },
  });



    return(<>
    <Container class1="checkout-wrapper py-5 home-wrapper-2">   <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'>Ecommerce</h3>
                        <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label='breadcrumb'>
                            <ol className='breadcrumb'>
                                <li className='breadcrumb-item'>
                                    <Link  className="text-dark total-price" to='/cart'>Cart</Link>
                                </li>
                                &nbsp;/     &nbsp;
                                <li className='breadcrumb-item total-price active' aria-current="page">
                                   Information
                                </li>
                                &nbsp;/     &nbsp;
                                <li className='breadcrumb-item  total-price active' aria-current="page">
                                   Shipping
                                </li>
                                &nbsp;/     &nbsp;
                                <li className='breadcrumb-item total-price active' aria-current="page">
                                   Payement
                                </li>
                            </ol>

                        </nav>
                        <h4 className='title total'>Contact Information</h4>
                        <p className='user-details total'>Navdeep Dahiya (cherifsahar97@gmail.com) </p>
                        <h4 className='mb-3'>Shipping Address</h4>
                        <form onSubmit={formik.handleSubmit} action='' className='d-flex flex-wrap gap-15 justify-content-between'>
<div className='w-100'>
<select name='country' className='form-control form-select' id="" value={formik.values.country}  onChange={formik.handleChange("country")}
                     onBlur={formik.handleBlur("country")}>
<option value="" selected disabled>Select Country</option>
<option value="Tunisie" >Tunisie</option>

</select>
<div className="error ms-2 my-1">
            {formik.touched.country && formik.errors.country}
          </div>

</div>
<div className='flex-grow-1'><input type='text' placeholder='First Name' className='form-control' name='firstName' value={formik.values.firstName}  onChange={formik.handleChange("firstName")}
                     onBlur={formik.handleBlur("firstName")} />
                             <div className="error ms-2 my-1">
            {formik.touched.firstName && formik.errors.firstName}
          </div></div>
             
<div className='flex-grow-1'><input type='text' placeholder='Last Name' className='form-control'  name='lastName' value={formik.values.lastName}  onChange={formik.handleChange("lastName")}
                     onBlur={formik.handleBlur("lastName")} />
                     <div className="error ms-2 my-1">
            {formik.touched.lastName && formik.errors.lastName}
          </div></div>
<div className='w-100'><input type='text' placeholder='Address' className='form-control'  name='address' value={formik.values.address}  onChange={formik.handleChange("address")}
                     onBlur={formik.handleBlur("address")} />         <div className="error ms-2 my-1">
                     {formik.touched.address && formik.errors.address}
                   </div></div>
<div className='w-100'><input type='text' placeholder='Apartement, Suite , etc' className='form-control'name='other' value={formik.values.other}  onChange={formik.handleChange("other")}
                     onBlur={formik.handleBlur("other")} />
                        </div>
<div className='flex-grow-1'><input type='text' placeholder='City' className='form-control'name='city' value={formik.values.city}  onChange={formik.handleChange("city")}
                     onBlur={formik.handleBlur("city")} />          <div className="error ms-2 my-1">
                     {formik.touched.city && formik.errors.city}
                   </div></div>
<div><select  className='form-control form-select' id="" name='state' value={formik.values.state}  onChange={formik.handleChange("state")}
                     onBlur={formik.handleBlur("state")}>
    <option value="" selected disabled>
        Select State
    </option>
    <option value="state1"  >
    state1
    </option>
    </select>     <div className="error ms-2 my-1">
                     {formik.touched.state && formik.errors.state}
                   </div></div>
<div className='flex-grow-1'><input type='text' placeholder='Zipcode' className='form-control' name='pincode' value={formik.values.pincode}  onChange={formik.handleChange("pincode")}
                     onBlur={formik.handleBlur("pincode")} />
                         <div className="error ms-2 my-1">
                     {formik.touched.pincode && formik.errors.pincode}
                   </div></div>

<div className='w-100'>
    <div className='d-flex justify-content-between align-items-center'>
<Link to='/cart' className='text-dark'> <BiArrowBack/> Return to Cart</Link>
<Link to='/cart' className='button'>Continue to shipping</Link>
<button className='button' type='submit'>Place Order</button>
    </div>
</div>


                        </form>
                    </div>
                </div>
                <div className='col-5'>
<div  className='border-bottom py-4' >
{
    userCartState && userCartState?.map((item, index) => {
        return(<div key={index} className='d-flex gap-10 mb-2 align-items-center'>
        <div className='w-75 d-flex gap-10'>
            <div className='w-25 position-relative'>
                <span style={{"top":"-10px" , "right":"2px" }} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>{item?.quantity}</span>
                <img  className="img-fluid" width={100} height={100} src={item?.productId?.images[0]?.url} alt='product' />
            </div>
            <div>
                <h5 className='total-price'>{item?.productId?.title}</h5>
                <p  className='total-price'> {item?.color?.title}</p>
            </div>
        </div>
        <div className='flex-grow-1'>
            <h5 className='total'>$ {item?.price * item?.quantity}</h5>
        </div>
        </div>)
    })
}






</div>
<div className='border-bottom py-4'><div className='d-flex justify-content-between align-items-center'>
    <p  className='total'>Subtotal</p>
    <p className='total-price'>$ {total ? total : 0}</p>
</div>
<div className='d-flex justify-content-between align-items-center'>
    <p className='mb-0 total'>Shipping</p>
    <p className='mb-0 total-price'>$ 5</p>
</div>


</div>
<div className='d-flex justify-content-between align-items-center border-bottom py-4'>
    <h4 className='total'>Total</h4>
    <h5 className='total-price'>$ {total ? total +5: 0}</h5>
</div>

                </div>
            </div></Container>

    </>)
}
export default Checkout;