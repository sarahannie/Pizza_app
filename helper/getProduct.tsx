import axios from "axios";
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface Pizza {
  id: string;
  title: string;
  image: string;
}

const useClient = () => {
  const [pizzaData, setPizzaData] = useState<Pizza[]>([]);

  const getPizza = async () => {
    try {
      const response = await axios.get('/api/user/product');
      setPizzaData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Can't fetch product data. Please try again.");
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  return pizzaData;
};

export default useClient;
