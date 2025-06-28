// *******************************************************
//
// Name: Gebieden
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Gebieden/b2fs-9ymw
// Permalink: https://opendata.rdw.nl/d/b2fs-9ymw
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Gebieden
 */
export interface Gebieden_ResponseData {
  /**
   * ### 01_NAAM
   *
   * **Type**: Text
   */
  _01_naam?: string;
  /**
   * ### 02_CODE
   *
   * **Type**: Text
   */
  _02_code?: string;
  /**
   * ### 03_URL
   *
   * **Type**: Text
   */
  _03_url?: string;
  /**
   * ### 04_UUID
   *
   * **Type**: Text
   */
  _04_uuid?: string;
  /**
   * ### 05_GEBCODE
   *
   * **Type**: Text
   */
  _05_gebcode?: string;
  /**
   * ### 06_GEBOMS
   *
   * **Type**: Text
   */
  _06_geboms?: string;
  /**
   * ### 07_REGCODE
   *
   * **Type**: Text
   */
  _07_regcode?: string;
  /**
   * ### 08_REGOMS
   *
   * **Type**: Text
   */
  _08_regoms?: string;
  /**
   * ### 09_PRIJS
   *
   * **Type**: Text
   */
  _09_prijs?: string;
  /**
   * ### 10_SRT_REG
   *
   * **Type**: Text
   */
  _10_srt_reg?: string;
  /**
   * ### 11_MA
   *
   * **Type**: Text
   */
  _11_ma?: string;
  /**
   * ### 12_DI
   *
   * **Type**: Text
   */
  _12_di?: string;
  /**
   * ### 13_WO
   *
   * **Type**: Text
   */
  _13_wo?: string;
  /**
   * ### 14_DO
   *
   * **Type**: Text
   */
  _14_do?: string;
  /**
   * ### 15_VR
   *
   * **Type**: Text
   */
  _15_vr?: string;
  /**
   * ### 16_ZA
   *
   * **Type**: Text
   */
  _16_za?: string;
  /**
   * ### 17_ZO
   *
   * **Type**: Text
   */
  _17_zo?: string;
  /**
   * ### 18_MAXIMUM
   *
   * **Type**: Text
   */
  _18_maximum?: string;
  /**
   * ### 19_PARK_PL
   *
   * **Type**: Text
   */
  _19_park_pl?: string;
  /**
   * ### 20_OPLAADP
   *
   * **Type**: Text
   */
  _20_oplaadp?: string;
  /**
   * ### 21_ROLST
   *
   * **Type**: Text
   */
  _21_rolst?: string;
  /**
   * ### 22_HOOGTE
   *
   * **Type**: Text
   */
  _22_hoogte?: string;
  /**
   * ### 23_VOETG_I
   *
   * **Type**: Text
   */
  _23_voetg_i?: string;
  /**
   * ### 24_VOETG_U
   *
   * **Type**: Text
   */
  _24_voetg_u?: string;
  /**
   * ### 25_VRTG_I
   *
   * **Type**: Text
   */
  _25_vrtg_i?: string;
  /**
   * ### 26_VRTG_U
   *
   * **Type**: Text
   */
  _26_vrtg_u?: string;
  /**
   * ### 27_UIT_IND
   *
   * **Type**: Text
   */
  _27_uit_ind?: string;
  /**
   * ### 28_JAAROPE
   *
   * **Type**: Text
   */
  _28_jaarope?: string;
  /**
   * ### 29_BETAAL
   *
   * **Type**: Text
   */
  _29_betaal?: string;
  /**
   * ### 30_NAAM
   *
   * **Type**: Text
   */
  _30_naam?: string;
  /**
   * ### 31_FUNCTIE
   *
   * **Type**: Text
   */
  _31_functie?: string;
  /**
   * ### 32_TEL
   *
   * **Type**: Text
   */
  _32_tel?: string;
  /**
   * ### 33_E_MAIL
   *
   * **Type**: Text
   */
  _33_e_mail?: string;
  /**
   * ### 34_OPEN
   *
   * **Type**: Text
   */
  _34_open?: string;
  /**
   * ### 35_VRIJ
   *
   * **Type**: Text
   */
  _35_vrij?: string;
  /**
   * ### 36_VRIJOPL
   *
   * **Type**: Text
   */
  _36_vrijopl?: string;
  /**
   * ### 37_VOL
   *
   * **Type**: Text
   */
  _37_vol?: string;
  /**
   * ### _issues___
   *
   * **Type**: Text
   */
  _issues___?: string;
  /**
   * ### _issues_00
   *
   * **Type**: Text
   */
  _issues_00?: string;
  /**
   * ### _issues_01
   *
   * **Type**: Text
   */
  _issues_01?: string;
  /**
   * ### _issues_02
   *
   * **Type**: Text
   */
  _issues_02?: string;
  /**
   * ### ActueleInf
   *
   * **Type**: Text
   */
  actuele_inf?: string;
  /**
   * ### LocationRe
   *
   * **Type**: Text
   */
  location_re?: string;
  /**
   * ### socrata_id
   *
   * **Type**: Text
   */
  socrata_id?: string;
  /**
   * ### the_geom
   *
   * **Type**: MultiPolygon
   */
  the_geom?: unknown;
  /**
   * ### UsageId
   *
   * **Type**: Text
   */
  usage_id?: string;
}

