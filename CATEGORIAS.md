# Kategorier – Motrull (motrull.no)

Guía de categorías de la tienda (biltilbehør). Fecha: 2026-11-01. Documento de referencia: **no cambia nada publicado**. Cuando Willy pida ordenar/añadir productos, se aplica esto.

## Principios

- Categorías por **tipo de producto** (estilo Clas Ohlson / Europris / Jollyroom / Kid Interiør), nombres en **noruego bokmål**, orden fijo abajo.
- **Sin filtros ni colecciones por marca/proveedor** (CJ, Printful, Gelato, Printify no son categorías).
- Cada producto en **una** categoría principal + **una** subcategoría. Sin huérfanos (`Beauty`, `Energy`, `Home & Living`, `Diverse` en inglés/genéricos no valen).
- **No publicar categorías vacías**: una categoría/subcategoría sin productos se oculta del menú hasta tener al menos 1 producto (ideal ≥3).
- Slug URL en minúsculas sin æøå (æ→ae, ø→o, å→a): `/kategori/<slug>`.
- Títulos de producto en noruego describiendo lo que ES (no títulos SEO del proveedor en inglés).
- No tocar precios ni textos legales al recategorizar.

## Árbol de categorías (orden del menú)

| # | Kategori | Slug | Underkategorier | Regla: qué entra |
|---|---|---|---|---|
| 1 | **Bilinteriør** | `bilinterior` | Pynt og figurer · Armlener og puter · Solskjerm- og brilleholdere | Alt som monteres/plasseres inne i kupeen for komfort eller pynt. |
| 2 | **Bilduft** | `bilduft` | Duftklips til luftdysen · Aroma og duftpynt | Luftfriskere og aroma. |
| 3 | **Oppbevaring i bilen** | `oppbevaring-i-bilen` | Lommer og poser · Holdere (blomster, briller) | Organisering. |
| 4 | **Camping i bilen** | `camping-i-bilen` | Oppblåsbare bilmadrasser | Madrasser og soveutstyr for bil. |
| 5 | **Utvendig og lys** | `utvendig-og-lys` | LED-lys · Dekorlister og klistremerker | Utvendig dekor og lys, også til elbil/scooter. |
| 6 | **Vedlikehold og deler** | `vedlikehold-og-deler` | Filtre · Rengjøring | Reservedeler og vedlikehold. |
| 7 | **Motrull merch** | `motrull-merch` | T-skjorter og hettegensere · Kopper · Plakater · Vesker, notatbøker og musematter · Klistremerker | Egne Motrull-designprodukter (Printful/Gelato). Merkevare-merch er en produkttype-seksjon, ikke et merkefilter. |

## Reglas de asignación

1. Lee el título/descripción y decide qué ES el producto (función principal), no dónde se usa ni quién lo vende.
2. Elige la primera categoría de la tabla cuya regla encaje; si encaja en dos, gana la más específica.
3. Si no encaja en ninguna: no inventes categoría nueva por un solo producto; usa la categoría más cercana y anótalo aquí. Nueva categoría solo con ≥3 productos del mismo tipo.
4. Campo `category` en `catalog/*.json` = nombre noruego exacto de la tabla; añadir `subcategory` con el nombre exacto de la subcategoría.
5. Cada categoría visible necesita su texto en `catalog/category-intros.json` (`no` = nombre exacto).

## Estado actual (diagnóstico 2026-11-01, sin cambios aplicados)

- Intros existentes en `category-intros.json`: Bilinteriør, Lading og strømtilbehør, Oppbevaring i bilen, Rengjøring og vedlikehold, Utvendig biltilbehør.
- Valores actuales de `category` en el catálogo: ver `catalog/selected-products.json`; los genéricos/en inglés deben migrarse a esta tabla cuando se ordene.

## Al aplicar (cuando se ordene)

Rama nueva → backup en `/workspace/backups/<tienda>-AAAAMMDD` → reasignar `category`/`subcategory` → build local → deploy Cloudflare Pages según README → verificar menú, una página de categoría y un producto en el dominio .no. Rollback: Cloudflare Pages → Deployments → *Rollback* al despliegue anterior, o redeploy del commit previo.
