// *******************************************************
//
// Name: Open Data Parkeren: BETAALMETHODE GEBIED
//
// Een mogelijke manier om te betalen voor het parkeren in een parkeergebied, -garage of -terrein.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-GEBIED/r3rs-ibz5
// Permalink: https://opendata.rdw.nl/d/r3rs-ibz5
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: BETAALMETHODE GEBIED
 */
export interface ParkerenBetaalmethodeGebied_ResponseData {
  /**
   * ### AreaId
   *
   * Identificatiecode van een parkeergebied of - faciliteit.
   *
   * **Type**: Text
   */
  areaid?: string;
  /**
   * ### AreaManagerId
   *
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDatePaymentMethod
   *
   * Datum en tijd van het einde van een periode waarin een betaalmethode voor een bepaald parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Text
   */
  enddate?: string;
  /**
   * ### PaymentAtExit
   *
   * Indicator die aangeeft of een betaalmethode voor het parkeren in een bepaald parkeergebied of -faciliteit zich bij de uitgang bevind.
   *
   * **Type**: Number
   */
  paymentatexit?: string;
  /**
   * ### PaymentAtPaystation
   *
   * Indicator die aangeeft of een betaalmethode voor het parkeren in een bepaald parkeergebied of faciliteit beschikbaar is bij een verkooppunt.
   *
   * **Type**: Number
   */
  paymentatpaystation?: string;
  /**
   * ### PaymentMethod
   *
   * Betaalmethode die gebruikt kan worden voor het betalen van parkeren binnen een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   */
  paymentmethod?: string;
  /**
   * ### StartDatePaymentMethod
   *
   * Datum en tijd van het begin van een periode waarin een betaalmethode voor een bepaald parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Text
   */
  startdate?: string;
}

/**
 * Fieldnames for **ParkerenBetaalmethodeGebied**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddate`` | ``enddate`` | _Text_ |
 * | ``Paymentatexit`` | ``paymentatexit`` | _Number_ |
 * | ``Paymentatpaystation`` | ``paymentatpaystation`` | _Number_ |
 * | ``Paymentmethod`` | ``paymentmethod`` | _Text_ |
 * | ``Startdate`` | ``startdate`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Areaid: FieldObject<DataType.Text>;
  Areamanagerid: FieldObject<DataType.Number>;
  Enddate: FieldObject<DataType.Text>;
  Paymentatexit: FieldObject<DataType.Number>;
  Paymentatpaystation: FieldObject<DataType.Number>;
  Paymentmethod: FieldObject<DataType.Text>;
  Startdate: FieldObject<DataType.Text>;
} = {
  /**
   * ### AreaId
   *
   * Identificatiecode van een parkeergebied of - faciliteit.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `areaid`
   */
  Areaid: Field("areaid", DataType.Text),
  /**
   * ### AreaManagerId
   *
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   *
   * **Database Column Name**: `areamanagerid`
   */
  Areamanagerid: Field("areamanagerid", DataType.Number),
  /**
   * ### EndDatePaymentMethod
   *
   * Datum en tijd van het einde van een periode waarin een betaalmethode voor een bepaald parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `enddate`
   */
  Enddate: Field("enddate", DataType.Text),
  /**
   * ### PaymentAtExit
   *
   * Indicator die aangeeft of een betaalmethode voor het parkeren in een bepaald parkeergebied of -faciliteit zich bij de uitgang bevind.
   *
   * **Type**: Number
   *
   * **Database Column Name**: `paymentatexit`
   */
  Paymentatexit: Field("paymentatexit", DataType.Number),
  /**
   * ### PaymentAtPaystation
   *
   * Indicator die aangeeft of een betaalmethode voor het parkeren in een bepaald parkeergebied of faciliteit beschikbaar is bij een verkooppunt.
   *
   * **Type**: Number
   *
   * **Database Column Name**: `paymentatpaystation`
   */
  Paymentatpaystation: Field("paymentatpaystation", DataType.Number),
  /**
   * ### PaymentMethod
   *
   * Betaalmethode die gebruikt kan worden voor het betalen van parkeren binnen een parkeergebied of -faciliteit.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `paymentmethod`
   */
  Paymentmethod: Field("paymentmethod", DataType.Text),
  /**
   * ### StartDatePaymentMethod
   *
   * Datum en tijd van het begin van een periode waarin een betaalmethode voor een bepaald parkeergebied of -faciliteit geldig is.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `startdate`
   */
  Startdate: Field("startdate", DataType.Text),
};

/**
 * Dataset metadata for **ParkerenBetaalmethodeGebied**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Areaid",
    "Areamanagerid",
    "Enddate",
    "Paymentatexit",
    "Paymentatpaystation",
    "Paymentmethod",
    "Startdate",
  ],
  dataset: "r3rs-ibz5",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: BETAALMETHODE GEBIED",
  provider_name: "ParkerenBetaalmethodeGebied",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-GEBIED/r3rs-ibz5",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/r3rs-ibz5",
} as const;

/**
 * ### Open Data Parkeren: BETAALMETHODE GEBIED
 * Een mogelijke manier om te betalen voor het parkeren in een parkeergebied, -garage of -terrein.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-GEBIED/r3rs-ibz5
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/r3rs-ibz5
 *
 * **Dataset ID:** r3rs-ibz5
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: BETAALMETHODE GEBIED dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Areaid, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ParkerenBetaalmethodeGebied_ResponseData> =>
  createQueryWithDataset<ParkerenBetaalmethodeGebied_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

/**
 * **Open Data Parkeren: BETAALMETHODE GEBIED**
 * Een mogelijke manier om te betalen voor het parkeren in een parkeergebied, -garage of -terrein.
 *
 * Provider for the Open Data Parkeren: BETAALMETHODE GEBIED dataset. Bundles:
 * - {@link ParkerenBetaalmethodeGebied.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenBetaalmethodeGebied.Fields} — the queryable field definitions
 * - {@link ParkerenBetaalmethodeGebied.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Dataset ID:** r3rs-ibz5
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-GEBIED/r3rs-ibz5
 *
 * @example
 * ```ts
 * const { data } = await ParkerenBetaalmethodeGebied.RDWQuery()
 *   .where(Where.like(ParkerenBetaalmethodeGebied.Fields.Areaid, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenBetaalmethodeGebied = {
  RDWQuery,
  Fields,
  Info,
};
