import { Component, ReactNode } from "react";

interface CarProps{
    chassis?: number;
    body?: number;
    details?: number;
    front?: number;
    rear?: number;
    skirt?: number;
    wing?: number;
    wheels?: number;
    color?: string;
}

interface CarState {
    chassis: number;
    body: number;
    details: number;
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
            chassis: props.chassis || 0,
            body: props.body || 0 ,
            details: props.details || 0,
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
            <div className="car">
                <img
                src="../cars/chassis/0.png"
                />
                <img
                src="../cars/body/0.png"
                />
                <img
                src="../cars/body/details.png"
                />
                <img
                src="../cars/rims/0.png"
                />
                <img
                src="../cars/front/front.svg"
                />
                <img
                src="../cars/front/frontDetails.png"
                />
                <img
                src="../cars/rear/rear.svg"
                />
                <img
                src="../cars/rear/rearDetails.png"
                />
                <img
                src="../cars/skirt/skirt.svg"
                />
                <img
                src="../cars/skirt/skirtDetails.png"
                />
            </div>
        );
    }
}

export default Car;