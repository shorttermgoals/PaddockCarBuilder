import CustomHeader from '../components/Header'
import Car from '../components/Car'
import PartButton from '../components/PartButton'
import SelectPartButton from '../components/SelectPartButton'
import { useState } from 'react'



function Workshop(){

const [selectedPart, setSelectedPart] = useState({name:''});
const [activeButton, setActiveButton] = useState<string | null>(null);


const handlePartClick = (name:string) => {
    setSelectedPart({name});
    setActiveButton(name);
}

return <>
    <CustomHeader/>
    <div className='container-workshop'>
        <div className='container-workshop-left'>
            <PartButton name='PD' isActive={activeButton === "PD"} onClick={() => handlePartClick('PD')}/>
            <PartButton name='PT' isActive={activeButton === "PT"} onClick={() => handlePartClick('PT')}/>
            <PartButton name='L' isActive={activeButton === "L"} onClick={() => handlePartClick('L')}/>
        </div>
        <div className='container-workshop-middle'>
            <div className='container-workshop-wall'>
                <img
                className='container-workshop-poster'
                src='../poster.png'
                alt='Paddock poster'
                />
                <div className='container-workshop-car'>
                    <Car/>
                </div>
            </div>
        </div>
        <div className='container-workshop-right'>
            <SelectPartButton name={selectedPart.name} number='EMPTY'/>
            <SelectPartButton name={selectedPart.name} number='1'/>
        </div>
        
        
    </div>
</>

}

export default Workshop
