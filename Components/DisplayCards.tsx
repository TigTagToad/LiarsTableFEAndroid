import { drawCard} from "../api";
import React, { useEffect } from "react";
import {useState} from "react"
import {Image, View, Text, Pressable, TouchableOpacity} from "react-native"
import { useContext } from "react";
import { HandContext } from "../Contexts/PlayerHandContext";
import Animated, {
    interpolateColor,
    measure,
    useAnimatedRef,
    useAnimatedStyle,
    useSharedValue,
    withDecay,
    withTiming,
  } from 'react-native-reanimated';
  
import { Gesture, GestureDetector } from "react-native-gesture-handler";


export const DisplayCards: React.FC<{}> = () => {

    // const offset = useSharedValue({ x: 0, y: 0 });
    // const start = useSharedValue({ x: 0, y: 0 });
    // const scale = useSharedValue(1);
    // const savedScale = useSharedValue(1);
    // const rotation = useSharedValue(0);
    // const savedRotation = useSharedValue(0);
    // const animatedStyles = useAnimatedStyle(() => {
    //   return {
    //     transform: [
    //       { translateX: offset.value.x },
    //       { translateY: offset.value.y },
    //       { scale: scale.value },
    //       { rotateZ: `${rotation.value}rad` },
    //     ],
    //   };
    // });
  
    // const dragGesture = Gesture.Pan()
    //   .averageTouches(true)
    //   .onUpdate((e) => {
    //     offset.value = {
    //       x: e.translationX + start.value.x,
    //       y: e.translationY + start.value.y,
    //     };
    //   })
    //   .onEnd(() => {
    //     start.value = {
    //       x: offset.value.x,
    //       y: offset.value.y,
    //     };
    //   });
    //   const composed = Gesture.Simultaneous(
    //     dragGesture
    //   );
    

const { hand } = useContext(HandContext);
  return (
    <View>
        {/* <GestureDetector gesture={composed}> */}

    {hand.map((element, index) => (
        <Pressable style={({pressed})=>{return {
            opacity: pressed ? 0.5:1}
        } }>

            <Image 
                key={index}
                source={{ uri: element.image }}
                style={{width: 100, height:150}} 
              
            />
        </Pressable>
    ))}
        {/* </GestureDetector> */}
</View>
  )

}