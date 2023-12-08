// *******************************************************
//
// Name: Open Data RDW: Toegevoegde Objecten
//
// Deze set bevat informatie over ingebouwde objecten aan voertuigen.
//
// Category: Keuringen
// Link: https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Toegevoegde-Objecten/sghb-dzxx
// Permalink: https://opendata.rdw.nl/d/sghb-dzxx
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Toegevoegde Objecten
 */
export interface ToegevoegdeObjecten_ResponseData {
  /**
   * ### Classificatie toegevoegd obj
   *
   * **Type**: Text
   */
  classificatie_toegevoegd_obj?: string;
  /**
   * ### Demontagedatum
   *
   * **Type**: Number
   */
  demontagedatum?: string;
  /**
   * ### Demontagedatum DT
   *
   * **Type**: Calendar date
   */
  demontagedatum_dt?: string;
  /**
   * ### Gasinstallatie tank inhoud
   *
   * **Type**: Number
   */
  gasinstallatie_tank_inhoud?: string;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Merk object toegevoegd
   *
   * **Type**: Text
   */
  merk_object_toegevoegd?: string;
  /**
   * ### Merkcode toegevoegd object
   *
   * **Type**: Text
   */
  merkcode_toegevoegd_object?: string;
  /**
   * ### Montagedatum
   *
   * **Type**: Number
   */
  montagedatum?: string;
  /**
   * ### Montagedatum DT
   *
   * **Type**: Calendar date
   */
  montagedatum_dt?: string;
  /**
   * ### Soort toe te voegen object omschrijving
   *
   * **Type**: Text
   */
  soort_toe_te_voegen_object_omschrijving?: string;
  /**
   * ### Uitvoerings volgnr toegev obj
   *
   * **Type**: Number
   */
  uitvoerings_volgnr_toegev_obj?: string;
}

/**
 * Fieldnames for **ToegevoegdeObjecten**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``ClassificatieToegevoegdObj`` | ``classificatie_toegevoegd_obj`` | _Text_ |
 * | ``Demontagedatum`` | ``demontagedatum`` | _Number_ |
 * | ``DemontagedatumDt`` | ``demontagedatum_dt`` | _Calendar date_ |
 * | ``GasinstallatieTankInhoud`` | ``gasinstallatie_tank_inhoud`` | _Number_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``MerkObjectToegevoegd`` | ``merk_object_toegevoegd`` | _Text_ |
 * | ``MerkcodeToegevoegdObject`` | ``merkcode_toegevoegd_object`` | _Text_ |
 * | ``Montagedatum`` | ``montagedatum`` | _Number_ |
 * | ``MontagedatumDt`` | ``montagedatum_dt`` | _Calendar date_ |
 * | ``SoortToeTeVoegenObjectOmschrijving`` | ``soort_toe_te_voegen_object_omschrijving`` | _Text_ |
 * | ``UitvoeringsVolgnrToegevObj`` | ``uitvoerings_volgnr_toegev_obj`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Classificatie toegevoegd obj
  *
  * **Type**: Text
  *
  * **Database Column Name**: `classificatie_toegevoegd_obj`
  */
  ClassificatieToegevoegdObj: Field("classificatie_toegevoegd_obj", DataType.Text),
  /**
  * ### Demontagedatum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `demontagedatum`
  */
  Demontagedatum: Field("demontagedatum", DataType.Number),
  /**
  * ### Demontagedatum DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `demontagedatum_dt`
  */
  DemontagedatumDt: Field("demontagedatum_dt", DataType.FloatingTimestamp),
  /**
  * ### Gasinstallatie tank inhoud
  *
  * **Type**: Number
  *
  * **Database Column Name**: `gasinstallatie_tank_inhoud`
  */
  GasinstallatieTankInhoud: Field("gasinstallatie_tank_inhoud", DataType.Number),
  /**
  * ### Kenteken
  *
  * **Type**: Text
  *
  * **Database Column Name**: `kenteken`
  */
  Kenteken: Field("kenteken", DataType.Text),
  /**
  * ### Merk object toegevoegd
  *
  * **Type**: Text
  *
  * **Database Column Name**: `merk_object_toegevoegd`
  */
  MerkObjectToegevoegd: Field("merk_object_toegevoegd", DataType.Text),
  /**
  * ### Merkcode toegevoegd object
  *
  * **Type**: Text
  *
  * **Database Column Name**: `merkcode_toegevoegd_object`
  */
  MerkcodeToegevoegdObject: Field("merkcode_toegevoegd_object", DataType.Text),
  /**
  * ### Montagedatum
  *
  * **Type**: Number
  *
  * **Database Column Name**: `montagedatum`
  */
  Montagedatum: Field("montagedatum", DataType.Number),
  /**
  * ### Montagedatum DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `montagedatum_dt`
  */
  MontagedatumDt: Field("montagedatum_dt", DataType.FloatingTimestamp),
  /**
  * ### Soort toe te voegen object omschrijving
  *
  * **Type**: Text
  *
  * **Database Column Name**: `soort_toe_te_voegen_object_omschrijving`
  */
  SoortToeTeVoegenObjectOmschrijving: Field("soort_toe_te_voegen_object_omschrijving", DataType.Text),
  /**
  * ### Uitvoerings volgnr toegev obj
  *
  * **Type**: Number
  *
  * **Database Column Name**: `uitvoerings_volgnr_toegev_obj`
  */
  UitvoeringsVolgnrToegevObj: Field("uitvoerings_volgnr_toegev_obj", DataType.Number),
};

export const Info = {
  fields: [
    "ClassificatieToegevoegdObj",
    "Demontagedatum",
    "DemontagedatumDt",
    "GasinstallatieTankInhoud",
    "Kenteken",
    "MerkObjectToegevoegd",
    "MerkcodeToegevoegdObject",
    "Montagedatum",
    "MontagedatumDt",
    "SoortToeTeVoegenObjectOmschrijving",
    "UitvoeringsVolgnrToegevObj",
  ],
  dataset: "sghb-dzxx",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Toegevoegde Objecten",
  provider_name: "ToegevoegdeObjecten",
  url: "https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Toegevoegde-Objecten/sghb-dzxx",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/sghb-dzxx",
}

/**
 * ### Open Data RDW: Toegevoegde Objecten
 * Deze set bevat informatie over ingebouwde objecten aan voertuigen.
 *
 * **URL:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Toegevoegde-Objecten/sghb-dzxx
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/sghb-dzxx
 *
 * **Dataset ID:** sghb-dzxx
 *
 * **Category:** Keuringen
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Toegevoegde Objecten dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.ClassificatieToegevoegdObj, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ToegevoegdeObjecten_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const ToegevoegdeObjecten = {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<ToegevoegdeObjecten_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
