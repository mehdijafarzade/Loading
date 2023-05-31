import { useEffect, useState } from "react"

function Custom1 (url){
    const [dbse , setDbse] = useState(null)
    const [islogin , setIslogin] = useState(true)

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data =>{
             setDbse(data)
             
             setIslogin(false)
        })
        .catch(err => console.log(err))
    } , [])

    return [ islogin , dbse]
}
export default Custom1