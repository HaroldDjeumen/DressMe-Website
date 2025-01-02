import productImage1 from "../Assets/Subjects/products/f2.jpg";
import productImage2 from "../Assets/Subjects/products/f7.jpg";
import Star from "./star";
import { useState } from "react";
import { useCart } from "../Components/CartContext.jsx"; // Import the cart hook
import banner from "../Assets/Subjects/banner/b1.jpg";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(8); // Start with 8 products
    const [modalImage, setModalImage] = useState(null); // To display full-size image in modal
    const { addToCart } = useCart(); // Access the cart function

    

    // Unified product pool (shirts + pants)
    const allProducts = [
        { figure: productImage1, name: "Nike Shirt 1", stars: <Star totalStars={5} defaultRating={3} />, price: "R400" },
        { figure: productImage1, name: "Nike Shirt 2", stars: <Star totalStars={5} defaultRating={4} />, price: "R450" },
        { figure: productImage1, name: "Adidas Shirt", stars: <Star totalStars={5} defaultRating={5} />, price: "R500" },
        { figure: productImage1, name: "Puma Shirt", stars: <Star totalStars={5} defaultRating={3} />, price: "R350" },
        { figure: productImage2, name: "Nike Pants 1", stars: <Star totalStars={5} defaultRating={4} />, price: "R600" },
        { figure: productImage2, name: "Adidas Pants", stars: <Star totalStars={5} defaultRating={5} />, price: "R700" },
        { figure: productImage2, name: "Puma Pants", stars: <Star totalStars={5} defaultRating={3} />, price: "R550" },
        { figure: productImage2, name: "Reebok Pants", stars: <Star totalStars={5} defaultRating={4} />, price: "R580" },
        { figure: productImage1, name: "Reebok Shirt", stars: <Star totalStars={5} defaultRating={4} />, price: "R480" },
        { figure: productImage1, name: "Under Armour Shirt", stars: <Star totalStars={5} defaultRating={5} />, price: "R520" },
        { figure: productImage2, name: "Under Armour Pants", stars: <Star totalStars={5} defaultRating={5} />, price: "R720" },
        { figure: productImage2, name: "Champion Pants", stars: <Star totalStars={5} defaultRating={4} />, price: "R680" },
    ];

    // Load More Products
    const loadMoreProducts = () => {
        const nextProducts = allProducts.slice(index, index + 4); // Load 4 more products
        setProducts((prev) => [...prev, ...nextProducts]);
        setIndex((prev) => prev + 4);
    };

    // Preload first 8 products on component mount
    useState(() => {
        setProducts(allProducts.slice(0, 8));
    }, []);

    // Open and close modal
    const openModal = (product) => setModalImage(product);
    const closeModal = () => setModalImage(null);

    return (
        <div className="overflow-hidden px-4 py-8 bg-[#f7f9f8]">
            {/* Banner */}
            <div className="w-full mb-12 flex justify-center">
                <img
                    src={banner}
                    alt="Shop Banner"
                    className="rounded-xl shadow-lg w-full max-w-full object-cover"
                />
            </div>

            {/* Unified Products Section */}
            <h2 className="text-3xl font-bold text-[#3a403a] text-center mb-8">Products</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {products.map((feature, index) => (
                    <div
                        key={`product-${index}`}
                        className="hover:bg-[#b9c3c0] min-w-[200px] p-[8px] px-[10px] border border-[#465b52] rounded-[20px] cursor-pointer shadow-lg my-[10px] transition ease-in-out duration-200 relative"
                    >
                        <div
                            className="h-67 overflow-hidden mb-4 cursor-pointer"
                            onClick={() => openModal(feature)}
                        >
                            <img
                                src={feature.figure}
                                alt={feature.name}
                                className="w-full rounded-[20px]"
                            />
                        </div>
                        <div className="p-2">
                            <div className="text-lg font-semibold text-[#465b52]">
                                {feature.name}
                            </div>
                            <div className="mb-2">{feature.stars}</div>
                            <div className="text-xl font-bold text-[#088178]">
                                {feature.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mb-12">
                <button
                    onClick={loadMoreProducts}
                    className="px-6 py-2 bg-[#088178] text-white rounded shadow hover:bg-[#3a403a]"
                >
                    Load More Products
                </button>
            </div>

            {/* Full-Size Image Modal */}
            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg flex overflow-hidden relative w-full max-w-4xl">
                        {/* Left: Product Image */}
                        <div className="w-1/2 bg-[#e1e8e3] p-4 flex justify-center items-center">
                            <img
                                src={modalImage.figure}
                                alt={modalImage.name}
                                className="max-h-[90vh] object-contain"
                            />
                        </div>

                        {/* Right: Product Details */}
                        <div className="w-1/2 p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-[#465b52] mb-2">
                                    {modalImage.name}
                                </h2>
                                <div className="flex items-center mb-4">
                                    {modalImage.stars}
                                </div>
                                <div className="text-xl font-bold text-[#088178] mb-4">
                                    {modalImage.price}
                                </div>
                            </div>

                            {/* Size Options */}
                            <div>
                                <h3 className="text-lg font-semibold text-[#3a403a] mb-2">
                                    Select Size
                                </h3>
                                <div className="flex gap-2 flex-wrap">
                                    {["S", "M", "L", "XL"].map((size) => (
                                        <button
                                            key={size}
                                            className="px-4 py-2 border rounded hover:bg-[#f7f9f8]"
                                            onClick={() => alert(`Selected size: ${size}`)}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons for Add to Cart and Add to Model */}
                            <div>
                                <button
                                    className="mt-6 w-full bg-[#088178] text-white py-3 rounded text-lg font-semibold hover:bg-[#3a403a]"
                                    onClick={() => {
                                        addToCart({
                                            name: modalImage.name,
                                            price: modalImage.price,
                                            figure: modalImage.figure,
                                        });
                                    }}
                                >
                                    ADD TO CART
                                </button>

                                <button
                                    className="mt-4 w-full bg-[#088178] text-white py-3 rounded text-lg font-semibold hover:bg-[#3a403a]"
                                >
                                    ADD TO MODEL
                                </button>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 bg-[#b9c3c0] text-[#3a403a] px-3 py-1 rounded-full"
                            onClick={closeModal}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
