// *******************************************************
//
// Name: Open Data RDW: Keuringen
//
// Gegevens set met per kenteken de vervaldatum van de laatst uitgevoerde APK.
//
// Category: Keuringen
// Link: https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Keuringen/vkij-7mwc
// Permalink: https://opendata.rdw.nl/d/vkij-7mwc
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Keuringen
 */
export interface Keuringen_ResponseData {
  /**
   * ### Kenteken
   *
   * **Type**: Text
   */
  kenteken?: string;
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
 * Fieldnames for **Keuringen**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``VervaldatumKeuring`` | ``vervaldatum_keuring`` | _Number_ |
 * | ``VervaldatumKeuringDt`` | ``vervaldatum_keuring_dt`` | _Calendar date_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Kenteken
  *
  * **Type**: Text
  *
  * **Database Column Name**: `kenteken`
  */
  Kenteken: Field("kenteken", DataType.Text),
  /**
  * ### Vervaldatum keuring
  *
  * **Type**: Number
  *
  * **Database Column Name**: `vervaldatum_keuring`
  */
  VervaldatumKeuring: Field("vervaldatum_keuring", DataType.Number),
  /**
  * ### Vervaldatum keuring DT
  *
  * **Type**: Calendar date
  *
  * **Database Column Name**: `vervaldatum_keuring_dt`
  */
  VervaldatumKeuringDt: Field("vervaldatum_keuring_dt", DataType.FloatingTimestamp),
};

export const Info = {
  fields: [
    "Kenteken",
    "VervaldatumKeuring",
    "VervaldatumKeuringDt",
  ],
  dataset: "vkij-7mwc",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Keuringen",
  provider_name: "Keuringen",
  url: "https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Keuringen/vkij-7mwc",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/vkij-7mwc",
}

/**
 * ### Open Data RDW: Keuringen
 * Gegevens set met per kenteken de vervaldatum van de laatst uitgevoerde APK.
 *
 * **URL:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Keuringen/vkij-7mwc
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/vkij-7mwc
 *
 * **Dataset ID:** vkij-7mwc
 *
 * **Category:** Keuringen
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Keuringen dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Kenteken, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<Keuringen_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const Keuringen: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<Keuringen_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
