import postAbi from "./Post.json";
import factoryAbi from "./BlogFactory.json";

const contractAddress = "0x9D8C6F44beBbCdd65DB2C12AA86C8Eb0123083b6";

const blogInstance = (web3Instance, address) => {
  return new web3Instance.eth.Contract(postAbi, address);
};

const factoryInstance = (web3Instance) => {
  return new web3Instance.eth.Contract(factoryAbi, contractAddress);
};

export { blogInstance, factoryInstance };
