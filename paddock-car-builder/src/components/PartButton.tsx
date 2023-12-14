import React, { useEffect, useState} from "react";

interface Props {
    name: string;
    onClick: () => void;
    isActive: boolean;
}

const PartButton = ({name,onClick,isActive}: Props) => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (!isActive) {
            setClicked(false);
        }
    }, [isActive]);

    const handleClick = () => {
        setClicked(true);

        if (onClick){
            onClick();
        }
        
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