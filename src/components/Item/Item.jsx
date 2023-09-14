/* eslint-disable react/prop-types */

const Item = ({item}) => {
    const {title, cover, description, price, time} = item;
    return (
        <div className="m-1 md:m-0">
            <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={cover} alt="Items" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-center text-xl font-semibold">{title}</h2>
                <p className="text-justify text-base">{description}</p>
                <div className="flex justify-between">
                    <div className="font-semibold">
                        <p>Price: {price} USD</p>
                    </div>
                    <div className="font-semibold">
                        <p>Credit: {time}hr</p>
                    </div>
                </div>
                <div className="mt-5">
                <button className="w-full btn btn-primary">Select</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Item;