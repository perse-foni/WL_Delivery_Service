import { Product } from "./product";

export interface Store {
  id: number;
  name: string;
  category: string;
  address: string;
  description: string;
  avatar: string;
  rating: number;
  products: Product[];
 }
