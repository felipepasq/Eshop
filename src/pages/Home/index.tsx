import React, { useEffect } from "react";
import { Container, Product } from './styles';
import { Button } from 'react-native';
import { useState } from "react";
import api from "../../services/api";

const Home: React.FC = () => {

    const [data, setData] = useState([]);




    useEffect(() => {
        api.get('').then(response => {
            console.log(response.data);
            console.log('oi');
        })
    }, []);


    return (

        <Container>
            {console.log('alo')}
            <Product>Produto 1</Product>
            <Product>Produto 2</Product>

        </Container>
    );
}

export default Home;