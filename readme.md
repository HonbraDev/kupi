# A wrapper for scraping Kupi.cz prices

## Usage

```javascript
import Kupi from "kupi";

const kupi = new Kupi();

kupi
  .getPrices("pivo-pilsner-urquell")
  .then((discounts) =>
    console.log(
      `Nejnižší cena piva je ${discounts.offers.lowPrice} ${discounts.offers.priceCurrency}.`
    )
  );
```

## Example response

```javascript
{
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Máslo Jihočeské Madeta",
  brand: "Madeta",
  image: "https://img.kupi.cz/kupi/thumbs/maslo-jihoceske-madeta-1_170_340.jpg",
  description:
    "Máslo Jihočeské Madeta za akční ceny. Nakupte Máslo Jihočeské Madeta v akci od 39.9 Kč v obchodě BILLA, Lidl, Albert, Tesco, Makro, prohlédněte si hodnocení a recenze Máslo Jihočeské Madeta. Další slevy másel na Kupi.cz",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "39.9",
    highPrice: "40.83",
    priceCurrency: "CZK",
    offerCount: 5,
    offers: [
      {
        "@type": "Offer",
        offeredBy: "Tesco",
        price: "39.9",
        priceCurrency: "CZK",
        priceValidUntil: "2021-06-15",
      },
      {
        "@type": "Offer",
        offeredBy: "Albert",
        price: "39.9",
        priceCurrency: "CZK",
        priceValidUntil: "2021-06-15",
      },
      {
        "@type": "Offer",
        offeredBy: "BILLA",
        price: "39.9",
        priceCurrency: "CZK",
        priceValidUntil: "2021-06-15",
      },
      {
        "@type": "Offer",
        offeredBy: "Lidl",
        price: "39.9",
        priceCurrency: "CZK",
        priceValidUntil: "2021-06-13",
      },
      {
        "@type": "Offer",
        offeredBy: "Makro",
        price: "40.83",
        priceCurrency: "CZK",
        priceValidUntil: "2021-06-22",
      },
    ],
  },
};
```
