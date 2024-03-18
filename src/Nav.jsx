import { useNavigate} from "react-router-dom"
 export function Nav(){
   
const navigate=useNavigate()


    return(
        <nav style={{display:"flex" ,flexDirection:"column",alignItems:"center" , paddingTop:"40px"}}>
        <ul>
          <li onClick={()=>navigate("/")}>GithubCard</li>
          <li onClick={()=>navigate("/Film")}>MovieCard</li>
          <li onClick={()=>navigate("/Slider")} >SliderCard</li>
        </ul>
      </nav>

    )

}