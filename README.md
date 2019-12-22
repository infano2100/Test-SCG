## Getting Started

Download with: 

```sh 
git clone https://github.com/infano2100/Test-SCG.git && cd Test-SCG
```

Install Libs:

```sh 
- npm i
- add google aip key
  - cd ios/Test_SCG
  - open file AppDelegate.m
  - 
```

Add Googole Api Key:

```sh 
- cd ios/Test_SCG
- open file AppDelegate.m
- edit line [GMSPlacesClient provideAPIKey:@"IOS_API_KEY"]; => "IOS_API_KEY" = add google api key
- edit line [GMSServices provideAPIKey:@"IOS_API_KEY"]; => "IOS_API_KEY" = add google api key
```

Pod Install:

```sh 
- cd ios/ && pod install
 ![alt test](screenshots/pod-install-erro.png)
  when CocoaPods could not find compatible versions for pod "GoogleMaps"
  

```

Run with:

```sh 
- run ios => react-native run-ios
- run android => react-native run-android
```
