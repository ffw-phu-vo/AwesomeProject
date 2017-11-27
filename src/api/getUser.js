import { AsyncStorage } from 'react-native';

const getUser = async () => {
    try {
        const value = await AsyncStorage.getItem('@userLogin');
        if (value !== null) {
            return JSON.parse(value);
        }
        return null;
    } catch (error) {
    // Error retrieving data
        return null;
    }
};

export default getUser;
