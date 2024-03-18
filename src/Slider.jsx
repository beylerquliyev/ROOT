 import { useEffect, useState } from "react"
 import Style from "./Slider.module.css"

export function Slider(){
    const[data,setData]=useState([])
    const[slider,SetSlider]=useState(0)
    let apiKey="KSMpObLAVnBDfRo-HcbTxWznzPr_IlKfJhOAJ1bKZq0"

    async function GetData(){
        let response1=await fetch(`https://api.unsplash.com/photos?per_page=15&client_id=${apiKey}`)
        let response2= await response1.json()
        let Links=response2.map((item)=>{
            return item.urls.raw
        })
        setData((prev)=>Links)

       
    }
    console.log(slider);
    
    function next(){
        if (slider<=13) {
            console.log("ss");
            SetSlider((prev)=>prev+1)
            
        }
        else{
            
            SetSlider(prev=>0)
        }
    }

    function prev (){
        if(slider>0){
            SetSlider((prev)=>prev-1)
        }
        else{
            
        }
    }
     useEffect(()=>{
        GetData()
        

     },[])
     console.log(data[slider]);
   
   
    return(
        <div className={Style.FullDIV}>
            <img className={Style.img} src={`${data[slider]}`} alt="" />
<div className={Style.BtnDiv}>
    
             <button className={Style.btn} onClick={prev}>Prev</button>
            <button className={Style.btn} onClick={next}>Next</button>

</div>

        </div>
    )



}