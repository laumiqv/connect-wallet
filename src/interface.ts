import { Contract } from 'web3-eth-contract';
import { AbiCoder } from 'web3-eth-abi';

export interface IProvider {
  name: string;
  useProvider?: string;
  provider?: {
    bridge?: {
      url: string;
      infura?: string[];
    };
    infura?: {
      infuraID: string;
    };
    rpc?: {
      rpc: {
        [index: number]: string;
      };
      chainId?: number;
    };
  };
}

export type ContractWeb3 = Contract;

export interface IConnect {
  address: string;
  type?: string;
  network: {
    name: string;
    chainID: number;
  };
}

export interface IConnectorMessage {
  code: number;
  type?: string;
  connected: boolean;
  provider?: string | any;
  message?: {
    title: string;
    subtitle: string;
    text: string;
  };
}

export interface IError {
  code: number;
  type?: string;
  message?: {
    title: string;
    subtitle: string;
    text: string;
  };
}

export interface ISettings {
  providerType?: boolean;
}

export interface INetwork {
  name: string;
  chainID: number;
}

export interface IMessageProvider {
  code: number;
  message?: {
    title?: string;
    text: string;
  };
  provider?: string;
}

export interface IContract {
  [index: string]: Contract;
}

export interface IAddContract {
  name: string;
  address: string;
  abi: Array<AbiCoder>;
}
