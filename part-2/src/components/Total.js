import React from "react";

const Total=({course})=>{

   return(
       <div>
           <p>Total of

           {course.parts.reduce((items,value)=>{
               return  items+value.exercises

           },0)}

           exercises
           

           </p>

        </div>
    )
}

export default Total


//
//<p>Total of {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises+course.parts[3].exercises} excerises</p>