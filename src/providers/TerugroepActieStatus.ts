// *******************************************************
//
// Name: Open Data RDW: Terugroep_actie_status
//
// Category: Terugroepacties
// Link: https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7
// Permalink: https://opendata.rdw.nl/d/t49b-isb7
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Terugroep_actie_status
 */
export interface ResponseData {
  /**
   * ### Code Status
   *
   * De code van de status van het voertuig:
   * O= Openstaande terugroepactie
   * P= Producent heeft herstel gemeld
   *
   * **Type**: Text
   */
  code_status?: string;
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Het wordt met 6 karakters zonder tussenliggende streepjes weergegeven.
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Referentiecode RDW
   *
   * De code die de producent aan de terugroepactie heeft gegeven. Met deze code is de terugroepactie bij de dealer bekend.
   *
   * **Type**: Text
   */
  referentiecode_rdw?: string;
  /**
   * ### Status
   *
   * De door de producent/distributeur doorgegeven status van het voertuig:
   * Openstaande terugroepactie= De producent/distributeur heeft de RDW genformeerd, dat het voertuig moet worden hersteld. (=0)
   * Producent heeft herstel gemeld= De producent/distributeur heeft de RDW genformeerd, dat het voertuig is hersteld. (=1)
   * Opmerking: er kunnen meer terugroepacties op een voertuig van toepassing zijn.
   *
   * **Type**: Text
   */
  status?: string;
}

/**
 * Fieldnames for **TerugroepActieStatus**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CodeStatus`` | ``code_status`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``ReferentiecodeRdw`` | ``referentiecode_rdw`` | _Text_ |
 * | ``Status`` | ``status`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Code Status
   *
   * De code van de status van het voertuig:
   * O= Openstaande terugroepactie
   * P= Producent heeft herstel gemeld
   *
   * **Type**: Text
   */
  CodeStatus: FieldObject<DataType.Text>;
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Het wordt met 6 karakters zonder tussenliggende streepjes weergegeven.
   *
   * **Type**: Text
   */
  Kenteken: FieldObject<DataType.Text>;
  /**
   * ### Referentiecode RDW
   *
   * De code die de producent aan de terugroepactie heeft gegeven. Met deze code is de terugroepactie bij de dealer bekend.
   *
   * **Type**: Text
   */
  ReferentiecodeRdw: FieldObject<DataType.Text>;
  /**
   * ### Status
   *
   * De door de producent/distributeur doorgegeven status van het voertuig:
   * Openstaande terugroepactie= De producent/distributeur heeft de RDW genformeerd, dat het voertuig moet worden hersteld. (=0)
   * Producent heeft herstel gemeld= De producent/distributeur heeft de RDW genformeerd, dat het voertuig is hersteld. (=1)
   * Opmerking: er kunnen meer terugroepacties op een voertuig van toepassing zijn.
   *
   * **Type**: Text
   */
  Status: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  CodeStatus: Field("code_status", DataType.Text),
  Kenteken: Field("kenteken", DataType.Text),
  ReferentiecodeRdw: Field("referentiecode_rdw", DataType.Text),
  Status: Field("status", DataType.Text),
};

export const Info = {
  fields: [
    "CodeStatus",
    "Kenteken",
    "ReferentiecodeRdw",
    "Status",
  ],
  dataset: "t49b-isb7",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Terugroep_actie_status",
  provider_name: "TerugroepActieStatus",
  url: "https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/t49b-isb7",
};

/**
 * ### Open Data RDW: Terugroep_actie_status
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/t49b-isb7
 *
 * **Dataset ID:** t49b-isb7
 *
 * **Category:** Terugroepacties
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
