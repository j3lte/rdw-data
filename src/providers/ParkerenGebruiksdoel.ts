// *******************************************************
//
// Name: Open Data Parkeren: GEBRUIKSDOEL
//
// Een voertuiggerelateerde gereguleerde bestemming van een gebied. Voorbeelden: betaald parkeren, vergunning, blauwe zone, etc.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBRUIKSDOEL/qidm-7mkf
// Permalink: https://opendata.rdw.nl/d/qidm-7mkf
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
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
 * Return Data for Open Data Parkeren: GEBRUIKSDOEL
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
   * ### EndDateUsageId
   *
   * Eerste dag waarop een gebruiksdoel niet meer gehanteerd wordt
   *
   * **Type**: Number
   */
  enddateusageid?: string;
  /**
   * ### SpecificationIndicator
   *
   * Indicator die aangeeft of het gebruiksdoel al dan niet verbijzonderd mag worden. De gebruiksdoelen die landelijk gebruikt worden (door alle rechtverwervers in alle aangesloten gemeenten) mogen niet verder verbijzonderd  worden, gebruiksdoelen die binnen n gebiedsbeheerder gebruikt worden wel. De codering is: J: dit gebruiksdoel mag verbijzonderd worden N: dit gebruiksdoel mag NIET verbijzonderd worden.
   *
   * **Type**: Text
   */
  specificationindicator?: string;
  /**
   * ### StartDateUsageId
   *
   * Datum vanaf wanneer een gebruiksdoel gehanteerd wordt
   *
   * **Type**: Number
   */
  startdateusageid?: string;
  /**
   * ### SuperiorAreaManagerId
   *
   * De identificatie van de gebiedsbeheerder van het gebruiksdoel dat als bovenliggend in de hirarchie is geregistreerd. Standaard is dit dezelfde code als van het gebruiksdoel zelf, maar er kan eventueel verwezen worden naar algemene gebruiksdoelen.
   *
   * **Type**: Number
   */
  superiorareamanagerid?: string;
  /**
   * ### SuperiorUsageId
   *
   * Code van het gebruiksdoel dat bovenliggend is in de hirarchie. Voor een juiste interpretatie moet ook de SuperiorAreaManagerId meegenomen worden.
   *
   * **Type**: Text
   */
  superiorusageid?: string;
  /**
   * ### UsageId
   *
   * Identificatiecode van het gebruiksdoel dat geldt voor een  parkeergebied of -faciliteit. Gebruiksdoelen kennen een hierarchie.
   *
   * **Type**: Text
   */
  usageid?: string;
  /**
   * ### UsageIdDesc
   *
   * Omschrijving van een gebruiksdoel
   *
   * **Type**: Text
   */
  usageiddesc?: string;
}

/**
 * Fieldnames for **ParkerenGebruiksdoel**
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddateusageid`` | ``enddateusageid`` | _Number_ |
 * | ``Specificationindicator`` | ``specificationindicator`` | _Text_ |
 * | ``Startdateusageid`` | ``startdateusageid`` | _Number_ |
 * | ``Superiorareamanagerid`` | ``superiorareamanagerid`` | _Number_ |
 * | ``Superiorusageid`` | ``superiorusageid`` | _Text_ |
 * | ``Usageid`` | ``usageid`` | _Text_ |
 * | ``Usageiddesc`` | ``usageiddesc`` | _Text_ |
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
   * ### EndDateUsageId
   *
   * Eerste dag waarop een gebruiksdoel niet meer gehanteerd wordt
   *
   * **Type**: Number
   */
  Enddateusageid: FieldObject<DataType.Number>;
  /**
   * ### SpecificationIndicator
   *
   * Indicator die aangeeft of het gebruiksdoel al dan niet verbijzonderd mag worden. De gebruiksdoelen die landelijk gebruikt worden (door alle rechtverwervers in alle aangesloten gemeenten) mogen niet verder verbijzonderd  worden, gebruiksdoelen die binnen n gebiedsbeheerder gebruikt worden wel. De codering is: J: dit gebruiksdoel mag verbijzonderd worden N: dit gebruiksdoel mag NIET verbijzonderd worden.
   *
   * **Type**: Text
   */
  Specificationindicator: FieldObject<DataType.Text>;
  /**
   * ### StartDateUsageId
   *
   * Datum vanaf wanneer een gebruiksdoel gehanteerd wordt
   *
   * **Type**: Number
   */
  Startdateusageid: FieldObject<DataType.Number>;
  /**
   * ### SuperiorAreaManagerId
   *
   * De identificatie van de gebiedsbeheerder van het gebruiksdoel dat als bovenliggend in de hirarchie is geregistreerd. Standaard is dit dezelfde code als van het gebruiksdoel zelf, maar er kan eventueel verwezen worden naar algemene gebruiksdoelen.
   *
   * **Type**: Number
   */
  Superiorareamanagerid: FieldObject<DataType.Number>;
  /**
   * ### SuperiorUsageId
   *
   * Code van het gebruiksdoel dat bovenliggend is in de hirarchie. Voor een juiste interpretatie moet ook de SuperiorAreaManagerId meegenomen worden.
   *
   * **Type**: Text
   */
  Superiorusageid: FieldObject<DataType.Text>;
  /**
   * ### UsageId
   *
   * Identificatiecode van het gebruiksdoel dat geldt voor een  parkeergebied of -faciliteit. Gebruiksdoelen kennen een hierarchie.
   *
   * **Type**: Text
   */
  Usageid: FieldObject<DataType.Text>;
  /**
   * ### UsageIdDesc
   *
   * Omschrijving van een gebruiksdoel
   *
   * **Type**: Text
   */
  Usageiddesc: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddateusageid: Field("enddateusageid", DataType.Number),
  Specificationindicator: Field("specificationindicator", DataType.Text),
  Startdateusageid: Field("startdateusageid", DataType.Number),
  Superiorareamanagerid: Field("superiorareamanagerid", DataType.Number),
  Superiorusageid: Field("superiorusageid", DataType.Text),
  Usageid: Field("usageid", DataType.Text),
  Usageiddesc: Field("usageiddesc", DataType.Text),
};

export const Info = {
  fields: [
    "Areamanagerid",
    "Enddateusageid",
    "Specificationindicator",
    "Startdateusageid",
    "Superiorareamanagerid",
    "Superiorusageid",
    "Usageid",
    "Usageiddesc",
  ],
  dataset: "qidm-7mkf",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GEBRUIKSDOEL",
  provider_name: "ParkerenGebruiksdoel",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBRUIKSDOEL/qidm-7mkf",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/qidm-7mkf",
};

/**
 * ### Open Data Parkeren: GEBRUIKSDOEL
 * Een voertuiggerelateerde gereguleerde bestemming van een gebied. Voorbeelden: betaald parkeren, vergunning, blauwe zone, etc.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBRUIKSDOEL/qidm-7mkf
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/qidm-7mkf
 *
 * **Dataset ID:** qidm-7mkf
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
