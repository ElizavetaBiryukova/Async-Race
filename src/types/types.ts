export interface StorageObj {
  carsArr: Array<Car>
  cars: number,
  idCar: number | null,
  winners: number,
  carsPage: number,
  winnersPage: number,
  winnersArr: Array<Winner>,
  openSection: string,
  animation: Obj,
}

export interface ObjNumber {
  [id: string]: number;
}

export interface Obj {
  [id: string]: ObjNumber;
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

export interface WinnerCar {
  name?: string;
  color?: string;
  id?: number;
  time: number;
}

export interface NewWinner {
  name?: string;
  color?: string;
  id: number;
  time: number;
}