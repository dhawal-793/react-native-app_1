import { Image, StyleSheet, Text, View } from 'react-native'

export default function FancyCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Fancy Cards</Text>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' }} style={styles.image} />
                    <View style={styles.cardBody}>
                        <Text style={styles.title}>Thar Desert</Text>
                        <Text style={styles.label}>Jaisalmer, Rajasthan</Text>
                        <Text style={styles.description}>Thar Desert, also called Great Indian Desert, arid region of rolling sand hills on the Indian subcontinent.</Text>
                        <Text>Card Footer</Text>
                    </View>
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
        width: "100%",
    },
    headingText: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: "bold",
    },
    cardContainer: {
        flex: 1,
        gap: 20,
        marginVertical: 30,
    },
    card: {
        height: 380,
        width: "100%",
        borderRadius: 10,
        backgroundColor: "#ffffff",
    },
    cardBody: {
        padding: 8
    },
    image: {
        height: 220,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: '#E07C24'
    },
    label: {
        color: "#758283",
        fontSize: 14,
        fontWeight: "400"
    },
    description: {
        marginTop: 10,
        color: "#242B2E",
        fontSize: 12,
    }
})