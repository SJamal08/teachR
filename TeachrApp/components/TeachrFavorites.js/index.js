import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import CarouselComp from 'react-native-snap-carousel'
import data from '../../assets/data/data'
import CarouselCard, { ITEM_WIDTH, SLIDER_WIDTH } from '../CarouselCard.js'

const TeachrFavorites = () => {

    const navigation = useNavigation();

    const goToBackend = () => {
        navigation.navigate('Teachr Backend')
    }

    const isCarousel = useRef(null);

    const [teachr, setTeachr] = useState(data)
    return (
        <View>
            <CarouselComp
                layout="tinder"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCard}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
            />

            {/* {
                data.map((teachr) => (
                    <CarouselCard item={teachr} />
                ))

            } */}

            <Button
                title="Go to teach'r with backend"
                onPress={goToBackend}
            />
        </View>
    )
}

export default TeachrFavorites