/**
 * Fieldnames for **Gebieden**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``N01Naam`` | ``_01_naam`` | _Text_ |
 * | ``N02Code`` | ``_02_code`` | _Text_ |
 * | ``N03Url`` | ``_03_url`` | _Text_ |
 * | ``N04Uuid`` | ``_04_uuid`` | _Text_ |
 * | ``N05Gebcode`` | ``_05_gebcode`` | _Text_ |
 * | ``N06Geboms`` | ``_06_geboms`` | _Text_ |
 * | ``N07Regcode`` | ``_07_regcode`` | _Text_ |
 * | ``N08Regoms`` | ``_08_regoms`` | _Text_ |
 * | ``N09Prijs`` | ``_09_prijs`` | _Text_ |
 * | ``N10SrtReg`` | ``_10_srt_reg`` | _Text_ |
 * | ``N11Ma`` | ``_11_ma`` | _Text_ |
 * | ``N12Di`` | ``_12_di`` | _Text_ |
 * | ``N13Wo`` | ``_13_wo`` | _Text_ |
 * | ``N14Do`` | ``_14_do`` | _Text_ |
 * | ``N15Vr`` | ``_15_vr`` | _Text_ |
 * | ``N16Za`` | ``_16_za`` | _Text_ |
 * | ``N17Zo`` | ``_17_zo`` | _Text_ |
 * | ``N18Maximum`` | ``_18_maximum`` | _Text_ |
 * | ``N19ParkPl`` | ``_19_park_pl`` | _Text_ |
 * | ``N20Oplaadp`` | ``_20_oplaadp`` | _Text_ |
 * | ``N21Rolst`` | ``_21_rolst`` | _Text_ |
 * | ``N22Hoogte`` | ``_22_hoogte`` | _Text_ |
 * | ``N23VoetgI`` | ``_23_voetg_i`` | _Text_ |
 * | ``N24VoetgU`` | ``_24_voetg_u`` | _Text_ |
 * | ``N25VrtgI`` | ``_25_vrtg_i`` | _Text_ |
 * | ``N26VrtgU`` | ``_26_vrtg_u`` | _Text_ |
 * | ``N27UitInd`` | ``_27_uit_ind`` | _Text_ |
 * | ``N28Jaarope`` | ``_28_jaarope`` | _Text_ |
 * | ``N29Betaal`` | ``_29_betaal`` | _Text_ |
 * | ``N30Naam`` | ``_30_naam`` | _Text_ |
 * | ``N31Functie`` | ``_31_functie`` | _Text_ |
 * | ``N32Tel`` | ``_32_tel`` | _Text_ |
 * | ``N33EMail`` | ``_33_e_mail`` | _Text_ |
 * | ``N34Open`` | ``_34_open`` | _Text_ |
 * | ``N35Vrij`` | ``_35_vrij`` | _Text_ |
 * | ``N36Vrijopl`` | ``_36_vrijopl`` | _Text_ |
 * | ``N37Vol`` | ``_37_vol`` | _Text_ |
 * | ``Issues`` | ``_issues___`` | _Text_ |
 * | ``Issues00`` | ``_issues_00`` | _Text_ |
 * | ``Issues01`` | ``_issues_01`` | _Text_ |
 * | ``Issues02`` | ``_issues_02`` | _Text_ |
 * | ``ActueleInf`` | ``actuele_inf`` | _Text_ |
 * | ``LocationRe`` | ``location_re`` | _Text_ |
 * | ``SocrataId`` | ``socrata_id`` | _Text_ |
 * | ``TheGeom`` | ``the_geom`` | _MultiPolygon_ |
 * | ``UsageId`` | ``usage_id`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### 01_NAAM
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_01_naam`
   */
  N01Naam: Field("_01_naam", DataType.Text),
  /**
   * ### 02_CODE
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_02_code`
   */
  N02Code: Field("_02_code", DataType.Text),
  /**
   * ### 03_URL
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_03_url`
   */
  N03Url: Field("_03_url", DataType.Text),
  /**
   * ### 04_UUID
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_04_uuid`
   */
  N04Uuid: Field("_04_uuid", DataType.Text),
  /**
   * ### 05_GEBCODE
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_05_gebcode`
   */
  N05Gebcode: Field("_05_gebcode", DataType.Text),
  /**
   * ### 06_GEBOMS
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_06_geboms`
   */
  N06Geboms: Field("_06_geboms", DataType.Text),
  /**
   * ### 07_REGCODE
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_07_regcode`
   */
  N07Regcode: Field("_07_regcode", DataType.Text),
  /**
   * ### 08_REGOMS
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_08_regoms`
   */
  N08Regoms: Field("_08_regoms", DataType.Text),
  /**
   * ### 09_PRIJS
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_09_prijs`
   */
  N09Prijs: Field("_09_prijs", DataType.Text),
  /**
   * ### 10_SRT_REG
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_10_srt_reg`
   */
  N10SrtReg: Field("_10_srt_reg", DataType.Text),
  /**
   * ### 11_MA
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_11_ma`
   */
  N11Ma: Field("_11_ma", DataType.Text),
  /**
   * ### 12_DI
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_12_di`
   */
  N12Di: Field("_12_di", DataType.Text),
  /**
   * ### 13_WO
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_13_wo`
   */
  N13Wo: Field("_13_wo", DataType.Text),
  /**
   * ### 14_DO
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_14_do`
   */
  N14Do: Field("_14_do", DataType.Text),
  /**
   * ### 15_VR
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_15_vr`
   */
  N15Vr: Field("_15_vr", DataType.Text),
  /**
   * ### 16_ZA
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_16_za`
   */
  N16Za: Field("_16_za", DataType.Text),
  /**
   * ### 17_ZO
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_17_zo`
   */
  N17Zo: Field("_17_zo", DataType.Text),
  /**
   * ### 18_MAXIMUM
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_18_maximum`
   */
  N18Maximum: Field("_18_maximum", DataType.Text),
  /**
   * ### 19_PARK_PL
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_19_park_pl`
   */
  N19ParkPl: Field("_19_park_pl", DataType.Text),
  /**
   * ### 20_OPLAADP
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_20_oplaadp`
   */
  N20Oplaadp: Field("_20_oplaadp", DataType.Text),
  /**
   * ### 21_ROLST
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_21_rolst`
   */
  N21Rolst: Field("_21_rolst", DataType.Text),
  /**
   * ### 22_HOOGTE
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_22_hoogte`
   */
  N22Hoogte: Field("_22_hoogte", DataType.Text),
  /**
   * ### 23_VOETG_I
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_23_voetg_i`
   */
  N23VoetgI: Field("_23_voetg_i", DataType.Text),
  /**
   * ### 24_VOETG_U
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_24_voetg_u`
   */
  N24VoetgU: Field("_24_voetg_u", DataType.Text),
  /**
   * ### 25_VRTG_I
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_25_vrtg_i`
   */
  N25VrtgI: Field("_25_vrtg_i", DataType.Text),
  /**
   * ### 26_VRTG_U
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_26_vrtg_u`
   */
  N26VrtgU: Field("_26_vrtg_u", DataType.Text),
  /**
   * ### 27_UIT_IND
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_27_uit_ind`
   */
  N27UitInd: Field("_27_uit_ind", DataType.Text),
  /**
   * ### 28_JAAROPE
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_28_jaarope`
   */
  N28Jaarope: Field("_28_jaarope", DataType.Text),
  /**
   * ### 29_BETAAL
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_29_betaal`
   */
  N29Betaal: Field("_29_betaal", DataType.Text),
  /**
   * ### 30_NAAM
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_30_naam`
   */
  N30Naam: Field("_30_naam", DataType.Text),
  /**
   * ### 31_FUNCTIE
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_31_functie`
   */
  N31Functie: Field("_31_functie", DataType.Text),
  /**
   * ### 32_TEL
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_32_tel`
   */
  N32Tel: Field("_32_tel", DataType.Text),
  /**
   * ### 33_E_MAIL
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_33_e_mail`
   */
  N33EMail: Field("_33_e_mail", DataType.Text),
  /**
   * ### 34_OPEN
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_34_open`
   */
  N34Open: Field("_34_open", DataType.Text),
  /**
   * ### 35_VRIJ
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_35_vrij`
   */
  N35Vrij: Field("_35_vrij", DataType.Text),
  /**
   * ### 36_VRIJOPL
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_36_vrijopl`
   */
  N36Vrijopl: Field("_36_vrijopl", DataType.Text),
  /**
   * ### 37_VOL
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_37_vol`
   */
  N37Vol: Field("_37_vol", DataType.Text),
  /**
   * ### _issues___
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_issues___`
   */
  Issues: Field("_issues___", DataType.Text),
  /**
   * ### _issues_00
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_issues_00`
   */
  Issues00: Field("_issues_00", DataType.Text),
  /**
   * ### _issues_01
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_issues_01`
   */
  Issues01: Field("_issues_01", DataType.Text),
  /**
   * ### _issues_02
   *
   * **Type**: Text
   *
   * **Database Column Name**: `_issues_02`
   */
  Issues02: Field("_issues_02", DataType.Text),
  /**
   * ### ActueleInf
   *
   * **Type**: Text
   *
   * **Database Column Name**: `actuele_inf`
   */
  ActueleInf: Field("actuele_inf", DataType.Text),
  /**
   * ### LocationRe
   *
   * **Type**: Text
   *
   * **Database Column Name**: `location_re`
   */
  LocationRe: Field("location_re", DataType.Text),
  /**
   * ### socrata_id
   *
   * **Type**: Text
   *
   * **Database Column Name**: `socrata_id`
   */
  SocrataId: Field("socrata_id", DataType.Text),
  /**
   * ### the_geom
   *
   * **Type**: MultiPolygon
   *
   * **Database Column Name**: `the_geom`
   */
  TheGeom: Field("the_geom", DataType.MultiPolygon),
  /**
   * ### UsageId
   *
   * **Type**: Text
   *
   * **Database Column Name**: `usage_id`
   */
  UsageId: Field("usage_id", DataType.Text),
};

