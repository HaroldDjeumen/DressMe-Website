import React, { useState, useRef } from "react";
import { IoBody } from "react-icons/io5";
import ReactDOM from "react-dom";
import './model.css'; // Importing CSS for styling

const Model = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [isDragging, setIsDragging] = useState(false);

    const circleRef = useRef(null); // Ref for the circle element
    const popupRef = useRef(null); // Ref for the popup element

    const startDrag = (e) => {
        setIsDragging(true);
        circleRef.current.startX = e.clientX - position.x;
        circleRef.current.startY = e.clientY - position.y;
    };

    const onDrag = (e) => {
        if (!isDragging) return;

        const newX = e.clientX - circleRef.current.startX;
        const newY = e.clientY - circleRef.current.startY;

        // Update position directly without triggering re-renders
        if (circleRef.current) {
            circleRef.current.style.left = `${newX}px`;
            circleRef.current.style.top = `${newY}px`;
        }

        if (popupRef.current) {
            popupRef.current.style.top = `${newY}px`;
        }
    };

    const stopDrag = () => {
        if (isDragging && circleRef.current) {
            // Finalize the position in state to keep it consistent
            setPosition({
                x: parseFloat(circleRef.current.style.left),
                y: parseFloat(circleRef.current.style.top),
            });
        }
        setIsDragging(false);
    };

    const getPopupPosition = () => {
        const screenWidth = window.innerWidth;
        const spaceRight = screenWidth - (position.x + 45); // 45 is the width of the circle
        const spaceLeft = position.x;

        const popupWidth = 300;
        const gap = 20; // Space between the circle and popup

        if (spaceRight > popupWidth + gap) {
            return { left: position.x + 90 }; // Position to the right
        } else if (spaceLeft > popupWidth + gap) {
            return { left: position.x - popupWidth - gap }; // Position to the left
        } else {
            return { left: position.x + 90 }; // Default to right if no space on left
        }
    };

    return ReactDOM.createPortal(
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "100vh",
                width: "100vw",
                pointerEvents: "none", // This ensures we don't block other UI elements
            }}
            onMouseMove={onDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag} // Stop dragging when leaving the screen
        >
            {/* Circle */}
            <div
                ref={circleRef}
                onClick={() => setShowPopup(!showPopup)} // Toggle popup on circle click
                onMouseDown={startDrag}
                style={{
                    position: "fixed", // Use absolute positioning
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    backgroundColor: "#465b52",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    userSelect: "none",
                    pointerEvents: "auto", // Ensure the circle is clickable
                }}
            >
                <span className="text-2xl" style={{ color: "white", fontWeight: "bold" }}>
                    <IoBody />
                </span>
            </div>

            {/* Popup */}
            {showPopup && (
                <div
                    ref={popupRef}
                    style={{
                        position: "fixed", // Position the popup relative to the viewport
                        top: `${position.y}px`,
                        transform: "translateY(-50%)",
                        width: "300px",
                        padding: "20px",
                        backgroundColor: "white",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        borderRadius: "10px",
                        textAlign: "center",
                        pointerEvents: "auto", // Allow interaction with the popup
                        ...getPopupPosition(), // Dynamic position based on space
                    }}
                >
                    <h2>Popup Content</h2>
                    <p>This is an example popup. Click the circle to close it.</p>
                </div>
            )}
        </div>,
        document.body // Render outside the normal component hierarchy to avoid layout interference
    );
};

export default Model;
