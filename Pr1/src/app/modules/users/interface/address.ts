export interface IAddress {
  addressLine: string,
  city: string,
  zip ?: number,
  coordinates ?: {
    latitude: string,
    longitude: string
  }
}
