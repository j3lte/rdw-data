// *******************************************************
//
// Name: Open Data RDW: TGK Koppeling Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Koppeling-Uitvoering/d3ex-xghj
// Permalink: https://opendata.rdw.nl/d/d3ex-xghj
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Koppeling Uitvoering
 */
export interface TgkKoppelingUitvoering_ResponseData {
  /**
   * ### CodeUitvoeringTgk
   *
   * **Type**: Text
   */
  codeuitvoeringtgk?: string;
  /**
   * ### CodeVariantTgk
   *
   * **Type**: Text
   */
  codevarianttgk?: string;
  /**
   * ### MaximummassaAutonoomBgr
   *
   * **Type**: Number
   */
  maximummassaautonoombgr?: string;
  /**
   * ### MaximummassaAutonoomOgr
   *
   * **Type**: Number
   */
  maximummassaautonoomogr?: string;
  /**
   * ### MaximummassaGeremdBgr
   *
   * **Type**: Number
   */
  maximummassageremdbgr?: string;
  /**
   * ### MaximummassaGeremdOgr
   *
   * **Type**: Number
   */
  maximummassageremdogr?: string;
  /**
   * ### MaximummassaMiddenasBgr
   *
   * **Type**: Number
   */
  maximummassamiddenasbgr?: string;
  /**
   * ### MaximummassaMiddenasOgr
   *
   * **Type**: Number
   */
  maximummassamiddenasogr?: string;
  /**
   * ### MaximummassaOngeremdBgr
   *
   * **Type**: Number
   */
  maximummassaongeremdbgr?: string;
  /**
   * ### MaximummassaOngeremdOgr
   *
   * **Type**: Number
   */
  maximummassaongeremdogr?: string;
  /**
   * ### MaximummassaOpleggerBgr
   *
   * **Type**: Number
   */
  maximummassaopleggerbgr?: string;
  /**
   * ### MaximummassaOpleggerOgr
   *
   * **Type**: Number
   */
  maximummassaopleggerogr?: string;
  /**
   * ### MaximummassaSamenstelBgr
   *
   * **Type**: Number
   */
  maximummassasamenstelbgr?: string;
  /**
   * ### MaximummassaSamenstelOgr
   *
   * **Type**: Number
   */
  maximummassasamenstelogr?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### VolgnummerKoppeling
   *
   * **Type**: Number
   */
  volgnummerkoppeling?: string;
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   */
  volgnummerrevisieuitvoering?: string;
}

