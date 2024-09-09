// User Data
export interface UserData {
    name: string;
    email: string;
    password: string;
}

// All products
export interface Products {
    _id: string;
    category: string,
    description: string;
    title: string;
    image: string;
    price: number;
    flash_sale: string;
    ratings: number;
}

// params
export interface ProductId {
    params: {
        productId: string;
    };
}

// Header
export interface MenuItem {
    label: string;
    href: string;
}

// countdown
export interface FlashSaleCountdownProps {
    endDate: Date;
}

// =========== for static image =============

// import { StaticImageData } from "next/image";

// export interface SaleItem {
//     id: string;
//     title: string;
//     img: StaticImageData;
//     price: string;
// }