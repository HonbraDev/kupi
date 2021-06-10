import Kupi from ".";

const kupi = new Kupi();

kupi
  .getPrices("pivo-pilsner-urquell")
  .then((discounts) =>
    console.log(
      `Nejnižší cena piva je ${discounts.offers.lowPrice} ${discounts.offers.priceCurrency}.`
    )
  );
