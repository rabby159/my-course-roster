
import './App.css'
import Carts from './components/Carts/Carts'
import Items from './components/Items/Items'

function App() {

  return (
    <>

      <h1 className='text-center text-4xl font-bold mt-6'>Course Registration</h1>
    
    <div className='flex justify-between container mx-auto my-10'>
      <Items></Items>
      <Carts></Carts>
    </div>
    </>
  )
}

export default App
