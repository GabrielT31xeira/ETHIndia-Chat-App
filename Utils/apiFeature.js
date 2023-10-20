export const ChechIfWalletConnected = async () => {
  // Simulando uma conexão offline retornando um valor fictício
  return '0xYourOfflineWalletAddress';
};

export const connectWallet = async () => {
  // Simulando uma conexão offline retornando um valor fictício
  return '0xYourOfflineWalletAddress';
};

// Simulando um contrato offline
const offlineContract = {
  getUsername: (address) => 'YourOfflineName',
  getMyFriendList: () => [],
  getAllAppUser: () => [],
  readMessage: (friendAddress) => [],
  createAccount: (name) => ({ wait: async () => {} }),
  addFriend: (accountAddress, name) => ({ wait: async () => {} }),
  sendMessage: (address, msg) => ({ wait: async () => {} }),
};

export const connectingWithContract = async () => {
  // Simulando uma conexão com contrato offline
  return offlineContract;
};

export const convertTime = (time) => {
  if (!time || !time.toNumber) {
    // Retornar um valor fictício para funcionar offline
    const offlineTime = new Date('2023-10-19T12:00:00');
    const realTime =
        offlineTime.getHours() +
        "/" +
        offlineTime.getMinutes() +
        "/" +
        offlineTime.getSeconds() +
        "  Date:" +
        offlineTime.getDate() +
        "/" +
        (offlineTime.getMonth() + 1) +
        "/" +
        offlineTime.getFullYear();
    return realTime;
  }

  const newTime = new Date(time.toNumber());

  if (isNaN(newTime)) {
    return null; // Retorne null ou outro valor apropriado em caso de erro
  }

  const realTime =
      newTime.getHours() +
      "/" +
      newTime.getMinutes() +
      "/" +
      newTime.getSeconds() +
      "  Date:" +
      newTime.getDate() +
      "/" +
      (newTime.getMonth() + 1) +
      "/" +
      newTime.getFullYear();

  return realTime;
};
