// *******************************************************
//
// Name: Open Data RDW: TGK Energiebron Uitvoering
//
// Category: Typegoedkeuring
// Link: https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Energiebron-Uitvoering/gr7t-qfnb
// Permalink: https://opendata.rdw.nl/d/gr7t-qfnb
// Owner: BICC
// Creator: BICC
//
// *******************************************************

import type { AuthOpts, Options, SodaQuery } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: TGK Energiebron Uitvoering
 */
export interface TgkEnergiebronUitvoering_ResponseData {
  /**
   * ### ActieradiusExternOplaadWltpBgr
   *
   * **Type**: Text
   */
  actieradiusexternoplaadwltpbgr?: string;
  /**
   * ### ActieradiusExternOplaadWltpOgr
   *
   * **Type**: Text
   */
  actieradiusexternoplaadwltpogr?: string;
  /**
   * ### ActieradiusVolledigElekWltpBgr
   *
   * **Type**: Text
   */
  actieradiusvolledigelekwltpbgr?: string;
  /**
   * ### ActieradiusVolledigElekWltpOgr
   *
   * **Type**: Text
   */
  actieradiusvolledigelekwltpogr?: string;
  /**
   * ### BrandstofverbruikGecombWltpBgr
   *
   * **Type**: Text
   */
  brandstofverbruikgecombwltpbgr?: string;
  /**
   * ### BrandstofverbruikGecombWltpOgr
   *
   * **Type**: Text
   */
  brandstofverbruikgecombwltpogr?: string;
  /**
   * ### BrandstVerbrGewogenCombWltpBgr
   *
   * **Type**: Text
   */
  brandstverbrgewogencombwltpbgr?: string;
  /**
   * ### BrandstVerbrGewogenCombWltpOgr
   *
   * **Type**: Text
   */
  brandstverbrgewogencombwltpogr?: string;
  /**
   * ### Co2EmisGecombineerdNedcHoog
   *
   * **Type**: Text
   */
  co2emisgecombineerdnedchoog?: string;
  /**
   * ### Co2EmisGecombineerdNedcLaag
   *
   * **Type**: Text
   */
  co2emisgecombineerdnedclaag?: string;
  /**
   * ### Co2EmisGecombineerdWltpBgr
   *
   * **Type**: Text
   */
  co2emisgecombineerdwltpbgr?: string;
  /**
   * ### Co2EmisGecombineerdWltpOgr
   *
   * **Type**: Text
   */
  co2emisgecombineerdwltpogr?: string;
  /**
   * ### Co2EmisGew GecombNedcHoog
   *
   * **Type**: Text
   */
  co2emisgew_gecombnedchoog?: string;
  /**
   * ### Co2EmisGew GecombNedcLaag
   *
   * **Type**: Text
   */
  co2emisgew_gecombnedclaag?: string;
  /**
   * ### Co2EmisGewogenGecombWltpBgr
   *
   * **Type**: Text
   */
  co2emisgewogengecombwltpbgr?: string;
  /**
   * ### Co2EmisGewogenGecombWltpOgr
   *
   * **Type**: Text
   */
  co2emisgewogengecombwltpogr?: string;
  /**
   * ### Co2EmissieBuitenNedcHoog
   *
   * **Type**: Text
   */
  co2emissiebuitennedchoog?: string;
  /**
   * ### Co2EmissieBuitenNedcLaag
   *
   * **Type**: Text
   */
  co2emissiebuitennedclaag?: string;
  /**
   * ### Co2EmissieStadNedcHoog
   *
   * **Type**: Text
   */
  co2emissiestadnedchoog?: string;
  /**
   * ### Co2EmissieStadNedcLaag
   *
   * **Type**: Text
   */
  co2emissiestadnedclaag?: string;
  /**
   * ### CodeEnergiebron
   *
   * **Type**: Text
   */
  codeenergiebron?: string;
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
   * ### CoEmissieEsc
   *
   * **Type**: Text
   */
  coemissieesc?: string;
  /**
   * ### CoEmissieEtc
   *
   * **Type**: Text
   */
  coemissieetc?: string;
  /**
   * ### CoEmissieType1
   *
   * **Type**: Text
   */
  coemissietype1?: string;
  /**
   * ### CoEmissieType1Wltp
   *
   * **Type**: Text
   */
  coemissietype1wltp?: string;
  /**
   * ### CoEmissieWhsc
   *
   * **Type**: Text
   */
  coemissiewhsc?: string;
  /**
   * ### CoEmissieWhtc
   *
   * **Type**: Text
   */
  coemissiewhtc?: string;
  /**
   * ### ElekActieradiusExtOplaadbNedc
   *
   * **Type**: Text
   */
  elekactieradiusextoplaadbnedc?: string;
  /**
   * ### ElektrischeActieradiusNedc
   *
   * **Type**: Text
   */
  elektrischeactieradiusnedc?: string;
  /**
   * ### ElekVerbrExternOplaadbWltpBgr
   *
   * **Type**: Text
   */
  elekverbrexternoplaadbwltpbgr?: string;
  /**
   * ### ElekVerbrExternOplaadbWltpOgr
   *
   * **Type**: Text
   */
  elekverbrexternoplaadbwltpogr?: string;
  /**
   * ### ElekVerbruikGecombineerdNedc
   *
   * **Type**: Text
   */
  elekverbruikgecombineerdnedc?: string;
  /**
   * ### ElekVerbruikGew GecombVerbrNedc
   *
   * **Type**: Text
   */
  elekverbruikgew?: string;
  /**
   * ### EmissieAantalDeeltjesEsc
   *
   * **Type**: Text
   */
  emissieaantaldeeltjesesc?: string;
  /**
   * ### EmissieAantalDeeltjesEtc
   *
   * **Type**: Text
   */
  emissieaantaldeeltjesetc?: string;
  /**
   * ### EmissieAantalDeeltjesType1
   *
   * **Type**: Text
   */
  emissieaantaldeeltjestype1?: string;
  /**
   * ### EmissieAantalDeeltjesType1Wltp
   *
   * **Type**: Text
   */
  emissieaantaldeeltjestype1wltp?: string;
  /**
   * ### EmissieAantalDeeltjesWhsc
   *
   * **Type**: Text
   */
  emissieaantaldeeltjeswhsc?: string;
  /**
   * ### EmissieAantalDeeltjesWhtc
   *
   * **Type**: Text
   */
  emissieaantaldeeltjeswhtc?: string;
  /**
   * ### EmissiedeeltjesEsc
   *
   * **Type**: Text
   */
  emissiedeeltjesesc?: string;
  /**
   * ### EmissiedeeltjesEtc
   *
   * **Type**: Text
   */
  emissiedeeltjesetc?: string;
  /**
   * ### EmissiedeeltjesType1
   *
   * **Type**: Text
   */
  emissiedeeltjestype1?: string;
  /**
   * ### EmissiedeeltjesType1Wltp
   *
   * **Type**: Text
   */
  emissiedeeltjestype1wltp?: string;
  /**
   * ### EmissiedeeltjesWhsc
   *
   * **Type**: Text
   */
  emissiedeeltjeswhsc?: string;
  /**
   * ### EmissiedeeltjesWhtc
   *
   * **Type**: Text
   */
  emissiedeeltjeswhtc?: string;
  /**
   * ### GeluidsniveauBovengrens
   *
   * **Type**: Text
   */
  geluidsniveaubovengrens?: string;
  /**
   * ### GeluidsniveauOndergrens
   *
   * **Type**: Text
   */
  geluidsniveauondergrens?: string;
  /**
   * ### GeluidsniveauRijdend
   *
   * **Type**: Text
   */
  geluidsniveaurijdend?: string;
  /**
   * ### GeluidsniveauToerentalBgr
   *
   * **Type**: Text
   */
  geluidsniveautoerentalbgr?: string;
  /**
   * ### GeluidsniveauToerentalOgr
   *
   * **Type**: Text
   */
  geluidsniveautoerentalogr?: string;
  /**
   * ### HcEmissieType1
   *
   * **Type**: Text
   */
  hcemissietype1?: string;
  /**
   * ### HcNoxEmissieType1
   *
   * **Type**: Text
   */
  hcnoxemissietype1?: string;
  /**
   * ### MaxBiopercentageBrandstof
   *
   * **Type**: Text
   */
  maxbiopercentagebrandstof?: string;
  /**
   * ### MaximumconstructiesnelheidBgr
   *
   * **Type**: Text
   */
  maximumconstructiesnelheidbgr?: string;
  /**
   * ### MaximumconstructiesnelheidOgr
   *
   * **Type**: Text
   */
  maximumconstructiesnelheidogr?: string;
  /**
   * ### MaximumNettoVermogenBgr
   *
   * **Type**: Text
   */
  maximumnettovermogenbgr?: string;
  /**
   * ### MaximumNettoVermogenOgr
   *
   * **Type**: Text
   */
  maximumnettovermogenogr?: string;
  /**
   * ### MaximumVermogen30MinBgr
   *
   * **Type**: Text
   */
  maximumvermogen30minbgr?: string;
  /**
   * ### MaximumVermogen30MinOgr
   *
   * **Type**: Text
   */
  maximumvermogen30minogr?: string;
  /**
   * ### NoxEmissieEsc
   *
   * **Type**: Text
   */
  noxemissieesc?: string;
  /**
   * ### NoxEmissieEtc
   *
   * **Type**: Text
   */
  noxemissieetc?: string;
  /**
   * ### NoxEmissieType1
   *
   * **Type**: Text
   */
  noxemissietype1?: string;
  /**
   * ### NoxEmissieType1Wltp
   *
   * **Type**: Text
   */
  noxemissietype1wltp?: string;
  /**
   * ### NoxEmissieWhsc
   *
   * **Type**: Text
   */
  noxemissiewhsc?: string;
  /**
   * ### NoxEmissieWhtc
   *
   * **Type**: Text
   */
  noxemissiewhtc?: string;
  /**
   * ### RegelgevingEmissieMotoren
   *
   * **Type**: Text
   */
  regelgevingemissiemotoren?: string;
  /**
   * ### RegelgevingEmissieVoertuigen
   *
   * **Type**: Text
   */
  regelgevingemissievoertuigen?: string;
  /**
   * ### ToerentalMaxNettoVermogenBgr
   *
   * **Type**: Text
   */
  toerentalmaxnettovermogenbgr?: string;
  /**
   * ### ToerentalMaxNettoVermogenOgr
   *
   * **Type**: Text
   */
  toerentalmaxnettovermogenogr?: string;
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   */
  typegoedkeuringsnummer?: string;
  /**
   * ### Uitlaatemissieniveau
   *
   * **Type**: Text
   */
  uitlaatemissieniveau?: string;
  /**
   * ### VerbrGewogenGecombNedcHoog
   *
   * **Type**: Text
   */
  verbrgewogengecombnedchoog?: string;
  /**
   * ### VerbrGewogenGecombNedcLaag
   *
   * **Type**: Text
   */
  verbrgewogengecombnedclaag?: string;
  /**
   * ### VerbruikGecombineerdNedcHoog
   *
   * **Type**: Text
   */
  verbruikgecombineerdnedchoog?: string;
  /**
   * ### VerbruikGecombineerdNedcLaag
   *
   * **Type**: Text
   */
  verbruikgecombineerdnedclaag?: string;
  /**
   * ### VerbruikVolledigElekWltpBgr
   *
   * **Type**: Text
   */
  verbruikvolledigelekwltpbgr?: string;
  /**
   * ### VerbruikVolledigElekWltpOgr
   *
   * **Type**: Text
   */
  verbruikvolledigelekwltpogr?: string;
  /**
   * ### VolgnummerAandrijving
   *
   * **Type**: Number
   */
  volgnummeraandrijving?: string;
  /**
   * ### VolgnummerEnergiebron
   *
   * **Type**: Text
   */
  volgnummerenergiebron?: string;
  /**
   * ### VolgnummerRevisieUitvoering
   *
   * **Type**: Number
   */
  volgnummerrevisieuitvoering?: string;
}

