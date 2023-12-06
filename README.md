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

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `AangedrevenAs` | Aangedreven as | Text |
| `AfstandVolgendeAsBovengrens` | Afstand volgende as bovengrens | Number |
| `AfstandVolgendeAsOndergrens` | Afstand volgende as ondergrens | Number |
| `Asnummer` | Asnummer | Text |
| `DubbeleMontage` | Dubbele montage | Text |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `GelijkwaardigAanLuchtvering` | Gelijkwaardig aan luchtvering | Text |
| `GestuurdeAsIndicator` | Gestuurde as indicator | Text |
| `Hefas` | Hefas | Text |
| `Luchtvering` | Luchtvering | Text |
| `PlaatsAsCode` | Plaats as code | Text |
| `RolstraalBovengrens` | Rolstraal bovengrens | Number |
| `RolstraalOndergrens` | Rolstraal ondergrens | Number |
| `SnelheidssymboolOndergrens` | Snelheidssymbool ondergrens | Text |
| `SpoorbreedteBovengrens` | Spoorbreedte bovengrens | Number |
| `SpoorbreedteOndergrens` | Spoorbreedte ondergrens | Number |
| `TechnMaxLastAsBovengrens` | Techn max last as bovengrens | Number |
| `TechnMaxLastAsOndergrens` | Techn max last as ondergrens | Number |
| `TechnMaxLastAsstelBovengr` | Techn max last asstel bovengr | Number |
| `TechnMaxLastAsstelOndergr` | Techn max last asstel ondergr | Number |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-AS-Gegevens-EEG-Uitvoering/ahsi-8uyu
</details>

<details><summary>BasisgegevensEegUitvoering</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `N24ghzKortbereikRadar` | 24GHz_kortbereik radar | Text |
| `AantZitplStilstVrtgBovengrens` | Aant zitpl stilst vrtg bovengrens | Number |
| `AantZitplStilstVrtgOndergrens` | Aant zitpl stilst vrtg ondergrens | Number |
| `AantalAangedrevenAssen` | Aantal aangedreven assen | Number |
| `AantalDeurenBovengrens` | Aantal deuren bovengrens | Number |
| `AantalDeurenOndergrens` | Aantal deuren ondergrens | Number |
| `AantalPassagierZittendBovengrens` | Aantal passagier zittend bovengrens | Number |
| `AantalPassagierZittendOndergrens` | Aantal passagier zittend ondergrens | Number |
| `AantalPassagiersBovengrens` | Aantal passagiers bovengrens | Number |
| `AantalPassagiersOndergrens` | Aantal passagiers ondergrens | Number |
| `AantalRolstoelPlaatsBovengrens` | Aantal rolstoel plaats bovengrens | Number |
| `AantalRolstoelPlaatsOndergrens` | Aantal rolstoel plaats ondergrens | Number |
| `AantalWielen` | Aantal wielen | Number |
| `AantalZitplaatsenBovengrens` | Aantal zitplaatsen bovengrens | Number |
| `AantalZitplaatsenOndergrens` | Aantal zitplaatsen ondergrens | Number |
| `AfstHartKoppelingAsBovengrens` | Afst hart koppeling as bovengrens | Number |
| `AfstHartKoppelingAsOndergrens` | Afst hart koppeling as ondergrens | Number |
| `BegindatumRestantVoorraad` | Begindatum restant voorraad | Number |
| `BegindatumRestantVoorraadDt` | Begindatum restant voorraad_DT | Calendar date |
| `BegindatumUitvoering` | Begindatum uitvoering | Number |
| `BegindatumUitvoeringDt` | Begindatum uitvoering_DT | Calendar date |
| `BreedteVoertuigUitvoeringBovengrens` | Breedte voertuig(uitvoering) bovengrens | Number |
| `BreedteVoertuigUitvoeringOndergrens` | Breedte voertuig(uitvoering) ondergrens | Number |
| `CodeStatusIntrekkingUitvoering` | Code status intrekking uitvoering | Text |
| `CompleetVoertuigIndicator` | Compleet voertuig indicator | Text |
| `DatumStatusWijziging` | Datum status wijziging | Number |
| `DatumStatusWijzigingDt` | Datum status wijziging_DT | Calendar date |
| `EegUitvoeringCatToevoeging` | EEG uitvoering cat toevoeging | Text |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EindatumRestantVoorraad` | Einddatum restant voorraad | Number |
| `EinddatumRestantVoorraadDt` | Einddatum restant voorraad_DT | Calendar date |
| `EinddatumUitvoering` | Einddatum uitvoering | Number |
| `EinddatumUitvoeringDt` | Einddatum uitvoering_DT | Calendar date |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `EurCoderingCarrosserietype` | Eur. Codering carrosserietype | Text |
| `Handelsbenaming` | Handelsbenaming | Text |
| `HoogteVoertuigUitvoeringBovengrens` | Hoogte voertuig(uitvoering) bovengrens | Number |
| `HoogteVoertuigUitvoeringOndergrens` | Hoogte voertuig(uitvoering) ondergrens | Number |
| `InhoudBrandstoftank` | Inhoud brandstoftank | Number |
| `Inrichtingscode` | Inrichtingscode | Number |
| `IntrekdatumUitvoering` | Intrekdatum uitvoering | Number |
| `IntrekdatumUitvoeringDt` | Intrekdatum uitvoering_DT | Calendar date |
| `KantVanHetStuur` | Kant van het stuur | Text |
| `LengteLaadruimteBovengrens` | Lengte laadruimte bovengrens | Number |
| `LengteLaadruimteOndergrens` | Lengte laadruimte ondergrens | Number |
| `LengteVoertuigUitvoeringBovengrens` | Lengte voertuig(uitvoering) bovengrens | Number |
| `LengteVoertuigUitvoeringOndergrens` | Lengte voertuig(uitvoering) ondergrens | Number |
| `LinksRechtsRijdend` | Links / Rechts rijdend | Text |
| `MassaBedrijfsklaarToestandBovengrens` | Massa bedrijfsklaar toestand bovengrens | Number |
| `MassaBedrijfsklaarToestandOndergrens` | Massa bedrijfsklaar toestand ondergrens | Number |
| `MassaLeegVoertuigBovengrens` | Massa leeg voertuig bovengrens | Number |
| `MassaLeegVoertuigOndergrens` | Massa leeg voertuig ondergrens | Number |
| `MaxBreedteVoertuigBovengrens` | Max breedte voertuig bovengrens | Number |
| `MaxBreedteVoertuigOndergrens` | Max breedte voertuig ondergrens | Number |
| `MaxConstructieSnelheidBovengrens` | Max constructie snelheid bovengrens | Number |
| `MaxConstructieSnelheidOndergrens` | Max constructie snelheid ondergrens | Number |
| `MaxLengteVoertuigBovengrens` | Max lengte voertuig bovengrens | Number |
| `MaxLengteVoertuigOndergrens` | Max lengte voertuig ondergrens | Number |
| `MaxMassaGeremdBovengrens` | Max massa geremd bovengrens | Number |
| `MaxMassaGeremdOndergrens` | Max massa geremd ondergrens | Number |
| `MaxMassaOngeremdBovengrens` | Max massa ongeremd bovengrens | Number |
| `MaxMassaOngeremdOndergrens` | Max massa ongeremd ondergrens | Number |
| `MaxMassaSamenstelBovengrens` | Max massa samenstel bovengrens | Number |
| `MaxMassaSamenstelOndergrens` | Max massa samenstel ondergrens | Number |
| `MaxMassaVoertuigBovengrens` | Max massa voertuig bovengrens | Number |
| `MaxMassaVoertuigOndergrens` | Max massa voertuig ondergrens | Number |
| `MaxMassaVrtgTechnBovengrens` | Max massa vrtg techn bovengrens | Number |
| `MaxMassaVrtgTechnOndergrens` | Max massa vrtg techn ondergrens | Number |
| `MaxOndersteundeSnelheid` | Max. ondersteunde snelheid | Number |
| `MaxOndersteuningSnelheidBovengrens` | Max ondersteuning snelheid bovengrens | Number |
| `MaxOndersteuningSnelheidOndergrens` | Max ondersteuning snelheid ondergrens | Number |
| `MinMassaVoertuig` | Min massa voertuig | Number |
| `StatusVoertiugKentekening` | Status voertiug kentekening | Text |
| `TechnMaxLastKoppelpuntBovengrens` | Techn max last koppelpunt bovengrens | Number |
| `TechnMaxLastKoppelpuntOndergrens` | Techn max last koppelpunt ondergrens | Number |
| `TechnMaxMassaAutonoomBovengrens` | Techn max massa autonoom bovengrens | Number |
| `TechnMaxMassaAutonoomOndergrens` | Techn max massa autonoom ondergrens | Number |
| `TechnMaxMassaMiddenasBovengrens` | Techn max massa middenas bovengrens | Number |
| `TechnMaxMassaMiddenasOndergrens` | Techn max massa middenas ondergrens | Number |
| `TechnMaxMassaOpleggerBovengrens` | Techn max massa oplegger bovengrens | Number |
| `TechnMaxMassaOpleggerOndergrens` | Techn max massa oplegger ondergrens | Number |
| `TechnMaxMassaSamenstBovengrens` | Techn max massa samenst bovengrens | Number |
| `TechnMaxMassaSamenstOndergrens` | Techn max massa samenst ondergrens | Number |
| `TweedeBrandstofcodeVoertuig` | Tweede brandstofcode voertuig | Text |
| `UitvoeringRegistratieDatum` | Uitvoering registratie datum | Number |
| `UitvoeringRegistratieDatumDt` | Uitvoering registratie datum_DT | Calendar date |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `VariantStatus` | Variant status | Text |
| `WielbaisBovengrens` | Wielbasis bovengrens | Number |
| `WielbasisOndergrens` | Wielbasis ondergrens | Number |
| `ZelfdragendeCarrosserie` | Zelfdragende carrosserie | Text |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Basisgegevens-EEG-Uitvoering/wx3j-69ie
</details>

<details><summary>BrandstoffenOpPc4</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Aantal` | Aantal | Number |
| `Brandstof` | Brandstof | Text |
| `ExternOplaadbaar` | Extern oplaadbaar | Text |
| `Postcode` | Postcode | Number |
| `Voertuigsoort` | Voertuigsoort | Text |

