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
const [generatedButtons, setGeneratedButtons] = useState<JSX.Element[]>([]);
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
    generatePartOptions(selectedPart.name, activeSelectedPart);

}, [selectedNumber, selectedPart, activeSelectedPart]);



const handlePartClick = (name:string) => {
    setSelectedPart({name});
    setActivePart(name);
    setGeneratedButtons([]);
}
const handlePartNumberClick = (number:string) => {
    setSelectedNumber({number});
    setActiveSelectedPart(number);
}

const generatePartOptions = (partName: string, isActive: string | null) => {

    if (activePart === partName){
        let buttons = [];
        for (let i = 0; i <=3; i++) {

            const currentNumber = i.toString();
            const isActive = activeSelectedPart === currentNumber;

            buttons.push(
            <SelectPartButton 
                key={currentNumber}
                name={partName} 
                number={currentNumber} 
                onClick={() => handlePartNumberClick(currentNumber)}
                isActive={isActive}
                />
            );
        };
        setGeneratedButtons(buttons);
    }
           

};

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
            {generatedButtons}
        </div>
        
        
    </div>
</>

}

export default Workshop
