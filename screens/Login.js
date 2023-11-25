import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { SafeAreaView  } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-orange-400 h-screen" >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-xl rounded-bl-xl ml-4">
              <ArrowLeftIcon size="20" color="black" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-0">
          <Image source={require('../assets/images/login.png')}
            style={{width: 200, height: 200}} />
        </View>
      </SafeAreaView>
      <View 
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
        className="flex-1 bg-white px-8 pt-4">
          <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput 
              className="p-1 bg-gray-100 text-gray-700 rounded-2xl m-2"
              placeholder='email'
              value='lantumbrendan170@gmail.com'
            />
            <Text className="text-gray-700 ml-4 ">Password</Text>
            <TextInput
              className="p-1 m-2 bg-gray-100 text-gray-700 rounded-2xl"
              secureTextEntry
              placeholder='password'
              value="Password1"
            />
            <TouchableOpacity className="flex items-center">
              <Text className="text-orange-700">Forgort Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-2 bg-yellow-400 rounded-xl">
              <Text className="text-xl font-semibold text-center text-green-900">Login</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-sm text-gray-700 font-semibold text-center py-2"> Or with </Text>
          <View className="flex-row justify-center space-x-14">
            <TouchableOpacity classNam="p-2 bg-gray-100 rounded-2xl"> 
             <Image source={require('../assets/icons/google.png')}
                className="w-10 h-10"
              />
            </TouchableOpacity>
            <TouchableOpacity classNam="p-2 bg-gray-100 rounded-2xl"> 
              <Image source={require('../assets/icons/facebook.png')}
                className="w-10 h-10"
                />
              </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
              <Text classNam="font-semibold text-yellow-500">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}