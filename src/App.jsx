import React from "react";
import { Card } from "./assets/components/card"
import { Nav } from "./assets/components/nav"
import data from "./assets/data"
let Md = data.map(
  items => <div>
    <Card {...items} />
   <hr />
  </div> 
)

 export default   function () {
   return (
     <>
       <Nav />
       <div className="card__container">
         {Md}
         
       </div>
       
     </>
   );
 }
