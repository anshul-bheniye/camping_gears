import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

import { Rating } from "../other";

export const FeaturedCard = ({featuredGear}) => {
  const {id, name, overview,image, price, ratings, bestSeller} = featuredGear;
  const {addToCart, removeFromCart, cartList} = useCart();
  const [ button, setButton ] = useState(false);

    useEffect(()=>{
       const foundGear = cartList.find(item => item.id === id );
       setButton(foundGear) 
    },[cartList, id])  

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="relative" >
            { bestSeller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span> }
            <img className="rounded-t-lg w-full h-64" src={image} alt={name} />
        </div>
        <div className="p-5">
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            
            <div className="flex items-center my-2">
                 <Rating ratings={ratings}/>
            </div>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>{price}</span>
                </span>
               
                   {/* button toogle */}
                {button ?  (   <button onClick={()=> removeFromCart(featuredGear)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button>
                )
                 : (<button onClick={()=> addToCart(featuredGear)} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
                 ) }
            </p>
        </div>
    </div>
  )
}