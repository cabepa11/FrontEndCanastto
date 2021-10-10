export interface ProductData {
  product_data: Product;
}
export interface Category {
  id: number;
  name: string;
  ordinal: number;
}

export interface Product {
  id: number;
  kind: number;
  ean: string;
  price: number;
  name: string;
  categories: Categories[];
  stock: number;
  ordinal: number;
}

export interface Categories {
  category_id: number;
  ordinal: number;
}