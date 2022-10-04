import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const MovieDetailScreen = ({ route }) => {
    console.log("routeparams params", route.params.poster_path)
    console.log("routeaaaaaaaaaaaaaa    ", route)
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{route?.params?.original_title}</Text>
            <Image
                style={styles.imageView}
                source={{ uri: 'https://image.tmdb.org/t/p/w154'+ route.params.poster_path }}
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