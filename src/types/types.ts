export interface StorageObj {
  carsArr: Array<Car>
  cars: number,
  winners: number,
  pages: number,
}

export interface Car {
  name: string,
  color: string,
  id: number
}

export interface Cars {
  items: Car[];
  count: number;
}

export interface CreateCar {
  name: string;
  color: string;
}