type Product=  {
    id: number ;
    title: string;
    description: string;
    price: number;
    image:string;
    quantity:number;
}
type ProductListProps= {
    products: Product[];
}
interface PublicProps {
    products: Product[];
}
type ProductInBasket = {
    product: Product;
    quantites: number
}

type BasketState = {
    order: {
        total: number;
        products: ProductInBasket[];
        globalQuantities: number;
    }
}