**Link:** https://opendata.rdw.nl/dataset/Brandstoffen_op_PC4/8wbe-pu7d
</details>

<details><summary>CarrosserieUitvoering</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CarrosserieVolgnummer` | Carrosserie volgnummer | Number |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `TypeCarrosserieEuropees` | Type carrosserie europees | Text |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering/w2qp-idms
</details>

<details><summary>CarrosserieUitvoeringKlasse</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CarrosserieKlasseEuropees` | Carrosserie klasse europees | Text |
| `CarrosserieKlasseVolgnummer` | Carrosserie klasse volgnummer | Number |
| `CarrosserieVolgnummer` | Carrosserie volgnummer | Number |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Klasse/q7fi-ijjh
</details>

<details><summary>CarrosserieUitvoeringNummeriekeCode</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CarrosserieUitvoeringNumeriekEuropees` | Carrosserie uitvoering numeriek Europees | Text |
| `CarrosserieUitvoeringNumeriekVolgnummer` | Carrosserie uitvoering numeriek volgnummer | Number |
| `CarrosserieVolgnummer` | Carrosserie volgnummer | Number |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Carrosserie-Uitvoering-Nummerieke-Co/nypm-t8hx
</details>

<details><summary>EegVoertuigtypegoedkeuring</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `ApiAsGegevensEegUitvoering` | API AS gegevens EEG uitvoering | Text |
| `ApiBasisgegevensEegUitvoering` | API Basisgegevens EEG uitvoering | Text |
| `ApiCarrosserieUitvoering` | API Carrosserie uitvoering | Text |
| `ApiCarrosserieUitvoeringKlasse` | API Carrosserie uitvoering klasse | Text |
| `ApiCarrosserieUitvoeringNummeriekeCode` | API Carrosserie uitvoering nummerieke code | Text |
| `ApiHandelsbenamingUitvoering` | API Handelsbenaming uitvoering | Text |
| `ApiMerkUitvoeringToegestaan` | API Merk uitvoering toegestaan | Text |
| `ApiMotorUitvoering` | API Motor uitvoering | Text |
| `ApiMotorUitvoeringBrandstof` | API Motor uitvoering brandstof | Text |
| `ApiPlaatsaanduidingUitvoering` | API Plaatsaanduiding uitvoering | Text |
| `ApiSubcategorieUitvoering` | API Subcategorie uitvoering | Text |
| `ApiUitvoeringverbruikPerUitgave` | API Uitvoeringverbruik per uitgave | Text |
| `ApiVersnellingsbakUitvoering` | API Versnellingsbak uitvoering | Text |
| `EegBasisGoedkeuringsnummer` | EEG basis goedkeuringsnummer | Number |
| `EegEceVoertuigCategorieBijType` | EEG/ECE voertuig categorie bij type | Text |
| `EegTypegoedkeuringsdatum` | EEG typegoedkeuringsdatum | Number |
| `EegTypegoedkeuringsdatumDt` | EEG typegoedkeuringsdatum_DT | Calendar date |
| `EegUitbreidingGoedkeuringsnummer` | EEG uitbreiding goedkeuringsnummer | Number |
| `EegVoertuigCatToevoeging` | EEG Voertuig cat toevoeging | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `EuropeseTypegoedkeuringEinddatum` | Europese typegoedkeuring einddatum | Number |
| `EuropeseTypegoedkeuringEinddatumDt` | Europese typegoedkeuring einddatum_DT | Calendar date |
| `EuropeseTypegoedkeuringIntrekDatum` | Europese typegoedkeuring intrek datum | Number |
| `EuropeseTypegoedkeuringIntrekDatumDt` | Europese typegoedkeuring intrek datum_DT | Calendar date |
| `EuropeseTypegoedkeuringStatus` | Europese typegoedkeuring status | Text |
| `EuropeseTypegoedkeuringStatusDatum` | Europese typegoedkeuring status datum | Number |
| `EuropeseTypegoedkeuringStatusDatumDt` | Europese typegoedkeuring status datum_DT | Calendar date |
| `EuropeseTypegoedkeuringsRegistratieDatum` | Europese typegoedkeurings registratie datum | Number |
| `EuropeseTypegoedkeuringsRegistratieDatumDt` | Europese typegoedkeurings registratie datum_DT | Calendar date |
| `Fabrikant` | Fabrikant | Text |
| `FabrikantcodeType` | Fabrikantcode type | Text |
| `LandcodeEegTypegoedkeuring` | Landcode EEG typegoedkeuring | Text |
| `RichtlijnNrLaatsteWijziging` | Richtlijn nr laatste wijziging | Text |
| `TypeFabrikant` | Type fabrikant | Text |
| `Typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `VervaldatumTypegoedkeuring` | Vervaldatum typegoedkeuring | Number |
| `VervaldatumTypegoedkeuringDt` | Vervaldatum typegoedkeuring_DT | Calendar date |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-EEG-Voertuigtypegoedkeuring/55kv-xf7m
</details>

<details><summary>ErkendeBedrijven</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `ApiBedrijfErkenningen` | api_bedrijf_erkenningen | Text |
| `Gevelnaam` | Gevelnaam | Text |
| `Huisnummer` | Huisnummer | Text |
| `HuisnummerToevoeging` | Huisnummer toevoeging | Text |
| `NaamBedrijf` | Naam bedrijf | Text |
| `Plaats` | Plaats | Text |
| `PostcodeAlfanumeriek` | Postcode alfanumeriek | Text |
| `PostcodeNumeriek` | Postcode numeriek | Number |
| `Straat` | Straat | Text |
| `Volgnummer` | Volgnummer | Number |

**Link:** https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkende-Bedrijven/5k74-3jha
</details>

