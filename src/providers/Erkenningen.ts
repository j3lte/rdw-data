// *******************************************************
//
// Name: Open Data RDW: Erkenningen
//
// Overzicht van de erkenningen behorende bij de erkende bedrijven.
//
// Category: Erkende bedrijven
// Link: https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz
// Permalink: https://opendata.rdw.nl/d/nmwb-dqkz
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data RDW: Erkenningen
 */
export interface ResponseData {
  /**
   * ### Erkenning
   * 
   * De erkenning, bevoegdheid, regeling of overeenkomst die het bedrijf in bezit heeft. Wanneer deze tijdelijk ongeldig is, wordt deze wel getoond.
   *
   * **Type**: Text
   */
  erkenning?: string;
  /**
   * ### Volgnummer
   * 
   * Nummer waarmee een bedrijf eenduidig is te identificeren binnen de opendata set.
   *
   * **Type**: Number
   */
  volgnummer?: string;
}

/**
 * Fieldnames for **Erkenningen**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Erkenning`` | ``erkenning`` | _Text_ |
 * | ``Volgnummer`` | ``volgnummer`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Erkenning
   * 
   * De erkenning, bevoegdheid, regeling of overeenkomst die het bedrijf in bezit heeft. Wanneer deze tijdelijk ongeldig is, wordt deze wel getoond.
   *
   * **Type**: Text
   */
   Erkenning: FieldObject<DataType.Text>;
  /**
   * ### Volgnummer
   * 
   * Nummer waarmee een bedrijf eenduidig is te identificeren binnen de opendata set.
   *
   * **Type**: Number
   */
   Volgnummer: FieldObject<DataType.Number>;
};

export const Fields: IFields = {
  Erkenning: Field("erkenning", DataType.Text),
  Volgnummer: Field("volgnummer", DataType.Number),
};

export const Info = {
  fields: [
    "Erkenning",
    "Volgnummer",
  ],
  dataset: "nmwb-dqkz",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Erkenningen",
  provider_name: "Erkenningen",
  url: "https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/nmwb-dqkz",
}

/**
 * ### Open Data RDW: Erkenningen
 * Overzicht van de erkenningen behorende bij de erkende bedrijven.
 *
 * **URL:** https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/nmwb-dqkz
 *
 * **Dataset ID:** nmwb-dqkz
 *
 * **Category:** Erkende bedrijven
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
