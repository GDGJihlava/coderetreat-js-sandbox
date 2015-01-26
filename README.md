# coderetreat-js-sandbox
Sandbox pro spouštění testů v Javascriptu

## Co si nainstalovat
- git - http://git-scm.com/downloads
- aktuální verzi nodeJS - http://nodejs.org/download/

## Jak to zprovoznit
naklonujte si git repozitář
```
git clone https://github.com/GDGJihlava/coderetreat-js-sandbox.git
``` 
přesuňte se do složky s repozitářem
```
cd coderetreat-js-sandbox/
``` 
nainstalujte závislosti
```
npm install
``` 

## Spuštění testů
testy spustíte příkazem
```
npm test
``` 
Příkaz spustí testy a dále sleduje změny složky src, takže při každé změně zdrojových kódů, nebo testů spustí testy znovu.

Pokud chcete, aby se testy spustili pouze jednou, bez sledování složky src, použijte příkaz
```
npm run test-single-run
```

