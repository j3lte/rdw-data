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

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_bijzonderheden
 */
export interface ResponseData {
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
export interface IFields {
  /**
   * ### Bijzonderheid code
   *
   * **Type**: Number
   */
   BijzonderheidCode: FieldObject<DataType.Number>;
  /**
   * ### Bijzonderheid code omschrijving
   *
   * **Type**: Text
   */
   BijzonderheidCode1: FieldObject<DataType.Text>;
  /**
   * ### Bijzonderheid eenheid
   *
   * **Type**: Text
   */
   BijzonderheidEenheid: FieldObject<DataType.Text>;
  /**
   * ### Bijzonderheid variabele tekst
   *
   * **Type**: Text
   */
   BijzonderheidVariabeleTekst: FieldObject<DataType.Text>;
  /**
   * ### Bijzonderheid volgnummer
   *
   * **Type**: Number
   */
   BijzonderheidVolgnummer: FieldObject<DataType.Number>;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
   Kenteken: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  BijzonderheidCode: Field("bijzonderheid_code", DataType.Number),
  BijzonderheidCode1: Field("bijzonderheid_code_1", DataType.Text),
  BijzonderheidEenheid: Field("bijzonderheid_eenheid", DataType.Text),
  BijzonderheidVariabeleTekst: Field("bijzonderheid_variabele_tekst", DataType.Text),
  BijzonderheidVolgnummer: Field("bijzonderheid_volgnummer", DataType.Number),
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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
