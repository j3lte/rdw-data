// *******************************************************
//
// Name: Open Data RDW: Meldingen Keuringsinstantie
//
// Dataset met meldingen in het kader van een bepaalde erkenning uitgevoerd door een keuringsinstantie.
//
// Category: Keuringen
// Tags: keuringen
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Meldingen-Keuringsinstantie/sgfe-77wx
// Permalink: https://opendata.rdw.nl/d/sgfe-77wx
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2024-05-24T13:09:58.000Z
// Structure last updated: 2025-03-26T01:02:19.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: Meldingen Keuringsinstantie
 */
export interface MeldingenKeuringsinstantie_ResponseData {
  /**
   * ### API Gebrek beschrijving
   *
   * **Type**: Text
   */
  api_gebrek_beschrijving?: string;
  /**
   * ### API Gebrek constateringen
   *
   * **Type**: Text
   */
  api_gebrek_constateringen?: string;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Meld datum door keuringsinstantie
   *
   * **Type**: Number
   */
  meld_datum_door_keuringsinstantie?: string;
  /**
   * ### Meld datum door keuringsinstantie DT
   *
   * **Type**: Calendar date
   */
  meld_datum_door_keuringsinstantie_dt?: string;
  /**
   * ### Meld tijd door keuringsinstantie
   *
   * **Type**: Number
   */
  meld_tijd_door_keuringsinstantie?: string;
  /**
   * ### Soort erkenning keuringsinstantie
   *
   * **Type**: Text
   */
  soort_erkenning_keuringsinstantie?: string;
  /**
   * ### Soort erkenning omschrijving
   *
   * **Type**: Text
   */
  soort_erkenning_omschrijving?: string;
  /**
   * ### Soort melding ki omschrijving
   *
   * **Type**: Text
   */
  soort_melding_ki_omschrijving?: string;
  /**
   * ### Vervaldatum keuring
   *
   * **Type**: Number
   */
  vervaldatum_keuring?: string;
  /**
   * ### Vervaldatum keuring DT
   *
   * **Type**: Calendar date
   */
  vervaldatum_keuring_dt?: string;
}

/**
 * Fieldnames for **MeldingenKeuringsinstantie**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``ApiGebrekBeschrijving`` | ``api_gebrek_beschrijving`` | _Text_ |
 * | ``ApiGebrekConstateringen`` | ``api_gebrek_constateringen`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``MeldDatumDoorKeuringsinstantie`` | ``meld_datum_door_keuringsinstantie`` | _Number_ |
 * | ``MeldDatumDoorKeuringsinstantieDt`` | ``meld_datum_door_keuringsinstantie_dt`` | _Calendar date_ |
 * | ``MeldTijdDoorKeuringsinstantie`` | ``meld_tijd_door_keuringsinstantie`` | _Number_ |
 * | ``SoortErkenningKeuringsinstantie`` | ``soort_erkenning_keuringsinstantie`` | _Text_ |
 * | ``SoortErkenningOmschrijving`` | ``soort_erkenning_omschrijving`` | _Text_ |
 * | ``SoortMeldingKiOmschrijving`` | ``soort_melding_ki_omschrijving`` | _Text_ |
 * | ``VervaldatumKeuring`` | ``vervaldatum_keuring`` | _Number_ |
 * | ``VervaldatumKeuringDt`` | ``vervaldatum_keuring_dt`` | _Calendar date_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  ApiGebrekBeschrijving: FieldObject<DataType.Text>;
  ApiGebrekConstateringen: FieldObject<DataType.Text>;
  Kenteken: FieldObject<DataType.Text>;
  MeldDatumDoorKeuringsinstantie: FieldObject<DataType.Number>;
  MeldDatumDoorKeuringsinstantieDt: FieldObject<DataType.FloatingTimestamp>;
  MeldTijdDoorKeuringsinstantie: FieldObject<DataType.Number>;
  SoortErkenningKeuringsinstantie: FieldObject<DataType.Text>;
  SoortErkenningOmschrijving: FieldObject<DataType.Text>;
  SoortMeldingKiOmschrijving: FieldObject<DataType.Text>;
  VervaldatumKeuring: FieldObject<DataType.Number>;
  VervaldatumKeuringDt: FieldObject<DataType.FloatingTimestamp>;
} = {
  /**
   * ### API Gebrek beschrijving
   *
   * **Type**: Text
   *
   * **Database Column Name**: `api_gebrek_beschrijving`
   */
  ApiGebrekBeschrijving: Field("api_gebrek_beschrijving", DataType.Text),
  /**
   * ### API Gebrek constateringen
   *
   * **Type**: Text
   *
   * **Database Column Name**: `api_gebrek_constateringen`
   */
  ApiGebrekConstateringen: Field("api_gebrek_constateringen", DataType.Text),
  /**
   * ### Kenteken
   *
   * **Type**: Text
   *
   * **Database Column Name**: `kenteken`
   */
  Kenteken: Field("kenteken", DataType.Text),
  /**
   * ### Meld datum door keuringsinstantie
   *
   * **Type**: Number
   *
   * **Database Column Name**: `meld_datum_door_keuringsinstantie`
   */
  MeldDatumDoorKeuringsinstantie: Field("meld_datum_door_keuringsinstantie", DataType.Number),
  /**
   * ### Meld datum door keuringsinstantie DT
   *
   * **Type**: Calendar date
   *
   * **Database Column Name**: `meld_datum_door_keuringsinstantie_dt`
   */
  MeldDatumDoorKeuringsinstantieDt: Field(
    "meld_datum_door_keuringsinstantie_dt",
    DataType.FloatingTimestamp,
  ),
  /**
   * ### Meld tijd door keuringsinstantie
   *
   * **Type**: Number
   *
   * **Database Column Name**: `meld_tijd_door_keuringsinstantie`
   */
  MeldTijdDoorKeuringsinstantie: Field("meld_tijd_door_keuringsinstantie", DataType.Number),
  /**
   * ### Soort erkenning keuringsinstantie
   *
   * **Type**: Text
   *
   * **Database Column Name**: `soort_erkenning_keuringsinstantie`
   */
  SoortErkenningKeuringsinstantie: Field("soort_erkenning_keuringsinstantie", DataType.Text),
  /**
   * ### Soort erkenning omschrijving
   *
   * **Type**: Text
   *
   * **Database Column Name**: `soort_erkenning_omschrijving`
   */
  SoortErkenningOmschrijving: Field("soort_erkenning_omschrijving", DataType.Text),
  /**
   * ### Soort melding ki omschrijving
   *
   * **Type**: Text
   *
   * **Database Column Name**: `soort_melding_ki_omschrijving`
   */
  SoortMeldingKiOmschrijving: Field("soort_melding_ki_omschrijving", DataType.Text),
  /**
   * ### Vervaldatum keuring
   *
   * **Type**: Number
   *
   * **Database Column Name**: `vervaldatum_keuring`
   */
  VervaldatumKeuring: Field("vervaldatum_keuring", DataType.Number),
  /**
   * ### Vervaldatum keuring DT
   *
   * **Type**: Calendar date
   *
   * **Database Column Name**: `vervaldatum_keuring_dt`
   */
  VervaldatumKeuringDt: Field("vervaldatum_keuring_dt", DataType.FloatingTimestamp),
};

