// *******************************************************
//
// Name: Open Data RDW: Erkenningen
//
// Overzicht van de erkenningen behorende bij de erkende bedrijven.
//
// Category: Erkende bedrijven
// Link: https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz
// Permalink: https://opendata.rdw.nl/d/nmwb-dqkz
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

/**
 * Return Data for Open Data RDW: Erkenningen
 */
export interface Erkenningen_ResponseData {
  /**
   * ### Erkenning
   *
   * De erkenning, bevoegdheid, regeling of overeenkomst die het bedrijf in bezit heeft. Wanneer deze tijdelijk ongeldig is, wordt deze wel getoond.
   *
   * **Type**: Text
   */
  erkenning?: string;
  /**
   * ### Volgnummer
   *
   * Nummer waarmee een bedrijf eenduidig is te identificeren binnen de opendata set.
   *
   * **Type**: Number
   */
  volgnummer?: string;
}

/**
 * Fieldnames for **Erkenningen**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Erkenning`` | ``erkenning`` | _Text_ |
 * | ``Volgnummer`` | ``volgnummer`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields: {
  Erkenning: FieldObject<DataType.Text>;
  Volgnummer: FieldObject<DataType.Number>;
} = {
  /**
   * ### Erkenning
   *
   * De erkenning, bevoegdheid, regeling of overeenkomst die het bedrijf in bezit heeft. Wanneer deze tijdelijk ongeldig is, wordt deze wel getoond.
   *
   * **Type**: Text
   *
   * **Database Column Name**: `erkenning`
   */
  Erkenning: Field("erkenning", DataType.Text),
  /**
   * ### Volgnummer
   *
   * Nummer waarmee een bedrijf eenduidig is te identificeren binnen de opendata set.
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummer`
   */
  Volgnummer: Field("volgnummer", DataType.Number),
};

/**
 * Dataset metadata for **Erkenningen**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
export const Info = {
  fields: [
    "Erkenning",
    "Volgnummer",
  ],
  dataset: "nmwb-dqkz",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Erkenningen",
  provider_name: "Erkenningen",
  url: "https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/nmwb-dqkz",
} as const;

/**
 * ### Open Data RDW: Erkenningen
 * Overzicht van de erkenningen behorende bij de erkende bedrijven.
 *
 * **URL:** https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/nmwb-dqkz
 *
 * **Dataset ID:** nmwb-dqkz
 *
 * **Category:** Erkende bedrijven
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Erkenningen dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Erkenning, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<Erkenningen_ResponseData> =>
  createQueryWithDataset<Erkenningen_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

/**
 * **Open Data RDW: Erkenningen**
 * Overzicht van de erkenningen behorende bij de erkende bedrijven.
 *
 * Provider for the Open Data RDW: Erkenningen dataset. Bundles:
 * - {@link Erkenningen.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link Erkenningen.Fields} — the queryable field definitions
 * - {@link Erkenningen.Info} — dataset metadata
 *
 * **Category:** Erkende bedrijven
 *
 * **Dataset ID:** nmwb-dqkz
 *
 * **URL:** https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz
 *
 * @example
 * ```ts
 * const { data } = await Erkenningen.RDWQuery()
 *   .where(Where.like(Erkenningen.Fields.Erkenning, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const Erkenningen = {
  RDWQuery,
  Fields,
  Info,
};
