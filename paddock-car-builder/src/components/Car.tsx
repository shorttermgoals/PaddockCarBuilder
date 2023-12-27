import { Component, ReactNode } from "react";

interface CarProps{
    chassis?: string;
    body?: number;
    details?: number;
    front?: number;
    rear?: number;
    skirt?: number;
    wing?: number;
    rims?: number;
    color?: string;
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
    color: string;
}

class Car extends Component<CarProps, CarState> {
    constructor(props: CarProps){
        super(props);

        // Default rendering properties
        this.state = {
            chassis: props.chassis || '993',
            body: props.body || 0 ,
            details: props.details || 0,
            front: props.front || 1,
            rear: props.rear || 1,
            skirt: props.skirt || 1,
            wing: props.wing || 1,
            rims: props.rims || 1,
            color: props.color || '#bfbfbf',
        };
    }

    updateCarData = (newData: CarProps) => {
        this.setState({
            chassis: newData.chassis || '993',
            body: newData.body || 0,
            details: newData.details || 0,
            front: newData.front || 1,
            rear: newData.rear || 1,
            skirt: newData.skirt || 1,
            wing: newData.wing || 1,
            rims: newData.rims || 1,
            color: newData.color || '#bfbfbf',
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
            nextProps.color !== prevState.color
            ) {
          // Devuelve el nuevo estado basado en las nuevas props
          return { ...nextProps };
        }

    
        // Si no hay cambios, devuelve null
        return null;
      }

    render() {

        console.log("Car props" , this.props);

        return (
            <div className="car">
                <img
                src={`../cars/${this.state.chassis}/${this.state.chassis}chassis.png`}
                />
                <img
                src={`../cars/${this.state.chassis}/${this.state.chassis}body.png`} //CAMBIAR A SVG!!!!!!!
                />
                <img
                src={`../cars/${this.state.chassis}/${this.state.chassis}bodydetails.png`}
                />
                <img
                src={`../cars/${this.state.chassis}/rims/${this.state.rims}.png`}
                />
                <img
                src={`../cars/${this.state.chassis}/front/${this.state.front}.svg`}
                />
                <img
                src={`../cars/${this.state.chassis}/front/${this.state.front}details.png`}
                />
                <img
                src={`../cars/${this.state.chassis}/rear/${this.state.rear}.svg`}
                />
                <img
                src={`../cars/${this.state.chassis}/rear/${this.state.rear}details.png`}
                />
                <img
                src={`../cars/${this.state.chassis}/skirt/${this.state.skirt}.svg`}
                />
                <img
                src={`../cars/${this.state.chassis}/skirt/${this.state.skirt}details.png`}
                />
            </div>
        );
    }
}



export default Car;