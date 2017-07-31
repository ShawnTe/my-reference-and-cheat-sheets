


## commands
react-native init AppName
cd AppName
react-native run-ios

## Debugging
In simulator, cmd + D  
Select Debug JS remotely  
then in Dev tools, can open Sources and then cmd + P to open the desired file  
and add breakpoints

[Getting started with Facebook docs](https://facebook.github.io/react-native/releases/0.21/docs/getting-started.html)

[Offline First with React Natie and Redux and AsyncStorage](http://rationalappdev.com/offline-first-apps-with-react-native-and-redux/#what-tools-we-will-use)

[Runtime is not ready for debugging!](https://github.com/facebook/react-native/issues/6682)

I had this problem with my iOS app and restarting the mac did not work. I managed to solve it by doing :

Open the iOS project with XCode
Clean the Project (Product -> Clean)
Clean the build folder (*with alt key pressed: Product -> Clean the build folder)
Run react-native run-ios
