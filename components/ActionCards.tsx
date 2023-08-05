import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FC } from 'react'

const openLink = (url: string) => {
    Linking
        .openURL(url)
        .catch((err) => console.error('An error occurred', err));
}

export default function ActionCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Action Cards</Text>
            <View style={styles.cardContainer}>
                <Card
                    title='E-Commerce Dashboard'
                    description='All in One Dashboard for managing Ecommerce Stores, built using NextJS, ReactJs, typescript and shadcn-ui with prisma as ORM, planetScale as Database, and clerkauth as Authentication Provider.'
                    imageUrl='https://dev-folio-793.vercel.app/assets/ECOMMERCE_DASHBOARD-df3e3d31.png'
                    demoLink='https://ecommerce-dashboard-793.vercel.app/'
                    codeLink='https://github.com/dhawal-793/Ecommerce_Dashboard/'
                    cardBgColor='#020817'
                    bodyColor='#23C4ED'
                    textColor='#020817'
                    linkColor='#CAD5E2'
                />
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
    }
})

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    demoLink: string;
    codeLink: string;
    cardBgColor: string;
    bodyColor: string;
    textColor: string;
    linkColor: string;
}

const Card: FC<CardProps> = ({ imageUrl, title, demoLink, codeLink, description, cardBgColor, bodyColor, linkColor, textColor }) => {
    return (
        <View style={[cardStyles.card, { backgroundColor: cardBgColor }]}>
            <View style={[cardStyles.imageContainer, { backgroundColor: cardBgColor }]}>
                <Image style={cardStyles.image} source={{
                    uri: imageUrl
                }} />
            </View>
            <View style={[cardStyles.body, { backgroundColor: bodyColor }]}>
                <Text style={[cardStyles.header, { color: textColor }]}>{title}</Text>
                <Text style={[cardStyles.description, { color: textColor }]}>{description}</Text>
                <View style={cardStyles.footer}>
                    <TouchableOpacity onPress={() => openLink(demoLink)}>
                        <Text style={[cardStyles.link, { backgroundColor: cardBgColor, color: linkColor }]}>View Demo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openLink(codeLink)}>
                        <Text style={[cardStyles.link, { backgroundColor: cardBgColor, color: linkColor }]}>View code</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const cardStyles = StyleSheet.create({
    card: {
        backgroundColor: '#020817',
        borderRadius: 10,
    },
    imageContainer: {
        paddingVertical: 5,
        paddingTop: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    image: {
        height: 190,
    },
    body: {
        margin: 10,
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 25,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'justify',
        marginBottom: 30,
        marginTop: 10,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
    },
    link: {
        width: 120,
        padding: 7,
        fontWeight: '500',
        textAlign: 'center',
        borderRadius: 5,
    },
})