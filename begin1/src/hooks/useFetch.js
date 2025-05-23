import { useEffect, useState } from "react";

export const useFetch = (url) => {
    console.log("url ", url);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 비동기
    // useEffect(() => {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then((result) => {
    //         console.log(result);
    //         setData(result.dtoList);
    //     });
    // });
    // return {data};

    // 동기
    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await fetch(url);
                const result = await res.json();
                setData(result.dtoList);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);
    return {data, error, loading};

};