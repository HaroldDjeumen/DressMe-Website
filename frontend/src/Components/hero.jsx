import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiMirrorMirror } from "react-icons/gi";

const Hero = () => {
    return (
        <div id="hero-container" className="bg-[#b9c3c0] overflow-hidden pt-20 pb-16 px-6 lg:px-16 min-h-screen flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div id="text-elements-hero" className="flex flex-col space-y-6 lg:space-y-8 text-left">
                    <h1 className="text-4xl lg:text-6xl text-[#465b52] font-extrabold leading-tight">
                        Experience Shopping <br />
                        <span className="text-[#088178]">Like Never Before</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600 font-medium">
                        Discover a smarter way to shop with MirrorMe. From trendy styles to unmatched convenience, we bring the best of online shopping directly to you. Transform your shopping journey today!
                    </p>
                    <div className="flex gap-4 pt-6">
                        {/* Updated Link for Navigation */}
                        <Link
                            to="/shop"
                            className="flex items-center bg-[#088178] rounded-lg text-white font-bold text-lg px-8 py-3 hover:bg-[#065f5a] transition duration-300 ease-in-out"
                        >
                            <FaShoppingCart size="1.5em" className="mr-2" />
                            Start Shopping
                        </Link>
                        <button
                            type="button"
                            className="flex items-center bg-[#b9c3c0] border-2 border-[#088178] rounded-lg text-[#088178] font-bold text-lg px-8 py-3 hover:bg-[#088178] hover:text-white transition duration-300 ease-in-out"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Hero Image Section */}
                <div id="image-container" className="flex justify-center">
                    <GiMirrorMirror />
                </div>
            </div>
        </div>
    );
};

export default Hero;