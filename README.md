# Interaktivt Diskussionsspel

Statisk webbsida (HTML/CSS/JS) med slumpade diskussionsscenarier och inbyggd timer.
Startsidan heter `index.html` och alla filer ligger på toppnivå — klart att lägga i GitHub och publicera via Netlify.

## Filer
- `index.html` – sidan
- `styles.css` – utseende (pekar på `background.jpg`)
- `scenarios.js` – de 23 scenarierna
- `script.js` – logik (slump, navigering, timer)
- `background.jpg` – bakgrundsbild
- `robots.txt`, `sitemap.xml` – för sökmotorer

## Att göra efter publicering (en gång)
När du vet din adress (t.ex. `dittnamn.netlify.app` eller egen domän), byt ut texten
`DIN-ADRESS` mot den riktiga adressen på dessa ställen:
- `index.html` – raderna med `og:url`, `og:image` och `canonical`
- `robots.txt` – raden `Sitemap:`
- `sitemap.xml` – raden `<loc>`

Det är inget som krävs för att sidan ska fungera, bara för korrekt delning och sökmotorer.
