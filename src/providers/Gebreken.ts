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

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Gebreken
 */
export interface Gebreken_ResponseData {
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
export const Fields = {
  /**
  * ### Einddatum gebrek
  *
  * **Type**: Number
  *
  * **Database Column Name**: `einddatum_gebrek`
  */
  EinddatumGebrek: Field("einddatum_gebrek", DataType.Number),
  /**
  * ### Einddatum gebrek DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `einddatum_gebrek_dt`
  */
  EinddatumGebrekDt: Field("einddatum_gebrek_dt", DataType.FloatingTimestamp),
  /**
  * ### Gebrek artikel nummer
  *
  * **Type**: Text
  *
  * **Database Column Name**: `gebrek_artikel_nummer`
  */
  GebrekArtikelNummer: Field("gebrek_artikel_nummer", DataType.Text),
  /**
  * ### Gebrek identificatie
  *
  * **Type**: Text
  *
  * **Database Column Name**: `gebrek_identificatie`
  */
  GebrekIdentificatie: Field("gebrek_identificatie", DataType.Text),
  /**
  * ### Gebrek omschrijving
  *
  * **Type**: Text
  *
  * **Database Column Name**: `gebrek_omschrijving`
  */
  GebrekOmschrijving: Field("gebrek_omschrijving", DataType.Text),
  /**
  * ### Gebrek paragraaf nummer
  *
  * **Type**: Number
  *
  * **Database Column Name**: `gebrek_paragraaf_nummer`
  */
  GebrekParagraafNummer: Field("gebrek_paragraaf_nummer", DataType.Number),
  /**
  * ### Ingangsdatum gebrek
  *
  * **Type**: Number
  *
  * **Database Column Name**: `ingangsdatum_gebrek`
  */
  IngangsdatumGebrek: Field("ingangsdatum_gebrek", DataType.Number),
  /**
  * ### Ingangsdatum gebrek DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `ingangsdatum_gebrek_dt`
  */
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
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Gebreken dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.EinddatumGebrek, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<Gebreken_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const Gebreken: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<Gebreken_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
