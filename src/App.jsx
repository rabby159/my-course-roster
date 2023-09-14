
import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Items from './components/Items/Items'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [addItems, setAddItems] =useState([]);
  const [creditHour, setCreditHour] =useState(0);
  const [remainingHour, setRemainingHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddItems = item =>{
    let timeCount = item.time;

    let priceCount = item.price;

    const isExist = addItems.find(select => select.id === item.id);

    if(isExist){
      toast.error('Already added this course');
      
    }
    else{
      addItems.map((credit) => {
        timeCount += credit.time;
        priceCount += credit.price;      
      
      });

     if(timeCount < 0){
      toast.error('Remaining hour should not less 0')
     }
       const remaining = 20 - timeCount;
 

      // const total = totalPrice + priceCount;

      if(timeCount > 20){
        return toast.error("Reach your maximum credit")
      }
      else{

        setCreditHour(timeCount);

        setRemainingHour(remaining);

        setTotalPrice(priceCount);

        const newItems = [...addItems, item];
        setAddItems(newItems);
      }
    }

  }

  return (
    <>

      <h1 className='text-center text-4xl font-bold mt-6'>Course Registration</h1>
    
    <div className='md:flex  justify-between container mx-auto my-10 gap-8'>
      <Items handleAddItems={handleAddItems}></Items>
      <Carts addItems={addItems} creditHour={creditHour} remainingHour={remainingHour} totalPrice={totalPrice}></Carts>
    </div>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
