import React from 'react';

interface Button {
    name: string;
    onClick?: () => void;
    disable?: boolean;
    buttonType?: "submit" | "button" | "reset" | undefined;
    color?: string;
}

const Button = ({name, onClick, disable, buttonType = "button", color = "bg-main"}: Button) => {
    return (
        <div>
            <button
                type={buttonType}
                disabled={disable}
                onClick={onClick}
                className={`btn-main ${color}`}>{name}
            </button>
        </div>
    );
};

export default Button;