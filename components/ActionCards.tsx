import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards() {

    const openLink = (url: string) => {
        Linking
            .openURL(url)
            .catch((err) => console.error('An error occurred', err));
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Action Cards</Text>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.cardImage} source={{
                            uri: "https://dev-folio-793.vercel.app/assets/ECOMMERCE_DASHBOARD-df3e3d31.png"
                        }} />
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={styles.cardHeader}>E-Commerce Dashboard</Text>
                        <Text style={styles.cardDescription}>
                            All in One Dashboard for managing Ecommerce Stores, built using NextJS, ReactJs, typescript and shadcn-ui with prisma as ORM, planetScale as Database, and clerkauth as Authentication Provider.
                        </Text>
                        <View style={styles.cardFooter}>
                            <TouchableOpacity onPress={() => openLink('https://ecommerce-dashboard-793.vercel.app/')}>
                                <Text style={styles.link}>View Demo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => openLink('https://github.com/dhawal-793/Ecommerce_Dashboard/')}>
                                <Text style={styles.link}>View code</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 6,
        borderWidth: 2,
        borderColor: '#ffffff',
    },
    headingText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
    },
    cardContainer: {
        marginTop: 30,
        marginBottom: 25,
        flex: 1,
        gap: 20,
    },
    card: {
        backgroundColor: '#020817',
        borderRadius: 10,
    },
    imageContainer: {
        paddingVertical: 5,
        paddingTop: 10,
        backgroundColor: '#020817',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    cardImage: {
        height: 190,
    },
    cardBody: {
        backgroundColor: '#23C4ED',
        margin: 10,
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 25,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    cardHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    cardDescription: {
        fontSize: 16,
        fontWeight: '500',
        color: '#03203C',
        textAlign: 'justify',
        marginBottom: 30,
        marginTop: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
    },
    link: {
        width: 120,
        padding: 7,
        backgroundColor: '#03203C',
        fontWeight: '500',
        color: '#CAD5E2',
        textAlign: 'center',
        borderRadius: 5,
    },
})