/**
 * Dataset metadata for **MeldingenKeuringsinstantie**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "ApiGebrekBeschrijving",
    "ApiGebrekConstateringen",
    "Kenteken",
    "MeldDatumDoorKeuringsinstantie",
    "MeldDatumDoorKeuringsinstantieDt",
    "MeldTijdDoorKeuringsinstantie",
    "SoortErkenningKeuringsinstantie",
    "SoortErkenningOmschrijving",
    "SoortMeldingKiOmschrijving",
    "VervaldatumKeuring",
    "VervaldatumKeuringDt",
  ],
  dataset: "sgfe-77wx",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Meldingen Keuringsinstantie",
  provider_name: "MeldingenKeuringsinstantie",
  url: "https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Meldingen-Keuringsinstantie/sgfe-77wx",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/sgfe-77wx",
  category: "Keuringen",
  tags: ["keuringen"],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-05-24T13:09:58.000Z",
  metadata_updated_at: "2025-03-26T01:02:19.000Z",
} as const;

/**
 * ### Open Data RDW: Meldingen Keuringsinstantie
 * Dataset met meldingen in het kader van een bepaalde erkenning uitgevoerd door een keuringsinstantie.
 *
 * **URL:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Meldingen-Keuringsinstantie/sgfe-77wx
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/sgfe-77wx
 *
 * **Dataset ID:** sgfe-77wx
 *
 * **Category:** Keuringen
 *
 * **Tags:** keuringen
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-05-24T13:09:58.000Z
 *
 * **Structure last updated:** 2025-03-26T01:02:19.000Z
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Meldingen Keuringsinstantie dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.ApiGebrekBeschrijving, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<MeldingenKeuringsinstantie_ResponseData> =>
  createQueryWithDataset<MeldingenKeuringsinstantie_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: Meldingen Keuringsinstantie**
 * Dataset met meldingen in het kader van een bepaalde erkenning uitgevoerd door een keuringsinstantie.
 *
 * Provider for the Open Data RDW: Meldingen Keuringsinstantie dataset. Bundles:
 * - {@link MeldingenKeuringsinstantie.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link MeldingenKeuringsinstantie.Fields} — the queryable field definitions
 * - {@link MeldingenKeuringsinstantie.Info} — dataset metadata
 *
 * **Category:** Keuringen
 *
 * **Tags:** keuringen
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** sgfe-77wx
 *
 * **URL:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Meldingen-Keuringsinstantie/sgfe-77wx
 *
 * **Published:** 2024-05-24T13:09:58.000Z
 *
 * **Structure last updated:** 2025-03-26T01:02:19.000Z
 *
 * @example
 * ```ts
 * const { data } = await MeldingenKeuringsinstantie.RDWQuery()
 *   .where(Where.like(MeldingenKeuringsinstantie.Fields.ApiGebrekBeschrijving, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const MeldingenKeuringsinstantie = {
  RDWQuery,
  Fields,
  Info,
};
