// *******************************************************
//
// Name: Open Data RDW: Meldingen Keuringsinstantie
//
// Dataset met meldingen in het kader van een bepaalde erkenning uitgevoerd door een keuringsinstantie.
//
// Category: Keuringen
// Link: https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Meldingen-Keuringsinstantie/sgfe-77wx
// Permalink: https://opendata.rdw.nl/d/sgfe-77wx
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

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
export const Fields = {
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
  MeldDatumDoorKeuringsinstantieDt: Field("meld_datum_door_keuringsinstantie_dt", DataType.FloatingTimestamp),
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
}

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
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<MeldingenKeuringsinstantie_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const MeldingenKeuringsinstantie: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<MeldingenKeuringsinstantie_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
