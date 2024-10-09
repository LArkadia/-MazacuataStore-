const CartPOSItem = ({ item }) => {
    return (
      <div className="flex justify-between items-center mb-4">
        <div>
          <p>{item.titulo}</p>
          <p className="text-gray-600">ISBN: {item.isbn}</p>
        </div>
        <div className="flex items-center">
          <p className="ml-4">${item.precio.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default CartPOSItem;
  