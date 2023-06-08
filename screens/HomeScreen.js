import { View, Text, SafeAreaView, ImageBackground, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import FeaturedRow from '../components/FeaturedRow'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  return (
  <ImageBackground source={require('../assets/main3.png')} style={{width: '100%', height: '100%'}}>
    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <SafeAreaView edges={['right', 'top', 'left']}>
      <ScrollView
          contentContainerStyle={{
            paddingBottom: 100,
          }}
      >
        <SafeAreaView>
          {/* Header */}
          <View className="flex-row items-center justify-between px-5">
            <View>
              <Text className="text-4xl font-bold germania-one mt-2 text-[#D9AD1E]">Hi, Adam</Text>
              <Text className="text-sm text-[#CACACA]">"Where coffee dreams come true"</Text>
            </View>
            <View className="mt-1 mr-5">
              <Ionicons name="notifications-outline" size={32} color="#D9AD1E"/>
            </View>
          </View>

          {/* Body */}
          
          {/* Points */}
          <View className="flex-col items-center justify-between px-5 mt-5">
            <View className="flex-row px-4">
              <Text className="text-5xl font-medium text-white">70</Text>
              <Ionicons name="cafe-outline" color={'#D9AD1E'} size={38}/>
            </View>
            <Text className="text-5xl font-medium text-white">Points</Text>
          </View>

          {/* Featured */}
          <FeaturedRow
            id="123"
            title="Featured"
            description="Discover the Perfect Brew"
          />

          {/* Buy Again */}
          <FeaturedRow
            id="567"
            title="Buy Again"
            description="Tried, Loved, and Highly Recommended"
          />

          {/* Popular */}
          <FeaturedRow
            id="890"
            title="Our Favorites"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
          />
        </SafeAreaView>
      </ScrollView>
      </SafeAreaView>
    </View>
  </ImageBackground>
  )
}

export default HomeScreen