import { Favotite } from "../modules/shared/enums/favorite";

export interface IFavoriteCards {
  type: Favotite,
  id: number,
  name: string,
}
