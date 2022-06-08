import { IAddress } from "./address"

export interface IUsersWithAddress {
  id: number,
  name: string,
  secondName: string,
  email: string,
  age: number,
  gender: boolean,
  departament: string,
  company: string,
  imageUrl: string,
  address: Array<IAddress>
}
