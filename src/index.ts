import { z } from "zod";

import {
  defineDAINService,
  ToolConfig,
  ServiceConfig,
  ToolboxConfig,
} from "@dainprotocol/service-sdk";

import labsV2 from "@api/labs-v2";

const getParclPriceFeed: ToolConfig = {
  id: "get-parcl-price-feed",
  name: "Get Parcl Price Feed",
  description: "Fetches the latest Parcl price feed",
  input: z
    .object({
      location: z.string().describe("The location to get the property price per square foot for"),
    })
    .describe("Input parameters for the Parcl price feed request"),
  output: z.any().describe("Parcl price per square foot for the requested location"),
  pricing: { pricePerUse: 0.01, currency: "USD" },
  handler: async ({ location }, agentInfo) => {
    console.log(`Agent ${agentInfo.agentId} requested price feed for ${location}`);
    let parclid: number = 5372594;

    switch (location.toLowerCase()) {
      case "new york city":
        parclid = 5372594;
        break;
      case "los angeles":
        parclid = 5373892;
        break;
      case "chicago":
        parclid = 5387853;
        break;
      case "houston":
        parclid = 5381035;
        break;
      case "philadelphia":
        parclid = 5378051;
        break;
      case "austin":
        parclid = 5380879;
        break;
      case "san francisco":
        parclid = 5374321;
        break;
    }

    let priceData: any;

    labsV2.auth(`${process.env.PARCL_API_KEY}`);

    await labsV2
      .price_feed_v1_price_feed__parcl_id__price_feed_get({ parcl_id: parclid })
      .then(({ data }) => {
        priceData = data;
      })
      .catch((err) => console.error(err));

    const response = priceData.items[0].price_feed;

    return {
      text: `The current price of property per square foot ${location} is ${response}`,
      data: { price: response },
      ui: {
        type: "h2",
        children: "Property Price Feed Test",
      },
    };
  },
};

const getParclRentalPriceFeed: ToolConfig = {
  id: "get-parcl-rental-price-feed",
  name: "Get Parcl Rental Price Feed",
  description: "Fetches the latest Parcl Rental price feed",
  input: z
    .object({
      location: z
        .string()
        .describe("The location to get the property rental price per square foot for"),
    })
    .describe("Input parameters for the Parcl rental price feed request"),
  output: z.any().describe("Parcl rental price per square foot for the requested location"),
  pricing: { pricePerUse: 0.01, currency: "USD" },
  handler: async ({ location }, agentInfo) => {
    console.log(`Agent ${agentInfo.agentId} requested rental price feed for ${location}`);
    let parclid: number = 5372594;

    switch (location.toLowerCase()) {
      case "new york city":
        parclid = 5372594;
        break;
      case "los angeles":
        parclid = 5373892;
        break;
      case "chicago":
        parclid = 5387853;
        break;
      case "houston":
        parclid = 5381035;
        break;
      case "philadelphia":
        parclid = 5378051;
        break;
      case "austin":
        parclid = 5380879;
        break;
      case "san francisco":
        parclid = 5374321;
        break;
    }

    let priceData: any;

    labsV2.auth(`${process.env.PARCL_API_KEY}`);

    await labsV2
      .rental_price_feed_v1_price_feed__parcl_id__rental_price_feed_get({ parcl_id: parclid })
      .then(({ data }) => {
        priceData = data;
      })
      .catch((err) => console.error(err));

    const response = priceData.items[0].rental_price_feed;

    return {
      text: `The current rental price of property per square foot ${location} is ${response}`,
      data: { price: response },
      ui: {
        type: "h2",
        children: "Property Rental Price Feed Test",
      },
    };
  },
};

const getParclVolatilityFeed: ToolConfig = {
  id: "get-parcl-volatility-feed",
  name: "Get Parcl Volatility Feed",
  description: "Fetches the latest Parcl 10-day average volatility rate",
  input: z
    .object({
      location: z
        .string()
        .describe("The location to get the 10-day average property volatility rate for"),
    })
    .describe("Input parameters for the Parcl volatility rate feed request"),
  output: z
    .any()
    .describe("Parcl average volatility rate over the last 10 days for the requested location"),
  pricing: { pricePerUse: 0.01, currency: "USD" },
  handler: async ({ location }, agentInfo) => {
    console.log(`Agent ${agentInfo.agentId} requested volatility rate for ${location}`);
    let parclid: number = 5372594;

    switch (location.toLowerCase()) {
      case "new york city":
        parclid = 5372594;
        break;
      case "los angeles":
        parclid = 5373892;
        break;
      case "chicago":
        parclid = 5387853;
        break;
      case "houston":
        parclid = 5381035;
        break;
      case "philadelphia":
        parclid = 5378051;
        break;
      case "austin":
        parclid = 5380879;
        break;
      case "san francisco":
        parclid = 5374321;
        break;
    }

    let priceData: any;

    labsV2.auth(`${process.env.PARCL_API_KEY}`);

    await labsV2
      .volatility_v1_price_feed__parcl_id__volatility_get({ parcl_id: parclid })
      .then(({ data }) => {
        priceData = data;
      })
      .catch((err) => console.error(err));

    const prices: any[] = [];

    for (let i = 0; i < 10; i++) {
      const response = priceData.items[i].pct_volatility;

      prices.push(response);
    }

    const average = prices.reduce((sum, price) => sum + price, 0) / prices.length;

    return {
      text: `The average volatility rate over the last 10 days for ${location} is ${average}`,
      data: { volatility_average: average },
      ui: {
        type: "h2",
        children: "Property Volatility Rate Feed Test",
      },
    };
  },
};

