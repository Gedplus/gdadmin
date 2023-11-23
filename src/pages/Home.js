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
          <img src='images/main-banner-1.jpg' className="img-fluid rounded-3" alt='mein banner' />
          <div className='main-banner-content position-absolute'>
<h4>SUPERCHARGED FOR PROS.</h4>
<h5>iPad S13+ Pro</h5>
<p>From $999.00 or $41.62/mo.</p>
<Link className='button'>BUY NOW</Link>


          </div>
        </div>
      </div>
      <div className='col-6'>
<div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
<div className='small-banner position-relative '>
          <img src='images/catbanner-01.jpg' className="img-fluid rounded-3" alt='mein banner' />
          <div className='small-banner-content position-absolute'>
<h4>Best Sake</h4>
<h5>iPad S13+ Pro.</h5>
<p>From $999.00 <br/>or $41.62/mo.</p>



          </div>
        </div>
        <div className='small-banner position-relative '>
          <img src='images/catbanner-02.jpg' className="img-fluid rounded-3" alt='mein banner' />
          <div className='small-banner-content position-absolute'>
<h4>NEW ARRIVAL</h4>
<h5>But IPad Alr</h5>
<p>From $999.00<br/> or $41.62/mo.</p>



          </div>
        </div>
        <div className='small-banner position-relative '>
          <img src='images/catbanner-03.jpg' className="img-fluid rounded-3" alt='mein banner' />
          <div className='small-banner-content position-absolute'>
<h4>NEW ARRIVAL</h4>
<h5>But IPad Alr</h5>
<p>From $999.00<br/> or $41.62/mo.</p>



          </div>
        </div>
        <div className='small-banner position-relative '>
          <img src='images/catbanner-04.jpg' className="img-fluid rounded-3" alt='mein banner' />
          <div className='small-banner-content position-absolute'>
<h4>NEW ARRIVAL</h4>
<h5>But IPad Alr</h5>
<p>From $999.00<br/> or $41.62/mo.</p>



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
{/*<Container class1="home-wrapper-2 py-5"> <div className='row'>
      <div className='col-12'>
        <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
<div className='d-flex gap align-items-center'>
  <div>
    <h6>Camera</h6>
<p>10 Items</p>
  </div>
  <img src='images/camera.jpg' alt='camera' />
</div>
<div className='d-flex gap align-items-center'>
  <div>
    <h6>Smart Tv</h6>
<p>10 Items</p>
  </div>
  <img src='images/tv.jpg' alt='tv' />
</div>
<div className='d-flex gap align-items-center'>
  <div>
    <h6>Smart Watches</h6>
<p>10 Items</p>
  </div>
  <img src='images/tv.jpg' alt='camera' />
</div>
<div className='d-flex gap align-items-center'>
  <div>
    <h6>Music & Gaming</h6>
<p>10 Items</p>
  </div>
  <img src='images/headphone.jpg' alt='camera' />
</div>
<div className='d-flex gap align-items-center'>
  <div>
    <h6>Camera</h6>
<p>10 Items</p>
  </div>
  <img src='images/camera.jpg' alt='camera' />
</div>
<div className='d-flex gap align-items-center'>
  <div>
    <h6>Smart Tv</h6>
<p>10 Items</p>
  </div>
  <img src='images/tv.jpg' alt='tv' />
</div>
<div className='d-flex gap align-items-center'>
  <div>
    <h6>Smart Watches</h6>
<p>10 Items</p>
  </div>
  <img src='images/tv.jpg' alt='camera' />
</div>
<div className='d-flex gap align-items-center'>
  <div>
    <h6>Music & Gaming</h6>
<p>10 Items</p>
  </div>
  <img src='images/headphone.jpg' alt='camera' />
</div>
        </div>
      </div>
</div></Container>*/}
 <Container class1="featured-wrapper home-wrapper-2 py-5"><div className='row'>
      <div className="col-12">
        <h3 className="section-heading">Featured Collection</h3>
      </div>
      {productState?.map((item, index) => {
if(item?.tags === "featured"){
  return (       <div key={index}
    className={ "col-3"}>
    <div /* to={`${location.pathname == "/" ? "/product/:id" : location.pathname =="/product/:id" ? "/product/:id" : ":id"}`} */ className="product-card position-relative">
<div className="wishlist-icon position-absolute">
<button className="border-0 bg-transparent" onClick={(e) => {addToWishList(item?._id)}}>
<img src="images/wish.svg" alt="wishlist" />

</button></div> 



<div className="product-image">
<img src={item?.images[0].url} className="img-fluid  mx-auto" width={200} alt="product image" />
<img src="images/watch.jpg" className="img-fluid mx-auto" width={200}   alt="product image" />

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
<button className="border-0 bg-transparent"><img src="images/prodcompare.svg" alt="compare"/></button>
<button className="border-0 bg-transparent"><img onClick={()=>navigate("/product/"+item?._id)} src="images/view.svg" alt="view"/></button>
<button className="border-0 bg-transparent"><img src="images/add-cart.svg" alt="addcart"/></button>
</div>
</div>

    </div>
</div> )
}
})}

    </div></Container>
