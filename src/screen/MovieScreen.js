import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity, LogBox } from 'react-native'
import BottomPopUp from '../component/BottomPopUp'
import MovieComponent from '../component/MovieComponent'
import { ProgressLoader } from '../component/ProgressLoader'
import SearchComponent from '../component/SearchComponent'
import SelectOptionList from '../component/SelectionOptionList'

const popUpList = [
    { heading: 'now_playing' },
    { heading: 'popular' },
    { heading: 'top_rated' },
    { heading: 'upcomming' }
]

const MovieScreen = ({ navigation }) => {
    const [movieList, setMovieList] = useState([])
    const [toValue, setToValue] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    const [movieSelection, setMovieSelection] = useState("Popular")
    const [select, setSelect] = useState('')

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        getMoviesFromApi();
    }, [])
    const handleClose = () => {
        toValue == 1 && setToValue({ toValue: 0, openModal: false })
    }
    const showPopUp = () => {
        setToValue(1)
    }
    const getMoviesFromApi = (item) => {
        console.log('response.json     122333',item)
        setIsVisible(true)
        return fetch(item ? item : 'https://api.themoviedb.org/3/search/movie?api_key=502943dc438dc0caf85eb7b3717b1a10&language=en-US&query=body&page=1')
            .then((response) => {response.json()
            console.log('await response ',response.json())
        })
            .then((json) => {
                console.log('awaitjson ',json)

                setIsVisible(false)
                setMovieList(json.results)
            })
            .catch((error) => {
                console.log('errorresponse ',error)

                console.error(error);
            });
    };
    // const getMoviesFromApi = async (item) =>{
    //     console.log('await item ',item)

    //     const response = await fetch(item)
    //     console.log('await response ',response)
    // } 

    const filterMovie = (item) => {
        console.log('filterMovie movie ',item)
        if (item === 'now_playing') {
            getMoviesFromApi('https://api.themoviedb.org/3/search/movie?api_key=502943dc438dc0caf85eb7b3717b1a10&language=en-US&query=body&page=1')
            setMovieSelection(item)
            setSelect(item)
            setToValue(0)
        } else if (item === 'popular') {
            getMoviesFromApi('https://api.themoviedb.org/3/movie/popular?api_key=502943dc438dc0caf85eb7b3717b1a10&language=en-US&page=1')
            setMovieSelection(item)
            setSelect(item)
            setToValue(0)
        } else if (item === 'top_rated') {
            getMoviesFromApi('https://api.themoviedb.org/3/movie/popular?api_key=502943dc438dc0caf85eb7b3717b1a10&language=en-US&page=1')
            setMovieSelection(item)
            setSelect(item)
            setToValue(0)
        } else if (item === 'upcomming') {
            getMoviesFromApi('https://api.themoviedb.org/3/movie/upcoming?api_key=502943dc438dc0caf85eb7b3717b1a10')
            setMovieSelection(item)
            setSelect(item)
            setToValue(0)
        }
    }
    return (
        <View style={styles.container}>
            {/* <ProgressLoader
                isVisible={isVisible}
            /> */}
            <SearchComponent
                onPress={() => showPopUp()}
                movieSelection={movieSelection}
            />
            <FlatList
                data={movieList}
                renderItem={({ item }) => {
                    return (
                        <MovieComponent
                            original_title={item.original_title}
                            popularity={item.popularity}
                            release_date={item.release_date}
                            poster_path={item.poster_path}
                            onPress={() => navigation.navigate('Movie details', { original_title: item.original_title, overview: item.overview, original_title: item.original_title })}
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
        justifyContent: 'center',
    },
    filterText: {
        fontSize: 20,
        fontWeight: '400',
        left: 10
    }

})
export default MovieScreen;