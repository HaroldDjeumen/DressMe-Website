import shirt from "../Assets/Subjects/products/f2.jpg";
import pants from "../Assets/Subjects/products/f7.jpg";
import Star from "./star";
import { useState, useEffect } from "react";
import { useCart } from "../Components/CartContext.jsx"; // Import the cart hook
import banner from "../Assets/Subjects/banner/b1.jpg";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All"); // Brand filter
    const [priceRange, setPriceRange] = useState([0, 2000]); // Price filter
    const [minStars, setMinStars] = useState(0); // Star rating filter
    const [modalImage, setModalImage] = useState(null); // To display full-size image in modal

    const { addToCart } = useCart(); // Access the cart function

    const allProducts = [
        { type: "Shirts", figure: shirt, name: "Nike Shirt 1", brand: "Nike", stars: 3, price: 400 },
        { type: "Shirts", figure: shirt, name: "Adidas Shirt", brand: "Adidas", stars: 5, price: 500 },
        { type: "Pants", figure: pants, name: "Nike Pants 1", brand: "Nike", stars: 4, price: 600 },
        { type: "Pants", figure: pants, name: "Adidas Pants", brand: "Adidas", stars: 5, price: 700 },
        { type: "Pants", figure: pants, name: "Puma Pants", brand: "Puma", stars: 3, price: 550 },
        { type: "Pants", figure: pants, name: "Reebok Pants", brand: "Reebok", stars: 4, price: 580 },
        { type: "Shirts", figure: shirt, name: "Nike Shirt 1", brand: "Nike", stars: 3, price: 400 },
        { type: "Shirts", figure: shirt, name: "Adidas Shirt", brand: "Adidas", stars: 5, price: 500 },
        { type: "Pants", figure: pants, name: "Nike Pants 1", brand: "Nike", stars: 4, price: 600 },
        { type: "Pants", figure: pants, name: "Adidas Pants", brand: "Adidas", stars: 5, price: 700 },
        { type: "Pants", figure: pants, name: "Puma Pants", brand: "Puma", stars: 3, price: 550 },
        { type: "Pants", figure: pants, name: "Reebok Pants", brand: "Reebok", stars: 4, price: 580 },
        { type: "Shirts", figure: shirt, name: "Nike Shirt 1", brand: "Nike", stars: 3, price: 400 },
        { type: "Shirts", figure: shirt, name: "Adidas Shirt", brand: "Adidas", stars: 5, price: 500 },
        { type: "Pants", figure: pants, name: "Nike Pants 1", brand: "Nike", stars: 4, price: 600 },
        { type: "Pants", figure: pants, name: "Adidas Pants", brand: "Adidas", stars: 5, price: 700 },
        { type: "Pants", figure: pants, name: "Puma Pants", brand: "Puma", stars: 3, price: 550 },
        { type: "Pants", figure: pants, name: "Reebok Pants", brand: "Reebok", stars: 4, price: 580 },
    ];

    useEffect(() => {
        setProducts(allProducts);
        setFilteredProducts(allProducts);
    }, []);

    // Filter products based on category, brand, price, and stars
    const applyFilters = () => {
        let filtered = products.filter(
            (product) =>
                (category === "All" || product.type === category) &&
                (selectedBrand === "All" || product.brand === selectedBrand) &&
                product.price >= priceRange[0] &&
                product.price <= priceRange[1] &&
                product.stars >= minStars
        );
        setFilteredProducts(filtered);
    };

    // Update filters dynamically
    useEffect(applyFilters, [category, selectedBrand, priceRange, minStars]);

    // Open and close modal
    const openModal = (product) => setModalImage(product);
    const closeModal = () => setModalImage(null);

    return (
        <div className="flex bg-[#f7f9f8] min-h-screen">
            {/* Sidebar */}
            <div className="w-1/5 p-6 mt-10 bg-[#e1e8e3] shadow-md h-screen sticky top-0">
                <h2 className="text-lg font-bold text-[#3a403a] mb-4">Filters</h2>

                {/* Categories */}
                <div className="mb-6">
                    <h3 className="text-md font-semibold text-[#3a403a] mb-2">Categories</h3>
                    <ul>
                        {["All", "Shirts", "Pants"].map((cat) => (
                            <li key={cat}>
                                <button
                                    className={`w-full text-left text-sm font-medium text-[#465b52] py-2 px-4 rounded-lg ${
                                        category === cat ? "bg-[#088178] text-white" : "hover:bg-[#b9c3c0]"
                                    }`}
                                    onClick={() => setCategory(cat)}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Shop by Brand */}
                <div className="mb-6">
                    <h3 className="text-md font-semibold text-[#3a403a] mb-2">Shop by Brand</h3>
                    <ul>
                        {["All", "Nike", "Adidas", "Puma", "Reebok"].map((brand) => (
                            <li key={brand}>
                                <button
                                    className={`w-full text-left text-sm font-medium text-[#465b52] py-2 px-4 rounded-lg ${
                                        selectedBrand === brand ? "bg-[#088178] text-white" : "hover:bg-[#b9c3c0]"
                                    }`}
                                    onClick={() => setSelectedBrand(brand)}
                                >
                                    {brand}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                    <h3 className="text-md font-semibold text-[#3a403a] mb-2">Price Range</h3>
                    <input
                        type="range"
                        min="0"
                        max="2000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                        className="w-full color-[#465b52]"
                    />
                    <p className="text-sm text-[#465b52] mt-2">Up to R{priceRange[1]}</p>
                </div>

                {/* Star Rating */}
                <div className="mb-6">
                    <h3 className="text-md font-semibold text-[#3a403a] mb-2">Star Rating</h3>
                    <select
                        value={minStars}
                        onChange={(e) => setMinStars(Number(e.target.value))}
                        className="w-full text-sm font-medium text-[#465b52] py-2 px-4 rounded-lg bg-[#f7f9f8] border border-[#465b52]"
                    >
                        {[0, 1, 2, 3, 4, 5].map((star) => (
                            <option key={star} value={star}>
                                {star} Stars & Up
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {/* Banner */}
                <div className="mb-12 mt-10">
                    <img
                        src={banner}
                        alt="Shop Banner"
                        className="rounded-xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Products Section */}
                <h2 className="text-3xl font-bold text-[#3a403a] text-center mb-8">
                    {category === "All" ? "All Products" : category}
                </h2>
<div className="grid gap-6 grid-cols-2 md:grid-cols-3">
                    {filteredProducts.map((feature, index) => (
                        <div
                            key={`product-${index}`}
                            className="hover:bg-[#b9c3c0] p-4 border border-[#465b52] rounded-[20px] cursor-pointer shadow-lg transition ease-in-out duration-200"
                        >
                            <div
                                className="h-67 overflow-hidden mb-4"
                                onClick={() => openModal(feature)}
                            >
                                <img
                                    src={feature.figure}
                                    alt={feature.name}
                                    className="w-full rounded-[15px] object-cover"
                                />
                            </div>
                            <div className="p-2">
                                <div className="text-lg font-semibold text-[#465b52]">
                                    {feature.name}
                                </div>
                                <div className="mb-2">
                                    <Star totalStars={5} defaultRating={feature.stars} />
                                </div>
                                <div className="text-xl font-bold text-[#088178]">
                                    R{feature.price}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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
                                    <Star totalStars={5} defaultRating={modalImage.stars} />
                                </div>
                                <div className="text-xl font-bold text-[#088178] mb-4">
                                    R{modalImage.price}
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
