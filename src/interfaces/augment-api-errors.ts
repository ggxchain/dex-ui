// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    accountFilter: {
      AllowedAccountsOverflow: AugmentedError<ApiType>;
      AlreadyAllowed: AugmentedError<ApiType>;
      DuplicateVote: AugmentedError<ApiType>;
      NotAllowedToVote: AugmentedError<ApiType>;
      VotesCounterOverflow: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    assetRegistry: {
      /**
       * Asset was not found.
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * The version of the `VersionedMultiLocation` value used is not able
       * to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Another asset was already register with this asset id.
       **/
      ConflictingAssetId: AugmentedError<ApiType>;
      /**
       * Another asset was already register with this location.
       **/
      ConflictingLocation: AugmentedError<ApiType>;
      /**
       * The asset id is invalid.
       **/
      InvalidAssetId: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    assets: {
      /**
       * The asset-account already exists.
       **/
      AlreadyExists: AugmentedError<ApiType>;
      /**
       * The asset is not live, and likely being destroyed.
       **/
      AssetNotLive: AugmentedError<ApiType>;
      /**
       * Invalid metadata given.
       **/
      BadMetadata: AugmentedError<ApiType>;
      /**
       * Invalid witness data given.
       **/
      BadWitness: AugmentedError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      BalanceLow: AugmentedError<ApiType>;
      /**
       * Callback action resulted in error
       **/
      CallbackFailed: AugmentedError<ApiType>;
      /**
       * The origin account is frozen.
       **/
      Frozen: AugmentedError<ApiType>;
      /**
       * The asset status is not the expected status.
       **/
      IncorrectStatus: AugmentedError<ApiType>;
      /**
       * The asset ID is already taken.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The asset is a live asset and is actively being used. Usually emit for operations such
       * as `start_destroy` which require the asset to be in a destroying state.
       **/
      LiveAsset: AugmentedError<ApiType>;
      /**
       * Minimum balance should be non-zero.
       **/
      MinBalanceZero: AugmentedError<ApiType>;
      /**
       * The account to alter does not exist.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * The asset-account doesn't have an associated deposit.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The signing account has no permission to do the operation.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The asset should be frozen before the given operation.
       **/
      NotFrozen: AugmentedError<ApiType>;
      /**
       * No approval exists that would allow the transfer.
       **/
      Unapproved: AugmentedError<ApiType>;
      /**
       * Unable to increment the consumer reference counters on the account. Either no provider
       * reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
       * fewer then the maximum number of consumers has been reached.
       **/
      UnavailableConsumer: AugmentedError<ApiType>;
      /**
       * The given asset ID is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * The operation would result in funds being burned.
       **/
      WouldBurn: AugmentedError<ApiType>;
      /**
       * The source account would not survive the transfer and it needs to stay alive.
       **/
      WouldDie: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      Expendability: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of freezes exceed `MaxFreezes`.
       **/
      TooManyFreezes: AugmentedError<ApiType>;
      /**
       * Number of holds exceed `MaxHolds`.
       **/
      TooManyHolds: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed `MaxReserves`.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    beefy: {
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bounties: {
      /**
       * The bounty cannot be closed because it has active child bounties.
       **/
      HasActiveChildBounty: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      InvalidFee: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      InvalidValue: AugmentedError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      PendingPayout: AugmentedError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * Require bounty curator.
       **/
      RequireCurator: AugmentedError<ApiType>;
      /**
       * Too many approvals are already queued.
       **/
      TooManyQueued: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    btcRelay: {
      /**
       * Already initialized
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Error code already reported
       **/
      AlreadyReported: AugmentedError<ApiType>;
      /**
       * Arithmetic overflow
       **/
      ArithmeticOverflow: AugmentedError<ApiType>;
      /**
       * Arithmetic underflow
       **/
      ArithmeticUnderflow: AugmentedError<ApiType>;
      /**
       * Transaction has less confirmations of Bitcoin blocks than required
       **/
      BitcoinConfirmations: AugmentedError<ApiType>;
      /**
       * Overflow of block height
       **/
      BlockHeightOverflow: AugmentedError<ApiType>;
      /**
       * Block header not found for given hash
       **/
      BlockNotFound: AugmentedError<ApiType>;
      /**
       * Weight bound exceeded
       **/
      BoundExceeded: AugmentedError<ApiType>;
      /**
       * Overflow of chain counter
       **/
      ChainCounterOverflow: AugmentedError<ApiType>;
      /**
       * Underflow of stored blockchains counter
       **/
      ChainsUnderflow: AugmentedError<ApiType>;
      /**
       * Incorrect difficulty target specified in block header
       **/
      DiffTargetHeader: AugmentedError<ApiType>;
      /**
       * Block already stored
       **/
      DuplicateBlock: AugmentedError<ApiType>;
      /**
       * EndOfFile reached while parsing
       **/
      EndOfFile: AugmentedError<ApiType>;
      /**
       * Blockchain with requested ID not found
       **/
      ForkIdNotFound: AugmentedError<ApiType>;
      /**
       * Invalid block header version
       **/
      InvalidBlockVersion: AugmentedError<ApiType>;
      /**
       * Specified invalid Bitcoin address
       **/
      InvalidBtcAddress: AugmentedError<ApiType>;
      /**
       * User supplied an invalid address
       **/
      InvalidBtcHash: AugmentedError<ApiType>;
      /**
       * Invalid chain ID
       **/
      InvalidChainID: AugmentedError<ApiType>;
      /**
       * Coinbase tx must be the first transaction in the block
       **/
      InvalidCoinbasePosition: AugmentedError<ApiType>;
      /**
       * Invalid compact value in header
       **/
      InvalidCompact: AugmentedError<ApiType>;
      /**
       * Invalid block header size
       **/
      InvalidHeaderSize: AugmentedError<ApiType>;
      /**
       * Invalid merkle proof
       **/
      InvalidMerkleProof: AugmentedError<ApiType>;
      /**
       * Incorrect identifier in OP_RETURN field
       **/
      InvalidOpReturn: AugmentedError<ApiType>;
      /**
       * Transaction does meet the requirements to be a valid op-return payment
       **/
      InvalidOpReturnTransaction: AugmentedError<ApiType>;
      /**
       * Incorrect transaction output format
       **/
      InvalidOutputFormat: AugmentedError<ApiType>;
      /**
       * Incorrect recipient Bitcoin address
       **/
      InvalidPayment: AugmentedError<ApiType>;
      /**
       * Invalid payment amount
       **/
      InvalidPaymentAmount: AugmentedError<ApiType>;
      /**
       * User supplied an invalid script
       **/
      InvalidScript: AugmentedError<ApiType>;
      /**
       * Start height must be start of difficulty period
       **/
      InvalidStartHeight: AugmentedError<ApiType>;
      /**
       * Transaction does meet the requirements to be considered valid
       **/
      InvalidTransaction: AugmentedError<ApiType>;
      /**
       * Transaction hash does not match given txid
       **/
      InvalidTxid: AugmentedError<ApiType>;
      /**
       * Invalid transaction version
       **/
      InvalidTxVersion: AugmentedError<ApiType>;
      /**
       * PoW hash does not meet difficulty target of header
       **/
      LowDiff: AugmentedError<ApiType>;
      /**
       * Format of the header is invalid
       **/
      MalformedHeader: AugmentedError<ApiType>;
      /**
       * Merkle proof is malformed
       **/
      MalformedMerkleProof: AugmentedError<ApiType>;
      /**
       * Format of the OP_RETURN transaction output is invalid
       **/
      MalformedOpReturnOutput: AugmentedError<ApiType>;
      MalformedP2PKHOutput: AugmentedError<ApiType>;
      MalformedP2SHOutput: AugmentedError<ApiType>;
      /**
       * Transaction has incorrect format
       **/
      MalformedTransaction: AugmentedError<ApiType>;
      /**
       * Malformed transaction identifier
       **/
      MalformedTxid: AugmentedError<ApiType>;
      /**
       * Format of the BIP141 witness transaction output is invalid
       **/
      MalformedWitnessOutput: AugmentedError<ApiType>;
      /**
       * Missing the block at this height
       **/
      MissingBlockHeight: AugmentedError<ApiType>;
      /**
       * Current fork ongoing
       **/
      OngoingFork: AugmentedError<ApiType>;
      /**
       * Transaction has less confirmations of Parachain blocks than required
       **/
      ParachainConfirmations: AugmentedError<ApiType>;
      /**
       * Previous block hash not found
       **/
      PrevBlock: AugmentedError<ApiType>;
      /**
       * BTC Parachain has shut down
       **/
      Shutdown: AugmentedError<ApiType>;
      /**
       * TryInto failed on integer
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Unauthorized staked relayer
       **/
      UnauthorizedRelayer: AugmentedError<ApiType>;
      /**
       * Error code not applicable to blocks
       **/
      UnknownErrorcode: AugmentedError<ApiType>;
      UnsupportedInputFormat: AugmentedError<ApiType>;
      UnsupportedOutputFormat: AugmentedError<ApiType>;
      /**
       * Wrong fork bound, should be higher
       **/
      WrongForkBound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    clientsInfo: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    contracts: {
      /**
       * Code removal was denied because the code is still in use by at least one contract.
       **/
      CodeInUse: AugmentedError<ApiType>;
      /**
       * No code could be found at the supplied code hash.
       **/
      CodeNotFound: AugmentedError<ApiType>;
      /**
       * The contract's code was found to be invalid during validation or instrumentation.
       * 
       * The most likely cause of this is that an API was used which is not supported by the
       * node. This happens if an older node is used with a new version of ink!. Try updating
       * your node to the newest available version.
       * 
       * A more detailed error can be found on the node console if debug messages are enabled
       * by supplying `-lruntime::contracts=debug`.
       **/
      CodeRejected: AugmentedError<ApiType>;
      /**
       * The code supplied to `instantiate_with_code` exceeds the limit specified in the
       * current schedule.
       **/
      CodeTooLarge: AugmentedError<ApiType>;
      /**
       * No contract was found at the specified address.
       **/
      ContractNotFound: AugmentedError<ApiType>;
      /**
       * The contract ran to completion but decided to revert its storage changes.
       * Please note that this error is only returned from extrinsics. When called directly
       * or via RPC an `Ok` will be returned. In this case the caller needs to inspect the flags
       * to determine whether a reversion has taken place.
       **/
      ContractReverted: AugmentedError<ApiType>;
      /**
       * Contract trapped during execution.
       **/
      ContractTrapped: AugmentedError<ApiType>;
      /**
       * Input passed to a contract API function failed to decode as expected type.
       **/
      DecodingFailed: AugmentedError<ApiType>;
      /**
       * A contract with the same AccountId already exists.
       **/
      DuplicateContract: AugmentedError<ApiType>;
      /**
       * An indetermistic code was used in a context where this is not permitted.
       **/
      Indeterministic: AugmentedError<ApiType>;
      /**
       * `seal_call` forwarded this contracts input. It therefore is no longer available.
       **/
      InputForwarded: AugmentedError<ApiType>;
      /**
       * Invalid combination of flags supplied to `seal_call` or `seal_delegate_call`.
       **/
      InvalidCallFlags: AugmentedError<ApiType>;
      /**
       * A new schedule must have a greater version than the current one.
       **/
      InvalidScheduleVersion: AugmentedError<ApiType>;
      /**
       * Performing a call was denied because the calling depth reached the limit
       * of what is specified in the schedule.
       **/
      MaxCallDepthReached: AugmentedError<ApiType>;
      /**
       * The chain does not provide a chain extension. Calling the chain extension results
       * in this error. Note that this usually  shouldn't happen as deploying such contracts
       * is rejected.
       **/
      NoChainExtension: AugmentedError<ApiType>;
      /**
       * A buffer outside of sandbox memory was passed to a contract API function.
       **/
      OutOfBounds: AugmentedError<ApiType>;
      /**
       * The executed contract exhausted its gas limit.
       **/
      OutOfGas: AugmentedError<ApiType>;
      /**
       * The output buffer supplied to a contract API call was too small.
       **/
      OutputBufferTooSmall: AugmentedError<ApiType>;
      /**
       * The subject passed to `seal_random` exceeds the limit.
       **/
      RandomSubjectTooLong: AugmentedError<ApiType>;
      /**
       * A call tried to invoke a contract that is flagged as non-reentrant.
       * The only other cause is that a call from a contract into the runtime tried to call back
       * into `pallet-contracts`. This would make the whole pallet reentrant with regard to
       * contract code execution which is not supported.
       **/
      ReentranceDenied: AugmentedError<ApiType>;
      /**
       * More storage was created than allowed by the storage deposit limit.
       **/
      StorageDepositLimitExhausted: AugmentedError<ApiType>;
      /**
       * Origin doesn't have enough balance to pay the required storage deposits.
       **/
      StorageDepositNotEnoughFunds: AugmentedError<ApiType>;
      /**
       * A contract self destructed in its constructor.
       * 
       * This can be triggered by a call to `seal_terminate`.
       **/
      TerminatedInConstructor: AugmentedError<ApiType>;
      /**
       * Termination of a contract is not allowed while the contract is already
       * on the call stack. Can be triggered by `seal_terminate`.
       **/
      TerminatedWhileReentrant: AugmentedError<ApiType>;
      /**
       * The amount of topics passed to `seal_deposit_events` exceeds the limit.
       **/
      TooManyTopics: AugmentedError<ApiType>;
      /**
       * Performing the requested transfer failed. Probably because there isn't enough
       * free balance in the sender's account.
       **/
      TransferFailed: AugmentedError<ApiType>;
      /**
       * The size defined in `T::MaxValueSize` was exceeded.
       **/
      ValueTooLarge: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    convictionVoting: {
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      AlreadyVoting: AugmentedError<ApiType>;
      /**
       * The class ID supplied is invalid.
       **/
      BadClass: AugmentedError<ApiType>;
      /**
       * The class must be supplied since it is not easily determinable from the state.
       **/
      ClassNeeded: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action right now but will do in the future.
       **/
      NoPermissionYet: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Poll is not ongoing.
       **/
      NotOngoing: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the poll.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    currency: {
      InvalidCurrency: AugmentedError<ApiType>;
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    currencyManager: {
      InflationAlreadyDecayedThisYear: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dex: {
      AssetIdNotInTokenIndex: AugmentedError<ApiType>;
      AssetIdNotInTokenInfoes: AugmentedError<ApiType>;
      ExpirationMustBeInFuture: AugmentedError<ApiType>;
      InsufficientBalance: AugmentedError<ApiType>;
      InvalidOrderIndex: AugmentedError<ApiType>;
      NotEnoughBalance: AugmentedError<ApiType>;
      NotOwner: AugmentedError<ApiType>;
      OrderIndexOverflow: AugmentedError<ApiType>;
      PairAssetIdMustNotEqual: AugmentedError<ApiType>;
      PairOrderNotFound: AugmentedError<ApiType>;
      TokenBalanceOverflow: AugmentedError<ApiType>;
      UserAssetNotExist: AugmentedError<ApiType>;
      WithdrawBalanceMustKeepOrderSellAmount: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * Some bound not met
       **/
      BoundNotMet: AugmentedError<ApiType>;
      /**
       * The call is not allowed at this point.
       **/
      CallNotAllowed: AugmentedError<ApiType>;
      /**
       * The fallback failed
       **/
      FallbackFailed: AugmentedError<ApiType>;
      /**
       * `Self::insert_submission` returned an invalid index.
       **/
      InvalidSubmissionIndex: AugmentedError<ApiType>;
      /**
       * Snapshot metadata should exist but didn't.
       **/
      MissingSnapshotMetadata: AugmentedError<ApiType>;
      /**
       * OCW submitted solution for wrong round
       **/
      OcwCallWrongEra: AugmentedError<ApiType>;
      /**
       * Submission was too early.
       **/
      PreDispatchEarlySubmission: AugmentedError<ApiType>;
      /**
       * Submission was too weak, score-wise.
       **/
      PreDispatchWeakSubmission: AugmentedError<ApiType>;
      /**
       * Wrong number of winners presented.
       **/
      PreDispatchWrongWinnerCount: AugmentedError<ApiType>;
      /**
       * The origin failed to pay the deposit.
       **/
      SignedCannotPayDeposit: AugmentedError<ApiType>;
      /**
       * Witness data to dispatchable is invalid.
       **/
      SignedInvalidWitness: AugmentedError<ApiType>;
      /**
       * The queue was full, and the solution was not better than any of the existing ones.
       **/
      SignedQueueFull: AugmentedError<ApiType>;
      /**
       * The signed submission consumes too much weight
       **/
      SignedTooMuchWeight: AugmentedError<ApiType>;
      /**
       * Submitted solution has too many winners
       **/
      TooManyWinners: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    eth2Client: {
      /**
       * The active header slot number should be higher than the finalized slot
       **/
      ActiveHeaderSlotLessThanFinalizedSlot: AugmentedError<ApiType>;
      /**
       * The light client is already initialized for the typed chain ID
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Block already submitted
       **/
      BlockAlreadySubmitted: AugmentedError<ApiType>;
      /**
       * The block hash does not match the expected block hash
       **/
      BlockHashesDoNotMatch: AugmentedError<ApiType>;
      /**
       * The chain cannot be closed
       **/
      ChainCannotBeClosed: AugmentedError<ApiType>;
      CurrentSyncCommitteeNotSet: AugmentedError<ApiType>;
      FinalizedBeaconHeaderNotPresent: AugmentedError<ApiType>;
      FinalizedExecutionHeaderNotPresent: AugmentedError<ApiType>;
      /**
       * "The `hashes_gc_threshold` is not enough to be able to apply gc correctly"
       **/
      HashesGcThresholdInsufficient: AugmentedError<ApiType>;
      HeaderHashDoesNotExist: AugmentedError<ApiType>;
      /**
       * Failed to verify the bls signature
       **/
      InvalidBlsSignature: AugmentedError<ApiType>;
      /**
       * The current client mode is invalid for the action.
       **/
      InvalidClientMode: AugmentedError<ApiType>;
      InvalidExecutionBlock: AugmentedError<ApiType>;
      /**
       * Invalid execution block hash proof
       **/
      InvalidExecutionBlockHashProof: AugmentedError<ApiType>;
      /**
       * Invalid finality proof
       **/
      InvalidFinalityProof: AugmentedError<ApiType>;
      InvalidNetworkConfig: AugmentedError<ApiType>;
      InvalidNextSyncCommitteeProof: AugmentedError<ApiType>;
      InvalidSignaturePeriod: AugmentedError<ApiType>;
      InvalidSyncCommitteeBitsSum: AugmentedError<ApiType>;
      /**
       * The acceptable update periods are not met.
       **/
      InvalidUpdatePeriod: AugmentedError<ApiType>;
      /**
       * For attempting to update the light client
       **/
      LightClientUpdateNotAllowed: AugmentedError<ApiType>;
      NextSyncCommitteeNotPresent: AugmentedError<ApiType>;
      NextSyncCommitteeNotSet: AugmentedError<ApiType>;
      /**
       * Self-explanatory
       **/
      NotTrustedSigner: AugmentedError<ApiType>;
      SyncCommitteeBitsSumLessThanThreshold: AugmentedError<ApiType>;
      SyncCommitteeUpdateNotPresent: AugmentedError<ApiType>;
      /**
       * The client can't be executed in the trustless mode without BLS sigs verification on
       * Mainnet
       **/
      TrustlessModeError: AugmentedError<ApiType>;
      UnfinalizedHeaderNotPresent: AugmentedError<ApiType>;
      /**
       * Unknown parent block header hash
       **/
      UnknownParentHeader: AugmentedError<ApiType>;
      /**
       * The attested header slot should be equal to or higher than the finalized header slot
       **/
      UpdateHeaderSlotLessThanFinalizedHeaderSlot: AugmentedError<ApiType>;
      /**
       * The signature slot should be higher than the attested header slot
       **/
      UpdateSignatureSlotLessThanAttestedHeaderSlot: AugmentedError<ApiType>;
      /**
       * The updates validation can't be disabled for mainnet
       **/
      ValidateUpdatesParameterError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ethereum: {
      /**
       * Signature is invalid.
       **/
      InvalidSignature: AugmentedError<ApiType>;
      /**
       * Pre-log is present, therefore transact is not allowed.
       **/
      PreLogExists: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ethReceiptRegistry: {
      BlockHashesDoNotMatch: AugmentedError<ApiType>;
      ConvertToStringFailed: AugmentedError<ApiType>;
      DeserializeFail: AugmentedError<ApiType>;
      HeaderHashDoesNotExist: AugmentedError<ApiType>;
      /**
       * The chain is not monitored
       **/
      NoMonitoredAddressesForChain: AugmentedError<ApiType>;
      /**
       * Too many watched contracts
       **/
      TooManyAddresses: AugmentedError<ApiType>;
      /**
       * The proof verification failed
       **/
      VerifyProofFail: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    evm: {
      /**
       * Not enough balance to perform action
       **/
      BalanceLow: AugmentedError<ApiType>;
      /**
       * Calculating total fee overflowed
       **/
      FeeOverflow: AugmentedError<ApiType>;
      /**
       * Gas limit is too high.
       **/
      GasLimitTooHigh: AugmentedError<ApiType>;
      /**
       * Gas limit is too low.
       **/
      GasLimitTooLow: AugmentedError<ApiType>;
      /**
       * Gas price is too low.
       **/
      GasPriceTooLow: AugmentedError<ApiType>;
      /**
       * Nonce is invalid
       **/
      InvalidNonce: AugmentedError<ApiType>;
      /**
       * Calculating total payment overflowed
       **/
      PaymentOverflow: AugmentedError<ApiType>;
      /**
       * EVM reentrancy
       **/
      Reentrancy: AugmentedError<ApiType>;
      /**
       * EIP-3607,
       **/
      TransactionMustComeFromEOA: AugmentedError<ApiType>;
      /**
       * Undefined error.
       **/
      Undefined: AugmentedError<ApiType>;
      /**
       * Withdraw fee failed
       **/
      WithdrawFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    fee: {
      /**
       * Value exceeds the expected upper bound for storage fields in this pallet.
       **/
      AboveMaxExpectedValue: AugmentedError<ApiType>;
      /**
       * Unable to convert value.
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    hotfixSufficients: {
      /**
       * Maximum address count exceeded
       **/
      MaxAddressCountExceeded: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ibc: {
      /**
       * decode String failed
       **/
      DecodeStringFailed: AugmentedError<ApiType>;
      /**
       * invalid channel id
       **/
      InvalidChannelId: AugmentedError<ApiType>;
      /**
       * invalid client id
       **/
      InvalidClientId: AugmentedError<ApiType>;
      /**
       * invalid connection id
       **/
      InvalidConnectionId: AugmentedError<ApiType>;
      /**
       * invalid height
       **/
      InvalidHeight: AugmentedError<ApiType>;
      /**
       * Invalid module id
       **/
      InvalidModuleId: AugmentedError<ApiType>;
      /**
       * invalid portid
       **/
      InvalidPortId: AugmentedError<ApiType>;
      /**
       * invalid timestamp
       **/
      InvalidTimestamp: AugmentedError<ApiType>;
      /**
       * invalid version
       **/
      InvalidVersion: AugmentedError<ApiType>;
      /**
       * 
       **/
      Other: AugmentedError<ApiType>;
      /**
       * unknow Client type
       **/
      UnknownClientType: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ics20Transfer: {
      /**
       * 
       **/
      DecodeStringFailed: AugmentedError<ApiType>;
      /**
       * not found denom trace
       **/
      DenomTraceNotFound: AugmentedError<ApiType>;
      /**
       * Invalid token id
       **/
      InvalidTokenId: AugmentedError<ApiType>;
      ParserMsgTransferError: AugmentedError<ApiType>;
      /**
       * transfer error
       **/
      TokenTransferError: AugmentedError<ApiType>;
      /**
       * Wrong assert id
       **/
      WrongAssetId: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The provided judgement was for a different identity.
       **/
      JudgementForDifferentIdentity: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * Error that occurs when there is an issue paying for judgement.
       **/
      JudgementPaymentFailed: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    imOnline: {
      /**
       * Duplicated heartbeat.
       **/
      DuplicatedHeartbeat: AugmentedError<ApiType>;
      /**
       * Non existent public key.
       **/
      InvalidKey: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    indices: {
      /**
       * The index was not available.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * The index was not already assigned.
       **/
      NotAssigned: AugmentedError<ApiType>;
      /**
       * The index is assigned to another account.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The source and destination accounts are identical.
       **/
      NotTransfer: AugmentedError<ApiType>;
      /**
       * The index is permanent and may not be freed/changed.
       **/
      Permanent: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    issue: {
      /**
       * Issue amount is too small.
       **/
      AmountBelowDustAmount: AugmentedError<ApiType>;
      /**
       * Issue request has expired.
       **/
      CommitPeriodExpired: AugmentedError<ApiType>;
      /**
       * Not expected origin.
       **/
      InvalidExecutor: AugmentedError<ApiType>;
      /**
       * Issue request already cancelled.
       **/
      IssueCancelled: AugmentedError<ApiType>;
      /**
       * Issue request already completed.
       **/
      IssueCompleted: AugmentedError<ApiType>;
      /**
       * Issue request not found.
       **/
      IssueIdNotFound: AugmentedError<ApiType>;
      /**
       * Issue request has not expired.
       **/
      TimeNotExpired: AugmentedError<ApiType>;
      /**
       * Vault is not active.
       **/
      VaultNotAcceptingNewIssues: AugmentedError<ApiType>;
      /**
       * Relay is not initialized.
       **/
      WaitingForRelayerInitialization: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    loans: {
      /**
       * Upper bound of borrowing is exceeded
       **/
      BorrowCapacityExceeded: AugmentedError<ApiType>;
      /**
       * Locking collateral failed. The account has no `free` tokens.
       **/
      DepositAllCollateralFailed: AugmentedError<ApiType>;
      /**
       * Deposits are not used as a collateral
       **/
      DepositsAreNotCollateral: AugmentedError<ApiType>;
      /**
       * Insufficient cash in the pool
       **/
      InsufficientCash: AugmentedError<ApiType>;
      /**
       * Repay amount more than collateral amount
       **/
      InsufficientCollateral: AugmentedError<ApiType>;
      /**
       * Insufficient deposit to redeem
       **/
      InsufficientDeposit: AugmentedError<ApiType>;
      /**
       * Insufficient liquidity to borrow more or disable collateral
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Insufficient reserves
       **/
      InsufficientReserves: AugmentedError<ApiType>;
      /**
       * Insufficient shortfall to repay
       **/
      InsufficientShortfall: AugmentedError<ApiType>;
      /**
       * Amount cannot be zero
       **/
      InvalidAmount: AugmentedError<ApiType>;
      /**
       * The exchange rate should be a value between `MinExchangeRate` and `MaxExchangeRate`
       **/
      InvalidExchangeRate: AugmentedError<ApiType>;
      /**
       * The factor should be greater than 0% and less than 100%
       **/
      InvalidFactor: AugmentedError<ApiType>;
      /**
       * Invalid lend_token id
       **/
      InvalidLendTokenId: AugmentedError<ApiType>;
      /**
       * Invalid rate model params
       **/
      InvalidRateModelParam: AugmentedError<ApiType>;
      /**
       * The supply cap cannot be zero
       **/
      InvalidSupplyCap: AugmentedError<ApiType>;
      /**
       * Liquidator is same as borrower
       **/
      LiquidatorIsBorrower: AugmentedError<ApiType>;
      /**
       * Only free lend tokens are redeemable
       **/
      LockedTokensCannotBeRedeemed: AugmentedError<ApiType>;
      /**
       * Market already activated
       **/
      MarketAlreadyActivated: AugmentedError<ApiType>;
      /**
       * Market already exists
       **/
      MarketAlreadyExists: AugmentedError<ApiType>;
      /**
       * Market does not exist
       **/
      MarketDoesNotExist: AugmentedError<ApiType>;
      /**
       * Market not activated
       **/
      MarketNotActivated: AugmentedError<ApiType>;
      /**
       * New markets must have a pending state
       **/
      NewMarketMustHavePendingState: AugmentedError<ApiType>;
      /**
       * Upper bound of supplying is exceeded
       **/
      SupplyCapacityExceeded: AugmentedError<ApiType>;
      /**
       * Tokens already locked for a different purpose than borrow collateral
       **/
      TokensAlreadyLocked: AugmentedError<ApiType>;
      /**
       * Repay amount greater than allowed (either repays more than the existing debt, or
       * exceeds the close factor)
       **/
      TooMuchRepay: AugmentedError<ApiType>;
      /**
       * Unlocking collateral failed. The account has no `reserved` tokens.
       **/
      WithdrawAllCollateralFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    nomination: {
      /**
       * Account cannot withdraw.
       **/
      CannotWithdrawCollateral: AugmentedError<ApiType>;
      /**
       * Vault cannot withdraw.
       **/
      CollateralizationTooLow: AugmentedError<ApiType>;
      /**
       * Nomination would overburden Vault.
       **/
      NominationExceedsLimit: AugmentedError<ApiType>;
      /**
       * Vault has already enabled nomination.
       **/
      VaultAlreadyOptedInToNomination: AugmentedError<ApiType>;
      /**
       * Nomination is not enabled.
       **/
      VaultNominationDisabled: AugmentedError<ApiType>;
      /**
       * Vault not found.
       **/
      VaultNotFound: AugmentedError<ApiType>;
      /**
       * Vault has not enabled nomination.
       **/
      VaultNotOptedInToNomination: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    oracle: {
      /**
       * Not authorized to set exchange rate
       **/
      InvalidOracleSource: AugmentedError<ApiType>;
      /**
       * Exchange rate not specified or has expired
       **/
      MissingExchangeRate: AugmentedError<ApiType>;
      /**
       * Unable to convert value
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    redeem: {
      /**
       * Redeem amount is too small.
       **/
      AmountBelowDustAmount: AugmentedError<ApiType>;
      /**
       * Account has insufficient balance.
       **/
      AmountExceedsUserBalance: AugmentedError<ApiType>;
      /**
       * Redeem request already cancelled.
       **/
      RedeemCancelled: AugmentedError<ApiType>;
      /**
       * Redeem request already completed.
       **/
      RedeemCompleted: AugmentedError<ApiType>;
      /**
       * Redeem request not found.
       **/
      RedeemIdNotFound: AugmentedError<ApiType>;
      /**
       * Redeem request has not expired.
       **/
      TimeNotExpired: AugmentedError<ApiType>;
      /**
       * Unable to convert value.
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Unexpected redeem account.
       **/
      UnauthorizedRedeemer: AugmentedError<ApiType>;
      /**
       * Unexpected vault account.
       **/
      UnauthorizedVault: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    referenda: {
      /**
       * The referendum index provided is invalid in this context.
       **/
      BadReferendum: AugmentedError<ApiType>;
      /**
       * The referendum status is invalid for this operation.
       **/
      BadStatus: AugmentedError<ApiType>;
      /**
       * The track identifier given was invalid.
       **/
      BadTrack: AugmentedError<ApiType>;
      /**
       * There are already a full complement of referenda in progress for this track.
       **/
      Full: AugmentedError<ApiType>;
      /**
       * Referendum's decision deposit is already paid.
       **/
      HasDeposit: AugmentedError<ApiType>;
      /**
       * The deposit cannot be refunded since none was made.
       **/
      NoDeposit: AugmentedError<ApiType>;
      /**
       * The deposit refunder is not the depositor.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * There was nothing to do in the advancement.
       **/
      NothingToDo: AugmentedError<ApiType>;
      /**
       * Referendum is not ongoing.
       **/
      NotOngoing: AugmentedError<ApiType>;
      /**
       * No track exists for the proposal origin.
       **/
      NoTrack: AugmentedError<ApiType>;
      /**
       * The preimage does not exist.
       **/
      PreimageNotExist: AugmentedError<ApiType>;
      /**
       * The queue of the track is empty.
       **/
      QueueEmpty: AugmentedError<ApiType>;
      /**
       * Any deposit cannot be refunded until after the decision is over.
       **/
      Unfinished: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    replace: {
      /**
       * Replace amount is too small.
       **/
      AmountBelowDustAmount: AugmentedError<ApiType>;
      /**
       * Vault cannot replace different currency.
       **/
      InvalidWrappedCurrency: AugmentedError<ApiType>;
      /**
       * No replace request found.
       **/
      NoPendingRequest: AugmentedError<ApiType>;
      /**
       * Replace requires non-zero increase.
       **/
      ReplaceAmountZero: AugmentedError<ApiType>;
      /**
       * Replace request already cancelled.
       **/
      ReplaceCancelled: AugmentedError<ApiType>;
      /**
       * Replace request already completed.
       **/
      ReplaceCompleted: AugmentedError<ApiType>;
      /**
       * Replace request not found.
       **/
      ReplaceIdNotFound: AugmentedError<ApiType>;
      /**
       * Replace request has not expired.
       **/
      ReplacePeriodNotExpired: AugmentedError<ApiType>;
      /**
       * Cannot replace self.
       **/
      ReplaceSelfNotAllowed: AugmentedError<ApiType>;
      /**
       * Unexpected vault account.
       **/
      UnauthorizedVault: AugmentedError<ApiType>;
      /**
       * Cannot replace with nominated collateral.
       **/
      VaultHasEnabledNomination: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    security: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sessionPayout: {
      NotController: AugmentedError<ApiType>;
      NotStash: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    society: {
      /**
       * User has already made a bid.
       **/
      AlreadyBid: AugmentedError<ApiType>;
      /**
       * User is already a candidate.
       **/
      AlreadyCandidate: AugmentedError<ApiType>;
      /**
       * Society already founded.
       **/
      AlreadyFounded: AugmentedError<ApiType>;
      /**
       * User is already a member.
       **/
      AlreadyMember: AugmentedError<ApiType>;
      /**
       * Member is already vouching or banned from vouching again.
       **/
      AlreadyVouching: AugmentedError<ApiType>;
      /**
       * An incorrect position was provided.
       **/
      BadPosition: AugmentedError<ApiType>;
      /**
       * Cannot remove the founder.
       **/
      Founder: AugmentedError<ApiType>;
      /**
       * Cannot remove the head of the chain.
       **/
      Head: AugmentedError<ApiType>;
      /**
       * Not enough in pot to accept candidate.
       **/
      InsufficientPot: AugmentedError<ApiType>;
      /**
       * Too many members in the society.
       **/
      MaxMembers: AugmentedError<ApiType>;
      /**
       * Nothing to payout.
       **/
      NoPayout: AugmentedError<ApiType>;
      /**
       * User is not a candidate.
       **/
      NotCandidate: AugmentedError<ApiType>;
      /**
       * The caller is not the founder.
       **/
      NotFounder: AugmentedError<ApiType>;
      /**
       * The caller is not the head.
       **/
      NotHead: AugmentedError<ApiType>;
      /**
       * User is not a member.
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * User is not suspended.
       **/
      NotSuspended: AugmentedError<ApiType>;
      /**
       * Member is not vouching.
       **/
      NotVouching: AugmentedError<ApiType>;
      /**
       * User is suspended.
       **/
      Suspended: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    staking: {
      /**
       * Stash is already bonded.
       **/
      AlreadyBonded: AugmentedError<ApiType>;
      /**
       * Rewards for this era have already been claimed for this validator.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Controller is already paired.
       **/
      AlreadyPaired: AugmentedError<ApiType>;
      /**
       * Internal state has become somehow corrupted and the operation cannot continue.
       **/
      BadState: AugmentedError<ApiType>;
      /**
       * A nomination target was supplied that was blocked or otherwise not a validator.
       **/
      BadTarget: AugmentedError<ApiType>;
      /**
       * Some bound is not met.
       **/
      BoundNotMet: AugmentedError<ApiType>;
      /**
       * The user has enough bond and thus cannot be chilled forcefully by an external person.
       **/
      CannotChillOther: AugmentedError<ApiType>;
      /**
       * Commission is too low. Must be at least `MinCommission`.
       **/
      CommissionTooLow: AugmentedError<ApiType>;
      /**
       * Duplicate index.
       **/
      DuplicateIndex: AugmentedError<ApiType>;
      /**
       * Targets cannot be empty.
       **/
      EmptyTargets: AugmentedError<ApiType>;
      /**
       * Attempting to target a stash that still has funds.
       **/
      FundedTarget: AugmentedError<ApiType>;
      /**
       * Incorrect previous history depth input provided.
       **/
      IncorrectHistoryDepth: AugmentedError<ApiType>;
      /**
       * Incorrect number of slashing spans provided.
       **/
      IncorrectSlashingSpans: AugmentedError<ApiType>;
      /**
       * Cannot have a validator or nominator role, with value less than the minimum defined by
       * governance (see `MinValidatorBond` and `MinNominatorBond`). If unbonding is the
       * intention, `chill` first to remove one's role as validator/nominator.
       **/
      InsufficientBond: AugmentedError<ApiType>;
      /**
       * Invalid era to reward.
       **/
      InvalidEraToReward: AugmentedError<ApiType>;
      /**
       * Invalid number of nominations.
       **/
      InvalidNumberOfNominations: AugmentedError<ApiType>;
      /**
       * Slash record index out of bounds.
       **/
      InvalidSlashIndex: AugmentedError<ApiType>;
      /**
       * Can not schedule more unlock chunks.
       **/
      NoMoreChunks: AugmentedError<ApiType>;
      /**
       * Not a controller account.
       **/
      NotController: AugmentedError<ApiType>;
      /**
       * Items are not sorted and unique.
       **/
      NotSortedAndUnique: AugmentedError<ApiType>;
      /**
       * Not a stash account.
       **/
      NotStash: AugmentedError<ApiType>;
      /**
       * Can not rebond without unlocking chunks.
       **/
      NoUnlockChunk: AugmentedError<ApiType>;
      /**
       * There are too many nominators in the system. Governance needs to adjust the staking
       * settings to keep things safe for the runtime.
       **/
      TooManyNominators: AugmentedError<ApiType>;
      /**
       * Too many nomination targets supplied.
       **/
      TooManyTargets: AugmentedError<ApiType>;
      /**
       * There are too many validator candidates in the system. Governance needs to adjust the
       * staking settings to keep things safe for the runtime.
       **/
      TooManyValidators: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tokens: {
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Failed because the maximum locks was exceeded
       **/
      MaxLocksExceeded: AugmentedError<ApiType>;
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * The spend origin is valid but the amount it is allowed to spend is lower than the
       * amount to be spent.
       **/
      InsufficientPermission: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vaultCapacity: {
      /**
       * Balance not sufficient to withdraw stake.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Maximum rewards currencies reached.
       **/
      MaxRewardCurrencies: AugmentedError<ApiType>;
      /**
       * Unable to convert value.
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Cannot distribute rewards without stake.
       **/
      ZeroTotalStake: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vaultRegistry: {
      /**
       * Ceiling was not found for the given currency
       **/
      CeilingNotSet: AugmentedError<ApiType>;
      /**
       * The collateral ceiling would be exceeded for the vault's currency.
       **/
      CurrencyCeilingExceeded: AugmentedError<ApiType>;
      /**
       * The amount of tokens to be issued is higher than the issuable amount by the vault
       **/
      ExceedingVaultLimit: AugmentedError<ApiType>;
      /**
       * Not enough free collateral available.
       **/
      InsufficientCollateral: AugmentedError<ApiType>;
      /**
       * The requested amount of tokens exceeds the amount available to this vault.
       **/
      InsufficientTokensCommitted: AugmentedError<ApiType>;
      /**
       * The provided collateral was insufficient - it must be above ``MinimumCollateralVault``.
       **/
      InsufficientVaultCollateralAmount: AugmentedError<ApiType>;
      /**
       * Failed attempt to modify vault's collateral because it was in the wrong currency
       **/
      InvalidCurrency: AugmentedError<ApiType>;
      /**
       * Deposit address could not be generated with the given public key.
       **/
      InvalidPublicKey: AugmentedError<ApiType>;
      MinimumCollateralNotSet: AugmentedError<ApiType>;
      /**
       * No bitcoin public key is registered for the vault.
       **/
      NoBitcoinPublicKey: AugmentedError<ApiType>;
      /**
       * Collateralization is infinite if no tokens are issued
       **/
      NoTokensIssued: AugmentedError<ApiType>;
      NoVaultUnderThePremiumRedeemThreshold: AugmentedError<ApiType>;
      NoVaultWithSufficientCollateral: AugmentedError<ApiType>;
      NoVaultWithSufficientTokens: AugmentedError<ApiType>;
      /**
       * A bitcoin public key was already registered for this account.
       **/
      PublicKeyAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Vault attempted to set secure threshold below the global secure threshold
       **/
      ThresholdNotAboveGlobalThreshold: AugmentedError<ApiType>;
      /**
       * Threshold was not found for the given currency
       **/
      ThresholdNotSet: AugmentedError<ApiType>;
      /**
       * Unable to convert value
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Returned if a vault tries to register while already being registered
       **/
      VaultAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Action not allowed on banned vault.
       **/
      VaultBanned: AugmentedError<ApiType>;
      /**
       * Vault is no longer usable as it was liquidated due to undercollateralization.
       **/
      VaultLiquidated: AugmentedError<ApiType>;
      /**
       * Vault is not accepting new issue requests.
       **/
      VaultNotAcceptingIssueRequests: AugmentedError<ApiType>;
      /**
       * Attempted to liquidate a vault that is not undercollateralized.
       **/
      VaultNotBelowLiquidationThreshold: AugmentedError<ApiType>;
      /**
       * The specified vault does not exist.
       **/
      VaultNotFound: AugmentedError<ApiType>;
      /**
       * Vault must be liquidated.
       **/
      VaultNotRecoverable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vaultRewards: {
      /**
       * Balance not sufficient to withdraw stake.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Maximum rewards currencies reached.
       **/
      MaxRewardCurrencies: AugmentedError<ApiType>;
      /**
       * Unable to convert value.
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Cannot distribute rewards without stake.
       **/
      ZeroTotalStake: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vaultStaking: {
      /**
       * Balance not sufficient to withdraw stake.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Cannot slash zero total stake.
       **/
      SlashZeroTotalStake: AugmentedError<ApiType>;
      /**
       * Unable to convert value.
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * Amount being transferred is too low to create a vesting schedule.
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * The account already has `MaxVestingSchedules` count of schedules and thus
       * cannot add another one. Consider merging existing schedules in order to add another.
       **/
      AtMaxVestingSchedules: AugmentedError<ApiType>;
      /**
       * Failed to create a new schedule because some parameter was invalid.
       **/
      InvalidScheduleParams: AugmentedError<ApiType>;
      /**
       * The account given is not vesting.
       **/
      NotVesting: AugmentedError<ApiType>;
      /**
       * An index was out of bounds of the vesting schedules.
       **/
      ScheduleIndexOutOfBounds: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    whitelist: {
      /**
       * The call was already whitelisted; No-Op.
       **/
      CallAlreadyWhitelisted: AugmentedError<ApiType>;
      /**
       * The call was not whitelisted.
       **/
      CallIsNotWhitelisted: AugmentedError<ApiType>;
      /**
       * The weight of the decoded call was higher than the witness.
       **/
      InvalidCallWeightWitness: AugmentedError<ApiType>;
      /**
       * The preimage of the call hash could not be loaded.
       **/
      UnavailablePreImage: AugmentedError<ApiType>;
      /**
       * The call could not be decoded.
       **/
      UndecodableCall: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
