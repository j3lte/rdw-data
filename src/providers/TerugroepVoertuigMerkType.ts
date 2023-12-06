// *******************************************************
//
// Name: Open Data RDW: Terugroep_voertuig_merk_type
//
// Category: Terugroepacties
// Link: https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e
// Permalink: https://opendata.rdw.nl/d/mu2x-mu5e
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Terugroep_voertuig_merk_type
 */
export interface ResponseData {
  /**
   * ### Merk
   *
   * Het merk waarvoor de terugroepactie is georganiseerd. Er kunnen meerdere merken van toepassing zijn.
   *
   * **Type**: Text
   */
  merk?: string;
  /**
   * ### Referentiecode RDW
   *
   * De code die de producent aan de terugroepactie heeft gegeven. Met deze code is de terugroepactie bij de dealer bekend.
   *
   * **Type**: Text
   */
  referentiecode_rdw?: string;
  /**
   * ### Type
   *
   * Het type, waarvoor de terugroepactie is georganiseerd. Na 1995 is de term type op het kentekenbewijs vervangen door handelsbenaming. Er kunnen meerdere types van toepassing zijn.
   *
   * **Type**: Text
   */
  type?: string;
}

/**
 * Fieldnames for **TerugroepVoertuigMerkType**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Merk`` | ``merk`` | _Text_ |
 * | ``ReferentiecodeRdw`` | ``referentiecode_rdw`` | _Text_ |
 * | ``Type`` | ``type`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Merk
   *
   * Het merk waarvoor de terugroepactie is georganiseerd. Er kunnen meerdere merken van toepassing zijn.
   *
   * **Type**: Text
   */
  Merk: FieldObject<DataType.Text>;
  /**
   * ### Referentiecode RDW
   *
   * De code die de producent aan de terugroepactie heeft gegeven. Met deze code is de terugroepactie bij de dealer bekend.
   *
   * **Type**: Text
   */
  ReferentiecodeRdw: FieldObject<DataType.Text>;
  /**
   * ### Type
   *
   * Het type, waarvoor de terugroepactie is georganiseerd. Na 1995 is de term type op het kentekenbewijs vervangen door handelsbenaming. Er kunnen meerdere types van toepassing zijn.
   *
   * **Type**: Text
   */
  Type: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  Merk: Field("merk", DataType.Text),
  ReferentiecodeRdw: Field("referentiecode_rdw", DataType.Text),
  Type: Field("type", DataType.Text),
};

export const Info = {
  fields: [
    "Merk",
    "ReferentiecodeRdw",
    "Type",
  ],
  dataset: "mu2x-mu5e",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Terugroep_voertuig_merk_type",
  provider_name: "TerugroepVoertuigMerkType",
  url:
    "https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/mu2x-mu5e",
};

/**
 * ### Open Data RDW: Terugroep_voertuig_merk_type
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/mu2x-mu5e
 *
 * **Dataset ID:** mu2x-mu5e
 *
 * **Category:** Terugroepacties
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