<details><summary>Erkenningen</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Erkenning` | Erkenning | Text |
| `Volgnummer` | Volgnummer | Number |

**Link:** https://opendata.rdw.nl/Erkende-bedrijven/Open-Data-RDW-Erkenningen/nmwb-dqkz
</details>

<details><summary>Gebreken</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `EinddatumGebrek` | Einddatum gebrek | Number |
| `EinddatumGebrekDt` | Einddatum gebrek DT | Calendar date |
| `GebrekArtikelNummer` | Gebrek artikel nummer | Text |
| `GebrekIdentificatie` | Gebrek identificatie | Text |
| `GebrekOmschrijving` | Gebrek omschrijving | Text |
| `GebrekParagraafNummer` | Gebrek paragraaf nummer | Number |
| `IngangsdatumGebrek` | Ingangsdatum gebrek | Number |
| `IngangsdatumGebrekDt` | Ingangsdatum gebrek DT | Calendar date |

**Link:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Gebreken/hx2c-gt7k
</details>

<details><summary>GeconstateerdeGebreken</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `AantalGebrekenGeconstateerd` | Aantal gebreken geconstateerd | Number |
| `GebrekIdentificatie` | Gebrek identificatie | Text |
| `Kenteken` | Kenteken | Text |
| `MeldDatumDoorKeuringsinstantie` | Meld datum door keuringsinstantie | Number |
| `MeldDatumDoorKeuringsinstantieDt` | Meld datum door keuringsinstantie DT | Calendar date |
| `MeldTijdDoorKeuringsinstantie` | Meld tijd door keuringsinstantie | Number |
| `SoortErkenningKeuringsinstantie` | Soort erkenning keuringsinstantie | Text |
| `SoortErkenningOmschrijving` | Soort erkenning omschrijving | Text |

**Link:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Geconstateerde-Gebreken/a34c-vvps
</details>

<details><summary>GeoCarpool</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `AantalLaadPunten` | Aantal laad punten | Number |
| `AantalParkeerPlaatsen` | Aantal parkeer plaatsen | Number |
| `Areadesc` | AreaDesc | Text |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddataarea` | EndDataArea | Number |
| `Location` | Location | Point |
| `LocationAddress` | Location (address) | Text |
| `LocationCity` | Location (city) | Text |
| `LocationState` | Location (state) | Text |
| `LocationZip` | Location (zip) | Text |
| `MaximaleInrijHoogte` | Maximale doorrijhoogte | Text |
| `Startdataarea` | StartDataArea | Number |
| `ToegankelijkVoorGehandicapten` | Toegankelijk voor gehandicapten | Number |
| `Usageid` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/GEO-Carpool/9c54-cmfx
</details>

<details><summary>GeoParkeerGarages</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areadesc` | AreaDesc | Text |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddataarea` | EndDataArea | Number |
| `Location` | Location | Point |
| `LocationAddress` | Location (address) | Text |
| `LocationCity` | Location (city) | Text |
| `LocationState` | Location (state) | Text |
| `LocationZip` | Location (zip) | Text |
| `Startdataarea` | StartDataArea | Number |
| `Usageid` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/GEO-Parkeer-Garages/t5pc-eb34
</details>

<details><summary>GeoPenr</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areadesc` | AreaDesc | Text |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddataarea` | EndDataArea | Number |
| `Location` | Location | Point |
| `LocationAddress` | Location (address) | Text |
| `LocationCity` | Location (city) | Text |
| `LocationState` | Location (state) | Text |
| `LocationZip` | Location (zip) | Text |
| `Startdataarea` | StartDataArea | Number |
| `Usageid` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/GEO-PenR/6wzd-evwu
</details>

<details><summary>HandelsbenamingUitvoering</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `HandelsbenamingFabrikant` | Handelsbenaming fabrikant | Text |
| `RegistratiedatumHandelsbenaming` | Registratiedatum handelsbenaming | Number |
| `RegistratiedatumHandelsbenamingDt` | Registratiedatum handelsbenaming_DT | Calendar date |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `Volgnummer` | Volgnummer handelsbenaming | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Handelsbenaming-Uitvoering/mdqe-txpd
</details>

<details><summary>KentekenVoertuigen</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `AanhangwagenAutonoomGeremd` | Aanhangwagen autonoom geremd | Number |
| `AanhangwagenMiddenasGeremd` | Aanhangwagen middenas geremd | Number |
| `AantalCilinders` | Aantal cilinders | Number |
| `AantalDeuren` | Aantal deuren | Number |
| `AantalRolstoelplaatsen` | Aantal rolstoelplaatsen | Number |
| `AantalStaanplaatsen` | Aantal staanplaatsen | Number |
| `AantalWielen` | Aantal wielen | Number |
| `AantalZitplaatsen` | Aantal zitplaatsen | Number |
| `AerodynVoorz` | Aerodynamische voorziening of uitrusting | Text |
| `AfstandHartKoppelingTotAchterzijdeVoertuig` | Afstand hart koppeling tot achterzijde voertuig | Number |
| `AfstandVoorzijdeVoertuigTotHartKoppeling` | Afstand voorzijde voertuig tot hart koppeling | Number |
| `AfwijkendeMaximumSnelheid` | Afwijkende maximum snelheid | Number |
| `ApiGekentekendeVoertuigenAssen` | API Gekentekende_voertuigen_assen | Text |
| `ApiGekentekendeVoertuigenBrandstof` | API Gekentekende_voertuigen_brandstof | Text |
| `ApiGekentekendeVoertuigenCarrosserie` | API Gekentekende_voertuigen_carrosserie | Text |
| `ApiGekentekendeVoertuigenCarrosserieSpecifiek` | API Gekentekende_voertuigen_carrosserie_specifiek | Text |
| `ApiGekentekendeVoertuigenVoertuigklasse` | API Gekentekende_voertuigen_voertuigklasse | Text |
| `Breedte` | Breedte | Number |
| `BreedteVoertuigMaximum` | Breedte voertuig maximum | Number |
| `BreedteVoertuigMinimum` | Breedte voertuig minimum | Number |
| `BrutoBpm` | Bruto BPM | Number |
| `Catalogusprijs` | Catalogusprijs | Number |
| `Cilinderinhoud` | Cilinderinhoud | Number |
| `CodeToelichtingTellerstandoordeel` | Code toelichting tellerstandoordeel | Text |
| `DatumEersteTenaamstellingInNederland` | Datum eerste tenaamstelling in Nederland | Number |
| `DatumEersteTenaamstellingInNederlandDt` | Datum eerste tenaamstelling in Nederland DT | Calendar date |
| `DatumEersteToelating` | Datum eerste toelating | Number |
| `DatumEersteToelatingDt` | Datum eerste toelating DT | Calendar date |
| `DatumTenaamstelling` | Datum tenaamstelling | Number |
| `DatumTenaamstellingDt` | Datum tenaamstelling DT | Calendar date |
| `EersteKleur` | Eerste kleur | Text |
| `EuropeseUitvoeringcategorieToevoeging` | Europese uitvoeringcategorie toevoeging | Text |
| `EuropeseVoertuigcategorie` | Europese voertuigcategorie | Text |
| `EuropeseVoertuigcategorieToevoeging` | Europese voertuigcategorie toevoeging | Text |
| `ExportIndicator` | Export indicator | Text |
| `GemLadingWrde` | Gemiddelde Lading Waarde | Number |
| `Handelsbenaming` | Handelsbenaming | Text |
| `HoogteVoertuig` | Hoogte voertuig | Number |
| `HoogteVoertuigMaximum` | Hoogte voertuig maximum | Number |
| `HoogteVoertuigMinimum` | Hoogte voertuig minimum | Number |
| `Inrichting` | Inrichting | Text |
| `JaarLaatsteRegistratieTellerstand` | Jaar laatste registratie tellerstand | Number |
| `Kenteken` | Kenteken | Text |
| `Laadvermogen` | Laadvermogen | Number |
| `Lengte` | Lengte | Number |
| `LengteVoertuigMaximum` | Lengte voertuig maximum | Number |
| `LengteVoertuigMinimum` | Lengte voertuig minimum | Number |
| `MassaAltAandr` | Additionele massa alternatieve aandrijving | Number |
| `MassaBedrijfsklaarMaximaal` | Massa bedrijfsklaar maximaal | Number |
| `MassaBedrijfsklaarMinimaal` | Massa bedrijfsklaar minimaal | Number |
| `MassaLedigVoertuig` | Massa ledig voertuig | Number |
| `MassaRijklaar` | Massa rijklaar | Number |
| `MaximaleConstructiesnelheid` | Maximale constructiesnelheid | Number |
| `MaximumLastOnderDeVoorasSenTezamenKoppeling` | Maximum last onder de vooras(sen) (tezamen)/koppeling | Number |
| `MaximumMassaSamenstelling` | Maximum massa samenstelling | Number |
| `MaximumMassaTechnischMaximaal` | Maximum massa technisch maximaal | Number |
| `MaximumMassaTechnischMinimaal` | Maximum massa technisch minimaal | Number |
| `MaximumMassaTrekkenOngeremd` | Maximum massa trekken ongeremd | Number |
| `MaximumOndersteunendeSnelheid` | Maximum ondersteunende snelheid | Number |
| `MaximumTrekkenMassaGeremd` | Maximum trekken massa geremd | Number |
| `Merk` | Merk | Text |
| `OpenstaandeTerugroepactieIndicator` | Openstaande terugroepactie indicator | Text |
| `OpleggerGeremd` | Oplegger geremd | Number |
| `PlaatsChassisnummer` | Plaats chassisnummer | Text |
| `RegistratieDatumGoedkeuringAfschrijvingsmomentBpm` | Registratie datum goedkeuring (afschrijvingsmoment BPM) | Number |
| `RegistratieDatumGoedkeuringAfschrijvingsmomentBpmDt` | Registratie datum goedkeuring (afschrijvingsmoment BPM) DT | Calendar date |
| `Rupsonderstelconfiguratiecode` | Rupsonderstelconfiguratiecode | Text |
| `SubcategorieNederland` | Subcategorie Nederland | Text |
| `TaxiIndicator` | Taxi indicator | Text |
| `TechnischToelaatbaarMassaKoppelpunt` | Technisch toelaatbaar massa koppelpunt | Number |
| `TechnischeMaxMassaVoertuig` | Technische max. massa voertuig | Number |
| `Tellerstandoordeel` | Tellerstandoordeel | Text |
| `TenaamstellenMogelijk` | Tenaamstellen mogelijk | Text |
| `ToegestaneMaximumMassaVoertuig` | Toegestane maximum massa voertuig | Number |
| `TweedeKleur` | Tweede kleur | Text |
| `Type` | Type | Text |
| `TypeGasinstallatie` | Type gasinstallatie | Text |
| `TypeRemsysteemVoertuigCode` | Type remsysteem voertuig code | Text |
| `Typegoedkeuringsnummer` | Typegoedkeuringsnummer | Text |
| `Uitvoering` | Uitvoering | Text |
| `Variant` | Variant | Text |
| `VerlCabInd` | Verlengde cabine indicator | Text |
| `VermogenMassarijklaar` | Vermogen massarijklaar | Number |
| `VerticaleBelastingKoppelpuntGetrokkenVoertuig` | Verticale belasting koppelpunt getrokken voertuig | Number |
| `VervaldatumApk` | Vervaldatum APK | Number |
| `VervaldatumApkDt` | Vervaldatum APK DT | Calendar date |
| `VervaldatumTachograaf` | Vervaldatum tachograaf | Number |
| `VervaldatumTachograafDt` | Vervaldatum tachograaf DT | Calendar date |
| `Voertuigsoort` | Voertuigsoort | Text |
| `VolgnummerWijzigingEuTypegoedkeuring` | Volgnummer wijziging EU typegoedkeuring | Number |
| `WachtOpKeuren` | Wacht op keuren | Text |
| `WamVerzekerd` | WAM verzekerd | Text |
| `Wielbasis` | Wielbasis | Number |
| `WielbasisVoertuigMaximum` | Wielbasis voertuig maximum | Number |
| `WielbasisVoertuigMinimum` | Wielbasis voertuig minimum | Number |
| `Zuinigheidsclassificatie` | Zuinigheidsclassificatie | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen/m9d7-ebf2
</details>

