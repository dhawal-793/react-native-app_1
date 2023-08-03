
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ElevatedCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={[styles.cardContainer]}>
                {
                    [...Array(8)].map((_, i) => {
                        return <Card key={i} cardNumber={i + 1} />
                    })
                }
            </ScrollView>
            <Text>Scroll to view All</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 6,
        borderWidth: 2,
        borderColor: '#ffffff',
        height: 200,
        width: "100%",
    },
    headingText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
    },
    cardContainer: {
        width: "100%",
        marginTop: 30,
    },
    card: {
        width: 100,
        height: 100,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#cad5e2'
    },
    cardText: {
        color: "#000000",
        fontSize: 17,
        fontWeight: "bold",
    },

})

const Card = ({ cardNumber }: { cardNumber: number }) => {
    return (
        <View style={[styles.card, { marginLeft: cardNumber === 1 ? 0 : 5, marginRight: cardNumber === 8 ? 0 : 5 }]}>
            <Text style={[styles.cardText]}>Card {cardNumber}</Text>
        </View>
    )
}