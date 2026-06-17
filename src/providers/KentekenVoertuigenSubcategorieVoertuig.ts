// *******************************************************
//
// Name: Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig
//
// Category: Voertuigen
// Tags:
// License: Public Domain
// License (RDW): Creative Commons 0 (CC0)
// Link: https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_subcategorie/2ba7-embk
// Permalink: https://opendata.rdw.nl/d/2ba7-embk
// Owner: Team Open Data RDW
// Creator: Team Open Data RDW
// Published: 2024-05-28T14:40:14.000Z
// Structure last updated: 2025-03-05T18:13:10.000Z
//
// *******************************************************

import type { AuthOpts, FieldObject, Options, SodaQuery } from "soda";
import { createQueryWithDataset, DataType, Field } from "soda";

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
export const Fields: {
  Kenteken: FieldObject<DataType.Text>;
  SubcategorieVoertuigEuropees: FieldObject<DataType.Text>;
  SubcategorieVoertuigEuropeesOmschrijving: FieldObject<DataType.Text>;
  SubcategorieVoertuigVolgnummer: FieldObject<DataType.Number>;
} = {
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
  SubcategorieVoertuigEuropeesOmschrijving: Field(
    "subcategorie_voertuig_europees_omschrijving",
    DataType.Text,
  ),
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

/**
 * Dataset metadata for **KentekenVoertuigenSubcategorieVoertuig**: the available field names, the
 * Socrata `dataset` id, `domain`, source `url` and API documentation link.
 */
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
  category: "Voertuigen",
  tags: [],
  license: "Public Domain",
  license_detail: "Creative Commons 0 (CC0)",
  publication_date: "2024-05-28T14:40:14.000Z",
  metadata_updated_at: "2025-03-05T18:13:10.000Z",
} as const;

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
 * **Tags:**
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Published:** 2024-05-28T14:40:14.000Z
 *
 * **Structure last updated:** 2025-03-05T18:13:10.000Z
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
export const RDWQuery = (
  auth: AuthOpts = {},
  opts: Options = {},
): SodaQuery<KentekenVoertuigenSubcategorieVoertuig_ResponseData> =>
  createQueryWithDataset<KentekenVoertuigenSubcategorieVoertuig_ResponseData>(
    Info.domain,
    Info.dataset,
    auth,
    {
      ...opts,
      strict: typeof opts.strict === "boolean" ? opts.strict : true,
    },
  );

/**
 * **Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig**
 *
 * Provider for the Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig dataset. Bundles:
 * - {@link KentekenVoertuigenSubcategorieVoertuig.RDWQuery} — a typed {@link SodaQuery} builder
 * - {@link KentekenVoertuigenSubcategorieVoertuig.Fields} — the queryable field definitions
 * - {@link KentekenVoertuigenSubcategorieVoertuig.Info} — dataset metadata
 *
 * **Category:** Voertuigen
 *
 * **Tags:**
 *
 * **License:** Public Domain (Creative Commons 0 (CC0))
 *
 * **Dataset ID:** 2ba7-embk
 *
 * **URL:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_subcategorie/2ba7-embk
 *
 * **Published:** 2024-05-28T14:40:14.000Z
 *
 * **Structure last updated:** 2025-03-05T18:13:10.000Z
 *
 * @example
 * ```ts
 * const { data } = await KentekenVoertuigenSubcategorieVoertuig.RDWQuery()
 *   .where(Where.like(KentekenVoertuigenSubcategorieVoertuig.Fields.Kenteken, "some_value"))
 *   .limit(10)
 *   .execute();
 * ```
 */
export const KentekenVoertuigenSubcategorieVoertuig = {
  RDWQuery,
  Fields,
  Info,
};
