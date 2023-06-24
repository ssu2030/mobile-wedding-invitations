import React from "react";

interface IProps {
    message: string;
}

const ToastMessageComponent: React.FC<IProps> = ({ message }: IProps) => {
    return (
        <div
            style={{
                background: "black",
                opacity: 0.8,
                width: "80vw",
                height: "40vh",
                color: "white",
            }}
        >
            {message}
        </div>
    );
};

export default ToastMessageComponent;
