import React, { useEffect, useState } from 'react'
import Product from './Product'
import data from '../fake-data/all-product';

function Categories() {  
    const loadedData = JSON.stringify(data);
    const json = JSON.parse(loadedData);    
    const [filter, setFilter] = useState([])

    useEffect(()=>{
        setFilter(json);
    },[])

    function filterProduct(e) {
        let text = e.target.innerText;
        const category = text.slice(6,text.length).trim()
        let filter=[];
        json.forEach(element => {
            if(element.category === category){
                filter.push(element);
            }   
        });
        setFilter(filter);
        console.log(filter);
    } 
  return (
    <div>
       <Product className="my-6" filterProduct={filterProduct}/>
       <div>
            <ul className='w-full flex flex-wrap justify-between'>
                {filter.map(element => (
                <li key={element.id} className="p-3 m-5 w-[30%]">
                    <div>
                        <img src={element.image} className="mb-2 w-[50%] mx-auto"/>
                        <p>{element.title}</p>
                    </div>
                </li>
                ))
                }
            </ul>
       </div>
    </div>
  )
}

export default Categories