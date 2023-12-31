import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import axios from "axios";
// import { ScrollView } from "react-native-gesture-handler";

const editProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [password, setPassword] = useState('');

    const [updatedUserData, setUpdatedUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        country: '',
        phone: '',
        date: '',
      });

      const fetchUserDetails = async () => {
        try {
          const response = await axios.get('https://klusterhon.onrender.com/user');
          const userDetails = response.data.data;
          // Update state with user details
          setFirstName(userDetails.firstName || '');
          setLastName(userDetails.lastName || '');
          setEmail(userDetails.email || '');
          setGender(userDetails.gender || '');
          setCountry(userDetails.country || '');
          setPhone(userDetails.phone || '');
          setDate(userDetails.date || '');
          console.log('User Details:', userDetails);
        } catch (error) {
          console.error('Error fetching user details:', error.message);
        }
      };
    
      const updateUserDetails = async () => {
        try {
          const response = await axios.post('https://klusterhon.onrender.com/user/update', updatedUserData);
          const updatedUser = response.data.data;
          console.log('User Updated:', updatedUser);
          // Optionally, update local state or perform other actions
        } catch (error) {
          console.error('Error updating user details:', error.message);
        }
      };
    
      const handleSaveUpdate = () => {
        // Update the updatedUserData object with the current state
        setUpdatedUserData({
          firstName,
          lastName,
          email,
          gender,
          country,
          phone,
          date,
        });
        updateUserDetails();
      };
    
      useEffect(() => {
        fetchUserDetails();
      }, []);

    return (
        <View style={tw`px-3 py-5`}>
        <ScrollView>
            <View style={tw`flex-row p-5 border-b-2 border-slate-200`}>
                <View>
                    <FontAwesome name="user-secret" size={34} color="black" />
                </View>
                <View style={tw`border border-r-4 border-slate-300 mx-6`}></View>
                    {/* <Image 
                        style={tw`w-15 h-15 rounded-full dark:bg-gray-500 aspect-square`}
                        source={'https://source.unsplash.com/150x150/?portrait?'} 
                    /> */}

                <View style={tw`justify-center items-center`}>
                    <View>
                        <TouchableOpacity>
                            <View style={tw`border border-green-500 rounded-lg px-8 py-2`}>
                            <Text>
                                <Feather name="upload-cloud" size={24} color="black" />
                                Upload Photo
                            </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Text style={tw`text-red-500 mt-3 text-center`}>Remove</Text>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>

            <View>
                <View style={tw`mt-2`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>First Name</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500`} 
                        placeholder="First Name"
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName} 
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Last Name</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500`} 
                        placeholder="First Name"
                        onChangeText={(text) => setLastName(text)}
                        value={lastName} 
                    />
                </View>
                <View style={tw`mt-3`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Email</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="email@gmail.com"
                        onChangeText={(text) => setEmail(text)}
                        value={email} 
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Phone Number</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="735 986 5433"
                        onChangeText={(text) => setPhone(text)}
                        value={phone} 
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Gender</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="Male"
                        onChangeText={(text) => setGender(text)}
                        value={gender} 
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Country</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="Country"
                        onChangeText={(text) => setCountry(text)}
                        value={country} 
                    />
                </View>
                <View style={tw`mt-2`}>
                    <Text style={tw`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}>Date of birth</Text>
                    <TextInput 
                        style={tw`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
                        placeholder="Date of Birth"
                        onChangeText={(text) => setDate(text)}
                        value={date} 
                    />
                </View>
                <View style={tw`mt-2`}>
                    <TouchableOpacity onPress={handleSaveUpdate}>
                        <View style={tw`items-center justify-center rounded-none focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>
                        <Text style={tw`text-white text-[15px] text-center`}>
                            Save & Update
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={tw`items-center mt-2`}>
                    <TouchableOpacity>
                        <Text style={tw`font-bold text-green-500 underline`}>Reset Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            

        </ScrollView>
        </View>
    )
}

export default editProfile