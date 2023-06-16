import { Card } from "../../components/cards"
import { useTitle } from '../../hooks'; 
import { useEffect, useState } from "react";
 
export const Gears = () => {
  useTitle('Gears');
  const [gears, setGears] = useState([]);

  useEffect(()=>{
    async function featuredGears(){
      const response = await fetch("http://localhost:8000/gears")
      const data = await response.json();
      setGears(data)
    }
    featuredGears()
  },[])

  return (
    <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Camping Gears</h1>    
        <div className="flex flex-wrap justify-center lg:flex-row">
        {gears.map((gear) => (
        <Card key={gear.id} gear={gear} />
        ))}
        </div>
    </section>
  )
}