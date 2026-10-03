import './style.css';

const thomasBeachLaptop = 'https://webseite-roentgen.vercel.app/assets/thomas-beach-laptop-0DHAuwys.jpg';
const thomasPortrait = 'https://webseite-roentgen.vercel.app/assets/thomas-portrait-CJUi_tKm.jpg';
const lukasPhoto = 'https://webseite-roentgen.vercel.app/assets/lukas-kazimierski-BUEDkKxH.webp';
const diagConversion = 'https://webseite-roentgen.vercel.app/assets/diag-conversion-C091j5LG.webp';
const diagPositioning = 'https://webseite-roentgen.vercel.app/assets/diag-positioning-BozurA8Z.webp';
const diagSearch = 'https://webseite-roentgen.vercel.app/assets/diag-search-DxzHC7lL.webp';
const symptomEnquiries = 'https://webseite-roentgen.vercel.app/assets/symptom-enquiries-CvrsIRTL.webp';
const symptomVisitors = 'https://webseite-roentgen.vercel.app/assets/symptom-visitors-CiCciI_G.webp';
const symptomExplaining = 'https://webseite-roentgen.vercel.app/assets/symptom-explaining-CqU2Fxyy.webp';
const freedomWriter = 'https://webseite-roentgen.vercel.app/assets/freedom-writer-academy-logo-MpViYWoI.jpeg';
const copyClub = 'https://webseite-roentgen.vercel.app/assets/the-copy-club-logo-DDizGLVL.png';

const EMAIL = 'ThomasOlesch.Copywriting@web.de';
const CALENDLY = 'https://calendly.com/thomasolesch-copywriting/kostenloses-kennenlerngespraech-30-minuten';
const ROENTGEN = 'https://webseite-roentgen.vercel.app/';
const INSTAGRAM = 'https://www.instagram.com/thomas.olesch.copywriter/';
const LINKEDIN = 'https://de.linkedin.com/in/thomas-olesch-a42627317';

const services = [
  ['01', 'Positionierung & Angebot', 'Ich schärfe, für wen dein Angebot gedacht ist, welches Problem es löst und warum es für diese Situation relevant ist.', diagPositioning],
  ['02', 'Website, Landingpage & Sales Page Copy', 'Ich schreibe Seiten so, dass Besucher schneller verstehen, ob sie hier richtig sind und welcher nächste Schritt sinnvoll ist.', diagConversion],
  ['03', 'E-Mail, Content & Ads', 'Ich übersetze deine Botschaft in E-Mails, Content-Strukturen und Anzeigen, damit deine Kommunikation zusammenhängt.', diagSearch],
];

const symptoms = [
  ['01', 'Menschen besuchen deine Seite, aber es kommt zu wenig zurück.', 'Dann fehlt oft nicht mehr Reichweite, sondern ein klarer Grund, warum dein Angebot genau jetzt relevant ist.', symptomEnquiries],
  ['02', 'Interessenten schauen, vergleichen und melden sich nicht.', 'Wenn Nutzen, Vertrauen oder nächster Schritt zu spät klar werden, bleibt Aufmerksamkeit ohne Handlung.', symptomVisitors],
  ['03', 'Du erklärst im Gespräch immer wieder von vorn.', 'Dann übernimmt deine Website noch zu wenig Vorarbeit für Verständnis, Entscheidung und Vertrauen.', symptomExplaining],
];

const process = [
  ['01', 'Wir klären, was verkauft werden soll.', 'Angebot, Zielgruppe, aktueller Engpass, vorhandene Seite und gewünschter nächster Schritt.'],
  ['02', 'Ich finde den Bruch in der Kommunikation.', 'Wo verliert der Besucher Orientierung? Wo bleibt dein Angebot zu allgemein? Wo fehlt Beweis oder Richtung?'],
  ['03', 'Wir bauen die passende Umsetzung.', 'Website-Texte, Landingpage, Sales Page, E-Mail-Strecke, Content-System oder Ads-Struktur - je nachdem, was wirklich gebraucht wird.'],
];

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('App root missing');
}

