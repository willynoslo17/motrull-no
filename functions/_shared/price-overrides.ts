/** Norway market price matching (2026-10-30). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {"2603190400471622600": 389, "2080211980367716353": 349};
/* 2026-10-30: products without required certification removed from store (owner order). */
/* 2026-10-31 (sincert): owner order - only products with a confirmed certificate may be shown. */
export const HIDDEN = new Set<string>(["1399278834032971776", "763683FD-449B-4519-872F-6FADF3FAD720", "095E52F9-281C-4A08-AA24-2188BB7329CA", "8424B87D-7902-489C-B144-F78FAC3BB199", "540A6FB8-7FAC-43FC-86A5-0DAFDDE6A4A6", "1466216616252542976", "8ACDE90D-649B-4348-9AFF-96E5C48CB4F2", "9C84043F-ADCC-45E7-A347-2A8ABB02E1C9", "8CCF5A79-D11C-42FD-857E-B89C7874A561", "1418816673884016640", "1386925350814093312", "1803978693954916352", "668B9E2A-899C-4C61-B0ED-72F309C6E49C", "C579964E-3E8C-40BB-9B9B-716D3C00AEA5", "1364147888288043008", "3BF177BA-146A-4260-9CB6-5E8C07FB8037", "1384745741825740800", "4C703C4B-341E-419E-9B98-D55E8E7B1D24", "4D77CC4A-C1BF-47DF-962E-FFA7BF490916", "BE952862-544F-41F2-9413-C7E3A63DC444", "590043A0-2D78-4366-863B-E7688D9E8E33", "E155636F-756B-45FA-9D1D-ED6E3BA97FBF", "1375659321509154816", "2407200305291611900", "1439053713678405632", "1603751118738305024", "1499234883501953024", "1BA5884D-4E94-4E18-BED8-846EB910F27E", "42FFEC64-C6AF-4A74-92FE-C188A582882E", "C2F6B8B8-EBFB-4AAA-8798-E46A7FA33E13", "1647854755940671488", "1417686963657510912", "C9AC501C-A289-48E9-9D5D-576B7248C983", "1646079157757030400", "2502070954361615600", "A41AE88F-AD83-47EA-89F8-63E13517BFBF", "1359320012602609664", "1712356686326927360", "1586639149828943872", "1585213252588548096", "2605030635261605600", "1380762161189621760", "FCD2E2C7-6BA3-4400-822E-C2AD1B3B9226", "1709176049415757824", "1390641446410915840", "EC26D8BE-4BC2-4B73-A180-CDD6E8E37409", "9ADD5FDA-6BB5-44FC-ABE5-7EC5DE53B013", "1437264065205506048", "8078FB2D-9A46-4897-A09B-421661232298", "52E55B68-B7FD-4F9E-8E3C-E0D5AB51C140", "6A83E309-8DC6-41D4-A494-D725FBF556AE", "C199BC05-DE3C-41A0-B5C5-A438997BBFDF", "1383341599668441088", "1765352391043457024", "1442058862789267456", "2512271141261602300", "1555122740565389312", "E007EA6C-427A-4B6B-86C3-4A30B3BE9860", "1399251927014969344", "1418761693210742784", "1363384151255945216", "2B93EE54-013F-4952-AC76-F17065AF6CC0"]);

/* 2026-10-31 (sincert): CERT_ONLY = true -> ONLY ids listed in CERTIFIED are shown/sellable (all providers: CJ, Printify, Printful, Gelato).
 * Restore per SKU with /workspace/negocios/restaurar_por_sku.py (adds the id here and removes it from HIDDEN). */
/* 2026-11-02: Printify-krus og barne-t-skjorter skjult igjen: ingen dokumentasjon (EU 1935/2004/LFGB for krus; EN 14682/REACH for barneklær). */
export const CERT_ONLY = true;
export const CERTIFIED = new Set<string>(["2603190400471622600", "2080211980367716353", "pfy-auto-tote", "pfy-auto-poster-art", "pfy-auto-poster-type", "pfy-auto-journal", "pfy-auto-sticker", "pfy-auto-mousepad", "pfy-auto-tee-black-s", "pfy-auto-tee-black-m", "pfy-auto-tee-black-l", "pfy-auto-tee-black-xl", "pfy-auto-hoodie-black-s", "pfy-auto-hoodie-black-m", "pfy-auto-hoodie-black-l", "pfy-auto-hoodie-black-xl"]);

/* 2026-11-01 16:13 owner rule (replaces "under market"): price = SAME total as the most comparable Norwegian product (incl. shipping), always with profit; discounts only when owner says. Per CJ variant (vid). */
export const VARIANT_PRICE: Record<string, number> = {"2603190400471623500": 389, "2080211980464185345": 349, "2080211980464185346": 369};

/* 2026-11-01: CJ variants NOT sold because the certificate does not cover that model / plug type (US/UK/AU) / unknown set content. */
export const EXCLUDED_VIDS = new Set<string>([]);

/* 2026-11-01: variant used when a checkout line has no vid (must be a certified, sellable variant). */
export const DEFAULT_VID: Record<string, string> = {"2603190400471622600": "2603190400471623500", "2080211980367716353": "2080211980464185345"};

/* Printify (01.11): fast pris = vanlig norsk markedspris for tilsvarende POD-vare; hver pris gir fortjeneste også ved fri frakt (pris*0.77 > (kost+frakt)*10.8). */
export const PRINTIFY_PRICE: Record<string, number> = {"pfy-auto-tote": 299,"pfy-auto-poster-art": 229,"pfy-auto-poster-type": 229,"pfy-auto-journal": 259,"pfy-auto-sticker": 149,"pfy-auto-mousepad": 249,"pfy-auto-tee-black-s": 299,"pfy-auto-tee-black-m": 299,"pfy-auto-tee-black-l": 299,"pfy-auto-tee-black-xl": 299,"pfy-auto-hoodie-black-s": 649,"pfy-auto-hoodie-black-m": 649,"pfy-auto-hoodie-black-l": 649,"pfy-auto-hoodie-black-xl": 649,"pfy-auto-mug-std": 159,"pfy-auto-mug-eu": 159};
