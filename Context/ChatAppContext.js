import React, { useState, useEffect } from 'react'

export const ChatAppContect = React.createContext()

export const ChatAppProvider = ({ children }) => {
  // USESTATE
  const [account, setAccount] = useState('0xYourWalletAddress')
  const [userName, setUserName] = useState('YourUserName')
  const [friendLists, setFriendLists] = useState([])
  const [friendMsg, setFriendMsg] = useState([])
  const [loading, setLoading] = useState(false)
  const [userLists, setUserLists] = useState([])
  const [error, setError] = useState('')

  // CHAT USER DATA
  const [currentUserName, setCurrentUserName] = useState('')
  const [currentUserAddress, setCurrentUserAddress] = useState('')

  // FETCH DATA SIMULADA (substitua por dados reais se necessário)
  const fetchData = async () => {
    try {
      // Simulação de dados fictícios
      const fakeFriendLists = [{ name: 'Friend1', address: '0xFriend1313123123123123123' }, { name: 'Friend2', address: '0xFriend2' }];
      setFriendLists(fakeFriendLists);

      const fakeUserList = [{ name: 'User1', address: '0xUser113123123213123123123213123' }, { name: 'User2', address: '0xUser2' }];
      setUserLists(fakeUserList);

    } catch (error) {
      setError('Error while fetching data');
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // Função simulada de leitura de mensagem
  const readMessage = (friendAddress) => {
    // Simulação de dados fictícios
    const fakeMessages = [
      { sender: 'Friend1', message: 'Hello' },
      { sender: 'You', message: 'Hi there' },
    ];
    setFriendMsg(fakeMessages);
  }

  // Função simulada para criar uma conta
  const createAccount = ({ name, accountAddress }) => {
    // Simulação de dados fictícios
    setUserName(name);
    setAccount(accountAddress);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulando um atraso de 2 segundos
  }

  // Função simulada para adicionar amigos
  const addFriends = ({ name, accountAddress }) => {
    // Simulação de dados fictícios
    const newFriend = { name, address: accountAddress };
    setFriendLists([...friendLists, newFriend]);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Redirecionar ou realizar outras ações necessárias
    }, 2000); // Simulando um atraso de 2 segundos
  }

  // Função simulada para enviar mensagem
  const sendMessage = ({ msg, address }) => {
    // Simulação de dados fictícios
    const newMessage = { sender: 'You', message: msg };
    const updatedMessages = [...friendMsg, newMessage];
    setFriendMsg(updatedMessages);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Realize outras ações necessárias
    }, 2000); // Simulando um atraso de 2 segundos
  }

  // Função simulada para ler informações de usuário
  const readUser = (userAddress) => {
    // Simulação de dados fictícios
    const fakeUserName = 'FictitiousName';
    setCurrentUserName(fakeUserName);
    setCurrentUserAddress(userAddress);
  }

  return (
      <ChatAppContect.Provider
          value={{
            readMessage,
            createAccount,
            addFriends,
            sendMessage,
            readUser,
            account,
            userName,
            friendLists,
            friendMsg,
            userLists,
            loading,
            error,
            currentUserName,
            currentUserAddress,
          }}
      >
        {children}
      </ChatAppContect.Provider>
  )
}
