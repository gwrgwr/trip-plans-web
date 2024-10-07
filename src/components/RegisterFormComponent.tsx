import InputComponent from "./input-component.tsx";
import visibileIcon from '../assets/icons/icons8-visible-48.png';
import emailIcon from '../assets/icons/icons8-email-48.png';
import personIcon from '../assets/icons/icons8-person-48.png';
import ButtonFormComponent from "./ButtonFormComponent.tsx";
import React, {useState} from "react";
import {UserService} from "../services/UserService.ts";

const RegisterFormComponent = (props: {
    onClick: () => void,
}) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const userServices = new UserService();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('As senhas não são iguais');
        } else {
            await userServices.createUser({name, email, password});
            window.location.reload();
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-96">
                <div>
                    <label htmlFor="input-group-1"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <InputComponent id="input-group-1" placeholder="Your name" type="text"
                                    imgSrc={personIcon}
                                    imgAlt="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="input-group-2"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <InputComponent id="input-group-2" placeholder="your@email.com" type="text"
                                    imgSrc={emailIcon}
                                    imgAlt="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="input-group-3"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <InputComponent id="input-group-3" placeholder="********" type="password"
                                    imgSrc={visibileIcon}
                                    imgAlt="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="input-group-4"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                        Password</label>
                    <InputComponent id="input-group-4" placeholder="********" type="password"
                                    imgSrc={visibileIcon}
                                    imgAlt="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-row justify-between">
                    <ButtonFormComponent type={"submit"} text="Send" className="justify-self-end self-end"/>
                    <ButtonFormComponent onClick={props.onClick} text="Enter with an account"
                                         className="justify-self-end self-end"/>
                </div>
            </div>
        </form>
    );
}

export default RegisterFormComponent;