# react-native-advance-image

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)        [![license](https://img.shields.io/github/license/joinspontaneous/react-native-loading-spinner-overlay.svg)](LICENSE)

#### An Advanced Image component supporting multiple props and methods to show image on react native application in a better way.

## Introduction
Advance image is upper component package created using react-native's Image Component with build in proper supporting better image implementatioin on react-native applications.

## Features
- Better Support for Image
- Provides better support for Image Loading
- Supports better error handling of Image

## System Requirements
Globally installed node >= 6.0  
Globally installed npm >= 4.0  
React native version > 60  

## Installation
```sh
yarn add @react-native-image/advanced-image
```
or
```sh
npm install --save @react-native-image/advanced-image
```
## Props
| Name | Type | Description | Default |
| ------ | ------ | ------ | ------ |
| style | Image Style Props |
| source | ImageSource | The image source (either a remote URL or a local file resource). | |
| resizeMethod | enum('auto', 'resize', 'scale') | The mechanism that should be used to resize the image when the image's dimensions differ from the image view's dimensions. | auto |
| resizeMode | enum('cover', 'contain', 'stretch', 'repeat', 'center') | Determines how to resize the image when the frame doesn't match the raw image dimensions. | cover |
| borderRadius | number | Define border Radius for Image | | 
| backgroundColor | ColorValue | Define Background Color for Loading Image | |
| loadingType |enum('image', 'skeleton', 'icon', 'indicator', 'none') | Choose Loading type when image will be fetched | indicator |
| loadingIndicatorStyle | Image Style Props |
| loadingImageSource | ImageSource | The image source (either a remote URL or a local file resource) for showing image on Loading. |
| ErrorImageSource | ImageSource | The image source (either a remote URL or a local file resource) for showing image on Error. | |
| ErrorImageStyle | Image Style Props |

Inherits [ImageProps](https://reactnative.dev/docs/image#props)

## Usage
 ```js
   this.setState({ spinner: false });

   setTimeout(() => {
     Alert.alert('Oops!', err.message);
   }, 100);
   ```

## Peer Dependencies
| Library |
| ------ |
| react |
| react-native
| react-native-skeleton-placeholder | 
| prop-types |


## License

MIT

**Free Software, Hell Yeah!**