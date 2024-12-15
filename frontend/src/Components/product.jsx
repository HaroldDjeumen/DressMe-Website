import { MdOutlineLocalShipping } from "react-icons/md";

const Products = () => {
    const features = [
        {
            figure: (
                <MdOutlineLocalShipping size={40} className="text-red-900" />
            ),
            title: "Free Shipping",
            subtext: "You will love the great low prices.",
        },
        {
            figure: <TbTruckReturn size={40} className="text-red-900" />,
            title: "Free Returns",
            subtext: "Within 15 days for anxchange.",
        },
        {
            figure: <CiCreditCard1 size={50} className="text-red-900" />,
            title: "Flexible Payment",
            subtext: "Pay securely with multiple options.",
        },

        {
            figure: <MdSupportAgent size={50} className="text-red-900" />,
            title: "Online Support",
            subtext: "Oustanding premiun support.",
        },
    ];
    return (
        <div
            id="features-container"
            className=" overflow-hidden pt-32 lg:pt-16 px-2 min-h-screen"
        >
            <div className="flex flex-col space-y-2 text-center md:pb-16">
                <h1 className="text-red-900 lg:text-5xl font-bold text-center">
                    Discover the Booklidio Difference
                </h1>
            </div>
            <div className="flex-col lg:grid lg:grid-cols-2 xl:flex  xl:flex-row justify-between items-center xl:gap-5">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex sm:justify-evenly lg:flex-row justify-between items-center rounded-[16px] lg:py-5 py-3 px-10 "
                    >
                        <div className="p-2 lg:p-3 border-2 border-black rounded-full ">
                            <span className="flex justify-start items-start text-red-900 font-bold lg:text-3xl">
                                {feature.figure}
                            </span>
                        </div>
                        <div className="pl-1 lg:pl-3 lg:flex-col">
                            <h2 className="text-left font-bold">
                                {feature.title}
                            </h2>
                            <p className="lg:pt-2  text-left leading-6 font-normal text-neutral-900">
                                {feature.subtext}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );}

        export default Products;