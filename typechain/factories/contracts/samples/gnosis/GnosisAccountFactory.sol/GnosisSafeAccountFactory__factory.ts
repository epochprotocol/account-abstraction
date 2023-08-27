/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  GnosisSafeAccountFactory,
  GnosisSafeAccountFactoryInterface,
} from "../../../../../contracts/samples/gnosis/GnosisAccountFactory.sol/GnosisSafeAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract GnosisSafeProxyFactory",
        name: "_proxyFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_safeSingleton",
        type: "address",
      },
      {
        internalType: "contract EIP4337Manager",
        name: "_eip4337Manager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "eip4337Manager",
    outputs: [
      {
        internalType: "contract EIP4337Manager",
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
    name: "proxyFactory",
    outputs: [
      {
        internalType: "contract GnosisSafeProxyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "safeSingleton",
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
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b50604051610b41380380610b4183398101604081905261002f91610064565b6001600160a01b0392831660805290821660a0521660c0526100b1565b6001600160a01b038116811461006157600080fd5b50565b60008060006060848603121561007957600080fd5b83516100848161004c565b60208501519093506100958161004c565b60408501519092506100a68161004c565b809150509250925092565b60805160a05160c051610a2b61011660003960008181607101528181610449015281816104f001526105a201526000818160e7015281816101a3015261033801526000818161010e0152818161016701528181610287015261039d0152610a2b6000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638cb84e18116100505780638cb84e18146100cf578063ac7d146b146100e2578063c10f1a751461010957600080fd5b80630e8ac4881461006c5780635fbfb9cf146100bc575b600080fd5b6100937f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100936100ca3660046106a4565b610130565b6100936100dd3660046106a4565b610238565b6100937f000000000000000000000000000000000000000000000000000000000000000081565b6100937f000000000000000000000000000000000000000000000000000000000000000081565b60008061013d8484610238565b905073ffffffffffffffffffffffffffffffffffffffff81163b801561016557509050610232565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631688f0b97f00000000000000000000000000000000000000000000000000000000000000006101cb886103cb565b876040518463ffffffff1660e01b81526004016101ea9392919061074a565b6020604051808303816000875af1158015610209573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022d9190610789565b925050505b92915050565b600080610244846103cb565b9050600081805190602001208460405160200161026b929190918252602082015260400190565b60405160208183030381529060405280519060200120905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166353e5d9356040518163ffffffff1660e01b8152600401600060405180830381865afa1580156102f0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261033691908101906107dc565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1660405160200161037e9291906108a7565b60405160208183030381529060405290506103c18282805190602001207f0000000000000000000000000000000000000000000000000000000000000000610655565b9695505050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610405576104056108c9565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060006001905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370b8a01d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d69190610789565b60405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166024820152909150600090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fd041593b00000000000000000000000000000000000000000000000000000000179052519091506105d590859085907f00000000000000000000000000000000000000000000000000000000000000009085908790600090819081906024016108f8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb63e800d000000000000000000000000000000000000000000000000000000001790529695505050505050565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b73ffffffffffffffffffffffffffffffffffffffff811681146106a157600080fd5b50565b600080604083850312156106b757600080fd5b82356106c28161067f565b946020939093013593505050565b60005b838110156106eb5781810151838201526020016106d3565b838111156106fa576000848401525b50505050565b600081518084526107188160208601602086016106d0565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff841681526060602082015260006107796060830185610700565b9050826040830152949350505050565b60006020828403121561079b57600080fd5b81516107a68161067f565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156107ee57600080fd5b815167ffffffffffffffff8082111561080657600080fd5b818401915084601f83011261081a57600080fd5b81518181111561082c5761082c6107ad565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610872576108726107ad565b8160405282815287602084870101111561088b57600080fd5b61089c8360208301602088016106d0565b979650505050505050565b600083516108b98184602088016106d0565b9190910191825250602001919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6101008082528951908201819052600090610120830190602090818d01845b8281101561094957815173ffffffffffffffffffffffffffffffffffffffff1685529383019390830190600101610917565b50505083018a905273ffffffffffffffffffffffffffffffffffffffff89166040840152828103606084015261097f8189610700565b9150506109a4608083018773ffffffffffffffffffffffffffffffffffffffff169052565b73ffffffffffffffffffffffffffffffffffffffff851660a08301528360c08301526109e860e083018473ffffffffffffffffffffffffffffffffffffffff169052565b999850505050505050505056fea264697066735822122059487de00350209814fbf34c16c780da1282739c1d3bca7b41df92294c0f9a0e64736f6c634300080f0033";

type GnosisSafeAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GnosisSafeAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GnosisSafeAccountFactory__factory extends ContractFactory {
  constructor(...args: GnosisSafeAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _proxyFactory: PromiseOrValue<string>,
    _safeSingleton: PromiseOrValue<string>,
    _eip4337Manager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GnosisSafeAccountFactory> {
    return super.deploy(
      _proxyFactory,
      _safeSingleton,
      _eip4337Manager,
      overrides || {}
    ) as Promise<GnosisSafeAccountFactory>;
  }
  override getDeployTransaction(
    _proxyFactory: PromiseOrValue<string>,
    _safeSingleton: PromiseOrValue<string>,
    _eip4337Manager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _proxyFactory,
      _safeSingleton,
      _eip4337Manager,
      overrides || {}
    );
  }
  override attach(address: string): GnosisSafeAccountFactory {
    return super.attach(address) as GnosisSafeAccountFactory;
  }
  override connect(signer: Signer): GnosisSafeAccountFactory__factory {
    return super.connect(signer) as GnosisSafeAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GnosisSafeAccountFactoryInterface {
    return new utils.Interface(_abi) as GnosisSafeAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GnosisSafeAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GnosisSafeAccountFactory;
  }
}
