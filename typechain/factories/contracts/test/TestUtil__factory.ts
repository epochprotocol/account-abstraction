/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestUtil,
  TestUtilInterface,
} from "../../../contracts/test/TestUtil";

const _abi = [
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
        name: "op",
        type: "tuple",
      },
    ],
    name: "packUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102b5806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80633a24dea414610030575b600080fd5b61004361003e36600461015d565b610059565b60405161005091906101a0565b60405180910390f35b60606100648261006a565b92915050565b606081356020830135600061008a6100856040870187610213565b61014a565b9050600061009e6100856060880188610213565b9050608086013560a087013560c088013560e08901356101008a013560006100cd6100856101208e018e610213565b6040805173ffffffffffffffffffffffffffffffffffffffff9c909c1660208d01528b81019a909a5260608b019890985250608089019590955260a088019390935260c087019190915260e08601526101008501526101208401526101408084019190915281518084039091018152610160909201905292915050565b6000604051828085833790209392505050565b60006020828403121561016f57600080fd5b813567ffffffffffffffff81111561018657600080fd5b8201610160818503121561019957600080fd5b9392505050565b600060208083528351808285015260005b818110156101cd578581018301518582016040015282016101b1565b818111156101df576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261024857600080fd5b83018035915067ffffffffffffffff82111561026357600080fd5b60200191503681900382131561027857600080fd5b925092905056fea26469706673582212202f3db74527ce38e9780655780dd276727d65df807b541a9beece6f8289be342864736f6c634300080f0033";

type TestUtilConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUtilConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUtil__factory extends ContractFactory {
  constructor(...args: TestUtilConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestUtil> {
    return super.deploy(overrides || {}) as Promise<TestUtil>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestUtil {
    return super.attach(address) as TestUtil;
  }
  override connect(signer: Signer): TestUtil__factory {
    return super.connect(signer) as TestUtil__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUtilInterface {
    return new utils.Interface(_abi) as TestUtilInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUtil {
    return new Contract(address, _abi, signerOrProvider) as TestUtil;
  }
}
