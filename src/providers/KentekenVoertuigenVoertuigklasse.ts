// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_voertuigklasse
//
//
//
// Category: Voertuigen
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_voertuigklas/kmfi-hrps
// Permalink: https://opendata.rdw.nl/d/kmfi-hrps
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
 * Return Data for Open Data RDW: Gekentekende_voertuigen_voertuigklasse
 */
export interface ResponseData {
  /**
   * ### Carrosserie klasse volgnummer
   *
   * **Type**: Text
   */
  carrosserie_klasse_volgnummer?: string;
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Text
   */
  carrosserie_volgnummer?: string;
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
  kenteken?: string;
  /**
   * ### Voertuigklasse
   *
   * Dit gegeven wordt vastgesteld tijdens de goedkeuring van een voertuig en geeft aan voor welke klasse(n) het voertuig is goedgekeurd.
   * Een voertuig mag tot meer dan n klasse behoren. In zon geval kan het voertuig voor elke klasse waarin het kan worden ingedeeld, worden goedgekeurd.
   * Het gegeven wordt alleen vastgesteld bij voertuigen van de Europese voertuigcategorien M2 en M3 (bussen)
   * Het gegeven kan ontbreken als deze bij een goedkeuring nog niet werd vastgelegd.
   * Voor voertuigen met een capaciteit van meer dan 22 passagiers, de bestuurder niet meegerekend, bestaan er drie klassen voertuigen:
   * klasse I., voertuigen gebouwd met ruimte voor staande passagiers  die vaak in- en uitstappen
   * klasse II., voertuigen voornamelijk gebouwd voor het vervoer van zittende passagiers en ontworpen voor het vervoer van staande passagiers in het gangpad en/of op een oppervlak dat niet groter is dan de ruimte voor twee dubbele zitplaatsen;
   * klasse III., voertuigen uitsluitend gebouwd voor het vervoer van zittende passagiers.
   * Voor voertuigen met een capaciteit van maximaal 22 passagiers, de bestuurder niet meegerekend, zijn er twee voertuigklassen:
   * klasse A., voertuigen ontworpen voor het vervoer van staande passagiers; een voertuig van deze klasse heeft zitplaatsen en moet ook voorzieningen voor staande passagiers hebben;
   * klasse B., voertuigen niet ontworpen voor het vervoer van staande passagiers; een voertuig van deze klasse heeft dus geen voorzieningen voor staande passagiers.
   *
   * **Type**: Text
   */
  voertuigklasse?: string;
  /**
   * ### Voertuigklasse omschrijving
   *
   * Omschrijving van de voertuigklasse
   *
   * **Type**: Text
   */
  voertuigklasse_omschrijving?: string;
}

/**
 * Fieldnames for **KentekenVoertuigenVoertuigklasse**
 *
 * | **Fieldname** | **Database Column Name** | **Data Type** |
 * | --------- | -------------------- | --------- |
 * | ``CarrosserieKlasseVolgnummer`` | ``carrosserie_klasse_volgnummer`` | _Text_ |
 * | ``CarrosserieVolgnummer`` | ``carrosserie_volgnummer`` | _Text_ |
 * | ``Kenteken`` | ``kenteken`` | _Text_ |
 * | ``Voertuigklasse`` | ``voertuigklasse`` | _Text_ |
 * | ``VoertuigklasseOmschrijving`` | ``voertuigklasse_omschrijving`` | _Text_ |
 *
 * > You can use these fieldnames in your queries to filter, group, or sort your data.
 */