<details><summary>KentekenVoertuigenAssen</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `AangedrevenAs` | Aangedreven as | Text |
| `AantalAssen` | Aantal assen | Text |
| `AfstandTotVolgendeAsVoertuig` | Afstand tot volgende as voertuig | Number |
| `AfstandTotVolgendeAsVoertuigMaximum` | Afstand tot volgende as voertuig maximum | Number |
| `AfstandTotVolgendeAsVoertuigMinimum` | Afstand tot volgende as voertuig minimum | Number |
| `AsNummer` | As nummer | Text |
| `GeremdeAsIndicator` | Geremde as indicator | Text |
| `Hefas` | Hefas | Text |
| `Kenteken` | Kenteken | Text |
| `MaximumLastAsTechnischMaximum` | Maximum last as technisch maximum | Number |
| `MaximumLastAsTechnischMinimum` | Maximum last as technisch minimum | Number |
| `PlaatscodeAs` | Plaatscode as | Text |
| `Spoorbreedte` | Spoorbreedte | Text |
| `TechnischToegestaneMaximumAslast` | Technisch toegestane maximum aslast | Text |
| `WeggedragCode` | Weggedrag code | Text |
| `WettelijkToegestaneMaximumAslast` | Wettelijk toegestane maximum aslast | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_assen/3huj-srit
</details>

<details><summary>KentekenVoertuigenBijzonderheden</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `BijzonderheidCode` | Bijzonderheid code | Number |
| `BijzonderheidCode1` | Bijzonderheid code omschrijving | Text |
| `BijzonderheidEenheid` | Bijzonderheid eenheid | Text |
| `BijzonderheidVariabeleTekst` | Bijzonderheid variabele tekst | Text |
| `BijzonderheidVolgnummer` | Bijzonderheid volgnummer | Number |
| `Kenteken` | Kenteken | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_bijzonderhed/7ug8-2dtt
</details>

<details><summary>KentekenVoertuigenBrandstof</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `ActieRadiusEnkelElektrischStadWltp` | Actie radius enkel elektrisch stad wltp | Number |
| `ActieRadiusEnkelElektrischWltp` | Actie radius enkel elektrisch wltp | Number |
| `ActieRadiusExternOpladenStadWltp` | Actie radius extern opladen stad wltp | Number |
| `ActieRadiusExternOpladenWltp` | Actie radius extern opladen wltp | Number |
| `BrandstofOmschrijving` | Brandstof omschrijving | Text |
| `BrandstofVerbruikGecombineerdWltp` | Brandstof verbruik gecombineerd wltp | Number |
| `BrandstofVerbruikGewogenGecombineerdWltp` | Brandstof verbruik gewogen gecombineerd wltp | Number |
| `BrandstofVolgnummer` | Brandstof volgnummer | Text |
| `BrandstofverbruikBuiten` | Brandstofverbruik buiten de stad | Text |
| `BrandstofverbruikGecombineerd` | Brandstofverbruik gecombineerd | Text |
| `BrandstofverbruikStad` | Brandstofverbruik stad | Text |
| `Co2UitstootGecombineerd` | CO2 uitstoot gecombineerd | Text |
| `Co2UitstootGewogen` | CO2 uitstoot gewogen | Text |
| `ElektrischVerbruikEnkelElektrischWltp` | Elektrisch verbruik enkel elektrisch wltp | Number |
| `ElektrischVerbruikExternOpladenWltp` | Elektrisch verbruik extern opladen wltp | Number |
| `EmisCo2GewogenGecombineerdWltp` | Emissie co2 gewogen gecombineerd wltp | Number |
| `EmisDeeltjesType1Wltp` | Emissie deeltjes type1 wltp | Number |
| `EmissieCo2GecombineerdWltp` | Emissie co2 gecombineerd wltp | Number |
| `EmissiecodeOmschrijving` | Emissieklasse | Text |
| `GeluidsniveauRijdend` | Geluidsniveau rijdend | Text |
| `GeluidsniveauStationair` | Geluidsniveau stationair | Text |
| `Kenteken` | Kenteken | Text |
| `KlasseHybrideElektrischVoertuig` | Klasse hybride elektrisch voertuig | Text |
| `MaxVermogen15Minuten` | Max vermogen 15 minuten | Number |
| `MaxVermogen60Minuten` | Max vermogen 60 minuten | Number |
| `MilieuklasseEgGoedkeuringLicht` | Milieuklasse EG Goedkeuring (licht) | Text |
| `MilieuklasseEgGoedkeuringZwaar` | Milieuklasse EG Goedkeuring (zwaar) | Text |
| `NettoMaxVermogenElektrisch` | Netto max vermogen elektrisch | Number |
| `Nettomaximumvermogen` | Nettomaximumvermogen | Text |
| `NominaalContinuMaximumvermogen` | Nominaal continu maximumvermogen | Text |
| `OpgegevenMaximumSnelheid` | Opgegeven maximum snelheid | Number |
| `Roetuitstoot` | Roetuitstoot | Text |
| `ToerentalGeluidsniveau` | Toerental geluidsniveau | Text |
| `Uitlaatemissieniveau` | Uitlaatemissieniveau | Text |
| `UitstootDeeltjesLicht` | Uitstoot deeltjes (licht) | Text |
| `UitstootDeeltjesZwaar` | Uitstoot deeltjes (zwaar) | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_brandstof/8ys7-d773
</details>

