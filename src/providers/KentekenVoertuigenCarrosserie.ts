// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_carrosserie
//
//
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie/vezc-m2t6
// Permalink: https://opendata.rdw.nl/d/vezc-m2t6
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
 * Return Data for Open Data RDW: Gekentekende_voertuigen_carrosserie
 */
export interface ResponseData {
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
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CarrosserieVolgnummer`` | ``carrosserie_volgnummer`` | _Text_ |
 * | ``Carrosserietype`` | ``carrosserietype`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``TypeCarrosserieEuropeseOmschrijving`` | ``type_carrosserie_europese_omschrijving`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Text
   */
  CarrosserieVolgnummer: FieldObject<DataType.Text>;
  /**
   * ### Carrosserietype
   *
   * **Type**: Text
   */
  Carrosserietype: FieldObject<DataType.Text>;
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  Kenteken: FieldObject<DataType.Text>;
  /**
   * ### Type Carrosserie Europese omschrijving
   *
   * **Type**: Text
   */
  TypeCarrosserieEuropeseOmschrijving: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  CarrosserieVolgnummer: Field("carrosserie_volgnummer", DataType.Text),
  Carrosserietype: Field("carrosserietype", DataType.Text),
  Kenteken: Field("kenteken", DataType.Text),
  TypeCarrosserieEuropeseOmschrijving: Field(
    "type_carrosserie_europese_omschrijving",
    DataType.Text,
  ),
};

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
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
