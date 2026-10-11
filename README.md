# Thomas Olesch - Copywriting & Webdesign

Statische Homepage in Schwarz und Orange, mit Originalbildern aus Thomas' OnePage-Seite. Die Website enthält Startseite, vier Leistungsseiten, Impressum, Datenschutzhinweise und eine 404-Seite. Texte sind ohne JavaScript abrufbar. Das separate Website-Röntgen wird verlinkt.

## Build und Prüfung

Node.js 20 oder neuer. Keine externen Pakete erforderlich.

```sh
npm run build
npm run check
```

## Vercel

Repository `thomasech7-dot/thomas-olesch-homepage` importieren, Framework `Other`, Root-Verzeichnis unverändert, Build `npm run build`, Output `dist`.

Der Standard-Build ist ein nicht indexierbarer Entwurf. Für die abschließende Veröffentlichung `SITE_URL` auf den bestätigten HTTPS-Ursprung setzen und `SITE_PUBLISH=true` hinzufügen. Der Build erzeugt dann kanonische URLs, Social-Media-Metadaten und Sitemap; Leistungsseiten werden indexierbar. Rechtstexte und die 404-Seite bleiben noindex. Die eigene Domain und Weiterleitungen der bisherigen URLs müssen gesondert verbunden werden.

## Live-Stand und Prüfungen

- Originalseite am 11.10.2026 abgerufen und mit Pure Persuasion AI analysiert.
- Die sechs unterschiedlichen persönlichen Originalfotos sind integriert; Logos wurden lokal gespeichert.
- Der Calendly-Link wurde anhand der aktuell funktionierenden OnePage-Verknüpfung korrigiert. Die frühere Variante mit `kennenlerngespraech` führt zu einer 404-Seite.
- Texte, interne Ziele, Bilder und JSON-LD werden mit `npm run check` geprüft.
- Die Live-Startseite wurde im Desktop-Browser visuell geprüft. Alle sechs persönlichen Fotos laden; die vier Leistungsseiten sind erreichbar. Ein visueller Smartphone-Test steht aus.
- Die API-Projektanlage wurde mit HTTP 403 verweigert. Der autorisierte Browser-Fallback war erfolgreich: Vercel Drop meldet Ready. Live: https://thomas-olesch-homepage.vercel.app/
- Bereitstellung am 11.10.2026 per Direkt-Upload des statischen Builds. Das Vercel-Projekt ist jetzt mit dem GitHub-Repository verbunden; neue Pushes auf `main` lösen Production Deployments aus.
- Die öffentliche Prüffassung enthält weiterhin noindex,follow. Die eigene Domain, abschließende SEO-Publikation und automatische Git-Anbindung stehen aus.
- Die Impressumsanschrift wurde aus der Originalseite übernommen; vor Veröffentlichung auf Aktualität prüfen.
- Die Datenschutzhinweise entsprechen der geplanten statischen Bereitstellung. Hostingvereinbarungen und tatsächlich aktivierte Dienste müssen vor Veröffentlichung abgeglichen werden.
- Kein Tracking, kein eingebettetes Calendly, keine externen Schriftendienste, kein Formularserver. Kontakt erfolgt per E-Mail oder über den externen Calendly-Link.
- Kein Ranking-/Umsatzversprechen. GEO ist die Aufbereitung verständlicher, zuordenbarer Inhalte; ein systemübergreifender KI-Sichtbarkeitstest wurde nicht durchgeführt.

## Designstand: Studio Minimal

Die gewählte Variante 1 ist im Quellcode umgesetzt: ruhiger schwarzer Hintergrund, orange Akzente, große Typografie, pillenförmige Buttons und mehr Freiraum. Das originale Studiofoto geht durch Lighten-Mischung und einen unteren Verlauf in den Hintergrund über. Alle persönlichen Fotos behalten ihre natürlichen Seitenverhältnisse; Kopf und Haare werden nicht durch CSS abgeschnitten. Die vier Leistungsseiten und Rechtstexte nutzen dieselbe Gestaltung.

Build und Offline-Check sind bestanden (8 Seiten, 159 interne Verweise). Die vorhandene Vercel-GitHub-App hat Zugriff auf das Homepage-Repository; der erste Git-Deploy wird durch diesen Dokumentations-Commit ausgelöst und anschließend live geprüft.

## Angebotsentscheidung

Webdesign und Copywriting bilden den Kern. SEO/GEO, E-Mail-Marketing sowie Social Media und Content ergänzen die Website. Preise und Lieferzeiten werden auf Projektbasis vereinbart. Technische E-Mail-Einrichtung, laufende Veröffentlichung und Anzeigenmanagement sind nur bei gesonderter Vereinbarung enthalten.
