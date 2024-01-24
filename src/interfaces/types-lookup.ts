// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U256, U8aFixed, Vec, bool, i128, i32, i64, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { OpaqueMultiaddr, OpaquePeerId } from '@polkadot/types/interfaces/imOnline';
import type { AccountId32, Call, H160, H256, MultiAddress, PerU16, Perbill, Percent, Permill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (8) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (9) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (14) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (16) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (19) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (21) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (22) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (23) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (24) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (25) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
  }

  /** @name SpRuntimeModuleError (26) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (27) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (28) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (29) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletBalancesEvent (30) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (31) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletImOnlineEvent (32) */
  interface PalletImOnlineEvent extends Enum {
    readonly isHeartbeatReceived: boolean;
    readonly asHeartbeatReceived: {
      readonly authorityId: PalletImOnlineSr25519AppSr25519Public;
    } & Struct;
    readonly isAllGood: boolean;
    readonly isSomeOffline: boolean;
    readonly asSomeOffline: {
      readonly offline: Vec<ITuple<[AccountId32, PalletStakingExposure]>>;
    } & Struct;
    readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
  }

  /** @name PalletImOnlineSr25519AppSr25519Public (33) */
  interface PalletImOnlineSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (34) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletStakingExposure (37) */
  interface PalletStakingExposure extends Struct {
    readonly total: Compact<u128>;
    readonly own: Compact<u128>;
    readonly others: Vec<PalletStakingIndividualExposure>;
  }

  /** @name PalletStakingIndividualExposure (40) */
  interface PalletStakingIndividualExposure extends Struct {
    readonly who: AccountId32;
    readonly value: Compact<u128>;
  }

  /** @name PalletTransactionPaymentEvent (41) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletOffencesEvent (42) */
  interface PalletOffencesEvent extends Enum {
    readonly isOffence: boolean;
    readonly asOffence: {
      readonly kind: U8aFixed;
      readonly timeslot: Bytes;
    } & Struct;
    readonly type: 'Offence';
  }

  /** @name PalletStakingPalletEvent (44) */
  interface PalletStakingPalletEvent extends Enum {
    readonly isEraPaid: boolean;
    readonly asEraPaid: {
      readonly eraIndex: u32;
      readonly validatorPayout: u128;
      readonly remainder: u128;
    } & Struct;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly staker: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashReported: boolean;
    readonly asSlashReported: {
      readonly validator: AccountId32;
      readonly fraction: Perbill;
      readonly slashEra: u32;
    } & Struct;
    readonly isOldSlashingReportDiscarded: boolean;
    readonly asOldSlashingReportDiscarded: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly isStakersElected: boolean;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isKicked: boolean;
    readonly asKicked: {
      readonly nominator: AccountId32;
      readonly stash: AccountId32;
    } & Struct;
    readonly isStakingElectionFailed: boolean;
    readonly isChilled: boolean;
    readonly asChilled: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isPayoutStarted: boolean;
    readonly asPayoutStarted: {
      readonly eraIndex: u32;
      readonly validatorStash: AccountId32;
    } & Struct;
    readonly isValidatorPrefsSet: boolean;
    readonly asValidatorPrefsSet: {
      readonly stash: AccountId32;
      readonly prefs: PalletStakingValidatorPrefs;
    } & Struct;
    readonly isForceEra: boolean;
    readonly asForceEra: {
      readonly mode: PalletStakingForcing;
    } & Struct;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'SlashReported' | 'OldSlashingReportDiscarded' | 'StakersElected' | 'Bonded' | 'Unbonded' | 'Withdrawn' | 'Kicked' | 'StakingElectionFailed' | 'Chilled' | 'PayoutStarted' | 'ValidatorPrefsSet' | 'ForceEra';
  }

  /** @name PalletStakingValidatorPrefs (46) */
  interface PalletStakingValidatorPrefs extends Struct {
    readonly commission: Compact<Perbill>;
    readonly blocked: bool;
  }

  /** @name PalletStakingForcing (49) */
  interface PalletStakingForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PalletSessionEvent (50) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletGrandpaEvent (51) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpConsensusGrandpaAppPublic (54) */
  interface SpConsensusGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (55) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletAssetsEvent (56) */
  interface PalletAssetsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly assetId: u32;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly assetId: u32;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly balance: u128;
    } & Struct;
    readonly isTeamChanged: boolean;
    readonly asTeamChanged: {
      readonly assetId: u32;
      readonly issuer: AccountId32;
      readonly admin: AccountId32;
      readonly freezer: AccountId32;
    } & Struct;
    readonly isOwnerChanged: boolean;
    readonly asOwnerChanged: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isAssetFrozen: boolean;
    readonly asAssetFrozen: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetThawed: boolean;
    readonly asAssetThawed: {
      readonly assetId: u32;
    } & Struct;
    readonly isAccountsDestroyed: boolean;
    readonly asAccountsDestroyed: {
      readonly assetId: u32;
      readonly accountsDestroyed: u32;
      readonly accountsRemaining: u32;
    } & Struct;
    readonly isApprovalsDestroyed: boolean;
    readonly asApprovalsDestroyed: {
      readonly assetId: u32;
      readonly approvalsDestroyed: u32;
      readonly approvalsRemaining: u32;
    } & Struct;
    readonly isDestructionStarted: boolean;
    readonly asDestructionStarted: {
      readonly assetId: u32;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly assetId: u32;
    } & Struct;
    readonly isForceCreated: boolean;
    readonly asForceCreated: {
      readonly assetId: u32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly assetId: u32;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly assetId: u32;
    } & Struct;
    readonly isApprovedTransfer: boolean;
    readonly asApprovedTransfer: {
      readonly assetId: u32;
      readonly source: AccountId32;
      readonly delegate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isApprovalCancelled: boolean;
    readonly asApprovalCancelled: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
    } & Struct;
    readonly isTransferredApproved: boolean;
    readonly asTransferredApproved: {
      readonly assetId: u32;
      readonly owner: AccountId32;
      readonly delegate: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAssetStatusChanged: boolean;
    readonly asAssetStatusChanged: {
      readonly assetId: u32;
    } & Struct;
    readonly isAssetMinBalanceChanged: boolean;
    readonly asAssetMinBalanceChanged: {
      readonly assetId: u32;
      readonly newMinBalance: u128;
    } & Struct;
    readonly isTouched: boolean;
    readonly asTouched: {
      readonly assetId: u32;
      readonly who: AccountId32;
      readonly depositor: AccountId32;
    } & Struct;
    readonly isBlocked: boolean;
    readonly asBlocked: {
      readonly assetId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'Created' | 'Issued' | 'Transferred' | 'Burned' | 'TeamChanged' | 'OwnerChanged' | 'Frozen' | 'Thawed' | 'AssetFrozen' | 'AssetThawed' | 'AccountsDestroyed' | 'ApprovalsDestroyed' | 'DestructionStarted' | 'Destroyed' | 'ForceCreated' | 'MetadataSet' | 'MetadataCleared' | 'ApprovedTransfer' | 'ApprovalCancelled' | 'TransferredApproved' | 'AssetStatusChanged' | 'AssetMinBalanceChanged' | 'Touched' | 'Blocked';
  }

  /** @name PalletBountiesEvent (57) */
  interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
  }

  /** @name PalletVestingEvent (58) */
  interface PalletVestingEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: AccountId32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletSchedulerEvent (59) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
  }

  /** @name PalletIndicesEvent (64) */
  interface PalletIndicesEvent extends Enum {
    readonly isIndexAssigned: boolean;
    readonly asIndexAssigned: {
      readonly who: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isIndexFreed: boolean;
    readonly asIndexFreed: {
      readonly index: u32;
    } & Struct;
    readonly isIndexFrozen: boolean;
    readonly asIndexFrozen: {
      readonly index: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen';
  }

  /** @name PalletProxyEvent (65) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: GgxchainRuntimeBrooklynPosProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: GgxchainRuntimeBrooklynPosProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: GgxchainRuntimeBrooklynPosProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name GgxchainRuntimeBrooklynPosProxyType (66) */
  interface GgxchainRuntimeBrooklynPosProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isIdentity: boolean;
    readonly isCancel: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'Identity' | 'Cancel';
  }

  /** @name PalletMultisigEvent (68) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (69) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletIdentityEvent (70) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletSudoEvent (71) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name PalletUtilityEvent (73) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletElectionProviderMultiPhaseEvent (74) */
  interface PalletElectionProviderMultiPhaseEvent extends Enum {
    readonly isSolutionStored: boolean;
    readonly asSolutionStored: {
      readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
      readonly origin: Option<AccountId32>;
      readonly prevEjected: bool;
    } & Struct;
    readonly isElectionFinalized: boolean;
    readonly asElectionFinalized: {
      readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
      readonly score: SpNposElectionsElectionScore;
    } & Struct;
    readonly isElectionFailed: boolean;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly account: AccountId32;
      readonly value: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly account: AccountId32;
      readonly value: u128;
    } & Struct;
    readonly isPhaseTransitioned: boolean;
    readonly asPhaseTransitioned: {
      readonly from: PalletElectionProviderMultiPhasePhase;
      readonly to: PalletElectionProviderMultiPhasePhase;
      readonly round: u32;
    } & Struct;
    readonly type: 'SolutionStored' | 'ElectionFinalized' | 'ElectionFailed' | 'Rewarded' | 'Slashed' | 'PhaseTransitioned';
  }

  /** @name PalletElectionProviderMultiPhaseElectionCompute (75) */
  interface PalletElectionProviderMultiPhaseElectionCompute extends Enum {
    readonly isOnChain: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly isFallback: boolean;
    readonly isEmergency: boolean;
    readonly type: 'OnChain' | 'Signed' | 'Unsigned' | 'Fallback' | 'Emergency';
  }

  /** @name SpNposElectionsElectionScore (76) */
  interface SpNposElectionsElectionScore extends Struct {
    readonly minimalStake: u128;
    readonly sumStake: u128;
    readonly sumStakeSquared: u128;
  }

  /** @name PalletElectionProviderMultiPhasePhase (77) */
  interface PalletElectionProviderMultiPhasePhase extends Enum {
    readonly isOff: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly asUnsigned: ITuple<[bool, u32]>;
    readonly isEmergency: boolean;
    readonly type: 'Off' | 'Signed' | 'Unsigned' | 'Emergency';
  }

  /** @name PalletTreasuryEvent (79) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
  }

  /** @name PalletConvictionVotingEvent (80) */
  interface PalletConvictionVotingEvent extends Enum {
    readonly isDelegated: boolean;
    readonly asDelegated: ITuple<[AccountId32, AccountId32]>;
    readonly isUndelegated: boolean;
    readonly asUndelegated: AccountId32;
    readonly type: 'Delegated' | 'Undelegated';
  }

  /** @name PalletReferendaEvent (81) */
  interface PalletReferendaEvent extends Enum {
    readonly isSubmitted: boolean;
    readonly asSubmitted: {
      readonly index: u32;
      readonly track: u16;
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isDecisionDepositPlaced: boolean;
    readonly asDecisionDepositPlaced: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDecisionDepositRefunded: boolean;
    readonly asDecisionDepositRefunded: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositSlashed: boolean;
    readonly asDepositSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDecisionStarted: boolean;
    readonly asDecisionStarted: {
      readonly index: u32;
      readonly track: u16;
      readonly proposal: FrameSupportPreimagesBounded;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isConfirmStarted: boolean;
    readonly asConfirmStarted: {
      readonly index: u32;
    } & Struct;
    readonly isConfirmAborted: boolean;
    readonly asConfirmAborted: {
      readonly index: u32;
    } & Struct;
    readonly isConfirmed: boolean;
    readonly asConfirmed: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly index: u32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isTimedOut: boolean;
    readonly asTimedOut: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isKilled: boolean;
    readonly asKilled: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isSubmissionDepositRefunded: boolean;
    readonly asSubmissionDepositRefunded: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly index: u32;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly index: u32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Submitted' | 'DecisionDepositPlaced' | 'DecisionDepositRefunded' | 'DepositSlashed' | 'DecisionStarted' | 'ConfirmStarted' | 'ConfirmAborted' | 'Confirmed' | 'Approved' | 'Rejected' | 'TimedOut' | 'Cancelled' | 'Killed' | 'SubmissionDepositRefunded' | 'MetadataSet' | 'MetadataCleared';
  }

  /** @name FrameSupportPreimagesBounded (82) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name FrameSystemCall (84) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name PalletTimestampCall (88) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletBalancesCall (89) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalanceDeprecated: boolean;
    readonly asSetBalanceDeprecated: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly oldReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'SetBalanceDeprecated' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'Transfer' | 'ForceSetBalance';
  }

  /** @name PalletImOnlineCall (94) */
  interface PalletImOnlineCall extends Enum {
    readonly isHeartbeat: boolean;
    readonly asHeartbeat: {
      readonly heartbeat: PalletImOnlineHeartbeat;
      readonly signature: PalletImOnlineSr25519AppSr25519Signature;
    } & Struct;
    readonly type: 'Heartbeat';
  }

  /** @name PalletImOnlineHeartbeat (95) */
  interface PalletImOnlineHeartbeat extends Struct {
    readonly blockNumber: u32;
    readonly networkState: SpCoreOffchainOpaqueNetworkState;
    readonly sessionIndex: u32;
    readonly authorityIndex: u32;
    readonly validatorsLen: u32;
  }

  /** @name SpCoreOffchainOpaqueNetworkState (96) */
  interface SpCoreOffchainOpaqueNetworkState extends Struct {
    readonly peerId: OpaquePeerId;
    readonly externalAddresses: Vec<OpaqueMultiaddr>;
  }

  /** @name PalletImOnlineSr25519AppSr25519Signature (100) */
  interface PalletImOnlineSr25519AppSr25519Signature extends SpCoreSr25519Signature {}

  /** @name SpCoreSr25519Signature (101) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name PalletStakingPalletCall (103) */
  interface PalletStakingPalletCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly value: Compact<u128>;
      readonly payee: PalletStakingRewardDestination;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly maxAdditional: Compact<u128>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isValidate: boolean;
    readonly asValidate: {
      readonly prefs: PalletStakingValidatorPrefs;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<MultiAddress>;
    } & Struct;
    readonly isChill: boolean;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly payee: PalletStakingRewardDestination;
    } & Struct;
    readonly isSetController: boolean;
    readonly isSetValidatorCount: boolean;
    readonly asSetValidatorCount: {
      readonly new_: Compact<u32>;
    } & Struct;
    readonly isIncreaseValidatorCount: boolean;
    readonly asIncreaseValidatorCount: {
      readonly additional: Compact<u32>;
    } & Struct;
    readonly isScaleValidatorCount: boolean;
    readonly asScaleValidatorCount: {
      readonly factor: Percent;
    } & Struct;
    readonly isForceNoEras: boolean;
    readonly isForceNewEra: boolean;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isForceUnstake: boolean;
    readonly asForceUnstake: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isForceNewEraAlways: boolean;
    readonly isCancelDeferredSlash: boolean;
    readonly asCancelDeferredSlash: {
      readonly era: u32;
      readonly slashIndices: Vec<u32>;
    } & Struct;
    readonly isPayoutStakers: boolean;
    readonly asPayoutStakers: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isReapStash: boolean;
    readonly asReapStash: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isKick: boolean;
    readonly asKick: {
      readonly who: Vec<MultiAddress>;
    } & Struct;
    readonly isSetStakingConfigs: boolean;
    readonly asSetStakingConfigs: {
      readonly minNominatorBond: PalletStakingPalletConfigOpU128;
      readonly minValidatorBond: PalletStakingPalletConfigOpU128;
      readonly maxNominatorCount: PalletStakingPalletConfigOpU32;
      readonly maxValidatorCount: PalletStakingPalletConfigOpU32;
      readonly chillThreshold: PalletStakingPalletConfigOpPercent;
      readonly minCommission: PalletStakingPalletConfigOpPerbill;
    } & Struct;
    readonly isChillOther: boolean;
    readonly asChillOther: {
      readonly controller: AccountId32;
    } & Struct;
    readonly isForceApplyMinCommission: boolean;
    readonly asForceApplyMinCommission: {
      readonly validatorStash: AccountId32;
    } & Struct;
    readonly isSetMinCommission: boolean;
    readonly asSetMinCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'WithdrawUnbonded' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'SetInvulnerables' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'ReapStash' | 'Kick' | 'SetStakingConfigs' | 'ChillOther' | 'ForceApplyMinCommission' | 'SetMinCommission';
  }

  /** @name PalletStakingRewardDestination (104) */
  interface PalletStakingRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletStakingPalletConfigOpU128 (108) */
  interface PalletStakingPalletConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpU32 (109) */
  interface PalletStakingPalletConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpPercent (110) */
  interface PalletStakingPalletConfigOpPercent extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Percent;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpPerbill (111) */
  interface PalletStakingPalletConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletSessionCall (112) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: GgxchainRuntimeBrooklynOpaqueSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name GgxchainRuntimeBrooklynOpaqueSessionKeys (113) */
  interface GgxchainRuntimeBrooklynOpaqueSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
    readonly beefy: SpConsensusBeefyCryptoPublic;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (114) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpConsensusBeefyCryptoPublic (115) */
  interface SpConsensusBeefyCryptoPublic extends SpCoreEcdsaPublic {}

  /** @name SpCoreEcdsaPublic (116) */
  interface SpCoreEcdsaPublic extends U8aFixed {}

  /** @name PalletGrandpaCall (118) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpConsensusGrandpaEquivocationProof (119) */
  interface SpConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpConsensusGrandpaEquivocation;
  }

  /** @name SpConsensusGrandpaEquivocation (120) */
  interface SpConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (121) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (122) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpConsensusGrandpaAppSignature (123) */
  interface SpConsensusGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (124) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (126) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (127) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpSessionMembershipProof (129) */
  interface SpSessionMembershipProof extends Struct {
    readonly session: u32;
    readonly trieNodes: Vec<Bytes>;
    readonly validatorCount: u32;
  }

  /** @name PalletAssetsCall (130) */
  interface PalletAssetsCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly id: Compact<u32>;
      readonly admin: MultiAddress;
      readonly minBalance: u128;
    } & Struct;
    readonly isForceCreate: boolean;
    readonly asForceCreate: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly isSufficient: bool;
      readonly minBalance: Compact<u128>;
    } & Struct;
    readonly isStartDestroy: boolean;
    readonly asStartDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyAccounts: boolean;
    readonly asDestroyAccounts: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isDestroyApprovals: boolean;
    readonly asDestroyApprovals: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isFinishDestroy: boolean;
    readonly asFinishDestroy: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly id: Compact<u32>;
      readonly beneficiary: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly id: Compact<u32>;
      readonly target: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly id: Compact<u32>;
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isThaw: boolean;
    readonly asThaw: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isFreezeAsset: boolean;
    readonly asFreezeAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isThawAsset: boolean;
    readonly asThawAsset: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
    } & Struct;
    readonly isSetTeam: boolean;
    readonly asSetTeam: {
      readonly id: Compact<u32>;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
    } & Struct;
    readonly isClearMetadata: boolean;
    readonly asClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceSetMetadata: boolean;
    readonly asForceSetMetadata: {
      readonly id: Compact<u32>;
      readonly name: Bytes;
      readonly symbol: Bytes;
      readonly decimals: u8;
      readonly isFrozen: bool;
    } & Struct;
    readonly isForceClearMetadata: boolean;
    readonly asForceClearMetadata: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isForceAssetStatus: boolean;
    readonly asForceAssetStatus: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly issuer: MultiAddress;
      readonly admin: MultiAddress;
      readonly freezer: MultiAddress;
      readonly minBalance: Compact<u128>;
      readonly isSufficient: bool;
      readonly isFrozen: bool;
    } & Struct;
    readonly isApproveTransfer: boolean;
    readonly asApproveTransfer: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelApproval: boolean;
    readonly asCancelApproval: {
      readonly id: Compact<u32>;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isForceCancelApproval: boolean;
    readonly asForceCancelApproval: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly delegate: MultiAddress;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly id: Compact<u32>;
      readonly owner: MultiAddress;
      readonly destination: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTouch: boolean;
    readonly asTouch: {
      readonly id: Compact<u32>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly id: Compact<u32>;
      readonly allowBurn: bool;
    } & Struct;
    readonly isSetMinBalance: boolean;
    readonly asSetMinBalance: {
      readonly id: Compact<u32>;
      readonly minBalance: u128;
    } & Struct;
    readonly isTouchOther: boolean;
    readonly asTouchOther: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isRefundOther: boolean;
    readonly asRefundOther: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly isBlock: boolean;
    readonly asBlock: {
      readonly id: Compact<u32>;
      readonly who: MultiAddress;
    } & Struct;
    readonly type: 'Create' | 'ForceCreate' | 'StartDestroy' | 'DestroyAccounts' | 'DestroyApprovals' | 'FinishDestroy' | 'Mint' | 'Burn' | 'Transfer' | 'TransferKeepAlive' | 'ForceTransfer' | 'Freeze' | 'Thaw' | 'FreezeAsset' | 'ThawAsset' | 'TransferOwnership' | 'SetTeam' | 'SetMetadata' | 'ClearMetadata' | 'ForceSetMetadata' | 'ForceClearMetadata' | 'ForceAssetStatus' | 'ApproveTransfer' | 'CancelApproval' | 'ForceCancelApproval' | 'TransferApproved' | 'Touch' | 'Refund' | 'SetMinBalance' | 'TouchOther' | 'RefundOther' | 'Block';
  }

  /** @name PalletBountiesCall (131) */
  interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletVestingCall (132) */
  interface PalletVestingCall extends Enum {
    readonly isVest: boolean;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly source: MultiAddress;
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'MergeSchedules';
  }

  /** @name PalletVestingVestingInfo (133) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u32;
  }

  /** @name PalletSchedulerCall (134) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletIndicesCall (136) */
  interface PalletIndicesCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly index: u32;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isFree: boolean;
    readonly asFree: {
      readonly index: u32;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
      readonly freeze: bool;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze';
  }

  /** @name PalletProxyCall (137) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<GgxchainRuntimeBrooklynPosProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: GgxchainRuntimeBrooklynPosProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: GgxchainRuntimeBrooklynPosProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: GgxchainRuntimeBrooklynPosProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: GgxchainRuntimeBrooklynPosProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<GgxchainRuntimeBrooklynPosProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletMultisigCall (139) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletIdentityCall (141) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (142) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (179) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (180) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (181) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletSudoCall (182) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletUtilityCall (183) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: GgxchainRuntimeBrooklynOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name GgxchainRuntimeBrooklynOriginCaller (185) */
  interface GgxchainRuntimeBrooklynOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: PalletEthereumRawOrigin;
    readonly isEthereumChecked: boolean;
    readonly asEthereumChecked: PalletEthereumCheckedRawOrigin;
    readonly type: 'System' | 'Void' | 'Ethereum' | 'EthereumChecked';
  }

  /** @name FrameSupportDispatchRawOrigin (186) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletEthereumRawOrigin (187) */
  interface PalletEthereumRawOrigin extends Enum {
    readonly isEthereumTransaction: boolean;
    readonly asEthereumTransaction: H160;
    readonly type: 'EthereumTransaction';
  }

  /** @name PalletEthereumCheckedRawOrigin (189) */
  interface PalletEthereumCheckedRawOrigin extends Enum {
    readonly isXcmEthereumTx: boolean;
    readonly asXcmEthereumTx: AccountId32;
    readonly type: 'XcmEthereumTx';
  }

  /** @name SpCoreVoid (190) */
  type SpCoreVoid = Null;

  /** @name PalletElectionProviderMultiPhaseCall (191) */
  interface PalletElectionProviderMultiPhaseCall extends Enum {
    readonly isSubmitUnsigned: boolean;
    readonly asSubmitUnsigned: {
      readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
      readonly witness: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
    } & Struct;
    readonly isSetMinimumUntrustedScore: boolean;
    readonly asSetMinimumUntrustedScore: {
      readonly maybeNextScore: Option<SpNposElectionsElectionScore>;
    } & Struct;
    readonly isSetEmergencyElectionResult: boolean;
    readonly asSetEmergencyElectionResult: {
      readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
    } & Struct;
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
    } & Struct;
    readonly isGovernanceFallback: boolean;
    readonly asGovernanceFallback: {
      readonly maybeMaxVoters: Option<u32>;
      readonly maybeMaxTargets: Option<u32>;
    } & Struct;
    readonly type: 'SubmitUnsigned' | 'SetMinimumUntrustedScore' | 'SetEmergencyElectionResult' | 'Submit' | 'GovernanceFallback';
  }

  /** @name PalletElectionProviderMultiPhaseRawSolution (192) */
  interface PalletElectionProviderMultiPhaseRawSolution extends Struct {
    readonly solution: GgxchainRuntimeBrooklynPosNposSolution16;
    readonly score: SpNposElectionsElectionScore;
    readonly round: u32;
  }

  /** @name GgxchainRuntimeBrooklynPosNposSolution16 (193) */
  interface GgxchainRuntimeBrooklynPosNposSolution16 extends Struct {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name PalletElectionProviderMultiPhaseSolutionOrSnapshotSize (244) */
  interface PalletElectionProviderMultiPhaseSolutionOrSnapshotSize extends Struct {
    readonly voters: Compact<u32>;
    readonly targets: Compact<u32>;
  }

  /** @name SpNposElectionsSupport (248) */
  interface SpNposElectionsSupport extends Struct {
    readonly total: u128;
    readonly voters: Vec<ITuple<[AccountId32, u128]>>;
  }

  /** @name PalletTreasuryCall (252) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
  }

  /** @name PalletConvictionVotingCall (253) */
  interface PalletConvictionVotingCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly pollIndex: Compact<u32>;
      readonly vote: PalletConvictionVotingVoteAccountVote;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly class: u16;
      readonly to: MultiAddress;
      readonly conviction: PalletConvictionVotingConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly asUndelegate: {
      readonly class: u16;
    } & Struct;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly class: u16;
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly class: Option<u16>;
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly class: u16;
      readonly index: u32;
    } & Struct;
    readonly type: 'Vote' | 'Delegate' | 'Undelegate' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote';
  }

  /** @name PalletConvictionVotingVoteAccountVote (254) */
  interface PalletConvictionVotingVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly isSplitAbstain: boolean;
    readonly asSplitAbstain: {
      readonly aye: u128;
      readonly nay: u128;
      readonly abstain: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split' | 'SplitAbstain';
  }

  /** @name PalletConvictionVotingConviction (256) */
  interface PalletConvictionVotingConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletReferendaCall (258) */
  interface PalletReferendaCall extends Enum {
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly proposalOrigin: GgxchainRuntimeBrooklynOriginCaller;
      readonly proposal: FrameSupportPreimagesBounded;
      readonly enactmentMoment: FrameSupportScheduleDispatchTime;
    } & Struct;
    readonly isPlaceDecisionDeposit: boolean;
    readonly asPlaceDecisionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isRefundDecisionDeposit: boolean;
    readonly asRefundDecisionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly index: u32;
    } & Struct;
    readonly isKill: boolean;
    readonly asKill: {
      readonly index: u32;
    } & Struct;
    readonly isNudgeReferendum: boolean;
    readonly asNudgeReferendum: {
      readonly index: u32;
    } & Struct;
    readonly isOneFewerDeciding: boolean;
    readonly asOneFewerDeciding: {
      readonly track: u16;
    } & Struct;
    readonly isRefundSubmissionDeposit: boolean;
    readonly asRefundSubmissionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly index: u32;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Submit' | 'PlaceDecisionDeposit' | 'RefundDecisionDeposit' | 'Cancel' | 'Kill' | 'NudgeReferendum' | 'OneFewerDeciding' | 'RefundSubmissionDeposit' | 'SetMetadata';
  }

  /** @name FrameSupportScheduleDispatchTime (259) */
  interface FrameSupportScheduleDispatchTime extends Enum {
    readonly isAt: boolean;
    readonly asAt: u32;
    readonly isAfter: boolean;
    readonly asAfter: u32;
    readonly type: 'At' | 'After';
  }

  /** @name PalletWhitelistCall (261) */
  interface PalletWhitelistCall extends Enum {
    readonly isWhitelistCall: boolean;
    readonly asWhitelistCall: {
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveWhitelistedCall: boolean;
    readonly asRemoveWhitelistedCall: {
      readonly callHash: H256;
    } & Struct;
    readonly isDispatchWhitelistedCall: boolean;
    readonly asDispatchWhitelistedCall: {
      readonly callHash: H256;
      readonly callEncodedLen: u32;
      readonly callWeightWitness: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isDispatchWhitelistedCallWithPreimage: boolean;
    readonly asDispatchWhitelistedCallWithPreimage: {
      readonly call: Call;
    } & Struct;
    readonly type: 'WhitelistCall' | 'RemoveWhitelistedCall' | 'DispatchWhitelistedCall' | 'DispatchWhitelistedCallWithPreimage';
  }

  /** @name PalletSocietyCall (262) */
  interface PalletSocietyCall extends Enum {
    readonly isBid: boolean;
    readonly asBid: {
      readonly value: u128;
    } & Struct;
    readonly isUnbid: boolean;
    readonly asUnbid: {
      readonly pos: u32;
    } & Struct;
    readonly isVouch: boolean;
    readonly asVouch: {
      readonly who: MultiAddress;
      readonly value: u128;
      readonly tip: u128;
    } & Struct;
    readonly isUnvouch: boolean;
    readonly asUnvouch: {
      readonly pos: u32;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly candidate: MultiAddress;
      readonly approve: bool;
    } & Struct;
    readonly isDefenderVote: boolean;
    readonly asDefenderVote: {
      readonly approve: bool;
    } & Struct;
    readonly isPayout: boolean;
    readonly isFound: boolean;
    readonly asFound: {
      readonly founder: MultiAddress;
      readonly maxMembers: u32;
      readonly rules: Bytes;
    } & Struct;
    readonly isUnfound: boolean;
    readonly isJudgeSuspendedMember: boolean;
    readonly asJudgeSuspendedMember: {
      readonly who: MultiAddress;
      readonly forgive: bool;
    } & Struct;
    readonly isJudgeSuspendedCandidate: boolean;
    readonly asJudgeSuspendedCandidate: {
      readonly who: MultiAddress;
      readonly judgement: PalletSocietyJudgement;
    } & Struct;
    readonly isSetMaxMembers: boolean;
    readonly asSetMaxMembers: {
      readonly max: u32;
    } & Struct;
    readonly type: 'Bid' | 'Unbid' | 'Vouch' | 'Unvouch' | 'Vote' | 'DefenderVote' | 'Payout' | 'Found' | 'Unfound' | 'JudgeSuspendedMember' | 'JudgeSuspendedCandidate' | 'SetMaxMembers';
  }

  /** @name PalletSocietyJudgement (263) */
  interface PalletSocietyJudgement extends Enum {
    readonly isRebid: boolean;
    readonly isReject: boolean;
    readonly isApprove: boolean;
    readonly type: 'Rebid' | 'Reject' | 'Approve';
  }

  /** @name PalletPreimageCall (264) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
  }

  /** @name PalletEthereumCall (265) */
  interface PalletEthereumCall extends Enum {
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly transaction: EthereumTransactionTransactionV2;
    } & Struct;
    readonly type: 'Transact';
  }

  /** @name EthereumTransactionTransactionV2 (266) */
  interface EthereumTransactionTransactionV2 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumTransactionLegacyTransaction;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumTransactionEip2930Transaction;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumTransactionEip1559Transaction;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumTransactionLegacyTransaction (267) */
  interface EthereumTransactionLegacyTransaction extends Struct {
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly signature: EthereumTransactionTransactionSignature;
  }

  /** @name EthereumTransactionTransactionAction (270) */
  interface EthereumTransactionTransactionAction extends Enum {
    readonly isCall: boolean;
    readonly asCall: H160;
    readonly isCreate: boolean;
    readonly type: 'Call' | 'Create';
  }

  /** @name EthereumTransactionTransactionSignature (271) */
  interface EthereumTransactionTransactionSignature extends Struct {
    readonly v: u64;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionEip2930Transaction (273) */
  interface EthereumTransactionEip2930Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly gasPrice: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name EthereumTransactionAccessListItem (275) */
  interface EthereumTransactionAccessListItem extends Struct {
    readonly address: H160;
    readonly storageKeys: Vec<H256>;
  }

  /** @name EthereumTransactionEip1559Transaction (277) */
  interface EthereumTransactionEip1559Transaction extends Struct {
    readonly chainId: u64;
    readonly nonce: U256;
    readonly maxPriorityFeePerGas: U256;
    readonly maxFeePerGas: U256;
    readonly gasLimit: U256;
    readonly action: EthereumTransactionTransactionAction;
    readonly value: U256;
    readonly input: Bytes;
    readonly accessList: Vec<EthereumTransactionAccessListItem>;
    readonly oddYParity: bool;
    readonly r: H256;
    readonly s: H256;
  }

  /** @name PalletEvmCall (278) */
  interface PalletEvmCall extends Enum {
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly address: H160;
      readonly value: u128;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly source: H160;
      readonly target: H160;
      readonly input: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly source: H160;
      readonly init: Bytes;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly isCreate2: boolean;
    readonly asCreate2: {
      readonly source: H160;
      readonly init: Bytes;
      readonly salt: H256;
      readonly value: U256;
      readonly gasLimit: u64;
      readonly maxFeePerGas: U256;
      readonly maxPriorityFeePerGas: Option<U256>;
      readonly nonce: Option<U256>;
      readonly accessList: Vec<ITuple<[H160, Vec<H256>]>>;
    } & Struct;
    readonly type: 'Withdraw' | 'Call' | 'Create' | 'Create2';
  }

  /** @name PalletEthereumCheckedCall (282) */
  interface PalletEthereumCheckedCall extends Enum {
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly tx: AstarPrimitivesEthereumCheckedCheckedEthereumTx;
    } & Struct;
    readonly type: 'Transact';
  }

  /** @name AstarPrimitivesEthereumCheckedCheckedEthereumTx (283) */
  interface AstarPrimitivesEthereumCheckedCheckedEthereumTx extends Struct {
    readonly gasLimit: U256;
    readonly target: H160;
    readonly value: U256;
    readonly input: Bytes;
    readonly maybeAccessList: Option<Vec<ITuple<[H160, Vec<H256>]>>>;
  }

  /** @name PalletDynamicFeeCall (286) */
  interface PalletDynamicFeeCall extends Enum {
    readonly isNoteMinGasPriceTarget: boolean;
    readonly asNoteMinGasPriceTarget: {
      readonly target: U256;
    } & Struct;
    readonly type: 'NoteMinGasPriceTarget';
  }

  /** @name PalletBaseFeeCall (287) */
  interface PalletBaseFeeCall extends Enum {
    readonly isSetBaseFeePerGas: boolean;
    readonly asSetBaseFeePerGas: {
      readonly fee: U256;
    } & Struct;
    readonly isSetElasticity: boolean;
    readonly asSetElasticity: {
      readonly elasticity: Permill;
    } & Struct;
    readonly type: 'SetBaseFeePerGas' | 'SetElasticity';
  }

  /** @name PalletHotfixSufficientsCall (289) */
  interface PalletHotfixSufficientsCall extends Enum {
    readonly isHotfixIncAccountSufficients: boolean;
    readonly asHotfixIncAccountSufficients: {
      readonly addresses: Vec<H160>;
    } & Struct;
    readonly type: 'HotfixIncAccountSufficients';
  }

  /** @name RuntimeCommonPosCurrencyPalletCall (291) */
  interface RuntimeCommonPosCurrencyPalletCall extends Enum {
    readonly isChangeInflationPercent: boolean;
    readonly asChangeInflationPercent: {
      readonly newInflation: Perbill;
    } & Struct;
    readonly isChangeInflationDecay: boolean;
    readonly asChangeInflationDecay: {
      readonly newDecay: Perbill;
    } & Struct;
    readonly isYearlyInflationDecay: boolean;
    readonly isChangeTreasuryCommission: boolean;
    readonly asChangeTreasuryCommission: {
      readonly newCommission: Perbill;
    } & Struct;
    readonly isChangeTreasuryCommissionFromFee: boolean;
    readonly asChangeTreasuryCommissionFromFee: {
      readonly newCommission: Perbill;
    } & Struct;
    readonly isChangeTreasuryCommissionFromTips: boolean;
    readonly asChangeTreasuryCommissionFromTips: {
      readonly newCommission: Perbill;
    } & Struct;
    readonly type: 'ChangeInflationPercent' | 'ChangeInflationDecay' | 'YearlyInflationDecay' | 'ChangeTreasuryCommission' | 'ChangeTreasuryCommissionFromFee' | 'ChangeTreasuryCommissionFromTips';
  }

  /** @name RuntimeCommonPosSessionPayoutPalletCall (292) */
  interface RuntimeCommonPosSessionPayoutPalletCall extends Enum {
    readonly isChangeValidatorToNominatorCommissionAlgorithm: boolean;
    readonly asChangeValidatorToNominatorCommissionAlgorithm: {
      readonly algorithm: RuntimeCommonPosSessionPayoutValidatorCommissionAlgorithm;
    } & Struct;
    readonly type: 'ChangeValidatorToNominatorCommissionAlgorithm';
  }

  /** @name RuntimeCommonPosSessionPayoutValidatorCommissionAlgorithm (293) */
  interface RuntimeCommonPosSessionPayoutValidatorCommissionAlgorithm extends Enum {
    readonly isStatic: boolean;
    readonly asStatic: Perbill;
    readonly isMedian: boolean;
    readonly type: 'Static' | 'Median';
  }

  /** @name SubstrateAccountFilterCall (294) */
  interface SubstrateAccountFilterCall extends Enum {
    readonly isVoteForAccount: boolean;
    readonly asVoteForAccount: {
      readonly newAccount: AccountId32;
    } & Struct;
    readonly type: 'VoteForAccount';
  }

  /** @name PalletContractsCall (295) */
  interface PalletContractsCall extends Enum {
    readonly isCallOldWeight: boolean;
    readonly asCallOldWeight: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCodeOldWeight: boolean;
    readonly asInstantiateWithCodeOldWeight: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiateOldWeight: boolean;
    readonly asInstantiateOldWeight: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isUploadCode: boolean;
    readonly asUploadCode: {
      readonly code: Bytes;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly determinism: PalletContractsWasmDeterminism;
    } & Struct;
    readonly isRemoveCode: boolean;
    readonly asRemoveCode: {
      readonly codeHash: H256;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly dest: MultiAddress;
      readonly codeHash: H256;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCode: boolean;
    readonly asInstantiateWithCode: {
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiate: boolean;
    readonly asInstantiate: {
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly type: 'CallOldWeight' | 'InstantiateWithCodeOldWeight' | 'InstantiateOldWeight' | 'UploadCode' | 'RemoveCode' | 'SetCode' | 'Call' | 'InstantiateWithCode' | 'Instantiate';
  }

  /** @name PalletContractsWasmDeterminism (297) */
  interface PalletContractsWasmDeterminism extends Enum {
    readonly isEnforced: boolean;
    readonly isRelaxed: boolean;
    readonly type: 'Enforced' | 'Relaxed';
  }

  /** @name PalletIbcCall (298) */
  interface PalletIbcCall extends Enum {
    readonly isDeliver: boolean;
    readonly asDeliver: {
      readonly messages: Vec<IbcProtoGoogleProtobufAny>;
    } & Struct;
    readonly type: 'Deliver';
  }

  /** @name IbcProtoGoogleProtobufAny (300) */
  interface IbcProtoGoogleProtobufAny extends Struct {
    readonly typeUrl: Text;
    readonly value: Bytes;
  }

  /** @name PalletIcs20TransferCall (302) */
  interface PalletIcs20TransferCall extends Enum {
    readonly isRawTransfer: boolean;
    readonly asRawTransfer: {
      readonly messages: Vec<IbcProtoGoogleProtobufAny>;
    } & Struct;
    readonly type: 'RawTransfer';
  }

  /** @name PalletBeefyCall (303) */
  interface PalletBeefyCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusBeefyEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusBeefyEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned';
  }

  /** @name SpConsensusBeefyEquivocationProof (304) */
  interface SpConsensusBeefyEquivocationProof extends Struct {
    readonly first: SpConsensusBeefyVoteMessage;
    readonly second: SpConsensusBeefyVoteMessage;
  }

  /** @name SpConsensusBeefyCryptoSignature (305) */
  interface SpConsensusBeefyCryptoSignature extends SpCoreEcdsaSignature {}

  /** @name SpCoreEcdsaSignature (306) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name SpConsensusBeefyVoteMessage (308) */
  interface SpConsensusBeefyVoteMessage extends Struct {
    readonly commitment: SpConsensusBeefyCommitment;
    readonly id: SpConsensusBeefyCryptoPublic;
    readonly signature: SpConsensusBeefyCryptoSignature;
  }

  /** @name SpConsensusBeefyCommitment (309) */
  interface SpConsensusBeefyCommitment extends Struct {
    readonly payload: SpConsensusBeefyPayload;
    readonly blockNumber: u32;
    readonly validatorSetId: u64;
  }

  /** @name SpConsensusBeefyPayload (310) */
  interface SpConsensusBeefyPayload extends Vec<ITuple<[U8aFixed, Bytes]>> {}

  /** @name PalletEth2LightClientCall (313) */
  interface PalletEth2LightClientCall extends Enum {
    readonly isInit: boolean;
    readonly asInit: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly args: EthTypesInitInput;
    } & Struct;
    readonly isSubmitBeaconChainLightClientUpdate: boolean;
    readonly asSubmitBeaconChainLightClientUpdate: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly lightClientUpdate: EthTypesEth2LightClientUpdate;
    } & Struct;
    readonly isSubmitExecutionHeader: boolean;
    readonly asSubmitExecutionHeader: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly blockHeader: EthTypesBlockHeader;
    } & Struct;
    readonly isUpdateTrustedSigner: boolean;
    readonly asUpdateTrustedSigner: {
      readonly trustedSigner: AccountId32;
    } & Struct;
    readonly type: 'Init' | 'SubmitBeaconChainLightClientUpdate' | 'SubmitExecutionHeader' | 'UpdateTrustedSigner';
  }

  /** @name WebbProposalsHeaderTypedChainId (314) */
  interface WebbProposalsHeaderTypedChainId extends Enum {
    readonly isNone: boolean;
    readonly isEvm: boolean;
    readonly asEvm: u32;
    readonly isSubstrate: boolean;
    readonly asSubstrate: u32;
    readonly isPolkadotParachain: boolean;
    readonly asPolkadotParachain: u32;
    readonly isKusamaParachain: boolean;
    readonly asKusamaParachain: u32;
    readonly isRococoParachain: boolean;
    readonly asRococoParachain: u32;
    readonly isCosmos: boolean;
    readonly asCosmos: u32;
    readonly isSolana: boolean;
    readonly asSolana: u32;
    readonly isInk: boolean;
    readonly asInk: u32;
    readonly type: 'None' | 'Evm' | 'Substrate' | 'PolkadotParachain' | 'KusamaParachain' | 'RococoParachain' | 'Cosmos' | 'Solana' | 'Ink';
  }

  /** @name EthTypesInitInput (315) */
  interface EthTypesInitInput extends Struct {
    readonly finalizedExecutionHeader: EthTypesBlockHeader;
    readonly finalizedBeaconHeader: EthTypesEth2ExtendedBeaconBlockHeader;
    readonly currentSyncCommittee: EthTypesEth2SyncCommittee;
    readonly nextSyncCommittee: EthTypesEth2SyncCommittee;
    readonly validateUpdates: bool;
    readonly verifyBlsSignatures: bool;
    readonly hashesGcThreshold: u64;
    readonly trustedSigner: Option<AccountId32>;
  }

  /** @name EthTypesBlockHeader (316) */
  interface EthTypesBlockHeader extends Struct {
    readonly parentHash: H256;
    readonly unclesHash: H256;
    readonly author: H160;
    readonly stateRoot: H256;
    readonly transactionsRoot: H256;
    readonly receiptsRoot: H256;
    readonly logBloom: EthTypesBloom;
    readonly difficulty: U256;
    readonly number: u64;
    readonly gasLimit: U256;
    readonly gasUsed: U256;
    readonly timestamp: u64;
    readonly extraData: Bytes;
    readonly mixHash: H256;
    readonly nonce: EthTypesH64;
    readonly baseFeePerGas: Option<u64>;
    readonly withdrawalsRoot: Option<H256>;
    readonly hash_: Option<H256>;
    readonly partialHash: Option<H256>;
  }

  /** @name EthTypesBloom (319) */
  interface EthTypesBloom extends EthbloomBloom {}

  /** @name EthbloomBloom (320) */
  interface EthbloomBloom extends U8aFixed {}

  /** @name EthTypesH64 (323) */
  interface EthTypesH64 extends EthereumTypesHashH64 {}

  /** @name EthereumTypesHashH64 (324) */
  interface EthereumTypesHashH64 extends U8aFixed {}

  /** @name EthTypesEth2ExtendedBeaconBlockHeader (327) */
  interface EthTypesEth2ExtendedBeaconBlockHeader extends Struct {
    readonly header: EthTypesEth2BeaconBlockHeader;
    readonly beaconBlockRoot: H256;
    readonly executionBlockHash: H256;
  }

  /** @name EthTypesEth2BeaconBlockHeader (328) */
  interface EthTypesEth2BeaconBlockHeader extends Struct {
    readonly slot: u64;
    readonly proposerIndex: u64;
    readonly parentRoot: H256;
    readonly stateRoot: H256;
    readonly bodyRoot: H256;
  }

  /** @name EthTypesEth2SyncCommittee (329) */
  interface EthTypesEth2SyncCommittee extends Struct {
    readonly pubkeys: EthTypesEth2SyncCommitteePublicKeys;
    readonly aggregatePubkey: EthTypesEth2PublicKeyBytes;
  }

  /** @name EthTypesEth2SyncCommitteePublicKeys (330) */
  interface EthTypesEth2SyncCommitteePublicKeys extends Vec<EthTypesEth2PublicKeyBytes> {}

  /** @name EthTypesEth2PublicKeyBytes (332) */
  interface EthTypesEth2PublicKeyBytes extends U8aFixed {}

  /** @name EthTypesEth2LightClientUpdate (334) */
  interface EthTypesEth2LightClientUpdate extends Struct {
    readonly attestedBeaconHeader: EthTypesEth2BeaconBlockHeader;
    readonly syncAggregate: EthTypesEth2SyncAggregate;
    readonly signatureSlot: u64;
    readonly finalityUpdate: EthTypesEth2FinalizedHeaderUpdate;
    readonly syncCommitteeUpdate: Option<EthTypesEth2SyncCommitteeUpdate>;
  }

  /** @name EthTypesEth2SyncAggregate (335) */
  interface EthTypesEth2SyncAggregate extends Struct {
    readonly syncCommitteeBits: EthTypesEth2SyncCommitteeBits;
    readonly syncCommitteeSignature: EthTypesEth2SignatureBytes;
  }

  /** @name EthTypesEth2SyncCommitteeBits (336) */
  interface EthTypesEth2SyncCommitteeBits extends U8aFixed {}

  /** @name EthTypesEth2SignatureBytes (337) */
  interface EthTypesEth2SignatureBytes extends U8aFixed {}

  /** @name EthTypesEth2FinalizedHeaderUpdate (339) */
  interface EthTypesEth2FinalizedHeaderUpdate extends Struct {
    readonly headerUpdate: EthTypesEth2HeaderUpdate;
    readonly finalityBranch: Vec<H256>;
  }

  /** @name EthTypesEth2HeaderUpdate (340) */
  interface EthTypesEth2HeaderUpdate extends Struct {
    readonly beaconHeader: EthTypesEth2BeaconBlockHeader;
    readonly executionBlockHash: H256;
    readonly executionHashBranch: Vec<H256>;
  }

  /** @name EthTypesEth2SyncCommitteeUpdate (343) */
  interface EthTypesEth2SyncCommitteeUpdate extends Struct {
    readonly nextSyncCommittee: EthTypesEth2SyncCommittee;
    readonly nextSyncCommitteeBranch: Vec<H256>;
  }

  /** @name PalletReceiptRegistryCall (344) */
  interface PalletReceiptRegistryCall extends Enum {
    readonly isSubmitProof: boolean;
    readonly asSubmitProof: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly eventProof: Bytes;
    } & Struct;
    readonly isUpdateWatchingAddress: boolean;
    readonly asUpdateWatchingAddress: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly address: TypesPrimitivesH160;
      readonly add: bool;
    } & Struct;
    readonly isUpdateProofFee: boolean;
    readonly asUpdateProofFee: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly proofDeposit: u128;
      readonly proofReward: u128;
    } & Struct;
    readonly type: 'SubmitProof' | 'UpdateWatchingAddress' | 'UpdateProofFee';
  }

  /** @name TypesPrimitivesH160 (345) */
  interface TypesPrimitivesH160 extends U8aFixed {}

  /** @name OrmlTokensModuleCall (346) */
  interface OrmlTokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly keepAlive: bool;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly type: 'Transfer' | 'TransferAll' | 'TransferKeepAlive' | 'ForceTransfer' | 'SetBalance';
  }

  /** @name InterbtcPrimitivesCurrencyId (347) */
  interface InterbtcPrimitivesCurrencyId extends Enum {
    readonly isToken: boolean;
    readonly asToken: InterbtcPrimitivesTokenSymbol;
    readonly isForeignAsset: boolean;
    readonly asForeignAsset: u32;
    readonly isLendToken: boolean;
    readonly asLendToken: u32;
    readonly isLpToken: boolean;
    readonly asLpToken: ITuple<[InterbtcPrimitivesLpToken, InterbtcPrimitivesLpToken]>;
    readonly isStableLpToken: boolean;
    readonly asStableLpToken: u32;
    readonly type: 'Token' | 'ForeignAsset' | 'LendToken' | 'LpToken' | 'StableLpToken';
  }

  /** @name InterbtcPrimitivesTokenSymbol (348) */
  interface InterbtcPrimitivesTokenSymbol extends Enum {
    readonly isDot: boolean;
    readonly isIbtc: boolean;
    readonly isIntr: boolean;
    readonly isKsm: boolean;
    readonly isKbtc: boolean;
    readonly isKint: boolean;
    readonly isGgxt: boolean;
    readonly type: 'Dot' | 'Ibtc' | 'Intr' | 'Ksm' | 'Kbtc' | 'Kint' | 'Ggxt';
  }

  /** @name InterbtcPrimitivesLpToken (349) */
  interface InterbtcPrimitivesLpToken extends Enum {
    readonly isToken: boolean;
    readonly asToken: InterbtcPrimitivesTokenSymbol;
    readonly isForeignAsset: boolean;
    readonly asForeignAsset: u32;
    readonly isStableLpToken: boolean;
    readonly asStableLpToken: u32;
    readonly type: 'Token' | 'ForeignAsset' | 'StableLpToken';
  }

  /** @name OrmlAssetRegistryModuleCall (350) */
  interface OrmlAssetRegistryModuleCall extends Enum {
    readonly isRegisterAsset: boolean;
    readonly asRegisterAsset: {
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
      readonly assetId: Option<u32>;
    } & Struct;
    readonly isUpdateAsset: boolean;
    readonly asUpdateAsset: {
      readonly assetId: u32;
      readonly decimals: Option<u32>;
      readonly name: Option<Bytes>;
      readonly symbol: Option<Bytes>;
      readonly existentialDeposit: Option<u128>;
      readonly location: Option<Option<XcmVersionedMultiLocation>>;
      readonly additional: Option<InterbtcPrimitivesCustomMetadata>;
    } & Struct;
    readonly type: 'RegisterAsset' | 'UpdateAsset';
  }

  /** @name OrmlTraitsAssetRegistryAssetMetadata (351) */
  interface OrmlTraitsAssetRegistryAssetMetadata extends Struct {
    readonly decimals: u32;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly existentialDeposit: u128;
    readonly location: Option<XcmVersionedMultiLocation>;
    readonly additional: InterbtcPrimitivesCustomMetadata;
  }

  /** @name InterbtcPrimitivesCustomMetadata (352) */
  interface InterbtcPrimitivesCustomMetadata extends Struct {
    readonly feePerSecond: u128;
    readonly coingeckoId: Bytes;
  }

  /** @name XcmVersionedMultiLocation (354) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiLocation;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2MultiLocation (355) */
  interface XcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV2MultilocationJunctions;
  }

  /** @name XcmV2MultilocationJunctions (356) */
  interface XcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV2Junction (357) */
  interface XcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV2NetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV2BodyId;
      readonly part: XcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV2NetworkId (358) */
  interface XcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV2BodyId (360) */
  interface XcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV2BodyPart (361) */
  interface XcmV2BodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV3MultiLocation (362) */
  interface XcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (363) */
  interface XcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV3Junction (364) */
  interface XcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: XcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name XcmV3JunctionNetworkId (366) */
  interface XcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
  }

  /** @name XcmV3JunctionBodyId (367) */
  interface XcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV3JunctionBodyPart (368) */
  interface XcmV3JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name BtcRelayCall (373) */
  interface BtcRelayCall extends Enum {
    readonly isInitialize: boolean;
    readonly asInitialize: {
      readonly blockHeader: BitcoinBlockHeader;
      readonly blockHeight: u32;
    } & Struct;
    readonly isStoreBlockHeader: boolean;
    readonly asStoreBlockHeader: {
      readonly blockHeader: BitcoinBlockHeader;
      readonly forkBound: u32;
    } & Struct;
    readonly type: 'Initialize' | 'StoreBlockHeader';
  }

  /** @name BitcoinBlockHeader (374) */
  interface BitcoinBlockHeader extends Struct {
    readonly merkleRoot: BitcoinH256Le;
    readonly target: U256;
    readonly timestamp: u32;
    readonly version: i32;
    readonly hash_: BitcoinH256Le;
    readonly hashPrevBlock: BitcoinH256Le;
    readonly nonce: u32;
  }

  /** @name BitcoinH256Le (375) */
  interface BitcoinH256Le extends Struct {
    readonly content: U8aFixed;
  }

  /** @name SecurityCall (377) */
  interface SecurityCall extends Enum {
    readonly isActivateCounter: boolean;
    readonly asActivateCounter: {
      readonly isActive: bool;
    } & Struct;
    readonly type: 'ActivateCounter';
  }

  /** @name FeeCall (378) */
  interface FeeCall extends Enum {
    readonly isWithdrawRewards: boolean;
    readonly asWithdrawRewards: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly index: Option<u32>;
    } & Struct;
    readonly isSetIssueFee: boolean;
    readonly asSetIssueFee: {
      readonly fee: u128;
    } & Struct;
    readonly isSetIssueGriefingCollateral: boolean;
    readonly asSetIssueGriefingCollateral: {
      readonly griefingCollateral: u128;
    } & Struct;
    readonly isSetRedeemFee: boolean;
    readonly asSetRedeemFee: {
      readonly fee: u128;
    } & Struct;
    readonly isSetPremiumRedeemFee: boolean;
    readonly asSetPremiumRedeemFee: {
      readonly fee: u128;
    } & Struct;
    readonly isSetPunishmentFee: boolean;
    readonly asSetPunishmentFee: {
      readonly fee: u128;
    } & Struct;
    readonly isSetReplaceGriefingCollateral: boolean;
    readonly asSetReplaceGriefingCollateral: {
      readonly griefingCollateral: u128;
    } & Struct;
    readonly isSetCommission: boolean;
    readonly asSetCommission: {
      readonly currencies: InterbtcPrimitivesVaultCurrencyPair;
      readonly commission: u128;
    } & Struct;
    readonly type: 'WithdrawRewards' | 'SetIssueFee' | 'SetIssueGriefingCollateral' | 'SetRedeemFee' | 'SetPremiumRedeemFee' | 'SetPunishmentFee' | 'SetReplaceGriefingCollateral' | 'SetCommission';
  }

  /** @name InterbtcPrimitivesVaultId (379) */
  interface InterbtcPrimitivesVaultId extends Struct {
    readonly accountId: AccountId32;
    readonly currencies: InterbtcPrimitivesVaultCurrencyPair;
  }

  /** @name InterbtcPrimitivesVaultCurrencyPair (380) */
  interface InterbtcPrimitivesVaultCurrencyPair extends Struct {
    readonly collateral: InterbtcPrimitivesCurrencyId;
    readonly wrapped: InterbtcPrimitivesCurrencyId;
  }

  /** @name IssueCall (382) */
  interface IssueCall extends Enum {
    readonly isRequestIssue: boolean;
    readonly asRequestIssue: {
      readonly amount: Compact<u128>;
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly griefingCurrency: InterbtcPrimitivesCurrencyId;
    } & Struct;
    readonly isExecuteIssue: boolean;
    readonly asExecuteIssue: {
      readonly issueId: H256;
      readonly uncheckedTransaction: BitcoinFullTransactionProof;
    } & Struct;
    readonly isCancelIssue: boolean;
    readonly asCancelIssue: {
      readonly issueId: H256;
    } & Struct;
    readonly isSetIssuePeriod: boolean;
    readonly asSetIssuePeriod: {
      readonly period: u32;
    } & Struct;
    readonly type: 'RequestIssue' | 'ExecuteIssue' | 'CancelIssue' | 'SetIssuePeriod';
  }

  /** @name BitcoinFullTransactionProof (383) */
  interface BitcoinFullTransactionProof extends Struct {
    readonly userTxProof: BitcoinMerklePartialTransactionProof;
    readonly coinbaseProof: BitcoinMerklePartialTransactionProof;
  }

  /** @name BitcoinMerklePartialTransactionProof (384) */
  interface BitcoinMerklePartialTransactionProof extends Struct {
    readonly transaction: BitcoinTransaction;
    readonly txEncodedLen: u32;
    readonly merkleProof: BitcoinMerkleMerkleProof;
  }

  /** @name BitcoinTransaction (385) */
  interface BitcoinTransaction extends Struct {
    readonly version: i32;
    readonly inputs: Vec<BitcoinTransactionInput>;
    readonly outputs: Vec<BitcoinTransactionOutput>;
    readonly lockAt: BitcoinLockTime;
  }

  /** @name BitcoinTransactionInput (387) */
  interface BitcoinTransactionInput extends Struct {
    readonly source: BitcoinTransactionInputSource;
    readonly script: Bytes;
    readonly sequence: u32;
    readonly witness: Vec<Bytes>;
  }

  /** @name BitcoinTransactionInputSource (388) */
  interface BitcoinTransactionInputSource extends Enum {
    readonly isFromOutput: boolean;
    readonly asFromOutput: ITuple<[BitcoinH256Le, u32]>;
    readonly isCoinbase: boolean;
    readonly asCoinbase: Option<u32>;
    readonly type: 'FromOutput' | 'Coinbase';
  }

  /** @name BitcoinTransactionOutput (390) */
  interface BitcoinTransactionOutput extends Struct {
    readonly value: i64;
    readonly script: BitcoinScript;
  }

  /** @name BitcoinScript (392) */
  interface BitcoinScript extends Struct {
    readonly bytes: Bytes;
  }

  /** @name BitcoinLockTime (393) */
  interface BitcoinLockTime extends Enum {
    readonly isTime: boolean;
    readonly asTime: u32;
    readonly isBlockHeight: boolean;
    readonly asBlockHeight: u32;
    readonly type: 'Time' | 'BlockHeight';
  }

  /** @name BitcoinMerkleMerkleProof (394) */
  interface BitcoinMerkleMerkleProof extends Struct {
    readonly blockHeader: BitcoinBlockHeader;
    readonly flagBits: Vec<bool>;
    readonly transactionsCount: u32;
    readonly hashes: Vec<BitcoinH256Le>;
  }

  /** @name OracleCall (397) */
  interface OracleCall extends Enum {
    readonly isFeedValues: boolean;
    readonly asFeedValues: {
      readonly values: Vec<ITuple<[InterbtcPrimitivesOracleKey, u128]>>;
    } & Struct;
    readonly isInsertAuthorizedOracle: boolean;
    readonly asInsertAuthorizedOracle: {
      readonly accountId: AccountId32;
      readonly name: Bytes;
    } & Struct;
    readonly isRemoveAuthorizedOracle: boolean;
    readonly asRemoveAuthorizedOracle: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'FeedValues' | 'InsertAuthorizedOracle' | 'RemoveAuthorizedOracle';
  }

  /** @name InterbtcPrimitivesOracleKey (400) */
  interface InterbtcPrimitivesOracleKey extends Enum {
    readonly isExchangeRate: boolean;
    readonly asExchangeRate: InterbtcPrimitivesCurrencyId;
    readonly isFeeEstimation: boolean;
    readonly type: 'ExchangeRate' | 'FeeEstimation';
  }

  /** @name RedeemCall (402) */
  interface RedeemCall extends Enum {
    readonly isRequestRedeem: boolean;
    readonly asRequestRedeem: {
      readonly amountWrapped: Compact<u128>;
      readonly btcAddress: BitcoinAddress;
      readonly vaultId: InterbtcPrimitivesVaultId;
    } & Struct;
    readonly isLiquidationRedeem: boolean;
    readonly asLiquidationRedeem: {
      readonly currencies: InterbtcPrimitivesVaultCurrencyPair;
      readonly amountWrapped: Compact<u128>;
    } & Struct;
    readonly isExecuteRedeem: boolean;
    readonly asExecuteRedeem: {
      readonly redeemId: H256;
      readonly uncheckedTransaction: BitcoinFullTransactionProof;
    } & Struct;
    readonly isCancelRedeem: boolean;
    readonly asCancelRedeem: {
      readonly redeemId: H256;
      readonly reimburse: bool;
    } & Struct;
    readonly isSetRedeemPeriod: boolean;
    readonly asSetRedeemPeriod: {
      readonly period: u32;
    } & Struct;
    readonly isMintTokensForReimbursedRedeem: boolean;
    readonly asMintTokensForReimbursedRedeem: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly redeemId: H256;
    } & Struct;
    readonly isSelfRedeem: boolean;
    readonly asSelfRedeem: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly amountWrapped: u128;
    } & Struct;
    readonly type: 'RequestRedeem' | 'LiquidationRedeem' | 'ExecuteRedeem' | 'CancelRedeem' | 'SetRedeemPeriod' | 'MintTokensForReimbursedRedeem' | 'SelfRedeem';
  }

  /** @name BitcoinAddress (403) */
  interface BitcoinAddress extends Enum {
    readonly isP2pkh: boolean;
    readonly asP2pkh: H160;
    readonly isP2sh: boolean;
    readonly asP2sh: H160;
    readonly isP2wpkHv0: boolean;
    readonly asP2wpkHv0: H160;
    readonly isP2wsHv0: boolean;
    readonly asP2wsHv0: H256;
    readonly type: 'P2pkh' | 'P2sh' | 'P2wpkHv0' | 'P2wsHv0';
  }

  /** @name ReplaceCall (404) */
  interface ReplaceCall extends Enum {
    readonly isRequestReplace: boolean;
    readonly asRequestReplace: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isWithdrawReplace: boolean;
    readonly asWithdrawReplace: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isAcceptReplace: boolean;
    readonly asAcceptReplace: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly oldVault: InterbtcPrimitivesVaultId;
      readonly amountBtc: Compact<u128>;
      readonly collateral: Compact<u128>;
      readonly btcAddress: BitcoinAddress;
    } & Struct;
    readonly isExecuteReplace: boolean;
    readonly asExecuteReplace: {
      readonly replaceId: H256;
      readonly uncheckedTransaction: BitcoinFullTransactionProof;
    } & Struct;
    readonly isCancelReplace: boolean;
    readonly asCancelReplace: {
      readonly replaceId: H256;
    } & Struct;
    readonly isSetReplacePeriod: boolean;
    readonly asSetReplacePeriod: {
      readonly period: u32;
    } & Struct;
    readonly type: 'RequestReplace' | 'WithdrawReplace' | 'AcceptReplace' | 'ExecuteReplace' | 'CancelReplace' | 'SetReplacePeriod';
  }

  /** @name VaultRegistryCall (405) */
  interface VaultRegistryCall extends Enum {
    readonly isRegisterVault: boolean;
    readonly asRegisterVault: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly collateral: Compact<u128>;
    } & Struct;
    readonly isRegisterPublicKey: boolean;
    readonly asRegisterPublicKey: {
      readonly publicKey: BitcoinAddressPublicKey;
    } & Struct;
    readonly isAcceptNewIssues: boolean;
    readonly asAcceptNewIssues: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly acceptNewIssues: bool;
    } & Struct;
    readonly isSetCustomSecureThreshold: boolean;
    readonly asSetCustomSecureThreshold: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly customThreshold: Option<u128>;
    } & Struct;
    readonly isReportUndercollateralizedVault: boolean;
    readonly asReportUndercollateralizedVault: {
      readonly vaultId: InterbtcPrimitivesVaultId;
    } & Struct;
    readonly isSetMinimumCollateral: boolean;
    readonly asSetMinimumCollateral: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly minimum: u128;
    } & Struct;
    readonly isSetSystemCollateralCeiling: boolean;
    readonly asSetSystemCollateralCeiling: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly ceiling: u128;
    } & Struct;
    readonly isSetSecureCollateralThreshold: boolean;
    readonly asSetSecureCollateralThreshold: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly threshold: u128;
    } & Struct;
    readonly isSetPremiumRedeemThreshold: boolean;
    readonly asSetPremiumRedeemThreshold: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly threshold: u128;
    } & Struct;
    readonly isSetLiquidationCollateralThreshold: boolean;
    readonly asSetLiquidationCollateralThreshold: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly threshold: u128;
    } & Struct;
    readonly isRecoverVaultId: boolean;
    readonly asRecoverVaultId: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
    } & Struct;
    readonly type: 'RegisterVault' | 'RegisterPublicKey' | 'AcceptNewIssues' | 'SetCustomSecureThreshold' | 'ReportUndercollateralizedVault' | 'SetMinimumCollateral' | 'SetSystemCollateralCeiling' | 'SetSecureCollateralThreshold' | 'SetPremiumRedeemThreshold' | 'SetLiquidationCollateralThreshold' | 'RecoverVaultId';
  }

  /** @name BitcoinAddressPublicKey (406) */
  interface BitcoinAddressPublicKey extends U8aFixed {}

  /** @name RewardCall (408) */
  type RewardCall = Null;

  /** @name StakingCall (409) */
  type StakingCall = Null;

  /** @name NominationCall (411) */
  interface NominationCall extends Enum {
    readonly isSetNominationEnabled: boolean;
    readonly asSetNominationEnabled: {
      readonly enabled: bool;
    } & Struct;
    readonly isOptInToNomination: boolean;
    readonly asOptInToNomination: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
    } & Struct;
    readonly isOptOutOfNomination: boolean;
    readonly asOptOutOfNomination: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
    } & Struct;
    readonly isDepositCollateral: boolean;
    readonly asDepositCollateral: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawCollateral: boolean;
    readonly asWithdrawCollateral: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly amount: Option<u128>;
      readonly index: Option<u32>;
    } & Struct;
    readonly isSetNominationLimit: boolean;
    readonly asSetNominationLimit: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly limit: u128;
    } & Struct;
    readonly type: 'SetNominationEnabled' | 'OptInToNomination' | 'OptOutOfNomination' | 'DepositCollateral' | 'WithdrawCollateral' | 'SetNominationLimit';
  }

  /** @name ClientsInfoCall (412) */
  interface ClientsInfoCall extends Enum {
    readonly isSetCurrentClientRelease: boolean;
    readonly asSetCurrentClientRelease: {
      readonly clientName: Bytes;
      readonly release: ClientsInfoClientRelease;
    } & Struct;
    readonly isSetPendingClientRelease: boolean;
    readonly asSetPendingClientRelease: {
      readonly clientName: Bytes;
      readonly release: ClientsInfoClientRelease;
    } & Struct;
    readonly type: 'SetCurrentClientRelease' | 'SetPendingClientRelease';
  }

  /** @name ClientsInfoClientRelease (413) */
  interface ClientsInfoClientRelease extends Struct {
    readonly uri: Bytes;
    readonly checksum: H256;
  }

  /** @name LoansCall (414) */
  interface LoansCall extends Enum {
    readonly isAddMarket: boolean;
    readonly asAddMarket: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly market: LoansMarket;
    } & Struct;
    readonly isActivateMarket: boolean;
    readonly asActivateMarket: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
    } & Struct;
    readonly isUpdateRateModel: boolean;
    readonly asUpdateRateModel: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly rateModel: LoansRateModelInterestRateModel;
    } & Struct;
    readonly isUpdateMarket: boolean;
    readonly asUpdateMarket: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly collateralFactor: Option<Permill>;
      readonly liquidationThreshold: Option<Permill>;
      readonly reserveFactor: Option<Permill>;
      readonly closeFactor: Option<Permill>;
      readonly liquidateIncentiveReservedFactor: Option<Permill>;
      readonly liquidateIncentive: Option<u128>;
      readonly supplyCap: Option<u128>;
      readonly borrowCap: Option<u128>;
    } & Struct;
    readonly isForceUpdateMarket: boolean;
    readonly asForceUpdateMarket: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly market: LoansMarket;
    } & Struct;
    readonly isAddReward: boolean;
    readonly asAddReward: {
      readonly amount: u128;
    } & Struct;
    readonly isUpdateMarketRewardSpeed: boolean;
    readonly asUpdateMarketRewardSpeed: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly supplyRewardPerBlock: Option<u128>;
      readonly borrowRewardPerBlock: Option<u128>;
    } & Struct;
    readonly isClaimReward: boolean;
    readonly isClaimRewardForMarket: boolean;
    readonly asClaimRewardForMarket: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly mintAmount: Compact<u128>;
    } & Struct;
    readonly isRedeem: boolean;
    readonly asRedeem: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly redeemAmount: Compact<u128>;
    } & Struct;
    readonly isRedeemAll: boolean;
    readonly asRedeemAll: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
    } & Struct;
    readonly isBorrow: boolean;
    readonly asBorrow: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly borrowAmount: Compact<u128>;
    } & Struct;
    readonly isRepayBorrow: boolean;
    readonly asRepayBorrow: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly repayAmount: Compact<u128>;
    } & Struct;
    readonly isRepayBorrowAll: boolean;
    readonly asRepayBorrowAll: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
    } & Struct;
    readonly isDepositAllCollateral: boolean;
    readonly asDepositAllCollateral: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
    } & Struct;
    readonly isWithdrawAllCollateral: boolean;
    readonly asWithdrawAllCollateral: {
      readonly assetId: InterbtcPrimitivesCurrencyId;
    } & Struct;
    readonly isLiquidateBorrow: boolean;
    readonly asLiquidateBorrow: {
      readonly borrower: AccountId32;
      readonly liquidationAssetId: InterbtcPrimitivesCurrencyId;
      readonly repayAmount: Compact<u128>;
      readonly collateralAssetId: InterbtcPrimitivesCurrencyId;
    } & Struct;
    readonly isAddReserves: boolean;
    readonly asAddReserves: {
      readonly payer: MultiAddress;
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly addAmount: Compact<u128>;
    } & Struct;
    readonly isReduceReserves: boolean;
    readonly asReduceReserves: {
      readonly receiver: MultiAddress;
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly reduceAmount: Compact<u128>;
    } & Struct;
    readonly isReduceIncentiveReserves: boolean;
    readonly asReduceIncentiveReserves: {
      readonly receiver: MultiAddress;
      readonly assetId: InterbtcPrimitivesCurrencyId;
      readonly redeemAmount: Compact<u128>;
    } & Struct;
    readonly type: 'AddMarket' | 'ActivateMarket' | 'UpdateRateModel' | 'UpdateMarket' | 'ForceUpdateMarket' | 'AddReward' | 'UpdateMarketRewardSpeed' | 'ClaimReward' | 'ClaimRewardForMarket' | 'Mint' | 'Redeem' | 'RedeemAll' | 'Borrow' | 'RepayBorrow' | 'RepayBorrowAll' | 'DepositAllCollateral' | 'WithdrawAllCollateral' | 'LiquidateBorrow' | 'AddReserves' | 'ReduceReserves' | 'ReduceIncentiveReserves';
  }

  /** @name LoansMarket (415) */
  interface LoansMarket extends Struct {
    readonly collateralFactor: Permill;
    readonly liquidationThreshold: Permill;
    readonly reserveFactor: Permill;
    readonly closeFactor: Permill;
    readonly liquidateIncentive: u128;
    readonly liquidateIncentiveReservedFactor: Permill;
    readonly rateModel: LoansRateModelInterestRateModel;
    readonly state: LoansMarketState;
    readonly supplyCap: u128;
    readonly borrowCap: u128;
    readonly lendTokenId: InterbtcPrimitivesCurrencyId;
  }

  /** @name LoansRateModelInterestRateModel (416) */
  interface LoansRateModelInterestRateModel extends Enum {
    readonly isJump: boolean;
    readonly asJump: LoansRateModelJumpModel;
    readonly isCurve: boolean;
    readonly asCurve: LoansRateModelCurveModel;
    readonly type: 'Jump' | 'Curve';
  }

  /** @name LoansRateModelJumpModel (417) */
  interface LoansRateModelJumpModel extends Struct {
    readonly baseRate: u128;
    readonly jumpRate: u128;
    readonly fullRate: u128;
    readonly jumpUtilization: Permill;
  }

  /** @name LoansRateModelCurveModel (418) */
  interface LoansRateModelCurveModel extends Struct {
    readonly baseRate: u128;
  }

  /** @name LoansMarketState (419) */
  interface LoansMarketState extends Enum {
    readonly isActive: boolean;
    readonly isPending: boolean;
    readonly isSupervision: boolean;
    readonly type: 'Active' | 'Pending' | 'Supervision';
  }

  /** @name PalletDexCall (421) */
  interface PalletDexCall extends Enum {
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly assetId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly assetId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isMakeOrder: boolean;
    readonly asMakeOrder: {
      readonly assetId1: u32;
      readonly assetId2: u32;
      readonly offeredAmount: u128;
      readonly requestedAmount: u128;
      readonly orderType: PalletDexOrderType;
    } & Struct;
    readonly isCancelOrder: boolean;
    readonly asCancelOrder: {
      readonly orderIndex: u64;
    } & Struct;
    readonly isTakeOrder: boolean;
    readonly asTakeOrder: {
      readonly orderIndex: u64;
    } & Struct;
    readonly type: 'Deposit' | 'Withdraw' | 'MakeOrder' | 'CancelOrder' | 'TakeOrder';
  }

  /** @name PalletDexOrderType (422) */
  interface PalletDexOrderType extends Enum {
    readonly isBuy: boolean;
    readonly isSell: boolean;
    readonly type: 'Buy' | 'Sell';
  }

  /** @name PalletConvictionVotingTally (424) */
  interface PalletConvictionVotingTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly support: u128;
  }

  /** @name PalletWhitelistEvent (425) */
  interface PalletWhitelistEvent extends Enum {
    readonly isCallWhitelisted: boolean;
    readonly asCallWhitelisted: {
      readonly callHash: H256;
    } & Struct;
    readonly isWhitelistedCallRemoved: boolean;
    readonly asWhitelistedCallRemoved: {
      readonly callHash: H256;
    } & Struct;
    readonly isWhitelistedCallDispatched: boolean;
    readonly asWhitelistedCallDispatched: {
      readonly callHash: H256;
      readonly result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>;
    } & Struct;
    readonly type: 'CallWhitelisted' | 'WhitelistedCallRemoved' | 'WhitelistedCallDispatched';
  }

  /** @name FrameSupportDispatchPostDispatchInfo (427) */
  interface FrameSupportDispatchPostDispatchInfo extends Struct {
    readonly actualWeight: Option<SpWeightsWeightV2Weight>;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name SpRuntimeDispatchErrorWithPostInfo (429) */
  interface SpRuntimeDispatchErrorWithPostInfo extends Struct {
    readonly postInfo: FrameSupportDispatchPostDispatchInfo;
    readonly error: SpRuntimeDispatchError;
  }

  /** @name PalletSocietyEvent (430) */
  interface PalletSocietyEvent extends Enum {
    readonly isFounded: boolean;
    readonly asFounded: {
      readonly founder: AccountId32;
    } & Struct;
    readonly isBid: boolean;
    readonly asBid: {
      readonly candidateId: AccountId32;
      readonly offer: u128;
    } & Struct;
    readonly isVouch: boolean;
    readonly asVouch: {
      readonly candidateId: AccountId32;
      readonly offer: u128;
      readonly vouching: AccountId32;
    } & Struct;
    readonly isAutoUnbid: boolean;
    readonly asAutoUnbid: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isUnbid: boolean;
    readonly asUnbid: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isUnvouch: boolean;
    readonly asUnvouch: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isInducted: boolean;
    readonly asInducted: {
      readonly primary: AccountId32;
      readonly candidates: Vec<AccountId32>;
    } & Struct;
    readonly isSuspendedMemberJudgement: boolean;
    readonly asSuspendedMemberJudgement: {
      readonly who: AccountId32;
      readonly judged: bool;
    } & Struct;
    readonly isCandidateSuspended: boolean;
    readonly asCandidateSuspended: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isMemberSuspended: boolean;
    readonly asMemberSuspended: {
      readonly member: AccountId32;
    } & Struct;
    readonly isChallenged: boolean;
    readonly asChallenged: {
      readonly member: AccountId32;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly candidate: AccountId32;
      readonly voter: AccountId32;
      readonly vote: bool;
    } & Struct;
    readonly isDefenderVote: boolean;
    readonly asDefenderVote: {
      readonly voter: AccountId32;
      readonly vote: bool;
    } & Struct;
    readonly isNewMaxMembers: boolean;
    readonly asNewMaxMembers: {
      readonly max: u32;
    } & Struct;
    readonly isUnfounded: boolean;
    readonly asUnfounded: {
      readonly founder: AccountId32;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSkepticsChosen: boolean;
    readonly asSkepticsChosen: {
      readonly skeptics: Vec<AccountId32>;
    } & Struct;
    readonly type: 'Founded' | 'Bid' | 'Vouch' | 'AutoUnbid' | 'Unbid' | 'Unvouch' | 'Inducted' | 'SuspendedMemberJudgement' | 'CandidateSuspended' | 'MemberSuspended' | 'Challenged' | 'Vote' | 'DefenderVote' | 'NewMaxMembers' | 'Unfounded' | 'Deposit' | 'SkepticsChosen';
  }

  /** @name PalletPreimageEvent (431) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletEthereumEvent (432) */
  interface PalletEthereumEvent extends Enum {
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly from: H160;
      readonly to: H160;
      readonly transactionHash: H256;
      readonly exitReason: EvmCoreErrorExitReason;
      readonly extraData: Bytes;
    } & Struct;
    readonly type: 'Executed';
  }

  /** @name EvmCoreErrorExitReason (433) */
  interface EvmCoreErrorExitReason extends Enum {
    readonly isSucceed: boolean;
    readonly asSucceed: EvmCoreErrorExitSucceed;
    readonly isError: boolean;
    readonly asError: EvmCoreErrorExitError;
    readonly isRevert: boolean;
    readonly asRevert: EvmCoreErrorExitRevert;
    readonly isFatal: boolean;
    readonly asFatal: EvmCoreErrorExitFatal;
    readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
  }

  /** @name EvmCoreErrorExitSucceed (434) */
  interface EvmCoreErrorExitSucceed extends Enum {
    readonly isStopped: boolean;
    readonly isReturned: boolean;
    readonly isSuicided: boolean;
    readonly type: 'Stopped' | 'Returned' | 'Suicided';
  }

  /** @name EvmCoreErrorExitError (435) */
  interface EvmCoreErrorExitError extends Enum {
    readonly isStackUnderflow: boolean;
    readonly isStackOverflow: boolean;
    readonly isInvalidJump: boolean;
    readonly isInvalidRange: boolean;
    readonly isDesignatedInvalid: boolean;
    readonly isCallTooDeep: boolean;
    readonly isCreateCollision: boolean;
    readonly isCreateContractLimit: boolean;
    readonly isOutOfOffset: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutOfFund: boolean;
    readonly isPcUnderflow: boolean;
    readonly isCreateEmpty: boolean;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly isMaxNonce: boolean;
    readonly isInvalidCode: boolean;
    readonly asInvalidCode: u8;
    readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other' | 'MaxNonce' | 'InvalidCode';
  }

  /** @name EvmCoreErrorExitRevert (438) */
  interface EvmCoreErrorExitRevert extends Enum {
    readonly isReverted: boolean;
    readonly type: 'Reverted';
  }

  /** @name EvmCoreErrorExitFatal (439) */
  interface EvmCoreErrorExitFatal extends Enum {
    readonly isNotSupported: boolean;
    readonly isUnhandledInterrupt: boolean;
    readonly isCallErrorAsFatal: boolean;
    readonly asCallErrorAsFatal: EvmCoreErrorExitError;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
  }

  /** @name PalletEvmEvent (440) */
  interface PalletEvmEvent extends Enum {
    readonly isLog: boolean;
    readonly asLog: {
      readonly log: EthereumLog;
    } & Struct;
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly address: H160;
    } & Struct;
    readonly isCreatedFailed: boolean;
    readonly asCreatedFailed: {
      readonly address: H160;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly address: H160;
    } & Struct;
    readonly isExecutedFailed: boolean;
    readonly asExecutedFailed: {
      readonly address: H160;
    } & Struct;
    readonly type: 'Log' | 'Created' | 'CreatedFailed' | 'Executed' | 'ExecutedFailed';
  }

  /** @name EthereumLog (441) */
  interface EthereumLog extends Struct {
    readonly address: H160;
    readonly topics: Vec<H256>;
    readonly data: Bytes;
  }

  /** @name PalletBaseFeeEvent (442) */
  interface PalletBaseFeeEvent extends Enum {
    readonly isNewBaseFeePerGas: boolean;
    readonly asNewBaseFeePerGas: {
      readonly fee: U256;
    } & Struct;
    readonly isBaseFeeOverflow: boolean;
    readonly isNewElasticity: boolean;
    readonly asNewElasticity: {
      readonly elasticity: Permill;
    } & Struct;
    readonly type: 'NewBaseFeePerGas' | 'BaseFeeOverflow' | 'NewElasticity';
  }

  /** @name RuntimeCommonPosCurrencyPalletEvent (443) */
  interface RuntimeCommonPosCurrencyPalletEvent extends Enum {
    readonly isInflationPercentChanged: boolean;
    readonly asInflationPercentChanged: Perbill;
    readonly isInflationDecayChanged: boolean;
    readonly asInflationDecayChanged: Perbill;
    readonly isTreasuryCommissionChanged: boolean;
    readonly asTreasuryCommissionChanged: Perbill;
    readonly isTreasuryCommissionFromFeeChanged: boolean;
    readonly asTreasuryCommissionFromFeeChanged: Perbill;
    readonly isTreasuryCommissionFromTipsChanged: boolean;
    readonly asTreasuryCommissionFromTipsChanged: Perbill;
    readonly type: 'InflationPercentChanged' | 'InflationDecayChanged' | 'TreasuryCommissionChanged' | 'TreasuryCommissionFromFeeChanged' | 'TreasuryCommissionFromTipsChanged';
  }

  /** @name RuntimeCommonPosSessionPayoutPalletEvent (444) */
  interface RuntimeCommonPosSessionPayoutPalletEvent extends Enum {
    readonly isSessionPayout: boolean;
    readonly asSessionPayout: {
      readonly sessionIndex: u32;
      readonly validatorPayout: u128;
      readonly remainder: u128;
    } & Struct;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isYearRewardPoolAllocated: boolean;
    readonly asYearRewardPoolAllocated: {
      readonly amount: u128;
    } & Struct;
    readonly type: 'SessionPayout' | 'Rewarded' | 'YearRewardPoolAllocated';
  }

  /** @name SubstrateAccountFilterEvent (445) */
  interface SubstrateAccountFilterEvent extends Enum {
    readonly isAccountAllowed: boolean;
    readonly asAccountAllowed: {
      readonly account: AccountId32;
      readonly votedFor: Vec<AccountId32>;
    } & Struct;
    readonly isAccountVoted: boolean;
    readonly asAccountVoted: {
      readonly referrer: AccountId32;
      readonly referee: AccountId32;
    } & Struct;
    readonly type: 'AccountAllowed' | 'AccountVoted';
  }

  /** @name PalletContractsEvent (446) */
  interface PalletContractsEvent extends Enum {
    readonly isInstantiated: boolean;
    readonly asInstantiated: {
      readonly deployer: AccountId32;
      readonly contract: AccountId32;
    } & Struct;
    readonly isTerminated: boolean;
    readonly asTerminated: {
      readonly contract: AccountId32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCodeStored: boolean;
    readonly asCodeStored: {
      readonly codeHash: H256;
    } & Struct;
    readonly isContractEmitted: boolean;
    readonly asContractEmitted: {
      readonly contract: AccountId32;
      readonly data: Bytes;
    } & Struct;
    readonly isCodeRemoved: boolean;
    readonly asCodeRemoved: {
      readonly codeHash: H256;
    } & Struct;
    readonly isContractCodeUpdated: boolean;
    readonly asContractCodeUpdated: {
      readonly contract: AccountId32;
      readonly newCodeHash: H256;
      readonly oldCodeHash: H256;
    } & Struct;
    readonly isCalled: boolean;
    readonly asCalled: {
      readonly caller: PalletContractsOrigin;
      readonly contract: AccountId32;
    } & Struct;
    readonly isDelegateCalled: boolean;
    readonly asDelegateCalled: {
      readonly contract: AccountId32;
      readonly codeHash: H256;
    } & Struct;
    readonly type: 'Instantiated' | 'Terminated' | 'CodeStored' | 'ContractEmitted' | 'CodeRemoved' | 'ContractCodeUpdated' | 'Called' | 'DelegateCalled';
  }

  /** @name PalletContractsOrigin (447) */
  interface PalletContractsOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly type: 'Root' | 'Signed';
  }

  /** @name GgxchainRuntimeBrooklynRuntime (448) */
  type GgxchainRuntimeBrooklynRuntime = Null;

  /** @name PalletIbcEvent (449) */
  interface PalletIbcEvent extends Enum {
    readonly isIbcEvents: boolean;
    readonly asIbcEvents: {
      readonly events: Vec<IbcEventsIbcEvent>;
    } & Struct;
    readonly isIbcErrors: boolean;
    readonly asIbcErrors: {
      readonly errors: Vec<PalletIbcErrorsIbcError>;
    } & Struct;
    readonly type: 'IbcEvents' | 'IbcErrors';
  }

  /** @name IbcEventsIbcEvent (451) */
  interface IbcEventsIbcEvent extends Enum {
    readonly isCreateClient: boolean;
    readonly asCreateClient: IbcCoreIcs02ClientEventsCreateClient;
    readonly isUpdateClient: boolean;
    readonly asUpdateClient: IbcCoreIcs02ClientEventsUpdateClient;
    readonly isUpgradeClient: boolean;
    readonly asUpgradeClient: IbcCoreIcs02ClientEventsUpgradeClient;
    readonly isClientMisbehaviour: boolean;
    readonly asClientMisbehaviour: IbcCoreIcs02ClientEventsClientMisbehaviour;
    readonly isOpenInitConnection: boolean;
    readonly asOpenInitConnection: IbcCoreIcs03ConnectionEventsOpenInit;
    readonly isOpenTryConnection: boolean;
    readonly asOpenTryConnection: IbcCoreIcs03ConnectionEventsOpenTry;
    readonly isOpenAckConnection: boolean;
    readonly asOpenAckConnection: IbcCoreIcs03ConnectionEventsOpenAck;
    readonly isOpenConfirmConnection: boolean;
    readonly asOpenConfirmConnection: IbcCoreIcs03ConnectionEventsOpenConfirm;
    readonly isOpenInitChannel: boolean;
    readonly asOpenInitChannel: IbcCoreIcs04ChannelEventsOpenInit;
    readonly isOpenTryChannel: boolean;
    readonly asOpenTryChannel: IbcCoreIcs04ChannelEventsOpenTry;
    readonly isOpenAckChannel: boolean;
    readonly asOpenAckChannel: IbcCoreIcs04ChannelEventsOpenAck;
    readonly isOpenConfirmChannel: boolean;
    readonly asOpenConfirmChannel: IbcCoreIcs04ChannelEventsOpenConfirm;
    readonly isCloseInitChannel: boolean;
    readonly asCloseInitChannel: IbcCoreIcs04ChannelEventsCloseInit;
    readonly isCloseConfirmChannel: boolean;
    readonly asCloseConfirmChannel: IbcCoreIcs04ChannelEventsCloseConfirm;
    readonly isSendPacket: boolean;
    readonly asSendPacket: IbcCoreIcs04ChannelEventsSendPacket;
    readonly isReceivePacket: boolean;
    readonly asReceivePacket: IbcCoreIcs04ChannelEventsReceivePacket;
    readonly isWriteAcknowledgement: boolean;
    readonly asWriteAcknowledgement: IbcCoreIcs04ChannelEventsWriteAcknowledgement;
    readonly isAcknowledgePacket: boolean;
    readonly asAcknowledgePacket: IbcCoreIcs04ChannelEventsAcknowledgePacket;
    readonly isTimeoutPacket: boolean;
    readonly asTimeoutPacket: IbcCoreIcs04ChannelEventsTimeoutPacket;
    readonly isChannelClosed: boolean;
    readonly asChannelClosed: IbcCoreIcs04ChannelEventsChannelClosed;
    readonly isAppModule: boolean;
    readonly asAppModule: IbcEventsModuleEvent;
    readonly type: 'CreateClient' | 'UpdateClient' | 'UpgradeClient' | 'ClientMisbehaviour' | 'OpenInitConnection' | 'OpenTryConnection' | 'OpenAckConnection' | 'OpenConfirmConnection' | 'OpenInitChannel' | 'OpenTryChannel' | 'OpenAckChannel' | 'OpenConfirmChannel' | 'CloseInitChannel' | 'CloseConfirmChannel' | 'SendPacket' | 'ReceivePacket' | 'WriteAcknowledgement' | 'AcknowledgePacket' | 'TimeoutPacket' | 'ChannelClosed' | 'AppModule';
  }

  /** @name IbcCoreIcs02ClientEventsCreateClient (452) */
  interface IbcCoreIcs02ClientEventsCreateClient extends Struct {
    readonly clientId: IbcCoreIcs02ClientEventsClientIdAttribute;
    readonly clientType: IbcCoreIcs02ClientEventsClientTypeAttribute;
    readonly consensusHeight: IbcCoreIcs02ClientEventsConsensusHeightAttribute;
  }

  /** @name IbcCoreIcs02ClientEventsClientIdAttribute (453) */
  interface IbcCoreIcs02ClientEventsClientIdAttribute extends Struct {
    readonly clientId: Text;
  }

  /** @name IbcCoreIcs02ClientEventsClientTypeAttribute (455) */
  interface IbcCoreIcs02ClientEventsClientTypeAttribute extends Struct {
    readonly clientType: Text;
  }

  /** @name IbcCoreIcs02ClientEventsConsensusHeightAttribute (457) */
  interface IbcCoreIcs02ClientEventsConsensusHeightAttribute extends Struct {
    readonly consensusHeight: IbcCoreIcs02ClientHeight;
  }

  /** @name IbcCoreIcs02ClientHeight (458) */
  interface IbcCoreIcs02ClientHeight extends Struct {
    readonly revisionNumber: u64;
    readonly revisionHeight: u64;
  }

  /** @name IbcCoreIcs02ClientEventsUpdateClient (459) */
  interface IbcCoreIcs02ClientEventsUpdateClient extends Struct {
    readonly clientId: IbcCoreIcs02ClientEventsClientIdAttribute;
    readonly clientType: IbcCoreIcs02ClientEventsClientTypeAttribute;
    readonly consensusHeight: IbcCoreIcs02ClientEventsConsensusHeightAttribute;
    readonly consensusHeights: IbcCoreIcs02ClientEventsConsensusHeightsAttribute;
    readonly header: IbcCoreIcs02ClientEventsHeaderAttribute;
  }

  /** @name IbcCoreIcs02ClientEventsConsensusHeightsAttribute (460) */
  interface IbcCoreIcs02ClientEventsConsensusHeightsAttribute extends Struct {
    readonly consensusHeights: Vec<IbcCoreIcs02ClientHeight>;
  }

  /** @name IbcCoreIcs02ClientEventsHeaderAttribute (462) */
  interface IbcCoreIcs02ClientEventsHeaderAttribute extends Struct {
    readonly header: IbcProtoGoogleProtobufAny;
  }

  /** @name IbcCoreIcs02ClientEventsUpgradeClient (463) */
  interface IbcCoreIcs02ClientEventsUpgradeClient extends Struct {
    readonly clientId: IbcCoreIcs02ClientEventsClientIdAttribute;
    readonly clientType: IbcCoreIcs02ClientEventsClientTypeAttribute;
    readonly consensusHeight: IbcCoreIcs02ClientEventsConsensusHeightAttribute;
  }

  /** @name IbcCoreIcs02ClientEventsClientMisbehaviour (464) */
  interface IbcCoreIcs02ClientEventsClientMisbehaviour extends Struct {
    readonly clientId: IbcCoreIcs02ClientEventsClientIdAttribute;
    readonly clientType: IbcCoreIcs02ClientEventsClientTypeAttribute;
  }

  /** @name IbcCoreIcs03ConnectionEventsOpenInit (465) */
  interface IbcCoreIcs03ConnectionEventsOpenInit extends IbcCoreIcs03ConnectionEventsAttributes {}

  /** @name IbcCoreIcs03ConnectionEventsAttributes (466) */
  interface IbcCoreIcs03ConnectionEventsAttributes extends Struct {
    readonly connectionId: Text;
    readonly clientId: Text;
    readonly counterpartyConnectionId: Option<Text>;
    readonly counterpartyClientId: Text;
  }

  /** @name IbcCoreIcs03ConnectionEventsOpenTry (469) */
  interface IbcCoreIcs03ConnectionEventsOpenTry extends IbcCoreIcs03ConnectionEventsAttributes {}

  /** @name IbcCoreIcs03ConnectionEventsOpenAck (470) */
  interface IbcCoreIcs03ConnectionEventsOpenAck extends IbcCoreIcs03ConnectionEventsAttributes {}

  /** @name IbcCoreIcs03ConnectionEventsOpenConfirm (471) */
  interface IbcCoreIcs03ConnectionEventsOpenConfirm extends IbcCoreIcs03ConnectionEventsAttributes {}

  /** @name IbcCoreIcs04ChannelEventsOpenInit (472) */
  interface IbcCoreIcs04ChannelEventsOpenInit extends Struct {
    readonly portId: IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute;
    readonly channelId: IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute;
    readonly counterpartyPortId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute;
    readonly connectionId: IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute;
    readonly version: IbcCoreIcs04ChannelEventsChannelAttributesVersionAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute (473) */
  interface IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute extends Struct {
    readonly portId: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute (475) */
  interface IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute extends Struct {
    readonly channelId: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute (477) */
  interface IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute extends Struct {
    readonly counterpartyPortId: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute (478) */
  interface IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute extends Struct {
    readonly connectionId: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsChannelAttributesVersionAttribute (479) */
  interface IbcCoreIcs04ChannelEventsChannelAttributesVersionAttribute extends Struct {
    readonly version: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsOpenTry (481) */
  interface IbcCoreIcs04ChannelEventsOpenTry extends Struct {
    readonly portId: IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute;
    readonly channelId: IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute;
    readonly counterpartyPortId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute;
    readonly counterpartyChannelId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute;
    readonly connectionId: IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute;
    readonly version: IbcCoreIcs04ChannelEventsChannelAttributesVersionAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute (482) */
  interface IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute extends Struct {
    readonly counterpartyChannelId: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsOpenAck (483) */
  interface IbcCoreIcs04ChannelEventsOpenAck extends Struct {
    readonly portId: IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute;
    readonly channelId: IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute;
    readonly counterpartyPortId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute;
    readonly counterpartyChannelId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute;
    readonly connectionId: IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsOpenConfirm (484) */
  interface IbcCoreIcs04ChannelEventsOpenConfirm extends Struct {
    readonly portId: IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute;
    readonly channelId: IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute;
    readonly counterpartyPortId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute;
    readonly counterpartyChannelId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute;
    readonly connectionId: IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsCloseInit (485) */
  interface IbcCoreIcs04ChannelEventsCloseInit extends Struct {
    readonly portId: IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute;
    readonly channelId: IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute;
    readonly counterpartyPortId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute;
    readonly counterpartyChannelId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute;
    readonly connectionId: IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsCloseConfirm (486) */
  interface IbcCoreIcs04ChannelEventsCloseConfirm extends Struct {
    readonly portId: IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute;
    readonly channelId: IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute;
    readonly counterpartyPortId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute;
    readonly counterpartyChannelId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute;
    readonly connectionId: IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsSendPacket (487) */
  interface IbcCoreIcs04ChannelEventsSendPacket extends Struct {
    readonly packetData: IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute;
    readonly timeoutHeight: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute;
    readonly timeoutTimestamp: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute;
    readonly sequence: IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute;
    readonly srcPortId: IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute;
    readonly srcChannelId: IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute;
    readonly dstPortId: IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute;
    readonly dstChannelId: IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute;
    readonly channelOrdering: IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute;
    readonly srcConnectionId: IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute (488) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute extends Struct {
    readonly packetData: Bytes;
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute (489) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute extends Struct {
    readonly timeoutHeight: IbcCoreIcs04ChannelTimeoutTimeoutHeight;
  }

  /** @name IbcCoreIcs04ChannelTimeoutTimeoutHeight (490) */
  interface IbcCoreIcs04ChannelTimeoutTimeoutHeight extends Enum {
    readonly isNever: boolean;
    readonly isAt: boolean;
    readonly asAt: IbcCoreIcs02ClientHeight;
    readonly type: 'Never' | 'At';
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute (491) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute extends Struct {
    readonly timeoutTimestamp: IbcTimestamp;
  }

  /** @name IbcTimestamp (492) */
  interface IbcTimestamp extends Struct {
    readonly time: Option<u64>;
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute (493) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute extends Struct {
    readonly sequence: u64;
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute (495) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute extends Struct {
    readonly srcPortId: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute (496) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute extends Struct {
    readonly srcChannelId: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute (497) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute extends Struct {
    readonly dstPortId: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute (498) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute extends Struct {
    readonly dstChannelId: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute (499) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute extends Struct {
    readonly order: IbcCoreIcs04ChannelChannelOrder;
  }

  /** @name IbcCoreIcs04ChannelChannelOrder (500) */
  interface IbcCoreIcs04ChannelChannelOrder extends Enum {
    readonly isNone: boolean;
    readonly isUnordered: boolean;
    readonly isOrdered: boolean;
    readonly type: 'None' | 'Unordered' | 'Ordered';
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute (501) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute extends Struct {
    readonly connectionId: Text;
  }

  /** @name IbcCoreIcs04ChannelEventsReceivePacket (502) */
  interface IbcCoreIcs04ChannelEventsReceivePacket extends Struct {
    readonly packetData: IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute;
    readonly timeoutHeight: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute;
    readonly timeoutTimestamp: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute;
    readonly sequence: IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute;
    readonly srcPortId: IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute;
    readonly srcChannelId: IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute;
    readonly dstPortId: IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute;
    readonly dstChannelId: IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute;
    readonly channelOrdering: IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute;
    readonly dstConnectionId: IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsWriteAcknowledgement (503) */
  interface IbcCoreIcs04ChannelEventsWriteAcknowledgement extends Struct {
    readonly packetData: IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute;
    readonly timeoutHeight: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute;
    readonly timeoutTimestamp: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute;
    readonly sequence: IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute;
    readonly srcPortId: IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute;
    readonly srcChannelId: IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute;
    readonly dstPortId: IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute;
    readonly dstChannelId: IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute;
    readonly acknowledgement: IbcCoreIcs04ChannelEventsPacketAttributesAcknowledgementAttribute;
    readonly dstConnectionId: IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsPacketAttributesAcknowledgementAttribute (504) */
  interface IbcCoreIcs04ChannelEventsPacketAttributesAcknowledgementAttribute extends Struct {
    readonly acknowledgement: Bytes;
  }

  /** @name IbcCoreIcs04ChannelEventsAcknowledgePacket (506) */
  interface IbcCoreIcs04ChannelEventsAcknowledgePacket extends Struct {
    readonly timeoutHeight: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute;
    readonly timeoutTimestamp: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute;
    readonly sequence: IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute;
    readonly srcPortId: IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute;
    readonly srcChannelId: IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute;
    readonly dstPortId: IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute;
    readonly dstChannelId: IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute;
    readonly channelOrdering: IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute;
    readonly srcConnectionId: IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsTimeoutPacket (507) */
  interface IbcCoreIcs04ChannelEventsTimeoutPacket extends Struct {
    readonly timeoutHeight: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute;
    readonly timeoutTimestamp: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute;
    readonly sequence: IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute;
    readonly srcPortId: IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute;
    readonly srcChannelId: IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute;
    readonly dstPortId: IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute;
    readonly dstChannelId: IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute;
    readonly channelOrdering: IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute;
  }

  /** @name IbcCoreIcs04ChannelEventsChannelClosed (508) */
  interface IbcCoreIcs04ChannelEventsChannelClosed extends Struct {
    readonly portId: IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute;
    readonly channelId: IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute;
    readonly counterpartyPortId: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute;
    readonly maybeCounterpartyChannelId: Option<IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute>;
    readonly connectionId: IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute;
    readonly channelOrdering: IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute;
  }

  /** @name IbcEventsModuleEvent (510) */
  interface IbcEventsModuleEvent extends Struct {
    readonly kind: Text;
    readonly moduleName: Text;
    readonly attributes: Vec<IbcEventsModuleEventAttribute>;
  }

  /** @name IbcEventsModuleEventAttribute (513) */
  interface IbcEventsModuleEventAttribute extends Struct {
    readonly key: Text;
    readonly value: Text;
  }

  /** @name PalletIbcErrorsIbcError (515) */
  interface PalletIbcErrorsIbcError extends Enum {
    readonly isContextError: boolean;
    readonly asContextError: {
      readonly message: Bytes;
    } & Struct;
    readonly isUnknownMessageTypeUrl: boolean;
    readonly asUnknownMessageTypeUrl: {
      readonly message: Bytes;
    } & Struct;
    readonly isMalformedMessageBytes: boolean;
    readonly asMalformedMessageBytes: {
      readonly message: Bytes;
    } & Struct;
    readonly type: 'ContextError' | 'UnknownMessageTypeUrl' | 'MalformedMessageBytes';
  }

  /** @name PalletIcs20TransferEvent (516) */
  interface PalletIcs20TransferEvent extends Enum {
    readonly isSendPacket: boolean;
    readonly asSendPacket: IbcCoreIcs04ChannelEventsSendPacket;
    readonly isUnsupportedEvent: boolean;
    readonly isTransferNativeToken: boolean;
    readonly asTransferNativeToken: ITuple<[AccountId32, AccountId32, u128]>;
    readonly isTransferNoNativeToken: boolean;
    readonly asTransferNoNativeToken: ITuple<[AccountId32, AccountId32, u128]>;
    readonly isBurnToken: boolean;
    readonly asBurnToken: ITuple<[u32, AccountId32, u128]>;
    readonly isMintToken: boolean;
    readonly asMintToken: ITuple<[u32, AccountId32, u128]>;
    readonly type: 'SendPacket' | 'UnsupportedEvent' | 'TransferNativeToken' | 'TransferNoNativeToken' | 'BurnToken' | 'MintToken';
  }

  /** @name PalletEth2LightClientEvent (518) */
  interface PalletEth2LightClientEvent extends Enum {
    readonly isInit: boolean;
    readonly asInit: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly headerInfo: EthTypesExecutionHeaderInfo;
    } & Struct;
    readonly isSubmitBeaconChainLightClientUpdate: boolean;
    readonly asSubmitBeaconChainLightClientUpdate: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly submitter: AccountId32;
      readonly beaconBlockHeader: EthTypesEth2BeaconBlockHeader;
    } & Struct;
    readonly isSubmitExecutionHeader: boolean;
    readonly asSubmitExecutionHeader: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly headerInfo: EthTypesBlockHeader;
    } & Struct;
    readonly isUpdateTrustedSigner: boolean;
    readonly asUpdateTrustedSigner: {
      readonly trustedSigner: AccountId32;
    } & Struct;
    readonly type: 'Init' | 'SubmitBeaconChainLightClientUpdate' | 'SubmitExecutionHeader' | 'UpdateTrustedSigner';
  }

  /** @name EthTypesExecutionHeaderInfo (519) */
  interface EthTypesExecutionHeaderInfo extends Struct {
    readonly parentHash: H256;
    readonly blockNumber: u64;
    readonly submitter: AccountId32;
  }

  /** @name PalletReceiptRegistryEvent (520) */
  interface PalletReceiptRegistryEvent extends Enum {
    readonly isSubmitProcessedReceipts: boolean;
    readonly asSubmitProcessedReceipts: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly blockNumber: u64;
      readonly receiptHash: TypesPrimitivesH256;
    } & Struct;
    readonly isAddedContractAddress: boolean;
    readonly asAddedContractAddress: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly address: TypesPrimitivesH160;
    } & Struct;
    readonly isRemovedContractAddress: boolean;
    readonly asRemovedContractAddress: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly address: TypesPrimitivesH160;
    } & Struct;
    readonly isUpdateProofFee: boolean;
    readonly asUpdateProofFee: {
      readonly typedChainId: WebbProposalsHeaderTypedChainId;
      readonly proofDeposit: u128;
      readonly proofReward: u128;
    } & Struct;
    readonly type: 'SubmitProcessedReceipts' | 'AddedContractAddress' | 'RemovedContractAddress' | 'UpdateProofFee';
  }

  /** @name TypesPrimitivesH256 (521) */
  interface TypesPrimitivesH256 extends U8aFixed {}

  /** @name OrmlTokensModuleEvent (522) */
  interface OrmlTokensModuleEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly status: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isTotalIssuanceSet: boolean;
    readonly asTotalIssuanceSet: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly freeAmount: u128;
      readonly reservedAmount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockSet: boolean;
    readonly asLockSet: {
      readonly lockId: U8aFixed;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockRemoved: boolean;
    readonly asLockRemoved: {
      readonly lockId: U8aFixed;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Locked' | 'Unlocked';
  }

  /** @name OrmlAssetRegistryModuleEvent (523) */
  interface OrmlAssetRegistryModuleEvent extends Enum {
    readonly isRegisteredAsset: boolean;
    readonly asRegisteredAsset: {
      readonly assetId: u32;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly isUpdatedAsset: boolean;
    readonly asUpdatedAsset: {
      readonly assetId: u32;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly type: 'RegisteredAsset' | 'UpdatedAsset';
  }

  /** @name BtcRelayEvent (524) */
  interface BtcRelayEvent extends Enum {
    readonly isInitialized: boolean;
    readonly asInitialized: {
      readonly blockHeight: u32;
      readonly blockHash: BitcoinH256Le;
      readonly relayerId: AccountId32;
    } & Struct;
    readonly isStoreMainChainHeader: boolean;
    readonly asStoreMainChainHeader: {
      readonly blockHeight: u32;
      readonly blockHash: BitcoinH256Le;
      readonly relayerId: AccountId32;
    } & Struct;
    readonly isStoreForkHeader: boolean;
    readonly asStoreForkHeader: {
      readonly chainId: u32;
      readonly forkHeight: u32;
      readonly blockHash: BitcoinH256Le;
      readonly relayerId: AccountId32;
    } & Struct;
    readonly isChainReorg: boolean;
    readonly asChainReorg: {
      readonly newChainTipHash: BitcoinH256Le;
      readonly newChainTipHeight: u32;
      readonly forkDepth: u32;
    } & Struct;
    readonly isForkAheadOfMainChain: boolean;
    readonly asForkAheadOfMainChain: {
      readonly mainChainHeight: u32;
      readonly forkHeight: u32;
      readonly forkId: u32;
    } & Struct;
    readonly type: 'Initialized' | 'StoreMainChainHeader' | 'StoreForkHeader' | 'ChainReorg' | 'ForkAheadOfMainChain';
  }

  /** @name SecurityEvent (525) */
  interface SecurityEvent extends Enum {
    readonly isUpdateActiveBlock: boolean;
    readonly asUpdateActiveBlock: {
      readonly blockNumber: u32;
    } & Struct;
    readonly isActivated: boolean;
    readonly isDeactivated: boolean;
    readonly type: 'UpdateActiveBlock' | 'Activated' | 'Deactivated';
  }

  /** @name IssueEvent (526) */
  interface IssueEvent extends Enum {
    readonly isRequestIssue: boolean;
    readonly asRequestIssue: {
      readonly issueId: H256;
      readonly requester: AccountId32;
      readonly amount: u128;
      readonly fee: u128;
      readonly griefingCollateral: u128;
      readonly griefingCurrency: InterbtcPrimitivesCurrencyId;
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly vaultAddress: BitcoinAddress;
      readonly vaultPublicKey: BitcoinAddressPublicKey;
    } & Struct;
    readonly isIssueAmountChange: boolean;
    readonly asIssueAmountChange: {
      readonly issueId: H256;
      readonly amount: u128;
      readonly fee: u128;
      readonly confiscatedGriefingCollateral: u128;
    } & Struct;
    readonly isExecuteIssue: boolean;
    readonly asExecuteIssue: {
      readonly issueId: H256;
      readonly requester: AccountId32;
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly amount: u128;
      readonly fee: u128;
    } & Struct;
    readonly isCancelIssue: boolean;
    readonly asCancelIssue: {
      readonly issueId: H256;
      readonly requester: AccountId32;
      readonly griefingCollateral: u128;
    } & Struct;
    readonly isIssuePeriodChange: boolean;
    readonly asIssuePeriodChange: {
      readonly period: u32;
    } & Struct;
    readonly type: 'RequestIssue' | 'IssueAmountChange' | 'ExecuteIssue' | 'CancelIssue' | 'IssuePeriodChange';
  }

  /** @name OracleEvent (527) */
  interface OracleEvent extends Enum {
    readonly isFeedValues: boolean;
    readonly asFeedValues: {
      readonly oracleId: AccountId32;
      readonly values: Vec<ITuple<[InterbtcPrimitivesOracleKey, u128]>>;
    } & Struct;
    readonly isAggregateUpdated: boolean;
    readonly asAggregateUpdated: {
      readonly values: Vec<ITuple<[InterbtcPrimitivesOracleKey, Option<u128>]>>;
    } & Struct;
    readonly isOracleAdded: boolean;
    readonly asOracleAdded: {
      readonly oracleId: AccountId32;
      readonly name: Bytes;
    } & Struct;
    readonly isOracleRemoved: boolean;
    readonly asOracleRemoved: {
      readonly oracleId: AccountId32;
    } & Struct;
    readonly type: 'FeedValues' | 'AggregateUpdated' | 'OracleAdded' | 'OracleRemoved';
  }

  /** @name RedeemEvent (530) */
  interface RedeemEvent extends Enum {
    readonly isRequestRedeem: boolean;
    readonly asRequestRedeem: {
      readonly redeemId: H256;
      readonly redeemer: AccountId32;
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly amount: u128;
      readonly fee: u128;
      readonly premium: u128;
      readonly btcAddress: BitcoinAddress;
      readonly transferFee: u128;
    } & Struct;
    readonly isLiquidationRedeem: boolean;
    readonly asLiquidationRedeem: {
      readonly redeemer: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isExecuteRedeem: boolean;
    readonly asExecuteRedeem: {
      readonly redeemId: H256;
      readonly redeemer: AccountId32;
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly amount: u128;
      readonly fee: u128;
      readonly transferFee: u128;
    } & Struct;
    readonly isCancelRedeem: boolean;
    readonly asCancelRedeem: {
      readonly redeemId: H256;
      readonly redeemer: AccountId32;
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly slashedAmount: u128;
      readonly status: InterbtcPrimitivesRedeemRedeemRequestStatus;
    } & Struct;
    readonly isMintTokensForReimbursedRedeem: boolean;
    readonly asMintTokensForReimbursedRedeem: {
      readonly redeemId: H256;
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly amount: u128;
    } & Struct;
    readonly isRedeemPeriodChange: boolean;
    readonly asRedeemPeriodChange: {
      readonly period: u32;
    } & Struct;
    readonly isSelfRedeem: boolean;
    readonly asSelfRedeem: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly amount: u128;
      readonly fee: u128;
    } & Struct;
    readonly type: 'RequestRedeem' | 'LiquidationRedeem' | 'ExecuteRedeem' | 'CancelRedeem' | 'MintTokensForReimbursedRedeem' | 'RedeemPeriodChange' | 'SelfRedeem';
  }

  /** @name InterbtcPrimitivesRedeemRedeemRequestStatus (531) */
  interface InterbtcPrimitivesRedeemRedeemRequestStatus extends Enum {
    readonly isPending: boolean;
    readonly isCompleted: boolean;
    readonly isReimbursed: boolean;
    readonly asReimbursed: bool;
    readonly isRetried: boolean;
    readonly type: 'Pending' | 'Completed' | 'Reimbursed' | 'Retried';
  }

  /** @name ReplaceEvent (532) */
  interface ReplaceEvent extends Enum {
    readonly isRequestReplace: boolean;
    readonly asRequestReplace: {
      readonly oldVaultId: InterbtcPrimitivesVaultId;
      readonly amount: u128;
      readonly griefingCollateral: u128;
    } & Struct;
    readonly isWithdrawReplace: boolean;
    readonly asWithdrawReplace: {
      readonly oldVaultId: InterbtcPrimitivesVaultId;
      readonly withdrawnTokens: u128;
      readonly withdrawnGriefingCollateral: u128;
    } & Struct;
    readonly isAcceptReplace: boolean;
    readonly asAcceptReplace: {
      readonly replaceId: H256;
      readonly oldVaultId: InterbtcPrimitivesVaultId;
      readonly newVaultId: InterbtcPrimitivesVaultId;
      readonly amount: u128;
      readonly collateral: u128;
      readonly btcAddress: BitcoinAddress;
    } & Struct;
    readonly isExecuteReplace: boolean;
    readonly asExecuteReplace: {
      readonly replaceId: H256;
      readonly oldVaultId: InterbtcPrimitivesVaultId;
      readonly newVaultId: InterbtcPrimitivesVaultId;
    } & Struct;
    readonly isCancelReplace: boolean;
    readonly asCancelReplace: {
      readonly replaceId: H256;
      readonly newVaultId: InterbtcPrimitivesVaultId;
      readonly oldVaultId: InterbtcPrimitivesVaultId;
      readonly griefingCollateral: u128;
    } & Struct;
    readonly isReplacePeriodChange: boolean;
    readonly asReplacePeriodChange: {
      readonly period: u32;
    } & Struct;
    readonly type: 'RequestReplace' | 'WithdrawReplace' | 'AcceptReplace' | 'ExecuteReplace' | 'CancelReplace' | 'ReplacePeriodChange';
  }

  /** @name VaultRegistryEvent (533) */
  interface VaultRegistryEvent extends Enum {
    readonly isRegisterVault: boolean;
    readonly asRegisterVault: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly collateral: u128;
    } & Struct;
    readonly isIncreaseLockedCollateral: boolean;
    readonly asIncreaseLockedCollateral: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly delta: u128;
      readonly total: u128;
    } & Struct;
    readonly isDecreaseLockedCollateral: boolean;
    readonly asDecreaseLockedCollateral: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly delta: u128;
      readonly total: u128;
    } & Struct;
    readonly isUpdatePublicKey: boolean;
    readonly asUpdatePublicKey: {
      readonly accountId: AccountId32;
      readonly publicKey: BitcoinAddressPublicKey;
    } & Struct;
    readonly isRegisterAddress: boolean;
    readonly asRegisterAddress: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly address: BitcoinAddress;
    } & Struct;
    readonly isIncreaseToBeIssuedTokens: boolean;
    readonly asIncreaseToBeIssuedTokens: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly increase: u128;
    } & Struct;
    readonly isDecreaseToBeIssuedTokens: boolean;
    readonly asDecreaseToBeIssuedTokens: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly decrease: u128;
    } & Struct;
    readonly isIssueTokens: boolean;
    readonly asIssueTokens: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly increase: u128;
    } & Struct;
    readonly isIncreaseToBeRedeemedTokens: boolean;
    readonly asIncreaseToBeRedeemedTokens: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly increase: u128;
    } & Struct;
    readonly isDecreaseToBeRedeemedTokens: boolean;
    readonly asDecreaseToBeRedeemedTokens: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly decrease: u128;
    } & Struct;
    readonly isIncreaseToBeReplacedTokens: boolean;
    readonly asIncreaseToBeReplacedTokens: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly increase: u128;
    } & Struct;
    readonly isDecreaseToBeReplacedTokens: boolean;
    readonly asDecreaseToBeReplacedTokens: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly decrease: u128;
    } & Struct;
    readonly isDecreaseTokens: boolean;
    readonly asDecreaseTokens: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly userId: AccountId32;
      readonly decrease: u128;
    } & Struct;
    readonly isRedeemTokens: boolean;
    readonly asRedeemTokens: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly redeemedAmount: u128;
    } & Struct;
    readonly isRedeemTokensPremium: boolean;
    readonly asRedeemTokensPremium: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly redeemedAmount: u128;
      readonly collateral: u128;
      readonly userId: AccountId32;
    } & Struct;
    readonly isRedeemTokensLiquidatedVault: boolean;
    readonly asRedeemTokensLiquidatedVault: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly tokens: u128;
      readonly collateral: u128;
    } & Struct;
    readonly isRedeemTokensLiquidation: boolean;
    readonly asRedeemTokensLiquidation: {
      readonly redeemerId: AccountId32;
      readonly burnedTokens: u128;
      readonly transferredCollateral: u128;
    } & Struct;
    readonly isReplaceTokens: boolean;
    readonly asReplaceTokens: {
      readonly oldVaultId: InterbtcPrimitivesVaultId;
      readonly newVaultId: InterbtcPrimitivesVaultId;
      readonly amount: u128;
      readonly additionalCollateral: u128;
    } & Struct;
    readonly isLiquidateVault: boolean;
    readonly asLiquidateVault: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly issuedTokens: u128;
      readonly toBeIssuedTokens: u128;
      readonly toBeRedeemedTokens: u128;
      readonly toBeReplacedTokens: u128;
      readonly backingCollateral: u128;
      readonly status: VaultRegistryVaultStatus;
      readonly replaceCollateral: u128;
    } & Struct;
    readonly isBanVault: boolean;
    readonly asBanVault: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly bannedUntil: u32;
    } & Struct;
    readonly isSetAcceptNewIssues: boolean;
    readonly asSetAcceptNewIssues: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly acceptNewIssues: bool;
    } & Struct;
    readonly isSetSecureCollateralThreshold: boolean;
    readonly asSetSecureCollateralThreshold: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly threshold: u128;
    } & Struct;
    readonly isSetPremiumRedeemThreshold: boolean;
    readonly asSetPremiumRedeemThreshold: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly threshold: u128;
    } & Struct;
    readonly isSetLiquidationCollateralThreshold: boolean;
    readonly asSetLiquidationCollateralThreshold: {
      readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
      readonly threshold: u128;
    } & Struct;
    readonly isSetCustomSecureThreshold: boolean;
    readonly asSetCustomSecureThreshold: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly customThreshold: Option<u128>;
    } & Struct;
    readonly type: 'RegisterVault' | 'IncreaseLockedCollateral' | 'DecreaseLockedCollateral' | 'UpdatePublicKey' | 'RegisterAddress' | 'IncreaseToBeIssuedTokens' | 'DecreaseToBeIssuedTokens' | 'IssueTokens' | 'IncreaseToBeRedeemedTokens' | 'DecreaseToBeRedeemedTokens' | 'IncreaseToBeReplacedTokens' | 'DecreaseToBeReplacedTokens' | 'DecreaseTokens' | 'RedeemTokens' | 'RedeemTokensPremium' | 'RedeemTokensLiquidatedVault' | 'RedeemTokensLiquidation' | 'ReplaceTokens' | 'LiquidateVault' | 'BanVault' | 'SetAcceptNewIssues' | 'SetSecureCollateralThreshold' | 'SetPremiumRedeemThreshold' | 'SetLiquidationCollateralThreshold' | 'SetCustomSecureThreshold';
  }

  /** @name VaultRegistryVaultStatus (534) */
  interface VaultRegistryVaultStatus extends Enum {
    readonly isActive: boolean;
    readonly asActive: bool;
    readonly isLiquidated: boolean;
    readonly type: 'Active' | 'Liquidated';
  }

  /** @name RewardEvent (535) */
  interface RewardEvent extends Enum {
    readonly isDepositStake: boolean;
    readonly asDepositStake: {
      readonly poolId: InterbtcPrimitivesCurrencyId;
      readonly stakeId: InterbtcPrimitivesVaultId;
      readonly amount: i128;
    } & Struct;
    readonly isDistributeReward: boolean;
    readonly asDistributeReward: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: i128;
    } & Struct;
    readonly isWithdrawStake: boolean;
    readonly asWithdrawStake: {
      readonly poolId: InterbtcPrimitivesCurrencyId;
      readonly stakeId: InterbtcPrimitivesVaultId;
      readonly amount: i128;
    } & Struct;
    readonly isWithdrawReward: boolean;
    readonly asWithdrawReward: {
      readonly poolId: InterbtcPrimitivesCurrencyId;
      readonly stakeId: InterbtcPrimitivesVaultId;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: i128;
    } & Struct;
    readonly type: 'DepositStake' | 'DistributeReward' | 'WithdrawStake' | 'WithdrawReward';
  }

  /** @name StakingEvent (538) */
  interface StakingEvent extends Enum {
    readonly isDepositStake: boolean;
    readonly asDepositStake: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly nominatorId: AccountId32;
      readonly amount: i128;
    } & Struct;
    readonly isDistributeReward: boolean;
    readonly asDistributeReward: {
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly amount: i128;
    } & Struct;
    readonly isWithdrawStake: boolean;
    readonly asWithdrawStake: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly nominatorId: AccountId32;
      readonly amount: i128;
    } & Struct;
    readonly isWithdrawReward: boolean;
    readonly asWithdrawReward: {
      readonly nonce: u32;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly nominatorId: AccountId32;
      readonly amount: i128;
    } & Struct;
    readonly isForceRefund: boolean;
    readonly asForceRefund: {
      readonly vaultId: InterbtcPrimitivesVaultId;
    } & Struct;
    readonly isIncreaseNonce: boolean;
    readonly asIncreaseNonce: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly newNonce: u32;
    } & Struct;
    readonly type: 'DepositStake' | 'DistributeReward' | 'WithdrawStake' | 'WithdrawReward' | 'ForceRefund' | 'IncreaseNonce';
  }

  /** @name NominationEvent (540) */
  interface NominationEvent extends Enum {
    readonly isNominationOptIn: boolean;
    readonly asNominationOptIn: {
      readonly vaultId: InterbtcPrimitivesVaultId;
    } & Struct;
    readonly isNominationOptOut: boolean;
    readonly asNominationOptOut: {
      readonly vaultId: InterbtcPrimitivesVaultId;
    } & Struct;
    readonly isDepositCollateral: boolean;
    readonly asDepositCollateral: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly nominatorId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawCollateral: boolean;
    readonly asWithdrawCollateral: {
      readonly vaultId: InterbtcPrimitivesVaultId;
      readonly nominatorId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NominationOptIn' | 'NominationOptOut' | 'DepositCollateral' | 'WithdrawCollateral';
  }

  /** @name ClientsInfoEvent (541) */
  interface ClientsInfoEvent extends Enum {
    readonly isNotifyClientRelease: boolean;
    readonly asNotifyClientRelease: {
      readonly release: ClientsInfoClientRelease;
    } & Struct;
    readonly isApplyClientRelease: boolean;
    readonly asApplyClientRelease: {
      readonly release: ClientsInfoClientRelease;
    } & Struct;
    readonly type: 'NotifyClientRelease' | 'ApplyClientRelease';
  }

  /** @name LoansEvent (542) */
  interface LoansEvent extends Enum {
    readonly isDepositCollateral: boolean;
    readonly asDepositCollateral: {
      readonly accountId: AccountId32;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawCollateral: boolean;
    readonly asWithdrawCollateral: {
      readonly accountId: AccountId32;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly accountId: AccountId32;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isRedeemed: boolean;
    readonly asRedeemed: {
      readonly accountId: AccountId32;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isBorrowed: boolean;
    readonly asBorrowed: {
      readonly accountId: AccountId32;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isRepaidBorrow: boolean;
    readonly asRepaidBorrow: {
      readonly accountId: AccountId32;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isLiquidatedBorrow: boolean;
    readonly asLiquidatedBorrow: {
      readonly liquidator: AccountId32;
      readonly borrower: AccountId32;
      readonly liquidationCurrencyId: InterbtcPrimitivesCurrencyId;
      readonly collateralCurrencyId: InterbtcPrimitivesCurrencyId;
      readonly repayAmount: u128;
      readonly collateralUnderlyingAmount: u128;
    } & Struct;
    readonly isReservesReduced: boolean;
    readonly asReservesReduced: {
      readonly receiver: AccountId32;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: u128;
      readonly newReserveAmount: u128;
    } & Struct;
    readonly isReservesAdded: boolean;
    readonly asReservesAdded: {
      readonly payer: AccountId32;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: u128;
      readonly newReserveAmount: u128;
    } & Struct;
    readonly isNewMarket: boolean;
    readonly asNewMarket: {
      readonly underlyingCurrencyId: InterbtcPrimitivesCurrencyId;
      readonly market: LoansMarket;
    } & Struct;
    readonly isActivatedMarket: boolean;
    readonly asActivatedMarket: {
      readonly underlyingCurrencyId: InterbtcPrimitivesCurrencyId;
    } & Struct;
    readonly isUpdatedMarket: boolean;
    readonly asUpdatedMarket: {
      readonly underlyingCurrencyId: InterbtcPrimitivesCurrencyId;
      readonly market: LoansMarket;
    } & Struct;
    readonly isRewardAdded: boolean;
    readonly asRewardAdded: {
      readonly payer: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRewardWithdrawn: boolean;
    readonly asRewardWithdrawn: {
      readonly receiver: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMarketRewardSpeedUpdated: boolean;
    readonly asMarketRewardSpeedUpdated: {
      readonly underlyingCurrencyId: InterbtcPrimitivesCurrencyId;
      readonly supplyRewardPerBlock: u128;
      readonly borrowRewardPerBlock: u128;
    } & Struct;
    readonly isDistributedSupplierReward: boolean;
    readonly asDistributedSupplierReward: {
      readonly underlyingCurrencyId: InterbtcPrimitivesCurrencyId;
      readonly supplier: AccountId32;
      readonly rewardDelta: u128;
      readonly supplyRewardIndex: u128;
    } & Struct;
    readonly isDistributedBorrowerReward: boolean;
    readonly asDistributedBorrowerReward: {
      readonly underlyingCurrencyId: InterbtcPrimitivesCurrencyId;
      readonly borrower: AccountId32;
      readonly rewardDelta: u128;
      readonly borrowRewardIndex: u128;
    } & Struct;
    readonly isRewardPaid: boolean;
    readonly asRewardPaid: {
      readonly receiver: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isIncentiveReservesReduced: boolean;
    readonly asIncentiveReservesReduced: {
      readonly receiver: AccountId32;
      readonly currencyId: InterbtcPrimitivesCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isInterestAccrued: boolean;
    readonly asInterestAccrued: {
      readonly underlyingCurrencyId: InterbtcPrimitivesCurrencyId;
      readonly totalBorrows: u128;
      readonly totalReserves: u128;
      readonly borrowIndex: u128;
      readonly utilizationRatio: Permill;
      readonly borrowRate: u128;
      readonly supplyRate: u128;
      readonly exchangeRate: u128;
    } & Struct;
    readonly type: 'DepositCollateral' | 'WithdrawCollateral' | 'Deposited' | 'Redeemed' | 'Borrowed' | 'RepaidBorrow' | 'LiquidatedBorrow' | 'ReservesReduced' | 'ReservesAdded' | 'NewMarket' | 'ActivatedMarket' | 'UpdatedMarket' | 'RewardAdded' | 'RewardWithdrawn' | 'MarketRewardSpeedUpdated' | 'DistributedSupplierReward' | 'DistributedBorrowerReward' | 'RewardPaid' | 'IncentiveReservesReduced' | 'InterestAccrued';
  }

  /** @name PalletDexEvent (543) */
  interface PalletDexEvent extends Enum {
    readonly isSubmitProcessedReceipts: boolean;
    readonly asSubmitProcessedReceipts: {
      readonly blockNumber: u64;
    } & Struct;
    readonly isOrderCreated: boolean;
    readonly asOrderCreated: {
      readonly orderIndex: u64;
      readonly order: PalletDexOrder;
    } & Struct;
    readonly isOrderTaken: boolean;
    readonly asOrderTaken: {
      readonly account: AccountId32;
      readonly orderIndex: u64;
      readonly order: PalletDexOrder;
    } & Struct;
    readonly isOrderCanceled: boolean;
    readonly asOrderCanceled: {
      readonly orderIndex: u64;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly assetId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawed: boolean;
    readonly asWithdrawed: {
      readonly assetId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'SubmitProcessedReceipts' | 'OrderCreated' | 'OrderTaken' | 'OrderCanceled' | 'Deposited' | 'Withdrawed';
  }

  /** @name PalletDexOrder (544) */
  interface PalletDexOrder extends Struct {
    readonly counter: u64;
    readonly address: AccountId32;
    readonly pair: ITuple<[u32, u32]>;
    readonly timestamp: u64;
    readonly orderType: PalletDexOrderType;
    readonly amountOffered: u128;
    readonly amoutRequested: u128;
  }

  /** @name FrameSystemPhase (545) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (547) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemLimitsBlockWeights (548) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (549) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (550) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (551) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (552) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (553) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (554) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (558) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name RuntimeCommonChainSpecRuntimeConfig (559) */
  interface RuntimeCommonChainSpecRuntimeConfig extends Struct {
    readonly blockTimeInMillis: u64;
    readonly sessionTimeInSeconds: u64;
  }

  /** @name PalletBalancesBalanceLock (561) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (562) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (565) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesIdAmount (568) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletBalancesError (570) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes';
  }

  /** @name PalletImOnlineBoundedOpaqueNetworkState (577) */
  interface PalletImOnlineBoundedOpaqueNetworkState extends Struct {
    readonly peerId: Bytes;
    readonly externalAddresses: Vec<Bytes>;
  }

  /** @name PalletImOnlineError (582) */
  interface PalletImOnlineError extends Enum {
    readonly isInvalidKey: boolean;
    readonly isDuplicatedHeartbeat: boolean;
    readonly type: 'InvalidKey' | 'DuplicatedHeartbeat';
  }

  /** @name PalletTransactionPaymentReleases (583) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name SpStakingOffenceOffenceDetails (584) */
  interface SpStakingOffenceOffenceDetails extends Struct {
    readonly offender: ITuple<[AccountId32, PalletStakingExposure]>;
    readonly reporters: Vec<AccountId32>;
  }

  /** @name PalletStakingStakingLedger (586) */
  interface PalletStakingStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PalletStakingUnlockChunk>;
    readonly claimedRewards: Vec<u32>;
  }

  /** @name PalletStakingUnlockChunk (588) */
  interface PalletStakingUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletStakingNominations (591) */
  interface PalletStakingNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PalletStakingActiveEraInfo (593) */
  interface PalletStakingActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PalletStakingEraRewardPoints (594) */
  interface PalletStakingEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<AccountId32, u32>;
  }

  /** @name PalletStakingUnappliedSlash (599) */
  interface PalletStakingUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporters: Vec<AccountId32>;
    readonly payout: u128;
  }

  /** @name PalletStakingSlashingSlashingSpans (601) */
  interface PalletStakingSlashingSlashingSpans extends Struct {
    readonly spanIndex: u32;
    readonly lastStart: u32;
    readonly lastNonzeroSlash: u32;
    readonly prior: Vec<u32>;
  }

  /** @name PalletStakingSlashingSpanRecord (602) */
  interface PalletStakingSlashingSpanRecord extends Struct {
    readonly slashed: u128;
    readonly paidOut: u128;
  }

  /** @name PalletStakingPalletError (605) */
  interface PalletStakingPalletError extends Enum {
    readonly isNotController: boolean;
    readonly isNotStash: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isAlreadyPaired: boolean;
    readonly isEmptyTargets: boolean;
    readonly isDuplicateIndex: boolean;
    readonly isInvalidSlashIndex: boolean;
    readonly isInsufficientBond: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isNoUnlockChunk: boolean;
    readonly isFundedTarget: boolean;
    readonly isInvalidEraToReward: boolean;
    readonly isInvalidNumberOfNominations: boolean;
    readonly isNotSortedAndUnique: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isIncorrectHistoryDepth: boolean;
    readonly isIncorrectSlashingSpans: boolean;
    readonly isBadState: boolean;
    readonly isTooManyTargets: boolean;
    readonly isBadTarget: boolean;
    readonly isCannotChillOther: boolean;
    readonly isTooManyNominators: boolean;
    readonly isTooManyValidators: boolean;
    readonly isCommissionTooLow: boolean;
    readonly isBoundNotMet: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashIndex' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'NotSortedAndUnique' | 'AlreadyClaimed' | 'IncorrectHistoryDepth' | 'IncorrectSlashingSpans' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators' | 'CommissionTooLow' | 'BoundNotMet';
  }

  /** @name SpCoreCryptoKeyTypeId (609) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (610) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletGrandpaStoredState (611) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (612) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaError (614) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletAssetsAssetDetails (615) */
  interface PalletAssetsAssetDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly freezer: AccountId32;
    readonly supply: u128;
    readonly deposit: u128;
    readonly minBalance: u128;
    readonly isSufficient: bool;
    readonly accounts: u32;
    readonly sufficients: u32;
    readonly approvals: u32;
    readonly status: PalletAssetsAssetStatus;
  }

  /** @name PalletAssetsAssetStatus (616) */
  interface PalletAssetsAssetStatus extends Enum {
    readonly isLive: boolean;
    readonly isFrozen: boolean;
    readonly isDestroying: boolean;
    readonly type: 'Live' | 'Frozen' | 'Destroying';
  }

  /** @name PalletAssetsAssetAccount (617) */
  interface PalletAssetsAssetAccount extends Struct {
    readonly balance: u128;
    readonly status: PalletAssetsAccountStatus;
    readonly reason: PalletAssetsExistenceReason;
    readonly extra: Null;
  }

  /** @name PalletAssetsAccountStatus (618) */
  interface PalletAssetsAccountStatus extends Enum {
    readonly isLiquid: boolean;
    readonly isFrozen: boolean;
    readonly isBlocked: boolean;
    readonly type: 'Liquid' | 'Frozen' | 'Blocked';
  }

  /** @name PalletAssetsExistenceReason (619) */
  interface PalletAssetsExistenceReason extends Enum {
    readonly isConsumer: boolean;
    readonly isSufficient: boolean;
    readonly isDepositHeld: boolean;
    readonly asDepositHeld: u128;
    readonly isDepositRefunded: boolean;
    readonly isDepositFrom: boolean;
    readonly asDepositFrom: ITuple<[AccountId32, u128]>;
    readonly type: 'Consumer' | 'Sufficient' | 'DepositHeld' | 'DepositRefunded' | 'DepositFrom';
  }

  /** @name PalletAssetsApproval (621) */
  interface PalletAssetsApproval extends Struct {
    readonly amount: u128;
    readonly deposit: u128;
  }

  /** @name PalletAssetsAssetMetadata (622) */
  interface PalletAssetsAssetMetadata extends Struct {
    readonly deposit: u128;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly isFrozen: bool;
  }

  /** @name PalletAssetsError (624) */
  interface PalletAssetsError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isNoAccount: boolean;
    readonly isNoPermission: boolean;
    readonly isUnknown: boolean;
    readonly isFrozen: boolean;
    readonly isInUse: boolean;
    readonly isBadWitness: boolean;
    readonly isMinBalanceZero: boolean;
    readonly isUnavailableConsumer: boolean;
    readonly isBadMetadata: boolean;
    readonly isUnapproved: boolean;
    readonly isWouldDie: boolean;
    readonly isAlreadyExists: boolean;
    readonly isNoDeposit: boolean;
    readonly isWouldBurn: boolean;
    readonly isLiveAsset: boolean;
    readonly isAssetNotLive: boolean;
    readonly isIncorrectStatus: boolean;
    readonly isNotFrozen: boolean;
    readonly isCallbackFailed: boolean;
    readonly type: 'BalanceLow' | 'NoAccount' | 'NoPermission' | 'Unknown' | 'Frozen' | 'InUse' | 'BadWitness' | 'MinBalanceZero' | 'UnavailableConsumer' | 'BadMetadata' | 'Unapproved' | 'WouldDie' | 'AlreadyExists' | 'NoDeposit' | 'WouldBurn' | 'LiveAsset' | 'AssetNotLive' | 'IncorrectStatus' | 'NotFrozen' | 'CallbackFailed';
  }

  /** @name PalletBountiesBounty (625) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (626) */
  interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletBountiesError (629) */
  interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name PalletVestingReleases (632) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (633) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletSchedulerScheduled (636) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: GgxchainRuntimeBrooklynOriginCaller;
  }

  /** @name PalletSchedulerError (638) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletIndicesError (640) */
  interface PalletIndicesError extends Enum {
    readonly isNotAssigned: boolean;
    readonly isNotOwner: boolean;
    readonly isInUse: boolean;
    readonly isNotTransfer: boolean;
    readonly isPermanent: boolean;
    readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
  }

  /** @name PalletProxyProxyDefinition (643) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: GgxchainRuntimeBrooklynPosProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (647) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (649) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletMultisigMultisig (651) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (653) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletIdentityRegistration (654) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (662) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (664) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
  }

  /** @name PalletSudoError (665) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletUtilityError (666) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletElectionProviderMultiPhaseReadySolution (669) */
  interface PalletElectionProviderMultiPhaseReadySolution extends Struct {
    readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
    readonly score: SpNposElectionsElectionScore;
    readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
  }

  /** @name PalletElectionProviderMultiPhaseRoundSnapshot (671) */
  interface PalletElectionProviderMultiPhaseRoundSnapshot extends Struct {
    readonly voters: Vec<ITuple<[AccountId32, u64, Vec<AccountId32>]>>;
    readonly targets: Vec<AccountId32>;
  }

  /** @name PalletElectionProviderMultiPhaseSignedSignedSubmission (677) */
  interface PalletElectionProviderMultiPhaseSignedSignedSubmission extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
    readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
    readonly callFee: u128;
  }

  /** @name PalletElectionProviderMultiPhaseError (678) */
  interface PalletElectionProviderMultiPhaseError extends Enum {
    readonly isPreDispatchEarlySubmission: boolean;
    readonly isPreDispatchWrongWinnerCount: boolean;
    readonly isPreDispatchWeakSubmission: boolean;
    readonly isSignedQueueFull: boolean;
    readonly isSignedCannotPayDeposit: boolean;
    readonly isSignedInvalidWitness: boolean;
    readonly isSignedTooMuchWeight: boolean;
    readonly isOcwCallWrongEra: boolean;
    readonly isMissingSnapshotMetadata: boolean;
    readonly isInvalidSubmissionIndex: boolean;
    readonly isCallNotAllowed: boolean;
    readonly isFallbackFailed: boolean;
    readonly isBoundNotMet: boolean;
    readonly isTooManyWinners: boolean;
    readonly type: 'PreDispatchEarlySubmission' | 'PreDispatchWrongWinnerCount' | 'PreDispatchWeakSubmission' | 'SignedQueueFull' | 'SignedCannotPayDeposit' | 'SignedInvalidWitness' | 'SignedTooMuchWeight' | 'OcwCallWrongEra' | 'MissingSnapshotMetadata' | 'InvalidSubmissionIndex' | 'CallNotAllowed' | 'FallbackFailed' | 'BoundNotMet' | 'TooManyWinners';
  }

  /** @name PalletTreasuryProposal (679) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (680) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (681) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletConvictionVotingVoteVoting (683) */
  interface PalletConvictionVotingVoteVoting extends Enum {
    readonly isCasting: boolean;
    readonly asCasting: PalletConvictionVotingVoteCasting;
    readonly isDelegating: boolean;
    readonly asDelegating: PalletConvictionVotingVoteDelegating;
    readonly type: 'Casting' | 'Delegating';
  }

  /** @name PalletConvictionVotingVoteCasting (684) */
  interface PalletConvictionVotingVoteCasting extends Struct {
    readonly votes: Vec<ITuple<[u32, PalletConvictionVotingVoteAccountVote]>>;
    readonly delegations: PalletConvictionVotingDelegations;
    readonly prior: PalletConvictionVotingVotePriorLock;
  }

  /** @name PalletConvictionVotingDelegations (688) */
  interface PalletConvictionVotingDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletConvictionVotingVotePriorLock (689) */
  interface PalletConvictionVotingVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletConvictionVotingVoteDelegating (690) */
  interface PalletConvictionVotingVoteDelegating extends Struct {
    readonly balance: u128;
    readonly target: AccountId32;
    readonly conviction: PalletConvictionVotingConviction;
    readonly delegations: PalletConvictionVotingDelegations;
    readonly prior: PalletConvictionVotingVotePriorLock;
  }

  /** @name PalletConvictionVotingError (694) */
  interface PalletConvictionVotingError extends Enum {
    readonly isNotOngoing: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isNoPermissionYet: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isAlreadyVoting: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isNonsense: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isClassNeeded: boolean;
    readonly isBadClass: boolean;
    readonly type: 'NotOngoing' | 'NotVoter' | 'NoPermission' | 'NoPermissionYet' | 'AlreadyDelegating' | 'AlreadyVoting' | 'InsufficientFunds' | 'NotDelegating' | 'Nonsense' | 'MaxVotesReached' | 'ClassNeeded' | 'BadClass';
  }

  /** @name PalletReferendaReferendumInfo (695) */
  interface PalletReferendaReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletReferendaReferendumStatus;
    readonly isApproved: boolean;
    readonly asApproved: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isTimedOut: boolean;
    readonly asTimedOut: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isKilled: boolean;
    readonly asKilled: u32;
    readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
  }

  /** @name PalletReferendaReferendumStatus (696) */
  interface PalletReferendaReferendumStatus extends Struct {
    readonly track: u16;
    readonly origin: GgxchainRuntimeBrooklynOriginCaller;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly enactment: FrameSupportScheduleDispatchTime;
    readonly submitted: u32;
    readonly submissionDeposit: PalletReferendaDeposit;
    readonly decisionDeposit: Option<PalletReferendaDeposit>;
    readonly deciding: Option<PalletReferendaDecidingStatus>;
    readonly tally: PalletConvictionVotingTally;
    readonly inQueue: bool;
    readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
  }

  /** @name PalletReferendaDeposit (697) */
  interface PalletReferendaDeposit extends Struct {
    readonly who: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletReferendaDecidingStatus (700) */
  interface PalletReferendaDecidingStatus extends Struct {
    readonly since: u32;
    readonly confirming: Option<u32>;
  }

  /** @name PalletReferendaTrackInfo (708) */
  interface PalletReferendaTrackInfo extends Struct {
    readonly name: Text;
    readonly maxDeciding: u32;
    readonly decisionDeposit: u128;
    readonly preparePeriod: u32;
    readonly decisionPeriod: u32;
    readonly confirmPeriod: u32;
    readonly minEnactmentPeriod: u32;
    readonly minApproval: PalletReferendaCurve;
    readonly minSupport: PalletReferendaCurve;
  }

  /** @name PalletReferendaCurve (709) */
  interface PalletReferendaCurve extends Enum {
    readonly isLinearDecreasing: boolean;
    readonly asLinearDecreasing: {
      readonly length: Perbill;
      readonly floor: Perbill;
      readonly ceil: Perbill;
    } & Struct;
    readonly isSteppedDecreasing: boolean;
    readonly asSteppedDecreasing: {
      readonly begin: Perbill;
      readonly end: Perbill;
      readonly step: Perbill;
      readonly period: Perbill;
    } & Struct;
    readonly isReciprocal: boolean;
    readonly asReciprocal: {
      readonly factor: i64;
      readonly xOffset: i64;
      readonly yOffset: i64;
    } & Struct;
    readonly type: 'LinearDecreasing' | 'SteppedDecreasing' | 'Reciprocal';
  }

  /** @name PalletReferendaError (711) */
  interface PalletReferendaError extends Enum {
    readonly isNotOngoing: boolean;
    readonly isHasDeposit: boolean;
    readonly isBadTrack: boolean;
    readonly isFull: boolean;
    readonly isQueueEmpty: boolean;
    readonly isBadReferendum: boolean;
    readonly isNothingToDo: boolean;
    readonly isNoTrack: boolean;
    readonly isUnfinished: boolean;
    readonly isNoPermission: boolean;
    readonly isNoDeposit: boolean;
    readonly isBadStatus: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'NotOngoing' | 'HasDeposit' | 'BadTrack' | 'Full' | 'QueueEmpty' | 'BadReferendum' | 'NothingToDo' | 'NoTrack' | 'Unfinished' | 'NoPermission' | 'NoDeposit' | 'BadStatus' | 'PreimageNotExist';
  }

  /** @name PalletWhitelistError (712) */
  interface PalletWhitelistError extends Enum {
    readonly isUnavailablePreImage: boolean;
    readonly isUndecodableCall: boolean;
    readonly isInvalidCallWeightWitness: boolean;
    readonly isCallIsNotWhitelisted: boolean;
    readonly isCallAlreadyWhitelisted: boolean;
    readonly type: 'UnavailablePreImage' | 'UndecodableCall' | 'InvalidCallWeightWitness' | 'CallIsNotWhitelisted' | 'CallAlreadyWhitelisted';
  }

  /** @name PalletSocietyBid (714) */
  interface PalletSocietyBid extends Struct {
    readonly who: AccountId32;
    readonly kind: PalletSocietyBidKind;
    readonly value: u128;
  }

  /** @name PalletSocietyBidKind (715) */
  interface PalletSocietyBidKind extends Enum {
    readonly isDeposit: boolean;
    readonly asDeposit: u128;
    readonly isVouch: boolean;
    readonly asVouch: ITuple<[AccountId32, u128]>;
    readonly type: 'Deposit' | 'Vouch';
  }

  /** @name PalletSocietyVouchingStatus (717) */
  interface PalletSocietyVouchingStatus extends Enum {
    readonly isVouching: boolean;
    readonly isBanned: boolean;
    readonly type: 'Vouching' | 'Banned';
  }

  /** @name PalletSocietyVote (719) */
  interface PalletSocietyVote extends Enum {
    readonly isSkeptic: boolean;
    readonly isReject: boolean;
    readonly isApprove: boolean;
    readonly type: 'Skeptic' | 'Reject' | 'Approve';
  }

  /** @name PalletSocietyError (720) */
  interface PalletSocietyError extends Enum {
    readonly isBadPosition: boolean;
    readonly isNotMember: boolean;
    readonly isAlreadyMember: boolean;
    readonly isSuspended: boolean;
    readonly isNotSuspended: boolean;
    readonly isNoPayout: boolean;
    readonly isAlreadyFounded: boolean;
    readonly isInsufficientPot: boolean;
    readonly isAlreadyVouching: boolean;
    readonly isNotVouching: boolean;
    readonly isHead: boolean;
    readonly isFounder: boolean;
    readonly isAlreadyBid: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isMaxMembers: boolean;
    readonly isNotFounder: boolean;
    readonly isNotHead: boolean;
    readonly type: 'BadPosition' | 'NotMember' | 'AlreadyMember' | 'Suspended' | 'NotSuspended' | 'NoPayout' | 'AlreadyFounded' | 'InsufficientPot' | 'AlreadyVouching' | 'NotVouching' | 'Head' | 'Founder' | 'AlreadyBid' | 'AlreadyCandidate' | 'NotCandidate' | 'MaxMembers' | 'NotFounder' | 'NotHead';
  }

  /** @name PalletPreimageRequestStatus (721) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (724) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name FpRpcTransactionStatus (727) */
  interface FpRpcTransactionStatus extends Struct {
    readonly transactionHash: H256;
    readonly transactionIndex: u32;
    readonly from: H160;
    readonly to: Option<H160>;
    readonly contractAddress: Option<H160>;
    readonly logs: Vec<EthereumLog>;
    readonly logsBloom: EthbloomBloom;
  }

  /** @name EthereumReceiptReceiptV3 (730) */
  interface EthereumReceiptReceiptV3 extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: EthereumReceiptEip658ReceiptData;
    readonly isEip2930: boolean;
    readonly asEip2930: EthereumReceiptEip658ReceiptData;
    readonly isEip1559: boolean;
    readonly asEip1559: EthereumReceiptEip658ReceiptData;
    readonly type: 'Legacy' | 'Eip2930' | 'Eip1559';
  }

  /** @name EthereumReceiptEip658ReceiptData (731) */
  interface EthereumReceiptEip658ReceiptData extends Struct {
    readonly statusCode: u8;
    readonly usedGas: U256;
    readonly logsBloom: EthbloomBloom;
    readonly logs: Vec<EthereumLog>;
  }

  /** @name EthereumBlock (732) */
  interface EthereumBlock extends Struct {
    readonly header: EthereumHeader;
    readonly transactions: Vec<EthereumTransactionTransactionV2>;
    readonly ommers: Vec<EthereumHeader>;
  }

  /** @name EthereumHeader (733) */
  interface EthereumHeader extends Struct {
    readonly parentHash: H256;
    readonly ommersHash: H256;
    readonly beneficiary: H160;
    readonly stateRoot: H256;
    readonly transactionsRoot: H256;
    readonly receiptsRoot: H256;
    readonly logsBloom: EthbloomBloom;
    readonly difficulty: U256;
    readonly number: U256;
    readonly gasLimit: U256;
    readonly gasUsed: U256;
    readonly timestamp: u64;
    readonly extraData: Bytes;
    readonly mixHash: H256;
    readonly nonce: EthereumTypesHashH64;
  }

  /** @name PalletEthereumError (738) */
  interface PalletEthereumError extends Enum {
    readonly isInvalidSignature: boolean;
    readonly isPreLogExists: boolean;
    readonly type: 'InvalidSignature' | 'PreLogExists';
  }

  /** @name PalletEvmCodeMetadata (739) */
  interface PalletEvmCodeMetadata extends Struct {
    readonly size_: u64;
    readonly hash_: H256;
  }

  /** @name PalletEvmError (741) */
  interface PalletEvmError extends Enum {
    readonly isBalanceLow: boolean;
    readonly isFeeOverflow: boolean;
    readonly isPaymentOverflow: boolean;
    readonly isWithdrawFailed: boolean;
    readonly isGasPriceTooLow: boolean;
    readonly isInvalidNonce: boolean;
    readonly isGasLimitTooLow: boolean;
    readonly isGasLimitTooHigh: boolean;
    readonly isUndefined: boolean;
    readonly isReentrancy: boolean;
    readonly isTransactionMustComeFromEOA: boolean;
    readonly type: 'BalanceLow' | 'FeeOverflow' | 'PaymentOverflow' | 'WithdrawFailed' | 'GasPriceTooLow' | 'InvalidNonce' | 'GasLimitTooLow' | 'GasLimitTooHigh' | 'Undefined' | 'Reentrancy' | 'TransactionMustComeFromEOA';
  }

  /** @name PalletHotfixSufficientsError (742) */
  interface PalletHotfixSufficientsError extends Enum {
    readonly isMaxAddressCountExceeded: boolean;
    readonly type: 'MaxAddressCountExceeded';
  }

  /** @name RuntimeCommonPosCurrencyPalletError (743) */
  interface RuntimeCommonPosCurrencyPalletError extends Enum {
    readonly isInflationAlreadyDecayedThisYear: boolean;
    readonly type: 'InflationAlreadyDecayedThisYear';
  }

  /** @name RuntimeCommonPosSessionPayoutPalletError (745) */
  interface RuntimeCommonPosSessionPayoutPalletError extends Enum {
    readonly isNotStash: boolean;
    readonly isNotController: boolean;
    readonly type: 'NotStash' | 'NotController';
  }

  /** @name SubstrateAccountFilterError (746) */
  interface SubstrateAccountFilterError extends Enum {
    readonly isAlreadyAllowed: boolean;
    readonly isDuplicateVote: boolean;
    readonly isNotAllowedToVote: boolean;
    readonly isVotesCounterOverflow: boolean;
    readonly isAllowedAccountsOverflow: boolean;
    readonly type: 'AlreadyAllowed' | 'DuplicateVote' | 'NotAllowedToVote' | 'VotesCounterOverflow' | 'AllowedAccountsOverflow';
  }

  /** @name PalletContractsWasmPrefabWasmModule (748) */
  interface PalletContractsWasmPrefabWasmModule extends Struct {
    readonly instructionWeightsVersion: Compact<u32>;
    readonly initial: Compact<u32>;
    readonly maximum: Compact<u32>;
    readonly code: Bytes;
    readonly determinism: PalletContractsWasmDeterminism;
  }

  /** @name PalletContractsWasmOwnerInfo (750) */
  interface PalletContractsWasmOwnerInfo extends Struct {
    readonly owner: AccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
  }

  /** @name PalletContractsStorageContractInfo (751) */
  interface PalletContractsStorageContractInfo extends Struct {
    readonly trieId: Bytes;
    readonly depositAccount: AccountId32;
    readonly codeHash: H256;
    readonly storageBytes: u32;
    readonly storageItems: u32;
    readonly storageByteDeposit: u128;
    readonly storageItemDeposit: u128;
    readonly storageBaseDeposit: u128;
  }

  /** @name PalletContractsStorageDeletionQueueManager (753) */
  interface PalletContractsStorageDeletionQueueManager extends Struct {
    readonly insertCounter: u32;
    readonly deleteCounter: u32;
  }

  /** @name PalletContractsSchedule (754) */
  interface PalletContractsSchedule extends Struct {
    readonly limits: PalletContractsScheduleLimits;
    readonly instructionWeights: PalletContractsScheduleInstructionWeights;
    readonly hostFnWeights: PalletContractsScheduleHostFnWeights;
  }

  /** @name PalletContractsScheduleLimits (755) */
  interface PalletContractsScheduleLimits extends Struct {
    readonly eventTopics: u32;
    readonly globals: u32;
    readonly locals: u32;
    readonly parameters: u32;
    readonly memoryPages: u32;
    readonly tableSize: u32;
    readonly brTableSize: u32;
    readonly subjectLen: u32;
    readonly payloadLen: u32;
    readonly runtimeMemory: u32;
  }

  /** @name PalletContractsScheduleInstructionWeights (756) */
  interface PalletContractsScheduleInstructionWeights extends Struct {
    readonly version: u32;
    readonly fallback: u32;
    readonly i64const: u32;
    readonly i64load: u32;
    readonly i64store: u32;
    readonly select: u32;
    readonly r_if: u32;
    readonly br: u32;
    readonly brIf: u32;
    readonly brTable: u32;
    readonly brTablePerEntry: u32;
    readonly call: u32;
    readonly callIndirect: u32;
    readonly callPerLocal: u32;
    readonly localGet: u32;
    readonly localSet: u32;
    readonly localTee: u32;
    readonly globalGet: u32;
    readonly globalSet: u32;
    readonly memoryCurrent: u32;
    readonly memoryGrow: u32;
    readonly i64clz: u32;
    readonly i64ctz: u32;
    readonly i64popcnt: u32;
    readonly i64eqz: u32;
    readonly i64extendsi32: u32;
    readonly i64extendui32: u32;
    readonly i32wrapi64: u32;
    readonly i64eq: u32;
    readonly i64ne: u32;
    readonly i64lts: u32;
    readonly i64ltu: u32;
    readonly i64gts: u32;
    readonly i64gtu: u32;
    readonly i64les: u32;
    readonly i64leu: u32;
    readonly i64ges: u32;
    readonly i64geu: u32;
    readonly i64add: u32;
    readonly i64sub: u32;
    readonly i64mul: u32;
    readonly i64divs: u32;
    readonly i64divu: u32;
    readonly i64rems: u32;
    readonly i64remu: u32;
    readonly i64and: u32;
    readonly i64or: u32;
    readonly i64xor: u32;
    readonly i64shl: u32;
    readonly i64shrs: u32;
    readonly i64shru: u32;
    readonly i64rotl: u32;
    readonly i64rotr: u32;
  }

  /** @name PalletContractsScheduleHostFnWeights (757) */
  interface PalletContractsScheduleHostFnWeights extends Struct {
    readonly caller: SpWeightsWeightV2Weight;
    readonly isContract: SpWeightsWeightV2Weight;
    readonly codeHash: SpWeightsWeightV2Weight;
    readonly ownCodeHash: SpWeightsWeightV2Weight;
    readonly callerIsOrigin: SpWeightsWeightV2Weight;
    readonly callerIsRoot: SpWeightsWeightV2Weight;
    readonly address: SpWeightsWeightV2Weight;
    readonly gasLeft: SpWeightsWeightV2Weight;
    readonly balance: SpWeightsWeightV2Weight;
    readonly valueTransferred: SpWeightsWeightV2Weight;
    readonly minimumBalance: SpWeightsWeightV2Weight;
    readonly blockNumber: SpWeightsWeightV2Weight;
    readonly now: SpWeightsWeightV2Weight;
    readonly weightToFee: SpWeightsWeightV2Weight;
    readonly gas: SpWeightsWeightV2Weight;
    readonly input: SpWeightsWeightV2Weight;
    readonly inputPerByte: SpWeightsWeightV2Weight;
    readonly r_return: SpWeightsWeightV2Weight;
    readonly returnPerByte: SpWeightsWeightV2Weight;
    readonly terminate: SpWeightsWeightV2Weight;
    readonly random: SpWeightsWeightV2Weight;
    readonly depositEvent: SpWeightsWeightV2Weight;
    readonly depositEventPerTopic: SpWeightsWeightV2Weight;
    readonly depositEventPerByte: SpWeightsWeightV2Weight;
    readonly debugMessage: SpWeightsWeightV2Weight;
    readonly debugMessagePerByte: SpWeightsWeightV2Weight;
    readonly setStorage: SpWeightsWeightV2Weight;
    readonly setStoragePerNewByte: SpWeightsWeightV2Weight;
    readonly setStoragePerOldByte: SpWeightsWeightV2Weight;
    readonly setCodeHash: SpWeightsWeightV2Weight;
    readonly clearStorage: SpWeightsWeightV2Weight;
    readonly clearStoragePerByte: SpWeightsWeightV2Weight;
    readonly containsStorage: SpWeightsWeightV2Weight;
    readonly containsStoragePerByte: SpWeightsWeightV2Weight;
    readonly getStorage: SpWeightsWeightV2Weight;
    readonly getStoragePerByte: SpWeightsWeightV2Weight;
    readonly takeStorage: SpWeightsWeightV2Weight;
    readonly takeStoragePerByte: SpWeightsWeightV2Weight;
    readonly transfer: SpWeightsWeightV2Weight;
    readonly call: SpWeightsWeightV2Weight;
    readonly delegateCall: SpWeightsWeightV2Weight;
    readonly callTransferSurcharge: SpWeightsWeightV2Weight;
    readonly callPerClonedByte: SpWeightsWeightV2Weight;
    readonly instantiate: SpWeightsWeightV2Weight;
    readonly instantiateTransferSurcharge: SpWeightsWeightV2Weight;
    readonly instantiatePerInputByte: SpWeightsWeightV2Weight;
    readonly instantiatePerSaltByte: SpWeightsWeightV2Weight;
    readonly hashSha2256: SpWeightsWeightV2Weight;
    readonly hashSha2256PerByte: SpWeightsWeightV2Weight;
    readonly hashKeccak256: SpWeightsWeightV2Weight;
    readonly hashKeccak256PerByte: SpWeightsWeightV2Weight;
    readonly hashBlake2256: SpWeightsWeightV2Weight;
    readonly hashBlake2256PerByte: SpWeightsWeightV2Weight;
    readonly hashBlake2128: SpWeightsWeightV2Weight;
    readonly hashBlake2128PerByte: SpWeightsWeightV2Weight;
    readonly ecdsaRecover: SpWeightsWeightV2Weight;
    readonly ecdsaToEthAddress: SpWeightsWeightV2Weight;
    readonly sr25519Verify: SpWeightsWeightV2Weight;
    readonly sr25519VerifyPerByte: SpWeightsWeightV2Weight;
    readonly reentranceCount: SpWeightsWeightV2Weight;
    readonly accountReentranceCount: SpWeightsWeightV2Weight;
    readonly instantiationNonce: SpWeightsWeightV2Weight;
  }

  /** @name PalletContractsError (758) */
  interface PalletContractsError extends Enum {
    readonly isInvalidScheduleVersion: boolean;
    readonly isInvalidCallFlags: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutputBufferTooSmall: boolean;
    readonly isTransferFailed: boolean;
    readonly isMaxCallDepthReached: boolean;
    readonly isContractNotFound: boolean;
    readonly isCodeTooLarge: boolean;
    readonly isCodeNotFound: boolean;
    readonly isOutOfBounds: boolean;
    readonly isDecodingFailed: boolean;
    readonly isContractTrapped: boolean;
    readonly isValueTooLarge: boolean;
    readonly isTerminatedWhileReentrant: boolean;
    readonly isInputForwarded: boolean;
    readonly isRandomSubjectTooLong: boolean;
    readonly isTooManyTopics: boolean;
    readonly isNoChainExtension: boolean;
    readonly isDuplicateContract: boolean;
    readonly isTerminatedInConstructor: boolean;
    readonly isReentranceDenied: boolean;
    readonly isStorageDepositNotEnoughFunds: boolean;
    readonly isStorageDepositLimitExhausted: boolean;
    readonly isCodeInUse: boolean;
    readonly isContractReverted: boolean;
    readonly isCodeRejected: boolean;
    readonly isIndeterministic: boolean;
    readonly type: 'InvalidScheduleVersion' | 'InvalidCallFlags' | 'OutOfGas' | 'OutputBufferTooSmall' | 'TransferFailed' | 'MaxCallDepthReached' | 'ContractNotFound' | 'CodeTooLarge' | 'CodeNotFound' | 'OutOfBounds' | 'DecodingFailed' | 'ContractTrapped' | 'ValueTooLarge' | 'TerminatedWhileReentrant' | 'InputForwarded' | 'RandomSubjectTooLong' | 'TooManyTopics' | 'NoChainExtension' | 'DuplicateContract' | 'TerminatedInConstructor' | 'ReentranceDenied' | 'StorageDepositNotEnoughFunds' | 'StorageDepositLimitExhausted' | 'CodeInUse' | 'ContractReverted' | 'CodeRejected' | 'Indeterministic';
  }

  /** @name IbcCoreIcs24HostPathClientConsensusStatePath (761) */
  interface IbcCoreIcs24HostPathClientConsensusStatePath extends Struct {
    readonly clientId: Text;
    readonly epoch: u64;
    readonly height: u64;
  }

  /** @name IbcCoreIcs03ConnectionConnectionSealedConnectionEnd (763) */
  interface IbcCoreIcs03ConnectionConnectionSealedConnectionEnd extends Struct {
    readonly state: IbcCoreIcs03ConnectionConnectionState;
    readonly clientId: Text;
    readonly counterparty: IbcCoreIcs03ConnectionConnectionCounterparty;
    readonly versions: Vec<IbcCoreIcs03ConnectionVersion>;
    readonly delayPeriodSecs: u64;
    readonly delayPeriodNanos: u32;
  }

  /** @name IbcCoreIcs03ConnectionConnectionState (764) */
  interface IbcCoreIcs03ConnectionConnectionState extends Enum {
    readonly isUninitialized: boolean;
    readonly isInit: boolean;
    readonly isTryOpen: boolean;
    readonly isOpen: boolean;
    readonly type: 'Uninitialized' | 'Init' | 'TryOpen' | 'Open';
  }

  /** @name IbcCoreIcs03ConnectionConnectionCounterparty (765) */
  interface IbcCoreIcs03ConnectionConnectionCounterparty extends Struct {
    readonly clientId: Text;
    readonly connectionId: Option<Text>;
    readonly prefix: IbcCoreIcs23CommitmentCommitmentCommitmentPrefix;
  }

  /** @name IbcCoreIcs23CommitmentCommitmentCommitmentPrefix (766) */
  interface IbcCoreIcs23CommitmentCommitmentCommitmentPrefix extends Struct {
    readonly bytes: Bytes;
  }

  /** @name IbcCoreIcs03ConnectionVersion (768) */
  interface IbcCoreIcs03ConnectionVersion extends Struct {
    readonly identifier: Text;
    readonly features: Vec<Text>;
  }

  /** @name IbcCoreIcs24HostPathChannelEndsPath (770) */
  interface IbcCoreIcs24HostPathChannelEndsPath extends ITuple<[Text, Text]> {}

  /** @name IbcCoreIcs04ChannelChannelChannelEnd (771) */
  interface IbcCoreIcs04ChannelChannelChannelEnd extends Struct {
    readonly state: IbcCoreIcs04ChannelChannelState;
    readonly ordering: IbcCoreIcs04ChannelChannelOrder;
    readonly remote: IbcCoreIcs04ChannelChannelCounterparty;
    readonly connectionHops: Vec<Text>;
    readonly version: Text;
  }

  /** @name IbcCoreIcs04ChannelChannelState (772) */
  interface IbcCoreIcs04ChannelChannelState extends Enum {
    readonly isUninitialized: boolean;
    readonly isInit: boolean;
    readonly isTryOpen: boolean;
    readonly isOpen: boolean;
    readonly isClosed: boolean;
    readonly type: 'Uninitialized' | 'Init' | 'TryOpen' | 'Open' | 'Closed';
  }

  /** @name IbcCoreIcs04ChannelChannelCounterparty (773) */
  interface IbcCoreIcs04ChannelChannelCounterparty extends Struct {
    readonly portId: Text;
    readonly channelId: Option<Text>;
  }

  /** @name IbcCoreIcs24HostPathSeqSendsPath (778) */
  interface IbcCoreIcs24HostPathSeqSendsPath extends ITuple<[Text, Text]> {}

  /** @name IbcCoreIcs24HostPathSeqRecvsPath (779) */
  interface IbcCoreIcs24HostPathSeqRecvsPath extends ITuple<[Text, Text]> {}

  /** @name IbcCoreIcs24HostPathSeqAcksPath (780) */
  interface IbcCoreIcs24HostPathSeqAcksPath extends ITuple<[Text, Text]> {}

  /** @name IbcCoreIcs24HostPathAcksPath (781) */
  interface IbcCoreIcs24HostPathAcksPath extends Struct {
    readonly portId: Text;
    readonly channelId: Text;
    readonly sequence: u64;
  }

  /** @name IbcCoreIcs24HostPathReceiptsPath (784) */
  interface IbcCoreIcs24HostPathReceiptsPath extends Struct {
    readonly portId: Text;
    readonly channelId: Text;
    readonly sequence: u64;
  }

  /** @name IbcCoreIcs04ChannelPacketReceipt (785) */
  interface IbcCoreIcs04ChannelPacketReceipt extends Enum {
    readonly isOk: boolean;
    readonly type: 'Ok';
  }

  /** @name IbcCoreIcs24HostPathCommitmentsPath (786) */
  interface IbcCoreIcs24HostPathCommitmentsPath extends Struct {
    readonly portId: Text;
    readonly channelId: Text;
    readonly sequence: u64;
  }

  /** @name PalletIbcError (788) */
  interface PalletIbcError extends Enum {
    readonly isDecodeStringFailed: boolean;
    readonly isUnknownClientType: boolean;
    readonly isInvalidPortId: boolean;
    readonly isInvalidChannelId: boolean;
    readonly isInvalidHeight: boolean;
    readonly isInvalidClientId: boolean;
    readonly isInvalidConnectionId: boolean;
    readonly isInvalidTimestamp: boolean;
    readonly isInvalidVersion: boolean;
    readonly isInvalidModuleId: boolean;
    readonly isOther: boolean;
    readonly type: 'DecodeStringFailed' | 'UnknownClientType' | 'InvalidPortId' | 'InvalidChannelId' | 'InvalidHeight' | 'InvalidClientId' | 'InvalidConnectionId' | 'InvalidTimestamp' | 'InvalidVersion' | 'InvalidModuleId' | 'Other';
  }

  /** @name PalletIcs20TransferDenomPrefixedDenom (789) */
  interface PalletIcs20TransferDenomPrefixedDenom extends Struct {
    readonly tracePath: Bytes;
    readonly baseDenom: Bytes;
  }

  /** @name PalletIcs20TransferError (790) */
  interface PalletIcs20TransferError extends Enum {
    readonly isParserMsgTransferError: boolean;
    readonly isInvalidTokenId: boolean;
    readonly isWrongAssetId: boolean;
    readonly isDecodeStringFailed: boolean;
    readonly isTokenTransferError: boolean;
    readonly isDenomTraceNotFound: boolean;
    readonly type: 'ParserMsgTransferError' | 'InvalidTokenId' | 'WrongAssetId' | 'DecodeStringFailed' | 'TokenTransferError' | 'DenomTraceNotFound';
  }

  /** @name PalletBeefyError (793) */
  interface PalletBeefyError extends Enum {
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name SpConsensusBeefyMmrBeefyAuthoritySet (794) */
  interface SpConsensusBeefyMmrBeefyAuthoritySet extends Struct {
    readonly id: u64;
    readonly len: u32;
    readonly root: H256;
  }

  /** @name EthTypesClientMode (796) */
  interface EthTypesClientMode extends Enum {
    readonly isSubmitLightClientUpdate: boolean;
    readonly isSubmitHeader: boolean;
    readonly type: 'SubmitLightClientUpdate' | 'SubmitHeader';
  }

  /** @name WebbConsensusTypesNetworkConfig (797) */
  interface WebbConsensusTypesNetworkConfig extends Struct {
    readonly genesisValidatorsRoot: U8aFixed;
    readonly bellatrixForkVersion: U8aFixed;
    readonly bellatrixForkEpoch: u64;
    readonly capellaForkVersion: U8aFixed;
    readonly capellaForkEpoch: u64;
  }

  /** @name PalletEth2LightClientError (798) */
  interface PalletEth2LightClientError extends Enum {
    readonly isAlreadyInitialized: boolean;
    readonly isLightClientUpdateNotAllowed: boolean;
    readonly isBlockAlreadySubmitted: boolean;
    readonly isUnknownParentHeader: boolean;
    readonly isNotTrustedSigner: boolean;
    readonly isValidateUpdatesParameterError: boolean;
    readonly isTrustlessModeError: boolean;
    readonly isInvalidSyncCommitteeBitsSum: boolean;
    readonly isSyncCommitteeBitsSumLessThanThreshold: boolean;
    readonly isInvalidNetworkConfig: boolean;
    readonly isInvalidBlsSignature: boolean;
    readonly isInvalidExecutionBlock: boolean;
    readonly isActiveHeaderSlotLessThanFinalizedSlot: boolean;
    readonly isUpdateHeaderSlotLessThanFinalizedHeaderSlot: boolean;
    readonly isUpdateSignatureSlotLessThanAttestedHeaderSlot: boolean;
    readonly isInvalidUpdatePeriod: boolean;
    readonly isInvalidFinalityProof: boolean;
    readonly isInvalidExecutionBlockHashProof: boolean;
    readonly isNextSyncCommitteeNotPresent: boolean;
    readonly isInvalidNextSyncCommitteeProof: boolean;
    readonly isFinalizedExecutionHeaderNotPresent: boolean;
    readonly isFinalizedBeaconHeaderNotPresent: boolean;
    readonly isUnfinalizedHeaderNotPresent: boolean;
    readonly isSyncCommitteeUpdateNotPresent: boolean;
    readonly isHeaderHashDoesNotExist: boolean;
    readonly isBlockHashesDoNotMatch: boolean;
    readonly isInvalidSignaturePeriod: boolean;
    readonly isCurrentSyncCommitteeNotSet: boolean;
    readonly isNextSyncCommitteeNotSet: boolean;
    readonly isInvalidClientMode: boolean;
    readonly isHashesGcThresholdInsufficient: boolean;
    readonly isChainCannotBeClosed: boolean;
    readonly type: 'AlreadyInitialized' | 'LightClientUpdateNotAllowed' | 'BlockAlreadySubmitted' | 'UnknownParentHeader' | 'NotTrustedSigner' | 'ValidateUpdatesParameterError' | 'TrustlessModeError' | 'InvalidSyncCommitteeBitsSum' | 'SyncCommitteeBitsSumLessThanThreshold' | 'InvalidNetworkConfig' | 'InvalidBlsSignature' | 'InvalidExecutionBlock' | 'ActiveHeaderSlotLessThanFinalizedSlot' | 'UpdateHeaderSlotLessThanFinalizedHeaderSlot' | 'UpdateSignatureSlotLessThanAttestedHeaderSlot' | 'InvalidUpdatePeriod' | 'InvalidFinalityProof' | 'InvalidExecutionBlockHashProof' | 'NextSyncCommitteeNotPresent' | 'InvalidNextSyncCommitteeProof' | 'FinalizedExecutionHeaderNotPresent' | 'FinalizedBeaconHeaderNotPresent' | 'UnfinalizedHeaderNotPresent' | 'SyncCommitteeUpdateNotPresent' | 'HeaderHashDoesNotExist' | 'BlockHashesDoNotMatch' | 'InvalidSignaturePeriod' | 'CurrentSyncCommitteeNotSet' | 'NextSyncCommitteeNotSet' | 'InvalidClientMode' | 'HashesGcThresholdInsufficient' | 'ChainCannotBeClosed';
  }

  /** @name TypesReceiptLog (801) */
  interface TypesReceiptLog extends Struct {
    readonly address: TypesPrimitivesH160;
    readonly topics: Vec<TypesPrimitivesH256>;
    readonly data: Bytes;
  }

  /** @name PalletReceiptRegistryError (806) */
  interface PalletReceiptRegistryError extends Enum {
    readonly isConvertToStringFailed: boolean;
    readonly isDeserializeFail: boolean;
    readonly isHeaderHashDoesNotExist: boolean;
    readonly isBlockHashesDoNotMatch: boolean;
    readonly isVerifyProofFail: boolean;
    readonly isNoMonitoredAddressesForChain: boolean;
    readonly isTooManyAddresses: boolean;
    readonly type: 'ConvertToStringFailed' | 'DeserializeFail' | 'HeaderHashDoesNotExist' | 'BlockHashesDoNotMatch' | 'VerifyProofFail' | 'NoMonitoredAddressesForChain' | 'TooManyAddresses';
  }

  /** @name CurrencyError (807) */
  interface CurrencyError extends Enum {
    readonly isTryIntoIntError: boolean;
    readonly isInvalidCurrency: boolean;
    readonly type: 'TryIntoIntError' | 'InvalidCurrency';
  }

  /** @name OrmlTokensBalanceLock (810) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (812) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (814) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (816) */
  interface OrmlTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isMaxLocksExceeded: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name OrmlAssetRegistryModuleError (817) */
  interface OrmlAssetRegistryModuleError extends Enum {
    readonly isAssetNotFound: boolean;
    readonly isBadVersion: boolean;
    readonly isInvalidAssetId: boolean;
    readonly isConflictingLocation: boolean;
    readonly isConflictingAssetId: boolean;
    readonly type: 'AssetNotFound' | 'BadVersion' | 'InvalidAssetId' | 'ConflictingLocation' | 'ConflictingAssetId';
  }

  /** @name BtcRelayRichBlockHeader (818) */
  interface BtcRelayRichBlockHeader extends Struct {
    readonly blockHeader: BitcoinBlockHeader;
    readonly blockHeight: u32;
    readonly chainId: u32;
    readonly paraHeight: u32;
  }

  /** @name BitcoinBlockChain (819) */
  interface BitcoinBlockChain extends Struct {
    readonly chainId: u32;
    readonly startHeight: u32;
    readonly maxHeight: u32;
  }

  /** @name BtcRelayError (820) */
  interface BtcRelayError extends Enum {
    readonly isAlreadyInitialized: boolean;
    readonly isInvalidStartHeight: boolean;
    readonly isMissingBlockHeight: boolean;
    readonly isInvalidHeaderSize: boolean;
    readonly isDuplicateBlock: boolean;
    readonly isPrevBlock: boolean;
    readonly isInvalidChainID: boolean;
    readonly isLowDiff: boolean;
    readonly isDiffTargetHeader: boolean;
    readonly isMalformedTxid: boolean;
    readonly isBitcoinConfirmations: boolean;
    readonly isParachainConfirmations: boolean;
    readonly isOngoingFork: boolean;
    readonly isMalformedMerkleProof: boolean;
    readonly isInvalidMerkleProof: boolean;
    readonly isShutdown: boolean;
    readonly isInvalidTxid: boolean;
    readonly isInvalidPaymentAmount: boolean;
    readonly isMalformedTransaction: boolean;
    readonly isInvalidPayment: boolean;
    readonly isInvalidOutputFormat: boolean;
    readonly isInvalidOpReturn: boolean;
    readonly isInvalidTxVersion: boolean;
    readonly isUnknownErrorcode: boolean;
    readonly isForkIdNotFound: boolean;
    readonly isBlockNotFound: boolean;
    readonly isAlreadyReported: boolean;
    readonly isUnauthorizedRelayer: boolean;
    readonly isChainCounterOverflow: boolean;
    readonly isBlockHeightOverflow: boolean;
    readonly isChainsUnderflow: boolean;
    readonly isEndOfFile: boolean;
    readonly isMalformedHeader: boolean;
    readonly isInvalidBlockVersion: boolean;
    readonly isMalformedWitnessOutput: boolean;
    readonly isMalformedP2PKHOutput: boolean;
    readonly isMalformedP2SHOutput: boolean;
    readonly isMalformedOpReturnOutput: boolean;
    readonly isUnsupportedOutputFormat: boolean;
    readonly isUnsupportedInputFormat: boolean;
    readonly isInvalidBtcHash: boolean;
    readonly isInvalidScript: boolean;
    readonly isInvalidBtcAddress: boolean;
    readonly isArithmeticOverflow: boolean;
    readonly isArithmeticUnderflow: boolean;
    readonly isTryIntoIntError: boolean;
    readonly isInvalidTransaction: boolean;
    readonly isInvalidOpReturnTransaction: boolean;
    readonly isInvalidCompact: boolean;
    readonly isWrongForkBound: boolean;
    readonly isBoundExceeded: boolean;
    readonly isInvalidCoinbasePosition: boolean;
    readonly type: 'AlreadyInitialized' | 'InvalidStartHeight' | 'MissingBlockHeight' | 'InvalidHeaderSize' | 'DuplicateBlock' | 'PrevBlock' | 'InvalidChainID' | 'LowDiff' | 'DiffTargetHeader' | 'MalformedTxid' | 'BitcoinConfirmations' | 'ParachainConfirmations' | 'OngoingFork' | 'MalformedMerkleProof' | 'InvalidMerkleProof' | 'Shutdown' | 'InvalidTxid' | 'InvalidPaymentAmount' | 'MalformedTransaction' | 'InvalidPayment' | 'InvalidOutputFormat' | 'InvalidOpReturn' | 'InvalidTxVersion' | 'UnknownErrorcode' | 'ForkIdNotFound' | 'BlockNotFound' | 'AlreadyReported' | 'UnauthorizedRelayer' | 'ChainCounterOverflow' | 'BlockHeightOverflow' | 'ChainsUnderflow' | 'EndOfFile' | 'MalformedHeader' | 'InvalidBlockVersion' | 'MalformedWitnessOutput' | 'MalformedP2PKHOutput' | 'MalformedP2SHOutput' | 'MalformedOpReturnOutput' | 'UnsupportedOutputFormat' | 'UnsupportedInputFormat' | 'InvalidBtcHash' | 'InvalidScript' | 'InvalidBtcAddress' | 'ArithmeticOverflow' | 'ArithmeticUnderflow' | 'TryIntoIntError' | 'InvalidTransaction' | 'InvalidOpReturnTransaction' | 'InvalidCompact' | 'WrongForkBound' | 'BoundExceeded' | 'InvalidCoinbasePosition';
  }

  /** @name SecurityError (821) */
  type SecurityError = Null;

  /** @name FeeVersion (822) */
  interface FeeVersion extends Enum {
    readonly isV0: boolean;
    readonly type: 'V0';
  }

  /** @name FeeError (823) */
  interface FeeError extends Enum {
    readonly isTryIntoIntError: boolean;
    readonly isAboveMaxExpectedValue: boolean;
    readonly type: 'TryIntoIntError' | 'AboveMaxExpectedValue';
  }

  /** @name InterbtcPrimitivesIssueIssueRequest (824) */
  interface InterbtcPrimitivesIssueIssueRequest extends Struct {
    readonly vault: InterbtcPrimitivesVaultId;
    readonly opentime: u32;
    readonly period: u32;
    readonly griefingCollateral: u128;
    readonly griefingCurrency: InterbtcPrimitivesCurrencyId;
    readonly amount: u128;
    readonly fee: u128;
    readonly requester: AccountId32;
    readonly btcAddress: BitcoinAddress;
    readonly btcPublicKey: BitcoinAddressPublicKey;
    readonly btcHeight: u32;
    readonly status: InterbtcPrimitivesIssueIssueRequestStatus;
  }

  /** @name InterbtcPrimitivesIssueIssueRequestStatus (825) */
  interface InterbtcPrimitivesIssueIssueRequestStatus extends Enum {
    readonly isPending: boolean;
    readonly isCompleted: boolean;
    readonly isCancelled: boolean;
    readonly type: 'Pending' | 'Completed' | 'Cancelled';
  }

  /** @name IssueVersion (826) */
  interface IssueVersion extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly isV2: boolean;
    readonly isV3: boolean;
    readonly isV4: boolean;
    readonly type: 'V0' | 'V1' | 'V2' | 'V3' | 'V4';
  }

  /** @name IssueError (827) */
  interface IssueError extends Enum {
    readonly isIssueIdNotFound: boolean;
    readonly isCommitPeriodExpired: boolean;
    readonly isTimeNotExpired: boolean;
    readonly isIssueCompleted: boolean;
    readonly isIssueCancelled: boolean;
    readonly isVaultNotAcceptingNewIssues: boolean;
    readonly isWaitingForRelayerInitialization: boolean;
    readonly isInvalidExecutor: boolean;
    readonly isAmountBelowDustAmount: boolean;
    readonly type: 'IssueIdNotFound' | 'CommitPeriodExpired' | 'TimeNotExpired' | 'IssueCompleted' | 'IssueCancelled' | 'VaultNotAcceptingNewIssues' | 'WaitingForRelayerInitialization' | 'InvalidExecutor' | 'AmountBelowDustAmount';
  }

  /** @name OracleTimestampedValue (829) */
  interface OracleTimestampedValue extends Struct {
    readonly value: u128;
    readonly timestamp: u64;
  }

  /** @name OracleVersion (830) */
  interface OracleVersion extends Enum {
    readonly isV0: boolean;
    readonly type: 'V0';
  }

  /** @name OracleError (831) */
  interface OracleError extends Enum {
    readonly isInvalidOracleSource: boolean;
    readonly isMissingExchangeRate: boolean;
    readonly isTryIntoIntError: boolean;
    readonly type: 'InvalidOracleSource' | 'MissingExchangeRate' | 'TryIntoIntError';
  }

  /** @name InterbtcPrimitivesRedeemRedeemRequest (832) */
  interface InterbtcPrimitivesRedeemRedeemRequest extends Struct {
    readonly vault: InterbtcPrimitivesVaultId;
    readonly opentime: u32;
    readonly period: u32;
    readonly fee: u128;
    readonly transferFeeBtc: u128;
    readonly amountBtc: u128;
    readonly premium: u128;
    readonly redeemer: AccountId32;
    readonly btcAddress: BitcoinAddress;
    readonly btcHeight: u32;
    readonly status: InterbtcPrimitivesRedeemRedeemRequestStatus;
  }

  /** @name RedeemVersion (833) */
  interface RedeemVersion extends Enum {
    readonly isV0: boolean;
    readonly type: 'V0';
  }

  /** @name RedeemError (834) */
  interface RedeemError extends Enum {
    readonly isAmountExceedsUserBalance: boolean;
    readonly isUnauthorizedRedeemer: boolean;
    readonly isUnauthorizedVault: boolean;
    readonly isTimeNotExpired: boolean;
    readonly isRedeemCancelled: boolean;
    readonly isRedeemCompleted: boolean;
    readonly isRedeemIdNotFound: boolean;
    readonly isTryIntoIntError: boolean;
    readonly isAmountBelowDustAmount: boolean;
    readonly type: 'AmountExceedsUserBalance' | 'UnauthorizedRedeemer' | 'UnauthorizedVault' | 'TimeNotExpired' | 'RedeemCancelled' | 'RedeemCompleted' | 'RedeemIdNotFound' | 'TryIntoIntError' | 'AmountBelowDustAmount';
  }

  /** @name InterbtcPrimitivesReplaceReplaceRequest (835) */
  interface InterbtcPrimitivesReplaceReplaceRequest extends Struct {
    readonly oldVault: InterbtcPrimitivesVaultId;
    readonly newVault: InterbtcPrimitivesVaultId;
    readonly amount: u128;
    readonly griefingCollateral: u128;
    readonly collateral: u128;
    readonly acceptTime: u32;
    readonly period: u32;
    readonly btcAddress: BitcoinAddress;
    readonly btcHeight: u32;
    readonly status: InterbtcPrimitivesReplaceReplaceRequestStatus;
  }

  /** @name InterbtcPrimitivesReplaceReplaceRequestStatus (836) */
  interface InterbtcPrimitivesReplaceReplaceRequestStatus extends Enum {
    readonly isPending: boolean;
    readonly isCompleted: boolean;
    readonly isCancelled: boolean;
    readonly type: 'Pending' | 'Completed' | 'Cancelled';
  }

  /** @name ReplaceVersion (837) */
  interface ReplaceVersion extends Enum {
    readonly isV0: boolean;
    readonly type: 'V0';
  }

  /** @name ReplaceError (838) */
  interface ReplaceError extends Enum {
    readonly isReplaceAmountZero: boolean;
    readonly isAmountBelowDustAmount: boolean;
    readonly isNoPendingRequest: boolean;
    readonly isUnauthorizedVault: boolean;
    readonly isReplaceSelfNotAllowed: boolean;
    readonly isVaultHasEnabledNomination: boolean;
    readonly isReplacePeriodNotExpired: boolean;
    readonly isReplaceCompleted: boolean;
    readonly isReplaceCancelled: boolean;
    readonly isReplaceIdNotFound: boolean;
    readonly isInvalidWrappedCurrency: boolean;
    readonly type: 'ReplaceAmountZero' | 'AmountBelowDustAmount' | 'NoPendingRequest' | 'UnauthorizedVault' | 'ReplaceSelfNotAllowed' | 'VaultHasEnabledNomination' | 'ReplacePeriodNotExpired' | 'ReplaceCompleted' | 'ReplaceCancelled' | 'ReplaceIdNotFound' | 'InvalidWrappedCurrency';
  }

  /** @name VaultRegistrySystemVault (839) */
  interface VaultRegistrySystemVault extends Struct {
    readonly toBeIssuedTokens: u128;
    readonly issuedTokens: u128;
    readonly toBeRedeemedTokens: u128;
    readonly collateral: u128;
    readonly currencyPair: InterbtcPrimitivesVaultCurrencyPair;
  }

  /** @name VaultRegistryVault (840) */
  interface VaultRegistryVault extends Struct {
    readonly id: InterbtcPrimitivesVaultId;
    readonly status: VaultRegistryVaultStatus;
    readonly bannedUntil: Option<u32>;
    readonly secureCollateralThreshold: Option<u128>;
    readonly toBeIssuedTokens: u128;
    readonly issuedTokens: u128;
    readonly toBeRedeemedTokens: u128;
    readonly toBeReplacedTokens: u128;
    readonly replaceCollateral: u128;
    readonly activeReplaceCollateral: u128;
    readonly liquidatedCollateral: u128;
  }

  /** @name VaultRegistryVersion (841) */
  interface VaultRegistryVersion extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly isV2: boolean;
    readonly isV3: boolean;
    readonly isV4: boolean;
    readonly isV5: boolean;
    readonly isV6: boolean;
    readonly type: 'V0' | 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6';
  }

  /** @name VaultRegistryError (842) */
  interface VaultRegistryError extends Enum {
    readonly isInsufficientCollateral: boolean;
    readonly isExceedingVaultLimit: boolean;
    readonly isInsufficientTokensCommitted: boolean;
    readonly isVaultBanned: boolean;
    readonly isInsufficientVaultCollateralAmount: boolean;
    readonly isVaultAlreadyRegistered: boolean;
    readonly isVaultNotFound: boolean;
    readonly isVaultNotBelowLiquidationThreshold: boolean;
    readonly isInvalidPublicKey: boolean;
    readonly isCurrencyCeilingExceeded: boolean;
    readonly isVaultLiquidated: boolean;
    readonly isVaultNotRecoverable: boolean;
    readonly isNoBitcoinPublicKey: boolean;
    readonly isPublicKeyAlreadyRegistered: boolean;
    readonly isNoTokensIssued: boolean;
    readonly isNoVaultWithSufficientCollateral: boolean;
    readonly isNoVaultWithSufficientTokens: boolean;
    readonly isNoVaultUnderThePremiumRedeemThreshold: boolean;
    readonly isInvalidCurrency: boolean;
    readonly isThresholdNotSet: boolean;
    readonly isCeilingNotSet: boolean;
    readonly isThresholdNotAboveGlobalThreshold: boolean;
    readonly isTryIntoIntError: boolean;
    readonly isVaultNotAcceptingIssueRequests: boolean;
    readonly isMinimumCollateralNotSet: boolean;
    readonly type: 'InsufficientCollateral' | 'ExceedingVaultLimit' | 'InsufficientTokensCommitted' | 'VaultBanned' | 'InsufficientVaultCollateralAmount' | 'VaultAlreadyRegistered' | 'VaultNotFound' | 'VaultNotBelowLiquidationThreshold' | 'InvalidPublicKey' | 'CurrencyCeilingExceeded' | 'VaultLiquidated' | 'VaultNotRecoverable' | 'NoBitcoinPublicKey' | 'PublicKeyAlreadyRegistered' | 'NoTokensIssued' | 'NoVaultWithSufficientCollateral' | 'NoVaultWithSufficientTokens' | 'NoVaultUnderThePremiumRedeemThreshold' | 'InvalidCurrency' | 'ThresholdNotSet' | 'CeilingNotSet' | 'ThresholdNotAboveGlobalThreshold' | 'TryIntoIntError' | 'VaultNotAcceptingIssueRequests' | 'MinimumCollateralNotSet';
  }

  /** @name RewardError (849) */
  interface RewardError extends Enum {
    readonly isTryIntoIntError: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isZeroTotalStake: boolean;
    readonly isMaxRewardCurrencies: boolean;
    readonly type: 'TryIntoIntError' | 'InsufficientFunds' | 'ZeroTotalStake' | 'MaxRewardCurrencies';
  }

  /** @name StakingError (856) */
  interface StakingError extends Enum {
    readonly isTryIntoIntError: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isSlashZeroTotalStake: boolean;
    readonly type: 'TryIntoIntError' | 'InsufficientFunds' | 'SlashZeroTotalStake';
  }

  /** @name NominationError (861) */
  interface NominationError extends Enum {
    readonly isVaultAlreadyOptedInToNomination: boolean;
    readonly isVaultNotOptedInToNomination: boolean;
    readonly isVaultNotFound: boolean;
    readonly isCannotWithdrawCollateral: boolean;
    readonly isVaultNominationDisabled: boolean;
    readonly isNominationExceedsLimit: boolean;
    readonly isCollateralizationTooLow: boolean;
    readonly type: 'VaultAlreadyOptedInToNomination' | 'VaultNotOptedInToNomination' | 'VaultNotFound' | 'CannotWithdrawCollateral' | 'VaultNominationDisabled' | 'NominationExceedsLimit' | 'CollateralizationTooLow';
  }

  /** @name ClientsInfoError (862) */
  type ClientsInfoError = Null;

  /** @name LoansBorrowSnapshot (864) */
  interface LoansBorrowSnapshot extends Struct {
    readonly principal: u128;
    readonly borrowIndex: u128;
  }

  /** @name LoansRewardMarketState (865) */
  interface LoansRewardMarketState extends Struct {
    readonly index: u128;
    readonly block: u32;
  }

  /** @name LoansVersions (866) */
  interface LoansVersions extends Enum {
    readonly isV0: boolean;
    readonly type: 'V0';
  }

  /** @name LoansError (867) */
  interface LoansError extends Enum {
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientDeposit: boolean;
    readonly isTooMuchRepay: boolean;
    readonly isInsufficientCollateral: boolean;
    readonly isLiquidatorIsBorrower: boolean;
    readonly isDepositsAreNotCollateral: boolean;
    readonly isInsufficientShortfall: boolean;
    readonly isInsufficientReserves: boolean;
    readonly isInvalidRateModelParam: boolean;
    readonly isMarketNotActivated: boolean;
    readonly isInvalidLendTokenId: boolean;
    readonly isMarketDoesNotExist: boolean;
    readonly isMarketAlreadyActivated: boolean;
    readonly isMarketAlreadyExists: boolean;
    readonly isNewMarketMustHavePendingState: boolean;
    readonly isSupplyCapacityExceeded: boolean;
    readonly isBorrowCapacityExceeded: boolean;
    readonly isInsufficientCash: boolean;
    readonly isInvalidFactor: boolean;
    readonly isInvalidSupplyCap: boolean;
    readonly isInvalidExchangeRate: boolean;
    readonly isInvalidAmount: boolean;
    readonly isDepositAllCollateralFailed: boolean;
    readonly isWithdrawAllCollateralFailed: boolean;
    readonly isTokensAlreadyLocked: boolean;
    readonly isLockedTokensCannotBeRedeemed: boolean;
    readonly type: 'InsufficientLiquidity' | 'InsufficientDeposit' | 'TooMuchRepay' | 'InsufficientCollateral' | 'LiquidatorIsBorrower' | 'DepositsAreNotCollateral' | 'InsufficientShortfall' | 'InsufficientReserves' | 'InvalidRateModelParam' | 'MarketNotActivated' | 'InvalidLendTokenId' | 'MarketDoesNotExist' | 'MarketAlreadyActivated' | 'MarketAlreadyExists' | 'NewMarketMustHavePendingState' | 'SupplyCapacityExceeded' | 'BorrowCapacityExceeded' | 'InsufficientCash' | 'InvalidFactor' | 'InvalidSupplyCap' | 'InvalidExchangeRate' | 'InvalidAmount' | 'DepositAllCollateralFailed' | 'WithdrawAllCollateralFailed' | 'TokensAlreadyLocked' | 'LockedTokensCannotBeRedeemed';
  }

  /** @name PalletDexTokenInfo (868) */
  interface PalletDexTokenInfo extends Struct {
    readonly assetId: u32;
    readonly amount: u128;
  }

  /** @name PalletDexError (873) */
  interface PalletDexError extends Enum {
    readonly isOrderIndexOverflow: boolean;
    readonly isInvalidOrderIndex: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isNotOwner: boolean;
    readonly isAssetIdNotInTokenIndex: boolean;
    readonly isAssetIdNotInTokenInfoes: boolean;
    readonly isTokenBalanceOverflow: boolean;
    readonly isWithdrawBalanceMustKeepOrderSellAmount: boolean;
    readonly isUserAssetNotExist: boolean;
    readonly isPairOrderNotFound: boolean;
    readonly isPairAssetIdMustNotEqual: boolean;
    readonly type: 'OrderIndexOverflow' | 'InvalidOrderIndex' | 'InsufficientBalance' | 'NotOwner' | 'AssetIdNotInTokenIndex' | 'AssetIdNotInTokenInfoes' | 'TokenBalanceOverflow' | 'WithdrawBalanceMustKeepOrderSellAmount' | 'UserAssetNotExist' | 'PairOrderNotFound' | 'PairAssetIdMustNotEqual';
  }

  /** @name SpRuntimeMultiSignature (875) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name FrameSystemExtensionsCheckSpecVersion (877) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (878) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (879) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (882) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (883) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (885) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name PalletTransactionPaymentChargeTransactionPayment (885) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

} // declare module
