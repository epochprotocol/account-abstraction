/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BrokenBLSAccountFactory,
  BrokenBLSAccountFactoryInterface,
} from "../../../../contracts/test/BrokenBlsAccount.sol/BrokenBLSAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract BrokenBLSAccount",
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
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract BrokenBLSAccount",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
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
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161341a38038061341a83398101604081905261002f916100aa565b818160405161003d90610085565b6001600160a01b03928316815291166020820152604001604051809103906000f080158015610070573d6000803e3d6000fd5b506001600160a01b0316608052506100e49050565b61260280610e1883390190565b6001600160a01b03811681146100a757600080fd5b50565b600080604083850312156100bd57600080fd5b82516100c881610092565b60208401519092506100d981610092565b809150509250929050565b608051610d0d61010b60003960008181604b0152818160f7015261020d0152610d0d6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806311464fbe1461004657806319c2a1b214610096578063de3398dd146100a9575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61006d6100a436600461038e565b6100bc565b61006d6100b736600461038e565b6101de565b6000806100c984846101de565b905073ffffffffffffffffffffffffffffffffffffffff81163b80156100f1575090506101d8565b8460001b7f0000000000000000000000000000000000000000000000000000000000000000856040516024016101279190610418565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fee472f3600000000000000000000000000000000000000000000000000000000179052516101a790610352565b6101b2929190610479565b8190604051809103906000f59050801580156101d2573d6000803e3d6000fd5b50925050505b92915050565b60006103198360001b604051806020016101f790610352565b6020820181038252601f19601f820116604052507f00000000000000000000000000000000000000000000000000000000000000008560405160240161023d9190610418565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fee472f360000000000000000000000000000000000000000000000000000000017905290516102c293929101610479565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526102fe92916020016104e7565b60405160208183030381529060405280519060200120610320565b9392505050565b60006103198383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6107c18061051783390190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060a083850312156103a157600080fd5b82359150602084603f8501126103b657600080fd5b6040516080810181811067ffffffffffffffff821117156103d9576103d961035f565b6040528060a08601878111156103ee57600080fd5b8387015b8181101561040957803583529184019184016103f2565b50505080925050509250929050565b60808101818360005b6004811015610440578151835260209283019290910190600101610421565b50505092915050565b60005b8381101561046457818101518382015260200161044c565b83811115610473576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082518060408401526104b4816060850160208701610449565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016060019392505050565b600083516104f9818460208801610449565b83519083019061050d818360208801610449565b0194935050505056fe60806040526040516107c13803806107c183398101604081905261002291610321565b61002e82826000610035565b505061043e565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d0838360405180606001604052806027815260200161079a602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103ef565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b8152600401610148919061040b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b838111156100645750506000910152565b6000806040838503121561033457600080fd5b82516001600160a01b038116811461034b57600080fd5b60208401519092506001600160401b038082111561036857600080fd5b818501915085601f83011261037c57600080fd5b81518181111561038e5761038e6102df565b604051601f8201601f19908116603f011681019083821181831017156103b6576103b66102df565b816040528281528860208487010111156103cf57600080fd5b6103e08360208301602088016102f5565b80955050505050509250929050565b600082516104018184602087016102f5565b9190910192915050565b602081526000825180602084015261042a8160408501602087016102f5565b601f01601f19169190910160400192915050565b61034d8061044d6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102f1602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101079190610283565b600060405180830381855af49150503d8060008114610142576040519150601f19603f3d011682016040523d82523d6000602084013e610147565b606091505b509150915061015886838387610162565b9695505050505050565b606083156101fd5782516000036101f65773ffffffffffffffffffffffffffffffffffffffff85163b6101f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610207565b610207838361020f565b949350505050565b81511561021f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed919061029f565b60005b8381101561026e578181015183820152602001610256565b8381111561027d576000848401525b50505050565b60008251610295818460208701610253565b9190910192915050565b60208152600082518060208401526102be816040850160208701610253565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201cd78ab6a31213989661cff2d7d05fc9b9c38b1a848e8249e2e398659a9eb7e364736f6c634300080f0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220d11e98bd4b8c311f59be723b515d4260e0f42be337ee52835dca0a600cbe9d9164736f6c634300080f003360e0604052306080523480156200001557600080fd5b50604051620026023803806200260283398101604081905262000038916200013f565b6001600160a01b03821660a052816200005062000064565b506001600160a01b031660c052506200017e565b600054610100900460ff1615620000d15760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000124576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6001600160a01b03811681146200013c57600080fd5b50565b600080604083850312156200015357600080fd5b8251620001608162000126565b6020840151909250620001738162000126565b809150509250929050565b60805160a05160c051612400620002026000396000818161025d015261081d0152600081816103a401528181610a1601528181610ac401528181610ee001528181611131015281816114c7015281816115d301526117e60152600081816105fe015281816106b301528181610b8001528181610c300152610d7901526124006000f3fe60806040526004361061016d5760003560e01c806352d1902d116100cb578063c399ec881161007f578063e02afbae11610059578063e02afbae1461047a578063ee472f361461049c578063f23a6e61146104bc57600080fd5b8063c399ec8814610430578063c4d66de814610445578063d087d2881461046557600080fd5b8063b0d691fe116100b0578063b0d691fe14610395578063b61d27f6146103c8578063bc197c81146103e857600080fd5b806352d1902d1461034d5780638da5cb5b1461036257600080fd5b80633a871cdd116101225780634a58db19116101075780634a58db19146103125780634d44560d1461031a5780634f1ef2861461033a57600080fd5b80633a871cdd146102c457806347e1da2a146102f257600080fd5b8063150b7a0211610153578063150b7a02146101d5578063245a7bfc1461024b5780633659cfe6146102a457600080fd5b806223de291461017957806301ffc9a7146101a057600080fd5b3661017457005b600080fd5b34801561018557600080fd5b5061019e610194366004611bc5565b5050505050505050565b005b3480156101ac57600080fd5b506101c06101bb366004611c76565b610502565b60405190151581526020015b60405180910390f35b3480156101e157600080fd5b5061021a6101f0366004611cb8565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016101cc565b34801561025757600080fd5b5061027f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101cc565b3480156102b057600080fd5b5061019e6102bf366004611d2b565b6105e7565b3480156102d057600080fd5b506102e46102df366004611d48565b6107f1565b6040519081526020016101cc565b3480156102fe57600080fd5b5061019e61030d366004611de1565b61085e565b61019e610a14565b34801561032657600080fd5b5061019e610335366004611e7b565b610aba565b61019e610348366004611f25565b610b69565b34801561035957600080fd5b506102e4610d5f565b34801561036e57600080fd5b5060005461027f9062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b3480156103a157600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061027f565b3480156103d457600080fd5b5061019e6103e3366004611feb565b610e4b565b3480156103f457600080fd5b5061021a610403366004612047565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b34801561043c57600080fd5b506102e4610e9a565b34801561045157600080fd5b5061019e610460366004611d2b565b610f51565b34801561047157600080fd5b506102e46110e4565b34801561048657600080fd5b5061048f611160565b6040516101cc91906120e5565b3480156104a857600080fd5b5061019e6104b7366004612116565b611175565b3480156104c857600080fd5b5061021a6104d7366004612194565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000148061059557507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806105e157507fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036106b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084015b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107267f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146107c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016106a8565b6107d2816112a3565b604080516000808252602082019092526107ee918391906112ab565b50565b60006107fb6114af565b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016808252600060208301819052919092015261085782611550565b9392505050565b6108666115bb565b848114801561087c575082158061087c57508281145b6108e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f77726f6e67206172726179206c656e677468730000000000000000000000000060448201526064016106a8565b60008390036109985760005b858110156109925761098087878381811061090b5761090b6121fe565b90506020020160208101906109209190611d2b565b6000858585818110610934576109346121fe565b9050602002810190610946919061222d565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061168292505050565b8061098a81612292565b9150506108ee565b50610a0c565b60005b85811015610a0a576109f88787838181106109b8576109b86121fe565b90506020020160208101906109cd9190611d2b565b8686848181106109df576109df6121fe565b90506020020135858585818110610934576109346121fe565b80610a0281612292565b91505061099b565b505b505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006040517fb760faf900000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff919091169063b760faf99034906024016000604051808303818588803b158015610a9f57600080fd5b505af1158015610ab3573d6000803e3d6000fd5b5050505050565b610ac26116ff565b7f00000000000000000000000000000000000000000000000000000000000000006040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b158015610b5557600080fd5b505af1158015610a0c573d6000803e3d6000fd5b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610c2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016106a8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610ca37f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610d46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016106a8565b610d4f826112a3565b610d5b828260016112ab565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610e26576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016106a8565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610e536115bb565b610e94848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061168292505050565b50505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906370a08231906024015b602060405180830381865afa158015610f28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4c91906122f1565b905090565b600054610100900460ff1615808015610f715750600054600160ff909116105b80610f8b5750303b158015610f8b575060005460ff166001145b611017576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016106a8565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561107557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b61107e82611790565b8015610d5b57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482018190529073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906335567e1a90604401610f0b565b611168611b3c565b611170611b3c565b919050565b600054610100900460ff16158080156111955750600054600160ff909116105b806111af5750303b1580156111af575060005460ff166001145b61123b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016106a8565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561129957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b61107e6000611790565b6107ee6116ff565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156112e3576112de8361182f565b505050565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611368575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611365918101906122f1565b60015b6113f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016106a8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146114a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016106a8565b506112de838383611939565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461154e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016106a8565b565b80156107ee5760405160009033907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90849084818181858888f193505050503d8060008114610ab3576040519150601f19603f3d011682016040523d82523d6000602084013e610ab3565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016148061161c575060005462010000900473ffffffffffffffffffffffffffffffffffffffff1633145b61154e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016106a8565b6000808473ffffffffffffffffffffffffffffffffffffffff1684846040516116ab9190612336565b60006040518083038185875af1925050503d80600081146116e8576040519150601f19603f3d011682016040523d82523d6000602084013e6116ed565b606091505b509150915081610ab357805160208201fd5b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1633148061172a57503330145b61154e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064016106a8565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff8481168202929092178084556040519190048216927f0000000000000000000000000000000000000000000000000000000000000000909216917f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de91a350565b73ffffffffffffffffffffffffffffffffffffffff81163b6118d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016106a8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6119428361195e565b60008251118061194f5750805b156112de57610e9483836119ab565b6119678161182f565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061085783836040518060600160405280602781526020016123a46027913960606000808573ffffffffffffffffffffffffffffffffffffffff16856040516119f59190612336565b600060405180830381855af49150503d8060008114611a30576040519150601f19603f3d011682016040523d82523d6000602084013e611a35565b606091505b5091509150611a4686838387611a50565b9695505050505050565b60608315611ae6578251600003611adf5773ffffffffffffffffffffffffffffffffffffffff85163b611adf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106a8565b5081611af0565b611af08383611af8565b949350505050565b815115611b085781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a89190612352565b60405180608001604052806004906020820280368337509192915050565b73ffffffffffffffffffffffffffffffffffffffff811681146107ee57600080fd5b60008083601f840112611b8e57600080fd5b50813567ffffffffffffffff811115611ba657600080fd5b602083019150836020828501011115611bbe57600080fd5b9250929050565b60008060008060008060008060c0898b031215611be157600080fd5b8835611bec81611b5a565b97506020890135611bfc81611b5a565b96506040890135611c0c81611b5a565b955060608901359450608089013567ffffffffffffffff80821115611c3057600080fd5b611c3c8c838d01611b7c565b909650945060a08b0135915080821115611c5557600080fd5b50611c628b828c01611b7c565b999c989b5096995094979396929594505050565b600060208284031215611c8857600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461085757600080fd5b600080600080600060808688031215611cd057600080fd5b8535611cdb81611b5a565b94506020860135611ceb81611b5a565b935060408601359250606086013567ffffffffffffffff811115611d0e57600080fd5b611d1a88828901611b7c565b969995985093965092949392505050565b600060208284031215611d3d57600080fd5b813561085781611b5a565b600080600060608486031215611d5d57600080fd5b833567ffffffffffffffff811115611d7457600080fd5b84016101608187031215611d8757600080fd5b95602085013595506040909401359392505050565b60008083601f840112611dae57600080fd5b50813567ffffffffffffffff811115611dc657600080fd5b6020830191508360208260051b8501011115611bbe57600080fd5b60008060008060008060608789031215611dfa57600080fd5b863567ffffffffffffffff80821115611e1257600080fd5b611e1e8a838b01611d9c565b90985096506020890135915080821115611e3757600080fd5b611e438a838b01611d9c565b90965094506040890135915080821115611e5c57600080fd5b50611e6989828a01611d9c565b979a9699509497509295939492505050565b60008060408385031215611e8e57600080fd5b8235611e9981611b5a565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f1d57611f1d611ea7565b604052919050565b60008060408385031215611f3857600080fd5b8235611f4381611b5a565b915060208381013567ffffffffffffffff80821115611f6157600080fd5b818601915086601f830112611f7557600080fd5b813581811115611f8757611f87611ea7565b611fb7847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611ed6565b91508082528784828501011115611fcd57600080fd5b80848401858401376000848284010152508093505050509250929050565b6000806000806060858703121561200157600080fd5b843561200c81611b5a565b935060208501359250604085013567ffffffffffffffff81111561202f57600080fd5b61203b87828801611b7c565b95989497509550505050565b60008060008060008060008060a0898b03121561206357600080fd5b883561206e81611b5a565b9750602089013561207e81611b5a565b9650604089013567ffffffffffffffff8082111561209b57600080fd5b6120a78c838d01611d9c565b909850965060608b01359150808211156120c057600080fd5b6120cc8c838d01611d9c565b909650945060808b0135915080821115611c5557600080fd5b60808101818360005b600481101561210d5781518352602092830192909101906001016120ee565b50505092915050565b60006080828403121561212857600080fd5b82601f83011261213757600080fd5b6040516080810181811067ffffffffffffffff8211171561215a5761215a611ea7565b60405280608084018581111561216f57600080fd5b845b81811015612189578035835260209283019201612171565b509195945050505050565b60008060008060008060a087890312156121ad57600080fd5b86356121b881611b5a565b955060208701356121c881611b5a565b94506040870135935060608701359250608087013567ffffffffffffffff8111156121f257600080fd5b611e6989828a01611b7c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261226257600080fd5b83018035915067ffffffffffffffff82111561227d57600080fd5b602001915036819003821315611bbe57600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036122ea577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60006020828403121561230357600080fd5b5051919050565b60005b8381101561232557818101518382015260200161230d565b83811115610e945750506000910152565b6000825161234881846020870161230a565b9190910192915050565b602081526000825180602084015261237181604085016020870161230a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220165083c47375e0d4fff3aab59509e46ea50d5d68bdc000cbcddeff31068b55ff64736f6c634300080f0033";

type BrokenBLSAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BrokenBLSAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BrokenBLSAccountFactory__factory extends ContractFactory {
  constructor(...args: BrokenBLSAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    entryPoint: PromiseOrValue<string>,
    aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BrokenBLSAccountFactory> {
    return super.deploy(
      entryPoint,
      aggregator,
      overrides || {}
    ) as Promise<BrokenBLSAccountFactory>;
  }
  override getDeployTransaction(
    entryPoint: PromiseOrValue<string>,
    aggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(entryPoint, aggregator, overrides || {});
  }
  override attach(address: string): BrokenBLSAccountFactory {
    return super.attach(address) as BrokenBLSAccountFactory;
  }
  override connect(signer: Signer): BrokenBLSAccountFactory__factory {
    return super.connect(signer) as BrokenBLSAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BrokenBLSAccountFactoryInterface {
    return new utils.Interface(_abi) as BrokenBLSAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BrokenBLSAccountFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BrokenBLSAccountFactory;
  }
}