/**
 * Fieldnames for **TgkEnergiebronUitvoering**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``Actieradiusexternoplaadwltpbgr`` | ``actieradiusexternoplaadwltpbgr`` | _Text_ |
 * | ``Actieradiusexternoplaadwltpogr`` | ``actieradiusexternoplaadwltpogr`` | _Text_ |
 * | ``Actieradiusvolledigelekwltpbgr`` | ``actieradiusvolledigelekwltpbgr`` | _Text_ |
 * | ``Actieradiusvolledigelekwltpogr`` | ``actieradiusvolledigelekwltpogr`` | _Text_ |
 * | ``Brandstofverbruikgecombwltpbgr`` | ``brandstofverbruikgecombwltpbgr`` | _Text_ |
 * | ``Brandstofverbruikgecombwltpogr`` | ``brandstofverbruikgecombwltpogr`` | _Text_ |
 * | ``Brandstverbrgewogencombwltpbgr`` | ``brandstverbrgewogencombwltpbgr`` | _Text_ |
 * | ``Brandstverbrgewogencombwltpogr`` | ``brandstverbrgewogencombwltpogr`` | _Text_ |
 * | ``Co2emisgecombineerdnedchoog`` | ``co2emisgecombineerdnedchoog`` | _Text_ |
 * | ``Co2emisgecombineerdnedclaag`` | ``co2emisgecombineerdnedclaag`` | _Text_ |
 * | ``Co2emisgecombineerdwltpbgr`` | ``co2emisgecombineerdwltpbgr`` | _Text_ |
 * | ``Co2emisgecombineerdwltpogr`` | ``co2emisgecombineerdwltpogr`` | _Text_ |
 * | ``Co2emisgewGecombnedchoog`` | ``co2emisgew_gecombnedchoog`` | _Text_ |
 * | ``Co2emisgewGecombnedclaag`` | ``co2emisgew_gecombnedclaag`` | _Text_ |
 * | ``Co2emisgewogengecombwltpbgr`` | ``co2emisgewogengecombwltpbgr`` | _Text_ |
 * | ``Co2emisgewogengecombwltpogr`` | ``co2emisgewogengecombwltpogr`` | _Text_ |
 * | ``Co2emissiebuitennedchoog`` | ``co2emissiebuitennedchoog`` | _Text_ |
 * | ``Co2emissiebuitennedclaag`` | ``co2emissiebuitennedclaag`` | _Text_ |
 * | ``Co2emissiestadnedchoog`` | ``co2emissiestadnedchoog`` | _Text_ |
 * | ``Co2emissiestadnedclaag`` | ``co2emissiestadnedclaag`` | _Text_ |
 * | ``Codeenergiebron`` | ``codeenergiebron`` | _Text_ |
 * | ``Codeuitvoeringtgk`` | ``codeuitvoeringtgk`` | _Text_ |
 * | ``Codevarianttgk`` | ``codevarianttgk`` | _Text_ |
 * | ``Coemissieesc`` | ``coemissieesc`` | _Text_ |
 * | ``Coemissieetc`` | ``coemissieetc`` | _Text_ |
 * | ``Coemissietype1`` | ``coemissietype1`` | _Text_ |
 * | ``Coemissietype1wltp`` | ``coemissietype1wltp`` | _Text_ |
 * | ``Coemissiewhsc`` | ``coemissiewhsc`` | _Text_ |
 * | ``Coemissiewhtc`` | ``coemissiewhtc`` | _Text_ |
 * | ``Elekactieradiusextoplaadbnedc`` | ``elekactieradiusextoplaadbnedc`` | _Text_ |
 * | ``Elektrischeactieradiusnedc`` | ``elektrischeactieradiusnedc`` | _Text_ |
 * | ``Elekverbrexternoplaadbwltpbgr`` | ``elekverbrexternoplaadbwltpbgr`` | _Text_ |
 * | ``Elekverbrexternoplaadbwltpogr`` | ``elekverbrexternoplaadbwltpogr`` | _Text_ |
 * | ``Elekverbruikgecombineerdnedc`` | ``elekverbruikgecombineerdnedc`` | _Text_ |
 * | ``Elekverbruikgew`` | ``elekverbruikgew`` | _Text_ |
 * | ``Emissieaantaldeeltjesesc`` | ``emissieaantaldeeltjesesc`` | _Text_ |
 * | ``Emissieaantaldeeltjesetc`` | ``emissieaantaldeeltjesetc`` | _Text_ |
 * | ``Emissieaantaldeeltjestype1`` | ``emissieaantaldeeltjestype1`` | _Text_ |
 * | ``Emissieaantaldeeltjestype1wltp`` | ``emissieaantaldeeltjestype1wltp`` | _Text_ |
 * | ``Emissieaantaldeeltjeswhsc`` | ``emissieaantaldeeltjeswhsc`` | _Text_ |
 * | ``Emissieaantaldeeltjeswhtc`` | ``emissieaantaldeeltjeswhtc`` | _Text_ |
 * | ``Emissiedeeltjesesc`` | ``emissiedeeltjesesc`` | _Text_ |
 * | ``Emissiedeeltjesetc`` | ``emissiedeeltjesetc`` | _Text_ |
 * | ``Emissiedeeltjestype1`` | ``emissiedeeltjestype1`` | _Text_ |
 * | ``Emissiedeeltjestype1wltp`` | ``emissiedeeltjestype1wltp`` | _Text_ |
 * | ``Emissiedeeltjeswhsc`` | ``emissiedeeltjeswhsc`` | _Text_ |
 * | ``Emissiedeeltjeswhtc`` | ``emissiedeeltjeswhtc`` | _Text_ |
 * | ``Geluidsniveaubovengrens`` | ``geluidsniveaubovengrens`` | _Text_ |
 * | ``Geluidsniveauondergrens`` | ``geluidsniveauondergrens`` | _Text_ |
 * | ``Geluidsniveaurijdend`` | ``geluidsniveaurijdend`` | _Text_ |
 * | ``Geluidsniveautoerentalbgr`` | ``geluidsniveautoerentalbgr`` | _Text_ |
 * | ``Geluidsniveautoerentalogr`` | ``geluidsniveautoerentalogr`` | _Text_ |
 * | ``Hcemissietype1`` | ``hcemissietype1`` | _Text_ |
 * | ``Hcnoxemissietype1`` | ``hcnoxemissietype1`` | _Text_ |
 * | ``Maxbiopercentagebrandstof`` | ``maxbiopercentagebrandstof`` | _Text_ |
 * | ``Maximumconstructiesnelheidbgr`` | ``maximumconstructiesnelheidbgr`` | _Text_ |
 * | ``Maximumconstructiesnelheidogr`` | ``maximumconstructiesnelheidogr`` | _Text_ |
 * | ``Maximumnettovermogenbgr`` | ``maximumnettovermogenbgr`` | _Text_ |
 * | ``Maximumnettovermogenogr`` | ``maximumnettovermogenogr`` | _Text_ |
 * | ``Maximumvermogen30minbgr`` | ``maximumvermogen30minbgr`` | _Text_ |
 * | ``Maximumvermogen30minogr`` | ``maximumvermogen30minogr`` | _Text_ |
 * | ``Noxemissieesc`` | ``noxemissieesc`` | _Text_ |
 * | ``Noxemissieetc`` | ``noxemissieetc`` | _Text_ |
 * | ``Noxemissietype1`` | ``noxemissietype1`` | _Text_ |
 * | ``Noxemissietype1wltp`` | ``noxemissietype1wltp`` | _Text_ |
 * | ``Noxemissiewhsc`` | ``noxemissiewhsc`` | _Text_ |
 * | ``Noxemissiewhtc`` | ``noxemissiewhtc`` | _Text_ |
 * | ``Regelgevingemissiemotoren`` | ``regelgevingemissiemotoren`` | _Text_ |
 * | ``Regelgevingemissievoertuigen`` | ``regelgevingemissievoertuigen`` | _Text_ |
 * | ``Toerentalmaxnettovermogenbgr`` | ``toerentalmaxnettovermogenbgr`` | _Text_ |
 * | ``Toerentalmaxnettovermogenogr`` | ``toerentalmaxnettovermogenogr`` | _Text_ |
 * | ``Typegoedkeuringsnummer`` | ``typegoedkeuringsnummer`` | _Text_ |
 * | ``Uitlaatemissieniveau`` | ``uitlaatemissieniveau`` | _Text_ |
 * | ``Verbrgewogengecombnedchoog`` | ``verbrgewogengecombnedchoog`` | _Text_ |
 * | ``Verbrgewogengecombnedclaag`` | ``verbrgewogengecombnedclaag`` | _Text_ |
 * | ``Verbruikgecombineerdnedchoog`` | ``verbruikgecombineerdnedchoog`` | _Text_ |
 * | ``Verbruikgecombineerdnedclaag`` | ``verbruikgecombineerdnedclaag`` | _Text_ |
 * | ``Verbruikvolledigelekwltpbgr`` | ``verbruikvolledigelekwltpbgr`` | _Text_ |
 * | ``Verbruikvolledigelekwltpogr`` | ``verbruikvolledigelekwltpogr`` | _Text_ |
 * | ``Volgnummeraandrijving`` | ``volgnummeraandrijving`` | _Number_ |
 * | ``Volgnummerenergiebron`` | ``volgnummerenergiebron`` | _Text_ |
 * | ``Volgnummerrevisieuitvoering`` | ``volgnummerrevisieuitvoering`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export const Fields = {
  /**
   * ### ActieradiusExternOplaadWltpBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `actieradiusexternoplaadwltpbgr`
   */
  Actieradiusexternoplaadwltpbgr: Field("actieradiusexternoplaadwltpbgr", DataType.Text),
  /**
   * ### ActieradiusExternOplaadWltpOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `actieradiusexternoplaadwltpogr`
   */
  Actieradiusexternoplaadwltpogr: Field("actieradiusexternoplaadwltpogr", DataType.Text),
  /**
   * ### ActieradiusVolledigElekWltpBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `actieradiusvolledigelekwltpbgr`
   */
  Actieradiusvolledigelekwltpbgr: Field("actieradiusvolledigelekwltpbgr", DataType.Text),
  /**
   * ### ActieradiusVolledigElekWltpOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `actieradiusvolledigelekwltpogr`
   */
  Actieradiusvolledigelekwltpogr: Field("actieradiusvolledigelekwltpogr", DataType.Text),
  /**
   * ### BrandstofverbruikGecombWltpBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `brandstofverbruikgecombwltpbgr`
   */
  Brandstofverbruikgecombwltpbgr: Field("brandstofverbruikgecombwltpbgr", DataType.Text),
  /**
   * ### BrandstofverbruikGecombWltpOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `brandstofverbruikgecombwltpogr`
   */
  Brandstofverbruikgecombwltpogr: Field("brandstofverbruikgecombwltpogr", DataType.Text),
  /**
   * ### BrandstVerbrGewogenCombWltpBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `brandstverbrgewogencombwltpbgr`
   */
  Brandstverbrgewogencombwltpbgr: Field("brandstverbrgewogencombwltpbgr", DataType.Text),
  /**
   * ### BrandstVerbrGewogenCombWltpOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `brandstverbrgewogencombwltpogr`
   */
  Brandstverbrgewogencombwltpogr: Field("brandstverbrgewogencombwltpogr", DataType.Text),
  /**
   * ### Co2EmisGecombineerdNedcHoog
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emisgecombineerdnedchoog`
   */
  Co2emisgecombineerdnedchoog: Field("co2emisgecombineerdnedchoog", DataType.Text),
  /**
   * ### Co2EmisGecombineerdNedcLaag
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emisgecombineerdnedclaag`
   */
  Co2emisgecombineerdnedclaag: Field("co2emisgecombineerdnedclaag", DataType.Text),
  /**
   * ### Co2EmisGecombineerdWltpBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emisgecombineerdwltpbgr`
   */
  Co2emisgecombineerdwltpbgr: Field("co2emisgecombineerdwltpbgr", DataType.Text),
  /**
   * ### Co2EmisGecombineerdWltpOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emisgecombineerdwltpogr`
   */
  Co2emisgecombineerdwltpogr: Field("co2emisgecombineerdwltpogr", DataType.Text),
  /**
   * ### Co2EmisGew GecombNedcHoog
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emisgew_gecombnedchoog`
   */
  Co2emisgewGecombnedchoog: Field("co2emisgew_gecombnedchoog", DataType.Text),
  /**
   * ### Co2EmisGew GecombNedcLaag
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emisgew_gecombnedclaag`
   */
  Co2emisgewGecombnedclaag: Field("co2emisgew_gecombnedclaag", DataType.Text),
  /**
   * ### Co2EmisGewogenGecombWltpBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emisgewogengecombwltpbgr`
   */
  Co2emisgewogengecombwltpbgr: Field("co2emisgewogengecombwltpbgr", DataType.Text),
  /**
   * ### Co2EmisGewogenGecombWltpOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emisgewogengecombwltpogr`
   */
  Co2emisgewogengecombwltpogr: Field("co2emisgewogengecombwltpogr", DataType.Text),
  /**
   * ### Co2EmissieBuitenNedcHoog
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emissiebuitennedchoog`
   */
  Co2emissiebuitennedchoog: Field("co2emissiebuitennedchoog", DataType.Text),
  /**
   * ### Co2EmissieBuitenNedcLaag
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emissiebuitennedclaag`
   */
  Co2emissiebuitennedclaag: Field("co2emissiebuitennedclaag", DataType.Text),
  /**
   * ### Co2EmissieStadNedcHoog
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emissiestadnedchoog`
   */
  Co2emissiestadnedchoog: Field("co2emissiestadnedchoog", DataType.Text),
  /**
   * ### Co2EmissieStadNedcLaag
   *
   * **Type**: Text
   *
   * **Database Column Name**: `co2emissiestadnedclaag`
   */
  Co2emissiestadnedclaag: Field("co2emissiestadnedclaag", DataType.Text),
  /**
   * ### CodeEnergiebron
   *
   * **Type**: Text
   *
   * **Database Column Name**: `codeenergiebron`
   */
  Codeenergiebron: Field("codeenergiebron", DataType.Text),
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
   * ### CoEmissieEsc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `coemissieesc`
   */
  Coemissieesc: Field("coemissieesc", DataType.Text),
  /**
   * ### CoEmissieEtc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `coemissieetc`
   */
  Coemissieetc: Field("coemissieetc", DataType.Text),
  /**
   * ### CoEmissieType1
   *
   * **Type**: Text
   *
   * **Database Column Name**: `coemissietype1`
   */
  Coemissietype1: Field("coemissietype1", DataType.Text),
  /**
   * ### CoEmissieType1Wltp
   *
   * **Type**: Text
   *
   * **Database Column Name**: `coemissietype1wltp`
   */
  Coemissietype1wltp: Field("coemissietype1wltp", DataType.Text),
  /**
   * ### CoEmissieWhsc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `coemissiewhsc`
   */
  Coemissiewhsc: Field("coemissiewhsc", DataType.Text),
  /**
   * ### CoEmissieWhtc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `coemissiewhtc`
   */
  Coemissiewhtc: Field("coemissiewhtc", DataType.Text),
  /**
   * ### ElekActieradiusExtOplaadbNedc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `elekactieradiusextoplaadbnedc`
   */
  Elekactieradiusextoplaadbnedc: Field("elekactieradiusextoplaadbnedc", DataType.Text),
  /**
   * ### ElektrischeActieradiusNedc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `elektrischeactieradiusnedc`
   */
  Elektrischeactieradiusnedc: Field("elektrischeactieradiusnedc", DataType.Text),
  /**
   * ### ElekVerbrExternOplaadbWltpBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `elekverbrexternoplaadbwltpbgr`
   */
  Elekverbrexternoplaadbwltpbgr: Field("elekverbrexternoplaadbwltpbgr", DataType.Text),
  /**
   * ### ElekVerbrExternOplaadbWltpOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `elekverbrexternoplaadbwltpogr`
   */
  Elekverbrexternoplaadbwltpogr: Field("elekverbrexternoplaadbwltpogr", DataType.Text),
  /**
   * ### ElekVerbruikGecombineerdNedc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `elekverbruikgecombineerdnedc`
   */
  Elekverbruikgecombineerdnedc: Field("elekverbruikgecombineerdnedc", DataType.Text),
  /**
   * ### ElekVerbruikGew GecombVerbrNedc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `elekverbruikgew`
   */
  Elekverbruikgew: Field("elekverbruikgew", DataType.Text),
  /**
   * ### EmissieAantalDeeltjesEsc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissieaantaldeeltjesesc`
   */
  Emissieaantaldeeltjesesc: Field("emissieaantaldeeltjesesc", DataType.Text),
  /**
   * ### EmissieAantalDeeltjesEtc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissieaantaldeeltjesetc`
   */
  Emissieaantaldeeltjesetc: Field("emissieaantaldeeltjesetc", DataType.Text),
  /**
   * ### EmissieAantalDeeltjesType1
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissieaantaldeeltjestype1`
   */
  Emissieaantaldeeltjestype1: Field("emissieaantaldeeltjestype1", DataType.Text),
  /**
   * ### EmissieAantalDeeltjesType1Wltp
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissieaantaldeeltjestype1wltp`
   */
  Emissieaantaldeeltjestype1wltp: Field("emissieaantaldeeltjestype1wltp", DataType.Text),
  /**
   * ### EmissieAantalDeeltjesWhsc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissieaantaldeeltjeswhsc`
   */
  Emissieaantaldeeltjeswhsc: Field("emissieaantaldeeltjeswhsc", DataType.Text),
  /**
   * ### EmissieAantalDeeltjesWhtc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissieaantaldeeltjeswhtc`
   */
  Emissieaantaldeeltjeswhtc: Field("emissieaantaldeeltjeswhtc", DataType.Text),
  /**
   * ### EmissiedeeltjesEsc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissiedeeltjesesc`
   */
  Emissiedeeltjesesc: Field("emissiedeeltjesesc", DataType.Text),
  /**
   * ### EmissiedeeltjesEtc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissiedeeltjesetc`
   */
  Emissiedeeltjesetc: Field("emissiedeeltjesetc", DataType.Text),
  /**
   * ### EmissiedeeltjesType1
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissiedeeltjestype1`
   */
  Emissiedeeltjestype1: Field("emissiedeeltjestype1", DataType.Text),
  /**
   * ### EmissiedeeltjesType1Wltp
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissiedeeltjestype1wltp`
   */
  Emissiedeeltjestype1wltp: Field("emissiedeeltjestype1wltp", DataType.Text),
  /**
   * ### EmissiedeeltjesWhsc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissiedeeltjeswhsc`
   */
  Emissiedeeltjeswhsc: Field("emissiedeeltjeswhsc", DataType.Text),
  /**
   * ### EmissiedeeltjesWhtc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `emissiedeeltjeswhtc`
   */
  Emissiedeeltjeswhtc: Field("emissiedeeltjeswhtc", DataType.Text),
  /**
   * ### GeluidsniveauBovengrens
   *
   * **Type**: Text
   *
   * **Database Column Name**: `geluidsniveaubovengrens`
   */
  Geluidsniveaubovengrens: Field("geluidsniveaubovengrens", DataType.Text),
  /**
   * ### GeluidsniveauOndergrens
   *
   * **Type**: Text
   *
   * **Database Column Name**: `geluidsniveauondergrens`
   */
  Geluidsniveauondergrens: Field("geluidsniveauondergrens", DataType.Text),
  /**
   * ### GeluidsniveauRijdend
   *
   * **Type**: Text
   *
   * **Database Column Name**: `geluidsniveaurijdend`
   */
  Geluidsniveaurijdend: Field("geluidsniveaurijdend", DataType.Text),
  /**
   * ### GeluidsniveauToerentalBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `geluidsniveautoerentalbgr`
   */
  Geluidsniveautoerentalbgr: Field("geluidsniveautoerentalbgr", DataType.Text),
  /**
   * ### GeluidsniveauToerentalOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `geluidsniveautoerentalogr`
   */
  Geluidsniveautoerentalogr: Field("geluidsniveautoerentalogr", DataType.Text),
  /**
   * ### HcEmissieType1
   *
   * **Type**: Text
   *
   * **Database Column Name**: `hcemissietype1`
   */
  Hcemissietype1: Field("hcemissietype1", DataType.Text),
  /**
   * ### HcNoxEmissieType1
   *
   * **Type**: Text
   *
   * **Database Column Name**: `hcnoxemissietype1`
   */
  Hcnoxemissietype1: Field("hcnoxemissietype1", DataType.Text),
  /**
   * ### MaxBiopercentageBrandstof
   *
   * **Type**: Text
   *
   * **Database Column Name**: `maxbiopercentagebrandstof`
   */
  Maxbiopercentagebrandstof: Field("maxbiopercentagebrandstof", DataType.Text),
  /**
   * ### MaximumconstructiesnelheidBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `maximumconstructiesnelheidbgr`
   */
  Maximumconstructiesnelheidbgr: Field("maximumconstructiesnelheidbgr", DataType.Text),
  /**
   * ### MaximumconstructiesnelheidOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `maximumconstructiesnelheidogr`
   */
  Maximumconstructiesnelheidogr: Field("maximumconstructiesnelheidogr", DataType.Text),
  /**
   * ### MaximumNettoVermogenBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `maximumnettovermogenbgr`
   */
  Maximumnettovermogenbgr: Field("maximumnettovermogenbgr", DataType.Text),
  /**
   * ### MaximumNettoVermogenOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `maximumnettovermogenogr`
   */
  Maximumnettovermogenogr: Field("maximumnettovermogenogr", DataType.Text),
  /**
   * ### MaximumVermogen30MinBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `maximumvermogen30minbgr`
   */
  Maximumvermogen30minbgr: Field("maximumvermogen30minbgr", DataType.Text),
  /**
   * ### MaximumVermogen30MinOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `maximumvermogen30minogr`
   */
  Maximumvermogen30minogr: Field("maximumvermogen30minogr", DataType.Text),
  /**
   * ### NoxEmissieEsc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `noxemissieesc`
   */
  Noxemissieesc: Field("noxemissieesc", DataType.Text),
  /**
   * ### NoxEmissieEtc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `noxemissieetc`
   */
  Noxemissieetc: Field("noxemissieetc", DataType.Text),
  /**
   * ### NoxEmissieType1
   *
   * **Type**: Text
   *
   * **Database Column Name**: `noxemissietype1`
   */
  Noxemissietype1: Field("noxemissietype1", DataType.Text),
  /**
   * ### NoxEmissieType1Wltp
   *
   * **Type**: Text
   *
   * **Database Column Name**: `noxemissietype1wltp`
   */
  Noxemissietype1wltp: Field("noxemissietype1wltp", DataType.Text),
  /**
   * ### NoxEmissieWhsc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `noxemissiewhsc`
   */
  Noxemissiewhsc: Field("noxemissiewhsc", DataType.Text),
  /**
   * ### NoxEmissieWhtc
   *
   * **Type**: Text
   *
   * **Database Column Name**: `noxemissiewhtc`
   */
  Noxemissiewhtc: Field("noxemissiewhtc", DataType.Text),
  /**
   * ### RegelgevingEmissieMotoren
   *
   * **Type**: Text
   *
   * **Database Column Name**: `regelgevingemissiemotoren`
   */
  Regelgevingemissiemotoren: Field("regelgevingemissiemotoren", DataType.Text),
  /**
   * ### RegelgevingEmissieVoertuigen
   *
   * **Type**: Text
   *
   * **Database Column Name**: `regelgevingemissievoertuigen`
   */
  Regelgevingemissievoertuigen: Field("regelgevingemissievoertuigen", DataType.Text),
  /**
   * ### ToerentalMaxNettoVermogenBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `toerentalmaxnettovermogenbgr`
   */
  Toerentalmaxnettovermogenbgr: Field("toerentalmaxnettovermogenbgr", DataType.Text),
  /**
   * ### ToerentalMaxNettoVermogenOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `toerentalmaxnettovermogenogr`
   */
  Toerentalmaxnettovermogenogr: Field("toerentalmaxnettovermogenogr", DataType.Text),
  /**
   * ### Typegoedkeuringsnummer
   *
   * **Type**: Text
   *
   * **Database Column Name**: `typegoedkeuringsnummer`
   */
  Typegoedkeuringsnummer: Field("typegoedkeuringsnummer", DataType.Text),
  /**
   * ### Uitlaatemissieniveau
   *
   * **Type**: Text
   *
   * **Database Column Name**: `uitlaatemissieniveau`
   */
  Uitlaatemissieniveau: Field("uitlaatemissieniveau", DataType.Text),
  /**
   * ### VerbrGewogenGecombNedcHoog
   *
   * **Type**: Text
   *
   * **Database Column Name**: `verbrgewogengecombnedchoog`
   */
  Verbrgewogengecombnedchoog: Field("verbrgewogengecombnedchoog", DataType.Text),
  /**
   * ### VerbrGewogenGecombNedcLaag
   *
   * **Type**: Text
   *
   * **Database Column Name**: `verbrgewogengecombnedclaag`
   */
  Verbrgewogengecombnedclaag: Field("verbrgewogengecombnedclaag", DataType.Text),
  /**
   * ### VerbruikGecombineerdNedcHoog
   *
   * **Type**: Text
   *
   * **Database Column Name**: `verbruikgecombineerdnedchoog`
   */
  Verbruikgecombineerdnedchoog: Field("verbruikgecombineerdnedchoog", DataType.Text),
  /**
   * ### VerbruikGecombineerdNedcLaag
   *
   * **Type**: Text
   *
   * **Database Column Name**: `verbruikgecombineerdnedclaag`
   */
  Verbruikgecombineerdnedclaag: Field("verbruikgecombineerdnedclaag", DataType.Text),
  /**
   * ### VerbruikVolledigElekWltpBgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `verbruikvolledigelekwltpbgr`
   */
  Verbruikvolledigelekwltpbgr: Field("verbruikvolledigelekwltpbgr", DataType.Text),
  /**
   * ### VerbruikVolledigElekWltpOgr
   *
   * **Type**: Text
   *
   * **Database Column Name**: `verbruikvolledigelekwltpogr`
   */
  Verbruikvolledigelekwltpogr: Field("verbruikvolledigelekwltpogr", DataType.Text),
  /**
   * ### VolgnummerAandrijving
   *
   * **Type**: Number
   *
   * **Database Column Name**: `volgnummeraandrijving`
   */
  Volgnummeraandrijving: Field("volgnummeraandrijving", DataType.Number),
  /**
   * ### VolgnummerEnergiebron
   *
   * **Type**: Text
   *
   * **Database Column Name**: `volgnummerenergiebron`
   */
  Volgnummerenergiebron: Field("volgnummerenergiebron", DataType.Text),
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
    "Actieradiusexternoplaadwltpbgr",
    "Actieradiusexternoplaadwltpogr",
    "Actieradiusvolledigelekwltpbgr",
    "Actieradiusvolledigelekwltpogr",
    "Brandstofverbruikgecombwltpbgr",
    "Brandstofverbruikgecombwltpogr",
    "Brandstverbrgewogencombwltpbgr",
    "Brandstverbrgewogencombwltpogr",
    "Co2emisgecombineerdnedchoog",
    "Co2emisgecombineerdnedclaag",
    "Co2emisgecombineerdwltpbgr",
    "Co2emisgecombineerdwltpogr",
    "Co2emisgewGecombnedchoog",
    "Co2emisgewGecombnedclaag",
    "Co2emisgewogengecombwltpbgr",
    "Co2emisgewogengecombwltpogr",
    "Co2emissiebuitennedchoog",
    "Co2emissiebuitennedclaag",
    "Co2emissiestadnedchoog",
    "Co2emissiestadnedclaag",
    "Codeenergiebron",
    "Codeuitvoeringtgk",
    "Codevarianttgk",
    "Coemissieesc",
    "Coemissieetc",
    "Coemissietype1",
    "Coemissietype1wltp",
    "Coemissiewhsc",
    "Coemissiewhtc",
    "Elekactieradiusextoplaadbnedc",
    "Elektrischeactieradiusnedc",
    "Elekverbrexternoplaadbwltpbgr",
    "Elekverbrexternoplaadbwltpogr",
    "Elekverbruikgecombineerdnedc",
    "Elekverbruikgew",
    "Emissieaantaldeeltjesesc",
    "Emissieaantaldeeltjesetc",
    "Emissieaantaldeeltjestype1",
    "Emissieaantaldeeltjestype1wltp",
    "Emissieaantaldeeltjeswhsc",
    "Emissieaantaldeeltjeswhtc",
    "Emissiedeeltjesesc",
    "Emissiedeeltjesetc",
    "Emissiedeeltjestype1",
    "Emissiedeeltjestype1wltp",
    "Emissiedeeltjeswhsc",
    "Emissiedeeltjeswhtc",
    "Geluidsniveaubovengrens",
    "Geluidsniveauondergrens",
    "Geluidsniveaurijdend",
    "Geluidsniveautoerentalbgr",
    "Geluidsniveautoerentalogr",
    "Hcemissietype1",
    "Hcnoxemissietype1",
    "Maxbiopercentagebrandstof",
    "Maximumconstructiesnelheidbgr",
    "Maximumconstructiesnelheidogr",
    "Maximumnettovermogenbgr",
    "Maximumnettovermogenogr",
    "Maximumvermogen30minbgr",
    "Maximumvermogen30minogr",
    "Noxemissieesc",
    "Noxemissieetc",
    "Noxemissietype1",
    "Noxemissietype1wltp",
    "Noxemissiewhsc",
    "Noxemissiewhtc",
    "Regelgevingemissiemotoren",
    "Regelgevingemissievoertuigen",
    "Toerentalmaxnettovermogenbgr",
    "Toerentalmaxnettovermogenogr",
    "Typegoedkeuringsnummer",
    "Uitlaatemissieniveau",
    "Verbrgewogengecombnedchoog",
    "Verbrgewogengecombnedclaag",
    "Verbruikgecombineerdnedchoog",
    "Verbruikgecombineerdnedclaag",
    "Verbruikvolledigelekwltpbgr",
    "Verbruikvolledigelekwltpogr",
    "Volgnummeraandrijving",
    "Volgnummerenergiebron",
    "Volgnummerrevisieuitvoering",
  ],
  dataset: "gr7t-qfnb",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: TGK Energiebron Uitvoering",
  provider_name: "TgkEnergiebronUitvoering",
  url: "https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Energiebron-Uitvoering/gr7t-qfnb",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/gr7t-qfnb",
};

/**
 * ### Open Data RDW: TGK Energiebron Uitvoering
 *
 * **URL:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Energiebron-Uitvoering/gr7t-qfnb
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/gr7t-qfnb
 *
 * **Dataset ID:** gr7t-qfnb
 *
 * **Category:** Typegoedkeuring
 *
 * -----------------------
 * This generates a SodaQuery for the Open Data RDW: TGK Energiebron Uitvoering dataset.
 *
 * @param auth - Authentification options
 * @param opts - Query options
 *
 * @example
 * ```ts
 * const data = await RDWQuery()
 *   .where(Where.like(Fields.Actieradiusexternoplaadwltpbgr, "some_value")
 *   .limit(10)
 *   .offset(0);
 *   .execute();
 * ```
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<TgkEnergiebronUitvoering_ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });

export const TgkEnergiebronUitvoering: {
  RDWQuery: (auth?: AuthOpts, opts?: Options) => SodaQuery<TgkEnergiebronUitvoering_ResponseData>;
  Fields: typeof Fields;
  Info: typeof Info;
} = {
  RDWQuery,
  Fields: Fields,
  Info: Info,
};
