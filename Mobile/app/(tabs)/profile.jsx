import { useEffect, useState } from 'react'
import { View, Alert, Text, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { API_URL } from '../../constants/api'
import { useAuthStore } from '../../store/authStore'
import styles from '../../assets/styles/profile.styles'
import ProfileHeader from '../../components/ProfileHeader'
import LogoutButton from '../../components/LogoutButton'


export default function Profile() {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const { token } = useAuthStore()


  const router = useRouter()

  const fetchData = async () => {
    try {
      setIsLoading(true)

      const response = await fetch(`${API_URL}/books/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch books')
      }

      setBooks(data)

    } catch (error) {
      console.error('Error fetching data:', error)
      Alert.alert('Error', 'Failed to fetch data. Please try again later.')
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <ProfileHeader
      />
      <LogoutButton
      />
      {/* YOUR RECOMMENDATION */}
      <View style={styles.booksHeader}>
        <Text style={styles.booksTitle}>Your Recommendations 📚</Text>
        <Text style={styles.booksCount}>{books.length} books</Text>
      </View>
      <FlatList
        data={books}
        renderItem={renderBook}
      />
    </View>
  )
}