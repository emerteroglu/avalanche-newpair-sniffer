module.exports.yak = abiyak();
module.exports.erc20 = erc20();
module.exports.pgl = pgl();
module.exports.factory = factory();

function factory() {
  return [{
    "type": "constructor",
    "stateMutability": "nonpayable",
    "payable": false,
    "inputs": [{
      "type": "address",
      "name": "_feeToSetter",
      "internalType": "address"
    }]
  }, {
    "type": "event",
    "name": "PairCreated",
    "inputs": [{
      "type": "address",
      "name": "token0",
      "internalType": "address",
      "indexed": true
    }, {
      "type": "address",
      "name": "token1",
      "internalType": "address",
      "indexed": true
    }, {
      "type": "address",
      "name": "pair",
      "internalType": "address",
      "indexed": false
    }, {
      "type": "uint256",
      "name": "",
      "internalType": "uint256",
      "indexed": false
    }],
    "anonymous": false
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "name": "allPairs",
    "inputs": [{
      "type": "uint256",
      "name": "",
      "internalType": "uint256"
    }],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "",
      "internalType": "uint256"
    }],
    "name": "allPairsLength",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
      "type": "address",
      "name": "pair",
      "internalType": "address"
    }],
    "name": "createPair",
    "inputs": [{
      "type": "address",
      "name": "tokenA",
      "internalType": "address"
    }, {
      "type": "address",
      "name": "tokenB",
      "internalType": "address"
    }],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "name": "feeTo",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "name": "feeToSetter",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "name": "getPair",
    "inputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }, {
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "setFeeTo",
    "inputs": [{
      "type": "address",
      "name": "_feeTo",
      "internalType": "address"
    }],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "setFeeToSetter",
    "inputs": [{
      "type": "address",
      "name": "_feeToSetter",
      "internalType": "address"
    }],
    "constant": false
  }]
}

