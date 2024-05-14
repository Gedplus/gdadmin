import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {BsSearch} from "react-icons/bs"
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useDispatch, useSelector } from 'react-redux'
import { array } from 'yup';
import compare from '../images/compare.svg'
import { getAProduct, getAllProducts } from '../features/products/productSlice';
import { getUserCart } from '../features/user/userSlice';
import user from '../images/user.svg'
import wishlist from '../images/wishlist.svg'
import cart from "../images/cart.svg"
import menu from "../images/menu.svg"
const Header = () => {
  const dispatch =useDispatch()
  const [paginate, setPaginate] = useState(true);
  const userCartState = useSelector(state => state?.auth?.cartProducts)

  const authState1 = useSelector(state => state?.auth )
  const productState = useSelector(state => state?.product?.product )
  const [productopt , setProductOpt] =useState([])
  const [total, setTotal]= useState(null)
  const [authState , setauthState] = useState()
  const [categories, setCategorie] = useState([])
  const navigate = useNavigate()
console.log(productState,"prod")
const getProducts = () =>{
  dispatch(getAllProducts());
}
   
useEffect(() => {
    getProducts();
},[]);
  useEffect(()=> {

    let newcategory= [];


    for(let index = 0 ; index <productState.length ; index++){
        const element= productState[index];
      
        newcategory.push(element.category)
        
    
    }
  
    setCategorie(newcategory)


},[productState])
console.log(categories,"categories")
  useEffect(() => {

    setauthState(authState1)
    }
    ,[authState1])
    console.log(authState1)
  useEffect (() => {
    let sum = 0;
    for (let index =0 ; index < userCartState?.length; index ++){
        sum = sum + (Number (userCartState[index].quantity) * Number(userCartState[index].price))
   
    }    setTotal(sum)  
},[userCartState])
useEffect(() =>{
let data=[]
for(let index=0 ; index< productState.length; index++)
{
  const element = productState[index] ;
  data.push({id: index,prod:element?._id, name:element?.title})
}
setProductOpt(data)

},[productState])

console.log(userCartState ,'sss')

const handleLogout = () =>{
  localStorage.clear()
  window.location.reload()
}

  return (
<>
<header className='header-top-strip py-3'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-6'>
        <p className='text-white mb-0' >Livraisons gratuits de plus de 200 dt et retours gratuits</p>
      </div>
      <div className='col-6'>
        <p className='text-end text-white mb-0'>
        Appelez-nous au : <a className='text-white' href="tel: ( +216 ) 58 340 618 "> ( +216 ) 58 340 618 / ( +216 ) 58 340 605</a>
        </p>
      </div>
    </div>
  </div>
</header>
<header className='header-upper py-3'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-2'>
        <h2>
          <Link className='text-white'>Général décors</Link>
        </h2>
      </div>
      <div className='col-5'>
        <div className='input-group '>
        <Typeahead
        id="pagination-example"
        onPaginate={() => console.log('Results paginated')}
        onChange={(selected) => {
navigate(`/product/${selected[0]?.prod}`)

dispatch(getAProduct(selected[0]?.prod))
        }}
        options={productopt}
        paginate={paginate}
        minLength={2}
        labelKey={"name"}
        placeholder="Rechercher des produits ici..."
      />
          <span className='input-group-text p-3' id='basic-addon2'><BsSearch className='fs-6'/></span>
        </div>
      </div>
      <div className='col-5'>
        <div className='header-upper-links d-flex align-items-center justify-content-between'>
    
          <div>        <Link to="/wishlist" className='d-flex align-items-center gap-10 text-dark' ><img src={wishlist} alt="wishlist" /><p className='mb-0 text-white'>Favourite  <br/> wishlist</p></Link></div>
          <div>         <Link to={authState?.user=== null || authState?.user=== undefined ? "/login" : "/my-profile" }className='d-flex align-items-center gap-10 text-white' >
            <img src={user} alt="user" />
            {authState?.user === null  || authState?.user=== undefined  ?     <p className='mb-0'>Log in <br/> Mon compte</p> :     <p className='mb-0'>Bienvenu {authState?.user?.firstname} </p> }
            
        </Link></div>
          <div>         <Link to="/cart" className='d-flex align-items-center gap-10 text-white'><img src={cart} alt="cart" />
          
          <div className='d-flex flex-column gap-10'><span className='badge bg-white text-dark '>{userCartState?.length ? userCartState?.length : 0}</span> <p className='mb-0'> {total ? total : 0} dt</p> </div></Link></div>
        </div>
      </div>
    </div>
  </div>
</header>
<header className='header-bottom py-3'>
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <div className='menu-bottom d-flex align-items-center gap-30'>
          <div className='dropdown'>
            <button className='btn btn-secondary dropdown-toggle bg-transparent border-0  gap-15 d-flex align-items-center'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle="dropdown"
            aria-expanded="false">
              
              <img src='images/menu.svg' alt='' />
              
              <span className='me-5 d-inline-block text-dark' >Catégories de boutique</span></button>
<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
{categories && [...new Set(categories)].map((item, index) =>{
    return        <li key={index} ><Link className='dropdown-item text-white' to={`/store/${item}`} >{item}</Link></li>
})}

</ul>


          </div>
          <div className='menu-links'>
            <div className='d-flex align-items-center gap-15'>
<NavLink  className="text-dark" to="/">Acceuil</NavLink>
<NavLink className="text-dark"  to="/store">Notre magasin</NavLink>
<NavLink className="text-dark"  to="/my-orders">Mes commandes</NavLink>
<NavLink className="text-dark"  to="/blogs">Blogs</NavLink>
<NavLink  className="text-dark"  to="/contact">Contact</NavLink>
<button onClick={handleLogout}  className='border border-0 bg-transparent text-dark text-uppercase'type='button'>Logout</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</header>

</>
  )
}

export default Header
