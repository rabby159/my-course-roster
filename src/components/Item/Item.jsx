
const Item = ({item}) => {
    const {title, cover, description} = item;
    return (
        <div className="">
            <div className="card h-[460px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={cover} alt="Items" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-center text-xl font-semibold">{title}</h2>
                <p className="text-justify">{description}</p>
                <div className="">
                <button className="w-full btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Item;