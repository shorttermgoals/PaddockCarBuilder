import React, { useState} from "react";

interface Props {
    name: string;
    
}

const PartButton = ({name}: Props) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);

        //setTimeout(() => {
          //  setClicked(false);
        //}, 100);
    };

    const getImageSouce = () => {
        return clicked ? '../Buttons/'+ name +'p.png' : '../Buttons/' + name + '.png';
    };

    return <img
        src={getImageSouce()}
        className="button"
        alt="Button"
        onClick={handleClick}
        style={{cursor: 'pointer'}}
    />;

};

export default PartButton;