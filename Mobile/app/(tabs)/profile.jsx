import { useEffect, useState } from 'react'
import {
  View,
  Alert,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl
} from 'react-native'
import { useRouter } from 'expo-router'
import { API_URL } from '../../constants/api'
import { useAuthStore } from '../../store/authStore'
import styles from '../../assets/styles/profile.styles'
import ProfileHeader from '../../components/ProfileHeader'
import LogoutButton from '../../components/LogoutButton'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../../constants/colors'
import { Image } from 'expo-image'
import { sleep } from '.'
import Loader from '../../components/Loader'


export default function Profile() {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [deletBookId, setDeleteBookId] = useState(null)

  const { token } = useAuthStore()

  const router = useRouter()

  // const fetchData = async () => {
  //   try {
  //     setIsLoading(true)

  //     const response = await fetch(`${API_URL}/books`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })

  //     const data = await response.json()
  //     if (!response.ok) {
  //       throw new Error(data.message || 'Failed to fetch books')
  //     }

  //     setBooks(data)

  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //     Alert.alert('Error', 'Failed to fetch data. Please try again later.')
  //   }
  //   finally {
  //     setIsLoading(false)
  //   }
  // }

  const fetchData = async () => {
    try {
      setIsLoading(true);

      if (!token) {
        Alert.alert('Error', 'You are not logged in. Please log in to continue.');
        return;
      }

      const response = await fetch(`${API_URL}/books`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized. Please check your credentials.');
        } else if (response.status === 404) {
          throw new Error('Books not found.');
        } else {
          throw new Error(data.message || 'Failed to fetch books');
        }
      }

      // Check if data.books exists and is an array
      if (data && Array.isArray(data.books)) {
        setBooks(data.books);
      } else {
        throw new Error('Invalid data format');
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', error.message || 'Failed to fetch data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  const handleDeleteBook = async (bookId) => {
    try {
      setDeleteBookId(bookId)

      const response = await fetch(`${API_URL}/books/${bookId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete book')
      }

      setBooks(books.filter((book) => book._id !== bookId))

      Alert.alert('Success', 'Recommendation Book deleted successfully')


    } catch (error) {
      console.error('Error deleting book:', error)
      Alert.alert('Error', 'Failed to delete book. Please try again later.')
    }
    finally {
      setDeleteBookId(null)
    }
  }

  const confirmDelete = (bookId) => {
    Alert.alert(
      'Delete Recommendation',
      'Are you sure you want to delete this recommendation?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => handleDeleteBook(bookId),
          style: 'destructive',
        },
      ],
    )
  }

  const renderBookItem = ({ item }) => {
    return (
      <View style={styles.bookItem}>
        <Image
          source={{ uri: item.image }}
          style={styles.bookImage}
        />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{item.title}</Text>
          <View style={styles.ratingContainer}>{renderRatingStars(item.rating)}</View>
          <Text style={styles.bookCaption} numberOfLines={2}>{item.caption}</Text>
          <Text style={styles.bookDate}>{new Date(item.createdAt).toLocaleDateString()}</Text>
        </View>
        <TouchableOpacity style={styles.deleteButton} onPress={() => confirmDelete(item._id)}>
          {deletBookId === item._id ? (
            <ActivityIndicator size="small" color={COLORS.primary} />
          ) : (
            <Ionicons name="trash-outline" size={20} color={COLORS.primary} />
          )}
        </TouchableOpacity>
      </View>
    )
  }

  const renderRatingStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={i <= rating ? 'star' : 'star-outline'}
          size={14}
          color={i <= rating ? "#f4b400" : COLORS.textSecondary}
          style={{ marginRight: 2 }}
        />
      )
    }
    return stars
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await sleep(500) // Simulate network delay
    await fetchData()
    setRefreshing(false)
  }

  if (isLoading && !refreshing) {
    // Show a loading indicator while data is being fetched
    return (
      <Loader />
    )
  }

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
        renderItem={renderBookItem}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.booksList}

        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[COLORS.primary]}
            tintColor={COLORS.primary}
          />
        }

        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="book-outline" size={50} color={COLORS.textSecondary} />
            <Text style={styles.emptyText}>No recommendations yet</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => router.push('/create')}>
              <Text style={styles.addButtonText}>Add your first book</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  )
}