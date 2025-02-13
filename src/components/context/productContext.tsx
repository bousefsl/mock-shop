import { createContext, useContext, useEffect, useState } from "react"
import { BasketContextType, BasketItem, BasketProviderProps } from "../../vite-env"


const BasketContext = createContext<BasketContextType | undefined>(undefined);


export function BasketProvider({ children }: BasketProviderProps) {

    const [basket, setBasket] = useState<BasketItem[]>([]);

    //Load basket from localStorage when the context is initialized
    useEffect(() => {
        const storedBasket = localStorage.getItem("basket");

        if(storedBasket) {
            setBasket(JSON.parse(storedBasket));
        }
    }, []);

    //Function to update the basket and local storage
    const updateBasketAndStorage = (newBasket: BasketItem[]) => {
        setBasket(newBasket);
        localStorage.setItem("basket", JSON.stringify(newBasket));
    }

    //Function to add a new item to the basket
    const addItemToBasket = (item: BasketItem) => {
        const updatedBasket = [...basket, item];
        updateBasketAndStorage(updatedBasket);
    }

    //Function to remove an item from the basket
    const removeItemFromBasket = (itemId: number) => {
        //Use filter() to return a new array without the item
        const updatedBasket = basket.filter((item) => item.id !== itemId);
        updateBasketAndStorage(updatedBasket);
    }

    //Function to update the quantity of the item in the basket
    const updateBasketItemQuantity = (itemId: number, newQuantity: number) => {
        const updatedBasket = basket.map((item) => {
            //Map through the array, when the id is found, update it's quantity value
            if (item.id === itemId) {
                return {...item, quantity: newQuantity};
            }
            return item;
        });
        updateBasketAndStorage(updatedBasket);
    }

    const contextValue: BasketContextType = {basket, addItemToBasket, removeItemFromBasket, updateBasketItemQuantity}

    return (
        <BasketContext.Provider value={contextValue}>
            {children}
        </BasketContext.Provider>
    )
}

export function useBasket() {
    const context = useContext(BasketContext);

    if (!context) {
        throw new Error("useBasket must be used within the BasketProvider");
    }

    return context;
}

{/* Here, we create an "AppProvider", which handles the app state and related logic, and a custom hook, "useBasket". */}