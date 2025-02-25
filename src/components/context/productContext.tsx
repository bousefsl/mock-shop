import { createContext, useContext, useEffect, useState } from "react"
import { BasketContextType, BasketItem, BasketProviderProps, MiniBasketcontextType } from "../../vite-env"

const MiniBasketContext = createContext<MiniBasketcontextType | undefined>(undefined)
const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function BasketProvider({ children }: BasketProviderProps) {
    //Mini-basket open/close state
    const [isOpen, setIsOpen] = useState(false);

    //Basket State
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

    //Functions to control the mini-basket
    const openBasket = () => setIsOpen(true);
    const closeBasket = () => setIsOpen(false);
    //State variable
    const isOpenValue = isOpen;

    //Function to return the quantity in the basket
    const basketQuantity = basket.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

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
            //Map through the array, when the id is found, update it's quantity value else just return the item
            if (item.id === itemId) {
                return {...item, quantity: newQuantity};
            }
            return item;
        });
        updateBasketAndStorage(updatedBasket);
    }

    //Function to return a total cost for all items in the basket
    const getBasketTotal = () => {
        //Reduce => (accumulator, currentValue) => accumulator + currentValue, initialValue
        return basket.reduce((total: number, item: BasketItem ) => total + item.amount * item.quantity, 0)
    }

    //Provide context values
    const miniBasketOverlayContextValue: MiniBasketcontextType = {openBasket, closeBasket, isOpenValue}

    const contextValue: BasketContextType = {
        basket, addItemToBasket, removeItemFromBasket, updateBasketItemQuantity, getBasketTotal, basketQuantity 
    }

    return (
        <BasketContext.Provider value={contextValue}>
            <MiniBasketContext.Provider value={miniBasketOverlayContextValue}>
                {children}
            </MiniBasketContext.Provider>
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

export function useMiniBasketOverlay() {
    const context = useContext(MiniBasketContext);

    if (!context) {
        throw new Error("useMiniBasketOverlay must be used within the MiniBasketProvider")
    }

    return context;
}

{/* Here, we create an "AppProvider", which handles the app state and related logic, and a custom hook, "useBasket". */}