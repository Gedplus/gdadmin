import React from 'react'
import Marquee from 'react-fast-marquee'

import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import {services} from '../util/data'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import  moment from "moment";
import { getAllBlogs } from '../features/blogs/blogSlice'
import { getAllProducts } from '../features/products/productSlice'
import ReactStars from "react-rating-stars-component";
import banner1 from "../images/slid1.png"
import catbanner01 from "../images/slid2.png"
import catbanner02 from "../images/slid3.png"
import catbanner03 from "../images/slid4.png"
import catbanner04 from "../images/slid5.png"
import prodcompare from "../images/prodcompare.svg"
import famous1 from "../images/famous-1.webp"
import famous2 from "../images/famous-2.webp"
import famous3 from "../images/famous-3.webp"
import famous4 from "../images/famous-4.webp"
import wish from "../images/wish.svg"
import watch from '../images/watch.jpg'
import view from '../images/view.svg'
import addcart from '../images/add-cart.svg'
import brand01 from '../images/brand-01.png'
import brand02 from '../images/brand-02.png'
import brand03 from '../images/brand-03.png'
import brand04 from '../images/brand-04.png'
import brand05 from '../images/brand-05.png'
import brand06 from '../images/brand-06.png'
import brand07 from '../images/brand-07.png'
import brand08 from '../images/brand-08.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToWishlist } from "../features/products/productSlice";
const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);
  const navigate = useNavigate()
  const dispatch = useDispatch();
 
useEffect(() => {
  getBlogs();
  getProducts();
},[]);

const getBlogs = () =>{
  dispatch(getAllBlogs());
}
const getProducts = () =>{
  dispatch(getAllProducts());
}
    const addToWishList = (prodId) =>{
console.log({prodId})
        dispatch(addToWishlist(prodId))
    }
console.log(productState,"prod")
  return (
 <>
 <Container class1='home-wrapper-1 py-5'>    <div className='row'>
      <div className='col-6'>
        <div className='main-banner position-relative '>
          <img src={banner1} className="img-fluid rounded-3" alt='mein banner' />
          <div className='main-banner-content position-absolute'>



          </div>
        </div>
      </div>
      <div className='col-6'>
<div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
<div className='small-banner position-relative '>
          <img src={catbanner01} className="img-fluid rounded-3" alt='mein banner' />
          <div className='small-banner-content position-absolute'>




          </div>
        </div>
        <div className='small-banner position-relative '>
          <img src={catbanner02} className="img-fluid rounded-3" alt='mein banner' />
          <div className='small-banner-content position-absolute'>




          </div>
        </div>
        <div className='small-banner position-relative '>
          <img src={catbanner03} className="img-fluid rounded-3" alt='mein banner' />
          <div className='small-banner-content position-absolute'>




          </div>
        </div>
        <div className='small-banner position-relative '>
          <img src={catbanner04} className="img-fluid rounded-3" alt='mein banner' />
          <div className='small-banner-content position-absolute'>




          </div>
        </div>
</div>


      </div>
    </div></Container>
<Container  class1='home-wrapper-2 py-5'><div className='row'>
      <div className='col-12'>
        <div className='services d-flex align-items-center justify-content-between'>
{
  services?.map((i,j) =>{
    return(<div className='d-flex align-items-center gap-15' key={j}><img src={i.image} alt='services'/>
    <div>
      <h6>{i.title}</h6>
      <p className='mb-0'>{i.tagline}</p>
    </div>
    </div>)
  })
}





        </div>




      </div>
    </div></Container>

 <Container class1="featured-wrapper home-wrapper-2 py-5"><div className='row'>
      <div className="col-12">
        <h3 className="section-heading">Collection en vedette</h3>
      </div>
      {productState?.map((item, index) => {
if(item?.tags === "featured"){
  return (       <div key={index}
    className={ "col-3 py-3"}>
    <div /* to={`${location.pathname == "/" ? "/product/:id" : location.pathname =="/product/:id" ? "/product/:id" : ":id"}`} */ className="product-card position-relative">
<div className="wishlist-icon position-absolute">
<button className="border-0 bg-transparent" onClick={(e) => {addToWishList(item?._id)}}>
<img src={wish} alt="wishlist" />

</button></div> 



<div className="product-image">
<img src={item?.images[0]?.url} className="img-fluid  mx-auto" width={250} alt="product image" />

<img src={item?.images[0]?.url} className="img-fluid  mx-auto" width={250} alt="product image" />
</div>
<div className="product-details">

<h5 className="product-title">{item?.title}</h5>
<ReactStars
count={5}
value={item?.totalrating.toString()}
edit={false}
size={24}
activeColor="#ffd700"
/>

<p className="price"> {item?.price} dt</p>
</div>

<div className="action-bar position-absolute">
<div className="d-flex flex-column gap-15">

<button className="border-0 bg-transparent"><img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view"/></button>
<button className="border-0 bg-transparent"><img src={addcart} alt="addcart"/></button>
</div>
</div>

    </div>
</div> )
}
})}

    </div></Container>



<Container class1="popular-wrapper home-wrapper-2 py-5"> <div className='row'>
      <div className="col-12">
        <h3 className="section-heading">Nos produits populaires</h3>
      </div>


    </div>
    <div className='row'>
    {productState?.map((item, index) => {
if(item?.tags === "popular"){
  return (       <div key={index}
    className={ "col-3 py-3"}>
    <div /* to={`${location.pathname == "/" ? "/product/:id" : location.pathname =="/product/:id" ? "/product/:id" : ":id"}`} */ className="product-card position-relative">
<div className="wishlist-icon position-absolute">
<button className="border-0 bg-transparent" onClick={(e) => {addToWishList(item?._id)}}>
<img src={wish} alt="wishlist" />

</button></div> 



<div className="product-image">
<img src={item?.images[0]?.url} className="img-fluid  mx-auto" width={250} alt="product image" />
<img src={item?.images[0]?.url} className="img-fluid  mx-auto" width={250} alt="product image" />

</div>
<div className="product-details">

<h5 className="product-title">{item?.title}</h5>
<ReactStars
count={5}
value={item?.totalrating.toString()}
edit={false}
size={24}
activeColor="#ffd700"
/>

<p className="price"> {item?.price} dt</p>
</div>

<div className="action-bar position-absolute">
<div className="d-flex flex-column gap-15">

<button className="border-0 bg-transparent"><img onClick={()=>navigate("/product/"+item?._id)} src={view} alt="view"/></button>
<button className="border-0 bg-transparent"><img src={addcart} alt="addcart"/></button>
</div>
</div>

    </div>
</div> )
}
})}



    </div></Container>




<Container class1="blog-wrapper home-wrapper-2 py-5">
<div className='row'>
      <div className="col-12">
        <h3 className="section-heading">Nos derniers blogs</h3>
      </div>

    </div>
    <div className='row'>
    {blogState?.map((item,index)=>{
 if(index < 3) {
  return(
    <div className="col-3 "key={item?._id}>
<BlogCard id={item?._id} title={item?.title} description={item?.description} date={moment().format(item?.created_at)} image={item?.images[0]?.url} />
</div>

)
 }
    })}



    </div>
</Container>



 
 </>
  )
}

export default Home
