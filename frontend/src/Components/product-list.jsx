import { RiStarSFill } from "react-icons/ri";
import shirt from "../Assets/Subjects/shirt.png";
import pants from "../Assets/Subjects/pants.png";
import Star from "./star";
import { useState } from "react";

const Products = () => {
    const [shirtProducts, setShirtProducts] = useState([]);
    const [pantsProducts, setPantsProducts] = useState([]);

    const [shirtIndex, setShirtIndex] = useState(4); // Start at 4 for initial display
    const [pantsIndex, setPantsIndex] = useState(4);

    const [modalImage, setModalImage] = useState(null); // To display full-size image in modal

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
        { figure: pants, name: "Levi's Pants", stars: <Star totalStars={5} defaultRating={4} />, price: "R700" },
        { figure: pants, name: "Nike Pants 1", stars: <Star totalStars={5} defaultRating={4} />, price: "R600" },
        { figure: pants, name: "Adidas Pants", stars: <Star totalStars={5} defaultRating={5} />, price: "R700" },
        { figure: pants, name: "Puma Pants", stars: <Star totalStars={5} defaultRating={3} />, price: "R550" },
        { figure: pants, name: "Reebok Pants", stars: <Star totalStars={5} defaultRating={4} />, price: "R580" },
        { figure: pants, name: "Under Armour Pants", stars: <Star totalStars={5} defaultRating={5} />, price: "R720" },
        { figure: pants, name: "Champion Pants", stars: <Star totalStars={5} defaultRating={4} />, price: "R680" },
        { figure: pants, name: "Fila Pants", stars: <Star totalStars={5} defaultRating={3} />, price: "R620" },
        { figure: pants, name: "New Balance Pants", stars: <Star totalStars={5} defaultRating={5} />, price: "R750" },
        { figure: pants, name: "Levi's Pants", stars: <Star totalStars={5} defaultRating={4} />, price: "R700" },
    ];

    // Load More Shirts
    const loadMoreShirts = () => {
        const nextShirts = allShirts.slice(shirtIndex, shirtIndex + 8);
        setShirtProducts((prev) => [...prev, ...nextShirts]);
        setShirtIndex((prev) => prev + 8);
    };

    // Load More Pants
    const loadMorePants = () => {
        const nextPants = allPants.slice(pantsIndex, pantsIndex + 8);
        setPantsProducts((prev) => [...prev, ...nextPants]);
        setPantsIndex((prev) => prev + 8);
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
        <div className="overflow-hidden px-4 py-8 bg-gray-100">
            {/* Shirts Section */}
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Shirts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {shirtProducts.map((feature, index) => (
                    <div key={`shirt-${index}`} className="bg-white shadow-md rounded-lg overflow-hidden relative">
                        <div
                            className="h-[400px] overflow-hidden cursor-pointer"
                            onClick={() => openModal(feature)}
                        >
                            <img
                                src={feature.figure}
                                alt={feature.name}
                                className="w-full h-full object-cover transform scale-110"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <div className="text-lg font-semibold">{feature.name}</div>
                            <div className="mb-2">{feature.stars}</div>
                            <div className="text-xl font-bold">{feature.price}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mb-8">
                <button
                    onClick={loadMoreShirts}
                    className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
                >
                    Load More Shirts
                </button>
            </div>

            {/* Pants Section */}
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Pants</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {pantsProducts.map((feature, index) => (
                    <div key={`pants-${index}`} className="bg-white shadow-md rounded-lg overflow-hidden relative">
                        <div
                            className="h-[400px] overflow-hidden cursor-pointer"
                            onClick={() => openModal(feature)}
                        >
                            <img
                                src={feature.figure}
                                alt={feature.name}
                                className="w-full h-full object-cover transform scale-110"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <div className="text-lg font-semibold">{feature.name}</div>
                            <div className="mb-2">{feature.stars}</div>
                            <div className="text-xl font-bold">{feature.price}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button
                    onClick={loadMorePants}
                    className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
                >
                    Load More Pants
                </button>
            </div>

            {/* Full-Size Image Modal */}
            {modalImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg flex overflow-hidden relative w-full max-w-4xl">
                        <div className="w-1/2 bg-gray-100 p-4 flex justify-center items-center">
                            <img
                                src={modalImage.figure}
                                alt={modalImage.name}
                                className="max-h-[90vh] object-contain"
                            />
                        </div>
                        <div className="w-1/2 p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">{modalImage.name}</h2>
                                <div className="flex items-center mb-4">{modalImage.stars}</div>
                                <div className="text-xl font-bold mb-4">{modalImage.price}</div>
                            </div>
                            <div>
                            <button
                                className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                                onClick={() => alert("Added to Cart!")}
                            >
                                ADD TO CART
                            </button>
                            <button
                                className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                                onClick={() => alert("Added to Model!")}
                            >
                                ADD TO MODEL
                            </button>
                            </div>
                        </div>
                        <button
                            className="absolute top-2 right-2 bg-gray-300 text-black px-3 py-1 rounded-full"
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
