import React, { useEffect } from 'react'
import BreadCrumb from "../components/BreadCrumb"
import Meta from "../components/Meta"
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard'
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';

import {TbGitCompare} from "react-icons/tb"
import {AiOutlineHeart} from 'react-icons/ai'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import wish from "../images/wish.svg"
import { useDispatch, useSelector } from 'react-redux';
import watch from '../images/watch.jpg'
import view from '../images/view.svg'
import addcart from '../images/add-cart.svg'
import prodcompare from "../images/prodcompare.svg"
import { addRating, addToWishlist, getAProduct, getAllProducts } from '../features/products/productSlice';
import { addProdToCart, getUserCart } from '../features/user/userSlice';
import { toast } from 'react-toastify';
const SingleProduct = () => {

        const location = useLocation()
    const getProductId = location.pathname.split("/")[2]
    const [aleardyAdded , setAleadyAdded] = useState(false)
    const navigate = useNavigate()
    console.log(getProductId)
    const dispatch = useDispatch()
    const productStates = useSelector(state => state.product.prod)
    console.log(productStates,"productStates")
    const cartStates = useSelector(state => state.auth.cartProducts)
    const productState = useSelector((state) => state?.product?.product);
    console.log(cartStates,"cartStates")
    useEffect(() => {
        dispatch(getAProduct(getProductId))
        dispatch(getUserCart())
        dispatch(getAllProducts())
    }, [getProductId])

useEffect(() =>{
for(let index= 0; index < cartStates.length; index++){
    if(getProductId === cartStates[index]?.productId._id)
    {
        setAleadyAdded(true)
    }
}
},[])

const addToWishList = (prodId) =>{
    console.log({prodId})
            dispatch(addToWishlist(prodId))
        }
console.log(aleardyAdded)

    const [quantity, setQuantity] = useState(1)
    
    const UploadCart = () =>{

            dispatch(addProdToCart({productId: productStates?._id , quantity , price: productStates?.price}))
            
            window.location.href=`/cart`

    }
    const props = {width: 400, height: 600, zoomWidth: 600,
         img: productStates?.images  ?  productStates?.images[0]?.url : "https://res.cloudinary.com/djkoevvlt/image/upload/v1699450418/r7avgu52truqk3dfcohv.png"}
    const [orderedProduct , setorderedProduct ] = useState(true)
   const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }
      const [star , setStar] = useState(null)
      console.log(star)
      const [comments , setComments] =useState(null)
      const addRatingToProduct = () =>{
        if(star === null){
            toast.error("Please add star rating")    
        return false    }
        else if(comments === null) {
            toast.error("Please Write Review About the Product. ")
            return false
        }
        else{
            dispatch(addRating({star: star , comment :comments , prodId:getProductId}))
            setTimeout(()=>{
                dispatch(getAProduct(getProductId))
   
            },500)

        }            return false
      }






  return (
   <>
   <Meta title={productStates?.title} />
    <BreadCrumb title={productStates?.title} />
    <Container class1="main-product-wrapper py-5 home-wrapper-2">         <div className='row'>
                <div className='col-6'>
                    <div className='main-product-image'>
                        <div><ReactImageZoom {...props} /></div>
                    </div>
                    <div className='other-product-images d-flex flex-wrap gap-15'>
                        {productStates && productStates?.images?.map((item , index) => {
                            return (      <div><img src={item.url} alt=''  className='img-fluid'/></div>)
                        })}
                  
                       
                    </div>
                </div>
                <div className='col-6'>
<div className='main-product-details'>
<div className='border-bottom'>    <h3 className='title'>
{productStates?.title}</h3></div>
<div className='border-bottom py-3'>
    <p className='price'>$ {productStates?.price}</p>
    <div className='d-flex align-items-center gap-10'>
    <ReactStars
    count={5}
    value={productStates?.totalrating?.toString()}
edit={false}
    size={24}
    activeColor="#ffd700"
  />
  <p className='mb-0 t-review'>( {productStates?.ratings?.length} avis )</p>

    </div>
    <a className="review-btn" href='#review'>Écrire un avi</a>
</div>
<div className='py-3'>
    <div className='d-flex gap-10 align-items-center my-2'><h3 className='product-heading'>Type :</h3><p className='product-data'>{productStates?.category}</p></div>
 <div className='d-flex gap-10 align-items-center my-2'><h3 className='product-heading'>Category :</h3><p className='product-data'>{productStates?.category}</p></div>
 <div className='d-flex gap-10 align-items-center my-2'><h3 className='product-heading'>Quantité :</h3><p className='product-data'>{productStates?.quantity}</p></div>
    <div className='d-flex gap-10 align-items-center my-2'><h3 className='product-heading'>Tags :</h3><p className='product-data'>{productStates?.tags}</p></div>

{
    aleardyAdded == false && <>
        <div className='d-flex gap-10 flex-column mt-2 mb-3'>
</div></>
}
    <div className='d-flex gap-15 align-items-center flex-row mt-2 mb-3'>
{
    aleardyAdded === false && <>
            <h3 className='product-heading'>Quantité :</h3>
    <div className=''>
        <input type='number' style={{width: "70px"}} min={1} max={10} className='form-control' name='' id='' value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
    </div></>
}
    
    <div className={aleardyAdded?"ms-0":"ms-5" + 'd-flex align-items-center gap-30 ms-5'}>
    <button className='button border-0' onClick={() => {aleardyAdded? navigate('/cart') : UploadCart(productStates?._id)}} type='submit'>{aleardyAdded? "Go To Cart" : "Add to Card"} </button>
                    
    </div>
    </div>
   
   <div className='d-flex align-items-center gap-15'>

<div>
    <a href=''><AiOutlineHeart className='fs-5 me-2' />Ajouter à Wishlist</a>
</div>

   </div>
   <div className='d-flex gap-10 flex-column my-3'>
    <h3 className='product-heading'>Expédition & retours</h3>
    <p className='product-data'>Livraison et retours gratuits disponibles sur toutes les commandes ! <br/>
We ship all US domestic orders within <b>5-10 business days!</b> </p>
   </div>

   <div className='d-flex gap-10 align-items-center my-3'>
    <h3 className='product-heading'>Lien produit</h3>
 <a href='javascript:void(0);' onClick={() => {copyToClipboard(window.location.href)}} >

 Copier le lien du produit
  
  </a>
   </div>


    </div>
</div>

                </div>
            </div></Container>
<Container class1="description-wrapper py-5 home-wrapper-2">   <div className='row'>
<div className='col-12'>
<h4>Description</h4>
    <div  className='bg-white p-3'>

    <p  dangerouslySetInnerHTML={{__html:productStates?.description}} ></p>
    </div></div>

            </div></Container>
<Container class1="reviews-wrapper  home-wrapper-2" id='review'>  <div className='row'>
                <div className='col-12'>
                    <h3>Review</h3>
                 <div  className='review-inner-wrapper'>
                 <div className='review-head d-flex justify-content-between align-items-end'>
                        <div><h4 className='mb-2'>Avis des clients</h4>
                    <div className='d-flex align-items-center gap-10'>
                        <ReactStars
    count={5}
    value={productStates?.totalrating}
edit={false}
    size={24}
    activeColor="#ffd700"
  />
  <p className='mb-0'>
Basé sur {productStates?.ratings?.length} avis</p>
  </div>    
                        </div>
{orderedProduct && (<div>
    <a  className='text-dark text-decoration-underline' href=''>Écrire un avi</a>
</div>)}
                    </div>
                    <div  className='review-form py-4'>
                        <h4>Écrire un avi</h4>
         
<div>
<ReactStars
    count={5}
    value={star}
edit={true}
    size={24}
    activeColor="#ffd700"
    onChange={(e)=>{setStar(e)}}
  />
</div>
  <div>
    <textarea name="comments" id=""     onChange={(e)=>{setComments(e.target.value)}} className="w-100 form-control" cols="30" rows="4" placeholder="Comments" ></textarea>
  </div>
  <div className='d-flex justify-content-end mt-3'><button className="button border-0 " type='button' onClick={addRatingToProduct}>Submit avis</button></div>

                    </div>
                    <div className='reviews mt-4'>

                        {
                            productStates && productStates?.ratings?.map((item , index) =>{
                                return(   <div key={index} className='review'>
                                <div className='d-flex gap-10 align-items-center'>
                                 
                                    <ReactStars
        count={5}
        value={item?.star}
    edit={false}
        size={24}
        activeColor="#ffd700"
      />
                                </div>
                          <p className='mt-3'>{item?.comment}</p>
                            </div>)
                            })
                        }
                     
                    </div>
                 </div>
                </div>
            </div></Container>
 <Container class1="popular-wrapper home-wrapper-2 py-5"> <div className='row'>
 <div className="col-12">
   <h3 className="section-heading">
Nos produits populaires</h3>
 </div>


</div>
<div className='row'>

{productState?.map((item, index) => {
if(item?.tags === "popular"){
  return (       <div key={index}
    className={ "col-3"}>
    <div /* to={`${location.pathname == "/" ? "/product/:id" : location.pathname =="/product/:id" ? "/product/:id" : ":id"}`} */ className="product-card position-relative">
<div className="wishlist-icon position-absolute">
<button className="border-0 bg-transparent" onClick={(e) => {addToWishList(item?._id)}}>
<img src={wish} alt="wishlist" />

</button></div> 



<div className="product-image">
<img src={item?.images[0].url} className="img-fluid  mx-auto" width={200} alt="product image" />
<img src={watch} className="img-fluid mx-auto" width={200}   alt="product image" />

</div>
<div className="product-details">
<h6 className="brand">{item?.brand}</h6>
<h5 className="product-title">{item?.title}</h5>
<ReactStars
count={5}
value={item?.totalrating.toString()}
edit={false}
size={24}
activeColor="#ffd700"
/>

<p className="price">$ {item?.price}</p>
</div>

<div className="action-bar position-absolute">
<div className="d-flex flex-column gap-15">
<button className="border-0 bg-transparent"><img src={prodcompare} alt="compare"/></button>
<button className="border-0 bg-transparent"><img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view"/></button>
<button className="border-0 bg-transparent"><img src={addcart} alt="addcart"/></button>
</div>
</div>

    </div>
</div> )
}
})}



</div></Container>
    
    </>
  )
}

export default SingleProduct
