import {useState , useEffect} from 'react'

function useFetch(URL){
const [data,setData]= useState()

    useEffect(()=>{
        fetch(URL)
          .then(res=>res.json())
          .then((data) => setData(data))
          .catch(Error)
        },[URL] )

      

    return [data]
}

export default useFetch