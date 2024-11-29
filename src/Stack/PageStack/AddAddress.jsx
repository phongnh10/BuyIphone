import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const AddAddress = () => {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Image source={require('../../Media/icon/icon_vector.png')} style={styles.iconHeader} />
                <Text style={styles.textHeader}>Thêm địa chỉ</Text>
            </View>
            <View style={styles.View}>
                <Text style={styles.text}>Họ tên</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Thạch Trang"
                    placeholderTextColor="#B3B3B3"
                />
            </View>
            <View style={styles.View4}>
                <Text style={styles.text}>Số điện thoại</Text>
                <TextInput
                    style={styles.input}
                    placeholder="EX: (+84)0920021998"
                    placeholderTextColor="#B3B3B3"
                />
            </View>
            <View style={styles.View3}>
                <Text style={styles.text}>Địa chỉ</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 25 rue Robert Latouche, Nice, 06200, Côte D’azur, France"
                    placeholderTextColor="#B3B3B3"
                    multiline={true}
                />
            </View>
            <View style={styles.View4}>
                <Text style={styles.text}>Thành Phố</Text>
                <View style={styles.View2}>
                <TextInput
                    style={styles.input}
                    placeholder="Hà Nội"
                    placeholderTextColor="#B3B3B3"
                />
                <TouchableOpacity onPress={() => navigation.navigate()}>
                    <Image source={require('../../Media/icon/icon_arrow_down.png')} style={styles.Icon} />
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.View4}>
                <Text style={styles.text}>Thành Phố</Text>
                <View style={styles.View2}>
                <TextInput
                    style={styles.input}
                    placeholder="Quận"
                    placeholderTextColor="#B3B3B3"
                />
                <TouchableOpacity onPress={() => navigation.navigate()}>
                    <Image source={require('../../Media/icon/icon_arrow_down.png')} style={styles.Icon} />
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.View6}>
            <TouchableOpacity style={styles.View5} onPress={() => navigation.navigate()}>
                    <Text style={{color: 'white', fontSize: 18, fontWeight:'bold'}}>Lưu địa chỉ </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        padding: 14
    },
    text: {
        color: '#B3B3B3',
        fontSize: 14,

    },
    input: {
        fontSize: 16,
        marginLeft: -5,
        fontWeight: 'bold',
        width: '100%',

    },
    View: {
        backgroundColor: '#4A4A4A',
        borderRadius: 12,
        height: 70,
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 5
    },
    View2:{
        flexDirection: 'row',
        marginRight: 13
    },
    View3:{
        backgroundColor: '#4A4A4A',
        borderRadius: 12,
        height: 90,
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 12
    },
    View4:{
        backgroundColor: '#4A4A4A',
        borderRadius: 12,
        height: 70,
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 12
    },
    Header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        position: 'relative',
        marginBottom: 19
    },
    iconHeader: {
        position: 'absolute',
        left: 0
    },
    textHeader: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 20,
        marginTop: -5
    },
    View5:{
        backgroundColor: '#2F7AFF',
        borderRadius: 14,
        height: 60,
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    View6:{
        marginTop: 250
    },
    Icon:{
        width: 30,
        height: 8,
        marginLeft: -10
    }


})
export default AddAddress