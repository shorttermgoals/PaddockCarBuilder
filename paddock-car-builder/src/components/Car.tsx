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
            rims: props.rims || 0,
            color: props.color || '#bfbfbf',
        };
    }

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
        if (nextProps !== prevState) {
          // Devuelve el nuevo estado basado en las nuevas props
          return { ...nextProps };
        }

        //AL VOLVER A PONER EL FRONT QUE SE ENCUENTRA POR DEFECTO NO PARECE RECIBIRLO Y ACTUALIZAR LA CLASE QUIZA POR LA SIMILITUD A LA PREVIA ALTERACION
    
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