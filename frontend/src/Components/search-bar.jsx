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
            className="flex lg:w-full lg:mr-16 lg:ml-8"
        >
            {/* Desktop */}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for clothing by brand, style, or size"
                className="hidden md:flex outline-emerald-700 rounded-full text-neutral-700 text-lg py-2 pl-6 min-w-full"
            />
            {/* Mobile */}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Brand, style, size"
                className="md:hidden bg-neutral-100 p-2 rounded-full outline-emerald-700 text-neutral-700"
            />
            <button type="submit" className="pl-2">
                <FaSearch
                    size={22}
                    className="text-neutral-700 hover:text-emerald-700 transition duration-300ms ease-in-out"
                />
            </button>
        </form>
    );
}

export default SearchBar;