const getParclSaleInventoryFeed: ToolConfig = {
  id: "get-parcl-sale-inventory-feed",
  name: "Get Parcl Sale Inventory Feed",
  description: "Fetches the latest Parcl sale inventory",
  input: z
    .object({
      location: z.string().describe("The location to get the sale inventory for"),
    })
    .describe("Input parameters for the Parcl sale inventory request"),
  output: z.any().describe("Parcl sale inventory for the requested location"),
  pricing: { pricePerUse: 0.01, currency: "USD" },
  handler: async ({ location }, agentInfo) => {
    console.log(`Agent ${agentInfo.agentId} requested sale inventory for ${location}`);
    let parclid: number = 5372594;

    switch (location.toLowerCase()) {
      case "new york city":
        parclid = 5372594;
        break;
      case "los angeles":
        parclid = 5373892;
        break;
      case "chicago":
        parclid = 5387853;
        break;
      case "houston":
        parclid = 5381035;
        break;
      case "philadelphia":
        parclid = 5378051;
        break;
      case "austin":
        parclid = 5380879;
        break;
      case "san francisco":
        parclid = 5374321;
        break;
    }

    let priceData: any;

    labsV2.auth(`${process.env.PARCL_API_KEY}`);

    await labsV2
      .for_sale_inventory_v1_for_sale_market_metrics__parcl_id__for_sale_inventory_get({
        parcl_id: parclid,
      })
      .then(({ data }) => {
        priceData = data;
      })
      .catch((err) => console.error(err));

    const response = priceData.items[0].for_sale_inventory;

    return {
      text: `The current sale inventory for ${location} is ${response}`,
      data: { sale_inventory: response },
      ui: {
        type: "h2",
        children: "Property Sale Inventory Feed Test",
      },
    };
  },
};

const realestateServiceConfig: ServiceConfig = {
  id: "real-estate-data-service",
  name: "Real Estate Data Service",
  description: "Provides comprehensive real estate data",
  metadata: {
    capabilities: [
      "property-price-per-square-foot",
      "property-rental-price-per-square-foot",
      "property-volatility-rate",
      "property-sale-inventory",
    ],
    languages: ["en"],
  },
  recommendedPrompt:
    "Ask about real estate data, such as property price per square foot, rental price per square foot, and volatility rate",
  recommendedTools: [
    "get-parcl-price-feed",
    "get-parcl-rental-price-feed",
    "get-parcl-volatility-feed",
    "get-parcl-sale-inventory-feed",
  ],
};

const realestateToolboxConfig: ToolboxConfig = {
  id: "real-estate-data-toolbox",
  name: "Real Estate Data Toolbox",
  description: "Collection of real estate data-related tools",
  tools: [
    "get-parcl-price-feed",
    "get-parcl-rental-price-feed",
    "get-parcl-volatility-feed",
    "get-parcl-sale-inventory-feed",
  ],
  metadata: {
    complexity: "Medium",
    applicableFields: ["Real Estate", "Property", "Real Estate Data"],
  },
  recommendedPrompt: "Use these tools for various real estate data-related tasks and analyses",
};

const dainService = defineDAINService({
  metadata: {
    title: "Comprehensive Real Estate Data DAIN Service",
    description:
      "A DAIN service for detailed real estate data, such as property price per square foot, rental price per square foot, and volatility rate",
    version: "1.1.0",
    author: "Your Name",
    tags: ["property", "real estate", "property price", "dain"],
  },
  identity: {
    apiKey: process.env.DAIN_API_KEY,
  },
  services: [realestateServiceConfig],
  tools: [
    getParclPriceFeed,
    getParclRentalPriceFeed,
    getParclVolatilityFeed,
    getParclSaleInventoryFeed,
  ],
  toolboxes: [realestateToolboxConfig],
  contexts: [],
});

dainService.startNode({ port: 2024 }).then(() => {
  console.log("Comprehensive Real Estate Data DAIN Service is running on port 2024");
});
