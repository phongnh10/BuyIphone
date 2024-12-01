import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../../Styles/colors';
import {useNavigation} from '@react-navigation/native';
const {width: screenWidth} = Dimensions.get('window');

const News = () => {
  const navigation = useNavigation();

  const datatintuc = [
    {
      id: 1,
      img: require('../../Media/image/Thumbnails_News_1.webp'),
      title: 'Tính năng AI trên iPhone 16: Những gì bạn cần biết',
      description:
        'Gần đây, Apple đã công bố ngày tổ chức Hội nghị các nhà phát triển toàn cầu (WWDC24), nơi hãng sẽ chia sẻ thông tin mới về hệ điều hành của mình.  Theo nhiều nguồn tin, có khả năng Apple sẽ giới thiệu một số tính năng  AI mới cho dòng iPhone 16…',
      date: '11/11/2024',
    },
    {
      id: 2,
      img: require('../../Media/image/Thumbnails_News_2.webp'),
      title: 'Nên tậu iPhone 16 bằng hình thức "mua trả chậm" không?',
      description:
        'Gần đây, Apple đã công bố ngày tổ chức Hội nghị các nhà phát triển toàn cầu (WWDC24), nơi hãng sẽ chia sẻ thông tin mới về hệ điều hành của mình.  Theo nhiều nguồn tin, có khả năng Apple sẽ giới thiệu một số tính năng  AI mới cho dòng iPhone 16…',
      date: '24/11/2024',
    },
  ];

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
          placeholder="Tìm kiếm tin tức"
        />
      </View>
      <FlatList
        nestedScrollEnabled
        data={datatintuc}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatlist}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailNews');
            }}>
            <View style={styles.itemtintuc}>
              <View style={styles.view_tintuc_image}>
                <Image
                  style={styles.tintuc_image}
                  source={item.img}
                  //resizeMode="contain"
                />
              </View>

              <View style={styles.tintuc_text}>
                <Text style={styles.tintuc_text_title}>{item.title}</Text>
                <Text style={styles.tintuc_text_des}>{item.description}</Text>
                <View style={styles.view_tintuc_text_date}>
                  <Text style={styles.tintuc_text_date}>{item.date}</Text>
                </View>
              </View>
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

  view_img_text: {
    marginHorizontal: screenWidth * 0.05,
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 20,
    marginVertical: 10,
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

  tintuc_text: {},
  flatlist: {},
  view_tintuc_image: {
    marginTop: 20,
    alignItems: 'center',
  },
  itemtintuc: {
    marginHorizontal: screenWidth * 0.05,
  },
  tintuc_image: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.55,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  tintuc_text_title: {
    color: colors.White,
    marginBottom: 5,
    fontSize: screenWidth * 0.05,
  },
  tintuc_text_des: {
    color: colors.Text_Secondary,
  },
  view_tintuc_text_date: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
  tintuc_text_date: {
    color: colors.Text_Secondary,
  },
});

export default News;
