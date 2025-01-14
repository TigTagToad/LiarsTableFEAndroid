import { drawCard} from "../api";
import React, { useEffect } from "react";

import Animated, {
    interpolateColor,
    measure,
    useAnimatedRef,
    useAnimatedStyle,
    useSharedValue,
    withDecay,
    withTiming,
  } from 'react-native-reanimated';
import { StyleSheet } from "react-native";
  
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface DraggableCardProps {
    children: React.ReactNode;
    initialPostion?: {x: number; y: number};
    onDragEnd?: (position: {x: number; y: number}) => void;
    style?: any;
    zIndex?: number;
}

export const DraggableCard: React.FC<DraggableCardProps> = ({
    children,
    initialPostion = {x:0, y:0},
    style,
    zIndex = 0
}) => {
    const offset = useSharedValue(initialPostion)
    const start = useSharedValue(initialPostion)
    const isDragging = useSharedValue(false)
    
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value.x },
                { translateY: offset.value.y },
            ],
            zIndex: isDragging.value ? 1000 + zIndex : zIndex,
        };
    });

    const dragGesture = Gesture.Pan()
        .onUpdate((e) => {
            offset.value = {
                x: e.translationX + start.value.x,
                y: e.translationY + start.value.y,
            };
        })
        .onEnd(() => {
            start.value = {
                x: offset.value.x,
                y: offset.value.y,
            };
        });
    return (
        <GestureDetector gesture={dragGesture}>
            <Animated.View style={[styles.container, style, animatedStyles]}>
                {children}
            </Animated.View>
        </GestureDetector>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    },
});