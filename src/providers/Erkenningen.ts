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

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Erkenningen
 */
export interface Erkenningen_ResponseData {
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
export const Fields = {
  /**
  * ### Erkenning
  * 
  * De erkenning, bevoegdheid, regeling of overeenkomst die het bedrijf in bezit heeft. Wanneer deze tijdelijk ongeldig is, wordt deze wel getoond.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `erkenning`
  */
  Erkenning: Field("erkenning", DataType.Text),
  /**
  * ### Volgnummer
  * 
  * Nummer waarmee een bedrijf eenduidig is te identificeren binnen de opendata set.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `volgnummer`
  */
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
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Erkenningen dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Erkenning, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<Erkenningen_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const Erkenningen: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<Erkenningen_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