<details><summary>KentekenVoertuigenCarrosserie</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CarrosserieVolgnummer` | Carrosserie volgnummer | Text |
| `Carrosserietype` | Carrosserietype | Text |
| `Kenteken` | Kenteken | Text |
| `TypeCarrosserieEuropeseOmschrijving` | Type Carrosserie Europese omschrijving | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie/vezc-m2t6
</details>

<details><summary>KentekenVoertuigenCarrosserieSpecificatie</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CarrosserieVoertuigNummerCodeVolgnummer` | Carrosserie voertuig nummer code volgnummer | Text |
| `CarrosserieVoertuigNummerEuropeseOmschrijving` | Carrosserie voertuig nummer Europese omschrijving | Text |
| `CarrosserieVolgnummer` | Carrosserie volgnummer | Text |
| `Carrosseriecode` | Carrosseriecode | Text |
| `Kenteken` | Kenteken | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_carrosserie_/jhie-znh9
</details>

<details><summary>KentekenVoertuigenRupsbanden</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `AangedrevenRupsbandIndicator` | Aangedreven rupsband indicator | Text |
| `GeremdeRupsbandIndicator` | Geremde rupsband indicator | Text |
| `Kenteken` | Kenteken | Text |
| `RupsbandSetVolgnr` | Rupsband set volgnummer | Number |
| `TechnischToelaatbaarMaximum` | Technisch toelaatbaar maximum massa rupsbandset | Number |
| `TechnischToelaatbaarMaximum1` | Technisch toelaatbaar maximum massa rupsband set minimum | Number |
| `TechnischToelaatbaarMaximum2` | Technisch toelaatbaar maximum massa rupsband set maximum | Number |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_rupsbanden/3xwf-ince
</details>

<details><summary>KentekenVoertuigenSubcategorieVoertuig</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Kenteken` | Kenteken | Text |
| `SubcategorieVoertuigEuropees` | Subcategorie voertuig europees | Text |
| `SubcategorieVoertuigEuropeesOmschrijving` | Subcategorie voertuig europees omschrijving | Text |
| `SubcategorieVoertuigVolgnummer` | Subcategorie voertuig volgnummer | Number |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_subcategorie/2ba7-embk
</details>

<details><summary>KentekenVoertuigenVoertuigklasse</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CarrosserieKlasseVolgnummer` | Carrosserie klasse volgnummer | Text |
| `CarrosserieVolgnummer` | Carrosserie volgnummer | Text |
| `Kenteken` | Kenteken | Text |
| `Voertuigklasse` | Voertuigklasse | Text |
| `VoertuigklasseOmschrijving` | Voertuigklasse omschrijving | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Gekentekende_voertuigen_voertuigklas/kmfi-hrps
</details>

<details><summary>Keuringen</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Kenteken` | Kenteken | Text |
| `VervaldatumKeuring` | Vervaldatum keuring | Number |
| `VervaldatumKeuringDt` | Vervaldatum keuring DT | Calendar date |

**Link:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Keuringen/vkij-7mwc
</details>

<details><summary>MeldingenKeuringsinstantie</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `ApiGebrekBeschrijving` | API Gebrek beschrijving | Text |
| `ApiGebrekConstateringen` | API Gebrek constateringen | Text |
| `Kenteken` | Kenteken | Text |
| `MeldDatumDoorKeuringsinstantie` | Meld datum door keuringsinstantie | Number |
| `MeldDatumDoorKeuringsinstantieDt` | Meld datum door keuringsinstantie DT | Calendar date |
| `MeldTijdDoorKeuringsinstantie` | Meld tijd door keuringsinstantie | Number |
| `SoortErkenningKeuringsinstantie` | Soort erkenning keuringsinstantie | Text |
| `SoortErkenningOmschrijving` | Soort erkenning omschrijving | Text |
| `SoortMeldingKiOmschrijving` | Soort melding ki omschrijving | Text |
| `VervaldatumKeuring` | Vervaldatum keuring | Number |
| `VervaldatumKeuringDt` | Vervaldatum keuring DT | Calendar date |

**Link:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Meldingen-Keuringsinstantie/sgfe-77wx
</details>

<details><summary>MerkUitvoeringToegestaan</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `MerkRegistratieDatum` | Merk registratie datum | Number |
| `MerkRegistratieDatumDt` | Merk registratie datum_DT | Calendar date |
| `Merkcode` | Merkcode | Text |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Merk-Uitvoering-Toegestaan/fj7t-hhik
</details>

<details><summary>MotorUitvoering</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `AantalCilinders` | Aantal cilinders | Number |
| `Brandstofcode` | Brandstofcode | Text |
| `BrandstofverbruikBuitenweg` | Brandstofverbruik buitenweg | Number |
| `BrandstofverbruikCombinRit` | Brandstofverbruik combin rit | Number |
| `BrandstofverbruikStadsrit` | Brandstofverbruik stadsrit | Number |
| `CilinderinhoudCm3` | Cilinderinhoud (cm3) | Number |
| `CngSysteem` | CNG Systeem | Text |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `ElectromotorAfFabriekIndicator` | Electromotor af fabriek indicator | Text |
| `EmissieCoBijKoudeStart` | Emissie co bij koude start | Number |
| `EmissieCo2Buitenweg` | Emissie co2 buitenweg | Number |
| `EmissieCo2Combinatierit` | Emissie co2 combinatierit | Number |
| `EmissieCo2Stadsrit` | Emissie co2 stadsrit | Number |
| `EmissieHcBijKoudeStart` | Emissie hc bij koude start | Number |
| `EmissieHcEnNox` | Emissie hc en nox | Number |
| `EmissieKoolmonoxide` | Emissie koolmonoxide | Number |
| `EmissieKoolwaterstof` | Emissie koolwaterstof | Number |
| `EmissieStikstofoxide` | Emissie stikstofoxide | Number |
| `EmissieVasteStofdeeltjes` | Emissie vaste stofdeeltjes | Number |
| `Emissiecode` | Emissieklasse | Text |
| `EnkelElectrischeIndicator` | Enkel electrische indicator | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `ExternOplaadbaar` | Extern oplaadbaar | Text |
| `GeluidsniveauBovengrens` | Geluidsniveau bovengrens | Number |
| `GeluidsniveauOndergrens` | Geluidsniveau ondergrens | Number |
| `GeluidsniveauRijdend` | Geluidsniveau rijdend | Number |
| `HybrideElektrischVoertuig` | Hybride elektrisch voertuig | Text |
| `KatalysatorIndicator` | Katalysator indicator | Text |
| `LpgSysteem` | LPG Systeem | Text |
| `LuchtInjectieIndicator` | Lucht injectie indicator | Text |
| `MaxVermogenContinuBovengrens` | Max vermogen continu bovengrens | Number |
| `MaxVermogenContinuOndergrens` | Max vermogen continu ondergrens | Number |
| `MotorRegistratiedatum` | Motor registratiedatum | Number |
| `MotorRegistratiedatumDt` | Motor registratiedatum_DT | Calendar date |
| `Motorcode` | Motorcode | Text |
| `RoetUitstoot` | Roet uitstoot | Number |
| `SoortInspuitingMotor` | Soort inspuiting motor | Text |
| `StationairToerentalBovengr` | Stationair toerental bovengr | Number |
| `StationairToerentalOndergr` | Stationair toerental ondergr | Number |
| `ToerentalGeluidsniveauBovengrens` | Toerental geluidsniveau bovengrens | Number |
| `ToerentalGeluidsniveauOndergrens` | Toerental geluidsniveau ondergrens | Number |
| `UitlaatgasCirculatieIndicator` | Uitlaatgas circulatie indicator | Text |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `VermogenBovengrens` | Vermogen bovengrens | Number |
| `VermogenOndergrens` | Vermogen ondergrens | Number |
| `VoertuigbrandstofType` | Voertuigbrandstof type | Text |
| `Volgnummer` | Volgnummer motor uitvoering | Number |
| `WerkingsbeginselVerbrandingsmotor` | Werkingsbeginsel verbrandingsmotor | Text |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering/g2s6-ehxa
</details>

<details><summary>MotorUitvoeringBrandstof</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `ActieradiusBrandstof` | Actieradius brandstof | Number |
| `ActieradiusBrandstofExternOplaadbaar` | Actieradius brandstof extern oplaadbaar | Number |
| `BrandstofVolgnummer` | Brandstof volgnummer | Number |
| `Brandstofcode` | Brandstofcode | Text |
| `BrandstofverbruikBuitenweg` | Brandstofverbruik buitenweg | Number |
| `BrandstofverbruikCombinRit` | Brandstofverbruik combin rit | Number |
| `BrandstofverbruikStadsrit` | Brandstofverbruik stadsrit | Number |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `ElektrischVerbruikCombinatie` | Elektrisch verbruik combinatie | Number |
| `ElektrischVerbruikGecomb` | Elektrisch verbruik gecomb | Number |
| `EmissieAantDeeltjesEscTest` | Emissie aant deeltjes esc test | Number |
| `EmissieAantDeeltjesEtcTest` | Emissie aant deeltjes etc test | Number |
| `EmissieAantDeeltjesT1Test` | Emissie aant deeltjes t1 test | Number |
| `EmissieCh4VolgensWhsc` | Emissie ch4 volgens whsc | Number |
| `EmissieCh4VolgensWhtc` | Emissie ch4 volgens whtc | Number |
| `EmissieCoBijKoudeStart` | Emissie co bij koude start | Number |
| `EmissieCoVolgensWhsc` | Emissie co volgens whsc | Number |
| `EmissieCoVolgensWhtc` | Emissie co volgens whtc | Number |
| `EmissieCo2Buitenweg` | Emissie co2 buitenweg | Number |
| `EmissieCo2Combinatierit` | Emissie co2 combinatierit | Number |
| `EmissieCo2Gecombineerd` | Emissie co2 gecombineerd | Number |
| `EmissieCo2Stadsrit` | Emissie co2 stadsrit | Number |
| `EmissieDeeltjesAantalWhsc` | Emissie deeltjes aantal whsc | Number |
| `EmissieDeeltjesAantalWhtc` | Emissie deeltjes aantal whtc | Number |
| `EmissieDeeltjesMassaWhsc` | Emissie deeltjes massa whsc | Number |
| `EmissieDeeltjesMassaWhtc` | Emissie deeltjes massa whtc | Number |
| `EmissieHcBijKoudeStart` | Emissie hc bij koude start | Number |
| `EmissieHcEnNoxType1` | Emissie hc en nox type1 | Number |
| `EmissieKoolmonaxideEtcTest` | Emissie koolmonaxide etc test | Number |
| `EmissieKoolmonoxideEscTest` | Emissie koolmonoxide esc test | Number |
| `EmissieKoolmonoxideType1` | Emissie koolmonoxide type 1 | Number |
| `EmissieKoolwaterstofType1` | Emissie koolwaterstof type 1 | Number |
| `EmissieKoolwaterstoffenEscTest` | Emissie koolwaterstoffen esc test | Number |
| `EmissieKoolwaterstoffenEtcTest` | Emissie koolwaterstoffen etc test | Number |
| `EmissieMethaanEtcTest` | Emissie methaan etc test | Number |
| `EmissieNh3VolgensWhsc` | Emissie nh3 volgens whsc | Number |
| `EmissieNh3VolgensWhtc` | Emissie nh3 volgens whtc | Number |
| `EmissieNmhcVolgensWhsc` | Emissie nmhc volgens whsc | Number |
| `EmissieNmhcVolgensWhtc` | Emissie nmhc volgens whtc | Number |
| `EmissieNonMethaanKoolwEtcTest` | Emissie non methaan koolw etc test | Number |
| `EmissieNoxVolgensWhsc` | Emissie nox volgens whsc | Number |
| `EmissieNoxVolgensWhtc` | Emissie nox volgens whtc | Number |
| `EmissieStikstofoxideType1` | Emissie stikstofoxide type 1 | Number |
| `EmissieStikstofoxidenEscTest` | Emissie stikstofoxiden esc test | Number |
| `EmissieStikstofoxidenEtcTest` | Emissie stikstofoxiden etc test | Number |
| `EmissieThcVolgensWhsc` | Emissie thc volgens whsc | Number |
| `EmissieThcVolgensWhtc` | Emissie thc volgens whtc | Number |
| `EmissieVasteStofdeeltjes` | Emissie vaste stofdeeltjes | Number |
| `EmissieVasteStofdeeltjesEscTest` | Emissie vaste stofdeeltjes esc test | Number |
| `EmissieVasteStofdeeltjesEtcTest` | Emissie vaste stofdeeltjes etc test | Number |
| `Emissiecode` | Emissieklasse | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `GeluidsniveauBovengrens` | Geluidsniveau bovengrens | Number |
| `GeluidsniveauOndergrens` | Geluidsniveau ondergrens | Number |
| `GeluidsniveauRijdend` | Geluidsniveau rijdend | Number |
| `LuchtInjectieIndicator` | Lucht injectie indicator | Text |
| `MaxVermogenContinuBovengrens` | Max vermogen continu bovengrens | Number |
| `MaxVermogenContinuOndergrens` | Max vermogen continu ondergrens | Number |
| `MaximaleBiobrandstofPercentage` | Maximale biobrandstof percentage | Number |
| `NettoMaxVermogenBovengrens` | Netto max vermogen bovengrens | Number |
| `NettoMaxVermogenOndergrens` | Netto max vermogen ondergrens | Number |
| `RoetUitstootAcc` | Roet uitstoot acc | Number |
| `RookwaardeElrTest` | Rookwaarde elr test | Number |
| `SoortInspuitingMotor` | Soort inspuiting motor | Text |
| `StationToerentalBovengrensAcc` | Station toerental bovengrens acc | Number |
| `StationToerentalOndergrensAcc` | Station toerental ondergrens acc | Number |
| `ToerentalMaxVermogenBovengrens` | Toerental max vermogen bovengrens | Number |
| `ToerentalMaxVermogenOndergrens` | Toerental max vermogen ondergrens | Number |
| `UitlaatgasCirculatieIndicator` | Uitlaatgas circulatie indicator | Text |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Text |
| `VerbruikGecombineerd` | Verbruik gecombineerd | Number |
| `VermogenBovengrens` | Vermogen bovengrens | Number |
| `VermogenOndergrens` | Vermogen ondergrens | Number |
| `Volgnummer` | Volgnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Motor-Uitvoering-Brandstof/5w6t-p66a
</details>

<details><summary>ParkerenBetaalmethodeGebied</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddate` | EndDatePaymentMethod | Text |
| `Paymentatexit` | PaymentAtExit | Number |
| `Paymentatpaystation` | PaymentAtPaystation | Number |
| `Paymentmethod` | PaymentMethod | Text |
| `Startdate` | StartDatePaymentMethod | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-GEBIED/r3rs-ibz5
</details>

