import React, { Children, useCallback, useEffect, useMemo, useState } from 'react';
import { View, Dimensions, Animated, Easing, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

const SCREEN_WIDTH = Dimensions.get("window").width;
export default ({ children, backgroundColor = "#E1E9EE", speed = 800, highlightColor = "#F2F8FC", ...props }) => {
    const [layout, setLayout] = useState();
    const animatedValue = useMemo(() => new Animated.Value(0), []);
    const translateX = useMemo(() => animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
    }), [animatedValue]);

    useEffect(() => {
        const loop = Animated.loop(Animated.timing(animatedValue, {
            toValue: 1,
            duration: speed,
            easing: Easing.ease,
            useNativeDriver: true,
        }));
        if ((layout === null || layout === void 0 ? void 0 : layout.width) && (layout === null || layout === void 0 ? void 0 : layout.height)) {
            loop.start();
        }
        return () => loop.stop();
    }, [animatedValue, speed, layout === null || layout === void 0 ? void 0 : layout.width, layout === null || layout === void 0 ? void 0 : layout.height]);

    const absoluteTranslateStyle = useMemo(() => (Object.assign(Object.assign({}, StyleSheet.absoluteFillObject), { transform: [{ translateX }] })), [translateX]);
    const viewStyle = useMemo(() => ({ backgroundColor, overflow: "hidden" }), [backgroundColor]);

    const getChildren = useCallback((element) => {
        return Children.map(element, (child, index) => {
            let style = child.props.style;
            if (child.props.children) {
                return (
                    <View key={index} style={style}>
                        {getChildren(child.props.children)}
                    </View>
                );
            }
            else {
                return (
                    <View key={index} style={styles.childContainer}>
                        <View style={[style, viewStyle]} />
                    </View>
                );
            }
        });
    }, [viewStyle]);


    return (layout === null || layout === void 0 ? void 0 : layout.width) && (layout === null || layout === void 0 ? void 0 : layout.height)
        ? (
            <MaskedView
                style={{ height: layout.height, width: layout.width }}
                maskElement={
                    <View style={{ backgroundColor: "transparent" }}>
                        {getChildren(children)}
                    </View>}>
                <View style={{ flexGrow: 1, backgroundColor }} />
                <Animated.View style={[{ flexDirection: "row" }, absoluteTranslateStyle]}>
                    {Array.from({ length: SCREEN_WIDTH }).map((_, index) => {
                        const opacity = new Animated.Value(index);
                        return (
                            <Animated.View
                                key={index}
                                style={{
                                    width: 1,
                                    opacity: opacity.interpolate({
                                        inputRange: [0, SCREEN_WIDTH / 2, SCREEN_WIDTH],
                                        outputRange: [0, 1, 0],
                                    }),
                                    backgroundColor: highlightColor,
                                }} />
                        );
                    })}
                </Animated.View>
            </MaskedView>
        )
        : (
            <View onLayout={(event) => { setLayout(event.nativeEvent.layout) }}>
                {getChildren(children)}
            </View>
        );
};

const styles = StyleSheet.create({
    childContainer: {
        position: "relative",
    },
    gradient: {
        flex: 1,
    },
});