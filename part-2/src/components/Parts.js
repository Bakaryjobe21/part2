import React from "react";
import Total from "./Total";

const Parts=({course})=>{

    return(

      
       <div>
           {course[0].parts.map((item)=>{
               return(<div> <p key={item.id}>{item.name} {item.exercises}</p>

                
               </div>)
               
               
           })}
           <h3>

           Total of {course[0].parts.reduce((items,value)=>{
    return  items+value.exercises

},0)} exercises




</h3>
           
       <h2>{course[1].name}</h2>
        {course[1].parts.map((item)=>{
               return(<div>  <p key={item.id}> {item.name} {item.exercises}</p>
               </div>)
               
           })}

<h3> 

Total of {course[1].parts.reduce((items,value)=>{
   return  items+value.exercises

     },0)} exercises
</h3>
       </div>
        
       


        
    )
}

export default Parts
















































  
      /*  <div>
        <p> {course.parts[0].name} {course.parts[0].exercises}  </p>
       <p> {course.parts[1].name} {course.parts[1].exercises}  </p>
       <p> {course.parts[2].name} {course.parts[2].exercises}  </p>
       <p> {course.parts[3].name} {course.parts[3].exercises}  </p>

        

        </div>

        */