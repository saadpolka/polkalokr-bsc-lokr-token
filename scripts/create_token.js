// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  // const PolkalokrToken = await ethers.getContractFactory("PolkalokrToken");
  // const polkalokrtoken = await upgrades.deployProxy(PolkalokrToken);
  // await polkalokrtoken.deployed();
  // console.log("polkalokrtoken deployed to:", polkalokrtoken.address);
  const proxyAddress = '0x42054735ebdCD10187d061A55Ed7086311dEED4b';  
  const PolkalokrTokenV2 = await ethers.getContractFactory("PolkalokrTokenV2");
  const PolkalokrTokenV2Address = await upgrades.prepareUpgrade (proxyAddress,PolkalokrTokenV2);
  console.log("PolkalokrTokenV2 at :",PolkalokrTokenV2Address);
  
}

main();
