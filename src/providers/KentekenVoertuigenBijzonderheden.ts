// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_bijzonderheden
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_bijzonderhed/7ug8-2dtt
// Permalink: https://opendata.rdw.nl/d/7ug8-2dtt
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_bijzonderheden
 */
export interface KentekenVoertuigenBijzonderheden_ResponseData {
  /**
   * ### Bijzonderheid code
   *
   * **Type**: Number
   */
  bijzonderheid_code?: string;
  /**
   * ### Bijzonderheid code omschrijving
   *
   * **Type**: Text
   */
  bijzonderheid_code_1?: string;
  /**
   * ### Bijzonderheid eenheid
   *
   * **Type**: Text
   */
  bijzonderheid_eenheid?: string;
  /**
   * ### Bijzonderheid variabele tekst
   *
   * **Type**: Text
   */
  bijzonderheid_variabele_tekst?: string;
  /**
   * ### Bijzonderheid volgnummer
   *
   * **Type**: Number
   */
  bijzonderheid_volgnummer?: string;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  kenteken?: string;
}

/**
 * Fieldnames for **KentekenVoertuigenBijzonderheden**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``BijzonderheidCode`` | ``bijzonderheid_code`` | _Number_ |
 * | ``BijzonderheidCode1`` | ``bijzonderheid_code_1`` | _Text_ |
 * | ``BijzonderheidEenheid`` | ``bijzonderheid_eenheid`` | _Text_ |
 * | ``BijzonderheidVariabeleTekst`` | ``bijzonderheid_variabele_tekst`` | _Text_ |
 * | ``BijzonderheidVolgnummer`` | ``bijzonderheid_volgnummer`` | _Number_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Bijzonderheid code
  *
  * **Type**: Number
  *
  * **Database Column Name**: `bijzonderheid_code`
  */
  BijzonderheidCode: Field("bijzonderheid_code", DataType.Number),
  /**
  * ### Bijzonderheid code omschrijving
  *
  * **Type**: Text
  *
  * **Database Column Name**: `bijzonderheid_code_1`
  */
  BijzonderheidCode1: Field("bijzonderheid_code_1", DataType.Text),
  /**
  * ### Bijzonderheid eenheid
  *
  * **Type**: Text
  *
  * **Database Column Name**: `bijzonderheid_eenheid`
  */
  BijzonderheidEenheid: Field("bijzonderheid_eenheid", DataType.Text),
  /**
  * ### Bijzonderheid variabele tekst
  *
  * **Type**: Text
  *
  * **Database Column Name**: `bijzonderheid_variabele_tekst`
  */
  BijzonderheidVariabeleTekst: Field("bijzonderheid_variabele_tekst", DataType.Text),
  /**
  * ### Bijzonderheid volgnummer
  *
  * **Type**: Number
  *
  * **Database Column Name**: `bijzonderheid_volgnummer`
  */
  BijzonderheidVolgnummer: Field("bijzonderheid_volgnummer", DataType.Number),
  /**
  * ### Kenteken
  *
  * **Type**: Text
  *
  * **Database Column Name**: `kenteken`
  */
  Kenteken: Field("kenteken", DataType.Text),
};

export const Info = {
  fields: [
    "BijzonderheidCode",
    "BijzonderheidCode1",
    "BijzonderheidEenheid",
    "BijzonderheidVariabeleTekst",
    "BijzonderheidVolgnummer",
    "Kenteken",
  ],
  dataset: "7ug8-2dtt",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen_bijzonderheden",
  provider_name: "KentekenVoertuigenBijzonderheden",
  url: "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_bijzonderhed/7ug8-2dtt",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/7ug8-2dtt",
}

/**
 * ### Open Data RDW: Gekentekende_voertuigen_bijzonderheden
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_bijzonderhed/7ug8-2dtt
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/7ug8-2dtt
 *
 * **Dataset ID:** 7ug8-2dtt
 *
 * **Category:** Voertuigen
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Gekentekende_voertuigen_bijzonderheden dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.BijzonderheidCode, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<KentekenVoertuigenBijzonderheden_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const KentekenVoertuigenBijzonderheden: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<KentekenVoertuigenBijzonderheden_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
