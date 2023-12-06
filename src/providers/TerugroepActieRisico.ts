// *******************************************************
//
// Name: Open Data RDW: Terugroep_actie_risico
//
// Category: Terugroepacties
// Link: https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf
// Permalink: https://opendata.rdw.nl/d/9ihi-jgpf
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Terugroep_actie_risico
 */
export interface ResponseData {
  /**
   * ### Code mogelijk gevaar
   * 
   * De code voor het mogelijke gevaar:
   * ONG= Een (verkeers)ongeval met letselschade
   * TEL= Verhoogde kans op letsel bij een ongeval
   * BRA= Brand met letselschade
   * MIL= Het belasten van het milieu
   *
   * **Type**: Text
   */
  code_mogelijk_gevaar?: string;
  /**
   * ### Mogelijk gevaar
   * 
   * Uitleg over wat het gevaar van het defect is voor de bestuurder van het voertuig en eventueel de medeweggebruikers. Er kunnen meer gevaren van toepassing zijn.
   *
   * **Type**: Text
   */
  mogelijk_gevaar?: string;
  /**
   * ### Referentiecode RDW
   * 
   * Dit is de referentiecode waaronder de RDW de terugroepactie heeft geregistreerd.
   *
   * **Type**: Text
   */
  referentiecode_rdw?: string;
}

/**
 * Fieldnames for **TerugroepActieRisico**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CodeMogelijkGevaar`` | ``code_mogelijk_gevaar`` | _Text_ |
 * | ``MogelijkGevaar`` | ``mogelijk_gevaar`` | _Text_ |
 * | ``ReferentiecodeRdw`` | ``referentiecode_rdw`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Code mogelijk gevaar
   * 
   * De code voor het mogelijke gevaar:
   * ONG= Een (verkeers)ongeval met letselschade
   * TEL= Verhoogde kans op letsel bij een ongeval
   * BRA= Brand met letselschade
   * MIL= Het belasten van het milieu
   *
   * **Type**: Text
   */
   CodeMogelijkGevaar: FieldObject<DataType.Text>;
  /**
   * ### Mogelijk gevaar
   * 
   * Uitleg over wat het gevaar van het defect is voor de bestuurder van het voertuig en eventueel de medeweggebruikers. Er kunnen meer gevaren van toepassing zijn.
   *
   * **Type**: Text
   */
   MogelijkGevaar: FieldObject<DataType.Text>;
  /**
   * ### Referentiecode RDW
   * 
   * Dit is de referentiecode waaronder de RDW de terugroepactie heeft geregistreerd.
   *
   * **Type**: Text
   */
   ReferentiecodeRdw: FieldObject<DataType.Text>;
};

export const Fields: IFields = {
  CodeMogelijkGevaar: Field("code_mogelijk_gevaar", DataType.Text),
  MogelijkGevaar: Field("mogelijk_gevaar", DataType.Text),
  ReferentiecodeRdw: Field("referentiecode_rdw", DataType.Text),
};

export const Info = {
  fields: [
    "CodeMogelijkGevaar",
    "MogelijkGevaar",
    "ReferentiecodeRdw",
  ],
  dataset: "9ihi-jgpf",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Terugroep_actie_risico",
  provider_name: "TerugroepActieRisico",
  url: "https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/9ihi-jgpf",
}

/**
 * ### Open Data RDW: Terugroep_actie_risico
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/9ihi-jgpf
 *
 * **Dataset ID:** 9ihi-jgpf
 *
 * **Category:** Terugroepacties
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
