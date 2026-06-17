// *******************************************************
//
// Name: Open Data Parkeren: PARKEERADRES
//
// Een adres van een gebiedsbeheerder of een in- of uitgang van een parkeergebied.
//
// Category: Parkeren
// Tags: adres, parkeren
// License: Unknown
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERADRES/ygq4-hh5q
// Permalink: https://opendata.rdw.nl/d/ygq4-hh5q
// Owner: Open data team RDW
// Creator: Open data team RDW
// Published: 2025-02-05T15:15:42.000Z
// Structure last updated: 2025-03-03T02:11:09.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: PARKEERADRES
 */
export interface ParkerenParkeeradres_ResponseData {
  /**
   * ### Country
   *
   * Landnaam.
   *
   * **Type**: Text
   */
  country?: string;
  /**
   * ### EmailAddress
   *
   * Emailadres.
   *
   * **Type**: Text
   */
  emailaddress?: string;
  /**
   * ### FaxNumber
   *
   * Faxnummer.
   *
   * **Type**: Text
   */
  faxnumber?: string;
  /**
   * ### HouseNumber
   *
   * Huisnummer.
   *
   * **Type**: Text
   */
  housenumber?: string;
  /**
   * ### ParkingAddressReference
   *
   * Verwijzing naar een gebiedsbeheerder of een in- of uitgang waarbij een adres is geregistreerd. De indicatoren in ParkingAddressReferenceType bepalen welke van de mogelijkheden van toepassing is.
   *
   * **Type**: Number
   */
  parkingaddressreference?: string;
  /**
   * ### ParkingAddressReferenceType
   *
   * Een aanduiding of de PARK-ADRES-REF de sleutel van een gebiedsbeheerder of een in- of uitgang bevat. GEB: gebiedsbeheerder. I-O: in- of uitgang.
   *
   * **Type**: Text
   */
  parkingaddressreferencetype?: string;
  /**
   * ### ParkingAddressType
   *
   * Het soort adres dat een parkeer adres typeert. Mogelijke waarden: A: Administratief adres. F: feitelijk adres. P: postadres.
   *
   * **Type**: Text
   */
  parkingaddresstype?: string;
  /**
   * ### Place
   *
   * Plaatsnaam.
   *
   * **Type**: Text
   */
  place?: string;
  /**
   * ### Province
   *
   * Provincie of vergelijkbare indeling in het buitenland.
   *
   * **Type**: Text
   */
  province?: string;
  /**
   * ### StreetName
   *
   * Straatnaam.
   *
   * **Type**: Text
   */
  streetname?: string;
  /**
   * ### TelephoneNumber
   *
   * Telefoonnummer.
   *
   * **Type**: Text
   */
  telephonenumber?: string;
  /**
   * ### ZipCode
   *
   * Postcode.
   *
   * **Type**: Text
   */
  zipcode?: string;
}

