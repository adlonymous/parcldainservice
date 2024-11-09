import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core'
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'labs-v2/0.21.0 (api/6.1.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Gets a list of unique identifiers (<parcl_id>) for markets that correspond to specific
   * keywords or parameters defined by the user. The <parcl_id> is key to navigating the
   * Parcl Labs API, serving as the core mechanism for retrieving market-level information.
   *
   * @summary Search Markets
   * @throws FetchError<401, types.SearchMarketsV1SearchMarketsGetResponse401> Invalid Token
   * @throws FetchError<403, types.SearchMarketsV1SearchMarketsGetResponse403> Forbidden
   * @throws FetchError<404, types.SearchMarketsV1SearchMarketsGetResponse404> No search results
   * @throws FetchError<422, types.SearchMarketsV1SearchMarketsGetResponse422> Request Validation Error
   * @throws FetchError<429, types.SearchMarketsV1SearchMarketsGetResponse429> Rate Limit Exceeded
   * @throws FetchError<500, types.SearchMarketsV1SearchMarketsGetResponse500> Database query error
   */
  search_markets_v1_search_markets_get(metadata?: types.SearchMarketsV1SearchMarketsGetMetadataParam): Promise<FetchResponse<200, types.SearchMarketsV1SearchMarketsGetResponse200>> {
    return this.core.fetch('/v1/search/markets', 'get', metadata);
  }

  /**
   * Gets monthly counts of all cash transactions and their percentage share of total sales,
   * based on a specified <parcl_id> .
   *
   * @summary All Cash
   * @throws FetchError<401, types.AllCashV1MarketMetricsParclIdAllCashGetResponse401> Invalid Token
   * @throws FetchError<403, types.AllCashV1MarketMetricsParclIdAllCashGetResponse403> Forbidden
   * @throws FetchError<404, types.AllCashV1MarketMetricsParclIdAllCashGetResponse404> Data not found
   * @throws FetchError<422, types.AllCashV1MarketMetricsParclIdAllCashGetResponse422> Request Validation Error
   * @throws FetchError<500, types.AllCashV1MarketMetricsParclIdAllCashGetResponse500> Database query error
   */
  all_cash_v1_market_metrics__parcl_id__all_cash_get(metadata: types.AllCashV1MarketMetricsParclIdAllCashGetMetadataParam): Promise<FetchResponse<200, types.AllCashV1MarketMetricsParclIdAllCashGetResponse200>> {
    return this.core.fetch('/v1/market_metrics/{parcl_id}/all_cash', 'get', metadata);
  }

  /**
   * Gets monthly counts of all cash transactions and their percentage share of total sales,
   * based on specified parcl_ids. A maximum of 1000 parcl_ids can be requested in a single
   * POST request.
   *
   * @summary All Cash
   * @throws FetchError<401, types.AllCashV1MarketMetricsAllCashPostResponse401> Invalid Token
   * @throws FetchError<403, types.AllCashV1MarketMetricsAllCashPostResponse403> Forbidden
   * @throws FetchError<404, types.AllCashV1MarketMetricsAllCashPostResponse404> Data not found
   * @throws FetchError<422, types.AllCashV1MarketMetricsAllCashPostResponse422> Request Validation Error
   * @throws FetchError<500, types.AllCashV1MarketMetricsAllCashPostResponse500> Database query error
   */
  all_cash_v1_market_metrics_all_cash_post(body: types.AllCashV1MarketMetricsAllCashPostBodyParam, metadata?: types.AllCashV1MarketMetricsAllCashPostMetadataParam): Promise<FetchResponse<200, types.AllCashV1MarketMetricsAllCashPostResponse200>> {
    return this.core.fetch('/v1/market_metrics/all_cash', 'post', body, metadata);
  }

  /**
   * Gets monthly counts of housing events, including sales, new for sale listings, and new
   * rental listings, based on a specified <parcl_id>.
   *
   * @summary Housing Event Counts
   * @throws FetchError<401, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse404> Data not found
   * @throws FetchError<422, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse500> Database query error
   */
  housing_event_counts_v1_market_metrics__parcl_id__housing_event_counts_get(metadata: types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetMetadataParam): Promise<FetchResponse<200, types.HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse200>> {
    return this.core.fetch('/v1/market_metrics/{parcl_id}/housing_event_counts', 'get', metadata);
  }

  /**
   * Gets monthly counts of housing events, including sales, new for sale listings, and new
   * rental listings, based on specified parcl_ids. A maximum of 1000 parcl_ids can be
   * requested in a single POST request.
   *
   * @summary Housing Event Counts
   * @throws FetchError<401, types.HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse404> Data not found
   * @throws FetchError<422, types.HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse500> Database query error
   */
  housing_event_counts_v1_market_metrics_housing_event_counts_post(body: types.HousingEventCountsV1MarketMetricsHousingEventCountsPostBodyParam, metadata?: types.HousingEventCountsV1MarketMetricsHousingEventCountsPostMetadataParam): Promise<FetchResponse<200, types.HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse200>> {
    return this.core.fetch('/v1/market_metrics/housing_event_counts', 'post', body, metadata);
  }

  /**
   * Gets monthly statistics on prices for housing events, including sales, new for sale
   * listings, and new rental listings, based on a specified <parcl_id>.
   *
   * @summary Housing Event Prices
   * @throws FetchError<401, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse404> Data not found
   * @throws FetchError<422, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse500> Database query error
   */
  housing_event_prices_v1_market_metrics__parcl_id__housing_event_prices_get(metadata: types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetMetadataParam): Promise<FetchResponse<200, types.HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse200>> {
    return this.core.fetch('/v1/market_metrics/{parcl_id}/housing_event_prices', 'get', metadata);
  }

  /**
   * Gets monthly statistics on prices for housing events, including sales, new for sale
   * listings, and new rental listings, based on specified parcl_ids. A maximum of 1000
   * parcl_ids can be requested in a single POST request.
   *
   * @summary Housing Event Prices
   * @throws FetchError<401, types.HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse404> Data not found
   * @throws FetchError<422, types.HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse500> Database query error
   */
  housing_event_prices_v1_market_metrics_housing_event_prices_post(body: types.HousingEventPricesV1MarketMetricsHousingEventPricesPostBodyParam, metadata?: types.HousingEventPricesV1MarketMetricsHousingEventPricesPostMetadataParam): Promise<FetchResponse<200, types.HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse200>> {
    return this.core.fetch('/v1/market_metrics/housing_event_prices', 'post', body, metadata);
  }

  /**
   * Gets monthly statistics on the physical attributes of properties involved in housing
   * events, including sales, new for sale listings, and new rental listings, based on a
   * specified <parcl_id>.
   *
   * @summary Housing Event Property Attributes
   * @throws FetchError<401, types.HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse404> Data not found
   * @throws FetchError<422, types.HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse500> Database query error
   */
  housing_event_property_attributes_v1_market_metrics__parcl_id__housing_event_property_attributes_get(metadata: types.HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetMetadataParam): Promise<FetchResponse<200, types.HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse200>> {
    return this.core.fetch('/v1/market_metrics/{parcl_id}/housing_event_property_attributes', 'get', metadata);
  }

  /**
   * Gets monthly statistics on the physical attributes of properties involved in housing
   * events, including sales, new for sale listings, and new rental listings, based on
   * specified parcl_ids. A maximum of 1000 parcl_ids can be requested in a single POST
   * request.
   *
   * @summary Housing Event Property Attributes
   * @throws FetchError<401, types.HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse404> Data not found
   * @throws FetchError<422, types.HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse500> Database query error
   */
  housing_event_property_attributes_v1_market_metrics_housing_event_property_attributes_post(body: types.HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostBodyParam, metadata?: types.HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostMetadataParam): Promise<FetchResponse<200, types.HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse200>> {
    return this.core.fetch('/v1/market_metrics/housing_event_property_attributes', 'post', body, metadata);
  }

  /**
   * Gets housing stock for a specified <parcl_id>. Housing stock represents the total number
   * of properties, broken out by single family homes, townhouses, and condos.
   *
   * @summary Housing Stock
   * @throws FetchError<401, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse404> Data not found
   * @throws FetchError<422, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse500> Database query error
   */
  housing_stock_v1_market_metrics__parcl_id__housing_stock_get(metadata: types.HousingStockV1MarketMetricsParclIdHousingStockGetMetadataParam): Promise<FetchResponse<200, types.HousingStockV1MarketMetricsParclIdHousingStockGetResponse200>> {
    return this.core.fetch('/v1/market_metrics/{parcl_id}/housing_stock', 'get', metadata);
  }

  /**
   * Gets housing stock for specified parcl_ids. Housing stock represents the total number of
   * properties, broken out by single family homes, townhouses, and condos. A maximum of 1000
   * parcl_ids can be requested in a single POST request.
   *
   * @summary Housing Stock
   * @throws FetchError<401, types.HousingStockV1MarketMetricsHousingStockPostResponse401> Invalid Token
   * @throws FetchError<403, types.HousingStockV1MarketMetricsHousingStockPostResponse403> Forbidden
   * @throws FetchError<404, types.HousingStockV1MarketMetricsHousingStockPostResponse404> Data not found
   * @throws FetchError<422, types.HousingStockV1MarketMetricsHousingStockPostResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingStockV1MarketMetricsHousingStockPostResponse500> Database query error
   */
  housing_stock_v1_market_metrics_housing_stock_post(body: types.HousingStockV1MarketMetricsHousingStockPostBodyParam, metadata?: types.HousingStockV1MarketMetricsHousingStockPostMetadataParam): Promise<FetchResponse<200, types.HousingStockV1MarketMetricsHousingStockPostResponse200>> {
    return this.core.fetch('/v1/market_metrics/housing_stock', 'post', body, metadata);
  }

  /**
   * Gets the weekly updated current count of total inventory listed on market for sale,
   * based on a specified <parcl_id>.
   *
   * @summary For Sale Inventory
   * @throws FetchError<401, types.ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse401> Invalid Token
   * @throws FetchError<403, types.ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse403> Forbidden
   * @throws FetchError<404, types.ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse404> Data not found
   * @throws FetchError<422, types.ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse422> Request Validation Error
   * @throws FetchError<500, types.ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse500> Database query error
   */
  for_sale_inventory_v1_for_sale_market_metrics__parcl_id__for_sale_inventory_get(metadata: types.ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetMetadataParam): Promise<FetchResponse<200, types.ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse200>> {
    return this.core.fetch('/v1/for_sale_market_metrics/{parcl_id}/for_sale_inventory', 'get', metadata);
  }

  /**
   * Gets the weekly updated current count of total inventory listed on market for sale,
   * based on specified parcl_ids. A maximum of 1000 parcl_ids can be requested in a single
   * POST request.
   *
   * @summary For Sale Inventory
   * @throws FetchError<401, types.ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse401> Invalid Token
   * @throws FetchError<403, types.ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse403> Forbidden
   * @throws FetchError<404, types.ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse404> Data not found
   * @throws FetchError<422, types.ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse422> Request Validation Error
   * @throws FetchError<500, types.ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse500> Database query error
   */
  for_sale_inventory_v1_for_sale_market_metrics_for_sale_inventory_post(body: types.ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostBodyParam, metadata?: types.ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostMetadataParam): Promise<FetchResponse<200, types.ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse200>> {
    return this.core.fetch('/v1/for_sale_market_metrics/for_sale_inventory', 'post', body, metadata);
  }

  /**
   * Gets weekly updated metrics on the price behavior of current for sale inventory, based
   * on a specified <parcl_id>. Available metrics include the count of price changes, count
   * of price drops, median days between price changes, median price change, and the
   * percentage of inventory with price changes.
   *
   * @summary For Sale Inventory Price Changes
   * @throws FetchError<401, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse401> Invalid Token
   * @throws FetchError<403, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse403> Forbidden
   * @throws FetchError<404, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse404> Data not found
   * @throws FetchError<422, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse422> Request Validation Error
   * @throws FetchError<500, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse500> Database query error
   */
  for_sale_inventory_price_changes_v1_for_sale_market_metrics__parcl_id__for_sale_inventory_price_changes_get(metadata: types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetMetadataParam): Promise<FetchResponse<200, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse200>> {
    return this.core.fetch('/v1/for_sale_market_metrics/{parcl_id}/for_sale_inventory_price_changes', 'get', metadata);
  }

  /**
   * Gets weekly updated metrics on the price behavior of current for sale inventory, based
   * on specified parcl_ids. Available metrics include the count of price changes, count of
   * price drops, median days between price changes, median price change, and the percentage
   * of inventory with price changes. A maximum of 1000 parcl_ids can be requested in a
   * single POST request.
   *
   * @summary For Sale Inventory Price Changes
   * @throws FetchError<401, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse401> Invalid Token
   * @throws FetchError<403, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse403> Forbidden
   * @throws FetchError<404, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse404> Data not found
   * @throws FetchError<422, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse422> Request Validation Error
   * @throws FetchError<500, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse500> Database query error
   */
  for_sale_inventory_price_changes_v1_for_sale_market_metrics_for_sale_inventory_price_changes_post(body: types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostBodyParam, metadata?: types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostMetadataParam): Promise<FetchResponse<200, types.ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse200>> {
    return this.core.fetch('/v1/for_sale_market_metrics/for_sale_inventory_price_changes', 'post', body, metadata);
  }

  /**
   * Gets weekly updated rolling counts of newly listed for sale properties, segmented into
   * 7, 30, 60, and 90 day periods ending on a specified date, based on a specified
   * <parcl_id>.
   *
   * @summary New Listings Rolling Counts
   * @throws FetchError<401, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse404> Data not found
   * @throws FetchError<422, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse500> Database query error
   */
  new_listings_rolling_counts_v1_for_sale_market_metrics__parcl_id__new_listings_rolling_counts_get(metadata: types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetMetadataParam): Promise<FetchResponse<200, types.NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse200>> {
    return this.core.fetch('/v1/for_sale_market_metrics/{parcl_id}/new_listings_rolling_counts', 'get', metadata);
  }

  /**
   * Gets weekly updated rolling counts of newly listed for sale properties, segmented into
   * 7, 30, 60, and 90 day periods ending on a specified date, based on specified parcl_ids.
   * A maximum of 1000 parcl_ids can be requested in a single POST request.
   *
   * @summary New Listings Rolling Counts
   * @throws FetchError<401, types.NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse401> Invalid Token
   * @throws FetchError<403, types.NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse403> Forbidden
   * @throws FetchError<404, types.NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse404> Data not found
   * @throws FetchError<422, types.NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse422> Request Validation Error
   * @throws FetchError<500, types.NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse500> Database query error
   */
  new_listings_rolling_counts_v1_for_sale_market_metrics_new_listings_rolling_counts_post(body: types.NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostBodyParam, metadata?: types.NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostMetadataParam): Promise<FetchResponse<200, types.NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse200>> {
    return this.core.fetch('/v1/for_sale_market_metrics/new_listings_rolling_counts', 'post', body, metadata);
  }

  /**
   * Gets the percent gross yield for a specified <parcl_id>. At the market level, identified
   * by <parcl_id>, gross yield is calculated by dividing the annual median rental
   * income—derived from multiplying the monthly median new rental listing price by 12—by its
   * median new listings for sale price.
   *
   * @summary Gross Yield
   * @throws FetchError<401, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse401> Invalid Token
   * @throws FetchError<403, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse403> Forbidden
   * @throws FetchError<404, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse404> Data not found
   * @throws FetchError<422, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse422> Request Validation Error
   * @throws FetchError<500, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse500> Database query error
   */
  gross_yield_v1_rental_market_metrics__parcl_id__gross_yield_get(metadata: types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetMetadataParam): Promise<FetchResponse<200, types.GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse200>> {
    return this.core.fetch('/v1/rental_market_metrics/{parcl_id}/gross_yield', 'get', metadata);
  }

  /**
   * Gets the percent gross yield for specified parcl_ids. At the market level, identified by
   * parcl_ids, gross yield is calculated by dividing the annual median rental income—derived
   * from multiplying the monthly median new rental listing price by 12—by its median new
   * listings for sale price. A maximum of 1000 parcl_ids can be requested in a single POST
   * request.
   *
   * @summary Gross Yield
   * @throws FetchError<401, types.GrossYieldV1RentalMarketMetricsGrossYieldPostResponse401> Invalid Token
   * @throws FetchError<403, types.GrossYieldV1RentalMarketMetricsGrossYieldPostResponse403> Forbidden
   * @throws FetchError<404, types.GrossYieldV1RentalMarketMetricsGrossYieldPostResponse404> Data not found
   * @throws FetchError<422, types.GrossYieldV1RentalMarketMetricsGrossYieldPostResponse422> Request Validation Error
   * @throws FetchError<500, types.GrossYieldV1RentalMarketMetricsGrossYieldPostResponse500> Database query error
   */
  gross_yield_v1_rental_market_metrics_gross_yield_post(body: types.GrossYieldV1RentalMarketMetricsGrossYieldPostBodyParam, metadata?: types.GrossYieldV1RentalMarketMetricsGrossYieldPostMetadataParam): Promise<FetchResponse<200, types.GrossYieldV1RentalMarketMetricsGrossYieldPostResponse200>> {
    return this.core.fetch('/v1/rental_market_metrics/gross_yield', 'post', body, metadata);
  }

  /**
   * Gets weekly updated rolling counts of newly listed for rent properties, segmented into
   * 7, 30, 60, and 90 day periods ending on a specified date, based on a given <parcl_id>.
   *
   * @summary New Listings For Rent Rolling Counts
   * @throws FetchError<401, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse404> Data not found
   * @throws FetchError<422, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse500> Database query error
   */
  new_listings_for_rent_rolling_counts_v1_rental_market_metrics__parcl_id__new_listings_for_rent_rolling_counts_get(metadata: types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetMetadataParam): Promise<FetchResponse<200, types.NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse200>> {
    return this.core.fetch('/v1/rental_market_metrics/{parcl_id}/new_listings_for_rent_rolling_counts', 'get', metadata);
  }

  /**
   * Gets weekly updated rolling counts of newly listed for rent properties, segmented into
   * 7, 30, 60, and 90 day periods ending on a specified date, based on specified parcl_ids.
   * A maximum of 1000 parcl_ids can be requested in a single POST request.
   *
   * @summary New Listings For Rent Rolling Counts
   * @throws FetchError<401, types.NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse401> Invalid Token
   * @throws FetchError<403, types.NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse403> Forbidden
   * @throws FetchError<404, types.NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse404> Data not found
   * @throws FetchError<422, types.NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse422> Request Validation Error
   * @throws FetchError<500, types.NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse500> Database query error
   */
  new_listings_for_rent_rolling_counts_v1_rental_market_metrics_new_listings_for_rent_rolling_counts_post(body: types.NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostBodyParam, metadata?: types.NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostMetadataParam): Promise<FetchResponse<200, types.NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse200>> {
    return this.core.fetch('/v1/rental_market_metrics/new_listings_for_rent_rolling_counts', 'post', body, metadata);
  }

  /**
   * Gets the number of rental units, total units, and percent rental unit concentration for
   * a specified <parcl_id>.
   *
   * @summary Rental Units Concentration
   * @throws FetchError<401, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse401> Invalid Token
   * @throws FetchError<403, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse403> Forbidden
   * @throws FetchError<404, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse404> Data not found
   * @throws FetchError<422, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse422> Request Validation Error
   * @throws FetchError<500, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse500> Database query error
   */
  rental_units_concentration_v1_rental_market_metrics__parcl_id__rental_units_concentration_get(metadata: types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetMetadataParam): Promise<FetchResponse<200, types.RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse200>> {
    return this.core.fetch('/v1/rental_market_metrics/{parcl_id}/rental_units_concentration', 'get', metadata);
  }

  /**
   * Gets the number of rental units, total units, and percent rental unit concentration for
   * a specified parcl_ids. A maximum of 1000 parcl_ids can be requested in a single POST
   * request.
   *
   * @summary Rental Units Concentration
   * @throws FetchError<401, types.RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse401> Invalid Token
   * @throws FetchError<403, types.RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse403> Forbidden
   * @throws FetchError<404, types.RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse404> Data not found
   * @throws FetchError<422, types.RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse422> Request Validation Error
   * @throws FetchError<500, types.RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse500> Database query error
   */
  rental_units_concentration_v1_rental_market_metrics_rental_units_concentration_post(body: types.RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostBodyParam, metadata?: types.RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostMetadataParam): Promise<FetchResponse<200, types.RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse200>> {
    return this.core.fetch('/v1/rental_market_metrics/rental_units_concentration', 'post', body, metadata);
  }

  /**
   * Gets monthly counts of investor housing events, including acquisitions, dispositions,
   * new for sale listings, and new rental listings, based on a specified <parcl_id>.
   *
   * @summary Housing Event Counts
   * @throws FetchError<401, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse404> Data not found
   * @throws FetchError<422, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse500> Database query error
   */
  housing_event_counts_v1_investor_metrics__parcl_id__housing_event_counts_get(metadata: types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetMetadataParam): Promise<FetchResponse<200, types.HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse200>> {
    return this.core.fetch('/v1/investor_metrics/{parcl_id}/housing_event_counts', 'get', metadata);
  }

  /**
   * Gets monthly counts of investor housing events, including acquisitions, dispositions,
   * new for sale listings, and new rental listings, based on a specified parcl_ids. A
   * maximum of 1000 parcl_ids can be requested in a single POST request.
   *
   * @summary Housing Event Counts
   * @throws FetchError<401, types.HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse404> Data not found
   * @throws FetchError<422, types.HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse500> Database query error
   */
  housing_event_counts_v1_investor_metrics_housing_event_counts_post(body: types.HousingEventCountsV1InvestorMetricsHousingEventCountsPostBodyParam, metadata?: types.HousingEventCountsV1InvestorMetricsHousingEventCountsPostMetadataParam): Promise<FetchResponse<200, types.HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse200>> {
    return this.core.fetch('/v1/investor_metrics/housing_event_counts', 'post', body, metadata);
  }

  /**
   * Gets monthly median prices for investor housing events, including acquisitions,
   * dispositions, new for sale listings, and new rental listings, based on a specified
   * <parcl_id>.
   *
   * @summary Housing Event Prices
   * @throws FetchError<401, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse404> Data not found
   * @throws FetchError<422, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse500> Database query error
   */
  housing_event_prices_v1_investor_metrics__parcl_id__housing_event_prices_get(metadata: types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetMetadataParam): Promise<FetchResponse<200, types.HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse200>> {
    return this.core.fetch('/v1/investor_metrics/{parcl_id}/housing_event_prices', 'get', metadata);
  }

  /**
   * Gets monthly median prices for investor housing events, including acquisitions,
   * dispositions, new for sale listings, and new rental listings, based on specified
   * parcl_ids. A maximum of 1000 parcl_ids can be requested in a single POST request.
   *
   * @summary Housing Event Prices
   * @throws FetchError<401, types.HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse401> Invalid Token
   * @throws FetchError<403, types.HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse403> Forbidden
   * @throws FetchError<404, types.HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse404> Data not found
   * @throws FetchError<422, types.HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse500> Database query error
   */
  housing_event_prices_v1_investor_metrics_housing_event_prices_post(body: types.HousingEventPricesV1InvestorMetricsHousingEventPricesPostBodyParam, metadata?: types.HousingEventPricesV1InvestorMetricsHousingEventPricesPostMetadataParam): Promise<FetchResponse<200, types.HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse200>> {
    return this.core.fetch('/v1/investor_metrics/housing_event_prices', 'post', body, metadata);
  }

  /**
   * Gets counts of investor-owned properties and their corresponding percentage ownership
   * share of the total housing stock, for a specified <parcl_id>.
   *
   * @summary Housing Stock Ownership
   * @throws FetchError<401, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse401> Invalid Token
   * @throws FetchError<403, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse403> Forbidden
   * @throws FetchError<404, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse404> Data not found
   * @throws FetchError<422, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse500> Database query error
   */
  housing_stock_ownership_v1_investor_metrics__parcl_id__housing_stock_ownership_get(metadata: types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetMetadataParam): Promise<FetchResponse<200, types.HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse200>> {
    return this.core.fetch('/v1/investor_metrics/{parcl_id}/housing_stock_ownership', 'get', metadata);
  }

  /**
   * Gets counts of investor-owned properties and their corresponding percentage ownership
   * share of the total housing stock, for specified parcl_ids. A maximum of 1000 parcl_ids
   * can be requested in a single POST request.
   *
   * @summary Housing Stock Ownership
   * @throws FetchError<401, types.HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse401> Invalid Token
   * @throws FetchError<403, types.HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse403> Forbidden
   * @throws FetchError<404, types.HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse404> Data not found
   * @throws FetchError<422, types.HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse422> Request Validation Error
   * @throws FetchError<500, types.HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse500> Database query error
   */
  housing_stock_ownership_v1_investor_metrics_housing_stock_ownership_post(body: types.HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostBodyParam, metadata?: types.HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostMetadataParam): Promise<FetchResponse<200, types.HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse200>> {
    return this.core.fetch('/v1/investor_metrics/housing_stock_ownership', 'post', body, metadata);
  }

  /**
   * Gets weekly updated rolling counts of investor-owned properties newly listed for sale,
   * and their corresponding percentage share of the total for sale listings market. These
   * metrics are segmented into 7, 30, 60, and 90 day periods ending on a specified date,
   * based on a given <parcl_id>
   *
   * @summary New Listings For Sale Rolling Counts
   * @throws FetchError<401, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse404> Data not found
   * @throws FetchError<422, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse500> Database query error
   */
  new_listings_for_sale_rolling_counts_v1_investor_metrics__parcl_id__new_listings_for_sale_rolling_counts_get(metadata: types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetMetadataParam): Promise<FetchResponse<200, types.NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse200>> {
    return this.core.fetch('/v1/investor_metrics/{parcl_id}/new_listings_for_sale_rolling_counts', 'get', metadata);
  }

  /**
   * Gets weekly updated rolling counts of investor-owned properties newly listed for sale,
   * and their corresponding percentage share of the total for sale listings market. These
   * metrics are segmented into 7, 30, 60, and 90 day periods ending on a specified date,
   * based on specified parcl_ids. A maximum of 1000 parcl_ids can be requested in a single
   * POST request.
   *
   * @summary New Listings For Sale Rolling Counts
   * @throws FetchError<401, types.NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse401> Invalid Token
   * @throws FetchError<403, types.NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse403> Forbidden
   * @throws FetchError<404, types.NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse404> Data not found
   * @throws FetchError<422, types.NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse422> Request Validation Error
   * @throws FetchError<500, types.NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse500> Database query error
   */
  new_listings_for_sale_rolling_counts_v1_investor_metrics_new_listings_for_sale_rolling_counts_post(body: types.NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostBodyParam, metadata?: types.NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostMetadataParam): Promise<FetchResponse<200, types.NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse200>> {
    return this.core.fetch('/v1/investor_metrics/new_listings_for_sale_rolling_counts', 'post', body, metadata);
  }

  /**
   * Gets the monthly investor purchase to sale ratio for a specified <parcl_id>.
   *
   * @summary Purchase To Sale Ratio
   * @throws FetchError<401, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse401> Invalid Token
   * @throws FetchError<403, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse403> Forbidden
   * @throws FetchError<404, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse404> Data not found
   * @throws FetchError<422, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse422> Request Validation Error
   * @throws FetchError<500, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse500> Database query error
   */
  purchase_to_sale_ratio_v1_investor_metrics__parcl_id__purchase_to_sale_ratio_get(metadata: types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetMetadataParam): Promise<FetchResponse<200, types.PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse200>> {
    return this.core.fetch('/v1/investor_metrics/{parcl_id}/purchase_to_sale_ratio', 'get', metadata);
  }

  /**
   * Gets the monthly investor purchase to sale ratio for specified parcl_ids. A maximum of
   * 1000 parcl_ids can be requested in a single POST request.
   *
   * @summary Purchase To Sale Ratio
   * @throws FetchError<401, types.PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse401> Invalid Token
   * @throws FetchError<403, types.PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse403> Forbidden
   * @throws FetchError<404, types.PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse404> Data not found
   * @throws FetchError<422, types.PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse422> Request Validation Error
   * @throws FetchError<500, types.PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse500> Database query error
   */
  purchase_to_sale_ratio_v1_investor_metrics_purchase_to_sale_ratio_post(body: types.PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostBodyParam, metadata?: types.PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostMetadataParam): Promise<FetchResponse<200, types.PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse200>> {
    return this.core.fetch('/v1/investor_metrics/purchase_to_sale_ratio', 'post', body, metadata);
  }

  /**
   * Gets monthly counts of investor-owned single family property housing events, segmented
   * by portfolio size, for a specified <parcl_id>. Housing events include acquisitions,
   * dispositions, new for sale listings, and new rental listings.
   *
   * @summary Sf Housing Event Counts
   * @throws FetchError<401, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse404> Data not found
   * @throws FetchError<422, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse500> Database query error
   */
  sf_housing_event_counts_v1_portfolio_metrics__parcl_id__sf_housing_event_counts_get(metadata: types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetMetadataParam): Promise<FetchResponse<200, types.SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/{parcl_id}/sf_housing_event_counts', 'get', metadata);
  }

  /**
   * Gets monthly counts of investor-owned single family property housing events, segmented
   * by portfolio size, for specified parcl_ids. Housing events include acquisitions,
   * dispositions, new for sale listings, and new rental listings. A maximum of 1000
   * parcl_ids can be requested in a single POST request.
   *
   * @summary Sf Housing Event Counts
   * @throws FetchError<401, types.SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse401> Invalid Token
   * @throws FetchError<403, types.SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse403> Forbidden
   * @throws FetchError<404, types.SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse404> Data not found
   * @throws FetchError<422, types.SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse422> Request Validation Error
   * @throws FetchError<500, types.SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse500> Database query error
   */
  sf_housing_event_counts_v1_portfolio_metrics_sf_housing_event_counts_post(body: types.SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostBodyParam, metadata?: types.SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostMetadataParam): Promise<FetchResponse<200, types.SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/sf_housing_event_counts', 'post', body, metadata);
  }

  /**
   * Gets counts of investor-owned single family properties and their corresponding
   * percentage of the total single family housing stock, segmented by portfolio size, for a
   * specified <parcl_id>.
   *
   * @summary Sf Housing Stock Ownership
   * @throws FetchError<401, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse401> Invalid Token
   * @throws FetchError<403, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse403> Forbidden
   * @throws FetchError<404, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse404> Data not found
   * @throws FetchError<422, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse422> Request Validation Error
   * @throws FetchError<500, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse500> Database query error
   */
  sf_housing_stock_ownership_v1_portfolio_metrics__parcl_id__sf_housing_stock_ownership_get(metadata: types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetMetadataParam): Promise<FetchResponse<200, types.SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/{parcl_id}/sf_housing_stock_ownership', 'get', metadata);
  }

  /**
   * Gets counts of investor-owned single family properties and their corresponding
   * percentage of the total single family housing stock, segmented by portfolio size, for
   * specified parcl_ids. A maximum of 1000 parcl_ids can be requested in a single POST
   * request.
   *
   * @summary Sf Housing Stock Ownership
   * @throws FetchError<401, types.SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse401> Invalid Token
   * @throws FetchError<403, types.SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse403> Forbidden
   * @throws FetchError<404, types.SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse404> Data not found
   * @throws FetchError<422, types.SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse422> Request Validation Error
   * @throws FetchError<500, types.SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse500> Database query error
   */
  sf_housing_stock_ownership_v1_portfolio_metrics_sf_housing_stock_ownership_post(body: types.SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostBodyParam, metadata?: types.SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostMetadataParam): Promise<FetchResponse<200, types.SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/sf_housing_stock_ownership', 'post', body, metadata);
  }

  /**
   * Gets weekly updated rolling counts of investor-owned single family properties newly
   * listed for rent, segmented by portfolio size, and their corresponding percentage share
   * of the total single family for rent listings market. These metrics are divided into 7,
   * 30, 60, and 90 day periods ending on a specified date, based on a given <parcl_id>.
   *
   * @summary Sf New Listings For Rent Rolling Counts
   * @throws FetchError<401, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse404> Data not found
   * @throws FetchError<422, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse500> Database query error
   */
  sf_new_listings_for_rent_rolling_counts_v1_portfolio_metrics__parcl_id__sf_new_listings_for_rent_rolling_counts_get(metadata: types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetMetadataParam): Promise<FetchResponse<200, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/{parcl_id}/sf_new_listings_for_rent_rolling_counts', 'get', metadata);
  }

  /**
   * Gets weekly updated rolling counts of investor-owned single family properties newly
   * listed for rent, segmented by portfolio size, and their corresponding percentage share
   * of the total single family for rent listings market. These metrics are divided into 7,
   * 30, 60, and 90 day periods ending on a specified date, based on given parcl_ids. A
   * maximum of 1000 parcl_ids can be requested in a single POST request.
   *
   * @summary Sf New Listings For Rent Rolling Counts
   * @throws FetchError<401, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse401> Invalid Token
   * @throws FetchError<403, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse403> Forbidden
   * @throws FetchError<404, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse404> Data not found
   * @throws FetchError<422, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse422> Request Validation Error
   * @throws FetchError<500, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse500> Database query error
   */
  sf_new_listings_for_rent_rolling_counts_v1_portfolio_metrics_sf_new_listings_for_rent_rolling_counts_post(body: types.SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostBodyParam, metadata?: types.SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostMetadataParam): Promise<FetchResponse<200, types.SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/sf_new_listings_for_rent_rolling_counts', 'post', body, metadata);
  }

  /**
   * Gets counts of investor-owned single family properties and their corresponding
   * percentage of the total single family housing stock, segmented by portfolio size, for a
   * specified <parcl_id>.
   *
   * @summary Sf New Listings For Sale Rolling Counts
   * @throws FetchError<401, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse404> Data not found
   * @throws FetchError<422, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse500> Database query error
   */
  sf_new_listings_for_sale_rolling_counts_v1_portfolio_metrics__parcl_id__sf_new_listings_for_sale_rolling_counts_get(metadata: types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetMetadataParam): Promise<FetchResponse<200, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/{parcl_id}/sf_new_listings_for_sale_rolling_counts', 'get', metadata);
  }

  /**
   * Gets counts of investor-owned single family properties and their corresponding
   * percentage of the total single family housing stock, segmented by portfolio size, for
   * specified parcl_ids. A maximum of 1000 parcl_ids can be requested in a single POST
   * request.
   *
   * @summary Sf New Listings For Sale Rolling Counts
   * @throws FetchError<401, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse401> Invalid Token
   * @throws FetchError<403, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse403> Forbidden
   * @throws FetchError<404, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse404> Data not found
   * @throws FetchError<422, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse422> Request Validation Error
   * @throws FetchError<500, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse500> Database query error
   */
  sf_new_listings_for_sale_rolling_counts_v1_portfolio_metrics_sf_new_listings_for_sale_rolling_counts_post(body: types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostBodyParam, metadata?: types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostMetadataParam): Promise<FetchResponse<200, types.SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse200>> {
    return this.core.fetch('/v1/portfolio_metrics/sf_new_listings_for_sale_rolling_counts', 'post', body, metadata);
  }

  /**
   * Gets monthly median prices for new construction housing events, including sales, new for
   * sale listings, and new rental listings, based on a specified <parcl_id>.
   *
   * @summary New Construction Housing Event Prices
   * @throws FetchError<401, types.NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse401> Invalid Token
   * @throws FetchError<403, types.NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse403> Forbidden
   * @throws FetchError<404, types.NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse404> Data not found
   * @throws FetchError<422, types.NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse422> Request Validation Error
   * @throws FetchError<500, types.NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse500> Database query error
   */
  new_construction_housing_event_prices_v1_new_construction_metrics__parcl_id__housing_event_prices_get(metadata: types.NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetMetadataParam): Promise<FetchResponse<200, types.NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse200>> {
    return this.core.fetch('/v1/new_construction_metrics/{parcl_id}/housing_event_prices', 'get', metadata);
  }

  /**
   * Gets monthly median prices for new construction housing events, including sales, new for
   * sale listings, and new rental listings, based on specified parcl_ids. A maximum of 1000
   * parcl_ids can be requested in a single POST request.
   *
   * @summary New Construction Housing Event Prices
   * @throws FetchError<401, types.NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse401> Invalid Token
   * @throws FetchError<403, types.NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse403> Forbidden
   * @throws FetchError<404, types.NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse404> Data not found
   * @throws FetchError<422, types.NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse422> Request Validation Error
   * @throws FetchError<500, types.NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse500> Database query error
   */
  new_construction_housing_event_prices_v1_new_construction_metrics_housing_event_prices_post(body: types.NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostBodyParam, metadata?: types.NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostMetadataParam): Promise<FetchResponse<200, types.NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse200>> {
    return this.core.fetch('/v1/new_construction_metrics/housing_event_prices', 'post', body, metadata);
  }

  /**
   * Gets monthly counts of new construction housing events, including sales, new for sale
   * listings, and new rental listings, based on a specified <parcl_id>.
   *
   * @summary New Construction Housing Event Counts
   * @throws FetchError<401, types.NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse401> Invalid Token
   * @throws FetchError<403, types.NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse403> Forbidden
   * @throws FetchError<404, types.NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse404> Data not found
   * @throws FetchError<422, types.NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse422> Request Validation Error
   * @throws FetchError<500, types.NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse500> Database query error
   */
  new_construction_housing_event_counts_v1_new_construction_metrics__parcl_id__housing_event_counts_get(metadata: types.NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetMetadataParam): Promise<FetchResponse<200, types.NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse200>> {
    return this.core.fetch('/v1/new_construction_metrics/{parcl_id}/housing_event_counts', 'get', metadata);
  }

  /**
   * Gets monthly counts of new construction housing events, including sales, new for sale
   * listings, and new rental listings, based on specified parcl_ids. A maximum of 1000
   * parcl_ids can be requested in a single POST request.
   *
   * @summary New Construction Housing Event Counts
   * @throws FetchError<401, types.NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse401> Invalid Token
   * @throws FetchError<403, types.NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse403> Forbidden
   * @throws FetchError<404, types.NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse404> Data not found
   * @throws FetchError<422, types.NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse422> Request Validation Error
   * @throws FetchError<500, types.NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse500> Database query error
   */
  new_construction_housing_event_counts_v1_new_construction_metrics_housing_event_counts_post(body: types.NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostBodyParam, metadata?: types.NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostMetadataParam): Promise<FetchResponse<200, types.NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse200>> {
    return this.core.fetch('/v1/new_construction_metrics/housing_event_counts', 'post', body, metadata);
  }

  /**
   * Gets the daily updated Parcl Labs Price Feed for a given <parcl_id>.
   *
   * @summary Price Feed
   * @throws FetchError<401, types.PriceFeedV1PriceFeedParclIdPriceFeedGetResponse401> Invalid Token
   * @throws FetchError<403, types.PriceFeedV1PriceFeedParclIdPriceFeedGetResponse403> Forbidden
   * @throws FetchError<404, types.PriceFeedV1PriceFeedParclIdPriceFeedGetResponse404> Data not found
   * @throws FetchError<422, types.PriceFeedV1PriceFeedParclIdPriceFeedGetResponse422> Request Validation Error
   * @throws FetchError<500, types.PriceFeedV1PriceFeedParclIdPriceFeedGetResponse500> Database query error
   */
  price_feed_v1_price_feed__parcl_id__price_feed_get(metadata: types.PriceFeedV1PriceFeedParclIdPriceFeedGetMetadataParam): Promise<FetchResponse<200, types.PriceFeedV1PriceFeedParclIdPriceFeedGetResponse200>> {
    return this.core.fetch('/v1/price_feed/{parcl_id}/price_feed', 'get', metadata);
  }

  /**
   * Gets the daily updated Parcl Labs Price Feed for specified parcl_ids. A maximum of 1000
   * parcl_ids can be requested in a single POST request.
   *
   * @summary Price Feed
   * @throws FetchError<401, types.PriceFeedV1PriceFeedPriceFeedPostResponse401> Invalid Token
   * @throws FetchError<403, types.PriceFeedV1PriceFeedPriceFeedPostResponse403> Forbidden
   * @throws FetchError<404, types.PriceFeedV1PriceFeedPriceFeedPostResponse404> Data not found
   * @throws FetchError<422, types.PriceFeedV1PriceFeedPriceFeedPostResponse422> Request Validation Error
   * @throws FetchError<500, types.PriceFeedV1PriceFeedPriceFeedPostResponse500> Database query error
   */
  price_feed_v1_price_feed_price_feed_post(body: types.PriceFeedV1PriceFeedPriceFeedPostBodyParam, metadata?: types.PriceFeedV1PriceFeedPriceFeedPostMetadataParam): Promise<FetchResponse<200, types.PriceFeedV1PriceFeedPriceFeedPostResponse200>> {
    return this.core.fetch('/v1/price_feed/price_feed', 'post', body, metadata);
  }

  /**
   * Gets the daily updated Parcl Labs Rental Price Feed for a given <parcl_id>.
   *
   * @summary Rental Price Feed
   * @throws FetchError<401, types.RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse401> Invalid Token
   * @throws FetchError<403, types.RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse403> Forbidden
   * @throws FetchError<404, types.RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse404> Data not found
   * @throws FetchError<422, types.RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse422> Request Validation Error
   * @throws FetchError<500, types.RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse500> Database query error
   */
  rental_price_feed_v1_price_feed__parcl_id__rental_price_feed_get(metadata: types.RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetMetadataParam): Promise<FetchResponse<200, types.RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse200>> {
    return this.core.fetch('/v1/price_feed/{parcl_id}/rental_price_feed', 'get', metadata);
  }

  /**
   * Gets the daily updated Parcl Labs Rental Price Feed for specified parcl_ids. A maximum
   * of 1000 parcl_ids can be requested in a single POST request.
   *
   * @summary Rental Price Feed
   * @throws FetchError<401, types.RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse401> Invalid Token
   * @throws FetchError<403, types.RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse403> Forbidden
   * @throws FetchError<404, types.RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse404> Data not found
   * @throws FetchError<422, types.RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse422> Request Validation Error
   * @throws FetchError<500, types.RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse500> Database query error
   */
  rental_price_feed_v1_price_feed_rental_price_feed_post(body: types.RentalPriceFeedV1PriceFeedRentalPriceFeedPostBodyParam, metadata?: types.RentalPriceFeedV1PriceFeedRentalPriceFeedPostMetadataParam): Promise<FetchResponse<200, types.RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse200>> {
    return this.core.fetch('/v1/price_feed/rental_price_feed', 'post', body, metadata);
  }

  /**
   * Gets the daily updated Parcl Labs Price Feed volatility, expressed as a percentage, for
   * a specified <parcl_id>.
   *
   * @summary Volatility
   * @throws FetchError<401, types.VolatilityV1PriceFeedParclIdVolatilityGetResponse401> Invalid Token
   * @throws FetchError<403, types.VolatilityV1PriceFeedParclIdVolatilityGetResponse403> Forbidden
   * @throws FetchError<404, types.VolatilityV1PriceFeedParclIdVolatilityGetResponse404> Data not found
   * @throws FetchError<422, types.VolatilityV1PriceFeedParclIdVolatilityGetResponse422> Request Validation Error
   * @throws FetchError<500, types.VolatilityV1PriceFeedParclIdVolatilityGetResponse500> Database query error
   */
  volatility_v1_price_feed__parcl_id__volatility_get(metadata: types.VolatilityV1PriceFeedParclIdVolatilityGetMetadataParam): Promise<FetchResponse<200, types.VolatilityV1PriceFeedParclIdVolatilityGetResponse200>> {
    return this.core.fetch('/v1/price_feed/{parcl_id}/volatility', 'get', metadata);
  }

  /**
   * Gets the daily updated Parcl Labs Price Feed volatility, expressed as a percentage, for
   * specified parcl_ids. A maximum of 1000 parcl_ids can be requested in a single POST
   * request.
   *
   * @summary Volatility
   * @throws FetchError<401, types.VolatilityV1PriceFeedVolatilityPostResponse401> Invalid Token
   * @throws FetchError<403, types.VolatilityV1PriceFeedVolatilityPostResponse403> Forbidden
   * @throws FetchError<404, types.VolatilityV1PriceFeedVolatilityPostResponse404> Data not found
   * @throws FetchError<422, types.VolatilityV1PriceFeedVolatilityPostResponse422> Request Validation Error
   * @throws FetchError<500, types.VolatilityV1PriceFeedVolatilityPostResponse500> Database query error
   */
  volatility_v1_price_feed_volatility_post(body: types.VolatilityV1PriceFeedVolatilityPostBodyParam, metadata?: types.VolatilityV1PriceFeedVolatilityPostMetadataParam): Promise<FetchResponse<200, types.VolatilityV1PriceFeedVolatilityPostResponse200>> {
    return this.core.fetch('/v1/price_feed/volatility', 'post', body, metadata);
  }

  /**
   * Search for a specific address and retrieve the corresponding <parcl_property_id> for the
   * property. The <parcl_property_id> is key for navigating the Parcl Labs API, serving as
   * the core mechanism for retrieving detailed property-level information in other property
   * endpoints.
   *
   * @summary Search Address
   * @throws FetchError<401, types.SearchAddressV1PropertySearchAddressPostResponse401> Invalid Token
   * @throws FetchError<403, types.SearchAddressV1PropertySearchAddressPostResponse403> Forbidden
   * @throws FetchError<404, types.SearchAddressV1PropertySearchAddressPostResponse404> No search results
   * @throws FetchError<422, types.SearchAddressV1PropertySearchAddressPostResponse422> Request Validation Error
   * @throws FetchError<500, types.SearchAddressV1PropertySearchAddressPostResponse500> Database query error
   */
  search_address_v1_property_search_address_post(body: types.SearchAddressV1PropertySearchAddressPostBodyParam): Promise<FetchResponse<200, types.SearchAddressV1PropertySearchAddressPostResponse200>> {
    return this.core.fetch('/v1/property/search_address', 'post', body);
  }

  /**
   * Gets a list of properties based on user-defined search parameters. Each property in the
   * response includes a unique <parcl_property_id>, location detail, physical attributes,
   * and current ownership insights. The <parcl_property_id> is key for navigating the Parcl
   * Labs API, serving as the core mechanism for retrieving detailed property-level
   * information in other property endpoints.
   *
   * @summary Search
   * @throws FetchError<401, types.SearchV1PropertySearchGetResponse401> Invalid Token
   * @throws FetchError<403, types.SearchV1PropertySearchGetResponse403> Forbidden
   * @throws FetchError<404, types.SearchV1PropertySearchGetResponse404> No search results
   * @throws FetchError<422, types.SearchV1PropertySearchGetResponse422> Request Validation Error
   * @throws FetchError<500, types.SearchV1PropertySearchGetResponse500> Database query error
   */
  search_v1_property_search_get(metadata: types.SearchV1PropertySearchGetMetadataParam): Promise<FetchResponse<200, types.SearchV1PropertySearchGetResponse200>> {
    return this.core.fetch('/v1/property/search', 'get', metadata);
  }

  /**
   * Gets unit-level properties and their housing event history, including sales, listings,
   * and rentals. The response includes detailed property information and historical event
   * data for each specified property. A maximum of 10000 parcl_property_ids can be requested
   * in a single POST request.
   *
   * @summary Property Events
   * @throws FetchError<401, types.PropertyEventsV1PropertyEventHistoryPostResponse401> Invalid Token
   * @throws FetchError<403, types.PropertyEventsV1PropertyEventHistoryPostResponse403> Forbidden
   * @throws FetchError<404, types.PropertyEventsV1PropertyEventHistoryPostResponse404> No search results
   * @throws FetchError<422, types.PropertyEventsV1PropertyEventHistoryPostResponse422> Request Validation Error
   * @throws FetchError<500, types.PropertyEventsV1PropertyEventHistoryPostResponse500> Database query error
   */
  property_events_v1_property_event_history_post(body: types.PropertyEventsV1PropertyEventHistoryPostBodyParam): Promise<FetchResponse<200, types.PropertyEventsV1PropertyEventHistoryPostResponse200>> {
    return this.core.fetch('/v1/property/event_history', 'post', body);
  }
}

