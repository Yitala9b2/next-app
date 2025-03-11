import Products from './Products';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Products',
    description: 'Страница с продуктами'
}



const page = () => {
    return (
        <>
            <p>Продукты</p>
            <Products init/>
        </>
    );
};

export default page;

