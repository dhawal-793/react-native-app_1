import { Image,  StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactCards() {
    const contacts = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>ContactCards</Text>
            <View style={[styles.cardContainer]}>
                {
                    contacts.map(({ uid, name, status, imageUrl }) => (
                        <View key={uid} style={styles.card}>
                            <Image source={{ uri: imageUrl }} style={styles.image} />
                            <View style={styles.info}>
                                <Text style={styles.name}>{name}</Text>
                                <Text style={styles.status}>{status}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 6,
        borderWidth: 2,
        borderColor: '#ffffff',
        height: 'auto',
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
        flex: 1,
        gap: 10,
    },
    card: {
        borderRadius: 10,
        backgroundColor: '#38BDAE',
        padding: 10,
        width: "100%",
        height: 90,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: '#ffffff',
    },
    info: {
        height: 60,
        flex: 1,
        alignItems: 'flex-start',
    },
    name: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 22,
    },
    status: {
        color: "#5D5D5D",
        fontWeight: "400",
        fontSize: 16,
    }
})

