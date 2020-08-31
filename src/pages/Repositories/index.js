import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  const {params} = useRoute();

  useEffect(() => {
    async function loadRepositories() {
      setLoading(true);
      const response = await api.get(`users/${params.username}/repos`);

      setRepositories(response.data);
      setLoading(false);
    }

    loadRepositories();
  }, [params]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meus Repositório</Text>

      {loading && <ActivityIndicator size="large" color="#fff" />}

      <FlatList
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <View style={styles.repository}>
            <Text style={styles.repositoryName}>{item.name}</Text>
            <Text style={styles.repositoryDescription}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
