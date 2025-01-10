import { drawCard} from "../api";
import React, { useEffect } from "react";
import {useState} from "react"
import {Image, View, Text} from "react-native"

export const DrawCard: React.FC<{draw: boolean}> = ({ draw }) => {
    const [cards, setCards] = useState <any[]>([])

    useEffect(()=>{

        drawCard(4).then((data)=>{
            console.log(data, "<---data")
            setCards(data)
        })
    },[draw])
    console.log(cards, "<---cards")

  return (
    <View>
    {cards.map((element, index) => (
        
        <Image 
            key={index}
            source={{ uri: element.image }}
            style={{ width: 200, height: 300 }} 
        />
    ))}
</View>
  )

}