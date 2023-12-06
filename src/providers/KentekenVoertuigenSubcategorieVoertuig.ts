// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig
//
//
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_subcategorie/2ba7-embk
// Permalink: https://opendata.rdw.nl/d/2ba7-embk
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
 * Return Data for Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig
 */
export interface ResponseData {
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
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``SubcategorieVoertuigEuropees`` | ``subcategorie_voertuig_europees`` | _Text_ |
 * | ``SubcategorieVoertuigEuropeesOmschrijving`` | ``subcategorie_voertuig_europees_omschrijving`` | _Text_ |
 * | ``SubcategorieVoertuigVolgnummer`` | ``subcategorie_voertuig_volgnummer`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
  Kenteken: FieldObject<DataType.Text>;
  /**
   * ### Subcategorie voertuig europees
   *
   * Europese codering voor het type carrosserie voor speciale doeleinden van een voertuig.
   *
   * **Type**: Text
   */
  SubcategorieVoertuigEuropees: FieldObject<DataType.Text>;
  /**
   * ### Subcategorie voertuig europees omschrijving
   *
   * **Type**: Text
   */
  SubcategorieVoertuigEuropeesOmschrijving: FieldObject<DataType.Text>;
  /**
   * ### Subcategorie voertuig volgnummer
   *
   * Volgnummer ter aanduiding van een wijziging op een uitvoering van een Europese subcategorie.  Voor iedere registratie is het volgnummer 1 hoger. Dit is geen Europees gegeven, maar het wordt gebruikt om het aantal voorkomens te kunnen vastleggen.
   *
   * **Type**: Number
   */
  SubcategorieVoertuigVolgnummer: FieldObject<DataType.Number>;
}

export const Fields: IFields = {
  Kenteken: Field("kenteken", DataType.Text),
  SubcategorieVoertuigEuropees: Field("subcategorie_voertuig_europees", DataType.Text),
  SubcategorieVoertuigEuropeesOmschrijving: Field(
    "subcategorie_voertuig_europees_omschrijving",
    DataType.Text,
  ),
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
  url:
    "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_subcategorie/2ba7-embk",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/2ba7-embk",
};

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
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
