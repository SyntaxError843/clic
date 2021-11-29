import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

const SlideUpView = ({
    
    active,
    height,
    style,
    children,

}) => {

    const slideUpAnim = useRef( new Animated.Value( (active ? -height : 0) ) ).current;

    // useEffect( () => {

    //     Animated.timing(

    //         slideUpAnim,
    //         {
    //             toValue: (active ? -height : 0),
    //             duration: 300,
    //             easing: Easing.inOut,
    //             useNativeDriver: true,

    //         }

    //     )
    //     .start();

    // }, [ slideUpAnim ] );

    return (

        <Animated.View
        style={{
            ...style,
            transform: [{ translateY: slideUpAnim }],
        }}
        >
        {children}
        </Animated.View>
        
    );

}

export default SlideUpView;