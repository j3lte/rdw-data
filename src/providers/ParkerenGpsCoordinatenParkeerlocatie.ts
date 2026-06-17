// *******************************************************
//
// Name: Open Data Parkeren: GPS-COÖRDINATEN PARKEERLOCATIE
//
// Een geografische locatie van een verkooppunt of van een in- of uitgang van een parkeergebied. De coördinaten zijn in WGS 84 (EPSG: 4326).
//
// Category: Parkeren
// Tags: gps-coördinaten, parkeerlocatie, parkeren
// License: Unknown
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GPS-COÖRDINATEN-PARKEERLOCATIE/k3dr-ge3w
// Permalink: https://opendata.rdw.nl/d/k3dr-ge3w
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2025-02-05T15:10:11.000Z
// Structure last updated: 2025-03-03T02:09:58.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

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
export const Fields: {
  Enddatelocation: FieldObject<DataType.Text>;
  Latitude: FieldObject<DataType.Number>;
  Locationreference: FieldObject<DataType.Number>;
  Locationreferencetype: FieldObject<DataType.Text>;
  Longitude: FieldObject<DataType.Number>;
  Startdatelocation: FieldObject<DataType.Text>;
} = {
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

/**
 * Dataset metadata for **ParkerenGpsCoordinatenParkeerlocatie**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
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
  url:
    "https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GPS-COÖRDINATEN-PARKEERLOCATIE/k3dr-ge3w",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/k3dr-ge3w",
  category: "Parkeren",
  tags: ["gps-coördinaten", "parkeerlocatie", "parkeren"],
  license: "Unknown",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2025-02-05T15:10:11.000Z",
  metadata_updated_at: "2025-03-03T02:09:58.000Z",
} as const;

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
 * **Tags:** gps-coördinaten, parkeerlocatie, parkeren
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Published:** 2025-02-05T15:10:11.000Z
 *
 * **Structure last updated:** 2025-03-03T02:09:58.000Z
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
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<ParkerenGpsCoordinatenParkeerlocatie_ResponseData> =>
  createQueryWithDataset<ParkerenGpsCoordinatenParkeerlocatie_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

/**
 * **Open Data Parkeren: GPS-COÖRDINATEN PARKEERLOCATIE**
 * Een geografische locatie van een verkooppunt of van een in- of uitgang van een parkeergebied. De coördinaten zijn in WGS 84 (EPSG: 4326).
 *
 * Provider for the Open Data Parkeren: GPS-COÖRDINATEN PARKEERLOCATIE dataset. Bundles:
 * - {@link ParkerenGpsCoordinatenParkeerlocatie.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link ParkerenGpsCoordinatenParkeerlocatie.Fields} — the queryable field definitions
 * - {@link ParkerenGpsCoordinatenParkeerlocatie.Info} — dataset metadata
 *
 * **Category:** Parkeren
 *
 * **Tags:** gps-coördinaten, parkeerlocatie, parkeren
 *
 * **License:** Unknown (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** k3dr-ge3w
 *
 * **URL:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GPS-COÖRDINATEN-PARKEERLOCATIE/k3dr-ge3w
 *
 * **Published:** 2025-02-05T15:10:11.000Z
 *
 * **Structure last updated:** 2025-03-03T02:09:58.000Z
 *
 * @example
 * ```ts
 * const { data } = await ParkerenGpsCoordinatenParkeerlocatie.RDWQuery()
 *   .where(Where.like(ParkerenGpsCoordinatenParkeerlocatie.Fields.Enddatelocation, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const ParkerenGpsCoordinatenParkeerlocatie = {
  RDWQuery,
  Fields,
  Info,
};
