// *******************************************************
//
// Name: Open Data RDW: TGK Intrekking Typegoedkeuring
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Intrekking-Typegoedkeuring/9s6a-b42z
// Permalink: https://opendata.rdw.nl/d/9s6a-b42z
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Intrekking Typegoedkeuring
 */
export interface TgkIntrekkingTypegoedkeuring_ResponseData {
  /**
   * ### BegindatumIntrekkingTgk
   *
   * **Type**: Calendar date
   */
  begindatumintrekkingtgk?: string;
  /**
   * ### EinddatumIntrekkingTgk
   *
   * **Type**: Calendar date
   */
  einddatumintrekkingtgk?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### VolgnummerIntrekkingTgk
   *
   * **Type**: Number
   */
  volgnummerintrekkingtgk?: string;
}

/**
 * Fieldnames for **TgkIntrekkingTypegoedkeuring**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Begindatumintrekkingtgk`` | ``begindatumintrekkingtgk`` | _Calendar date_ |
 * | ``Einddatumintrekkingtgk`` | ``einddatumintrekkingtgk`` | _Calendar date_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Volgnummerintrekkingtgk`` | ``volgnummerintrekkingtgk`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### BegindatumIntrekkingTgk
   *
   * **Type**: Calendar date
   *
   * **Database Column Name**: `begindatumintrekkingtgk`
   */
  Begindatumintrekkingtgk: Field("begindatumintrekkingtgk", DataType.FloatingTimestamp),
  /**
   * ### EinddatumIntrekkingTgk
   *
   * **Type**: Calendar date
   *
   * **Database Column Name**: `einddatumintrekkingtgk`
   */
  Einddatumintrekkingtgk: Field("einddatumintrekkingtgk", DataType.FloatingTimestamp),
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummer`
   */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
   * ### VolgnummerIntrekkingTgk
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerintrekkingtgk`
   */
  Volgnummerintrekkingtgk: Field("volgnummerintrekkingtgk", DataType.Number),
};

export const Info = {
  fields: [
    "Begindatumintrekkingtgk",
    "Einddatumintrekkingtgk",
    "Typegoedkeuringsnummer",
    "Volgnummerintrekkingtgk",
  ],
  dataset: "9s6a-b42z",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Intrekking Typegoedkeuring",
  provider_name: "TgkIntrekkingTypegoedkeuring",
  url:
    "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Intrekking-Typegoedkeuring/9s6a-b42z",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/9s6a-b42z",
};

/**
 * ### Open Data RDW: TGK Intrekking Typegoedkeuring
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Intrekking-Typegoedkeuring/9s6a-b42z
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/9s6a-b42z
 *
 * **Dataset ID:** 9s6a-b42z
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Intrekking Typegoedkeuring dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Begindatumintrekkingtgk, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkIntrekkingTypegoedkeuring_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

export const TgkIntrekkingTypegoedkeuring: {
  RDWQuery: (
    auth?: AuthOpts,
    opts?: Options,
  ) => SodaQuery<TgkIntrekkingTypegoedkeuring_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
