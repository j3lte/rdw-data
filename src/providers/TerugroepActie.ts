// *******************************************************
//
// Name: Open Data RDW: Terugroep_actie
//
// Category: Terugroepacties
// Link: https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie/j9yg-7rg9
// Permalink: https://opendata.rdw.nl/d/j9yg-7rg9
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
//
// *******************************************************

import type { AuthOpts, FieldObject, Options } from "https://deno.land/x/soda@0.4.5/mod.ts";
import { createQueryWithDataset, DataType, Field } from "https://deno.land/x/soda@0.4.5/mod.ts";

/**
 * Return Data for Open Data RDW: Terugroep_actie
 */
export interface ResponseData {
  /**
   * ### API Terugroep_actie_risico
   *
   * **Type**: Text
   */
  api_terugroep_actie_risico?: string;
  /**
   * ### API Terugroep_ actie_status
   *
   * **Type**: Text
   */
  api_terugroep_actie_status?: string;
  /**
   * ### API Terugroep_infomeren_eigenaar
   *
   * **Type**: Text
   */
  api_terugroep_infomeren_eigenaar?: string;
  /**
   * ### API Terugroep_voertuig_merk_type
   *
   * **Type**: Text
   */
  api_terugroep_voertuig_merk_type?: string;
  /**
   * ### Beschrijving van het herstel
   * 
   * Hier vindt u informatie over wat er moet gebeuren om het defect te herstellen.
   *
   * **Type**: Text
   */
  beschrijving_van_het_herstel?: string;
  /**
   * ### Categorie defect
   * 
   * Deze omschrijving geeft op hoofdlijnen aan bij welk onderdeel van het voertuig een defect is geconstateerd.
   *
   * **Type**: Text
   */
  categorie_defect?: string;
  /**
   * ### Datum aankondiging producent
   *
   * **Type**: Number
   */
  datum_aankondiging_producent?: string;
  /**
   * ### Datum aankondiging producent_DT
   *
   * **Type**: Calendar date
   */
  datum_aankondiging_producent_dt?: string;
  /**
   * ### Datum eigenaren genformeerd
   *
   * **Type**: Number
   */
  datum_eigenaren_ge_nformeerd?: string;
  /**
   * ### Datum eigenaren genformeerd_DT
   *
   * **Type**: Calendar date
   */
  datum_eigenaren_ge_nformeerd_dt?: string;
  /**
   * ### Datum informeren eigenaar
   *
   * **Type**: Number
   */
  datum_informeren_eigenaar?: string;
  /**
   * ### Datum informeren eigenaar_DT
   *
   * **Type**: Calendar date
   */
  datum_informeren_eigenaar_dt?: string;
  /**
   * ### Datum melding bij RDW
   *
   * **Type**: Number
   */
  datum_melding_bij_rdw?: string;
  /**
   * ### Datum melding bij RDW_DT
   *
   * **Type**: Calendar date
   */
  datum_melding_bij_rdw_dt?: string;
  /**
   * ### Materile gevolgen
   * 
   * Uitleg over de gevolgen van het defect die u mogelijk merkt als u het voertuig gebruikt.
   *
   * **Type**: Text
   */
  materi_le_gevolgen?: string;
  /**
   * ### Meer informatie op internet
   * 
   * Hier vindt u, indien aan de RDW doorgegeven, de website van producent of distributeur met meer informatie over de terugroepactie.
   *
   * **Type**: Text
   */
  meer_informatie_op_internet?: string;
  /**
   * ### Meer informatie via telefoonnummer
   * 
   * Hier vindt u, indien aan de RDW doorgegeven, het telefoonnummer van de producent of distributeur waarmee u contact kunt opnemen.
   *
   * **Type**: Text
   */
  meer_informatie_via_telefoonnummer?: string;
  /**
   * ### Meldende producent/distributeur
   * 
   * De producent of distributeur die de RDW heeft genformeerd over een door de producent georganiseerde terugroepactie.
   *
   * **Type**: Text
   */
  meldende_producent_distributeur?: string;
  /**
   * ### Nationaal opgegeven aantal voertuigen terugroepactie
   *
   * **Type**: Number
   */
  nationaal_opgegeven_aantal_voertuigen_terugroepactie?: string;
  /**
   * ### Omschrijving defect
   * 
   * De omschrijving van het defect, waarvoor deze terugroepactie is georganiseerd.
   *
   * **Type**: Text
   */
  omschrijving_defect?: string;
  /**
   * ### Opmerkingen RDW
   * 
   * Hier worden eventuele extra opmerkingen vanuit de RDW over de terugroepactie vermeld.
   *
   * **Type**: Text
   */
  opmerkingen_rdw?: string;
  /**
   * ### Publicatiedatum RDW
   * 
   * De datum waarop de RDW de terugroepactie in het terugroepregister heeft gepubliceerd.
   *
   * **Type**: Number
   */
  publicatiedatum_rdw?: string;
  /**
   * ### Publicatiedatum RDW_DT
   *
   * **Type**: Calendar date
   */
  publicatiedatum_rdw_dt?: string;
  /**
   * ### Referentiecode producent
   * 
   * De code die de producent aan de terugroepactie heeft gegeven. Met deze code is de terugroepactie bij de dealer bekend.
   *
   * **Type**: Text
   */
  referentiecode_producent?: string;
  /**
   * ### Referentiecode RDW
   * 
   * Dit is de referentiecode waaronder de RDW de terugroepactie heeft geregistreerd.
   *
   * **Type**: Text
   */
  referentiecode_rdw?: string;
  /**
   * ### Risicobeoordeling RDW
   *
   * **Type**: Text
   */
  risicobeoordeling_rdw?: string;
  /**
   * ### Totaal aantal voertuigen terugroepactie
   *
   * **Type**: Number
   */
  totaal_aantal_voertuigen_terugroepactie?: string;
}

