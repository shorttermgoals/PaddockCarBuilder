import CustomHeader from '../components/Header'
import LoadingScreen from '../components/LoadingScreen'
import ReturnHomeButton from '../components/ReturnHomeButton'
import Car from '../components/Car'
import { getCarData } from '../components/carDataTransport'
import { useState,useEffect } from 'react'

function Garage(){

const carData = getCarData();

const [showLoading, setShowLoading] = useState(true);

useEffect(() => {
    // Hide LoadingScreen after specified time
    const timeoutId = setTimeout(() => {
        setShowLoading(false);
    }, 0)

    // Empty timeout after hiding component
    return () => clearTimeout(timeoutId);
},[]);


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
                
                <Car {...carData}/>
            </div>
            <img
            className='container-garage-floor-furniture'
            src='../Furniture.png'
            alt='Chairs and table'
            />
        </div>
        
    </div>
    </div>
}


export default Garage