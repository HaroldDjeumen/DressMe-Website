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
            className="flex items-center lg:w-full px-16"
        >
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for clothing by brand, style, or size"
                className="hidden md:flex bg-neutral-100 outline-emerald-700 text-neutral-700 text-lg py-2 pl-6 rounded-full min-w-full "
            />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Brand, style, size"
                className="md:hidden bg-neutral-100 p-2 rounded-full lg:min-w-full outline-red-900 text-neutral-700"
            />
            <button type="submit" className="pl-2">
                <FaSearch size={22} className="text-emerald-700" />
            </button>
        </form>
    );
}

export default SearchBar;