export const Info = {
  fields: [
    "N01Naam",
    "N02Code",
    "N03Url",
    "N04Uuid",
    "N05Gebcode",
    "N06Geboms",
    "N07Regcode",
    "N08Regoms",
    "N09Prijs",
    "N10SrtReg",
    "N11Ma",
    "N12Di",
    "N13Wo",
    "N14Do",
    "N15Vr",
    "N16Za",
    "N17Zo",
    "N18Maximum",
    "N19ParkPl",
    "N20Oplaadp",
    "N21Rolst",
    "N22Hoogte",
    "N23VoetgI",
    "N24VoetgU",
    "N25VrtgI",
    "N26VrtgU",
    "N27UitInd",
    "N28Jaarope",
    "N29Betaal",
    "N30Naam",
    "N31Functie",
    "N32Tel",
    "N33EMail",
    "N34Open",
    "N35Vrij",
    "N36Vrijopl",
    "N37Vol",
    "Issues",
    "Issues00",
    "Issues01",
    "Issues02",
    "ActueleInf",
    "LocationRe",
    "SocrataId",
    "TheGeom",
    "UsageId",
  ],
  dataset: "b2fs-9ymw",
  domain: "opendata.rdw.nl",
  full_name: "Gebieden",
  provider_name: "Gebieden",
  url: "https://opendata.rdw.nl/Parkeren/Gebieden/b2fs-9ymw",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/b2fs-9ymw",
};

/**
 * ### Gebieden
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Gebieden/b2fs-9ymw
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/b2fs-9ymw
 *
 * **Dataset ID:** b2fs-9ymw
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Gebieden dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.N01Naam, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<Gebieden_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const Gebieden: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<Gebieden_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
