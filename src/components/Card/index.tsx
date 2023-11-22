import React from "react";
import './styles.css';

const Card: React.FC = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card;