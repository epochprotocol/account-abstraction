/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestExpiryAccount,
  TestExpiryAccountInterface,
} from "../../../contracts/test/TestExpiryAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SimpleAccountInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "_after",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "_until",
        type: "uint48",
      },
    ],
    name: "addTemporaryOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "value",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "anOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerAfter",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ownerUntil",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c0604052306080523480156200001557600080fd5b506040516200286c3803806200286c83398101604081905262000038916200004a565b6001600160a01b031660a0526200007c565b6000602082840312156200005d57600080fd5b81516001600160a01b03811681146200007557600080fd5b9392505050565b60805160a05161277d620000ef600039600081816103f1015281816109fa01528181610aa801528181610ec40152818161121b0152818161146e015281816116800152611893015260008181610629015281816106de01528181610b6401528181610c140152610d5d015261277d6000f3fe60806040526004361061016d5760003560e01c80634f1ef286116100cb578063bc197c811161007f578063cf6dca5511610059578063cf6dca55146104b2578063d087d288146104d2578063f23a6e61146104e757600080fd5b8063bc197c8114610435578063c399ec881461047d578063c4d66de81461049257600080fd5b80638da5cb5b116100b05780638da5cb5b1461038a578063b0d691fe146103e2578063b61d27f61461041557600080fd5b80634f1ef2861461036257806352d1902d1461037557600080fd5b80633e4769511161012257806347e1da2a1161010757806347e1da2a1461031a5780634a58db191461033a5780634d44560d1461034257600080fd5b80633e476951146102995780633fb5a7a1146102e557600080fd5b8063150b7a0211610153578063150b7a02146101d55780633659cfe61461024b5780633a871cdd1461026b57600080fd5b806223de291461017957806301ffc9a7146101a057600080fd5b3661017457005b600080fd5b34801561018557600080fd5b5061019e610194366004611f95565b5050505050505050565b005b3480156101ac57600080fd5b506101c06101bb366004612046565b61052d565b60405190151581526020015b60405180910390f35b3480156101e157600080fd5b5061021a6101f0366004612088565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016101cc565b34801561025757600080fd5b5061019e6102663660046120fb565b610612565b34801561027757600080fd5b5061028b610286366004612118565b61081c565b6040519081526020016101cc565b3480156102a557600080fd5b506102ce6102b43660046120fb565b60026020526000908152604090205465ffffffffffff1681565b60405165ffffffffffff90911681526020016101cc565b3480156102f157600080fd5b506102ce6103003660046120fb565b60016020526000908152604090205465ffffffffffff1681565b34801561032657600080fd5b5061019e6103353660046121b1565b610842565b61019e6109f8565b34801561034e57600080fd5b5061019e61035d36600461224b565b610a9e565b61019e6103703660046122a6565b610b4d565b34801561038157600080fd5b5061028b610d43565b34801561039657600080fd5b506000546103bd9062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101cc565b3480156103ee57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006103bd565b34801561042157600080fd5b5061019e610430366004612388565b610e2f565b34801561044157600080fd5b5061021a6104503660046123e4565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561048957600080fd5b5061028b610e7e565b34801561049e57600080fd5b5061019e6104ad3660046120fb565b610f35565b3480156104be57600080fd5b5061019e6104cd36600461249d565b6110da565b3480156104de57600080fd5b5061028b6111ce565b3480156104f357600080fd5b5061021a6105023660046124e2565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a020000000000000000000000000000000000000000000000000000000014806105c057507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b8061060c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036106dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084015b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146107f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016106d3565b6107fd8161124a565b6040805160008082526020820190925261081991839190611252565b50565b6000610826611456565b61083084846114f7565b905061083b826115fd565b9392505050565b61084a611668565b8481148015610860575082158061086057508281145b6108c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064016106d3565b600083900361097c5760005b85811015610976576109648787838181106108ef576108ef61254c565b905060200201602081019061090491906120fb565b60008585858181106109185761091861254c565b905060200281019061092a919061257b565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061172f92505050565b8061096e816125e0565b9150506108d2565b506109f0565b60005b858110156109ee576109dc87878381811061099c5761099c61254c565b90506020020160208101906109b191906120fb565b8686848181106109c3576109c361254c565b905060200201358585858181106109185761091861254c565b806109e6816125e0565b91505061097f565b505b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b158015610a8357600080fd5b505af1158015610a97573d6000803e3d6000fd5b5050505050565b610aa66117ac565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b158015610b3957600080fd5b505af11580156109f0573d6000803e3d6000fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610c12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016106d3565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610c877f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610d2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016106d3565b610d338261124a565b610d3f82826001611252565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610e0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016106d3565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610e37611668565b610e78848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061172f92505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610f0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f30919061263f565b905090565b600054610100900460ff1615808015610f555750600054600160ff909116105b80610f6f5750303b158015610f6f575060005460ff166001145b610ffb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016106d3565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561105957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b6110628261183d565b61107482600065ffffffffffff6110da565b8015610d3f57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6110e26117ac565b8165ffffffffffff168165ffffffffffff161161115b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f77726f6e6720756e74696c2f616674657200000000000000000000000000000060448201526064016106d3565b73ffffffffffffffffffffffffffffffffffffffff929092166000908152600160209081526040808320805465ffffffffffff9586167fffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000009182161790915560029092529091208054929093169116179055565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610eef565b6108196117ac565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561128a57611285836118dc565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561130f575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261130c9181019061263f565b60015b61139b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016106d3565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811461144a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016106d3565b506112858383836119e6565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146114f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016106d3565b565b600080611551836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905060006115a361156661014087018761257b565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508693925050611a0b9050565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602090815260408083205460019092529091205491925065ffffffffffff908116911681156115f1818484611a2f565b98975050505050505050565b80156108195760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610a97576040519150601f19603f3d011682016040523d82523d6000602084013e610a97565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614806116c9575060005462010000900473ffffffffffffffffffffffffffffffffffffffff1633145b6114f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016106d3565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516117589190612684565b60006040518083038185875af1925050503d8060008114611795576040519150601f19603f3d011682016040523d82523d6000602084013e61179a565b606091505b509150915081610a9757805160208201fd5b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314806117d757503330145b6114f5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016106d3565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8481168202929092178084556040519190048216927f0000000000000000000000000000000000000000000000000000000000000000909216917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de91a350565b73ffffffffffffffffffffffffffffffffffffffff81163b611980576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016106d3565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6119ef83611a67565b6000825111806119fc5750805b1561128557610e788383611ab4565b6000806000611a1a8585611ad9565b91509150611a2781611b1e565b509392505050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b85611a57576000611a5a565b60015b60ff161717949350505050565b611a70816118dc565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061083b838360405180606001604052806027815260200161272160279139611cd1565b6000808251604103611b0f5760208301516040840151606085015160001a611b0387828585611d56565b94509450505050611b17565b506000905060025b9250929050565b6000816004811115611b3257611b326126a0565b03611b3a5750565b6001816004811115611b4e57611b4e6126a0565b03611bb5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016106d3565b6002816004811115611bc957611bc96126a0565b03611c30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016106d3565b6003816004811115611c4457611c446126a0565b03610819576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016106d3565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051611cfb9190612684565b600060405180830381855af49150503d8060008114611d36576040519150601f19603f3d011682016040523d82523d6000602084013e611d3b565b606091505b5091509150611d4c86838387611e45565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611d8d5750600090506003611e3c565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611de1573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611e3557600060019250925050611e3c565b9150600090505b94509492505050565b60608315611edb578251600003611ed45773ffffffffffffffffffffffffffffffffffffffff85163b611ed4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106d3565b5081611ee5565b611ee58383611eed565b949350505050565b815115611efd5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d391906126cf565b73ffffffffffffffffffffffffffffffffffffffff8116811461081957600080fd5b60008083601f840112611f6557600080fd5b50813567ffffffffffffffff811115611f7d57600080fd5b602083019150836020828501011115611b1757600080fd5b60008060008060008060008060c0898b031215611fb157600080fd5b8835611fbc81611f31565b97506020890135611fcc81611f31565b96506040890135611fdc81611f31565b955060608901359450608089013567ffffffffffffffff8082111561200057600080fd5b61200c8c838d01611f53565b909650945060a08b013591508082111561202557600080fd5b506120328b828c01611f53565b999c989b5096995094979396929594505050565b60006020828403121561205857600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461083b57600080fd5b6000806000806000608086880312156120a057600080fd5b85356120ab81611f31565b945060208601356120bb81611f31565b935060408601359250606086013567ffffffffffffffff8111156120de57600080fd5b6120ea88828901611f53565b969995985093965092949392505050565b60006020828403121561210d57600080fd5b813561083b81611f31565b60008060006060848603121561212d57600080fd5b833567ffffffffffffffff81111561214457600080fd5b8401610160818703121561215757600080fd5b95602085013595506040909401359392505050565b60008083601f84011261217e57600080fd5b50813567ffffffffffffffff81111561219657600080fd5b6020830191508360208260051b8501011115611b1757600080fd5b600080600080600080606087890312156121ca57600080fd5b863567ffffffffffffffff808211156121e257600080fd5b6121ee8a838b0161216c565b9098509650602089013591508082111561220757600080fd5b6122138a838b0161216c565b9096509450604089013591508082111561222c57600080fd5b5061223989828a0161216c565b979a9699509497509295939492505050565b6000806040838503121561225e57600080fd5b823561226981611f31565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156122b957600080fd5b82356122c481611f31565b9150602083013567ffffffffffffffff808211156122e157600080fd5b818501915085601f8301126122f557600080fd5b81358181111561230757612307612277565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561234d5761234d612277565b8160405282815288602084870101111561236657600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000806000806060858703121561239e57600080fd5b84356123a981611f31565b935060208501359250604085013567ffffffffffffffff8111156123cc57600080fd5b6123d887828801611f53565b95989497509550505050565b60008060008060008060008060a0898b03121561240057600080fd5b883561240b81611f31565b9750602089013561241b81611f31565b9650604089013567ffffffffffffffff8082111561243857600080fd5b6124448c838d0161216c565b909850965060608b013591508082111561245d57600080fd5b6124698c838d0161216c565b909650945060808b013591508082111561202557600080fd5b803565ffffffffffff8116811461249857600080fd5b919050565b6000806000606084860312156124b257600080fd5b83356124bd81611f31565b92506124cb60208501612482565b91506124d960408501612482565b90509250925092565b60008060008060008060a087890312156124fb57600080fd5b863561250681611f31565b9550602087013561251681611f31565b94506040870135935060608701359250608087013567ffffffffffffffff81111561254057600080fd5b61223989828a01611f53565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125b057600080fd5b83018035915067ffffffffffffffff8211156125cb57600080fd5b602001915036819003821315611b1757600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612638577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60006020828403121561265157600080fd5b5051919050565b60005b8381101561267357818101518382015260200161265b565b83811115610e785750506000910152565b60008251612696818460208701612658565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60208152600082518060208401526126ee816040850160208701612658565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122030ba43e6ebfb103f419c2d0f9a0dce8b39a71fc08645bfe19d236e22984fb07f64736f6c634300080f0033";

type TestExpiryAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestExpiryAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestExpiryAccount__factory extends ContractFactory {
  constructor(...args: TestExpiryAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestExpiryAccount> {
    return super.deploy(
      anEntryPoint,
      overrides || {}
    ) as Promise<TestExpiryAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override attach(address: string): TestExpiryAccount {
    return super.attach(address) as TestExpiryAccount;
  }
  override connect(signer: Signer): TestExpiryAccount__factory {
    return super.connect(signer) as TestExpiryAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestExpiryAccountInterface {
    return new utils.Interface(_abi) as TestExpiryAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestExpiryAccount {
    return new Contract(address, _abi, signerOrProvider) as TestExpiryAccount;
  }
}
