import CustomHeader from '../components/Header'
import Car from '../components/Car'
import PartButton from '../components/PartButton'
import SelectPartButton from '../components/SelectPartButton'



function Workshop(){
return <>
    <CustomHeader/>
    <div className='container-workshop'>
        <div className='container-workshop-left'>
            <PartButton name='PD'/>
            <PartButton name='PT'/>
            <PartButton name='L'/>
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
            <SelectPartButton name='PD' number='EMPTY'/>
            <SelectPartButton name='PD' number='1'/>
        </div>
        
        
    </div>
</>

}

export default Workshop
