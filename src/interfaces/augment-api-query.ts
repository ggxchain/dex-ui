// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/api-base/types/storage";

import type {
	ApiTypes,
	AugmentedQuery,
	QueryableStorageEntry,
} from "@polkadot/api-base/types";
import type { Data } from "@polkadot/types";
import type {
	BTreeSet,
	Bytes,
	Null,
	Option,
	Text,
	U8aFixed,
	U256,
	Vec,
	WrapperOpaque,
	bool,
	i128,
	u16,
	u32,
	u64,
	u128,
} from "@polkadot/types-codec";
import type { AnyNumber, ITuple } from "@polkadot/types-codec/types";
import type {
	AccountId32,
	H160,
	H256,
	Perbill,
	Percent,
	Permill,
} from "@polkadot/types/interfaces/runtime";
import type {
	BitcoinAddress,
	BitcoinAddressPublicKey,
	BitcoinBlockChain,
	BitcoinH256Le,
	BtcRelayRichBlockHeader,
	ClientsInfoClientRelease,
	EthTypesClientMode,
	EthTypesEth2ExtendedBeaconBlockHeader,
	EthTypesEth2SyncCommittee,
	EthTypesExecutionHeaderInfo,
	EthereumBlock,
	EthereumReceiptReceiptV3,
	EthereumTransactionTransactionV2,
	FeeVersion,
	FpRpcTransactionStatus,
	FrameSupportDispatchPerDispatchClassWeight,
	FrameSystemAccountInfo,
	FrameSystemEventRecord,
	FrameSystemLastRuntimeUpgradeInfo,
	FrameSystemPhase,
	GgxchainRuntimeBrooklynOpaqueSessionKeys,
	IbcCoreIcs02ClientHeight,
	IbcCoreIcs03ConnectionConnectionSealedConnectionEnd,
	IbcCoreIcs04ChannelChannelChannelEnd,
	IbcCoreIcs04ChannelPacketReceipt,
	IbcCoreIcs24HostPathAcksPath,
	IbcCoreIcs24HostPathChannelEndsPath,
	IbcCoreIcs24HostPathClientConsensusStatePath,
	IbcCoreIcs24HostPathCommitmentsPath,
	IbcCoreIcs24HostPathReceiptsPath,
	IbcCoreIcs24HostPathSeqAcksPath,
	IbcCoreIcs24HostPathSeqRecvsPath,
	IbcCoreIcs24HostPathSeqSendsPath,
	IbcEventsIbcEvent,
	InterbtcPrimitivesCurrencyId,
	InterbtcPrimitivesIssueIssueRequest,
	InterbtcPrimitivesOracleKey,
	InterbtcPrimitivesRedeemRedeemRequest,
	InterbtcPrimitivesReplaceReplaceRequest,
	InterbtcPrimitivesVaultCurrencyPair,
	InterbtcPrimitivesVaultId,
	IssueVersion,
	LoansBorrowSnapshot,
	LoansMarket,
	LoansRewardMarketState,
	LoansVersions,
	OracleTimestampedValue,
	OracleVersion,
	OrmlTokensAccountData,
	OrmlTokensBalanceLock,
	OrmlTokensReserveData,
	OrmlTraitsAssetRegistryAssetMetadata,
	PalletAssetsApproval,
	PalletAssetsAssetAccount,
	PalletAssetsAssetDetails,
	PalletAssetsAssetMetadata,
	PalletBalancesAccountData,
	PalletBalancesBalanceLock,
	PalletBalancesIdAmount,
	PalletBalancesReserveData,
	PalletBountiesBounty,
	PalletContractsStorageContractInfo,
	PalletContractsStorageDeletionQueueManager,
	PalletContractsWasmOwnerInfo,
	PalletContractsWasmPrefabWasmModule,
	PalletConvictionVotingVoteVoting,
	PalletDexOrder,
	PalletDexTokenInfo,
	PalletElectionProviderMultiPhasePhase,
	PalletElectionProviderMultiPhaseReadySolution,
	PalletElectionProviderMultiPhaseRoundSnapshot,
	PalletElectionProviderMultiPhaseSignedSignedSubmission,
	PalletElectionProviderMultiPhaseSolutionOrSnapshotSize,
	PalletEvmCodeMetadata,
	PalletGrandpaStoredPendingChange,
	PalletGrandpaStoredState,
	PalletIcs20TransferDenomPrefixedDenom,
	PalletIdentityRegistrarInfo,
	PalletIdentityRegistration,
	PalletImOnlineBoundedOpaqueNetworkState,
	PalletImOnlineSr25519AppSr25519Public,
	PalletMultisigMultisig,
	PalletPreimageRequestStatus,
	PalletProxyAnnouncement,
	PalletProxyProxyDefinition,
	PalletReferendaReferendumInfo,
	PalletSchedulerScheduled,
	PalletSocietyBid,
	PalletSocietyBidKind,
	PalletSocietyVote,
	PalletSocietyVouchingStatus,
	PalletStakingActiveEraInfo,
	PalletStakingEraRewardPoints,
	PalletStakingExposure,
	PalletStakingForcing,
	PalletStakingNominations,
	PalletStakingRewardDestination,
	PalletStakingSlashingSlashingSpans,
	PalletStakingSlashingSpanRecord,
	PalletStakingStakingLedger,
	PalletStakingUnappliedSlash,
	PalletStakingValidatorPrefs,
	PalletTransactionPaymentReleases,
	PalletTreasuryProposal,
	PalletVestingReleases,
	PalletVestingVestingInfo,
	RedeemVersion,
	ReplaceVersion,
	RuntimeCommonChainSpecRuntimeConfig,
	RuntimeCommonPosSessionPayoutValidatorCommissionAlgorithm,
	SpConsensusAuraSr25519AppSr25519Public,
	SpConsensusBeefyCryptoPublic,
	SpConsensusBeefyMmrBeefyAuthoritySet,
	SpCoreCryptoKeyTypeId,
	SpNposElectionsElectionScore,
	SpRuntimeDigest,
	SpStakingOffenceOffenceDetails,
	TypesPrimitivesH160,
	TypesPrimitivesH256,
	TypesReceiptLog,
	VaultRegistrySystemVault,
	VaultRegistryVault,
	VaultRegistryVersion,
	WebbConsensusTypesNetworkConfig,
	WebbProposalsHeaderTypedChainId,
	XcmV3MultiLocation,
} from "@polkadot/types/lookup";
import type { Observable } from "@polkadot/types/types";

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<
	ApiType,
	() => unknown
>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> =
	QueryableStorageEntry<ApiType>;

