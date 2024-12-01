import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React from 'react';
import colors from '../../Styles/colors';

const {width: screenWidth} = Dimensions.get('window');
const Search = ({navigation}) => {
  const [search, setSearch] = React.useState('');
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
          onChangeText={setSearch}
          value={search}
          placeholderTextColor={colors.Grey_White}
          placeholder="Tìm kiếm iPhone bạn muốn"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Primary,
    paddingHorizontal:20
  },
  view_img_text: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 20,
    marginBottom:20,
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
});

export default Search;
