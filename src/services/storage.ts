import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = {
  async setUser(email: string): Promise<void> {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(email));
    } catch (err) {
      console.log(err);
    }
  },

  async getUser(): Promise<string | undefined> {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        return JSON.parse(user);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

export {storage};
