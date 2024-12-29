import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const NoteCard = ({title, note}) => {
  return (
    <View style={styles.noteCard}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.note}>{note}</Text>
    </View>
  )
}

export default NoteCard