import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({name, navigation, navigationScreen}) => {
  return (
    <TouchableOpacity 
        className="items-center"
        onPress={() => navigation.navigate(navigationScreen)}
    >
      <View className=" bg-yellow-500 rounded-2xl shadow justify-center" style={{ height: 50, width: 230, shadowColor: '#000', shadowOffset: { width: 0, height: 9 }, shadowOpacity: 0.75, shadowRadius:5, elevation: 8, }}>
        <Text className="text-black text-center text-2xl">{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button