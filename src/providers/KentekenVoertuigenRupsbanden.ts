// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_rupsbanden
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_rupsbanden/3xwf-ince
// Permalink: https://opendata.rdw.nl/d/3xwf-ince
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_rupsbanden
 */
export interface KentekenVoertuigenRupsbanden_ResponseData {
  /**
   * ### Aangedreven rupsband indicator
   *
   * **Type**: Text
   */
  aangedreven_rupsband_indicator?: string;
  /**
   * ### Geremde rupsband indicator
   *
   * **Type**: Text
   */
  geremde_rupsband_indicator?: string;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Rupsband set volgnummer
   *
   * **Type**: Number
   */
  rupsband_set_volgnr?: string;
  /**
   * ### Technisch toelaatbaar maximum massa rupsbandset
   *
   * **Type**: Number
   */
  technisch_toelaatbaar_maximum?: string;
  /**
   * ### Technisch toelaatbaar maximum massa rupsband set minimum
   *
   * **Type**: Number
   */
  technisch_toelaatbaar_maximum_1?: string;
  /**
   * ### Technisch toelaatbaar maximum massa rupsband set maximum
   *
   * **Type**: Number
   */
  technisch_toelaatbaar_maximum_2?: string;
}

/**
 * Fieldnames for **KentekenVoertuigenRupsbanden**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``AangedrevenRupsbandIndicator`` | ``aangedreven_rupsband_indicator`` | _Text_ |
 * | ``GeremdeRupsbandIndicator`` | ``geremde_rupsband_indicator`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``RupsbandSetVolgnr`` | ``rupsband_set_volgnr`` | _Number_ |
 * | ``TechnischToelaatbaarMaximum`` | ``technisch_toelaatbaar_maximum`` | _Number_ |
 * | ``TechnischToelaatbaarMaximum1`` | ``technisch_toelaatbaar_maximum_1`` | _Number_ |
 * | ``TechnischToelaatbaarMaximum2`` | ``technisch_toelaatbaar_maximum_2`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  AangedrevenRupsbandIndicator: FieldObject<DataType.Text>;
  GeremdeRupsbandIndicator: FieldObject<DataType.Text>;
  Kenteken: FieldObject<DataType.Text>;
  RupsbandSetVolgnr: FieldObject<DataType.Number>;
  TechnischToelaatbaarMaximum: FieldObject<DataType.Number>;
  TechnischToelaatbaarMaximum1: FieldObject<DataType.Number>;
  TechnischToelaatbaarMaximum2: FieldObject<DataType.Number>;
} = {
  /**
   * ### Aangedreven rupsband indicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `aangedreven_rupsband_indicator`
   */
  AangedrevenRupsbandIndicator: Field("aangedreven_rupsband_indicator", DataType.Text),
  /**
   * ### Geremde rupsband indicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `geremde_rupsband_indicator`
   */
  GeremdeRupsbandIndicator: Field("geremde_rupsband_indicator", DataType.Text),
  /**
   * ### Kenteken
   *
   * **Type**: Text
   *
   * **Database Column Name**: `kenteken`
   */
  Kenteken: Field("kenteken", DataType.Text),
  /**
   * ### Rupsband set volgnummer
   *
   * **Type**: Number
   *
   * **Database Column Name**: `rupsband_set_volgnr`
   */
  RupsbandSetVolgnr: Field("rupsband_set_volgnr", DataType.Number),
  /**
   * ### Technisch toelaatbaar maximum massa rupsbandset
   *
   * **Type**: Number
   *
   * **Database Column Name**: `technisch_toelaatbaar_maximum`
   */
  TechnischToelaatbaarMaximum: Field("technisch_toelaatbaar_maximum", DataType.Number),
  /**
   * ### Technisch toelaatbaar maximum massa rupsband set minimum
   *
   * **Type**: Number
   *
   * **Database Column Name**: `technisch_toelaatbaar_maximum_1`
   */
  TechnischToelaatbaarMaximum1: Field("technisch_toelaatbaar_maximum_1", DataType.Number),
  /**
   * ### Technisch toelaatbaar maximum massa rupsband set maximum
   *
   * **Type**: Number
   *
   * **Database Column Name**: `technisch_toelaatbaar_maximum_2`
   */
  TechnischToelaatbaarMaximum2: Field("technisch_toelaatbaar_maximum_2", DataType.Number),
};

export const Info = {
  fields: [
    "AangedrevenRupsbandIndicator",
    "GeremdeRupsbandIndicator",
    "Kenteken",
    "RupsbandSetVolgnr",
    "TechnischToelaatbaarMaximum",
    "TechnischToelaatbaarMaximum1",
    "TechnischToelaatbaarMaximum2",
  ],
  dataset: "3xwf-ince",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen_rupsbanden",
  provider_name: "KentekenVoertuigenRupsbanden",
  url:
    "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_rupsbanden/3xwf-ince",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/3xwf-ince",
} as const;

/**
 * ### Open Data RDW: Gekentekende_voertuigen_rupsbanden
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_rupsbanden/3xwf-ince
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/3xwf-ince
 *
 * **Dataset ID:** 3xwf-ince
 *
 * **Category:** Voertuigen
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Gekentekende_voertuigen_rupsbanden dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.AangedrevenRupsbandIndicator, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<KentekenVoertuigenRupsbanden_ResponseData> =>
  createQueryWithDataset<KentekenVoertuigenRupsbanden_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

export const KentekenVoertuigenRupsbanden: {
  RDWQuery: (
    auth?: AuthOpts,
    opts?: Options,
  ) => SodaQuery<KentekenVoertuigenRupsbanden_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