app.innerHTML = `
  <header class="siteHeader">
    <a class="brand" href="/">
      <span class="brandMark">TO</span>
      <span><strong>Thomas Olesch</strong><small>Conversion Copywriter</small></span>
    </a>
    <nav aria-label="Hauptnavigation">
      <a href="#problem">Problem</a>
      <a href="#angebot">Angebot</a>
      <a href="#arbeit">Ablauf</a>
      <a href="#proof">Proof</a>
      <a href="#kontakt">Kontakt</a>
    </nav>
    <a class="btn small" href="${CALENDLY}" target="_blank" rel="noreferrer">Analysegespräch buchen</a>
  </header>

  <main>
    <section class="hero">
      <div class="heroText">
        <p class="eyebrow">Conversion Copywriting für erklärungsbedürftige Angebote</p>
        <h1>Wenn dein Angebot gut ist, aber online nicht klar genug verstanden wird.</h1>
        <p class="lead">Ich helfe Unternehmern dabei, Positionierung, Website-Texte, Landingpages, Sales Pages, E-Mails, Content und Ads so aufzubauen, dass potenzielle Kunden schneller erkennen: Das passt zu meiner Situation.</p>
        <div class="heroActions">
          <a class="btn" href="${CALENDLY}" target="_blank" rel="noreferrer">Kostenloses Analysegespräch buchen</a>
          <a class="textLink" href="${ROENTGEN}" target="_blank" rel="noreferrer">Kostenlosen Website-Röntgen ansehen</a>
        </div>
        <div class="trustLine">
          <span>Positionierung</span>
          <span>Conversion Copy</span>
          <span>Suchintention</span>
        </div>
      </div>
      <div class="heroImage">
        <img src="${thomasBeachLaptop}" alt="Thomas Olesch am Strand mit Laptop" />
      </div>
    </section>

    <section id="problem" class="section darkBand">
      <div class="wrap split">
        <div>
          <p class="eyebrow">Der eigentliche Bruch</p>
          <h2>Deine Zielgruppe sucht nicht nach schöneren Texten. Sie sucht nach Klarheit für ihr Problem.</h2>
        </div>
        <p class="intro">Wenn Besucher deine Seite verlassen, liegt es selten nur am Design. Häufig erkennen sie ihr eigenes Problem nicht deutlich genug wieder, verstehen den Nutzen nicht schnell genug oder spüren nicht, warum der nächste Schritt jetzt sinnvoll ist.</p>
      </div>
      <div class="wrap grid3">
        ${symptoms.map(([number, title, text, image]) => `
          <article class="card mediaCard">
            <img src="${image}" alt="" />
            <b>${number}</b>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="angebot" class="section">
      <div class="wrap narrow">
        <p class="eyebrow">Was ich für dich baue</p>
        <h2>Keine losen Marketing-Bausteine. Eine Botschaft, die durch deine wichtigsten Kanäle trägt.</h2>
        <p class="intro">Copywriting ist für mich nicht nur der fertige Satz auf der Website. Es beginnt bei der Frage, warum dein Wunschkunde überhaupt zuhören sollte und endet erst dort, wo aus Interesse eine Handlung wird.</p>
      </div>
      <div class="wrap grid3">
        ${services.map(([number, title, text, image]) => `
          <article class="card mediaCard">
            <img src="${image}" alt="" />
            <b>${number}</b>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
      <div class="wrap serviceList">
        <span>Website-Texte</span>
        <span>Landingpages</span>
        <span>Sales Pages</span>
        <span>E-Mail-Marketing</span>
        <span>Content-Marketing</span>
        <span>Social Media Marketing</span>
        <span>Google Ads</span>
        <span>Performance Ads</span>
      </div>
    </section>

    <section id="arbeit" class="section alt">
      <div class="wrap split">
        <div>
          <p class="eyebrow">So arbeiten wir</p>
          <h2>Erst verstehen. Dann schärfen. Dann schreiben.</h2>
        </div>
        <p class="intro">Ich starte nicht mit dem cleversten Satz. Ich schaue darauf, wo Menschen aktuell aussteigen, was sie vorher wissen müssen und welche Botschaft sie wirklich zur Anfrage führt.</p>
      </div>
      <div class="wrap process">
        ${process.map(([number, title, text]) => `
          <article>
            <b>${number}</b>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `).join('')}
      </div>
    </section>

    <section id="proof" class="section">
      <div class="wrap proofGrid">
        <article class="quote">
          <p class="eyebrow">Kundenstimme</p>
          <h2>Claudia Kirsch</h2>
          <p class="role">Unternehmensberatung</p>
          <blockquote>
            <p>„Ich bin wirklich beeindruckt, wie individuell Sie sich in meine unternehmerischen Ziele und mein Geschäftsmodell hineingedacht haben.</p>
            <p>Ihre Anregungen zur Optimierung meiner Webseite sind konkret und nachvollziehbar. Sie haben mich überzeugt, wie wichtig die Berücksichtigung der Userperspektive und eine klare SEO-Struktur für die Sichtbarkeit und mehr Anfragen über die Homepage sind. Vielen Dank!“</p>
          </blockquote>
        </article>
        <article class="project">
          <img src="${lukasPhoto}" alt="Lukas Kazimierski" />
          <div>
            <p class="eyebrow">Projektbeispiel</p>
            <h3>Lukas Kazimierski</h3>
            <p>Bei diesem Projekt stand im Mittelpunkt, das Angebot klarer zu positionieren und die Website-Kommunikation verständlicher auf potenzielle Kunden auszurichten. Ohne erfundene Zahlen, ohne künstliche Resultate.</p>
          </div>
        </article>
      </div>
    </section>

    <section id="ueber-mich" class="section alt">
      <div class="wrap about">
        <img class="portrait" src="${thomasPortrait}" alt="Thomas Olesch" />
        <div>
          <p class="eyebrow">Über mich</p>
          <h2>Ich schaue nicht zuerst darauf, ob ein Satz besonders clever klingt.</h2>
          <p>Mich interessiert, warum ein Mensch auf deiner Website landet und trotzdem nicht den nächsten Schritt macht. Dafür verbinde ich Positionierung, Conversion Copy und Suchintention. Damit deine Website nicht einfach beschreibt, was du machst, sondern deinem Wunschkunden zeigt, warum dein Angebot für seine Situation relevant ist.</p>
          <div class="credentials">
            <div><img src="${freedomWriter}" alt="Freedom Writer Academy" /><span>Ausgebildet durch die Freedom Writer Academy</span></div>
            <div><img src="${copyClub}" alt="The Copy Club" /><span>Aktives Community-Mitglied im The Copy Club</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="kontakt" class="section cta">
      <div class="wrap narrow">
        <p class="eyebrow">Nächster Schritt</p>
        <h2>Lass uns prüfen, wo dein Angebot online noch an Klarheit verliert.</h2>
        <p class="intro">Im kostenlosen Gespräch schauen wir auf deine aktuelle Situation, dein Angebot und die Frage, welcher Hebel zuerst Sinn ergibt.</p>
        <div class="heroActions center">
          <a class="btn" href="${CALENDLY}" target="_blank" rel="noreferrer">Kostenloses Analysegespräch buchen</a>
          <a class="textLink" href="mailto:${EMAIL}">${EMAIL}</a>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div>
      <strong>Thomas Olesch - Copywriting</strong>
      <span>Conversion Copywriter</span>
    </div>
    <nav>
      <a href="${INSTAGRAM}" target="_blank" rel="noreferrer">Instagram</a>
      <a href="${LINKEDIN}" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="#kontakt">Kontakt</a>
    </nav>
  </footer>
`;
