import { useEffect, useState } from "react";
import styled from "styled-components";



function ApplicationElemComponent(){


    const [currentApplicationId, setCurrentApplicationId] = useState();

    useEffect(()=>{
        const current_href = window.location.toString();
        console.log(current_href);
        setCurrentApplicationId(current_href);
    }, [])


    return(
        <>
        
        {currentApplicationId}
        
        </>
    )

}


export default ApplicationElemComponent;