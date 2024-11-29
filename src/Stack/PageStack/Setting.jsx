import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, } from 'react-native'
import React from 'react'

const Setting = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.Header}>
                <Image source={require('../../Media/icon/icon_vector.png')} style={styles.iconHeader} />
                <Text style={styles.textHeader}>Cài đặt</Text>
            </View>
            <View style={styles.Text}>
                <Text style={styles.Text1}>Thông tin cá nhân</Text>
            </View>
            <View style={styles.View2}>
                <View style={styles.View}>
                    <Text style={styles.Text2}>Họ tên</Text>
                    <TextInput
                        placeholderTextColor={'white'}
                        style={styles.input}
                        placeholder='Thạch Trang'
                    />
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text2}>Số điện thoại</Text>
                    <TextInput
                        placeholderTextColor={'white'}
                        style={styles.input}
                        placeholder='(+84)0920021998'
                    />
                </View>
                <View style={styles.View6}>
                    <Text style={styles.Text2}>Email</Text>
                    <TextInput
                        placeholderTextColor={'white'}
                        style={styles.input}
                        placeholder='my20s@gmail.com'
                    />
                </View>
                <TouchableOpacity style={styles.View3} onPress={() => navigation.navigate()}>
                    <Text style={styles.TextQuenMatKhau}>Chỉnh sửa</Text>
                </TouchableOpacity>
                <View style={styles.Text}>
                    <Text style={styles.Text1}>Mật khẩu</Text>
                </View>
                <View style={styles.View7}>
                    <Text style={styles.Text2}>Mật khẩu của bạn</Text>
                    <TextInput
                        secureTextEntry={true}
                        placeholderTextColor={'white'}
                        style={styles.input}
                        value='Thạch Trang'
                    />
                </View>
                <TouchableOpacity style={styles.View3} onPress={() => navigation.navigate()}>
                    <Text style={styles.TextQuenMatKhau}>Chỉnh sửa</Text>
                </TouchableOpacity>
                <View style={styles.Text}>
                    <Text style={styles.Text1}>Trợ giúp</Text>
                </View>
                <View style={styles.View4}>
                    <Text style={styles.Text3}>FAQ</Text>
                    <TouchableOpacity style={styles.View3} onPress={() => navigation.navigate()}>
                        <Image source={require('../../Media/icon/icon_arrow_right.png')} style={styles.Icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.View5}>
                    <Text style={styles.Text3}>Liên hệ chúng tôi</Text>
                    <TouchableOpacity style={styles.View3} onPress={() => navigation.navigate()}>
                        <Image source={require('../../Media/icon/icon_arrow_right.png')} style={styles.Icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.View5}>
                    <Text style={styles.Text3}>Quyền riêng tư & Điều khoản</Text>
                    <TouchableOpacity style={styles.View3} onPress={() => navigation.navigate()}>
                        <Image source={require('../../Media/icon/icon_arrow_right.png')} style={styles.Icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        padding: 14
    },
    Header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        position: 'relative'
    },
    iconHeader: {
        position: 'absolute',
        left: 0
    },
    textHeader: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    Text1: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'

    },
    Text2: {
        color: '#B3B3B3',
        fontSize: 14
    },
    View: {
        backgroundColor: 'gray',
        borderRadius: 12,
        width: '100%',
        height: 70,
        marginBottom: 12,
        borderRadius: 12,
        backgroundColor: '#4A4A4A',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 5
    },
    input: {
        marginLeft: -5
    },
    Text: {
        marginTop: 18,
        marginLeft: 5
    },
    View2: {
        marginTop: 10
    },
    TextQuenMatKhau: {
        color: '#2F7AFF',
        fontSize: 16,
        marginTop: 8,
        fontWeight: 'bold'
    },
    View3: {
        alignItems: 'flex-end',
        marginRight: 10
    },
    Text3: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    View4: {
        backgroundColor: 'gray',
        borderRadius: 12,
        width: '100%',
        height: 70,
        marginBottom: 12,
        borderRadius: 12,
        backgroundColor: '#4A4A4A',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        justifyContent: 'space-between'
    },
    Icon: {
        width: 30,
        height: 30
    },
    View5: {
        backgroundColor: 'gray',
        borderRadius: 12,
        width: '100%',
        height: 70,
        marginBottom: 12,
        borderRadius: 12,
        backgroundColor: '#4A4A4A',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1,
        justifyContent:'space-between'
    },
    View6:{
        backgroundColor: 'gray',
        borderRadius: 12,
        width: '100%',
        height: 70,
        marginBottom: 12,
        borderRadius: 12,
        backgroundColor: '#4A4A4A',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    View7:{
        backgroundColor: 'gray',
        borderRadius: 12,
        width: '100%',
        height: 70,
        marginBottom: 12,
        borderRadius: 12,
        backgroundColor: '#4A4A4A',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginTop: 16
    }
})

export default Setting
