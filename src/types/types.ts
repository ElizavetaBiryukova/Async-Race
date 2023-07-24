export interface StorageObj {
  carsArr: Array<Car>
  cars: number,
  idCar: number | null,
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

export interface CarMovement {
    velocity: number,
    distance: number
}

export interface Winners {
  id: number;
  wins: number;
  time: number;
}

export interface Winner {
  id: number;
  wins: number;
  time: number;
  car: Car;
}

export interface GetWinners {
  items: Winner[];
  count: number;
}