<details><summary>ParkerenBetaalmethodeVerkooppunt</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Enddatepaymentmethod` | EndDatePaymentMethod | Text |
| `Paymentmethod` | PaymentMethod | Text |
| `Sellingpointnumber` | SellingPointNumber | Number |
| `Startdatepaymentmethod` | StartDatePaymentMethod | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-BETAALMETHODE-VERKOOPPUNT/j96a-7nhx
</details>

<details><summary>ParkerenContactpersoon</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Contactpersonid` | ContactPersonId | Text |
| `Emailaddress` | EmailAddress | Text |
| `Faxnumber` | FaxNumber | Text |
| `Firstname` | FirstName | Text |
| `Name` | Name | Text |
| `Phonenumber` | PhoneNumber | Text |
| `Position` | Position | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-CONTACTPERSOON/rbew-yhyc
</details>

<details><summary>ParkerenGebied</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areadesc` | AreaDesc | Text |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddatearea` | EndDateArea | Number |
| `Startdatearea` | StartDateArea | Number |
| `Usageid` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED/adw6-9hsg
</details>

<details><summary>ParkerenGebiedRegeling</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddatearearegulation` | EndDateAreaRegulation | Text |
| `Regulationid` | RegulationId | Text |
| `Startdatearearegulation` | StartDateAreaRegulation | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIED-REGELING/qtex-qwd8
</details>

<details><summary>ParkerenGebiedsbeheerder</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areamanagerdesc` | AreaManagerDesc | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddateareamanagerid` | EndDateAreaManagerId | Number |
| `Startdateareamanagerid` | StartDateAreaManagerId | Number |
| `Url` | URL | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBIEDSBEHEERDER/2uc2-nnv3
</details>

<details><summary>ParkerenGebruiksdoel</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddateusageid` | EndDateUsageId | Number |
| `Specificationindicator` | SpecificationIndicator | Text |
| `Startdateusageid` | StartDateUsageId | Number |
| `Superiorareamanagerid` | SuperiorAreaManagerId | Number |
| `Superiorusageid` | SuperiorUsageId | Text |
| `Usageid` | UsageId | Text |
| `Usageiddesc` | UsageIdDesc | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEBRUIKSDOEL/qidm-7mkf
</details>

