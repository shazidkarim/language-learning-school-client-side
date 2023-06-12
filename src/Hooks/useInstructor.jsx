import { useEffect, useState } from "react";

const useInstructor = ()=>{
    const [instractor , setInstractor] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://summer-camp-school-server-side-sable.vercel.app/instructor')
        .then(res=>res.json())
        .then(data=>{
            setInstractor(data)
            setLoading(false)
        })
            .catch(error => console.error(error));
    },[])
    return [instractor, loading]
}
export default useInstructor;