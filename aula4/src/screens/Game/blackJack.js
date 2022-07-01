import { TouchableOpacity, Image } from "react-native"
import { styles } from "../Home/styles"

const BlackJack = ({ carta, cards }) => {

    const handleNipe = (nipe) => {
        switch (nipe) {
            case 'SPADES':
                return 'espadas'
            case 'CLUBS':
                return 'paus'
            case 'HEARTS':
                return 'copas'
            case 'DIAMONDS':
                return 'ouros'
            default:
                return nipe
        }
    }
    return (
        <>
            <TouchableOpacity key={cards.indexOf(carta)} onPress={(
                () => (
                    console.log(`Voce clicou na carta nº ${(cards.indexOf(carta) + 1)}  handleValue(carta.value) de ${handleNipe(carta.suit)}  `)
                ))}>
                <Image key={cards.indexOf(carta)}
                    resizeMode="contain"
                    source={carta.images.png}
                    style={styles.carta} />
            </TouchableOpacity>
        </>
    )

}

export default BlackJack