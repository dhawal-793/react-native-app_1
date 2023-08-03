import { StyleSheet, Text, View } from 'react-native';

export default function FlatCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={[styles.cardContainer]}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={[styles.cardText]}>Card 1</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={[styles.cardText]}>Card 2</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={[styles.cardText]}>Card 3</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text style={[styles.cardText]}>Card 4</Text>
                </View>
            </View>
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
        display: "flex",
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        columnGap: 5
    },
    card: {
        width: "23%",
        height: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cardText: {
        color: "#ffffff",
        fontSize: 12,
    },
    cardOne: {
        backgroundColor: "#fe5132",
    },
    cardTwo: {
        backgroundColor: "#ee2342",
    },
    cardThree: {
        backgroundColor: "#03afdd",
    },
    cardFour: {
        backgroundColor: "#3900d1",
    },
})