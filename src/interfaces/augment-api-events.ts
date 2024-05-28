// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U256, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, H256, Perbill, Permill } from '@polkadot/types/interfaces/runtime';
import type { BitcoinAddress, BitcoinAddressPublicKey, BitcoinH256Le, ClientsInfoClientRelease, EthTypesBlockHeader, EthTypesEth2BeaconBlockHeader, EthTypesExecutionHeaderInfo, EthereumLog, EvmCoreErrorExitReason, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPostDispatchInfo, FrameSupportPreimagesBounded, FrameSupportTokensMiscBalanceStatus, GgxchainRuntimeBrooklynPosProxyType, IbcCoreIcs04ChannelEventsSendPacket, IbcEventsIbcEvent, InterbtcPrimitivesCurrencyId, InterbtcPrimitivesOracleKey, InterbtcPrimitivesRedeemRedeemRequestStatus, InterbtcPrimitivesVaultCurrencyPair, InterbtcPrimitivesVaultId, LoansMarket, OrmlTraitsAssetRegistryAssetMetadata, PalletContractsOrigin, PalletConvictionVotingTally, PalletDexOrder, PalletElectionProviderMultiPhaseElectionCompute, PalletElectionProviderMultiPhasePhase, PalletIbcErrorsIbcError, PalletImOnlineSr25519AppSr25519Public, PalletMultisigTimepoint, PalletStakingExposure, PalletStakingForcing, PalletStakingValidatorPrefs, SpConsensusGrandpaAppPublic, SpNposElectionsElectionScore, SpRuntimeDispatchError, SpRuntimeDispatchErrorWithPostInfo, TypesPrimitivesH160, TypesPrimitivesH256, VaultRegistryVaultStatus, WebbProposalsHeaderTypedChainId } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    accountFilter: {
      AccountAllowed: AugmentedEvent<ApiType, [account: AccountId32, votedFor: Vec<AccountId32>], { account: AccountId32, votedFor: Vec<AccountId32> }>;
      AccountVoted: AugmentedEvent<ApiType, [referrer: AccountId32, referee: AccountId32], { referrer: AccountId32, referee: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assetRegistry: {
      RegisteredAsset: AugmentedEvent<ApiType, [assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata], { assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata }>;
      UpdatedAsset: AugmentedEvent<ApiType, [assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata], { assetId: u32, metadata: OrmlTraitsAssetRegistryAssetMetadata }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assets: {
      /**
       * Accounts were destroyed for given asset.
       **/
      AccountsDestroyed: AugmentedEvent<ApiType, [assetId: u32, accountsDestroyed: u32, accountsRemaining: u32], { assetId: u32, accountsDestroyed: u32, accountsRemaining: u32 }>;
      /**
       * An approval for account `delegate` was cancelled by `owner`.
       **/
      ApprovalCancelled: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, delegate: AccountId32], { assetId: u32, owner: AccountId32, delegate: AccountId32 }>;
      /**
       * Approvals were destroyed for given asset.
       **/
      ApprovalsDestroyed: AugmentedEvent<ApiType, [assetId: u32, approvalsDestroyed: u32, approvalsRemaining: u32], { assetId: u32, approvalsDestroyed: u32, approvalsRemaining: u32 }>;
      /**
       * (Additional) funds have been approved for transfer to a destination account.
       **/
      ApprovedTransfer: AugmentedEvent<ApiType, [assetId: u32, source: AccountId32, delegate: AccountId32, amount: u128], { assetId: u32, source: AccountId32, delegate: AccountId32, amount: u128 }>;
      /**
       * Some asset `asset_id` was frozen.
       **/
      AssetFrozen: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * The min_balance of an asset has been updated by the asset owner.
       **/
      AssetMinBalanceChanged: AugmentedEvent<ApiType, [assetId: u32, newMinBalance: u128], { assetId: u32, newMinBalance: u128 }>;
      /**
       * An asset has had its attributes changed by the `Force` origin.
       **/
      AssetStatusChanged: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some asset `asset_id` was thawed.
       **/
      AssetThawed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some account `who` was blocked.
       **/
      Blocked: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some assets were destroyed.
       **/
      Burned: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, balance: u128], { assetId: u32, owner: AccountId32, balance: u128 }>;
      /**
       * Some asset class was created.
       **/
      Created: AugmentedEvent<ApiType, [assetId: u32, creator: AccountId32, owner: AccountId32], { assetId: u32, creator: AccountId32, owner: AccountId32 }>;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * An asset class is in the process of being destroyed.
       **/
      DestructionStarted: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some asset class was force-created.
       **/
      ForceCreated: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32], { assetId: u32, owner: AccountId32 }>;
      /**
       * Some account `who` was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some assets were issued.
       **/
      Issued: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, amount: u128], { assetId: u32, owner: AccountId32, amount: u128 }>;
      /**
       * Metadata has been cleared for an asset.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * New metadata has been set for an asset.
       **/
      MetadataSet: AugmentedEvent<ApiType, [assetId: u32, name: Bytes, symbol_: Bytes, decimals: u8, isFrozen: bool], { assetId: u32, name: Bytes, symbol: Bytes, decimals: u8, isFrozen: bool }>;
      /**
       * The owner changed.
       **/
      OwnerChanged: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32], { assetId: u32, owner: AccountId32 }>;
      /**
       * The management team changed.
       **/
      TeamChanged: AugmentedEvent<ApiType, [assetId: u32, issuer: AccountId32, admin: AccountId32, freezer: AccountId32], { assetId: u32, issuer: AccountId32, admin: AccountId32, freezer: AccountId32 }>;
      /**
       * Some account `who` was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some account `who` was created with a deposit from `depositor`.
       **/
      Touched: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32, depositor: AccountId32], { assetId: u32, who: AccountId32, depositor: AccountId32 }>;
      /**
       * Some assets were transferred.
       **/
      Transferred: AugmentedEvent<ApiType, [assetId: u32, from: AccountId32, to: AccountId32, amount: u128], { assetId: u32, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * An `amount` was transferred in its entirety from `owner` to `destination` by
       * the approved `delegate`.
       **/
      TransferredApproved: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128], { assetId: u32, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32, free: u128 }>;
      /**
       * Some amount was burned from an account.
       **/
      Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was increased by `amount`, creating a credit to be balanced.
       **/
      Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was minted into an account.
       **/
      Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was decreased by `amount`, creating a debt to be balanced.
       **/
      Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was restored into an account.
       **/
      Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was suspended from an account (it can be restored later).
       **/
      Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unlocked.
       **/
      Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was upgraded.
       **/
      Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    baseFee: {
      BaseFeeOverflow: AugmentedEvent<ApiType, []>;
      NewBaseFeePerGas: AugmentedEvent<ApiType, [fee: U256], { fee: U256 }>;
      NewElasticity: AugmentedEvent<ApiType, [elasticity: Permill], { elasticity: Permill }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      /**
       * A bounty is awarded to a beneficiary.
       **/
      BountyAwarded: AugmentedEvent<ApiType, [index: u32, beneficiary: AccountId32], { index: u32, beneficiary: AccountId32 }>;
      /**
       * A bounty proposal is funded and became active.
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is cancelled.
       **/
      BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is claimed by beneficiary.
       **/
      BountyClaimed: AugmentedEvent<ApiType, [index: u32, payout: u128, beneficiary: AccountId32], { index: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * A bounty expiry is extended.
       **/
      BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * New bounty proposal.
       **/
      BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty proposal was rejected; funds were slashed.
       **/
      BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32, bond: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    btcRelay: {
      ChainReorg: AugmentedEvent<ApiType, [newChainTipHash: BitcoinH256Le, newChainTipHeight: u32, forkDepth: u32], { newChainTipHash: BitcoinH256Le, newChainTipHeight: u32, forkDepth: u32 }>;
      ForkAheadOfMainChain: AugmentedEvent<ApiType, [mainChainHeight: u32, forkHeight: u32, forkId: u32], { mainChainHeight: u32, forkHeight: u32, forkId: u32 }>;
      Initialized: AugmentedEvent<ApiType, [blockHeight: u32, blockHash: BitcoinH256Le, relayerId: AccountId32], { blockHeight: u32, blockHash: BitcoinH256Le, relayerId: AccountId32 }>;
      StoreForkHeader: AugmentedEvent<ApiType, [chainId: u32, forkHeight: u32, blockHash: BitcoinH256Le, relayerId: AccountId32], { chainId: u32, forkHeight: u32, blockHash: BitcoinH256Le, relayerId: AccountId32 }>;
      StoreMainChainHeader: AugmentedEvent<ApiType, [blockHeight: u32, blockHash: BitcoinH256Le, relayerId: AccountId32], { blockHeight: u32, blockHash: BitcoinH256Le, relayerId: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    clientsInfo: {
      ApplyClientRelease: AugmentedEvent<ApiType, [release: ClientsInfoClientRelease], { release: ClientsInfoClientRelease }>;
      NotifyClientRelease: AugmentedEvent<ApiType, [release: ClientsInfoClientRelease], { release: ClientsInfoClientRelease }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    contracts: {
      /**
       * A contract was called either by a plain account or another contract.
       * 
       * # Note
       * 
       * Please keep in mind that like all events this is only emitted for successful
       * calls. This is because on failure all storage changes including events are
       * rolled back.
       **/
      Called: AugmentedEvent<ApiType, [caller: PalletContractsOrigin, contract: AccountId32], { caller: PalletContractsOrigin, contract: AccountId32 }>;
      /**
       * A code with the specified hash was removed.
       **/
      CodeRemoved: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * Code with the specified hash has been stored.
       **/
      CodeStored: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * A contract's code was updated.
       **/
      ContractCodeUpdated: AugmentedEvent<ApiType, [contract: AccountId32, newCodeHash: H256, oldCodeHash: H256], { contract: AccountId32, newCodeHash: H256, oldCodeHash: H256 }>;
      /**
       * A custom event emitted by the contract.
       **/
      ContractEmitted: AugmentedEvent<ApiType, [contract: AccountId32, data: Bytes], { contract: AccountId32, data: Bytes }>;
      /**
       * A contract delegate called a code hash.
       * 
       * # Note
       * 
       * Please keep in mind that like all events this is only emitted for successful
       * calls. This is because on failure all storage changes including events are
       * rolled back.
       **/
      DelegateCalled: AugmentedEvent<ApiType, [contract: AccountId32, codeHash: H256], { contract: AccountId32, codeHash: H256 }>;
      /**
       * Contract deployed by address at the specified address.
       **/
      Instantiated: AugmentedEvent<ApiType, [deployer: AccountId32, contract: AccountId32], { deployer: AccountId32, contract: AccountId32 }>;
      /**
       * Contract has been removed.
       * 
       * # Note
       * 
       * The only way for a contract to be removed and emitting this event is by calling
       * `seal_terminate`.
       **/
      Terminated: AugmentedEvent<ApiType, [contract: AccountId32, beneficiary: AccountId32], { contract: AccountId32, beneficiary: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    convictionVoting: {
      /**
       * An account has delegated their vote to another account. \[who, target\]
       **/
      Delegated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * An \[account\] has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    currencyManager: {
      InflationDecayChanged: AugmentedEvent<ApiType, [Perbill]>;
      InflationPercentChanged: AugmentedEvent<ApiType, [Perbill]>;
      TreasuryCommissionChanged: AugmentedEvent<ApiType, [Perbill]>;
      TreasuryCommissionFromFeeChanged: AugmentedEvent<ApiType, [Perbill]>;
      TreasuryCommissionFromTipsChanged: AugmentedEvent<ApiType, [Perbill]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dex: {
      Deposited: AugmentedEvent<ApiType, [assetId: u32, amount: u128], { assetId: u32, amount: u128 }>;
      NativeDeposited: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      NativeWithdrawed: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      OrderCanceled: AugmentedEvent<ApiType, [orderIndex: u64], { orderIndex: u64 }>;
      OrderCreated: AugmentedEvent<ApiType, [orderIndex: u64, order: PalletDexOrder], { orderIndex: u64, order: PalletDexOrder }>;
      OrderMatched: AugmentedEvent<ApiType, [quantityBase: u128, quantityQuote: u128, takerOrder: PalletDexOrder, makerOrder: PalletDexOrder], { quantityBase: u128, quantityQuote: u128, takerOrder: PalletDexOrder, makerOrder: PalletDexOrder }>;
      OrderTaken: AugmentedEvent<ApiType, [account: AccountId32, orderIndex: u64, order: PalletDexOrder], { account: AccountId32, orderIndex: u64, order: PalletDexOrder }>;
      SubmitProcessedReceipts: AugmentedEvent<ApiType, [blockNumber: u64], { blockNumber: u64 }>;
      Withdrawed: AugmentedEvent<ApiType, [assetId: u32, amount: u128], { assetId: u32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * An election failed.
       * 
       * Not much can be said about which computes failed in the process.
       **/
      ElectionFailed: AugmentedEvent<ApiType, []>;
      /**
       * The election has been finalized, with the given computation and score.
       **/
      ElectionFinalized: AugmentedEvent<ApiType, [compute: PalletElectionProviderMultiPhaseElectionCompute, score: SpNposElectionsElectionScore], { compute: PalletElectionProviderMultiPhaseElectionCompute, score: SpNposElectionsElectionScore }>;
      /**
       * There was a phase transition in a given round.
       **/
      PhaseTransitioned: AugmentedEvent<ApiType, [from: PalletElectionProviderMultiPhasePhase, to: PalletElectionProviderMultiPhasePhase, round: u32], { from: PalletElectionProviderMultiPhasePhase, to: PalletElectionProviderMultiPhasePhase, round: u32 }>;
      /**
       * An account has been rewarded for their signed submission being finalized.
       **/
      Rewarded: AugmentedEvent<ApiType, [account: AccountId32, value: u128], { account: AccountId32, value: u128 }>;
      /**
       * An account has been slashed for submitting an invalid signed submission.
       **/
      Slashed: AugmentedEvent<ApiType, [account: AccountId32, value: u128], { account: AccountId32, value: u128 }>;
      /**
       * A solution was stored with the given compute.
       * 
       * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
       * the stored solution was submited in the signed phase by a miner with the `AccountId`.
       * Otherwise, the solution was stored either during the unsigned phase or by
       * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
       * room for this one.
       **/
      SolutionStored: AugmentedEvent<ApiType, [compute: PalletElectionProviderMultiPhaseElectionCompute, origin: Option<AccountId32>, prevEjected: bool], { compute: PalletElectionProviderMultiPhaseElectionCompute, origin: Option<AccountId32>, prevEjected: bool }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    eth2Client: {
      Init: AugmentedEvent<ApiType, [typedChainId: WebbProposalsHeaderTypedChainId, headerInfo: EthTypesExecutionHeaderInfo], { typedChainId: WebbProposalsHeaderTypedChainId, headerInfo: EthTypesExecutionHeaderInfo }>;
      SubmitBeaconChainLightClientUpdate: AugmentedEvent<ApiType, [typedChainId: WebbProposalsHeaderTypedChainId, submitter: AccountId32, beaconBlockHeader: EthTypesEth2BeaconBlockHeader], { typedChainId: WebbProposalsHeaderTypedChainId, submitter: AccountId32, beaconBlockHeader: EthTypesEth2BeaconBlockHeader }>;
      SubmitExecutionHeader: AugmentedEvent<ApiType, [typedChainId: WebbProposalsHeaderTypedChainId, headerInfo: EthTypesBlockHeader], { typedChainId: WebbProposalsHeaderTypedChainId, headerInfo: EthTypesBlockHeader }>;
      UpdateTrustedSigner: AugmentedEvent<ApiType, [trustedSigner: AccountId32], { trustedSigner: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ethereum: {
      /**
       * An ethereum transaction was successfully executed.
       **/
      Executed: AugmentedEvent<ApiType, [from: H160, to: H160, transactionHash: H256, exitReason: EvmCoreErrorExitReason, extraData: Bytes], { from: H160, to: H160, transactionHash: H256, exitReason: EvmCoreErrorExitReason, extraData: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ethReceiptRegistry: {
      AddedContractAddress: AugmentedEvent<ApiType, [typedChainId: WebbProposalsHeaderTypedChainId, address: TypesPrimitivesH160], { typedChainId: WebbProposalsHeaderTypedChainId, address: TypesPrimitivesH160 }>;
      RemovedContractAddress: AugmentedEvent<ApiType, [typedChainId: WebbProposalsHeaderTypedChainId, address: TypesPrimitivesH160], { typedChainId: WebbProposalsHeaderTypedChainId, address: TypesPrimitivesH160 }>;
      SubmitProcessedReceipts: AugmentedEvent<ApiType, [typedChainId: WebbProposalsHeaderTypedChainId, blockNumber: u64, receiptHash: TypesPrimitivesH256], { typedChainId: WebbProposalsHeaderTypedChainId, blockNumber: u64, receiptHash: TypesPrimitivesH256 }>;
      UpdateProofFee: AugmentedEvent<ApiType, [typedChainId: WebbProposalsHeaderTypedChainId, proofDeposit: u128, proofReward: u128], { typedChainId: WebbProposalsHeaderTypedChainId, proofDeposit: u128, proofReward: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    evm: {
      /**
       * A contract has been created at given address.
       **/
      Created: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * A contract was attempted to be created, but the execution failed.
       **/
      CreatedFailed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * A contract has been executed successfully with states applied.
       **/
      Executed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * A contract has been executed with errors. States are reverted with only gas fees applied.
       **/
      ExecutedFailed: AugmentedEvent<ApiType, [address: H160], { address: H160 }>;
      /**
       * Ethereum events from contracts.
       **/
      Log: AugmentedEvent<ApiType, [log: EthereumLog], { log: EthereumLog }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>], { authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>> }>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ibc: {
      /**
       * Ibc errors
       **/
      IbcErrors: AugmentedEvent<ApiType, [errors: Vec<PalletIbcErrorsIbcError>], { errors: Vec<PalletIbcErrorsIbcError> }>;
      /**
       * Ibc events
       **/
      IbcEvents: AugmentedEvent<ApiType, [events: Vec<IbcEventsIbcEvent>], { events: Vec<IbcEventsIbcEvent> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ics20Transfer: {
      /**
       * Burn cross chain token event
       **/
      BurnToken: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * Mint chairperson token event
       **/
      MintToken: AugmentedEvent<ApiType, [u32, AccountId32, u128]>;
      /**
       * Send packet event
       **/
      SendPacket: AugmentedEvent<ApiType, [IbcCoreIcs04ChannelEventsSendPacket]>;
      /**
       * Transfer native token  event
       **/
      TransferNativeToken: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Transfer non-native token event
       **/
      TransferNoNativeToken: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      UnsupportedEvent: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId`.
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [authorityId: PalletImOnlineSr25519AppSr25519Public], { authorityId: PalletImOnlineSr25519AppSr25519Public }>;
      /**
       * At the end of the session, at least one validator was found to be offline.
       **/
      SomeOffline: AugmentedEvent<ApiType, [offline: Vec<ITuple<[AccountId32, PalletStakingExposure]>>], { offline: Vec<ITuple<[AccountId32, PalletStakingExposure]>> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    indices: {
      /**
       * A account index was assigned.
       **/
      IndexAssigned: AugmentedEvent<ApiType, [who: AccountId32, index: u32], { who: AccountId32, index: u32 }>;
      /**
       * A account index has been freed up (unassigned).
       **/
      IndexFreed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A account index has been frozen to its current account ID.
       **/
      IndexFrozen: AugmentedEvent<ApiType, [index: u32, who: AccountId32], { index: u32, who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    issue: {
      CancelIssue: AugmentedEvent<ApiType, [issueId: H256, requester: AccountId32, griefingCollateral: u128], { issueId: H256, requester: AccountId32, griefingCollateral: u128 }>;
      ExecuteIssue: AugmentedEvent<ApiType, [issueId: H256, requester: AccountId32, vaultId: InterbtcPrimitivesVaultId, amount: u128, fee: u128], { issueId: H256, requester: AccountId32, vaultId: InterbtcPrimitivesVaultId, amount: u128, fee: u128 }>;
      IssueAmountChange: AugmentedEvent<ApiType, [issueId: H256, amount: u128, fee: u128, confiscatedGriefingCollateral: u128], { issueId: H256, amount: u128, fee: u128, confiscatedGriefingCollateral: u128 }>;
      IssuePeriodChange: AugmentedEvent<ApiType, [period: u32], { period: u32 }>;
      RequestIssue: AugmentedEvent<ApiType, [issueId: H256, requester: AccountId32, amount: u128, fee: u128, griefingCollateral: u128, griefingCurrency: InterbtcPrimitivesCurrencyId, vaultId: InterbtcPrimitivesVaultId, vaultAddress: BitcoinAddress, vaultPublicKey: BitcoinAddressPublicKey], { issueId: H256, requester: AccountId32, amount: u128, fee: u128, griefingCollateral: u128, griefingCurrency: InterbtcPrimitivesCurrencyId, vaultId: InterbtcPrimitivesVaultId, vaultAddress: BitcoinAddress, vaultPublicKey: BitcoinAddressPublicKey }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    loans: {
      /**
       * Event emitted when a market is activated
       **/
      ActivatedMarket: AugmentedEvent<ApiType, [underlyingCurrencyId: InterbtcPrimitivesCurrencyId], { underlyingCurrencyId: InterbtcPrimitivesCurrencyId }>;
      /**
       * Event emitted when cash is borrowed
       **/
      Borrowed: AugmentedEvent<ApiType, [accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128], { accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128 }>;
      /**
       * Enable collateral for certain asset
       **/
      DepositCollateral: AugmentedEvent<ApiType, [accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128], { accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128 }>;
      /**
       * Event emitted when assets are deposited
       **/
      Deposited: AugmentedEvent<ApiType, [accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128], { accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128 }>;
      /**
       * Deposited when Reward is distributed to a borrower
       **/
      DistributedBorrowerReward: AugmentedEvent<ApiType, [underlyingCurrencyId: InterbtcPrimitivesCurrencyId, borrower: AccountId32, rewardDelta: u128, borrowRewardIndex: u128], { underlyingCurrencyId: InterbtcPrimitivesCurrencyId, borrower: AccountId32, rewardDelta: u128, borrowRewardIndex: u128 }>;
      /**
       * Deposited when Reward is distributed to a supplier
       **/
      DistributedSupplierReward: AugmentedEvent<ApiType, [underlyingCurrencyId: InterbtcPrimitivesCurrencyId, supplier: AccountId32, rewardDelta: u128, supplyRewardIndex: u128], { underlyingCurrencyId: InterbtcPrimitivesCurrencyId, supplier: AccountId32, rewardDelta: u128, supplyRewardIndex: u128 }>;
      /**
       * Event emitted when the incentive reserves are redeemed and transfer to receiver's account
       **/
      IncentiveReservesReduced: AugmentedEvent<ApiType, [receiver: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128], { receiver: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128 }>;
      /**
       * Event emitted when interest has been accrued for a market
       **/
      InterestAccrued: AugmentedEvent<ApiType, [underlyingCurrencyId: InterbtcPrimitivesCurrencyId, totalBorrows: u128, totalReserves: u128, borrowIndex: u128, utilizationRatio: Permill, borrowRate: u128, supplyRate: u128, exchangeRate: u128], { underlyingCurrencyId: InterbtcPrimitivesCurrencyId, totalBorrows: u128, totalReserves: u128, borrowIndex: u128, utilizationRatio: Permill, borrowRate: u128, supplyRate: u128, exchangeRate: u128 }>;
      /**
       * Event emitted when a borrow is liquidated
       **/
      LiquidatedBorrow: AugmentedEvent<ApiType, [liquidator: AccountId32, borrower: AccountId32, liquidationCurrencyId: InterbtcPrimitivesCurrencyId, collateralCurrencyId: InterbtcPrimitivesCurrencyId, repayAmount: u128, collateralUnderlyingAmount: u128], { liquidator: AccountId32, borrower: AccountId32, liquidationCurrencyId: InterbtcPrimitivesCurrencyId, collateralCurrencyId: InterbtcPrimitivesCurrencyId, repayAmount: u128, collateralUnderlyingAmount: u128 }>;
      /**
       * Event emitted when market reward speed updated.
       **/
      MarketRewardSpeedUpdated: AugmentedEvent<ApiType, [underlyingCurrencyId: InterbtcPrimitivesCurrencyId, supplyRewardPerBlock: u128, borrowRewardPerBlock: u128], { underlyingCurrencyId: InterbtcPrimitivesCurrencyId, supplyRewardPerBlock: u128, borrowRewardPerBlock: u128 }>;
      /**
       * New market is set
       **/
      NewMarket: AugmentedEvent<ApiType, [underlyingCurrencyId: InterbtcPrimitivesCurrencyId, market: LoansMarket], { underlyingCurrencyId: InterbtcPrimitivesCurrencyId, market: LoansMarket }>;
      /**
       * Event emitted when assets are redeemed
       **/
      Redeemed: AugmentedEvent<ApiType, [accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128], { accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128 }>;
      /**
       * Event emitted when a borrow is repaid
       **/
      RepaidBorrow: AugmentedEvent<ApiType, [accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128], { accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128 }>;
      /**
       * Event emitted when the reserves are added
       **/
      ReservesAdded: AugmentedEvent<ApiType, [payer: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128, newReserveAmount: u128], { payer: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128, newReserveAmount: u128 }>;
      /**
       * Event emitted when the reserves are reduced
       **/
      ReservesReduced: AugmentedEvent<ApiType, [receiver: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128, newReserveAmount: u128], { receiver: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128, newReserveAmount: u128 }>;
      /**
       * Reward added
       **/
      RewardAdded: AugmentedEvent<ApiType, [payer: AccountId32, amount: u128], { payer: AccountId32, amount: u128 }>;
      /**
       * Reward Paid for user
       **/
      RewardPaid: AugmentedEvent<ApiType, [receiver: AccountId32, amount: u128], { receiver: AccountId32, amount: u128 }>;
      /**
       * Reward withdrawed
       **/
      RewardWithdrawn: AugmentedEvent<ApiType, [receiver: AccountId32, amount: u128], { receiver: AccountId32, amount: u128 }>;
      /**
       * New market parameters is updated
       **/
      UpdatedMarket: AugmentedEvent<ApiType, [underlyingCurrencyId: InterbtcPrimitivesCurrencyId, market: LoansMarket], { underlyingCurrencyId: InterbtcPrimitivesCurrencyId, market: LoansMarket }>;
      /**
       * Disable collateral for certain asset
       **/
      WithdrawCollateral: AugmentedEvent<ApiType, [accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128], { accountId: AccountId32, currencyId: InterbtcPrimitivesCurrencyId, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nomination: {
      DepositCollateral: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, nominatorId: AccountId32, amount: u128], { vaultId: InterbtcPrimitivesVaultId, nominatorId: AccountId32, amount: u128 }>;
      NominationOptIn: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId], { vaultId: InterbtcPrimitivesVaultId }>;
      NominationOptOut: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId], { vaultId: InterbtcPrimitivesVaultId }>;
      WithdrawCollateral: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, nominatorId: AccountId32, amount: u128], { vaultId: InterbtcPrimitivesVaultId, nominatorId: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes.
       * \[kind, timeslot\].
       **/
      Offence: AugmentedEvent<ApiType, [kind: U8aFixed, timeslot: Bytes], { kind: U8aFixed, timeslot: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    oracle: {
      AggregateUpdated: AugmentedEvent<ApiType, [values: Vec<ITuple<[InterbtcPrimitivesOracleKey, Option<u128>]>>], { values: Vec<ITuple<[InterbtcPrimitivesOracleKey, Option<u128>]>> }>;
      /**
       * Event emitted when exchange rate is set
       **/
      FeedValues: AugmentedEvent<ApiType, [oracleId: AccountId32, values: Vec<ITuple<[InterbtcPrimitivesOracleKey, u128]>>], { oracleId: AccountId32, values: Vec<ITuple<[InterbtcPrimitivesOracleKey, u128]>> }>;
      OracleAdded: AugmentedEvent<ApiType, [oracleId: AccountId32, name: Bytes], { oracleId: AccountId32, name: Bytes }>;
      OracleRemoved: AugmentedEvent<ApiType, [oracleId: AccountId32], { oracleId: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: GgxchainRuntimeBrooklynPosProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: GgxchainRuntimeBrooklynPosProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: GgxchainRuntimeBrooklynPosProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: GgxchainRuntimeBrooklynPosProxyType, delay: u32 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: GgxchainRuntimeBrooklynPosProxyType, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: GgxchainRuntimeBrooklynPosProxyType, disambiguationIndex: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    redeem: {
      CancelRedeem: AugmentedEvent<ApiType, [redeemId: H256, redeemer: AccountId32, vaultId: InterbtcPrimitivesVaultId, slashedAmount: u128, status: InterbtcPrimitivesRedeemRedeemRequestStatus], { redeemId: H256, redeemer: AccountId32, vaultId: InterbtcPrimitivesVaultId, slashedAmount: u128, status: InterbtcPrimitivesRedeemRedeemRequestStatus }>;
      ExecuteRedeem: AugmentedEvent<ApiType, [redeemId: H256, redeemer: AccountId32, vaultId: InterbtcPrimitivesVaultId, amount: u128, fee: u128, transferFee: u128], { redeemId: H256, redeemer: AccountId32, vaultId: InterbtcPrimitivesVaultId, amount: u128, fee: u128, transferFee: u128 }>;
      LiquidationRedeem: AugmentedEvent<ApiType, [redeemer: AccountId32, amount: u128], { redeemer: AccountId32, amount: u128 }>;
      MintTokensForReimbursedRedeem: AugmentedEvent<ApiType, [redeemId: H256, vaultId: InterbtcPrimitivesVaultId, amount: u128], { redeemId: H256, vaultId: InterbtcPrimitivesVaultId, amount: u128 }>;
      RedeemPeriodChange: AugmentedEvent<ApiType, [period: u32], { period: u32 }>;
      RequestRedeem: AugmentedEvent<ApiType, [redeemId: H256, redeemer: AccountId32, vaultId: InterbtcPrimitivesVaultId, amount: u128, fee: u128, premium: u128, btcAddress: BitcoinAddress, transferFee: u128], { redeemId: H256, redeemer: AccountId32, vaultId: InterbtcPrimitivesVaultId, amount: u128, fee: u128, premium: u128, btcAddress: BitcoinAddress, transferFee: u128 }>;
      SelfRedeem: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, amount: u128, fee: u128], { vaultId: InterbtcPrimitivesVaultId, amount: u128, fee: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    referenda: {
      /**
       * A referendum has been approved and its proposal has been scheduled.
       **/
      Approved: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      ConfirmAborted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A referendum has ended its confirmation phase and is ready for approval.
       **/
      Confirmed: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      ConfirmStarted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * The decision deposit has been placed.
       **/
      DecisionDepositPlaced: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * The decision deposit has been refunded.
       **/
      DecisionDepositRefunded: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * A referendum has moved into the deciding phase.
       **/
      DecisionStarted: AugmentedEvent<ApiType, [index: u32, track: u16, proposal: FrameSupportPreimagesBounded, tally: PalletConvictionVotingTally], { index: u32, track: u16, proposal: FrameSupportPreimagesBounded, tally: PalletConvictionVotingTally }>;
      /**
       * A deposit has been slashaed.
       **/
      DepositSlashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * A referendum has been killed.
       **/
      Killed: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      /**
       * Metadata for a referendum has been cleared.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [index: u32, hash_: H256], { index: u32, hash_: H256 }>;
      /**
       * Metadata for a referendum has been set.
       **/
      MetadataSet: AugmentedEvent<ApiType, [index: u32, hash_: H256], { index: u32, hash_: H256 }>;
      /**
       * A proposal has been rejected by referendum.
       **/
      Rejected: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      /**
       * The submission deposit has been refunded.
       **/
      SubmissionDepositRefunded: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * A referendum has been submitted.
       **/
      Submitted: AugmentedEvent<ApiType, [index: u32, track: u16, proposal: FrameSupportPreimagesBounded], { index: u32, track: u16, proposal: FrameSupportPreimagesBounded }>;
      /**
       * A referendum has been timed out without being decided.
       **/
      TimedOut: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    replace: {
      AcceptReplace: AugmentedEvent<ApiType, [replaceId: H256, oldVaultId: InterbtcPrimitivesVaultId, newVaultId: InterbtcPrimitivesVaultId, amount: u128, collateral: u128, btcAddress: BitcoinAddress], { replaceId: H256, oldVaultId: InterbtcPrimitivesVaultId, newVaultId: InterbtcPrimitivesVaultId, amount: u128, collateral: u128, btcAddress: BitcoinAddress }>;
      CancelReplace: AugmentedEvent<ApiType, [replaceId: H256, newVaultId: InterbtcPrimitivesVaultId, oldVaultId: InterbtcPrimitivesVaultId, griefingCollateral: u128], { replaceId: H256, newVaultId: InterbtcPrimitivesVaultId, oldVaultId: InterbtcPrimitivesVaultId, griefingCollateral: u128 }>;
      ExecuteReplace: AugmentedEvent<ApiType, [replaceId: H256, oldVaultId: InterbtcPrimitivesVaultId, newVaultId: InterbtcPrimitivesVaultId], { replaceId: H256, oldVaultId: InterbtcPrimitivesVaultId, newVaultId: InterbtcPrimitivesVaultId }>;
      ReplacePeriodChange: AugmentedEvent<ApiType, [period: u32], { period: u32 }>;
      RequestReplace: AugmentedEvent<ApiType, [oldVaultId: InterbtcPrimitivesVaultId, amount: u128, griefingCollateral: u128], { oldVaultId: InterbtcPrimitivesVaultId, amount: u128, griefingCollateral: u128 }>;
      WithdrawReplace: AugmentedEvent<ApiType, [oldVaultId: InterbtcPrimitivesVaultId, withdrawnTokens: u128, withdrawnGriefingCollateral: u128], { oldVaultId: InterbtcPrimitivesVaultId, withdrawnTokens: u128, withdrawnGriefingCollateral: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallUnavailable: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The given task was unable to be renewed since the agenda is full at that block.
       **/
      PeriodicFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task can never be executed since it is overweight.
       **/
      PermanentlyOverweight: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    security: {
      Activated: AugmentedEvent<ApiType, []>;
      Deactivated: AugmentedEvent<ApiType, []>;
      UpdateActiveBlock: AugmentedEvent<ApiType, [blockNumber: u32], { blockNumber: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sessionPayout: {
      Rewarded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      SessionPayout: AugmentedEvent<ApiType, [sessionIndex: u32, validatorPayout: u128, remainder: u128], { sessionIndex: u32, validatorPayout: u128, remainder: u128 }>;
      YearRewardPoolAllocated: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    society: {
      /**
       * A candidate was dropped (due to an excess of bids in the system).
       **/
      AutoUnbid: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A membership bid just happened. The given account is the candidate's ID and their offer
       * is the second.
       **/
      Bid: AugmentedEvent<ApiType, [candidateId: AccountId32, offer: u128], { candidateId: AccountId32, offer: u128 }>;
      /**
       * A candidate has been suspended
       **/
      CandidateSuspended: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A member has been challenged
       **/
      Challenged: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * A vote has been placed for a defending member
       **/
      DefenderVote: AugmentedEvent<ApiType, [voter: AccountId32, vote: bool], { voter: AccountId32, vote: bool }>;
      /**
       * Some funds were deposited into the society account.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * The society is founded by the given identity.
       **/
      Founded: AugmentedEvent<ApiType, [founder: AccountId32], { founder: AccountId32 }>;
      /**
       * A group of candidates have been inducted. The batch's primary is the first value, the
       * batch in full is the second.
       **/
      Inducted: AugmentedEvent<ApiType, [primary: AccountId32, candidates: Vec<AccountId32>], { primary: AccountId32, candidates: Vec<AccountId32> }>;
      /**
       * A member has been suspended
       **/
      MemberSuspended: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * A new \[max\] member count has been set
       **/
      NewMaxMembers: AugmentedEvent<ApiType, [max: u32], { max: u32 }>;
      /**
       * A group of members has been choosen as Skeptics
       **/
      SkepticsChosen: AugmentedEvent<ApiType, [skeptics: Vec<AccountId32>], { skeptics: Vec<AccountId32> }>;
      /**
       * A suspended member has been judged.
       **/
      SuspendedMemberJudgement: AugmentedEvent<ApiType, [who: AccountId32, judged: bool], { who: AccountId32, judged: bool }>;
      /**
       * A candidate was dropped (by their request).
       **/
      Unbid: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * Society is unfounded.
       **/
      Unfounded: AugmentedEvent<ApiType, [founder: AccountId32], { founder: AccountId32 }>;
      /**
       * A candidate was dropped (by request of who vouched for them).
       **/
      Unvouch: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A vote has been placed
       **/
      Vote: AugmentedEvent<ApiType, [candidate: AccountId32, voter: AccountId32, vote: bool], { candidate: AccountId32, voter: AccountId32, vote: bool }>;
      /**
       * A membership bid just happened by vouching. The given account is the candidate's ID and
       * their offer is the second. The vouching party is the third.
       **/
      Vouch: AugmentedEvent<ApiType, [candidateId: AccountId32, offer: u128, vouching: AccountId32], { candidateId: AccountId32, offer: u128, vouching: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    staking: {
      /**
       * An account has bonded this amount. \[stash, amount\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      Bonded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * An account has stopped participating as either a validator or nominator.
       **/
      Chilled: AugmentedEvent<ApiType, [stash: AccountId32], { stash: AccountId32 }>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       **/
      EraPaid: AugmentedEvent<ApiType, [eraIndex: u32, validatorPayout: u128, remainder: u128], { eraIndex: u32, validatorPayout: u128, remainder: u128 }>;
      /**
       * A new force era mode was set.
       **/
      ForceEra: AugmentedEvent<ApiType, [mode: PalletStakingForcing], { mode: PalletStakingForcing }>;
      /**
       * A nominator has been kicked from a validator.
       **/
      Kicked: AugmentedEvent<ApiType, [nominator: AccountId32, stash: AccountId32], { nominator: AccountId32, stash: AccountId32 }>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed.
       **/
      OldSlashingReportDiscarded: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * The stakers' rewards are getting paid.
       **/
      PayoutStarted: AugmentedEvent<ApiType, [eraIndex: u32, validatorStash: AccountId32], { eraIndex: u32, validatorStash: AccountId32 }>;
      /**
       * The nominator has been rewarded by this amount.
       **/
      Rewarded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * A staker (validator or nominator) has been slashed by the given amount.
       **/
      Slashed: AugmentedEvent<ApiType, [staker: AccountId32, amount: u128], { staker: AccountId32, amount: u128 }>;
      /**
       * A slash for the given validator, for the given percentage of their stake, at the given
       * era as been reported.
       **/
      SlashReported: AugmentedEvent<ApiType, [validator: AccountId32, fraction: Perbill, slashEra: u32], { validator: AccountId32, fraction: Perbill, slashEra: u32 }>;
      /**
       * A new set of stakers was elected.
       **/
      StakersElected: AugmentedEvent<ApiType, []>;
      /**
       * The election failed. No new era is planned.
       **/
      StakingElectionFailed: AugmentedEvent<ApiType, []>;
      /**
       * An account has unbonded this amount.
       **/
      Unbonded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * A validator has set their preferences.
       **/
      ValidatorPrefsSet: AugmentedEvent<ApiType, [stash: AccountId32, prefs: PalletStakingValidatorPrefs], { stash: AccountId32, prefs: PalletStakingValidatorPrefs }>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue.
       **/
      Withdrawn: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], { oldSudoer: Option<AccountId32> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, free: u128, reserved: u128], { currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Deposited some balance into an account
       **/
      Deposited: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some free balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some locked funds were unlocked
       **/
      LockRemoved: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32], { lockId: U8aFixed, currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32 }>;
      /**
       * Some funds are locked
       **/
      LockSet: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128], { lockId: U8aFixed, currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some reserved balance was repatriated (moved from reserved to
       * another account).
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus], { currencyId: InterbtcPrimitivesCurrencyId, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some balances were slashed (e.g. due to mis-behavior)
       **/
      Slashed: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, freeAmount: u128, reservedAmount: u128], { currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, freeAmount: u128, reservedAmount: u128 }>;
      /**
       * The total issuance of an currency has been set
       **/
      TotalIssuanceSet: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, amount: u128], { currencyId: InterbtcPrimitivesCurrencyId, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, from: AccountId32, to: AccountId32, amount: u128], { currencyId: InterbtcPrimitivesCurrencyId, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some locked balance was freed.
       **/
      Unlocked: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some balances were withdrawn (e.g. pay for transaction fee)
       **/
      Withdrawn: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: InterbtcPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * New proposal.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>;
      /**
       * A proposal was rejected; funds were slashed.
       **/
      Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32, slashed: u128 }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      /**
       * The inactive funds of the pallet have been updated.
       **/
      UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], { reactivated: u128, deactivated: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vaultCapacity: {
      DepositStake: AugmentedEvent<ApiType, [poolId: Null, stakeId: InterbtcPrimitivesCurrencyId, amount: i128], { poolId: Null, stakeId: InterbtcPrimitivesCurrencyId, amount: i128 }>;
      DistributeReward: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, amount: i128], { currencyId: InterbtcPrimitivesCurrencyId, amount: i128 }>;
      WithdrawReward: AugmentedEvent<ApiType, [poolId: Null, stakeId: InterbtcPrimitivesCurrencyId, currencyId: InterbtcPrimitivesCurrencyId, amount: i128], { poolId: Null, stakeId: InterbtcPrimitivesCurrencyId, currencyId: InterbtcPrimitivesCurrencyId, amount: i128 }>;
      WithdrawStake: AugmentedEvent<ApiType, [poolId: Null, stakeId: InterbtcPrimitivesCurrencyId, amount: i128], { poolId: Null, stakeId: InterbtcPrimitivesCurrencyId, amount: i128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vaultRegistry: {
      BanVault: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, bannedUntil: u32], { vaultId: InterbtcPrimitivesVaultId, bannedUntil: u32 }>;
      DecreaseLockedCollateral: AugmentedEvent<ApiType, [currencyPair: InterbtcPrimitivesVaultCurrencyPair, delta: u128, total: u128], { currencyPair: InterbtcPrimitivesVaultCurrencyPair, delta: u128, total: u128 }>;
      DecreaseToBeIssuedTokens: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, decrease: u128], { vaultId: InterbtcPrimitivesVaultId, decrease: u128 }>;
      DecreaseToBeRedeemedTokens: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, decrease: u128], { vaultId: InterbtcPrimitivesVaultId, decrease: u128 }>;
      DecreaseToBeReplacedTokens: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, decrease: u128], { vaultId: InterbtcPrimitivesVaultId, decrease: u128 }>;
      DecreaseTokens: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, userId: AccountId32, decrease: u128], { vaultId: InterbtcPrimitivesVaultId, userId: AccountId32, decrease: u128 }>;
      IncreaseLockedCollateral: AugmentedEvent<ApiType, [currencyPair: InterbtcPrimitivesVaultCurrencyPair, delta: u128, total: u128], { currencyPair: InterbtcPrimitivesVaultCurrencyPair, delta: u128, total: u128 }>;
      IncreaseToBeIssuedTokens: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, increase: u128], { vaultId: InterbtcPrimitivesVaultId, increase: u128 }>;
      IncreaseToBeRedeemedTokens: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, increase: u128], { vaultId: InterbtcPrimitivesVaultId, increase: u128 }>;
      IncreaseToBeReplacedTokens: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, increase: u128], { vaultId: InterbtcPrimitivesVaultId, increase: u128 }>;
      IssueTokens: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, increase: u128], { vaultId: InterbtcPrimitivesVaultId, increase: u128 }>;
      LiquidateVault: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, issuedTokens: u128, toBeIssuedTokens: u128, toBeRedeemedTokens: u128, toBeReplacedTokens: u128, backingCollateral: u128, status: VaultRegistryVaultStatus, replaceCollateral: u128], { vaultId: InterbtcPrimitivesVaultId, issuedTokens: u128, toBeIssuedTokens: u128, toBeRedeemedTokens: u128, toBeReplacedTokens: u128, backingCollateral: u128, status: VaultRegistryVaultStatus, replaceCollateral: u128 }>;
      RedeemTokens: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, redeemedAmount: u128], { vaultId: InterbtcPrimitivesVaultId, redeemedAmount: u128 }>;
      RedeemTokensLiquidatedVault: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, tokens: u128, collateral: u128], { vaultId: InterbtcPrimitivesVaultId, tokens: u128, collateral: u128 }>;
      RedeemTokensLiquidation: AugmentedEvent<ApiType, [redeemerId: AccountId32, burnedTokens: u128, transferredCollateral: u128], { redeemerId: AccountId32, burnedTokens: u128, transferredCollateral: u128 }>;
      RedeemTokensPremium: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, redeemedAmount: u128, collateral: u128, userId: AccountId32], { vaultId: InterbtcPrimitivesVaultId, redeemedAmount: u128, collateral: u128, userId: AccountId32 }>;
      RegisterAddress: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, address: BitcoinAddress], { vaultId: InterbtcPrimitivesVaultId, address: BitcoinAddress }>;
      RegisterVault: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, collateral: u128], { vaultId: InterbtcPrimitivesVaultId, collateral: u128 }>;
      ReplaceTokens: AugmentedEvent<ApiType, [oldVaultId: InterbtcPrimitivesVaultId, newVaultId: InterbtcPrimitivesVaultId, amount: u128, additionalCollateral: u128], { oldVaultId: InterbtcPrimitivesVaultId, newVaultId: InterbtcPrimitivesVaultId, amount: u128, additionalCollateral: u128 }>;
      SetAcceptNewIssues: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, acceptNewIssues: bool], { vaultId: InterbtcPrimitivesVaultId, acceptNewIssues: bool }>;
      SetCustomSecureThreshold: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, customThreshold: Option<u128>], { vaultId: InterbtcPrimitivesVaultId, customThreshold: Option<u128> }>;
      SetLiquidationCollateralThreshold: AugmentedEvent<ApiType, [currencyPair: InterbtcPrimitivesVaultCurrencyPair, threshold: u128], { currencyPair: InterbtcPrimitivesVaultCurrencyPair, threshold: u128 }>;
      SetPremiumRedeemThreshold: AugmentedEvent<ApiType, [currencyPair: InterbtcPrimitivesVaultCurrencyPair, threshold: u128], { currencyPair: InterbtcPrimitivesVaultCurrencyPair, threshold: u128 }>;
      SetSecureCollateralThreshold: AugmentedEvent<ApiType, [currencyPair: InterbtcPrimitivesVaultCurrencyPair, threshold: u128], { currencyPair: InterbtcPrimitivesVaultCurrencyPair, threshold: u128 }>;
      UpdatePublicKey: AugmentedEvent<ApiType, [accountId: AccountId32, publicKey: BitcoinAddressPublicKey], { accountId: AccountId32, publicKey: BitcoinAddressPublicKey }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vaultRewards: {
      DepositStake: AugmentedEvent<ApiType, [poolId: InterbtcPrimitivesCurrencyId, stakeId: InterbtcPrimitivesVaultId, amount: i128], { poolId: InterbtcPrimitivesCurrencyId, stakeId: InterbtcPrimitivesVaultId, amount: i128 }>;
      DistributeReward: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, amount: i128], { currencyId: InterbtcPrimitivesCurrencyId, amount: i128 }>;
      WithdrawReward: AugmentedEvent<ApiType, [poolId: InterbtcPrimitivesCurrencyId, stakeId: InterbtcPrimitivesVaultId, currencyId: InterbtcPrimitivesCurrencyId, amount: i128], { poolId: InterbtcPrimitivesCurrencyId, stakeId: InterbtcPrimitivesVaultId, currencyId: InterbtcPrimitivesCurrencyId, amount: i128 }>;
      WithdrawStake: AugmentedEvent<ApiType, [poolId: InterbtcPrimitivesCurrencyId, stakeId: InterbtcPrimitivesVaultId, amount: i128], { poolId: InterbtcPrimitivesCurrencyId, stakeId: InterbtcPrimitivesVaultId, amount: i128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vaultStaking: {
      DepositStake: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, nominatorId: AccountId32, amount: i128], { vaultId: InterbtcPrimitivesVaultId, nominatorId: AccountId32, amount: i128 }>;
      DistributeReward: AugmentedEvent<ApiType, [currencyId: InterbtcPrimitivesCurrencyId, vaultId: InterbtcPrimitivesVaultId, amount: i128], { currencyId: InterbtcPrimitivesCurrencyId, vaultId: InterbtcPrimitivesVaultId, amount: i128 }>;
      ForceRefund: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId], { vaultId: InterbtcPrimitivesVaultId }>;
      IncreaseNonce: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, newNonce: u32], { vaultId: InterbtcPrimitivesVaultId, newNonce: u32 }>;
      WithdrawReward: AugmentedEvent<ApiType, [nonce: u32, currencyId: InterbtcPrimitivesCurrencyId, vaultId: InterbtcPrimitivesVaultId, nominatorId: AccountId32, amount: i128], { nonce: u32, currencyId: InterbtcPrimitivesCurrencyId, vaultId: InterbtcPrimitivesVaultId, nominatorId: AccountId32, amount: i128 }>;
      WithdrawStake: AugmentedEvent<ApiType, [vaultId: InterbtcPrimitivesVaultId, nominatorId: AccountId32, amount: i128], { vaultId: InterbtcPrimitivesVaultId, nominatorId: AccountId32, amount: i128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /**
       * An \[account\] has become fully vested.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * The amount vested has been updated. This could indicate a change in funds available.
       * The balance given is the amount which is left unvested (and thus locked).
       **/
      VestingUpdated: AugmentedEvent<ApiType, [account: AccountId32, unvested: u128], { account: AccountId32, unvested: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    whitelist: {
      CallWhitelisted: AugmentedEvent<ApiType, [callHash: H256], { callHash: H256 }>;
      WhitelistedCallDispatched: AugmentedEvent<ApiType, [callHash: H256, result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>], { callHash: H256, result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo> }>;
      WhitelistedCallRemoved: AugmentedEvent<ApiType, [callHash: H256], { callHash: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
