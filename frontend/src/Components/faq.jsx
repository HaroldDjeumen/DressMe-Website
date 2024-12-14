import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQ() {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const questions = [
        {
            question: "How do I know the condition of the textbooks?",
            answer: "Only high-quality textbooks are bought from sellers, and thus you can rest assured that your textbooks will be of high quality.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We offer multiple secure payment options, including Credit/Debit Cards (Visa, Mastercard), electronic bank transfer (EFT), instant EFT, SnapScan, and mobile payment platforms. All transactions are processed through bank-grade encrypted systems to protect your financial information.",
        },
        {
            question: "How long does delivery take?",
            answer: "Metro Areas: 2-3 business days, Major Cities: 3-5 business days, Rural Areas: 5-7 business days. We offer free shipping on orders over R500 and provide tracking details for every shipment. Students can track their packages in real-time through our online portal.",
        },
        {
            question: "Can I sell my used textbooks?",
            answer: "Our textbook selling process is straightforward. To get started, simply upload your details to our seller database, including your personal information and the textbooks you have for sale. Once a buyer is interested in purchasing your textbooks, we will contact you to verify the textbooks, and you will receive payment within 48 hours of verification.",
        },
        {
            question:
                "What if I receive a book different from the description?",
            answer: "Customer satisfaction is our top priority. If the book doesn't match its listed condition, please follow these steps: Contact us within 48 hours of receiving the book, provide photographic evidence, and receive a full refund or book replacement. We have no complex return procedures and offer a 100% satisfaction guarantee.",
        },
        {
            question: "Do you cover textbooks for all academic disciplines?",
            answer: "Yes! Our inventory spans: Engineering, Medical Sciences, Humanities, Business Studies, Law, Computer Science, Natural Sciences, and Social Sciences. If we don't have a specific book, we'll help you source it or notify you when it becomes available.",
        },
    ];

    const toggleQuestion = (index) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    return (
        <div className="bg-white pb-16 min-h-screen">
            <div className="flex flex-col space-y-2 text-center md:pb-12">
                <h1 className="text-7xl text-center font-bold text-red-900">
                    Frequently Asked Questions
                </h1>
            </div>
            <div className="max-w-4xl mx-auto px-4">
                {questions.map((question, index) => (
                    <div key={index} className="border-b border-gray-200 mb-2">
                        <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full text-left px-4 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-2xl text-red-900">
                                {question.question}
                            </span>
                            <span className="text-red-900">
                                {openQuestionIndex === index ? (
                                    <FaChevronUp size={24} />
                                ) : (
                                    <FaChevronDown size={24} />
                                )}
                            </span>
                        </button>
                        {openQuestionIndex === index && (
                            <div className="px-4 pb-4 text-gray-700">
                                {question.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex flex-col space-y-2 text-center pt-8 md:pb-12">
                <span className="mx-auto h-px w-1/5 bg-gradient-to-r from-red-900/50 to-red-900/10" />
                <h2 className="pt-2 text-center text-neutral-800">
                    Can't find what you need?{" "}
                    <a href="/support" className="text-red-900 font-bold">
                        Contact our support team
                    </a>
                </h2>
            </div>
        </div>
    );
}

export default FAQ;
