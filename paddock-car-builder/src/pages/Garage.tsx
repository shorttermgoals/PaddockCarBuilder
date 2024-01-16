import CustomHeader from '../components/Header'
import ReturnHomeButton from '../components/ReturnHomeButton'
import Car from '../components/Car'
import { getCarData } from '../components/carDataTransport'

function Garage(){

const carData = getCarData();





return  <div>
    
            <CustomHeader/>
            <div className='container-garage'>
                <div className='container-garage-wall'>

                        <div className='container-garage-wall-right'>
                            <img
                            className='container-garage-painting'
                            src='../PK.png'
                            alt='Flora on rock Sun, 1940'
                            />
                        </div>

                        <div className='container-garage-floor-car'>
                            
                            <Car {...carData}/>
                        </div>

                        <div className='container-garage-floor-furniture'>
                            <img
                            src='../Furniture.png'
                            alt='Chairs and table'
                            />
                        </div>

                </div>
                
                
            </div>
        </div>
}


export default Garage