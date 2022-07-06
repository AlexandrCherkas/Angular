export interface IRemoteUser {
  dob: {
    date: Date,
    age: number,
  },
  gender: boolean,
  location: {
    city: string,
    country: string,
    postcode: number,
    coordinates:{
      latitude: string,
      longitude: string
    },
    street: {
      name: string,
      number: number
    }
  },
  name: {
      title: string,
      first: string,
      last: string,
  },
  email: string,
  login: {
      uuid: string,
      username: string,
      password: string,
      salt: string,
      md5: string,
      sha1: string,
      sha256: string,
  },
  picture: {
      large: string,
      medium: string,
      thumbnail: string,
  },
  phone: number,
  nat: string

}
