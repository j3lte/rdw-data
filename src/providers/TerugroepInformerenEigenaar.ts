// *******************************************************
//
// Name: Open Data RDW: Terugroep_informeren_eigenaar
//
// Category: Terugroepacties
// Link: https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_informeren_eigenaar/mh8w-8cup
// Permalink: https://opendata.rdw.nl/d/mh8w-8cup
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Terugroep_informeren_eigenaar
 */
export interface TerugroepInformerenEigenaar_ResponseData {
  /**
   * ### Code wijze informeren
   * 
   * De code voor de wijze van informeren van de consument:
   * BRI= Een brief
   * BEL= Opbellen of persoonlijk benaderen
   * ADV=  Een advertentie in landelijke dagbladen
   * NTB= Nader te bepalen
   *
   * **Type**: Text
   */
  code_wijze_informeren?: string;
  /**
   * ### Referentiecode RDW
   * 
   * Dit is de referentiecode waaronder de RDW de terugroepactie heeft geregistreerd.
   *
   * **Type**: Text
   */
  referentiecode_rdw?: string;
  /**
   * ### Wijze waarop u wordt genformeerd
   * 
   * Hier staat beschreven hoe de producent of distributeur de voertuigeigenaar benadert over de terugroepactie. Er kunnen meer manieren van toepassing zijn.
   *
   * **Type**: Text
   */
  wijze_waarop_u_wordt_ge_nformeerd?: string;
}

/**
 * Fieldnames for **TerugroepInformerenEigenaar**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CodeWijzeInformeren`` | ``code_wijze_informeren`` | _Text_ |
 * | ``ReferentiecodeRdw`` | ``referentiecode_rdw`` | _Text_ |
 * | ``WijzeWaaropUWordtGeNformeerd`` | ``wijze_waarop_u_wordt_ge_nformeerd`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Code wijze informeren
  * 
  * De code voor de wijze van informeren van de consument:
  * BRI= Een brief
  * BEL= Opbellen of persoonlijk benaderen
  * ADV=  Een advertentie in landelijke dagbladen
  * NTB= Nader te bepalen
  *
  * **Type**: Text
  *
  * **Database Column Name**: `code_wijze_informeren`
  */
  CodeWijzeInformeren: Field("code_wijze_informeren", DataType.Text),
  /**
  * ### Referentiecode RDW
  * 
  * Dit is de referentiecode waaronder de RDW de terugroepactie heeft geregistreerd.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `referentiecode_rdw`
  */
  ReferentiecodeRdw: Field("referentiecode_rdw", DataType.Text),
  /**
  * ### Wijze waarop u wordt genformeerd
  * 
  * Hier staat beschreven hoe de producent of distributeur de voertuigeigenaar benadert over de terugroepactie. Er kunnen meer manieren van toepassing zijn.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `wijze_waarop_u_wordt_ge_nformeerd`
  */
  WijzeWaaropUWordtGeNformeerd: Field("wijze_waarop_u_wordt_ge_nformeerd", DataType.Text),
};

export const Info = {
  fields: [
    "CodeWijzeInformeren",
    "ReferentiecodeRdw",
    "WijzeWaaropUWordtGeNformeerd",
  ],
  dataset: "mh8w-8cup",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Terugroep_informeren_eigenaar",
  provider_name: "TerugroepInformerenEigenaar",
  url: "https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_informeren_eigenaar/mh8w-8cup",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/mh8w-8cup",
}

/**
 * ### Open Data RDW: Terugroep_informeren_eigenaar
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_informeren_eigenaar/mh8w-8cup
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/mh8w-8cup
 *
 * **Dataset ID:** mh8w-8cup
 *
 * **Category:** Terugroepacties
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Terugroep_informeren_eigenaar dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.CodeWijzeInformeren, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TerugroepInformerenEigenaar_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TerugroepInformerenEigenaar = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
