/* eslint-disable react/prop-types */

const Cart = ({cart}) => {
    return (
        <div className="pl-5">
            <ol className="">
                <li className="">{cart.id}. {cart.title}</li>
            </ol>

        </div>
    );
};

export default Cart;