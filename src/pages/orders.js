import React, { useDebugValue, useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/user/userSlice';
const Orders = () =>{
    const dispatch = useDispatch()
    const OrderState = useSelector(state => state.auth.getorderedProduct)
console.log(OrderState, "sahar")
useEffect(()=>{
    dispatch(getOrders())
}, [])

    return (
    <>
        <BreadCrumb title="My Orders" />
        <Container class1="cart-wrapper home-wrapper-2 py-5">
<div className='row'>
    <div className='col-12'>
        <div className='row'>
            <div className='col-3'>
                <h5>Numéro de commande</h5>
            </div>
            <div className='col-3'>
                <h5>Montant total</h5>
            </div>
            <div className='col-3'>
                <h5>Montant total après remise</h5>
            </div>
            <div className='col-3'>
                <h5>Status </h5>
            </div>
        </div>
   <div className='col-12 mt-3'>

{OrderState && OrderState?.orders?.map((item, index) => {
    return(   <div className='row my-3 pt-3'  style={{backgroundColor:"#febd69"}}key={index}>
    <div className='col-3'>
        <p>{item?._id}</p>
    </div>
    <div className='col-3'>
        <p> {item?.totalPrice}</p>
    </div>
    <div className='col-3'>
        <p>{item?.totalPriceAfterDiscount}</p>
    </div>
    <div className='col-3'>
        <p>{item?.orderStatus} </p>
    </div>
    <div className='col-12'>
<div className='row py-3' style={{backgroundColor:"#232f3e"}}>
    <div className='col-3'>
        <h6 className='text-white'>Nom du produit</h6>
    </div>
    <div className='col-3'>
        <h6 className='text-white'>Quantité</h6>
    </div>
    <div className='col-3'>
        <h6 className='text-white'>Prix</h6>
    </div>
    <div className='col-3'>
        <h6 className='text-white'>Couleur </h6>
    </div>
    </div>
    </div>

    {item?.orderItems?.map((i,index) => {
        return(
            <div className='col-12'>
            <div className='row  py-3' style={{backgroundColor:"#232f3e"}} >
                <div className='col-3'>
                    <p className='text-white'>{i?.product?.title}</p>
                </div>
                <div className='col-3'>
                    <p className='text-white'>{i?.quantity}</p>
                </div>
                <div className='col-3'>
                    <p className='text-white'>{i?.price}</p>
                </div>
                <div className='col-3'>
                    <p><ul className="colors ps-0"><li style={{backgroundColor: i?.color?.title}}></li></ul> </p>
                </div>
                </div>
                </div>
        )
    })}
 




</div>)
})}

   </div>
    </div>
</div>





        </Container>
    </>
    )
}
export default Orders;