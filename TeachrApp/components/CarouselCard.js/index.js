import React from 'react'
import { View, Text, Dimensions, Image, Button, StyleSheet, Pressable } from 'react-native'
import styles from './styles'

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCard = ({ item, index }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />

            <Text style={styles.identity}>{item.prenom} {item.nom}</Text>

            <Text style={styles.titles}>Formation</Text>
            <Text style={styles.infos}>{item.formation}</Text>

            <Text style={styles.titles}>Description</Text>
            <Text style={styles.infos}>{item.description}</Text>

            <View style={StyleSheet.create({
                marginTop: 35
            })}>
                <Button
                    title="Prendre cours avec ce Teach'r"
                />
                <Pressable style={styles.button2}>
                    <Text style={styles.textButton}>Retirer ce Teach'r de mes favoris</Text>
                </Pressable>
            </View>


        </View>
    )
}

export default CarouselCard
