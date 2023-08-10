import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {
    FontAwesome5,
    AntDesign,
    SimpleLineIcons
} from '@expo/vector-icons'

export default function Actions() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="qrcode" size={28} color="#fff" />
                </View>
                <Text numberOfLines={2} style={styles.labelButton}>Pagar com QR Code</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="barcode" size={28} color="#fff" />
                </View>
                <Text style={styles.labelButton}>Pagar boleto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <SimpleLineIcons name="screen-smartphone" size={28} color="#fff" />
                </View>
                <Text style={styles.labelButton}>Recarga de celular</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={28} color="#fff" />
                </View>
                <Text style={styles.labelButton} numberOfLines={2}>Cartão de crédito</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name="setting" size={28} color="#fff" />
                </View>
                <Text style={styles.labelButton} numberOfLines={2}>Configuração de conta</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'yellow',
        maxHeight: 90,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionButton: {
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        width: 85,
        marginRight: 20,
        flex: 1,
        justifyContent: 'flex-start', // Alinha verticalmente no topo
    },
    areaButton: {
        backgroundColor: '#1e90ff',
        height: 50,
        width: 80,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton: {
        // backgroundColor: 'green',
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
        flexWrap: 'wrap',
    },
})