function pgl() {
  return [{
    "type": "constructor",
    "stateMutability": "nonpayable",
    "payable": false,
    "inputs": []
  }, {
    "type": "event",
    "name": "Approval",
    "inputs": [{
      "type": "address",
      "name": "owner",
      "internalType": "address",
      "indexed": true
    }, {
      "type": "address",
      "name": "spender",
      "internalType": "address",
      "indexed": true
    }, {
      "type": "uint256",
      "name": "value",
      "internalType": "uint256",
      "indexed": false
    }],
    "anonymous": false
  }, {
    "type": "event",
    "name": "Burn",
    "inputs": [{
      "type": "address",
      "name": "sender",
      "internalType": "address",
      "indexed": true
    }, {
      "type": "uint256",
      "name": "amount0",
      "internalType": "uint256",
      "indexed": false
    }, {
      "type": "uint256",
      "name": "amount1",
      "internalType": "uint256",
      "indexed": false
    }, {
      "type": "address",
      "name": "to",
      "internalType": "address",
      "indexed": true
    }],
    "anonymous": false
  }, {
    "type": "event",
    "name": "Mint",
    "inputs": [{
      "type": "address",
      "name": "sender",
      "internalType": "address",
      "indexed": true
    }, {
      "type": "uint256",
      "name": "amount0",
      "internalType": "uint256",
      "indexed": false
    }, {
      "type": "uint256",
      "name": "amount1",
      "internalType": "uint256",
      "indexed": false
    }],
    "anonymous": false
  }, {
    "type": "event",
    "name": "Swap",
    "inputs": [{
      "type": "address",
      "name": "sender",
      "internalType": "address",
      "indexed": true
    }, {
      "type": "uint256",
      "name": "amount0In",
      "internalType": "uint256",
      "indexed": false
    }, {
      "type": "uint256",
      "name": "amount1In",
      "internalType": "uint256",
      "indexed": false
    }, {
      "type": "uint256",
      "name": "amount0Out",
      "internalType": "uint256",
      "indexed": false
    }, {
      "type": "uint256",
      "name": "amount1Out",
      "internalType": "uint256",
      "indexed": false
    }, {
      "type": "address",
      "name": "to",
      "internalType": "address",
      "indexed": true
    }],
    "anonymous": false
  }, {
    "type": "event",
    "name": "Sync",
    "inputs": [{
      "type": "uint112",
      "name": "reserve0",
      "internalType": "uint112",
      "indexed": false
    }, {
      "type": "uint112",
      "name": "reserve1",
      "internalType": "uint112",
      "indexed": false
    }],
    "anonymous": false
  }, {
    "type": "event",
    "name": "Transfer",
    "inputs": [{
      "type": "address",
      "name": "from",
      "internalType": "address",
      "indexed": true
    }, {
      "type": "address",
      "name": "to",
      "internalType": "address",
      "indexed": true
    }, {
      "type": "uint256",
      "name": "value",
      "internalType": "uint256",
      "indexed": false
    }],
    "anonymous": false
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "bytes32",
      "name": "",
      "internalType": "bytes32"
    }],
    "name": "DOMAIN_SEPARATOR",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "",
      "internalType": "uint256"
    }],
    "name": "MINIMUM_LIQUIDITY",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "bytes32",
      "name": "",
      "internalType": "bytes32"
    }],
    "name": "PERMIT_TYPEHASH",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "",
      "internalType": "uint256"
    }],
    "name": "allowance",
    "inputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }, {
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
      "type": "bool",
      "name": "",
      "internalType": "bool"
    }],
    "name": "approve",
    "inputs": [{
      "type": "address",
      "name": "spender",
      "internalType": "address"
    }, {
      "type": "uint256",
      "name": "value",
      "internalType": "uint256"
    }],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "",
      "internalType": "uint256"
    }],
    "name": "balanceOf",
    "inputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "amount0",
      "internalType": "uint256"
    }, {
      "type": "uint256",
      "name": "amount1",
      "internalType": "uint256"
    }],
    "name": "burn",
    "inputs": [{
      "type": "address",
      "name": "to",
      "internalType": "address"
    }],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint8",
      "name": "",
      "internalType": "uint8"
    }],
    "name": "decimals",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "name": "factory",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint112",
      "name": "_reserve0",
      "internalType": "uint112"
    }, {
      "type": "uint112",
      "name": "_reserve1",
      "internalType": "uint112"
    }, {
      "type": "uint32",
      "name": "_blockTimestampLast",
      "internalType": "uint32"
    }],
    "name": "getReserves",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "initialize",
    "inputs": [{
      "type": "address",
      "name": "_token0",
      "internalType": "address"
    }, {
      "type": "address",
      "name": "_token1",
      "internalType": "address"
    }],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "",
      "internalType": "uint256"
    }],
    "name": "kLast",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "liquidity",
      "internalType": "uint256"
    }],
    "name": "mint",
    "inputs": [{
      "type": "address",
      "name": "to",
      "internalType": "address"
    }],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "string",
      "name": "",
      "internalType": "string"
    }],
    "name": "name",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "",
      "internalType": "uint256"
    }],
    "name": "nonces",
    "inputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "permit",
    "inputs": [{
      "type": "address",
      "name": "owner",
      "internalType": "address"
    }, {
      "type": "address",
      "name": "spender",
      "internalType": "address"
    }, {
      "type": "uint256",
      "name": "value",
      "internalType": "uint256"
    }, {
      "type": "uint256",
      "name": "deadline",
      "internalType": "uint256"
    }, {
      "type": "uint8",
      "name": "v",
      "internalType": "uint8"
    }, {
      "type": "bytes32",
      "name": "r",
      "internalType": "bytes32"
    }, {
      "type": "bytes32",
      "name": "s",
      "internalType": "bytes32"
    }],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "",
      "internalType": "uint256"
    }],
    "name": "price0CumulativeLast",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "",
      "internalType": "uint256"
    }],
    "name": "price1CumulativeLast",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "skim",
    "inputs": [{
      "type": "address",
      "name": "to",
      "internalType": "address"
    }],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "swap",
    "inputs": [{
      "type": "uint256",
      "name": "amount0Out",
      "internalType": "uint256"
    }, {
      "type": "uint256",
      "name": "amount1Out",
      "internalType": "uint256"
    }, {
      "type": "address",
      "name": "to",
      "internalType": "address"
    }, {
      "type": "bytes",
      "name": "data",
      "internalType": "bytes"
    }],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "string",
      "name": "",
      "internalType": "string"
    }],
    "name": "symbol",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [],
    "name": "sync",
    "inputs": [],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "name": "token0",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "address",
      "name": "",
      "internalType": "address"
    }],
    "name": "token1",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "view",
    "payable": false,
    "outputs": [{
      "type": "uint256",
      "name": "",
      "internalType": "uint256"
    }],
    "name": "totalSupply",
    "inputs": [],
    "constant": true
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
      "type": "bool",
      "name": "",
      "internalType": "bool"
    }],
    "name": "transfer",
    "inputs": [{
      "type": "address",
      "name": "to",
      "internalType": "address"
    }, {
      "type": "uint256",
      "name": "value",
      "internalType": "uint256"
    }],
    "constant": false
  }, {
    "type": "function",
    "stateMutability": "nonpayable",
    "payable": false,
    "outputs": [{
      "type": "bool",
      "name": "",
      "internalType": "bool"
    }],
    "name": "transferFrom",
    "inputs": [{
      "type": "address",
      "name": "from",
      "internalType": "address"
    }, {
      "type": "address",
      "name": "to",
      "internalType": "address"
    }, {
      "type": "uint256",
      "name": "value",
      "internalType": "uint256"
    }],
    "constant": false
  }]
}


