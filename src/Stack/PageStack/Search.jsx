import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../Styles/colors';
import {allProduct} from '../../Helper/APIHelper';
import {ChangeNum} from '../../Helper/Utils';

const {width: screenWidth} = Dimensions.get('window');
const Search = ({navigation}) => {
  const [search, setSearch] = React.useState('');
  const [products, setProducts] = useState(null);
  const [productsFilter, setProductsFilter] = useState(null);

  //*call api products
  const getAllProduct = async () => {
    const res = await allProduct();
    if (res) {
      setProducts(res);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  //*searching
  const onSearching = text => {
    if (products && text) {
      console.log(search);
      setProductsFilter(
        products.filter(prod => {
          return prod.name.toLowerCase().includes(text.toLowerCase());
        }),
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.view_img_text}>
        <Image
          style={styles.ic_search}
          source={require('../../Media/icon/icon_search.png')}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input_search}
          onChangeText={text => {
            setSearch(text);
            onSearching(text);
          }}
          value={search}
          placeholderTextColor={colors.Grey_White}
          placeholder="Tìm kiếm iPhone bạn muốn"
        />
      </View>

      <FlatList
        data={productsFilter}
        keyExtractor={item => item._id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Detail', {sp: item})}>
            <Image source={{uri: item.image[0]}} style={styles.imageip} />
            <View style={styles.textip}>
              <Text style={styles.itemText}>{item.name}</Text>
              {<Text style={styles.itemText1}>{ChangeNum(item.price)}</Text>}
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
    paddingHorizontal: 20,
  },
  view_img_text: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  ic_search: {
    width: screenWidth * 0.05,
    height: screenWidth * 0.05,
  },
  input_search: {
    color: 'white',
    fontSize: screenWidth * 0.04,
    alignItems: 'center',
    marginLeft: 10,
  },
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

export default Search;
