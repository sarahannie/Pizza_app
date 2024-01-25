"use client"
import { ProductProvider } from '@/helper/filterProduct';
import { CartProvider } from '@/helper/cartProvider';
import { OrderProvider } from '@/helper/orderProvider';
import { createContext } from 'react';

export const ProductContext = createContext();
export const CartContext = createContext()
export const OrdersContext = createContext()


const GeneralProvider = ({ children }) => {
    return(
        <ProductProvider>
            <CartProvider>
                <OrderProvider>
                    {children}
                </OrderProvider>
            </CartProvider>
        </ProductProvider>
    )
}

export default GeneralProvider