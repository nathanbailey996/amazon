import { Fragment } from "react";
import HomeCard from "./HomeCard";
import HomePageProduct from "./HomePageProduct"
import DealOfTheDay from "./DealOfTheDay"
import ProductDisplayContainer from "./ProductDisplayContainer"
import Footer from "./Footer"
import ProductData from "../components/data"
import HamburgerMenu from "./HamburgerMenu"
import ProductDisplay from "./ProductDisplay";

function HomePage(props){
   
    const shownHomeData = []
    for(let i = 0; i<7; i++){
        shownHomeData.push(ProductData.data[i])
    }
    return(
        <Fragment>
            <div style={{width:"100vw", display:"flex", justifyContent:"center"}}>
            <img className="home-img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Prime Video" />
            </div>
            <div className="home-container">
                
          
         <div className="home-cards-container"> 
           
           {shownHomeData.map(product=>{
               return <HomeCard 
               image={product.image}
               title={product.title}
               key={product.id}
               id={product.id}
               />
           })}
           </div>
     <div className="small-screen-product-container"><HomePageProduct key={Math.random()}/></div>
          
           <div className="home-product-section-container">
               <div className="home-product-section-max-width">
           <DealOfTheDay key={Math.random()}/>

           {shownHomeData.map(product=>{
               return <div className="home-cards-container-large-screen" key={Math.random()}> <ProductDisplayContainer 
               image={product.image}
               title={product.title}
               key={product.id}
               id={product.id}
               />
               </div> 
           })}

           <ProductDisplayContainer 
        key={Math.random()}
           title="Men's activewear and outerwear"
          image1="/trousers-details.png"
          image2="/coat-details.png"
          image3="/shorts-details.png"
          image4="/gloves.png"
          id1="70927845"
          id2="10055109"
          id3="7797344"
          id4="909274"
           />
           <ProductDisplayContainer 
        key={Math.random()}
        title="Amazon Devices"
           image1="/alexa.png"
           image2="/fire-tablet.png"
           image3="/fire-tv.png"
           image4="/ring.png"
           description1="Echo Dot"
           description2="Fire Tablet"
           description3="Fire Tv"
           description4="Ring Video Doorbell"
           id1="9986"
          id2="24665"
          id3="78781"
          id4="87654"
           />
           
           <ProductDisplayContainer 
        key={Math.random()}
        title="Discover the Smart Home selection"
           image1="/security.png"
           image2="/cleaning.png"
           image3="/entertainment.png"
           image4="/garden.png"
           description1="Security"
           description2="Cleaning"
           description3="Entertainment"
           description4="Garden"
           path="/"
           />
           <ProductDisplayContainer 
        key={Math.random()}
        title="Everyday essentials, auto-delivered"
           image1="/household.png"
           image2="/pet-supplies.png"
           image3="/baby-care.png"
           image4="/personal-care.png"
           description1="Household"
           description2="Pet supplies"
           description3="Baby care"
           description4="Personal care"
           path="/"
           linkText="Explore Subscribe & Save"
           />
           <ProductDisplayContainer 
        key={Math.random()}
        title="Best sellers in Kindle eBooks"
           image1="/susan-lewis.png"
           image2="/the-keeper-of-stories.png"
           image3="/the-four-winds.png"
           image4="/spring.png"
           width="70%"
           id1="88675443"
           id2="256338450"
           id3="77790976443"
           id4="134577888432234"
           />
           </div>
           </div>
           <Footer    key={Math.random()}/>
            </div>

            <HamburgerMenu isMenuOpen={props.isMenuOpen} setIsMenuOpen={props.setIsMenuOpen} key={Math.random()}/>
        </Fragment>
    )
}

export default HomePage