import React, { useEffect } from "react"
import BreadCrumb from "../components/BreadCrumb"
import { Helmet } from "react-helmet"
import Meta from "../components/Meta"
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import { useLocation } from "react-router-dom";
import gr2 from "../images/gr2.svg"
import gr from "../images/gr.svg"
import gr3 from "../images/gr3.svg"
import gr4 from "../images/gr4.svg"
const StoreCategory = () => {
    const[grid , setGrid] = useState(4);
    const location = useLocation();
    const getCategory = location.pathname.split("/")[2];
    const productState = useSelector((state) => state.product.product);
const [brands , setBrands] = useState([])
const [brand , setBrand] = useState(null)
const [categories, setCategorie] = useState([])

const [category, setCategory] = useState(null)
const [tags, setTags] = useState([])
const [tag, setTag] = useState(null) 
const [minPrice, setMinPrice] = useState(null)
const [maxPrice, setMaxPrice] = useState(null)
const [sort , setSort] = useState(null)
useEffect(()=>{

    setCategory(getCategory)
},[getCategory])
console.log(getCategory)
useEffect(()=> {
    let newBrands = [];
    let newcategory= [];
    let newtages =[];

    for(let index = 0 ; index <productState.length ; index++){
        const element= productState[index];
        newBrands.push( element.brand)
        newcategory.push(element.category)
        newtages.push(element.tags)
    
    }
    setBrands(newBrands)
    setCategorie(newcategory)
    setTags(newtages)

},[productState])
 console.log([...new Set(brands)] , [...new Set(categories)] , [...new Set(tags)])

    const dispatch = useDispatch();
   
useEffect(() => {
    getProducts();
},[sort , tag , brand , category , minPrice , maxPrice ]);

const getProducts = () =>{
    dispatch(getAllProducts({sort , tag , brand , category , minPrice , maxPrice}));
}

console.log(productState)



    return(<>
        <Meta title={"Our Store"} />
            <BreadCrumb  title="Our Store" />
            <Container class1="store-wrapper home-wrapper-2 py-5" >       <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Acheter par catégories</h3>
                                <div >
                                    <ul className="ps-0">
        {categories && [...new Set(categories)].map((item, index) =>{
            return        <li key={index} onClick={() => setCategory(item)}>{item}</li>
        })}
        
                                   
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                            <h3 className="filter-title">Filtrer par</h3>
                            <div>
        
        <h5 className="sub-title">Price</h5>
        <div className="d-flex align-items-center gap-10">
            <div className="form-floating ">
                <input type="number" className="form-control py-1"
                style={{height:"35px"}}
                id="floatingInput"
                placeholder="From"  onChange={(e) => setMinPrice(e.target.value)}/>
                <label htmlFor="floatingInput">De</label>
            </div>
            <div className="form-floating">
                <input type="number" className="form-control py-1"      style={{height:"35px"}}
                id="floatingInput" 
                placeholder="To" onChange={(e) => setMaxPrice(e.target.value)} />
                <label htmlFor="floatingInput1">à</label>
            </div>
        </div>
        
        
        
        
                            </div>
                            <div className="mb-3 mt-4">
                            <h3 className="sub-title">Mots clés du produit</h3>
                            <div>
        <div className="product-tags d-flex flex-wrap align-items-center gap-10" >
        {tags && [...new Set(tags)].map((item, index) =>{
            return    <span className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3" key={index} onClick={() => setTag(item)}>{item}</span>
        })}
        
        
        
                            </div></div></div>
                            <div className=" mb-3  mt-4">
                            <h3 className="sub-title">Product Brands</h3>
                            <div>
        <div className="product-tags d-flex flex-wrap align-items-center gap-10" >
        {brands && [...new Set(brands)].map((item, index) =>{
            return    <span className="text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3" key={index} onClick={() => setBrand(item)}>{item}</span>
        })}
        
        
        
                            </div></div></div>
                            </div>
                         
                          { /*  <div className="filter-card mb-3 ">
                            <h3 className="filter-title">Random Product</h3>
                           
        <div>
        <div className="random-products mb-3 d-flex">
        <div className="w-50">
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
        </div>
        <div className="w-50">
            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
            <ReactStars
            count={5}
            value={4}
        edit={false}
            size={24}
            activeColor="#ffd700"
          />
        <b>$ 300</b>
        </div>
        </div>
        <div className="random-products d-flex">
        <div className="w-50">
            <img src="images/watch.jpg" className="img-fluid" alt="watch" />
        </div>
        <div className="w-50">
            <h5>Kids headphones bulk 10 pack multi colored for students</h5>
            <ReactStars
            count={5}
            value={4}
        edit={false}
            size={24}
            activeColor="#ffd700"
          />
        <b>$ 300</b>
        </div>
        </div>  
        </div>
        
        
        
        </div> */ }
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className="mb-0 d-block" style={{width:"100px"}}>Trier par:</p>
                                    <select name="" className="form-control form-select" onChange={(e) =>setSort( e.target.value)} id="">
        
        
        <option value="title" >
        Alphabétiquement, A-Z 
        </option>
        <option value="-title" >
        Alphabétiquement, Z-A
        </option>
        <option value="price" >
         
        Prix ​​croissant
        </option>
        <option value="-price">
        
        Prix dé​​croissant
        </option>
        <option value="createdAt" >
        Date, de l'ancien au nouveau
        </option>
        <option value="-createdAt" >
        
        Date, du nouveau à l'ancien
        </option>
        
        
        
                                    </select>
        
                                </div>
        <div className="d-flex align-items-center gap-10">
        <p className="totalproducts mb-0">21 Products</p>
         <div className="d-flex gap-10 align-items-center grid">
            <img src={gr4} className="d-block img-fluid" alt="grid" onClick={() =>{setGrid(3);}} />
            <img src={gr3}className="d-block img-fluid" alt="grid"  onClick={() =>{setGrid(4);}} />
            <img src={gr2} className="d-block img-fluid" alt="grid" onClick={() =>{setGrid(6);}}  />
            <img src={gr} className="d-block img-fluid" alt="grid" onClick={() =>{setGrid(12);}}  />
         </div>
        
        
        </div>
        
        
        
                                <div></div>
                                
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid} data={productState || []} />
                                </div>
        
        
        
                            </div>
                        </div>
                    </div></Container>
        
            </>)
}
export default StoreCategory