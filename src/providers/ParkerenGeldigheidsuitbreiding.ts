// *******************************************************
//
// Name: Open Data Parkeren: GELDIGHEIDSUITBREIDING
//
// Een uitbreiding van het gebied waarvoor een bepaald parkeer- of verblijfsrecht geldig is.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSUITBREIDING/8ff3-rxrk
// Permalink: https://opendata.rdw.nl/d/8ff3-rxrk
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.3/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.3/mod.ts";
export {
  Order,
  Select,
  SelectAll,
  SelectGreatest,
  SelectLeast,
  SelectRegrIntercept,
  SelectRegrR2,
  SelectRegrSlope,
  SystemFields,
  Where,
} from "https://deno.land/x/soda@0.4.3/mod.ts";
export { DataType, Field };

/**
 * Return Data for Open Data Parkeren: GELDIGHEIDSUITBREIDING
 */
export interface ResponseData {
  /**
   * ### AreaId
   *
   * Identificatiecode van een parkeergebied of - faciliteit.
   *
   * **Type**: Text
   */
  areaid?: string;
  /**
   * ### AreaIdValidityExtension
   *
   * Identificatiecode van een parkeergebied of - faciliteit waarnaar een uitbreiding van de geldigheid voor  parkeer of verblijfsrechten van toepassing is.
   *
   * **Type**: Text
   */
  areaidvalidityextension?: string;
  /**
   * ### AreaManagerId
   *
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndValidityExtension
   *
   * Datum en tijd van het einde van een periode waarop een uitbreiding van de geldigheid voor parkeer of verblijfsrechten van toepassing is.
   *
   * **Type**: Text
   */
  endvalidityextension?: string;
  /**
   * ### StartValidityExtension
   *
   * Datum en tijd van het begin van een periode waarop een uitbreiding van de geldigheid voor parkeer of verblijfsrechten van toepassing is.
   *
   * **Type**: Text
   */
  startvalidityextension?: string;
  /**
   * ### UsageId
   *
   * Identificatiecode van het gebruiksdoel dat geldt voor een  parkeergebied of -faciliteit. Gebruiksdoelen kennen een hierarchie.
   *
   * **Type**: Text
   */
  usageid?: string;
  /**
   * ### ValidityExtensionType
   *
   * Indicator die aangeeft of gebiedsuitbreidingen voor een bepaald gebruiksdoel overervend zijn. Het NPR onderscheid twee typen:
   * O = Overervend: Uitbreidingen worden vanuit vorige relaties meegenomen naar de volgende, bv. als gebied A uitbreidt naar B en gebied B uitbreidt naar C, dan is hiermee een recht uit gebied A impliciet ook geldig in gebied C.
   * N = Niet overervend: Elke uitbreiding wordt expliciet aangegeven, bv. als Gebied A uitbreidt naar B en gebied B uitbreidt naar C en het is de bedoeling dat gebied A ook uitbreidt naar C, dan moet de relatie van gebied A naar gebied C expliciet gelegd worden.
   *
   * **Type**: Text
   */
  validityextensiontype?: string;
}

/**
 * Fieldnames for **ParkerenGeldigheidsuitbreiding**
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areaidvalidityextension`` | ``areaidvalidityextension`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Endvalidityextension`` | ``endvalidityextension`` | _Text_ |
 * | ``Startvalidityextension`` | ``startvalidityextension`` | _Text_ |
 * | ``Usageid`` | ``usageid`` | _Text_ |
 * | ``Validityextensiontype`` | ``validityextensiontype`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### AreaId
   *
   * Identificatiecode van een parkeergebied of - faciliteit.
   *
   * **Type**: Text
   */
  Areaid: FieldObject<DataType.Text>;
  /**
   * ### AreaIdValidityExtension
   *
   * Identificatiecode van een parkeergebied of - faciliteit waarnaar een uitbreiding van de geldigheid voor  parkeer of verblijfsrechten van toepassing is.
   *
   * **Type**: Text
   */
  Areaidvalidityextension: FieldObject<DataType.Text>;
  /**
   * ### AreaManagerId
   *
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  Areamanagerid: FieldObject<DataType.Number>;
  /**
   * ### EndValidityExtension
   *
   * Datum en tijd van het einde van een periode waarop een uitbreiding van de geldigheid voor parkeer of verblijfsrechten van toepassing is.
   *
   * **Type**: Text
   */
  Endvalidityextension: FieldObject<DataType.Text>;
  /**
   * ### StartValidityExtension
   *
   * Datum en tijd van het begin van een periode waarop een uitbreiding van de geldigheid voor parkeer of verblijfsrechten van toepassing is.
   *
   * **Type**: Text
   */
  Startvalidityextension: FieldObject<DataType.Text>;
  /**
   * ### UsageId
   *
   * Identificatiecode van het gebruiksdoel dat geldt voor een  parkeergebied of -faciliteit. Gebruiksdoelen kennen een hierarchie.
   *
   * **Type**: Text
   */
  Usageid: FieldObject<DataType.Text>;
  /**
   * ### ValidityExtensionType
   *
   * Indicator die aangeeft of gebiedsuitbreidingen voor een bepaald gebruiksdoel overervend zijn. Het NPR onderscheid twee typen:
   * O = Overervend: Uitbreidingen worden vanuit vorige relaties meegenomen naar de volgende, bv. als gebied A uitbreidt naar B en gebied B uitbreidt naar C, dan is hiermee een recht uit gebied A impliciet ook geldig in gebied C.
   * N = Niet overervend: Elke uitbreiding wordt expliciet aangegeven, bv. als Gebied A uitbreidt naar B en gebied B uitbreidt naar C en het is de bedoeling dat gebied A ook uitbreidt naar C, dan moet de relatie van gebied A naar gebied C expliciet gelegd worden.
   *
   * **Type**: Text
   */
  Validityextensiontype: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Areaid: Field("areaid", DataType.Text),
  Areaidvalidityextension: Field("areaidvalidityextension", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Endvalidityextension: Field("endvalidityextension", DataType.Text),
  Startvalidityextension: Field("startvalidityextension", DataType.Text),
  Usageid: Field("usageid", DataType.Text),
  Validityextensiontype: Field("validityextensiontype", DataType.Text),
};

export const Info = {
  fields: [
    "Areaid",
    "Areaidvalidityextension",
    "Areamanagerid",
    "Endvalidityextension",
    "Startvalidityextension",
    "Usageid",
    "Validityextensiontype",
  ],
  dataset: "8ff3-rxrk",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GELDIGHEIDSUITBREIDING",
  provider_name: "ParkerenGeldigheidsuitbreiding",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSUITBREIDING/8ff3-rxrk",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/8ff3-rxrk",
};

/**
 * ### Open Data Parkeren: GELDIGHEIDSUITBREIDING
 * Een uitbreiding van het gebied waarvoor een bepaald parkeer- of verblijfsrecht geldig is.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSUITBREIDING/8ff3-rxrk
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/8ff3-rxrk
 *
 * **Dataset ID:** 8ff3-rxrk
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
