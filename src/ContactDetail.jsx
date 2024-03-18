import { useParams } from "react-router-dom"
 export function ContacDetail(){
    let a=useParams()

 console.log(a);
    return (
        <div>
        {a.contact_id}
            
        </div>

    )
}