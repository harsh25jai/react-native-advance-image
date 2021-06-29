# react-native-advance-image

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)        [![license](https://img.shields.io/github/license/joinspontaneous/react-native-loading-spinner-overlay.svg)](LICENSE)

#### An Advanced Image component supporting multiple props and methods to show image on react native application in a better way.

## Introduction
Advance image is an upper-layer component package created using react-native's Image Component. It provides better support for loading and errors props for react-native developers.

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
yarn add react-native-advance-image
```
or
```sh
npm install --save react-native-advance-image
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
import React from 'react';
import {SafeAreaView} from 'react-native';
import { AdvanceImage } from 'react-native-advance-image';


const App = () => {
  return (
    <SafeAreaView>
        <AdvanceImage
          loadingType='indicator'
          source={{ uri: 'https://picsum.photos/800' }}
          style={{ height: 300, width: 300 }} />
    </SafeAreaView>
  );
};

export default App;
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