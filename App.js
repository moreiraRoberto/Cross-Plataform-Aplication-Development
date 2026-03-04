import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Roberto Marques Moreira",
    bio: "Ciências da Computação - 2° Ano",
    seguidores: "Tem gente que é assim mesmo, azar de quem cruza",
    avatar: "https://dimensaosete.com.br/static/c245f6e9ae59ce20442165df9aedf1a3/8a681/luffy-gear-5.webp",
    Link: 
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Stats */}
      <View style={styles.stats}>
        < Text style={styles.stat}> {usuario.seguidores} seguidores</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'DarkSeaGreen',
    padding: 20,
  },
  avatar: {
    width: 400,
    height: 200,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#008080',
    marginBottom: 16,
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    fontWeight: 'Italic',
    color: 'black',
    marginBottom: 8,
  },
  bio: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    marginBottom: 14,
  },
  stats: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },
});