function erc20() {
  return [{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_spender",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_from",
      "type": "address"
    }, {
      "name": "_to",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }],
    "name": "transferFrom",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_owner",
      "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
      "name": "balance",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_to",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_owner",
      "type": "address"
    }, {
      "name": "_spender",
      "type": "address"
    }],
    "name": "allowance",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "owner",
      "type": "address"
    }, {
      "indexed": true,
      "name": "spender",
      "type": "address"
    }, {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }],
    "name": "Approval",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "from",
      "type": "address"
    }, {
      "indexed": true,
      "name": "to",
      "type": "address"
    }, {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }],
    "name": "Transfer",
    "type": "event"
  }]
}

function abiyak() {
  return [{
      "inputs": [{
          "internalType": "address[]",
          "name": "_adapters",
          "type": "address[]"
        },
        {
          "internalType": "address[]",
          "name": "_trustedTokens",
          "type": "address[]"
        },
        {
          "internalType": "address",
          "name": "_feeClaimer",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Recovered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "internalType": "address[]",
        "name": "_newAdapters",
        "type": "address[]"
      }],
      "name": "UpdatedAdapters",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [{
          "indexed": false,
          "internalType": "address",
          "name": "_oldFeeClaimer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "_newFeeClaimer",
          "type": "address"
        }
      ],
      "name": "UpdatedFeeClaimer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [{
          "indexed": false,
          "internalType": "uint256",
          "name": "_oldMinFee",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_newMinFee",
          "type": "uint256"
        }
      ],
      "name": "UpdatedMinFee",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [{
        "indexed": false,
        "internalType": "address[]",
        "name": "_newTrustedTokens",
        "type": "address[]"
      }],
      "name": "UpdatedTrustedTokens",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [{
          "indexed": true,
          "internalType": "address",
          "name": "_tokenIn",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_tokenOut",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_amountOut",
          "type": "uint256"
        }
      ],
      "name": "YakSwap",
      "type": "event"
    },
    {
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "name": "ADAPTERS",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "AVAX",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "FEE_CLAIMER",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "FEE_DENOMINATOR",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "MIN_FEE",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "NAME",
      "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "name": "TRUSTED_TOKENS",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "WAVAX",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "adaptersCount",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenOut",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_maxSteps",
          "type": "uint256"
        }
      ],
      "name": "findBestPath",
      "outputs": [{
        "components": [{
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "address[]",
            "name": "adapters",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
          }
        ],
        "internalType": "struct YakRouter.FormattedOffer",
        "name": "",
        "type": "tuple"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenOut",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_maxSteps",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_gasPrice",
          "type": "uint256"
        }
      ],
      "name": "findBestPathWithGas",
      "outputs": [{
        "components": [{
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
          },
          {
            "internalType": "address[]",
            "name": "adapters",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
          },
          {
            "internalType": "uint256",
            "name": "gasEstimate",
            "type": "uint256"
          }
        ],
        "internalType": "struct YakRouter.FormattedOfferWithGas",
        "name": "",
        "type": "tuple"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "owner",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenOut",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "_index",
          "type": "uint8"
        }
      ],
      "name": "queryAdapter",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenOut",
          "type": "address"
        },
        {
          "internalType": "uint8[]",
          "name": "_options",
          "type": "uint8[]"
        }
      ],
      "name": "queryNoSplit",
      "outputs": [{
        "components": [{
            "internalType": "address",
            "name": "adapter",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenIn",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenOut",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
          }
        ],
        "internalType": "struct YakRouter.Query",
        "name": "",
        "type": "tuple"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenOut",
          "type": "address"
        }
      ],
      "name": "queryNoSplit",
      "outputs": [{
        "components": [{
            "internalType": "address",
            "name": "adapter",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenIn",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenOut",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
          }
        ],
        "internalType": "struct YakRouter.Query",
        "name": "",
        "type": "tuple"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }],
      "name": "recoverAVAX",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenAmount",
          "type": "uint256"
        }
      ],
      "name": "recoverERC20",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "renounceOwnership",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{
        "internalType": "address[]",
        "name": "_adapters",
        "type": "address[]"
      }],
      "name": "setAdapters",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{
        "internalType": "address",
        "name": "_claimer",
        "type": "address"
      }],
      "name": "setFeeClaimer",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{
        "internalType": "uint256",
        "name": "_fee",
        "type": "uint256"
      }],
      "name": "setMinFee",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{
        "internalType": "address[]",
        "name": "_trustedTokens",
        "type": "address[]"
      }],
      "name": "setTrustedTokens",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{
          "components": [{
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "adapters",
              "type": "address[]"
            }
          ],
          "internalType": "struct YakRouter.Trade",
          "name": "_trade",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_fee",
          "type": "uint256"
        }
      ],
      "name": "swapNoSplit",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{
          "components": [{
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "adapters",
              "type": "address[]"
            }
          ],
          "internalType": "struct YakRouter.Trade",
          "name": "_trade",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_fee",
          "type": "uint256"
        }
      ],
      "name": "swapNoSplitFromAVAX",
      "outputs": [

      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [{
          "components": [{
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "adapters",
              "type": "address[]"
            }
          ],
          "internalType": "struct YakRouter.Trade",
          "name": "_trade",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_fee",
          "type": "uint256"
        }
      ],
      "name": "swapNoSplitToAVAX",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{
          "components": [{
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "adapters",
              "type": "address[]"
            }
          ],
          "internalType": "struct YakRouter.Trade",
          "name": "_trade",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_fee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "_v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "_r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "swapNoSplitToAVAXWithPermit",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{
          "components": [{
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "internalType": "address[]",
              "name": "path",
              "type": "address[]"
            },
            {
              "internalType": "address[]",
              "name": "adapters",
              "type": "address[]"
            }
          ],
          "internalType": "struct YakRouter.Trade",
          "name": "_trade",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_fee",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "_v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "_r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_s",
          "type": "bytes32"
        }
      ],
      "name": "swapNoSplitWithPermit",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }],
      "name": "transferOwnership",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "trustedTokensCount",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ]
}