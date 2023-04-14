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

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.3/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.3/mod.ts";
export {
  Order,
  Select,
  SelectAll,
  SelectGreatest,
  SelectLeast,
  SelectRegrIntercept,
  SelectRegrR2,
  SelectRegrSlope,
  SystemFields,
  Where,
} from "https://deno.land/x/soda@0.4.3/mod.ts";
export { DataType, Field };

/**
 * Return Data for Open Data RDW: Meldingen Keuringsinstantie
 */
export interface ResponseData {
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
 *
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
export interface IFields {
  /**
   * ### API Gebrek beschrijving
   *
   * **Type**: Text
   */
  ApiGebrekBeschrijving: FieldObject<DataType.Text>;
  /**
   * ### API Gebrek constateringen
   *
   * **Type**: Text
   */
  ApiGebrekConstateringen: FieldObject<DataType.Text>;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  Kenteken: FieldObject<DataType.Text>;
  /**
   * ### Meld datum door keuringsinstantie
   *
   * **Type**: Number
   */
  MeldDatumDoorKeuringsinstantie: FieldObject<DataType.Number>;
  /**
   * ### Meld datum door keuringsinstantie DT
   *
   * **Type**: Calendar date
   */
  MeldDatumDoorKeuringsinstantieDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Meld tijd door keuringsinstantie
   *
   * **Type**: Number
   */
  MeldTijdDoorKeuringsinstantie: FieldObject<DataType.Number>;
  /**
   * ### Soort erkenning keuringsinstantie
   *
   * **Type**: Text
   */
  SoortErkenningKeuringsinstantie: FieldObject<DataType.Text>;
  /**
   * ### Soort erkenning omschrijving
   *
   * **Type**: Text
   */
  SoortErkenningOmschrijving: FieldObject<DataType.Text>;
  /**
   * ### Soort melding ki omschrijving
   *
   * **Type**: Text
   */
  SoortMeldingKiOmschrijving: FieldObject<DataType.Text>;
  /**
   * ### Vervaldatum keuring
   *
   * **Type**: Number
   */
  VervaldatumKeuring: FieldObject<DataType.Number>;
  /**
   * ### Vervaldatum keuring DT
   *
   * **Type**: Calendar date
   */
  VervaldatumKeuringDt: FieldObject<DataType.FloatingTimestamp>;
}

export const Fields: IFields = {
  ApiGebrekBeschrijving: Field("api_gebrek_beschrijving", DataType.Text),
  ApiGebrekConstateringen: Field("api_gebrek_constateringen", DataType.Text),
  Kenteken: Field("kenteken", DataType.Text),
  MeldDatumDoorKeuringsinstantie: Field("meld_datum_door_keuringsinstantie", DataType.Number),
  MeldDatumDoorKeuringsinstantieDt: Field(
    "meld_datum_door_keuringsinstantie_dt",
    DataType.FloatingTimestamp,
  ),
  MeldTijdDoorKeuringsinstantie: Field("meld_tijd_door_keuringsinstantie", DataType.Number),
  SoortErkenningKeuringsinstantie: Field("soort_erkenning_keuringsinstantie", DataType.Text),
  SoortErkenningOmschrijving: Field("soort_erkenning_omschrijving", DataType.Text),
  SoortMeldingKiOmschrijving: Field("soort_melding_ki_omschrijving", DataType.Text),
  VervaldatumKeuring: Field("vervaldatum_keuring", DataType.Number),
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
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
