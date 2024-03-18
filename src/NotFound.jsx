import { useNavigate } from "react-router-dom"

export function NotFound(){
    const navigate=useNavigate()

    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h1>      Not Found</h1>
      <button style={{border:"none",width:"150px",height:"40px",backgroundColor:"bluen"}} onClick={()=>navigate("/")}>Go Home</button>
        </div>
    )
} 