export interface IFields {
  /**
   * ### Carrosserie klasse volgnummer
   *
   * **Type**: Text
   */
  CarrosserieKlasseVolgnummer: FieldObject<DataType.Text>;
  /**
   * ### Carrosserie volgnummer
   *
   * **Type**: Text
   */
  CarrosserieVolgnummer: FieldObject<DataType.Text>;
  /**
   * ### Kenteken
   *
   * Het kenteken van een voertuig bestaat uit een combinatie van cijfers en letters. Deze combinatie is vermeld op het kentekenbewijs en de kentekenplaat. Door het kenteken wordt een voertuig uniek en identificeerbaar.
   *
   * **Type**: Text
   */
  Kenteken: FieldObject<DataType.Text>;
  /**
   * ### Voertuigklasse
   *
   * Dit gegeven wordt vastgesteld tijdens de goedkeuring van een voertuig en geeft aan voor welke klasse(n) het voertuig is goedgekeurd.
   * Een voertuig mag tot meer dan n klasse behoren. In zon geval kan het voertuig voor elke klasse waarin het kan worden ingedeeld, worden goedgekeurd.
   * Het gegeven wordt alleen vastgesteld bij voertuigen van de Europese voertuigcategorien M2 en M3 (bussen)
   * Het gegeven kan ontbreken als deze bij een goedkeuring nog niet werd vastgelegd.
   * Voor voertuigen met een capaciteit van meer dan 22 passagiers, de bestuurder niet meegerekend, bestaan er drie klassen voertuigen:
   * klasse I., voertuigen gebouwd met ruimte voor staande passagiers  die vaak in- en uitstappen
   * klasse II., voertuigen voornamelijk gebouwd voor het vervoer van zittende passagiers en ontworpen voor het vervoer van staande passagiers in het gangpad en/of op een oppervlak dat niet groter is dan de ruimte voor twee dubbele zitplaatsen;
   * klasse III., voertuigen uitsluitend gebouwd voor het vervoer van zittende passagiers.
   * Voor voertuigen met een capaciteit van maximaal 22 passagiers, de bestuurder niet meegerekend, zijn er twee voertuigklassen:
   * klasse A., voertuigen ontworpen voor het vervoer van staande passagiers; een voertuig van deze klasse heeft zitplaatsen en moet ook voorzieningen voor staande passagiers hebben;
   * klasse B., voertuigen niet ontworpen voor het vervoer van staande passagiers; een voertuig van deze klasse heeft dus geen voorzieningen voor staande passagiers.
   *
   * **Type**: Text
   */
  Voertuigklasse: FieldObject<DataType.Text>;
  /**
   * ### Voertuigklasse omschrijving
   *
   * Omschrijving van de voertuigklasse
   *
   * **Type**: Text
   */
  VoertuigklasseOmschrijving: FieldObject<DataType.Text>;
}

export const Fields: IFields = {
  CarrosserieKlasseVolgnummer: Field("carrosserie_klasse_volgnummer", DataType.Text),
  CarrosserieVolgnummer: Field("carrosserie_volgnummer", DataType.Text),
  Kenteken: Field("kenteken", DataType.Text),
  Voertuigklasse: Field("voertuigklasse", DataType.Text),
  VoertuigklasseOmschrijving: Field("voertuigklasse_omschrijving", DataType.Text),
};

export const Info = {
  fields: [
    "CarrosserieKlasseVolgnummer",
    "CarrosserieVolgnummer",
    "Kenteken",
    "Voertuigklasse",
    "VoertuigklasseOmschrijving",
  ],
  dataset: "kmfi-hrps",
  domain: "opendata.rdw.nl",
  full_name: "Open Data RDW: Gekentekende_voertuigen_voertuigklasse",
  provider_name: "KentekenVoertuigenVoertuigklasse",
  url:
    "https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_voertuigklas/kmfi-hrps",
  api_docs: "https://dev.socrata.com/foundry/opendata.rdw.nl/kmfi-hrps",
};

/**
 * ### Open Data RDW: Gekentekende_voertuigen_voertuigklasse
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_voertuigklas/kmfi-hrps
 *
 * **API DOCS:** https://dev.socrata.com/foundry/opendata.rdw.nl/kmfi-hrps
 *
 * **Dataset ID:** kmfi-hrps
 *
 * **Category:** Voertuigen
 */
export const RDWQuery = (auth: AuthOpts = {}, opts: Options = {}) =>
  createQueryWithDataset<ResponseData>(Info.domain, Info.dataset, auth, {
    ...opts,
    strict: typeof opts.strict === "boolean" ? opts.strict : true,
  });
