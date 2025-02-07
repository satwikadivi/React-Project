import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Notfound()
{
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/Home")
        },5000)
    },[])
    return(
        <>
        <h1>404 Page Not Found</h1>
        <img src='NotFound.jpg'></img>
        </>
    )
}
export default Notfound;