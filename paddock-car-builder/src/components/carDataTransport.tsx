interface CarData {
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
  
  export const getCarData = (): CarData | null => {
    const storedCarData = localStorage.getItem('carData');
    return storedCarData ? JSON.parse(storedCarData) : null;
  };
  
  export const setCarData = (data: CarData): void => {
    localStorage.setItem('carData', JSON.stringify(data));
  };