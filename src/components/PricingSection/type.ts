export type PriceType = {
    subTitle: string,
    name: 'basic' | 'plus' | 'pro',
    price: string;
    title: string;
    features: string[]
}