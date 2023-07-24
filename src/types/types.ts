export interface StorageObj {
  carsArr: Array<Car>
  cars: number,
  idCar: number | null,
  winners: number,
  carsPage: number,
  winnersPage: number,
  winnersArr: Array<Winner>,
  openSection: string,
  animation: IObj,
}

export interface IObjNumber {
  [id: string]: number;
}
export interface IObj {
  [id: string]: IObjNumber;
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

export type Engine = {
  success: boolean;
};

export interface WinnersCars {
  success: boolean;
  id: number;
  time: number;
}