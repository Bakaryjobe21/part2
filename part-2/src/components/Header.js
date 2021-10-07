import React from "react";

const Header=({course})=>{

    return(
        <div>
            <h2>
                {course[0].name}

            </h2>

        </div>
    )
}

export default Header