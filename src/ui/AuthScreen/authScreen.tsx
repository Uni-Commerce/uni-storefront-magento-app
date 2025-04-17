import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import type { NavigationProp } from '@/interfaces/navigation'

const AuthScreen: React.FC<React.PropsWithChildren> = ({ children }) => {
  const navigation = useNavigation<NavigationProp>()

  const isAuthenticated = false // 替换为你的认证逻辑

  useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate('login')
    }
  }, [isAuthenticated, navigation])

  return isAuthenticated ? <>{children}</> : null
}

export default AuthScreen
