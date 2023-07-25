import { useLocation } from "react-router-dom";
import { Card } from "../../components/cards"
import { useTitle } from '../../hooks'; 
import { useEffect, useState } from "react";
import { Filter } from "./Filter";
 
export const Gears = () => {
  useTitle('Gears');
  // gears
  const [ gears, setGears ] = useState([]);

  // Filter toogle
  const [ show, setShow ] = useState(false)

  const search = useLocation().search;
  // console.log(search);

  const searchTerm = new URLSearchParams(search).get('q');
  // console.log(searchTerm);

  useEffect(()=>{
    async function featuredGears(){
      const response = await fetch(`${process.env.REACT_APP_HOST}/gears/?name_like=${searchTerm ? searchTerm : ''}`)
      const data = await response.json();
      setGears(data)
    }
    featuredGears()
  },[searchTerm])

  return (
    <section className="my-20">
            <div className="my-5 flex justify-evenly">
            <span className="text-2xl font-semibold dark:text-slate-100 my-auto">All Camping Gears ({gears.length})</span>
            <span>
              <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
              <i class="bi bi-funnel"></i>
              </button>
            </span>            
          </div>    
 
        <div className="flex flex-wrap justify-center lg:flex-row">
        {gears.map((gear) => (
        <Card key={gear.id} gear={gear} />
        ))}
        </div>
        { show && <Filter setShow={setShow} />}
    </section>
  )
}