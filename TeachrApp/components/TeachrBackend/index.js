import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { View, Text } from 'react-native'
import CarouselCard, { ITEM_WIDTH, SLIDER_WIDTH } from '../CarouselCard.js'
import CarouselComp from 'react-native-snap-carousel'

const TeachrBackend = () => {

    const [teachr, setTeachr] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/teachrs")
            .then((response) => response.json())
            .then((data) => {
                setTeachr(data);
            });
    }, []);

    const isCarousel = useRef(null);
    return (
        <View>
            <CarouselComp
                layout="tinder"
                layoutCardOffset={9}
                ref={isCarousel}
                data={teachr}
                renderItem={CarouselCard}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
            />
        </View>
    )
}

export default TeachrBackend
