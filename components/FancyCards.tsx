import { Image, StyleSheet, Text, View } from 'react-native'
import { FC } from 'react'

const cards = [
    {
        imageUri: 'https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        title: 'Thar Desert',
        label: 'Jaisalmer, Rajasthan',
        description: 'Thar Desert, also called Great Indian Desert, arid region of rolling sand hills on the Indian subcontinent.',
        titleColor: "#E07C24"
    },
    {
        imageUri: 'https://plus.unsplash.com/premium_photo-1661962404003-e0ca40da40ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9ydHMlMjBpbiUyMHJhamFzdGhhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        title: 'Jal Mahal',
        label: 'Jaipur, Rajasthan',
        description: 'Jal Mahal is a palace in the middle of the Man Sagar Lake in Jaipur city, the capital of the state of Rajasthan, India. ',
        titleColor: "#03C6C7"
    }
]


export default function FancyCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Fancy Cards</Text>
            <View style={styles.cardContainer}>
                {
                    cards.map(card => (
                        <Card
                            key={card.title}
                            imageUri={card.imageUri}
                            title={card.title}
                            label={card.label}
                            description={card.description}
                            titleColor={card.titleColor}
                        />
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
    }
})

interface cardProps {
    imageUri: string
    title: string
    label: string
    description: string
    titleColor: string
}

const Card: FC<cardProps> = ({ imageUri, title, label, description, titleColor }) => {
    return (
        <View style={cardStyles.card}>
            <Image source={{ uri: imageUri }} style={cardStyles.image} />
            <View style={cardStyles.cardBody}>
                <Text style={[cardStyles.title, { color: titleColor }]}>{title}</Text>
                <Text style={cardStyles.label}>{label}</Text>
                <Text style={cardStyles.description}>{description}</Text>
                <Text>Card Footer</Text>
            </View>
        </View>
    )
}

const cardStyles = StyleSheet.create({
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
        fontWeight: "bold"
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