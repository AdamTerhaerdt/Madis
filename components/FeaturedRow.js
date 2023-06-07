import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline"
import Item from './Item'

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="text-3xl font-bold text-white">{title}</Text>
            <ArrowRightIcon color="#D9AD1E"/>
        </View>

        <Text className="text-m text-[#CACACA] px-4">{description}</Text>

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            className="pt-4"
        >
            {/* Items */}
            <Item
                id={id}
                imgUrl={require('../assets/latte.png')}
                title={"Latte"}
                rating={4.5}
                short_description={"Discover the Irresistible Charm of a Classic Latte"}
                price={"$4.99"}
            />
            <Item
                id={id}
                imgUrl={require('../assets/latte.png')}
                title={"Latte"}
                rating={4.5}
                short_description={"Discover the Irresistible Charm of a Classic Latte"}
                price={"$4.99"}
            />
            <Item
                id={id}
                imgUrl={require('../assets/latte.png')}
                title={"Latte"}
                rating={4.5}
                short_description={"Discover the Irresistible Charm of a Classic Latte"}
                price={"$4.99"}
            />
            

        </ScrollView>
    </View>
  )
}

export default FeaturedRow