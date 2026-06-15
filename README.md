# Launch Countdown WebApp

Eine moderne, vollständig statische Countdown-WebApp für GitHub Pages – gebaut nur mit **HTML**, **CSS** und **Vanilla JavaScript**.

## Features

- Responsives, zentriertes Dark-Mode-Design
- Countdown mit **Tagen, Stunden, Minuten, Sekunden**
- Sekündliche Aktualisierung
- Konfigurierbares Ziel-Datum über `script.js`
- Attraktive Erfolgsmeldung inkl. kleiner Animation nach Ablauf

## Projekt lokal starten

1. Repository klonen
2. `index.html` direkt im Browser öffnen

Es ist kein Backend und keine Installation nötig.

## Ziel-Datum anpassen

Öffne `/script.js` und passe die Konstante `TARGET_DATE` an:

```js
const TARGET_DATE = new Date("2026-12-31T23:59:59");
```

## Veröffentlichung über GitHub Pages

1. Änderungen in den `main`-Branch pushen.
2. In GitHub: **Settings → Pages** öffnen.
3. Unter **Build and deployment** bei **Source** auswählen:
   - **Deploy from a branch**
   - Branch: `main` (Ordner: `/ (root)`)
4. Speichern.
5. Nach kurzer Zeit ist die App über die angezeigte GitHub-Pages-URL erreichbar.