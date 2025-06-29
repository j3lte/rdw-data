# RDW Data

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/j3lte/rdw-data?style=for-the-badge)](https://github.com/j3lte/rdw-data/releases/latest "GitHub release (latest by date)")
[![NPM Version](https://img.shields.io/npm/v/rdw-data?style=for-the-badge)](https://www.npmjs.com/package/rdw-data "NPM Version")
[![GitHub Release Date](https://img.shields.io/github/release-date/j3lte/rdw-data?style=for-the-badge)](https://github.com/j3lte/rdw-data/releases/latest "GitHub Release Date")
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/j3lte/rdw-data?style=for-the-badge)
[![GitHub](https://img.shields.io/github/license/j3lte/rdw-data?style=for-the-badge)](https://github.com/j3lte/rdw-data/blob/main/LICENSE "GitHub License")
[![GitHub last commit](https://img.shields.io/github/last-commit/j3lte/rdw-data?style=for-the-badge)](https://github.com/j3lte/rdw-data/commits/main "GitHub last commit")
[![GitHub issues](https://img.shields.io/github/issues/j3lte/rdw-data?style=for-the-badge)](https://github.com/j3lte/rdw-data/issues "Github Issues")
[![Deno docs](https://img.shields.io/badge/Deno-Docs-blue?style=for-the-badge)](https://doc.deno.land/https/deno.land/x/rdw_data/mod.ts "Deno docs")

This uses the [RDW Open Data](https://opendata.rdw.nl/) API to generate a [SODA API](https://github.com/j3lte/deno-soda) providers for Deno and NodeJS.

## Installation

Deno:

```
Import directly from https://deno.land/x/rdw_data/mod.ts
```

Node:

```bash
> npm install rdw-data -s
```

## Usage

```typescript
import {
  KentekenVoertuigen,
  KentekenVoertuigenAssen,
  KentekenVoertuigenBrandstof,
  KentekenVoertuigenCarrosserie,
  KentekenVoertuigenCarrosserieSpecificatie,
  KentekenVoertuigenVoertuigklasse,
  Select,
  Where,
} from "https://deno.land/x/rdw_data/mod.ts";

/*
 * Example: search for a license plate and combine the results
 */
const search = (
  kenteken: string,
) =>
  Promise.all([
    KentekenVoertuigen.RDWQuery().where(
      Where.like(KentekenVoertuigen.Fields.Kenteken, kenteken),
    ).single(),
    KentekenVoertuigenAssen.RDWQuery().where(
      Where.like(KentekenVoertuigenAssen.Fields.Kenteken, kenteken),
    ).single(),
    KentekenVoertuigenBrandstof.RDWQuery().where(
      Where.like(KentekenVoertuigenBrandstof.Fields.Kenteken, kenteken),
    ).single(),
    KentekenVoertuigenCarrosserie.RDWQuery().where(
      Where.like(KentekenVoertuigenCarrosserie.Fields.Kenteken, kenteken),
    ).single(),
    KentekenVoertuigenCarrosserieSpecificatie.RDWQuery().where(
      Where.like(KentekenVoertuigenCarrosserieSpecificatie.Fields.Kenteken, kenteken),
    ).single(),
    KentekenVoertuigenVoertuigklasse.RDWQuery().where(
      Where.like(KentekenVoertuigenVoertuigklasse.Fields.Kenteken, kenteken),
    ).single(),
  ]).then((results) => {
    return results.reduce((acc, result) => {
      return {
        ...acc,
        ...(result.data || {}),
      };
    }, {});
  });

// We can also count the number of result in a database
const { data } = await KentekenVoertuigen.RDWQuery().select(
  Select().count(),
).single();

// Let's search. Kenteken (License plate) should only have letters and numbers, no dashes ('-')
const combined = await search("XXXXX");

console.log(data.count);
console.log(combined);
```

<!-- START FUNCTIONS -->
## API

These are auto generated providers and use `soda-query@0.4.5`.

### Overview

| Provider | Name | Category |
| --- | --- | --- |
| `BrandstoffenOpPc4` | [Brandstoffen_op_PC4](https://opendata.rdw.nl/dataset/Brandstoffen_op_PC4/8wbe-pu7d) | Unknown |
| `ErkendeBedrijven` | [Open Data RDW: Erkende Bedrijven](https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkende-Bedrijven/5k74-3jha) | Erkende bedrijven |
| `Erkenningen` | [Open Data RDW: Erkenningen](https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz) | Erkende bedrijven |
| `Gebieden` | [Gebieden](https://opendata.rdw.nl/Parkeren/Gebieden/u3zx-f5hd) | Parkeren |
| `Gebieden` | [Gebieden](https://opendata.rdw.nl/Parkeren/Gebieden/b2fs-9ymw) | Parkeren |
| `Gebreken` | [Open Data RDW: Gebreken](https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Gebreken/hx2c-gt7k) | Keuringen |
| `GeconstateerdeGebreken` | [Open Data RDW: Geconstateerde Gebreken](https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Geconstateerde-Gebreken/a34c-vvps) | Keuringen |
| `GeoCarpool` | [GEO Carpool](https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx) | Parkeren |
| `GeoParkeerGarages` | [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34) | Parkeren |
| `GeoPenr` | [GEO PenR](https://opendata.rdw.nl/Parkeren/GEO-PenR/6wzd-evwu) | Parkeren |
| `KentekenVoertuigen` | [Open Data RDW: Gekentekende_voertuigen](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2) | Voertuigen |
| `KentekenVoertuigenAssen` | [Open Data RDW: Gekentekende_voertuigen_assen](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_assen/3huj-srit) | Voertuigen |
| `KentekenVoertuigenBijzonderheden` | [Open Data RDW: Gekentekende_voertuigen_bijzonderheden](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_bijzonderhed/7ug8-2dtt) | Voertuigen |
| `KentekenVoertuigenBrandstof` | [Open Data RDW: Gekentekende_voertuigen_brandstof](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_brandstof/8ys7-d773) | Voertuigen |
| `KentekenVoertuigenCarrosserie` | [Open Data RDW: Gekentekende_voertuigen_carrosserie](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie/vezc-m2t6) | Voertuigen |
| `KentekenVoertuigenCarrosserieSpecificatie` | [Open Data RDW: Gekentekende_voertuigen_carrosserie_specificatie](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie_/jhie-znh9) | Voertuigen |
| `KentekenVoertuigenRupsbanden` | [Open Data RDW: Gekentekende_voertuigen_rupsbanden](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_rupsbanden/3xwf-ince) | Voertuigen |
| `KentekenVoertuigenSubcategorieVoertuig` | [Open Data RDW: Gekentekende_voertuigen_subcategorie_voertuig](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_subcategorie/2ba7-embk) | Voertuigen |
| `KentekenVoertuigenVoertuigklasse` | [Open Data RDW: Gekentekende_voertuigen_voertuigklasse](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_voertuigklas/kmfi-hrps) | Voertuigen |
| `Keuringen` | [Open Data RDW: Keuringen](https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Keuringen/vkij-7mwc) | Keuringen |
| `Locaties` | [Locaties](https://opendata.rdw.nl/Parkeren/Locaties/3rhp-hrx5) | Parkeren |
| `Locaties` | [Locaties](https://opendata.rdw.nl/Parkeren/Locaties/gfb5-nkdy) | Parkeren |
| `MeldingenKeuringsinstantie` | [Open Data RDW: Meldingen Keuringsinstantie](https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Meldingen-Keuringsinstantie/sgfe-77wx) | Keuringen |
| `ParkerenBetaalmethodeGebied` | [Open Data Parkeren: BETAALMETHODE GEBIED](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-GEBIED/r3rs-ibz5) | Parkeren |
| `ParkerenBetaalmethodeVerkooppunt` | [Open Data Parkeren: BETAALMETHODE VERKOOPPUNT](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-VERKOOPPUNT/j96a-7nhx) | Parkeren |
| `ParkerenContactpersoon` | [Open Data Parkeren: CONTACTPERSOON](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-CONTACTPERSOON/rbew-yhyc) | Parkeren |
| `ParkerenGebied` | [Open Data Parkeren: GEBIED](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg) | Parkeren |
| `ParkerenGebiedRegeling` | [Open Data Parkeren: GEBIED REGELING](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED-REGELING/qtex-qwd8) | Parkeren |
| `ParkerenGebiedsbeheerder` | [Open Data Parkeren: GEBIEDSBEHEERDER](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIEDSBEHEERDER/2uc2-nnv3) | Parkeren |
| `ParkerenGebruiksdoel` | [Open Data Parkeren: GEBRUIKSDOEL](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBRUIKSDOEL/qidm-7mkf) | Parkeren |
| `ParkerenGeldigheidsinperking` | [Open Data Parkeren: GELDIGHEIDSINPERKING](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSINPERKING/ynha-fuwp) | Parkeren |
| `ParkerenGeldigheidsuitbreiding` | [Open Data Parkeren: GELDIGHEIDSUITBREIDING](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSUITBREIDING/8ff3-rxrk) | Parkeren |
| `ParkerenGeometrieGebied` | [Open Data Parkeren: GEOMETRIE GEBIED](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7) | Parkeren |
| `ParkerenGeoVerkooppunt` | [Open Data Parkeren: GEO VERKOOPPUNT](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp) | Parkeren |
| `ParkerenGpsCoordinatenParkeerlocatie` | [Open Data Parkeren: GPS-COÖRDINATEN PARKEERLOCATIE](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GPS-COÖRDINATEN-PARKEERLOCATIE/k3dr-ge3w) | Parkeren |
| `ParkerenIndexStatischEnDynamisch` | [Open Data Parkeren: Index Statisch en Dynamisch](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-Index-Statisch-en-Dynamisch/f6v7-gjpa) | Parkeren |
| `ParkerenInUitgang` | [Open Data Parkeren: IN-UITGANG](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-IN-UITGANG/c653-u9z2) | Parkeren |
| `ParkerenParkeeradres` | [Open Data Parkeren: PARKEERADRES](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERADRES/ygq4-hh5q) | Parkeren |
| `ParkerenParkeergebied` | [Open Data Parkeren: PARKEERGEBIED](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED/mz4f-59fw) | Parkeren |
| `ParkerenParkeergebiedContactpersoon` | [Open Data Parkeren: PARKEERGEBIED CONTACTPERSOON](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED-CONTACTPERSOON/69hx-t283) | Parkeren |
| `ParkerenParkingOpen` | [Open Data Parkeren: PARKING OPEN](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-OPEN/figd-gux7) | Parkeren |
| `ParkerenParkingToegang` | [Open Data Parkeren: PARKING TOEGANG](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-TOEGANG/edv8-qiyg) | Parkeren |
| `ParkerenRegeling` | [Open Data Parkeren: REGELING](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-REGELING/yefi-qfiq) | Parkeren |
| `ParkerenSpecialeDag` | [Open Data Parkeren: SPECIALE DAG](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq) | Parkeren |
| `ParkerenSpecificatiesParkeergebied` | [Open Data Parkeren: SPECIFICATIES PARKEERGEBIED](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s) | Parkeren |
| `ParkerenTariefberekening` | [Open Data Parkeren: TARIEFBEREKENING](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y) | Parkeren |
| `ParkerenTariefdeel` | [Open Data Parkeren: TARIEFDEEL](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg) | Parkeren |
| `ParkerenTijdvak` | [Open Data Parkeren: TIJDVAK](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq) | Parkeren |
| `ParkerenVerkooppunt` | [Open Data Parkeren: VERKOOPPUNT](https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-VERKOOPPUNT/fk68-nf2y) | Parkeren |
| `ProductenCatalogus` | [Open Data RDW: Producten Catalogus](https://opendata.rdw.nl/Product-catalogus/Open-Data-RDW-Producten-Catalogus/v23s-d6km) | Product catalogus |
| `TellerstandoordeelTrendToelichting` | [Open Data RDW: Tellerstandoordeel Trend Toelichting](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Tellerstandoordeel-Trend-Toelichting/jqs4-4kvw) | Voertuigen |
| `TerugroepActie` | [Open Data RDW: Terugroep_actie](https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie/j9yg-7rg9) | Terugroepacties |
| `TerugroepActieRisico` | [Open Data RDW: Terugroep_actie_risico](https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf) | Terugroepacties |
| `TerugroepActieStatus` | [Open Data RDW: Terugroep_actie_status](https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7) | Terugroepacties |
| `TerugroepInformerenEigenaar` | [Open Data RDW: Terugroep_informeren_eigenaar](https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_informeren_eigenaar/mh8w-8cup) | Terugroepacties |
| `TerugroepVoertuigMerkType` | [Open Data RDW: Terugroep_voertuig_merk_type](https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e) | Terugroepacties |
| `TgkAandrijvingUitvoering` | [Open Data RDW: TGK Aandrijving Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Aandrijving-Uitvoering/4by9-ammk) | Typegoedkeuring |
| `TgkAsUitvoering` | [Open Data RDW: TGK As Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-As-Uitvoering/xhyb-w7xt) | Typegoedkeuring |
| `TgkBasisUitvoering` | [Open Data RDW: TGK Basis Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Basis-Uitvoering/byxc-wwua) | Typegoedkeuring |
| `TgkCarrosserieUitvoering` | [Open Data RDW: TGK Carrosserie Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Carrosserie-Uitvoering/ky2r-jqad) | Typegoedkeuring |
| `TgkEnergiebronUitvoering` | [Open Data RDW: TGK Energiebron Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Energiebron-Uitvoering/gr7t-qfnb) | Typegoedkeuring |
| `TgkHandelsbenamingFabrikant` | [Open Data RDW: TGK Handelsbenaming Fabrikant](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Handelsbenaming-Fabrikant/x5v3-sewk) | Typegoedkeuring |
| `TgkIntrekkingTypegoedkeuring` | [Open Data RDW: TGK Intrekking Typegoedkeuring](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Intrekking-Typegoedkeuring/9s6a-b42z) | Typegoedkeuring |
| `TgkKoppelingUitvoering` | [Open Data RDW: TGK Koppeling Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Koppeling-Uitvoering/d3ex-xghj) | Typegoedkeuring |
| `TgkMerkUitvoering` | [Open Data RDW: TGK Merk Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Merk-Uitvoering/kyri-nuah) | Typegoedkeuring |
| `TgkRupsbandsetUitvoering` | [Open Data RDW: TGK Rupsbandset Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Rupsbandset-Uitvoering/xn6e-huse) | Typegoedkeuring |
| `TgkSpecialeDoeleinden` | [Open Data RDW: TGK Speciale Doeleinden](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Speciale-Doeleinden/m692-vvff) | Typegoedkeuring |
| `TgkVersnellingUitvoering` | [Open Data RDW: TGK Versnelling Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Versnelling-Uitvoering/7rjk-eycs) | Typegoedkeuring |
| `ToegevoegdeObjecten` | [Open Data RDW: Toegevoegde Objecten](https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Toegevoegde-Objecten/sghb-dzxx) | Keuringen |

### Details

<details><summary>BrandstoffenOpPc4</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/BrandstoffenOpPc4.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Aantal` | `aantal` | Aantal | Number |
| `Brandstof` | `brandstof` | Brandstof | Text |
| `ExternOplaadbaar` | `extern_oplaadbaar` | Extern oplaadbaar | Text |
| `Postcode` | `postcode` | Postcode | Number |
| `Voertuigsoort` | `voertuigsoort` | Voertuigsoort | Text |

**Link:** https://opendata.rdw.nl/dataset/Brandstoffen_op_PC4/8wbe-pu7d
</details>

<details><summary>ErkendeBedrijven</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ErkendeBedrijven.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `ApiBedrijfErkenningen` | `api_bedrijf_erkenningen` | api_bedrijf_erkenningen | Text |
| `Gevelnaam` | `gevelnaam` | Gevelnaam | Text |
| `Huisnummer` | `huisnummer` | Huisnummer | Text |
| `HuisnummerToevoeging` | `huisnummer_toevoeging` | Huisnummer toevoeging | Text |
| `NaamBedrijf` | `naam_bedrijf` | Naam bedrijf | Text |
| `Plaats` | `plaats` | Plaats | Text |
| `PostcodeAlfanumeriek` | `postcode_alfanumeriek` | Postcode alfanumeriek | Text |
| `PostcodeNumeriek` | `postcode_numeriek` | Postcode numeriek | Number |
| `Straat` | `straat` | Straat | Text |
| `Volgnummer` | `volgnummer` | Volgnummer | Number |

**Link:** https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkende-Bedrijven/5k74-3jha
</details>

<details><summary>Erkenningen</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/Erkenningen.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Erkenning` | `erkenning` | Erkenning | Text |
| `Volgnummer` | `volgnummer` | Volgnummer | Number |

**Link:** https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz
</details>

<details><summary>Gebieden</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/Gebieden.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `N01Naam` | `_01_naam` | 01_NAAM | Text |
| `N02Code` | `_02_code` | 02_CODE | Text |
| `N03Url` | `_03_url` | 03_URL | Text |
| `N04Uuid` | `_04_uuid` | 04_UUID | Text |
| `N05Gebcode` | `_05_gebcode` | 05_GEBCODE | Text |
| `N06Geboms` | `_06_geboms` | 06_GEBOMS | Text |
| `N07Regcode` | `_07_regcode` | 07_REGCODE | Text |
| `N08Regoms` | `_08_regoms` | 08_REGOMS | Text |
| `N09Prijs` | `_09_prijs` | 09_PRIJS | Text |
| `N10SrtReg` | `_10_srt_reg` | 10_SRT_REG | Text |
| `N11Ma` | `_11_ma` | 11_MA | Text |
| `N12Di` | `_12_di` | 12_DI | Text |
| `N13Wo` | `_13_wo` | 13_WO | Text |
| `N14Do` | `_14_do` | 14_DO | Text |
| `N15Vr` | `_15_vr` | 15_VR | Text |
| `N16Za` | `_16_za` | 16_ZA | Text |
| `N17Zo` | `_17_zo` | 17_ZO | Text |
| `N18Maximum` | `_18_maximum` | 18_MAXIMUM | Text |
| `N19ParkPl` | `_19_park_pl` | 19_PARK_PL | Text |
| `N20Oplaadp` | `_20_oplaadp` | 20_OPLAADP | Text |
| `N21Rolst` | `_21_rolst` | 21_ROLST | Text |
| `N22Hoogte` | `_22_hoogte` | 22_HOOGTE | Text |
| `N23VoetgI` | `_23_voetg_i` | 23_VOETG_I | Text |
| `N24VoetgU` | `_24_voetg_u` | 24_VOETG_U | Text |
| `N25VrtgI` | `_25_vrtg_i` | 25_VRTG_I | Text |
| `N26VrtgU` | `_26_vrtg_u` | 26_VRTG_U | Text |
| `N27UitInd` | `_27_uit_ind` | 27_UIT_IND | Text |
| `N28Jaarope` | `_28_jaarope` | 28_JAAROPE | Text |
| `N29Betaal` | `_29_betaal` | 29_BETAAL | Text |
| `N30Naam` | `_30_naam` | 30_NAAM | Text |
| `N31Functie` | `_31_functie` | 31_FUNCTIE | Text |
| `N32Tel` | `_32_tel` | 32_TEL | Text |
| `N33EMail` | `_33_e_mail` | 33_E_MAIL | Text |
| `N34Open` | `_34_open` | 34_OPEN | Text |
| `N35Vrij` | `_35_vrij` | 35_VRIJ | Text |
| `N36Vrijopl` | `_36_vrijopl` | 36_VRIJOPL | Text |
| `N37Vol` | `_37_vol` | 37_VOL | Text |
| `Issues` | `_issues___` | _issues___ | Text |
| `Issues00` | `_issues_00` | _issues_00 | Text |
| `Issues01` | `_issues_01` | _issues_01 | Text |
| `Issues02` | `_issues_02` | _issues_02 | Text |
| `ActueleInf` | `actuele_inf` | ActueleInf | Text |
| `LocationRe` | `location_re` | LocationRe | Text |
| `SocrataId` | `socrata_id` | socrata_id | Text |
| `TheGeom` | `the_geom` | the_geom | MultiPolygon |
| `UsageId` | `usage_id` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Gebieden/u3zx-f5hd
</details>

<details><summary>Gebieden</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/Gebieden.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `N01Naam` | `_01_naam` | 01_NAAM | Text |
| `N02Code` | `_02_code` | 02_CODE | Text |
| `N03Url` | `_03_url` | 03_URL | Text |
| `N04Uuid` | `_04_uuid` | 04_UUID | Text |
| `N05Gebcode` | `_05_gebcode` | 05_GEBCODE | Text |
| `N06Geboms` | `_06_geboms` | 06_GEBOMS | Text |
| `N07Regcode` | `_07_regcode` | 07_REGCODE | Text |
| `N08Regoms` | `_08_regoms` | 08_REGOMS | Text |
| `N09Prijs` | `_09_prijs` | 09_PRIJS | Text |
| `N10SrtReg` | `_10_srt_reg` | 10_SRT_REG | Text |
| `N11Ma` | `_11_ma` | 11_MA | Text |
| `N12Di` | `_12_di` | 12_DI | Text |
| `N13Wo` | `_13_wo` | 13_WO | Text |
| `N14Do` | `_14_do` | 14_DO | Text |
| `N15Vr` | `_15_vr` | 15_VR | Text |
| `N16Za` | `_16_za` | 16_ZA | Text |
| `N17Zo` | `_17_zo` | 17_ZO | Text |
| `N18Maximum` | `_18_maximum` | 18_MAXIMUM | Text |
| `N19ParkPl` | `_19_park_pl` | 19_PARK_PL | Text |
| `N20Oplaadp` | `_20_oplaadp` | 20_OPLAADP | Text |
| `N21Rolst` | `_21_rolst` | 21_ROLST | Text |
| `N22Hoogte` | `_22_hoogte` | 22_HOOGTE | Text |
| `N23VoetgI` | `_23_voetg_i` | 23_VOETG_I | Text |
| `N24VoetgU` | `_24_voetg_u` | 24_VOETG_U | Text |
| `N25VrtgI` | `_25_vrtg_i` | 25_VRTG_I | Text |
| `N26VrtgU` | `_26_vrtg_u` | 26_VRTG_U | Text |
| `N27UitInd` | `_27_uit_ind` | 27_UIT_IND | Text |
| `N28Jaarope` | `_28_jaarope` | 28_JAAROPE | Text |
| `N29Betaal` | `_29_betaal` | 29_BETAAL | Text |
| `N30Naam` | `_30_naam` | 30_NAAM | Text |
| `N31Functie` | `_31_functie` | 31_FUNCTIE | Text |
| `N32Tel` | `_32_tel` | 32_TEL | Text |
| `N33EMail` | `_33_e_mail` | 33_E_MAIL | Text |
| `N34Open` | `_34_open` | 34_OPEN | Text |
| `N35Vrij` | `_35_vrij` | 35_VRIJ | Text |
| `N36Vrijopl` | `_36_vrijopl` | 36_VRIJOPL | Text |
| `N37Vol` | `_37_vol` | 37_VOL | Text |
| `Issues` | `_issues___` | _issues___ | Text |
| `Issues00` | `_issues_00` | _issues_00 | Text |
| `Issues01` | `_issues_01` | _issues_01 | Text |
| `Issues02` | `_issues_02` | _issues_02 | Text |
| `ActueleInf` | `actuele_inf` | ActueleInf | Text |
| `LocationRe` | `location_re` | LocationRe | Text |
| `SocrataId` | `socrata_id` | socrata_id | Text |
| `TheGeom` | `the_geom` | the_geom | MultiPolygon |
| `UsageId` | `usage_id` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Gebieden/b2fs-9ymw
</details>

<details><summary>Gebreken</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/Gebreken.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `EinddatumGebrek` | `einddatum_gebrek` | Einddatum gebrek | Number |
| `EinddatumGebrekDt` | `einddatum_gebrek_dt` | Einddatum gebrek DT | Calendar date |
| `GebrekArtikelNummer` | `gebrek_artikel_nummer` | Gebrek artikel nummer | Text |
| `GebrekIdentificatie` | `gebrek_identificatie` | Gebrek identificatie | Text |
| `GebrekOmschrijving` | `gebrek_omschrijving` | Gebrek omschrijving | Text |
| `GebrekParagraafNummer` | `gebrek_paragraaf_nummer` | Gebrek paragraaf nummer | Number |
| `IngangsdatumGebrek` | `ingangsdatum_gebrek` | Ingangsdatum gebrek | Number |
| `IngangsdatumGebrekDt` | `ingangsdatum_gebrek_dt` | Ingangsdatum gebrek DT | Calendar date |

**Link:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Gebreken/hx2c-gt7k
</details>

<details><summary>GeconstateerdeGebreken</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/GeconstateerdeGebreken.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `AantalGebrekenGeconstateerd` | `aantal_gebreken_geconstateerd` | Aantal gebreken geconstateerd | Number |
| `GebrekIdentificatie` | `gebrek_identificatie` | Gebrek identificatie | Text |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `MeldDatumDoorKeuringsinstantie` | `meld_datum_door_keuringsinstantie` | Meld datum door keuringsinstantie | Number |
| `MeldDatumDoorKeuringsinstantieDt` | `meld_datum_door_keuringsinstantie_dt` | Meld datum door keuringsinstantie DT | Calendar date |
| `MeldTijdDoorKeuringsinstantie` | `meld_tijd_door_keuringsinstantie` | Meld tijd door keuringsinstantie | Number |
| `SoortErkenningKeuringsinstantie` | `soort_erkenning_keuringsinstantie` | Soort erkenning keuringsinstantie | Text |
| `SoortErkenningOmschrijving` | `soort_erkenning_omschrijving` | Soort erkenning omschrijving | Text |

**Link:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Geconstateerde-Gebreken/a34c-vvps
</details>

<details><summary>GeoCarpool</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/GeoCarpool.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `AantalLaadPunten` | `aantal_laad_punten` | Aantal laad punten | Number |
| `AantalParkeerPlaatsen` | `aantal_parkeer_plaatsen` | Aantal parkeer plaatsen | Number |
| `Areadesc` | `areadesc` | AreaDesc | Text |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddataarea` | `enddataarea` | EndDataArea | Number |
| `Location` | `location` | Location | Point |
| `LocationAddress` | `location_address` | Location (address) | Text |
| `LocationCity` | `location_city` | Location (city) | Text |
| `LocationState` | `location_state` | Location (state) | Text |
| `LocationZip` | `location_zip` | Location (zip) | Text |
| `MaximaleInrijHoogte` | `maximale_inrij_hoogte` | Maximale doorrijhoogte | Text |
| `Startdataarea` | `startdataarea` | StartDataArea | Number |
| `ToegankelijkVoorGehandicapten` | `toegankelijk_voor_gehandicapten` | Toegankelijk voor gehandicapten | Number |
| `Usageid` | `usageid` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx
</details>

<details><summary>GeoParkeerGarages</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/GeoParkeerGarages.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areadesc` | `areadesc` | AreaDesc | Text |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddataarea` | `enddataarea` | EndDataArea | Number |
| `Location` | `location` | Location | Point |
| `LocationAddress` | `location_address` | Location (address) | Text |
| `LocationCity` | `location_city` | Location (city) | Text |
| `LocationState` | `location_state` | Location (state) | Text |
| `LocationZip` | `location_zip` | Location (zip) | Text |
| `Startdataarea` | `startdataarea` | StartDataArea | Number |
| `Usageid` | `usageid` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
</details>

<details><summary>GeoPenr</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/GeoPenr.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areadesc` | `areadesc` | AreaDesc | Text |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddataarea` | `enddataarea` | EndDataArea | Number |
| `Location` | `location` | Location | Point |
| `LocationAddress` | `location_address` | Location (address) | Text |
| `LocationCity` | `location_city` | Location (city) | Text |
| `LocationState` | `location_state` | Location (state) | Text |
| `LocationZip` | `location_zip` | Location (zip) | Text |
| `Startdataarea` | `startdataarea` | StartDataArea | Number |
| `Usageid` | `usageid` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/GEO-PenR/6wzd-evwu
</details>

<details><summary>KentekenVoertuigen</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/KentekenVoertuigen.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `AanhangwagenAutonoomGeremd` | `aanhangwagen_autonoom_geremd` | Aanhangwagen autonoom geremd | Number |
| `AanhangwagenMiddenasGeremd` | `aanhangwagen_middenas_geremd` | Aanhangwagen middenas geremd | Number |
| `AantalCilinders` | `aantal_cilinders` | Aantal cilinders | Number |
| `AantalDeuren` | `aantal_deuren` | Aantal deuren | Number |
| `AantalRolstoelplaatsen` | `aantal_rolstoelplaatsen` | Aantal rolstoelplaatsen | Number |
| `AantalStaanplaatsen` | `aantal_staanplaatsen` | Aantal staanplaatsen | Number |
| `AantalWielen` | `aantal_wielen` | Aantal wielen | Number |
| `AantalZitplaatsen` | `aantal_zitplaatsen` | Aantal zitplaatsen | Number |
| `AerodynVoorz` | `aerodyn_voorz` | Aerodynamische voorziening of uitrusting | Text |
| `AfstandHartKoppelingTotAchterzijdeVoertuig` | `afstand_hart_koppeling_tot_achterzijde_voertuig` | Afstand hart koppeling tot achterzijde voertuig | Number |
| `AfstandVoorzijdeVoertuigTotHartKoppeling` | `afstand_voorzijde_voertuig_tot_hart_koppeling` | Afstand voorzijde voertuig tot hart koppeling | Number |
| `AfwijkendeMaximumSnelheid` | `afwijkende_maximum_snelheid` | Afwijkende maximum snelheid | Number |
| `ApiGekentekendeVoertuigenAssen` | `api_gekentekende_voertuigen_assen` | API Gekentekende_voertuigen_assen | Text |
| `ApiGekentekendeVoertuigenBrandstof` | `api_gekentekende_voertuigen_brandstof` | API Gekentekende_voertuigen_brandstof | Text |
| `ApiGekentekendeVoertuigenCarrosserie` | `api_gekentekende_voertuigen_carrosserie` | API Gekentekende_voertuigen_carrosserie | Text |
| `ApiGekentekendeVoertuigenCarrosserieSpecifiek` | `api_gekentekende_voertuigen_carrosserie_specifiek` | API Gekentekende_voertuigen_carrosserie_specifiek | Text |
| `ApiGekentekendeVoertuigenVoertuigklasse` | `api_gekentekende_voertuigen_voertuigklasse` | API Gekentekende_voertuigen_voertuigklasse | Text |
| `Breedte` | `breedte` | Breedte | Number |
| `BreedteVoertuigMaximum` | `breedte_voertuig_maximum` | Breedte voertuig maximum | Number |
| `BreedteVoertuigMinimum` | `breedte_voertuig_minimum` | Breedte voertuig minimum | Number |
| `BrutoBpm` | `bruto_bpm` | Bruto BPM | Number |
| `Catalogusprijs` | `catalogusprijs` | Catalogusprijs | Number |
| `Cilinderinhoud` | `cilinderinhoud` | Cilinderinhoud | Number |
| `CodeToelichtingTellerstandoordeel` | `code_toelichting_tellerstandoordeel` | Code toelichting tellerstandoordeel | Text |
| `DatumEersteTenaamstellingInNederland` | `datum_eerste_tenaamstelling_in_nederland` | Datum eerste tenaamstelling in Nederland | Number |
| `DatumEersteTenaamstellingInNederlandDt` | `datum_eerste_tenaamstelling_in_nederland_dt` | Datum eerste tenaamstelling in Nederland DT | Calendar date |
| `DatumEersteToelating` | `datum_eerste_toelating` | Datum eerste toelating | Number |
| `DatumEersteToelatingDt` | `datum_eerste_toelating_dt` | Datum eerste toelating DT | Calendar date |
| `DatumTenaamstelling` | `datum_tenaamstelling` | Datum tenaamstelling | Number |
| `DatumTenaamstellingDt` | `datum_tenaamstelling_dt` | Datum tenaamstelling DT | Calendar date |
| `EersteKleur` | `eerste_kleur` | Eerste kleur | Text |
| `EuropeseUitvoeringcategorieToevoeging` | `europese_uitvoeringcategorie_toevoeging` | Europese uitvoeringcategorie toevoeging | Text |
| `EuropeseVoertuigcategorie` | `europese_voertuigcategorie` | Europese voertuigcategorie | Text |
| `EuropeseVoertuigcategorieToevoeging` | `europese_voertuigcategorie_toevoeging` | Europese voertuigcategorie toevoeging | Text |
| `ExportIndicator` | `export_indicator` | Export indicator | Text |
| `GemLadingWrde` | `gem_lading_wrde` | Gemiddelde Lading Waarde | Number |
| `Handelsbenaming` | `handelsbenaming` | Handelsbenaming | Text |
| `HoogteVoertuig` | `hoogte_voertuig` | Hoogte voertuig | Number |
| `HoogteVoertuigMaximum` | `hoogte_voertuig_maximum` | Hoogte voertuig maximum | Number |
| `HoogteVoertuigMinimum` | `hoogte_voertuig_minimum` | Hoogte voertuig minimum | Number |
| `Inrichting` | `inrichting` | Inrichting | Text |
| `JaarLaatsteRegistratieTellerstand` | `jaar_laatste_registratie_tellerstand` | Jaar laatste registratie tellerstand | Number |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `Laadvermogen` | `laadvermogen` | Laadvermogen | Number |
| `Lengte` | `lengte` | Lengte | Number |
| `LengteVoertuigMaximum` | `lengte_voertuig_maximum` | Lengte voertuig maximum | Number |
| `LengteVoertuigMinimum` | `lengte_voertuig_minimum` | Lengte voertuig minimum | Number |
| `MassaAltAandr` | `massa_alt_aandr` | Additionele massa alternatieve aandrijving | Number |
| `MassaBedrijfsklaarMaximaal` | `massa_bedrijfsklaar_maximaal` | Massa bedrijfsklaar maximaal | Number |
| `MassaBedrijfsklaarMinimaal` | `massa_bedrijfsklaar_minimaal` | Massa bedrijfsklaar minimaal | Number |
| `MassaLedigVoertuig` | `massa_ledig_voertuig` | Massa ledig voertuig | Number |
| `MassaRijklaar` | `massa_rijklaar` | Massa rijklaar | Number |
| `MaximaleConstructiesnelheid` | `maximale_constructiesnelheid` | Maximale constructiesnelheid | Number |
| `MaximumLastOnderDeVoorasSenTezamenKoppeling` | `maximum_last_onder_de_vooras_sen_tezamen_koppeling` | Maximum last onder de vooras(sen) (tezamen)/koppeling | Number |
| `MaximumMassaSamenstelling` | `maximum_massa_samenstelling` | Maximum massa samenstelling | Number |
| `MaximumMassaTechnischMaximaal` | `maximum_massa_technisch_maximaal` | Maximum massa technisch maximaal | Number |
| `MaximumMassaTechnischMinimaal` | `maximum_massa_technisch_minimaal` | Maximum massa technisch minimaal | Number |
| `MaximumMassaTrekkenOngeremd` | `maximum_massa_trekken_ongeremd` | Maximum massa trekken ongeremd | Number |
| `MaximumOndersteunendeSnelheid` | `maximum_ondersteunende_snelheid` | Maximum ondersteunende snelheid | Number |
| `MaximumTrekkenMassaGeremd` | `maximum_trekken_massa_geremd` | Maximum trekken massa geremd | Number |
| `Merk` | `merk` | Merk | Text |
| `OpenstaandeTerugroepactieIndicator` | `openstaande_terugroepactie_indicator` | Openstaande terugroepactie indicator | Text |
| `OpleggerGeremd` | `oplegger_geremd` | Oplegger geremd | Number |
| `PlaatsChassisnummer` | `plaats_chassisnummer` | Plaats chassisnummer | Text |
| `RegistratieDatumGoedkeuringAfschrijvingsmomentBpm` | `registratie_datum_goedkeuring_afschrijvingsmoment_bpm` | Registratie datum goedkeuring (afschrijvingsmoment BPM) | Number |
| `RegistratieDatumGoedkeuringAfschrijvingsmomentBpmDt` | `registratie_datum_goedkeuring_afschrijvingsmoment_bpm_dt` | Registratie datum goedkeuring (afschrijvingsmoment BPM) DT | Calendar date |
| `Rupsonderstelconfiguratiecode` | `rupsonderstelconfiguratiecode` | Rupsonderstelconfiguratiecode | Text |
| `SubcategorieNederland` | `subcategorie_nederland` | Subcategorie Nederland | Text |
| `TaxiIndicator` | `taxi_indicator` | Taxi indicator | Text |
| `TechnischToelaatbaarMassaKoppelpunt` | `technisch_toelaatbaar_massa_koppelpunt` | Technisch toelaatbaar massa koppelpunt | Number |
| `TechnischeMaxMassaVoertuig` | `technische_max_massa_voertuig` | Technische max. massa voertuig | Number |
| `Tellerstandoordeel` | `tellerstandoordeel` | Tellerstandoordeel | Text |
| `TenaamstellenMogelijk` | `tenaamstellen_mogelijk` | Tenaamstellen mogelijk | Text |
| `ToegestaneMaximumMassaVoertuig` | `toegestane_maximum_massa_voertuig` | Toegestane maximum massa voertuig | Number |
| `TweedeKleur` | `tweede_kleur` | Tweede kleur | Text |
| `Type` | `type` | Type | Text |
| `TypeGasinstallatie` | `type_gasinstallatie` | Type gasinstallatie | Text |
| `TypeRemsysteemVoertuigCode` | `type_remsysteem_voertuig_code` | Type remsysteem voertuig code | Text |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Uitvoering` | `uitvoering` | Uitvoering | Text |
| `Variant` | `variant` | Variant | Text |
| `VerlCabInd` | `verl_cab_ind` | Verlengde cabine indicator | Text |
| `VermogenMassarijklaar` | `vermogen_massarijklaar` | Vermogen massarijklaar | Number |
| `VerticaleBelastingKoppelpuntGetrokkenVoertuig` | `verticale_belasting_koppelpunt_getrokken_voertuig` | Verticale belasting koppelpunt getrokken voertuig | Number |
| `VervaldatumApk` | `vervaldatum_apk` | Vervaldatum APK | Number |
| `VervaldatumApkDt` | `vervaldatum_apk_dt` | Vervaldatum APK DT | Calendar date |
| `VervaldatumTachograaf` | `vervaldatum_tachograaf` | Vervaldatum tachograaf | Number |
| `VervaldatumTachograafDt` | `vervaldatum_tachograaf_dt` | Vervaldatum tachograaf DT | Calendar date |
| `Voertuigsoort` | `voertuigsoort` | Voertuigsoort | Text |
| `VolgnummerWijzigingEuTypegoedkeuring` | `volgnummer_wijziging_eu_typegoedkeuring` | Volgnummer wijziging EU typegoedkeuring | Number |
| `WachtOpKeuren` | `wacht_op_keuren` | Wacht op keuren | Text |
| `WamVerzekerd` | `wam_verzekerd` | WAM verzekerd | Text |
| `Wielbasis` | `wielbasis` | Wielbasis | Number |
| `WielbasisVoertuigMaximum` | `wielbasis_voertuig_maximum` | Wielbasis voertuig maximum | Number |
| `WielbasisVoertuigMinimum` | `wielbasis_voertuig_minimum` | Wielbasis voertuig minimum | Number |
| `Zuinigheidsclassificatie` | `zuinigheidsclassificatie` | Zuinigheidsclassificatie | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2
</details>

<details><summary>KentekenVoertuigenAssen</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/KentekenVoertuigenAssen.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `AangedrevenAs` | `aangedreven_as` | Aangedreven as | Text |
| `AantalAssen` | `aantal_assen` | Aantal assen | Number |
| `AfstandTotVolgendeAsVoertuig` | `afstand_tot_volgende_as_voertuig` | Afstand tot volgende as voertuig | Number |
| `AfstandTotVolgendeAsVoertuigMaximum` | `afstand_tot_volgende_as_voertuig_maximum` | Afstand tot volgende as voertuig maximum | Number |
| `AfstandTotVolgendeAsVoertuigMinimum` | `afstand_tot_volgende_as_voertuig_minimum` | Afstand tot volgende as voertuig minimum | Number |
| `AsNummer` | `as_nummer` | As nummer | Number |
| `GeremdeAsIndicator` | `geremde_as_indicator` | Geremde as indicator | Text |
| `Hefas` | `hefas` | Hefas | Text |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `MaximumLastAsTechnischMaximum` | `maximum_last_as_technisch_maximum` | Maximum last as technisch maximum | Number |
| `MaximumLastAsTechnischMinimum` | `maximum_last_as_technisch_minimum` | Maximum last as technisch minimum | Number |
| `PlaatscodeAs` | `plaatscode_as` | Plaatscode as | Text |
| `Spoorbreedte` | `spoorbreedte` | Spoorbreedte | Number |
| `TechnischToegestaneMaximumAslast` | `technisch_toegestane_maximum_aslast` | Technisch toegestane maximum aslast | Number |
| `WeggedragCode` | `weggedrag_code` | Weggedrag code | Text |
| `WettelijkToegestaneMaximumAslast` | `wettelijk_toegestane_maximum_aslast` | Wettelijk toegestane maximum aslast | Number |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_assen/3huj-srit
</details>

<details><summary>KentekenVoertuigenBijzonderheden</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/KentekenVoertuigenBijzonderheden.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `BijzonderheidCode` | `bijzonderheid_code` | Bijzonderheid code | Number |
| `BijzonderheidCode1` | `bijzonderheid_code_1` | Bijzonderheid code omschrijving | Text |
| `BijzonderheidEenheid` | `bijzonderheid_eenheid` | Bijzonderheid eenheid | Text |
| `BijzonderheidVariabeleTekst` | `bijzonderheid_variabele_tekst` | Bijzonderheid variabele tekst | Text |
| `BijzonderheidVolgnummer` | `bijzonderheid_volgnummer` | Bijzonderheid volgnummer | Number |
| `Kenteken` | `kenteken` | Kenteken | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_bijzonderhed/7ug8-2dtt
</details>

<details><summary>KentekenVoertuigenBrandstof</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/KentekenVoertuigenBrandstof.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `ActieRadiusEnkelElektrischStadWltp` | `actie_radius_enkel_elektrisch_stad_wltp` | Actie radius enkel elektrisch stad wltp | Number |
| `ActieRadiusEnkelElektrischWltp` | `actie_radius_enkel_elektrisch_wltp` | Actie radius enkel elektrisch wltp | Number |
| `ActieRadiusExternOpladenStadWltp` | `actie_radius_extern_opladen_stad_wltp` | Actie radius extern opladen stad wltp | Number |
| `ActieRadiusExternOpladenWltp` | `actie_radius_extern_opladen_wltp` | Actie radius extern opladen wltp | Number |
| `BrandstofOmschrijving` | `brandstof_omschrijving` | Brandstof omschrijving | Text |
| `BrandstofVerbruikGecombineerdWltp` | `brandstof_verbruik_gecombineerd_wltp` | Brandstof verbruik gecombineerd wltp | Number |
| `BrandstofVerbruikGewogenGecombineerdWltp` | `brandstof_verbruik_gewogen_gecombineerd_wltp` | Brandstof verbruik gewogen gecombineerd wltp | Number |
| `BrandstofVolgnummer` | `brandstof_volgnummer` | Brandstof volgnummer | Text |
| `BrandstofverbruikBuiten` | `brandstofverbruik_buiten` | Brandstofverbruik buiten de stad | Text |
| `BrandstofverbruikGecombineerd` | `brandstofverbruik_gecombineerd` | Brandstofverbruik gecombineerd | Text |
| `BrandstofverbruikStad` | `brandstofverbruik_stad` | Brandstofverbruik stad | Text |
| `Co2Emissieklasse` | `co2_emissieklasse` | CO2 emissieklasse | Text |
| `Co2UitstootGecombineerd` | `co2_uitstoot_gecombineerd` | CO2 uitstoot gecombineerd | Text |
| `Co2UitstootGewogen` | `co2_uitstoot_gewogen` | CO2 uitstoot gewogen | Text |
| `ElektrischVerbruikEnkelElektrischWltp` | `elektrisch_verbruik_enkel_elektrisch_wltp` | Elektrisch verbruik enkel elektrisch wltp | Number |
| `ElektrischVerbruikExternOpladenWltp` | `elektrisch_verbruik_extern_opladen_wltp` | Elektrisch verbruik extern opladen wltp | Number |
| `EmisCo2GewogenGecombineerdWltp` | `emis_co2_gewogen_gecombineerd_wltp` | Emissie co2 gewogen gecombineerd wltp | Number |
| `EmisDeeltjesType1Wltp` | `emis_deeltjes_type1_wltp` | Emissie deeltjes type1 wltp | Number |
| `EmissieCo2GecombineerdWltp` | `emissie_co2_gecombineerd_wltp` | Emissie co2 gecombineerd wltp | Number |
| `EmissiecodeOmschrijving` | `emissiecode_omschrijving` | Emissieklasse | Text |
| `GeluidsniveauRijdend` | `geluidsniveau_rijdend` | Geluidsniveau rijdend | Text |
| `GeluidsniveauStationair` | `geluidsniveau_stationair` | Geluidsniveau stationair | Text |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `KlasseHybrideElektrischVoertuig` | `klasse_hybride_elektrisch_voertuig` | Klasse hybride elektrisch voertuig | Text |
| `MaxVermogen15Minuten` | `max_vermogen_15_minuten` | Max vermogen 15 minuten | Number |
| `MaxVermogen60Minuten` | `max_vermogen_60_minuten` | Max vermogen 60 minuten | Number |
| `MilieuklasseEgGoedkeuringLicht` | `milieuklasse_eg_goedkeuring_licht` | Milieuklasse EG Goedkeuring (licht) | Text |
| `MilieuklasseEgGoedkeuringZwaar` | `milieuklasse_eg_goedkeuring_zwaar` | Milieuklasse EG Goedkeuring (zwaar) | Text |
| `NettoMaxVermogenElektrisch` | `netto_max_vermogen_elektrisch` | Netto max vermogen elektrisch | Number |
| `Nettomaximumvermogen` | `nettomaximumvermogen` | Nettomaximumvermogen | Text |
| `NominaalContinuMaximumvermogen` | `nominaal_continu_maximumvermogen` | Nominaal continu maximumvermogen | Text |
| `OpgegevenMaximumSnelheid` | `opgegeven_maximum_snelheid` | Opgegeven maximum snelheid | Number |
| `Roetuitstoot` | `roetuitstoot` | Roetuitstoot | Text |
| `ToerentalGeluidsniveau` | `toerental_geluidsniveau` | Toerental geluidsniveau | Text |
| `Uitlaatemissieniveau` | `uitlaatemissieniveau` | Uitlaatemissieniveau | Text |
| `UitstootDeeltjesLicht` | `uitstoot_deeltjes_licht` | Uitstoot deeltjes (licht) | Text |
| `UitstootDeeltjesZwaar` | `uitstoot_deeltjes_zwaar` | Uitstoot deeltjes (zwaar) | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_brandstof/8ys7-d773
</details>

<details><summary>KentekenVoertuigenCarrosserie</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/KentekenVoertuigenCarrosserie.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CarrosserieVolgnummer` | `carrosserie_volgnummer` | Carrosserie volgnummer | Text |
| `Carrosserietype` | `carrosserietype` | Carrosserietype | Text |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `TypeCarrosserieEuropeseOmschrijving` | `type_carrosserie_europese_omschrijving` | Type Carrosserie Europese omschrijving | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie/vezc-m2t6
</details>

<details><summary>KentekenVoertuigenCarrosserieSpecificatie</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/KentekenVoertuigenCarrosserieSpecificatie.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CarrosserieVoertuigNummerCodeVolgnummer` | `carrosserie_voertuig_nummer_code_volgnummer` | Carrosserie voertuig nummer code volgnummer | Text |
| `CarrosserieVoertuigNummerEuropeseOmschrijving` | `carrosserie_voertuig_nummer_europese_omschrijving` | Carrosserie voertuig nummer Europese omschrijving | Text |
| `CarrosserieVolgnummer` | `carrosserie_volgnummer` | Carrosserie volgnummer | Text |
| `Carrosseriecode` | `carrosseriecode` | Carrosseriecode | Text |
| `Kenteken` | `kenteken` | Kenteken | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie_/jhie-znh9
</details>

<details><summary>KentekenVoertuigenRupsbanden</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/KentekenVoertuigenRupsbanden.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `AangedrevenRupsbandIndicator` | `aangedreven_rupsband_indicator` | Aangedreven rupsband indicator | Text |
| `GeremdeRupsbandIndicator` | `geremde_rupsband_indicator` | Geremde rupsband indicator | Text |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `RupsbandSetVolgnr` | `rupsband_set_volgnr` | Rupsband set volgnummer | Number |
| `TechnischToelaatbaarMaximum` | `technisch_toelaatbaar_maximum` | Technisch toelaatbaar maximum massa rupsbandset | Number |
| `TechnischToelaatbaarMaximum1` | `technisch_toelaatbaar_maximum_1` | Technisch toelaatbaar maximum massa rupsband set minimum | Number |
| `TechnischToelaatbaarMaximum2` | `technisch_toelaatbaar_maximum_2` | Technisch toelaatbaar maximum massa rupsband set maximum | Number |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_rupsbanden/3xwf-ince
</details>

<details><summary>KentekenVoertuigenSubcategorieVoertuig</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/KentekenVoertuigenSubcategorieVoertuig.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `SubcategorieVoertuigEuropees` | `subcategorie_voertuig_europees` | Subcategorie voertuig europees | Text |
| `SubcategorieVoertuigEuropeesOmschrijving` | `subcategorie_voertuig_europees_omschrijving` | Subcategorie voertuig europees omschrijving | Text |
| `SubcategorieVoertuigVolgnummer` | `subcategorie_voertuig_volgnummer` | Subcategorie voertuig volgnummer | Number |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_subcategorie/2ba7-embk
</details>

<details><summary>KentekenVoertuigenVoertuigklasse</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/KentekenVoertuigenVoertuigklasse.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CarrosserieKlasseVolgnummer` | `carrosserie_klasse_volgnummer` | Carrosserie klasse volgnummer | Text |
| `CarrosserieVolgnummer` | `carrosserie_volgnummer` | Carrosserie volgnummer | Text |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `Voertuigklasse` | `voertuigklasse` | Voertuigklasse | Text |
| `VoertuigklasseOmschrijving` | `voertuigklasse_omschrijving` | Voertuigklasse omschrijving | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_voertuigklas/kmfi-hrps
</details>

<details><summary>Keuringen</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/Keuringen.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `VervaldatumKeuring` | `vervaldatum_keuring` | Vervaldatum keuring | Number |
| `VervaldatumKeuringDt` | `vervaldatum_keuring_dt` | Vervaldatum keuring DT | Calendar date |

**Link:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Keuringen/vkij-7mwc
</details>

<details><summary>Locaties</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/Locaties.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `N01Naam` | `_01_naam` | 01_NAAM | Text |
| `N02Code` | `_02_code` | 02_CODE | Text |
| `N03Url` | `_03_url` | 03_URL | Text |
| `N04Uuid` | `_04_uuid` | 04_UUID | Text |
| `N05Gebcode` | `_05_gebcode` | 05_GEBCODE | Text |
| `N06Geboms` | `_06_geboms` | 06_GEBOMS | Text |
| `N07Regcode` | `_07_regcode` | 07_REGCODE | Text |
| `N08Regoms` | `_08_regoms` | 08_REGOMS | Text |
| `N09Prijs` | `_09_prijs` | 09_PRIJS | Text |
| `N10SrtReg` | `_10_srt_reg` | 10_SRT_REG | Text |
| `N11Ma` | `_11_ma` | 11_MA | Text |
| `N12Di` | `_12_di` | 12_DI | Text |
| `N13Wo` | `_13_wo` | 13_WO | Text |
| `N14Do` | `_14_do` | 14_DO | Text |
| `N15Vr` | `_15_vr` | 15_VR | Text |
| `N16Za` | `_16_za` | 16_ZA | Text |
| `N17Zo` | `_17_zo` | 17_ZO | Text |
| `N18Maximum` | `_18_maximum` | 18_MAXIMUM | Text |
| `N19ParkPl` | `_19_park_pl` | 19_PARK_PL | Text |
| `N20Oplaadp` | `_20_oplaadp` | 20_OPLAADP | Text |
| `N21Rolst` | `_21_rolst` | 21_ROLST | Text |
| `N22Hoogte` | `_22_hoogte` | 22_HOOGTE | Text |
| `N23VoetgI` | `_23_voetg_i` | 23_VOETG_I | Text |
| `N24VoetgU` | `_24_voetg_u` | 24_VOETG_U | Text |
| `N25VrtgI` | `_25_vrtg_i` | 25_VRTG_I | Text |
| `N26VrtgU` | `_26_vrtg_u` | 26_VRTG_U | Text |
| `N27UitInd` | `_27_uit_ind` | 27_UIT_IND | Text |
| `N28Jaarope` | `_28_jaarope` | 28_JAAROPE | Text |
| `N29Betaal` | `_29_betaal` | 29_BETAAL | Text |
| `N30Naam` | `_30_naam` | 30_NAAM | Text |
| `N31Functie` | `_31_functie` | 31_FUNCTIE | Text |
| `N32Tel` | `_32_tel` | 32_TEL | Text |
| `N33EMail` | `_33_e_mail` | 33_E_MAIL | Text |
| `N34Open` | `_34_open` | 34_OPEN | Text |
| `N35Vrij` | `_35_vrij` | 35_VRIJ | Text |
| `N36Vrijopl` | `_36_vrijopl` | 36_VRIJOPL | Text |
| `N37Vol` | `_37_vol` | 37_VOL | Text |
| `Issues` | `_issues___` | _issues___ | Text |
| `Issues00` | `_issues_00` | _issues_00 | Text |
| `Issues01` | `_issues_01` | _issues_01 | Text |
| `Issues02` | `_issues_02` | _issues_02 | Text |
| `ActueleInf` | `actuele_inf` | ActueleInf | Text |
| `Location00` | `location_00` | Location00 | Text |
| `LocationRe` | `location_re` | LocationRe | Text |
| `SocrataId` | `socrata_id` | socrata_id | Text |
| `TheGeom` | `the_geom` | the_geom | Point |
| `UsageId` | `usage_id` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Locaties/3rhp-hrx5
</details>

<details><summary>Locaties</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/Locaties.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `N01Naam` | `_01_naam` | 01_NAAM | Text |
| `N02Code` | `_02_code` | 02_CODE | Text |
| `N03Url` | `_03_url` | 03_URL | Text |
| `N04Uuid` | `_04_uuid` | 04_UUID | Text |
| `N05Gebcode` | `_05_gebcode` | 05_GEBCODE | Text |
| `N06Geboms` | `_06_geboms` | 06_GEBOMS | Text |
| `N07Regcode` | `_07_regcode` | 07_REGCODE | Text |
| `N08Regoms` | `_08_regoms` | 08_REGOMS | Text |
| `N09Prijs` | `_09_prijs` | 09_PRIJS | Text |
| `N10SrtReg` | `_10_srt_reg` | 10_SRT_REG | Text |
| `N11Ma` | `_11_ma` | 11_MA | Text |
| `N12Di` | `_12_di` | 12_DI | Text |
| `N13Wo` | `_13_wo` | 13_WO | Text |
| `N14Do` | `_14_do` | 14_DO | Text |
| `N15Vr` | `_15_vr` | 15_VR | Text |
| `N16Za` | `_16_za` | 16_ZA | Text |
| `N17Zo` | `_17_zo` | 17_ZO | Text |
| `N18Maximum` | `_18_maximum` | 18_MAXIMUM | Text |
| `N19ParkPl` | `_19_park_pl` | 19_PARK_PL | Text |
| `N20Oplaadp` | `_20_oplaadp` | 20_OPLAADP | Text |
| `N21Rolst` | `_21_rolst` | 21_ROLST | Text |
| `N22Hoogte` | `_22_hoogte` | 22_HOOGTE | Text |
| `N23VoetgI` | `_23_voetg_i` | 23_VOETG_I | Text |
| `N24VoetgU` | `_24_voetg_u` | 24_VOETG_U | Text |
| `N25VrtgI` | `_25_vrtg_i` | 25_VRTG_I | Text |
| `N26VrtgU` | `_26_vrtg_u` | 26_VRTG_U | Text |
| `N27UitInd` | `_27_uit_ind` | 27_UIT_IND | Text |
| `N28Jaarope` | `_28_jaarope` | 28_JAAROPE | Text |
| `N29Betaal` | `_29_betaal` | 29_BETAAL | Text |
| `N30Naam` | `_30_naam` | 30_NAAM | Text |
| `N31Functie` | `_31_functie` | 31_FUNCTIE | Text |
| `N32Tel` | `_32_tel` | 32_TEL | Text |
| `N33EMail` | `_33_e_mail` | 33_E_MAIL | Text |
| `N34Open` | `_34_open` | 34_OPEN | Text |
| `N35Vrij` | `_35_vrij` | 35_VRIJ | Text |
| `N36Vrijopl` | `_36_vrijopl` | 36_VRIJOPL | Text |
| `N37Vol` | `_37_vol` | 37_VOL | Text |
| `Issues` | `_issues___` | _issues___ | Text |
| `Issues00` | `_issues_00` | _issues_00 | Text |
| `Issues01` | `_issues_01` | _issues_01 | Text |
| `Issues02` | `_issues_02` | _issues_02 | Text |
| `ActueleInf` | `actuele_inf` | ActueleInf | Text |
| `Location00` | `location_00` | Location00 | Text |
| `LocationRe` | `location_re` | LocationRe | Text |
| `SocrataId` | `socrata_id` | socrata_id | Text |
| `TheGeom` | `the_geom` | the_geom | Point |
| `UsageId` | `usage_id` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Locaties/gfb5-nkdy
</details>

<details><summary>MeldingenKeuringsinstantie</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/MeldingenKeuringsinstantie.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `ApiGebrekBeschrijving` | `api_gebrek_beschrijving` | API Gebrek beschrijving | Text |
| `ApiGebrekConstateringen` | `api_gebrek_constateringen` | API Gebrek constateringen | Text |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `MeldDatumDoorKeuringsinstantie` | `meld_datum_door_keuringsinstantie` | Meld datum door keuringsinstantie | Number |
| `MeldDatumDoorKeuringsinstantieDt` | `meld_datum_door_keuringsinstantie_dt` | Meld datum door keuringsinstantie DT | Calendar date |
| `MeldTijdDoorKeuringsinstantie` | `meld_tijd_door_keuringsinstantie` | Meld tijd door keuringsinstantie | Number |
| `SoortErkenningKeuringsinstantie` | `soort_erkenning_keuringsinstantie` | Soort erkenning keuringsinstantie | Text |
| `SoortErkenningOmschrijving` | `soort_erkenning_omschrijving` | Soort erkenning omschrijving | Text |
| `SoortMeldingKiOmschrijving` | `soort_melding_ki_omschrijving` | Soort melding ki omschrijving | Text |
| `VervaldatumKeuring` | `vervaldatum_keuring` | Vervaldatum keuring | Number |
| `VervaldatumKeuringDt` | `vervaldatum_keuring_dt` | Vervaldatum keuring DT | Calendar date |

**Link:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Meldingen-Keuringsinstantie/sgfe-77wx
</details>

<details><summary>ParkerenBetaalmethodeGebied</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenBetaalmethodeGebied.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddate` | `enddate` | EndDatePaymentMethod | Text |
| `Paymentatexit` | `paymentatexit` | PaymentAtExit | Number |
| `Paymentatpaystation` | `paymentatpaystation` | PaymentAtPaystation | Number |
| `Paymentmethod` | `paymentmethod` | PaymentMethod | Text |
| `Startdate` | `startdate` | StartDatePaymentMethod | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-GEBIED/r3rs-ibz5
</details>

<details><summary>ParkerenBetaalmethodeVerkooppunt</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenBetaalmethodeVerkooppunt.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Enddatepaymentmethod` | `enddatepaymentmethod` | EndDatePaymentMethod | Text |
| `Paymentmethod` | `paymentmethod` | PaymentMethod | Text |
| `Sellingpointnumber` | `sellingpointnumber` | SellingPointNumber | Number |
| `Startdatepaymentmethod` | `startdatepaymentmethod` | StartDatePaymentMethod | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-VERKOOPPUNT/j96a-7nhx
</details>

<details><summary>ParkerenContactpersoon</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenContactpersoon.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Contactpersonid` | `contactpersonid` | ContactPersonId | Text |
| `Emailaddress` | `emailaddress` | EmailAddress | Text |
| `Faxnumber` | `faxnumber` | FaxNumber | Text |
| `Firstname` | `firstname` | FirstName | Text |
| `Name` | `name` | Name | Text |
| `Phonenumber` | `phonenumber` | PhoneNumber | Text |
| `Position` | `position` | Position | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-CONTACTPERSOON/rbew-yhyc
</details>

<details><summary>ParkerenGebied</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenGebied.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areadesc` | `areadesc` | AreaDesc | Text |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddatearea` | `enddatearea` | EndDateArea | Number |
| `Startdatearea` | `startdatearea` | StartDateArea | Number |
| `Usageid` | `usageid` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg
</details>

<details><summary>ParkerenGebiedRegeling</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenGebiedRegeling.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddatearearegulation` | `enddatearearegulation` | EndDateAreaRegulation | Text |
| `Regulationid` | `regulationid` | RegulationId | Text |
| `Startdatearearegulation` | `startdatearearegulation` | StartDateAreaRegulation | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED-REGELING/qtex-qwd8
</details>

<details><summary>ParkerenGebiedsbeheerder</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenGebiedsbeheerder.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areamanagerdesc` | `areamanagerdesc` | AreaManagerDesc | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddateareamanagerid` | `enddateareamanagerid` | EndDateAreaManagerId | Number |
| `Startdateareamanagerid` | `startdateareamanagerid` | StartDateAreaManagerId | Number |
| `Url` | `url` | URL | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIEDSBEHEERDER/2uc2-nnv3
</details>

<details><summary>ParkerenGebruiksdoel</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenGebruiksdoel.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddateusageid` | `enddateusageid` | EndDateUsageId | Number |
| `Specificationindicator` | `specificationindicator` | SpecificationIndicator | Text |
| `Startdateusageid` | `startdateusageid` | StartDateUsageId | Number |
| `Superiorareamanagerid` | `superiorareamanagerid` | SuperiorAreaManagerId | Number |
| `Superiorusageid` | `superiorusageid` | SuperiorUsageId | Text |
| `Usageid` | `usageid` | UsageId | Text |
| `Usageiddesc` | `usageiddesc` | UsageIdDesc | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBRUIKSDOEL/qidm-7mkf
</details>

<details><summary>ParkerenGeldigheidsinperking</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenGeldigheidsinperking.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areaid` | `areaid` | AreaId | Text |
| `Areaidvalidityextension` | `areaidvalidityextension` | AreaIdValidityExtension | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddaytimeframevalidityrestriction` | `enddaytimeframevalidityrestriction` | EndDayTimeFrameValidityRestriction | Text |
| `Enddurationvalidityrestriction` | `enddurationvalidityrestriction` | EndDurationValidityRestriction | Number |
| `Indexnumbervalidityrestriction` | `indexnumbervalidityrestriction` | IndexNumberValidityRestriction | Number |
| `Startdaytimeframevalidityrestriction` | `startdaytimeframevalidityrestriction` | StartDayTimeFrameValidityRestriction | Text |
| `Startdurationvalidityrestriction` | `startdurationvalidityrestriction` | StartDurationValidityRestriction | Number |
| `Startvalidityextension` | `startvalidityextension` | StartValidityExtension | Text |
| `Usageid` | `usageid` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSINPERKING/ynha-fuwp
</details>

<details><summary>ParkerenGeldigheidsuitbreiding</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenGeldigheidsuitbreiding.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areaid` | `areaid` | AreaId | Text |
| `Areaidvalidityextension` | `areaidvalidityextension` | AreaIdValidityExtension | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Endvalidityextension` | `endvalidityextension` | EndValidityExtension | Text |
| `Startvalidityextension` | `startvalidityextension` | StartValidityExtension | Text |
| `Usageid` | `usageid` | UsageId | Text |
| `Validityextensiontype` | `validityextensiontype` | ValidityExtensionType | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSUITBREIDING/8ff3-rxrk
</details>

<details><summary>ParkerenGeometrieGebied</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenGeometrieGebied.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areageometryastext` | `areageometryastext` | GeoDataAsText | Text |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddatearea` | `enddatearea` | EndDateArea | Calendar date |
| `Startdatearea` | `startdatearea` | StartDateArea | Calendar date |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7
</details>

<details><summary>ParkerenGeoVerkooppunt</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenGeoVerkooppunt.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddatesellingpoint` | `enddatesellingpoint` | EndDateSellingPoint | Text |
| `Location` | `location` | Location | Point |
| `Sellingpointdesc` | `sellingpointdesc` | SellingPointDesc | Text |
| `Sellingpointid` | `sellingpointid` | SellingPointId | Number |
| `Startdatesellingpoint` | `startdatesellingpoint` | StartDateSellingPoint | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp
</details>

<details><summary>ParkerenGpsCoordinatenParkeerlocatie</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenGpsCoordinatenParkeerlocatie.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Enddatelocation` | `enddatelocation` | EndDateLocation | Text |
| `Latitude` | `latitude` | Latitude | Number |
| `Locationreference` | `locationreference` | LocationReference | Number |
| `Locationreferencetype` | `locationreferencetype` | LocationReferenceType | Text |
| `Longitude` | `longitude` | Longitude | Number |
| `Startdatelocation` | `startdatelocation` | StartDateLocation | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GPS-COÖRDINATEN-PARKEERLOCATIE/k3dr-ge3w
</details>

<details><summary>ParkerenIndexStatischEnDynamisch</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenIndexStatischEnDynamisch.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `DynamicParkingData` | `dynamic_parking_data` | Dynamic parking data | Checkbox |
| `Organization` | `organization` | Organization | Text |
| `OrganizationId` | `organization_id` | Organization ID | Number |
| `StandardStaticParkingData` | `standard_static_parking_data` | Standard static parking data | Text |
| `StaticParkingData` | `static_parking_data` | Static parking data | Checkbox |
| `UrlDynamicParkingData` | `url_dynamic_parking_data` | URL dynamic parking data | Text |
| `UrlStaticParkingData` | `url_static_parking_data` | URL static parking data | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-Index-Statisch-en-Dynamisch/f6v7-gjpa
</details>

<details><summary>ParkerenInUitgang</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenInUitgang.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Alias` | `alias` | Alias | Text |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddateentranceorexit` | `enddateentranceorexit` | EndDateEntranceOrExit | Text |
| `Entranceexitid` | `entranceexitid` | EntranceExitId | Number |
| `Pedestrianentrance` | `pedestrianentrance` | PedestrianEntrance | Number |
| `Pedestrianexit` | `pedestrianexit` | PedestrianExit | Number |
| `Startdateentranceorexit` | `startdateentranceorexit` | StartDateEntranceOrExit | Text |
| `Vehicleentrance` | `vehicleentrance` | VehicleEntrance | Number |
| `Vehicleexit` | `vehicleexit` | VehicleExit | Number |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-IN-UITGANG/c653-u9z2
</details>

<details><summary>ParkerenParkeeradres</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenParkeeradres.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Country` | `country` | Country | Text |
| `Emailaddress` | `emailaddress` | EmailAddress | Text |
| `Faxnumber` | `faxnumber` | FaxNumber | Text |
| `Housenumber` | `housenumber` | HouseNumber | Text |
| `Parkingaddressreference` | `parkingaddressreference` | ParkingAddressReference | Number |
| `Parkingaddressreferencetype` | `parkingaddressreferencetype` | ParkingAddressReferenceType | Text |
| `Parkingaddresstype` | `parkingaddresstype` | ParkingAddressType | Text |
| `Place` | `place` | Place | Text |
| `Province` | `province` | Province | Text |
| `Streetname` | `streetname` | StreetName | Text |
| `Telephonenumber` | `telephonenumber` | TelephoneNumber | Text |
| `Zipcode` | `zipcode` | ZipCode | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERADRES/ygq4-hh5q
</details>

<details><summary>ParkerenParkeergebied</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenParkeergebied.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Areaname` | `areaname` | AreaName | Text |
| `Usageid` | `usageid` | UsageId | Text |
| `Uuid` | `uuid` | UUID | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED/mz4f-59fw
</details>

<details><summary>ParkerenParkeergebiedContactpersoon</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenParkeergebiedContactpersoon.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Text |
| `Contactpersonid` | `contactpersonid` | ContactPersonId | Text |
| `Validityendofperiod` | `validityendofperiod` | ValidityEndOfPeriod | Text |
| `Validitystartofperiod` | `validitystartofperiod` | ValidityStartOfPeriod | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED-CONTACTPERSOON/69hx-t283
</details>

<details><summary>ParkerenParkingOpen</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenParkingOpen.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Endofperiod` | `endofperiod` | EndOfPeriod | Text |
| `Exitpossibleallday` | `exitpossibleallday` | ExitPossibleAllDay | Number |
| `Openallyear` | `openallyear` | OpenAllYear | Number |
| `Periodname` | `periodname` | PeriodName | Text |
| `Startofperiod` | `startofperiod` | StartOfPeriod | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-OPEN/figd-gux7
</details>

<details><summary>ParkerenParkingToegang</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenParkingToegang.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Days` | `days` | Days | Text |
| `Endofperiod` | `endofperiod` | EndOfPeriod | Text |
| `Enterfrom` | `enterfrom` | EnterFrom | Number |
| `Enteruntil` | `enteruntil` | EnterUntil | Number |
| `Startofperiod` | `startofperiod` | StartOfPeriod | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-TOEGANG/edv8-qiyg
</details>

<details><summary>ParkerenRegeling</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenRegeling.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddateregulation` | `enddateregulation` | EndDateRegulation | Text |
| `Maximumdaycharge` | `maximumdaycharge` | MaximumDayCharge | Number |
| `Regulationdesc` | `regulationdesc` | RegulationDesc | Text |
| `Regulationid` | `regulationid` | RegulationId | Text |
| `Regulationtype` | `regulationtype` | RegulationType | Text |
| `Startdateregulation` | `startdateregulation` | StartDateRegulation | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-REGELING/yefi-qfiq
</details>

<details><summary>ParkerenSpecialeDag</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenSpecialeDag.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Datespecialday` | `datespecialday` | DateSpecialDay | Number |
| `Namespecialday` | `namespecialday` | NameSpecialDay | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq
</details>

<details><summary>ParkerenSpecificatiesParkeergebied</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenSpecificatiesParkeergebied.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Capacity` | `capacity` | Capacity | Number |
| `Chargingpointcapacity` | `chargingpointcapacity` | ChargingPointCapacity | Number |
| `Disabledaccess` | `disabledaccess` | DisabledAccess | Number |
| `Enddatespecifications` | `enddatespecifications` | EndDateSpecifications | Text |
| `Limitedaccess` | `limitedaccess` | LimitedAccess | Text |
| `Maximumvehicleheight` | `maximumvehicleheight` | MaximumVehicleHeight | Number |
| `Startdatespecifications` | `startdatespecifications` | StartDateSpecifications | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s
</details>

<details><summary>ParkerenTariefberekening</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenTariefberekening.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddatefare` | `enddatefare` | EndDateFare | Number |
| `Farecalculationcode` | `farecalculationcode` | FareCalculationCode | Text |
| `Farecalculationdesc` | `farecalculationdesc` | FareCalculationDesc | Text |
| `Periodnametariff` | `periodnametariff` | PeriodNameTariff | Text |
| `Startdatefare` | `startdatefare` | StartDateFare | Number |
| `Vatpercentage` | `vatpercentage` | VATPercentage | Number |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y
</details>

<details><summary>ParkerenTariefdeel</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenTariefdeel.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Amountcumulative` | `amountcumulative` | AmountCumulative | Number |
| `Amountfarepart` | `amountfarepart` | AmountFarePart | Number |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddatefarepart` | `enddatefarepart` | EndDateFarePart | Number |
| `Enddurationfarepart` | `enddurationfarepart` | EndDurationFarePart | Number |
| `Farecalculationcode` | `farecalculationcode` | FareCalculationCode | Text |
| `Startdatefarepart` | `startdatefarepart` | StartDateFarePart | Number |
| `Startdurationfarepart` | `startdurationfarepart` | StartDurationFarePart | Number |
| `Stepsizefarepart` | `stepsizefarepart` | StepSizeFarePart | Number |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg
</details>

<details><summary>ParkerenTijdvak</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenTijdvak.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Claimrightpossible` | `claimrightpossible` | ClaimRightPossible | Text |
| `Daytimeframe` | `daytimeframe` | DayTimeFrame | Text |
| `Enddatetimeframe` | `enddatetimeframe` | EndDateTimeFrame | Text |
| `Endtimetimeframe` | `endtimetimeframe` | EndTimeTimeFrame | Number |
| `Farecalculationcode` | `farecalculationcode` | FareCalculationCode | Text |
| `Maxdurationright` | `maxdurationright` | MaxDurationRight | Number |
| `Minparkinginterruption` | `minparkinginterruption` | MinParkingInterruption | Number |
| `Regulationid` | `regulationid` | RegulationId | Text |
| `Resetdurationtimeframe` | `resetdurationtimeframe` | ResetDurationTimeFrame | Number |
| `Startdatetimeframe` | `startdatetimeframe` | StartDateTimeFrame | Text |
| `Starttimetimeframe` | `starttimetimeframe` | StartTimeTimeFrame | Number |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq
</details>

<details><summary>ParkerenVerkooppunt</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ParkerenVerkooppunt.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Areaid` | `areaid` | AreaId | Text |
| `Areamanagerid` | `areamanagerid` | AreaManagerId | Number |
| `Enddatesellingpoint` | `enddatesellingpoint` | EndDateSellingPoint | Number |
| `Sellingpointdesc` | `sellingpointdesc` | SellingPointDesc | Text |
| `Sellingpointid` | `sellingpointid` | SellingPointId | Number |
| `Sellingpointnumber` | `sellingpointnumber` | SellingPointNumber | Number |
| `Startdatesellingpoint` | `startdatesellingpoint` | StartDateSellingPoint | Number |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-VERKOOPPUNT/fk68-nf2y
</details>

<details><summary>ProductenCatalogus</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ProductenCatalogus.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Eenheid` | `eenheid` | Eenheid | Text |
| `Omschrijving` | `omschrijving` | Omschrijving | Text |
| `StaatscourantIndeling` | `staatscourant_indeling` | Staatscourant indeling | Text |
| `Tarief` | `tarief` | Tarief | Text |
| `Tariefclustering` | `tariefclustering` | Tariefclustering | Text |

**Link:** https://opendata.rdw.nl/Product-catalogus/Open-Data-RDW-Producten-Catalogus/v23s-d6km
</details>

<details><summary>TellerstandoordeelTrendToelichting</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TellerstandoordeelTrendToelichting.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CodeToelichtingTellerstandoordeel` | `code_toelichting_tellerstandoordeel` | Code toelichting tellerstandoordeel | Text |
| `ToelichtingTellerstandoordeel` | `toelichting_tellerstandoordeel` | Toelichting tellerstandoordeel | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Tellerstandoordeel-Trend-Toelichting/jqs4-4kvw
</details>

<details><summary>TerugroepActie</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TerugroepActie.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `ApiTerugroepActieRisico` | `api_terugroep_actie_risico` | API Terugroep_actie_risico | Text |
| `ApiTerugroepActieStatus` | `api_terugroep_actie_status` | API Terugroep_ actie_status | Text |
| `ApiTerugroepInfomerenEigenaar` | `api_terugroep_infomeren_eigenaar` | API Terugroep_infomeren_eigenaar | Text |
| `ApiTerugroepVoertuigMerkType` | `api_terugroep_voertuig_merk_type` | API Terugroep_voertuig_merk_type | Text |
| `BeschrijvingVanHetHerstel` | `beschrijving_van_het_herstel` | Beschrijving van het herstel | Text |
| `CategorieDefect` | `categorie_defect` | Categorie defect | Text |
| `DatumAankondigingProducent` | `datum_aankondiging_producent` | Datum aankondiging producent | Number |
| `DatumAankondigingProducentDt` | `datum_aankondiging_producent_dt` | Datum aankondiging producent_DT | Calendar date |
| `DatumEigenarenGeNformeerd` | `datum_eigenaren_ge_nformeerd` | Datum eigenaren genformeerd | Number |
| `DatumEigenarenGeNformeerdDt` | `datum_eigenaren_ge_nformeerd_dt` | Datum eigenaren genformeerd_DT | Calendar date |
| `DatumInformerenEigenaar` | `datum_informeren_eigenaar` | Datum informeren eigenaar | Number |
| `DatumInformerenEigenaarDt` | `datum_informeren_eigenaar_dt` | Datum informeren eigenaar_DT | Calendar date |
| `DatumMeldingBijRdw` | `datum_melding_bij_rdw` | Datum melding bij RDW | Number |
| `DatumMeldingBijRdwDt` | `datum_melding_bij_rdw_dt` | Datum melding bij RDW_DT | Calendar date |
| `MateriLeGevolgen` | `materi_le_gevolgen` | Materile gevolgen | Text |
| `MeerInformatieOpInternet` | `meer_informatie_op_internet` | Meer informatie op internet | Text |
| `MeerInformatieViaTelefoonnummer` | `meer_informatie_via_telefoonnummer` | Meer informatie via telefoonnummer | Text |
| `MeldendeProducentDistributeur` | `meldende_producent_distributeur` | Meldende producent/distributeur | Text |
| `NationaalOpgegevenAantalVoertuigenTerugroepactie` | `nationaal_opgegeven_aantal_voertuigen_terugroepactie` | Nationaal opgegeven aantal voertuigen terugroepactie | Number |
| `OmschrijvingDefect` | `omschrijving_defect` | Omschrijving defect | Text |
| `OpmerkingenRdw` | `opmerkingen_rdw` | Opmerkingen RDW | Text |
| `PublicatiedatumRdw` | `publicatiedatum_rdw` | Publicatiedatum RDW | Number |
| `PublicatiedatumRdwDt` | `publicatiedatum_rdw_dt` | Publicatiedatum RDW_DT | Calendar date |
| `ReferentiecodeProducent` | `referentiecode_producent` | Referentiecode producent | Text |
| `ReferentiecodeRdw` | `referentiecode_rdw` | Referentiecode RDW | Text |
| `RisicobeoordelingRdw` | `risicobeoordeling_rdw` | Risicobeoordeling RDW | Text |
| `TotaalAantalVoertuigenTerugroepactie` | `totaal_aantal_voertuigen_terugroepactie` | Totaal aantal voertuigen terugroepactie | Number |

**Link:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie/j9yg-7rg9
</details>

<details><summary>TerugroepActieRisico</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TerugroepActieRisico.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CodeMogelijkGevaar` | `code_mogelijk_gevaar` | Code mogelijk gevaar | Text |
| `MogelijkGevaar` | `mogelijk_gevaar` | Mogelijk gevaar | Text |
| `ReferentiecodeRdw` | `referentiecode_rdw` | Referentiecode RDW | Text |

**Link:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf
</details>

<details><summary>TerugroepActieStatus</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TerugroepActieStatus.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CodeStatus` | `code_status` | Code Status | Text |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `ReferentiecodeRdw` | `referentiecode_rdw` | Referentiecode RDW | Text |
| `Status` | `status` | Status | Text |

**Link:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7
</details>

<details><summary>TerugroepInformerenEigenaar</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TerugroepInformerenEigenaar.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CodeWijzeInformeren` | `code_wijze_informeren` | Code wijze informeren | Text |
| `ReferentiecodeRdw` | `referentiecode_rdw` | Referentiecode RDW | Text |
| `WijzeWaaropUWordtGeNformeerd` | `wijze_waarop_u_wordt_ge_nformeerd` | Wijze waarop u wordt genformeerd | Text |

**Link:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_informeren_eigenaar/mh8w-8cup
</details>

<details><summary>TerugroepVoertuigMerkType</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TerugroepVoertuigMerkType.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Merk` | `merk` | Merk | Text |
| `ReferentiecodeRdw` | `referentiecode_rdw` | Referentiecode RDW | Text |
| `Type` | `type` | Type | Text |

**Link:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e
</details>

<details><summary>TgkAandrijvingUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkAandrijvingUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Aantalcilinders` | `aantalcilinders` | AantalCilinders | Number |
| `Cilinderinhoud` | `cilinderinhoud` | Cilinderinhoud | Text |
| `Codebrandstoftypemotor` | `codebrandstoftypemotor` | CodeBrandstoftypeMotor | Text |
| `Codecilinderopstelling` | `codecilinderopstelling` | CodeCilinderopstelling | Text |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevarianttgk` | `codevarianttgk` | CodeVariantTgk | Text |
| `Codewerkingmotor` | `codewerkingmotor` | CodeWerkingMotor | Text |
| `Elektromotorindicator` | `elektromotorindicator` | ElektromotorIndicator | Text |
| `Enkelelektrischschakelingind` | `enkelelektrischschakelingind` | EnkelElektrischSchakelingInd | Text |
| `Externoplaadbaarindicator` | `externoplaadbaarindicator` | ExternOplaadbaarIndicator | Text |
| `Hybridemotorindicator` | `hybridemotorindicator` | HybrideMotorIndicator | Text |
| `Motorcode` | `motorcode` | Motorcode | Text |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Typegoedkeuringsnummermotor` | `typegoedkeuringsnummermotor` | TypegoedkeuringsnummerMotor | Text |
| `Volgnummeraandrijving` | `volgnummeraandrijving` | VolgnummerAandrijving | Number |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Aandrijving-Uitvoering/4by9-ammk
</details>

<details><summary>TgkAsUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkAsUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Aangedrevenasindicator` | `aangedrevenasindicator` | AangedrevenAsIndicator | Text |
| `Afstandvolgendeasbovengrens` | `afstandvolgendeasbovengrens` | AfstandVolgendeAsBovengrens | Text |
| `Afstandvolgendeasondergrens` | `afstandvolgendeasondergrens` | AfstandVolgendeAsOndergrens | Text |
| `Belastbareasindicator` | `belastbareasindicator` | BelastbareAsIndicator | Text |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevarianttgk` | `codevarianttgk` | CodeVariantTgk | Text |
| `Dubbelemontageindicator` | `dubbelemontageindicator` | DubbeleMontageIndicator | Text |
| `Gelijkwaardigaangedrevenasind` | `gelijkwaardigaangedrevenasind` | GelijkwaardigAangedrevenAsInd | Text |
| `Geremdeasindicator` | `geremdeasindicator` | GeremdeAsIndicator | Text |
| `Hefasindicator` | `hefasindicator` | HefAsIndicator | Text |
| `Luchtveringaangedrevenasind` | `luchtveringaangedrevenasind` | LuchtveringAangedrevenAsInd | Text |
| `Maximummassaasbelastingbgr` | `maximummassaasbelastingbgr` | MaximummassaAsBelastingBgr | Text |
| `Maximummassaasbelastingogr` | `maximummassaasbelastingogr` | MaximummassaAsBelastingOgr | Text |
| `Spoorbreedtebovengrens` | `spoorbreedtebovengrens` | SpoorbreedteBovengrens | Text |
| `Spoorbreedteondergrens` | `spoorbreedteondergrens` | SpoorbreedteOndergrens | Text |
| `Stuurasindicator` | `stuurasindicator` | StuurAsIndicator | Text |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Volgnummeras` | `volgnummeras` | VolgnummerAs | Number |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-As-Uitvoering/xhyb-w7xt
</details>

<details><summary>TgkBasisUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkBasisUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Aantaldeurenbovengrens` | `aantaldeurenbovengrens` | AantalDeurenBovengrens | Number |
| `Aantaldeurenondergrens` | `aantaldeurenondergrens` | AantalDeurenOndergrens | Number |
| `Aantalpassagiersbovengrens` | `aantalpassagiersbovengrens` | AantalPassagiersBovengrens | Number |
| `Aantalpassagiersondergrens` | `aantalpassagiersondergrens` | AantalPassagiersOndergrens | Number |
| `Aantalrolstoelplaatsenbgr` | `aantalrolstoelplaatsenbgr` | AantalRolstoelplaatsenBgr | Number |
| `Aantalrolstoelplaatsenogr` | `aantalrolstoelplaatsenogr` | AantalRolstoelplaatsenOgr | Number |
| `Aantalwielen` | `aantalwielen` | AantalWielen | Number |
| `Aantalzitplaatsenbovengrens` | `aantalzitplaatsenbovengrens` | AantalZitplaatsenBovengrens | Number |
| `Aantalzitplaatsenondergrens` | `aantalzitplaatsenondergrens` | AantalZitplaatsenOndergrens | Number |
| `Aantalzitplaatsenpassagiersbgr` | `aantalzitplaatsenpassagiersbgr` | AantalZitplaatsenPassagiersBgr | Number |
| `Aantalzitplaatsenpassagiersogr` | `aantalzitplaatsenpassagiersogr` | AantalZitplaatsenPassagiersOgr | Number |
| `Aantalzitplaatsenstilstaandbgr` | `aantalzitplaatsenstilstaandbgr` | AantalZitplaatsenStilstaandBgr | Number |
| `Aantalzitplaatsenstilstaandogr` | `aantalzitplaatsenstilstaandogr` | AantalZitplaatsenStilstaandOgr | Number |
| `Begindatumrevisieuitvoering` | `begindatumrevisieuitvoering` | BegindatumRevisieUitvoering | Text |
| `Breedtebovengrens` | `breedtebovengrens` | BreedteBovengrens | Number |
| `Breedteondergrens` | `breedteondergrens` | BreedteOndergrens | Number |
| `Codelinksrechtsrijdend` | `codelinksrechtsrijdend` | CodeLinksRechtsRijdend | Text |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevarianttgk` | `codevarianttgk` | CodeVariantTgk | Text |
| `Einddatumrevisieuitvoering` | `einddatumrevisieuitvoering` | EinddatumRevisieUitvoering | Text |
| `Hoogtebovengrens` | `hoogtebovengrens` | HoogteBovengrens | Number |
| `Hoogteondergrens` | `hoogteondergrens` | HoogteOndergrens | Number |
| `Lengtebovengrens` | `lengtebovengrens` | LengteBovengrens | Number |
| `Lengteondergrens` | `lengteondergrens` | LengteOndergrens | Number |
| `Massaledigbovengrens` | `massaledigbovengrens` | MassaLedigBovengrens | Number |
| `Massaledigondergrens` | `massaledigondergrens` | MassaLedigOndergrens | Number |
| `Massarijklaarbovengrens` | `massarijklaarbovengrens` | MassaRijklaarBovengrens | Number |
| `Massarijklaarondergrens` | `massarijklaarondergrens` | MassaRijklaarOndergrens | Number |
| `Maxconstructiesnelheidahwbgr` | `maxconstructiesnelheidahwbgr` | MaxconstructiesnelheidAhw Bgr | Number |
| `Maxconstructiesnelheidahwogr` | `maxconstructiesnelheidahwogr` | MaxconstructiesnelheidAhw Ogr | Number |
| `Maximummassabovengrens` | `maximummassabovengrens` | MaximummassaBovengrens | Number |
| `Maximummassaondergrens` | `maximummassaondergrens` | MaximummassaOndergrens | Number |
| `Maxondersteundesnelheidbgr` | `maxondersteundesnelheidbgr` | MaxOndersteundeSnelheidBgr | Number |
| `Maxondersteundesnelheidogr` | `maxondersteundesnelheidogr` | MaxOndersteundeSnelheidOgr | Number |
| `Maxverticalebelastopkoppbgr` | `maxverticalebelastopkoppbgr` | MaxVerticaleBelastOpKoppBgr | Number |
| `Maxverticalebelastopkoppogr` | `maxverticalebelastopkoppogr` | MaxVerticaleBelastOpKoppOgr | Number |
| `Minimummassavoltooid` | `minimummassavoltooid` | MinimummassaVoltooid | Number |
| `Paramrijweerstandf0bovengrens` | `paramrijweerstandf0bovengrens` | ParamRijweerstandF0Bovengrens | Number |
| `Paramrijweerstandf0ondergrens` | `paramrijweerstandf0ondergrens` | ParamRijweerstandF0Ondergrens | Number |
| `Paramrijweerstandf1bovengrens` | `paramrijweerstandf1bovengrens` | ParamRijweerstandF1Bovengrens | Number |
| `Paramrijweerstandf1ondergrens` | `paramrijweerstandf1ondergrens` | ParamRijweerstandF1Ondergrens | Number |
| `Paramrijweerstandf2bovengrens` | `paramrijweerstandf2bovengrens` | ParamRijweerstandF2Bovengrens | Number |
| `Paramrijweerstandf2ondergrens` | `paramrijweerstandf2ondergrens` | ParamRijweerstandF2Ondergrens | Number |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Voertuigcategorie` | `voertuigcategorie` | Voertuigcategorie | Text |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Number |
| `Wielbasisbovengrens` | `wielbasisbovengrens` | WielbasisBovengrens | Number |
| `Wielbasisondergrens` | `wielbasisondergrens` | WielbasisOndergrens | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Basis-Uitvoering/byxc-wwua
</details>

<details><summary>TgkCarrosserieUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkCarrosserieUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Codecarrosseriecode` | `codecarrosseriecode` | CodeCarrosseriecode | Text |
| `Codecarrosserietype` | `codecarrosserietype` | CodeCarrosserietype | Text |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevarianttgk` | `codevarianttgk` | CodeVariantTgk | Text |
| `Codevoertuigklasse` | `codevoertuigklasse` | CodeVoertuigklasse | Text |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Volgnummercarrosseriecode` | `volgnummercarrosseriecode` | VolgnummerCarrosseriecode | Number |
| `Volgnummercarrosserietype` | `volgnummercarrosserietype` | VolgnummerCarrosserietype | Number |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Number |
| `Volgnummervoertuigklasse` | `volgnummervoertuigklasse` | VolgnummerVoertuigklasse | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Carrosserie-Uitvoering/ky2r-jqad
</details>

<details><summary>TgkEnergiebronUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkEnergiebronUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Actieradiusexternoplaadwltpbgr` | `actieradiusexternoplaadwltpbgr` | ActieradiusExternOplaadWltpBgr | Text |
| `Actieradiusexternoplaadwltpogr` | `actieradiusexternoplaadwltpogr` | ActieradiusExternOplaadWltpOgr | Text |
| `Actieradiusvolledigelekwltpbgr` | `actieradiusvolledigelekwltpbgr` | ActieradiusVolledigElekWltpBgr | Text |
| `Actieradiusvolledigelekwltpogr` | `actieradiusvolledigelekwltpogr` | ActieradiusVolledigElekWltpOgr | Text |
| `Brandstofverbruikgecombwltpbgr` | `brandstofverbruikgecombwltpbgr` | BrandstofverbruikGecombWltpBgr | Text |
| `Brandstofverbruikgecombwltpogr` | `brandstofverbruikgecombwltpogr` | BrandstofverbruikGecombWltpOgr | Text |
| `Brandstverbrgewogencombwltpbgr` | `brandstverbrgewogencombwltpbgr` | BrandstVerbrGewogenCombWltpBgr | Text |
| `Brandstverbrgewogencombwltpogr` | `brandstverbrgewogencombwltpogr` | BrandstVerbrGewogenCombWltpOgr | Text |
| `Co2emisgecombineerdnedchoog` | `co2emisgecombineerdnedchoog` | Co2EmisGecombineerdNedcHoog | Text |
| `Co2emisgecombineerdnedclaag` | `co2emisgecombineerdnedclaag` | Co2EmisGecombineerdNedcLaag | Text |
| `Co2emisgecombineerdwltpbgr` | `co2emisgecombineerdwltpbgr` | Co2EmisGecombineerdWltpBgr | Text |
| `Co2emisgecombineerdwltpogr` | `co2emisgecombineerdwltpogr` | Co2EmisGecombineerdWltpOgr | Text |
| `Co2emisgewgecombnedchoog` | `co2emisgewgecombnedchoog` | Co2EmisGewGecombNedcHoog | Text |
| `Co2emisgewgecombnedclaag` | `co2emisgewgecombnedclaag` | Co2EmisGewGecombNedcLaag | Text |
| `Co2emisgewogengecombwltpbgr` | `co2emisgewogengecombwltpbgr` | Co2EmisGewogenGecombWltpBgr | Text |
| `Co2emisgewogengecombwltpogr` | `co2emisgewogengecombwltpogr` | Co2EmisGewogenGecombWltpOgr | Text |
| `Co2emissiebuitennedchoog` | `co2emissiebuitennedchoog` | Co2EmissieBuitenNedcHoog | Text |
| `Co2emissiebuitennedclaag` | `co2emissiebuitennedclaag` | Co2EmissieBuitenNedcLaag | Text |
| `Co2emissiestadnedchoog` | `co2emissiestadnedchoog` | Co2EmissieStadNedcHoog | Text |
| `Co2emissiestadnedclaag` | `co2emissiestadnedclaag` | Co2EmissieStadNedcLaag | Text |
| `Codeenergiebron` | `codeenergiebron` | CodeEnergiebron | Text |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevarianttgk` | `codevarianttgk` | CodeVariantTgk | Text |
| `Coemissieesc` | `coemissieesc` | CoEmissieEsc | Text |
| `Coemissieetc` | `coemissieetc` | CoEmissieEtc | Text |
| `Coemissietype1` | `coemissietype1` | CoEmissieType1 | Text |
| `Coemissietype1wltp` | `coemissietype1wltp` | CoEmissieType1Wltp | Text |
| `Coemissiewhsc` | `coemissiewhsc` | CoEmissieWhsc | Text |
| `Coemissiewhtc` | `coemissiewhtc` | CoEmissieWhtc | Text |
| `Elekactieradiusextoplaadbnedc` | `elekactieradiusextoplaadbnedc` | ElekActieradiusExtOplaadbNedc | Text |
| `Elektrischeactieradiusnedc` | `elektrischeactieradiusnedc` | ElektrischeActieradiusNedc | Text |
| `Elekverbrexternoplaadbwltpbgr` | `elekverbrexternoplaadbwltpbgr` | ElekVerbrExternOplaadbWltpBgr | Text |
| `Elekverbrexternoplaadbwltpogr` | `elekverbrexternoplaadbwltpogr` | ElekVerbrExternOplaadbWltpOgr | Text |
| `Elekverbruikgecombineerdnedc` | `elekverbruikgecombineerdnedc` | ElekVerbruikGecombineerdNedc | Text |
| `Elekverbruikgewgecombverbrnedc` | `elekverbruikgewgecombverbrnedc` | ElekVerbruikGewGecombVerbrNedc | Text |
| `Emissieaantaldeeltjesesc` | `emissieaantaldeeltjesesc` | EmissieAantalDeeltjesEsc | Text |
| `Emissieaantaldeeltjesetc` | `emissieaantaldeeltjesetc` | EmissieAantalDeeltjesEtc | Text |
| `Emissieaantaldeeltjestype1` | `emissieaantaldeeltjestype1` | EmissieAantalDeeltjesType1 | Text |
| `Emissieaantaldeeltjestype1wltp` | `emissieaantaldeeltjestype1wltp` | EmissieAantalDeeltjesType1Wltp | Text |
| `Emissieaantaldeeltjeswhsc` | `emissieaantaldeeltjeswhsc` | EmissieAantalDeeltjesWhsc | Text |
| `Emissieaantaldeeltjeswhtc` | `emissieaantaldeeltjeswhtc` | EmissieAantalDeeltjesWhtc | Text |
| `Emissiedeeltjesesc` | `emissiedeeltjesesc` | EmissiedeeltjesEsc | Text |
| `Emissiedeeltjesetc` | `emissiedeeltjesetc` | EmissiedeeltjesEtc | Text |
| `Emissiedeeltjestype1` | `emissiedeeltjestype1` | EmissiedeeltjesType1 | Text |
| `Emissiedeeltjestype1wltp` | `emissiedeeltjestype1wltp` | EmissiedeeltjesType1Wltp | Text |
| `Emissiedeeltjeswhsc` | `emissiedeeltjeswhsc` | EmissiedeeltjesWhsc | Text |
| `Emissiedeeltjeswhtc` | `emissiedeeltjeswhtc` | EmissiedeeltjesWhtc | Text |
| `Geluidsniveaubovengrens` | `geluidsniveaubovengrens` | GeluidsniveauBovengrens | Text |
| `Geluidsniveauondergrens` | `geluidsniveauondergrens` | GeluidsniveauOndergrens | Text |
| `Geluidsniveaurijdend` | `geluidsniveaurijdend` | GeluidsniveauRijdend | Text |
| `Geluidsniveautoerentalbgr` | `geluidsniveautoerentalbgr` | GeluidsniveauToerentalBgr | Text |
| `Geluidsniveautoerentalogr` | `geluidsniveautoerentalogr` | GeluidsniveauToerentalOgr | Text |
| `Hcemissietype1` | `hcemissietype1` | HcEmissieType1 | Text |
| `Hcnoxemissietype1` | `hcnoxemissietype1` | HcNoxEmissieType1 | Text |
| `Maxbiopercentagebrandstof` | `maxbiopercentagebrandstof` | MaxBiopercentageBrandstof | Text |
| `Maximumconstructiesnelheidbgr` | `maximumconstructiesnelheidbgr` | MaximumconstructiesnelheidBgr | Text |
| `Maximumconstructiesnelheidogr` | `maximumconstructiesnelheidogr` | MaximumconstructiesnelheidOgr | Text |
| `Maximumnettovermogenbgr` | `maximumnettovermogenbgr` | MaximumNettoVermogenBgr | Text |
| `Maximumnettovermogenogr` | `maximumnettovermogenogr` | MaximumNettoVermogenOgr | Text |
| `Maximumvermogen30minbgr` | `maximumvermogen30minbgr` | MaximumVermogen30MinBgr | Text |
| `Maximumvermogen30minogr` | `maximumvermogen30minogr` | MaximumVermogen30MinOgr | Text |
| `Noxemissieesc` | `noxemissieesc` | NoxEmissieEsc | Text |
| `Noxemissieetc` | `noxemissieetc` | NoxEmissieEtc | Text |
| `Noxemissietype1` | `noxemissietype1` | NoxEmissieType1 | Text |
| `Noxemissietype1wltp` | `noxemissietype1wltp` | NoxEmissieType1Wltp | Text |
| `Noxemissiewhsc` | `noxemissiewhsc` | NoxEmissieWhsc | Text |
| `Noxemissiewhtc` | `noxemissiewhtc` | NoxEmissieWhtc | Text |
| `Regelgevingemissiemotoren` | `regelgevingemissiemotoren` | RegelgevingEmissieMotoren | Text |
| `Regelgevingemissievoertuigen` | `regelgevingemissievoertuigen` | RegelgevingEmissieVoertuigen | Text |
| `Toerentalmaxnettovermogenbgr` | `toerentalmaxnettovermogenbgr` | ToerentalMaxNettoVermogenBgr | Text |
| `Toerentalmaxnettovermogenogr` | `toerentalmaxnettovermogenogr` | ToerentalMaxNettoVermogenOgr | Text |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Uitlaatemissieniveau` | `uitlaatemissieniveau` | Uitlaatemissieniveau | Text |
| `Verbrgewogengecombnedchoog` | `verbrgewogengecombnedchoog` | VerbrGewogenGecombNedcHoog | Text |
| `Verbrgewogengecombnedclaag` | `verbrgewogengecombnedclaag` | VerbrGewogenGecombNedcLaag | Text |
| `Verbruikgecombineerdnedchoog` | `verbruikgecombineerdnedchoog` | VerbruikGecombineerdNedcHoog | Text |
| `Verbruikgecombineerdnedclaag` | `verbruikgecombineerdnedclaag` | VerbruikGecombineerdNedcLaag | Text |
| `Verbruikvolledigelekwltpbgr` | `verbruikvolledigelekwltpbgr` | VerbruikVolledigElekWltpBgr | Text |
| `Verbruikvolledigelekwltpogr` | `verbruikvolledigelekwltpogr` | VerbruikVolledigElekWltpOgr | Text |
| `Volgnummeraandrijving` | `volgnummeraandrijving` | VolgnummerAandrijving | Number |
| `Volgnummerenergiebron` | `volgnummerenergiebron` | VolgnummerEnergiebron | Text |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Energiebron-Uitvoering/gr7t-qfnb
</details>

<details><summary>TgkHandelsbenamingFabrikant</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkHandelsbenamingFabrikant.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevariantgk` | `codevariantgk` | CodeVariantTgk | Text |
| `Handelsbenamingfabrikant` | `handelsbenamingfabrikant` | HandelsbenamingFabrikant | Text |
| `Typeaanduidingfabrikant` | `typeaanduidingfabrikant` | TypeAanduidingFabrikant | Text |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Volgnummerhandelsbenamingfabr` | `volgnummerhandelsbenamingfabr` | VolgnummerHandelsbenamingFabr | Number |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Handelsbenaming-Fabrikant/x5v3-sewk
</details>

<details><summary>TgkIntrekkingTypegoedkeuring</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkIntrekkingTypegoedkeuring.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Begindatumintrekkingtgk` | `begindatumintrekkingtgk` | BegindatumIntrekkingTgk | Calendar date |
| `Einddatumintrekkingtgk` | `einddatumintrekkingtgk` | EinddatumIntrekkingTgk | Calendar date |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Volgnummerintrekkingtgk` | `volgnummerintrekkingtgk` | VolgnummerIntrekkingTgk | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Intrekking-Typegoedkeuring/9s6a-b42z
</details>

<details><summary>TgkKoppelingUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkKoppelingUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevarianttgk` | `codevarianttgk` | CodeVariantTgk | Text |
| `Maximummassaautonoombgr` | `maximummassaautonoombgr` | MaximummassaAutonoomBgr | Number |
| `Maximummassaautonoomogr` | `maximummassaautonoomogr` | MaximummassaAutonoomOgr | Number |
| `Maximummassageremdbgr` | `maximummassageremdbgr` | MaximummassaGeremdBgr | Number |
| `Maximummassageremdogr` | `maximummassageremdogr` | MaximummassaGeremdOgr | Number |
| `Maximummassamiddenasbgr` | `maximummassamiddenasbgr` | MaximummassaMiddenasBgr | Number |
| `Maximummassamiddenasogr` | `maximummassamiddenasogr` | MaximummassaMiddenasOgr | Number |
| `Maximummassaongeremdbgr` | `maximummassaongeremdbgr` | MaximummassaOngeremdBgr | Number |
| `Maximummassaongeremdogr` | `maximummassaongeremdogr` | MaximummassaOngeremdOgr | Number |
| `Maximummassaopleggerbgr` | `maximummassaopleggerbgr` | MaximummassaOpleggerBgr | Number |
| `Maximummassaopleggerogr` | `maximummassaopleggerogr` | MaximummassaOpleggerOgr | Number |
| `Maximummassasamenstelbgr` | `maximummassasamenstelbgr` | MaximummassaSamenstelBgr | Number |
| `Maximummassasamenstelogr` | `maximummassasamenstelogr` | MaximummassaSamenstelOgr | Number |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Volgnummerkoppeling` | `volgnummerkoppeling` | VolgnummerKoppeling | Number |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Koppeling-Uitvoering/d3ex-xghj
</details>

<details><summary>TgkMerkUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkMerkUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevarianttgk` | `codevarianttgk` | CodeVariantTgk | Text |
| `Merkcoderdw` | `merkcoderdw` | MerkcodeRdw | Text |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Volgnummermerk` | `volgnummermerk` | VolgnummerMerk | Text |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Text |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Merk-Uitvoering/kyri-nuah
</details>

<details><summary>TgkRupsbandsetUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkRupsbandsetUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Aangedrevenrupsbandsetind` | `aangedrevenrupsbandsetind` | AangedrevenRupsbandsetInd | Text |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevarianttgk` | `codevarianttgk` | CodeVariantTgk | Text |
| `Geremderupsbandsetindicator` | `geremderupsbandsetindicator` | GeremdeRupsbandsetIndicator | Number |
| `Maximummassarupsbandsetbgr` | `maximummassarupsbandsetbgr` | MaximummassaRupsbandsetBgr | Number |
| `Maximummassarupsbandsetogr` | `maximummassarupsbandsetogr` | MaximummassaRupsbandsetOgr | Number |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Number |
| `Volgnummerrupsbandset` | `volgnummerrupsbandset` | VolgnummerRupsbandset | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Rupsbandset-Uitvoering/xn6e-huse
</details>

<details><summary>TgkSpecialeDoeleinden</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkSpecialeDoeleinden.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Codespecialedoeleinden` | `codespecialedoeleinden` | CodeSpecialeDoeleinden | Text |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevarianttgk` | `codevarianttgk` | CodeVariantTgk | Text |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Number |
| `Volgnummerspecialedoeleinden` | `volgnummerspecialedoeleinden` | VolgnummerSpecialeDoeleinden | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Speciale-Doeleinden/m692-vvff
</details>

<details><summary>TgkVersnellingUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TgkVersnellingUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `Aantalversnellingenbovengrens` | `aantalversnellingenbovengrens` | AantalVersnellingenBovengrens | Text |
| `Aantalversnellingenondergrens` | `aantalversnellingenondergrens` | AantalVersnellingenOndergrens | Text |
| `Codetypeversnellingsbak` | `codetypeversnellingsbak` | CodeTypeVersnellingsbak | Text |
| `Codeuitvoeringtgk` | `codeuitvoeringtgk` | CodeUitvoeringTgk | Text |
| `Codevarianttgk` | `codevarianttgk` | CodeVariantTgk | Text |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Volgnummerrevisieuitvoering` | `volgnummerrevisieuitvoering` | VolgnummerRevisieUitvoering | Text |
| `Volgnummerversnelling` | `volgnummerversnelling` | VolgnummerVersnelling | Text |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-TGK-Versnelling-Uitvoering/7rjk-eycs
</details>

<details><summary>ToegevoegdeObjecten</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/ToegevoegdeObjecten.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `ClassificatieToegevoegdObj` | `classificatie_toegevoegd_obj` | Classificatie toegevoegd obj | Text |
| `Demontagedatum` | `demontagedatum` | Demontagedatum | Number |
| `DemontagedatumDt` | `demontagedatum_dt` | Demontagedatum DT | Calendar date |
| `GasinstallatieTankInhoud` | `gasinstallatie_tank_inhoud` | Gasinstallatie tank inhoud | Number |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `MerkObjectToegevoegd` | `merk_object_toegevoegd` | Merk object toegevoegd | Text |
| `MerkcodeToegevoegdObject` | `merkcode_toegevoegd_object` | Merkcode toegevoegd object | Text |
| `Montagedatum` | `montagedatum` | Montagedatum | Number |
| `MontagedatumDt` | `montagedatum_dt` | Montagedatum DT | Calendar date |
| `SoortToeTeVoegenObjectOmschrijving` | `soort_toe_te_voegen_object_omschrijving` | Soort toe te voegen object omschrijving | Text |
| `UitvoeringsVolgnrToegevObj` | `uitvoerings_volgnr_toegev_obj` | Uitvoerings volgnr toegev obj | Number |

**Link:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Toegevoegde-Objecten/sghb-dzxx
</details>

<!-- END FUNCTIONS -->

## License

MIT
