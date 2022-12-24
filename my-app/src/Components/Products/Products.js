import React,{useState, useContext} from 'react';
import ProductsHeader from './ProductsHeader'
import './Products.css';
import ProductItem from './ProductItem';
import iphone12 from './../../assets/1.jpg'
import galaxys21 from './../../assets/2.jpg'
import pixel5 from './../../assets/3.jpg'
 import oneplus9 from './../../assets/4.jpg'
import huaweip40 from './../../assets/5.jpg'
 import xiaomimi from './../../assets/6.jpg'
 import ipadpro from './../../assets/7.jpg'

 import galaxytab7 from './../../assets/8.jpg'
  import pixelslate from './../../assets/9.jpg'
  import surfacepro7 from './../../assets/10.jpg'
  import macbookpro from './../../assets/11.jpg'
  import surfacelaptop3 from './../../assets/12.jpg'
  import lenovothinkpad from './../../assets/13.jpg'
  import hpspectra from './../../assets/14.jpg'
  import dellxps13 from './../../assets/15.jpg'
  import ux333 from './../../assets/16.jpg'
  import imacpro from './../../assets/17.jpg'
 import surfacestudio2 from './../../assets/18.jpg'
 import m710 from './../../assets/19.jpg'
 import envy34 from './../../assets/20.png'
 import ipodtouch from './../../assets/ipodtouch.jpg'
 import zflip from './../../assets/21.jpg'
 import googlenest from './../../assets/22.jpg'
 import sonosmove from '../../assets/23.jpg'
 import bose35 from '../../assets/24.jpg'
 import airpodpro from '../../assets/26.jpg'
 import galaxywatch3 from '../../assets/27.jpg'
 import pixelbuds from '../../assets/28.jpg'
 import beatssolo from '../../assets/29.jpg'
 import fitbit from '../../assets/25.jpg'
 import ardino from '../../assets/31.jpg'
 import ada from '../../assets/ada.jpg'
 import pi4 from '../../assets/pi4.jpg'
