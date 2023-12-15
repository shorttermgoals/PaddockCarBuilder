import CustomHeader from '../components/Header'
import Car from '../components/Car'
import PartButton from '../components/PartButton'
import SelectPartButton from '../components/SelectPartButton'
import { useState, useEffect } from 'react'



function Workshop(){

const [selectedPart, setSelectedPart] = useState({name:''});
const [selectedNumber, setSelectedNumber] = useState({number:''});
const [activePart, setActivePart] = useState<string | null>(null);
const [activeSelectedPart, setActiveSelectedPart] = useState<string | null>(null);
const [newCarData, setNewCarData] = useState({
    chassis: '993',
    body: 0,
    details: 0,
    front: 1,
    rear: 1,
    skirt: 1,
    wing: 0,
    wheels: 0,
    color: '#bfbfbf',
})

useEffect(() => {
    
    const newFront = parseInt(selectedNumber.number);
    console.log("Numero seleccionado: " + selectedNumber.number);
    setNewCarData((prevData) => ({
        ...prevData,
        front: newFront,

    }));
    console.log("Data nuevo: " + newCarData);
}, [selectedNumber]);


const handlePartClick = (name:string) => {
    setSelectedPart({name});
    setActivePart(name);
}
const handlePartNumberClick = (number:string) => {
    setSelectedNumber({number});
    setActiveSelectedPart(number);
}



return <>
    <CustomHeader/>
    <div className='container-workshop'>
        <div className='container-workshop-left'>
            <PartButton name='PD' isActive={activePart === "PD"} onClick={() => handlePartClick('PD')}/>
            <PartButton name='PT' isActive={activePart === "PT"} onClick={() => handlePartClick('PT')}/>
            <PartButton name='L' isActive={activePart === "L"} onClick={() => handlePartClick('L')}/>
        </div>
        <div className='container-workshop-middle'>
            <div className='container-workshop-wall'>
                <img
                className='container-workshop-poster'
                src='../poster.png'
                alt='Paddock poster'
                />
                <div className='container-workshop-car'>
                    <Car {...newCarData}/>
                </div>
            </div>
        </div>
        <div className='container-workshop-right'>
            <SelectPartButton 
            name={selectedPart.name} 
            number='EMPTY' 
            onClick={() => handlePartNumberClick('2')}
            isActive={activeSelectedPart === "2"}
            />
            <SelectPartButton 
            name={selectedPart.name} 
            number='1' 
            onClick={() => handlePartNumberClick('1')}
            isActive={activeSelectedPart === "1"}
            />
        </div>
        
        
    </div>
</>

}

export default Workshop
