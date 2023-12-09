import CustomHeader from '../components/HomeHeader'
import HomeButton from '../components/HomeButtons'


function Home(){
return <>
    <CustomHeader/>
    <div className='home-menu'>
        <div className='home-menu-row-1'>
            <HomeButton type='1' source='dress-up' hiper='workshop'/>
            <HomeButton type='1' source='garage' hiper='garage'/>
        </div>
        <HomeButton type='2' source='newcar'hiper='garage'/>
    </div>
</>
}

export default Home