<details><summary>ParkerenGeldigheidsinperking</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areaid` | AreaId | Text |
| `Areaidvalidityextension` | AreaIdValidityExtension | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddaytimeframevalidityrestriction` | EndDayTimeFrameValidityRestriction | Text |
| `Enddurationvalidityrestriction` | EndDurationValidityRestriction | Number |
| `Indexnumbervalidityrestriction` | IndexNumberValidityRestriction | Number |
| `Startdaytimeframevalidityrestriction` | StartDayTimeFrameValidityRestriction | Text |
| `Startdurationvalidityrestriction` | StartDurationValidityRestriction | Number |
| `Startvalidityextension` | StartValidityExtension | Text |
| `Usageid` | UsageId | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSINPERKING/ynha-fuwp
</details>

<details><summary>ParkerenGeldigheidsuitbreiding</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areaid` | AreaId | Text |
| `Areaidvalidityextension` | AreaIdValidityExtension | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Endvalidityextension` | EndValidityExtension | Text |
| `Startvalidityextension` | StartValidityExtension | Text |
| `Usageid` | UsageId | Text |
| `Validityextensiontype` | ValidityExtensionType | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GELDIGHEIDSUITBREIDING/8ff3-rxrk
</details>

<details><summary>ParkerenGeometrieGebied</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areageometryastext` | GeoDataAsText | Text |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddatearea` | EndDateArea | Calendar date |
| `Startdatearea` | StartDateArea | Calendar date |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEOMETRIE-GEBIED/nsk3-v9n7
</details>

<details><summary>ParkerenGeoVerkooppunt</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddatesellingpoint` | EndDateSellingPoint | Text |
| `Location` | Location | Point |
| `LocationAddress` | Location (address) | Text |
| `LocationCity` | Location (city) | Text |
| `LocationState` | Location (state) | Text |
| `LocationZip` | Location (zip) | Text |
| `Sellingpointdesc` | SellingPointDesc | Text |
| `Sellingpointid` | SellingPointId | Number |
| `Startdatesellingpoint` | StartDateSellingPoint | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GEO-VERKOOPPUNT/cgqw-pfbp
</details>

<details><summary>ParkerenGpsCoordinatenParkeerlocatie</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Enddatelocation` | EndDateLocation | Text |
| `Latitude` | Latitude | Number |
| `Locationreference` | LocationReference | Number |
| `Locationreferencetype` | LocationReferenceType | Text |
| `Longitude` | Longitude | Number |
| `Startdatelocation` | StartDateLocation | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-GPS-COÖRDINATEN-PARKEERLOCATIE/k3dr-ge3w
</details>

<details><summary>ParkerenIndexStatischEnDynamisch</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `DynamicParkingData` | Dynamic parking data | Checkbox |
| `Organization` | Organization | Text |
| `OrganizationId` | Organization ID | Number |
| `StandardStaticParkingData` | Standard static parking data | Text |
| `StaticParkingData` | Static parking data | Checkbox |
| `UrlDynamicParkingData` | URL dynamic parking data | Text |
| `UrlStaticParkingData` | URL static parking data | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-Index-Statisch-en-Dynamisch/f6v7-gjpa
</details>

<details><summary>ParkerenInUitgang</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Alias` | Alias | Text |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddateentranceorexit` | EndDateEntranceOrExit | Text |
| `Entranceexitid` | EntranceExitId | Number |
| `Pedestrianentrance` | PedestrianEntrance | Number |
| `Pedestrianexit` | PedestrianExit | Number |
| `Startdateentranceorexit` | StartDateEntranceOrExit | Text |
| `Vehicleentrance` | VehicleEntrance | Number |
| `Vehicleexit` | VehicleExit | Number |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-IN-UITGANG/c653-u9z2
</details>

<details><summary>ParkerenParkeeradres</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Country` | Country | Text |
| `Emailaddress` | EmailAddress | Text |
| `Faxnumber` | FaxNumber | Text |
| `Housenumber` | HouseNumber | Text |
| `Parkingaddressreference` | ParkingAddressReference | Number |
| `Parkingaddressreferencetype` | ParkingAddressReferenceType | Text |
| `Parkingaddresstype` | ParkingAddressType | Text |
| `Place` | Place | Text |
| `Province` | Province | Text |
| `Streetname` | StreetName | Text |
| `Telephonenumber` | TelephoneNumber | Text |
| `Zipcode` | ZipCode | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERADRES/ygq4-hh5q
</details>

<details><summary>ParkerenParkeergebied</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Areaname` | AreaName | Text |
| `Uuid` | UUID | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED/mz4f-59fw
</details>

<details><summary>ParkerenParkeergebiedContactpersoon</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Text |
| `Contactpersonid` | ContactPersonId | Text |
| `Validityendofperiod` | ValidityEndOfPeriod | Text |
| `Validitystartofperiod` | ValidityStartOfPeriod | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKEERGEBIED-CONTACTPERSOON/69hx-t283
</details>

<details><summary>ParkerenParkingOpen</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Endofperiod` | EndOfPeriod | Text |
| `Exitpossibleallday` | ExitPossibleAllDay | Number |
| `Openallyear` | OpenAllYear | Number |
| `Periodname` | PeriodName | Text |
| `Startofperiod` | StartOfPeriod | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-OPEN/figd-gux7
</details>

<details><summary>ParkerenParkingToegang</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Days` | Days | Text |
| `Endofperiod` | EndOfPeriod | Text |
| `Enterfrom` | EnterFrom | Number |
| `Enteruntil` | EnterUntil | Number |
| `Startofperiod` | StartOfPeriod | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-PARKING-TOEGANG/edv8-qiyg
</details>

<details><summary>ParkerenRegeling</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddateregulation` | EndDateRegulation | Text |
| `Maximumdaycharge` | MaximumDayCharge | Number |
| `Regulationdesc` | RegulationDesc | Text |
| `Regulationid` | RegulationId | Text |
| `Regulationtype` | RegulationType | Text |
| `Startdateregulation` | StartDateRegulation | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-REGELING/yefi-qfiq
</details>

<details><summary>ParkerenSpecialeDag</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areamanagerid` | AreaManagerId | Number |
| `Datespecialday` | DateSpecialDay | Number |
| `Namespecialday` | NameSpecialDay | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIALE-DAG/hpi4-mynq
</details>

<details><summary>ParkerenSpecificatiesParkeergebied</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Capacity` | Capacity | Number |
| `Chargingpointcapacity` | ChargingPointCapacity | Number |
| `Disabledaccess` | DisabledAccess | Number |
| `Enddatespecifications` | EndDateSpecifications | Text |
| `Limitedaccess` | LimitedAccess | Text |
| `Maximumvehicleheight` | MaximumVehicleHeight | Number |
| `Startdatespecifications` | StartDateSpecifications | Text |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s
</details>

<details><summary>ParkerenTariefberekening</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddatefare` | EndDateFare | Number |
| `Farecalculationcode` | FareCalculationCode | Text |
| `Farecalculationdesc` | FareCalculationDesc | Text |
| `Periodnametariff` | PeriodNameTariff | Text |
| `Startdatefare` | StartDateFare | Number |
| `Vatpercentage` | VATPercentage | Number |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFBEREKENING/nfzq-8g7y
</details>

<details><summary>ParkerenTariefdeel</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Amountcumulative` | AmountCumulative | Number |
| `Amountfarepart` | AmountFarePart | Number |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddatefarepart` | EndDateFarePart | Number |
| `Enddurationfarepart` | EndDurationFarePart | Number |
| `Farecalculationcode` | FareCalculationCode | Text |
| `Startdatefarepart` | StartDateFarePart | Number |
| `Startdurationfarepart` | StartDurationFarePart | Number |
| `Stepsizefarepart` | StepSizeFarePart | Number |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg
</details>

<details><summary>ParkerenTijdvak</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areamanagerid` | AreaManagerId | Number |
| `Claimrightpossible` | ClaimRightPossible | Text |
| `Daytimeframe` | DayTimeFrame | Text |
| `Enddatetimeframe` | EndDateTimeFrame | Text |
| `Endtimetimeframe` | EndTimeTimeFrame | Number |
| `Farecalculationcode` | FareCalculationCode | Text |
| `Maxdurationright` | MaxDurationRight | Number |
| `Minparkinginterruption` | MinParkingInterruption | Number |
| `Regulationid` | RegulationId | Text |
| `Startdatetimeframe` | StartDateTimeFrame | Text |
| `Starttimetimeframe` | StartTimeTimeFrame | Number |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TIJDVAK/ixf8-gtwq
</details>

<details><summary>ParkerenVerkooppunt</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Areaid` | AreaId | Text |
| `Areamanagerid` | AreaManagerId | Number |
| `Enddatesellingpoint` | EndDateSellingPoint | Number |
| `Sellingpointdesc` | SellingPointDesc | Text |
| `Sellingpointid` | SellingPointId | Number |
| `Sellingpointnumber` | SellingPointNumber | Number |
| `Startdatesellingpoint` | StartDateSellingPoint | Number |