<Container class1="famous-wrapper py-5 home-wrapper-2"><div className='row'>
    <div className='col-3'>
      <div className='famous-card position-relative'>
        <img src='images/famous-1.webp' className="img-fluid" alt='famous' />
        <div className='famous-content position-absolute'> 
        <h5>Big Screen</h5>
<h6>Smart Watch Series 7</h6>
<p>From $399or $15.62/mo. for 24 mo .*</p></div>


      </div>
    </div>
    <div className='col-3'>
      <div className='famous-card position-relative'>
        <img src='images/famous-2.webp' className="img-fluid" alt='famous' />
        <div className='famous-content position-absolute'> 
        <h5 className='text-dark'>Studio Display</h5>
<h6 className='text-dark' >600 nits of brightness.</h6>
<p className='text-dark'> 27-inch 5K Retina display</p></div>


      </div>
    </div>
    <div className='col-3'>
      <div className='famous-card position-relative'>
        <img src='images/famous-3.webp' className="img-fluid" alt='famous' />
        <div className='famous-content position-absolute'> 
        <h5 className='text-dark'>smartphones</h5>
<h6 className='text-dark' >Smartphone 13 Pro.</h6>
<p className='text-dark'> Now in Green. From $999.00 or $41.62/mo.
</p></div>


      </div>
    </div>
    <div className='col-3'>
      <div className='famous-card position-relative'>
        <img src='images/famous-4.webp' className="img-fluid" alt='famous' />
        <div className='famous-content position-absolute'> 
        <h5 className='text-dark'>home speakers</h5>
<h6 className='text-dark' >Room-filling sound.</h6>
<p className='text-dark'> From $699 or $116.58/mo. for 12 mo.*</p></div>


      </div>
    </div>
  </div></Container>

<Container class1="special-wrapper py-5 home-wrapper-2"><div className='row'>
    <div className="col-12">
        <h3 className="section-heading">Special Products</h3>
      </div>
    </div>
    <div className='row '>
{productState?.map((item, index) => {
if(item?.tags === "special"){
  return (   <SpecialProduct  key={index} title={item?.title}  brand={item?.brand} totalrating={item?.totalrating.toString()}
  price={item?.price} sold={item?.sold} quantity={item?.quantity} id={item?._id} /> )
}
})}




  
    </div></Container>
<Container class1="popular-wrapper home-wrapper-2 py-5"> <div className='row'>
      <div className="col-12">
        <h3 className="section-heading">Our Popular Products</h3>
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
<img src="images/wish.svg" alt="wishlist" />

</button></div> 



<div className="product-image">
<img src={item?.images[0].url} className="img-fluid  mx-auto" width={200} alt="product image" />
<img src="images/watch.jpg" className="img-fluid mx-auto" width={200}   alt="product image" />

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
<button className="border-0 bg-transparent"><img src="images/prodcompare.svg" alt="compare"/></button>
<button className="border-0 bg-transparent"><img onClick={()=>navigate("/product/"+item?._id)} src="images/view.svg" alt="view"/></button>
<button className="border-0 bg-transparent"><img src="images/add-cart.svg" alt="addcart"/></button>
</div>
</div>

    </div>
</div> )
}
})}



    </div></Container>


<Container class1="marque-wrapper py-5">  <div className='row'>
      <div className='col-12'>
        <div className='marquee-inner-wrapper card-wrapper'>
          <Marquee className='d-flex'>
            <div className='mx-4 w-25'>
              <img src='images/brand-01.png' alt='brand' />
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-02.png' alt='brand' />
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-03.png' alt='brand' />
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-04.png' alt='brand' />
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-05.png' alt='brand' />
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-06.png' alt='brand' />
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-07.png' alt='brand' />
            </div>
            <div className='mx-4 w-25'>
              <img src='images/brand-08.png' alt='brand' />
            </div>

          </Marquee>
        </div>
      </div>
    </div></Container>


<Container class1="blog-wrapper home-wrapper-2 py-5">
<div className='row'>
      <div className="col-12">
        <h3 className="section-heading">Our Latest Blogs</h3>
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
