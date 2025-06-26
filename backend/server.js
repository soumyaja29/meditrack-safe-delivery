const express = require('express');
const { ethers } = require('ethers');
require('dotenv').config();
const cors = require('cors');
const ABI = require('./abi.json');

const app = express();
app.use(cors());
app.use(express.json());

const provider = new ethers.JsonRpcProvider(process.env.POLYGON_MUMBAI_RPC);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, ABI, wallet);

app.post('/api/update-delivery', async (req, res) => {
  const { batchId, equipmentType, status, logisticsProvider } = req.body;
  try {
    const tx = await contract.updateDelivery(batchId, equipmentType, status, logisticsProvider);
    await tx.wait();
    res.status(200).json({ message: 'Delivery updated', txHash: tx.hash });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/status/:batchId', async (req, res) => {
  try {
    const delivery = await contract.getDelivery(req.params.batchId);
    res.status(200).json(delivery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
