export interface ITableUser {
  id: string,
  personStatus: string,
  firstName: string,
  secondName: string,
  age: number,
  company: string,
  email: string,
  address: {
    country: string,
    city: string,
    street: string,
    number: number
  }
}
