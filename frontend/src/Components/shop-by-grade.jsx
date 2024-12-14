import * as React from "react";
import {
    MdOutlineSchool,
    MdStarRate,
    MdFavorite,
    MdBook,
    MdBrush,
    MdExtension,
    MdComputer,
    MdSchool,
    MdAccessTime,
    MdBuild,
    MdGroup,
    MdTrendingUp,
} from "react-icons/md";

const ShopByGrade = () => {
    const grades = [
        {
            grade: "Grade 1",
            icon: <MdOutlineSchool size={120} />,
            href: "shop/grade-1",
        },
        {
            grade: "Grade 2",
            icon: <MdStarRate size={120} />,
            href: "shop/grade-2",
        },
        {
            grade: "Grade 3",
            icon: <MdFavorite size={120} />,
            href: "shop/grade-3",
        },
        {
            grade: "Grade 4",
            icon: <MdBook size={120} />,
            href: "shop/grade-4",
        },
        {
            grade: "Grade 5",
            icon: <MdBrush size={120} />,
            href: "shop/grade-5",
        },
        {
            grade: "Grade 6",
            icon: <MdExtension size={120} />,
            href: "shop/grade-6",
        },
        {
            grade: "Grade 7",
            icon: <MdComputer size={120} />,
            href: "shop/grade-7",
        },
        {
            grade: "Grade 8",
            icon: <MdSchool size={120} />,
            href: "shop/grade-8",
        },
        {
            grade: "Grade 9",
            icon: <MdAccessTime size={120} />,
            href: "shop/grade-9",
        },
        {
            grade: "Grade 10",
            icon: <MdBuild size={120} />,
            href: "shop/grade-10",
        },
        {
            grade: "Grade 11",
            icon: <MdGroup size={120} />,
            href: "shop/grade-11",
        },
        {
            grade: "Grade 12",
            icon: <MdTrendingUp size={120} />,
            href: "shop/grade-12",
        },
    ];

    return (
        <div
            id="grades"
            className="bg-gray-100 overflow-hidden min-h-screen py-16 px-6 lg:pt-32"
        >
            <div>
                {/* Desktop Menu */}
                <div className="hidden md:flex flex-col">
                    <h1 className="text-3xl pb-6 text-neutral-800 font-md">
                        Shop by Grade
                    </h1>
                    <div className="grid grid-cols-6  gap-4">
                        {grades.map((grade, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-between bg-white rounded-lg shadow-md p-4 transition duration-300ms ease-in-out hover:scale-105"
                            >
                                <a href={grade.href} className="">
                                    <div className="text-red-900">
                                        {grade.icon}
                                    </div>
                                    <h1 className="text-2xl text-neutral-700 font-bold text-center">
                                        {grade.grade}
                                    </h1>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="block md:hidden">
                    <div className="flex flex-row justify-between items-center pb-6">
                        <h1 className="text-2xl">Shop by Grade</h1>
                        <a className="text-red-900 no-underline" href="/shop">
                            View All
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {grades.slice(0, 4).map((grade, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-between bg-white rounded-lg shadow-md md:col-span-2"
                            >
                                <div className="text-red-900">{grade.icon}</div>
                                <h1 className="text-2xl text-gray-600 font-bold">
                                    {grade.grade}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByGrade;
