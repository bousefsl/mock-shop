/// <reference types="vite/client" />

//Defines the shape of a basket item object
//export interface BasketItem {
   // id: number;
   // title: string;
  //  image: string;
   // price: number;
  //  quantity: number;
//}

//Used to export an array of basket items and methods
//export type BasketItemContextType = {
//    items: BasketItem[];
//    addItem: (item: BasketItem) => void;
    //updateItem: (id: number) => void;
    //deleteItem: (id: number) => void;
//};


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