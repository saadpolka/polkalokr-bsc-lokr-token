// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface ILocker {
    /**
     * @notice Reverts if transaction is not allowed. Otherwise returns the penalty, if any.
     * @param source Token sender address
     * @param dest Token recipient address
     * @return bool if the penalty should be applied
     * @return uint256 the penalty 
     */
    function lockOrGetPenalty(address source, address dest) external returns (bool, uint256);
}

