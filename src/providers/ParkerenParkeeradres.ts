// *******************************************************
//
// Name: Open Data Parkeren: PARKEERADRES
//
// Een adres van een gebiedsbeheerder of een in- of uitgang van een parkeergebied.
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERADRES/ygq4-hh5q
// Permalink: https://opendata.rdw.nl/d/ygq4-hh5q
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

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
export const Fields = {
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
};

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
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ParkerenParkeeradres_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenParkeeradres: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<ParkerenParkeeradres_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
