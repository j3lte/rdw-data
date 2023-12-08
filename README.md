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
| `AsGegevensEegUitvoering` | [Open Data RDW: AS Gegevens EEG Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-AS-Gegevens-EEG-Uitvoering/ahsi-8uyu) | Typegoedkeuring |
| `BasisgegevensEegUitvoering` | [Open Data RDW: Basisgegevens EEG Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Basisgegevens-EEG-Uitvoering/wx3j-69ie) | Typegoedkeuring |
| `BrandstoffenOpPc4` | [Brandstoffen_op_PC4](https://opendata.rdw.nl/dataset/Brandstoffen_op_PC4/8wbe-pu7d) | Unknown |
| `CarrosserieUitvoering` | [Open Data RDW: Carrosserie Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering/w2qp-idms) | Typegoedkeuring |
| `CarrosserieUitvoeringKlasse` | [Open Data RDW: Carrosserie Uitvoering Klasse](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Klasse/q7fi-ijjh) | Typegoedkeuring |
| `CarrosserieUitvoeringNummeriekeCode` | [Open Data RDW: Carrosserie Uitvoering Nummerieke Code](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Nummerieke-Co/nypm-t8hx) | Typegoedkeuring |
| `EegVoertuigtypegoedkeuring` | [Open Data RDW: EEG Voertuigtypegoedkeuring](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-EEG-Voertuigtypegoedkeuring/55kv-xf7m) | Typegoedkeuring |
| `ErkendeBedrijven` | [Open Data RDW: Erkende Bedrijven](https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkende-Bedrijven/5k74-3jha) | Erkende bedrijven |
| `Erkenningen` | [Open Data RDW: Erkenningen](https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz) | Erkende bedrijven |
| `Gebreken` | [Open Data RDW: Gebreken](https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Gebreken/hx2c-gt7k) | Keuringen |
| `GeconstateerdeGebreken` | [Open Data RDW: Geconstateerde Gebreken](https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Geconstateerde-Gebreken/a34c-vvps) | Keuringen |
| `GeoCarpool` | [GEO Carpool](https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx) | Parkeren |
| `GeoParkeerGarages` | [GEO Parkeer Garages](https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34) | Parkeren |
| `GeoPenr` | [GEO PenR](https://opendata.rdw.nl/Parkeren/GEO-PenR/6wzd-evwu) | Parkeren |
| `HandelsbenamingUitvoering` | [Open Data RDW: Handelsbenaming Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Handelsbenaming-Uitvoering/mdqe-txpd) | Typegoedkeuring |
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
| `MeldingenKeuringsinstantie` | [Open Data RDW: Meldingen Keuringsinstantie](https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Meldingen-Keuringsinstantie/sgfe-77wx) | Keuringen |
| `MerkUitvoeringToegestaan` | [Open Data RDW: Merk Uitvoering Toegestaan](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Merk-Uitvoering-Toegestaan/fj7t-hhik) | Typegoedkeuring |
| `MotorUitvoering` | [Open Data RDW: Motor Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering/g2s6-ehxa) | Typegoedkeuring |
| `MotorUitvoeringBrandstof` | [Open Data RDW: Motor Uitvoering Brandstof](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering-Brandstof/5w6t-p66a) | Typegoedkeuring |
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
| `PlaatsaanduidingUitvoering` | [Open Data RDW: Plaatsaanduiding Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Plaatsaanduiding-Uitvoering/mt8t-4ep4) | Typegoedkeuring |
| `ProductenCatalogus` | [Open Data RDW: Producten Catalogus](https://opendata.rdw.nl/Product-catalogus/Open-Data-RDW-Producten-Catalogus/v23s-d6km) | Product catalogus |
| `SubcategorieUitvoering` | [Open Data RDW: Subcategorie Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Subcategorie-Uitvoering/h9pa-e9ta) | Typegoedkeuring |
| `TellerstandoordeelTrendToelichting` | [Open Data RDW: Tellerstandoordeel Trend Toelichting](https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Tellerstandoordeel-Trend-Toelichting/jqs4-4kvw) | Voertuigen |
| `TerugroepActie` | [Open Data RDW: Terugroep_actie](https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie/j9yg-7rg9) | Terugroepacties |
| `TerugroepActieRisico` | [Open Data RDW: Terugroep_actie_risico](https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf) | Terugroepacties |
| `TerugroepActieStatus` | [Open Data RDW: Terugroep_actie_status](https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7) | Terugroepacties |
| `TerugroepInformerenEigenaar` | [Open Data RDW: Terugroep_informeren_eigenaar](https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_informeren_eigenaar/mh8w-8cup) | Terugroepacties |
| `TerugroepVoertuigMerkType` | [Open Data RDW: Terugroep_voertuig_merk_type](https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e) | Terugroepacties |
| `TestProducerApi` | [Test_Producer_API](https://opendata.rdw.nl/dataset/Test_Producer_API/sgwh-cvkk) | Unknown |
| `ToegevoegdeObjecten` | [Open Data RDW: Toegevoegde Objecten](https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Toegevoegde-Objecten/sghb-dzxx) | Keuringen |
| `UitvoeringGebruiksgegevensPerUitgave` | [Open Data RDW: Uitvoering Gebruiksgegevens Per Uitgave](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Uitvoering-Gebruiksgegevens-Per-Uitg/2822-t8sx) | Typegoedkeuring |
| `VersnellingsbakUitvoering` | [Open Data RDW: Versnellingsbak Uitvoering](https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Versnellingsbak-Uitvoering/r7cw-67gs) | Typegoedkeuring |

### Details

<details><summary>AsGegevensEegUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/AsGegevensEegUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `AangedrevenAs` | `aangedreven_as` | Aangedreven as | Text |
| `AfstandVolgendeAsBovengrens` | `afstand_volgende_as_bovengrens` | Afstand volgende as bovengrens | Number |
| `AfstandVolgendeAsOndergrens` | `afstand_volgende_as_ondergrens` | Afstand volgende as ondergrens | Number |
| `Asnummer` | `asnummer` | Asnummer | Text |
| `DubbeleMontage` | `dubbele_montage` | Dubbele montage | Text |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `GelijkwaardigAanLuchtvering` | `gelijkwaardig_aan_luchtvering` | Gelijkwaardig aan luchtvering | Text |
| `GestuurdeAsIndicator` | `gestuurde_as_indicator` | Gestuurde as indicator | Text |
| `Hefas` | `hefas` | Hefas | Text |
| `Luchtvering` | `luchtvering` | Luchtvering | Text |
| `PlaatsAsCode` | `plaats_as_code` | Plaats as code | Text |
| `RolstraalBovengrens` | `rolstraal_bovengrens` | Rolstraal bovengrens | Number |
| `RolstraalOndergrens` | `rolstraal_ondergrens` | Rolstraal ondergrens | Number |
| `SnelheidssymboolOndergrens` | `snelheidssymbool_ondergrens` | Snelheidssymbool ondergrens | Text |
| `SpoorbreedteBovengrens` | `spoorbreedte_bovengrens` | Spoorbreedte bovengrens | Number |
| `SpoorbreedteOndergrens` | `spoorbreedte_ondergrens` | Spoorbreedte ondergrens | Number |
| `TechnMaxLastAsBovengrens` | `techn_max_last_as_bovengrens` | Techn max last as bovengrens | Number |
| `TechnMaxLastAsOndergrens` | `techn_max_last_as_ondergrens` | Techn max last as ondergrens | Number |
| `TechnMaxLastAsstelBovengr` | `techn_max_last_asstel_bovengr` | Techn max last asstel bovengr | Number |
| `TechnMaxLastAsstelOndergr` | `techn_max_last_asstel_ondergr` | Techn max last asstel ondergr | Number |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-AS-Gegevens-EEG-Uitvoering/ahsi-8uyu
</details>

<details><summary>BasisgegevensEegUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/BasisgegevensEegUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `N24ghzKortbereikRadar` | `_24ghz_kortbereik_radar` | 24GHz_kortbereik radar | Text |
| `AantZitplStilstVrtgBovengrens` | `aant_zitpl_stilst_vrtg_bovengrens` | Aant zitpl stilst vrtg bovengrens | Number |
| `AantZitplStilstVrtgOndergrens` | `aant_zitpl_stilst_vrtg_ondergrens` | Aant zitpl stilst vrtg ondergrens | Number |
| `AantalAangedrevenAssen` | `aantal_aangedreven_assen` | Aantal aangedreven assen | Number |
| `AantalDeurenBovengrens` | `aantal_deuren_bovengrens` | Aantal deuren bovengrens | Number |
| `AantalDeurenOndergrens` | `aantal_deuren_ondergrens` | Aantal deuren ondergrens | Number |
| `AantalPassagierZittendBovengrens` | `aantal_passagier_zittend_bovengrens` | Aantal passagier zittend bovengrens | Number |
| `AantalPassagierZittendOndergrens` | `aantal_passagier_zittend_ondergrens` | Aantal passagier zittend ondergrens | Number |
| `AantalPassagiersBovengrens` | `aantal_passagiers_bovengrens` | Aantal passagiers bovengrens | Number |
| `AantalPassagiersOndergrens` | `aantal_passagiers_ondergrens` | Aantal passagiers ondergrens | Number |
| `AantalRolstoelPlaatsBovengrens` | `aantal_rolstoel_plaats_bovengrens` | Aantal rolstoel plaats bovengrens | Number |
| `AantalRolstoelPlaatsOndergrens` | `aantal_rolstoel_plaats_ondergrens` | Aantal rolstoel plaats ondergrens | Number |
| `AantalWielen` | `aantal_wielen` | Aantal wielen | Number |
| `AantalZitplaatsenBovengrens` | `aantal_zitplaatsen_bovengrens` | Aantal zitplaatsen bovengrens | Number |
| `AantalZitplaatsenOndergrens` | `aantal_zitplaatsen_ondergrens` | Aantal zitplaatsen ondergrens | Number |
| `AfstHartKoppelingAsBovengrens` | `afst_hart_koppeling_as_bovengrens` | Afst hart koppeling as bovengrens | Number |
| `AfstHartKoppelingAsOndergrens` | `afst_hart_koppeling_as_ondergrens` | Afst hart koppeling as ondergrens | Number |
| `BegindatumRestantVoorraad` | `begindatum_restant_voorraad` | Begindatum restant voorraad | Number |
| `BegindatumRestantVoorraadDt` | `begindatum_restant_voorraad_dt` | Begindatum restant voorraad_DT | Calendar date |
| `BegindatumUitvoering` | `begindatum_uitvoering` | Begindatum uitvoering | Number |
| `BegindatumUitvoeringDt` | `begindatum_uitvoering_dt` | Begindatum uitvoering_DT | Calendar date |
| `BreedteVoertuigUitvoeringBovengrens` | `breedte_voertuig_uitvoering_bovengrens` | Breedte voertuig(uitvoering) bovengrens | Number |
| `BreedteVoertuigUitvoeringOndergrens` | `breedte_voertuig_uitvoering_ondergrens` | Breedte voertuig(uitvoering) ondergrens | Number |
| `CodeStatusIntrekkingUitvoering` | `code_status_intrekking_uitvoering` | Code status intrekking uitvoering | Text |
| `CompleetVoertuigIndicator` | `compleet_voertuig_indicator` | Compleet voertuig indicator | Text |
| `DatumStatusWijziging` | `datum_status_wijziging` | Datum status wijziging | Number |
| `DatumStatusWijzigingDt` | `datum_status_wijziging_dt` | Datum status wijziging_DT | Calendar date |
| `EegUitvoeringCatToevoeging` | `eeg_uitvoering_cat_toevoeging` | EEG uitvoering cat toevoeging | Text |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EindatumRestantVoorraad` | `eindatum_restant_voorraad` | Einddatum restant voorraad | Number |
| `EinddatumRestantVoorraadDt` | `einddatum_restant_voorraad_dt` | Einddatum restant voorraad_DT | Calendar date |
| `EinddatumUitvoering` | `einddatum_uitvoering` | Einddatum uitvoering | Number |
| `EinddatumUitvoeringDt` | `einddatum_uitvoering_dt` | Einddatum uitvoering_DT | Calendar date |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `EurCoderingCarrosserietype` | `eur_codering_carrosserietype` | Eur. Codering carrosserietype | Text |
| `Handelsbenaming` | `handelsbenaming` | Handelsbenaming | Text |
| `HoogteVoertuigUitvoeringBovengrens` | `hoogte_voertuig_uitvoering_bovengrens` | Hoogte voertuig(uitvoering) bovengrens | Number |
| `HoogteVoertuigUitvoeringOndergrens` | `hoogte_voertuig_uitvoering_ondergrens` | Hoogte voertuig(uitvoering) ondergrens | Number |
| `InhoudBrandstoftank` | `inhoud_brandstoftank` | Inhoud brandstoftank | Number |
| `Inrichtingscode` | `inrichtingscode` | Inrichtingscode | Number |
| `IntrekdatumUitvoering` | `intrekdatum_uitvoering` | Intrekdatum uitvoering | Number |
| `IntrekdatumUitvoeringDt` | `intrekdatum_uitvoering_dt` | Intrekdatum uitvoering_DT | Calendar date |
| `KantVanHetStuur` | `kant_van_het_stuur` | Kant van het stuur | Text |
| `LengteLaadruimteBovengrens` | `lengte_laadruimte_bovengrens` | Lengte laadruimte bovengrens | Number |
| `LengteLaadruimteOndergrens` | `lengte_laadruimte_ondergrens` | Lengte laadruimte ondergrens | Number |
| `LengteVoertuigUitvoeringBovengrens` | `lengte_voertuig_uitvoering_bovengrens` | Lengte voertuig(uitvoering) bovengrens | Number |
| `LengteVoertuigUitvoeringOndergrens` | `lengte_voertuig_uitvoering_ondergrens` | Lengte voertuig(uitvoering) ondergrens | Number |
| `LinksRechtsRijdend` | `links_rechts_rijdend` | Links / Rechts rijdend | Text |
| `MassaBedrijfsklaarToestandBovengrens` | `massa_bedrijfsklaar_toestand_bovengrens` | Massa bedrijfsklaar toestand bovengrens | Number |
| `MassaBedrijfsklaarToestandOndergrens` | `massa_bedrijfsklaar_toestand_ondergrens` | Massa bedrijfsklaar toestand ondergrens | Number |
| `MassaLeegVoertuigBovengrens` | `massa_leeg_voertuig_bovengrens` | Massa leeg voertuig bovengrens | Number |
| `MassaLeegVoertuigOndergrens` | `massa_leeg_voertuig_ondergrens` | Massa leeg voertuig ondergrens | Number |
| `MaxBreedteVoertuigBovengrens` | `max_breedte_voertuig_bovengrens` | Max breedte voertuig bovengrens | Number |
| `MaxBreedteVoertuigOndergrens` | `max_breedte_voertuig_ondergrens` | Max breedte voertuig ondergrens | Number |
| `MaxConstructieSnelheidBovengrens` | `max_constructie_snelheid_bovengrens` | Max constructie snelheid bovengrens | Number |
| `MaxConstructieSnelheidOndergrens` | `max_constructie_snelheid_ondergrens` | Max constructie snelheid ondergrens | Number |
| `MaxLengteVoertuigBovengrens` | `max_lengte_voertuig_bovengrens` | Max lengte voertuig bovengrens | Number |
| `MaxLengteVoertuigOndergrens` | `max_lengte_voertuig_ondergrens` | Max lengte voertuig ondergrens | Number |
| `MaxMassaGeremdBovengrens` | `max_massa_geremd_bovengrens` | Max massa geremd bovengrens | Number |
| `MaxMassaGeremdOndergrens` | `max_massa_geremd_ondergrens` | Max massa geremd ondergrens | Number |
| `MaxMassaOngeremdBovengrens` | `max_massa_ongeremd_bovengrens` | Max massa ongeremd bovengrens | Number |
| `MaxMassaOngeremdOndergrens` | `max_massa_ongeremd_ondergrens` | Max massa ongeremd ondergrens | Number |
| `MaxMassaSamenstelBovengrens` | `max_massa_samenstel_bovengrens` | Max massa samenstel bovengrens | Number |
| `MaxMassaSamenstelOndergrens` | `max_massa_samenstel_ondergrens` | Max massa samenstel ondergrens | Number |
| `MaxMassaVoertuigBovengrens` | `max_massa_voertuig_bovengrens` | Max massa voertuig bovengrens | Number |
| `MaxMassaVoertuigOndergrens` | `max_massa_voertuig_ondergrens` | Max massa voertuig ondergrens | Number |
| `MaxMassaVrtgTechnBovengrens` | `max_massa_vrtg_techn_bovengrens` | Max massa vrtg techn bovengrens | Number |
| `MaxMassaVrtgTechnOndergrens` | `max_massa_vrtg_techn_ondergrens` | Max massa vrtg techn ondergrens | Number |
| `MaxOndersteundeSnelheid` | `max_ondersteunde_snelheid` | Max. ondersteunde snelheid | Number |
| `MaxOndersteuningSnelheidBovengrens` | `max_ondersteuning_snelheid_bovengrens` | Max ondersteuning snelheid bovengrens | Number |
| `MaxOndersteuningSnelheidOndergrens` | `max_ondersteuning_snelheid_ondergrens` | Max ondersteuning snelheid ondergrens | Number |
| `MinMassaVoertuig` | `min_massa_voertuig` | Min massa voertuig | Number |
| `StatusVoertiugKentekening` | `status_voertiug_kentekening` | Status voertiug kentekening | Text |
| `TechnMaxLastKoppelpuntBovengrens` | `techn_max_last_koppelpunt_bovengrens` | Techn max last koppelpunt bovengrens | Number |
| `TechnMaxLastKoppelpuntOndergrens` | `techn_max_last_koppelpunt_ondergrens` | Techn max last koppelpunt ondergrens | Number |
| `TechnMaxMassaAutonoomBovengrens` | `techn_max_massa_autonoom_bovengrens` | Techn max massa autonoom bovengrens | Number |
| `TechnMaxMassaAutonoomOndergrens` | `techn_max_massa_autonoom_ondergrens` | Techn max massa autonoom ondergrens | Number |
| `TechnMaxMassaMiddenasBovengrens` | `techn_max_massa_middenas_bovengrens` | Techn max massa middenas bovengrens | Number |
| `TechnMaxMassaMiddenasOndergrens` | `techn_max_massa_middenas_ondergrens` | Techn max massa middenas ondergrens | Number |
| `TechnMaxMassaOpleggerBovengrens` | `techn_max_massa_oplegger_bovengrens` | Techn max massa oplegger bovengrens | Number |
| `TechnMaxMassaOpleggerOndergrens` | `techn_max_massa_oplegger_ondergrens` | Techn max massa oplegger ondergrens | Number |
| `TechnMaxMassaSamenstBovengrens` | `techn_max_massa_samenst_bovengrens` | Techn max massa samenst bovengrens | Number |
| `TechnMaxMassaSamenstOndergrens` | `techn_max_massa_samenst_ondergrens` | Techn max massa samenst ondergrens | Number |
| `TweedeBrandstofcodeVoertuig` | `tweede_brandstofcode_voertuig` | Tweede brandstofcode voertuig | Text |
| `UitvoeringRegistratieDatum` | `uitvoering_registratie_datum` | Uitvoering registratie datum | Number |
| `UitvoeringRegistratieDatumDt` | `uitvoering_registratie_datum_dt` | Uitvoering registratie datum_DT | Calendar date |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `VariantStatus` | `variant_status` | Variant status | Text |
| `WielbaisBovengrens` | `wielbais_bovengrens` | Wielbasis bovengrens | Number |
| `WielbasisOndergrens` | `wielbasis_ondergrens` | Wielbasis ondergrens | Number |
| `ZelfdragendeCarrosserie` | `zelfdragende_carrosserie` | Zelfdragende carrosserie | Text |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Basisgegevens-EEG-Uitvoering/wx3j-69ie
</details>

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

<details><summary>CarrosserieUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/CarrosserieUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CarrosserieVolgnummer` | `carrosserie_volgnummer` | Carrosserie volgnummer | Number |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `TypeCarrosserieEuropees` | `type_carrosserie_europees` | Type carrosserie europees | Text |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering/w2qp-idms
</details>

<details><summary>CarrosserieUitvoeringKlasse</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/CarrosserieUitvoeringKlasse.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CarrosserieKlasseEuropees` | `carrosserie_klasse_europees` | Carrosserie klasse europees | Text |
| `CarrosserieKlasseVolgnummer` | `carrosserie_klasse_volgnummer` | Carrosserie klasse volgnummer | Number |
| `CarrosserieVolgnummer` | `carrosserie_volgnummer` | Carrosserie volgnummer | Number |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Klasse/q7fi-ijjh
</details>

<details><summary>CarrosserieUitvoeringNummeriekeCode</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/CarrosserieUitvoeringNummeriekeCode.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CarrosserieUitvoeringNumeriekEuropees` | `carrosserie_uitvoering_numeriek_europees` | Carrosserie uitvoering numeriek Europees | Text |
| `CarrosserieUitvoeringNumeriekVolgnummer` | `carrosserie_uitvoering_numeriek_volgnummer` | Carrosserie uitvoering numeriek volgnummer | Number |
| `CarrosserieVolgnummer` | `carrosserie_volgnummer` | Carrosserie volgnummer | Number |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Nummerieke-Co/nypm-t8hx
</details>

<details><summary>EegVoertuigtypegoedkeuring</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/EegVoertuigtypegoedkeuring.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `ApiAsGegevensEegUitvoering` | `api_as_gegevens_eeg_uitvoering` | API AS gegevens EEG uitvoering | Text |
| `ApiBasisgegevensEegUitvoering` | `api_basisgegevens_eeg_uitvoering` | API Basisgegevens EEG uitvoering | Text |
| `ApiCarrosserieUitvoering` | `api_carrosserie_uitvoering` | API Carrosserie uitvoering | Text |
| `ApiCarrosserieUitvoeringKlasse` | `api_carrosserie_uitvoering_klasse` | API Carrosserie uitvoering klasse | Text |
| `ApiCarrosserieUitvoeringNummeriekeCode` | `api_carrosserie_uitvoering_nummerieke_code` | API Carrosserie uitvoering nummerieke code | Text |
| `ApiHandelsbenamingUitvoering` | `api_handelsbenaming_uitvoering` | API Handelsbenaming uitvoering | Text |
| `ApiMerkUitvoeringToegestaan` | `api_merk_uitvoering_toegestaan` | API Merk uitvoering toegestaan | Text |
| `ApiMotorUitvoering` | `api_motor_uitvoering` | API Motor uitvoering | Text |
| `ApiMotorUitvoeringBrandstof` | `api_motor_uitvoering_brandstof` | API Motor uitvoering brandstof | Text |
| `ApiPlaatsaanduidingUitvoering` | `api_plaatsaanduiding_uitvoering` | API Plaatsaanduiding uitvoering | Text |
| `ApiSubcategorieUitvoering` | `api_subcategorie_uitvoering` | API Subcategorie uitvoering | Text |
| `ApiUitvoeringverbruikPerUitgave` | `api_uitvoeringverbruik_per_uitgave` | API Uitvoeringverbruik per uitgave | Text |
| `ApiVersnellingsbakUitvoering` | `api_versnellingsbak_uitvoering` | API Versnellingsbak uitvoering | Text |
| `EegBasisGoedkeuringsnummer` | `eeg_basis_goedkeuringsnummer` | EEG basis goedkeuringsnummer | Number |
| `EegEceVoertuigCategorieBijType` | `eeg_ece_voertuig_categorie_bij_type` | EEG/ECE voertuig categorie bij type | Text |
| `EegTypegoedkeuringsdatum` | `eeg_typegoedkeuringsdatum` | EEG typegoedkeuringsdatum | Number |
| `EegTypegoedkeuringsdatumDt` | `eeg_typegoedkeuringsdatum_dt` | EEG typegoedkeuringsdatum_DT | Calendar date |
| `EegUitbreidingGoedkeuringsnummer` | `eeg_uitbreiding_goedkeuringsnummer` | EEG uitbreiding goedkeuringsnummer | Number |
| `EegVoertuigCatToevoeging` | `eeg_voertuig_cat_toevoeging` | EEG Voertuig cat toevoeging | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `EuropeseTypegoedkeuringEinddatum` | `europese_typegoedkeuring_einddatum` | Europese typegoedkeuring einddatum | Number |
| `EuropeseTypegoedkeuringEinddatumDt` | `europese_typegoedkeuring_einddatum_dt` | Europese typegoedkeuring einddatum_DT | Calendar date |
| `EuropeseTypegoedkeuringIntrekDatum` | `europese_typegoedkeuring_intrek_datum` | Europese typegoedkeuring intrek datum | Number |
| `EuropeseTypegoedkeuringIntrekDatumDt` | `europese_typegoedkeuring_intrek_datum_dt` | Europese typegoedkeuring intrek datum_DT | Calendar date |
| `EuropeseTypegoedkeuringStatus` | `europese_typegoedkeuring_status` | Europese typegoedkeuring status | Text |
| `EuropeseTypegoedkeuringStatusDatum` | `europese_typegoedkeuring_status_datum` | Europese typegoedkeuring status datum | Number |
| `EuropeseTypegoedkeuringStatusDatumDt` | `europese_typegoedkeuring_status_datum_dt` | Europese typegoedkeuring status datum_DT | Calendar date |
| `EuropeseTypegoedkeuringsRegistratieDatum` | `europese_typegoedkeurings_registratie_datum` | Europese typegoedkeurings registratie datum | Number |
| `EuropeseTypegoedkeuringsRegistratieDatumDt` | `europese_typegoedkeurings_registratie_datum_dt` | Europese typegoedkeurings registratie datum_DT | Calendar date |
| `Fabrikant` | `fabrikant` | Fabrikant | Text |
| `FabrikantcodeType` | `fabrikantcode_type` | Fabrikantcode type | Text |
| `LandcodeEegTypegoedkeuring` | `landcode_eeg_typegoedkeuring` | Landcode EEG typegoedkeuring | Text |
| `RichtlijnNrLaatsteWijziging` | `richtlijn_nr_laatste_wijziging` | Richtlijn nr laatste wijziging | Text |
| `TypeFabrikant` | `type_fabrikant` | Type fabrikant | Text |
| `Typegoedkeuringsnummer` | `typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `VervaldatumTypegoedkeuring` | `vervaldatum_typegoedkeuring` | Vervaldatum typegoedkeuring | Number |
| `VervaldatumTypegoedkeuringDt` | `vervaldatum_typegoedkeuring_dt` | Vervaldatum typegoedkeuring_DT | Calendar date |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-EEG-Voertuigtypegoedkeuring/55kv-xf7m
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

<details><summary>HandelsbenamingUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/HandelsbenamingUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `HandelsbenamingFabrikant` | `handelsbenaming_fabrikant` | Handelsbenaming fabrikant | Text |
| `RegistratiedatumHandelsbenaming` | `registratiedatum_handelsbenaming` | Registratiedatum handelsbenaming | Number |
| `RegistratiedatumHandelsbenamingDt` | `registratiedatum_handelsbenaming_dt` | Registratiedatum handelsbenaming_DT | Calendar date |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `Volgnummer` | `volgnummer` | Volgnummer handelsbenaming | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Handelsbenaming-Uitvoering/mdqe-txpd
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
| `AantalAssen` | `aantal_assen` | Aantal assen | Text |
| `AfstandTotVolgendeAsVoertuig` | `afstand_tot_volgende_as_voertuig` | Afstand tot volgende as voertuig | Number |
| `AfstandTotVolgendeAsVoertuigMaximum` | `afstand_tot_volgende_as_voertuig_maximum` | Afstand tot volgende as voertuig maximum | Number |
| `AfstandTotVolgendeAsVoertuigMinimum` | `afstand_tot_volgende_as_voertuig_minimum` | Afstand tot volgende as voertuig minimum | Number |
| `AsNummer` | `as_nummer` | As nummer | Text |
| `GeremdeAsIndicator` | `geremde_as_indicator` | Geremde as indicator | Text |
| `Hefas` | `hefas` | Hefas | Text |
| `Kenteken` | `kenteken` | Kenteken | Text |
| `MaximumLastAsTechnischMaximum` | `maximum_last_as_technisch_maximum` | Maximum last as technisch maximum | Number |
| `MaximumLastAsTechnischMinimum` | `maximum_last_as_technisch_minimum` | Maximum last as technisch minimum | Number |
| `PlaatscodeAs` | `plaatscode_as` | Plaatscode as | Text |
| `Spoorbreedte` | `spoorbreedte` | Spoorbreedte | Text |
| `TechnischToegestaneMaximumAslast` | `technisch_toegestane_maximum_aslast` | Technisch toegestane maximum aslast | Text |
| `WeggedragCode` | `weggedrag_code` | Weggedrag code | Text |
| `WettelijkToegestaneMaximumAslast` | `wettelijk_toegestane_maximum_aslast` | Wettelijk toegestane maximum aslast | Text |

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

<details><summary>MerkUitvoeringToegestaan</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/MerkUitvoeringToegestaan.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `MerkRegistratieDatum` | `merk_registratie_datum` | Merk registratie datum | Number |
| `MerkRegistratieDatumDt` | `merk_registratie_datum_dt` | Merk registratie datum_DT | Calendar date |
| `Merkcode` | `merkcode` | Merkcode | Text |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Merk-Uitvoering-Toegestaan/fj7t-hhik
</details>

<details><summary>MotorUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/MotorUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `AantalCilinders` | `aantal_cilinders` | Aantal cilinders | Number |
| `Brandstofcode` | `brandstofcode` | Brandstofcode | Text |
| `BrandstofverbruikBuitenweg` | `brandstofverbruik_buitenweg` | Brandstofverbruik buitenweg | Number |
| `BrandstofverbruikCombinRit` | `brandstofverbruik_combin_rit` | Brandstofverbruik combin rit | Number |
| `BrandstofverbruikStadsrit` | `brandstofverbruik_stadsrit` | Brandstofverbruik stadsrit | Number |
| `CilinderinhoudCm3` | `cilinderinhoud_cm3` | Cilinderinhoud (cm3) | Number |
| `CngSysteem` | `cng_systeem` | CNG Systeem | Text |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `ElectromotorAfFabriekIndicator` | `electromotor_af_fabriek_indicator` | Electromotor af fabriek indicator | Text |
| `EmissieCoBijKoudeStart` | `emissie_co_bij_koude_start` | Emissie co bij koude start | Number |
| `EmissieCo2Buitenweg` | `emissie_co2_buitenweg` | Emissie co2 buitenweg | Number |
| `EmissieCo2Combinatierit` | `emissie_co2_combinatierit` | Emissie co2 combinatierit | Number |
| `EmissieCo2Stadsrit` | `emissie_co2_stadsrit` | Emissie co2 stadsrit | Number |
| `EmissieHcBijKoudeStart` | `emissie_hc_bij_koude_start` | Emissie hc bij koude start | Number |
| `EmissieHcEnNox` | `emissie_hc_en_nox` | Emissie hc en nox | Number |
| `EmissieKoolmonoxide` | `emissie_koolmonoxide` | Emissie koolmonoxide | Number |
| `EmissieKoolwaterstof` | `emissie_koolwaterstof` | Emissie koolwaterstof | Number |
| `EmissieStikstofoxide` | `emissie_stikstofoxide` | Emissie stikstofoxide | Number |
| `EmissieVasteStofdeeltjes` | `emissie_vaste_stofdeeltjes` | Emissie vaste stofdeeltjes | Number |
| `Emissiecode` | `emissiecode` | Emissieklasse | Text |
| `EnkelElectrischeIndicator` | `enkel_electrische_indicator` | Enkel electrische indicator | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `ExternOplaadbaar` | `extern_oplaadbaar` | Extern oplaadbaar | Text |
| `GeluidsniveauBovengrens` | `geluidsniveau_bovengrens` | Geluidsniveau bovengrens | Number |
| `GeluidsniveauOndergrens` | `geluidsniveau_ondergrens` | Geluidsniveau ondergrens | Number |
| `GeluidsniveauRijdend` | `geluidsniveau_rijdend` | Geluidsniveau rijdend | Number |
| `HybrideElektrischVoertuig` | `hybride_elektrisch_voertuig` | Hybride elektrisch voertuig | Text |
| `KatalysatorIndicator` | `katalysator_indicator` | Katalysator indicator | Text |
| `LpgSysteem` | `lpg_systeem` | LPG Systeem | Text |
| `LuchtInjectieIndicator` | `lucht_injectie_indicator` | Lucht injectie indicator | Text |
| `MaxVermogenContinuBovengrens` | `max_vermogen_continu_bovengrens` | Max vermogen continu bovengrens | Number |
| `MaxVermogenContinuOndergrens` | `max_vermogen_continu_ondergrens` | Max vermogen continu ondergrens | Number |
| `MotorRegistratiedatum` | `motor_registratiedatum` | Motor registratiedatum | Number |
| `MotorRegistratiedatumDt` | `motor_registratiedatum_dt` | Motor registratiedatum_DT | Calendar date |
| `Motorcode` | `motorcode` | Motorcode | Text |
| `RoetUitstoot` | `roet_uitstoot` | Roet uitstoot | Number |
| `SoortInspuitingMotor` | `soort_inspuiting_motor` | Soort inspuiting motor | Text |
| `StationairToerentalBovengr` | `stationair_toerental_bovengr` | Stationair toerental bovengr | Number |
| `StationairToerentalOndergr` | `stationair_toerental_ondergr` | Stationair toerental ondergr | Number |
| `ToerentalGeluidsniveauBovengrens` | `toerental_geluidsniveau_bovengrens` | Toerental geluidsniveau bovengrens | Number |
| `ToerentalGeluidsniveauOndergrens` | `toerental_geluidsniveau_ondergrens` | Toerental geluidsniveau ondergrens | Number |
| `UitlaatgasCirculatieIndicator` | `uitlaatgas_circulatie_indicator` | Uitlaatgas circulatie indicator | Text |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `VermogenBovengrens` | `vermogen_bovengrens` | Vermogen bovengrens | Number |
| `VermogenOndergrens` | `vermogen_ondergrens` | Vermogen ondergrens | Number |
| `VoertuigbrandstofType` | `voertuigbrandstof_type` | Voertuigbrandstof type | Text |
| `Volgnummer` | `volgnummer` | Volgnummer motor uitvoering | Number |
| `WerkingsbeginselVerbrandingsmotor` | `werkingsbeginsel_verbrandingsmotor` | Werkingsbeginsel verbrandingsmotor | Text |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering/g2s6-ehxa
</details>

<details><summary>MotorUitvoeringBrandstof</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/MotorUitvoeringBrandstof.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `ActieradiusBrandstof` | `actieradius_brandstof` | Actieradius brandstof | Number |
| `ActieradiusBrandstofExternOplaadbaar` | `actieradius_brandstof_extern_oplaadbaar` | Actieradius brandstof extern oplaadbaar | Number |
| `BrandstofVolgnummer` | `brandstof_volgnummer` | Brandstof volgnummer | Number |
| `Brandstofcode` | `brandstofcode` | Brandstofcode | Text |
| `BrandstofverbruikBuitenweg` | `brandstofverbruik_buitenweg` | Brandstofverbruik buitenweg | Number |
| `BrandstofverbruikCombinRit` | `brandstofverbruik_combin_rit` | Brandstofverbruik combin rit | Number |
| `BrandstofverbruikStadsrit` | `brandstofverbruik_stadsrit` | Brandstofverbruik stadsrit | Number |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `ElektrischVerbruikCombinatie` | `elektrisch_verbruik_combinatie` | Elektrisch verbruik combinatie | Number |
| `ElektrischVerbruikGecomb` | `elektrisch_verbruik_gecomb` | Elektrisch verbruik gecomb | Number |
| `EmissieAantDeeltjesEscTest` | `emissie_aant_deeltjes_esc_test` | Emissie aant deeltjes esc test | Number |
| `EmissieAantDeeltjesEtcTest` | `emissie_aant_deeltjes_etc_test` | Emissie aant deeltjes etc test | Number |
| `EmissieAantDeeltjesT1Test` | `emissie_aant_deeltjes_t1_test` | Emissie aant deeltjes t1 test | Number |
| `EmissieCh4VolgensWhsc` | `emissie_ch4_volgens_whsc` | Emissie ch4 volgens whsc | Number |
| `EmissieCh4VolgensWhtc` | `emissie_ch4_volgens_whtc` | Emissie ch4 volgens whtc | Number |
| `EmissieCoBijKoudeStart` | `emissie_co_bij_koude_start` | Emissie co bij koude start | Number |
| `EmissieCoVolgensWhsc` | `emissie_co_volgens_whsc` | Emissie co volgens whsc | Number |
| `EmissieCoVolgensWhtc` | `emissie_co_volgens_whtc` | Emissie co volgens whtc | Number |
| `EmissieCo2Buitenweg` | `emissie_co2_buitenweg` | Emissie co2 buitenweg | Number |
| `EmissieCo2Combinatierit` | `emissie_co2_combinatierit` | Emissie co2 combinatierit | Number |
| `EmissieCo2Gecombineerd` | `emissie_co2_gecombineerd` | Emissie co2 gecombineerd | Number |
| `EmissieCo2Stadsrit` | `emissie_co2_stadsrit` | Emissie co2 stadsrit | Number |
| `EmissieDeeltjesAantalWhsc` | `emissie_deeltjes_aantal_whsc` | Emissie deeltjes aantal whsc | Number |
| `EmissieDeeltjesAantalWhtc` | `emissie_deeltjes_aantal_whtc` | Emissie deeltjes aantal whtc | Number |
| `EmissieDeeltjesMassaWhsc` | `emissie_deeltjes_massa_whsc` | Emissie deeltjes massa whsc | Number |
| `EmissieDeeltjesMassaWhtc` | `emissie_deeltjes_massa_whtc` | Emissie deeltjes massa whtc | Number |
| `EmissieHcBijKoudeStart` | `emissie_hc_bij_koude_start` | Emissie hc bij koude start | Number |
| `EmissieHcEnNoxType1` | `emissie_hc_en_nox_type1` | Emissie hc en nox type1 | Number |
| `EmissieKoolmonaxideEtcTest` | `emissie_koolmonaxide_etc_test` | Emissie koolmonaxide etc test | Number |
| `EmissieKoolmonoxideEscTest` | `emissie_koolmonoxide_esc_test` | Emissie koolmonoxide esc test | Number |
| `EmissieKoolmonoxideType1` | `emissie_koolmonoxide_type_1` | Emissie koolmonoxide type 1 | Number |
| `EmissieKoolwaterstofType1` | `emissie_koolwaterstof_type_1` | Emissie koolwaterstof type 1 | Number |
| `EmissieKoolwaterstoffenEscTest` | `emissie_koolwaterstoffen_esc_test` | Emissie koolwaterstoffen esc test | Number |
| `EmissieKoolwaterstoffenEtcTest` | `emissie_koolwaterstoffen_etc_test` | Emissie koolwaterstoffen etc test | Number |
| `EmissieMethaanEtcTest` | `emissie_methaan_etc_test` | Emissie methaan etc test | Number |
| `EmissieNh3VolgensWhsc` | `emissie_nh3_volgens_whsc` | Emissie nh3 volgens whsc | Number |
| `EmissieNh3VolgensWhtc` | `emissie_nh3_volgens_whtc` | Emissie nh3 volgens whtc | Number |
| `EmissieNmhcVolgensWhsc` | `emissie_nmhc_volgens_whsc` | Emissie nmhc volgens whsc | Number |
| `EmissieNmhcVolgensWhtc` | `emissie_nmhc_volgens_whtc` | Emissie nmhc volgens whtc | Number |
| `EmissieNonMethaanKoolwEtcTest` | `emissie_non_methaan_koolw_etc_test` | Emissie non methaan koolw etc test | Number |
| `EmissieNoxVolgensWhsc` | `emissie_nox_volgens_whsc` | Emissie nox volgens whsc | Number |
| `EmissieNoxVolgensWhtc` | `emissie_nox_volgens_whtc` | Emissie nox volgens whtc | Number |
| `EmissieStikstofoxideType1` | `emissie_stikstofoxide_type_1` | Emissie stikstofoxide type 1 | Number |
| `EmissieStikstofoxidenEscTest` | `emissie_stikstofoxiden_esc_test` | Emissie stikstofoxiden esc test | Number |
| `EmissieStikstofoxidenEtcTest` | `emissie_stikstofoxiden_etc_test` | Emissie stikstofoxiden etc test | Number |
| `EmissieThcVolgensWhsc` | `emissie_thc_volgens_whsc` | Emissie thc volgens whsc | Number |
| `EmissieThcVolgensWhtc` | `emissie_thc_volgens_whtc` | Emissie thc volgens whtc | Number |
| `EmissieVasteStofdeeltjes` | `emissie_vaste_stofdeeltjes` | Emissie vaste stofdeeltjes | Number |
| `EmissieVasteStofdeeltjesEscTest` | `emissie_vaste_stofdeeltjes_esc_test` | Emissie vaste stofdeeltjes esc test | Number |
| `EmissieVasteStofdeeltjesEtcTest` | `emissie_vaste_stofdeeltjes_etc_test` | Emissie vaste stofdeeltjes etc test | Number |
| `Emissiecode` | `emissiecode` | Emissieklasse | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `GeluidsniveauBovengrens` | `geluidsniveau_bovengrens` | Geluidsniveau bovengrens | Number |
| `GeluidsniveauOndergrens` | `geluidsniveau_ondergrens` | Geluidsniveau ondergrens | Number |
| `GeluidsniveauRijdend` | `geluidsniveau_rijdend` | Geluidsniveau rijdend | Number |
| `LuchtInjectieIndicator` | `lucht_injectie_indicator` | Lucht injectie indicator | Text |
| `MaxVermogenContinuBovengrens` | `max_vermogen_continu_bovengrens` | Max vermogen continu bovengrens | Number |
| `MaxVermogenContinuOndergrens` | `max_vermogen_continu_ondergrens` | Max vermogen continu ondergrens | Number |
| `MaximaleBiobrandstofPercentage` | `maximale_biobrandstof_percentage` | Maximale biobrandstof percentage | Number |
| `NettoMaxVermogenBovengrens` | `netto_max_vermogen_bovengrens` | Netto max vermogen bovengrens | Number |
| `NettoMaxVermogenOndergrens` | `netto_max_vermogen_ondergrens` | Netto max vermogen ondergrens | Number |
| `RoetUitstootAcc` | `roet_uitstoot_acc` | Roet uitstoot acc | Number |
| `RookwaardeElrTest` | `rookwaarde_elr_test` | Rookwaarde elr test | Number |
| `SoortInspuitingMotor` | `soort_inspuiting_motor` | Soort inspuiting motor | Text |
| `StationToerentalBovengrensAcc` | `station_toerental_bovengrens_acc` | Station toerental bovengrens acc | Number |
| `StationToerentalOndergrensAcc` | `station_toerental_ondergrens_acc` | Station toerental ondergrens acc | Number |
| `ToerentalMaxVermogenBovengrens` | `toerental_max_vermogen_bovengrens` | Toerental max vermogen bovengrens | Number |
| `ToerentalMaxVermogenOndergrens` | `toerental_max_vermogen_ondergrens` | Toerental max vermogen ondergrens | Number |
| `UitlaatgasCirculatieIndicator` | `uitlaatgas_circulatie_indicator` | Uitlaatgas circulatie indicator | Text |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Text |
| `VerbruikGecombineerd` | `verbruik_gecombineerd` | Verbruik gecombineerd | Number |
| `VermogenBovengrens` | `vermogen_bovengrens` | Vermogen bovengrens | Number |
| `VermogenOndergrens` | `vermogen_ondergrens` | Vermogen ondergrens | Number |
| `Volgnummer` | `volgnummer` | Volgnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering-Brandstof/5w6t-p66a
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
| `LocationAddress` | `location_address` | Location (address) | Text |
| `LocationCity` | `location_city` | Location (city) | Text |
| `LocationState` | `location_state` | Location (state) | Text |
| `LocationZip` | `location_zip` | Location (zip) | Text |
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

<details><summary>PlaatsaanduidingUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/PlaatsaanduidingUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `PlaatsAanduidingVolgnummer` | `plaats_aanduiding_volgnummer` | Plaats aanduiding volgnummer | Number |
| `PlaatsaanduidingRegistratieDatum` | `plaatsaanduiding_registratie_datum` | Plaatsaanduiding registratie datum | Number |
| `PlaatsaanduidingRegistratieDatumDt` | `plaatsaanduiding_registratie_datum_dt` | Plaatsaanduiding registratie datum_DT | Calendar date |
| `PlaatscodeVoeruigIdentificatie` | `plaatscode_voeruig_identificatie` | Plaatscode voeruig identificatie | Text |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Plaatsaanduiding-Uitvoering/mt8t-4ep4
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

<details><summary>SubcategorieUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/SubcategorieUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `SubcategUitvoeringEuropees` | `subcateg_uitvoering_europees` | Subcateg uitvoering europees | Text |
| `SubcategorieUitvoeringVolgnr` | `subcategorie_uitvoering_volgnr` | Subcategorie uitvoering volgnr | Number |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Subcategorie-Uitvoering/h9pa-e9ta
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

<details><summary>TestProducerApi</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/TestProducerApi.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `CarrosserieKlasseEuropees` | `carrosserie_klasse_europees` | Carrosserie klasse europees | Text |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Number |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `Uniekecode` | `uniekecode` | UniekeCode | Text |

**Link:** https://opendata.rdw.nl/dataset/Test_Producer_API/sgwh-cvkk
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

<details><summary>UitvoeringGebruiksgegevensPerUitgave</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/UitvoeringGebruiksgegevensPerUitgave.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `UitvgavenummerVerbruikboek` | `uitvgavenummer_verbruikboek` | Uitvgavenummer verbruikboek | Text |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `VerbruikcategorieUitvoering` | `verbruikcategorie_uitvoering` | Verbruikcategorie uitvoering | Text |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Uitvoering-Gebruiksgegevens-Per-Uitg/2822-t8sx
</details>

<details><summary>VersnellingsbakUitvoering</summary>

### API

Documentation can be found [here](https://deno.land/x/rdw_data/src/providers/VersnellingsbakUitvoering.ts)

### Fields

| Name | Field | Readable Name | Type |
| --- | --- | --- | --- |
| `AantalVersnellingenBovengrens` | `aantal_versnellingen_bovengrens` | Aantal versnellingen bovengrens | Number |
| `AantalVersnellingenOndergrens` | `aantal_versnellingen_ondergrens` | Aantal versnellingen ondergrens | Number |
| `EegUitvoeringscode` | `eeg_uitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | `eeg_variantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | `eu_type_goedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `TypeVersnellingsbak` | `type_versnellingsbak` | Type versnellingsbak | Text |
| `UitvoeringWijzigingsnummer` | `uitvoering_wijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `Volgnummer` | `volgnummer` | Volgnummer versnellingsbak | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Versnellingsbak-Uitvoering/r7cw-67gs
</details>

<!-- END FUNCTIONS -->

## License

MIT
