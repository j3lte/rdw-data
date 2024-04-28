// *******************************************************
//
// Name: Open Data RDW: TGK As Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-As-Uitvoering/xhyb-w7xt
// Permalink: https://opendata.rdw.nl/d/xhyb-w7xt
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK As Uitvoering
 */
export interface TgkAsUitvoering_ResponseData {
  /**
   * ### AangedrevenAsIndicator
   *
   * **Type**: Text
   */
  aangedrevenasindicator?: string;
  /**
   * ### AfstandVolgendeAsBovengrens
   *
   * **Type**: Text
   */
  afstandvolgendeasbovengrens?: string;
  /**
   * ### AfstandVolgendeAsOndergrens
   *
   * **Type**: Text
   */
  afstandvolgendeasondergrens?: string;
  /**
   * ### BelastbareAsIndicator
   *
   * **Type**: Text
   */
  belastbareasindicator?: string;
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
   * ### DubbeleMontageIndicator
   *
   * **Type**: Text
   */
  dubbelemontageindicator?: string;
  /**
   * ### GelijkwaardigAangedrevenAsInd
   *
   * **Type**: Text
   */
  gelijkwaardigaangedrevenasind?: string;
  /**
   * ### GeremdeAsIndicator
   *
   * **Type**: Text
   */
  geremdeasindicator?: string;
  /**
   * ### HefAsIndicator
   *
   * **Type**: Text
   */
  hefasindicator?: string;
  /**
   * ### LuchtveringAangedrevenAsInd
   *
   * **Type**: Text
   */
  luchtveringaangedrevenasind?: string;
  /**
   * ### MaximummassaAsBelastingBgr
   *
   * **Type**: Text
   */
  maximummassaasbelastingbgr?: string;
  /**
   * ### MaximummassaAsBelastingOgr
   *
   * **Type**: Text
   */
  maximummassaasbelastingogr?: string;
  /**
   * ### SpoorbreedteBovengrens
   *
   * **Type**: Text
   */
  spoorbreedtebovengrens?: string;
  /**
   * ### SpoorbreedteOndergrens
   *
   * **Type**: Text
   */
  spoorbreedteondergrens?: string;
  /**
   * ### StuurAsIndicator
   *
   * **Type**: Text
   */
  stuurasindicator?: string;
  /**
   * ### Typegoedkeuringnummer
   *
   * **Type**: Text
   */
  typegoedkeuringnummer?: string;
  /**
   * ### VolgnummerAs
   *
   * **Type**: Number
   */
  volgnummeras?: string;
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   */
  volgnummerrevisieuitvoering?: string;
}

