// *******************************************************
//
// Name: Open Data RDW: Geconstateerde Gebreken
//
// In deze set zijn op kenteken niveau geconstateerde gebreken opgenomen.
//
// Category: Keuringen
// Link: https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Geconstateerde-Gebreken/a34c-vvps
// Permalink: https://opendata.rdw.nl/d/a34c-vvps
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.4/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.4/mod.ts";
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
} from "https://deno.land/x/soda@0.4.4/mod.ts";
export { DataType, Field };

/**
 * Return Data for Open Data RDW: Geconstateerde Gebreken
 */
export interface ResponseData {
  /**
   * ### Aantal gebreken geconstateerd
   *
   * **Type**: Number
   */
  aantal_gebreken_geconstateerd?: string;
  /**
   * ### Gebrek identificatie
   *
   * **Type**: Text
   */
  gebrek_identificatie?: string;
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
}

/**
 * Fieldnames for **GeconstateerdeGebreken**
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``AantalGebrekenGeconstateerd`` | ``aantal_gebreken_geconstateerd`` | _Number_ |
 * | ``GebrekIdentificatie`` | ``gebrek_identificatie`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``MeldDatumDoorKeuringsinstantie`` | ``meld_datum_door_keuringsinstantie`` | _Number_ |
 * | ``MeldDatumDoorKeuringsinstantieDt`` | ``meld_datum_door_keuringsinstantie_dt`` | _Calendar date_ |
 * | ``MeldTijdDoorKeuringsinstantie`` | ``meld_tijd_door_keuringsinstantie`` | _Number_ |
 * | ``SoortErkenningKeuringsinstantie`` | ``soort_erkenning_keuringsinstantie`` | _Text_ |
 * | ``SoortErkenningOmschrijving`` | ``soort_erkenning_omschrijving`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Aantal gebreken geconstateerd
   *
   * **Type**: Number
   */
  AantalGebrekenGeconstateerd: FieldObject<DataType.Number>;
  /**
   * ### Gebrek identificatie
   *
   * **Type**: Text
   */
  GebrekIdentificatie: FieldObject<DataType.Text>;
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
}

export const Fields: IFields = {
  AantalGebrekenGeconstateerd: Field("aantal_gebreken_geconstateerd", DataType.Number),
  GebrekIdentificatie: Field("gebrek_identificatie", DataType.Text),
  Kenteken: Field("kenteken", DataType.Text),
  MeldDatumDoorKeuringsinstantie: Field("meld_datum_door_keuringsinstantie", DataType.Number),
  MeldDatumDoorKeuringsinstantieDt: Field(
    "meld_datum_door_keuringsinstantie_dt",
    DataType.FloatingTimestamp,
  ),
  MeldTijdDoorKeuringsinstantie: Field("meld_tijd_door_keuringsinstantie", DataType.Number),
  SoortErkenningKeuringsinstantie: Field("soort_erkenning_keuringsinstantie", DataType.Text),
  SoortErkenningOmschrijving: Field("soort_erkenning_omschrijving", DataType.Text),
};

export const Info = {
  fields: [
    "AantalGebrekenGeconstateerd",
    "GebrekIdentificatie",
    "Kenteken",
    "MeldDatumDoorKeuringsinstantie",
    "MeldDatumDoorKeuringsinstantieDt",
    "MeldTijdDoorKeuringsinstantie",
    "SoortErkenningKeuringsinstantie",
    "SoortErkenningOmschrijving",
  ],
  dataset: "a34c-vvps",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Geconstateerde Gebreken",
  provider_name: "GeconstateerdeGebreken",
  url: "https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Geconstateerde-Gebreken/a34c-vvps",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/a34c-vvps",
};

/**
 * ### Open Data RDW: Geconstateerde Gebreken
 * In deze set zijn op kenteken niveau geconstateerde gebreken opgenomen.
 *
 * **URL:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Geconstateerde-Gebreken/a34c-vvps
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/a34c-vvps
 *
 * **Dataset ID:** a34c-vvps
 *
 * **Category:** Keuringen
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
