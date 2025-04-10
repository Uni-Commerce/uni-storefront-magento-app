import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

const TabBar = () => {
  const currency = useSelector((state: any) => state.app.currency)

  return (
    <View>
      <Text>Currency - {currency}</Text>
    </View>
  )
}

export default TabBar
