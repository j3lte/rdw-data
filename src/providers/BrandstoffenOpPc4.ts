// *******************************************************
//
// Name: Brandstoffen_op_PC4
//
// Category: Unknown
// Link: https://opendata.rdw.nl/dataset/Brandstoffen_op_PC4/8wbe-pu7d
// Permalink: https://opendata.rdw.nl/d/8wbe-pu7d
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

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
export const Fields = {
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
}

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
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<BrandstoffenOpPc4_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const BrandstoffenOpPc4: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<BrandstoffenOpPc4_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
