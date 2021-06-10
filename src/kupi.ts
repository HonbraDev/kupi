import { JSDOM } from "jsdom";
import { Discounts } from "./types";
import nodeFetch from "node-fetch";

export default class Kupi {
  // ensuring the lib works both in Node and browsers
  isNode = typeof window === "undefined";
  fetch = this.isNode ? nodeFetch : window.fetch;
  htmlParser = (html: string) =>
    this.isNode
      ? new JSDOM(html).window.document
      : new DOMParser().parseFromString(html, "text/html");

  getPrices = async (itemId: string) => {
    const url = `https://www.kupi.cz/sleva/${encodeURI(itemId)}`;

    const kupiResponse = await this.fetch(url).catch(() => {
      throw `Cannot fetch ${url}.`;
    });

    if (!kupiResponse.ok) throw `Cannot fetch ${url}.`;

    const kupiHTML = await kupiResponse.text().catch(() => {
      throw `Cannot parse text from ${url}.`;
    });

    const discounts = JSON.parse(
      this.htmlParser(kupiHTML).querySelector(
        `script[type="application/ld+json"]`
      )!.innerHTML
    );

    if (discounts["@type"] !== "Product")
      throw `No discounts object in ${url}.`;

    return discounts as Discounts;
  };
}
