const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const MedicalDelivery = await hre.ethers.getContractFactory("MedicalDelivery");
  const contract = await MedicalDelivery.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
