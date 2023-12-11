import { Component, ReactNode } from "react";

interface CarProps{
    body?: number;
    front?: number;
    rear?: number;
    skirt?: number;
    wing?: number;
    wheels?: number;
    color?: string;
}

interface CarState {
    body: number;
    front: number;
    rear: number;
    skirt: number;
    wing: number;
    wheels: number;
    color: string;
}

class Car extends Component<CarProps, CarState> {
    constructor(props: CarProps){
        super(props);

        // Default rendering properties
        this.state = {
            body: props.body || 0 ,
            front: props.front || 1,
            rear: props.rear || 1,
            skirt: props.skirt || 1,
            wing: props.wing || 1,
            wheels: props.wheels || 0,
            color: props.color || '#bfbfbf',
        };
    }

    changeFront = (newFront: number) => {
        this.setState({front: newFront});
    };

    render() {
        return (
            <div>
                <h1>{this.state.front}</h1>
            </div>
        );
    }
}

export default Car;