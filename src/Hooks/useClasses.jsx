import { useEffect, useState } from "react";


const useClasses = ()=>{
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://summer-camp-school-server-side-sable.vercel.app/class')
            .then(res => res.json())
            .then(data => {
               
                setClasses(data);
                setLoading(false)
            })
            .catch(error => console.error(error));
    }, []);
    return [classes, loading]
}

export default useClasses;