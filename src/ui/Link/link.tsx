import { Text } from 'react-native'
import { useLinkProps, NavigationAction } from '@react-navigation/native'

interface LinkProps {
  children: React.ReactNode
  screen: string
  params?: any
  href: string
  action?: NavigationAction
}

const Link: React.FC<LinkProps> = ({
  children,
  screen,
  params = {},
  href,
  action = {
    type: ''
  }
}) => {
  const { onPress, ...props } = useLinkProps({ screen, params, href, action })

  return (
    <Text {...props} onPress={onPress}>
      {children}
    </Text>
  )
}

export default Link
