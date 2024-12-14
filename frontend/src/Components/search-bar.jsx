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
        <form onSubmit={handleSearch} className="flex items-center lg:w-1/2 ">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for textbooks by title, subject, or ISBN"
                className="hidden md:flex bg-neutral-100 p-2 rounded-full lg:min-w-full outline-red-900 text-neutral-700"
            />
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Title, subject, or ISBN"
                className="md:hidden bg-neutral-100 p-2 rounded-full lg:min-w-full outline-red-900 text-neutral-700"
            />
            <button type="submit" className="ml-2">
                <FaSearch size={22} className="text-red-900" />
            </button>
        </form>
    );
}

export default SearchBar;
