// *******************************************************
//
// Name: Open Data Parkeren: TARIEFBEREKENING
//
// De berekeningswijze waarmee het bedrag van een recht wordt bepaald. Elke gebiedsbeheerder kan zijn eigen voorgedefinieerde tarieven aanleggen.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y
// Permalink: https://opendata.rdw.nl/d/nfzq-8g7y
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: TARIEFBEREKENING
 */
export interface ResponseData {
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
export interface IFields {
  /**
   * ### AreaManagerId
   * 
   * Identificatiecode van de gebiedsbeheerder of parkeerexploitant.
   *
   * **Type**: Number
   */
   Areamanagerid: FieldObject<DataType.Number>;
  /**
   * ### EndDateFare
   * 
   * Datum tot wanneer een bepaalde tariefberekening geldig is.
   *
   * **Type**: Number
   */
   Enddatefare: FieldObject<DataType.Number>;
  /**
   * ### FareCalculationCode
   * 
   * Code van een bepaalde tariefberekening bij een gebiedsbeheerder.
   *
   * **Type**: Text
   */
   Farecalculationcode: FieldObject<DataType.Text>;
  /**
   * ### FareCalculationDesc
   * 
   * De omschrijving van een tariefberekening.
   *
   * **Type**: Text
   */
   Farecalculationdesc: FieldObject<DataType.Text>;
  /**
   * ### PeriodNameTariff
   * 
   * De naam van een tariefberekening.
   *
   * **Type**: Text
   */
   Periodnametariff: FieldObject<DataType.Text>;
  /**
   * ### StartDateFare
   * 
   * Datum waarop een bepaalde tariefberekening ingaat.
   *
   * **Type**: Number
   */
   Startdatefare: FieldObject<DataType.Number>;
  /**
   * ### VATPercentage
   * 
   * Het BTW percentage dat voor een bepaalde tariefberekening van toepassing is. De bedragen worden inclusief BTW vermeld, dus bij een percentage van 21% is de BTW 21/121 van het bedrag.
   *
   * **Type**: Number
   */
   Vatpercentage: FieldObject<DataType.Number>;
};

export const Fields: IFields = {
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddatefare: Field("enddatefare", DataType.Number),
  Farecalculationcode: Field("farecalculationcode", DataType.Text),
  Farecalculationdesc: Field("farecalculationdesc", DataType.Text),
  Periodnametariff: Field("periodnametariff", DataType.Text),
  Startdatefare: Field("startdatefare", DataType.Number),
  Vatpercentage: Field("vatpercentage", DataType.Number),
};

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
}

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
