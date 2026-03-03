"use client";
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GalleryLightbox from '../../components/GalleryLightbox';

type Category = { id: string; title: string };

const categories: Category[] = [
  { id: 'pret-zebrowany', title: 'Pręt żebrowany' },
  { id: 'pret-okragly', title: 'Pręt okrągły gładki' },
  { id: 'pret-kwadratowy', title: 'Pręt kwadratowy' },
  { id: 'pret-plaski', title: 'Pręt płaski' },
  { id: 'blacha', title: 'Blacha' },
  { id: 'rura-okragla', title: 'Rura okrągła' },
  { id: 'profil-zamkniety', title: 'Profil zamknięty' },
  { id: 'ceownik-zg', title: 'Ceownik Z/G' },
  { id: 'katownik-zg', title: 'Kątownik Z/G' },
  { id: 'dwuteownik', title: 'Dwuteownik' },
  { id: 'ceownik-gw', title: 'Ceownik G/W' },
  { id: 'katownik-gw', title: 'Kątownik G/W' },
  { id: 'siatki', title: 'Siatki ogrodzeniowe' },
  { id: 'ogrodzenia', title: 'Ogrodzenia / Panele' },
  { id: 'produkcja', title: 'Produkcja zbrojeń' },
];

// Reusable table style helpers
const TH = ({ children }: { children: React.ReactNode }) => (
  <th className="py-2.5 px-4 text-left text-[11px] font-semibold uppercase tracking-widest text-[#86868b] bg-[#111] border-b border-white/[0.06]">{children}</th>
);
const TD = ({ children, bold }: { children: React.ReactNode; bold?: boolean }) => (
  <td className={`py-2 px-4 border-b border-white/[0.04] text-sm ${bold ? 'font-semibold text-white' : 'text-[#86868b]'}`}>{children}</td>
);
const TR = ({ children }: { children: React.ReactNode }) => (
  <tr className="hover:bg-white/[0.03] transition-colors">{children}</tr>
);
const SteelNote = () => (
  <div className="mt-6 text-xs text-[#555] border-t border-white/[0.06] pt-4 space-y-1">
    <p>Gatunek S235JR wg. EN 10025</p>
    <p>Stal niestopowa konstrukcyjna ogólnego przeznaczenia.</p>
    <p>Stal stosowana na konstrukcje spawane, nośne i obciążone dynamicznie.</p>
  </div>
);
const ProductImg = ({ seed }: { seed: number }) => (
  <GalleryLightbox
    images={[`https://picsum.photos/400/280?random=${seed}`]}
    gridClassName="w-full md:w-72 mb-6"
    imageClassName="w-full h-48 rounded-xl opacity-80"
  />
);

