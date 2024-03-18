import Prato from "../assets/prato.jpg";

export interface Produto {
    caracter: string;
    image: string;
    unidade: string;
    title: string;
    description: string;
    price: string;
}

export default function getProdutos(): Produto[] {
    const produtos: Produto[] = [
        {
            caracter: 'Empadas',
            image: Prato,
            unidade: '4 unidades',
            title: "Empada 4 queijos",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Empadas',
            image: Prato,
            unidade: '4 unidades',
            title: "Empada de Camarão",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Empadas',
            image: Prato,
            unidade: '4 unidades',
            title: "Empada Frango com palmito",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Empadas',
            image: Prato,
            unidade: '4 unidades',
            title: "Empada de carne",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Empadas',
            image: Prato,
            unidade: '4 unidades',
            title: "Empada de carne",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Empadas',
            image: Prato,
            unidade: '4 unidades',
            title: "Empada de carne",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Sopas',
            image: Prato,
            unidade: '4 unidades',
            title: "Sopa de queijo",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Sopas',
            image: Prato,
            unidade: '4 unidades',
            title: "Sopa de espinafre",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Sopas',
            image: Prato,
            unidade: '4 unidades',
            title: "Sopa de frango",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Sopas',
            image: Prato,
            unidade: '4 unidades',
            title: "Sopa de mandioca",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Sopas',
            image: Prato,
            unidade: '4 unidades',
            title: "Sopa de mandioca",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Sopas',
            image: Prato,
            unidade: '4 unidades',
            title: "Sopa de mandioca",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pastel',
            image: Prato,
            unidade: '4 unidades',
            title: "Pastel de frango",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pastel',
            image: Prato,
            unidade: '4 unidades',
            title: "Pastel de carne",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pastel',
            image: Prato,
            unidade: '4 unidades',
            title: "Pastel presunto e mussarela",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pastel',
            image: Prato,
            unidade: '4 unidades',
            title: "Pastel de vento",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pastel',
            image: Prato,
            unidade: '4 unidades',
            title: "Pastel de vento",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pastel',
            image: Prato,
            unidade: '4 unidades',
            title: "Pastel de vento",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pão de queijo',
            image: Prato,
            unidade: '4 unidades',
            title: "Pão de queijo grande",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pão de queijo',
            image: Prato,
            unidade: '4 unidades',
            title: "Pão de queijo pequeno",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pão de queijo',
            image: Prato,
            unidade: '4 unidades',
            title: "Pão de queijo grande",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pão de queijo',
            image: Prato,
            unidade: '4 unidades',
            title: "Pão de queijo pequeno",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pão de queijo',
            image: Prato,
            unidade: '4 unidades',
            title: "Pão de queijo pequeno",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        {
            caracter: 'Pão de queijo',
            image: Prato,
            unidade: '4 unidades',
            title: "Pão de queijo pequeno",
            description: "Uma explosão de sabores gourmet em cada mordida, perfeita para adragar paladares exigentes em qualquer ocasião.",
            price: "$19.99",
        },
        
    ];

    return produtos;
}
