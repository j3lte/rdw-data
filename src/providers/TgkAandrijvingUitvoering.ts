// *******************************************************
//
// Name: Open Data RDW: TGK Aandrijving Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Aandrijving-Uitvoering/4by9-ammk
// Permalink: https://opendata.rdw.nl/d/4by9-ammk
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Aandrijving Uitvoering
 */
export interface TgkAandrijvingUitvoering_ResponseData {
  /**
   * ### AantalCilinders
   *
   * **Type**: Number
   */
  aantalcilinders?: string;
  /**
   * ### Cilinderinhoud
   *
   * **Type**: Text
   */
  cilinderinhoud?: string;
  /**
   * ### CodeBrandstoftypeMotor
   *
   * **Type**: Text
   */
  codebrandstoftypemotor?: string;
  /**
   * ### CodeCilinderopstelling
   *
   * **Type**: Text
   */
  codecilinderopstelling?: string;
  /**
   * ### CodeUitvoeringTgk
   *
   * **Type**: Text
   */
  codeuitvoeringtgk?: string;
  /**
   * ### CodeVariantTgk
   *
   * **Type**: Text
   */
  codevarianttgk?: string;
  /**
   * ### CodeWerkingMotor
   *
   * **Type**: Text
   */
  codewerkingmotor?: string;
  /**
   * ### ElektromotorIndicator
   *
   * **Type**: Text
   */
  elektromotorindicator?: string;
  /**
   * ### EnkelElektrischSchakelingInd
   *
   * **Type**: Text
   */
  enkelelektrischschakelingind?: string;
  /**
   * ### ExternOplaadbaarIndicator
   *
   * **Type**: Text
   */
  externoplaadbaarindicator?: string;
  /**
   * ### HybrideMotorIndicator
   *
   * **Type**: Text
   */
  hybridemotorindicator?: string;
  /**
   * ### Motorcode
   *
   * **Type**: Text
   */
  motorcode?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### TypegoedkeuringsnummerMotor
   *
   * **Type**: Text
   */
  typegoedkeuringsnummermotor?: string;
  /**
   * ### VolgnummerAandrijving
   *
   * **Type**: Number
   */
  volgnummeraandrijving?: string;
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   */
  volgnummerrevisieuitvoering?: string;
}

/**
 * Fieldnames for **TgkAandrijvingUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Aantalcilinders`` | ``aantalcilinders`` | _Number_ |
 * | ``Cilinderinhoud`` | ``cilinderinhoud`` | _Text_ |
 * | ``Codebrandstoftypemotor`` | ``codebrandstoftypemotor`` | _Text_ |
 * | ``Codecilinderopstelling`` | ``codecilinderopstelling`` | _Text_ |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevarianttgk`` | ``codevarianttgk`` | _Text_ |
 * | ``Codewerkingmotor`` | ``codewerkingmotor`` | _Text_ |
 * | ``Elektromotorindicator`` | ``elektromotorindicator`` | _Text_ |
 * | ``Enkelelektrischschakelingind`` | ``enkelelektrischschakelingind`` | _Text_ |
 * | ``Externoplaadbaarindicator`` | ``externoplaadbaarindicator`` | _Text_ |
 * | ``Hybridemotorindicator`` | ``hybridemotorindicator`` | _Text_ |
 * | ``Motorcode`` | ``motorcode`` | _Text_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Typegoedkeuringsnummermotor`` | ``typegoedkeuringsnummermotor`` | _Text_ |
 * | ``Volgnummeraandrijving`` | ``volgnummeraandrijving`` | _Number_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### AantalCilinders
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalcilinders`
   */
  Aantalcilinders: Field("aantalcilinders", DataType.Number),
  /**
   * ### Cilinderinhoud
   *
   * **Type**: Text
   *
   * **Database Column Name**: `cilinderinhoud`
   */
  Cilinderinhoud: Field("cilinderinhoud", DataType.Text),
  /**
   * ### CodeBrandstoftypeMotor
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codebrandstoftypemotor`
   */
  Codebrandstoftypemotor: Field("codebrandstoftypemotor", DataType.Text),
  /**
   * ### CodeCilinderopstelling
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codecilinderopstelling`
   */
  Codecilinderopstelling: Field("codecilinderopstelling", DataType.Text),
  /**
   * ### CodeUitvoeringTgk
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codeuitvoeringtgk`
   */
  Codeuitvoeringtgk: Field("codeuitvoeringtgk", DataType.Text),
  /**
   * ### CodeVariantTgk
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codevarianttgk`
   */
  Codevarianttgk: Field("codevarianttgk", DataType.Text),
  /**
   * ### CodeWerkingMotor
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codewerkingmotor`
   */
  Codewerkingmotor: Field("codewerkingmotor", DataType.Text),
  /**
   * ### ElektromotorIndicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `elektromotorindicator`
   */
  Elektromotorindicator: Field("elektromotorindicator", DataType.Text),
  /**
   * ### EnkelElektrischSchakelingInd
   *
   * **Type**: Text
   *
   * **Database Column Name**: `enkelelektrischschakelingind`
   */
  Enkelelektrischschakelingind: Field("enkelelektrischschakelingind", DataType.Text),
  /**
   * ### ExternOplaadbaarIndicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `externoplaadbaarindicator`
   */
  Externoplaadbaarindicator: Field("externoplaadbaarindicator", DataType.Text),
  /**
   * ### HybrideMotorIndicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `hybridemotorindicator`
   */
  Hybridemotorindicator: Field("hybridemotorindicator", DataType.Text),
  /**
   * ### Motorcode
   *
   * **Type**: Text
   *
   * **Database Column Name**: `motorcode`
   */
  Motorcode: Field("motorcode", DataType.Text),
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummer`
   */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
   * ### TypegoedkeuringsnummerMotor
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummermotor`
   */
  Typegoedkeuringsnummermotor: Field("typegoedkeuringsnummermotor", DataType.Text),
  /**
   * ### VolgnummerAandrijving
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummeraandrijving`
   */
  Volgnummeraandrijving: Field("volgnummeraandrijving", DataType.Number),
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerrevisieuitvoering`
   */
  Volgnummerrevisieuitvoering: Field("volgnummerrevisieuitvoering", DataType.Number),
};

export const Info = {
  fields: [
    "Aantalcilinders",
    "Cilinderinhoud",
    "Codebrandstoftypemotor",
    "Codecilinderopstelling",
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Codewerkingmotor",
    "Elektromotorindicator",
    "Enkelelektrischschakelingind",
    "Externoplaadbaarindicator",
    "Hybridemotorindicator",
    "Motorcode",
    "Typegoedkeuringsnummer",
    "Typegoedkeuringsnummermotor",
    "Volgnummeraandrijving",
    "Volgnummerrevisieuitvoering",
  ],
  dataset: "4by9-ammk",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Aandrijving Uitvoering",
  provider_name: "TgkAandrijvingUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Aandrijving-Uitvoering/4by9-ammk",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/4by9-ammk",
};

/**
 * ### Open Data RDW: TGK Aandrijving Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Aandrijving-Uitvoering/4by9-ammk
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/4by9-ammk
 *
 * **Dataset ID:** 4by9-ammk
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Aandrijving Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Aantalcilinders, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkAandrijvingUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TgkAandrijvingUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TgkAandrijvingUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
