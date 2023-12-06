// *******************************************************
//
// Name: Open Data RDW: Gebreken
//
// Gebreken die bij een voertuig kunnen voorkomen zijn in deze dataset opgenomen.
//
// Category: Keuringen
// Link: https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Gebreken/hx2c-gt7k
// Permalink: https://opendata.rdw.nl/d/hx2c-gt7k
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Gebreken
 */
export interface ResponseData {
  /**
   * ### Einddatum gebrek
   *
   * **Type**: Number
   */
  einddatum_gebrek?: string;
  /**
   * ### Einddatum gebrek DT
   *
   * **Type**: Calendar date
   */
  einddatum_gebrek_dt?: string;
  /**
   * ### Gebrek artikel nummer
   *
   * **Type**: Text
   */
  gebrek_artikel_nummer?: string;
  /**
   * ### Gebrek identificatie
   *
   * **Type**: Text
   */
  gebrek_identificatie?: string;
  /**
   * ### Gebrek omschrijving
   *
   * **Type**: Text
   */
  gebrek_omschrijving?: string;
  /**
   * ### Gebrek paragraaf nummer
   *
   * **Type**: Number
   */
  gebrek_paragraaf_nummer?: string;
  /**
   * ### Ingangsdatum gebrek
   *
   * **Type**: Number
   */
  ingangsdatum_gebrek?: string;
  /**
   * ### Ingangsdatum gebrek DT
   *
   * **Type**: Calendar date
   */
  ingangsdatum_gebrek_dt?: string;
}

/**
 * Fieldnames for **Gebreken**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``EinddatumGebrek`` | ``einddatum_gebrek`` | _Number_ |
 * | ``EinddatumGebrekDt`` | ``einddatum_gebrek_dt`` | _Calendar date_ |
 * | ``GebrekArtikelNummer`` | ``gebrek_artikel_nummer`` | _Text_ |
 * | ``GebrekIdentificatie`` | ``gebrek_identificatie`` | _Text_ |
 * | ``GebrekOmschrijving`` | ``gebrek_omschrijving`` | _Text_ |
 * | ``GebrekParagraafNummer`` | ``gebrek_paragraaf_nummer`` | _Number_ |
 * | ``IngangsdatumGebrek`` | ``ingangsdatum_gebrek`` | _Number_ |
 * | ``IngangsdatumGebrekDt`` | ``ingangsdatum_gebrek_dt`` | _Calendar date_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Einddatum gebrek
   *
   * **Type**: Number
   */
   EinddatumGebrek: FieldObject<DataType.Number>;
  /**
   * ### Einddatum gebrek DT
   *
   * **Type**: Calendar date
   */
   EinddatumGebrekDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Gebrek artikel nummer
   *
   * **Type**: Text
   */
   GebrekArtikelNummer: FieldObject<DataType.Text>;
  /**
   * ### Gebrek identificatie
   *
   * **Type**: Text
   */
   GebrekIdentificatie: FieldObject<DataType.Text>;
  /**
   * ### Gebrek omschrijving
   *
   * **Type**: Text
   */
   GebrekOmschrijving: FieldObject<DataType.Text>;
  /**
   * ### Gebrek paragraaf nummer
   *
   * **Type**: Number
   */
   GebrekParagraafNummer: FieldObject<DataType.Number>;
  /**
   * ### Ingangsdatum gebrek
   *
   * **Type**: Number
   */
   IngangsdatumGebrek: FieldObject<DataType.Number>;
  /**
   * ### Ingangsdatum gebrek DT
   *
   * **Type**: Calendar date
   */
   IngangsdatumGebrekDt: FieldObject<DataType.FloatingTimestamp>;
};

export const Fields: IFields = {
  EinddatumGebrek: Field("einddatum_gebrek", DataType.Number),
  EinddatumGebrekDt: Field("einddatum_gebrek_dt", DataType.FloatingTimestamp),
  GebrekArtikelNummer: Field("gebrek_artikel_nummer", DataType.Text),
  GebrekIdentificatie: Field("gebrek_identificatie", DataType.Text),
  GebrekOmschrijving: Field("gebrek_omschrijving", DataType.Text),
  GebrekParagraafNummer: Field("gebrek_paragraaf_nummer", DataType.Number),
  IngangsdatumGebrek: Field("ingangsdatum_gebrek", DataType.Number),
  IngangsdatumGebrekDt: Field("ingangsdatum_gebrek_dt", DataType.FloatingTimestamp),
};

export const Info = {
  fields: [
    "EinddatumGebrek",
    "EinddatumGebrekDt",
    "GebrekArtikelNummer",
    "GebrekIdentificatie",
    "GebrekOmschrijving",
    "GebrekParagraafNummer",
    "IngangsdatumGebrek",
    "IngangsdatumGebrekDt",
  ],
  dataset: "hx2c-gt7k",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gebreken",
  provider_name: "Gebreken",
  url: "https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Gebreken/hx2c-gt7k",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/hx2c-gt7k",
}

/**
 * ### Open Data RDW: Gebreken
 * Gebreken die bij een voertuig kunnen voorkomen zijn in deze dataset opgenomen.
 *
 * **URL:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Gebreken/hx2c-gt7k
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/hx2c-gt7k
 *
 * **Dataset ID:** hx2c-gt7k
 *
 * **Category:** Keuringen
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
