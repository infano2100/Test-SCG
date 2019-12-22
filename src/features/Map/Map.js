import React, { useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import RNGooglePlaces from 'react-native-google-places'
import { SearchBar } from 'react-native-elements'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import _ from 'lodash'
import { mapStyle as styles } from './stylesheets'

const Map = () => {

  const [addressQuery, setAddressQuery ] = useState('') 
  const [predictions, setPredictions ] = useState([]) 
  const [location, setLocaltion ] = useState({
    latitude: 13.8282509, 
    longitude: 100.5284536, 
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  }) 
  const [coordinate, setCoordinate ] = useState({}) 

  const restriction = {
    latitudeSW: 13.8234866, 
    longitudeSW: 100.5081203, 
    latitudeNE: 13.828253, 
    longitudeNE: 100.5284507,
  }

  onQueryChange = (text) => {
    setAddressQuery(text)
    RNGooglePlaces.getAutocompletePredictions(addressQuery, {
      type: 'restaurant',
      country: 'TH',
      locationRestriction: restriction,
    })
    .then((places) => {
      setPredictions(places)
    })
    .catch(error => console.warn(error.message))
  }
  
  onSelectSuggestion = (placeID) => {
    // getPlaceByID call here
    RNGooglePlaces.lookUpPlaceByID(placeID)
    .then((results) => {
      const { latitude, longitude } = results.location

      setAddressQuery(results.name)
      setLocaltion({
        latitude, 
        longitude, 
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      })
      setCoordinate({
        latitude,
        longitude,
      })
    })
    .catch((error) => console.log(error.message))
    setPredictions([])
  }

  clearSearch = () => {
    setAddressQuery('')
    setPredictions([])
    setCoordinate({})
    setLocaltion({
      latitude: 13.8282509, 
      longitude: 100.5284536, 
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    })
  }

  keyExtractor = (item) => item.placeID

  renderItem = ({ item }) => {
    return (
      addressQuery ?
      <View style={styles.listItemWrapper}>
        <TouchableOpacity style={styles.listItem}
          onPress={() => onSelectSuggestion(item.placeID)}>
              <View style={styles.avatar}>
              </View>
              <View style={styles.placeMeta}>
                  <Text style={styles.primaryText}>{item.primaryText}</Text>
                  <Text style={styles.secondaryText}>{item.secondaryText}</Text>
              </View>
          </TouchableOpacity>
          <View style={styles.divider} />
      </View> 
    : null
    )
  }

    return (     
      <View style={styles.container}>
        <View>
          <SearchBar
            placeholder="Search"
            onChangeText={onQueryChange}
            value={addressQuery}
            lightTheme
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInputContainer}
            onClear={clearSearch}
          />
            <FlatList
              data={predictions}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}
            />
        </View>
          
        <View style={styles.containerMap}>
          <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={location}
            >
            { !_.isEmpty(coordinate) && <Marker coordinate={coordinate} /> }
          </MapView> 
        </View>

      </View>
    )
}

export default Map