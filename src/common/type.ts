export interface IUser {
  id?: number;
  name?: string;
  email: string;
  password: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}
export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface IProduct {
  id: string;
  category: Category;
  description: string;
  name: string;
  price: string;
  size: Size;
  color: Color;
  img: string;
}
