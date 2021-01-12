import { useEffect, useState } from 'react';
import { fethProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, serOrderLocation] = useState<OrderLocationData>();

    useEffect(() => {
        fethProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation onChangeLocation={location => serOrderLocation(location)}/>
        </div>
    )
}

export default Orders;
