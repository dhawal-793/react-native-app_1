import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FC } from 'react'

const openLink = (url: string) => {
    Linking
        .openURL(url)
        .catch((err) => console.error('An error occurred', err));
}


const projects = [
    {
        title: 'E-Commerce Dashboard',
        description: 'All in One Dashboard for managing Ecommerce Stores, built using NextJS, ReactJs, typescript and shadcn-ui with prisma as ORM, planetScale as Database, and clerkauth as Authentication Provider.',
        imageUrl: 'https://dev-folio-793.vercel.app/assets/ECOMMERCE_DASHBOARD-df3e3d31.png',
        demoLink: 'https://ecommerce-dashboard-793.vercel.app/',
        codeLink: 'https://github.com/dhawal-793/Ecommerce_Dashboard/',
        cardBgColor: '#020817',
        imageBgColor: '#020817',
        bodyColor: '#23C4ED',
        textColor: '#020817',
        linkColor: '#ffffff',
    },
    {
        title: 'DevNews',
        description: `Devfolio: Dhawal's Personal portfolio is his Personal Website, where you can find all his projects, skills, experience and learning, built using React Js, Tailwind CSS and Vite Js`,
        imageUrl: 'https://dev-folio-793.vercel.app/assets/Dev_News-0eeb08cd.png',
        demoLink: 'https://dev-news-793.vercel.app/',
        codeLink: 'https://github.com/dhawal-793/Dev_News',
        cardBgColor: '#F3F4F6',
        imageBgColor: '#F3F4F6',
        bodyColor: '#FB923C',
        textColor: '#19212D',
        linkColor: '#000000',
    },
    {
        title: 'DevFolio',
        description: `Devfolio: Dhawal's Personal portfolio is his Personal Website, where you can find all his projects, skills, experience and learning, built using React Js, Tailwind CSS and Vite Js`,
        imageUrl: 'https://dev-folio-793.vercel.app/assets/DevFolio-f2d50fc1.png',
        demoLink: 'https://dev-folio-793.vercel.app/',
        codeLink: 'https://github.com/dhawal-793/DevFolio',
        cardBgColor: '#1E2735',
        imageBgColor: '#000000',
        bodyColor: '#009AC3',
        textColor: '#19212D',
        linkColor: '#ffffff',
    },
]


export default function ActionCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Action Cards</Text>
            <View style={styles.cardContainer}>
                {
                    projects.map((project) => (
                        <Card
                            key={project.title}
                            {...project}
                        />
                    ))
                }
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
    imageBgColor: string;
    bodyColor: string;
    textColor: string;
    linkColor: string;
    // cardborderColor?: string;
}

const Card: FC<CardProps> = ({ imageUrl, title, demoLink, codeLink, description, cardBgColor, imageBgColor, bodyColor, linkColor, textColor }) => {
    return (
        <View style={[cardStyles.card, { backgroundColor: cardBgColor, borderColor: bodyColor }]}>
            <View style={[cardStyles.imageContainer, { backgroundColor: imageBgColor }]}>
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
        borderWidth: 2,
        borderRadius: 10,
        borderBottomLeftRadius:16,
        borderBottomRightRadius:16,
    },
    imageContainer: {
        paddingTop: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    image: {
        height: 200,
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