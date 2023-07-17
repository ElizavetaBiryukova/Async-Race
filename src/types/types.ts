export interface IStorageObj {
  cars: number,
  winners: number,
  pages: number,
}

export interface Car {
  name: string,
  color: string,
  id: number
}

export interface CreateCar {
  name: string;
  color: string;
}