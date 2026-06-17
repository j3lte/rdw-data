// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_carrosserie
//
// Category: Voertuigen
// Tags: kenteken, carrosserie
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie/vezc-m2t6
// Permalink: https://opendata.rdw.nl/d/vezc-m2t6
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2024-05-28T14:53:42.000Z
// Structure last updated: 2025-03-25T22:13:23.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_carrosserie
 */
export interface KentekenVoertuigenCarrosserie_ResponseData {
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Text
   */
  carrosserie_volgnummer?: string;
  /**
   * ### Carrosserietype
   *
   * **Type**: Text
   */
  carrosserietype?: string;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Type Carrosserie Europese omschrijving
   *
   * **Type**: Text
   */
  type_carrosserie_europese_omschrijving?: string;
}

/**
 * Fieldnames for **KentekenVoertuigenCarrosserie**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CarrosserieVolgnummer`` | ``carrosserie_volgnummer`` | _Text_ |
 * | ``Carrosserietype`` | ``carrosserietype`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``TypeCarrosserieEuropeseOmschrijving`` | ``type_carrosserie_europese_omschrijving`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  CarrosserieVolgnummer: FieldObject<DataType.Text>;
  Carrosserietype: FieldObject<DataType.Text>;
  Kenteken: FieldObject<DataType.Text>;
  TypeCarrosserieEuropeseOmschrijving: FieldObject<DataType.Text>;
} = {
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `carrosserie_volgnummer`
   */
  CarrosserieVolgnummer: Field("carrosserie_volgnummer", DataType.Text),
  /**
   * ### Carrosserietype
   *
   * **Type**: Text
   *
   * **Database Column Name**: `carrosserietype`
   */
  Carrosserietype: Field("carrosserietype", DataType.Text),
  /**
   * ### Kenteken
   *
   * **Type**: Text
   *
   * **Database Column Name**: `kenteken`
   */
  Kenteken: Field("kenteken", DataType.Text),
  /**
   * ### Type Carrosserie Europese omschrijving
   *
   * **Type**: Text
   *
   * **Database Column Name**: `type_carrosserie_europese_omschrijving`
   */
  TypeCarrosserieEuropeseOmschrijving: Field(
    "type_carrosserie_europese_omschrijving",
    DataType.Text,
  ),
};

/**
 * Dataset metadata for **KentekenVoertuigenCarrosserie**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "CarrosserieVolgnummer",
    "Carrosserietype",
    "Kenteken",
    "TypeCarrosserieEuropeseOmschrijving",
  ],
  dataset: "vezc-m2t6",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen_carrosserie",
  provider_name: "KentekenVoertuigenCarrosserie",
  url:
    "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie/vezc-m2t6",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/vezc-m2t6",
  category: "Voertuigen",
  tags: ["kenteken", "carrosserie"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-05-28T14:53:42.000Z",
  metadata_updated_at: "2025-03-25T22:13:23.000Z",
} as const;

/**
 * ### Open Data RDW: Gekentekende_voertuigen_carrosserie
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie/vezc-m2t6
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/vezc-m2t6
 *
 * **Dataset ID:** vezc-m2t6
 *
 * **Category:** Voertuigen
 *
 * **Tags:** kenteken, carrosserie
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-05-28T14:53:42.000Z
 *
 * **Structure last updated:** 2025-03-25T22:13:23.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Gekentekende_voertuigen_carrosserie dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.CarrosserieVolgnummer, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<KentekenVoertuigenCarrosserie_ResponseData> =>
  createQueryWithDataset<KentekenVoertuigenCarrosserie_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

/**
 * **Open Data RDW: Gekentekende_voertuigen_carrosserie**
 *
 * Provider for the Open Data RDW: Gekentekende_voertuigen_carrosserie dataset. Bundles:
 * - {@link KentekenVoertuigenCarrosserie.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link KentekenVoertuigenCarrosserie.Fields} — the queryable field definitions
 * - {@link KentekenVoertuigenCarrosserie.Info} — dataset metadata
 *
 * **Category:** Voertuigen
 *
 * **Tags:** kenteken, carrosserie
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** vezc-m2t6
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie/vezc-m2t6
 *
 * **Published:** 2024-05-28T14:53:42.000Z
 *
 * **Structure last updated:** 2025-03-25T22:13:23.000Z
 *
 * @example
 * ```ts
 * const { data } = await KentekenVoertuigenCarrosserie.RDWQuery()
 *   .where(Where.like(KentekenVoertuigenCarrosserie.Fields.CarrosserieVolgnummer, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const KentekenVoertuigenCarrosserie = {
  RDWQuery,
  Fields,
  Info,
};
