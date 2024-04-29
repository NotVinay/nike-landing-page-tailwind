const ShoeCard = ({shoe, changeBigShoeImage, isActive}) => {

    const handleClick = () => {
        if (!isActive) changeBigShoeImage(shoe.bigShoe);
    };
    return (
        <div className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${isActive ? 'border-coral-red' : 'border-transparent'}`}
        onClick={handleClick}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img 
                src={shoe.thumbnail} 
                height={103} 
                width={127}
                className="object-contain"/>
            </div>
        </div>
    )
}

export default ShoeCard;
