import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin , BsGithub , BsYoutube , BsInstagram } from 'react-icons/bs'
import newsletter from '../images/newsletter.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/products/productSlice'
const Footer = () => {
  const [categories, setCategorie] = useState([])
  const dispatch =useDispatch()
  const productState = useSelector(state => state?.product?.product )
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
  return (
    <>
   
      <footer className='py-4'>
<div className='container-xxl'>
  <div className='row'>
    <div className='col-4'><h4 className='text-white mb-4'>Contactez-nous</h4>
    <div >
      <address className='text-white fs-6'>Hno : 277 Near Vill chopal, <br/> Sonipat, Haryana <br/> PinCode: 131103</address>
      <a href='tel: +91 8264954234' className='mt-3 d-block mb-1 text-white'>+91 8264954234</a>
      <a href='mailto: cherifsahar97@gmail.com' className='mt-2 d-block mb-0 text-white '>cherifsahar97@gmail.com</a>
<div  className='social-icons d-flex align-items-center gap-30 mt-4'>
<a className='text-white' href=''>
<BsLinkedin className=' fs-4'/>

</a>
<a className='text-white' href=''>
<BsInstagram className='fs-4' />
</a>
<a className='text-white' href=''>
<BsGithub  className='fs-4' />
</a>
<a className='text-white' href=''>
<BsYoutube className='fs-4' />
</a>
</div>





      </div></div>
    <div className='col-3'><h4 className='text-white mb-4'>Information</h4>
    <div className='footer-links d-flex flex-column'>
      <Link className="text-white py-2 mb-1" to="/privacy-policy">Politique de confidentialité</Link>
      <Link className="text-white py-2 mb-1" to="/refund-policy">Politique de remboursement</Link>
      <Link className="text-white py-2 mb-1" to="shipping-policy">Politique d'expédition</Link>
      <Link className="text-white py-2 mb-1" to="term-conditions">Terms & conditions </Link>
      <Link className="text-white py-2 mb-1" to="blogs">Blogs</Link></div>
    
    
    
    </div>
    <div className='col-3'><h4 className='text-white mb-4'>Compte</h4>
    <div className='footer-links d-flex flex-column'>
      <Link className="text-white py-2 mb-1">À propos</Link>
      <Link className="text-white py-2 mb-1">Faq</Link>
      <Link className="text-white py-2 mb-1">Contact</Link>
</div></div>
    <div className='col-2'><h4 className='text-white mb-4'>Liens rapides</h4>
    <div className='footer-links d-flex flex-column'>

    {categories && [...new Set(categories)].map((item, index) =>{
    return ( <Link className="text-white py-2 mb-1" to={`/store/${item}`} >{item} </Link>)
     })}</div></div>
  </div>
</div>




      </footer>
      <footer className='py-4'>
        <div className='container xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered by Gedplus</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
