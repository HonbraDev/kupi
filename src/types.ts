// based off of schema-dts

export interface Discounts {
  "@context": "https://schema.org";
  "@type": "Product";
  name: string;
  brand: string;
  image: string;
  description: string;
  offers: Offers;
}

export interface Offers {
  "@type": "AggregateOffer";
  lowPrice: string;
  highPrice: string;
  priceCurrency: string;
  offerCount: number;
  offers: Offer[];
}

export interface Offer {
  "@type": "Offer";
  offeredBy: string;
  price: string;
  priceCurrency: string;
  priceValidUntil: string;
}
