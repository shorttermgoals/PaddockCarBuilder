import CustomHeader from '../components/Header'
import ReturnHomeButton from '../components/ReturnHomeButton'
import Car from '../components/Car'
import { getCarData } from '../components/carDataTransport'
import { carState, useAppState } from '../components/carCreationState'
import { useEffect } from 'react'

function Garage(){

const carData = getCarData();
const {isActive, setGlobalState} = useAppState();

const handleClick = () => {
        setGlobalState(false);
        window.location.reload();
        console.log(carState.isActive);
}

useEffect(() =>{
    console.log("El estado del coche es " + isActive);
}, [isActive]);

return <div>
    <CustomHeader/>
    <div className='container-garage'>
        <div className='container-garage-wall'>
            <div className='container-garage-wall-left'></div>
            <div className='container-garage-wall-right'>
                <img
                className='container-garage-painting'
                src='../PK.png'
                alt='Flora on rock Sun, 1940'
                />
            </div>
        </div>
        <div className='container-garage-floor'>
            <div className='container-garage-floor-car'>
                
                {isActive ? <Car {...carData}/> : <div className='car'><img src='../EmptyCar.png' /></div>}
            </div>
            <img
            className='container-garage-floor-furniture'
            src='../Furniture.png'
            alt='Chairs and table'
            />
        </div>
        <button  onClick={handleClick}>Eliminar coche</button>
        
    </div>
    </div>
}


export default Garage