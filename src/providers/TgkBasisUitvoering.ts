// *******************************************************
//
// Name: Open Data RDW: TGK Basis Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Basis-Uitvoering/byxc-wwua
// Permalink: https://opendata.rdw.nl/d/byxc-wwua
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Basis Uitvoering
 */
export interface TgkBasisUitvoering_ResponseData {
  /**
   * ### AantalDeurenBovengrens
   *
   * **Type**: Number
   */
  aantaldeurenbovengrens?: string;
  /**
   * ### AantalDeurenOndergrens
   *
   * **Type**: Number
   */
  aantaldeurenondergrens?: string;
  /**
   * ### AantalPassagiersBovengrens
   *
   * **Type**: Number
   */
  aantalpassagiersbovengrens?: string;
  /**
   * ### AantalPassagiersOndergrens
   *
   * **Type**: Number
   */
  aantalpassagiersondergrens?: string;
  /**
   * ### AantalRolstoelplaatsenBgr
   *
   * **Type**: Number
   */
  aantalrolstoelplaatsenbgr?: string;
  /**
   * ### AantalRolstoelplaatsenOgr
   *
   * **Type**: Number
   */
  aantalrolstoelplaatsenogr?: string;
  /**
   * ### AantalWielen
   *
   * **Type**: Number
   */
  aantalwielen?: string;
  /**
   * ### AantalZitplaatsenBovengrens
   *
   * **Type**: Number
   */
  aantalzitplaatsenbovengrens?: string;
  /**
   * ### AantalZitplaatsenOndergrens
   *
   * **Type**: Number
   */
  aantalzitplaatsenondergrens?: string;
  /**
   * ### AantalZitplaatsenPassagiersBgr
   *
   * **Type**: Number
   */
  aantalzitplaatsenpassagiersbgr?: string;
  /**
   * ### AantalZitplaatsenPassagiersOgr
   *
   * **Type**: Number
   */
  aantalzitplaatsenpassagiersogr?: string;
  /**
   * ### AantalZitplaatsenStilstaandBgr
   *
   * **Type**: Number
   */
  aantalzitplaatsenstilstaandbgr?: string;
  /**
   * ### AantalZitplaatsenStilstaandOgr
   *
   * **Type**: Number
   */
  aantalzitplaatsenstilstaandogr?: string;
  /**
   * ### BegindatumRevisieUitvoering
   *
   * **Type**: Text
   */
  begindatumrevisieuitvoering?: string;
  /**
   * ### BreedteBovengrens
   *
   * **Type**: Number
   */
  breedtebovengrens?: string;
  /**
   * ### BreedteOndergrens
   *
   * **Type**: Number
   */
  breedteondergrens?: string;
  /**
   * ### CodeLinksRechtsRijdend
   *
   * **Type**: Text
   */
  codelinksrechtsrijdend?: string;
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
   * ### EinddatumRevisieUitvoering
   *
   * **Type**: Text
   */
  einddatumrevisieuitvoering?: string;
  /**
   * ### HoogteBovengrens
   *
   * **Type**: Number
   */
  hoogtebovengrens?: string;
  /**
   * ### HoogteOndergrens
   *
   * **Type**: Number
   */
  hoogteondergrens?: string;
  /**
   * ### LengteBovengrens
   *
   * **Type**: Number
   */
  lengtebovengrens?: string;
  /**
   * ### LengteOndergrens
   *
   * **Type**: Number
   */
  lengteondergrens?: string;
  /**
   * ### MassaLedigBovengrens
   *
   * **Type**: Number
   */
  massaledigbovengrens?: string;
  /**
   * ### MassaLedigOndergrens
   *
   * **Type**: Number
   */
  massaledigondergrens?: string;
  /**
   * ### MassaRijklaarBovengens
   *
   * **Type**: Number
   */
  massarijklaarbovengens?: string;
  /**
   * ### MassaRijklaarOndergens
   *
   * **Type**: Number
   */
  massarijklaarondergens?: string;
  /**
   * ### MaxconstructiesnelheidAhw Ogr
   *
   * **Type**: Number
   */
  maxconstructiesnelheidahw?: string;
  /**
   * ### MaxconstructiesnelheidAhw Bgr
   *
   * **Type**: Number
   */
  maxconstructiesnelheidahw_1?: string;
  /**
   * ### MaximummassaBovengrens
   *
   * **Type**: Number
   */
  maximummassabovengrens?: string;
  /**
   * ### MaximummassaOndergrens
   *
   * **Type**: Number
   */
  maximummassaondergrens?: string;
  /**
   * ### MaxOndersteundeSnelheidBgr
   *
   * **Type**: Number
   */
  maxondersteundesnelheidbgr?: string;
  /**
   * ### MaxOndersteundeSnelheidOgr
   *
   * **Type**: Number
   */
  maxondersteundesnelheidogr?: string;
  /**
   * ### MaxVerticaleBelastOpKoppBgr
   *
   * **Type**: Number
   */
  maxverticalebelastopkoppbgr?: string;
  /**
   * ### MaxVerticaleBelastOpKoppOgr
   *
   * **Type**: Number
   */
  maxverticalebelastopkoppogr?: string;
  /**
   * ### MinimummassaVoltooid
   *
   * **Type**: Number
   */
  minimummassavoltooid?: string;
  /**
   * ### ParamRijweerstandF0Bovengrens
   *
   * **Type**: Number
   */
  paramrijweerstandf0bovengrens?: string;
  /**
   * ### ParamRijweerstandF0Ondergrens
   *
   * **Type**: Number
   */
  paramrijweerstandf0ondergrens?: string;
  /**
   * ### ParamRijweerstandF1Bovengrens
   *
   * **Type**: Number
   */
  paramrijweerstandf1bovengrens?: string;
  /**
   * ### ParamRijweerstandF1Ondergrens
   *
   * **Type**: Number
   */
  paramrijweerstandf1ondergrens?: string;
  /**
   * ### ParamRijweerstandF2Bovengrens
   *
   * **Type**: Number
   */
  paramrijweerstandf2bovengrens?: string;
  /**
   * ### ParamRijweerstandF2Ondergrens
   *
   * **Type**: Number
   */
  paramrijweerstandf2ondergrens?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### Voertuigcategorie
   *
   * **Type**: Text
   */
  voertuigcategorie?: string;
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   */
  volgnummerrevisieuitvoering?: string;
  /**
   * ### WielbasisBovengrens
   *
   * **Type**: Number
   */
  wielbasisbovengrens?: string;
  /**
   * ### WielbasisOndergrens
   *
   * **Type**: Number
   */
  wielbasisondergrens?: string;
}