import sparkfun from '../../assets/33.jpg'
import tinkerkit from '../../assets/tinker.jpg'
import parallax from '../../assets/parallax.jpg'
import trinket from '../../assets/trinket.jpg'
import sparkfunpro from '../../assets/35.jpg'
import metrom0 from '../../assets/metrom0.jpg'
import mega2560 from '../../assets/37.jpg'
import ProductFilter from './ProductFilter';
import Cart from './Cart/Cart';
import CartProvider from '../../store/CartProvider';
import CartContext from '../../store/cart-context';
const Products = props =>{
const [desc, setDesc] = useState(false)
const [sort, setSort] = useState(null)
const [cartIsOpen, setCartIsOpen] = useState(false)

  const products = [
  {id:Math.random().toString(),
  name: 'Apple iPhone 12',
        price: 799.99,
        description: 'The iPhone 12 is a powerful smartphone with a stunning 6.1-inch Super Retina XDR display and 5G connectivity. It features the A14 Bionic chip, which is the fastest chip ever in a smartphone, and it has a dual-camera system with 12 MP ultra-wide and wide lenses.',
        date: new Date(2022,11,12),
        image: iphone12
        },
        {id:Math.random().toString(),
        name: 'Samsung Galaxy S21',
        price: 899.99,
        description: 'The Samsung Galaxy S21 is a high-end smartphone with a stunning 6.2-inch Super AMOLED display and 5G connectivity. It is powered by the Qualcomm Snapdragon 888 processor and has a triple-camera system with 64 MP wide, ultra-wide, and telephoto lenses.',
        date: new Date(2022,2,1),
        image: galaxys21
        },
        {id:Math.random().toString(),
        name: 'Google Pixel 5',
        price: 499.99,
        description: 'The Google Pixel 5 is a mid-range smartphone with a 5.7-inch Full HD OLED display and 5G connectivity. It is powered by the Qualcomm Snapdragon 765G processor and has a dual-camera system with 12.2 MP wide and ultra-wide lenses.',
        date: new Date(2022,11,1),
        image:pixel5
        },
        {id:Math.random().toString(),
        name: 'OnePlus 9',
        price: 799.99,
        description: 'The OnePlus 9 is a high-end smartphone with a 6.55-inch AMOLED display and 5G connectivity. It is powered by the Qualcomm Snapdragon 888 processor and has a triple-camera system with 48 MP main, ultra-wide, and monochrome lenses.',
        date: new Date(2022,6,1),
        image: oneplus9
        },
        {id:Math.random().toString(),
        name: 'Huawei P40 Pro',
        price: 699.99,
        description: 'The Huawei P40 Pro is a high-end smartphone with a 6.58-inch OLED display and 5G connectivity. It is powered by the Kirin 990 processor and has a quad-camera system with 50 MP main, ultra-wide, telephoto, and ToF lenses.',
        date: new Date(2022,2,1),
        image: huaweip40
        },
        {id:Math.random().toString(),
        name: 'Xiaomi Mi 11',
        price: 599.99,
        description: 'The Xiaomi Mi 11 is a high-end smartphone with a 6.81-inch AMOLED display and 5G connectivity. It is powered by the Qualcomm Snapdragon 888 processor and has a triple-camera system with 108 MP main, ultra-wide, and macro lenses.',
        date: new Date(2022,4,1),
          image: xiaomimi
        },
        {id:Math.random().toString(),
        name: 'Apple iPad Pro',
        price: 799.99,
        description: 'The Apple iPad Pro is a powerful tablet with a stunning 11-inch or 12.9-inch Liquid Retina display. It is powered by the A12Z Bionic chip and has a dual-camera system with 12 MP ultra-wide and wide lenses.',
        date: new Date(2022,11,1),
        image: ipadpro
        },
        {id:Math.random().toString(),
          name: 'Samsung Galaxy Tab S7',
          price: 699.99,
          description: 'The Samsung Galaxy Tab S7 is a high-end tablet with a 11-inch or 12.4-inch Super AMOLED display. It is powered by the Qualcomm Snapdragon 865+ processor and has a dual-camera system with 13 MP main and ultra-wide lenses.',
          date: new Date(2022,1,1),
          image:galaxytab7
          },
          {id:Math.random().toString(),
          name: 'Google Pixel Slate',
          price: 599.99,
          description: 'The Google Pixel Slate is a high-end tablet with a 12.3-inch Molecular Display. It is powered by the Intel Core m3, i5, or i7 processor and has an 8 MP front-facing camera.',
          date: new Date(2022,12,1),
          image: pixelslate
          },
          {id:Math.random().toString(),
          name: 'Microsoft Surface Pro 7',
          price: 899.99,
          description: 'The Microsoft Surface Pro 7 is a versatile 2-in-1 laptop with a 12.3-inch PixelSense display. It is powered by the 10th Gen Intel Core i3, i5, or i7 processor and has a 5 MP front-facing camera.',
          date: new Date(2022,6,1),
          image: surfacepro7
          },
          {id:Math.random().toString(),
          name: 'Apple Macbook Pro',
          price: 1499.99,
          description: 'The Apple MacBook Pro is a powerful laptop with a 13-inch or 16-inch Retina display. It is powered by the 8th Gen or 9th Gen Intel Core i5 or i7 processor and has a Touch Bar with Touch ID.',
          date: new Date(2022,1,1),
          image:macbookpro
          },
          {id:Math.random().toString(),
            name: 'Microsoft Surface Laptop 3',
            price: 999.99,
            description: 'The Microsoft Surface Laptop 3 is a premium laptop with a 13.5-inch or 15-inch PixelSense display. It is powered by the 10th Gen Intel Core i5 or i7 processor and has a 1080p HD camera.',
            date: new Date(2022,9,1),
            image:surfacelaptop3
            },
            {id:Math.random().toString(),
            name: 'Lenovo Thinkpad X1 Carbon',
            price: 1199.99,
            description: 'The Lenovo Thinkpad X1 Carbon is a lightweight business laptop with a 14-inch Full HD or 4K UHD display. It is powered by the 10th Gen Intel Core i5 or i7 processor and has a 720p HD camera.',
            date: new Date(2022,3,1),
            image:lenovothinkpad
            },
            {id:Math.random().toString(),
            name: 'HP Spectre x360',
            price: 1299.99,
            description: 'The HP Spectre x360 is a premium 2-in-1 laptop with a 13.3-inch or 15.6-inch Full HD or 4K UHD display. It is powered by the 10th Gen Intel Core i5 or i7 processor and has a 1080p HD camera.',
            date: new Date(2022,11,1),
            image: hpspectra
            },
            {id:Math.random().toString(),
            name: 'Dell XPS 13',
            price: 999.99,
            description: 'The Dell XPS 13 is a premium laptop with a 13.3-inch Full HD or 4K UHD display. It is powered by the 11th Gen Intel Core i5 or i7 processor and has a 1080p HD camera.',
            date: new Date(2022,5,1),
            image:dellxps13
            },
            {id:Math.random().toString(),
            name: 'Asus Zenbook UX333',
            price: 899.99,
            description: 'The Asus Zenbook UX333 is a lightweight laptop with a 13.3-inch Full HD display. It is powered by the 8th Gen Intel Core i5 or i7 processor and has a 720p HD camera.',
            date: new Date(2022,2,1),
            image:ux333
            },
            {id:Math.random().toString(),
            name: 'Apple iMac Pro',
            price: 2299.99,
            description: 'The Apple iMac Pro is a powerful all-in-one desktop with a 27-inch Retina 5K display. It is powered by the 8-core, 10-core, or 18-core Intel Xeon W processor and has a 1080p FaceTime HD camera.',
            date: new Date(2022,7,1),
            image:imacpro
            },
            {id:Math.random().toString(),
            name: 'Microsoft Surface Studio 2',
            price: 3299.99,
            description: 'The Microsoft Surface Studio 2 is a powerful all-in-one desktop with a 28-inch PixelSense display. It is powered by the 8th Gen Intel Core i7 processor and has a 1080p HD camera.',
            date: new Date(2022,3,1),
            image:surfacestudio2
            },
            {id:Math.random().toString(),
              name: 'Lenovo ThinkCentre M710 Tiny',
              price: 599.99,
              description: 'The Lenovo ThinkCentre M710 Tiny is a compact desktop computer with a 7th Gen or 8th Gen Intel Core i3, i5, or i7 processor. It has a built-in graphics card and supports up to 32 GB of DDR4 RAM.',
              date: new Date(2022,9,1),
              image:m710
              },
              {id:Math.random().toString(),
              name: 'HP Envy 34 Curved All-in-One',
              price: 2299.99,
              description: 'The HP Envy 34 Curved All-in-One is a premium all-in-one desktop with a 34-inch Curved Ultra WQHD display. It is powered by the 9th Gen Intel Core i7 processor and has a 1080p HD camera.',
              date: new Date(2022,0,1),
              image:envy34
              },
              {id:Math.random().toString(),
              name: 'Apple iPod Touch',
              price: 199.99,
              description: 'The Apple iPod Touch is a portable media player with a 4-inch Retina display. It is powered by the A10 Fusion chip and has a 8 MP iSight camera.',
              date: new Date(2022,1,1),
              image:ipodtouch
              },
              {id:Math.random().toString(),
                name: 'Samsung Galaxy Z Flip',
                price: 1099.99,
                description: 'The Samsung Galaxy Z Flip is a foldable smartphone with a 6.7-inch Full HD+ Dynamic AMOLED display. It is powered by the Qualcomm Snapdragon 855+ processor and has a dual-camera system with 12 MP main and ultra-wide lenses.',
                date: new Date(2022,2,1),
                image:zflip
                },
                {id:Math.random().toString(),
                name: 'Google Nest Hub Max',
                price: 229.99,
                description: 'The Google Nest Hub Max is a smart display with a 10-inch HD touchscreen. It is powered by the Qualcomm Snapdragon 624 processor and has a 5 MP front-facing camera.',
                date: new Date(2022,3,1),
                image:googlenest
                },
                {id:Math.random().toString(),
                name: 'Sonos Move',
                price: 399.99,
                description: 'The Sonos Move is a portable smart speaker with a 10-hour battery life. It is powered by the Sonos S12 processor and has a single tweeter and mid-woofer.',
                date: new Date(2022,4,1),
                image:sonosmove
                },
                {id:Math.random().toString(),
                name: 'Bose QuietComfort 35 II',
                price: 299.99,
                description: 'The Bose QuietComfort 35 II is a pair of wireless noise-cancelling headphones with a 20-hour battery life. It has a dual-microphone system for clear phone calls and voice commands.',
                date: new Date(2022,5,1),
                image:bose35
          },
          {id:Math.random().toString(),
            name: 'Fitbit Versa 3',
            price: 199.99,
            description: 'The Fitbit Versa 3 is a smartwatch with a 1.58-inch AMOLED display. It is powered by the Qualcomm Snapdragon Wear 3100 processor and has a built-in GPS and heart rate monitor.',
            date: new Date(2022,9,1),
            image:fitbit
            },
            {id:Math.random().toString(),
            name: 'Apple AirPods Pro',
            price: 249.99,
            description: 'The Apple AirPods Pro are a pair of wireless earbuds with active noise cancellation. They have a 5-hour battery life and are powered by the Apple H1 chip.',
            date: new Date(2022,3,1),
            image: airpodpro
            },
            {id:Math.random().toString(),
            name: 'Samsung Galaxy Watch 3',
            price: 399.99,
            description: 'The Samsung Galaxy Watch 3 is a smartwatch with a 1.2-inch or 1.4-inch Super AMOLED display. It is powered by the Exynos 9110 processor and has a built-in GPS and heart rate monitor.',
            date: new Date(2022,8,1),
            image:galaxywatch3
            },
            {id:Math.random().toString(),
            name: 'Google Pixel Buds',
            price: 179.99,
            description: 'The Google Pixel Buds are a pair of wireless earbuds with a 5-hour battery life. They have real-time language translation and are powered by the Google Assistant.',
            date: new Date(2022,9,1),
            image:pixelbuds
            },
            {id:Math.random().toString(),
            name: 'Beats Solo Pro',
            price: 299.99,
            description: 'The Beats Solo Pro are a pair of wireless on-ear headphones with a 22-hour battery life. They have active noise cancellation and are powered by the Apple H1 chip.',
            date: new Date(2022,3,11),
            image:beatssolo
            },
          {id:Math.random().toString(),
            name: 'Raspberry Pi 4 Model B',
            price: 35.00,
            description: 'The Raspberry Pi 4 Model B is a credit card-sized single-board computer with a 1.5 GHz 64-bit quad-core ARM Cortex-A72 processor. It has 4 GB of LPDDR4 RAM and supports dual-display output.',
            date: new Date(2022,1,1),
            image:pi4
            },
            {id:Math.random().toString(),
            name: 'Arduino Uno Rev3',
            price: 25.00,
            description: 'The Arduino Uno Rev3 is a microcontroller board based on the ATmega328 microcontroller. It has 14 digital input/output pins and 6 analog inputs.',
            date: new Date(2022,2,1),
              image:ardino
            },
            {id:Math.random().toString(),
            name: 'Adafruit Circuit Playground Express',
            price: 19.95,
            description: 'The Adafruit Circuit Playground Express is a microcontroller board with a Cortex M0 processor and built-in sensors and LEDs. It is designed for beginners to learn electronics and programming.',
            date: new Date(2022,11,1),
            image: ada
            },
            {id:Math.random().toString(),
            name: 'SparkFun RedBoard Turbo',
            price: 39.95,
            description: 'The SparkFun RedBoard Turbo is a microcontroller board based on the ATSAMD21G18 microcontroller. It has a built-in USB-to-serial converter and 14 digital input/output pins.',
            date: new Date(2022,12,1),
            image:sparkfun
            },
            {id:Math.random().toString(),
            name: 'Tinkerkit Braccio Robotic Arm',
            price: 199.95,
            description: 'The Tinkerkit Braccio Robotic Arm is a robotic arm kit with 9 degrees of freedom. It can be controlled via a serial connection or with the Arduino programming environment.',
            date: new Date(2022,5,1),
            image:tinkerkit
            },
            {id:Math.random().toString(),
            name: 'Parallax Boe-Bot Robot Kit',
            price: 199.99,
            description: 'The Parallax Boe-Bot Robot Kit is a robot kit with a BASIC Stamp 2 microcontroller. It has two continuous rotation servo motors and a variety of sensors for autonomous operation.',
            date: new Date(2022,6,1),
            image:parallax
            },
            {id:Math.random().toString(),
            name: 'Adafruit Trinket M0',
            price: 9.95,
            description: 'The Adafruit Trinket M0 is a microcontroller board based on the ATSAMD21G18 microcontroller. It has a built-in USB-to-serial converter and 14 digital input/output pins.',
            date: new Date(2022,7,1),
            image:trinket
            },
          {id:Math.random().toString(),
            name: 'SparkFun Pro Micro',
            price: 19.95,
            description: 'The SparkFun Pro Micro is a microcontroller board based on the ATmega32U4 microcontroller. It has a built-in USB-to-serial converter and 12 digital input/output pins.',
            date: new Date(2022,8,1),
            image:sparkfunpro
            },
            {id:Math.random().toString(),
            name: 'Adafruit Metro M0 Express',
            price: 19.95,
            description: 'The Adafruit Metro M0 Express is a microcontroller board based on the ATSAMD21G18 microcontroller. It has a built-in USB-to-serial converter and 14 digital input/output pins.',
            date: new Date(2022,9,1),
            image:metrom0
            },
            {id:Math.random().toString(),
            name: 'Arduino Mega 2560',
            price: 44.95,
            description: 'The Arduino Mega 2560 is a microcontroller board based on the ATmega2560 microcontroller. It has 54 digital input/output pins and 16 analog inputs.',
            date: new Date(2022,8,1),
            image:mega2560
            }     
      ]
      
function viewHandler (event){setDesc(event)}
      
const sortHandler = event =>{
if(event === 'Relevence'){
setSort(products.sort())
}
if(event === 'Price'){
            setSort(products.sort((a, b) => {
                // Compare the price of the two products
                if (a.price < b.price) {
                  return -1;
                }
                if (a.price > b.price) {
                  return 1;
                }
                return 0;
              }))
            }
if(event === 'Latest'){
              setSort(products.sort((a, b) => {
                // Compare the month of the two dates
                if (a.date.getMonth() < b.date.getMonth()) {
                  return -1;
                }
                if (a.date.getMonth() > b.date.getMonth()) {
                  return 1;
                }
                return 0;
              }))
            }
            
    }
    function cartOpenHandler(){
      setCartIsOpen(true)
    }
    function cartCloseHandler(){
      setCartIsOpen(false);
      
    }

    const styles = {'height': '950vh'}
      const productsContent = <>
      <ProductsHeader onCartOpen={cartOpenHandler} />
      {cartIsOpen && <Cart  onCartClose={cartCloseHandler}  />}
      <ProductFilter onView={viewHandler} onSort={sortHandler} />
      <div className='product-items'>
        {sort?  sort.map( product => <ProductItem descView={desc} id={product.id} key={product.id} name={product.name} price={product.price} description={product.description} image={product.image}  /> ) : products.map(product => <ProductItem descView={desc} id={product.id} key={product.id} name={product.name} price={product.price} description={product.description} image={product.image}  />)}
      </div> 
      </>;

      const cartctx = useContext(CartContext)
return <CartProvider>
    {!desc?<div className='products' id='products'>
        {productsContent}
        </div> : <div className='products' id='products' style={styles}>
       {productsContent}
        </div>}
</CartProvider>
}

export default Products;