**Link:** https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-VERKOOPPUNT/fk68-nf2y
</details>

<details><summary>PlaatsaanduidingUitvoering</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `PlaatsAanduidingVolgnummer` | Plaats aanduiding volgnummer | Number |
| `PlaatsaanduidingRegistratieDatum` | Plaatsaanduiding registratie datum | Number |
| `PlaatsaanduidingRegistratieDatumDt` | Plaatsaanduiding registratie datum_DT | Calendar date |
| `PlaatscodeVoeruigIdentificatie` | Plaatscode voeruig identificatie | Text |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Plaatsaanduiding-Uitvoering/mt8t-4ep4
</details>

<details><summary>ProductenCatalogus</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Eenheid` | Eenheid | Text |
| `Omschrijving` | Omschrijving | Text |
| `StaatscourantIndeling` | Staatscourant indeling | Text |
| `Tarief` | Tarief | Text |
| `Tariefclustering` | Tariefclustering | Text |

**Link:** https://opendata.rdw.nl/Product-catalogus/Open-Data-RDW-Producten-Catalogus/v23s-d6km
</details>

<details><summary>SubcategorieUitvoering</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `SubcategUitvoeringEuropees` | Subcateg uitvoering europees | Text |
| `SubcategorieUitvoeringVolgnr` | Subcategorie uitvoering volgnr | Number |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Subcategorie-Uitvoering/h9pa-e9ta
</details>

<details><summary>TellerstandoordeelTrendToelichting</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CodeToelichtingTellerstandoordeel` | Code toelichting tellerstandoordeel | Text |
| `ToelichtingTellerstandoordeel` | Toelichting tellerstandoordeel | Text |

**Link:** https://opendata.rdw.nl/Voertuigen/Open-Data-RDW-Tellerstandoordeel-Trend-Toelichting/jqs4-4kvw
</details>

<details><summary>TerugroepActie</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `ApiTerugroepActieRisico` | API Terugroep_actie_risico | Text |
| `ApiTerugroepActieStatus` | API Terugroep_ actie_status | Text |
| `ApiTerugroepInfomerenEigenaar` | API Terugroep_infomeren_eigenaar | Text |
| `ApiTerugroepVoertuigMerkType` | API Terugroep_voertuig_merk_type | Text |
| `BeschrijvingVanHetHerstel` | Beschrijving van het herstel | Text |
| `CategorieDefect` | Categorie defect | Text |
| `DatumAankondigingProducent` | Datum aankondiging producent | Number |
| `DatumAankondigingProducentDt` | Datum aankondiging producent_DT | Calendar date |
| `DatumEigenarenGeNformeerd` | Datum eigenaren genformeerd | Number |
| `DatumEigenarenGeNformeerdDt` | Datum eigenaren genformeerd_DT | Calendar date |
| `DatumInformerenEigenaar` | Datum informeren eigenaar | Number |
| `DatumInformerenEigenaarDt` | Datum informeren eigenaar_DT | Calendar date |
| `DatumMeldingBijRdw` | Datum melding bij RDW | Number |
| `DatumMeldingBijRdwDt` | Datum melding bij RDW_DT | Calendar date |
| `MateriLeGevolgen` | Materile gevolgen | Text |
| `MeerInformatieOpInternet` | Meer informatie op internet | Text |
| `MeerInformatieViaTelefoonnummer` | Meer informatie via telefoonnummer | Text |
| `MeldendeProducentDistributeur` | Meldende producent/distributeur | Text |
| `NationaalOpgegevenAantalVoertuigenTerugroepactie` | Nationaal opgegeven aantal voertuigen terugroepactie | Number |
| `OmschrijvingDefect` | Omschrijving defect | Text |
| `OpmerkingenRdw` | Opmerkingen RDW | Text |
| `PublicatiedatumRdw` | Publicatiedatum RDW | Number |
| `PublicatiedatumRdwDt` | Publicatiedatum RDW_DT | Calendar date |
| `ReferentiecodeProducent` | Referentiecode producent | Text |
| `ReferentiecodeRdw` | Referentiecode RDW | Text |
| `RisicobeoordelingRdw` | Risicobeoordeling RDW | Text |
| `TotaalAantalVoertuigenTerugroepactie` | Totaal aantal voertuigen terugroepactie | Number |

**Link:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie/j9yg-7rg9
</details>

<details><summary>TerugroepActieRisico</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CodeMogelijkGevaar` | Code mogelijk gevaar | Text |
| `MogelijkGevaar` | Mogelijk gevaar | Text |
| `ReferentiecodeRdw` | Referentiecode RDW | Text |

**Link:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_risico/9ihi-jgpf
</details>

<details><summary>TerugroepActieStatus</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CodeStatus` | Code Status | Text |
| `Kenteken` | Kenteken | Text |
| `ReferentiecodeRdw` | Referentiecode RDW | Text |
| `Status` | Status | Text |

**Link:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_actie_status/t49b-isb7
</details>

<details><summary>TerugroepInformerenEigenaar</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CodeWijzeInformeren` | Code wijze informeren | Text |
| `ReferentiecodeRdw` | Referentiecode RDW | Text |
| `WijzeWaaropUWordtGeNformeerd` | Wijze waarop u wordt genformeerd | Text |

**Link:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_informeren_eigenaar/mh8w-8cup
</details>

<details><summary>TerugroepVoertuigMerkType</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `Merk` | Merk | Text |
| `ReferentiecodeRdw` | Referentiecode RDW | Text |
| `Type` | Type | Text |

**Link:** https://opendata.rdw.nl/Terugroepacties/Open-Data-RDW-Terugroep_voertuig_merk_type/mu2x-mu5e
</details>

<details><summary>TestProducerApi</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `CarrosserieKlasseEuropees` | Carrosserie klasse europees | Text |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Number |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `Uniekecode` | UniekeCode | Text |

**Link:** https://opendata.rdw.nl/dataset/Test_Producer_API/sgwh-cvkk
</details>

<details><summary>ToegevoegdeObjecten</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `ClassificatieToegevoegdObj` | Classificatie toegevoegd obj | Text |
| `Demontagedatum` | Demontagedatum | Number |
| `DemontagedatumDt` | Demontagedatum DT | Calendar date |
| `GasinstallatieTankInhoud` | Gasinstallatie tank inhoud | Number |
| `Kenteken` | Kenteken | Text |
| `MerkObjectToegevoegd` | Merk object toegevoegd | Text |
| `MerkcodeToegevoegdObject` | Merkcode toegevoegd object | Text |
| `Montagedatum` | Montagedatum | Number |
| `MontagedatumDt` | Montagedatum DT | Calendar date |
| `SoortToeTeVoegenObjectOmschrijving` | Soort toe te voegen object omschrijving | Text |
| `UitvoeringsVolgnrToegevObj` | Uitvoerings volgnr toegev obj | Number |

**Link:** https://opendata.rdw.nl/Keuringen/Open-Data-RDW-Toegevoegde-Objecten/sghb-dzxx
</details>

<details><summary>UitvoeringGebruiksgegevensPerUitgave</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `UitvgavenummerVerbruikboek` | Uitvgavenummer verbruikboek | Text |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `VerbruikcategorieUitvoering` | Verbruikcategorie uitvoering | Text |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Uitvoering-Gebruiksgegevens-Per-Uitg/2822-t8sx
</details>

<details><summary>VersnellingsbakUitvoering</summary>

### Fields

| FieldName | Name | Type |
| --- | --- | --- |
| `AantalVersnellingenBovengrens` | Aantal versnellingen bovengrens | Number |
| `AantalVersnellingenOndergrens` | Aantal versnellingen ondergrens | Number |
| `EegUitvoeringscode` | EEG Uitvoeringscode | Text |
| `EegVariantcode` | EEG variantcode | Text |
| `EuTypeGoedkeuringssleutel` | EU Type goedkeuringssleutel | Text |
| `TypeVersnellingsbak` | Type versnellingsbak | Text |
| `UitvoeringWijzigingsnummer` | Uitvoering wijzigingsnummer | Number |
| `Volgnummer` | Volgnummer versnellingsbak | Number |

**Link:** https://opendata.rdw.nl/Typegoedkeuring/Open-Data-RDW-Versnellingsbak-Uitvoering/r7cw-67gs
</details>

<!-- END FUNCTIONS -->

## License

MIT
