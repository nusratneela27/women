
export type Option = {
    label: string;
    value: string;
};

export const priceRangeOptions: Option[] = [
    { label: "$10.00 - $ 50.00", value: "$10.00 - $ 50.00" },
    { label: "$50.00 - $ 100.00", value: "$50.00 - $ 100.00" },
    { label: "$100.00 - $ 150.00", value: "$100.00 - $ 150.00" },
    { label: "$150.00 - $ 200.00", value: "$150.00 - $ 200.00" },
];

export const categoryOptions: Option[] = [
    { label: "Tops", value: "Tops" },
    { label: "Bottoms", value: "Bottoms" },
    { label: "Outerwear", value: "Outerwear" },
    { label: "Casual", value: "Casual" },
    { label: "Gowns", value: "Gowns" },
    { label: "Formal", value: "Formal" },
];

export const ratingOptions: Option[] = [
    { label: "1 Star", value: "1 Star" },
    { label: "2 Star", value: "2 Star" },
    { label: "3 Star", value: "3 Star" },
    { label: "4 Star", value: "4 Star" },
    { label: "5 Star", value: "5 Star" },
];
