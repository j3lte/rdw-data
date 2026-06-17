// *******************************************************
//
// Name: Brandstoffen_op_PC4
//
// Category: Unknown
// Tags:
// License: Unknown
// License (RDW): Unknown
// Link: https://opendata.rdw.nl/dataset/Brandstoffen_op_PC4/8wbe-pu7d
// Permalink: https://opendata.rdw.nl/d/8wbe-pu7d
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2025-04-23T12:26:12.000Z
// Structure last updated: 2025-04-23T12:26:12.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Brandstoffen_op_PC4
 */
export interface BrandstoffenOpPc4_ResponseData {
  /**
   * ### Aantal
   *
   * **Type**: Number
   */
  aantal?: string;
  /**
   * ### Brandstof
   *
   * **Type**: Text
   */
  brandstof?: string;
  /**
   * ### Extern oplaadbaar
   *
   * **Type**: Text
   */
  extern_oplaadbaar?: string;
  /**
   * ### Postcode
   *
   * **Type**: Number
   */
  postcode?: string;
  /**
   * ### Voertuigsoort
   *
   * **Type**: Text
   */
  voertuigsoort?: string;
}

/**
 * Fieldnames for **BrandstoffenOpPc4**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Aantal`` | ``aantal`` | _Number_ |
 * | ``Brandstof`` | ``brandstof`` | _Text_ |
 * | ``ExternOplaadbaar`` | ``extern_oplaadbaar`` | _Text_ |
 * | ``Postcode`` | ``postcode`` | _Number_ |
 * | ``Voertuigsoort`` | ``voertuigsoort`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Aantal: FieldObject<DataType.Number>;
  Brandstof: FieldObject<DataType.Text>;
  ExternOplaadbaar: FieldObject<DataType.Text>;
  Postcode: FieldObject<DataType.Number>;
  Voertuigsoort: FieldObject<DataType.Text>;
} = {
  /**
   * ### Aantal
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantal`
   */
  Aantal: Field("aantal", DataType.Number),
  /**
   * ### Brandstof
   *
   * **Type**: Text
   *
   * **Database Column Name**: `brandstof`
   */
  Brandstof: Field("brandstof", DataType.Text),
  /**
   * ### Extern oplaadbaar
   *
   * **Type**: Text
   *
   * **Database Column Name**: `extern_oplaadbaar`
   */
  ExternOplaadbaar: Field("extern_oplaadbaar", DataType.Text),
  /**
   * ### Postcode
   *
   * **Type**: Number
   *
   * **Database Column Name**: `postcode`
   */
  Postcode: Field("postcode", DataType.Number),
  /**
   * ### Voertuigsoort
   *
   * **Type**: Text
   *
   * **Database Column Name**: `voertuigsoort`
   */
  Voertuigsoort: Field("voertuigsoort", DataType.Text),
};

/**
 * Dataset metadata for **BrandstoffenOpPc4**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Aantal",
    "Brandstof",
    "ExternOplaadbaar",
    "Postcode",
    "Voertuigsoort",
  ],
  dataset: "8wbe-pu7d",
  domain: "opendata.rdw.nl",
  full_name: "Brandstoffen_op_PC4",
  provider_name: "BrandstoffenOpPc4",
  url: "https://opendata.rdw.nl/dataset/Brandstoffen_op_PC4/8wbe-pu7d",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/8wbe-pu7d",
  category: "Unknown",
  tags: [],
  license: "Unknown",
  license_detail: "Unknown",
  publication_date: "2025-04-23T12:26:12.000Z",
  metadata_updated_at: "2025-04-23T12:26:12.000Z",
} as const;

/**
 * ### Brandstoffen_op_PC4
 *
 * **URL:** https://opendata.rdw.nl/dataset/Brandstoffen_op_PC4/8wbe-pu7d
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/8wbe-pu7d
 *
 * **Dataset ID:** 8wbe-pu7d
 *
 * **Category:** Unknown
 *
 * **Tags:**
 *
 * **License:** Unknown (Unknown)
 *
 * **Published:** 2025-04-23T12:26:12.000Z
 *
 * **Structure last updated:** 2025-04-23T12:26:12.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Brandstoffen_op_PC4 dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Aantal, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<BrandstoffenOpPc4_ResponseData> =>
  createQueryWithDataset<BrandstoffenOpPc4_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Brandstoffen_op_PC4**
 *
 * Provider for the Brandstoffen_op_PC4 dataset. Bundles:
 * - {@link BrandstoffenOpPc4.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link BrandstoffenOpPc4.Fields} — the queryable field definitions
 * - {@link BrandstoffenOpPc4.Info} — dataset metadata
 *
 * **Category:** Unknown
 *
 * **Tags:**
 *
 * **License:** Unknown (Unknown)
 *
 * **Dataset ID:** 8wbe-pu7d
 *
 * **URL:** https://opendata.rdw.nl/dataset/Brandstoffen_op_PC4/8wbe-pu7d
 *
 * **Published:** 2025-04-23T12:26:12.000Z
 *
 * **Structure last updated:** 2025-04-23T12:26:12.000Z
 *
 * @example
 * ```ts
 * const { data } = await BrandstoffenOpPc4.RDWQuery()
 *   .where(Where.like(BrandstoffenOpPc4.Fields.Aantal, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const BrandstoffenOpPc4 = {
  RDWQuery,
  Fields,
  Info,
};
