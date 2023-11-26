import React from 'react';
import style from './bestsell.module.css'
import Image from 'next/image';

const Bestsell = () => {
  return (
    <>
    <div className={style.container}>
        <div className={style.bestsell}>
            <div className={style.contsell}>
            <h5 className={style.bestsellh5}> Our Strength</h5>
            <h2 className={style.bestsellh2}>Why We Are The Best?</h2>
            </div>
            <div>
            <Image src="/image/strength-vacter.png" alt="Vacter Image" width={150} height={100} />
            </div>
        </div>
        
        
        <div className={style.bestImageContainer}>
            <div className={style.last}>
                <div className='mb-3'>
                    <Image src="/image/all-kinds-of-foods.png" alt="All kinds of Foods" width={60} height={100} />
                </div>
                <h2 className={style.headH2}>
                    All kinds of Foods
                </h2>
                <h5 className={style.headH5}>
                    Lorem Ipsum is simply dummy text of the printing and type setting industry.
                </h5>
                
            </div>
            <div className={style.last}>
                <div className='mb-3'>
                <Image src="/image/fresh-foods.png" alt="Fresh Foods" width={60} height={100}/>
                </div>
                <h2 className={style.headH2}>Fresh Foods</h2>
                <h5 className={style.headH5}>Lorem Ipsum is simply dummy text of the printing and type setting industry.</h5>
            </div>
            <div className={style.last}>
                <div className='mb-3'>
                <Image src="/image/best-taste.png" alt="Best Taste" width={60} height={100}/>
                </div>
                <h2 className={style.headH2}>
                Best Taste
                </h2>
                <h5 className={style.headH5}>
                Lorem Ipsum is simply dummy text of the printing and type setting industry.
                </h5>
            </div>
            <div className={style.last}>
                <div className='mb-3'>
                <Image src="/image/on-time-delivery.png" alt="On Time Delivery" width={60} height={100} />
                </div>
                <h2 className={style.headH2}>
                On Time Delivery
                </h2>
                <h5 className={style.headH5}>Lorem Ipsum is simply dummy text of the printing and type setting industry.</h5>
            </div>
        </div>
    </div>
    </>
  )
}

export default Bestsell