/**
 * Fieldnames for **TgkBasisUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Aantaldeurenbovengrens`` | ``aantaldeurenbovengrens`` | _Number_ |
 * | ``Aantaldeurenondergrens`` | ``aantaldeurenondergrens`` | _Number_ |
 * | ``Aantalpassagiersbovengrens`` | ``aantalpassagiersbovengrens`` | _Number_ |
 * | ``Aantalpassagiersondergrens`` | ``aantalpassagiersondergrens`` | _Number_ |
 * | ``Aantalrolstoelplaatsenbgr`` | ``aantalrolstoelplaatsenbgr`` | _Number_ |
 * | ``Aantalrolstoelplaatsenogr`` | ``aantalrolstoelplaatsenogr`` | _Number_ |
 * | ``Aantalwielen`` | ``aantalwielen`` | _Number_ |
 * | ``Aantalzitplaatsenbovengrens`` | ``aantalzitplaatsenbovengrens`` | _Number_ |
 * | ``Aantalzitplaatsenondergrens`` | ``aantalzitplaatsenondergrens`` | _Number_ |
 * | ``Aantalzitplaatsenpassagiersbgr`` | ``aantalzitplaatsenpassagiersbgr`` | _Number_ |
 * | ``Aantalzitplaatsenpassagiersogr`` | ``aantalzitplaatsenpassagiersogr`` | _Number_ |
 * | ``Aantalzitplaatsenstilstaandbgr`` | ``aantalzitplaatsenstilstaandbgr`` | _Number_ |
 * | ``Aantalzitplaatsenstilstaandogr`` | ``aantalzitplaatsenstilstaandogr`` | _Number_ |
 * | ``Begindatumrevisieuitvoering`` | ``begindatumrevisieuitvoering`` | _Text_ |
 * | ``Breedtebovengrens`` | ``breedtebovengrens`` | _Number_ |
 * | ``Breedteondergrens`` | ``breedteondergrens`` | _Number_ |
 * | ``Codelinksrechtsrijdend`` | ``codelinksrechtsrijdend`` | _Text_ |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevarianttgk`` | ``codevarianttgk`` | _Text_ |
 * | ``Einddatumrevisieuitvoering`` | ``einddatumrevisieuitvoering`` | _Text_ |
 * | ``Hoogtebovengrens`` | ``hoogtebovengrens`` | _Number_ |
 * | ``Hoogteondergrens`` | ``hoogteondergrens`` | _Number_ |
 * | ``Lengtebovengrens`` | ``lengtebovengrens`` | _Number_ |
 * | ``Lengteondergrens`` | ``lengteondergrens`` | _Number_ |
 * | ``Massaledigbovengrens`` | ``massaledigbovengrens`` | _Number_ |
 * | ``Massaledigondergrens`` | ``massaledigondergrens`` | _Number_ |
 * | ``Massarijklaarbovengens`` | ``massarijklaarbovengens`` | _Number_ |
 * | ``Massarijklaarondergens`` | ``massarijklaarondergens`` | _Number_ |
 * | ``Maxconstructiesnelheidahw`` | ``maxconstructiesnelheidahw`` | _Number_ |
 * | ``Maxconstructiesnelheidahw1`` | ``maxconstructiesnelheidahw_1`` | _Number_ |
 * | ``Maximummassabovengrens`` | ``maximummassabovengrens`` | _Number_ |
 * | ``Maximummassaondergrens`` | ``maximummassaondergrens`` | _Number_ |
 * | ``Maxondersteundesnelheidbgr`` | ``maxondersteundesnelheidbgr`` | _Number_ |
 * | ``Maxondersteundesnelheidogr`` | ``maxondersteundesnelheidogr`` | _Number_ |
 * | ``Maxverticalebelastopkoppbgr`` | ``maxverticalebelastopkoppbgr`` | _Number_ |
 * | ``Maxverticalebelastopkoppogr`` | ``maxverticalebelastopkoppogr`` | _Number_ |
 * | ``Minimummassavoltooid`` | ``minimummassavoltooid`` | _Number_ |
 * | ``Paramrijweerstandf0bovengrens`` | ``paramrijweerstandf0bovengrens`` | _Number_ |
 * | ``Paramrijweerstandf0ondergrens`` | ``paramrijweerstandf0ondergrens`` | _Number_ |
 * | ``Paramrijweerstandf1bovengrens`` | ``paramrijweerstandf1bovengrens`` | _Number_ |
 * | ``Paramrijweerstandf1ondergrens`` | ``paramrijweerstandf1ondergrens`` | _Number_ |
 * | ``Paramrijweerstandf2bovengrens`` | ``paramrijweerstandf2bovengrens`` | _Number_ |
 * | ``Paramrijweerstandf2ondergrens`` | ``paramrijweerstandf2ondergrens`` | _Number_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Voertuigcategorie`` | ``voertuigcategorie`` | _Text_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 * | ``Wielbasisbovengrens`` | ``wielbasisbovengrens`` | _Number_ |
 * | ``Wielbasisondergrens`` | ``wielbasisondergrens`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### AantalDeurenBovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantaldeurenbovengrens`
   */
  Aantaldeurenbovengrens: Field("aantaldeurenbovengrens", DataType.Number),
  /**
   * ### AantalDeurenOndergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantaldeurenondergrens`
   */
  Aantaldeurenondergrens: Field("aantaldeurenondergrens", DataType.Number),
  /**
   * ### AantalPassagiersBovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalpassagiersbovengrens`
   */
  Aantalpassagiersbovengrens: Field("aantalpassagiersbovengrens", DataType.Number),
  /**
   * ### AantalPassagiersOndergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalpassagiersondergrens`
   */
  Aantalpassagiersondergrens: Field("aantalpassagiersondergrens", DataType.Number),
  /**
   * ### AantalRolstoelplaatsenBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalrolstoelplaatsenbgr`
   */
  Aantalrolstoelplaatsenbgr: Field("aantalrolstoelplaatsenbgr", DataType.Number),
  /**
   * ### AantalRolstoelplaatsenOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalrolstoelplaatsenogr`
   */
  Aantalrolstoelplaatsenogr: Field("aantalrolstoelplaatsenogr", DataType.Number),
  /**
   * ### AantalWielen
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalwielen`
   */
  Aantalwielen: Field("aantalwielen", DataType.Number),
  /**
   * ### AantalZitplaatsenBovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalzitplaatsenbovengrens`
   */
  Aantalzitplaatsenbovengrens: Field("aantalzitplaatsenbovengrens", DataType.Number),
  /**
   * ### AantalZitplaatsenOndergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalzitplaatsenondergrens`
   */
  Aantalzitplaatsenondergrens: Field("aantalzitplaatsenondergrens", DataType.Number),
  /**
   * ### AantalZitplaatsenPassagiersBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalzitplaatsenpassagiersbgr`
   */
  Aantalzitplaatsenpassagiersbgr: Field("aantalzitplaatsenpassagiersbgr", DataType.Number),
  /**
   * ### AantalZitplaatsenPassagiersOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalzitplaatsenpassagiersogr`
   */
  Aantalzitplaatsenpassagiersogr: Field("aantalzitplaatsenpassagiersogr", DataType.Number),
  /**
   * ### AantalZitplaatsenStilstaandBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalzitplaatsenstilstaandbgr`
   */
  Aantalzitplaatsenstilstaandbgr: Field("aantalzitplaatsenstilstaandbgr", DataType.Number),
  /**
   * ### AantalZitplaatsenStilstaandOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `aantalzitplaatsenstilstaandogr`
   */
  Aantalzitplaatsenstilstaandogr: Field("aantalzitplaatsenstilstaandogr", DataType.Number),
  /**
   * ### BegindatumRevisieUitvoering
   *
   * **Type**: Text
   *
   * **Database Column Name**: `begindatumrevisieuitvoering`
   */
  Begindatumrevisieuitvoering: Field("begindatumrevisieuitvoering", DataType.Text),
  /**
   * ### BreedteBovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `breedtebovengrens`
   */
  Breedtebovengrens: Field("breedtebovengrens", DataType.Number),
  /**
   * ### BreedteOndergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `breedteondergrens`
   */
  Breedteondergrens: Field("breedteondergrens", DataType.Number),
  /**
   * ### CodeLinksRechtsRijdend
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codelinksrechtsrijdend`
   */
  Codelinksrechtsrijdend: Field("codelinksrechtsrijdend", DataType.Text),
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
   * ### EinddatumRevisieUitvoering
   *
   * **Type**: Text
   *
   * **Database Column Name**: `einddatumrevisieuitvoering`
   */
  Einddatumrevisieuitvoering: Field("einddatumrevisieuitvoering", DataType.Text),
  /**
   * ### HoogteBovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `hoogtebovengrens`
   */
  Hoogtebovengrens: Field("hoogtebovengrens", DataType.Number),
  /**
   * ### HoogteOndergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `hoogteondergrens`
   */
  Hoogteondergrens: Field("hoogteondergrens", DataType.Number),
  /**
   * ### LengteBovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `lengtebovengrens`
   */
  Lengtebovengrens: Field("lengtebovengrens", DataType.Number),
  /**
   * ### LengteOndergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `lengteondergrens`
   */
  Lengteondergrens: Field("lengteondergrens", DataType.Number),
  /**
   * ### MassaLedigBovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `massaledigbovengrens`
   */
  Massaledigbovengrens: Field("massaledigbovengrens", DataType.Number),
  /**
   * ### MassaLedigOndergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `massaledigondergrens`
   */
  Massaledigondergrens: Field("massaledigondergrens", DataType.Number),
  /**
   * ### MassaRijklaarBovengens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `massarijklaarbovengens`
   */
  Massarijklaarbovengens: Field("massarijklaarbovengens", DataType.Number),
  /**
   * ### MassaRijklaarOndergens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `massarijklaarondergens`
   */
  Massarijklaarondergens: Field("massarijklaarondergens", DataType.Number),
  /**
   * ### MaxconstructiesnelheidAhw Ogr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maxconstructiesnelheidahw`
   */
  Maxconstructiesnelheidahw: Field("maxconstructiesnelheidahw", DataType.Number),
  /**
   * ### MaxconstructiesnelheidAhw Bgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maxconstructiesnelheidahw_1`
   */
  Maxconstructiesnelheidahw1: Field("maxconstructiesnelheidahw_1", DataType.Number),
  /**
   * ### MaximummassaBovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassabovengrens`
   */
  Maximummassabovengrens: Field("maximummassabovengrens", DataType.Number),
  /**
   * ### MaximummassaOndergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maximummassaondergrens`
   */
  Maximummassaondergrens: Field("maximummassaondergrens", DataType.Number),
  /**
   * ### MaxOndersteundeSnelheidBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maxondersteundesnelheidbgr`
   */
  Maxondersteundesnelheidbgr: Field("maxondersteundesnelheidbgr", DataType.Number),
  /**
   * ### MaxOndersteundeSnelheidOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maxondersteundesnelheidogr`
   */
  Maxondersteundesnelheidogr: Field("maxondersteundesnelheidogr", DataType.Number),
  /**
   * ### MaxVerticaleBelastOpKoppBgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maxverticalebelastopkoppbgr`
   */
  Maxverticalebelastopkoppbgr: Field("maxverticalebelastopkoppbgr", DataType.Number),
  /**
   * ### MaxVerticaleBelastOpKoppOgr
   *
   * **Type**: Number
   *
   * **Database Column Name**: `maxverticalebelastopkoppogr`
   */
  Maxverticalebelastopkoppogr: Field("maxverticalebelastopkoppogr", DataType.Number),
  /**
   * ### MinimummassaVoltooid
   *
   * **Type**: Number
   *
   * **Database Column Name**: `minimummassavoltooid`
   */
  Minimummassavoltooid: Field("minimummassavoltooid", DataType.Number),
  /**
   * ### ParamRijweerstandF0Bovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `paramrijweerstandf0bovengrens`
   */
  Paramrijweerstandf0bovengrens: Field("paramrijweerstandf0bovengrens", DataType.Number),
  /**
   * ### ParamRijweerstandF0Ondergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `paramrijweerstandf0ondergrens`
   */
  Paramrijweerstandf0ondergrens: Field("paramrijweerstandf0ondergrens", DataType.Number),
  /**
   * ### ParamRijweerstandF1Bovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `paramrijweerstandf1bovengrens`
   */
  Paramrijweerstandf1bovengrens: Field("paramrijweerstandf1bovengrens", DataType.Number),
  /**
   * ### ParamRijweerstandF1Ondergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `paramrijweerstandf1ondergrens`
   */
  Paramrijweerstandf1ondergrens: Field("paramrijweerstandf1ondergrens", DataType.Number),
  /**
   * ### ParamRijweerstandF2Bovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `paramrijweerstandf2bovengrens`
   */
  Paramrijweerstandf2bovengrens: Field("paramrijweerstandf2bovengrens", DataType.Number),
  /**
   * ### ParamRijweerstandF2Ondergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `paramrijweerstandf2ondergrens`
   */
  Paramrijweerstandf2ondergrens: Field("paramrijweerstandf2ondergrens", DataType.Number),
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummer`
   */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
   * ### Voertuigcategorie
   *
   * **Type**: Text
   *
   * **Database Column Name**: `voertuigcategorie`
   */
  Voertuigcategorie: Field("voertuigcategorie", DataType.Text),
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummerrevisieuitvoering`
   */
  Volgnummerrevisieuitvoering: Field("volgnummerrevisieuitvoering", DataType.Number),
  /**
   * ### WielbasisBovengrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `wielbasisbovengrens`
   */
  Wielbasisbovengrens: Field("wielbasisbovengrens", DataType.Number),
  /**
   * ### WielbasisOndergrens
   *
   * **Type**: Number
   *
   * **Database Column Name**: `wielbasisondergrens`
   */
  Wielbasisondergrens: Field("wielbasisondergrens", DataType.Number),
};

