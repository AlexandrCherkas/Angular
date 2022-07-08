import { ITableAddress } from "./ITableAddress"
export interface ITableUser {
  id: string,
  personStatus: string,
  firstName: string,
  secondName: string,
  age: number,
  company: string,
  email: string,
  city: string,
  address: ITableAddress
}
