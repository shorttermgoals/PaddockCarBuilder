import React, { useState} from "react";

interface Props {
    name: string;
    
}

const NavButton = ({name}: Props) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 100);
    };

    const getImageSouce = () => {
        return clicked ? '../Buttons/'+ name +'1.png' : '../Buttons/' + name + '2.png';
        console.log({name});
    };

    return <img
        src={getImageSouce()}
        className="button"
        alt="Button"
        onClick={handleClick}
        style={{cursor: 'pointer'}}
    />;

};

export default NavButton;