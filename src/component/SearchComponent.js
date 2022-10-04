import React,{useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import SearchScreen from '../screen/SearchScreen'
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchComponent = ({ onPress, movieSelection }) => {
    // const onPress = (val) =>{

    // }
    const [inputVal, setInputVal] = useState();
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container,]}>
            {/* <TextInput
            onChangeText={(e)=>setInputVal(e.target.value)}
            placeholder='Enter a movie name'
            value={inputVal}
    /> */}
        <Text on style={styles.textStyle}>{movieSelection}</Text>

            <AntDesign size={20} color="black" name="down" />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "60%",
        height: 40,
        elevation: 4,
        alignSelf: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        margin: 10
    },
    textStyle: {
        fontSize: 15,
    }

})
export default SearchComponent;