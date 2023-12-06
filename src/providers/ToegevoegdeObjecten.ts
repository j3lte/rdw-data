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
 * Return Data for Open Data RDW: Toegevoegde Objecten
 */
export interface ResponseData {
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
 *
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
export interface IFields {
  /**
   * ### Classificatie toegevoegd obj
   *
   * **Type**: Text
   */
  ClassificatieToegevoegdObj: FieldObject<DataType.Text>;
  /**
   * ### Demontagedatum
   *
   * **Type**: Number
   */
  Demontagedatum: FieldObject<DataType.Number>;
  /**
   * ### Demontagedatum DT
   *
   * **Type**: Calendar date
   */
  DemontagedatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Gasinstallatie tank inhoud
   *
   * **Type**: Number
   */
  GasinstallatieTankInhoud: FieldObject<DataType.Number>;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  Kenteken: FieldObject<DataType.Text>;
  /**
   * ### Merk object toegevoegd
   *
   * **Type**: Text
   */
  MerkObjectToegevoegd: FieldObject<DataType.Text>;
  /**
   * ### Merkcode toegevoegd object
   *
   * **Type**: Text
   */
  MerkcodeToegevoegdObject: FieldObject<DataType.Text>;
  /**
   * ### Montagedatum
   *
   * **Type**: Number
   */
  Montagedatum: FieldObject<DataType.Number>;
  /**
   * ### Montagedatum DT
   *
   * **Type**: Calendar date
   */
  MontagedatumDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Soort toe te voegen object omschrijving
   *
   * **Type**: Text
   */
  SoortToeTeVoegenObjectOmschrijving: FieldObject<DataType.Text>;
  /**
   * ### Uitvoerings volgnr toegev obj
   *
   * **Type**: Number
   */
  UitvoeringsVolgnrToegevObj: FieldObject<DataType.Number>;
}

export const Fields: IFields = {
  ClassificatieToegevoegdObj: Field("classificatie_toegevoegd_obj", DataType.Text),
  Demontagedatum: Field("demontagedatum", DataType.Number),
  DemontagedatumDt: Field("demontagedatum_dt", DataType.FloatingTimestamp),
  GasinstallatieTankInhoud: Field("gasinstallatie_tank_inhoud", DataType.Number),
  Kenteken: Field("kenteken", DataType.Text),
  MerkObjectToegevoegd: Field("merk_object_toegevoegd", DataType.Text),
  MerkcodeToegevoegdObject: Field("merkcode_toegevoegd_object", DataType.Text),
  Montagedatum: Field("montagedatum", DataType.Number),
  MontagedatumDt: Field("montagedatum_dt", DataType.FloatingTimestamp),
  SoortToeTeVoegenObjectOmschrijving: Field(
    "soort_toe_te_voegen_object_omschrijving",
    DataType.Text,
  ),
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
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
