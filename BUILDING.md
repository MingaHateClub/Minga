# Building
Build instructions for specific platforms

## Android
Adding platform:
```
cordova platform add android
```

### SPECIAL BUILD INSTRUCTIONS
Next:

**When building to Android, move google-services.json into platforms/android/app/**

Now, replace platforms/android/android.json with this: https://github.com/MingaHateClub/Minga/blob/main/android.json

And replace platforms/android/app/src/main/AndroidManifest.xml with this: https://github.com/MingaHateClub/Minga/blob/main/AndroidManifest.xml

Finally, run:

```
cordova build android
```

# Web
Add the browser platform, then run it:
```
cordova platform add browser
```
```
cordova run browser
```

# Electron
Add the Electron platform, then run it:
(Electron is currently completely non-functional in its current state)
```
cordova platform add electron
```
```
cordova run electron
```
and to build, 
```
cordova build electron
```
