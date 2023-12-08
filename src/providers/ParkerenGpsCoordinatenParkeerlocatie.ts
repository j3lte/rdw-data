// *******************************************************
//
// Name: Open Data Parkeren: GPS-COÖRDINATEN PARKEERLOCATIE
//
// Een geografische locatie van een verkooppunt of van een in- of uitgang van een parkeergebied. De coördinaten zijn in WGS 84 (EPSG: 4326).
//
// Category: Parkeren
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GPS-COÖRDINATEN-PARKEERLOCATIE/k3dr-ge3w
// Permalink: https://opendata.rdw.nl/d/k3dr-ge3w
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data Parkeren: GPS-COÖRDINATEN PARKEERLOCATIE
 */
export interface ParkerenGpsCoordinatenParkeerlocatie_ResponseData {
  /**
   * ### EndDateLocation
   * 
   * Einddatum en -tijd van de periode waarin de gegevens van een parkeerlocatie geldig zijn.
   *
   * **Type**: Text
   */
  enddatelocation?: string;
  /**
   * ### Latitude
   * 
   * Breedtegraad van de locatie in WGS84 (EPSG: 4326).
   *
   * **Type**: Number
   */
  latitude?: string;
  /**
   * ### LocationReference
   * 
   * Verwijzing naar de in- of uitgang van een parkeergebied waar een locatie betrekking op heeft of naar een verkooppunt. De indicatoren in LocationReferenceType bepalen welke van de twee mogelijkheden van toepassing is.
   *
   * **Type**: Number
   */
  locationreference?: string;
  /**
   * ### LocationReferenceType
   * 
   * Een aanduiding of de LOCATIE-REF de sleutel van een verkooppunt of een in- of uitgang bevat. VKP: verkooppunt. I-O: in- of uitgang.
   *
   * **Type**: Text
   */
  locationreferencetype?: string;
  /**
   * ### Longitude
   * 
   * De lengtegraad van een locatie in WGS84 (EPSG: 4326).
   *
   * **Type**: Number
   */
  longitude?: string;
  /**
   * ### StartDateLocation
   * 
   * Begindatum en -tijd van de periode waarin de gegevens van een parkeerlocatie geldig zijn.
   *
   * **Type**: Text
   */
  startdatelocation?: string;
}

/**
 * Fieldnames for **ParkerenGpsCoordinatenParkeerlocatie**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Enddatelocation`` | ``enddatelocation`` | _Text_ |
 * | ``Latitude`` | ``latitude`` | _Number_ |
 * | ``Locationreference`` | ``locationreference`` | _Number_ |
 * | ``Locationreferencetype`` | ``locationreferencetype`` | _Text_ |
 * | ``Longitude`` | ``longitude`` | _Number_ |
 * | ``Startdatelocation`` | ``startdatelocation`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### EndDateLocation
  * 
  * Einddatum en -tijd van de periode waarin de gegevens van een parkeerlocatie geldig zijn.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `enddatelocation`
  */
  Enddatelocation: Field("enddatelocation", DataType.Text),
  /**
  * ### Latitude
  * 
  * Breedtegraad van de locatie in WGS84 (EPSG: 4326).
  *
  * **Type**: Number
  *
  * **Database Column Name**: `latitude`
  */
  Latitude: Field("latitude", DataType.Number),
  /**
  * ### LocationReference
  * 
  * Verwijzing naar de in- of uitgang van een parkeergebied waar een locatie betrekking op heeft of naar een verkooppunt. De indicatoren in LocationReferenceType bepalen welke van de twee mogelijkheden van toepassing is.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `locationreference`
  */
  Locationreference: Field("locationreference", DataType.Number),
  /**
  * ### LocationReferenceType
  * 
  * Een aanduiding of de LOCATIE-REF de sleutel van een verkooppunt of een in- of uitgang bevat. VKP: verkooppunt. I-O: in- of uitgang.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `locationreferencetype`
  */
  Locationreferencetype: Field("locationreferencetype", DataType.Text),
  /**
  * ### Longitude
  * 
  * De lengtegraad van een locatie in WGS84 (EPSG: 4326).
  *
  * **Type**: Number
  *
  * **Database Column Name**: `longitude`
  */
  Longitude: Field("longitude", DataType.Number),
  /**
  * ### StartDateLocation
  * 
  * Begindatum en -tijd van de periode waarin de gegevens van een parkeerlocatie geldig zijn.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `startdatelocation`
  */
  Startdatelocation: Field("startdatelocation", DataType.Text),
};

export const Info = {
  fields: [
    "Enddatelocation",
    "Latitude",
    "Locationreference",
    "Locationreferencetype",
    "Longitude",
    "Startdatelocation",
  ],
  dataset: "k3dr-ge3w",
  domain: "opendata.rdw.nl",
  full_name: "Open Data Parkeren: GPS-COÖRDINATEN PARKEERLOCATIE",
  provider_name: "ParkerenGpsCoordinatenParkeerlocatie",
  url: "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GPS-COÖRDINATEN-PARKEERLOCATIE/k3dr-ge3w",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/k3dr-ge3w",
}

/**
 * ### Open Data Parkeren: GPS-COÖRDINATEN PARKEERLOCATIE
 * Een geografische locatie van een verkooppunt of van een in- of uitgang van een parkeergebied. De coördinaten zijn in WGS 84 (EPSG: 4326).
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GPS-COÖRDINATEN-PARKEERLOCATIE/k3dr-ge3w
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/k3dr-ge3w
 *
 * **Dataset ID:** k3dr-ge3w
 *
 * **Category:** Parkeren
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data Parkeren: GPS-COÖRDINATEN PARKEERLOCATIE dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Enddatelocation, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ParkerenGpsCoordinatenParkeerlocatie_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ParkerenGpsCoordinatenParkeerlocatie = {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<ParkerenGpsCoordinatenParkeerlocatie_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
