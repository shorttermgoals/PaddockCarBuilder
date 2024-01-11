import CustomHeader from '../components/HomeHeader'
import HomeButton from '../components/HomeButtons'
import { useState } from 'react'

function Home(){


    const nada = () =>{};

    const handleResetButtonClick = () => {
        
      };

return <>
    <CustomHeader/>
    <div className='home-menu'>
        <div className='home-menu-row-1'>
            <HomeButton type='1' source='dress-up' hiper='workshop' optText=''/>
            <HomeButton type='1' source='garage' hiper='garage' optText=''/>
        </div>
        <HomeButton type='2' source='resetcar' hiper='home' optText='resetcar'/>

    </div>
</>
}

export default Home