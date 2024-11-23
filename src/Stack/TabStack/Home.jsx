import { View, Text,StyleSheet, TouchableOpacity, Image, Dimensions, FlatList, ScrollView } from 'react-native'
import React from 'react'
import colors from '../../Styles/colors'

const { width: screenWidth } = Dimensions.get('window');

const Home = () => {
  const dataiphone = [
    { id:1, name: 'iPhone 16 Pro Max', image: require('../../Media/image/iPhone16ProMax.png'), price: '36.500.000đ'},
    { id:2, name: 'iPhone 16 Pro', image: require('../../Media/image/iPhone16Pro.png'), price: '35.500.000đ'},
    { id:3, name: 'iPhone 16 Plus', image: require('../../Media/image/iPhone16Plus.png'), price: '36.500.000đ'},
    { id:4, name: 'iPhone 16', image: require('../../Media/image/iPhone16.png'), price: '36.500.000đ'},
  ]
  const dataseries = [
    { id:1, name: '16'},{ id:2, name: '15'},{ id:3, name: '14'},{ id:4, name: '13'},{ id:5, name: '12'},{ id:6, name: '11'},{ id:7, name: '10'},
  ]

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={styles.ic_search}
            source={require('../../Media/icon/icon_search.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ic_logo}
            source={require('../../Media/image/Logo_App_2.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.ic_cart}
            source={require('../../Media/icon/icon_cart.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={dataseries}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.series}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.series_item}>
            <Text style={styles.series_item_text1}>{item.name}</Text>
            <Text style={styles.series_item_text2}>series</Text>
          </TouchableOpacity>
        )}
      />
      
      <FlatList
            data={dataiphone}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.itemContainer}
                    // @ts-ignore
                    //onPress={() => navigation.navigate('Detail', { iphone: item })}
                >
                    <Image source={item.image} style={styles.imageip} />
                    <View style={styles.textip}>
                      <Text style={styles.itemText}>{item.name}</Text>
                      <Text style={styles.itemText1}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
                
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
    alignItems:'center',
    paddingHorizontal:20
  },
  ic_search:{
    width: screenWidth * 0.07,
    height: screenWidth * 0.1
  },
  ic_logo:{
    height:screenWidth * 0.12
  },
  ic_cart:{
    width: screenWidth * 0.07,
    height: screenWidth * 0.1
  },
  series:{
    flexDirection: 'row',
    //marginHorizontal: 30,
    marginTop:20
  },
  series_item:{
    backgroundColor:colors.Secondary,
    height: screenWidth *0.12,
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:10
  },
  series_item_text1:{
    color:'white',
    fontSize:screenWidth *0.05
  },
  series_item_text2:{
    color:'white',
    fontSize:screenWidth *0.03,
    marginBottom:5
  },
  ///////////
  itemContainer: {
    marginHorizontal: screenWidth *0.05,
    marginVertical:20,
  },
  imageip: {
      width: screenWidth *0.4,
      height: screenWidth *0.5,
      borderRadius: 10,
  },
  textip:{
    flex:1
  },
  itemText: {
      marginTop: 10,
      fontSize: screenWidth *0.04,
      color: colors.Grey_White,
  },
  itemText1: {
      fontSize: screenWidth *0.04,
      color:'white',
  },
});

export default Home