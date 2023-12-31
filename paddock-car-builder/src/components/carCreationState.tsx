import { useState, useEffect } from "react";

export const carState = {
    isActive: false,
    setIsActive: (value: boolean) => {},
};

export const useAppState = () => {
    const storedIsActive = localStorage.getItem('carIsActive');
    const [isActive, setIsActive] = useState(storedIsActive ? JSON.parse(storedIsActive) : carState.isActive);
    //console.log("Esto es el anterior estado global" + carState.isActive)

    useEffect(() => {
        console.log("Setting isActive in useEffect", carState.isActive);
        setIsActive(carState.isActive);
        localStorage.setItem('carIsActive', JSON.stringify(carState.isActive));
    }, [carState.isActive]);

    const setGlobalState = (value: boolean) => {
        console.log("Setting global state", value);
        carState.isActive = value;
        //console.log("Esto es el estado global" + carState.isActive);
        setIsActive(true);
        localStorage.setItem('carIsActive', JSON.stringify(true));
    };

    console.log(carState.isActive)

    return {isActive, setGlobalState}
}