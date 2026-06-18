// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie
//
// Category: Voertuigen
// Tags: carrosserie, kenteken
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie_/jhie-znh9
// Permalink: https://opendata.rdw.nl/d/jhie-znh9
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2024-05-28T14:45:21.000Z
// Structure last updated: 2025-03-05T18:20:11.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie
 */
export interface KentekenVoertuigenCarrosserieSpecificatie_ResponseData {
  /**
   * ### Carrosserie voertuig nummer code volgnummer
   *
   * **Type**: Text
   */
  carrosserie_voertuig_nummer_code_volgnummer?: string;
  /**
   * ### Carrosserie voertuig nummer Europese omschrijving
   *
   * **Type**: Text
   */
  carrosserie_voertuig_nummer_europese_omschrijving?: string;
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Text
   */
  carrosserie_volgnummer?: string;
  /**
   * ### Carrosseriecode
   *
   * Europese codering voor het carrosserietype van een goedgekeurd compleet of voltooid voertuig van de EEG-VRTG-CAT M, N of O.
   * Zie bijlage II van de richtlijn 2007/46/EG voor codering.
   *
   * **Type**: Text
   */
  carrosseriecode?: string;
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
  kenteken?: string;
}

/**
 * Fieldnames for **KentekenVoertuigenCarrosserieSpecificatie**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CarrosserieVoertuigNummerCodeVolgnummer`` | ``carrosserie_voertuig_nummer_code_volgnummer`` | _Text_ |
 * | ``CarrosserieVoertuigNummerEuropeseOmschrijving`` | ``carrosserie_voertuig_nummer_europese_omschrijving`` | _Text_ |
 * | ``CarrosserieVolgnummer`` | ``carrosserie_volgnummer`` | _Text_ |
 * | ``Carrosseriecode`` | ``carrosseriecode`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  CarrosserieVoertuigNummerCodeVolgnummer: FieldObject<DataType.Text>;
  CarrosserieVoertuigNummerEuropeseOmschrijving: FieldObject<DataType.Text>;
  CarrosserieVolgnummer: FieldObject<DataType.Text>;
  Carrosseriecode: FieldObject<DataType.Text>;
  Kenteken: FieldObject<DataType.Text>;
} = {
  /**
   * ### Carrosserie voertuig nummer code volgnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `carrosserie_voertuig_nummer_code_volgnummer`
   */
  CarrosserieVoertuigNummerCodeVolgnummer: Field(
    "carrosserie_voertuig_nummer_code_volgnummer",
    DataType.Text,
  ),
  /**
   * ### Carrosserie voertuig nummer Europese omschrijving
   *
   * **Type**: Text
   *
   * **Database Column Name**: `carrosserie_voertuig_nummer_europese_omschrijving`
   */
  CarrosserieVoertuigNummerEuropeseOmschrijving: Field(
    "carrosserie_voertuig_nummer_europese_omschrijving",
    DataType.Text,
  ),
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `carrosserie_volgnummer`
   */
  CarrosserieVolgnummer: Field("carrosserie_volgnummer", DataType.Text),
  /**
   * ### Carrosseriecode
   *
   * Europese codering voor het carrosserietype van een goedgekeurd compleet of voltooid voertuig van de EEG-VRTG-CAT M, N of O.
   * Zie bijlage II van de richtlijn 2007/46/EG voor codering.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `carrosseriecode`
   */
  Carrosseriecode: Field("carrosseriecode", DataType.Text),
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `kenteken`
   */
  Kenteken: Field("kenteken", DataType.Text),
};

/**
 * Dataset metadata for **KentekenVoertuigenCarrosserieSpecificatie**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "CarrosserieVoertuigNummerCodeVolgnummer",
    "CarrosserieVoertuigNummerEuropeseOmschrijving",
    "CarrosserieVolgnummer",
    "Carrosseriecode",
    "Kenteken",
  ],
  dataset: "jhie-znh9",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie",
  provider_name: "KentekenVoertuigenCarrosserieSpecificatie",
  url:
    "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie_/jhie-znh9",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/jhie-znh9",
  category: "Voertuigen",
  tags: ["carrosserie", "kenteken"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-05-28T14:45:21.000Z",
  metadata_updated_at: "2025-03-05T18:20:11.000Z",
} as const;

/**
 * ### Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie_/jhie-znh9
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/jhie-znh9
 *
 * **Dataset ID:** jhie-znh9
 *
 * **Category:** Voertuigen
 *
 * **Tags:** carrosserie, kenteken
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-05-28T14:45:21.000Z
 *
 * **Structure last updated:** 2025-03-05T18:20:11.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.CarrosserieVoertuigNummerCodeVolgnummer, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<KentekenVoertuigenCarrosserieSpecificatie_ResponseData> =>
  createQueryWithDataset<KentekenVoertuigenCarrosserieSpecificatie_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

/**
 * **Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie**
 *
 * Provider for the Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie dataset. Bundles:
 * - {@link KentekenVoertuigenCarrosserieSpecificatie.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link KentekenVoertuigenCarrosserieSpecificatie.Fields} — the queryable field definitions
 * - {@link KentekenVoertuigenCarrosserieSpecificatie.Info} — dataset metadata
 *
 * **Category:** Voertuigen
 *
 * **Tags:** carrosserie, kenteken
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** jhie-znh9
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie_/jhie-znh9
 *
 * **Published:** 2024-05-28T14:45:21.000Z
 *
 * **Structure last updated:** 2025-03-05T18:20:11.000Z
 *
 * @example
 * ```ts
 * const { data } = await KentekenVoertuigenCarrosserieSpecificatie.RDWQuery()
 *   .where(Where.like(KentekenVoertuigenCarrosserieSpecificatie.Fields.CarrosserieVoertuigNummerCodeVolgnummer, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const KentekenVoertuigenCarrosserieSpecificatie = {
  RDWQuery,
  Fields,
  Info,
};
