"use client"
import Image from 'next/image'
import {  useState} from 'react'
import { FaTrash } from 'react-icons/fa'
import style from './checkout.module.css'
import ModalBasic from '@/components/checkoutMedal'
import {  FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import  { useContext } from 'react'
import { ProductContext} from "@/app/context/store";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';


const CheckOut = ({setIsShowing,isShowing}) => {
const router = useRouter();
const {cart, addItemToCart,deleteItemFromCart} = useContext(ProductContext)
const [succeeded, setSucceeded] = useState(false);
const [orderID, setOrderID] = useState(false);
const [billingDetails, setBillingDetails] = useState("");
const [purchases, setPurchases] = useState("");

  
  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };
    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };
    addItemToCart(item);
  };

  const subtotal = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price.small,
    0
  );

  const shipping = (subtotal * 0.15).toFixed(2);

  const totalAmount = (Number(subtotal) + Number(shipping)).toFixed(2);


  const initialOptions = {
    clientId: "AYcsBayGZQ9pZlm5NSTvu8PXdsi9SkKrYoKKhX6pt8XjBx9sX1Adcll2mtjKYSRobw--dePhL7PImd9Z",
    currency: "USD",
    intent: "capture",
};

const createOrder = (data, actions) => {
  return actions.order
    .create({
      purchase_units: [
        {
          description: cart.description,
          amount: {
            value: totalAmount,
          },
        },
      ],
    })
    .then((orderID) => {
      setOrderID(orderID);
      return orderID;
    });
};



const onApprove = (data, actions) => {
 
  return actions.order.capture().then(function (details) {
    const payer = details.payer;
    const purchase = details.purchase_units;
    
    console.log('details', details)
    console.log('payer', purchase)
    // const phone = details.phone
    setBillingDetails(payer);
    setPurchases(purchase);
    setSucceeded(true);
    setOrderID(data.orderID);
    return fetch('/api/paypal', {
      method: 'post',
      body: JSON.stringify({
        orderID: data.orderID,
        billingDetails: payer,
        purchases: purchase
      })
    })
    .then(response => response.json())
    .then(data => {
      toast.success(`Transaction completed by ${payer?.name?.given_name} ,  orderID ${data.orderID}`);
      router.push('/paid');
    })
    .catch(error => {
      console.error('Error posting data:', error);
      
    });
  });
};



  return (
    <>
    <div className={style.container}>
        <div>
        <> 

<div className={`w-full overflow-x-auto ${style.table}`}>
<table className="w-full text-left border-collapse rounded w-overflow-x-auto " cellSpacing="0">
<tbody>
  <tr className="border-b border-slate-300">
    <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Product</th>
    <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Name</th>
    <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Extra</th>
    <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Price</th>
    <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Quantity</th>
    <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Total</th>
    <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "> </th>
  </tr>
  {cart?.cartItems?.map((product, index) => (
        <>
        <tr key={index} className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
            <div className="w-30 h-19  rounded-sm">
                <Image src={product?.image || "/image/pizza-1.png"} width={120} height={100} alt='Vacter Image' />
            </div>
            
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className="text-sm font-medium">{product?.title}</h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
            <div>
              <h3 className="text-sm font-medium">{product?.extra?.item || product?.extra?.item1}</h3>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div>${product?.price?.small|| product?.price?.medium || product?.price?.large}</div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div className={style.contain}>
        <FaAngleLeft className={style.icon1}  onClick={() => decreaseQty(product)} />
        <div className='mt-2 text-xl'>
            {product.quantity}
        </div>
        <FaAngleRight className={style.icon1} onClick={() => increaseQty(product)} />
       </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
        <div>${ product?.price?.small * product.quantity.toFixed(2)}</div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="text-red-500 cursor-pointer">
            <FaTrash  onClick={() => deleteItemFromCart(product?.product)  } />
          </div>
        </td>
      </tr></>
      ))}

</tbody>
</table>
</div>
</> 
</div>
        <div className={style.cartContainer}>
           <div>
            <h2 className='text-2xl px-6 mb-4 mt-4 text-white-900'>CART TOTALS</h2>
            </div>
            <div>
            <div className='flex justify-between text-white-500 py-2'>  
                <h3>Subtotal</h3>
                <h3>${subtotal}</h3>
            </div> 
            <div className='flex justify-between text-white-500  py-2'> 
                  <h3>Shipping</h3>
                  <h3>${shipping}</h3>
            </div> 
            <div className='flex justify-between text-white-500 py-2'>  
               <h3> Order Total</h3>
               <h3>${totalAmount}</h3>
             </div> 
            </div>
            
            <ModalBasic isShowing={isShowing} setIsShowing={setIsShowing}  />
            <div>
            <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons 
              style={{ layout: "horizontal" }}
              createOrder={createOrder}
              onApprove={onApprove}
              className={style.btn1}
               />
            </PayPalScriptProvider>
               {
                orderID && <p className='text-white-500 py-2'>Order ID: {orderID}</p>
               }
               {
                billingDetails && <p className='text-white-500 py-2'>Billing Details: {JSON.stringify(billingDetails)}</p>
               }
            </div>
            {
                billingDetails && <p className='text-black py-2'>Billing Details: {JSON.stringify(billingDetails)}</p>
               }
            
        </div>
    </div>
</>
  )
}

export default CheckOut