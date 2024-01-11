import CustomHeader from '../components/Header'
import LoadingScreen from '../components/LoadingScreen'
import Car from '../components/Car'
import PartButton from '../components/PartButton'
import SelectPartButton from '../components/SelectPartButton'
import { useState, useEffect, useRef } from 'react'
import { getCarData, setCarData } from '../components/carDataTransport'

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

function Workshop(){

// Definición de los estados del componente usando el hook useState
const [selectedPart, setSelectedPart] = useState({name:''});
const [selectedNumber, setSelectedNumber] = useState({number:'1'});
const [activePart, setActivePart] = useState<string | null>(null);
const [activeSelectedPart, setActiveSelectedPart] = useState<string | null>(null);
const [generatedButtons, setGeneratedButtons] = useState<JSX.Element[]>([]);
const [newCarData, setNewCarData] = useState<CarData>(() => getCarData() || {
    chassis: '993',
    body: 1,
    details: 1,
    front: 1,
    rear: 1,
    skirt: 1,
    wing: 0,
    rims: 0,
    mirrors: 1,
  });


const updateCarParts = (part: string, partNumber: string) => {
    // Lógica para actualizar las partes del coche y generar los botones
    let newFront = newCarData.front;
    let newRear = newCarData.rear;
    let newSkirt = newCarData.skirt;
    let newWing = newCarData.wing;
    let newRims = newCarData.rims;
    let newMirrors = newCarData.mirrors
    

    if (part === 'front') {
        newFront = parseInt(partNumber);
    } else if (part === 'rear') {
        newRear = parseInt(partNumber);
    } else if (part === 'skirt') {
        newSkirt = parseInt(partNumber);
    } else if (part === 'wing') {
        newWing = parseInt(partNumber);
    } else if (part === 'rims') {
        newRims = parseInt(partNumber);
    } else if (part === 'mirrors') {
        newMirrors = parseInt(partNumber);
    }

    // console.log("Numero seleccionado: " + selectedNumber.number); 

    setNewCarData((prevData) => ({
        ...prevData,
        front: newFront,
        rear: newRear,
        skirt: newSkirt,
        wing: newWing,
        rims: newRims,
        mirrors: newMirrors,
    }));
};

// useEffect se usa para realizar operaciones cada vez que se renderice el componente
useEffect(() => {

    setCarData(newCarData);

}, [selectedNumber, selectedPart, activeSelectedPart]);

const handlePartClick = (name:string) => {

    setActiveSelectedPart('');
    setSelectedPart({name});
    setActivePart(name);
}
const handlePartNumberClick = (number:string, partName: string) => {
    if (activePart === partName) {
        setSelectedNumber({number});
        setActiveSelectedPart(number);
        updateCarParts(partName,number);
    }
}


return <>
    <CustomHeader/>
    <div className='container-workshop'>
        <div className='container-workshop-left'>
                <PartButton name='front' isActive={activePart === "front"} onClick={() => handlePartClick('front')}/>
                <PartButton name='rear' isActive={activePart === "rear"} onClick={() => handlePartClick('rear')}/>
                <PartButton name='skirt' isActive={activePart === "skirt"} onClick={() => handlePartClick('skirt')}/>
                <PartButton name='wing' isActive={activePart === "wing"} onClick={() => handlePartClick('wing')}/>                
                <PartButton name='mirrors' isActive={activePart === "mirrors"} onClick={() => handlePartClick('mirrors')}/>                
                <PartButton name='rims' isActive={activePart === "rims"} onClick={() => handlePartClick('rims')}/>
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
            {activePart && [...Array(7).keys()].map(i => (
                <SelectPartButton
                key={i.toString()}
                name={activePart}
                number={i.toString()}
                onClick={() => handlePartNumberClick(i.toString(), activePart)}
                isActive={activeSelectedPart === i.toString()}
                />
            ))}
            {!activePart && (
            <>
            
            </>
            )}
        </div>
        
        
    </div>
</>

}

export default Workshop
