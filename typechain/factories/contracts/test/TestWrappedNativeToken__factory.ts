/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestWrappedNativeToken,
  TestWrappedNativeTokenInterface,
} from "../../../contracts/test/TestWrappedNativeToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280601481526020017f57726170706564204e617469766520546f6b656e00000000000000000000000081525060405180604001604052806005815260200164776e546f6b60d81b815250816003908162000077919062000134565b50600462000086828262000134565b50505062000200565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000ba57607f821691505b602082108103620000db57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200012f57600081815260208120601f850160051c810160208610156200010a5750805b601f850160051c820191505b818110156200012b5782815560010162000116565b5050505b505050565b81516001600160401b038111156200015057620001506200008f565b6200016881620001618454620000a5565b84620000e1565b602080601f831160018114620001a05760008415620001875750858301515b600019600386901b1c1916600185901b1785556200012b565b600085815260208120601f198616915b82811015620001d157888601518255948401946001909101908401620001b0565b5085821015620001f05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610f8d80620002106000396000f3fe6080604052600436106100d65760003560e01c8063395093511161007f578063a457c2d711610059578063a457c2d714610238578063a9059cbb14610258578063d0e30db014610278578063dd62ed3e1461028057600080fd5b806339509351146101c057806370a08231146101e057806395d89b411461022357600080fd5b806323b872dd116100b057806323b872dd146101645780632e1a7d4d14610184578063313ce567146101a457600080fd5b806306fdde03146100ea578063095ea7b31461011557806318160ddd1461014557600080fd5b366100e5576100e36102d3565b005b600080fd5b3480156100f657600080fd5b506100ff6102df565b60405161010c9190610d55565b60405180910390f35b34801561012157600080fd5b50610135610130366004610df1565b610371565b604051901515815260200161010c565b34801561015157600080fd5b506002545b60405190815260200161010c565b34801561017057600080fd5b5061013561017f366004610e1b565b610389565b34801561019057600080fd5b506100e361019f366004610e57565b6103ad565b3480156101b057600080fd5b506040516012815260200161010c565b3480156101cc57600080fd5b506101356101db366004610df1565b610472565b3480156101ec57600080fd5b506101566101fb366004610e70565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b34801561022f57600080fd5b506100ff6104be565b34801561024457600080fd5b50610135610253366004610df1565b6104cd565b34801561026457600080fd5b50610135610273366004610df1565b61059e565b6100e36102d3565b34801561028c57600080fd5b5061015661029b366004610e92565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6102dd33346105ac565b565b6060600380546102ee90610ec5565b80601f016020809104026020016040519081016040528092919081815260200182805461031a90610ec5565b80156103675780601f1061033c57610100808354040283529160200191610367565b820191906000526020600020905b81548152906001019060200180831161034a57829003601f168201915b5050505050905090565b60003361037f81858561069f565b5060019392505050565b600033610397858285610853565b6103a285858561092a565b506001949350505050565b6103b73382610b99565b604051600090339083908381818185875af1925050503d80600081146103f9576040519150601f19603f3d011682016040523d82523d6000602084013e6103fe565b606091505b505090508061046e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f7472616e73666572206661696c6564000000000000000000000000000000000060448201526064015b60405180910390fd5b5050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061037f90829086906104b9908790610f18565b61069f565b6060600480546102ee90610ec5565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610465565b6103a2828686840361069f565b60003361037f81858561092a565b73ffffffffffffffffffffffffffffffffffffffff8216610629576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610465565b806002600082825461063b9190610f18565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8316610741576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610465565b73ffffffffffffffffffffffffffffffffffffffff82166107e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610465565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109245781811015610917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610465565b610924848484840361069f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166109cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610465565b73ffffffffffffffffffffffffffffffffffffffff8216610a70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610465565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610b26576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610465565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610924565b73ffffffffffffffffffffffffffffffffffffffff8216610c3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610465565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015610cf2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610465565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610846565b600060208083528351808285015260005b81811015610d8257858101830151858201604001528201610d66565b81811115610d94576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610dec57600080fd5b919050565b60008060408385031215610e0457600080fd5b610e0d83610dc8565b946020939093013593505050565b600080600060608486031215610e3057600080fd5b610e3984610dc8565b9250610e4760208501610dc8565b9150604084013590509250925092565b600060208284031215610e6957600080fd5b5035919050565b600060208284031215610e8257600080fd5b610e8b82610dc8565b9392505050565b60008060408385031215610ea557600080fd5b610eae83610dc8565b9150610ebc60208401610dc8565b90509250929050565b600181811c90821680610ed957607f821691505b602082108103610f12577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115610f52577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea26469706673582212208d34fa38b0563d8fddf40e3ba938c2027670bb362a2a372dea9377b91f32f83764736f6c634300080f0033";

type TestWrappedNativeTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestWrappedNativeTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestWrappedNativeToken__factory extends ContractFactory {
  constructor(...args: TestWrappedNativeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestWrappedNativeToken> {
    return super.deploy(overrides || {}) as Promise<TestWrappedNativeToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestWrappedNativeToken {
    return super.attach(address) as TestWrappedNativeToken;
  }
  override connect(signer: Signer): TestWrappedNativeToken__factory {
    return super.connect(signer) as TestWrappedNativeToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestWrappedNativeTokenInterface {
    return new utils.Interface(_abi) as TestWrappedNativeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestWrappedNativeToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestWrappedNativeToken;
  }
}
