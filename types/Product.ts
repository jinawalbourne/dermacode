export type Product = {
  id?: string;
  name: string;
  brand: string;
  ingredients: string[];
  skinTypes?: {
    oily: boolean;
    dry: boolean;
    combo: boolean;
    normal: boolean;
    sensitive: boolean;
  };
};