import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

const MovieComponent = ({ original_title, popularity, release_date, onPress, poster_path }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View>
                <Image
                    style={styles.imageView}
                    source={{ uri: 'https://media.gettyimages.com/photos/captain-america-the-first-avenger-movie-poster-picture-id458467163?s=612x612' }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.text, { fontWeight: 'bold', fontSize: 17 }]}>{original_title}</Text>
                <Text style={styles.text}>Popularity:{popularity}</Text>
                <Text style={styles.text}>release_date":{release_date}</Text>
                <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
                    <Text>More Details</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        width: '90%',
        alignSelf: 'center',
        margin: 10,
        flexDirection: 'row',
    },
    imageView: {
        height: 118,
        width: 100,
    },
    textContainer: {
        margin: 10
    },
    text: {
        fontSize: 14
    },
    buttonStyle: {
        height: 40,
        width: 170,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 3
    }

})
export default MovieComponent;