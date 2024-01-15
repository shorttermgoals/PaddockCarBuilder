import { Component, createRef } from "react";

interface CarProps{
    chassis?: string;
    body?: number;
    details?: number;
    front?: number;
    rear?: number;
    skirt?: number;
    wing?: number;
    rims?: number;
    mirrors?: number;
    paint?: string;
}

interface CarState {
    chassis: string;
    body: number;
    details: number;
    front: number;
    rear: number;
    skirt: number;
    wing: number;
    rims: number;
    mirrors: number;
    paint: string;
}

class Car extends Component<CarProps, CarState> {

    private carContainerRef: React.RefObject<HTMLDivElement>;

    constructor(props: CarProps){
        super(props);

        this.carContainerRef = createRef();

        // Default rendering properties
        this.state = {
            chassis: props.chassis || '993',
            body: props.body || 1 ,
            details: props.details || 1,
            front: props.front || 1,
            rear: props.rear || 1,
            skirt: props.skirt || 1,
            wing: props.wing || 0,
            rims: props.rims || 0,
            mirrors: props.mirrors || 1,
            paint: props.paint || 'grey'
        };
    }

    updateCarData = (newData: CarProps) => {
        this.setState({
            chassis: newData.chassis || '993',
            body: newData.body || 1,
            details: newData.details || 1,
            front: newData.front || 1,
            rear: newData.rear || 1,
            skirt: newData.skirt || 1,
            wing: newData.wing || 0,
            rims: newData.rims || 0,
            mirrors: newData.mirrors || 1,
            paint: newData.paint || 'grey',
        });
    };

    changeFront = (newFront: number) => {
        this.setState({front: newFront});
    };

    


    componentDidUpdate(prevProps: CarProps) {
        if (prevProps !== this.props) {
            console.log("Car props updated:", this.props);
        }
    }

    

    static getDerivedStateFromProps(nextProps: CarProps, prevState: CarState) {
        // Compara las props actuales con las props anteriores
        if (
            nextProps.chassis !== prevState.chassis ||
            nextProps.body !== prevState.body ||
            nextProps.details !== prevState.details ||
            nextProps.front !== prevState.front ||
            nextProps.rear !== prevState.rear ||
            nextProps.skirt !== prevState.skirt ||
            nextProps.wing !== prevState.wing ||
            nextProps.rims !== prevState.rims ||
            nextProps.mirrors !== prevState.mirrors ||
            nextProps.paint !== prevState.paint
            ) {
          // Devuelve el nuevo estado basado en las nuevas props
          return { ...nextProps };
        }

    
        // Si no hay cambios, devuelve null
        return null;
      }

    render() {
        
        let carColor = ""
        // console.log("Car props" , this.props);
        if(this.state.paint === "grey") {
            carColor = "opacity(1)";
        } else if(this.state.paint === "red") {
            carColor = "invert(31%) sepia(100%) saturate(7499%) hue-rotate(353deg) brightness(93%) contrast(128%)";
        } else if(this.state.paint === "blue") {
            carColor = "invert(76%) sepia(86%) saturate(1739%) hue-rotate(169deg) brightness(89%) contrast(89%)";
        } else if(this.state.paint === "black") {
            carColor = "invert(79%) sepia(5%) saturate(0%) hue-rotate(66deg) brightness(103%) contrast(199%)";
        } else if(this.state.paint === "white") {
            carColor = "invert(0%) sepia(100%) saturate(0%) hue-rotate(350deg) brightness(92%) contrast(101%)";
        } else if(this.state.paint === "yellow") {
            carColor = "invert(79%) sepia(92%) saturate(545%) hue-rotate(345deg) brightness(210%) contrast(109%";
        } else if(this.state.paint === "jade") {
            carColor = "invert(40%) sepia(14%) saturate(1966%) hue-rotate(131deg) brightness(100%) contrast(86%)";
        }

        return (
            <div className="car" ref={this.carContainerRef}>
                {this.state.chassis && (
                    <img src={`../cars/${this.state.chassis}/${this.state.chassis}chassis.png`} />
                )}
                {this.state.chassis && (
                    <img src={`../cars/${this.state.chassis}/${this.state.chassis}body.png`} className="filter-new-color" style={{filter: carColor}}/>
                )}
                {this.state.chassis && (
                    <img src={`../cars/${this.state.chassis}/${this.state.chassis}bodydetails.png`} />
                )}
                {this.state.chassis && (
                    <img src={`../cars/${this.state.chassis}/rims/${this.state.rims}.png`} />
                )}
                {this.state.chassis && this.state.front && (
                    <img src={`../cars/${this.state.chassis}/front/${this.state.front}.png`} className="filter-new-color" style={{filter: carColor}}/>
                )}
                {this.state.chassis && this.state.front && (
                    <img src={`../cars/${this.state.chassis}/front/${this.state.front}details.png`} />
                )}
                {this.state.chassis && this.state.rear && (
                    <img src={`../cars/${this.state.chassis}/rear/${this.state.rear}.png`} className="filter-new-color" style={{filter: carColor}}/>
                )}
                {this.state.chassis && this.state.rear && (
                    <img src={`../cars/${this.state.chassis}/rear/${this.state.rear}details.png`} />
                )}
                {this.state.chassis && this.state.skirt && (
                    <img src={`../cars/${this.state.chassis}/skirt/${this.state.skirt}.png`} className="filter-new-color" style={{filter: carColor}}/>
                )}
                {this.state.chassis && this.state.skirt && (
                    <img src={`../cars/${this.state.chassis}/skirt/${this.state.skirt}details.png`} />
                )}
                {this.state.chassis && this.state.mirrors && (
                    <img src={`../cars/${this.state.chassis}/mirrors/${this.state.mirrors}.png`} className="filter-new-color" style={{filter: carColor}}/>
                )}
                {this.state.chassis && this.state.mirrors && (
                    <img src={`../cars/${this.state.chassis}/mirrors/${this.state.mirrors}details.png`} />
                )}
                {this.state.chassis && this.state.wing && (
                    <img src={`../cars/${this.state.chassis}/wing/${this.state.wing}.png`} className="filter-new-color" style={{filter: carColor}}/>
                )}
                {this.state.chassis && this.state.wing && (
                    <img src={`../cars/${this.state.chassis}/wing/${this.state.wing}details.png`} />
                )}
            </div>
        );
    }
}



export default Car;