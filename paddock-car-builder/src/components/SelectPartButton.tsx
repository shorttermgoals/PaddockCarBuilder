import React, { useState} from "react";

interface Props {
    name: string;
    number: string;
    
}

const SelectPartButton = ({name,number}: Props) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);

        //setTimeout(() => {
          //  setClicked(false);
        //}, 100);
    };

    const getImageSouce = () => {
        return clicked ? '../Buttons/'+ name +'/' + number + 'p.png' : '../Buttons/' + name + '/' + number + '.png';
    };

    return <img
        src={getImageSouce()}
        className="button"
        alt="Button"
        onClick={handleClick}
        style={{cursor: 'pointer'}}
    />;

};

export default SelectPartButton;