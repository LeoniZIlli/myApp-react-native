import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'

export default function Moviments({ data }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>

            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                <TouchableOpacity style={styles.skeleton} onPress={() => setShowValue(!showValue)}>
                    {showValue ? (
                        <>
                        <FontAwesome5 name="eye-slash" size={18} color="#adadad" />
                        <Text style={data.type === 1 ? styles.value : styles.expenses}>
                            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                        </Text>
                        </>
                    ) : (
                        <>
                        <FontAwesome5 name="eye" size={18} color="#adadad" />
                        <View style={styles.hidden}></View>
                        </>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderColor: '#dadada',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#dadada',
        fontWeight: 'bold',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        paddingLeft: 10,
        marginRight: 6,
        fontSize: 16,
        color: '#188754',
        fontWeight: 'bold',
    },
    expenses: {
        paddingLeft: 10,
        marginRight: 6,
        fontSize: 16,
        color: '#dc3546',
        fontWeight: 'bold',
    },
    skeleton: {
        flexDirection: 'row',
    },
    hidden: {
        marginTop: 5,
        marginRight: 6,
        marginLeft: 10,
        width: 75,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8,
    }
})