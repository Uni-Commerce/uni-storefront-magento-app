import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        <Text>App Layout</Text>
      </Button>
    </View>
  )
}

export default HomeScreen
