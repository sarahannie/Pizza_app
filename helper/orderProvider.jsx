import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { OrdersContext } from '@/app/context/store';

export const OrderProvider = ({ children }) => {
    const [order,setOrder] = useState([]);
    return (
        <OrdersContext.Provider
        value={{
            order,
            setOrder
      }}
      >
        {children}
      </OrdersContext.Provider>
    );
}