import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import StopWatch from '../watch'

export default function Game() {
    const [check, setcheck] = useState(false)
    const set = () => {
        setcheck(!check)
    }
    console.log('aaaa')
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => set()}>
                <Text>aaaa</Text>
            </TouchableOpacity>
            <StopWatch test={check} />

        </View>
    )
}