import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto conta de luz',
        value: '299,98',
        date: '07/08/2023',
        type: 0
    },
    {
        id: 2,
        label: 'Pix Cliente X',
        value: '20,00',
        date: '07/08/2023',
        type: 1
    },
    {
        id: 3,
        label: 'Salario',
        value: '1800,00',
        date: '07/08/2023',
        type: 1
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Leoni Z Bernardes" />

            <Balance balance="1,00" spending="-2,00" />

            <Actions></Actions>

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Moviments data={item} />}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
        marginStart: 14,      
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});