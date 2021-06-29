import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, ActivityIndicator, ImageBackground, StyleProp, ImageStyle, ImageSourcePropType, ImageResizeMode, ColorValue } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { defaultError, defaultLoading } from './assets';

interface AdvanceImageProps {
    /**
     * Style
     */
    style: StyleProp<ImageStyle>;

    /**
     * The image source (either a remote URL or a local file resource).
     *
     * This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments.
     * The native side will then choose the best uri to display based on the measured size of the image container.
     * A cache property can be added to control how networked request interacts with the local cache.
     *
     * The currently supported formats are png, jpg, jpeg, bmp, gif, webp (Android only), psd (iOS only).
     */
    source: ImageSourcePropType;

    /**
     * Determines how to resize the image when the frame doesn't match the raw
     * image dimensions.
     *
     * 'cover': Scale the image uniformly (maintain the image's aspect ratio)
     * so that both dimensions (width and height) of the image will be equal
     * to or larger than the corresponding dimension of the view (minus padding).
     *
     * 'contain': Scale the image uniformly (maintain the image's aspect ratio)
     * so that both dimensions (width and height) of the image will be equal to
     * or less than the corresponding dimension of the view (minus padding).
     *
     * 'stretch': Scale width and height independently, This may change the
     * aspect ratio of the src.
     *
     * 'repeat': Repeat the image to cover the frame of the view.
     * The image will keep it's size and aspect ratio. (iOS only)
     *
     * 'center': Scale the image down so that it is completely visible,
     * if bigger than the area of the view.
     * The image will not be scaled up.
     */
    resizeMode?: ImageResizeMode;

    /**
     * The mechanism that should be used to resize the image when the image's dimensions
     * differ from the image view's dimensions. Defaults to `auto`.
     *
     * - `auto`: Use heuristics to pick between `resize` and `scale`.
     *
     * - `resize`: A software operation which changes the encoded image in memory before it
     * gets decoded. This should be used instead of `scale` when the image is much larger
     * than the view.
     *
     * - `scale`: The image gets drawn downscaled or upscaled. Compared to `resize`, `scale` is
     * faster (usually hardware accelerated) and produces higher quality images. This
     * should be used if the image is smaller than the view. It should also be used if the
     * image is slightly bigger than the view.
     *
     * More details about `resize` and `scale` can be found at http://frescolib.org/docs/resizing-rotating.html.
     *
     * @platform android
     */
    resizeMethod?: 'auto' | 'resize' | 'scale';

    /**
     * The border radius for the image.
     */
    borderRadius?: number;

    /**
     * The background color of the loading image.
     */
    backgroundColor?: ColorValue;

    /**
     * Defines the loading type used while the image is being loaded.
     * 
     * - `image`: A loading image passed through prop loadingImageSource or a default loading image while loading the source image.
     * 
     * - `skeleton`: A placeholder skeleton is shown while loading the image.
     * 
     * - `icon`: An icon is shown while loading the image.
     * 
     * - `indicator`: An indicator is shown while loading the image.
     * 
     * - `none`: To display none while loading the image
     */
    loadingType?: 'image' | 'skeleton' | 'icon' | 'indicator' | 'none';

    /**
     * Style for Loading Indicator
     */
    loadingIndicatorStyle?: StyleProp<ImageStyle>;

    /**
     * Style for Loading Image
     */
    loadingImageStyle?: StyleProp<ImageStyle>;

    /**
     * similarly to `source`, this property represents the resource used to render
     * the loading indicator image for the image, displayed until image is ready to be
     * displayed, typically after when it got downloaded from network.
     */
    loadingImageSource?: ImageSourcePropType;

    /**
     * similarly to `source`, this property represents the resource used to render
     * the error image for the image, displayed until image is ready to be
     * displayed, typically after when it got downloaded from network.
     */
    ErrorImageSource?: ImageSourcePropType;

    /**
     * Style for Error Image
     */
    ErrorImageStyle?: StyleProp<ImageStyle>;
}

export default function AdvanceImage({
    style,
    source,
    resizeMode,
    resizeMethod,
    borderRadius,
    backgroundColor,
    loadingType,
    loadingIndicatorStyle,
    loadingImageStyle,
    loadingImageSource,
    ErrorImageSource,
    ErrorImageStyle
}: AdvanceImageProps) {
    const [mainSource, setMainSource] = useState(source);
    useEffect(() => { setMainSource(source) }, [source]);
    const [ImageState, setImageState] = useState({
        loading: true,
        error: false,
    });

    const onImageLoadEnd = () => {
        setImageState({
            ...ImageState,
            loading: false,
        });
    };

    const LoadingComp = ({ type }) => {
        if (type == 'image') {
            return (
                <Image
                    style={
                        loadingImageStyle
                            ? loadingImageStyle
                            : [styles.imagePlaceholderStyles, loadingImageStyle]
                    }
                    source={
                        loadingImageSource
                            ? loadingImageSource
                            : defaultLoading
                    }
                />
            );
        }

        if (type == 'skeleton') {
            return (
                <SkeletonPlaceholder>
                    <View style={style} />
                </SkeletonPlaceholder>
            );
        }

        return (
            <ActivityIndicator
                style={styles.activityIndicator}
                size={loadingIndicatorStyle ? loadingIndicatorStyle.size : 'small'}
                color={loadingIndicatorStyle ? loadingIndicatorStyle.color : 'black'}
            />
        );
    };

    const ErrorFunc = () => {
        setImageState({
            ...ImageState,
            error: true,
        });
        const errorSource = ErrorImageSource ? ErrorImageSource : defaultError;
        setMainSource(errorSource);
    };

    return (
        <ImageBackground
            onLoadEnd={() => onImageLoadEnd()}
            onError={() => ErrorFunc()}
            style={[styles.backgroundImage, (ImageState.error && ImageState.loading && ErrorImageSource && ErrorImageStyle) ? ErrorImageStyle : style]}
            source={mainSource}
            resizeMode={resizeMode}
            resizeMethod={resizeMethod}
            borderRadius={borderRadius}
            progressiveRenderingEnabled>
            {ImageState.loading || ImageState.error ? (
                <View
                    style={[
                        styles.viewImageStyles,
                        { borderRadius: borderRadius },
                        backgroundColor ? { backgroundColor: backgroundColor } : {},
                    ]}>
                    {ImageState.loading && !ImageState.error && loadingType != 'none' ? <LoadingComp type={loadingType} /> : null}
                </View>
            ) : null}
        </ImageBackground>
    );
};


const styles = StyleSheet.create({
    backgroundImage: {
        position: 'relative',
        overflow: 'hidden'
    },
    activityIndicator: {
        position: 'absolute',
        margin: 'auto',
        zIndex: 9,
    },
    viewImageStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePlaceholderStyles: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewChildrenStyles: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
    },
});
