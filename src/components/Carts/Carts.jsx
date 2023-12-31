/* eslint-disable react/prop-types */
import Cart from "../Cart/Cart";

const Carts = ({id, addItems, creditHour, remainingHour, totalPrice}) => {
    return (
        <div className="md:w-1/4 bg-base-100 shadow-xl">
            <h2 className="text-center text-xl font-semibold text-cyan-500 border-b-2 pb-5 mt-3">Credit Hour Remaining {remainingHour} hr</h2>
            <h2 className="text-xl font-bold mt-3 p-2">Course Name</h2>
           <div className="border-b-2 pb-5">
            <ol className="list-decimal list-inside">
                { 
                
                    addItems.map(cart => <Cart key={id} cart={cart}></Cart>)
                
                }
            </ol>
           </div>
           <h2 className="p-3 text-lg font-semibold border-b-2 ">Total Credit Hour <small className="text-sm">(max credit 20)</small>: {creditHour}</h2>
           
           <h2 className="p-3 text-lg font-semibold border-b-2 ">Total Price: {totalPrice} USD</h2>


        </div>
    );
};

export default Carts;