/**
 * Fieldnames for **TgkKoppelingUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevarianttgk`` | ``codevarianttgk`` | _Text_ |
 * | ``Maximummassaautonoombgr`` | ``maximummassaautonoombgr`` | _Number_ |
 * | ``Maximummassaautonoomogr`` | ``maximummassaautonoomogr`` | _Number_ |
 * | ``Maximummassageremdbgr`` | ``maximummassageremdbgr`` | _Number_ |
 * | ``Maximummassageremdogr`` | ``maximummassageremdogr`` | _Number_ |
 * | ``Maximummassamiddenasbgr`` | ``maximummassamiddenasbgr`` | _Number_ |
 * | ``Maximummassamiddenasogr`` | ``maximummassamiddenasogr`` | _Number_ |
 * | ``Maximummassaongeremdbgr`` | ``maximummassaongeremdbgr`` | _Number_ |
 * | ``Maximummassaongeremdogr`` | ``maximummassaongeremdogr`` | _Number_ |
 * | ``Maximummassaopleggerbgr`` | ``maximummassaopleggerbgr`` | _Number_ |
 * | ``Maximummassaopleggerogr`` | ``maximummassaopleggerogr`` | _Number_ |
 * | ``Maximummassasamenstelbgr`` | ``maximummassasamenstelbgr`` | _Number_ |
 * | ``Maximummassasamenstelogr`` | ``maximummassasamenstelogr`` | _Number_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Volgnummerkoppeling`` | ``volgnummerkoppeling`` | _Number_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### CodeUitvoeringTgk
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codeuitvoeringtgk`
   */
  Codeuitvoeringtgk: Field("codeuitvoeringtgk", DataType.Text),
  /**
   * ### CodeVariantTgk
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codevarianttgk`
   */
  Codevarianttgk: Field("codevarianttgk", DataType.Text),
  /**
   * ### MaximummassaAutonoomBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassaautonoombgr`
   */
  Maximummassaautonoombgr: Field("maximummassaautonoombgr", DataType.Number),
  /**
   * ### MaximummassaAutonoomOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassaautonoomogr`
   */
  Maximummassaautonoomogr: Field("maximummassaautonoomogr", DataType.Number),
  /**
   * ### MaximummassaGeremdBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassageremdbgr`
   */
  Maximummassageremdbgr: Field("maximummassageremdbgr", DataType.Number),
  /**
   * ### MaximummassaGeremdOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassageremdogr`
   */
  Maximummassageremdogr: Field("maximummassageremdogr", DataType.Number),
  /**
   * ### MaximummassaMiddenasBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassamiddenasbgr`
   */
  Maximummassamiddenasbgr: Field("maximummassamiddenasbgr", DataType.Number),
  /**
   * ### MaximummassaMiddenasOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassamiddenasogr`
   */
  Maximummassamiddenasogr: Field("maximummassamiddenasogr", DataType.Number),
  /**
   * ### MaximummassaOngeremdBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassaongeremdbgr`
   */
  Maximummassaongeremdbgr: Field("maximummassaongeremdbgr", DataType.Number),
  /**
   * ### MaximummassaOngeremdOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassaongeremdogr`
   */
  Maximummassaongeremdogr: Field("maximummassaongeremdogr", DataType.Number),
  /**
   * ### MaximummassaOpleggerBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassaopleggerbgr`
   */
  Maximummassaopleggerbgr: Field("maximummassaopleggerbgr", DataType.Number),
  /**
   * ### MaximummassaOpleggerOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassaopleggerogr`
   */
  Maximummassaopleggerogr: Field("maximummassaopleggerogr", DataType.Number),
  /**
   * ### MaximummassaSamenstelBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassasamenstelbgr`
   */
  Maximummassasamenstelbgr: Field("maximummassasamenstelbgr", DataType.Number),
  /**
   * ### MaximummassaSamenstelOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassasamenstelogr`
   */
  Maximummassasamenstelogr: Field("maximummassasamenstelogr", DataType.Number),
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummer`
   */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
   * ### VolgnummerKoppeling
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerkoppeling`
   */
  Volgnummerkoppeling: Field("volgnummerkoppeling", DataType.Number),
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerrevisieuitvoering`
   */
  Volgnummerrevisieuitvoering: Field("volgnummerrevisieuitvoering", DataType.Number),
};

export const Info = {
  fields: [
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Maximummassaautonoombgr",
    "Maximummassaautonoomogr",
    "Maximummassageremdbgr",
    "Maximummassageremdogr",
    "Maximummassamiddenasbgr",
    "Maximummassamiddenasogr",
    "Maximummassaongeremdbgr",
    "Maximummassaongeremdogr",
    "Maximummassaopleggerbgr",
    "Maximummassaopleggerogr",
    "Maximummassasamenstelbgr",
    "Maximummassasamenstelogr",
    "Typegoedkeuringsnummer",
    "Volgnummerkoppeling",
    "Volgnummerrevisieuitvoering",
  ],
  dataset: "d3ex-xghj",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Koppeling Uitvoering",
  provider_name: "TgkKoppelingUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Koppeling-Uitvoering/d3ex-xghj",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/d3ex-xghj",
};

/**
 * ### Open Data RDW: TGK Koppeling Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Koppeling-Uitvoering/d3ex-xghj
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/d3ex-xghj
 *
 * **Dataset ID:** d3ex-xghj
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Koppeling Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Codeuitvoeringtgk, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkKoppelingUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TgkKoppelingUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TgkKoppelingUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
