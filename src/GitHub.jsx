import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import axios from 'axios';


export function GitHub(){
    const[data,setData] = useState([])

    async function GetPerson(){
        try{
let response= await axios.get("https://api.github.com/users")
console.log(response.data);
setData(response.data)
        }
        catch(eror){
            console.log(eror);


        }
    }

    useEffect(()=>{
        GetPerson()
        



    },[])

    
    
    return(
        <div className=" container d-flex flex-wrap gap-3 pt-5">
      

            {data.map((item,index)=>{
           return  <div className="shadow"  >
           <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={item.avatar_url} />
           <Card.Body>
           <Card.Title>{item.login}</Card.Title>

      
           </Card.Body>
           </Card>
               </div>
            })}

            

        </div>
    )

}