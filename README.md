# coderetreat-js-sandbox
Sandbox pro spouštění testů v Javascriptu

## Co si nainstalovat
- git - http://git-scm.com/downloads
- aktuální verzi nodeJS - http://nodejs.org/download/

## Jak to zprovoznit
naklonuj si git repozitář
```
git clone https://github.com/GDGJihlava/coderetreat-js-sandbox.git
``` 
přesuň se do složky s repozitářem
```
cd coderetreat-js-sandbox/
``` 
nainstaluj závislosti
```
npm install
``` 

## Spuštění testů
testy spustíš příkazem
```
npm test
``` 
Příkaz spustí testy a dále sleduje změny složky src, takže při každé změně zdrojových kódů, nebo testů spustí testy znovu.

Pokud chceš, aby se testy spustili pouze jednou, bez sledování složky src, použij příkaz
```
npm run test-single-run
```

## A co to vlastně umí?
Vlastně nic moc, je to jen základní prostředí, ve kterém můžeš psát JS kód a testy. 
Kód je při spuštění testů interpretován v prohlížeči pomocí karma runneru, test je napsaný v Jasmine (http://jasmine.github.io/2.0/introduction.html - ten odkaz si schovej, až budeš na coderetreatu psát svoje testy, určitě se ti bude hodit)
