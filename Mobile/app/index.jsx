import { Link } from "expo-router";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

export default function Index() {

  const { user, token, checkAuth, logout } = useAuthStore();

  console.log("user", user);
  console.log("token", token);

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.title
        }
      >
        Hello {user ? user.username : "Guest"}
      </Text>
      <Text
        style={styles.title
        }
      >
        Token {token ? token : "null" }
      </Text>
      
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>

      <Link href="/(auth)/signup"> Signup </Link>
      <Link href="/(auth)"> Login </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});