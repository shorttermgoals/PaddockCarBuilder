import ButtonHome from '../components/ReturnHomeButton';

function NoPage(){

    const header = 'SLOW DOWN!'
    const line1 = '...OOPS, LOOKS LIKE YOU EXCEEDED THE SPEED LIMIT.'
    const line2 = 'PAY THE FINE AND HEAD BACK TO THE GARAGE.'

    return <div className="container-404">
        <a className='container-404-header'>{header}</a>
        <a className='container-404-comment'>{line1}</a>    
        <a className='container-404-comment'>{line2}</a>    
         
        <img
        className='container-404-img'
        src="../asd.png"
        alt="993 caught by speed camera"
        />
        <ButtonHome/>
    </div>
}

export default NoPage