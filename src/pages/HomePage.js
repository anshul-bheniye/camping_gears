import { Link } from "react-router-dom";
import { useTitle } from '../hooks'; 
import { useEffect, useState } from "react";
import { FeaturedCard } from "../components/cards";

export const HomePage = () => {
  useTitle('Home');
  const [feat, setFeat] = useState([]);

  useEffect(()=>{
    async function featuredGears(){
      const response = await fetch("http://localhost:8000/featured")
      const data = await response.json();
      setFeat(data)
    }
    featuredGears()
  },[])
  
  return (
    <section>
    {/* // Hero */}
      <div className="flex flex-col items-center bg-white border border-gray-200 md:flex-row md:justify-between lg:justify-evenly mx-auto md:max-w-xl lg:max-w-3xl dark:border-gray-700 dark:bg-gray-800">
        <img className="object-cover w-full h-96 md:h-auto md:w-60 lg:w-80" src="https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="by Patrick Hendry"/>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline underline-offset-8">Welcome to Camping Gears!</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Elevate your camping experience with premium gear and equipment designed for outdoor enthusiasts. From durable tents and cozy sleeping bags to versatile cooking gear and reliable lighting, our camping gear collection has everything you need for a memorable outdoor adventure. Explore the great outdoors with confidence and comfort, knowing that you're equipped with top-notch camping gear that is built to withstand the elements.</p>
            <Link to="/gears" className="ml-auto inline-flex w-24 text-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">
            Explore 
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </Link>
        </div>
      </div>
{/* // Hero End    */}


{/* Featured Products */}
      <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured Gears</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
        {feat.map((featuredGear) => (
          <FeaturedCard key={featuredGear.id} featuredGear={featuredGear} />
        ))}
      </div>
      </section>
{/* Featured Products End */}
  
  </section> 
 
  )
}
