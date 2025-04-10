import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

import TabBar from '@/components/TabBar'

const AppLayout = () => {
  return (
    <View>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        <Text>App Layout</Text>
      </Button>
      <TabBar />
    </View>
  )
}

export default AppLayout
