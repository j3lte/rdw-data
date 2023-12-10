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

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Geconstateerde Gebreken
 */
export interface GeconstateerdeGebreken_ResponseData {
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
export const Fields = {
  /**
   * ### Aantal gebreken geconstateerd
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantal_gebreken_geconstateerd`
   */
  AantalGebrekenGeconstateerd: Field("aantal_gebreken_geconstateerd", DataType.Number),
  /**
   * ### Gebrek identificatie
   *
   * **Type**: Text
   *
   * **Database Column Name**: `gebrek_identificatie`
   */
  GebrekIdentificatie: Field("gebrek_identificatie", DataType.Text),
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
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Geconstateerde Gebreken dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.AantalGebrekenGeconstateerd, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<GeconstateerdeGebreken_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const GeconstateerdeGebreken: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<GeconstateerdeGebreken_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
