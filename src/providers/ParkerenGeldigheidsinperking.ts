// *******************************************************
//
// Name: Open Data Parkeren: GELDIGHEIDSINPERKING
//
// Een etmaal- en/of tijdvenster dat de geldigheid van een parkeer- of verblijfrecht inperkt. Het einde van een inperking van de geldigheid wordt alleen geregistreerd bij de uitbreiding van het gebied waarvoor dat recht geldt.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSINPERKING/ynha-fuwp
// Permalink: https://opendata.rdw.nl/d/ynha-fuwp
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";
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
} from "https://deno.land/x/soda@0.4.4/mod.ts";
export { DataType, Field };

/**
 * Return Data for Open Data Parkeren: GELDIGHEIDSINPERKING
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
   * De code van het gebied waarvoor een uitbreiding van de geldigheid voor bepaalde parkeer of verblijfsrechten van toepassing is.
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
   * ### EndDayTimeFrameValidityRestriction
   *
   * Eind etmaalnaam van een venster dat een uitbreiding van de geldigheid voor parkeer- en verblijfrechten weer inperkt. De eind etmaalnaam is een waarde tot en met. Als begin en eind etmaalnaam dezelfde zijn dan betekent dit dat de inperking alleen voor  dat etmaal geldig is.
   *
   * **Type**: Text
   */
  enddaytimeframevalidityrestriction?: string;
  /**
   * ### EndDurationValidityRestriction
   *
   * Eindtijd van een tijdvenster dat een uitbreiding van de geldigheid voor parkeer- en verblijfrechten weer inperkt. De eindtijd is een waarde tot, de hoogst mogelijke waarde is 2400. De eindtijd moet altijd groter zijn dan de begintijd.
   *
   * **Type**: Number
   */
  enddurationvalidityrestriction?: string;
  /**
   * ### IndexNumberValidityRestriction
   *
   * Volgnummer dat verschillende etmaal- of tijdvensters onderscheidt die dezelfde uitbreiding van geldgheid voor parkeer- en verblijfsrechten weer inperken.
   *
   * **Type**: Number
   */
  indexnumbervalidityrestriction?: string;
  /**
   * ### StartDayTimeFrameValidityRestriction
   *
   * Begin etmaalnaam van een venster dat een uitbreiding van de geldigheid voor parkeer- en verblijfrechten weer inperkt.
   *
   * **Type**: Text
   */
  startdaytimeframevalidityrestriction?: string;
  /**
   * ### StartDurationValidityRestriction
   *
   * Begintijd van een tijdvenster dat een uitbreiding van de geldigheid voor parkeer- en verblijfrechten weer inperkt. De laagste mogelijke waarde is 0000.
   *
   * **Type**: Number
   */
  startdurationvalidityrestriction?: string;
  /**
   * ### StartValidityExtension
   *
   * Begindatum en -tijd van de periode dat een bepaalde uitbreiding van de geldigheid voor parkeer of verblijfsrechten voor een gebied van toepassing is.
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
}

/**
 * Fieldnames for **ParkerenGeldigheidsinperking**
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areaidvalidityextension`` | ``areaidvalidityextension`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Number_ |
 * | ``Enddaytimeframevalidityrestriction`` | ``enddaytimeframevalidityrestriction`` | _Text_ |
 * | ``Enddurationvalidityrestriction`` | ``enddurationvalidityrestriction`` | _Number_ |
 * | ``Indexnumbervalidityrestriction`` | ``indexnumbervalidityrestriction`` | _Number_ |
 * | ``Startdaytimeframevalidityrestriction`` | ``startdaytimeframevalidityrestriction`` | _Text_ |
 * | ``Startdurationvalidityrestriction`` | ``startdurationvalidityrestriction`` | _Number_ |
 * | ``Startvalidityextension`` | ``startvalidityextension`` | _Text_ |
 * | ``Usageid`` | ``usageid`` | _Text_ |
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
   * De code van het gebied waarvoor een uitbreiding van de geldigheid voor bepaalde parkeer of verblijfsrechten van toepassing is.
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
   * ### EndDayTimeFrameValidityRestriction
   *
   * Eind etmaalnaam van een venster dat een uitbreiding van de geldigheid voor parkeer- en verblijfrechten weer inperkt. De eind etmaalnaam is een waarde tot en met. Als begin en eind etmaalnaam dezelfde zijn dan betekent dit dat de inperking alleen voor  dat etmaal geldig is.
   *
   * **Type**: Text
   */
  Enddaytimeframevalidityrestriction: FieldObject<DataType.Text>;
  /**
   * ### EndDurationValidityRestriction
   *
   * Eindtijd van een tijdvenster dat een uitbreiding van de geldigheid voor parkeer- en verblijfrechten weer inperkt. De eindtijd is een waarde tot, de hoogst mogelijke waarde is 2400. De eindtijd moet altijd groter zijn dan de begintijd.
   *
   * **Type**: Number
   */
  Enddurationvalidityrestriction: FieldObject<DataType.Number>;
  /**
   * ### IndexNumberValidityRestriction
   *
   * Volgnummer dat verschillende etmaal- of tijdvensters onderscheidt die dezelfde uitbreiding van geldgheid voor parkeer- en verblijfsrechten weer inperken.
   *
   * **Type**: Number
   */
  Indexnumbervalidityrestriction: FieldObject<DataType.Number>;
  /**
   * ### StartDayTimeFrameValidityRestriction
   *
   * Begin etmaalnaam van een venster dat een uitbreiding van de geldigheid voor parkeer- en verblijfrechten weer inperkt.
   *
   * **Type**: Text
   */
  Startdaytimeframevalidityrestriction: FieldObject<DataType.Text>;
  /**
   * ### StartDurationValidityRestriction
   *
   * Begintijd van een tijdvenster dat een uitbreiding van de geldigheid voor parkeer- en verblijfrechten weer inperkt. De laagste mogelijke waarde is 0000.
   *
   * **Type**: Number
   */
  Startdurationvalidityrestriction: FieldObject<DataType.Number>;
  /**
   * ### StartValidityExtension
   *
   * Begindatum en -tijd van de periode dat een bepaalde uitbreiding van de geldigheid voor parkeer of verblijfsrechten voor een gebied van toepassing is.
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
}

export const Fields: IFields = {
  Areaid: Field("areaid", DataType.Text),
  Areaidvalidityextension: Field("areaidvalidityextension", DataType.Text),
  Areamanagerid: Field("areamanagerid", DataType.Number),
  Enddaytimeframevalidityrestriction: Field("enddaytimeframevalidityrestriction", DataType.Text),
  Enddurationvalidityrestriction: Field("enddurationvalidityrestriction", DataType.Number),
  Indexnumbervalidityrestriction: Field("indexnumbervalidityrestriction", DataType.Number),
  Startdaytimeframevalidityrestriction: Field(
    "startdaytimeframevalidityrestriction",
    DataType.Text,
  ),
  Startdurationvalidityrestriction: Field("startdurationvalidityrestriction", DataType.Number),
  Startvalidityextension: Field("startvalidityextension", DataType.Text),
  Usageid: Field("usageid", DataType.Text),
};

export const Info = {
  fields: [
    "Areaid",
    "Areaidvalidityextension",
    "Areamanagerid",
    "Enddaytimeframevalidityrestriction",
    "Enddurationvalidityrestriction",
    "Indexnumbervalidityrestriction",
    "Startdaytimeframevalidityrestriction",
    "Startdurationvalidityrestriction",
    "Startvalidityextension",
    "Usageid",
  ],
  dataset: "ynha-fuwp",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GELDIGHEIDSINPERKING",
  provider_name: "ParkerenGeldigheidsinperking",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSINPERKING/ynha-fuwp",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/ynha-fuwp",
};

/**
 * ### Open Data Parkeren: GELDIGHEIDSINPERKING
 * Een etmaal- en/of tijdvenster dat de geldigheid van een parkeer- of verblijfrecht inperkt. Het einde van een inperking van de geldigheid wordt alleen geregistreerd bij de uitbreiding van het gebied waarvoor dat recht geldt.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSINPERKING/ynha-fuwp
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/ynha-fuwp
 *
 * **Dataset ID:** ynha-fuwp
 *
 * **Category:** Parkeren
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