function renderContent(activeTab: string) {
  switch (activeTab) {
    case 'pret-zebrowany':
      return (
        <div>
          <ProductImg seed={101} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">W ofercie posiadamy pręty żebrowane do zbrojenia betonu w gatunkach: B500SP oraz BST500S</p>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla prętów żebrowanych</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>
          <div className="overflow-x-auto"><table className="min-w-[200px] rounded-xl overflow-hidden border border-white/[0.06]">
            <thead><tr><TH>Asortyment</TH><TH>kg/mb</TH></tr></thead>
            <tbody>
              {[['8', '0,400'], ['10', '0,620'], ['12', '0,890'], ['14', '1,210'], ['16', '1,580'], ['18', '2,000'], ['20', '2,470'], ['25', '3,850']].map(([s, w]) => (
                <TR key={s}><TD bold>Pręt żebr. {s}</TD><TD>{w}</TD></TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    case 'pret-okragly':
      return (
        <div>
          <ProductImg seed={102} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">W ciągłej sprzedaży posiadamy pręty okrągłe gładkie w zakresie średnic 5-50 mm</p>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla prętów okrągłych gładkich</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>
          <div className="overflow-x-auto"><table className="min-w-[200px] rounded-xl overflow-hidden border border-white/[0.06]">
            <thead><tr><TH>Asortyment</TH><TH>kg/mb</TH></tr></thead>
            <tbody>
              {[['6', '0,220'], ['8', '0,390'], ['10', '0,620'], ['12', '0,890'], ['14', '1,210'], ['16', '1,580'], ['18', '2,000'], ['20', '2,470'], ['25', '3,850'], ['30', '5,550'], ['40', '9,860'], ['50', '15,410']].map(([s, w]) => (
                <TR key={s}><TD bold>Pręt okr. gładki {s}</TD><TD>{w}</TD></TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    case 'pret-kwadratowy':
      return (
        <div>
          <ProductImg seed={103} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">Oferujemy ciągnione pręty kwadratowe w najbardziej popularnych gatunkach S235JR oraz S235JRH</p>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla prętów kwadratowych</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>
          <div className="overflow-x-auto"><table className="min-w-[200px] rounded-xl overflow-hidden border border-white/[0.06]">
            <thead><tr><TH>Asortyment</TH><TH>kg/mb</TH></tr></thead>
            <tbody>
              {[['8', '0,500'], ['10', '0,790'], ['12', '1,130'], ['14', '1,540'], ['16', '2,010'], ['18', '2,540'], ['20', '3,140']].map(([s, w]) => (
                <TR key={s}><TD bold>Pręt kwadrat {s}</TD><TD>{w}</TD></TR>
              ))}
            </tbody>
          </table></div>
          <SteelNote />
        </div>
      );
    case 'pret-plaski':
      return (
        <div>
          <ProductImg seed={104} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">W ciągłej sprzedaży posiadamy szeroki wachlarz prętów płaskich</p>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla prętów płaskich</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>
          <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                <tr><TH>Grubość [H] \ Szerokość [S]</TH><TH>4</TH><TH>5</TH><TH>6</TH><TH>8</TH><TH>10</TH><TH>12</TH></tr>
              </thead>
              <tbody>
                {[
                  ['20', '0,628', '0,785', '0,942', '1,256', '1,570', '1,884'],
                  ['25', '0,785', '0,981', '1,178', '1,570', '1,963', '2,355'],
                  ['30', '0,942', '1,178', '1,413', '1,884', '2,355', '2,826'],
                  ['35', '1,099', '1,374', '1,649', '2,198', '2,748', '3,297'],
                  ['40', '1,256', '1,570', '1,884', '2,512', '3,140', '3,768'],
                  ['45', '1,413', '1,766', '2,120', '2,826', '3,533', '4,239'],
                  ['50', '1,570', '1,963', '2,355', '3,140', '3,925', '4,710'],
                  ['60', '1,884', '2,355', '2,826', '3,768', '4,710', '5,652'],
                  ['70', '2,198', '2,748', '3,297', '4,396', '5,495', '6,594'],
                  ['80', '2,512', '3,140', '3,768', '5,024', '6,280', '7,536'],
                  ['90', '2,826', '3,533', '4,239', '5,652', '7,065', '8,478'],
                  ['100', '3,140', '3,925', '4,710', '6,280', '7,850', '9,420'],
                  ['110', '3,454', '4,318', '5,181', '6,908', '8,635', '10,362'],
                  ['120', '3,768', '4,710', '5,652', '7,536', '9,420', '11,304'],
                  ['130', '4,082', '5,103', '6,123', '8,164', '10,205', '12,246'],
                  ['140', '4,396', '5,495', '6,594', '8,792', '10,990', '13,188'],
                  ['150', '4,710', '5,888', '7,065', '9,420', '11,775', '14,130'],
                ].map(([h, ...vals]) => (
                  <TR key={h}><TD bold>{h}</TD>{vals.map((v, i) => <TD key={i}>{v}</TD>)}</TR>
                ))}
              </tbody>
            </table></div>
          <SteelNote />
        </div>
      );
    case 'blacha':
      return (
        <div>
          <ProductImg seed={105} />
          <p className="text-[#86868b] text-sm mt-5 mb-1">Posiadamy na stanie szeroki asortyment blach walcowanych zarówno na zimno jak i na gorąco.</p>
          <p className="text-[#86868b] text-sm mb-2">Na zamówienie sprowadzić możemy blachy kotłowe, trudnościeralne, wysokowytrzymałościowe, ryflowane.</p>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla blach gładkich i ryflowanych</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>

          <p className="text-xs font-semibold uppercase tracking-widest text-[#86868b] mb-3">Blachy gładkie</p>
          <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative mb-6">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                <tr><TH>Format [SxD] \ Grubość [H]</TH><TH>1000×2000</TH><TH>1250×2500</TH><TH>1500×3000</TH></tr>
              </thead>
              <tbody>
                {[
                  ['0,5', '7,85', '12,27', '17,66'],
                  ['0,8', '12,56', '19,63', '28,26'],
                  ['1', '15,70', '24,53', '35,33'],
                  ['1,5', '23,55', '36,80', '52,99'],
                  ['2', '31,40', '49,06', '70,65'],
                  ['2,5', '39,25', '61,33', '88,31'],
                  ['3', '47,10', '73,59', '105,98'],
                  ['3,5', '54,95', '85,86', '123,64'],
                  ['4', '62,80', '98,13', '141,30'],
                  ['5', '78,50', '122,66', '176,63'],
                  ['6', '94,20', '147,19', '211,95'],
                  ['7', '109,90', '171,72', '247,28'],
                  ['8', '125,60', '196,25', '282,60'],
                  ['9', '141,30', '220,78', '317,93'],
                  ['10', '157,00', '245,31', '353,25'],
                ].map(([h, ...v]) => (
                  <TR key={h}><TD bold>{h}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
                ))}
              </tbody>
            </table></div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#86868b] mb-3">Blachy ryflowane łezkowe</p>
          <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                <tr><TH>Format [SxD] \ Grubość [H]</TH><TH>1000×2000</TH><TH>1250×2500</TH><TH>1500×3000</TH></tr>
              </thead>
              <tbody>
                {[
                  ['2,5', '43,60', '68,13', '98,10'],
                  ['3', '51,60', '80,63', '116,10'],
                  ['3,5', '60,20', '94,06', '135,45'],
                  ['4', '68,20', '106,56', '153,45'],
                  ['4,5', '76,00', '118,75', '171,00'],
                  ['5', '84,00', '131,25', '189,00'],
                  ['6', '101,00', '157,81', '227,25'],
                  ['7', '117,20', '183,13', '263,70'],
                  ['8', '133,40', '208,44', '300,15'],
                  ['9', '148,80', '232,50', '334,80'],
                  ['10', '165,20', '258,13', '371,70'],
                ].map(([h, ...v]) => (
                  <TR key={h}><TD bold>{h}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
                ))}
              </tbody>
            </table></div>
          <SteelNote />
        </div>
      );
    case 'rura-okragla':
      return (
        <div>
          <ProductImg seed={106} />
          <p className="text-[#86868b] text-sm mt-5 mb-1">Na stanie posiadamy szeroki asortyment rur:</p>
          <ul className="list-disc pl-5 text-[#86868b] text-sm mb-4 space-y-0.5">
            <li>Rury czarne ze szwem</li>
            <li>Rury czarne bezszwowe</li>
            <li>Rury ocynkowane</li>
          </ul>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla rur czarnych ze szwem</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>
          <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative mt-5">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                <tr><TH>Ścianka [C] \ Średnica [S]</TH><TH>2</TH><TH>2,3</TH><TH>2,6</TH><TH>2,9</TH><TH>3,2</TH><TH>3,6</TH><TH>4</TH></tr>
              </thead>
              <tbody>
                {[
                  ['17,2', '0,75', '0,85', '0,94', '1,02', '1,10', '1,21', '1,30'],
                  ['21,3', '0,95', '1,08', '1,20', '1,32', '1,43', '1,57', '1,71'],
                  ['26,9', '1,23', '1,40', '1,56', '1,72', '1,87', '2,07', '2,26'],
                  ['33,7', '1,56', '1,78', '1,99', '2,20', '2,41', '2,67', '2,93'],
                  ['42,4', '1,99', '2,27', '2,55', '2,82', '3,09', '3,44', '3,79'],
                  ['48,3', '2,28', '2,61', '2,93', '3,25', '3,56', '3,97', '4,37'],
                  ['60,3', '2,88', '3,29', '3,70', '4,11', '4,51', '5,03', '5,55'],
                  ['76,1', '3,65', '4,19', '4,71', '5,24', '5,75', '6,44', '7,11'],
                  ['88,9', '4,29', '4,91', '5,53', '6,15', '6,76', '7,57', '8,38'],
                  ['114,3', '5,54', '6,35', '7,16', '7,97', '8,77', '9,83', '10,88'],
                  ['139,7', '', '', '8,79', '9,78', '10,77', '12,08', '13,39'],
                  ['168,3', '', '', '10,62', '11,83', '13,03', '14,62', '16,21'],
                  ['219,1', '', '', '', '', '17,04', '19,13', '21,22'],
                ].map(([d, ...v]) => (
                  <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
                ))}
              </tbody>
            </table></div>
          <SteelNote />
        </div>
      );
    case 'profil-zamkniety':
      return (
        <div>
          <ProductImg seed={20} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">Nasza oferta obejmuje szeroki asortyment profili zamkniętych kwadratowych i prostokątnych</p>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla profili zamkniętych</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Tabela Kwadratowa */}
            <div>
              <p className="text-white font-semibold mb-3 text-sm">Profile zamknięte kwadratowe</p>
              <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                    <tr><TH>Ścianka [C] \ Wymiar [HxS]</TH><TH>1,5</TH><TH>2</TH><TH>3</TH><TH>4</TH><TH>5</TH><TH>6</TH><TH>8</TH></tr>
                  </thead>
                  <tbody>
                    {[
                      ['15', '0,64', '0,82', '1,13', '', '', '', ''],
                      ['20', '0,87', '1,13', '1,60', '', '', '', ''],
                      ['25', '1,11', '1,44', '2,07', '', '', '', ''],
                      ['30', '1,34', '1,76', '2,54', '', '', '', ''],
                      ['35', '1,58', '2,07', '3,01', '', '', '', ''],
                      ['40', '1,81', '2,39', '3,49', '4,52', '', '', ''],
                      ['45', '2,05', '2,70', '3,96', '5,15', '', '', ''],
                      ['50', '2,28', '3,01', '4,43', '5,78', '7,07', '8,29', ''],
                      ['60', '', '3,64', '5,37', '7,03', '8,63', '10,17', ''],
                      ['70', '', '4,27', '6,31', '8,29', '10,21', '12,06', ''],
                      ['75', '', '4,58', '6,78', '8,92', '10,99', '13,00', ''],
                      ['80', '', '4,90', '7,25', '9,55', '11,78', '13,94', ''],
                      ['90', '', '5,53', '8,20', '10,80', '13,35', '15,83', '20,60'],
                      ['100', '', '6,15', '9,14', '12,06', '14,92', '17,71', '23,11'],
                      ['110', '', '', '10,08', '13,31', '16,49', '19,59', '25,62'],
                      ['120', '', '', '11,02', '14,57', '18,06', '21,48', '28,13'],
                      ['125', '', '', '11,49', '15,20', '18,84', '22,42', '29,39'],
                      ['130', '', '', '11,96', '15,83', '19,63', '23,36', '30,65'],
                      ['140', '', '', '12,91', '17,08', '21,20', '25,25', '33,16'],
                      ['150', '', '', '', '18,34', '22,77', '27,13', '35,67'],
                      ['160', '', '', '', '19,59', '24,34', '29,01', '38,18'],
                      ['180', '', '', '', '22,11', '27,48', '32,78', '43,21'],
                      ['200', '', '', '', '', '30,62', '36,55', '48,23']
                    ].map(([d, ...v]) => (
                      <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tabela Prostokątna */}
            <div>
              <p className="text-white font-semibold mb-3 text-sm">Profile zamknięte prostokątne</p>
              <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                    <tr><TH>Ścianka [C] \ Wymiar [HxS]</TH><TH>1,5</TH><TH>2</TH><TH>3</TH><TH>4</TH><TH>5</TH><TH>6</TH><TH>8</TH></tr>
                  </thead>
                  <tbody>
                    {[
                      ['25x20', '0,99', '1,29', '1,84', '', '', '', ''],
                      ['30x10', '0,87', '1,13', '1,60', '', '', '', ''],
                      ['30x15', '0,99', '1,29', '1,84', '', '', '', ''],
                      ['30x18', '1,06', '1,38', '1,98', '', '', '', ''],
                      ['30x20', '1,11', '1,44', '2,07', '', '', '', ''],
                      ['30x25', '1,22', '1,60', '2,31', '', '', '', ''],
                      ['34x24', '1,30', '1,70', '2,45', '', '', '', ''],
                      ['35x15', '1,11', '1,44', '2,07', '', '', '', ''],
                      ['35x20', '1,22', '1,60', '2,31', '', '', '', ''],
                      ['35x25', '1,34', '1,76', '2,54', '', '', '', ''],
                      ['40x10', '1,11', '1,44', '2,07', '', '', '', ''],
                      ['40x15', '1,22', '1,60', '2,31', '', '', '', ''],
                      ['40x20', '1,34', '1,76', '2,54', '', '', '', ''],
                      ['40x25', '1,46', '1,92', '2,78', '', '', '', ''],
                      ['40x27', '1,51', '1,98', '2,87', '', '', '', ''],
                      ['40x30', '1,58', '2,07', '3,01', '', '', '', ''],
                      ['40x35', '1,70', '2,23', '3,25', '', '', '', ''],
                      ['45x15', '1,34', '1,76', '2,54', '', '', '', ''],
                      ['45x20', '1,46', '1,92', '2,78', '', '', '', ''],
                      ['45x25', '1,58', '2,07', '3,01', '', '', '', ''],
                      ['45x30', '1,70', '2,23', '3,25', '', '', '', ''],
                      ['45x35', '1,81', '2,39', '3,49', '', '', '', ''],
                      ['50x20', '1,58', '2,07', '3,01', '', '', '', ''],
                      ['50x25', '1,70', '2,23', '3,25', '4,21', '', '', ''],
                      ['50x30', '1,81', '2,39', '3,49', '4,52', '', '', ''],
                      ['50x35', '1,93', '2,54', '3,72', '4,84', '', '', ''],
                      ['50x40', '2,05', '2,70', '3,96', '5,15', '', '', ''],
                      ['60x20', '1,81', '2,39', '3,49', '4,52', '', '', ''],
                      ['60x25', '1,93', '2,54', '3,72', '4,84', '', '', ''],
                      ['60x30', '2,05', '2,70', '3,96', '5,15', '', '', ''],
                      ['60x35', '2,17', '2,86', '4,19', '5,46', '', '', ''],
                      ['60x40', '2,28', '3,01', '4,43', '5,78', '7,07', '8,29', ''],
                      ['60x50', '2,52', '3,33', '4,90', '6,41', '7,85', '9,23', ''],
                      ['70x20', '2,05', '2,70', '3,96', '5,15', '6,28', '7,35', ''],
                      ['70x25', '2,17', '2,86', '4,19', '5,46', '6,67', '7,82', ''],
                      ['70x30', '2,28', '3,01', '4,43', '5,78', '7,07', '8,29', ''],
                      ['70x35', '2,40', '3,17', '4,66', '6,09', '7,46', '8,76', ''],
                      ['70x40', '2,52', '3,33', '4,90', '6,41', '7,85', '9,23', ''],
                      ['70x50', '2,76', '3,64', '5,37', '7,03', '8,64', '10,17', ''],
                      ['70x60', '2,99', '3,96', '5,84', '7,66', '9,42', '11,12', ''],
                      ['80x20', '2,28', '3,01', '4,43', '5,78', '7,07', '8,29', ''],
                      ['80x30', '2,52', '3,33', '4,90', '6,41', '7,85', '9,23', ''],
                      ['80x40', '2,76', '3,64', '5,37', '7,03', '8,64', '10,17', ''],
                      ['80x50', '', '3,96', '5,84', '7,66', '9,42', '11,12', ''],
                      ['80x60', '', '4,27', '6,31', '8,29', '10,21', '12,06', ''],
                      ['80x70', '', '4,58', '6,78', '8,92', '10,99', '13,00', ''],
                      ['90x20', '', '3,33', '4,90', '6,41', '7,85', '9,23', ''],
                      ['90x50', '', '4,27', '6,31', '8,29', '10,21', '12,06', ''],
                      ['90x60', '', '4,58', '6,78', '8,92', '10,99', '13,00', ''],
                      ['100x20', '', '3,64', '5,37', '7,03', '8,64', '10,17', ''],
                      ['100x30', '', '3,96', '5,84', '7,66', '9,42', '11,12', ''],
                      ['100x40', '', '4,27', '6,31', '8,29', '10,21', '12,06', ''],
                      ['100x50', '', '4,58', '6,78', '8,92', '10,99', '13,00', ''],
                      ['100x60', '', '4,90', '7,25', '9,55', '11,78', '13,94', ''],
                      ['100x70', '', '5,21', '7,72', '10,17', '12,56', '14,88', ''],
                      ['100x80', '', '5,53', '8,20', '10,80', '13,35', '15,83', '20,60'],
                      ['120x30', '', '4,58', '6,78', '8,92', '10,99', '13,00', '16,83'],
                      ['120x40', '', '4,90', '7,25', '9,55', '11,78', '13,94', '18,09'],
                      ['120x50', '', '5,21', '7,72', '10,17', '12,56', '14,88', '19,34'],
                      ['120x60', '', '5,53', '8,20', '10,80', '13,35', '15,83', '20,60'],
                      ['120x80', '', '6,15', '9,14', '12,06', '14,92', '17,71', '23,11'],
                      ['120x100', '', '6,78', '10,08', '13,31', '16,49', '19,59', '25,62'],
                      ['140x70', '', '', '9,61', '12,69', '15,70', '18,65', '24,37'],
                      ['140x80', '', '6,78', '10,08', '13,31', '16,49', '19,59', '25,62'],
                      ['140x100', '', '7,41', '11,02', '14,57', '18,06', '21,48', '28,13'],
                      ['140x120', '', '', '11,96', '15,83', '19,63', '23,36', '30,65'],
                      ['150x50', '', '', '9,14', '12,06', '14,92', '17,71', '23,11'],
                      ['150x60', '', '', '9,61', '12,69', '15,70', '18,65', '24,37'],
                      ['150x100', '', '', '11,49', '15,20', '18,84', '22,42', '29,39'],
                      ['160x80', '', '', '11,02', '14,57', '18,06', '21,48', '28,13'],
                      ['160x100', '', '', '11,96', '15,83', '19,63', '23,36', '30,65'],
                      ['160x120', '', '', '12,91', '17,08', '21,20', '25,25', '33,16'],
                      ['160x140', '', '', '', '18,34', '22,77', '27,13', '35,67'],
                      ['180x60', '', '', '11,02', '14,57', '18,06', '21,48', '28,13'],
                      ['180x80', '', '', '', '15,83', '19,63', '23,36', '30,65'],
                      ['180x100', '', '', '', '17,08', '21,20', '25,25', '33,16'],
                      ['180x120', '', '', '', '18,34', '22,77', '27,13', '35,67'],
                      ['200x80', '', '', '', '17,08', '21,20', '25,25', '33,16'],
                      ['200x100', '', '', '', '18,34', '22,77', '27,13', '35,67'],
                      ['200x120', '', '', '', '19,59', '24,34', '29,01', '38,18'],
                      ['200x150', '', '', '', '21,48', '26,69', '31,84', '41,95'],
                      ['200x160', '', '', '', '22,11', '27,48', '32,78', '43,21'],
                      ['250x100', '', '', '', '21,48', '26,69', '31,84', '41,95'],
                      ['250x150', '', '', '', '', '30,62', '36,55', '48,23'],
                      ['300x100', '', '', '', '', '30,62', '36,55', '48,23'],
                    ].map(([d, ...v]) => (
                      <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <SteelNote />
        </div>
      );
    case 'ceownik-zg':
      return (
        <div>
          <ProductImg seed={21} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">Nasza oferta obejmuje szeroki asortyment ceowników zimnogiętych</p>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla ceowników zimnogiętych</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>
          <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                <tr><TH>Ścianka [C] \ Wymiar [HxS]</TH><TH>2</TH><TH>3</TH><TH>4</TH><TH>5</TH><TH>6</TH><TH>8</TH></tr>
              </thead>
              <tbody>
                {[
                  ['25 × 16', '0,79', '', '', '', '', ''],
                  ['25 × 20', '0,91', '', '', '', '', ''],
                  ['25 × 25', '1,07', '', '', '', '', ''],
                  ['30 × 20', '0,97', '1,39', '', '', '', ''],
                  ['30 × 30', '1,30', '1,86', '', '', '', ''],
                  ['30 × 35', '1,46', '2,10', '', '', '', ''],
                  ['35 × 20', '1,07', '1,51', '', '', '', ''],
                  ['40 × 15', '0,97', '', '', '', '', ''],
                  ['40 × 20', '1,14', '1,63', '', '', '', ''],
                  ['40 × 25', '1,28', '1,87', '', '', '', ''],
                  ['40 × 30', '1,44', '2,07', '2,67', '', '', ''],
                  ['40 × 35', '1,60', '2,31', '2,94', '', '', ''],
                  ['40 × 40', '1,77', '2,57', '3,25', '', '', ''],
                  ['40 × 50', '', '3,06', '3,96', '', '', ''],
                  ['50 × 20', '1,28', '1,87', '', '', '', ''],
                  ['50 × 25', '1,44', '2,07', '', '', '', ''],
                  ['50 × 30', '1,60', '2,31', '2,94', '', '', ''],
                  ['50 × 35', '1,77', '2,57', '3,25', '', '', ''],
                  ['50 × 40', '', '2,78', '3,56', '', '', ''],
                  ['50 × 50', '', '3,25', '4,19', '', '', ''],
                  ['60 × 30', '1,77', '2,57', '3,30', '', '', ''],
                  ['60 × 40', '', '3,00', '3,88', '', '', ''],
                  ['60 × 50', '', '3,52', '4,55', '5,46', '', ''],
                  ['70 × 20', '', '', '3,56', '', '', ''],
                  ['70 × 30', '', '2,80', '3,56', '', '', ''],
                  ['70 × 35', '', '3,04', '3,88', '', '', ''],
                  ['70 × 40', '', '3,25', '4,19', '5,06', '', ''],
                  ['70 × 45', '', '3,52', '4,51', '5,46', '', ''],
                  ['70 × 50', '', '3,72', '4,82', '5,85', '', ''],
                  ['80 × 40', '', '3,52', '4,51', '5,46', '', ''],
                  ['80 × 45', '', '', '4,82', '5,85', '6,80', ''],
                  ['80 × 50', '', '3,95', '5,13', '6,24', '7,31', ''],
                  ['80 × 60', '', '', '5,75', '7,02', '8,25', ''],
                  ['80 × 70', '', '', '6,39', '7,81', '9,18', ''],
                  ['90 × 40', '', '', '4,82', '5,85', '', ''],
                  ['90 × 50', '', '', '5,45', '6,63', '7,77', ''],
                  ['90 × 60', '', '', '6,08', '7,42', '8,72', ''],
                  ['100 × 40', '', '3,92', '5,13', '6,24', '', ''],
                  ['100 × 50', '', '4,43', '5,75', '7,02', '8,25', '10,63'],
                  ['100 × 60', '', '', '6,39', '7,81', '9,18', '11,89'],
                  ['100 × 70', '', '', '7,02', '8,60', '10,14', '13,14'],
                  ['100 × 80', '', '', '7,65', '9,38', '11,08', '14,40'],
                  ['110 × 50', '', '4,69', '6,08', '7,42', '8,72', '11,26'],
                  ['120 × 50', '', '', '6,39', '7,81', '9,18', '11,89'],
                  ['120 × 55', '', '', '6,72', '8,24', '9,66', '12,52'],
                  ['120 × 60', '', '5,39', '7,02', '8,60', '10,14', '13,15'],
                  ['120 × 70', '', '', '7,65', '9,38', '11,08', '14,41'],
                  ['120 × 80', '', '', '8,27', '10,17', '12,02', '15,67'],
                  ['120 × 90', '', '', '8,90', '10,95', '12,96', '16,93'],
                  ['120 × 100', '', '', '9,53', '11,74', '13,91', '18,19'],
                  ['140 × 25', '', '', '8,92', '', '', ''],
                  ['140 × 50', '', '', '7,02', '8,60', '10,14', '13,14'],
                  ['140 × 60', '', '', '7,65', '9,38', '11,08', '14,40'],
                  ['140 × 70', '', '', '8,27', '10,17', '12,02', '15,66'],
                  ['140 × 80', '', '', '8,92', '10,95', '12,95', '16,93'],
                  ['140 × 90', '', '', '9,53', '11,74', '13,91', '18,19'],
                  ['140 × 100', '', '', '10,16', '12,53', '14,85', '19,45'],
                  ['150 × 50', '', '5,98', '7,35', '9,03', '10,60', '13,78'],
                  ['160 × 45', '', '', '7,35', '9,03', '10,60', ''],
                  ['160 × 50', '', '', '7,65', '9,38', '11,08', '14,40'],
                  ['160 × 60', '', '', '8,27', '10,17', '12,02', '15,66'],
                  ['160 × 65', '', '', '8,59', '10,59', '12,49', '16,29'],
                  ['160 × 70', '', '', '8,90', '11,02', '12,96', '16,93'],
                  ['160 × 80', '', '', '9,53', '11,74', '13,91', '18,19'],
                  ['160 × 90', '', '', '10,16', '12,52', '14,85', '19,45'],
                  ['160 × 100', '', '', '10,79', '13,31', '15,79', '20,71'],
                  ['170 × 45', '', '', '7,65', '9,38', '11,08', ''],
                  ['180 × 50', '', '', '8,27', '10,17', '12,02', '15,66'],
                  ['180 × 60', '', '', '8,90', '10,95', '12,96', '16,93'],
                  ['180 × 70', '', '', '9,53', '11,74', '13,91', '18,19'],
                  ['180 × 80', '', '', '10,16', '12,52', '14,86', '19,45'],
                  ['180 × 90', '', '', '10,79', '13,31', '15,79', '20,71'],
                  ['180 × 100', '', '', '11,41', '14,09', '16,73', '21,97'],
                  ['200 × 50', '', '', '8,92', '10,95', '12,96', '15,66'],
                  ['200 × 60', '', '', '9,53', '11,74', '13,91', '18,19'],
                  ['200 × 70', '', '', '10,16', '12,52', '14,81', '19,45'],
                  ['200 × 80', '', '', '10,79', '13,35', '15,75', '20,71'],
                  ['200 × 90', '', '', '11,41', '14,09', '16,73', '21,97'],
                  ['200 × 100', '', '', '12,04', '14,88', '17,67', '23,23'],
                  ['245 × 80', '', '', '', '15,11', '18,13', '23,05'],
                  ['260 × 80', '', '', '', '', '', '24,43'],
                  ['280 × 100', '', '', '', '', '', '28,22'],
                ].map(([d, ...v]) => (
                  <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
                ))}
              </tbody>
            </table></div>
          <SteelNote />
        </div>
      );
    case 'katownik-zg':
      return (
        <div>
          <ProductImg seed={25} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">W ofercie posiadamy szeroki asortyment kątowników zimnogiętych</p>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla kątowników zimnogiętych</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>
          <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                <tr><TH>Ścianka [C] \ Wymiar [HxS]</TH><TH>1.5</TH><TH>2</TH><TH>2.5</TH><TH>3</TH><TH>4</TH><TH>5</TH><TH>6</TH><TH>8</TH></tr>
              </thead>
              <tbody>
                {[
                  ['20 × 15', '0.38', '0.58', '0.71', '0.82', '', '', '', ''],
                  ['20 × 20', '0.44', '0.57', '0.70', '0.82', '', '', '', ''],
                  ['25 × 20', '0.50', '0.66', '0.80', '0.94', '', '', '', ''],
                  ['25 × 25', '0.55', '0.73', '0.90', '1.05', '', '', '', ''],
                  ['30 × 20', '0.55', '0.73', '0.88', '1.06', '1.31', '', '', ''],
                  ['30 × 25', '0.61', '0.81', '0.98', '1.18', '1.47', '', '', ''],
                  ['30 × 30', '0.67', '0.88', '1.09', '1.29', '1.66', '', '', ''],
                  ['35 × 35', '0.79', '1.04', '1.29', '1.52', '1.93', '', '', ''],
                  ['40 × 20', '0.67', '0.89', '1.10', '1.30', '1.66', '', '', ''],
                  ['40 × 30', '0.79', '1.05', '1.30', '1.53', '1.98', '', '', ''],
                  ['40 × 40', '0.91', '1.20', '1.49', '1.76', '2.25', '2.75', '', ''],
                  ['45 × 30', '0.85', '1.13', '1.39', '1.65', '2.14', '', '', ''],
                  ['45 × 45', '1.03', '1.36', '1.69', '1.99', '2.57', '3.16', '', ''],
                  ['50 × 25', '0.85', '1.13', '1.39', '1.65', '2.14', '2.55', '', ''],
                  ['50 × 30', '0.91', '1.21', '1.49', '1.77', '2.29', '', '', ''],
                  ['50 × 40', '1.03', '1.37', '1.69', '2.00', '2.57', '3.14', '', ''],
                  ['50 × 45', '1.08', '1.43', '', '2.10', '2.73', '3.34', '', ''],
                  ['50 × 50', '1.14', '1.51', '1.87', '2.23', '2.91', '3.51', '4.11', ''],
                  ['55 × 20', '0.85', '1.13', '1.39', '1.62', '2.10', '', '', ''],
                  ['55 × 55', '1.26', '1.67', '', '2.47', '3.20', '3.93', '4.62', ''],
                  ['60 × 40', '1.14', '1.51', '1.86', '2.22', '2.89', '3.53', '', ''],
                  ['60 × 45', '1.20', '1.59', '', '2.34', '3.06', '3.74', '', ''],
                  ['60 × 60', '1.38', '1.83', '', '2.68', '3.51', '4.29', '5.05', ''],
                  ['65 × 65', '1.50', '1.98', '', '', '3.83', '4.71', '5.51', ''],
                  ['70 × 40', '', '', '', '2.47', '3.19', '3.91', '', ''],
                  ['70 × 45', '', '', '', '2.59', '3.35', '4.10', '', ''],
                  ['70 × 70', '', '', '', '', '4.14', '5.08', '6.00', ''],
                  ['75 × 75', '', '', '', '', '4.43', '5.47', '6.47', ''],
                  ['80 × 40', '', '', '', '2.71', '3.52', '4.32', '', ''],
                  ['80 × 50', '', '', '', '2.94', '3.83', '4.71', '', ''],
                  ['80 × 80', '', '', '', '', '4.78', '5.90', '6.99', '9.08'],
                  ['85 × 85', '', '', '', '', '5.11', '6.30', '7.46', '9.71'],
                  ['90 × 90', '', '', '', '', '5.41', '6.69', '7.94', '10.34'],
                  ['95 × 95', '', '', '', '', '5.73', '7.08', '8.41', '10.97'],
                  ['100 × 50', '', '', '', '', '', '5.47', '6.47', ''],
                  ['100 × 100', '', '', '', '', '5.95', '7.43', '8.82', '11.60'],
                  ['110 × 110', '', '', '', '', '', '', '9.82', '12.86'],
                  ['120 × 50', '', '', '', '', '', '', '6.99', '10.34'],
                  ['120 × 120', '', '', '', '', '', '', '10.76', '14.12'],
                  ['130 × 130', '', '', '', '', '', '', '11.70', '15.38'],
                  ['140 × 70', '', '', '', '', '', '', '8.87', '12.23'],
                  ['140 × 140', '', '', '', '', '', '', '12.64', '16.64'],
                  ['150 × 150', '', '', '', '', '', '', '13.58', '17.88'],
                  ['160 × 80', '', '', '', '', '', '', '10.28', '14.12'],
                  ['160 × 160', '', '', '', '', '', '', '14.48', '19.40'],
                  ['170 × 170', '', '', '', '', '', '', '15.38', '20.66'],
                  ['180 × 100', '', '', '', '', '', '', '12.64', '16.64'],
                  ['180 × 180', '', '', '', '', '', '', '16.28', '21.64'],
                ].map(([d, ...v]) => (
                  <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x?.replace('.', ',')}</TD>)}</TR>
                ))}
              </tbody>
            </table></div>
          <SteelNote />
        </div>
      );
    case 'dwuteownik':
      return (
        <div>
          <ProductImg seed={110} />
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla dwuteowników</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              ['INP', [
                ['80 (80x42x3,9x5,9)', '5,94'],
                ['100 (100x50x4,5x6,8)', '8,34'],
                ['120 (120x58x5,1x7,7)', '11,10'],
                ['140 (140x66x5,7x8,6)', '14,30'],
                ['160 (160x74x6,3x9,5)', '17,90'],
                ['180 (180x82x6,9x10,4)', '21,90'],
                ['200 (200x90x7,5x11,3)', '26,20'],
                ['220 (220x98x8,1x12,2)', '31,10'],
                ['240 (240x106x8,7x13,1)', '36,20'],
                ['260 (260x113x9,4x14,1)', '41,90'],
                ['300 (300x125x10,8x16,2)', '54,20'],
                ['340 (340x137x12,2x18,3)', '68,00'],
                ['360 (360x143x13,0x19,5)', '76,10'],
                ['400 (400x155x14,4x21,6)', '92,40'],
                ['450 (450x170x16,2x24,3)', '115,00'],
                ['500 (500x185x18,0x27,0)', '141,00'],
                ['550 (550x200x19,0x30,0)', '166,00'],
              ]],
              ['IPE', [
                ['80 (80x46x3,8x5,2)', '6,00'],
                ['100 (100x55x4,1x5,7)', '8,10'],
                ['120 (120x64x4,4x6,3)', '10,40'],
                ['140 (140x73x4,7x6,9)', '12,90'],
                ['160 (160x82x5,0x7,4)', '15,80'],
                ['180 (180x91x5,3x8,0)', '18,80'],
                ['200 (200x100x5,6x8,5)', '22,40'],
                ['220 (220x110x5,9x9,2)', '26,20'],
                ['240 (240x120x6,2x9,8)', '30,70'],
                ['270 (270x135x6,6x10,2)', '36,10'],
                ['300 (300x150x7,1x10,7)', '42,20'],
                ['330 (330x160x7,5x11,5)', '49,10'],
                ['360 (360x170x8,0x12,7)', '57,10'],
                ['400 (400x180x8,6x13,5)', '66,30'],
                ['450 (450x190x9,4x14,6)', '77,60'],
                ['500 (500x200x10,2x16,0)', '90,70'],
                ['550 (550x210x11,1x17,2)', '106,00'],
                ['600 (600x220x12,0x19,0)', '122,00'],
              ]]
            ].map(([title, rows]) => (
              <div key={title as string}>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2">Dwuteownik {title as string}</p>
                <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                      <tr><TH>Asortyment H [HxSxCxT]</TH><TH>kg/mb</TH></tr>
                    </thead>
                    <tbody>{(rows as string[][]).map(([s, w]) => <TR key={s}><TD bold>{s}</TD><TD>{w}</TD></TR>)}</tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <SteelNote />
        </div>
      );
    case 'ceownik-gw':
      return (
        <div>
          <ProductImg seed={111} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">W ciągłej sprzedaży posiadamy szeroki wachlarz ceowników gorącowalcowanych</p>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla ceowników gorącowalcowanych</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              ['Ekonomiczny', [
                ['80 (80x40x4,5x7,4)', '7,10'],
                ['100 (100x46x4,5x7,6)', '8,60'],
                ['120 (120x52x4,8x7,8)', '10,40'],
                ['140 (140x58x4,9x8,1)', '12,30'],
                ['160 (160x64x5,0x8,4)', '14,20'],
                ['180 (180x70x5,1x8,7)', '16,30'],
                ['200 (200x76x5,2x9,0)', '18,40'],
                ['240 (240x90x5,6x10,0)', '24,00'],
                ['270 (270x95x6,0x10,5)', '27,70'],
                ['300 (300x100x6,5x11,0)', '31,80'],
                ['400 (400x115x8,0x13,5)', '48,30'],
              ]],
              ['UNP', [
                ['35 (35x35x5,0x6,0)', '4,14'],
                ['40 (40x20x5,0x5,0)', '2,75'],
                ['45 (45x38x5,0x6,0)', '5,03'],
                ['50 (50x38x5,5x7,0)', '5,59'],
                ['65 (65x42x6,0x7,5)', '7,09'],
                ['80 (80x45x6,0x8,0)', '8,64'],
                ['100 (100x50x6,0x8,5)', '10,60'],
                ['120 (120x55x7,0x9,0)', '13,40'],
                ['140 (140x60x7,0x10,0)', '16,00'],
                ['160 (160x65x7,5x10,5)', '18,80'],
                ['180 (180x70x8,0x11,0)', '22,00'],
                ['200 (200x75x8,8x11,5)', '25,30'],
                ['220 (220x80x9,0x12,5)', '29,40'],
                ['240 (240x85x9,5x13,0)', '33,20'],
                ['260 (260x90x10,0x14,0)', '37,90'],
                ['280 (280x95x10,0x15,0)', '41,80'],
                ['300 (300x100x10,0x16,0)', '46,20'],
              ]]
            ].map(([title, rows]) => (
              <div key={title as string}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#86868b] mb-2">Ceownik {title as string}</p>
                <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                      <tr><TH>Asortyment H [HxSxCxT]</TH><TH>kg/mb</TH></tr>
                    </thead>
                    <tbody>{(rows as string[][]).map(([s, w]) => <TR key={s}><TD bold>{s}</TD><TD>{w?.replace('.', ',')}</TD></TR>)}</tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <SteelNote />
        </div>
      );
    case 'katownik-gw':
      return (
        <div>
          <ProductImg seed={22} />
          <p className="text-[#86868b] text-sm mt-5 mb-2">Oferujemy kątowniki gorącowalcowane równoramienne i nierównoramienne</p>
          <p className="text-[#86868b] text-sm mb-2">Tabela z teoretycznymi wagami dla kątowników gorącowalcowanych</p>
          <p className="text-[#86868b] text-xs font-semibold mb-6">Uwagi: Wagi przedstawione poniżej są wartościami teoretycznymi nie uwzględniającymi gęstości konkretnego stopu oraz tolerancji wykonania.<br />Oferta magazynowa może obejmować część wymiarów podanych w tabeli</p>
          <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
            <table className="w-full text-sm">
              <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                <tr>
                  <TH>Ścianka [C] \ Wymiar [HxS]</TH>
                  <TH>3</TH><TH>4</TH><TH>4.5</TH><TH>5</TH><TH>6</TH><TH>7</TH><TH>8</TH><TH>9</TH><TH>10</TH><TH>11</TH><TH>12</TH>
                  <TH>13</TH><TH>14</TH><TH>15</TH><TH>16</TH><TH>17</TH><TH>18</TH><TH>20</TH><TH>24</TH><TH>28</TH><TH>35</TH>
                </tr>
              </thead>
              <tbody>
                {[
                  ['20 × 20', '0.88', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['25 × 25', '1.12', '1.45', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['30 × 20', '1.12', '1.46', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['30 × 30', '1.36', '1.78', '', '2.18', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['35 × 35', '1.60', '2.10', '', '2.57', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['40 × 20', '1.35', '1.77', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['40 × 25', '', '1.93', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['40 × 40', '1.84', '2.42', '', '2.97', '3.52', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['45 × 30', '1.72', '2.25', '', '2.77', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['45 × 45', '2.09', '2.74', '3.06', '3.38', '4.00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['50 × 30', '', '2.41', '', '2.96', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['50 × 40', '', '2.71', '', '3.35', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['50 × 50', '2.32', '3.06', '', '3.77', '4.47', '5.15', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['55 × 55', '', '', '', '', '4.94', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['60 × 30', '', '', '', '3.37', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['60 × 40', '', '', '', '3.76', '4.46', '5.14', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['60 × 60', '', '', '', '4.57', '5.42', '', '7.09', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['65 × 50', '', '', '', '4.35', '', '5.97', '', '7.52', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['65 × 65', '', '', '', '', '', '6.83', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['70 × 50', '', '', '', '', '5.40', '6.51', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['70 × 70', '', '', '', '', '6.38', '7.38', '', '9.34', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['75 × 50', '', '', '', '', '5.65', '', '7.39', '8.23', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['75 × 55', '', '', '', '4.95', '', '6.80', '', '8.59', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['75 × 75', '', '', '', '', '6.85', '7.94', '9.03', '', '11.10', '', '13.10', '', '', '', '', '', '', '', '', '', ''],
                  ['80 × 40', '', '', '', '', '5.41', '', '7.07', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['80 × 60', '', '', '', '', '', '7.36', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['80 × 65', '', '', '', '', '', '', '8.66', '', '10.70', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['80 × 80', '', '', '', '', '7.34', '', '9.66', '', '11.90', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['90 × 60', '', '', '', '', '6.82', '', '8.96', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['90 × 90', '', '', '', '', '', '9.61', '10.90', '12.20', '13.50', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['100 × 50', '', '', '', '', '6.85', '', '8.99', '', '11.10', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['100 × 65', '', '', '', '', '', '8.77', '9.94', '11.10', '12.30', '13.40', '', '', '', '', '', '', '', '', '', '', ''],
                  ['100 × 75', '', '', '', '', '', '9.32', '10.60', '11.80', '13.00', '14.30', '15.40', '', '', '', '', '', '', '', '', '', ''],
                  ['100 × 100', '', '', '', '', '9.26', '10.70', '12.20', '', '15.10', '', '17.80', '', '', '', '', '', '', '', '', '', ''],
                  ['110 × 110', '', '', '', '', '', '', '', '', '16.60', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['120 × 80', '', '', '', '', '', '', '12.20', '', '15.00', '', '17.80', '', '', '', '', '', '', '', '', '', ''],
                  ['120 × 120', '', '', '', '', '', '', '', '', '18.20', '19.90', '21.60', '', '', '', '', '', '', '', '', '', ''],
                  ['125 × 75', '', '', '', '', '', '', '12.20', '', '15.00', '', '17.80', '', '', '', '', '', '', '', '', '', ''],
                  ['130 × 65', '', '', '', '', '', '', '11.90', '', '14.60', '', '17.30', '', '', '', '', '', '', '', '', '', ''],
                  ['130 × 90', '', '', '', '', '', '', '', '', '', '', '19.70', '', '', '', '', '', '', '', '', '', ''],
                  ['130 × 130', '', '', '', '', '', '', '', '', '', '', '23.60', '', '', '', '', '', '', '', '', '', ''],
                  ['135 × 65', '', '', '', '', '', '', '12.20', '', '15.00', '', '', '', '', '', '', '', '', '', '', '', ''],
                  ['140 × 140', '', '', '', '', '', '', '', '', '', '', '', '', '27.50', '', '', '', '', '', '', '', ''],
                  ['150 × 75', '', '', '', '', '', '', '', '15.30', '17.00', '18.60', '20.20', '', '', '24.80', '', '', '', '', '', '', ''],
                  ['150 × 90', '', '', '', '', '', '', '', '', '18.20', '', '21.60', '', '', '26.60', '', '', '', '', '', '', ''],
                  ['150 × 100', '', '', '', '', '', '', '', '', '19.00', '', '22.60', '', '26.10', '', '', '', '', '', '', '', ''],
                  ['150 × 150', '', '', '', '', '', '', '', '', '23.00', '', '27.30', '', '31.60', '33.80', '', '', '', '', '', '', ''],
                  ['160 × 80', '', '', '', '', '', '', '', '', '', '', '21.60', '', '', '', '', '', '', '', '', '', ''],
                  ['160 × 160', '', '', '', '', '', '', '', '', '', '', '', '', '', '36.20', '', '40.70', '', '', '', '', ''],
                  ['180 × 90', '', '', '', '', '', '', '', '', '20.60', '', '24.50', '', '', '', '', '', '', '', '', '', ''],
                  ['180 × 180', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '43.50', '', '48.60', '', '', '', ''],
                  ['200 × 100', '', '', '', '', '', '', '', '', '23.00', '', '27.30', '', '31.60', '33.75', '', '', '', '', '', '', ''],
                  ['200 × 150', '', '', '', '', '', '', '', '', '', '', '32.00', '', '', '39.60', '', '', '', '', '', '', ''],
                  ['200 × 200', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '48.50', '', '54.30', '59.90', '71.10', '', ''],
                  ['250 × 250', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '104.00', '128.00'],
                ].map(([d, ...v]) => (
                  <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x?.replace('.', ',')}</TD>)}</TR>
                ))}
              </tbody>
            </table></div>
          <SteelNote />
        </div>
      );
    case 'siatki':
      return (
        <div>
          <div className="flex gap-3">
            <ProductImg seed={112} />
            <ProductImg seed={113} />
          </div>
          <p className="text-[#86868b] text-sm mt-5 mb-2">Oferujemy najbardziej popularne w Polsce siatki ogrodzeniowe z drutów najwyższej jakości w szerokim wyborze rozmiarów w wysokościach od 0,5m do 4,0m.</p>
          <p className="text-[#86868b] text-sm mb-4">Nasze produkty spełniają normy polskie i DIN-owskie. Znajdują szerokie zastosowanie w: sadownictwie, rolnictwie,leśnictwie, do ogrodzeń posesji, działek rekreacyjnych i przemysłowych.</p>
          <p className="text-white font-semibold mb-2 text-sm">W ciągłej sprzedaży posiadamy:</p>
          <ul className="list-disc pl-5 text-[#86868b] text-sm mb-6 space-y-1">
            <li>Siatki ogrodzeniowe ocynkowane i powlekane</li>
            <li>Słupki ogrodzeniowe (z rur i z profili w różnych rozmiarach)</li>
            <li>Akcesoria montażowe (druty naciągowe, napinacze, etc.)</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#86868b] mb-2">Parametry siatek ogrodzeniowych ocynkowanych</p>
              <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                    <tr><TH>Średnica drutu / Wielkość oczka</TH><TH>20×20</TH><TH>50×50</TH><TH>60×60</TH><TH>65×65</TH></tr>
                  </thead>
                  <tbody>
                    {[
                      ['1,6', 'x', '', '', ''],
                      ['2', 'x', '', '', ''],
                      ['2,5', '', 'x', 'x', ''],
                      ['2,8', '', 'x', 'x', 'x'],
                      ['3', '', 'x', 'x', 'x'],
                      ['3,5', '', '', 'x', ''],
                      ['4', '', '', 'x', ''],
                    ].map(([d, ...v]) => (
                      <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#86868b] mb-2">Parametry siatek powlekanych</p>
              <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-white/[0.06] rounded-xl custom-scrollbar relative">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 z-10 bg-[#111] shadow-xl">
                    <tr><TH>Średnica drutu / Wielkość oczka</TH><TH>50×50</TH><TH>60×60</TH></tr>
                  </thead>
                  <tbody>
                    {[
                      ['2,0/3,2', 'x', 'x'],
                      ['2,5/3,7', 'x', 'x'],
                    ].map(([d, ...v]) => (
                      <TR key={d}><TD bold>{d}</TD>{v.map((x, i) => <TD key={i}>{x}</TD>)}</TR>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    case 'ogrodzenia':
      return (
        <div>
          <GalleryLightbox
            images={[114, 115, 116].map(s => `https://picsum.photos/600/400?random=${s}`)}
            gridClassName="flex flex-wrap gap-3 mb-5"
            imageClassName="w-36 h-24 rounded-xl opacity-80"
          />
          <p className="text-white font-semibold mb-3 text-sm">Ogrodzenia / Panele ogrodzeniowe</p>
          <p className="text-[#86868b] text-sm mb-4">Oferujemy łatwe w montażu systemy ogrodzeniowe wykonane z profili zamkniętych lub kątowników</p>
          <ul className="list-disc pl-5 text-[#86868b] text-sm mb-5 space-y-1">
            <li>Bramy otwierane</li>
            <li>Bramy przesuwne</li>
            <li>Przęsła</li>
            <li>Furtki</li>
            <li>Słupki ogrodzeniowe (z rur i profili w różnych rozmiarach)</li>
            <li>Akcesoria bramowe (wózki, najazdy, rolki itp.)</li>
          </ul>
          <p className="text-[#86868b] text-sm mb-2">Poniżej katalog ogrodzeń w wesji pdf.</p>
          <p className="text-[#86868b] text-sm mb-6"><a href={process.env.NODE_ENV === 'production' ? '/pl/katalog.pdf' : '/katalog.pdf'} target="_blank" rel="noopener noreferrer" className="text-industry-orange hover:underline font-medium">Katalog do pobrania</a></p>

          <p className="text-[#86868b] text-sm mb-5">Na życzenie klienta wykonujemy nietypowe słupki ogrodzeniowe oraz adaptujemy gotowe elementy ogrodzeń według indywidualnego projektu.</p>

          <p className="text-white font-semibold mb-3 text-sm">Panele ogrodzeniowe</p>
          <ul className="list-disc pl-5 text-[#86868b] text-sm mb-4 space-y-1">
            <li>Panele ogrodzeniowe ocynkowane (drut fi 4 lub fi 5)</li>
            <li>Panele ogrodzeniowe ocynkowane powlekane</li>
            <li>Słupki i akcesoria montażowe do paneli</li>
          </ul>
          <p className="text-[#86868b] text-sm mb-6">Panele dostępne są w wysokościach: 120, 150, 170 oraz 200 cm. Pozostałe wysokości na zamówienie.</p>

          <div className="bg-industry-orange/10 border border-industry-orange/30 rounded-xl px-5 py-4 text-sm text-[#86868b]">
            Szczegółowymi informacjami służą nasi specjaliści ds. sprzedaży Tel {' '}
            <a href="tel:833443170" className="text-industry-orange font-semibold">(83) 344 31 70</a>
          </div>
        </div>
      );
    case 'produkcja':
      return (
        <div>
          <GalleryLightbox
            images={[117, 118, 119].map(s => `https://picsum.photos/600/400?random=${s}`)}
            gridClassName="flex flex-wrap gap-3 mb-5"
            imageClassName="w-36 h-24 rounded-xl opacity-80"
          />
          <div className="space-y-4 text-[#86868b] text-sm leading-relaxed">
            <p className="text-white font-semibold mb-0">Produkcja elementów zbrojnych</p>
            <p>Wykonujemy elementy zbrojeń prefabrykowanych zgodnie z indywidualnym zamówieniem klienta. Detale wykonywane są na nowoczesnych giętarkach automatycznych.</p>
            <p>Stosując profesjonalne, komputerowo sterowane urządzenia uzyskujemy wyroby na wysokim poziomie technicznym, o dużej dokładności oraz absolutnej powtarzalności kształtu i wymiaru.</p>
            <p>Stosowana technologia produkcji umożliwia uzyskanie różnorodnych figur wklęsłych i wypukłych (haki, spirale, strzemiona itp.) z prętów żebrowanych lub gładkich w zakresie średnic od fi 6 do fi 30.</p>
            <p>Oferujemy również pręty proste cięte na żądany przez klienta wymiar.</p>
            <div className="bg-industry-orange/10 border border-industry-orange/30 rounded-xl px-5 py-4">
              <p className="text-industry-orange font-semibold mb-1">Zapewniamy krótkie terminy realizacji.</p>
              <p>W przypadku zainteresowania prosimy o kontakt przez stronę internetową lub z działem sprzedaży Tel <a href="tel:833443170" className="text-white hover:underline">(83) 344 31 70</a></p>
            </div>
          </div>
        </div>
      );
    default:
      return <p className="text-[#86868b]">Wybierz kategorię z menu po lewej.</p>;
  }
}

export default function OfertaPage() {
  const [activeTab, setActiveTab] = useState('pret-zebrowany');

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const td = target.closest('td');

      if (!td) {
        document.querySelectorAll('.hover-crosshair').forEach(el => {
          el.classList.remove('hover-crosshair');
          (el as HTMLElement).style.color = '';
          (el as HTMLElement).style.backgroundColor = '';
        });
        document.querySelectorAll('.hover-crosshair-font').forEach(el => {
          el.classList.remove('hover-crosshair-font');
          (el as HTMLElement).style.fontWeight = '';
        });
        return;
      }

      const tr = td.parentElement as HTMLTableRowElement;
      const tbody = tr.parentElement;
      if (!tbody || tbody.tagName !== 'TBODY') return;

      const table = tbody.parentElement as HTMLTableElement;
      if (!table) return;

      const cellIndex = Array.from(tr.children).indexOf(td);

      // Remove old highlights in this table
      table.querySelectorAll('.hover-crosshair').forEach(el => {
        el.classList.remove('hover-crosshair');
        (el as HTMLElement).style.color = '';
        (el as HTMLElement).style.backgroundColor = '';
      });
      table.querySelectorAll('.hover-crosshair-font').forEach(el => {
        el.classList.remove('hover-crosshair-font');
        (el as HTMLElement).style.fontWeight = '';
      });

      // Highlight the row header (first TD)
      const rowHeader = tr.children[0] as HTMLElement;
      if (rowHeader && rowHeader !== td) {
        rowHeader.classList.add('hover-crosshair');
        rowHeader.style.color = 'white';
      }

      // Highlight the column header (TH at the same index)
      const thead = table.querySelector('thead');
      if (thead) {
        const headerRow = thead.querySelector('tr');
        if (headerRow && headerRow.children[cellIndex]) {
          const th = headerRow.children[cellIndex] as HTMLElement;
          th.classList.add('hover-crosshair');
          th.style.color = 'white';
          th.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
      }

      // Highlight the cell itself strongly
      if (rowHeader !== td) {
        td.classList.add('hover-crosshair', 'hover-crosshair-font');
        td.style.color = 'white';
        td.style.fontWeight = 'bold';
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.querySelectorAll('.hover-crosshair').forEach(el => {
        el.classList.remove('hover-crosshair');
        (el as HTMLElement).style.color = '';
        (el as HTMLElement).style.backgroundColor = '';
      });
      document.querySelectorAll('.hover-crosshair-font').forEach(el => {
        el.classList.remove('hover-crosshair-font');
        (el as HTMLElement).style.fontWeight = '';
      });
    };
  }, []);

  return (
    <div className="bg-black min-h-screen font-sans flex flex-col text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <section className="pt-20 pb-12 px-5 border-b border-white/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-industry-orange mb-3">Asortyment</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Oferta</h1>
          </div>
        </section>

        <section className="py-10 px-5">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6">

            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0 -mx-5 px-5 lg:mx-0 lg:px-0">
              <ul className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {categories.map((cat) => (
                  <li key={cat.id} className="shrink-0">
                    <button
                      onClick={() => setActiveTab(cat.id)}
                      className={`whitespace-nowrap w-auto lg:w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2
                        ${activeTab === cat.id
                          ? 'bg-industry-orange text-white shadow-[0_0_15px_rgba(255,90,0,0.3)]'
                          : 'text-[#86868b] bg-[#1d1d1f] lg:bg-transparent hover:text-white hover:bg-white/[0.06] border border-white/[0.04] lg:border-none'
                        }`}
                    >
                      {activeTab === cat.id && (
                        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                      )}
                      {cat.title}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0 rounded-2xl bg-[#1d1d1f] border border-white/[0.06] p-8 min-h-[500px]">
              <h2 className="text-2xl font-bold tracking-tight mb-8">
                {categories.find(c => c.id === activeTab)?.title}
              </h2>
              {renderContent(activeTab)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}