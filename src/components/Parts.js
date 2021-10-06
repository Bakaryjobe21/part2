import React from "react";

const Parts=({course})=>{

    return(

      
       <div>
           {course.parts.map((item)=>{
               return(<div> <p key={item.id}>{item.name} {item.exercises}</p></div>)
               
           })}
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