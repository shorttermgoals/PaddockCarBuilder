interface Props{
    type: string;
    source: string;
    hiper: string;
}

function HomeButtons({type, source, hiper}: Props){

    const hprv = `/${hiper}`;
    const imgSource = `../${source}.png`;
    const buttonClass = `home-button ${type === '1' ? 'narrow-button' : 'wide-button'}`;
    const buttonFillClass = `home-button-fill ${type === '1' ? 'narrow-button-fill' : 'wide-button-fill'}`;

    return <a href={hprv} style={{width: 'fit-content'}}>
        <div className={buttonClass}>
            <div className={buttonFillClass}>
                <img
                    className="home-button-fill-content"
                    src={imgSource}
                />
            </div>
        </div>
    </a>
    
}

export default HomeButtons