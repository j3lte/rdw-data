// *******************************************************
//
// Name: Open Data Parkeren: TARIEFBEREKENING
//
// De berekeningswijze waarmee het bedrag van een recht wordt bepaald. Elke gebiedsbeheerder kan zijn eigen voorgedefinieerde tarieven aanleggen.
//
// Category: Parkeren
// Tags: parkeren, tariefberekening
// License: Unknown
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y
// Permalink: https://opendata.rdw.nl/d/nfzq-8g7y
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2025-02-05T15:39:39.000Z
// Structure last updated: 2025-03-03T02:15:50.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: TARIEFBEREKENING
 */
export interface ParkerenTariefberekening_ResponseData {
  /**
   * ### AreaManagerId
   *
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
  areamanagerid?: string;
  /**
   * ### EndDateFare
   *
   * Datum tot wanneer een bepaalde tariefberekening geldig is.
   *
   * **Type**: Number
   */
  enddatefare?: string;
  /**
   * ### FareCalculationCode
   *
   * Code van een bepaalde tariefberekening bij een gebiedsbeheerder.
   *
   * **Type**: Text
   */
  farecalculationcode?: string;
  /**
   * ### FareCalculationDesc
   *
   * De omschrijving van een tariefberekening.
   *
   * **Type**: Text
   */
  farecalculationdesc?: string;
  /**
   * ### PeriodNameTariff
   *
   * De naam van een tariefberekening.
   *
   * **Type**: Text
   */
  periodnametariff?: string;
  /**
   * ### StartDateFare
   *
   * Datum waarop een bepaalde tariefberekening ingaat.
   *
   * **Type**: Number
   */
  startdatefare?: string;
  /**
   * ### VATPercentage
   *
   * Het BTW percentage dat voor een bepaalde tariefberekening van toepassing is. De bedragen worden inclusief BTW vermeld, dus bij een percentage van 21% is de BTW 21/121 van het bedrag.
   *
   * **Type**: Number
   */
  vatpercentage?: string;
}

/**
 * Fieldnames for **ParkerenTariefberekening**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddatefare`` | ``enddatefare`` | _Number_ |
 * | ``Farecalculationcode`` | ``farecalculationcode`` | _Text_ |
 * | ``Farecalculationdesc`` | ``farecalculationdesc`` | _Text_ |
 * | ``Periodnametariff`` | ``periodnametariff`` | _Text_ |
 * | ``Startdatefare`` | ``startdatefare`` | _Number_ |
 * | ``Vatpercentage`` | ``vatpercentage`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Areamanagerid: FieldObject<DataType.Number>;
  Enddatefare: FieldObject<DataType.Number>;
  Farecalculationcode: FieldObject<DataType.Text>;
  Farecalculationdesc: FieldObject<DataType.Text>;
  Periodnametariff: FieldObject<DataType.Text>;
  Startdatefare: FieldObject<DataType.Number>;
  Vatpercentage: FieldObject<DataType.Number>;
} = {
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
   * ### EndDateFare
   *
   * Datum tot wanneer een bepaalde tariefberekening geldig is.
   *
   * **Type**: Number
   *
   * **Database Column Name**: `enddatefare`
   */
  Enddatefare: Field("enddatefare", DataType.Number),
  /**
   * ### FareCalculationCode
   *
   * Code van een bepaalde tariefberekening bij een gebiedsbeheerder.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `farecalculationcode`
   */
  Farecalculationcode: Field("farecalculationcode", DataType.Text),
  /**
   * ### FareCalculationDesc
   *
   * De omschrijving van een tariefberekening.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `farecalculationdesc`
   */
  Farecalculationdesc: Field("farecalculationdesc", DataType.Text),
  /**
   * ### PeriodNameTariff
   *
   * De naam van een tariefberekening.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `periodnametariff`
   */
  Periodnametariff: Field("periodnametariff", DataType.Text),
  /**
   * ### StartDateFare
   *
   * Datum waarop een bepaalde tariefberekening ingaat.
   *
   * **Type**: Number
   *
   * **Database Column Name**: `startdatefare`
   */
  Startdatefare: Field("startdatefare", DataType.Number),
  /**
   * ### VATPercentage
   *
   * Het BTW percentage dat voor een bepaalde tariefberekening van toepassing is. De bedragen worden inclusief BTW vermeld, dus bij een percentage van 21% is de BTW 21/121 van het bedrag.
   *
   * **Type**: Number
   *
   * **Database Column Name**: `vatpercentage`
   */
  Vatpercentage: Field("vatpercentage", DataType.Number),
};

/**
 * Dataset metadata for **ParkerenTariefberekening**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Areamanagerid",
    "Enddatefare",
    "Farecalculationcode",
    "Farecalculationdesc",
    "Periodnametariff",
    "Startdatefare",
    "Vatpercentage",
  ],
  dataset: "nfzq-8g7y",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: TARIEFBEREKENING",
  provider_name: "ParkerenTariefberekening",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/nfzq-8g7y",
  category: "Parkeren",
  tags: ["parkeren", "tariefberekening"],
  license: "Unknown",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2025-02-05T15:39:39.000Z",
  metadata_updated_at: "2025-03-03T02:15:50.000Z",
} as const;

/**
 * ### Open Data Parkeren: TARIEFBEREKENING
 * De berekeningswijze waarmee het bedrag van een recht wordt bepaald. Elke gebiedsbeheerder kan zijn eigen voorgedefinieerde tarieven aanleggen.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/nfzq-8g7y
 *
 * **Dataset ID:** nfzq-8g7y
 *
 * **Category:** Parkeren
 *
 * **Tags:** parkeren, tariefberekening
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Published:** 2025-02-05T15:39:39.000Z
 *
 * **Structure last updated:** 2025-03-03T02:15:50.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: TARIEFBEREKENING dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Areamanagerid, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ParkerenTariefberekening_ResponseData> =>
  createQueryWithDataset<ParkerenTariefberekening_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data Parkeren: TARIEFBEREKENING**
 * De berekeningswijze waarmee het bedrag van een recht wordt bepaald. Elke gebiedsbeheerder kan zijn eigen voorgedefinieerde tarieven aanleggen.
 *
 * Provider for the Open Data Parkeren: TARIEFBEREKENING dataset. Bundles:
 * - {@link ParkerenTariefberekening.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenTariefberekening.Fields} — the queryable field definitions
 * - {@link ParkerenTariefberekening.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Tags:** parkeren, tariefberekening
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** nfzq-8g7y
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y
 *
 * **Published:** 2025-02-05T15:39:39.000Z
 *
 * **Structure last updated:** 2025-03-03T02:15:50.000Z
 *
 * @example
 * ```ts
 * const { data } = await ParkerenTariefberekening.RDWQuery()
 *   .where(Where.like(ParkerenTariefberekening.Fields.Areamanagerid, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenTariefberekening = {
  RDWQuery,
  Fields,
  Info,
};