/**
 * Fieldnames for **ParkerenParkeeradres**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Country`` | ``country`` | _Text_ |
 * | ``Emailaddress`` | ``emailaddress`` | _Text_ |
 * | ``Faxnumber`` | ``faxnumber`` | _Text_ |
 * | ``Housenumber`` | ``housenumber`` | _Text_ |
 * | ``Parkingaddressreference`` | ``parkingaddressreference`` | _Number_ |
 * | ``Parkingaddressreferencetype`` | ``parkingaddressreferencetype`` | _Text_ |
 * | ``Parkingaddresstype`` | ``parkingaddresstype`` | _Text_ |
 * | ``Place`` | ``place`` | _Text_ |
 * | ``Province`` | ``province`` | _Text_ |
 * | ``Streetname`` | ``streetname`` | _Text_ |
 * | ``Telephonenumber`` | ``telephonenumber`` | _Text_ |
 * | ``Zipcode`` | ``zipcode`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Country: FieldObject<DataType.Text>;
  Emailaddress: FieldObject<DataType.Text>;
  Faxnumber: FieldObject<DataType.Text>;
  Housenumber: FieldObject<DataType.Text>;
  Parkingaddressreference: FieldObject<DataType.Number>;
  Parkingaddressreferencetype: FieldObject<DataType.Text>;
  Parkingaddresstype: FieldObject<DataType.Text>;
  Place: FieldObject<DataType.Text>;
  Province: FieldObject<DataType.Text>;
  Streetname: FieldObject<DataType.Text>;
  Telephonenumber: FieldObject<DataType.Text>;
  Zipcode: FieldObject<DataType.Text>;
} = {
  /**
   * ### Country
   *
   * Landnaam.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `country`
   */
  Country: Field("country", DataType.Text),
  /**
   * ### EmailAddress
   *
   * Emailadres.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emailaddress`
   */
  Emailaddress: Field("emailaddress", DataType.Text),
  /**
   * ### FaxNumber
   *
   * Faxnummer.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `faxnumber`
   */
  Faxnumber: Field("faxnumber", DataType.Text),
  /**
   * ### HouseNumber
   *
   * Huisnummer.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `housenumber`
   */
  Housenumber: Field("housenumber", DataType.Text),
  /**
   * ### ParkingAddressReference
   *
   * Verwijzing naar een gebiedsbeheerder of een in- of uitgang waarbij een adres is geregistreerd. De indicatoren in ParkingAddressReferenceType bepalen welke van de mogelijkheden van toepassing is.
   *
   * **Type**: Number
   *
   * **Database Column Name**: `parkingaddressreference`
   */
  Parkingaddressreference: Field("parkingaddressreference", DataType.Number),
  /**
   * ### ParkingAddressReferenceType
   *
   * Een aanduiding of de PARK-ADRES-REF de sleutel van een gebiedsbeheerder of een in- of uitgang bevat. GEB: gebiedsbeheerder. I-O: in- of uitgang.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `parkingaddressreferencetype`
   */
  Parkingaddressreferencetype: Field("parkingaddressreferencetype", DataType.Text),
  /**
   * ### ParkingAddressType
   *
   * Het soort adres dat een parkeer adres typeert. Mogelijke waarden: A: Administratief adres. F: feitelijk adres. P: postadres.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `parkingaddresstype`
   */
  Parkingaddresstype: Field("parkingaddresstype", DataType.Text),
  /**
   * ### Place
   *
   * Plaatsnaam.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `place`
   */
  Place: Field("place", DataType.Text),
  /**
   * ### Province
   *
   * Provincie of vergelijkbare indeling in het buitenland.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `province`
   */
  Province: Field("province", DataType.Text),
  /**
   * ### StreetName
   *
   * Straatnaam.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `streetname`
   */
  Streetname: Field("streetname", DataType.Text),
  /**
   * ### TelephoneNumber
   *
   * Telefoonnummer.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `telephonenumber`
   */
  Telephonenumber: Field("telephonenumber", DataType.Text),
  /**
   * ### ZipCode
   *
   * Postcode.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `zipcode`
   */
  Zipcode: Field("zipcode", DataType.Text),
};

/**
 * Dataset metadata for **ParkerenParkeeradres**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Country",
    "Emailaddress",
    "Faxnumber",
    "Housenumber",
    "Parkingaddressreference",
    "Parkingaddressreferencetype",
    "Parkingaddresstype",
    "Place",
    "Province",
    "Streetname",
    "Telephonenumber",
    "Zipcode",
  ],
  dataset: "ygq4-hh5q",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: PARKEERADRES",
  provider_name: "ParkerenParkeeradres",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERADRES/ygq4-hh5q",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/ygq4-hh5q",
  category: "Parkeren",
  tags: ["adres", "parkeren"],
  license: "Unknown",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2025-02-05T15:15:42.000Z",
  metadata_updated_at: "2025-03-03T02:11:09.000Z",
} as const;

/**
 * ### Open Data Parkeren: PARKEERADRES
 * Een adres van een gebiedsbeheerder of een in- of uitgang van een parkeergebied.
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERADRES/ygq4-hh5q
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/ygq4-hh5q
 *
 * **Dataset ID:** ygq4-hh5q
 *
 * **Category:** Parkeren
 *
 * **Tags:** adres, parkeren
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Published:** 2025-02-05T15:15:42.000Z
 *
 * **Structure last updated:** 2025-03-03T02:11:09.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: PARKEERADRES dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Country, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ParkerenParkeeradres_ResponseData> =>
  createQueryWithDataset<ParkerenParkeeradres_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data Parkeren: PARKEERADRES**
 * Een adres van een gebiedsbeheerder of een in- of uitgang van een parkeergebied.
 *
 * Provider for the Open Data Parkeren: PARKEERADRES dataset. Bundles:
 * - {@link ParkerenParkeeradres.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenParkeeradres.Fields} — the queryable field definitions
 * - {@link ParkerenParkeeradres.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Tags:** adres, parkeren
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** ygq4-hh5q
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERADRES/ygq4-hh5q
 *
 * **Published:** 2025-02-05T15:15:42.000Z
 *
 * **Structure last updated:** 2025-03-03T02:11:09.000Z
 *
 * @example
 * ```ts
 * const { data } = await ParkerenParkeeradres.RDWQuery()
 *   .where(Where.like(ParkerenParkeeradres.Fields.Country, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenParkeeradres = {
  RDWQuery,
  Fields,
  Info,
};
