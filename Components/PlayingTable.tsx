import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import createSocket from '../utils/socket';
import {Players} from '../@types/players';

type Position = 'top' | 'left' | 'right' | 'bottom';

const PlayerSlot: React.FC<{position: Position; name: string}> = ({
  position,
  name,
}) => {
  return (
    <View style={[styles.playerSlot, styles[position]]}>
      <Text style={styles.playerName}>{name}</Text>
      <View style={styles.cards}>
        <Text style={styles.cardsText}>Cards</Text>
      </View>
    </View>
  );
};

const PlayingTable: React.FC = () => {
  const [players, setPlayers] = useState<Players>({
    top: 'Waiting...',
    left: 'Waiting...',
    right: 'Waiting...',
    bottom: 'Waiting...',
  });

  useEffect(() => {
    const socket = createSocket();

    socket.on('updatePlayers', (updatedPlayers: Players) => {
      setPlayers(updatedPlayers);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View style={styles.table}>
      <PlayerSlot position="top" name={players.top} />
      <PlayerSlot position="left" name={players.left} />
      <PlayerSlot position="right" name={players.right} />
      <PlayerSlot position="bottom" name={players.bottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d2d2d',
  },
  playerSlot: {
    position: 'absolute',
    backgroundColor: '#4B5563',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  playerName: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cards: {
    width: 80,
    height: 40,
    backgroundColor: '#6B7280',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsText: {
    color: 'white',
  },
  top: {
    top: 5,
  },
  left: {
    left: 5,
  },
  right: {
    right: 5,
  },
  bottom: {
    bottom: 5,
  },
});

export default PlayingTable;
