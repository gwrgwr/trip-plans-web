import * as React from "react";

const InputComponent = (props: { placeholder: string, type: string, imgSrc: string, imgAlt: string, id: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <img src={props.imgSrc} alt={props.imgAlt} className="w-4 h-4"/>
                </div>
                <input type={props.type} id={props.id}
                       value={props.value}
                       onChange={props.onChange}
                       className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder={props.placeholder}/>
            </div>
        </>
    );
}
export default InputComponent;
