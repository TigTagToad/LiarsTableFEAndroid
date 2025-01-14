
import React from "react";

import {Image, View, Text, Pressable, TouchableOpacity} from "react-native"
import { useContext } from "react";
import { HandContext } from "../Contexts/PlayerHandContext";

import { DraggableCard } from "../utils/Draggable";


export const DisplayCards: React.FC<{}> = () => {



const { hand } = useContext(HandContext);
  return (

    <View>

    {hand.map((element, index) => (
      <DraggableCard 
        key={index}
        initialPostion={{ x: index * 40, y: index * 5}}
        >

        <Pressable style={({pressed})=>{return {
            opacity: pressed ? 0.5:1}
            
        } }key={index}>

            <Image 
                key={index}
                source={{ uri: element.image }}
                style={styles.cardImage} 
              
            />
        </Pressable>
      </DraggableCard>
    ))}
    </View>

  )

};
const styles = {
  container: {
      position: 'relative',
      height: 400,
      width: '100%',
  },
  cardImage: {
      width: 100,
      height: 150,
  }
};