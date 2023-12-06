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

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data RDW: Producten Catalogus
 */
export interface ResponseData {
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
export interface IFields {
  /**
   * ### Eenheid
   *
   * **Type**: Text
   */
   Eenheid: FieldObject<DataType.Text>;
  /**
   * ### Omschrijving
   *
   * **Type**: Text
   */
   Omschrijving: FieldObject<DataType.Text>;
  /**
   * ### Staatscourant indeling
   *
   * **Type**: Text
   */
   StaatscourantIndeling: FieldObject<DataType.Text>;
  /**
   * ### Tarief
   *
   * **Type**: Text
   */
   Tarief: FieldObject<DataType.Text>;
  /**
   * ### Tariefclustering
   *
   * **Type**: Text
   */
   Tariefclustering: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  Eenheid: Field("eenheid", DataType.Text),
  Omschrijving: Field("omschrijving", DataType.Text),
  StaatscourantIndeling: Field("staatscourant_indeling", DataType.Text),
  Tarief: Field("tarief", DataType.Text),
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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
