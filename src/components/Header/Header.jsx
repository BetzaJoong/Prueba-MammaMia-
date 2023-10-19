import React from 'react';
import { Container } from 'react-bootstrap';
import './headerStyle.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-bg"></div>
            <Container className="header-content">
                    <div>
                        <h1 className="header-title">¡Pizzería Mamma Mia!</h1>
                        <p className="header-description">¡Tenemos las mejores pizzas que podrás encontrar!</p>
                    </div>
            </Container>
        </header>
    );
}
