import { useEffect, useState } from "react";


const useClasses = ()=>{
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('class.json')
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