// *******************************************************
//
// Name: Open Data Parkeren: CONTACTPERSOON
//
// Geregistreerde contactpersonen van een parkeergebied of faciliteit
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-CONTACTPERSOON/rbew-yhyc
// Permalink: https://opendata.rdw.nl/d/rbew-yhyc
// Owner: Open data team RDW
// Creator: Open data team RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data Parkeren: CONTACTPERSOON
 */
export interface ParkerenContactpersoon_ResponseData {
  /**
   * ### ContactPersonId
   *
   * Identificatiecode van de contactpersoon
   *
   * **Type**: Text
   */
  contactpersonid?: string;
  /**
   * ### EmailAddress
   *
   * E-mailadres waaronder een contactpersoon bereikbaar is
   *
   * **Type**: Text
   */
  emailaddress?: string;
  /**
   * ### FaxNumber
   *
   * Faxnummer waaronder een contactpersoon bereikbaar is.
   *
   * **Type**: Text
   */
  faxnumber?: string;
  /**
   * ### FirstName
   *
   * Voornaam van een contactpersoon.
   *
   * **Type**: Text
   */
  firstname?: string;
  /**
   * ### Name
   *
   * Achternaam inclusief voorzetsels van een contactpersoon.
   *
   * **Type**: Text
   */
  name?: string;
  /**
   * ### PhoneNumber
   *
   * Telefoonnummer waaronder een contactpersoon bereikbaar is.
   *
   * **Type**: Text
   */
  phonenumber?: string;
  /**
   * ### Position
   *
   * Functie van een contactpersoon.
   *
   * **Type**: Text
   */
  position?: string;
}

/**
 * Fieldnames for **ParkerenContactpersoon**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Contactpersonid`` | ``contactpersonid`` | _Text_ |
 * | ``Emailaddress`` | ``emailaddress`` | _Text_ |
 * | ``Faxnumber`` | ``faxnumber`` | _Text_ |
 * | ``Firstname`` | ``firstname`` | _Text_ |
 * | ``Name`` | ``name`` | _Text_ |
 * | ``Phonenumber`` | ``phonenumber`` | _Text_ |
 * | ``Position`` | ``position`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Contactpersonid: FieldObject<DataType.Text>;
  Emailaddress: FieldObject<DataType.Text>;
  Faxnumber: FieldObject<DataType.Text>;
  Firstname: FieldObject<DataType.Text>;
  Name: FieldObject<DataType.Text>;
  Phonenumber: FieldObject<DataType.Text>;
  Position: FieldObject<DataType.Text>;
} = {
  /**
   * ### ContactPersonId
   *
   * Identificatiecode van de contactpersoon
   *
   * **Type**: Text
   *
   * **Database Column Name**: `contactpersonid`
   */
  Contactpersonid: Field("contactpersonid", DataType.Text),
  /**
   * ### EmailAddress
   *
   * E-mailadres waaronder een contactpersoon bereikbaar is
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emailaddress`
   */
  Emailaddress: Field("emailaddress", DataType.Text),
  /**
   * ### FaxNumber
   *
   * Faxnummer waaronder een contactpersoon bereikbaar is.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `faxnumber`
   */
  Faxnumber: Field("faxnumber", DataType.Text),
  /**
   * ### FirstName
   *
   * Voornaam van een contactpersoon.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `firstname`
   */
  Firstname: Field("firstname", DataType.Text),
  /**
   * ### Name
   *
   * Achternaam inclusief voorzetsels van een contactpersoon.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `name`
   */
  Name: Field("name", DataType.Text),
  /**
   * ### PhoneNumber
   *
   * Telefoonnummer waaronder een contactpersoon bereikbaar is.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `phonenumber`
   */
  Phonenumber: Field("phonenumber", DataType.Text),
  /**
   * ### Position
   *
   * Functie van een contactpersoon.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `position`
   */
  Position: Field("position", DataType.Text),
};

/**
 * Dataset metadata for **ParkerenContactpersoon**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Contactpersonid",
    "Emailaddress",
    "Faxnumber",
    "Firstname",
    "Name",
    "Phonenumber",
    "Position",
  ],
  dataset: "rbew-yhyc",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: CONTACTPERSOON",
  provider_name: "ParkerenContactpersoon",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-CONTACTPERSOON/rbew-yhyc",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/rbew-yhyc",
} as const;

/**
 * ### Open Data Parkeren: CONTACTPERSOON
 * Geregistreerde contactpersonen van een parkeergebied of faciliteit
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-CONTACTPERSOON/rbew-yhyc
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/rbew-yhyc
 *
 * **Dataset ID:** rbew-yhyc
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: CONTACTPERSOON dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Contactpersonid, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ParkerenContactpersoon_ResponseData> =>
  createQueryWithDataset<ParkerenContactpersoon_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data Parkeren: CONTACTPERSOON**
 * Geregistreerde contactpersonen van een parkeergebied of faciliteit
 *
 * Provider for the Open Data Parkeren: CONTACTPERSOON dataset. Bundles:
 * - {@link ParkerenContactpersoon.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenContactpersoon.Fields} — the queryable field definitions
 * - {@link ParkerenContactpersoon.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Dataset ID:** rbew-yhyc
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-CONTACTPERSOON/rbew-yhyc
 *
 * @example
 * ```ts
 * const { data } = await ParkerenContactpersoon.RDWQuery()
 *   .where(Where.like(ParkerenContactpersoon.Fields.Contactpersonid, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenContactpersoon = {
  RDWQuery,
  Fields,
  Info,
};
