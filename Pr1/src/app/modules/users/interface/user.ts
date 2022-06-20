import { IAddress } from "./address"
export interface IUser {
  id: string,
  title: string,
  name: string,
  secondName: string,
  age: number,
  gender: boolean,
  phone: number,
  nationality: string,
  email: string,
  picture: string,
  address?: Array<IAddress>
}
