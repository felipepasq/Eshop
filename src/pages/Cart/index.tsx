import React from "react";
import { Container, Product } from './styles';

const Cart: React.FC = () => {
    return (
        <Container>
            <Product>Produto 1</Product>
            <Product>Produto 2</Product>
        </Container>
    );
}

export default Cart;