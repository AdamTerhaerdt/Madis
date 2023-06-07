import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Item = ({ id, imgUrl, title, rating, short_description, price }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'column', paddingRight:10 }}>
      <View style={{ flexDirection: 'column', backgroundColor: 'white', borderRadius: 10, padding: 5, width: 230, height: 200, shadowColor: '#000', shadowOffset: { width: 0, height: 9 }, shadowOpacity: 0.75, shadowRadius:10, elevation: 20, }}>
        <Image source={imgUrl} style={{ width: '100%', height: '75%', borderRadius: 10, }} />
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginLeft: 5 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: '3%' }}>{price}</Text>
          </View>
          <Text style={{ fontSize: 10 }}>{short_description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Item