import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../Styles/colors';
import {allCategories, allProductByCategory} from '../../Helper/APIHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width: screenWidth} = Dimensions.get('window');

const Home = ({navigation}) => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [selectId, setSelectId] = useState('67435ada7ca5c8018430877f');

  //*call api cate
  const getCategory = async () => {
    const res = await allCategories();
    if (res) {
      setCategories(res);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  //*call api products
  const getProduct = async cateid => {
    const res = await allProductByCategory(cateid);
    if (res) {
      setProducts(res);
    }
  };
  useEffect(() => {
    getProduct(selectId);
  }, [selectId]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Image
            style={styles.ic_cart}
            source={require('../../Media/icon/icon_cart.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {/* cate */}

      <FlatList
        data={categories}
        keyExtractor={item => item._id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.series}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.series_item,
              {
                backgroundColor:
                  selectId == item._id ? colors.Secondary : colors.Primary,
              },
            ]}
            onPress={() => {
              setSelectId(item._id);
            }}>
            <Text style={styles.series_item_text1}>
              {item.name.substring(0, 2)}
            </Text>
            <Text style={styles.series_item_text2}>series</Text>
          </TouchableOpacity>
        )}
      />

      {/* product */}
      <FlatList
        data={products}
        keyExtractor={item => item._id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Detail', {sp: item})}>
            <Image source={{uri: item.image[0]}} style={styles.imageip} />
            <View style={styles.textip}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText1}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  ic_search: {
    width: screenWidth * 0.07,
    height: screenWidth * 0.1,
  },
  ic_logo: {
    height: screenWidth * 0.12,
  },
  ic_cart: {
    width: screenWidth * 0.07,
    height: screenWidth * 0.1,
  },
  series: {
    flexDirection: 'row',
    //marginHorizontal: 30,
    marginTop: 20,
  },
  series_item: {
    backgroundColor: colors.Secondary,
    height: screenWidth * 0.12,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom:40
  },
  series_item_text1: {
    color: 'white',
    fontSize: screenWidth * 0.05,
  },
  series_item_text2: {
    color: 'white',
    fontSize: screenWidth * 0.03,
    marginBottom: 5,
  },
  ///////////
  itemContainer: {
    marginHorizontal: screenWidth * 0.05,
    marginVertical: 20,
  },
  imageip: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.5,
    borderRadius: 10,
  },
  textip: {
    flex: 1,
  },
  itemText: {
    marginTop: 10,
    fontSize: screenWidth * 0.04,
    color: colors.Grey_White,
  },
  itemText1: {
    fontSize: screenWidth * 0.04,
    color: 'white',
  },
});

export default Home;
