import React from "react"

import Parts from "./Parts"
import Total from "./Total"

const Content=({course})=>{

  
    return(
        <div>
          
          
        <Parts course={course} />
        <Total course={course}  />  
        
      
        </div>


    )
}


export default Content