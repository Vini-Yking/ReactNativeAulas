import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { getCards } from '../../services/axiosClient'
import { styles } from '../Home/styles'
import { AuthContext } from '../../context/AuthContext'
import { LoginContext } from '../../context/LoginContext'
import BlackJack from './blackJack'
import { getDeckId } from '../../services/axiosClient';

const Games = ({ route }) => {
  const [vitoria, setVitoria] = useState(0)
  const [derrota, setDerrota] = useState(0)
  const { deckId } = route.params
  const [cards, setCards] = useState([])
  const { name, idade } = useContext(AuthContext)
  const [total, setTotal] = useState(0)
  const { setDeckId, vitorias, derrotas, setVitorias, setDerrotas } = useContext(LoginContext)


  useEffect(() => {
    const get = async () => {//como contornar um async dentro de um useEffect
      const decks = await getCards(deckId, 2);
      console.log(decks.cards.length);
      setCards(decks.cards);
    };
    get();
  }, [])

  const handleWin = () => {
    if (total === 21) {
      console.log(vitoria);
      setVitoria(parseInt(vitoria) + 1)
    }
  }
  const handleLose = () => {
    if (total > 21) {
      console.log(derrota);
      setDerrota(parseInt(derrota) + 1)
    }
  }

  const reiniciarPartida = async () => {
    const id = await getDeckId();
    setDeckId(id)
    const decks = await getCards(id, 2)
    setCards(decks.cards);
  }

  useEffect(() => {
    if (cards.length === 0) return
    const sum = async () => {
      const sumi = await handleSoma(cards)
    };
    sum();

  }, [cards])

  const handleValue = (valor) => {

    if (valor === "JACK" || valor === "QUEEN" || valor === "KING")
      return valor = 10
    return valor
    // switch (valor) {
    //   case 'JACK':
    //     return 'Valete'
    //     break;
    //   case 'QUEEN':
    //     return 'Rainha'
    //     break;
    //   case 'KING':
    //     return 'Rei'
    //     break;
    //   case 'ACE':
    //     return 'Às'
    //     break;

    //   default:
    //     return valor
  }

  const handleAce = (ace) => {
    if (ace === 'ACE') {
      return ace = 1
    }
    return parseInt(ace)
  }

  const handleSoma = async () => {
    const teste = cards.map((e) => (handleValue(e.value)))
    const testeAce = await (teste.reduce((a, b) => (
      handleAce(a) + handleAce(b)
    )))
    setTotal(testeAce)
    handleLose();
    handleWin();
  }
  const handleBackJack = async () => {
    const deckPlus = await getCards(deckId, 1)
    setCards([...cards, ...deckPlus.cards])

  }

  return (
    <View style={{ backgroundColor: '#034C28', flex: 1, justifyContent: "center" }}>
      {total === 21 && <Text style={[styles.title, { color: '#b2ff59', fontSize: 25, marginTop: 20 }]}>Ganhou!! {total}</Text>}
      {total > 21 && <Text style={[styles.title, { color: '#dd2c00', fontSize: 20 }]}>YOU LOOSE!!!</Text>}
      {((total > 21 || total === 21) && !vitorias) && <Text style={[styles.title, { color: '#dd2c00', fontSize: 20 }]}>Total Derrotas {derrota}</Text>}
      {((total > 21 || total === 21) && !derrotas) && <Text style={[styles.title, { color: '#b2ff59', fontSize: 20 }]}>Total Vitorias {vitoria}</Text>}
      <View style={[styles.deck]}>

        {cards &&
          cards.map((carta) => (
            <BlackJack key={carta.code} carta={carta} cards={cards} />
          ))
        }
      </View >
      <View style={
        {
          backgroundColor: '#034C28',
          padding: 50
        }}>
        {/* <Button style={styles.buton1} title="Testar" onPress={handleSoma}></Button> */}
        {(total !== 0 && total < 21) && < Button style={styles.buton} disabled={(total !== 0 && total < 21) ? false : true} title="Puxar outra carta" onPress={handleBackJack} />}

        {(total !== 0 && total >= 21) && <Button style={styles.buton1} title="Jogar novamente" onPress={reiniciarPartida} />}
        {(total !== 0 && total < 21) && <Text style={[styles.title, { color: 'white', fontSize: 15, marginTop: 20 }]}>Soma das cartas {total}</Text>}
        {total > 21 && <Text style={[styles.title, { color: '#18ffff', fontSize: 15, marginTop: 20 }]}>Você perdeu com {total}</Text>}
        {total === 21 && <Text style={[styles.title, { color: '#b2ff59', fontSize: 25, marginTop: 20 }]}>Ganhou!! {total}</Text>}
      </View>
    </View>
  )
}

export default Games