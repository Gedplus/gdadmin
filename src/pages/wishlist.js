import React, { useEffect } from "react"
import BreadCrumb from "../components/BreadCrumb"
import Meta from "../components/Meta";
import Container from "../components/Container";
import { getUserProductWishlist } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import cross from '../images/cross.svg'
const Wishlist = () =>{

    const dispatch = useDispatch();
    const wishlistState = useSelector((state) => state.auth.wishlist.wishlist);
useEffect(() => {
    getWishlist();
},[]);

const getWishlist = () =>{
    dispatch(getUserProductWishlist());
}
const removeFromWishlist =(id) => {
    dispatch(addToWishlist(id))
    setTimeout(() => {
        dispatch(getUserProductWishlist())},300);

}
    return(<> 
     <Meta title={"Wishlist"} />
        <BreadCrumb title="Wishlist" />
        <Container class1="wishlist-wrapper home-wrapper-2 py-5">  <div className="row">
            { wishlistState === 0 && <div className="text-center fs-3">
Pas de données</div>}
{
    wishlistState?.map((item,index) => {
        return(
            <div className="col-3" key={index}>
            <div className="wishlist-card position-relative">
            <img src={cross}  onClick={()=>{removeFromWishlist(item?._id)}} alt="cross" className="position-absolute cross img-fluid" />
            <div className="wishlist-card-image">
                <img src={item?.images[0]?.url} alt="watch" className="img-fluid w-100" />
            </div>
       <div className=" py-3 px-3" >
       <h5 className="title">{item?.title}</h5>
            <h6 className="price">{item?.price}</h6>
       </div>
            </div>
        </div>
        )
    })
}

                
          
                </div></Container>
 
    </>)
}
export default Wishlist;