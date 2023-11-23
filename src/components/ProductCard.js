import React from "react"
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToWishlist } from "../features/products/productSlice";
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
      <p className={`description ${grid === 12 ? "d-block": "d-none"}`} dangerouslySetInnerHTML={{__html:item?.description}}></p>
        <p className="price">$ {item?.price}</p>
    </div>
    
    <div className="action-bar position-absolute">
        <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent"><img src="images/prodcompare.svg" alt="compare"/></button>
            <button className="border-0 bg-transparent"><img onClick={()=>navigate("/product/"+item?._id)}  src="images/view.svg" alt="view"/></button>
            <button className="border-0 bg-transparent"><img src="images/add-cart.svg" alt="addcart"/></button>
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