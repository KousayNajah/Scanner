import React from 'react';
import { promises as fs } from 'fs';
import ProductList from './ProductList';


export const getServerSideProps = async () => {
    const products = await fs.readFile(process.cwd() + '../../public/fileJson/products.json', 'utf-8');
    const data = JSON.parse(products);

    return {
        props: {
            products: data,
        },
    };
}
const Public: React.FC<PublicProps> = ({ products = []  }) => {
    return (
        <div>
            <ProductList products={products} />
        </div>
    );
}
export default Public;






