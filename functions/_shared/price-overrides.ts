/** Norway market price matching (2026-10-30). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * 2026-10-31: competitor match (cheapest Norwegian offer via Klarna/Prisguide minus 10-20 NOK, ending in 9, never below cost floor + 10 %).
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {"590043A0-2D78-4366-863B-E7688D9E8E33": 269, "1646079157757030400": 249, "2502070954361615600": 269, "FCD2E2C7-6BA3-4400-822E-C2AD1B3B9226": 299, "1390641446410915840": 169};
/* 2026-10-30: products without required certification removed from store (owner order). */
export const HIDDEN = new Set<string>(["1399278834032971776", "763683FD-449B-4519-872F-6FADF3FAD720", "095E52F9-281C-4A08-AA24-2188BB7329CA", "8424B87D-7902-489C-B144-F78FAC3BB199", "540A6FB8-7FAC-43FC-86A5-0DAFDDE6A4A6", "1466216616252542976", "8ACDE90D-649B-4348-9AFF-96E5C48CB4F2", "9C84043F-ADCC-45E7-A347-2A8ABB02E1C9", "8CCF5A79-D11C-42FD-857E-B89C7874A561", "1418816673884016640"]);
