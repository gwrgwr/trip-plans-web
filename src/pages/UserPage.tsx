import {UseLocalStorageObserver} from "../hooks/UseLocalStorageObserver.tsx";

export const UserPage = () => {
    const {data} = UseLocalStorageObserver();
    if (!data) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <h1>{data.name}</h1>
        </>
    );
};