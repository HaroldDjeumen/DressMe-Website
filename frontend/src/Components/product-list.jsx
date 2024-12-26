import shirt from "../Assets/Subjects/products/f2.jpg";
import pants from "../Assets/Subjects/products/f7.jpg";
import Star from "./star";
import { useState } from "react";
import { useCart } from "../Components/CartContext.jsx"; // Import the cart hook
import banner from "../Assets/Subjects/banner/b1.jpg";

const Products = () => {
    const [shirtProducts, setShirtProducts] = useState([]);
    const [pantsProducts, setPantsProducts] = useState([]);

    const [shirtIndex, setShirtIndex] = useState(4); // Start at 4 for initial display
    const [pantsIndex, setPantsIndex] = useState(4);

    const [modalImage, setModalImage] = useState(null); // To display full-size image in modal

    const { addToCart } = useCart(); // Access the cart function

    // Larger product pools
    const allShirts = [
        { figure: shirt, name: "Nike Shirt 1", stars: <Star totalStars={5} defaultRating={3} />, price: "R400" },
        { figure: shirt, name: "Nike Shirt 2", stars: <Star totalStars={5} defaultRating={4} />, price: "R450" },
        { figure: shirt, name: "Adidas Shirt", stars: <Star totalStars={5} defaultRating={5} />, price: "R500" },
        { figure: shirt, name: "Puma Shirt", stars: <Star totalStars={5} defaultRating={3} />, price: "R350" },
        { figure: shirt, name: "Reebok Shirt", stars: <Star totalStars={5} defaultRating={4} />, price: "R480" },
        { figure: shirt, name: "Under Armour Shirt", stars: <Star totalStars={5} defaultRating={5} />, price: "R520" },
        { figure: shirt, name: "Champion Shirt", stars: <Star totalStars={5} defaultRating={3} />, price: "R390" },
        { figure: shirt, name: "Fila Shirt", stars: <Star totalStars={5} defaultRating={4} />, price: "R460" },
        { figure: shirt, name: "New Balance Shirt", stars: <Star totalStars={5} defaultRating={5} />, price: "R490" },
    ];

    const allPants = [
        { figure: pants, name: "Nike Pants 1", stars: <Star totalStars={5} defaultRating={4} />, price: "R600" },
        { figure: pants, name: "Adidas Pants", stars: <Star totalStars={5} defaultRating={5} />, price: "R700" },
        { figure: pants, name: "Puma Pants", stars: <Star totalStars={5} defaultRating={3} />, price: "R550" },
        { figure: pants, name: "Reebok Pants", stars: <Star totalStars={5} defaultRating={4} />, price: "R580" },
        { figure: pants, name: "Under Armour Pants", stars: <Star totalStars={5} defaultRating={5} />, price: "R720" },
        { figure: pants, name: "Champion Pants", stars: <Star totalStars={5} defaultRating={4} />, price: "R680" },
        { figure: pants, name: "Fila Pants", stars: <Star totalStars={5} defaultRating={3} />, price: "R620" },
        { figure: pants, name: "New Balance Pants", stars: <Star totalStars={5} defaultRating={5} />, price: "R750" },
    ];

    // Load More Shirts
    const loadMoreShirts = () => {
        const nextShirts = allShirts.slice(shirtIndex, shirtIndex + 4);
        setShirtProducts((prev) => [...prev, ...nextShirts]);
        setShirtIndex((prev) => prev + 4);
    };

    // Load More Pants
    const loadMorePants = () => {
        const nextPants = allPants.slice(pantsIndex, pantsIndex + 4);
        setPantsProducts((prev) => [...prev, ...nextPants]);
        setPantsIndex((prev) => prev + 4);
    };

    // Preload first 4 products on component mount
    useState(() => {
        setShirtProducts(allShirts.slice(0, 4));
        setPantsProducts(allPants.slice(0, 4));
    }, []);

    // Open and close modal
    const openModal = (product) => setModalImage(product);
    const closeModal = () => setModalImage(null);

    return (
        <div className="overflow-hidden px-4 py-8 bg-[#f7f9f8]">
            <div className="w-full mb-12 flex justify-center">
                <img
                    src={banner}
                    alt="Shop Banner"
                    className="rounded-xl shadow-lg w-full max-w-full object-cover"
                />
            </div>

            {/* Shirts Section */}
            <h2 className="text-3xl font-bold text-[#3a403a] text-center mb-8">Shirts</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {shirtProducts.map((feature, index) => (
                    <div
                        key={`shirt-${index}`}
                        className="hover:bg-[#b9c3c0] min-w-[250px] p-[10px] px-[12px] border border-[#465b52] rounded-[25px] cursor-pointer shadow-lg my-[15px] transition ease-in-out duration-200 relative"
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
                    onClick={loadMoreShirts}
                    className="px-6 py-2 bg-[#088178] text-white rounded shadow hover:bg-[#3a403a]"
                >
                    Load More Shirts
                </button>
            </div>

            {/* Pants Section */}
            <h2 className="text-3xl font-bold text-[#3a403a] text-center mb-8">Pants</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {pantsProducts.map((feature, index) => (
                    <div
                        key={`pants-${index}`}
                        className="hover:bg-[#b9c3c0] min-w-[250px] p-[10px] px-[12px] border border-[#465b52] rounded-[25px] cursor-pointer shadow-lg my-[15px] transition ease-in-out duration-200 relative"
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
            <div className="flex justify-center">
                <button
                    onClick={loadMorePants}
                    className="px-6 py-2 bg-[#088178] text-white rounded shadow hover:bg-[#3a403a]"
                >
                    Load More Pants
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
