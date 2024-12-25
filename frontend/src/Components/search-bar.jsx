import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic here, e.g., API call or filtering data
        console.log("Searching for:", query);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="flex items-center w-full lg:mr-16 lg:ml-8"
        >
            {/* Shared Input Styling */}
            <div className="relative flex items-center w-full">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for clothing by brand, style, or size"
                    className="w-full rounded-full border border-gray-300 bg-white py-2 pl-4 pr-10 text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#465b52] transition-all duration-200 ease-in-out"
                />
                <button
                    type="submit"
                    className="absolute right-3 text-gray-500 hover:text-emerald-500 transition duration-300"
                >
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;
