import { AsyncStorage } from 'react-native';

const saveUser = async (userLogin) => {
    try {
        await AsyncStorage.setItem('@userLogin', JSON.stringify(userLogin));
    } catch (e) {
        return e;
    }
};

export default saveUser;
