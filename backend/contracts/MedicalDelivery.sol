// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MedicalDelivery {
    struct Delivery {
        string batchId;
        string equipmentType;
        string status;
        string logisticsProvider;
        uint256 timestamp;
    }

    mapping(string => Delivery) public deliveries;

    event DeliveryUpdated(string batchId, string status);

    function updateDelivery(
        string memory _batchId,
        string memory _equipmentType,
        string memory _status,
        string memory _logisticsProvider
    ) public {
        deliveries[_batchId] = Delivery(
            _batchId,
            _equipmentType,
            _status,
            _logisticsProvider,
            block.timestamp
        );

        emit DeliveryUpdated(_batchId, _status);
    }

    function getDelivery(string memory _batchId) public view returns (Delivery memory) {
        return deliveries[_batchId];
    }
}
