/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  EpochWalletFactory,
  EpochWalletFactoryInterface,
} from "../../../../contracts/flattened/EpochWalletFactory.sol/EpochWalletFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract EpochWallet",
        name: "_epochWallet",
        type: "address",
      },
      {
        internalType: "contract IEpochRegistry",
        name: "_epochRegistry",
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
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldRegistry",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRegistry",
        type: "address",
      },
    ],
    name: "RegistryUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "WalletCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract EpochWallet",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract EpochWallet",
        name: "ret",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "epochRegistry",
    outputs: [
      {
        internalType: "contract IEpochRegistry",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEpochRegistry",
        name: "_registry",
        type: "address",
      },
    ],
    name: "updateRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161122d38038061122d83398101604081905261002f916100f6565b6100383361008e565b6001600160a01b03828116608052600180546001600160a01b031916918316918217905560405181907fc6bbf45f9b0d70db1b63c60b6aba621aff5ff17c5296d4319877c80000254bf790600090a35050610130565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811681146100f357600080fd5b50565b6000806040838503121561010957600080fd5b8251610114816100de565b6020840151909250610125816100de565b809150509250929050565b6080516110d561015860003960008181609e015281816102cd015261049501526110d56000f3fe60806040523480156200001157600080fd5b5060043610620000935760003560e01c8063715018a61162000062578063715018a6146200013a5780638cb84e1814620001445780638da5cb5b146200015b578063f2fde38b146200017a57600080fd5b806311464fbe14620000985780631a5da6c814620000e95780632b12cb6914620001025780635fbfb9cf1462000123575b600080fd5b620000c07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b62000100620000fa366004620007b9565b62000191565b005b600154620000c09073ffffffffffffffffffffffffffffffffffffffff1681565b620000c062000134366004620007d9565b62000265565b6200010062000406565b620000c062000155366004620007d9565b6200041e565b60005473ffffffffffffffffffffffffffffffffffffffff16620000c0565b620001006200018b366004620007b9565b620005a0565b6200019b6200065d565b73ffffffffffffffffffffffffffffffffffffffff81166200021e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f466163746f72793a2041646472657373206d7573742062652076616c6964000060448201526064015b60405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000806200027484846200041e565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156200029e5750905062000400565b60015460405173ffffffffffffffffffffffffffffffffffffffff8088166024830152909116604482015284907f000000000000000000000000000000000000000000000000000000000000000090606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f485cc9550000000000000000000000000000000000000000000000000000000017905251620003729062000788565b6200037f9291906200083b565b8190604051809103906000f5905080158015620003a0573d6000803e3d6000fd5b5092508273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f5b03bfed1c14a02bdeceb5fa582eb1a5765fc0bc64ca0e6af4c20afc9487f08160405160405180910390a350505b92915050565b620004106200065d565b6200041c6000620006e0565b565b6000620005998260001b604051806020016200043a9062000788565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116604081905260015473ffffffffffffffffffffffffffffffffffffffff88811660248401521660448201527f000000000000000000000000000000000000000000000000000000000000000090606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f485cc9550000000000000000000000000000000000000000000000000000000017905290516200053f939291016200083b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526200057d9291602001620008ab565b6040516020818303038152906040528051906020012062000755565b9392505050565b620005aa6200065d565b73ffffffffffffffffffffffffffffffffffffffff81166200064f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840162000215565b6200065a81620006e0565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146200041c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640162000215565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620005998383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6107c180620008df83390190565b73ffffffffffffffffffffffffffffffffffffffff811681146200065a57600080fd5b600060208284031215620007cc57600080fd5b8135620005998162000796565b60008060408385031215620007ed57600080fd5b8235620007fa8162000796565b946020939093013593505050565b60005b83811015620008255781810151838201526020016200080b565b8381111562000835576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526200087881606085016020870162000808565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b60008351620008bf81846020880162000808565b835190830190620008d581836020880162000808565b0194935050505056fe60806040526040516107c13803806107c183398101604081905261002291610321565b61002e82826000610035565b505061043e565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d0838360405180606001604052806027815260200161079a602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103ef565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b8152600401610148919061040b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b838111156100645750506000910152565b6000806040838503121561033457600080fd5b82516001600160a01b038116811461034b57600080fd5b60208401519092506001600160401b038082111561036857600080fd5b818501915085601f83011261037c57600080fd5b81518181111561038e5761038e6102df565b604051601f8201601f19908116603f011681019083821181831017156103b6576103b66102df565b816040528281528860208487010111156103cf57600080fd5b6103e08360208301602088016102f5565b80955050505050509250929050565b600082516104018184602087016102f5565b9190910192915050565b602081526000825180602084015261042a8160408501602087016102f5565b601f01601f19169190910160400192915050565b61034d8061044d6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102f1602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101079190610283565b600060405180830381855af49150503d8060008114610142576040519150601f19603f3d011682016040523d82523d6000602084013e610147565b606091505b509150915061015886838387610162565b9695505050505050565b606083156101fd5782516000036101f65773ffffffffffffffffffffffffffffffffffffffff85163b6101f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610207565b610207838361020f565b949350505050565b81511561021f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed919061029f565b60005b8381101561026e578181015183820152602001610256565b8381111561027d576000848401525b50505050565b60008251610295818460208701610253565b9190910192915050565b60208152600082518060208401526102be816040850160208701610253565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122007794d63f5dbfa825f6c77b1731463d4a866b9bd15e7f85b16345a6a5e80bed164736f6c634300080f0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122051aadcb657ef6c21b513e3144351a8a23e9206d251f19261160b74fe0d97993664736f6c634300080f0033";

type EpochWalletFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EpochWalletFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EpochWalletFactory__factory extends ContractFactory {
  constructor(...args: EpochWalletFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _epochWallet: PromiseOrValue<string>,
    _epochRegistry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EpochWalletFactory> {
    return super.deploy(
      _epochWallet,
      _epochRegistry,
      overrides || {}
    ) as Promise<EpochWalletFactory>;
  }
  override getDeployTransaction(
    _epochWallet: PromiseOrValue<string>,
    _epochRegistry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _epochWallet,
      _epochRegistry,
      overrides || {}
    );
  }
  override attach(address: string): EpochWalletFactory {
    return super.attach(address) as EpochWalletFactory;
  }
  override connect(signer: Signer): EpochWalletFactory__factory {
    return super.connect(signer) as EpochWalletFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EpochWalletFactoryInterface {
    return new utils.Interface(_abi) as EpochWalletFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EpochWalletFactory {
    return new Contract(address, _abi, signerOrProvider) as EpochWalletFactory;
  }
}
