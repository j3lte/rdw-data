// *******************************************************
//
// Name: Open Data RDW: Uitvoering Gebruiksgegevens Per Uitgave
//
//
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Uitvoering-Gebruiksgegevens-Per-Uitg/2822-t8sx
// Permalink: https://opendata.rdw.nl/d/2822-t8sx
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.3/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.3/mod.ts";
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
} from "https://deno.land/x/soda@0.4.3/mod.ts";
export { DataType, Field };

/**
 * Return Data for Open Data RDW: Uitvoering Gebruiksgegevens Per Uitgave
 */
export interface ResponseData {
  /**
   * ### EEG Uitvoeringscode
   *
   * **Type**: Text
   */
  eeg_uitvoeringscode?: string;
  /**
   * ### EEG variantcode
   *
   * **Type**: Text
   */
  eeg_variantcode?: string;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
  eu_type_goedkeuringssleutel?: string;
  /**
   * ### Uitvgavenummer verbruikboek
   *
   * **Type**: Text
   */
  uitvgavenummer_verbruikboek?: string;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  uitvoering_wijzigingsnummer?: string;
  /**
   * ### Verbruikcategorie uitvoering
   *
   * **Type**: Text
   */
  verbruikcategorie_uitvoering?: string;
}

/**
 * Fieldnames for **UitvoeringGebruiksgegevensPerUitgave**
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``EegUitvoeringscode`` | ``eeg_uitvoeringscode`` | _Text_ |
 * | ``EegVariantcode`` | ``eeg_variantcode`` | _Text_ |
 * | ``EuTypeGoedkeuringssleutel`` | ``eu_type_goedkeuringssleutel`` | _Text_ |
 * | ``UitvgavenummerVerbruikboek`` | ``uitvgavenummer_verbruikboek`` | _Text_ |
 * | ``UitvoeringWijzigingsnummer`` | ``uitvoering_wijzigingsnummer`` | _Number_ |
 * | ``VerbruikcategorieUitvoering`` | ``verbruikcategorie_uitvoering`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### EEG Uitvoeringscode
   *
   * **Type**: Text
   */
  EegUitvoeringscode: FieldObject<DataType.Text>;
  /**
   * ### EEG variantcode
   *
   * **Type**: Text
   */
  EegVariantcode: FieldObject<DataType.Text>;
  /**
   * ### EU Type goedkeuringssleutel
   *
   * **Type**: Text
   */
  EuTypeGoedkeuringssleutel: FieldObject<DataType.Text>;
  /**
   * ### Uitvgavenummer verbruikboek
   *
   * **Type**: Text
   */
  UitvgavenummerVerbruikboek: FieldObject<DataType.Text>;
  /**
   * ### Uitvoering wijzigingsnummer
   *
   * **Type**: Number
   */
  UitvoeringWijzigingsnummer: FieldObject<DataType.Number>;
  /**
   * ### Verbruikcategorie uitvoering
   *
   * **Type**: Text
   */
  VerbruikcategorieUitvoering: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  EegUitvoeringscode: Field("eeg_uitvoeringscode", DataType.Text),
  EegVariantcode: Field("eeg_variantcode", DataType.Text),
  EuTypeGoedkeuringssleutel: Field("eu_type_goedkeuringssleutel", DataType.Text),
  UitvgavenummerVerbruikboek: Field("uitvgavenummer_verbruikboek", DataType.Text),
  UitvoeringWijzigingsnummer: Field("uitvoering_wijzigingsnummer", DataType.Number),
  VerbruikcategorieUitvoering: Field("verbruikcategorie_uitvoering", DataType.Text),
};

export const Info = {
  fields: [
    "EegUitvoeringscode",
    "EegVariantcode",
    "EuTypeGoedkeuringssleutel",
    "UitvgavenummerVerbruikboek",
    "UitvoeringWijzigingsnummer",
    "VerbruikcategorieUitvoering",
  ],
  dataset: "2822-t8sx",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Uitvoering Gebruiksgegevens Per Uitgave",
  provider_name: "UitvoeringGebruiksgegevensPerUitgave",
  url:
    "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Uitvoering-Gebruiksgegevens-Per-Uitg/2822-t8sx",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/2822-t8sx",
};

/**
 * ### Open Data RDW: Uitvoering Gebruiksgegevens Per Uitgave
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Uitvoering-Gebruiksgegevens-Per-Uitg/2822-t8sx
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/2822-t8sx
 *
 * **Dataset ID:** 2822-t8sx
 *
 * **Category:** Typegoedkeuring
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
