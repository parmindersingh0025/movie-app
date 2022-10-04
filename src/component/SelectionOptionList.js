import { View, Text, TouchableOpacity, SectionList, StyleSheet } from 'react-native';
import React from 'react';
const SelectOptionList = ({ data, filterMovie, select    }) => {
    return (
        <View style={{ margin: 30 }}>
            {data.map((item) => {
                // console.log("item", item.id)
                return (
                    <TouchableOpacity style={[styles.filterButton, { backgroundColor: item.heading === select ? "#F79489" : 'white' }]} onPress={() => filterMovie(item.heading)}>
                        <Text
                            style={{ fontSize: 15, fontWeight: 'bold', }}
                        >
                            {item.heading}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    filterButton: {
        margin: 1,
        justifyContent: 'center',
        height: 30,
        width: '100%'
    },
})
export default SelectOptionList