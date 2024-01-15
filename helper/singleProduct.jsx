import axios from "axios";


export const getSinglePizza = async (id) => {
   try {
     const response = await axios.get(`/api/user/product/${id}`);
     return response.data;
     
   } catch (error) {
     console.log(error);
   }
};




export const getAllProductIds = async () => {
 
 const response = await axios.get('/api/user/product/');


 const productIds = response.data.map(p => p.id);

 
 return productIds;
};


 