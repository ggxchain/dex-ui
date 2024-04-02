// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import "@polkadot/types/types/registry";

import type {
	AstarPrimitivesEthereumCheckedCheckedEthereumTx,
	BitcoinAddress,
	BitcoinAddressPublicKey,
	BitcoinBlockChain,
	BitcoinBlockHeader,
	BitcoinFullTransactionProof,
	BitcoinH256Le,
	BitcoinLockTime,
	BitcoinMerkleMerkleProof,
	BitcoinMerklePartialTransactionProof,
	BitcoinScript,
	BitcoinTransaction,
	BitcoinTransactionInput,
	BitcoinTransactionInputSource,
	BitcoinTransactionOutput,
	BtcRelayCall,
	BtcRelayError,
	BtcRelayEvent,
	BtcRelayRichBlockHeader,
	ClientsInfoCall,
	ClientsInfoClientRelease,
	ClientsInfoError,
	ClientsInfoEvent,
	CurrencyError,
	EthTypesBlockHeader,
	EthTypesBloom,
	EthTypesClientMode,
	EthTypesEth2BeaconBlockHeader,
	EthTypesEth2ExtendedBeaconBlockHeader,
	EthTypesEth2FinalizedHeaderUpdate,
	EthTypesEth2HeaderUpdate,
	EthTypesEth2LightClientUpdate,
	EthTypesEth2PublicKeyBytes,
	EthTypesEth2SignatureBytes,
	EthTypesEth2SyncAggregate,
	EthTypesEth2SyncCommittee,
	EthTypesEth2SyncCommitteeBits,
	EthTypesEth2SyncCommitteePublicKeys,
	EthTypesEth2SyncCommitteeUpdate,
	EthTypesExecutionHeaderInfo,
	EthTypesH64,
	EthTypesInitInput,
	EthbloomBloom,
	EthereumBlock,
	EthereumHeader,
	EthereumLog,
	EthereumReceiptEip658ReceiptData,
	EthereumReceiptReceiptV3,
	EthereumTransactionAccessListItem,
	EthereumTransactionEip1559Transaction,
	EthereumTransactionEip2930Transaction,
	EthereumTransactionLegacyTransaction,
	EthereumTransactionTransactionAction,
	EthereumTransactionTransactionSignature,
	EthereumTransactionTransactionV2,
	EthereumTypesHashH64,
	EvmCoreErrorExitError,
	EvmCoreErrorExitFatal,
	EvmCoreErrorExitReason,
	EvmCoreErrorExitRevert,
	EvmCoreErrorExitSucceed,
	FeeCall,
	FeeError,
	FeeVersion,
	FinalityGrandpaEquivocationPrecommit,
	FinalityGrandpaEquivocationPrevote,
	FinalityGrandpaPrecommit,
	FinalityGrandpaPrevote,
	FpRpcTransactionStatus,
	FrameSupportDispatchDispatchClass,
	FrameSupportDispatchDispatchInfo,
	FrameSupportDispatchPays,
	FrameSupportDispatchPerDispatchClassU32,
	FrameSupportDispatchPerDispatchClassWeight,
	FrameSupportDispatchPerDispatchClassWeightsPerClass,
	FrameSupportDispatchPostDispatchInfo,
	FrameSupportDispatchRawOrigin,
	FrameSupportPalletId,
	FrameSupportPreimagesBounded,
	FrameSupportScheduleDispatchTime,
	FrameSupportTokensMiscBalanceStatus,
	FrameSystemAccountInfo,
	FrameSystemCall,
	FrameSystemError,
	FrameSystemEvent,
	FrameSystemEventRecord,
	FrameSystemExtensionsCheckGenesis,
	FrameSystemExtensionsCheckNonce,
	FrameSystemExtensionsCheckSpecVersion,
	FrameSystemExtensionsCheckTxVersion,
	FrameSystemExtensionsCheckWeight,
	FrameSystemLastRuntimeUpgradeInfo,
	FrameSystemLimitsBlockLength,
	FrameSystemLimitsBlockWeights,
	FrameSystemLimitsWeightsPerClass,
	FrameSystemPhase,
	GgxchainRuntimeBrooklynOpaqueSessionKeys,
	GgxchainRuntimeBrooklynOriginCaller,
	GgxchainRuntimeBrooklynPosNposSolution16,
	GgxchainRuntimeBrooklynPosProxyType,
	GgxchainRuntimeBrooklynRuntime,
	IbcCoreIcs02ClientEventsClientIdAttribute,
	IbcCoreIcs02ClientEventsClientMisbehaviour,
	IbcCoreIcs02ClientEventsClientTypeAttribute,
	IbcCoreIcs02ClientEventsConsensusHeightAttribute,
	IbcCoreIcs02ClientEventsConsensusHeightsAttribute,
	IbcCoreIcs02ClientEventsCreateClient,
	IbcCoreIcs02ClientEventsHeaderAttribute,
	IbcCoreIcs02ClientEventsUpdateClient,
	IbcCoreIcs02ClientEventsUpgradeClient,
	IbcCoreIcs02ClientHeight,
	IbcCoreIcs03ConnectionConnectionCounterparty,
	IbcCoreIcs03ConnectionConnectionSealedConnectionEnd,
	IbcCoreIcs03ConnectionConnectionState,
	IbcCoreIcs03ConnectionEventsAttributes,
	IbcCoreIcs03ConnectionEventsOpenAck,
	IbcCoreIcs03ConnectionEventsOpenConfirm,
	IbcCoreIcs03ConnectionEventsOpenInit,
	IbcCoreIcs03ConnectionEventsOpenTry,
	IbcCoreIcs03ConnectionVersion,
	IbcCoreIcs04ChannelChannelChannelEnd,
	IbcCoreIcs04ChannelChannelCounterparty,
	IbcCoreIcs04ChannelChannelOrder,
	IbcCoreIcs04ChannelChannelState,
	IbcCoreIcs04ChannelEventsAcknowledgePacket,
	IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute,
	IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute,
	IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute,
	IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute,
	IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute,
	IbcCoreIcs04ChannelEventsChannelAttributesVersionAttribute,
	IbcCoreIcs04ChannelEventsChannelClosed,
	IbcCoreIcs04ChannelEventsCloseConfirm,
	IbcCoreIcs04ChannelEventsCloseInit,
	IbcCoreIcs04ChannelEventsOpenAck,
	IbcCoreIcs04ChannelEventsOpenConfirm,
	IbcCoreIcs04ChannelEventsOpenInit,
	IbcCoreIcs04ChannelEventsOpenTry,
	IbcCoreIcs04ChannelEventsPacketAttributesAcknowledgementAttribute,
	IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute,
	IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute,
	IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute,
	IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute,
	IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute,
	IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute,
	IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute,
	IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute,
	IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute,
	IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute,
	IbcCoreIcs04ChannelEventsReceivePacket,
	IbcCoreIcs04ChannelEventsSendPacket,
	IbcCoreIcs04ChannelEventsTimeoutPacket,
	IbcCoreIcs04ChannelEventsWriteAcknowledgement,
	IbcCoreIcs04ChannelPacketReceipt,
	IbcCoreIcs04ChannelTimeoutTimeoutHeight,
	IbcCoreIcs23CommitmentCommitmentCommitmentPrefix,
	IbcCoreIcs24HostPathAcksPath,
	IbcCoreIcs24HostPathChannelEndsPath,
	IbcCoreIcs24HostPathClientConsensusStatePath,
	IbcCoreIcs24HostPathCommitmentsPath,
	IbcCoreIcs24HostPathReceiptsPath,
	IbcCoreIcs24HostPathSeqAcksPath,
	IbcCoreIcs24HostPathSeqRecvsPath,
	IbcCoreIcs24HostPathSeqSendsPath,
	IbcEventsIbcEvent,
	IbcEventsModuleEvent,
	IbcEventsModuleEventAttribute,
	IbcProtoGoogleProtobufAny,
	IbcTimestamp,
	InterbtcPrimitivesCurrencyId,
	InterbtcPrimitivesCustomMetadata,
	InterbtcPrimitivesIssueIssueRequest,
	InterbtcPrimitivesIssueIssueRequestStatus,
	InterbtcPrimitivesLpToken,
	InterbtcPrimitivesOracleKey,
	InterbtcPrimitivesRedeemRedeemRequest,
	InterbtcPrimitivesRedeemRedeemRequestStatus,
	InterbtcPrimitivesReplaceReplaceRequest,
	InterbtcPrimitivesReplaceReplaceRequestStatus,
	InterbtcPrimitivesTokenSymbol,
	InterbtcPrimitivesVaultCurrencyPair,
	InterbtcPrimitivesVaultId,
	IssueCall,
	IssueError,
	IssueEvent,
	IssueVersion,
	LoansBorrowSnapshot,
	LoansCall,
	LoansError,
	LoansEvent,
	LoansMarket,
	LoansMarketState,
	LoansRateModelCurveModel,
	LoansRateModelInterestRateModel,
	LoansRateModelJumpModel,
	LoansRewardMarketState,
	LoansVersions,
	NominationCall,
	NominationError,
	NominationEvent,
	OracleCall,
	OracleError,
	OracleEvent,
	OracleTimestampedValue,
	OracleVersion,
	OrmlAssetRegistryModuleCall,
	OrmlAssetRegistryModuleError,
	OrmlAssetRegistryModuleEvent,
	OrmlTokensAccountData,
	OrmlTokensBalanceLock,
	OrmlTokensModuleCall,
	OrmlTokensModuleError,
	OrmlTokensModuleEvent,
	OrmlTokensReserveData,
	OrmlTraitsAssetRegistryAssetMetadata,
	PalletAssetsAccountStatus,
	PalletAssetsApproval,
	PalletAssetsAssetAccount,
	PalletAssetsAssetDetails,
	PalletAssetsAssetMetadata,
	PalletAssetsAssetStatus,
	PalletAssetsCall,
	PalletAssetsError,
	PalletAssetsEvent,
	PalletAssetsExistenceReason,
	PalletBalancesAccountData,
	PalletBalancesBalanceLock,
	PalletBalancesCall,
	PalletBalancesError,
	PalletBalancesEvent,
	PalletBalancesIdAmount,
	PalletBalancesReasons,
	PalletBalancesReserveData,
	PalletBaseFeeCall,
	PalletBaseFeeEvent,
	PalletBeefyCall,
	PalletBeefyError,
	PalletBountiesBounty,
	PalletBountiesBountyStatus,
	PalletBountiesCall,
	PalletBountiesError,
	PalletBountiesEvent,
	PalletContractsCall,
	PalletContractsError,
	PalletContractsEvent,
	PalletContractsOrigin,
	PalletContractsSchedule,
	PalletContractsScheduleHostFnWeights,
	PalletContractsScheduleInstructionWeights,
	PalletContractsScheduleLimits,
	PalletContractsStorageContractInfo,
	PalletContractsStorageDeletionQueueManager,
	PalletContractsWasmDeterminism,
	PalletContractsWasmOwnerInfo,
	PalletContractsWasmPrefabWasmModule,
	PalletConvictionVotingCall,
	PalletConvictionVotingConviction,
	PalletConvictionVotingDelegations,
	PalletConvictionVotingError,
	PalletConvictionVotingEvent,
	PalletConvictionVotingTally,
	PalletConvictionVotingVoteAccountVote,
	PalletConvictionVotingVoteCasting,
	PalletConvictionVotingVoteDelegating,
	PalletConvictionVotingVotePriorLock,
	PalletConvictionVotingVoteVoting,
	PalletDexCall,
	PalletDexError,
	PalletDexEvent,
	PalletDexOrder,
	PalletDexOrderType,
	PalletDexTokenInfo,
	PalletDynamicFeeCall,
	PalletElectionProviderMultiPhaseCall,
	PalletElectionProviderMultiPhaseElectionCompute,
	PalletElectionProviderMultiPhaseError,
	PalletElectionProviderMultiPhaseEvent,
	PalletElectionProviderMultiPhasePhase,
	PalletElectionProviderMultiPhaseRawSolution,
	PalletElectionProviderMultiPhaseReadySolution,
	PalletElectionProviderMultiPhaseRoundSnapshot,
	PalletElectionProviderMultiPhaseSignedSignedSubmission,
	PalletElectionProviderMultiPhaseSolutionOrSnapshotSize,
	PalletEth2LightClientCall,
	PalletEth2LightClientError,
	PalletEth2LightClientEvent,
	PalletEthereumCall,
	PalletEthereumCheckedCall,
	PalletEthereumCheckedRawOrigin,
	PalletEthereumError,
	PalletEthereumEvent,
	PalletEthereumRawOrigin,
	PalletEvmCall,
	PalletEvmCodeMetadata,
	PalletEvmError,
	PalletEvmEvent,
	PalletGrandpaCall,
	PalletGrandpaError,
	PalletGrandpaEvent,
	PalletGrandpaStoredPendingChange,
	PalletGrandpaStoredState,
	PalletHotfixSufficientsCall,
	PalletHotfixSufficientsError,
	PalletIbcCall,
	PalletIbcError,
	PalletIbcErrorsIbcError,
	PalletIbcEvent,
	PalletIcs20TransferCall,
	PalletIcs20TransferDenomPrefixedDenom,
	PalletIcs20TransferError,
	PalletIcs20TransferEvent,
	PalletIdentityBitFlags,
	PalletIdentityCall,
	PalletIdentityError,
	PalletIdentityEvent,
	PalletIdentityIdentityField,
	PalletIdentityIdentityInfo,
	PalletIdentityJudgement,
	PalletIdentityRegistrarInfo,
	PalletIdentityRegistration,
	PalletImOnlineBoundedOpaqueNetworkState,
	PalletImOnlineCall,
	PalletImOnlineError,
	PalletImOnlineEvent,
	PalletImOnlineHeartbeat,
	PalletImOnlineSr25519AppSr25519Public,
	PalletImOnlineSr25519AppSr25519Signature,
	PalletIndicesCall,
	PalletIndicesError,
	PalletIndicesEvent,
	PalletMultisigCall,
	PalletMultisigError,
	PalletMultisigEvent,
	PalletMultisigMultisig,
	PalletMultisigTimepoint,
	PalletOffencesEvent,
	PalletPreimageCall,
	PalletPreimageError,
	PalletPreimageEvent,
	PalletPreimageRequestStatus,
	PalletProxyAnnouncement,
	PalletProxyCall,
	PalletProxyError,
	PalletProxyEvent,
	PalletProxyProxyDefinition,
	PalletReceiptRegistryCall,
	PalletReceiptRegistryError,
	PalletReceiptRegistryEvent,
	PalletReferendaCall,
	PalletReferendaCurve,
	PalletReferendaDecidingStatus,
	PalletReferendaDeposit,
	PalletReferendaError,
	PalletReferendaEvent,
	PalletReferendaReferendumInfo,
	PalletReferendaReferendumStatus,
	PalletReferendaTrackInfo,
	PalletSchedulerCall,
	PalletSchedulerError,
	PalletSchedulerEvent,
	PalletSchedulerScheduled,
	PalletSessionCall,
	PalletSessionError,
	PalletSessionEvent,
	PalletSocietyBid,
	PalletSocietyBidKind,
	PalletSocietyCall,
	PalletSocietyError,
	PalletSocietyEvent,
	PalletSocietyJudgement,
	PalletSocietyVote,
	PalletSocietyVouchingStatus,
	PalletStakingActiveEraInfo,
	PalletStakingEraRewardPoints,
	PalletStakingExposure,
	PalletStakingForcing,
	PalletStakingIndividualExposure,
	PalletStakingNominations,
	PalletStakingPalletCall,
	PalletStakingPalletConfigOpPerbill,
	PalletStakingPalletConfigOpPercent,
	PalletStakingPalletConfigOpU32,
	PalletStakingPalletConfigOpU128,
	PalletStakingPalletError,
	PalletStakingPalletEvent,
	PalletStakingRewardDestination,
	PalletStakingSlashingSlashingSpans,
	PalletStakingSlashingSpanRecord,
	PalletStakingStakingLedger,
	PalletStakingUnappliedSlash,
	PalletStakingUnlockChunk,
	PalletStakingValidatorPrefs,
	PalletSudoCall,
	PalletSudoError,
	PalletSudoEvent,
	PalletTimestampCall,
	PalletTransactionPaymentChargeTransactionPayment,
	PalletTransactionPaymentEvent,
	PalletTransactionPaymentReleases,
	PalletTreasuryCall,
	PalletTreasuryError,
	PalletTreasuryEvent,
	PalletTreasuryProposal,
	PalletUtilityCall,
	PalletUtilityError,
	PalletUtilityEvent,
	PalletVestingCall,
	PalletVestingError,
	PalletVestingEvent,
	PalletVestingReleases,
	PalletVestingVestingInfo,
	PalletWhitelistCall,
	PalletWhitelistError,
	PalletWhitelistEvent,
	RedeemCall,
	RedeemError,
	RedeemEvent,
	RedeemVersion,
	ReplaceCall,
	ReplaceError,
	ReplaceEvent,
	ReplaceVersion,
	RewardCall,
	RewardError,
	RewardEvent,
	RuntimeCommonChainSpecRuntimeConfig,
	RuntimeCommonPosCurrencyPalletCall,
	RuntimeCommonPosCurrencyPalletError,
	RuntimeCommonPosCurrencyPalletEvent,
	RuntimeCommonPosSessionPayoutPalletCall,
	RuntimeCommonPosSessionPayoutPalletError,
	RuntimeCommonPosSessionPayoutPalletEvent,
	RuntimeCommonPosSessionPayoutValidatorCommissionAlgorithm,
	SecurityCall,
	SecurityError,
	SecurityEvent,
	SpArithmeticArithmeticError,
	SpConsensusAuraSr25519AppSr25519Public,
	SpConsensusBeefyCommitment,
	SpConsensusBeefyCryptoPublic,
	SpConsensusBeefyCryptoSignature,
	SpConsensusBeefyEquivocationProof,
	SpConsensusBeefyMmrBeefyAuthoritySet,
	SpConsensusBeefyPayload,
	SpConsensusBeefyVoteMessage,
	SpConsensusGrandpaAppPublic,
	SpConsensusGrandpaAppSignature,
	SpConsensusGrandpaEquivocation,
	SpConsensusGrandpaEquivocationProof,
	SpCoreCryptoKeyTypeId,
	SpCoreEcdsaPublic,
	SpCoreEcdsaSignature,
	SpCoreEd25519Public,
	SpCoreEd25519Signature,
	SpCoreOffchainOpaqueNetworkState,
	SpCoreSr25519Public,
	SpCoreSr25519Signature,
	SpCoreVoid,
	SpNposElectionsElectionScore,
	SpNposElectionsSupport,
	SpRuntimeDigest,
	SpRuntimeDigestDigestItem,
	SpRuntimeDispatchError,
	SpRuntimeDispatchErrorWithPostInfo,
	SpRuntimeModuleError,
	SpRuntimeMultiSignature,
	SpRuntimeTokenError,
	SpRuntimeTransactionalError,
	SpSessionMembershipProof,
	SpStakingOffenceOffenceDetails,
	SpVersionRuntimeVersion,
	SpWeightsRuntimeDbWeight,
	SpWeightsWeightV2Weight,
	StakingCall,
	StakingError,
	StakingEvent,
	SubstrateAccountFilterCall,
	SubstrateAccountFilterError,
	SubstrateAccountFilterEvent,
	TypesPrimitivesH160,
	TypesPrimitivesH256,
	TypesReceiptLog,
	VaultRegistryCall,
	VaultRegistryError,
	VaultRegistryEvent,
	VaultRegistrySystemVault,
	VaultRegistryVault,
	VaultRegistryVaultStatus,
	VaultRegistryVersion,
	WebbConsensusTypesNetworkConfig,
	WebbProposalsHeaderTypedChainId,
	XcmV2BodyId,
	XcmV2BodyPart,
	XcmV2Junction,
	XcmV2MultiLocation,
	XcmV2MultilocationJunctions,
	XcmV2NetworkId,
	XcmV3Junction,
	XcmV3JunctionBodyId,
	XcmV3JunctionBodyPart,
	XcmV3JunctionNetworkId,
	XcmV3Junctions,
	XcmV3MultiLocation,
	XcmVersionedMultiLocation,
} from "@polkadot/types/lookup";

