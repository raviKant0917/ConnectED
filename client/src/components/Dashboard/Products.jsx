import { useCallback, useEffect, useState } from "react";

const Products = () => {
    const get = async () => {
        const response = await fetch("http://localhost:8000");
        const data = await response.json();
        return data;
    };

    const [list, setList] = useState([]);

    const getList = useCallback(async () => {
        const data = await get();
        setList(data);
    }, []);

    useEffect(() => {
        getList();
    }, [getList]);

    return list;
};

export default Products;
