import React, { useEffect, useState} from "react";

interface Props {
    name: string;
    number: string;
    
}

const SelectPartButton = ({name,number}: Props) => {
    const [clicked, setClicked] = useState(false);
    const [srcExists, setSrcExists] = useState<boolean | null>(null);

    useEffect(() => {
        const checkSrcExists = async () => {
            const src = `../Buttons/${name}/${number}.png`;
            const exists = await srcExistsAsync(src);
            setSrcExists(exists);
        };

        checkSrcExists();
    },[name, number]);

   

    const handleClick = () => {
        setClicked(true);

        //setTimeout(() => {
          //  setClicked(false);
        //}, 100);
    };

    const getImageSouce = () => {

        const baseSrc = `../Buttons/${name}/${number}`;

        return clicked && srcExists !== false 
        ? baseSrc + 'p.png' 
        : !clicked && srcExists !== false
        ? baseSrc + '.png'
        : '';
    };

    return  srcExists !== false ? (
        <img
        src={getImageSouce()}
        className="button"
        alt="Button"
        onClick={handleClick}
        style={{cursor: 'pointer'}}
    />
    ) : null;

};

const srcExistsAsync = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
    });
};

export default SelectPartButton;