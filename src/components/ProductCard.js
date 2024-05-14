import React from "react"
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToWishlist } from "../features/products/productSlice";
import prodcompare from "../images/prodcompare.svg"
import wish from "../images/wish.svg"
import watch from '../images/watch.jpg'
import view from '../images/view.svg'
import addcart from '../images/add-cart.svg'
const ProductCard =(props)=> {
    const {grid, data} = props
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let location = useLocation();
    const addToWishList = (prodId) =>{
console.log({prodId})
        dispatch(addToWishlist(prodId))
    }

    return (<>
    {
        data?.map((item, index) => {
            return(
                <div key={index}
                className={`${location.pathname == "/store" ? `gr-${grid}`: "col-3"}`}>
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
      <p className={`description ${grid === 12 ? "d-block": "d-none"}`} dangerouslySetInnerHTML={{__html:item?.description}}></p>
        <p className="price"> {item?.price} dt</p>
    </div>
    
    <div className="action-bar position-absolute">
        <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent"><img src={prodcompare} alt="compare"/></button>
            <button className="border-0 bg-transparent"><img onClick={()=>navigate("/product/"+item?._id)}  src={view} alt="view"/></button>
            <button className="border-0 bg-transparent"><img src={addcart} alt="addcart"/></button>
        </div>
    </div>
    
                </div>
            </div>
            )
        })
    }
      
          </>
    )
}
export default ProductCard;