/**
 * Fieldnames for **TerugroepActie**
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``ApiTerugroepActieRisico`` | ``api_terugroep_actie_risico`` | _Text_ |
 * | ``ApiTerugroepActieStatus`` | ``api_terugroep_actie_status`` | _Text_ |
 * | ``ApiTerugroepInfomerenEigenaar`` | ``api_terugroep_infomeren_eigenaar`` | _Text_ |
 * | ``ApiTerugroepVoertuigMerkType`` | ``api_terugroep_voertuig_merk_type`` | _Text_ |
 * | ``BeschrijvingVanHetHerstel`` | ``beschrijving_van_het_herstel`` | _Text_ |
 * | ``CategorieDefect`` | ``categorie_defect`` | _Text_ |
 * | ``DatumAankondigingProducent`` | ``datum_aankondiging_producent`` | _Number_ |
 * | ``DatumAankondigingProducentDt`` | ``datum_aankondiging_producent_dt`` | _Calendar date_ |
 * | ``DatumEigenarenGeNformeerd`` | ``datum_eigenaren_ge_nformeerd`` | _Number_ |
 * | ``DatumEigenarenGeNformeerdDt`` | ``datum_eigenaren_ge_nformeerd_dt`` | _Calendar date_ |
 * | ``DatumInformerenEigenaar`` | ``datum_informeren_eigenaar`` | _Number_ |
 * | ``DatumInformerenEigenaarDt`` | ``datum_informeren_eigenaar_dt`` | _Calendar date_ |
 * | ``DatumMeldingBijRdw`` | ``datum_melding_bij_rdw`` | _Number_ |
 * | ``DatumMeldingBijRdwDt`` | ``datum_melding_bij_rdw_dt`` | _Calendar date_ |
 * | ``MateriLeGevolgen`` | ``materi_le_gevolgen`` | _Text_ |
 * | ``MeerInformatieOpInternet`` | ``meer_informatie_op_internet`` | _Text_ |
 * | ``MeerInformatieViaTelefoonnummer`` | ``meer_informatie_via_telefoonnummer`` | _Text_ |
 * | ``MeldendeProducentDistributeur`` | ``meldende_producent_distributeur`` | _Text_ |
 * | ``NationaalOpgegevenAantalVoertuigenTerugroepactie`` | ``nationaal_opgegeven_aantal_voertuigen_terugroepactie`` | _Number_ |
 * | ``OmschrijvingDefect`` | ``omschrijving_defect`` | _Text_ |
 * | ``OpmerkingenRdw`` | ``opmerkingen_rdw`` | _Text_ |
 * | ``PublicatiedatumRdw`` | ``publicatiedatum_rdw`` | _Number_ |
 * | ``PublicatiedatumRdwDt`` | ``publicatiedatum_rdw_dt`` | _Calendar date_ |
 * | ``ReferentiecodeProducent`` | ``referentiecode_producent`` | _Text_ |
 * | ``ReferentiecodeRdw`` | ``referentiecode_rdw`` | _Text_ |
 * | ``RisicobeoordelingRdw`` | ``risicobeoordeling_rdw`` | _Text_ |
 * | ``TotaalAantalVoertuigenTerugroepactie`` | ``totaal_aantal_voertuigen_terugroepactie`` | _Number_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### API Terugroep_actie_risico
   *
   * **Type**: Text
   */
   ApiTerugroepActieRisico: FieldObject<DataType.Text>;
  /**
   * ### API Terugroep_ actie_status
   *
   * **Type**: Text
   */
   ApiTerugroepActieStatus: FieldObject<DataType.Text>;
  /**
   * ### API Terugroep_infomeren_eigenaar
   *
   * **Type**: Text
   */
   ApiTerugroepInfomerenEigenaar: FieldObject<DataType.Text>;
  /**
   * ### API Terugroep_voertuig_merk_type
   *
   * **Type**: Text
   */
   ApiTerugroepVoertuigMerkType: FieldObject<DataType.Text>;
  /**
   * ### Beschrijving van het herstel
   * 
   * Hier vindt u informatie over wat er moet gebeuren om het defect te herstellen.
   *
   * **Type**: Text
   */
   BeschrijvingVanHetHerstel: FieldObject<DataType.Text>;
  /**
   * ### Categorie defect
   * 
   * Deze omschrijving geeft op hoofdlijnen aan bij welk onderdeel van het voertuig een defect is geconstateerd.
   *
   * **Type**: Text
   */
   CategorieDefect: FieldObject<DataType.Text>;
  /**
   * ### Datum aankondiging producent
   *
   * **Type**: Number
   */
   DatumAankondigingProducent: FieldObject<DataType.Number>;
  /**
   * ### Datum aankondiging producent_DT
   *
   * **Type**: Calendar date
   */
   DatumAankondigingProducentDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Datum eigenaren genformeerd
   *
   * **Type**: Number
   */
   DatumEigenarenGeNformeerd: FieldObject<DataType.Number>;
  /**
   * ### Datum eigenaren genformeerd_DT
   *
   * **Type**: Calendar date
   */
   DatumEigenarenGeNformeerdDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Datum informeren eigenaar
   *
   * **Type**: Number
   */
   DatumInformerenEigenaar: FieldObject<DataType.Number>;
  /**
   * ### Datum informeren eigenaar_DT
   *
   * **Type**: Calendar date
   */
   DatumInformerenEigenaarDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Datum melding bij RDW
   *
   * **Type**: Number
   */
   DatumMeldingBijRdw: FieldObject<DataType.Number>;
  /**
   * ### Datum melding bij RDW_DT
   *
   * **Type**: Calendar date
   */
   DatumMeldingBijRdwDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Materile gevolgen
   * 
   * Uitleg over de gevolgen van het defect die u mogelijk merkt als u het voertuig gebruikt.
   *
   * **Type**: Text
   */
   MateriLeGevolgen: FieldObject<DataType.Text>;
  /**
   * ### Meer informatie op internet
   * 
   * Hier vindt u, indien aan de RDW doorgegeven, de website van producent of distributeur met meer informatie over de terugroepactie.
   *
   * **Type**: Text
   */
   MeerInformatieOpInternet: FieldObject<DataType.Text>;
  /**
   * ### Meer informatie via telefoonnummer
   * 
   * Hier vindt u, indien aan de RDW doorgegeven, het telefoonnummer van de producent of distributeur waarmee u contact kunt opnemen.
   *
   * **Type**: Text
   */
   MeerInformatieViaTelefoonnummer: FieldObject<DataType.Text>;
  /**
   * ### Meldende producent/distributeur
   * 
   * De producent of distributeur die de RDW heeft genformeerd over een door de producent georganiseerde terugroepactie.
   *
   * **Type**: Text
   */
   MeldendeProducentDistributeur: FieldObject<DataType.Text>;
  /**
   * ### Nationaal opgegeven aantal voertuigen terugroepactie
   *
   * **Type**: Number
   */
   NationaalOpgegevenAantalVoertuigenTerugroepactie: FieldObject<DataType.Number>;
  /**
   * ### Omschrijving defect
   * 
   * De omschrijving van het defect, waarvoor deze terugroepactie is georganiseerd.
   *
   * **Type**: Text
   */
   OmschrijvingDefect: FieldObject<DataType.Text>;
  /**
   * ### Opmerkingen RDW
   * 
   * Hier worden eventuele extra opmerkingen vanuit de RDW over de terugroepactie vermeld.
   *
   * **Type**: Text
   */
   OpmerkingenRdw: FieldObject<DataType.Text>;
  /**
   * ### Publicatiedatum RDW
   * 
   * De datum waarop de RDW de terugroepactie in het terugroepregister heeft gepubliceerd.
   *
   * **Type**: Number
   */
   PublicatiedatumRdw: FieldObject<DataType.Number>;
  /**
   * ### Publicatiedatum RDW_DT
   *
   * **Type**: Calendar date
   */
   PublicatiedatumRdwDt: FieldObject<DataType.FloatingTimestamp>;
  /**
   * ### Referentiecode producent
   * 
   * De code die de producent aan de terugroepactie heeft gegeven. Met deze code is de terugroepactie bij de dealer bekend.
   *
   * **Type**: Text
   */
   ReferentiecodeProducent: FieldObject<DataType.Text>;
  /**
   * ### Referentiecode RDW
   * 
   * Dit is de referentiecode waaronder de RDW de terugroepactie heeft geregistreerd.
   *
   * **Type**: Text
   */
   ReferentiecodeRdw: FieldObject<DataType.Text>;
  /**
   * ### Risicobeoordeling RDW
   *
   * **Type**: Text
   */
   RisicobeoordelingRdw: FieldObject<DataType.Text>;
  /**
   * ### Totaal aantal voertuigen terugroepactie
   *
   * **Type**: Number
   */
   TotaalAantalVoertuigenTerugroepactie: FieldObject<DataType.Number>;
};

