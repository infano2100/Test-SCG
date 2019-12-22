## Getting Started

Download with: 

```sh 
git clone https://github.com/infano2100/Test-SCG.git && cd Test-SCG
```

Install Libs:

```sh 
- npm i
```

Add Googole Api Key:

```sh 
- cd ios/Test_SCG
- open file AppDelegate.m
- edit line [GMSPlacesClient provideAPIKey:@"IOS_API_KEY"]; => "IOS_API_KEY" = google api key
- edit line [GMSServices provideAPIKey:@"IOS_API_KEY"]; => "IOS_API_KEY" = google api key
```

Pod Install:

```sh 
- cd ios/ && pod install
```

Fix Pod Install Error When CocoaPods could not find compatible versions for pod "GoogleMaps":
 
 ![alt test](screenshots/pod-install-erro.png)
 
```sh 
 - cd node_modules/react-native-google-places/
 - open file react-native-google-places.podspec
 - edit line s.dependency 'GooglePlaces', '~> 3.1.0' => s.dependency 'GooglePlaces', '~> 3.2.0'
 - edit line s.dependency 'GoogleMaps', '~> 3.1.0' => s.dependency 'GoogleMaps', '~> 3.2.0'
```

 ![alt test](screenshots/podspec-3.1.png)
 ![alt test](screenshots/podspec-3.2.png)

Run with:

```sh 
- run ios => react-native run-ios
```