declare module "@polkadot/types/types/registry" {
	interface InterfaceTypes {
		AstarPrimitivesEthereumCheckedCheckedEthereumTx: AstarPrimitivesEthereumCheckedCheckedEthereumTx;
		BitcoinAddress: BitcoinAddress;
		BitcoinAddressPublicKey: BitcoinAddressPublicKey;
		BitcoinBlockChain: BitcoinBlockChain;
		BitcoinBlockHeader: BitcoinBlockHeader;
		BitcoinFullTransactionProof: BitcoinFullTransactionProof;
		BitcoinH256Le: BitcoinH256Le;
		BitcoinLockTime: BitcoinLockTime;
		BitcoinMerkleMerkleProof: BitcoinMerkleMerkleProof;
		BitcoinMerklePartialTransactionProof: BitcoinMerklePartialTransactionProof;
		BitcoinScript: BitcoinScript;
		BitcoinTransaction: BitcoinTransaction;
		BitcoinTransactionInput: BitcoinTransactionInput;
		BitcoinTransactionInputSource: BitcoinTransactionInputSource;
		BitcoinTransactionOutput: BitcoinTransactionOutput;
		BtcRelayCall: BtcRelayCall;
		BtcRelayError: BtcRelayError;
		BtcRelayEvent: BtcRelayEvent;
		BtcRelayRichBlockHeader: BtcRelayRichBlockHeader;
		ClientsInfoCall: ClientsInfoCall;
		ClientsInfoClientRelease: ClientsInfoClientRelease;
		ClientsInfoError: ClientsInfoError;
		ClientsInfoEvent: ClientsInfoEvent;
		CurrencyError: CurrencyError;
		EthTypesBlockHeader: EthTypesBlockHeader;
		EthTypesBloom: EthTypesBloom;
		EthTypesClientMode: EthTypesClientMode;
		EthTypesEth2BeaconBlockHeader: EthTypesEth2BeaconBlockHeader;
		EthTypesEth2ExtendedBeaconBlockHeader: EthTypesEth2ExtendedBeaconBlockHeader;
		EthTypesEth2FinalizedHeaderUpdate: EthTypesEth2FinalizedHeaderUpdate;
		EthTypesEth2HeaderUpdate: EthTypesEth2HeaderUpdate;
		EthTypesEth2LightClientUpdate: EthTypesEth2LightClientUpdate;
		EthTypesEth2PublicKeyBytes: EthTypesEth2PublicKeyBytes;
		EthTypesEth2SignatureBytes: EthTypesEth2SignatureBytes;
		EthTypesEth2SyncAggregate: EthTypesEth2SyncAggregate;
		EthTypesEth2SyncCommittee: EthTypesEth2SyncCommittee;
		EthTypesEth2SyncCommitteeBits: EthTypesEth2SyncCommitteeBits;
		EthTypesEth2SyncCommitteePublicKeys: EthTypesEth2SyncCommitteePublicKeys;
		EthTypesEth2SyncCommitteeUpdate: EthTypesEth2SyncCommitteeUpdate;
		EthTypesExecutionHeaderInfo: EthTypesExecutionHeaderInfo;
		EthTypesH64: EthTypesH64;
		EthTypesInitInput: EthTypesInitInput;
		EthbloomBloom: EthbloomBloom;
		EthereumBlock: EthereumBlock;
		EthereumHeader: EthereumHeader;
		EthereumLog: EthereumLog;
		EthereumReceiptEip658ReceiptData: EthereumReceiptEip658ReceiptData;
		EthereumReceiptReceiptV3: EthereumReceiptReceiptV3;
		EthereumTransactionAccessListItem: EthereumTransactionAccessListItem;
		EthereumTransactionEip1559Transaction: EthereumTransactionEip1559Transaction;
		EthereumTransactionEip2930Transaction: EthereumTransactionEip2930Transaction;
		EthereumTransactionLegacyTransaction: EthereumTransactionLegacyTransaction;
		EthereumTransactionTransactionAction: EthereumTransactionTransactionAction;
		EthereumTransactionTransactionSignature: EthereumTransactionTransactionSignature;
		EthereumTransactionTransactionV2: EthereumTransactionTransactionV2;
		EthereumTypesHashH64: EthereumTypesHashH64;
		EvmCoreErrorExitError: EvmCoreErrorExitError;
		EvmCoreErrorExitFatal: EvmCoreErrorExitFatal;
		EvmCoreErrorExitReason: EvmCoreErrorExitReason;
		EvmCoreErrorExitRevert: EvmCoreErrorExitRevert;
		EvmCoreErrorExitSucceed: EvmCoreErrorExitSucceed;
		FeeCall: FeeCall;
		FeeError: FeeError;
		FeeVersion: FeeVersion;
		FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit;
		FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote;
		FinalityGrandpaPrecommit: FinalityGrandpaPrecommit;
		FinalityGrandpaPrevote: FinalityGrandpaPrevote;
		FpRpcTransactionStatus: FpRpcTransactionStatus;
		FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
		FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
		FrameSupportDispatchPays: FrameSupportDispatchPays;
		FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
		FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
		FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
		FrameSupportDispatchPostDispatchInfo: FrameSupportDispatchPostDispatchInfo;
		FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
		FrameSupportPalletId: FrameSupportPalletId;
		FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
		FrameSupportScheduleDispatchTime: FrameSupportScheduleDispatchTime;
		FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
		FrameSystemAccountInfo: FrameSystemAccountInfo;
		FrameSystemCall: FrameSystemCall;
		FrameSystemError: FrameSystemError;
		FrameSystemEvent: FrameSystemEvent;
		FrameSystemEventRecord: FrameSystemEventRecord;
		FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
		FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
		FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
		FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
		FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
		FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
		FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
		FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
		FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
		FrameSystemPhase: FrameSystemPhase;
		GgxchainRuntimeBrooklynOpaqueSessionKeys: GgxchainRuntimeBrooklynOpaqueSessionKeys;
		GgxchainRuntimeBrooklynOriginCaller: GgxchainRuntimeBrooklynOriginCaller;
		GgxchainRuntimeBrooklynPosNposSolution16: GgxchainRuntimeBrooklynPosNposSolution16;
		GgxchainRuntimeBrooklynPosProxyType: GgxchainRuntimeBrooklynPosProxyType;
		GgxchainRuntimeBrooklynRuntime: GgxchainRuntimeBrooklynRuntime;
		IbcCoreIcs02ClientEventsClientIdAttribute: IbcCoreIcs02ClientEventsClientIdAttribute;
		IbcCoreIcs02ClientEventsClientMisbehaviour: IbcCoreIcs02ClientEventsClientMisbehaviour;
		IbcCoreIcs02ClientEventsClientTypeAttribute: IbcCoreIcs02ClientEventsClientTypeAttribute;
		IbcCoreIcs02ClientEventsConsensusHeightAttribute: IbcCoreIcs02ClientEventsConsensusHeightAttribute;
		IbcCoreIcs02ClientEventsConsensusHeightsAttribute: IbcCoreIcs02ClientEventsConsensusHeightsAttribute;
		IbcCoreIcs02ClientEventsCreateClient: IbcCoreIcs02ClientEventsCreateClient;
		IbcCoreIcs02ClientEventsHeaderAttribute: IbcCoreIcs02ClientEventsHeaderAttribute;
		IbcCoreIcs02ClientEventsUpdateClient: IbcCoreIcs02ClientEventsUpdateClient;
		IbcCoreIcs02ClientEventsUpgradeClient: IbcCoreIcs02ClientEventsUpgradeClient;
		IbcCoreIcs02ClientHeight: IbcCoreIcs02ClientHeight;
		IbcCoreIcs03ConnectionConnectionCounterparty: IbcCoreIcs03ConnectionConnectionCounterparty;
		IbcCoreIcs03ConnectionConnectionSealedConnectionEnd: IbcCoreIcs03ConnectionConnectionSealedConnectionEnd;
		IbcCoreIcs03ConnectionConnectionState: IbcCoreIcs03ConnectionConnectionState;
		IbcCoreIcs03ConnectionEventsAttributes: IbcCoreIcs03ConnectionEventsAttributes;
		IbcCoreIcs03ConnectionEventsOpenAck: IbcCoreIcs03ConnectionEventsOpenAck;
		IbcCoreIcs03ConnectionEventsOpenConfirm: IbcCoreIcs03ConnectionEventsOpenConfirm;
		IbcCoreIcs03ConnectionEventsOpenInit: IbcCoreIcs03ConnectionEventsOpenInit;
		IbcCoreIcs03ConnectionEventsOpenTry: IbcCoreIcs03ConnectionEventsOpenTry;
		IbcCoreIcs03ConnectionVersion: IbcCoreIcs03ConnectionVersion;
		IbcCoreIcs04ChannelChannelChannelEnd: IbcCoreIcs04ChannelChannelChannelEnd;
		IbcCoreIcs04ChannelChannelCounterparty: IbcCoreIcs04ChannelChannelCounterparty;
		IbcCoreIcs04ChannelChannelOrder: IbcCoreIcs04ChannelChannelOrder;
		IbcCoreIcs04ChannelChannelState: IbcCoreIcs04ChannelChannelState;
		IbcCoreIcs04ChannelEventsAcknowledgePacket: IbcCoreIcs04ChannelEventsAcknowledgePacket;
		IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute: IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute;
		IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute: IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute;
		IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute;
		IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute: IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute;
		IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute: IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute;
		IbcCoreIcs04ChannelEventsChannelAttributesVersionAttribute: IbcCoreIcs04ChannelEventsChannelAttributesVersionAttribute;
		IbcCoreIcs04ChannelEventsChannelClosed: IbcCoreIcs04ChannelEventsChannelClosed;
		IbcCoreIcs04ChannelEventsCloseConfirm: IbcCoreIcs04ChannelEventsCloseConfirm;
		IbcCoreIcs04ChannelEventsCloseInit: IbcCoreIcs04ChannelEventsCloseInit;
		IbcCoreIcs04ChannelEventsOpenAck: IbcCoreIcs04ChannelEventsOpenAck;
		IbcCoreIcs04ChannelEventsOpenConfirm: IbcCoreIcs04ChannelEventsOpenConfirm;
		IbcCoreIcs04ChannelEventsOpenInit: IbcCoreIcs04ChannelEventsOpenInit;
		IbcCoreIcs04ChannelEventsOpenTry: IbcCoreIcs04ChannelEventsOpenTry;
		IbcCoreIcs04ChannelEventsPacketAttributesAcknowledgementAttribute: IbcCoreIcs04ChannelEventsPacketAttributesAcknowledgementAttribute;
		IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute: IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute;
		IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute: IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute;
		IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute: IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute;
		IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute: IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute;
		IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute: IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute;
		IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute: IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute;
		IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute: IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute;
		IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute: IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute;
		IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute;
		IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute: IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute;
		IbcCoreIcs04ChannelEventsReceivePacket: IbcCoreIcs04ChannelEventsReceivePacket;
		IbcCoreIcs04ChannelEventsSendPacket: IbcCoreIcs04ChannelEventsSendPacket;
		IbcCoreIcs04ChannelEventsTimeoutPacket: IbcCoreIcs04ChannelEventsTimeoutPacket;
		IbcCoreIcs04ChannelEventsWriteAcknowledgement: IbcCoreIcs04ChannelEventsWriteAcknowledgement;
		IbcCoreIcs04ChannelPacketReceipt: IbcCoreIcs04ChannelPacketReceipt;
		IbcCoreIcs04ChannelTimeoutTimeoutHeight: IbcCoreIcs04ChannelTimeoutTimeoutHeight;
		IbcCoreIcs23CommitmentCommitmentCommitmentPrefix: IbcCoreIcs23CommitmentCommitmentCommitmentPrefix;
		IbcCoreIcs24HostPathAcksPath: IbcCoreIcs24HostPathAcksPath;
		IbcCoreIcs24HostPathChannelEndsPath: IbcCoreIcs24HostPathChannelEndsPath;
		IbcCoreIcs24HostPathClientConsensusStatePath: IbcCoreIcs24HostPathClientConsensusStatePath;
		IbcCoreIcs24HostPathCommitmentsPath: IbcCoreIcs24HostPathCommitmentsPath;
		IbcCoreIcs24HostPathReceiptsPath: IbcCoreIcs24HostPathReceiptsPath;
		IbcCoreIcs24HostPathSeqAcksPath: IbcCoreIcs24HostPathSeqAcksPath;
		IbcCoreIcs24HostPathSeqRecvsPath: IbcCoreIcs24HostPathSeqRecvsPath;
		IbcCoreIcs24HostPathSeqSendsPath: IbcCoreIcs24HostPathSeqSendsPath;
		IbcEventsIbcEvent: IbcEventsIbcEvent;
		IbcEventsModuleEvent: IbcEventsModuleEvent;
		IbcEventsModuleEventAttribute: IbcEventsModuleEventAttribute;
		IbcProtoGoogleProtobufAny: IbcProtoGoogleProtobufAny;
		IbcTimestamp: IbcTimestamp;
		InterbtcPrimitivesCurrencyId: InterbtcPrimitivesCurrencyId;
		InterbtcPrimitivesCustomMetadata: InterbtcPrimitivesCustomMetadata;
		InterbtcPrimitivesIssueIssueRequest: InterbtcPrimitivesIssueIssueRequest;
		InterbtcPrimitivesIssueIssueRequestStatus: InterbtcPrimitivesIssueIssueRequestStatus;
		InterbtcPrimitivesLpToken: InterbtcPrimitivesLpToken;
		InterbtcPrimitivesOracleKey: InterbtcPrimitivesOracleKey;
		InterbtcPrimitivesRedeemRedeemRequest: InterbtcPrimitivesRedeemRedeemRequest;
		InterbtcPrimitivesRedeemRedeemRequestStatus: InterbtcPrimitivesRedeemRedeemRequestStatus;
		InterbtcPrimitivesReplaceReplaceRequest: InterbtcPrimitivesReplaceReplaceRequest;
		InterbtcPrimitivesReplaceReplaceRequestStatus: InterbtcPrimitivesReplaceReplaceRequestStatus;
		InterbtcPrimitivesTokenSymbol: InterbtcPrimitivesTokenSymbol;
		InterbtcPrimitivesVaultCurrencyPair: InterbtcPrimitivesVaultCurrencyPair;
		InterbtcPrimitivesVaultId: InterbtcPrimitivesVaultId;
		IssueCall: IssueCall;
		IssueError: IssueError;
		IssueEvent: IssueEvent;
		IssueVersion: IssueVersion;
		LoansBorrowSnapshot: LoansBorrowSnapshot;
		LoansCall: LoansCall;
		LoansError: LoansError;
		LoansEvent: LoansEvent;
		LoansMarket: LoansMarket;
		LoansMarketState: LoansMarketState;
		LoansRateModelCurveModel: LoansRateModelCurveModel;
		LoansRateModelInterestRateModel: LoansRateModelInterestRateModel;
		LoansRateModelJumpModel: LoansRateModelJumpModel;
		LoansRewardMarketState: LoansRewardMarketState;
		LoansVersions: LoansVersions;
		NominationCall: NominationCall;
		NominationError: NominationError;
		NominationEvent: NominationEvent;
		OracleCall: OracleCall;
		OracleError: OracleError;
		OracleEvent: OracleEvent;
		OracleTimestampedValue: OracleTimestampedValue;
		OracleVersion: OracleVersion;
		OrmlAssetRegistryModuleCall: OrmlAssetRegistryModuleCall;
		OrmlAssetRegistryModuleError: OrmlAssetRegistryModuleError;
		OrmlAssetRegistryModuleEvent: OrmlAssetRegistryModuleEvent;
		OrmlTokensAccountData: OrmlTokensAccountData;
		OrmlTokensBalanceLock: OrmlTokensBalanceLock;
		OrmlTokensModuleCall: OrmlTokensModuleCall;
		OrmlTokensModuleError: OrmlTokensModuleError;
		OrmlTokensModuleEvent: OrmlTokensModuleEvent;
		OrmlTokensReserveData: OrmlTokensReserveData;
		OrmlTraitsAssetRegistryAssetMetadata: OrmlTraitsAssetRegistryAssetMetadata;
		PalletAssetsAccountStatus: PalletAssetsAccountStatus;
		PalletAssetsApproval: PalletAssetsApproval;
		PalletAssetsAssetAccount: PalletAssetsAssetAccount;
		PalletAssetsAssetDetails: PalletAssetsAssetDetails;
		PalletAssetsAssetMetadata: PalletAssetsAssetMetadata;
		PalletAssetsAssetStatus: PalletAssetsAssetStatus;
		PalletAssetsCall: PalletAssetsCall;
		PalletAssetsError: PalletAssetsError;
		PalletAssetsEvent: PalletAssetsEvent;
		PalletAssetsExistenceReason: PalletAssetsExistenceReason;
		PalletBalancesAccountData: PalletBalancesAccountData;
		PalletBalancesBalanceLock: PalletBalancesBalanceLock;
		PalletBalancesCall: PalletBalancesCall;
		PalletBalancesError: PalletBalancesError;
		PalletBalancesEvent: PalletBalancesEvent;
		PalletBalancesIdAmount: PalletBalancesIdAmount;
		PalletBalancesReasons: PalletBalancesReasons;
		PalletBalancesReserveData: PalletBalancesReserveData;
		PalletBaseFeeCall: PalletBaseFeeCall;
		PalletBaseFeeEvent: PalletBaseFeeEvent;
		PalletBeefyCall: PalletBeefyCall;
		PalletBeefyError: PalletBeefyError;
		PalletBountiesBounty: PalletBountiesBounty;
		PalletBountiesBountyStatus: PalletBountiesBountyStatus;
		PalletBountiesCall: PalletBountiesCall;
		PalletBountiesError: PalletBountiesError;
		PalletBountiesEvent: PalletBountiesEvent;
		PalletContractsCall: PalletContractsCall;
		PalletContractsError: PalletContractsError;
		PalletContractsEvent: PalletContractsEvent;
		PalletContractsOrigin: PalletContractsOrigin;
		PalletContractsSchedule: PalletContractsSchedule;
		PalletContractsScheduleHostFnWeights: PalletContractsScheduleHostFnWeights;
		PalletContractsScheduleInstructionWeights: PalletContractsScheduleInstructionWeights;
		PalletContractsScheduleLimits: PalletContractsScheduleLimits;
		PalletContractsStorageContractInfo: PalletContractsStorageContractInfo;
		PalletContractsStorageDeletionQueueManager: PalletContractsStorageDeletionQueueManager;
		PalletContractsWasmDeterminism: PalletContractsWasmDeterminism;
		PalletContractsWasmOwnerInfo: PalletContractsWasmOwnerInfo;
		PalletContractsWasmPrefabWasmModule: PalletContractsWasmPrefabWasmModule;
		PalletConvictionVotingCall: PalletConvictionVotingCall;
		PalletConvictionVotingConviction: PalletConvictionVotingConviction;
		PalletConvictionVotingDelegations: PalletConvictionVotingDelegations;
		PalletConvictionVotingError: PalletConvictionVotingError;
		PalletConvictionVotingEvent: PalletConvictionVotingEvent;
		PalletConvictionVotingTally: PalletConvictionVotingTally;
		PalletConvictionVotingVoteAccountVote: PalletConvictionVotingVoteAccountVote;
		PalletConvictionVotingVoteCasting: PalletConvictionVotingVoteCasting;
		PalletConvictionVotingVoteDelegating: PalletConvictionVotingVoteDelegating;
		PalletConvictionVotingVotePriorLock: PalletConvictionVotingVotePriorLock;
		PalletConvictionVotingVoteVoting: PalletConvictionVotingVoteVoting;
		PalletDexCall: PalletDexCall;
		PalletDexError: PalletDexError;
		PalletDexEvent: PalletDexEvent;
		PalletDexOrder: PalletDexOrder;
		PalletDexOrderType: PalletDexOrderType;
		PalletDexTokenInfo: PalletDexTokenInfo;
		PalletDynamicFeeCall: PalletDynamicFeeCall;
		PalletElectionProviderMultiPhaseCall: PalletElectionProviderMultiPhaseCall;
		PalletElectionProviderMultiPhaseElectionCompute: PalletElectionProviderMultiPhaseElectionCompute;
		PalletElectionProviderMultiPhaseError: PalletElectionProviderMultiPhaseError;
		PalletElectionProviderMultiPhaseEvent: PalletElectionProviderMultiPhaseEvent;
		PalletElectionProviderMultiPhasePhase: PalletElectionProviderMultiPhasePhase;
		PalletElectionProviderMultiPhaseRawSolution: PalletElectionProviderMultiPhaseRawSolution;
		PalletElectionProviderMultiPhaseReadySolution: PalletElectionProviderMultiPhaseReadySolution;
		PalletElectionProviderMultiPhaseRoundSnapshot: PalletElectionProviderMultiPhaseRoundSnapshot;
		PalletElectionProviderMultiPhaseSignedSignedSubmission: PalletElectionProviderMultiPhaseSignedSignedSubmission;
		PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
		PalletEth2LightClientCall: PalletEth2LightClientCall;
		PalletEth2LightClientError: PalletEth2LightClientError;
		PalletEth2LightClientEvent: PalletEth2LightClientEvent;
		PalletEthereumCall: PalletEthereumCall;
		PalletEthereumCheckedCall: PalletEthereumCheckedCall;
		PalletEthereumCheckedRawOrigin: PalletEthereumCheckedRawOrigin;
		PalletEthereumError: PalletEthereumError;
		PalletEthereumEvent: PalletEthereumEvent;
		PalletEthereumRawOrigin: PalletEthereumRawOrigin;
		PalletEvmCall: PalletEvmCall;
		PalletEvmCodeMetadata: PalletEvmCodeMetadata;
		PalletEvmError: PalletEvmError;
		PalletEvmEvent: PalletEvmEvent;
		PalletGrandpaCall: PalletGrandpaCall;
		PalletGrandpaError: PalletGrandpaError;
		PalletGrandpaEvent: PalletGrandpaEvent;
		PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange;
		PalletGrandpaStoredState: PalletGrandpaStoredState;
		PalletHotfixSufficientsCall: PalletHotfixSufficientsCall;
		PalletHotfixSufficientsError: PalletHotfixSufficientsError;
		PalletIbcCall: PalletIbcCall;
		PalletIbcError: PalletIbcError;
		PalletIbcErrorsIbcError: PalletIbcErrorsIbcError;
		PalletIbcEvent: PalletIbcEvent;
		PalletIcs20TransferCall: PalletIcs20TransferCall;
		PalletIcs20TransferDenomPrefixedDenom: PalletIcs20TransferDenomPrefixedDenom;
		PalletIcs20TransferError: PalletIcs20TransferError;
		PalletIcs20TransferEvent: PalletIcs20TransferEvent;
		PalletIdentityBitFlags: PalletIdentityBitFlags;
		PalletIdentityCall: PalletIdentityCall;
		PalletIdentityError: PalletIdentityError;
		PalletIdentityEvent: PalletIdentityEvent;
		PalletIdentityIdentityField: PalletIdentityIdentityField;
		PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
		PalletIdentityJudgement: PalletIdentityJudgement;
		PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
		PalletIdentityRegistration: PalletIdentityRegistration;
		PalletImOnlineBoundedOpaqueNetworkState: PalletImOnlineBoundedOpaqueNetworkState;
		PalletImOnlineCall: PalletImOnlineCall;
		PalletImOnlineError: PalletImOnlineError;
		PalletImOnlineEvent: PalletImOnlineEvent;
		PalletImOnlineHeartbeat: PalletImOnlineHeartbeat;
		PalletImOnlineSr25519AppSr25519Public: PalletImOnlineSr25519AppSr25519Public;
		PalletImOnlineSr25519AppSr25519Signature: PalletImOnlineSr25519AppSr25519Signature;
		PalletIndicesCall: PalletIndicesCall;
		PalletIndicesError: PalletIndicesError;
		PalletIndicesEvent: PalletIndicesEvent;
		PalletMultisigCall: PalletMultisigCall;
		PalletMultisigError: PalletMultisigError;
		PalletMultisigEvent: PalletMultisigEvent;
		PalletMultisigMultisig: PalletMultisigMultisig;
		PalletMultisigTimepoint: PalletMultisigTimepoint;
		PalletOffencesEvent: PalletOffencesEvent;
		PalletPreimageCall: PalletPreimageCall;
		PalletPreimageError: PalletPreimageError;
		PalletPreimageEvent: PalletPreimageEvent;
		PalletPreimageRequestStatus: PalletPreimageRequestStatus;
		PalletProxyAnnouncement: PalletProxyAnnouncement;
		PalletProxyCall: PalletProxyCall;
		PalletProxyError: PalletProxyError;
		PalletProxyEvent: PalletProxyEvent;
		PalletProxyProxyDefinition: PalletProxyProxyDefinition;
		PalletReceiptRegistryCall: PalletReceiptRegistryCall;
		PalletReceiptRegistryError: PalletReceiptRegistryError;
		PalletReceiptRegistryEvent: PalletReceiptRegistryEvent;
		PalletReferendaCall: PalletReferendaCall;
		PalletReferendaCurve: PalletReferendaCurve;
		PalletReferendaDecidingStatus: PalletReferendaDecidingStatus;
		PalletReferendaDeposit: PalletReferendaDeposit;
		PalletReferendaError: PalletReferendaError;
		PalletReferendaEvent: PalletReferendaEvent;
		PalletReferendaReferendumInfo: PalletReferendaReferendumInfo;
		PalletReferendaReferendumStatus: PalletReferendaReferendumStatus;
		PalletReferendaTrackInfo: PalletReferendaTrackInfo;
		PalletSchedulerCall: PalletSchedulerCall;
		PalletSchedulerError: PalletSchedulerError;
		PalletSchedulerEvent: PalletSchedulerEvent;
		PalletSchedulerScheduled: PalletSchedulerScheduled;
		PalletSessionCall: PalletSessionCall;
		PalletSessionError: PalletSessionError;
		PalletSessionEvent: PalletSessionEvent;
		PalletSocietyBid: PalletSocietyBid;
		PalletSocietyBidKind: PalletSocietyBidKind;
		PalletSocietyCall: PalletSocietyCall;
		PalletSocietyError: PalletSocietyError;
		PalletSocietyEvent: PalletSocietyEvent;
		PalletSocietyJudgement: PalletSocietyJudgement;
		PalletSocietyVote: PalletSocietyVote;
		PalletSocietyVouchingStatus: PalletSocietyVouchingStatus;
		PalletStakingActiveEraInfo: PalletStakingActiveEraInfo;
		PalletStakingEraRewardPoints: PalletStakingEraRewardPoints;
		PalletStakingExposure: PalletStakingExposure;
		PalletStakingForcing: PalletStakingForcing;
		PalletStakingIndividualExposure: PalletStakingIndividualExposure;
		PalletStakingNominations: PalletStakingNominations;
		PalletStakingPalletCall: PalletStakingPalletCall;
		PalletStakingPalletConfigOpPerbill: PalletStakingPalletConfigOpPerbill;
		PalletStakingPalletConfigOpPercent: PalletStakingPalletConfigOpPercent;
		PalletStakingPalletConfigOpU128: PalletStakingPalletConfigOpU128;
		PalletStakingPalletConfigOpU32: PalletStakingPalletConfigOpU32;
		PalletStakingPalletError: PalletStakingPalletError;
		PalletStakingPalletEvent: PalletStakingPalletEvent;
		PalletStakingRewardDestination: PalletStakingRewardDestination;
		PalletStakingSlashingSlashingSpans: PalletStakingSlashingSlashingSpans;
		PalletStakingSlashingSpanRecord: PalletStakingSlashingSpanRecord;
		PalletStakingStakingLedger: PalletStakingStakingLedger;
		PalletStakingUnappliedSlash: PalletStakingUnappliedSlash;
		PalletStakingUnlockChunk: PalletStakingUnlockChunk;
		PalletStakingValidatorPrefs: PalletStakingValidatorPrefs;
		PalletSudoCall: PalletSudoCall;
		PalletSudoError: PalletSudoError;
		PalletSudoEvent: PalletSudoEvent;
		PalletTimestampCall: PalletTimestampCall;
		PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
		PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
		PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
		PalletTreasuryCall: PalletTreasuryCall;
		PalletTreasuryError: PalletTreasuryError;
		PalletTreasuryEvent: PalletTreasuryEvent;
		PalletTreasuryProposal: PalletTreasuryProposal;
		PalletUtilityCall: PalletUtilityCall;
		PalletUtilityError: PalletUtilityError;
		PalletUtilityEvent: PalletUtilityEvent;
		PalletVestingCall: PalletVestingCall;
		PalletVestingError: PalletVestingError;
		PalletVestingEvent: PalletVestingEvent;
		PalletVestingReleases: PalletVestingReleases;
		PalletVestingVestingInfo: PalletVestingVestingInfo;
		PalletWhitelistCall: PalletWhitelistCall;
		PalletWhitelistError: PalletWhitelistError;
		PalletWhitelistEvent: PalletWhitelistEvent;
		RedeemCall: RedeemCall;
		RedeemError: RedeemError;
		RedeemEvent: RedeemEvent;
		RedeemVersion: RedeemVersion;
		ReplaceCall: ReplaceCall;
		ReplaceError: ReplaceError;
		ReplaceEvent: ReplaceEvent;
		ReplaceVersion: ReplaceVersion;
		RewardCall: RewardCall;
		RewardError: RewardError;
		RewardEvent: RewardEvent;
		RuntimeCommonChainSpecRuntimeConfig: RuntimeCommonChainSpecRuntimeConfig;
		RuntimeCommonPosCurrencyPalletCall: RuntimeCommonPosCurrencyPalletCall;
		RuntimeCommonPosCurrencyPalletError: RuntimeCommonPosCurrencyPalletError;
		RuntimeCommonPosCurrencyPalletEvent: RuntimeCommonPosCurrencyPalletEvent;
		RuntimeCommonPosSessionPayoutPalletCall: RuntimeCommonPosSessionPayoutPalletCall;
		RuntimeCommonPosSessionPayoutPalletError: RuntimeCommonPosSessionPayoutPalletError;
		RuntimeCommonPosSessionPayoutPalletEvent: RuntimeCommonPosSessionPayoutPalletEvent;
		RuntimeCommonPosSessionPayoutValidatorCommissionAlgorithm: RuntimeCommonPosSessionPayoutValidatorCommissionAlgorithm;
		SecurityCall: SecurityCall;
		SecurityError: SecurityError;
		SecurityEvent: SecurityEvent;
		SpArithmeticArithmeticError: SpArithmeticArithmeticError;
		SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
		SpConsensusBeefyCommitment: SpConsensusBeefyCommitment;
		SpConsensusBeefyCryptoPublic: SpConsensusBeefyCryptoPublic;
		SpConsensusBeefyCryptoSignature: SpConsensusBeefyCryptoSignature;
		SpConsensusBeefyEquivocationProof: SpConsensusBeefyEquivocationProof;
		SpConsensusBeefyMmrBeefyAuthoritySet: SpConsensusBeefyMmrBeefyAuthoritySet;
		SpConsensusBeefyPayload: SpConsensusBeefyPayload;
		SpConsensusBeefyVoteMessage: SpConsensusBeefyVoteMessage;
		SpConsensusGrandpaAppPublic: SpConsensusGrandpaAppPublic;
		SpConsensusGrandpaAppSignature: SpConsensusGrandpaAppSignature;
		SpConsensusGrandpaEquivocation: SpConsensusGrandpaEquivocation;
		SpConsensusGrandpaEquivocationProof: SpConsensusGrandpaEquivocationProof;
		SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
		SpCoreEcdsaPublic: SpCoreEcdsaPublic;
		SpCoreEcdsaSignature: SpCoreEcdsaSignature;
		SpCoreEd25519Public: SpCoreEd25519Public;
		SpCoreEd25519Signature: SpCoreEd25519Signature;
		SpCoreOffchainOpaqueNetworkState: SpCoreOffchainOpaqueNetworkState;
		SpCoreSr25519Public: SpCoreSr25519Public;
		SpCoreSr25519Signature: SpCoreSr25519Signature;
		SpCoreVoid: SpCoreVoid;
		SpNposElectionsElectionScore: SpNposElectionsElectionScore;
		SpNposElectionsSupport: SpNposElectionsSupport;
		SpRuntimeDigest: SpRuntimeDigest;
		SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
		SpRuntimeDispatchError: SpRuntimeDispatchError;
		SpRuntimeDispatchErrorWithPostInfo: SpRuntimeDispatchErrorWithPostInfo;
		SpRuntimeModuleError: SpRuntimeModuleError;
		SpRuntimeMultiSignature: SpRuntimeMultiSignature;
		SpRuntimeTokenError: SpRuntimeTokenError;
		SpRuntimeTransactionalError: SpRuntimeTransactionalError;
		SpSessionMembershipProof: SpSessionMembershipProof;
		SpStakingOffenceOffenceDetails: SpStakingOffenceOffenceDetails;
		SpVersionRuntimeVersion: SpVersionRuntimeVersion;
		SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
		SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
		StakingCall: StakingCall;
		StakingError: StakingError;
		StakingEvent: StakingEvent;
		SubstrateAccountFilterCall: SubstrateAccountFilterCall;
		SubstrateAccountFilterError: SubstrateAccountFilterError;
		SubstrateAccountFilterEvent: SubstrateAccountFilterEvent;
		TypesPrimitivesH160: TypesPrimitivesH160;
		TypesPrimitivesH256: TypesPrimitivesH256;
		TypesReceiptLog: TypesReceiptLog;
		VaultRegistryCall: VaultRegistryCall;
		VaultRegistryError: VaultRegistryError;
		VaultRegistryEvent: VaultRegistryEvent;
		VaultRegistrySystemVault: VaultRegistrySystemVault;
		VaultRegistryVault: VaultRegistryVault;
		VaultRegistryVaultStatus: VaultRegistryVaultStatus;
		VaultRegistryVersion: VaultRegistryVersion;
		WebbConsensusTypesNetworkConfig: WebbConsensusTypesNetworkConfig;
		WebbProposalsHeaderTypedChainId: WebbProposalsHeaderTypedChainId;
		XcmV2BodyId: XcmV2BodyId;
		XcmV2BodyPart: XcmV2BodyPart;
		XcmV2Junction: XcmV2Junction;
		XcmV2MultiLocation: XcmV2MultiLocation;
		XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
		XcmV2NetworkId: XcmV2NetworkId;
		XcmV3Junction: XcmV3Junction;
		XcmV3JunctionBodyId: XcmV3JunctionBodyId;
		XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
		XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
		XcmV3Junctions: XcmV3Junctions;
		XcmV3MultiLocation: XcmV3MultiLocation;
		XcmVersionedMultiLocation: XcmVersionedMultiLocation;
	} // InterfaceTypes
} // declare module