/**
 * Fieldnames for **TgkAsUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Aangedrevenasindicator`` | ``aangedrevenasindicator`` | _Text_ |
 * | ``Afstandvolgendeasbovengrens`` | ``afstandvolgendeasbovengrens`` | _Text_ |
 * | ``Afstandvolgendeasondergrens`` | ``afstandvolgendeasondergrens`` | _Text_ |
 * | ``Belastbareasindicator`` | ``belastbareasindicator`` | _Text_ |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevarianttgk`` | ``codevarianttgk`` | _Text_ |
 * | ``Dubbelemontageindicator`` | ``dubbelemontageindicator`` | _Text_ |
 * | ``Gelijkwaardigaangedrevenasind`` | ``gelijkwaardigaangedrevenasind`` | _Text_ |
 * | ``Geremdeasindicator`` | ``geremdeasindicator`` | _Text_ |
 * | ``Hefasindicator`` | ``hefasindicator`` | _Text_ |
 * | ``Luchtveringaangedrevenasind`` | ``luchtveringaangedrevenasind`` | _Text_ |
 * | ``Maximummassaasbelastingbgr`` | ``maximummassaasbelastingbgr`` | _Text_ |
 * | ``Maximummassaasbelastingogr`` | ``maximummassaasbelastingogr`` | _Text_ |
 * | ``Spoorbreedtebovengrens`` | ``spoorbreedtebovengrens`` | _Text_ |
 * | ``Spoorbreedteondergrens`` | ``spoorbreedteondergrens`` | _Text_ |
 * | ``Stuurasindicator`` | ``stuurasindicator`` | _Text_ |
 * | ``Typegoedkeuringnummer`` | ``typegoedkeuringnummer`` | _Text_ |
 * | ``Volgnummeras`` | ``volgnummeras`` | _Number_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### AangedrevenAsIndicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `aangedrevenasindicator`
   */
  Aangedrevenasindicator: Field("aangedrevenasindicator", DataType.Text),
  /**
   * ### AfstandVolgendeAsBovengrens
   *
   * **Type**: Text
   *
   * **Database Column Name**: `afstandvolgendeasbovengrens`
   */
  Afstandvolgendeasbovengrens: Field("afstandvolgendeasbovengrens", DataType.Text),
  /**
   * ### AfstandVolgendeAsOndergrens
   *
   * **Type**: Text
   *
   * **Database Column Name**: `afstandvolgendeasondergrens`
   */
  Afstandvolgendeasondergrens: Field("afstandvolgendeasondergrens", DataType.Text),
  /**
   * ### BelastbareAsIndicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `belastbareasindicator`
   */
  Belastbareasindicator: Field("belastbareasindicator", DataType.Text),
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
   * ### DubbeleMontageIndicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `dubbelemontageindicator`
   */
  Dubbelemontageindicator: Field("dubbelemontageindicator", DataType.Text),
  /**
   * ### GelijkwaardigAangedrevenAsInd
   *
   * **Type**: Text
   *
   * **Database Column Name**: `gelijkwaardigaangedrevenasind`
   */
  Gelijkwaardigaangedrevenasind: Field("gelijkwaardigaangedrevenasind", DataType.Text),
  /**
   * ### GeremdeAsIndicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `geremdeasindicator`
   */
  Geremdeasindicator: Field("geremdeasindicator", DataType.Text),
  /**
   * ### HefAsIndicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `hefasindicator`
   */
  Hefasindicator: Field("hefasindicator", DataType.Text),
  /**
   * ### LuchtveringAangedrevenAsInd
   *
   * **Type**: Text
   *
   * **Database Column Name**: `luchtveringaangedrevenasind`
   */
  Luchtveringaangedrevenasind: Field("luchtveringaangedrevenasind", DataType.Text),
  /**
   * ### MaximummassaAsBelastingBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `maximummassaasbelastingbgr`
   */
  Maximummassaasbelastingbgr: Field("maximummassaasbelastingbgr", DataType.Text),
  /**
   * ### MaximummassaAsBelastingOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `maximummassaasbelastingogr`
   */
  Maximummassaasbelastingogr: Field("maximummassaasbelastingogr", DataType.Text),
  /**
   * ### SpoorbreedteBovengrens
   *
   * **Type**: Text
   *
   * **Database Column Name**: `spoorbreedtebovengrens`
   */
  Spoorbreedtebovengrens: Field("spoorbreedtebovengrens", DataType.Text),
  /**
   * ### SpoorbreedteOndergrens
   *
   * **Type**: Text
   *
   * **Database Column Name**: `spoorbreedteondergrens`
   */
  Spoorbreedteondergrens: Field("spoorbreedteondergrens", DataType.Text),
  /**
   * ### StuurAsIndicator
   *
   * **Type**: Text
   *
   * **Database Column Name**: `stuurasindicator`
   */
  Stuurasindicator: Field("stuurasindicator", DataType.Text),
  /**
   * ### Typegoedkeuringnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringnummer`
   */
  Typegoedkeuringnummer: Field("typegoedkeuringnummer", DataType.Text),
  /**
   * ### VolgnummerAs
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummeras`
   */
  Volgnummeras: Field("volgnummeras", DataType.Number),
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
    "Aangedrevenasindicator",
    "Afstandvolgendeasbovengrens",
    "Afstandvolgendeasondergrens",
    "Belastbareasindicator",
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Dubbelemontageindicator",
    "Gelijkwaardigaangedrevenasind",
    "Geremdeasindicator",
    "Hefasindicator",
    "Luchtveringaangedrevenasind",
    "Maximummassaasbelastingbgr",
    "Maximummassaasbelastingogr",
    "Spoorbreedtebovengrens",
    "Spoorbreedteondergrens",
    "Stuurasindicator",
    "Typegoedkeuringnummer",
    "Volgnummeras",
    "Volgnummerrevisieuitvoering",
  ],
  dataset: "xhyb-w7xt",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK As Uitvoering",
  provider_name: "TgkAsUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-As-Uitvoering/xhyb-w7xt",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/xhyb-w7xt",
};

/**
 * ### Open Data RDW: TGK As Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-As-Uitvoering/xhyb-w7xt
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/xhyb-w7xt
 *
 * **Dataset ID:** xhyb-w7xt
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK As Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Aangedrevenasindicator, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkAsUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TgkAsUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TgkAsUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
