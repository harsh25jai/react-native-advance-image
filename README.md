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
| Name | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| style | Image Style Props |||
| source | ImageSource || The image source (either a remote URL or a local file resource). |
| resizeMethod | enum('auto', 'resize', 'scale') | auto | The mechanism that should be used to resize the image when the image's dimensions differ from the image view's dimensions. |
| resizeMode | enum('cover', 'contain', 'stretch', 'repeat', 'center') | cover | Determines how to resize the image when the frame doesn't match the raw image dimensions. |
| borderRadius | number || Define border Radius for Image. | 
| backgroundColor | ColorValue || Define Background Color for Loading Image. |
| loadingType | enum('image', 'skeleton', 'indicator', 'none') | indicator | Choose a Loading type to be shown when the image will be fetched. |
| loadingIndicatorStyle | Image Style Props {size: 'small'or'large', color: ColorString} |{size: 'small', color: 'black'}| Style object for indicator style only. |
| loadingImageSource | ImageSource || The image source (either a remote URL or a local file resource) for showing image on Loading.|
| errorImageSource | ImageSource || The image source (either a remote URL or a local file resource) for showing image on Error. |
| errorImageStyle | Image Style Props |||

Inherits [ImageProps](https://reactnative.dev/docs/image#props)

## Usage
 ```js
import React from 'react';
import {SafeAreaView} from 'react-native';
import { AdvanceImage, AdvanceImageBackground } from 'react-native-advance-image';


const App = () => {
  return (
    <SafeAreaView>
      
      {/* Indicator loading example */}
      <AdvanceImage
        loadingType="indicator"
        source={{ uri: 'https://picsum.photos/800' }}
        style={{ height: 300, width: 300, margin: 5 }}
      />

      {/* None loading example */}
      <AdvanceImage
        loadingType="none"
        source={{ uri: 'https://picsum.photos/600' }}
        style={{ height: 300, width: 300, margin: 5 }}
      />

      {/* default Image loading example */}
      <AdvanceImage
        loadingType="image"
        source={{ uri: 'https://picsum.photos/650' }}
        style={{ height: 300, width: 300, margin: 5 }}
      />

      {/* Image loading example */}
      <AdvanceImage
        loadingType="image"
        loadingImageSource={require('./assets/snack-icon.png')}
        source={{ uri: 'https://picsum.photos/950' }}
        style={{ height: 300, width: 300, margin: 5 }}
      />

      {/* Skeleton loading example */}
      <AdvanceImage
        loadingType="skeleton"
        source={{uri:'https://picsum.photos/4000'}}
        style={{ height: 300, width: 300 }}
      />

      {/* default Error example */}
      <AdvanceImage
        loadingType="indicator"
        source={{ uri: 'https://picsum.photos' }}
        style={{ height: 300, width: 300, margin: 5 }}
      />
      
      {/* Image Error example */}
      <AdvanceImage
        loadingType="indicator"
        errorImageSource={require('./assets/snack-icon.png')}
        source={{ uri: 'https://picsum.photos' }}
        style={{ height: 300, width: 300, margin: 5 }}
      />
      
      {/* ImageBackground example */}
      <AdvanceImageBackground
        loadingType="indicator"
        source={{ uri: 'https://picsum.photos/975' }}
        style={{ height: 300, width: 300, margin: 5 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'red', fontSize: 20 }}>Image Baqckground</Text>
        </View>
      </AdvanceImageBackground>

    </SafeAreaView>
  );
};

export default App;
   ```
[Expo Snack Example](https://snack.expo.io/GFu08NwTe)
## Peer Dependencies
| Library |
| ------ |
| react |
| react-native |
| @react-native-masked-view/masked-view |

## License

MIT

**Free Software, Hell Yeah!**