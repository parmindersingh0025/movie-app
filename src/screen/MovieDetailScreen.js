import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const MovieDetailScreen = ({ route }) => {
    console.log("route", route.params.overview)
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{route?.params?.original_title}</Text>
            <Image
                style={styles.imageView}
                source={{ uri: 'https://media.gettyimages.com/photos/captain-america-the-first-avenger-movie-poster-picture-id458467163?s=612x612' }}
            />
            <Text style={{ margin: 30, fontSize: 15, color: 'gray' }}>{route.params.overview}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // top: 30,
        margin: 30
    },
    imageView: {
        height: 208,
        width: 200,
        top: 10
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    }

})
export default MovieDetailScreen;