export const Info = {
  fields: [
    "Aantaldeurenbovengrens",
    "Aantaldeurenondergrens",
    "Aantalpassagiersbovengrens",
    "Aantalpassagiersondergrens",
    "Aantalrolstoelplaatsenbgr",
    "Aantalrolstoelplaatsenogr",
    "Aantalwielen",
    "Aantalzitplaatsenbovengrens",
    "Aantalzitplaatsenondergrens",
    "Aantalzitplaatsenpassagiersbgr",
    "Aantalzitplaatsenpassagiersogr",
    "Aantalzitplaatsenstilstaandbgr",
    "Aantalzitplaatsenstilstaandogr",
    "Begindatumrevisieuitvoering",
    "Breedtebovengrens",
    "Breedteondergrens",
    "Codelinksrechtsrijdend",
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Einddatumrevisieuitvoering",
    "Hoogtebovengrens",
    "Hoogteondergrens",
    "Lengtebovengrens",
    "Lengteondergrens",
    "Massaledigbovengrens",
    "Massaledigondergrens",
    "Massarijklaarbovengens",
    "Massarijklaarondergens",
    "Maxconstructiesnelheidahw",
    "Maxconstructiesnelheidahw1",
    "Maximummassabovengrens",
    "Maximummassaondergrens",
    "Maxondersteundesnelheidbgr",
    "Maxondersteundesnelheidogr",
    "Maxverticalebelastopkoppbgr",
    "Maxverticalebelastopkoppogr",
    "Minimummassavoltooid",
    "Paramrijweerstandf0bovengrens",
    "Paramrijweerstandf0ondergrens",
    "Paramrijweerstandf1bovengrens",
    "Paramrijweerstandf1ondergrens",
    "Paramrijweerstandf2bovengrens",
    "Paramrijweerstandf2ondergrens",
    "Typegoedkeuringsnummer",
    "Voertuigcategorie",
    "Volgnummerrevisieuitvoering",
    "Wielbasisbovengrens",
    "Wielbasisondergrens",
  ],
  dataset: "byxc-wwua",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Basis Uitvoering",
  provider_name: "TgkBasisUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Basis-Uitvoering/byxc-wwua",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/byxc-wwua",
};

/**
 * ### Open Data RDW: TGK Basis Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Basis-Uitvoering/byxc-wwua
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/byxc-wwua
 *
 * **Dataset ID:** byxc-wwua
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Basis Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Aantaldeurenbovengrens, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkBasisUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TgkBasisUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TgkBasisUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
