import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <>
        <div>
            <div>
            <> 
 
<div className="w-full overflow-x-auto">
  <table className="w-full text-left border-collapse rounded w-overflow-x-auto " cellSpacing="0">
    <tbody>
      <tr className="border-b border-slate-300">
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Producut</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Price</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Quantity</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Total</th>
        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Delete </th>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div className="flex items-center gap-4">
            <div className="w-30 h-19 bg-slate-200 rounded-sm">
                <Image src="/image/pizza-1.png" width={120} height={100} alt='Vacter Image' />
            </div>
            <div>
              <h3 className="text-sm font-medium">Shrimp Pizza</h3>
            </div>
            </div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">
          <div>$35.00</div>
        </td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Carroll Group</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Member</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">salas_a</td>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Agnes Sherman</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Developer</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Apple</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Admin</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">shermanagnes</td>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Jemma Cummings</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Senior Designer</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">20goto10</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Member</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">jemmaC</td>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Jimi Cardenas</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Copywriter</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Wind-UI</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Owner</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">cardenasji</td>
      </tr>
      <tr className="border-b border-slate-200">
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Mateusz Tucker</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Project Manager</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Tailwindui</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Member</td>
        <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">mt</td>
      </tr>
    </tbody>
  </table>
</div>
 
 </> 
            </div>
            <div></div>
        </div>
    </>
  )
}

export default Cart