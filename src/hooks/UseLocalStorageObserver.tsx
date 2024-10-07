import {useEffect, useState} from "react";
import { UserEntitie } from "../entities/UserEntitie.ts";

export const UseLocalStorageObserver = () => {
    const [data, setData] = useState<UserEntitie>();
    const [userExists, setUserExists] = useState<boolean>(false);
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setData(JSON.parse(user));
            setUserExists(true);
        } else {
            setUserExists(false);
        }
    }, []);
    return { data, setData, userExists, setUserExists };
};