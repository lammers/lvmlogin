# lvmlogin

## Vorraussetzungen
```
npm install -g ionic@beta
npm install 
```
## Run with
```
ionic serve --lab // Damit kann lokal im Browser getestet werden
// für ios muss xcode vorhanden sein
// für android muss ANDROID_HOME und JAVA_HOME als SystemProperties gesetzt sein
ionic run android|ios --device // zum direkten Testen auf einem angeschlossenen Device
```


## http Post
In der [Page1](https://github.com/grueny/lvmlogin/blob/master/app/pages/page1/page1.ts) befindet sich die Methode login. Darin wird der http.post ausgeführt.
