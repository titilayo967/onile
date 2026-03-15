// Placeholder: property detail screen
import React from 'react';
import { View, Text } from 'react-native';

export default function PropertyDetail({ params }: { params: { id: string } }) {
  return (
    <View>
      <Text>Property {params.id} placeholder</Text>
    </View>
  );
}
