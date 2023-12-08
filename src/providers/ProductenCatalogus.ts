// *******************************************************
//
// Name: Open Data RDW: Producten Catalogus
//
// Deze dataset is op 3 januari 2023 bijgewerkt met de tarieven voor 2023.
//
// Category: Product catalogus
// Link: https://opendata.rdw.nl/Product-catalogus/Open-Data-RDW-Producten-Catalogus/v23s-d6km
// Permalink: https://opendata.rdw.nl/d/v23s-d6km
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Producten Catalogus
 */
export interface ProductenCatalogus_ResponseData {
  /**
   * ### Eenheid
   *
   * **Type**: Text
   */
  eenheid?: string;
  /**
   * ### Omschrijving
   *
   * **Type**: Text
   */
  omschrijving?: string;
  /**
   * ### Staatscourant indeling
   *
   * **Type**: Text
   */
  staatscourant_indeling?: string;
  /**
   * ### Tarief
   *
   * **Type**: Text
   */
  tarief?: string;
  /**
   * ### Tariefclustering
   *
   * **Type**: Text
   */
  tariefclustering?: string;
}

/**
 * Fieldnames for **ProductenCatalogus**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Eenheid`` | ``eenheid`` | _Text_ |
 * | ``Omschrijving`` | ``omschrijving`` | _Text_ |
 * | ``StaatscourantIndeling`` | ``staatscourant_indeling`` | _Text_ |
 * | ``Tarief`` | ``tarief`` | _Text_ |
 * | ``Tariefclustering`` | ``tariefclustering`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Eenheid
  *
  * **Type**: Text
  *
  * **Database Column Name**: `eenheid`
  */
  Eenheid: Field("eenheid", DataType.Text),
  /**
  * ### Omschrijving
  *
  * **Type**: Text
  *
  * **Database Column Name**: `omschrijving`
  */
  Omschrijving: Field("omschrijving", DataType.Text),
  /**
  * ### Staatscourant indeling
  *
  * **Type**: Text
  *
  * **Database Column Name**: `staatscourant_indeling`
  */
  StaatscourantIndeling: Field("staatscourant_indeling", DataType.Text),
  /**
  * ### Tarief
  *
  * **Type**: Text
  *
  * **Database Column Name**: `tarief`
  */
  Tarief: Field("tarief", DataType.Text),
  /**
  * ### Tariefclustering
  *
  * **Type**: Text
  *
  * **Database Column Name**: `tariefclustering`
  */
  Tariefclustering: Field("tariefclustering", DataType.Text),
};

export const Info = {
  fields: [
    "Eenheid",
    "Omschrijving",
    "StaatscourantIndeling",
    "Tarief",
    "Tariefclustering",
  ],
  dataset: "v23s-d6km",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Producten Catalogus",
  provider_name: "ProductenCatalogus",
  url: "https://opendata.rdw.nl/Product-catalogus/Open-Data-RDW-Producten-Catalogus/v23s-d6km",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/v23s-d6km",
}

/**
 * ### Open Data RDW: Producten Catalogus
 * Deze dataset is op 3 januari 2023 bijgewerkt met de tarieven voor 2023.
 *
 * **URL:** https://opendata.rdw.nl/Product-catalogus/Open-Data-RDW-Producten-Catalogus/v23s-d6km
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/v23s-d6km
 *
 * **Dataset ID:** v23s-d6km
 *
 * **Category:** Product catalogus
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Producten Catalogus dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Eenheid, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ProductenCatalogus_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ProductenCatalogus = {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<ProductenCatalogus_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
