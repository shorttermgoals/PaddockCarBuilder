import CustomHeader from '../components/Header'
import ReturnHomeButton from '../components/ReturnHomeButton'
import Car from '../components/Car'

function Garage(){
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
                <Car/>
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