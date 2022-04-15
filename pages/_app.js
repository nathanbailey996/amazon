import '../styles/globals.css'
import Layout from "../components/Layout"
import React, {useReducer, useEffect} from "react"
import productData from "../components/data"
import { auth } from '../components/firebase'

 export const appContext = React.createContext()

function MyApp({ Component, pageProps }) {


  const reducer = (state, action)=>{
    if(action.type === "Add"){
   const newArray = []
   for(let i = 0; i<state.productData.length; i++){
     const currentItem = state.productData[i]
  currentItem.id === action.id? newArray.push({...currentItem, amount:currentItem.amount +1}): newArray.push(currentItem);
   }
   return {...state, productData:newArray, }
    }else if(action.type === "Minus"){
      const newArray = []
   for(let i = 0; i<state.productData.length; i++){
     const currentItem = state.productData[i]
  currentItem.id === action.id? newArray.push({...currentItem, amount:currentItem.amount -1}): newArray.push(currentItem);
   }
   return {...state, productData:newArray, }
    }else if(action.type === "Delete"){
      const newArray = []
      for(let i = 0; i<state.productData.length; i++){
        const currentItem = state.productData[i]
     currentItem.id === action.id? newArray.push({...currentItem, amount:0}): newArray.push(currentItem);
    }
    return {...state, productData:newArray,  }

  }else if(action.type === "getTotalPrice"){
    let currentTotal = 0; 
    state.productData.map(product=>{
      currentTotal= currentTotal + product.totalPrice * product.amount 
    })
    let currentCartCount = 0;
    state.productData.map(product=>{
      currentCartCount = currentCartCount + product.amount
    })

    return {...state, cartCount:currentCartCount, cartTotal:currentTotal.toFixed(2), isCartCount0:currentCartCount>=1? false: true, }

  }else if (action.type === "Save"){
    const newArray = []
    const newProductArrray = []
    for(let i = 0; i<state.productData.length; i++){
      const currentItem = state.productData[i]
      currentItem.id === action.id? newArray.push(currentItem): ""

      currentItem.id === action.id? newProductArrray.push({...currentItem, amount:0}): newProductArrray.push(currentItem) 

    }
    

    return {...state, productData:newProductArrray,  savedForLater:[...state.savedForLater, ...newArray],}

  }else if(action.type === "Move"){
    const newSavedArray = []
   
 for(let i = 0; i<state.savedForLater.length; i++){
const currentSavedItem = state.savedForLater[i]
currentSavedItem.id !== action.id? newSavedArray.push(currentSavedItem): ""
    }
return {...state, savedForLater:newSavedArray,}

  }    else if(action.type === "setUser"){
    return {...state, user:action.user}

  } 

    return state
  }
// const storedData = JSON.parse(localStorage.getItem("product-data")) 
// let storedProductData 
// if (typeof window !== "undefined") {
// storedProductData = JSON.parse(localStorage.getItem("product-data"))
//   }
// console.log(storedProductData)

const defaultData = {
    productData:productData.data, 
    cartCount:0, 
    cartTotal:0, 
    isCartCount0:true, 
    savedForLater:[], 
    user:null, 
}

const [state, dispatch] = useReducer(reducer, defaultData)


useEffect(()=>{
auth.onAuthStateChanged(authUser=>{
  console.log("the user is>> ", authUser)

  if(authUser){
    dispatch({type:"setUser", user:authUser})

  }else{
    dispatch({type:"setUser", user:null})
  }
})

}, [])

  return (
    <Layout state={state} key={Math.random()}>
      <appContext.Provider value={{state:{...state}, dispatch:dispatch}}>
      <Component {...pageProps} key={Math.random()}/>
      </appContext.Provider>
    </Layout>


  )
}





export default MyApp