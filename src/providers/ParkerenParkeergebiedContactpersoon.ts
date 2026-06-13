// *******************************************************
//
// Name: Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON
//
// Informatie over de koppeling tussen een parkeergebied of -faciliteit en een contactpersoon
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED-CONTACTPERSOON/69hx-t283
// Permalink: https://opendata.rdw.nl/d/69hx-t283
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON
 */
export interface ParkerenParkeergebiedContactpersoon_ResponseData {
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
   * **Type**: Text
   */
  areamanagerid?: string;
  /**
   * ### ContactPersonId
   *
   * Identificatiecode van de contactpersoon.
   *
   * **Type**: Text
   */
  contactpersonid?: string;
  /**
   * ### ValidityEndOfPeriod
   *
   * Datum en tijd van het einde van een periode waarin gegevens van
   * een contactpersoon geldig zijn.
   *
   * **Type**: Text
   */
  validityendofperiod?: string;
  /**
   * ### ValidityStartOfPeriod
   *
   * Datum en tijd van het begin van een periode waarin gegevens van
   * een contactpersoon geldig zijn.
   *
   * **Type**: Text
   */
  validitystartofperiod?: string;
}

/**
 * Fieldnames for **ParkerenParkeergebiedContactpersoon**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Areaid`` | ``areaid`` | _Text_ |
 * | ``Areamanagerid`` | ``areamanagerid`` | _Text_ |
 * | ``Contactpersonid`` | ``contactpersonid`` | _Text_ |
 * | ``Validityendofperiod`` | ``validityendofperiod`` | _Text_ |
 * | ``Validitystartofperiod`` | ``validitystartofperiod`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Areaid: FieldObject<DataType.Text>;
  Areamanagerid: FieldObject<DataType.Text>;
  Contactpersonid: FieldObject<DataType.Text>;
  Validityendofperiod: FieldObject<DataType.Text>;
  Validitystartofperiod: FieldObject<DataType.Text>;
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
   * **Type**: Text
   *
   * **Database Column Name**: `areamanagerid`
   */
  Areamanagerid: Field("areamanagerid", DataType.Text),
  /**
   * ### ContactPersonId
   *
   * Identificatiecode van de contactpersoon.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `contactpersonid`
   */
  Contactpersonid: Field("contactpersonid", DataType.Text),
  /**
   * ### ValidityEndOfPeriod
   *
   * Datum en tijd van het einde van een periode waarin gegevens van
   * een contactpersoon geldig zijn.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `validityendofperiod`
   */
  Validityendofperiod: Field("validityendofperiod", DataType.Text),
  /**
   * ### ValidityStartOfPeriod
   *
   * Datum en tijd van het begin van een periode waarin gegevens van
   * een contactpersoon geldig zijn.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `validitystartofperiod`
   */
  Validitystartofperiod: Field("validitystartofperiod", DataType.Text),
};

/**
 * Dataset metadata for **ParkerenParkeergebiedContactpersoon**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Areaid",
    "Areamanagerid",
    "Contactpersonid",
    "Validityendofperiod",
    "Validitystartofperiod",
  ],
  dataset: "69hx-t283",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON",
  provider_name: "ParkerenParkeergebiedContactpersoon",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED-CONTACTPERSOON/69hx-t283",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/69hx-t283",
} as const;

/**
 * ### Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON
 * Informatie over de koppeling tussen een parkeergebied of -faciliteit en een contactpersoon
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED-CONTACTPERSOON/69hx-t283
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/69hx-t283
 *
 * **Dataset ID:** 69hx-t283
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON dataset.
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
): SodaQuery<ParkerenParkeergebiedContactpersoon_ResponseData> =>
  createQueryWithDataset<ParkerenParkeergebiedContactpersoon_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

/**
 * **Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON**
 * Informatie over de koppeling tussen een parkeergebied of -faciliteit en een contactpersoon
 *
 * Provider for the Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON dataset. Bundles:
 * - {@link ParkerenParkeergebiedContactpersoon.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenParkeergebiedContactpersoon.Fields} — the queryable field definitions
 * - {@link ParkerenParkeergebiedContactpersoon.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Dataset ID:** 69hx-t283
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED-CONTACTPERSOON/69hx-t283
 *
 * @example
 * ```ts
 * const { data } = await ParkerenParkeergebiedContactpersoon.RDWQuery()
 *   .where(Where.like(ParkerenParkeergebiedContactpersoon.Fields.Areaid, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenParkeergebiedContactpersoon = {
  RDWQuery,
  Fields,
  Info,
};
