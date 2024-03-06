# Ionic & Angular & iOS

| This repo uses the ionic build a cross-platform project, frontend framework uses Angular 17, iOS uses Swift 5.9.

## How to set up an Ionic Project?
- Install Node.js
- Install Ionic CLI
- Create a new project
```bash
npm install -g @ionic/cli
ionic start myApp tabs
```
- Run the app
```bash
cd myApp
ionic serve
```
- Select Capacitor (recommanded) or Cordova
```bash
ionic integrations enable capacitor
```
- Add platforms
```bash
ionic capacitor add ios
ionic capacitor add android
```
- Build the app
```bash
ionic build
npx cap copy
```
- Open the app in Xcode
```bash
ionic capacitor open ios
```

### Issues in Xcode for Pods
- If you have issues with the pods, try to install CocoaPods which is the dependency manager for Swift and Objective-C Cocoa projects.
```bash
brew install cocoapods
```
- Then, install the pods in the iOS folder which you can see all the project files.
```bash
pod install
```

Now you can see the most simpliest project in the ionic framework. You can start to develop your project with the Ionic CLI.

## How to set up an Angular Project?
I assume you have already seen the Angular project in https://github.com/MinyiZou/Projects_IN_Angular. If you haven't seen it, you can check it out. It's a good start to learn Angular and single page application which you can just easily copy and paste the code to your project. I will only show you how to implement the Angular project in the Ionic project in this repository.


## Change current Angular project to Ionic project
- First, you need to create a new project in the Ionic CLI which I mentioned before, you can select black or tabs, it's up to you. But in here, I will use the tabs project.
```bash
ionic start myApp tabs
```

- Then, you can copy and paste the Angular project to the Ionic project, like the products and cart folder in the Angular project. 
- Then you may need to install the Angular Material and Angular Flex-Layout in the Ionic project which I simply use for the UI design.
```bash
npm install @angular/material @angular/cdk @angular/flex-layout @angular/animations
```

In order to reduce my job to copy and paste the code, I will use `<app-cart-view>` in tabs/tab3.page.html to show the cart view. And you just need to declare it in tabs.module.ts . Then you can see the cart view in the Ionic project.

### Mock http request
Here is the mock api which you can download mookoon and import this attached file to the mookoon. Then you can use the http request to get the data from the server. 
[doc/Amazing Animal Paintings.json]()
Or use the json to mock the data from the server.


## Screenshots
- Tab1: Tab 1 use the local storage to store the appointment data. You can add, delete and edit the appointment. You can also see the appointment details by clicking the appointment.
![doc/1.png]()  
- Tab2: Tab 2 & 3 use the http request to get the data from the server. You can add the product to the cart and see the cart view in Tab3.
![doc/2.png]()  
- Tab3:
![doc/3.png]()  