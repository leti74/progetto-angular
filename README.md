# Progetto Angular - Fruity App

## Descrizione

Questa applicazione è sviluppata con Angular 20+ e permette di visualizzare una lista di frutti, consultare i valori nutrizionali di ciascun frutto e cercare un frutto specifico tramite la barra di ricerca. L’app utilizza componenti standalone e lazy loading per ottimizzare il caricamento.  
⚠️ Nota: le chiamate alle API FruityVice funzionano solo in locale grazie al proxy per CORS. Su Firebase Free le API non funzionano senza server intermedio o Funzioni Blaze.

## Funzionalità principali

1. Pagina principale: mostra tutti i frutti disponibili
2. Dettagli frutto: visualizza i valori nutrizionali di ciascun frutto
3. Barra di ricerca: consente di filtrare i frutti per nome
4. Frontend completo Angular con routing, lazy loading e componenti standalone

## Librerie & Tecnologie Usate

- Angular 20.1.3 (generato con Angular CLI)
- TypeScript
- Angular HTTP Client (comunicazione con API)
- Angular Router (gestione della navigazione tra pagine)
- Angular Material (componenti UI)
- RxJS (gestione di Observable e operazioni asincrone)
- TypeScript, HTML, CSS per frontend

## **Come configurare e avviare l’app in locale**

Per eseguire il progetto localmente, segui questi passi:

`git clone https://github.com/leti74/progetto-angular.git`
`cd progetto-angular`
`npm install`
`ng serve`

Apri il browser a:

http://localhost:4200/

L’app si ricaricherà automaticamente ad ogni modifica del sorgente.
GitHub

Per build di produzione:

`ng build`

Per generare nuovi componenti / moduli / servizi (scaffolding Angular CLI):

`ng generate component nome-componente`
`ng generate service nome-servizio`

3. Configurare il proxy per aggirare i CORS creando un file `proxy.conf.json` nella root del progetto:
   {
   "/api": {
   "target": "https://www.fruityvice.com/api",
   "secure": true,
   "changeOrigin": true,
   "pathRewrite": {
   "^/api": ""
   }
   }
   }

## Deploy su Firebase Hosting (Free plan)

1. Inizializzare Firebase nel progetto (se non già fatto):
   firebase init

- Selezionare Hosting: Set up deployments for static web apps
- Impostare la cartella pubblica su `dist/progetto-angular`
- Configurare come Single Page App (rewrite tutte le URL a `index.html`)
- Non configurare GitHub Action (opzionale)

2. Effettuare il deploy:
   firebase deploy --only hosting

Dopo il deploy, il link Firebase mostrerà l’app Angular. ⚠️ Nota: le API FruityVice non funzionano online senza server intermedio o funzioni Blaze.

## Note importanti

- In locale, le chiamate API funzionano grazie al proxy (`/api/...`)
- Su Firebase Free, le chiamate API a FruityVice non funzionano a causa dei CORS
- Per far funzionare le API online servirebbe:
  1. Firebase Blaze + Cloud Functions come proxy, oppure
  2. Un server esterno gratuito (Vercel, Render, ecc.) come proxy

## Comandi utili

| Comando                               | Descrizione                                    |
| ------------------------------------- | ---------------------------------------------- |
| `npm install`                         | Installa tutte le dipendenze del progetto      |
| `ng serve`                            | Avvia il server di sviluppo locale (con proxy) |
| `ng build --configuration production` | Build produzione per deploy                    |
| `firebase deploy --only hosting`      | Deploy su Firebase Hosting                     |

## link github

GitHub: https://github.com/leti74/
