import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { MotiView } from 'moti';

export default function Balance({ spending, balance }) {
    return (
        <MotiView
            style={styles.container}
            from={{
                rotateX: '-100deg',
                opacity: 0,
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                delay: 300,
                duration: 900,
            }}
        >

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{balance}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{spending}</Text>
                </View>
            </View>

        </MotiView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 18,
        marginStart: 14,
        marginTop: -24,
        marginEnd: 14,
        borderRadius: 4,
        zIndex: 99,
    },
    itemTitle: {
        fontSize: 20,
        color: '#ADADAD',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencySymbol: {
        color: '#ADADAD',
        marginRight: 6,
    },
    balance: {
        fontSize: 20,
        color: '#188754',
    },
    expenses: {
        fontSize: 20,
        color: '#dc3546',
    }
})