/// <reference types="vite/client" />

import { ReactNode } from "react";

//Defines the shape of a basket item object
export interface BasketItem {
    id: number;
    title: string;
    image: string;
    price: number;
    quantity: number;
}

//Used to export an array of basket items and methods
export interface BasketContextType {
    basket: BasketItem[];
    addItemToBasket: (item: BasketItem) => void;
    removeItemFromBasket: (itemId: number) => void;
    updateBasketItemQuantity: (itemId: number, newQuantity: number) => void;
}

export interface BasketProviderProps {
  children: ReactNode;
}

//Defines the shape of a product object
export interface ProductProps {
  data: {
    products: {
      edges: []
    }
  }
  node: INode;
}

export interface INode {
  id: string;
  title:string;
  description: string;
  featuredImage: IFeatImg;
  variants: {
    edges: any;
    node: {
      price: IPrice;
    }
  }
}

export interface IFeatImg {
  id:string;
  url:string;
}

export interface IPrice {
  amount: number;
  currencyCode: string;
}