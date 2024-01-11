import { useEffect, useState } from "react";
import { getCarData, setCarData } from '../components/carDataTransport'
import { Link } from "react-router-dom";

interface Props{
    type: string;
    source: string;
    hiper: string ;
}

interface CarData {
    chassis: string;
    body: number;
    details: number;
    front: number;
    rear: number;
    skirt: number;
    wing: number;
    rims: number;
    mirrors: number;
  }

function HomeButtons({type, source, hiper}: Props){

    const [newCarData, setNewCarData] = useState<CarData>(() => getCarData() || {
        chassis: '993',
        body: 1,
        details: 0,
        front: 1,
        rear: 1,
        skirt: 1,
        wing: 0,
        rims: 0,
        mirrors: 1,
      }
    );

    const [buttonStyles, setButtonStyles] = useState({
        rotate : 0,
    });

    const [rotateStarted, setRotateStarted] = useState(false);

    const updateCarParts = () => {
        setNewCarData((prevData) => ({
            ...prevData,
            front: 1,
            rear: 1,
            skirt: 1,
            wing: 0,
            rims: 0,
            mirrors: 1,
    
    
        }));
    };

    useEffect(() => {
        if (rotateStarted && source === 'resetcar') {
          // Continuous rotation
          let rotationInterval = setInterval(() => {
            setButtonStyles((prevStyles) => ({
              ...prevStyles,
              rotate: prevStyles.rotate + 2,
            }));
          }, 2);
    
          // Reset rotation and imgSource after 720ms
          setTimeout(() => {
            clearInterval(rotationInterval);
            setButtonStyles({
              rotate: 0,
            });
            setRotateStarted(false); // Reset the rotateStarted flag
          }, 720);
        }
      }, [rotateStarted, source]);


    const handleClick = () => {
        if(source === 'resetcar'){
            updateCarParts();
            setNewCarData((prevData) => {
                setCarData(prevData);
                return prevData;
            });

            setButtonStyles({
                rotate : 0,
            });

            setRotateStarted(true);
        }
    }

    useEffect(() =>{
        setCarData(newCarData);
    },[setCarData]);

    const hprv = `/${hiper}`;
    const imgSource = `../${source}.png`
    const optionalText = `../${source}text.png`
    const buttonClass = `home-button ${type === '1' ? 'narrow-button' : 'wide-button'}`;
    const buttonFillClass = `home-button-fill ${type === '1' ? 'narrow-button-fill' : 'wide-button-fill'}`;

    return <Link to={hprv} style={{width: 'fit-content'}} onClick={handleClick}>
        <div className={buttonClass}>
            <div className={buttonFillClass}>
                <img
                    className="home-button-fill-content"
                    style={{transform: `rotate(${buttonStyles.rotate}deg)`}}
                    src={imgSource}
                />
                
            </div>
        </div>
    </Link>
    
}

export default HomeButtons