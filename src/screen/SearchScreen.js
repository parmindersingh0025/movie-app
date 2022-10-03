import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, Image, LogBox } from 'react-native'
import BottomPopUp from '../component/BottomPopUp'
import MovieComponent from '../component/MovieComponent'
import { ProgressLoader } from '../component/ProgressLoader'
import SearchComponent from '../component/SearchComponent'
import SelectOptionList from '../component/SelectionOptionList'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const popUpList = [
    { heading: 'movie' },
    { heading: 'multi' },
    { heading: 'tv' },
]

const SearchScreen = ({ navigation }) => {
    const [movieList, setMovieList] = useState([])
    const [toValue, setToValue] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [movieSelection, setMovieSelection] = useState("multi")
    const [select, setSelect] = useState('')
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState([])
    const [checkvalidation, setCheckvalidation] = useState(false)
    const [callApi, setCallApi] = useState(false)

    useEffect(() => {
        setIsVisible(false)
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        if (callApi) {
            getMoviesFromApi();
        }

    }, [])
    const handleClose = () => {
        toValue == 1 && setToValue({ toValue: 0, openModal: false })
    }
    const showPopUp = () => {
        setToValue(1)
    }
    // const getMoviesFromApi = (item) => {
    //     setIsVisible(true)
    //     return fetch(item ? item : '')
    //         .then((response) => response.json())
    //         .then((json) => {
    //             console.log("json==", json.results)
    //             setIsVisible(false)
    //             // return json.results;
    //             setMovieList(json.results)
    //             setFilterData(json.results)
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             setIsVisible(false)
    //         });
    // };

    async function getMoviesFromApi(item){
        console.log('await item ',item)

        const response = await fetch(item)
        console.log('await response ',response)
    } 

    const filterMovie = (item) => {
        console.log('filterMovie search ',item)
        if (item === 'movie') {
            getMoviesFromApi('https://api.themoviedb.org/3/search/movie?api_key=502943dc438dc0caf85eb7b3717b1a10&language=en-US&query=body&page=1')
            setMovieSelection(item)
            setSelect(item)
            setToValue(0)
            setCallApi(true)
        } else if (item === 'multi') {
            getMoviesFromApi('https://api.themoviedb.org/3/search/multi?api_key=502943dc438dc0caf85eb7b3717b1a10&language=en-US&query=king&page=1')
            setMovieSelection(item)
            setSelect(item)
            setToValue(0)
            setCallApi(true)
        } else if (item === 'tv') {
            getMoviesFromApi('https://api.themoviedb.org/3/search/tv?api_key=502943dc438dc0caf85eb7b3717b1a10&language=en-US&page=1&query=war&include_adult=false')
            setMovieSelection(item)
            setSelect(item)
            setToValue(0)
            setCallApi(true)
        } else {
            setMovieList([])
            setCallApi(true)
        }
    }
    const searchFilter = (text) => {
        if (text) {
            setCheckvalidation(false)
            const newData = movieList.filter((item) => {
                const itemData = item.original_title ? item.original_title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1
            })
            setFilterData(newData);
            setSearch('')
        } else {
            setFilterData(movieList)
            setSearch('')
            setCheckvalidation(true)
        }

    }
    return (
        <View style={styles.container}>
            {/* <ProgressLoader
                isVisible={isVisible}
            /> */}
            <Text style={{ marginLeft: 20, fontSize: 18 }}>Search Movie/Tv Show Name</Text>
            <View style={{ backgroundColor: 'lightgray', width: '90%', alignSelf: 'center', margin: 10, flexDirection: 'row', alignItems: 'center', height: 40 }}>
                <EvilIcons size={26} color="gray" name="search" style={{ left: 10 }} />
                <TextInput
                    placeholder={'search movie'}
                    style={{ left: 10 }}
                    value={search}
                    onChangeText={(text) => setSearch(text)}

                />
            </View>
            {
                checkvalidation && <Text style={{ marginLeft: 20, bottom: 8, color: 'red' }}>please search movie name </Text>
            }
            <Text style={{ marginLeft: 20, bottom: 8 }}>Choose Search Type</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <SearchComponent
                    onPress={() => showPopUp()}
                    movieSelection={movieSelection}
                />
                <TouchableOpacity onPress={() => searchFilter(search)} style={{ backgroundColor: 'skyblue', height: 40, width: 100, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <EvilIcons size={26} color="gray" name="search" style={{}} />
                    <Text style={{ color: 'white' }}>Search</Text>
                </TouchableOpacity>

            </View>
            <Text style={{ marginLeft: 20, bottom: 8, fontSize: 12 }}>Please Select a Search Type</Text>
            <FlatList
                data={filterData}
                renderItem={({ item }) => {
                    return (
                        <MovieComponent
                            original_title={item.original_title}
                            popularity={item.popularity}
                            release_date={item.release_date}
                            poster_path={item.poster_path}
                            onPress={() => navigation.navigate('Movie details', { original_title: item.original_title, overview: item.overview })}
                        />
                    )
                }}
            />
            <BottomPopUp closeModal={handleClose} isVisible={toValue == 1 ? true : false} >
                <View style={{ paddingHorizontal: 20, }}>
                    <Text onPress={() => setToValue(0)} style={{ fontSize: 22, color: 'black', alignSelf: 'flex-end' }}>X</Text>
                </View>
                <FlatList
                    data={popUpList}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => filterMovie(item.heading)} style={[styles.filterButton, { backgroundColor: item.heading === select ? "#32CD32" : 'white' }]}>
                                <Text style={[styles.filterText, {}]}>{item.heading}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
                {/* <SelectOptionList
                    data={popUpList}
                    filterMovie={filterMovie}
                    select={select}
                /> */}
            </BottomPopUp>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filterButton: {
        margin: 1,
        height: 50,
        justifyContent: 'center'
    },
    filterText: {
        fontSize: 20,
        fontWeight: '400',
        left: 10
    }

})
export default SearchScreen;