const createSDK = (() => { return new SDK(); })()
;

export default createSDK;

export type { AllCashV1MarketMetricsAllCashPostBodyParam, AllCashV1MarketMetricsAllCashPostMetadataParam, AllCashV1MarketMetricsAllCashPostResponse200, AllCashV1MarketMetricsAllCashPostResponse401, AllCashV1MarketMetricsAllCashPostResponse403, AllCashV1MarketMetricsAllCashPostResponse404, AllCashV1MarketMetricsAllCashPostResponse422, AllCashV1MarketMetricsAllCashPostResponse500, AllCashV1MarketMetricsParclIdAllCashGetMetadataParam, AllCashV1MarketMetricsParclIdAllCashGetResponse200, AllCashV1MarketMetricsParclIdAllCashGetResponse401, AllCashV1MarketMetricsParclIdAllCashGetResponse403, AllCashV1MarketMetricsParclIdAllCashGetResponse404, AllCashV1MarketMetricsParclIdAllCashGetResponse422, AllCashV1MarketMetricsParclIdAllCashGetResponse500, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostBodyParam, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostMetadataParam, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse200, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse401, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse403, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse404, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse422, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsForSaleInventoryPriceChangesPostResponse500, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetMetadataParam, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse200, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse401, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse403, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse404, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse422, ForSaleInventoryPriceChangesV1ForSaleMarketMetricsParclIdForSaleInventoryPriceChangesGetResponse500, ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostBodyParam, ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostMetadataParam, ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse200, ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse401, ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse403, ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse404, ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse422, ForSaleInventoryV1ForSaleMarketMetricsForSaleInventoryPostResponse500, ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetMetadataParam, ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse200, ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse401, ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse403, ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse404, ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse422, ForSaleInventoryV1ForSaleMarketMetricsParclIdForSaleInventoryGetResponse500, GrossYieldV1RentalMarketMetricsGrossYieldPostBodyParam, GrossYieldV1RentalMarketMetricsGrossYieldPostMetadataParam, GrossYieldV1RentalMarketMetricsGrossYieldPostResponse200, GrossYieldV1RentalMarketMetricsGrossYieldPostResponse401, GrossYieldV1RentalMarketMetricsGrossYieldPostResponse403, GrossYieldV1RentalMarketMetricsGrossYieldPostResponse404, GrossYieldV1RentalMarketMetricsGrossYieldPostResponse422, GrossYieldV1RentalMarketMetricsGrossYieldPostResponse500, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetMetadataParam, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse200, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse401, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse403, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse404, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse422, GrossYieldV1RentalMarketMetricsParclIdGrossYieldGetResponse500, HousingEventCountsV1InvestorMetricsHousingEventCountsPostBodyParam, HousingEventCountsV1InvestorMetricsHousingEventCountsPostMetadataParam, HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse200, HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse401, HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse403, HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse404, HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse422, HousingEventCountsV1InvestorMetricsHousingEventCountsPostResponse500, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetMetadataParam, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse200, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse401, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse403, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse404, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse422, HousingEventCountsV1InvestorMetricsParclIdHousingEventCountsGetResponse500, HousingEventCountsV1MarketMetricsHousingEventCountsPostBodyParam, HousingEventCountsV1MarketMetricsHousingEventCountsPostMetadataParam, HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse200, HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse401, HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse403, HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse404, HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse422, HousingEventCountsV1MarketMetricsHousingEventCountsPostResponse500, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetMetadataParam, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse200, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse401, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse403, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse404, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse422, HousingEventCountsV1MarketMetricsParclIdHousingEventCountsGetResponse500, HousingEventPricesV1InvestorMetricsHousingEventPricesPostBodyParam, HousingEventPricesV1InvestorMetricsHousingEventPricesPostMetadataParam, HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse200, HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse401, HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse403, HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse404, HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse422, HousingEventPricesV1InvestorMetricsHousingEventPricesPostResponse500, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetMetadataParam, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse200, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse401, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse403, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse404, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse422, HousingEventPricesV1InvestorMetricsParclIdHousingEventPricesGetResponse500, HousingEventPricesV1MarketMetricsHousingEventPricesPostBodyParam, HousingEventPricesV1MarketMetricsHousingEventPricesPostMetadataParam, HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse200, HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse401, HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse403, HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse404, HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse422, HousingEventPricesV1MarketMetricsHousingEventPricesPostResponse500, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetMetadataParam, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse200, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse401, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse403, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse404, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse422, HousingEventPricesV1MarketMetricsParclIdHousingEventPricesGetResponse500, HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostBodyParam, HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostMetadataParam, HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse200, HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse401, HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse403, HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse404, HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse422, HousingEventPropertyAttributesV1MarketMetricsHousingEventPropertyAttributesPostResponse500, HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetMetadataParam, HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse200, HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse401, HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse403, HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse404, HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse422, HousingEventPropertyAttributesV1MarketMetricsParclIdHousingEventPropertyAttributesGetResponse500, HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostBodyParam, HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostMetadataParam, HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse200, HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse401, HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse403, HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse404, HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse422, HousingStockOwnershipV1InvestorMetricsHousingStockOwnershipPostResponse500, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetMetadataParam, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse200, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse401, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse403, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse404, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse422, HousingStockOwnershipV1InvestorMetricsParclIdHousingStockOwnershipGetResponse500, HousingStockV1MarketMetricsHousingStockPostBodyParam, HousingStockV1MarketMetricsHousingStockPostMetadataParam, HousingStockV1MarketMetricsHousingStockPostResponse200, HousingStockV1MarketMetricsHousingStockPostResponse401, HousingStockV1MarketMetricsHousingStockPostResponse403, HousingStockV1MarketMetricsHousingStockPostResponse404, HousingStockV1MarketMetricsHousingStockPostResponse422, HousingStockV1MarketMetricsHousingStockPostResponse500, HousingStockV1MarketMetricsParclIdHousingStockGetMetadataParam, HousingStockV1MarketMetricsParclIdHousingStockGetResponse200, HousingStockV1MarketMetricsParclIdHousingStockGetResponse401, HousingStockV1MarketMetricsParclIdHousingStockGetResponse403, HousingStockV1MarketMetricsParclIdHousingStockGetResponse404, HousingStockV1MarketMetricsParclIdHousingStockGetResponse422, HousingStockV1MarketMetricsParclIdHousingStockGetResponse500, NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostBodyParam, NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostMetadataParam, NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse200, NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse401, NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse403, NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse404, NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse422, NewConstructionHousingEventCountsV1NewConstructionMetricsHousingEventCountsPostResponse500, NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetMetadataParam, NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse200, NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse401, NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse403, NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse404, NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse422, NewConstructionHousingEventCountsV1NewConstructionMetricsParclIdHousingEventCountsGetResponse500, NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostBodyParam, NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostMetadataParam, NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse200, NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse401, NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse403, NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse404, NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse422, NewConstructionHousingEventPricesV1NewConstructionMetricsHousingEventPricesPostResponse500, NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetMetadataParam, NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse200, NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse401, NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse403, NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse404, NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse422, NewConstructionHousingEventPricesV1NewConstructionMetricsParclIdHousingEventPricesGetResponse500, NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostBodyParam, NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostMetadataParam, NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse200, NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse401, NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse403, NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse404, NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse422, NewListingsForRentRollingCountsV1RentalMarketMetricsNewListingsForRentRollingCountsPostResponse500, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetMetadataParam, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse200, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse401, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse403, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse404, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse422, NewListingsForRentRollingCountsV1RentalMarketMetricsParclIdNewListingsForRentRollingCountsGetResponse500, NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostBodyParam, NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostMetadataParam, NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse200, NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse401, NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse403, NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse404, NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse422, NewListingsForSaleRollingCountsV1InvestorMetricsNewListingsForSaleRollingCountsPostResponse500, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetMetadataParam, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse200, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse401, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse403, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse404, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse422, NewListingsForSaleRollingCountsV1InvestorMetricsParclIdNewListingsForSaleRollingCountsGetResponse500, NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostBodyParam, NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostMetadataParam, NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse200, NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse401, NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse403, NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse404, NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse422, NewListingsRollingCountsV1ForSaleMarketMetricsNewListingsRollingCountsPostResponse500, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetMetadataParam, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse200, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse401, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse403, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse404, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse422, NewListingsRollingCountsV1ForSaleMarketMetricsParclIdNewListingsRollingCountsGetResponse500, PriceFeedV1PriceFeedParclIdPriceFeedGetMetadataParam, PriceFeedV1PriceFeedParclIdPriceFeedGetResponse200, PriceFeedV1PriceFeedParclIdPriceFeedGetResponse401, PriceFeedV1PriceFeedParclIdPriceFeedGetResponse403, PriceFeedV1PriceFeedParclIdPriceFeedGetResponse404, PriceFeedV1PriceFeedParclIdPriceFeedGetResponse422, PriceFeedV1PriceFeedParclIdPriceFeedGetResponse500, PriceFeedV1PriceFeedPriceFeedPostBodyParam, PriceFeedV1PriceFeedPriceFeedPostMetadataParam, PriceFeedV1PriceFeedPriceFeedPostResponse200, PriceFeedV1PriceFeedPriceFeedPostResponse401, PriceFeedV1PriceFeedPriceFeedPostResponse403, PriceFeedV1PriceFeedPriceFeedPostResponse404, PriceFeedV1PriceFeedPriceFeedPostResponse422, PriceFeedV1PriceFeedPriceFeedPostResponse500, PropertyEventsV1PropertyEventHistoryPostBodyParam, PropertyEventsV1PropertyEventHistoryPostResponse200, PropertyEventsV1PropertyEventHistoryPostResponse401, PropertyEventsV1PropertyEventHistoryPostResponse403, PropertyEventsV1PropertyEventHistoryPostResponse404, PropertyEventsV1PropertyEventHistoryPostResponse422, PropertyEventsV1PropertyEventHistoryPostResponse500, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetMetadataParam, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse200, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse401, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse403, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse404, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse422, PurchaseToSaleRatioV1InvestorMetricsParclIdPurchaseToSaleRatioGetResponse500, PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostBodyParam, PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostMetadataParam, PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse200, PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse401, PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse403, PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse404, PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse422, PurchaseToSaleRatioV1InvestorMetricsPurchaseToSaleRatioPostResponse500, RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetMetadataParam, RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse200, RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse401, RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse403, RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse404, RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse422, RentalPriceFeedV1PriceFeedParclIdRentalPriceFeedGetResponse500, RentalPriceFeedV1PriceFeedRentalPriceFeedPostBodyParam, RentalPriceFeedV1PriceFeedRentalPriceFeedPostMetadataParam, RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse200, RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse401, RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse403, RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse404, RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse422, RentalPriceFeedV1PriceFeedRentalPriceFeedPostResponse500, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetMetadataParam, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse200, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse401, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse403, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse404, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse422, RentalUnitsConcentrationV1RentalMarketMetricsParclIdRentalUnitsConcentrationGetResponse500, RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostBodyParam, RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostMetadataParam, RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse200, RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse401, RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse403, RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse404, RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse422, RentalUnitsConcentrationV1RentalMarketMetricsRentalUnitsConcentrationPostResponse500, SearchAddressV1PropertySearchAddressPostBodyParam, SearchAddressV1PropertySearchAddressPostResponse200, SearchAddressV1PropertySearchAddressPostResponse401, SearchAddressV1PropertySearchAddressPostResponse403, SearchAddressV1PropertySearchAddressPostResponse404, SearchAddressV1PropertySearchAddressPostResponse422, SearchAddressV1PropertySearchAddressPostResponse500, SearchMarketsV1SearchMarketsGetMetadataParam, SearchMarketsV1SearchMarketsGetResponse200, SearchMarketsV1SearchMarketsGetResponse401, SearchMarketsV1SearchMarketsGetResponse403, SearchMarketsV1SearchMarketsGetResponse404, SearchMarketsV1SearchMarketsGetResponse422, SearchMarketsV1SearchMarketsGetResponse429, SearchMarketsV1SearchMarketsGetResponse500, SearchV1PropertySearchGetMetadataParam, SearchV1PropertySearchGetResponse200, SearchV1PropertySearchGetResponse401, SearchV1PropertySearchGetResponse403, SearchV1PropertySearchGetResponse404, SearchV1PropertySearchGetResponse422, SearchV1PropertySearchGetResponse500, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetMetadataParam, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse200, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse401, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse403, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse404, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse422, SfHousingEventCountsV1PortfolioMetricsParclIdSfHousingEventCountsGetResponse500, SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostBodyParam, SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostMetadataParam, SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse200, SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse401, SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse403, SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse404, SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse422, SfHousingEventCountsV1PortfolioMetricsSfHousingEventCountsPostResponse500, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetMetadataParam, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse200, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse401, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse403, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse404, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse422, SfHousingStockOwnershipV1PortfolioMetricsParclIdSfHousingStockOwnershipGetResponse500, SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostBodyParam, SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostMetadataParam, SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse200, SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse401, SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse403, SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse404, SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse422, SfHousingStockOwnershipV1PortfolioMetricsSfHousingStockOwnershipPostResponse500, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetMetadataParam, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse200, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse401, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse403, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse404, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse422, SfNewListingsForRentRollingCountsV1PortfolioMetricsParclIdSfNewListingsForRentRollingCountsGetResponse500, SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostBodyParam, SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostMetadataParam, SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse200, SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse401, SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse403, SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse404, SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse422, SfNewListingsForRentRollingCountsV1PortfolioMetricsSfNewListingsForRentRollingCountsPostResponse500, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetMetadataParam, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse200, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse401, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse403, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse404, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse422, SfNewListingsForSaleRollingCountsV1PortfolioMetricsParclIdSfNewListingsForSaleRollingCountsGetResponse500, SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostBodyParam, SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostMetadataParam, SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse200, SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse401, SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse403, SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse404, SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse422, SfNewListingsForSaleRollingCountsV1PortfolioMetricsSfNewListingsForSaleRollingCountsPostResponse500, VolatilityV1PriceFeedParclIdVolatilityGetMetadataParam, VolatilityV1PriceFeedParclIdVolatilityGetResponse200, VolatilityV1PriceFeedParclIdVolatilityGetResponse401, VolatilityV1PriceFeedParclIdVolatilityGetResponse403, VolatilityV1PriceFeedParclIdVolatilityGetResponse404, VolatilityV1PriceFeedParclIdVolatilityGetResponse422, VolatilityV1PriceFeedParclIdVolatilityGetResponse500, VolatilityV1PriceFeedVolatilityPostBodyParam, VolatilityV1PriceFeedVolatilityPostMetadataParam, VolatilityV1PriceFeedVolatilityPostResponse200, VolatilityV1PriceFeedVolatilityPostResponse401, VolatilityV1PriceFeedVolatilityPostResponse403, VolatilityV1PriceFeedVolatilityPostResponse404, VolatilityV1PriceFeedVolatilityPostResponse422, VolatilityV1PriceFeedVolatilityPostResponse500 } from './types';
