
import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,Alert,} from 'react-native';

interface UserData {
  name: string;
  email: string;
  number: string;
}

const CalculationsScreen: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({ //all data entered is stored in this array
    name: '',
    email: '',
    number: '',
  });
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showThankYou, setShowThankYou] = useState(false);

  const checklistItems = [
    'first Aid R1500', ' Sewing R1500', 'Landscaping R1500 ', 'LifeSkills R1500 ', ' Child Minding R750', ' Cooking R750', ' Garden maintenence R750',
  ];

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSubmit = () => {
    if (!userData.name || !userData.email || !userData.number) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setShowThankYou(true);
  };

  const resetForm = () => {
    setUserData({
      name: '',
      email: '',
      number: '',
    });
    setSelectedItems([]);
    setShowThankYou(false);
  };

  if (showThankYou) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Thank You!</Text>
        <Text style={{ marginBottom: 10 }}>
          {userData.name} {userData.email}, Age: {userData.number}
        </Text>
        <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Selected Items:</Text>
        {selectedItems.map((item, index) => (
          <Text key={index}>• {item}</Text>
        ))}
        {selectedItems.length === 0 && <Text>No items selected</Text>}
        <TouchableOpacity onPress={resetForm} style={{ backgroundColor: '#007AFF', padding: 10, borderRadius: 5, marginTop: 20 }}>
          <Text style={{ color: 'white' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20, textAlign: 'center' }}>Enter Your Information</Text>
      
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 }}
        placeholder="name"
        value={userData.name}
        onChangeText={(text) => setUserData({ ...userData, name: text })}
      />
      
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 }}
        placeholder="email"
        value={userData.email}
        onChangeText={(text) => setUserData({ ...userData, email: text })}
      />
      
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 20, borderRadius: 5 }}
        placeholder="number"
        value={userData.number}
        onChangeText={(text) => setUserData({ ...userData, number: text })}
        keyboardType="numeric"
      />

      <Text style={{ fontSize: 16, marginBottom: 10, fontWeight: 'bold' }}>Select Items:</Text>
      {checklistItems.map((item, index) => (
        <TouchableOpacity 
          key={index} 
          onPress={() => toggleItem(item)}
          style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 10,
            padding: 5
          }}
        >
          <View style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: '#ccc',
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selectedItems.includes(item) ? '#007AFF' : 'white'
          }}>
            {selectedItems.includes(item) && (
              <Text style={{ color: 'white', fontSize: 12 }}>✓</Text>
            )}
          </View>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: '#007AFF', padding: 15, borderRadius: 5, marginTop: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CalculationsScreen;