export const Fields: IFields = {
  ApiTerugroepActieRisico: Field("api_terugroep_actie_risico", DataType.Text),
  ApiTerugroepActieStatus: Field("api_terugroep_actie_status", DataType.Text),
  ApiTerugroepInfomerenEigenaar: Field("api_terugroep_infomeren_eigenaar", DataType.Text),
  ApiTerugroepVoertuigMerkType: Field("api_terugroep_voertuig_merk_type", DataType.Text),
  BeschrijvingVanHetHerstel: Field("beschrijving_van_het_herstel", DataType.Text),
  CategorieDefect: Field("categorie_defect", DataType.Text),
  DatumAankondigingProducent: Field("datum_aankondiging_producent", DataType.Number),
  DatumAankondigingProducentDt: Field("datum_aankondiging_producent_dt", DataType.FloatingTimestamp),
  DatumEigenarenGeNformeerd: Field("datum_eigenaren_ge_nformeerd", DataType.Number),
  DatumEigenarenGeNformeerdDt: Field("datum_eigenaren_ge_nformeerd_dt", DataType.FloatingTimestamp),
  DatumInformerenEigenaar: Field("datum_informeren_eigenaar", DataType.Number),
  DatumInformerenEigenaarDt: Field("datum_informeren_eigenaar_dt", DataType.FloatingTimestamp),
  DatumMeldingBijRdw: Field("datum_melding_bij_rdw", DataType.Number),
  DatumMeldingBijRdwDt: Field("datum_melding_bij_rdw_dt", DataType.FloatingTimestamp),
  MateriLeGevolgen: Field("materi_le_gevolgen", DataType.Text),
  MeerInformatieOpInternet: Field("meer_informatie_op_internet", DataType.Text),
  MeerInformatieViaTelefoonnummer: Field("meer_informatie_via_telefoonnummer", DataType.Text),
  MeldendeProducentDistributeur: Field("meldende_producent_distributeur", DataType.Text),
  NationaalOpgegevenAantalVoertuigenTerugroepactie: Field("nationaal_opgegeven_aantal_voertuigen_terugroepactie", DataType.Number),
  OmschrijvingDefect: Field("omschrijving_defect", DataType.Text),
  OpmerkingenRdw: Field("opmerkingen_rdw", DataType.Text),
  PublicatiedatumRdw: Field("publicatiedatum_rdw", DataType.Number),
  PublicatiedatumRdwDt: Field("publicatiedatum_rdw_dt", DataType.FloatingTimestamp),
  ReferentiecodeProducent: Field("referentiecode_producent", DataType.Text),
  ReferentiecodeRdw: Field("referentiecode_rdw", DataType.Text),
  RisicobeoordelingRdw: Field("risicobeoordeling_rdw", DataType.Text),
  TotaalAantalVoertuigenTerugroepactie: Field("totaal_aantal_voertuigen_terugroepactie", DataType.Number),
};

