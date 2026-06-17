// *******************************************************
//
// Name: Open Data RDW: Producten Catalogus
//
// Category: Product catalogus
// Tags: producten catalogus
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Product-catalogus/Open-Data-RDW-Producten-Catalogus/v23s-d6km
// Permalink: https://opendata.rdw.nl/d/v23s-d6km
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2017-12-21T13:38:34.000Z
// Structure last updated: 2026-01-05T16:09:26.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

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
export const Fields: {
  Eenheid: FieldObject<DataType.Text>;
  Omschrijving: FieldObject<DataType.Text>;
  StaatscourantIndeling: FieldObject<DataType.Text>;
  Tarief: FieldObject<DataType.Text>;
  Tariefclustering: FieldObject<DataType.Text>;
} = {
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

/**
 * Dataset metadata for **ProductenCatalogus**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
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
  category: "Product catalogus",
  tags: ["producten catalogus"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2017-12-21T13:38:34.000Z",
  metadata_updated_at: "2026-01-05T16:09:26.000Z",
} as const;

/**
 * ### Open Data RDW: Producten Catalogus
 *
 * **URL:** https://opendata.rdw.nl/Product-catalogus/Open-Data-RDW-Producten-Catalogus/v23s-d6km
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/v23s-d6km
 *
 * **Dataset ID:** v23s-d6km
 *
 * **Category:** Product catalogus
 *
 * **Tags:** producten catalogus
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2017-12-21T13:38:34.000Z
 *
 * **Structure last updated:** 2026-01-05T16:09:26.000Z
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
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ProductenCatalogus_ResponseData> =>
  createQueryWithDataset<ProductenCatalogus_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: Producten Catalogus**
 *
 * Provider for the Open Data RDW: Producten Catalogus dataset. Bundles:
 * - {@link ProductenCatalogus.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ProductenCatalogus.Fields} — the queryable field definitions
 * - {@link ProductenCatalogus.Info} — dataset metadata
 *
 * **Category:** Product catalogus
 *
 * **Tags:** producten catalogus
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** v23s-d6km
 *
 * **URL:** https://opendata.rdw.nl/Product-catalogus/Open-Data-RDW-Producten-Catalogus/v23s-d6km
 *
 * **Published:** 2017-12-21T13:38:34.000Z
 *
 * **Structure last updated:** 2026-01-05T16:09:26.000Z
 *
 * @example
 * ```ts
 * const { data } = await ProductenCatalogus.RDWQuery()
 *   .where(Where.like(ProductenCatalogus.Fields.Eenheid, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ProductenCatalogus = {
  RDWQuery,
  Fields,
  Info,
};
