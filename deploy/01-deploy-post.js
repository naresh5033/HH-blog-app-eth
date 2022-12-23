const { network, ethers } = require("hardhat");
const {
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  let { deployer } = await getNamedAccounts();

  const waitBlockConfirmations = developmentChains.includes(network.name)
    ? 1
    : VERIFICATION_BLOCK_CONFIRMATIONS;

  log("----------------------------------------------------");
  /* string memory _title,
        address _author,
        string memory _tag,
        string memory _timestamp,
        string memory _content*/

  const arguments = [
    "BlogApp",
    "0xa7Ffeb3d4E0f6d68946843342D54bfcb43Cb84AA",
    "Blockchain",
    "23.12.2022",
    "some Random Content",
  ];
  const post = await deploy("Post", {
    from: deployer,
    args: arguments,
    log: true,
    waitConfirmations: waitBlockConfirmations,
  });
  //await realEstate.deployed();

  const postContract = await ethers.getContract("Post");

  console.log(`Deployed Post Contract at: ${postContract.address}`);

  // Verify the deployment
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying...");
    await verify(post.address, arguments);
  }
  log("----------------------------------------------------");
};

module.exports.tags = ["all", "post"];