declare module "@polkadot/api-base/types/storage" {
	interface AugmentedQueries<ApiType extends ApiTypes> {
		accountFilter: {
			allowedAccountList: AugmentedQuery<
				ApiType,
				(arg: AccountId32 | string | Uint8Array) => Observable<Option<Null>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			allowedAccounts: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			votes: AugmentedQuery<
				ApiType,
				(
					arg1: AccountId32 | string | Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<Option<Null>>,
				[AccountId32, AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32, AccountId32]>;
			votesForAccount: AugmentedQuery<
				ApiType,
				(arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		assetRegistry: {
			/**
			 * The last processed asset id - used when assigning a sequential id.
			 **/
			lastAssetId: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Maps a multilocation to an asset id - useful when processing xcm
			 * messages.
			 **/
			locationToAssetId: AugmentedQuery<
				ApiType,
				(
					arg:
						| XcmV3MultiLocation
						| { parents?: any; interior?: any }
						| string
						| Uint8Array,
				) => Observable<Option<u32>>,
				[XcmV3MultiLocation]
			> &
				QueryableStorageEntry<ApiType, [XcmV3MultiLocation]>;
			/**
			 * The metadata of an asset, indexed by asset id.
			 **/
			metadata: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<Option<OrmlTraitsAssetRegistryAssetMetadata>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		assets: {
			/**
			 * The holdings of a specific account for a specific asset.
			 **/
			account: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<Option<PalletAssetsAssetAccount>>,
				[u32, AccountId32]
			> &
				QueryableStorageEntry<ApiType, [u32, AccountId32]>;
			/**
			 * Approved balance transfers. First balance is the amount approved for transfer. Second
			 * is the amount of `T::Currency` reserved for storing this.
			 * First key is the asset ID, second key is the owner and third key is the delegate.
			 **/
			approvals: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
					arg3: AccountId32 | string | Uint8Array,
				) => Observable<Option<PalletAssetsApproval>>,
				[u32, AccountId32, AccountId32]
			> &
				QueryableStorageEntry<ApiType, [u32, AccountId32, AccountId32]>;
			/**
			 * Details of an asset.
			 **/
			asset: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<Option<PalletAssetsAssetDetails>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Metadata of an asset.
			 **/
			metadata: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<PalletAssetsAssetMetadata>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		aura: {
			/**
			 * The current authority set.
			 **/
			authorities: AugmentedQuery<
				ApiType,
				() => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current slot of this block.
			 *
			 * This will be set in `on_initialize`.
			 **/
			currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		authorship: {
			/**
			 * Author of current block.
			 **/
			author: AugmentedQuery<
				ApiType,
				() => Observable<Option<AccountId32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		balances: {
			/**
			 * The Balances pallet example of storing the balance of an account.
			 *
			 * # Example
			 *
			 * ```nocompile
			 * impl pallet_balances::Config for Runtime {
			 * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
			 * }
			 * ```
			 *
			 * You can also store the balance of an account in the `System` pallet.
			 *
			 * # Example
			 *
			 * ```nocompile
			 * impl pallet_balances::Config for Runtime {
			 * type AccountStore = System
			 * }
			 * ```
			 *
			 * But this comes with tradeoffs, storing account balances in the system pallet stores
			 * `frame_system` data alongside the account data contrary to storing account balances in the
			 * `Balances` pallet, which uses a `StorageMap` to store balances data only.
			 * NOTE: This is only used in the case that this pallet is used to store balances.
			 **/
			account: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<PalletBalancesAccountData>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Freeze locks on account balances.
			 **/
			freezes: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Vec<PalletBalancesIdAmount>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Holds on account balances.
			 **/
			holds: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Vec<PalletBalancesIdAmount>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The total units of outstanding deactivated balance in the system.
			 **/
			inactiveIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Any liquidity locks on some account balances.
			 * NOTE: Should only be accessed when setting, changing and freeing a lock.
			 **/
			locks: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Vec<PalletBalancesBalanceLock>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Named reserves on some account balances.
			 **/
			reserves: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Vec<PalletBalancesReserveData>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The total units issued in the system.
			 **/
			totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		baseFee: {
			baseFeePerGas: AugmentedQuery<ApiType, () => Observable<U256>, []> &
				QueryableStorageEntry<ApiType, []>;
			elasticity: AugmentedQuery<ApiType, () => Observable<Permill>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		beefy: {
			/**
			 * The current authorities set
			 **/
			authorities: AugmentedQuery<
				ApiType,
				() => Observable<Vec<SpConsensusBeefyCryptoPublic>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Block number where BEEFY consensus is enabled/started.
			 * By changing this (through governance or sudo), BEEFY consensus is effectively
			 * restarted from the new block number.
			 **/
			genesisBlock: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Authorities set scheduled to be used with the next session
			 **/
			nextAuthorities: AugmentedQuery<
				ApiType,
				() => Observable<Vec<SpConsensusBeefyCryptoPublic>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * A mapping from BEEFY set ID to the index of the *most recent* session for which its
			 * members were responsible.
			 *
			 * This is only used for validating equivocation proofs. An equivocation proof must
			 * contains a key-ownership proof for a given session, therefore we need a way to tie
			 * together sessions and BEEFY set ids, i.e. we need to validate that a validator
			 * was the owner of a given key on a given session, and what the active set ID was
			 * during that session.
			 *
			 * TWOX-NOTE: `ValidatorSetId` is not under user control.
			 **/
			setIdSession: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * The current validator set id
			 **/
			validatorSetId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		bounties: {
			/**
			 * Bounties that have been made.
			 **/
			bounties: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<Option<PalletBountiesBounty>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Bounty indices that have been approved but not yet funded.
			 **/
			bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Number of bounty proposals that have been made.
			 **/
			bountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The description of each bounty.
			 **/
			bountyDescriptions: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		btcRelay: {
			/**
			 * Store the current blockchain tip
			 **/
			bestBlock: AugmentedQuery<ApiType, () => Observable<BitcoinH256Le>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Store the height of the best block
			 **/
			bestBlockHeight: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Store Bitcoin block headers
			 **/
			blockHeaders: AugmentedQuery<
				ApiType,
				(
					arg: BitcoinH256Le | { content?: any } | string | Uint8Array,
				) => Observable<BtcRelayRichBlockHeader>,
				[BitcoinH256Le]
			> &
				QueryableStorageEntry<ApiType, [BitcoinH256Le]>;
			/**
			 * Increment-only counter used to track new BlockChain entries
			 **/
			chainCounter: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Priority queue of BlockChain elements, ordered by the maximum height (descending).
			 * The first index into this mapping (0) is considered to be the longest chain. The value
			 * of the entry is the index into `ChainsIndex` to retrieve the `BlockChain`.
			 **/
			chains: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores a mapping from (chain_index, block_height) to block hash
			 **/
			chainsHashes: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: u32 | AnyNumber | Uint8Array,
				) => Observable<BitcoinH256Le>,
				[u32, u32]
			> &
				QueryableStorageEntry<ApiType, [u32, u32]>;
			/**
			 * Auxiliary mapping of chains ids to `BlockChain` entries. The first index into this
			 * mapping (0) is considered to be the Bitcoin main chain.
			 **/
			chainsIndex: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<Option<BitcoinBlockChain>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Whether the module should perform difficulty checks.
			 **/
			disableDifficultyCheck: AugmentedQuery<
				ApiType,
				() => Observable<bool>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Whether the module should perform inclusion checks.
			 **/
			disableInclusionCheck: AugmentedQuery<
				ApiType,
				() => Observable<bool>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Global security parameter k for stable Bitcoin transactions
			 **/
			stableBitcoinConfirmations: AugmentedQuery<
				ApiType,
				() => Observable<u32>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Global security parameter k for stable Parachain transactions
			 **/
			stableParachainConfirmations: AugmentedQuery<
				ApiType,
				() => Observable<u32>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * BTC height when the relay was initialized
			 **/
			startBlockHeight: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		clientsInfo: {
			/**
			 * Mapping of client name (string literal represented as bytes) to its release details.
			 **/
			currentClientReleases: AugmentedQuery<
				ApiType,
				(
					arg: Bytes | string | Uint8Array,
				) => Observable<Option<ClientsInfoClientRelease>>,
				[Bytes]
			> &
				QueryableStorageEntry<ApiType, [Bytes]>;
			/**
			 * Mapping of client name (string literal represented as bytes) to its pending release details.
			 **/
			pendingClientReleases: AugmentedQuery<
				ApiType,
				(
					arg: Bytes | string | Uint8Array,
				) => Observable<Option<ClientsInfoClientRelease>>,
				[Bytes]
			> &
				QueryableStorageEntry<ApiType, [Bytes]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		contracts: {
			/**
			 * A mapping between an original code hash and instrumented wasm code, ready for execution.
			 **/
			codeStorage: AugmentedQuery<
				ApiType,
				(
					arg: H256 | string | Uint8Array,
				) => Observable<Option<PalletContractsWasmPrefabWasmModule>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * The code associated with a given account.
			 *
			 * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
			 **/
			contractInfoOf: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<PalletContractsStorageContractInfo>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Evicted contracts that await child trie deletion.
			 *
			 * Child trie deletion is a heavy operation depending on the amount of storage items
			 * stored in said trie. Therefore this operation is performed lazily in `on_idle`.
			 **/
			deletionQueue: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * A pair of monotonic counters used to track the latest contract marked for deletion
			 * and the latest deleted contract in queue.
			 **/
			deletionQueueCounter: AugmentedQuery<
				ApiType,
				() => Observable<PalletContractsStorageDeletionQueueManager>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * This is a **monotonic** counter incremented on contract instantiation.
			 *
			 * This is used in order to generate unique trie ids for contracts.
			 * The trie id of a new contract is calculated from hash(account_id, nonce).
			 * The nonce is required because otherwise the following sequence would lead to
			 * a possible collision of storage:
			 *
			 * 1. Create a new contract.
			 * 2. Terminate the contract.
			 * 3. Immediately recreate the contract with the same account_id.
			 *
			 * This is bad because the contents of a trie are deleted lazily and there might be
			 * storage of the old instantiation still in it when the new contract is created. Please
			 * note that we can't replace the counter by the block number because the sequence above
			 * can happen in the same block. We also can't keep the account counter in memory only
			 * because storage is the only way to communicate across different extrinsics in the
			 * same block.
			 *
			 * # Note
			 *
			 * Do not use it to determine the number of contracts. It won't be decremented if
			 * a contract is destroyed.
			 **/
			nonce: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * A mapping between an original code hash and its owner information.
			 **/
			ownerInfoOf: AugmentedQuery<
				ApiType,
				(
					arg: H256 | string | Uint8Array,
				) => Observable<Option<PalletContractsWasmOwnerInfo>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * A mapping from an original code hash to the original code, untouched by instrumentation.
			 **/
			pristineCode: AugmentedQuery<
				ApiType,
				(arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		convictionVoting: {
			/**
			 * The voting classes which have a non-zero lock requirement and the lock amounts which they
			 * require. The actual amount locked on behalf of this pallet should always be the maximum of
			 * this list.
			 **/
			classLocksFor: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Vec<ITuple<[u16, u128]>>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * All voting for a particular voter in a particular voting class. We store the balance for the
			 * number of votes that we have recorded.
			 **/
			votingFor: AugmentedQuery<
				ApiType,
				(
					arg1: AccountId32 | string | Uint8Array,
					arg2: u16 | AnyNumber | Uint8Array,
				) => Observable<PalletConvictionVotingVoteVoting>,
				[AccountId32, u16]
			> &
				QueryableStorageEntry<ApiType, [AccountId32, u16]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		currencyManager: {
			inflationDecay: AugmentedQuery<ApiType, () => Observable<Perbill>, []> &
				QueryableStorageEntry<ApiType, []>;
			inflationPercent: AugmentedQuery<ApiType, () => Observable<Perbill>, []> &
				QueryableStorageEntry<ApiType, []>;
			lastInflationDecay: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			treasuryCommission: AugmentedQuery<
				ApiType,
				() => Observable<Perbill>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			treasuryCommissionFromFee: AugmentedQuery<
				ApiType,
				() => Observable<Perbill>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			treasuryCommissionFromTips: AugmentedQuery<
				ApiType,
				() => Observable<Perbill>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		dex: {
			nativeAssetId: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			nextOrderIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			nextPairOrderIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			orderExpiration: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<u64>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			orders: AugmentedQuery<
				ApiType,
				(
					arg: u64 | AnyNumber | Uint8Array,
				) => Observable<Option<PalletDexOrder>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			pairOrders: AugmentedQuery<
				ApiType,
				(
					arg:
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
				) => Observable<Vec<u64>>,
				[ITuple<[u32, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
			tokenIndex: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<u64>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			tokenInfoes: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			userOrders: AugmentedQuery<
				ApiType,
				(
					arg1: AccountId32 | string | Uint8Array,
					arg2: u64 | AnyNumber | Uint8Array,
				) => Observable<Null>,
				[AccountId32, u64]
			> &
				QueryableStorageEntry<ApiType, [AccountId32, u64]>;
			userTokenInfoes: AugmentedQuery<
				ApiType,
				(
					arg1: AccountId32 | string | Uint8Array,
					arg2: u32 | AnyNumber | Uint8Array,
				) => Observable<PalletDexTokenInfo>,
				[AccountId32, u32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32, u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		dynamicFee: {
			minGasPrice: AugmentedQuery<ApiType, () => Observable<U256>, []> &
				QueryableStorageEntry<ApiType, []>;
			targetMinGasPrice: AugmentedQuery<
				ApiType,
				() => Observable<Option<U256>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		electionProviderMultiPhase: {
			/**
			 * Current phase.
			 **/
			currentPhase: AugmentedQuery<
				ApiType,
				() => Observable<PalletElectionProviderMultiPhasePhase>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Desired number of targets to elect for this round.
			 *
			 * Only exists when [`Snapshot`] is present.
			 **/
			desiredTargets: AugmentedQuery<
				ApiType,
				() => Observable<Option<u32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum score that each 'untrusted' solution must attain in order to be considered
			 * feasible.
			 *
			 * Can be set via `set_minimum_untrusted_score`.
			 **/
			minimumUntrustedScore: AugmentedQuery<
				ApiType,
				() => Observable<Option<SpNposElectionsElectionScore>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Current best solution, signed or unsigned, queued to be returned upon `elect`.
			 *
			 * Always sorted by score.
			 **/
			queuedSolution: AugmentedQuery<
				ApiType,
				() => Observable<Option<PalletElectionProviderMultiPhaseReadySolution>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Internal counter for the number of rounds.
			 *
			 * This is useful for de-duplication of transactions submitted to the pool, and general
			 * diagnostics of the pallet.
			 *
			 * This is merely incremented once per every time that an upstream `elect` is called.
			 **/
			round: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
			 * value in `SignedSubmissions`.
			 *
			 * We never need to process more than a single signed submission at a time. Signed submissions
			 * can be quite large, so we're willing to pay the cost of multiple database accesses to access
			 * them one at a time instead of reading and decoding all of them at once.
			 **/
			signedSubmissionIndices: AugmentedQuery<
				ApiType,
				() => Observable<Vec<ITuple<[SpNposElectionsElectionScore, u32, u32]>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The next index to be assigned to an incoming signed submission.
			 *
			 * Every accepted submission is assigned a unique index; that index is bound to that particular
			 * submission for the duration of the election. On election finalization, the next index is
			 * reset to 0.
			 *
			 * We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
			 * capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
			 * because iteration is slow. Instead, we store the value here.
			 **/
			signedSubmissionNextIndex: AugmentedQuery<
				ApiType,
				() => Observable<u32>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Unchecked, signed solutions.
			 *
			 * Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
			 * allowing us to keep only a single one in memory at a time.
			 *
			 * Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
			 * affect; we shouldn't need a cryptographically secure hasher.
			 **/
			signedSubmissionsMap: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<
					Option<PalletElectionProviderMultiPhaseSignedSignedSubmission>
				>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Snapshot data of the round.
			 *
			 * This is created at the beginning of the signed phase and cleared upon calling `elect`.
			 **/
			snapshot: AugmentedQuery<
				ApiType,
				() => Observable<Option<PalletElectionProviderMultiPhaseRoundSnapshot>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The metadata of the [`RoundSnapshot`]
			 *
			 * Only exists when [`Snapshot`] is present.
			 **/
			snapshotMetadata: AugmentedQuery<
				ApiType,
				() => Observable<
					Option<PalletElectionProviderMultiPhaseSolutionOrSnapshotSize>
				>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		eth2Client: {
			clientModeForChain: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<Option<EthTypesClientMode>>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			currentSyncCommittee: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<Option<EthTypesEth2SyncCommittee>>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * Light client state
			 **/
			finalizedBeaconHeader: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<Option<EthTypesEth2ExtendedBeaconBlockHeader>>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * Hashes of the finalized execution blocks mapped to their numbers. Stores up to
			 * `hashes_gc_threshold` entries. Execution block number -> execution block hash
			 **/
			finalizedExecutionBlocks: AugmentedQuery<
				ApiType,
				(
					arg1:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
					arg2: u64 | AnyNumber | Uint8Array,
				) => Observable<Option<H256>>,
				[WebbProposalsHeaderTypedChainId, u64]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId, u64]>;
			finalizedExecutionHeader: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<Option<EthTypesExecutionHeaderInfo>>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * We store the hashes of the blocks for the past `hashes_gc_threshold` headers.
			 * Events that happen past this threshold cannot be verified by the client.
			 * It is desirable that this number is larger than 7 days' worth of headers, which is roughly
			 * 51k Ethereum blocks. So this number should be 51k in production.
			 **/
			hashesGcThreshold: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<u64>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			networkConfigForChain: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<Option<WebbConsensusTypesNetworkConfig>>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			nextSyncCommittee: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<Option<EthTypesEth2SyncCommittee>>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * Mask determining all paused functions
			 **/
			paused: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<bool>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * If set, only light client updates by the trusted signer will be accepted
			 **/
			trustedSigner: AugmentedQuery<
				ApiType,
				() => Observable<Option<AccountId32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			unfinalizedHeadExecutionHeader: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<Option<EthTypesExecutionHeaderInfo>>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			unfinalizedTailExecutionHeader: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<Option<EthTypesExecutionHeaderInfo>>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * Whether the client validates the updates.
			 * Should only be set to `false` for debugging, testing, and diagnostic purposes
			 **/
			validateUpdates: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<bool>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * Whether the client verifies BLS signatures.
			 **/
			verifyBlsSignatures: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<bool>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		ethereum: {
			blockHash: AugmentedQuery<
				ApiType,
				(arg: U256 | AnyNumber | Uint8Array) => Observable<H256>,
				[U256]
			> &
				QueryableStorageEntry<ApiType, [U256]>;
			/**
			 * The current Ethereum block.
			 **/
			currentBlock: AugmentedQuery<
				ApiType,
				() => Observable<Option<EthereumBlock>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current Ethereum receipts.
			 **/
			currentReceipts: AugmentedQuery<
				ApiType,
				() => Observable<Option<Vec<EthereumReceiptReceiptV3>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current transaction statuses.
			 **/
			currentTransactionStatuses: AugmentedQuery<
				ApiType,
				() => Observable<Option<Vec<FpRpcTransactionStatus>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Current building block's transactions and receipts.
			 **/
			pending: AugmentedQuery<
				ApiType,
				() => Observable<
					Vec<
						ITuple<
							[
								EthereumTransactionTransactionV2,
								FpRpcTransactionStatus,
								EthereumReceiptReceiptV3,
							]
						>
					>
				>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		ethereumChecked: {
			/**
			 * Global nonce for all transactions to avoid hash collision, which is
			 * caused by the same dummy signatures for all transactions.
			 **/
			nonce: AugmentedQuery<ApiType, () => Observable<U256>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		ethReceiptRegistry: {
			/**
			 * ProcessedReceipts
			 * TODO: clean up the storage
			 * Hashes of transaction receipts already processed. Stores up to
			 * [`hashes_gc_threshold`][1] entries.
			 *
			 * TypedChainId -> BlockNumber -> TransactionReceiptHash -> ()
			 *
			 * [1]: https://github.com/webb-tools/pallet-eth2-light-client/blob/4d8a20ad325795a2d166fcd2a6118db3037581d3/pallet/src/lib.rs#L218-L219
			 **/
			processedReceipts: AugmentedQuery<
				ApiType,
				(
					arg1:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
					arg2: u64 | AnyNumber | Uint8Array,
					arg3: TypesPrimitivesH256 | string | Uint8Array,
				) => Observable<Option<Vec<TypesReceiptLog>>>,
				[WebbProposalsHeaderTypedChainId, u64, TypesPrimitivesH256]
			> &
				QueryableStorageEntry<
					ApiType,
					[WebbProposalsHeaderTypedChainId, u64, TypesPrimitivesH256]
				>;
			/**
			 * querying that the inclusion-proof for a receipt has been processed or not
			 **/
			processedReceiptsHash: AugmentedQuery<
				ApiType,
				(
					arg1:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
					arg2: TypesPrimitivesH256 | string | Uint8Array,
				) => Observable<Option<Null>>,
				[WebbProposalsHeaderTypedChainId, TypesPrimitivesH256]
			> &
				QueryableStorageEntry<
					ApiType,
					[WebbProposalsHeaderTypedChainId, TypesPrimitivesH256]
				>;
			/**
			 * pay validator proof deposit
			 **/
			proofDeposit: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * reward for Proof of Submission
			 **/
			proofReward: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * the contract addresses we're watching
			 **/
			watchedContracts: AugmentedQuery<
				ApiType,
				(
					arg:
						| WebbProposalsHeaderTypedChainId
						| { None: any }
						| { Evm: any }
						| { Substrate: any }
						| { PolkadotParachain: any }
						| { KusamaParachain: any }
						| { RococoParachain: any }
						| { Cosmos: any }
						| { Solana: any }
						| { Ink: any }
						| string
						| Uint8Array,
				) => Observable<Option<Vec<TypesPrimitivesH160>>>,
				[WebbProposalsHeaderTypedChainId]
			> &
				QueryableStorageEntry<ApiType, [WebbProposalsHeaderTypedChainId]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		evm: {
			accountCodes: AugmentedQuery<
				ApiType,
				(arg: H160 | string | Uint8Array) => Observable<Bytes>,
				[H160]
			> &
				QueryableStorageEntry<ApiType, [H160]>;
			accountCodesMetadata: AugmentedQuery<
				ApiType,
				(
					arg: H160 | string | Uint8Array,
				) => Observable<Option<PalletEvmCodeMetadata>>,
				[H160]
			> &
				QueryableStorageEntry<ApiType, [H160]>;
			accountStorages: AugmentedQuery<
				ApiType,
				(
					arg1: H160 | string | Uint8Array,
					arg2: H256 | string | Uint8Array,
				) => Observable<H256>,
				[H160, H256]
			> &
				QueryableStorageEntry<ApiType, [H160, H256]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		evmChainId: {
			/**
			 * The EVM chain ID.
			 **/
			chainId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		fee: {
			/**
			 * The fraction up rewards going straight to the vault operator. The rest goes to the vault's pool.
			 **/
			commission: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultId
						| { accountId?: any; currencies?: any }
						| string
						| Uint8Array,
				) => Observable<Option<u128>>,
				[InterbtcPrimitivesVaultId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultId]>;
			/**
			 * # Issue
			 * Fee share that users need to pay to issue tokens.
			 **/
			issueFee: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Default griefing collateral (e.g. DOT/KSM) as a percentage of the locked
			 * collateral of a Vault a user has to lock to issue tokens.
			 **/
			issueGriefingCollateral: AugmentedQuery<
				ApiType,
				() => Observable<u128>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * # Vault Registry
			 * If users execute a redeem with a Vault flagged for premium redeem,
			 * they can earn a collateral premium, slashed from the Vault.
			 **/
			premiumRedeemFee: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Fee that a Vault has to pay if it fails to execute redeem or replace requests
			 * (for redeem, on top of the slashed value of the request). The fee is
			 * paid in collateral based on the token amount at the current exchange rate.
			 **/
			punishmentFee: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * # Redeem
			 * Fee share that users need to pay to redeem tokens.
			 **/
			redeemFee: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * # Replace
			 * Default griefing collateral (e.g. DOT/KSM) as a percentage of the to-be-locked collateral
			 * of the new Vault. This collateral will be slashed and allocated to the replacing Vault
			 * if the to-be-replaced Vault does not transfer BTC on time.
			 **/
			replaceGriefingCollateral: AugmentedQuery<
				ApiType,
				() => Observable<u128>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Build storage at V1 (requires default 0).
			 **/
			storageVersion: AugmentedQuery<
				ApiType,
				() => Observable<FeeVersion>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		grandpa: {
			/**
			 * The number of changes (both in terms of keys and underlying economic responsibilities)
			 * in the "set" of Grandpa validators from genesis.
			 **/
			currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * next block number where we can force a change.
			 **/
			nextForced: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Pending change: (signaled at, scheduled change).
			 **/
			pendingChange: AugmentedQuery<
				ApiType,
				() => Observable<Option<PalletGrandpaStoredPendingChange>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * A mapping from grandpa set ID to the index of the *most recent* session for which its
			 * members were responsible.
			 *
			 * This is only used for validating equivocation proofs. An equivocation proof must
			 * contains a key-ownership proof for a given session, therefore we need a way to tie
			 * together sessions and GRANDPA set ids, i.e. we need to validate that a validator
			 * was the owner of a given key on a given session, and what the active set ID was
			 * during that session.
			 *
			 * TWOX-NOTE: `SetId` is not under user control.
			 **/
			setIdSession: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * `true` if we are currently stalled.
			 **/
			stalled: AugmentedQuery<
				ApiType,
				() => Observable<Option<ITuple<[u32, u32]>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * State of the current authority set.
			 **/
			state: AugmentedQuery<
				ApiType,
				() => Observable<PalletGrandpaStoredState>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		historical: {
			/**
			 * Mapping from historical session indices to session-data root hash and validator count.
			 **/
			historicalSessions: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<Option<ITuple<[H256, u32]>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The range of historical sessions we store. [first, last)
			 **/
			storedRange: AugmentedQuery<
				ApiType,
				() => Observable<Option<ITuple<[u32, u32]>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		ibc: {
			/**
			 * key: AcksPath
			 * value: hash of acknowledgement
			 **/
			acknowledgements: AugmentedQuery<
				ApiType,
				(
					arg:
						| IbcCoreIcs24HostPathAcksPath
						| { portId?: any; channelId?: any; sequence?: any }
						| string
						| Uint8Array,
				) => Observable<Option<Bytes>>,
				[IbcCoreIcs24HostPathAcksPath]
			> &
				QueryableStorageEntry<ApiType, [IbcCoreIcs24HostPathAcksPath]>;
			/**
			 * channel counter
			 **/
			channelCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * key: CHannelEndsPath
			 * value: ChannelEnd
			 **/
			channels: AugmentedQuery<
				ApiType,
				(
					arg: IbcCoreIcs24HostPathChannelEndsPath,
				) => Observable<Option<IbcCoreIcs04ChannelChannelChannelEnd>>,
				[IbcCoreIcs24HostPathChannelEndsPath]
			> &
				QueryableStorageEntry<ApiType, [IbcCoreIcs24HostPathChannelEndsPath]>;
			/**
			 * key: connection_id
			 * value: Vec<(port_id, channel_id)>
			 **/
			channelsConnection: AugmentedQuery<
				ApiType,
				(arg: Text | string) => Observable<Option<Vec<ITuple<[Text, Text]>>>>,
				[Text]
			> &
				QueryableStorageEntry<ApiType, [Text]>;
			/**
			 * client counter
			 **/
			clientCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * key1: client_id
			 * key2: height
			 * value: host_height
			 **/
			clientProcessedHeights: AugmentedQuery<
				ApiType,
				(
					arg1: Text | string,
					arg2:
						| IbcCoreIcs02ClientHeight
						| { revisionNumber?: any; revisionHeight?: any }
						| string
						| Uint8Array,
				) => Observable<Option<IbcCoreIcs02ClientHeight>>,
				[Text, IbcCoreIcs02ClientHeight]
			> &
				QueryableStorageEntry<ApiType, [Text, IbcCoreIcs02ClientHeight]>;
			/**
			 * key1: client_id
			 * key2: height
			 * value: timestamp
			 **/
			clientProcessedTimes: AugmentedQuery<
				ApiType,
				(
					arg1: Text | string,
					arg2:
						| IbcCoreIcs02ClientHeight
						| { revisionNumber?: any; revisionHeight?: any }
						| string
						| Uint8Array,
				) => Observable<Option<u64>>,
				[Text, IbcCoreIcs02ClientHeight]
			> &
				QueryableStorageEntry<ApiType, [Text, IbcCoreIcs02ClientHeight]>;
			/**
			 * key: ClientTypePath
			 * value: ClientType
			 **/
			clients: AugmentedQuery<
				ApiType,
				(arg: Text | string) => Observable<Option<Text>>,
				[Text]
			> &
				QueryableStorageEntry<ApiType, [Text]>;
			/**
			 * Key: ClientStatePath
			 * value: ClientState
			 **/
			clientStates: AugmentedQuery<
				ApiType,
				(arg: Text | string) => Observable<Option<Bytes>>,
				[Text]
			> &
				QueryableStorageEntry<ApiType, [Text]>;
			/**
			 * key: ClientId
			 * value: ConnectionId
			 **/
			connectionClient: AugmentedQuery<
				ApiType,
				(arg: Text | string) => Observable<Option<Text>>,
				[Text]
			> &
				QueryableStorageEntry<ApiType, [Text]>;
			/**
			 * connection counter
			 **/
			connectionCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * key: ConnectionsPath
			 * value: ConnectionEnd
			 **/
			connections: AugmentedQuery<
				ApiType,
				(
					arg: Text | string,
				) => Observable<
					Option<IbcCoreIcs03ConnectionConnectionSealedConnectionEnd>
				>,
				[Text]
			> &
				QueryableStorageEntry<ApiType, [Text]>;
			/**
			 * key: ClientConsensusStatePath
			 * value: ConsensusState
			 **/
			consensusStates: AugmentedQuery<
				ApiType,
				(
					arg:
						| IbcCoreIcs24HostPathClientConsensusStatePath
						| { clientId?: any; epoch?: any; height?: any }
						| string
						| Uint8Array,
				) => Observable<Option<Bytes>>,
				[IbcCoreIcs24HostPathClientConsensusStatePath]
			> &
				QueryableStorageEntry<
					ApiType,
					[IbcCoreIcs24HostPathClientConsensusStatePath]
				>;
			/**
			 * key: height
			 * value: Ibc event height
			 **/
			ibcEventStore: AugmentedQuery<
				ApiType,
				(
					arg: u64 | AnyNumber | Uint8Array,
				) => Observable<Option<IbcEventsIbcEvent>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * key: SeqAcksPath
			 * value: sequence
			 **/
			nextSequenceAck: AugmentedQuery<
				ApiType,
				(arg: IbcCoreIcs24HostPathSeqAcksPath) => Observable<Option<u64>>,
				[IbcCoreIcs24HostPathSeqAcksPath]
			> &
				QueryableStorageEntry<ApiType, [IbcCoreIcs24HostPathSeqAcksPath]>;
			/**
			 * key: SeqRecvsPath
			 * value: sequence
			 **/
			nextSequenceRecv: AugmentedQuery<
				ApiType,
				(arg: IbcCoreIcs24HostPathSeqRecvsPath) => Observable<Option<u64>>,
				[IbcCoreIcs24HostPathSeqRecvsPath]
			> &
				QueryableStorageEntry<ApiType, [IbcCoreIcs24HostPathSeqRecvsPath]>;
			/**
			 * Key: SeqSendsPath
			 * value: sequence
			 **/
			nextSequenceSend: AugmentedQuery<
				ApiType,
				(arg: IbcCoreIcs24HostPathSeqSendsPath) => Observable<Option<u64>>,
				[IbcCoreIcs24HostPathSeqSendsPath]
			> &
				QueryableStorageEntry<ApiType, [IbcCoreIcs24HostPathSeqSendsPath]>;
			/**
			 * Previous host block height
			 **/
			oldHeight: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * key: CommitmentsPath
			 * value: hash of (timestamp, height, packet)
			 **/
			packetCommitment: AugmentedQuery<
				ApiType,
				(
					arg:
						| IbcCoreIcs24HostPathCommitmentsPath
						| { portId?: any; channelId?: any; sequence?: any }
						| string
						| Uint8Array,
				) => Observable<Option<Bytes>>,
				[IbcCoreIcs24HostPathCommitmentsPath]
			> &
				QueryableStorageEntry<ApiType, [IbcCoreIcs24HostPathCommitmentsPath]>;
			/**
			 * key: ReceiptsPath
			 * value: receipt
			 **/
			packetReceipt: AugmentedQuery<
				ApiType,
				(
					arg:
						| IbcCoreIcs24HostPathReceiptsPath
						| { portId?: any; channelId?: any; sequence?: any }
						| string
						| Uint8Array,
				) => Observable<Option<IbcCoreIcs04ChannelPacketReceipt>>,
				[IbcCoreIcs24HostPathReceiptsPath]
			> &
				QueryableStorageEntry<ApiType, [IbcCoreIcs24HostPathReceiptsPath]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		ics20Transfer: {
			/**
			 * (asset name) => asset id
			 **/
			assetIdByName: AugmentedQuery<
				ApiType,
				(arg: Bytes | string | Uint8Array) => Observable<u32>,
				[Bytes]
			> &
				QueryableStorageEntry<ApiType, [Bytes]>;
			denomTrace: AugmentedQuery<
				ApiType,
				(
					arg: Bytes | string | Uint8Array,
				) => Observable<Option<PalletIcs20TransferDenomPrefixedDenom>>,
				[Bytes]
			> &
				QueryableStorageEntry<ApiType, [Bytes]>;
			/**
			 * key: height
			 * value: Ibc event height
			 **/
			sendPacketStore: AugmentedQuery<
				ApiType,
				(
					arg: u64 | AnyNumber | Uint8Array,
				) => Observable<Option<IbcEventsIbcEvent>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		identity: {
			/**
			 * Information that is pertinent to identify the entity behind an account.
			 *
			 * TWOX-NOTE: OK ― `AccountId` is a secure hash.
			 **/
			identityOf: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<PalletIdentityRegistration>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The set of registrars. Not expected to get very big as can only be added through a
			 * special origin (likely a council motion).
			 *
			 * The index into this can be cast to `RegistrarIndex` to get a valid value.
			 **/
			registrars: AugmentedQuery<
				ApiType,
				() => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Alternative "sub" identities of this account.
			 *
			 * The first item is the deposit, the second is a vector of the accounts.
			 *
			 * TWOX-NOTE: OK ― `AccountId` is a secure hash.
			 **/
			subsOf: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<ITuple<[u128, Vec<AccountId32>]>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The super-identity of an alternative "sub" identity together with its name, within that
			 * context. If the account is not some other account's sub-identity, then just `None`.
			 **/
			superOf: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<ITuple<[AccountId32, Data]>>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		imOnline: {
			/**
			 * For each session index, we keep a mapping of `ValidatorId<T>` to the
			 * number of blocks authored by the given authority.
			 **/
			authoredBlocks: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<u32>,
				[u32, AccountId32]
			> &
				QueryableStorageEntry<ApiType, [u32, AccountId32]>;
			/**
			 * The block number after which it's ok to send heartbeats in the current
			 * session.
			 *
			 * At the beginning of each session we set this to a value that should fall
			 * roughly in the middle of the session duration. The idea is to first wait for
			 * the validators to produce a block in the current session, so that the
			 * heartbeat later on will not be necessary.
			 *
			 * This value will only be used as a fallback if we fail to get a proper session
			 * progress estimate from `NextSessionRotation`, as those estimates should be
			 * more accurate then the value we calculate for `HeartbeatAfter`.
			 **/
			heartbeatAfter: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current set of keys that may issue a heartbeat.
			 **/
			keys: AugmentedQuery<
				ApiType,
				() => Observable<Vec<PalletImOnlineSr25519AppSr25519Public>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * For each session index, we keep a mapping of `SessionIndex` and `AuthIndex` to
			 * `WrapperOpaque<BoundedOpaqueNetworkState>`.
			 **/
			receivedHeartbeats: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: u32 | AnyNumber | Uint8Array,
				) => Observable<
					Option<WrapperOpaque<PalletImOnlineBoundedOpaqueNetworkState>>
				>,
				[u32, u32]
			> &
				QueryableStorageEntry<ApiType, [u32, u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		indices: {
			/**
			 * The lookup from index to account.
			 **/
			accounts: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<Option<ITuple<[AccountId32, u128, bool]>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		issue: {
			/**
			 * The minimum amount of btc that is required for issue requests; lower values would
			 * risk the rejection of payment on Bitcoin.
			 **/
			issueBtcDustValue: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The time difference in number of blocks between an issue request is created
			 * and required completion time by a user. The issue period has an upper limit
			 * to prevent griefing of vault collateral.
			 **/
			issuePeriod: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Users create issue requests to issue tokens. This mapping provides access
			 * from a unique hash `IssueId` to an `IssueRequest` struct.
			 **/
			issueRequests: AugmentedQuery<
				ApiType,
				(
					arg: H256 | string | Uint8Array,
				) => Observable<Option<InterbtcPrimitivesIssueIssueRequest>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * Build storage at V1 (requires default 0).
			 **/
			storageVersion: AugmentedQuery<
				ApiType,
				() => Observable<IssueVersion>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		loans: {
			/**
			 * Mapping of account addresses to outstanding borrow balances
			 * CurrencyId -> Owner -> BorrowSnapshot
			 **/
			accountBorrows: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<LoansBorrowSnapshot>,
				[InterbtcPrimitivesCurrencyId, AccountId32]
			> &
				QueryableStorageEntry<
					ApiType,
					[InterbtcPrimitivesCurrencyId, AccountId32]
				>;
			/**
			 * Mapping of account addresses to collateral deposit details
			 * CollateralType -> Owner -> Collateral Deposits
			 *
			 * # Remarks
			 *
			 * Differently from Parallel Finance's implementation of lending, `AccountDeposits` only
			 * represents Lend Tokens locked as collateral rather than the entire Lend Token balance of an account.
			 * If an account minted without also locking their balance as collateral, their corresponding entry
			 * in this map will be zero.
			 **/
			accountDeposits: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId, AccountId32]
			> &
				QueryableStorageEntry<
					ApiType,
					[InterbtcPrimitivesCurrencyId, AccountId32]
				>;
			/**
			 * Accumulator of the total earned interest rate since the opening of the market
			 * CurrencyId -> u128
			 **/
			borrowIndex: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Mapping of borrow rate to currency type
			 **/
			borrowRate: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * The internal exchange rate from the associated lend token to the underlying currency.
			 **/
			exchangeRate: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * The timestamp of the last calculation of accrued interest
			 **/
			lastAccruedInterestTime: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u64>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Mapping of underlying currency id to its market
			 **/
			markets: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<Option<LoansMarket>>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * The maximum allowed exchange rate for a market.
			 **/
			maxExchangeRate: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum allowed exchange rate for a market. This is the starting rate when a market is first set up.
			 **/
			minExchangeRate: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The incentive reward accrued but not yet transferred to each user.
			 **/
			rewardAccrued: AugmentedQuery<
				ApiType,
				(arg: AccountId32 | string | Uint8Array) => Observable<u128>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The incentive reward index for each market for each borrower as of the last time they accrued Reward
			 **/
			rewardBorrowerIndex: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId, AccountId32]
			> &
				QueryableStorageEntry<
					ApiType,
					[InterbtcPrimitivesCurrencyId, AccountId32]
				>;
			/**
			 * Mapping of underlying currency id to borrow reward speed
			 **/
			rewardBorrowSpeed: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * The Reward market borrow state for each market
			 **/
			rewardBorrowState: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<LoansRewardMarketState>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * The incentive reward index for each market for each supplier as of the last time they accrued Reward
			 **/
			rewardSupplierIndex: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId, AccountId32]
			> &
				QueryableStorageEntry<
					ApiType,
					[InterbtcPrimitivesCurrencyId, AccountId32]
				>;
			/**
			 * Mapping of underlying currency id to supply reward speed
			 **/
			rewardSupplySpeed: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * The Reward market supply state for each market
			 **/
			rewardSupplyState: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<LoansRewardMarketState>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Storage version of the pallet.
			 **/
			storageVersion: AugmentedQuery<
				ApiType,
				() => Observable<LoansVersions>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Mapping of supply rate to currency type
			 **/
			supplyRate: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Total amount of outstanding borrows of the underlying in this market
			 * CurrencyId -> Balance
			 **/
			totalBorrows: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Total amount of reserves of the underlying held in this market
			 * CurrencyId -> Balance
			 **/
			totalReserves: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Mapping of lend_token id to underlying currency id
			 * `lend_token id`: voucher token id
			 * `asset id`: underlying token id
			 **/
			underlyingAssetId: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<Option<InterbtcPrimitivesCurrencyId>>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Borrow utilization ratio
			 **/
			utilizationRatio: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<Permill>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		mmr: {
			/**
			 * Hashes of the nodes in the MMR.
			 *
			 * Note this collection only contains MMR peaks, the inner nodes (and leaves)
			 * are pruned and only stored in the Offchain DB.
			 **/
			nodes: AugmentedQuery<
				ApiType,
				(arg: u64 | AnyNumber | Uint8Array) => Observable<Option<H256>>,
				[u64]
			> &
				QueryableStorageEntry<ApiType, [u64]>;
			/**
			 * Current size of the MMR (number of leaves).
			 **/
			numberOfLeaves: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Latest MMR Root hash.
			 **/
			rootHash: AugmentedQuery<ApiType, () => Observable<H256>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		mmrLeaf: {
			/**
			 * Details of current BEEFY authority set.
			 **/
			beefyAuthorities: AugmentedQuery<
				ApiType,
				() => Observable<SpConsensusBeefyMmrBeefyAuthoritySet>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Details of next BEEFY authority set.
			 *
			 * This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
			 **/
			beefyNextAuthorities: AugmentedQuery<
				ApiType,
				() => Observable<SpConsensusBeefyMmrBeefyAuthoritySet>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		multisig: {
			/**
			 * The set of open multisig operations.
			 **/
			multisigs: AugmentedQuery<
				ApiType,
				(
					arg1: AccountId32 | string | Uint8Array,
					arg2: U8aFixed | string | Uint8Array,
				) => Observable<Option<PalletMultisigMultisig>>,
				[AccountId32, U8aFixed]
			> &
				QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		nomination: {
			/**
			 * Flag indicating whether this feature is enabled
			 **/
			nominationEnabled: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The maximum amount of collateral to be nominated for a given vault.
			 **/
			nominationLimit: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultId
						| { accountId?: any; currencies?: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesVaultId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultId]>;
			/**
			 * Map of Vaults who have enabled nomination
			 **/
			vaults: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultId
						| { accountId?: any; currencies?: any }
						| string
						| Uint8Array,
				) => Observable<bool>,
				[InterbtcPrimitivesVaultId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultId]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		offences: {
			/**
			 * A vector of reports of the same kind that happened at the same time slot.
			 **/
			concurrentReportsIndex: AugmentedQuery<
				ApiType,
				(
					arg1: U8aFixed | string | Uint8Array,
					arg2: Bytes | string | Uint8Array,
				) => Observable<Vec<H256>>,
				[U8aFixed, Bytes]
			> &
				QueryableStorageEntry<ApiType, [U8aFixed, Bytes]>;
			/**
			 * The primary structure that holds all offence records keyed by report identifiers.
			 **/
			reports: AugmentedQuery<
				ApiType,
				(
					arg: H256 | string | Uint8Array,
				) => Observable<Option<SpStakingOffenceOffenceDetails>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		oracle: {
			/**
			 * Current medianized value for the given key
			 **/
			aggregate: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesOracleKey
						| { ExchangeRate: any }
						| { FeeEstimation: any }
						| string
						| Uint8Array,
				) => Observable<Option<u128>>,
				[InterbtcPrimitivesOracleKey]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesOracleKey]>;
			authorizedOracles: AugmentedQuery<
				ApiType,
				(arg: AccountId32 | string | Uint8Array) => Observable<Bytes>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Maximum delay (milliseconds) for a reported value to be used
			 **/
			maxDelay: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			rawValues: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesOracleKey
						| { ExchangeRate: any }
						| { FeeEstimation: any }
						| string
						| Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<Option<OracleTimestampedValue>>,
				[InterbtcPrimitivesOracleKey, AccountId32]
			> &
				QueryableStorageEntry<
					ApiType,
					[InterbtcPrimitivesOracleKey, AccountId32]
				>;
			/**
			 * if a key is present, it means the values have been updated
			 **/
			rawValuesUpdated: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesOracleKey
						| { ExchangeRate: any }
						| { FeeEstimation: any }
						| string
						| Uint8Array,
				) => Observable<Option<bool>>,
				[InterbtcPrimitivesOracleKey]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesOracleKey]>;
			/**
			 * Build storage at V1 (requires default 0).
			 **/
			storageVersion: AugmentedQuery<
				ApiType,
				() => Observable<OracleVersion>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Time until which the aggregate is valid
			 **/
			validUntil: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesOracleKey
						| { ExchangeRate: any }
						| { FeeEstimation: any }
						| string
						| Uint8Array,
				) => Observable<Option<u64>>,
				[InterbtcPrimitivesOracleKey]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesOracleKey]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		preimage: {
			preimageFor: AugmentedQuery<
				ApiType,
				(
					arg:
						| ITuple<[H256, u32]>
						| [H256 | string | Uint8Array, u32 | AnyNumber | Uint8Array],
				) => Observable<Option<Bytes>>,
				[ITuple<[H256, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[H256, u32]>]>;
			/**
			 * The request status of a given hash.
			 **/
			statusFor: AugmentedQuery<
				ApiType,
				(
					arg: H256 | string | Uint8Array,
				) => Observable<Option<PalletPreimageRequestStatus>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		proxy: {
			/**
			 * The announcements made by the proxy (key).
			 **/
			announcements: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The set of account proxies. Maps the account which has delegated to the accounts
			 * which are being delegated to, together with the amount held on deposit.
			 **/
			proxies: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		randomnessCollectiveFlip: {
			/**
			 * Series of block headers from the last 81 blocks that acts as random seed material. This
			 * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
			 * the oldest hash.
			 **/
			randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		redeem: {
			/**
			 * The minimum amount of btc that is accepted for redeem requests; any lower values would
			 * risk the bitcoin client to reject the payment
			 **/
			redeemBtcDustValue: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The time difference in number of blocks between a redeem request is created and required completion time by a
			 * vault. The redeem period has an upper limit to ensure the user gets their BTC in time and to potentially
			 * punish a vault for inactivity or stealing BTC.
			 **/
			redeemPeriod: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Users create redeem requests to receive BTC in return for their previously issued tokens.
			 * This mapping provides access from a unique hash redeemId to a Redeem struct.
			 **/
			redeemRequests: AugmentedQuery<
				ApiType,
				(
					arg: H256 | string | Uint8Array,
				) => Observable<Option<InterbtcPrimitivesRedeemRedeemRequest>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * the expected size in bytes of the redeem bitcoin transfer
			 **/
			redeemTransactionSize: AugmentedQuery<
				ApiType,
				() => Observable<u32>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Build storage at V1 (requires default 0).
			 **/
			storageVersion: AugmentedQuery<
				ApiType,
				() => Observable<RedeemVersion>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		referenda: {
			/**
			 * The number of referenda being decided currently.
			 **/
			decidingCount: AugmentedQuery<
				ApiType,
				(arg: u16 | AnyNumber | Uint8Array) => Observable<u32>,
				[u16]
			> &
				QueryableStorageEntry<ApiType, [u16]>;
			/**
			 * The metadata is a general information concerning the referendum.
			 * The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
			 * dump or IPFS hash of a JSON file.
			 *
			 * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
			 * large preimages.
			 **/
			metadataOf: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<H256>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The next free referendum index, aka the number of referenda started so far.
			 **/
			referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Information concerning any given referendum.
			 **/
			referendumInfoFor: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<Option<PalletReferendaReferendumInfo>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The sorted list of referenda ready to be decided but not yet being decided, ordered by
			 * conviction-weighted approvals.
			 *
			 * This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
			 **/
			trackQueue: AugmentedQuery<
				ApiType,
				(
					arg: u16 | AnyNumber | Uint8Array,
				) => Observable<Vec<ITuple<[u32, u128]>>>,
				[u16]
			> &
				QueryableStorageEntry<ApiType, [u16]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		replace: {
			/**
			 * The minimum amount of btc that is accepted for replace requests; any lower values would
			 * risk the bitcoin client to reject the payment
			 **/
			replaceBtcDustValue: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The time difference in number of blocks between when a replace request is created
			 * and required completion time by a vault. The replace period has an upper limit
			 * to prevent griefing of vault collateral.
			 **/
			replacePeriod: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Vaults create replace requests to transfer locked collateral.
			 * This mapping provides access from a unique hash to a `ReplaceRequest`.
			 **/
			replaceRequests: AugmentedQuery<
				ApiType,
				(
					arg: H256 | string | Uint8Array,
				) => Observable<Option<InterbtcPrimitivesReplaceReplaceRequest>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * Build storage at V1 (requires default 0).
			 **/
			storageVersion: AugmentedQuery<
				ApiType,
				() => Observable<ReplaceVersion>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		runtimeSpecification: {
			specification: AugmentedQuery<
				ApiType,
				() => Observable<RuntimeCommonChainSpecRuntimeConfig>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		scheduler: {
			/**
			 * Items to be executed, indexed by the block number that they should be executed on.
			 **/
			agenda: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<Vec<Option<PalletSchedulerScheduled>>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			incompleteSince: AugmentedQuery<
				ApiType,
				() => Observable<Option<u32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Lookup from a name to the block number and index of the task.
			 *
			 * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
			 * identities.
			 **/
			lookup: AugmentedQuery<
				ApiType,
				(
					arg: U8aFixed | string | Uint8Array,
				) => Observable<Option<ITuple<[u32, u32]>>>,
				[U8aFixed]
			> &
				QueryableStorageEntry<ApiType, [U8aFixed]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		security: {
			/**
			 * Like frame_system::block_number, but this one only increments if the parachain status is RUNNING.
			 * This variable is used to keep track of durations, such as the issue/redeem/replace expiry. If the
			 * parachain is not RUNNING, no payment proofs can be submitted, and it wouldn't be fair to punish
			 * the user/vault. By using this variable we ensure that they have sufficient time to submit their
			 * proof.
			 **/
			activeBlockCount: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			isDeactivated: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Integer increment-only counter, used to prevent collisions when generating identifiers
			 * for e.g. issue, redeem or replace requests (for OP_RETURN field in Bitcoin).
			 **/
			nonce: AugmentedQuery<ApiType, () => Observable<U256>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		session: {
			/**
			 * Current index of the session.
			 **/
			currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Indices of disabled validators.
			 *
			 * The vec is always kept sorted so that we can find whether a given validator is
			 * disabled using binary search. It gets cleared when `on_session_ending` returns
			 * a new set of identities.
			 **/
			disabledValidators: AugmentedQuery<
				ApiType,
				() => Observable<Vec<u32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The owner of a key. The key is the `KeyTypeId` + the encoded key.
			 **/
			keyOwner: AugmentedQuery<
				ApiType,
				(
					arg:
						| ITuple<[SpCoreCryptoKeyTypeId, Bytes]>
						| [
								SpCoreCryptoKeyTypeId | string | Uint8Array,
								Bytes | string | Uint8Array,
						  ],
				) => Observable<Option<AccountId32>>,
				[ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]
			> &
				QueryableStorageEntry<
					ApiType,
					[ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]
				>;
			/**
			 * The next session keys for a validator.
			 **/
			nextKeys: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<GgxchainRuntimeBrooklynOpaqueSessionKeys>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * True if the underlying economic identities or weighting behind the validators
			 * has changed in the queued validator set.
			 **/
			queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The queued keys for the next session. When the next session begins, these keys
			 * will be used to determine the validator's session keys.
			 **/
			queuedKeys: AugmentedQuery<
				ApiType,
				() => Observable<
					Vec<ITuple<[AccountId32, GgxchainRuntimeBrooklynOpaqueSessionKeys]>>
				>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current set of validators.
			 **/
			validators: AugmentedQuery<
				ApiType,
				() => Observable<Vec<AccountId32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		sessionPayout: {
			/**
			 * Tracks current era to know when to rotate LastEraPoints.
			 **/
			lastEra: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Tracks session points change per each validator.
			 **/
			lastEraPoints: AugmentedQuery<
				ApiType,
				() => Observable<PalletStakingEraRewardPoints>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Start time to calculate session reward percentage.
			 **/
			sessionStartTime: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Algorithm how to calculate validator percent comission to nominators.
			 **/
			validatorToNominatorCommissionAlgorithm: AugmentedQuery<
				ApiType,
				() => Observable<RuntimeCommonPosSessionPayoutValidatorCommissionAlgorithm>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Year reward pool amount to prevent compounding. It updates every year.
			 **/
			yearReward: AugmentedQuery<
				ApiType,
				() => Observable<ITuple<[u128, u128]>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		society: {
			/**
			 * The current bids, stored ordered by the value of the bid.
			 **/
			bids: AugmentedQuery<
				ApiType,
				() => Observable<Vec<PalletSocietyBid>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current set of candidates; bidders that are attempting to become members.
			 **/
			candidates: AugmentedQuery<
				ApiType,
				() => Observable<Vec<PalletSocietyBid>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The defending member currently being challenged.
			 **/
			defender: AugmentedQuery<
				ApiType,
				() => Observable<Option<AccountId32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Votes for the defender.
			 **/
			defenderVotes: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<PalletSocietyVote>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The first member.
			 **/
			founder: AugmentedQuery<
				ApiType,
				() => Observable<Option<AccountId32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The most primary from the most recently approved members.
			 **/
			head: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The max number of members for the society at one time.
			 **/
			maxMembers: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current set of members, ordered.
			 **/
			members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Pending payouts; ordered by block number, with the amount that should be paid out.
			 **/
			payouts: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Vec<ITuple<[u32, u128]>>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Amount of our account balance that is specifically for the next round's bid(s).
			 **/
			pot: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * A hash of the rules of this society concerning membership. Can only be set once and
			 * only by the founder.
			 **/
			rules: AugmentedQuery<ApiType, () => Observable<Option<H256>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The ongoing number of losing votes cast by the member.
			 **/
			strikes: AugmentedQuery<
				ApiType,
				(arg: AccountId32 | string | Uint8Array) => Observable<u32>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The set of suspended candidates.
			 **/
			suspendedCandidates: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<ITuple<[u128, PalletSocietyBidKind]>>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The set of suspended members.
			 **/
			suspendedMembers: AugmentedQuery<
				ApiType,
				(arg: AccountId32 | string | Uint8Array) => Observable<bool>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Double map from Candidate -> Voter -> (Maybe) Vote.
			 **/
			votes: AugmentedQuery<
				ApiType,
				(
					arg1: AccountId32 | string | Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<Option<PalletSocietyVote>>,
				[AccountId32, AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32, AccountId32]>;
			/**
			 * Members currently vouching or banned from vouching again
			 **/
			vouching: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<PalletSocietyVouchingStatus>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		staking: {
			/**
			 * The active era information, it holds index and start.
			 *
			 * The active era is the era being currently rewarded. Validator set of this era must be
			 * equal to [`SessionInterface::validators`].
			 **/
			activeEra: AugmentedQuery<
				ApiType,
				() => Observable<Option<PalletStakingActiveEraInfo>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Map from all locked "stash" accounts to the controller account.
			 *
			 * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
			 **/
			bonded: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<AccountId32>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * A mapping from still-bonded eras to the first session index of that era.
			 *
			 * Must contains information for eras for the range:
			 * `[active_era - bounding_duration; active_era]`
			 **/
			bondedEras: AugmentedQuery<
				ApiType,
				() => Observable<Vec<ITuple<[u32, u32]>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The amount of currency given to reporters of a slash event which was
			 * canceled by extraordinary circumstances (e.g. governance).
			 **/
			canceledSlashPayout: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The threshold for when users can start calling `chill_other` for other validators /
			 * nominators. The threshold is compared to the actual number of validators / nominators
			 * (`CountFor*`) in the system compared to the configured max (`Max*Count`).
			 **/
			chillThreshold: AugmentedQuery<
				ApiType,
				() => Observable<Option<Percent>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Counter for the related counted storage map
			 **/
			counterForNominators: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Counter for the related counted storage map
			 **/
			counterForValidators: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current era index.
			 *
			 * This is the latest planned era, depending on how the Session pallet queues the validator
			 * set, it might be active or not.
			 **/
			currentEra: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The last planned session scheduled by the session pallet.
			 *
			 * This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
			 **/
			currentPlannedSession: AugmentedQuery<
				ApiType,
				() => Observable<u32>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Rewards for the last `HISTORY_DEPTH` eras.
			 * If reward hasn't been set or has been removed then 0 reward is returned.
			 **/
			erasRewardPoints: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<PalletStakingEraRewardPoints>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Exposure of validator at era.
			 *
			 * This is keyed first by the era index to allow bulk deletion and then the stash account.
			 *
			 * Is it removed after `HISTORY_DEPTH` eras.
			 * If stakers hasn't been set or has been removed then empty exposure is returned.
			 **/
			erasStakers: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<PalletStakingExposure>,
				[u32, AccountId32]
			> &
				QueryableStorageEntry<ApiType, [u32, AccountId32]>;
			/**
			 * Clipped Exposure of validator at era.
			 *
			 * This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
			 * `T::MaxNominatorRewardedPerValidator` biggest stakers.
			 * (Note: the field `total` and `own` of the exposure remains unchanged).
			 * This is used to limit the i/o cost for the nominator payout.
			 *
			 * This is keyed fist by the era index to allow bulk deletion and then the stash account.
			 *
			 * Is it removed after `HISTORY_DEPTH` eras.
			 * If stakers hasn't been set or has been removed then empty exposure is returned.
			 **/
			erasStakersClipped: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<PalletStakingExposure>,
				[u32, AccountId32]
			> &
				QueryableStorageEntry<ApiType, [u32, AccountId32]>;
			/**
			 * The session index at which the era start for the last `HISTORY_DEPTH` eras.
			 *
			 * Note: This tracks the starting session (i.e. session index when era start being active)
			 * for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
			 **/
			erasStartSessionIndex: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The total amount staked for the last `HISTORY_DEPTH` eras.
			 * If total hasn't been set or has been removed then 0 stake is returned.
			 **/
			erasTotalStake: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<u128>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Similar to `ErasStakers`, this holds the preferences of validators.
			 *
			 * This is keyed first by the era index to allow bulk deletion and then the stash account.
			 *
			 * Is it removed after `HISTORY_DEPTH` eras.
			 **/
			erasValidatorPrefs: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<PalletStakingValidatorPrefs>,
				[u32, AccountId32]
			> &
				QueryableStorageEntry<ApiType, [u32, AccountId32]>;
			/**
			 * The total validator era payout for the last `HISTORY_DEPTH` eras.
			 *
			 * Eras that haven't finished yet or has been removed doesn't have reward.
			 **/
			erasValidatorReward: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u128>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Mode of era forcing.
			 **/
			forceEra: AugmentedQuery<
				ApiType,
				() => Observable<PalletStakingForcing>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
			 * easy to initialize and the performance hit is minimal (we expect no more than four
			 * invulnerables) and restricted to testnets.
			 **/
			invulnerables: AugmentedQuery<
				ApiType,
				() => Observable<Vec<AccountId32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Map from all (unlocked) "controller" accounts to the info regarding the staking.
			 **/
			ledger: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<PalletStakingStakingLedger>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The maximum nominator count before we stop allowing new validators to join.
			 *
			 * When this value is not set, no limits are enforced.
			 **/
			maxNominatorsCount: AugmentedQuery<
				ApiType,
				() => Observable<Option<u32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The maximum validator count before we stop allowing new validators to join.
			 *
			 * When this value is not set, no limits are enforced.
			 **/
			maxValidatorsCount: AugmentedQuery<
				ApiType,
				() => Observable<Option<u32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum amount of commission that validators can set.
			 *
			 * If set to `0`, no limit exists.
			 **/
			minCommission: AugmentedQuery<ApiType, () => Observable<Perbill>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum active nominator stake of the last successful election.
			 **/
			minimumActiveStake: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Minimum number of staking participants before emergency conditions are imposed.
			 **/
			minimumValidatorCount: AugmentedQuery<
				ApiType,
				() => Observable<u32>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum active bond to become and maintain the role of a nominator.
			 **/
			minNominatorBond: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The minimum active bond to become and maintain the role of a validator.
			 **/
			minValidatorBond: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The map from nominator stash key to their nomination preferences, namely the validators that
			 * they wish to support.
			 *
			 * Note that the keys of this storage map might become non-decodable in case the
			 * [`Config::MaxNominations`] configuration is decreased. In this rare case, these nominators
			 * are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
			 * indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
			 * nominators will effectively not-exist, until they re-submit their preferences such that it
			 * is within the bounds of the newly set `Config::MaxNominations`.
			 *
			 * This implies that `::iter_keys().count()` and `::iter().count()` might return different
			 * values for this map. Moreover, the main `::count()` is aligned with the former, namely the
			 * number of keys that exist.
			 *
			 * Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
			 * [`Call::chill_other`] dispatchable by anyone.
			 *
			 * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
			 **/
			nominators: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<PalletStakingNominations>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * All slashing events on nominators, mapped by era to the highest slash value of the era.
			 **/
			nominatorSlashInEra: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<Option<u128>>,
				[u32, AccountId32]
			> &
				QueryableStorageEntry<ApiType, [u32, AccountId32]>;
			/**
			 * Indices of validators that have offended in the active era and whether they are currently
			 * disabled.
			 *
			 * This value should be a superset of disabled validators since not all offences lead to the
			 * validator being disabled (if there was no slash). This is needed to track the percentage of
			 * validators that have offended in the current era, ensuring a new era is forced if
			 * `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
			 * whether a given validator has previously offended using binary search. It gets cleared when
			 * the era ends.
			 **/
			offendingValidators: AugmentedQuery<
				ApiType,
				() => Observable<Vec<ITuple<[u32, bool]>>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Where the reward payment should be made. Keyed by stash.
			 *
			 * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
			 **/
			payee: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<PalletStakingRewardDestination>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Slashing spans for stash accounts.
			 **/
			slashingSpans: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<PalletStakingSlashingSlashingSpans>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * The percentage of the slash that is distributed to reporters.
			 *
			 * The rest of the slashed value is handled by the `Slash`.
			 **/
			slashRewardFraction: AugmentedQuery<
				ApiType,
				() => Observable<Perbill>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Records information about the maximum slash of a stash within a slashing span,
			 * as well as how much reward has been paid out.
			 **/
			spanSlash: AugmentedQuery<
				ApiType,
				(
					arg:
						| ITuple<[AccountId32, u32]>
						| [AccountId32 | string | Uint8Array, u32 | AnyNumber | Uint8Array],
				) => Observable<PalletStakingSlashingSpanRecord>,
				[ITuple<[AccountId32, u32]>]
			> &
				QueryableStorageEntry<ApiType, [ITuple<[AccountId32, u32]>]>;
			/**
			 * All unapplied slashes that are queued for later.
			 **/
			unappliedSlashes: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<Vec<PalletStakingUnappliedSlash>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The ideal number of active validators.
			 **/
			validatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The map from (wannabe) validator stash key to the preferences of that validator.
			 *
			 * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
			 **/
			validators: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<PalletStakingValidatorPrefs>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * All slashing events on validators, mapped by era to the highest slash proportion
			 * and slash value of the era.
			 **/
			validatorSlashInEra: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2: AccountId32 | string | Uint8Array,
				) => Observable<Option<ITuple<[Perbill, u128]>>>,
				[u32, AccountId32]
			> &
				QueryableStorageEntry<ApiType, [u32, AccountId32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		sudo: {
			/**
			 * The `AccountId` of the sudo key.
			 **/
			key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		system: {
			/**
			 * The full account information for a particular account ID.
			 **/
			account: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<FrameSystemAccountInfo>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Total length (in bytes) for all extrinsics put together, for the current block.
			 **/
			allExtrinsicsLen: AugmentedQuery<
				ApiType,
				() => Observable<Option<u32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Map of block numbers to block hashes.
			 **/
			blockHash: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<H256>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * The current weight for the block.
			 **/
			blockWeight: AugmentedQuery<
				ApiType,
				() => Observable<FrameSupportDispatchPerDispatchClassWeight>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Digest of the current block, also part of the block header.
			 **/
			digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The number of events in the `Events<T>` list.
			 **/
			eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Events deposited for the current block.
			 *
			 * NOTE: The item is unbound and should therefore never be read on chain.
			 * It could otherwise inflate the PoV size of a block.
			 *
			 * Events have a large in-memory size. Box the events to not go out-of-memory
			 * just in case someone still reads them from within the runtime.
			 **/
			events: AugmentedQuery<
				ApiType,
				() => Observable<Vec<FrameSystemEventRecord>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Mapping between a topic (represented by T::Hash) and a vector of indexes
			 * of events in the `<Events<T>>` list.
			 *
			 * All topic vectors have deterministic storage locations depending on the topic. This
			 * allows light-clients to leverage the changes trie storage tracking mechanism and
			 * in case of changes fetch the list of events of interest.
			 *
			 * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
			 * the `EventIndex` then in case if the topic has the same contents on the next block
			 * no notification will be triggered thus the event might be lost.
			 **/
			eventTopics: AugmentedQuery<
				ApiType,
				(
					arg: H256 | string | Uint8Array,
				) => Observable<Vec<ITuple<[u32, u32]>>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * The execution phase of the block.
			 **/
			executionPhase: AugmentedQuery<
				ApiType,
				() => Observable<Option<FrameSystemPhase>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Total extrinsics count for the current block.
			 **/
			extrinsicCount: AugmentedQuery<
				ApiType,
				() => Observable<Option<u32>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Extrinsics data for the current block (maps an extrinsic's index to its data).
			 **/
			extrinsicData: AugmentedQuery<
				ApiType,
				(arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
			 **/
			lastRuntimeUpgrade: AugmentedQuery<
				ApiType,
				() => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The current block number being processed. Set by `execute_block`.
			 **/
			number: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Hash of the previous block.
			 **/
			parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
			 * (default) if not.
			 **/
			upgradedToTripleRefCount: AugmentedQuery<
				ApiType,
				() => Observable<bool>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
			 **/
			upgradedToU32RefCount: AugmentedQuery<
				ApiType,
				() => Observable<bool>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		timestamp: {
			/**
			 * Did the timestamp get updated in this block?
			 **/
			didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Current time for the current block.
			 **/
			now: AugmentedQuery<ApiType, () => Observable<u64>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		tokens: {
			/**
			 * The balance of a token type under an account.
			 *
			 * NOTE: If the total is ever zero, decrease account ref account.
			 *
			 * NOTE: This is only used in the case that this module is used to store
			 * balances.
			 **/
			accounts: AugmentedQuery<
				ApiType,
				(
					arg1: AccountId32 | string | Uint8Array,
					arg2:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<OrmlTokensAccountData>,
				[AccountId32, InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<
					ApiType,
					[AccountId32, InterbtcPrimitivesCurrencyId]
				>;
			/**
			 * Any liquidity locks of a token type under an account.
			 * NOTE: Should only be accessed when setting, changing and freeing a lock.
			 **/
			locks: AugmentedQuery<
				ApiType,
				(
					arg1: AccountId32 | string | Uint8Array,
					arg2:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<Vec<OrmlTokensBalanceLock>>,
				[AccountId32, InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<
					ApiType,
					[AccountId32, InterbtcPrimitivesCurrencyId]
				>;
			/**
			 * Named reserves on some account balances.
			 **/
			reserves: AugmentedQuery<
				ApiType,
				(
					arg1: AccountId32 | string | Uint8Array,
					arg2:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<Vec<OrmlTokensReserveData>>,
				[AccountId32, InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<
					ApiType,
					[AccountId32, InterbtcPrimitivesCurrencyId]
				>;
			/**
			 * The total issuance of a token type.
			 **/
			totalIssuance: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		transactionPayment: {
			nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			storageVersion: AugmentedQuery<
				ApiType,
				() => Observable<PalletTransactionPaymentReleases>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		treasury: {
			/**
			 * Proposal indices that have been approved but not yet awarded.
			 **/
			approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * The amount which has been reported as inactive to Currency.
			 **/
			deactivated: AugmentedQuery<ApiType, () => Observable<u128>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Number of proposals that have been made.
			 **/
			proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Proposals that have been made.
			 **/
			proposals: AugmentedQuery<
				ApiType,
				(
					arg: u32 | AnyNumber | Uint8Array,
				) => Observable<Option<PalletTreasuryProposal>>,
				[u32]
			> &
				QueryableStorageEntry<ApiType, [u32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		vaultCapacity: {
			/**
			 * Track the currencies used for rewards.
			 **/
			rewardCurrencies: AugmentedQuery<
				ApiType,
				(
					arg: Null | null,
				) => Observable<BTreeSet<InterbtcPrimitivesCurrencyId>>,
				[Null]
			> &
				QueryableStorageEntry<ApiType, [Null]>;
			/**
			 * Used to compute the rewards for a participant's stake.
			 **/
			rewardPerToken: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2: Null | null,
				) => Observable<i128>,
				[InterbtcPrimitivesCurrencyId, Null]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId, Null]>;
			/**
			 * Accounts for previous changes in stake size.
			 **/
			rewardTally: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2:
						| ITuple<[Null, InterbtcPrimitivesCurrencyId]>
						| [
								Null | null,
								(
									| InterbtcPrimitivesCurrencyId
									| { Token: any }
									| { ForeignAsset: any }
									| { LendToken: any }
									| { LpToken: any }
									| { StableLpToken: any }
									| string
									| Uint8Array
								),
						  ],
				) => Observable<i128>,
				[
					InterbtcPrimitivesCurrencyId,
					ITuple<[Null, InterbtcPrimitivesCurrencyId]>,
				]
			> &
				QueryableStorageEntry<
					ApiType,
					[
						InterbtcPrimitivesCurrencyId,
						ITuple<[Null, InterbtcPrimitivesCurrencyId]>,
					]
				>;
			/**
			 * The stake of a participant in this reward pool.
			 **/
			stake: AugmentedQuery<
				ApiType,
				(
					arg:
						| ITuple<[Null, InterbtcPrimitivesCurrencyId]>
						| [
								Null | null,
								(
									| InterbtcPrimitivesCurrencyId
									| { Token: any }
									| { ForeignAsset: any }
									| { LendToken: any }
									| { LpToken: any }
									| { StableLpToken: any }
									| string
									| Uint8Array
								),
						  ],
				) => Observable<i128>,
				[ITuple<[Null, InterbtcPrimitivesCurrencyId]>]
			> &
				QueryableStorageEntry<
					ApiType,
					[ITuple<[Null, InterbtcPrimitivesCurrencyId]>]
				>;
			/**
			 * The total unclaimed rewards distributed to this reward pool.
			 * NOTE: this is currently only used for integration tests.
			 **/
			totalRewards: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<i128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * The total stake deposited to this reward pool.
			 **/
			totalStake: AugmentedQuery<
				ApiType,
				(arg: Null | null) => Observable<i128>,
				[Null]
			> &
				QueryableStorageEntry<ApiType, [Null]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		vaultRegistry: {
			/**
			 * Determines the lower bound for the collateral rate in issued tokens. If a Vault’s
			 * collateral rate drops below this, automatic liquidation (forced Redeem) is triggered.
			 **/
			liquidationCollateralThreshold: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultCurrencyPair
						| { collateral?: any; wrapped?: any }
						| string
						| Uint8Array,
				) => Observable<Option<u128>>,
				[InterbtcPrimitivesVaultCurrencyPair]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultCurrencyPair]>;
			liquidationVault: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultCurrencyPair
						| { collateral?: any; wrapped?: any }
						| string
						| Uint8Array,
				) => Observable<Option<VaultRegistrySystemVault>>,
				[InterbtcPrimitivesVaultCurrencyPair]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultCurrencyPair]>;
			/**
			 * The minimum collateral (e.g. DOT/KSM) a Vault needs to provide to register.
			 **/
			minimumCollateralVault: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Determines the rate for the collateral rate of Vaults, at which users receive a premium,
			 * allocated from the Vault's collateral, when performing a redeem with this Vault. This
			 * threshold should be greater than the LiquidationCollateralThreshold.
			 **/
			premiumRedeemThreshold: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultCurrencyPair
						| { collateral?: any; wrapped?: any }
						| string
						| Uint8Array,
				) => Observable<Option<u128>>,
				[InterbtcPrimitivesVaultCurrencyPair]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultCurrencyPair]>;
			/**
			 * If a Vault fails to execute a correct redeem or replace, it is temporarily banned
			 * from further issue, redeem or replace requests. This value configures the duration
			 * of this ban (in number of blocks) .
			 **/
			punishmentDelay: AugmentedQuery<ApiType, () => Observable<u32>, []> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Mapping of reserved BTC addresses to the registered account
			 **/
			reservedAddresses: AugmentedQuery<
				ApiType,
				(
					arg:
						| BitcoinAddress
						| { P2PKH: any }
						| { P2SH: any }
						| { P2WPKHv0: any }
						| { P2WSHv0: any }
						| string
						| Uint8Array,
				) => Observable<Option<InterbtcPrimitivesVaultId>>,
				[BitcoinAddress]
			> &
				QueryableStorageEntry<ApiType, [BitcoinAddress]>;
			/**
			 * Determines the over-collateralization rate for collateral locked by Vaults, necessary for
			 * wrapped tokens. This threshold should be greater than the LiquidationCollateralThreshold.
			 **/
			secureCollateralThreshold: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultCurrencyPair
						| { collateral?: any; wrapped?: any }
						| string
						| Uint8Array,
				) => Observable<Option<u128>>,
				[InterbtcPrimitivesVaultCurrencyPair]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultCurrencyPair]>;
			/**
			 * Pallet storage version
			 **/
			storageVersion: AugmentedQuery<
				ApiType,
				() => Observable<VaultRegistryVersion>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Determines the over-collateralization rate for collateral locked by Vaults, necessary for
			 * wrapped tokens. This threshold should be greater than the LiquidationCollateralThreshold.
			 **/
			systemCollateralCeiling: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultCurrencyPair
						| { collateral?: any; wrapped?: any }
						| string
						| Uint8Array,
				) => Observable<Option<u128>>,
				[InterbtcPrimitivesVaultCurrencyPair]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultCurrencyPair]>;
			/**
			 * Total collateral used for collateral tokens issued by active vaults, excluding the liquidation vault
			 **/
			totalUserVaultCollateral: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultCurrencyPair
						| { collateral?: any; wrapped?: any }
						| string
						| Uint8Array,
				) => Observable<u128>,
				[InterbtcPrimitivesVaultCurrencyPair]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultCurrencyPair]>;
			/**
			 * Mapping of Vaults, using the respective Vault account identifier as key.
			 **/
			vaultBitcoinPublicKey: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<BitcoinAddressPublicKey>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Mapping of Vaults, using the respective Vault account identifier as key.
			 **/
			vaults: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultId
						| { accountId?: any; currencies?: any }
						| string
						| Uint8Array,
				) => Observable<Option<VaultRegistryVault>>,
				[InterbtcPrimitivesVaultId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultId]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		vaultRewards: {
			/**
			 * Track the currencies used for rewards.
			 **/
			rewardCurrencies: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<BTreeSet<InterbtcPrimitivesCurrencyId>>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Used to compute the rewards for a participant's stake.
			 **/
			rewardPerToken: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<i128>,
				[InterbtcPrimitivesCurrencyId, InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<
					ApiType,
					[InterbtcPrimitivesCurrencyId, InterbtcPrimitivesCurrencyId]
				>;
			/**
			 * Accounts for previous changes in stake size.
			 **/
			rewardTally: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2:
						| ITuple<[InterbtcPrimitivesCurrencyId, InterbtcPrimitivesVaultId]>
						| [
								(
									| InterbtcPrimitivesCurrencyId
									| { Token: any }
									| { ForeignAsset: any }
									| { LendToken: any }
									| { LpToken: any }
									| { StableLpToken: any }
									| string
									| Uint8Array
								),
								(
									| InterbtcPrimitivesVaultId
									| { accountId?: any; currencies?: any }
									| string
									| Uint8Array
								),
						  ],
				) => Observable<i128>,
				[
					InterbtcPrimitivesCurrencyId,
					ITuple<[InterbtcPrimitivesCurrencyId, InterbtcPrimitivesVaultId]>,
				]
			> &
				QueryableStorageEntry<
					ApiType,
					[
						InterbtcPrimitivesCurrencyId,
						ITuple<[InterbtcPrimitivesCurrencyId, InterbtcPrimitivesVaultId]>,
					]
				>;
			/**
			 * The stake of a participant in this reward pool.
			 **/
			stake: AugmentedQuery<
				ApiType,
				(
					arg:
						| ITuple<[InterbtcPrimitivesCurrencyId, InterbtcPrimitivesVaultId]>
						| [
								(
									| InterbtcPrimitivesCurrencyId
									| { Token: any }
									| { ForeignAsset: any }
									| { LendToken: any }
									| { LpToken: any }
									| { StableLpToken: any }
									| string
									| Uint8Array
								),
								(
									| InterbtcPrimitivesVaultId
									| { accountId?: any; currencies?: any }
									| string
									| Uint8Array
								),
						  ],
				) => Observable<i128>,
				[ITuple<[InterbtcPrimitivesCurrencyId, InterbtcPrimitivesVaultId]>]
			> &
				QueryableStorageEntry<
					ApiType,
					[ITuple<[InterbtcPrimitivesCurrencyId, InterbtcPrimitivesVaultId]>]
				>;
			/**
			 * The total unclaimed rewards distributed to this reward pool.
			 * NOTE: this is currently only used for integration tests.
			 **/
			totalRewards: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<i128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * The total stake deposited to this reward pool.
			 **/
			totalStake: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
				) => Observable<i128>,
				[InterbtcPrimitivesCurrencyId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesCurrencyId]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		vaultStaking: {
			/**
			 * The nonce of the current staking pool, used in force refunds.
			 * This is a strictly increasing value.
			 **/
			nonce: AugmentedQuery<
				ApiType,
				(
					arg:
						| InterbtcPrimitivesVaultId
						| { accountId?: any; currencies?: any }
						| string
						| Uint8Array,
				) => Observable<u32>,
				[InterbtcPrimitivesVaultId]
			> &
				QueryableStorageEntry<ApiType, [InterbtcPrimitivesVaultId]>;
			/**
			 * Used to compute the rewards for a participant's stake.
			 **/
			rewardPerToken: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2:
						| ITuple<[u32, InterbtcPrimitivesVaultId]>
						| [
								u32 | AnyNumber | Uint8Array,
								(
									| InterbtcPrimitivesVaultId
									| { accountId?: any; currencies?: any }
									| string
									| Uint8Array
								),
						  ],
				) => Observable<i128>,
				[InterbtcPrimitivesCurrencyId, ITuple<[u32, InterbtcPrimitivesVaultId]>]
			> &
				QueryableStorageEntry<
					ApiType,
					[
						InterbtcPrimitivesCurrencyId,
						ITuple<[u32, InterbtcPrimitivesVaultId]>,
					]
				>;
			/**
			 * Accounts for previous changes in stake size.
			 **/
			rewardTally: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2:
						| ITuple<[u32, InterbtcPrimitivesVaultId, AccountId32]>
						| [
								u32 | AnyNumber | Uint8Array,
								(
									| InterbtcPrimitivesVaultId
									| { accountId?: any; currencies?: any }
									| string
									| Uint8Array
								),
								AccountId32 | string | Uint8Array,
						  ],
				) => Observable<i128>,
				[
					InterbtcPrimitivesCurrencyId,
					ITuple<[u32, InterbtcPrimitivesVaultId, AccountId32]>,
				]
			> &
				QueryableStorageEntry<
					ApiType,
					[
						InterbtcPrimitivesCurrencyId,
						ITuple<[u32, InterbtcPrimitivesVaultId, AccountId32]>,
					]
				>;
			/**
			 * Used to compute the amount to slash from a participant's stake.
			 **/
			slashPerToken: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2:
						| InterbtcPrimitivesVaultId
						| { accountId?: any; currencies?: any }
						| string
						| Uint8Array,
				) => Observable<i128>,
				[u32, InterbtcPrimitivesVaultId]
			> &
				QueryableStorageEntry<ApiType, [u32, InterbtcPrimitivesVaultId]>;
			/**
			 * Accounts for previous changes in stake size.
			 **/
			slashTally: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2:
						| ITuple<[InterbtcPrimitivesVaultId, AccountId32]>
						| [
								(
									| InterbtcPrimitivesVaultId
									| { accountId?: any; currencies?: any }
									| string
									| Uint8Array
								),
								AccountId32 | string | Uint8Array,
						  ],
				) => Observable<i128>,
				[u32, ITuple<[InterbtcPrimitivesVaultId, AccountId32]>]
			> &
				QueryableStorageEntry<
					ApiType,
					[u32, ITuple<[InterbtcPrimitivesVaultId, AccountId32]>]
				>;
			/**
			 * The stake of a participant in this reward pool.
			 **/
			stake: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2:
						| ITuple<[InterbtcPrimitivesVaultId, AccountId32]>
						| [
								(
									| InterbtcPrimitivesVaultId
									| { accountId?: any; currencies?: any }
									| string
									| Uint8Array
								),
								AccountId32 | string | Uint8Array,
						  ],
				) => Observable<i128>,
				[u32, ITuple<[InterbtcPrimitivesVaultId, AccountId32]>]
			> &
				QueryableStorageEntry<
					ApiType,
					[u32, ITuple<[InterbtcPrimitivesVaultId, AccountId32]>]
				>;
			/**
			 * The total stake - this will increase on deposit and decrease on withdrawal or slashing.
			 **/
			totalCurrentStake: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2:
						| InterbtcPrimitivesVaultId
						| { accountId?: any; currencies?: any }
						| string
						| Uint8Array,
				) => Observable<i128>,
				[u32, InterbtcPrimitivesVaultId]
			> &
				QueryableStorageEntry<ApiType, [u32, InterbtcPrimitivesVaultId]>;
			/**
			 * The total unclaimed rewards distributed to this reward pool.
			 * NOTE: this is currently only used for integration tests.
			 **/
			totalRewards: AugmentedQuery<
				ApiType,
				(
					arg1:
						| InterbtcPrimitivesCurrencyId
						| { Token: any }
						| { ForeignAsset: any }
						| { LendToken: any }
						| { LpToken: any }
						| { StableLpToken: any }
						| string
						| Uint8Array,
					arg2:
						| ITuple<[u32, InterbtcPrimitivesVaultId]>
						| [
								u32 | AnyNumber | Uint8Array,
								(
									| InterbtcPrimitivesVaultId
									| { accountId?: any; currencies?: any }
									| string
									| Uint8Array
								),
						  ],
				) => Observable<i128>,
				[InterbtcPrimitivesCurrencyId, ITuple<[u32, InterbtcPrimitivesVaultId]>]
			> &
				QueryableStorageEntry<
					ApiType,
					[
						InterbtcPrimitivesCurrencyId,
						ITuple<[u32, InterbtcPrimitivesVaultId]>,
					]
				>;
			/**
			 * The total stake - this will increase on deposit and decrease on withdrawal.
			 **/
			totalStake: AugmentedQuery<
				ApiType,
				(
					arg1: u32 | AnyNumber | Uint8Array,
					arg2:
						| InterbtcPrimitivesVaultId
						| { accountId?: any; currencies?: any }
						| string
						| Uint8Array,
				) => Observable<i128>,
				[u32, InterbtcPrimitivesVaultId]
			> &
				QueryableStorageEntry<ApiType, [u32, InterbtcPrimitivesVaultId]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		vesting: {
			/**
			 * Storage version of the pallet.
			 *
			 * New networks start with latest version, as determined by the genesis build.
			 **/
			storageVersion: AugmentedQuery<
				ApiType,
				() => Observable<PalletVestingReleases>,
				[]
			> &
				QueryableStorageEntry<ApiType, []>;
			/**
			 * Information regarding the vesting of a given account.
			 **/
			vesting: AugmentedQuery<
				ApiType,
				(
					arg: AccountId32 | string | Uint8Array,
				) => Observable<Option<Vec<PalletVestingVestingInfo>>>,
				[AccountId32]
			> &
				QueryableStorageEntry<ApiType, [AccountId32]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
		whitelist: {
			whitelistedCall: AugmentedQuery<
				ApiType,
				(arg: H256 | string | Uint8Array) => Observable<Option<Null>>,
				[H256]
			> &
				QueryableStorageEntry<ApiType, [H256]>;
			/**
			 * Generic query
			 **/
			[key: string]: QueryableStorageEntry<ApiType>;
		};
	} // AugmentedQueries
} // declare module
