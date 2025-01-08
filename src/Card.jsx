export default function Card({ product, index, handleAddToCart }) {
    return (
        <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <img
                className="object-cover w-full h-48 rounded-md"
                src={`https://picsum.photos/seed/${product.avatar}/200/300`}
                alt=""
            />
            <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">Rs.{product.price}</p>
                <button
                    onClick={() => {
                        handleAddToCart(product);
                    }}
                    className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Add to Cart
                </button>
                <span>

                </span>
            </div>
        </div>
    )
}