export const Info = {
  fields: [
    "ApiTerugroepActieRisico",
    "ApiTerugroepActieStatus",
    "ApiTerugroepInfomerenEigenaar",
    "ApiTerugroepVoertuigMerkType",
    "BeschrijvingVanHetHerstel",
    "CategorieDefect",
    "DatumAankondigingProducent",
    "DatumAankondigingProducentDt",
    "DatumEigenarenGeNformeerd",
    "DatumEigenarenGeNformeerdDt",
    "DatumInformerenEigenaar",
    "DatumInformerenEigenaarDt",
    "DatumMeldingBijRdw",
    "DatumMeldingBijRdwDt",
    "MateriLeGevolgen",
    "MeerInformatieOpInternet",
    "MeerInformatieViaTelefoonnummer",
    "MeldendeProducentDistributeur",
    "NationaalOpgegevenAantalVoertuigenTerugroepactie",
    "OmschrijvingDefect",
    "OpmerkingenRdw",
    "PublicatiedatumRdw",
    "PublicatiedatumRdwDt",
    "ReferentiecodeProducent",
    "ReferentiecodeRdw",
    "RisicobeoordelingRdw",
    "TotaalAantalVoertuigenTerugroepactie",
  ],
  dataset: "j9yg-7rg9",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Terugroep_actie",
  provider_name: "TerugroepActie",
  url: "https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie/j9yg-7rg9",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/j9yg-7rg9",
}

/**
 * ### Open Data RDW: Terugroep_actie
 *
 * **URL:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie/j9yg-7rg9
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/j9yg-7rg9
 *
 * **Dataset ID:** j9yg-7rg9
 *
 * **Category:** Terugroepacties
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
