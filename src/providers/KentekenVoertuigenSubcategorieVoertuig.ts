// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_subcategorie/2ba7-embk
// Permalink: https://opendata.rdw.nl/d/2ba7-embk
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig
 */
export interface KentekenVoertuigenSubcategorieVoertuig_ResponseData {
  /**
   * ### Kenteken
   * 
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Subcategorie voertuig europees
   * 
   * Europese codering voor het type carrosserie voor speciale doeleinden van een voertuig.
   *
   * **Type**: Text
   */
  subcategorie_voertuig_europees?: string;
  /**
   * ### Subcategorie voertuig europees omschrijving
   *
   * **Type**: Text
   */
  subcategorie_voertuig_europees_omschrijving?: string;
  /**
   * ### Subcategorie voertuig volgnummer
   * 
   * Volgnummer ter aanduiding van een wijziging op een uitvoering van een Europese subcategorie.  Voor iedere registratie is het volgnummer 1 hoger. Dit is geen Europees gegeven, maar het wordt gebruikt om het aantal voorkomens te kunnen vastleggen.
   *
   * **Type**: Number
   */
  subcategorie_voertuig_volgnummer?: string;
}

/**
 * Fieldnames for **KentekenVoertuigenSubcategorieVoertuig**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``SubcategorieVoertuigEuropees`` | ``subcategorie_voertuig_europees`` | _Text_ |
 * | ``SubcategorieVoertuigEuropeesOmschrijving`` | ``subcategorie_voertuig_europees_omschrijving`` | _Text_ |
 * | ``SubcategorieVoertuigVolgnummer`` | ``subcategorie_voertuig_volgnummer`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
  * ### Kenteken
  * 
  * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `kenteken`
  */
  Kenteken: Field("kenteken", DataType.Text),
  /**
  * ### Subcategorie voertuig europees
  * 
  * Europese codering voor het type carrosserie voor speciale doeleinden van een voertuig.
  *
  * **Type**: Text
  *
  * **Database Column Name**: `subcategorie_voertuig_europees`
  */
  SubcategorieVoertuigEuropees: Field("subcategorie_voertuig_europees", DataType.Text),
  /**
  * ### Subcategorie voertuig europees omschrijving
  *
  * **Type**: Text
  *
  * **Database Column Name**: `subcategorie_voertuig_europees_omschrijving`
  */
  SubcategorieVoertuigEuropeesOmschrijving: Field("subcategorie_voertuig_europees_omschrijving", DataType.Text),
  /**
  * ### Subcategorie voertuig volgnummer
  * 
  * Volgnummer ter aanduiding van een wijziging op een uitvoering van een Europese subcategorie.  Voor iedere registratie is het volgnummer 1 hoger. Dit is geen Europees gegeven, maar het wordt gebruikt om het aantal voorkomens te kunnen vastleggen.
  *
  * **Type**: Number
  *
  * **Database Column Name**: `subcategorie_voertuig_volgnummer`
  */
  SubcategorieVoertuigVolgnummer: Field("subcategorie_voertuig_volgnummer", DataType.Number),
};

export const Info = {
  fields: [
    "Kenteken",
    "SubcategorieVoertuigEuropees",
    "SubcategorieVoertuigEuropeesOmschrijving",
    "SubcategorieVoertuigVolgnummer",
  ],
  dataset: "2ba7-embk",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig",
  provider_name: "KentekenVoertuigenSubcategorieVoertuig",
  url: "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_subcategorie/2ba7-embk",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/2ba7-embk",
}

/**
 * ### Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_subcategorie/2ba7-embk
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/2ba7-embk
 *
 * **Dataset ID:** 2ba7-embk
 *
 * **Category:** Voertuigen
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig dataset.
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
  createQueryWithDataset<KentekenVoertuigenSubcategorieVoertuig_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const KentekenVoertuigenSubcategorieVoertuig: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<KentekenVoertuigenSubcategorieVoertuig_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
