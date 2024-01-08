import CustomHeader from '../components/HomeHeader'
import HomeButton from '../components/HomeButtons'
import { useState } from 'react'
import ResetAlert from '../components/ResetAlert'

function Home(){

    const [showResetAlert, setShowResetAlert] = useState(false);

    const nada = () =>{};

    const handleResetButtonClick = () => {
        setShowResetAlert(true);
    
        setTimeout(() => {
          setShowResetAlert(false);
        }, 1000);
      };

return <>
    <CustomHeader/>
    <div className='home-menu'>
        <div className='home-menu-row-1'>
            <HomeButton type='1' source='dress-up' hiper='workshop' onResetButtonClick={nada}/>
            <HomeButton type='1' source='garage' hiper='garage' onResetButtonClick={nada}/>
        </div>
        <HomeButton type='2' source='resetcar' hiper='home' onResetButtonClick={ handleResetButtonClick }/>
        {showResetAlert && <ResetAlert onClose={() => setShowResetAlert(false)} />}

    </div>
</>
}

export default Home