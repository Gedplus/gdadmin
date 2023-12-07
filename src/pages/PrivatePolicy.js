import React from 'react'
import BreadCrumb from "../components/BreadCrumb"
import Meta from "../components/Meta"
import Container from '../components/Container'
const PrivatePolicy = () => {
  return (
 <>  <Meta title={"Politique de confidentialité"} />
 <BreadCrumb title="Politique de confidentialité" />
 <Container class1="policy-wrapper py-5 home-wrapper-2">  <div className='row'>
            <div className='col-12'>
                <div className='policy'></div></div></div></Container>
</>
 
  )
}

export default PrivatePolicy
