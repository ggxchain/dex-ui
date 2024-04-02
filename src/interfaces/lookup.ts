// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup9: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup16: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup19: frame_system::EventRecord<ggxchain_runtime_brooklyn::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup24: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup25: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null'
    }
  },
  /**
   * Lookup26: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup27: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup28: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup29: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup30: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup31: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup32: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,PalletStakingExposure)>'
      }
    }
  },
  /**
   * Lookup33: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup34: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup37: pallet_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<PalletStakingIndividualExposure>'
  },
  /**
   * Lookup40: pallet_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingIndividualExposure: {
    who: 'AccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup41: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup42: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup44: pallet_staking::pallet::pallet::Event<T>
   **/
  PalletStakingPalletEvent: {
    _enum: {
      EraPaid: {
        eraIndex: 'u32',
        validatorPayout: 'u128',
        remainder: 'u128',
      },
      Rewarded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        staker: 'AccountId32',
        amount: 'u128',
      },
      SlashReported: {
        validator: 'AccountId32',
        fraction: 'Perbill',
        slashEra: 'u32',
      },
      OldSlashingReportDiscarded: {
        sessionIndex: 'u32',
      },
      StakersElected: 'Null',
      Bonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Unbonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Kicked: {
        nominator: 'AccountId32',
        stash: 'AccountId32',
      },
      StakingElectionFailed: 'Null',
      Chilled: {
        stash: 'AccountId32',
      },
      PayoutStarted: {
        eraIndex: 'u32',
        validatorStash: 'AccountId32',
      },
      ValidatorPrefsSet: {
        stash: 'AccountId32',
        prefs: 'PalletStakingValidatorPrefs',
      },
      ForceEra: {
        mode: 'PalletStakingForcing'
      }
    }
  },
  /**
   * Lookup46: pallet_staking::ValidatorPrefs
   **/
  PalletStakingValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup49: pallet_staking::Forcing
   **/
  PalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup50: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup51: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup54: sp_consensus_grandpa::app::Public
   **/
  SpConsensusGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup55: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup56: pallet_assets::pallet::Event<T, I>
   **/
  PalletAssetsEvent: {
    _enum: {
      Created: {
        assetId: 'u32',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      Issued: {
        assetId: 'u32',
        owner: 'AccountId32',
        amount: 'u128',
      },
      Transferred: {
        assetId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        assetId: 'u32',
        owner: 'AccountId32',
        balance: 'u128',
      },
      TeamChanged: {
        assetId: 'u32',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      OwnerChanged: {
        assetId: 'u32',
        owner: 'AccountId32',
      },
      Frozen: {
        assetId: 'u32',
        who: 'AccountId32',
      },
      Thawed: {
        assetId: 'u32',
        who: 'AccountId32',
      },
      AssetFrozen: {
        assetId: 'u32',
      },
      AssetThawed: {
        assetId: 'u32',
      },
      AccountsDestroyed: {
        assetId: 'u32',
        accountsDestroyed: 'u32',
        accountsRemaining: 'u32',
      },
      ApprovalsDestroyed: {
        assetId: 'u32',
        approvalsDestroyed: 'u32',
        approvalsRemaining: 'u32',
      },
      DestructionStarted: {
        assetId: 'u32',
      },
      Destroyed: {
        assetId: 'u32',
      },
      ForceCreated: {
        assetId: 'u32',
        owner: 'AccountId32',
      },
      MetadataSet: {
        assetId: 'u32',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        assetId: 'u32',
      },
      ApprovedTransfer: {
        assetId: 'u32',
        source: 'AccountId32',
        delegate: 'AccountId32',
        amount: 'u128',
      },
      ApprovalCancelled: {
        assetId: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      TransferredApproved: {
        assetId: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128',
      },
      AssetStatusChanged: {
        assetId: 'u32',
      },
      AssetMinBalanceChanged: {
        assetId: 'u32',
        newMinBalance: 'u128',
      },
      Touched: {
        assetId: 'u32',
        who: 'AccountId32',
        depositor: 'AccountId32',
      },
      Blocked: {
        assetId: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup57: pallet_bounties::pallet::Event<T, I>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup58: pallet_vesting::pallet::Event<T>
   **/
  PalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'AccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup59: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup64: pallet_indices::pallet::Event<T>
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'AccountId32',
        index: 'u32',
      },
      IndexFreed: {
        index: 'u32',
      },
      IndexFrozen: {
        index: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup65: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'GgxchainRuntimeBrooklynPosProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'GgxchainRuntimeBrooklynPosProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'GgxchainRuntimeBrooklynPosProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup66: ggxchain_runtime_brooklyn::pos::ProxyType
   **/
  GgxchainRuntimeBrooklynPosProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', 'Identity', 'Cancel']
  },
  /**
   * Lookup68: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup69: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup70: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup71: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup73: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup74: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: {
        compute: 'PalletElectionProviderMultiPhaseElectionCompute',
        origin: 'Option<AccountId32>',
        prevEjected: 'bool',
      },
      ElectionFinalized: {
        compute: 'PalletElectionProviderMultiPhaseElectionCompute',
        score: 'SpNposElectionsElectionScore',
      },
      ElectionFailed: 'Null',
      Rewarded: {
        account: 'AccountId32',
        value: 'u128',
      },
      Slashed: {
        account: 'AccountId32',
        value: 'u128',
      },
      PhaseTransitioned: {
        from: 'PalletElectionProviderMultiPhasePhase',
        to: 'PalletElectionProviderMultiPhasePhase',
        round: 'u32'
      }
    }
  },
  /**
   * Lookup75: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup76: sp_npos_elections::ElectionScore
   **/
  SpNposElectionsElectionScore: {
    minimalStake: 'u128',
    sumStake: 'u128',
    sumStakeSquared: 'u128'
  },
  /**
   * Lookup77: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup79: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128'
      }
    }
  },
  /**
   * Lookup80: pallet_conviction_voting::pallet::Event<T, I>
   **/
  PalletConvictionVotingEvent: {
    _enum: {
      Delegated: '(AccountId32,AccountId32)',
      Undelegated: 'AccountId32'
    }
  },
  /**
   * Lookup81: pallet_referenda::pallet::Event<T, I>
   **/
  PalletReferendaEvent: {
    _enum: {
      Submitted: {
        index: 'u32',
        track: 'u16',
        proposal: 'FrameSupportPreimagesBounded',
      },
      DecisionDepositPlaced: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DecisionDepositRefunded: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DepositSlashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      DecisionStarted: {
        index: 'u32',
        track: 'u16',
        proposal: 'FrameSupportPreimagesBounded',
        tally: 'PalletConvictionVotingTally',
      },
      ConfirmStarted: {
        index: 'u32',
      },
      ConfirmAborted: {
        index: 'u32',
      },
      Confirmed: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Approved: {
        index: 'u32',
      },
      Rejected: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      TimedOut: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Cancelled: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Killed: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      SubmissionDepositRefunded: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup82: frame_support::traits::preimages::Bounded<ggxchain_runtime_brooklyn::RuntimeCall>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup84: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup88: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup89: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance_deprecated: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        oldReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup94: pallet_im_online::pallet::Call<T>
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PalletImOnlineHeartbeat',
        signature: 'PalletImOnlineSr25519AppSr25519Signature'
      }
    }
  },
  /**
   * Lookup95: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    networkState: 'SpCoreOffchainOpaqueNetworkState',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup96: sp_core::offchain::OpaqueNetworkState
   **/
  SpCoreOffchainOpaqueNetworkState: {
    peerId: 'OpaquePeerId',
    externalAddresses: 'Vec<OpaqueMultiaddr>'
  },
  /**
   * Lookup100: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup101: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup103: pallet_staking::pallet::pallet::Call<T>
   **/
  PalletStakingPalletCall: {
    _enum: {
      bond: {
        value: 'Compact<u128>',
        payee: 'PalletStakingRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PalletStakingValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PalletStakingRewardDestination',
      },
      set_controller: 'Null',
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'PalletStakingPalletConfigOpU128',
        minValidatorBond: 'PalletStakingPalletConfigOpU128',
        maxNominatorCount: 'PalletStakingPalletConfigOpU32',
        maxValidatorCount: 'PalletStakingPalletConfigOpU32',
        chillThreshold: 'PalletStakingPalletConfigOpPercent',
        minCommission: 'PalletStakingPalletConfigOpPerbill',
      },
      chill_other: {
        controller: 'AccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'AccountId32',
      },
      set_min_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill'
      }
    }
  },
  /**
   * Lookup104: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletStakingRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup108: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup109: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup110: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup111: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup112: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'GgxchainRuntimeBrooklynOpaqueSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup113: ggxchain_runtime_brooklyn::opaque::SessionKeys
   **/
  GgxchainRuntimeBrooklynOpaqueSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public',
    grandpa: 'SpConsensusGrandpaAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    beefy: 'SpConsensusBeefyCryptoPublic'
  },
  /**
   * Lookup114: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup115: sp_consensus_beefy::crypto::Public
   **/
  SpConsensusBeefyCryptoPublic: 'SpCoreEcdsaPublic',
  /**
   * Lookup116: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup118: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup119: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpConsensusGrandpaEquivocation'
  },
  /**
   * Lookup120: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup121: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup122: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup123: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup124: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup126: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup127: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup129: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup130: pallet_assets::pallet::Call<T, I>
   **/
  PalletAssetsCall: {
    _enum: {
      create: {
        id: 'Compact<u32>',
        admin: 'MultiAddress',
        minBalance: 'u128',
      },
      force_create: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        isSufficient: 'bool',
        minBalance: 'Compact<u128>',
      },
      start_destroy: {
        id: 'Compact<u32>',
      },
      destroy_accounts: {
        id: 'Compact<u32>',
      },
      destroy_approvals: {
        id: 'Compact<u32>',
      },
      finish_destroy: {
        id: 'Compact<u32>',
      },
      mint: {
        id: 'Compact<u32>',
        beneficiary: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      burn: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer: {
        id: 'Compact<u32>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer_keep_alive: {
        id: 'Compact<u32>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        id: 'Compact<u32>',
        source: 'MultiAddress',
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      freeze: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      thaw: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      freeze_asset: {
        id: 'Compact<u32>',
      },
      thaw_asset: {
        id: 'Compact<u32>',
      },
      transfer_ownership: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
      },
      set_team: {
        id: 'Compact<u32>',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
      },
      set_metadata: {
        id: 'Compact<u32>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      clear_metadata: {
        id: 'Compact<u32>',
      },
      force_set_metadata: {
        id: 'Compact<u32>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      force_clear_metadata: {
        id: 'Compact<u32>',
      },
      force_asset_status: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
        minBalance: 'Compact<u128>',
        isSufficient: 'bool',
        isFrozen: 'bool',
      },
      approve_transfer: {
        id: 'Compact<u32>',
        delegate: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      cancel_approval: {
        id: 'Compact<u32>',
        delegate: 'MultiAddress',
      },
      force_cancel_approval: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        delegate: 'MultiAddress',
      },
      transfer_approved: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        destination: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      touch: {
        id: 'Compact<u32>',
      },
      refund: {
        id: 'Compact<u32>',
        allowBurn: 'bool',
      },
      set_min_balance: {
        id: 'Compact<u32>',
        minBalance: 'u128',
      },
      touch_other: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      refund_other: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      block: {
        id: 'Compact<u32>',
        who: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup131: pallet_bounties::pallet::Call<T, I>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup132: pallet_vesting::pallet::Call<T>
   **/
  PalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'MultiAddress',
      },
      vested_transfer: {
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32'
      }
    }
  },
  /**
   * Lookup133: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup134: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup136: pallet_indices::pallet::Call<T>
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u32',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
      },
      free: {
        index: 'u32',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
        freeze: 'bool',
      },
      freeze: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup137: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<GgxchainRuntimeBrooklynPosProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'GgxchainRuntimeBrooklynPosProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'GgxchainRuntimeBrooklynPosProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'GgxchainRuntimeBrooklynPosProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'GgxchainRuntimeBrooklynPosProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<GgxchainRuntimeBrooklynPosProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup139: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup141: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup142: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup179: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup180: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup181: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup182: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup183: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'GgxchainRuntimeBrooklynOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup185: ggxchain_runtime_brooklyn::OriginCaller
   **/
  GgxchainRuntimeBrooklynOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      Void: 'SpCoreVoid',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      Ethereum: 'PalletEthereumRawOrigin',
      __Unused32: 'Null',
      __Unused33: 'Null',
      EthereumChecked: 'PalletEthereumCheckedRawOrigin'
    }
  },
  /**
   * Lookup186: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup187: pallet_ethereum::RawOrigin
   **/
  PalletEthereumRawOrigin: {
    _enum: {
      EthereumTransaction: 'H160'
    }
  },
  /**
   * Lookup189: pallet_ethereum_checked::RawOrigin<sp_core::crypto::AccountId32>
   **/
  PalletEthereumCheckedRawOrigin: {
    _enum: {
      XcmEthereumTx: 'AccountId32'
    }
  },
  /**
   * Lookup190: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup191: pallet_election_provider_multi_phase::pallet::Call<T>
   **/
  PalletElectionProviderMultiPhaseCall: {
    _enum: {
      submit_unsigned: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        witness: 'PalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
      },
      set_minimum_untrusted_score: {
        maybeNextScore: 'Option<SpNposElectionsElectionScore>',
      },
      set_emergency_election_result: {
        supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      },
      submit: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
      },
      governance_fallback: {
        maybeMaxVoters: 'Option<u32>',
        maybeMaxTargets: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup192: pallet_election_provider_multi_phase::RawSolution<ggxchain_runtime_brooklyn::pos::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    solution: 'GgxchainRuntimeBrooklynPosNposSolution16',
    score: 'SpNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup193: ggxchain_runtime_brooklyn::pos::NposSolution16
   **/
  GgxchainRuntimeBrooklynPosNposSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup244: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup248: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup252: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup253: pallet_conviction_voting::pallet::Call<T, I>
   **/
  PalletConvictionVotingCall: {
    _enum: {
      vote: {
        pollIndex: 'Compact<u32>',
        vote: 'PalletConvictionVotingVoteAccountVote',
      },
      delegate: {
        class: 'u16',
        to: 'MultiAddress',
        conviction: 'PalletConvictionVotingConviction',
        balance: 'u128',
      },
      undelegate: {
        class: 'u16',
      },
      unlock: {
        class: 'u16',
        target: 'MultiAddress',
      },
      remove_vote: {
        class: 'Option<u16>',
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        class: 'u16',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup254: pallet_conviction_voting::vote::AccountVote<Balance>
   **/
  PalletConvictionVotingVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128',
      },
      SplitAbstain: {
        aye: 'u128',
        nay: 'u128',
        abstain: 'u128'
      }
    }
  },
  /**
   * Lookup256: pallet_conviction_voting::conviction::Conviction
   **/
  PalletConvictionVotingConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup258: pallet_referenda::pallet::Call<T, I>
   **/
  PalletReferendaCall: {
    _enum: {
      submit: {
        proposalOrigin: 'GgxchainRuntimeBrooklynOriginCaller',
        proposal: 'FrameSupportPreimagesBounded',
        enactmentMoment: 'FrameSupportScheduleDispatchTime',
      },
      place_decision_deposit: {
        index: 'u32',
      },
      refund_decision_deposit: {
        index: 'u32',
      },
      cancel: {
        index: 'u32',
      },
      kill: {
        index: 'u32',
      },
      nudge_referendum: {
        index: 'u32',
      },
      one_fewer_deciding: {
        track: 'u16',
      },
      refund_submission_deposit: {
        index: 'u32',
      },
      set_metadata: {
        index: 'u32',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup259: frame_support::traits::schedule::DispatchTime<BlockNumber>
   **/
  FrameSupportScheduleDispatchTime: {
    _enum: {
      At: 'u32',
      After: 'u32'
    }
  },
  /**
   * Lookup261: pallet_whitelist::pallet::Call<T>
   **/
  PalletWhitelistCall: {
    _enum: {
      whitelist_call: {
        callHash: 'H256',
      },
      remove_whitelisted_call: {
        callHash: 'H256',
      },
      dispatch_whitelisted_call: {
        callHash: 'H256',
        callEncodedLen: 'u32',
        callWeightWitness: 'SpWeightsWeightV2Weight',
      },
      dispatch_whitelisted_call_with_preimage: {
        call: 'Call'
      }
    }
  },
  /**
   * Lookup262: pallet_society::pallet::Call<T, I>
   **/
  PalletSocietyCall: {
    _enum: {
      bid: {
        value: 'u128',
      },
      unbid: {
        pos: 'u32',
      },
      vouch: {
        who: 'MultiAddress',
        value: 'u128',
        tip: 'u128',
      },
      unvouch: {
        pos: 'u32',
      },
      vote: {
        candidate: 'MultiAddress',
        approve: 'bool',
      },
      defender_vote: {
        approve: 'bool',
      },
      payout: 'Null',
      found: {
        founder: 'MultiAddress',
        maxMembers: 'u32',
        rules: 'Bytes',
      },
      unfound: 'Null',
      judge_suspended_member: {
        who: 'MultiAddress',
        forgive: 'bool',
      },
      judge_suspended_candidate: {
        who: 'MultiAddress',
        judgement: 'PalletSocietyJudgement',
      },
      set_max_members: {
        max: 'u32'
      }
    }
  },
  /**
   * Lookup263: pallet_society::Judgement
   **/
  PalletSocietyJudgement: {
    _enum: ['Rebid', 'Reject', 'Approve']
  },
  /**
   * Lookup264: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup265: pallet_ethereum::pallet::Call<T>
   **/
  PalletEthereumCall: {
    _enum: {
      transact: {
        transaction: 'EthereumTransactionTransactionV2'
      }
    }
  },
  /**
   * Lookup266: ethereum::transaction::TransactionV2
   **/
  EthereumTransactionTransactionV2: {
    _enum: {
      Legacy: 'EthereumTransactionLegacyTransaction',
      EIP2930: 'EthereumTransactionEip2930Transaction',
      EIP1559: 'EthereumTransactionEip1559Transaction'
    }
  },
  /**
   * Lookup267: ethereum::transaction::LegacyTransaction
   **/
  EthereumTransactionLegacyTransaction: {
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    signature: 'EthereumTransactionTransactionSignature'
  },
  /**
   * Lookup270: ethereum::transaction::TransactionAction
   **/
  EthereumTransactionTransactionAction: {
    _enum: {
      Call: 'H160',
      Create: 'Null'
    }
  },
  /**
   * Lookup271: ethereum::transaction::TransactionSignature
   **/
  EthereumTransactionTransactionSignature: {
    v: 'u64',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup273: ethereum::transaction::EIP2930Transaction
   **/
  EthereumTransactionEip2930Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    gasPrice: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup275: ethereum::transaction::AccessListItem
   **/
  EthereumTransactionAccessListItem: {
    address: 'H160',
    storageKeys: 'Vec<H256>'
  },
  /**
   * Lookup277: ethereum::transaction::EIP1559Transaction
   **/
  EthereumTransactionEip1559Transaction: {
    chainId: 'u64',
    nonce: 'U256',
    maxPriorityFeePerGas: 'U256',
    maxFeePerGas: 'U256',
    gasLimit: 'U256',
    action: 'EthereumTransactionTransactionAction',
    value: 'U256',
    input: 'Bytes',
    accessList: 'Vec<EthereumTransactionAccessListItem>',
    oddYParity: 'bool',
    r: 'H256',
    s: 'H256'
  },
  /**
   * Lookup278: pallet_evm::pallet::Call<T>
   **/
  PalletEvmCall: {
    _enum: {
      withdraw: {
        address: 'H160',
        value: 'u128',
      },
      call: {
        source: 'H160',
        target: 'H160',
        input: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create: {
        source: 'H160',
        init: 'Bytes',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>',
      },
      create2: {
        source: 'H160',
        init: 'Bytes',
        salt: 'H256',
        value: 'U256',
        gasLimit: 'u64',
        maxFeePerGas: 'U256',
        maxPriorityFeePerGas: 'Option<U256>',
        nonce: 'Option<U256>',
        accessList: 'Vec<(H160,Vec<H256>)>'
      }
    }
  },
  /**
   * Lookup282: pallet_ethereum_checked::pallet::Call<T>
   **/
  PalletEthereumCheckedCall: {
    _enum: {
      transact: {
        tx: 'AstarPrimitivesEthereumCheckedCheckedEthereumTx'
      }
    }
  },
  /**
   * Lookup283: astar_primitives::ethereum_checked::CheckedEthereumTx
   **/
  AstarPrimitivesEthereumCheckedCheckedEthereumTx: {
    gasLimit: 'U256',
    target: 'H160',
    value: 'U256',
    input: 'Bytes',
    maybeAccessList: 'Option<Vec<(H160,Vec<H256>)>>'
  },
  /**
   * Lookup286: pallet_dynamic_fee::pallet::Call<T>
   **/
  PalletDynamicFeeCall: {
    _enum: {
      note_min_gas_price_target: {
        target: 'U256'
      }
    }
  },
  /**
   * Lookup287: pallet_base_fee::pallet::Call<T>
   **/
  PalletBaseFeeCall: {
    _enum: {
      set_base_fee_per_gas: {
        fee: 'U256',
      },
      set_elasticity: {
        elasticity: 'Permill'
      }
    }
  },
  /**
   * Lookup289: pallet_hotfix_sufficients::pallet::Call<T>
   **/
  PalletHotfixSufficientsCall: {
    _enum: {
      hotfix_inc_account_sufficients: {
        addresses: 'Vec<H160>'
      }
    }
  },
  /**
   * Lookup291: runtime_common::pos::currency::pallet::Call<T>
   **/
  RuntimeCommonPosCurrencyPalletCall: {
    _enum: {
      change_inflation_percent: {
        newInflation: 'Perbill',
      },
      change_inflation_decay: {
        newDecay: 'Perbill',
      },
      yearly_inflation_decay: 'Null',
      change_treasury_commission: {
        newCommission: 'Perbill',
      },
      change_treasury_commission_from_fee: {
        newCommission: 'Perbill',
      },
      change_treasury_commission_from_tips: {
        newCommission: 'Perbill'
      }
    }
  },
  /**
   * Lookup292: runtime_common::pos::session_payout::pallet::Call<T>
   **/
  RuntimeCommonPosSessionPayoutPalletCall: {
    _enum: {
      change_validator_to_nominator_commission_algorithm: {
        algorithm: 'RuntimeCommonPosSessionPayoutValidatorCommissionAlgorithm'
      }
    }
  },
  /**
   * Lookup293: runtime_common::pos::session_payout::ValidatorCommissionAlgorithm
   **/
  RuntimeCommonPosSessionPayoutValidatorCommissionAlgorithm: {
    _enum: {
      Static: 'Perbill',
      Median: 'Null'
    }
  },
  /**
   * Lookup294: substrate_account_filter::pallet::Call<T>
   **/
  SubstrateAccountFilterCall: {
    _enum: {
      vote_for_account: {
        newAccount: 'AccountId32'
      }
    }
  },
  /**
   * Lookup295: pallet_contracts::pallet::Call<T>
   **/
  PalletContractsCall: {
    _enum: {
      call_old_weight: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      upload_code: {
        code: 'Bytes',
        storageDepositLimit: 'Option<Compact<u128>>',
        determinism: 'PalletContractsWasmDeterminism',
      },
      remove_code: {
        codeHash: 'H256',
      },
      set_code: {
        dest: 'MultiAddress',
        codeHash: 'H256',
      },
      call: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes'
      }
    }
  },
  /**
   * Lookup297: pallet_contracts::wasm::Determinism
   **/
  PalletContractsWasmDeterminism: {
    _enum: ['Enforced', 'Relaxed']
  },
  /**
   * Lookup298: pallet_ibc::pallet::Call<T>
   **/
  PalletIbcCall: {
    _enum: {
      deliver: {
        messages: 'Vec<IbcProtoGoogleProtobufAny>'
      }
    }
  },
  /**
   * Lookup300: ibc_proto::google::protobuf::Any
   **/
  IbcProtoGoogleProtobufAny: {
    typeUrl: 'Text',
    value: 'Bytes'
  },
  /**
   * Lookup302: pallet_ics20_transfer::pallet::Call<T>
   **/
  PalletIcs20TransferCall: {
    _enum: {
      raw_transfer: {
        messages: 'Vec<IbcProtoGoogleProtobufAny>'
      }
    }
  },
  /**
   * Lookup303: pallet_beefy::pallet::Call<T>
   **/
  PalletBeefyCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusBeefyEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusBeefyEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof'
      }
    }
  },
  /**
   * Lookup304: sp_consensus_beefy::EquivocationProof<Number, sp_consensus_beefy::crypto::Public, sp_consensus_beefy::crypto::Signature>
   **/
  SpConsensusBeefyEquivocationProof: {
    first: 'SpConsensusBeefyVoteMessage',
    second: 'SpConsensusBeefyVoteMessage'
  },
  /**
   * Lookup305: sp_consensus_beefy::crypto::Signature
   **/
  SpConsensusBeefyCryptoSignature: 'SpCoreEcdsaSignature',
  /**
   * Lookup306: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup308: sp_consensus_beefy::VoteMessage<Number, sp_consensus_beefy::crypto::Public, sp_consensus_beefy::crypto::Signature>
   **/
  SpConsensusBeefyVoteMessage: {
    commitment: 'SpConsensusBeefyCommitment',
    id: 'SpConsensusBeefyCryptoPublic',
    signature: 'SpConsensusBeefyCryptoSignature'
  },
  /**
   * Lookup309: sp_consensus_beefy::commitment::Commitment<TBlockNumber>
   **/
  SpConsensusBeefyCommitment: {
    payload: 'SpConsensusBeefyPayload',
    blockNumber: 'u32',
    validatorSetId: 'u64'
  },
  /**
   * Lookup310: sp_consensus_beefy::payload::Payload
   **/
  SpConsensusBeefyPayload: 'Vec<([u8;2],Bytes)>',
  /**
   * Lookup313: pallet_eth2_light_client::pallet::Call<T>
   **/
  PalletEth2LightClientCall: {
    _enum: {
      init: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        args: 'EthTypesInitInput',
      },
      __Unused1: 'Null',
      submit_beacon_chain_light_client_update: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        lightClientUpdate: 'EthTypesEth2LightClientUpdate',
      },
      __Unused3: 'Null',
      submit_execution_header: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        blockHeader: 'EthTypesBlockHeader',
      },
      update_trusted_signer: {
        trustedSigner: 'AccountId32'
      }
    }
  },
  /**
   * Lookup314: webb_proposals::header::TypedChainId
   **/
  WebbProposalsHeaderTypedChainId: {
    _enum: {
      None: 'Null',
      Evm: 'u32',
      Substrate: 'u32',
      PolkadotParachain: 'u32',
      KusamaParachain: 'u32',
      RococoParachain: 'u32',
      Cosmos: 'u32',
      Solana: 'u32',
      Ink: 'u32'
    }
  },
  /**
   * Lookup315: eth_types::pallet::InitInput<sp_core::crypto::AccountId32>
   **/
  EthTypesInitInput: {
    finalizedExecutionHeader: 'EthTypesBlockHeader',
    finalizedBeaconHeader: 'EthTypesEth2ExtendedBeaconBlockHeader',
    currentSyncCommittee: 'EthTypesEth2SyncCommittee',
    nextSyncCommittee: 'EthTypesEth2SyncCommittee',
    validateUpdates: 'bool',
    verifyBlsSignatures: 'bool',
    hashesGcThreshold: 'u64',
    trustedSigner: 'Option<AccountId32>'
  },
  /**
   * Lookup316: eth_types::BlockHeader
   **/
  EthTypesBlockHeader: {
    _alias: {
      hash_: 'hash'
    },
    parentHash: 'H256',
    unclesHash: 'H256',
    author: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    logBloom: 'EthTypesBloom',
    difficulty: 'U256',
    number: 'u64',
    gasLimit: 'U256',
    gasUsed: 'U256',
    timestamp: 'u64',
    extraData: 'Bytes',
    mixHash: 'H256',
    nonce: 'EthTypesH64',
    baseFeePerGas: 'Option<u64>',
    withdrawalsRoot: 'Option<H256>',
    hash_: 'Option<H256>',
    partialHash: 'Option<H256>'
  },
  /**
   * Lookup319: eth_types::Bloom
   **/
  EthTypesBloom: 'EthbloomBloom',
  /**
   * Lookup320: ethbloom::Bloom
   **/
  EthbloomBloom: '[u8;256]',
  /**
   * Lookup323: eth_types::H64
   **/
  EthTypesH64: 'EthereumTypesHashH64',
  /**
   * Lookup324: ethereum_types::hash::H64
   **/
  EthereumTypesHashH64: '[u8;8]',
  /**
   * Lookup327: eth_types::eth2::ExtendedBeaconBlockHeader
   **/
  EthTypesEth2ExtendedBeaconBlockHeader: {
    header: 'EthTypesEth2BeaconBlockHeader',
    beaconBlockRoot: 'H256',
    executionBlockHash: 'H256'
  },
  /**
   * Lookup328: eth_types::eth2::BeaconBlockHeader
   **/
  EthTypesEth2BeaconBlockHeader: {
    slot: 'u64',
    proposerIndex: 'u64',
    parentRoot: 'H256',
    stateRoot: 'H256',
    bodyRoot: 'H256'
  },
  /**
   * Lookup329: eth_types::eth2::SyncCommittee
   **/
  EthTypesEth2SyncCommittee: {
    pubkeys: 'EthTypesEth2SyncCommitteePublicKeys',
    aggregatePubkey: 'EthTypesEth2PublicKeyBytes'
  },
  /**
   * Lookup330: eth_types::eth2::SyncCommitteePublicKeys
   **/
  EthTypesEth2SyncCommitteePublicKeys: 'Vec<EthTypesEth2PublicKeyBytes>',
  /**
   * Lookup332: eth_types::eth2::PublicKeyBytes
   **/
  EthTypesEth2PublicKeyBytes: '[u8;48]',
  /**
   * Lookup334: eth_types::eth2::LightClientUpdate
   **/
  EthTypesEth2LightClientUpdate: {
    attestedBeaconHeader: 'EthTypesEth2BeaconBlockHeader',
    syncAggregate: 'EthTypesEth2SyncAggregate',
    signatureSlot: 'u64',
    finalityUpdate: 'EthTypesEth2FinalizedHeaderUpdate',
    syncCommitteeUpdate: 'Option<EthTypesEth2SyncCommitteeUpdate>'
  },
  /**
   * Lookup335: eth_types::eth2::SyncAggregate
   **/
  EthTypesEth2SyncAggregate: {
    syncCommitteeBits: 'EthTypesEth2SyncCommitteeBits',
    syncCommitteeSignature: 'EthTypesEth2SignatureBytes'
  },
  /**
   * Lookup336: eth_types::eth2::SyncCommitteeBits
   **/
  EthTypesEth2SyncCommitteeBits: '[u8;64]',
  /**
   * Lookup337: eth_types::eth2::SignatureBytes
   **/
  EthTypesEth2SignatureBytes: '[u8;96]',
  /**
   * Lookup339: eth_types::eth2::FinalizedHeaderUpdate
   **/
  EthTypesEth2FinalizedHeaderUpdate: {
    headerUpdate: 'EthTypesEth2HeaderUpdate',
    finalityBranch: 'Vec<H256>'
  },
  /**
   * Lookup340: eth_types::eth2::HeaderUpdate
   **/
  EthTypesEth2HeaderUpdate: {
    beaconHeader: 'EthTypesEth2BeaconBlockHeader',
    executionBlockHash: 'H256',
    executionHashBranch: 'Vec<H256>'
  },
  /**
   * Lookup343: eth_types::eth2::SyncCommitteeUpdate
   **/
  EthTypesEth2SyncCommitteeUpdate: {
    nextSyncCommittee: 'EthTypesEth2SyncCommittee',
    nextSyncCommitteeBranch: 'Vec<H256>'
  },
  /**
   * Lookup344: pallet_receipt_registry::pallet::Call<T>
   **/
  PalletReceiptRegistryCall: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      submit_proof: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        eventProof: 'Bytes',
      },
      update_watching_address: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        address: 'TypesPrimitivesH160',
        add: 'bool',
      },
      update_proof_fee: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        proofDeposit: 'u128',
        proofReward: 'u128'
      }
    }
  },
  /**
   * Lookup345: types::primitives::H160
   **/
  TypesPrimitivesH160: '[u8;20]',
  /**
   * Lookup346: orml_tokens::module::Call<T>
   **/
  OrmlTokensModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        keepAlive: 'bool',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup347: interbtc_primitives::CurrencyId
   **/
  InterbtcPrimitivesCurrencyId: {
    _enum: {
      Token: 'InterbtcPrimitivesTokenSymbol',
      ForeignAsset: 'u32',
      LendToken: 'u32',
      LpToken: '(InterbtcPrimitivesLpToken,InterbtcPrimitivesLpToken)',
      StableLpToken: 'u32'
    }
  },
  /**
   * Lookup348: interbtc_primitives::TokenSymbol
   **/
  InterbtcPrimitivesTokenSymbol: {
    _enum: ['DOT', 'IBTC', 'INTR', '__Unused3', '__Unused4', '__Unused5', '__Unused6', '__Unused7', '__Unused8', '__Unused9', 'KSM', 'KBTC', 'KINT', '__Unused13', '__Unused14', '__Unused15', '__Unused16', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', '__Unused32', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', '__Unused64', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', '__Unused128', '__Unused129', '__Unused130', '__Unused131', '__Unused132', '__Unused133', '__Unused134', '__Unused135', '__Unused136', '__Unused137', '__Unused138', '__Unused139', '__Unused140', '__Unused141', '__Unused142', '__Unused143', '__Unused144', '__Unused145', '__Unused146', '__Unused147', 'GGXT']
  },
  /**
   * Lookup349: interbtc_primitives::LpToken
   **/
  InterbtcPrimitivesLpToken: {
    _enum: {
      Token: 'InterbtcPrimitivesTokenSymbol',
      ForeignAsset: 'u32',
      StableLpToken: 'u32'
    }
  },
  /**
   * Lookup350: orml_asset_registry::module::Call<T>
   **/
  OrmlAssetRegistryModuleCall: {
    _enum: {
      register_asset: {
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
        assetId: 'Option<u32>',
      },
      update_asset: {
        assetId: 'u32',
        decimals: 'Option<u32>',
        name: 'Option<Bytes>',
        symbol: 'Option<Bytes>',
        existentialDeposit: 'Option<u128>',
        location: 'Option<Option<XcmVersionedMultiLocation>>',
        additional: 'Option<InterbtcPrimitivesCustomMetadata>'
      }
    }
  },
  /**
   * Lookup351: orml_traits::asset_registry::AssetMetadata<Balance, interbtc_primitives::CustomMetadata>
   **/
  OrmlTraitsAssetRegistryAssetMetadata: {
    decimals: 'u32',
    name: 'Bytes',
    symbol: 'Bytes',
    existentialDeposit: 'u128',
    location: 'Option<XcmVersionedMultiLocation>',
    additional: 'InterbtcPrimitivesCustomMetadata'
  },
  /**
   * Lookup352: interbtc_primitives::CustomMetadata
   **/
  InterbtcPrimitivesCustomMetadata: {
    feePerSecond: 'u128',
    coingeckoId: 'Bytes'
  },
  /**
   * Lookup354: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'XcmV3MultiLocation'
    }
  },
  /**
   * Lookup355: xcm::v2::multilocation::MultiLocation
   **/
  XcmV2MultiLocation: {
    parents: 'u8',
    interior: 'XcmV2MultilocationJunctions'
  },
  /**
   * Lookup356: xcm::v2::multilocation::Junctions
   **/
  XcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV2Junction',
      X2: '(XcmV2Junction,XcmV2Junction)',
      X3: '(XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X4: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X5: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X6: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X7: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X8: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)'
    }
  },
  /**
   * Lookup357: xcm::v2::junction::Junction
   **/
  XcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV2BodyId',
        part: 'XcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup358: xcm::v2::NetworkId
   **/
  XcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup360: xcm::v2::BodyId
   **/
  XcmV2BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup361: xcm::v2::BodyPart
   **/
  XcmV2BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup362: xcm::v3::multilocation::MultiLocation
   **/
  XcmV3MultiLocation: {
    parents: 'u8',
    interior: 'XcmV3Junctions'
  },
  /**
   * Lookup363: xcm::v3::junctions::Junctions
   **/
  XcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV3Junction',
      X2: '(XcmV3Junction,XcmV3Junction)',
      X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
    }
  },
  /**
   * Lookup364: xcm::v3::junction::Junction
   **/
  XcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<XcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<XcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<XcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'XcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup366: xcm::v3::junction::NetworkId
   **/
  XcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null'
    }
  },
  /**
   * Lookup367: xcm::v3::junction::BodyId
   **/
  XcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup368: xcm::v3::junction::BodyPart
   **/
  XcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup373: btc_relay::pallet::Call<T>
   **/
  BtcRelayCall: {
    _enum: {
      initialize: {
        blockHeader: 'BitcoinBlockHeader',
        blockHeight: 'u32',
      },
      store_block_header: {
        blockHeader: 'BitcoinBlockHeader',
        forkBound: 'u32'
      }
    }
  },
  /**
   * Lookup374: bitcoin::types::BlockHeader
   **/
  BitcoinBlockHeader: {
    _alias: {
      hash_: 'hash'
    },
    merkleRoot: 'BitcoinH256Le',
    target: 'U256',
    timestamp: 'u32',
    version: 'i32',
    hash_: 'BitcoinH256Le',
    hashPrevBlock: 'BitcoinH256Le',
    nonce: 'u32'
  },
  /**
   * Lookup375: bitcoin::types::H256Le
   **/
  BitcoinH256Le: {
    content: '[u8;32]'
  },
  /**
   * Lookup377: security::pallet::Call<T>
   **/
  SecurityCall: {
    _enum: {
      activate_counter: {
        isActive: 'bool'
      }
    }
  },
  /**
   * Lookup378: fee::pallet::Call<T>
   **/
  FeeCall: {
    _enum: {
      withdraw_rewards: {
        vaultId: 'InterbtcPrimitivesVaultId',
        index: 'Option<u32>',
      },
      set_issue_fee: {
        fee: 'u128',
      },
      set_issue_griefing_collateral: {
        griefingCollateral: 'u128',
      },
      set_redeem_fee: {
        fee: 'u128',
      },
      set_premium_redeem_fee: {
        fee: 'u128',
      },
      set_punishment_fee: {
        fee: 'u128',
      },
      set_replace_griefing_collateral: {
        griefingCollateral: 'u128',
      },
      set_commission: {
        currencies: 'InterbtcPrimitivesVaultCurrencyPair',
        commission: 'u128'
      }
    }
  },
  /**
   * Lookup379: interbtc_primitives::VaultId<sp_core::crypto::AccountId32, interbtc_primitives::CurrencyId>
   **/
  InterbtcPrimitivesVaultId: {
    accountId: 'AccountId32',
    currencies: 'InterbtcPrimitivesVaultCurrencyPair'
  },
  /**
   * Lookup380: interbtc_primitives::VaultCurrencyPair<interbtc_primitives::CurrencyId>
   **/
  InterbtcPrimitivesVaultCurrencyPair: {
    collateral: 'InterbtcPrimitivesCurrencyId',
    wrapped: 'InterbtcPrimitivesCurrencyId'
  },
  /**
   * Lookup382: issue::pallet::Call<T>
   **/
  IssueCall: {
    _enum: {
      request_issue: {
        amount: 'Compact<u128>',
        vaultId: 'InterbtcPrimitivesVaultId',
        griefingCurrency: 'InterbtcPrimitivesCurrencyId',
      },
      execute_issue: {
        issueId: 'H256',
        uncheckedTransaction: 'BitcoinFullTransactionProof',
      },
      cancel_issue: {
        issueId: 'H256',
      },
      set_issue_period: {
        period: 'u32'
      }
    }
  },
  /**
   * Lookup383: bitcoin::types::FullTransactionProof
   **/
  BitcoinFullTransactionProof: {
    userTxProof: 'BitcoinMerklePartialTransactionProof',
    coinbaseProof: 'BitcoinMerklePartialTransactionProof'
  },
  /**
   * Lookup384: bitcoin::merkle::PartialTransactionProof
   **/
  BitcoinMerklePartialTransactionProof: {
    transaction: 'BitcoinTransaction',
    txEncodedLen: 'u32',
    merkleProof: 'BitcoinMerkleMerkleProof'
  },
  /**
   * Lookup385: bitcoin::types::Transaction
   **/
  BitcoinTransaction: {
    version: 'i32',
    inputs: 'Vec<BitcoinTransactionInput>',
    outputs: 'Vec<BitcoinTransactionOutput>',
    lockAt: 'BitcoinLockTime'
  },
  /**
   * Lookup387: bitcoin::types::TransactionInput
   **/
  BitcoinTransactionInput: {
    source: 'BitcoinTransactionInputSource',
    script: 'Bytes',
    sequence: 'u32',
    witness: 'Vec<Bytes>'
  },
  /**
   * Lookup388: bitcoin::types::TransactionInputSource
   **/
  BitcoinTransactionInputSource: {
    _enum: {
      FromOutput: '(BitcoinH256Le,u32)',
      Coinbase: 'Option<u32>'
    }
  },
  /**
   * Lookup390: bitcoin::types::TransactionOutput
   **/
  BitcoinTransactionOutput: {
    value: 'i64',
    script: 'BitcoinScript'
  },
  /**
   * Lookup392: bitcoin::script::Script
   **/
  BitcoinScript: {
    bytes: 'Bytes'
  },
  /**
   * Lookup393: bitcoin::types::LockTime
   **/
  BitcoinLockTime: {
    _enum: {
      Time: 'u32',
      BlockHeight: 'u32'
    }
  },
  /**
   * Lookup394: bitcoin::merkle::MerkleProof
   **/
  BitcoinMerkleMerkleProof: {
    blockHeader: 'BitcoinBlockHeader',
    flagBits: 'Vec<bool>',
    transactionsCount: 'u32',
    hashes: 'Vec<BitcoinH256Le>'
  },
  /**
   * Lookup397: oracle::pallet::Call<T>
   **/
  OracleCall: {
    _enum: {
      feed_values: {
        values: 'Vec<(InterbtcPrimitivesOracleKey,u128)>',
      },
      insert_authorized_oracle: {
        accountId: 'AccountId32',
        name: 'Bytes',
      },
      remove_authorized_oracle: {
        accountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup400: interbtc_primitives::oracle::Key
   **/
  InterbtcPrimitivesOracleKey: {
    _enum: {
      ExchangeRate: 'InterbtcPrimitivesCurrencyId',
      FeeEstimation: 'Null'
    }
  },
  /**
   * Lookup402: redeem::pallet::Call<T>
   **/
  RedeemCall: {
    _enum: {
      request_redeem: {
        amountWrapped: 'Compact<u128>',
        btcAddress: 'BitcoinAddress',
        vaultId: 'InterbtcPrimitivesVaultId',
      },
      liquidation_redeem: {
        currencies: 'InterbtcPrimitivesVaultCurrencyPair',
        amountWrapped: 'Compact<u128>',
      },
      execute_redeem: {
        redeemId: 'H256',
        uncheckedTransaction: 'BitcoinFullTransactionProof',
      },
      cancel_redeem: {
        redeemId: 'H256',
        reimburse: 'bool',
      },
      set_redeem_period: {
        period: 'u32',
      },
      mint_tokens_for_reimbursed_redeem: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        redeemId: 'H256',
      },
      self_redeem: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        amountWrapped: 'u128'
      }
    }
  },
  /**
   * Lookup403: bitcoin::address::Address
   **/
  BitcoinAddress: {
    _enum: {
      P2PKH: 'H160',
      P2SH: 'H160',
      P2WPKHv0: 'H160',
      P2WSHv0: 'H256'
    }
  },
  /**
   * Lookup404: replace::pallet::Call<T>
   **/
  ReplaceCall: {
    _enum: {
      request_replace: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        amount: 'Compact<u128>',
      },
      withdraw_replace: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        amount: 'Compact<u128>',
      },
      accept_replace: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        oldVault: 'InterbtcPrimitivesVaultId',
        amountBtc: 'Compact<u128>',
        collateral: 'Compact<u128>',
        btcAddress: 'BitcoinAddress',
      },
      execute_replace: {
        replaceId: 'H256',
        uncheckedTransaction: 'BitcoinFullTransactionProof',
      },
      cancel_replace: {
        replaceId: 'H256',
      },
      set_replace_period: {
        period: 'u32'
      }
    }
  },
  /**
   * Lookup405: vault_registry::pallet::Call<T>
   **/
  VaultRegistryCall: {
    _enum: {
      register_vault: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        collateral: 'Compact<u128>',
      },
      register_public_key: {
        publicKey: 'BitcoinAddressPublicKey',
      },
      accept_new_issues: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        acceptNewIssues: 'bool',
      },
      set_custom_secure_threshold: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        customThreshold: 'Option<u128>',
      },
      report_undercollateralized_vault: {
        vaultId: 'InterbtcPrimitivesVaultId',
      },
      set_minimum_collateral: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        minimum: 'u128',
      },
      set_system_collateral_ceiling: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        ceiling: 'u128',
      },
      set_secure_collateral_threshold: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        threshold: 'u128',
      },
      set_premium_redeem_threshold: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        threshold: 'u128',
      },
      set_liquidation_collateral_threshold: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        threshold: 'u128',
      },
      recover_vault_id: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair'
      }
    }
  },
  /**
   * Lookup406: bitcoin::address::PublicKey
   **/
  BitcoinAddressPublicKey: '[u8;33]',
  /**
   * Lookup408: reward::pallet::Call<T, I>
   **/
  RewardCall: 'Null',
  /**
   * Lookup409: staking::pallet::Call<T>
   **/
  StakingCall: 'Null',
  /**
   * Lookup411: nomination::pallet::Call<T>
   **/
  NominationCall: {
    _enum: {
      set_nomination_enabled: {
        enabled: 'bool',
      },
      opt_in_to_nomination: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
      },
      opt_out_of_nomination: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
      },
      deposit_collateral: {
        vaultId: 'InterbtcPrimitivesVaultId',
        amount: 'u128',
      },
      withdraw_collateral: {
        vaultId: 'InterbtcPrimitivesVaultId',
        amount: 'Option<u128>',
        index: 'Option<u32>',
      },
      set_nomination_limit: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        limit: 'u128'
      }
    }
  },
  /**
   * Lookup412: clients_info::pallet::Call<T>
   **/
  ClientsInfoCall: {
    _enum: {
      set_current_client_release: {
        clientName: 'Bytes',
        release: 'ClientsInfoClientRelease',
      },
      set_pending_client_release: {
        clientName: 'Bytes',
        release: 'ClientsInfoClientRelease'
      }
    }
  },
  /**
   * Lookup413: clients_info::ClientRelease<bounded_collections::bounded_vec::BoundedVec<T, S>, primitive_types::H256>
   **/
  ClientsInfoClientRelease: {
    uri: 'Bytes',
    checksum: 'H256'
  },
  /**
   * Lookup414: loans::pallet::Call<T>
   **/
  LoansCall: {
    _enum: {
      add_market: {
        assetId: 'InterbtcPrimitivesCurrencyId',
        market: 'LoansMarket',
      },
      activate_market: {
        assetId: 'InterbtcPrimitivesCurrencyId',
      },
      update_rate_model: {
        assetId: 'InterbtcPrimitivesCurrencyId',
        rateModel: 'LoansRateModelInterestRateModel',
      },
      update_market: {
        assetId: 'InterbtcPrimitivesCurrencyId',
        collateralFactor: 'Option<Permill>',
        liquidationThreshold: 'Option<Permill>',
        reserveFactor: 'Option<Permill>',
        closeFactor: 'Option<Permill>',
        liquidateIncentiveReservedFactor: 'Option<Permill>',
        liquidateIncentive: 'Option<u128>',
        supplyCap: 'Option<u128>',
        borrowCap: 'Option<u128>',
      },
      force_update_market: {
        assetId: 'InterbtcPrimitivesCurrencyId',
        market: 'LoansMarket',
      },
      add_reward: {
        amount: 'u128',
      },
      update_market_reward_speed: {
        assetId: 'InterbtcPrimitivesCurrencyId',
        supplyRewardPerBlock: 'Option<u128>',
        borrowRewardPerBlock: 'Option<u128>',
      },
      claim_reward: 'Null',
      claim_reward_for_market: {
        assetId: 'InterbtcPrimitivesCurrencyId',
      },
      mint: {
        assetId: 'InterbtcPrimitivesCurrencyId',
        mintAmount: 'Compact<u128>',
      },
      redeem: {
        assetId: 'InterbtcPrimitivesCurrencyId',
        redeemAmount: 'Compact<u128>',
      },
      redeem_all: {
        assetId: 'InterbtcPrimitivesCurrencyId',
      },
      borrow: {
        assetId: 'InterbtcPrimitivesCurrencyId',
        borrowAmount: 'Compact<u128>',
      },
      repay_borrow: {
        assetId: 'InterbtcPrimitivesCurrencyId',
        repayAmount: 'Compact<u128>',
      },
      repay_borrow_all: {
        assetId: 'InterbtcPrimitivesCurrencyId',
      },
      deposit_all_collateral: {
        assetId: 'InterbtcPrimitivesCurrencyId',
      },
      withdraw_all_collateral: {
        assetId: 'InterbtcPrimitivesCurrencyId',
      },
      liquidate_borrow: {
        borrower: 'AccountId32',
        liquidationAssetId: 'InterbtcPrimitivesCurrencyId',
        repayAmount: 'Compact<u128>',
        collateralAssetId: 'InterbtcPrimitivesCurrencyId',
      },
      add_reserves: {
        payer: 'MultiAddress',
        assetId: 'InterbtcPrimitivesCurrencyId',
        addAmount: 'Compact<u128>',
      },
      reduce_reserves: {
        receiver: 'MultiAddress',
        assetId: 'InterbtcPrimitivesCurrencyId',
        reduceAmount: 'Compact<u128>',
      },
      reduce_incentive_reserves: {
        receiver: 'MultiAddress',
        assetId: 'InterbtcPrimitivesCurrencyId',
        redeemAmount: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup415: loans::types::Market<Balance>
   **/
  LoansMarket: {
    collateralFactor: 'Permill',
    liquidationThreshold: 'Permill',
    reserveFactor: 'Permill',
    closeFactor: 'Permill',
    liquidateIncentive: 'u128',
    liquidateIncentiveReservedFactor: 'Permill',
    rateModel: 'LoansRateModelInterestRateModel',
    state: 'LoansMarketState',
    supplyCap: 'u128',
    borrowCap: 'u128',
    lendTokenId: 'InterbtcPrimitivesCurrencyId'
  },
  /**
   * Lookup416: loans::rate_model::InterestRateModel
   **/
  LoansRateModelInterestRateModel: {
    _enum: {
      Jump: 'LoansRateModelJumpModel',
      Curve: 'LoansRateModelCurveModel'
    }
  },
  /**
   * Lookup417: loans::rate_model::JumpModel
   **/
  LoansRateModelJumpModel: {
    baseRate: 'u128',
    jumpRate: 'u128',
    fullRate: 'u128',
    jumpUtilization: 'Permill'
  },
  /**
   * Lookup418: loans::rate_model::CurveModel
   **/
  LoansRateModelCurveModel: {
    baseRate: 'u128'
  },
  /**
   * Lookup419: loans::types::MarketState
   **/
  LoansMarketState: {
    _enum: ['Active', 'Pending', 'Supervision']
  },
  /**
   * Lookup421: pallet_dex::pallet::Call<T>
   **/
  PalletDexCall: {
    _enum: {
      deposit: {
        assetId: 'u32',
        amount: 'u128',
      },
      withdraw: {
        assetId: 'u32',
        amount: 'u128',
      },
      make_order: {
        assetId1: 'u32',
        assetId2: 'u32',
        offeredAmount: 'u128',
        requestedAmount: 'u128',
        orderType: 'PalletDexOrderType',
        expirationBlock: 'u32',
      },
      cancel_order: {
        orderIndex: 'u64',
      },
      take_order: {
        orderIndex: 'u64',
      },
      deposit_native: {
        amount: 'u128',
      },
      withdraw_native: {
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup422: pallet_dex::OrderType
   **/
  PalletDexOrderType: {
    _enum: ['BUY', 'SELL']
  },
  /**
   * Lookup424: pallet_conviction_voting::types::Tally<Votes, Total>
   **/
  PalletConvictionVotingTally: {
    ayes: 'u128',
    nays: 'u128',
    support: 'u128'
  },
  /**
   * Lookup425: pallet_whitelist::pallet::Event<T>
   **/
  PalletWhitelistEvent: {
    _enum: {
      CallWhitelisted: {
        callHash: 'H256',
      },
      WhitelistedCallRemoved: {
        callHash: 'H256',
      },
      WhitelistedCallDispatched: {
        callHash: 'H256',
        result: 'Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>'
      }
    }
  },
  /**
   * Lookup427: frame_support::dispatch::PostDispatchInfo
   **/
  FrameSupportDispatchPostDispatchInfo: {
    actualWeight: 'Option<SpWeightsWeightV2Weight>',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup429: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
   **/
  SpRuntimeDispatchErrorWithPostInfo: {
    postInfo: 'FrameSupportDispatchPostDispatchInfo',
    error: 'SpRuntimeDispatchError'
  },
  /**
   * Lookup430: pallet_society::pallet::Event<T, I>
   **/
  PalletSocietyEvent: {
    _enum: {
      Founded: {
        founder: 'AccountId32',
      },
      Bid: {
        candidateId: 'AccountId32',
        offer: 'u128',
      },
      Vouch: {
        candidateId: 'AccountId32',
        offer: 'u128',
        vouching: 'AccountId32',
      },
      AutoUnbid: {
        candidate: 'AccountId32',
      },
      Unbid: {
        candidate: 'AccountId32',
      },
      Unvouch: {
        candidate: 'AccountId32',
      },
      Inducted: {
        primary: 'AccountId32',
        candidates: 'Vec<AccountId32>',
      },
      SuspendedMemberJudgement: {
        who: 'AccountId32',
        judged: 'bool',
      },
      CandidateSuspended: {
        candidate: 'AccountId32',
      },
      MemberSuspended: {
        member: 'AccountId32',
      },
      Challenged: {
        member: 'AccountId32',
      },
      Vote: {
        candidate: 'AccountId32',
        voter: 'AccountId32',
        vote: 'bool',
      },
      DefenderVote: {
        voter: 'AccountId32',
        vote: 'bool',
      },
      NewMaxMembers: {
        max: 'u32',
      },
      Unfounded: {
        founder: 'AccountId32',
      },
      Deposit: {
        value: 'u128',
      },
      SkepticsChosen: {
        skeptics: 'Vec<AccountId32>'
      }
    }
  },
  /**
   * Lookup431: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup432: pallet_ethereum::pallet::Event
   **/
  PalletEthereumEvent: {
    _enum: {
      Executed: {
        from: 'H160',
        to: 'H160',
        transactionHash: 'H256',
        exitReason: 'EvmCoreErrorExitReason',
        extraData: 'Bytes'
      }
    }
  },
  /**
   * Lookup433: evm_core::error::ExitReason
   **/
  EvmCoreErrorExitReason: {
    _enum: {
      Succeed: 'EvmCoreErrorExitSucceed',
      Error: 'EvmCoreErrorExitError',
      Revert: 'EvmCoreErrorExitRevert',
      Fatal: 'EvmCoreErrorExitFatal'
    }
  },
  /**
   * Lookup434: evm_core::error::ExitSucceed
   **/
  EvmCoreErrorExitSucceed: {
    _enum: ['Stopped', 'Returned', 'Suicided']
  },
  /**
   * Lookup435: evm_core::error::ExitError
   **/
  EvmCoreErrorExitError: {
    _enum: {
      StackUnderflow: 'Null',
      StackOverflow: 'Null',
      InvalidJump: 'Null',
      InvalidRange: 'Null',
      DesignatedInvalid: 'Null',
      CallTooDeep: 'Null',
      CreateCollision: 'Null',
      CreateContractLimit: 'Null',
      OutOfOffset: 'Null',
      OutOfGas: 'Null',
      OutOfFund: 'Null',
      PCUnderflow: 'Null',
      CreateEmpty: 'Null',
      Other: 'Text',
      MaxNonce: 'Null',
      InvalidCode: 'u8'
    }
  },
  /**
   * Lookup438: evm_core::error::ExitRevert
   **/
  EvmCoreErrorExitRevert: {
    _enum: ['Reverted']
  },
  /**
   * Lookup439: evm_core::error::ExitFatal
   **/
  EvmCoreErrorExitFatal: {
    _enum: {
      NotSupported: 'Null',
      UnhandledInterrupt: 'Null',
      CallErrorAsFatal: 'EvmCoreErrorExitError',
      Other: 'Text'
    }
  },
  /**
   * Lookup440: pallet_evm::pallet::Event<T>
   **/
  PalletEvmEvent: {
    _enum: {
      Log: {
        log: 'EthereumLog',
      },
      Created: {
        address: 'H160',
      },
      CreatedFailed: {
        address: 'H160',
      },
      Executed: {
        address: 'H160',
      },
      ExecutedFailed: {
        address: 'H160'
      }
    }
  },
  /**
   * Lookup441: ethereum::log::Log
   **/
  EthereumLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes'
  },
  /**
   * Lookup442: pallet_base_fee::pallet::Event
   **/
  PalletBaseFeeEvent: {
    _enum: {
      NewBaseFeePerGas: {
        fee: 'U256',
      },
      BaseFeeOverflow: 'Null',
      NewElasticity: {
        elasticity: 'Permill'
      }
    }
  },
  /**
   * Lookup443: runtime_common::pos::currency::pallet::Event<T>
   **/
  RuntimeCommonPosCurrencyPalletEvent: {
    _enum: {
      InflationPercentChanged: 'Perbill',
      InflationDecayChanged: 'Perbill',
      TreasuryCommissionChanged: 'Perbill',
      TreasuryCommissionFromFeeChanged: 'Perbill',
      TreasuryCommissionFromTipsChanged: 'Perbill'
    }
  },
  /**
   * Lookup444: runtime_common::pos::session_payout::pallet::Event<T>
   **/
  RuntimeCommonPosSessionPayoutPalletEvent: {
    _enum: {
      SessionPayout: {
        sessionIndex: 'u32',
        validatorPayout: 'u128',
        remainder: 'u128',
      },
      Rewarded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      YearRewardPoolAllocated: {
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup445: substrate_account_filter::pallet::Event<T>
   **/
  SubstrateAccountFilterEvent: {
    _enum: {
      AccountAllowed: {
        account: 'AccountId32',
        votedFor: 'Vec<AccountId32>',
      },
      AccountVoted: {
        referrer: 'AccountId32',
        referee: 'AccountId32'
      }
    }
  },
  /**
   * Lookup446: pallet_contracts::pallet::Event<T>
   **/
  PalletContractsEvent: {
    _enum: {
      Instantiated: {
        deployer: 'AccountId32',
        contract: 'AccountId32',
      },
      Terminated: {
        contract: 'AccountId32',
        beneficiary: 'AccountId32',
      },
      CodeStored: {
        codeHash: 'H256',
      },
      ContractEmitted: {
        contract: 'AccountId32',
        data: 'Bytes',
      },
      CodeRemoved: {
        codeHash: 'H256',
      },
      ContractCodeUpdated: {
        contract: 'AccountId32',
        newCodeHash: 'H256',
        oldCodeHash: 'H256',
      },
      Called: {
        caller: 'PalletContractsOrigin',
        contract: 'AccountId32',
      },
      DelegateCalled: {
        contract: 'AccountId32',
        codeHash: 'H256'
      }
    }
  },
  /**
   * Lookup447: pallet_contracts::Origin<ggxchain_runtime_brooklyn::Runtime>
   **/
  PalletContractsOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32'
    }
  },
  /**
   * Lookup448: ggxchain_runtime_brooklyn::Runtime
   **/
  GgxchainRuntimeBrooklynRuntime: 'Null',
  /**
   * Lookup449: pallet_ibc::pallet::Event<T>
   **/
  PalletIbcEvent: {
    _enum: {
      IbcEvents: {
        events: 'Vec<IbcEventsIbcEvent>',
      },
      IbcErrors: {
        errors: 'Vec<PalletIbcErrorsIbcError>'
      }
    }
  },
  /**
   * Lookup451: ibc::events::IbcEvent
   **/
  IbcEventsIbcEvent: {
    _enum: {
      CreateClient: 'IbcCoreIcs02ClientEventsCreateClient',
      UpdateClient: 'IbcCoreIcs02ClientEventsUpdateClient',
      UpgradeClient: 'IbcCoreIcs02ClientEventsUpgradeClient',
      ClientMisbehaviour: 'IbcCoreIcs02ClientEventsClientMisbehaviour',
      OpenInitConnection: 'IbcCoreIcs03ConnectionEventsOpenInit',
      OpenTryConnection: 'IbcCoreIcs03ConnectionEventsOpenTry',
      OpenAckConnection: 'IbcCoreIcs03ConnectionEventsOpenAck',
      OpenConfirmConnection: 'IbcCoreIcs03ConnectionEventsOpenConfirm',
      OpenInitChannel: 'IbcCoreIcs04ChannelEventsOpenInit',
      OpenTryChannel: 'IbcCoreIcs04ChannelEventsOpenTry',
      OpenAckChannel: 'IbcCoreIcs04ChannelEventsOpenAck',
      OpenConfirmChannel: 'IbcCoreIcs04ChannelEventsOpenConfirm',
      CloseInitChannel: 'IbcCoreIcs04ChannelEventsCloseInit',
      CloseConfirmChannel: 'IbcCoreIcs04ChannelEventsCloseConfirm',
      SendPacket: 'IbcCoreIcs04ChannelEventsSendPacket',
      ReceivePacket: 'IbcCoreIcs04ChannelEventsReceivePacket',
      WriteAcknowledgement: 'IbcCoreIcs04ChannelEventsWriteAcknowledgement',
      AcknowledgePacket: 'IbcCoreIcs04ChannelEventsAcknowledgePacket',
      TimeoutPacket: 'IbcCoreIcs04ChannelEventsTimeoutPacket',
      ChannelClosed: 'IbcCoreIcs04ChannelEventsChannelClosed',
      AppModule: 'IbcEventsModuleEvent'
    }
  },
  /**
   * Lookup452: ibc::core::ics02_client::events::CreateClient
   **/
  IbcCoreIcs02ClientEventsCreateClient: {
    clientId: 'IbcCoreIcs02ClientEventsClientIdAttribute',
    clientType: 'IbcCoreIcs02ClientEventsClientTypeAttribute',
    consensusHeight: 'IbcCoreIcs02ClientEventsConsensusHeightAttribute'
  },
  /**
   * Lookup453: ibc::core::ics02_client::events::ClientIdAttribute
   **/
  IbcCoreIcs02ClientEventsClientIdAttribute: {
    clientId: 'Text'
  },
  /**
   * Lookup455: ibc::core::ics02_client::events::ClientTypeAttribute
   **/
  IbcCoreIcs02ClientEventsClientTypeAttribute: {
    clientType: 'Text'
  },
  /**
   * Lookup457: ibc::core::ics02_client::events::ConsensusHeightAttribute
   **/
  IbcCoreIcs02ClientEventsConsensusHeightAttribute: {
    consensusHeight: 'IbcCoreIcs02ClientHeight'
  },
  /**
   * Lookup458: ibc::core::ics02_client::height::Height
   **/
  IbcCoreIcs02ClientHeight: {
    revisionNumber: 'u64',
    revisionHeight: 'u64'
  },
  /**
   * Lookup459: ibc::core::ics02_client::events::UpdateClient
   **/
  IbcCoreIcs02ClientEventsUpdateClient: {
    clientId: 'IbcCoreIcs02ClientEventsClientIdAttribute',
    clientType: 'IbcCoreIcs02ClientEventsClientTypeAttribute',
    consensusHeight: 'IbcCoreIcs02ClientEventsConsensusHeightAttribute',
    consensusHeights: 'IbcCoreIcs02ClientEventsConsensusHeightsAttribute',
    header: 'IbcCoreIcs02ClientEventsHeaderAttribute'
  },
  /**
   * Lookup460: ibc::core::ics02_client::events::ConsensusHeightsAttribute
   **/
  IbcCoreIcs02ClientEventsConsensusHeightsAttribute: {
    consensusHeights: 'Vec<IbcCoreIcs02ClientHeight>'
  },
  /**
   * Lookup462: ibc::core::ics02_client::events::HeaderAttribute
   **/
  IbcCoreIcs02ClientEventsHeaderAttribute: {
    header: 'IbcProtoGoogleProtobufAny'
  },
  /**
   * Lookup463: ibc::core::ics02_client::events::UpgradeClient
   **/
  IbcCoreIcs02ClientEventsUpgradeClient: {
    clientId: 'IbcCoreIcs02ClientEventsClientIdAttribute',
    clientType: 'IbcCoreIcs02ClientEventsClientTypeAttribute',
    consensusHeight: 'IbcCoreIcs02ClientEventsConsensusHeightAttribute'
  },
  /**
   * Lookup464: ibc::core::ics02_client::events::ClientMisbehaviour
   **/
  IbcCoreIcs02ClientEventsClientMisbehaviour: {
    clientId: 'IbcCoreIcs02ClientEventsClientIdAttribute',
    clientType: 'IbcCoreIcs02ClientEventsClientTypeAttribute'
  },
  /**
   * Lookup465: ibc::core::ics03_connection::events::OpenInit
   **/
  IbcCoreIcs03ConnectionEventsOpenInit: 'IbcCoreIcs03ConnectionEventsAttributes',
  /**
   * Lookup466: ibc::core::ics03_connection::events::Attributes
   **/
  IbcCoreIcs03ConnectionEventsAttributes: {
    connectionId: 'Text',
    clientId: 'Text',
    counterpartyConnectionId: 'Option<Text>',
    counterpartyClientId: 'Text'
  },
  /**
   * Lookup469: ibc::core::ics03_connection::events::OpenTry
   **/
  IbcCoreIcs03ConnectionEventsOpenTry: 'IbcCoreIcs03ConnectionEventsAttributes',
  /**
   * Lookup470: ibc::core::ics03_connection::events::OpenAck
   **/
  IbcCoreIcs03ConnectionEventsOpenAck: 'IbcCoreIcs03ConnectionEventsAttributes',
  /**
   * Lookup471: ibc::core::ics03_connection::events::OpenConfirm
   **/
  IbcCoreIcs03ConnectionEventsOpenConfirm: 'IbcCoreIcs03ConnectionEventsAttributes',
  /**
   * Lookup472: ibc::core::ics04_channel::events::OpenInit
   **/
  IbcCoreIcs04ChannelEventsOpenInit: {
    portId: 'IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute',
    channelId: 'IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute',
    counterpartyPortId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute',
    connectionId: 'IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute',
    version: 'IbcCoreIcs04ChannelEventsChannelAttributesVersionAttribute'
  },
  /**
   * Lookup473: ibc::core::ics04_channel::events::channel_attributes::PortIdAttribute
   **/
  IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute: {
    portId: 'Text'
  },
  /**
   * Lookup475: ibc::core::ics04_channel::events::channel_attributes::ChannelIdAttribute
   **/
  IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute: {
    channelId: 'Text'
  },
  /**
   * Lookup477: ibc::core::ics04_channel::events::channel_attributes::CounterpartyPortIdAttribute
   **/
  IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute: {
    counterpartyPortId: 'Text'
  },
  /**
   * Lookup478: ibc::core::ics04_channel::events::channel_attributes::ConnectionIdAttribute
   **/
  IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute: {
    connectionId: 'Text'
  },
  /**
   * Lookup479: ibc::core::ics04_channel::events::channel_attributes::VersionAttribute
   **/
  IbcCoreIcs04ChannelEventsChannelAttributesVersionAttribute: {
    version: 'Text'
  },
  /**
   * Lookup481: ibc::core::ics04_channel::events::OpenTry
   **/
  IbcCoreIcs04ChannelEventsOpenTry: {
    portId: 'IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute',
    channelId: 'IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute',
    counterpartyPortId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute',
    counterpartyChannelId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute',
    connectionId: 'IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute',
    version: 'IbcCoreIcs04ChannelEventsChannelAttributesVersionAttribute'
  },
  /**
   * Lookup482: ibc::core::ics04_channel::events::channel_attributes::CounterpartyChannelIdAttribute
   **/
  IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute: {
    counterpartyChannelId: 'Text'
  },
  /**
   * Lookup483: ibc::core::ics04_channel::events::OpenAck
   **/
  IbcCoreIcs04ChannelEventsOpenAck: {
    portId: 'IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute',
    channelId: 'IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute',
    counterpartyPortId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute',
    counterpartyChannelId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute',
    connectionId: 'IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute'
  },
  /**
   * Lookup484: ibc::core::ics04_channel::events::OpenConfirm
   **/
  IbcCoreIcs04ChannelEventsOpenConfirm: {
    portId: 'IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute',
    channelId: 'IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute',
    counterpartyPortId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute',
    counterpartyChannelId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute',
    connectionId: 'IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute'
  },
  /**
   * Lookup485: ibc::core::ics04_channel::events::CloseInit
   **/
  IbcCoreIcs04ChannelEventsCloseInit: {
    portId: 'IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute',
    channelId: 'IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute',
    counterpartyPortId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute',
    counterpartyChannelId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute',
    connectionId: 'IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute'
  },
  /**
   * Lookup486: ibc::core::ics04_channel::events::CloseConfirm
   **/
  IbcCoreIcs04ChannelEventsCloseConfirm: {
    portId: 'IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute',
    channelId: 'IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute',
    counterpartyPortId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute',
    counterpartyChannelId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute',
    connectionId: 'IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute'
  },
  /**
   * Lookup487: ibc::core::ics04_channel::events::SendPacket
   **/
  IbcCoreIcs04ChannelEventsSendPacket: {
    packetData: 'IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute',
    timeoutHeight: 'IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute',
    timeoutTimestamp: 'IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute',
    sequence: 'IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute',
    srcPortId: 'IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute',
    srcChannelId: 'IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute',
    dstPortId: 'IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute',
    dstChannelId: 'IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute',
    channelOrdering: 'IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute',
    srcConnectionId: 'IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute'
  },
  /**
   * Lookup488: ibc::core::ics04_channel::events::packet_attributes::PacketDataAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute: {
    packetData: 'Bytes'
  },
  /**
   * Lookup489: ibc::core::ics04_channel::events::packet_attributes::TimeoutHeightAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute: {
    timeoutHeight: 'IbcCoreIcs04ChannelTimeoutTimeoutHeight'
  },
  /**
   * Lookup490: ibc::core::ics04_channel::timeout::TimeoutHeight
   **/
  IbcCoreIcs04ChannelTimeoutTimeoutHeight: {
    _enum: {
      Never: 'Null',
      At: 'IbcCoreIcs02ClientHeight'
    }
  },
  /**
   * Lookup491: ibc::core::ics04_channel::events::packet_attributes::TimeoutTimestampAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute: {
    timeoutTimestamp: 'IbcTimestamp'
  },
  /**
   * Lookup492: ibc::timestamp::Timestamp
   **/
  IbcTimestamp: {
    time: 'Option<u64>'
  },
  /**
   * Lookup493: ibc::core::ics04_channel::events::packet_attributes::SequenceAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute: {
    sequence: 'u64'
  },
  /**
   * Lookup495: ibc::core::ics04_channel::events::packet_attributes::SrcPortIdAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute: {
    srcPortId: 'Text'
  },
  /**
   * Lookup496: ibc::core::ics04_channel::events::packet_attributes::SrcChannelIdAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute: {
    srcChannelId: 'Text'
  },
  /**
   * Lookup497: ibc::core::ics04_channel::events::packet_attributes::DstPortIdAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute: {
    dstPortId: 'Text'
  },
  /**
   * Lookup498: ibc::core::ics04_channel::events::packet_attributes::DstChannelIdAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute: {
    dstChannelId: 'Text'
  },
  /**
   * Lookup499: ibc::core::ics04_channel::events::packet_attributes::ChannelOrderingAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute: {
    order: 'IbcCoreIcs04ChannelChannelOrder'
  },
  /**
   * Lookup500: ibc::core::ics04_channel::channel::Order
   **/
  IbcCoreIcs04ChannelChannelOrder: {
    _enum: ['None', 'Unordered', 'Ordered']
  },
  /**
   * Lookup501: ibc::core::ics04_channel::events::packet_attributes::PacketConnectionIdAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute: {
    connectionId: 'Text'
  },
  /**
   * Lookup502: ibc::core::ics04_channel::events::ReceivePacket
   **/
  IbcCoreIcs04ChannelEventsReceivePacket: {
    packetData: 'IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute',
    timeoutHeight: 'IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute',
    timeoutTimestamp: 'IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute',
    sequence: 'IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute',
    srcPortId: 'IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute',
    srcChannelId: 'IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute',
    dstPortId: 'IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute',
    dstChannelId: 'IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute',
    channelOrdering: 'IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute',
    dstConnectionId: 'IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute'
  },
  /**
   * Lookup503: ibc::core::ics04_channel::events::WriteAcknowledgement
   **/
  IbcCoreIcs04ChannelEventsWriteAcknowledgement: {
    packetData: 'IbcCoreIcs04ChannelEventsPacketAttributesPacketDataAttribute',
    timeoutHeight: 'IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute',
    timeoutTimestamp: 'IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute',
    sequence: 'IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute',
    srcPortId: 'IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute',
    srcChannelId: 'IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute',
    dstPortId: 'IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute',
    dstChannelId: 'IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute',
    acknowledgement: 'IbcCoreIcs04ChannelEventsPacketAttributesAcknowledgementAttribute',
    dstConnectionId: 'IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute'
  },
  /**
   * Lookup504: ibc::core::ics04_channel::events::packet_attributes::AcknowledgementAttribute
   **/
  IbcCoreIcs04ChannelEventsPacketAttributesAcknowledgementAttribute: {
    acknowledgement: 'Bytes'
  },
  /**
   * Lookup506: ibc::core::ics04_channel::events::AcknowledgePacket
   **/
  IbcCoreIcs04ChannelEventsAcknowledgePacket: {
    timeoutHeight: 'IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute',
    timeoutTimestamp: 'IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute',
    sequence: 'IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute',
    srcPortId: 'IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute',
    srcChannelId: 'IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute',
    dstPortId: 'IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute',
    dstChannelId: 'IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute',
    channelOrdering: 'IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute',
    srcConnectionId: 'IbcCoreIcs04ChannelEventsPacketAttributesPacketConnectionIdAttribute'
  },
  /**
   * Lookup507: ibc::core::ics04_channel::events::TimeoutPacket
   **/
  IbcCoreIcs04ChannelEventsTimeoutPacket: {
    timeoutHeight: 'IbcCoreIcs04ChannelEventsPacketAttributesTimeoutHeightAttribute',
    timeoutTimestamp: 'IbcCoreIcs04ChannelEventsPacketAttributesTimeoutTimestampAttribute',
    sequence: 'IbcCoreIcs04ChannelEventsPacketAttributesSequenceAttribute',
    srcPortId: 'IbcCoreIcs04ChannelEventsPacketAttributesSrcPortIdAttribute',
    srcChannelId: 'IbcCoreIcs04ChannelEventsPacketAttributesSrcChannelIdAttribute',
    dstPortId: 'IbcCoreIcs04ChannelEventsPacketAttributesDstPortIdAttribute',
    dstChannelId: 'IbcCoreIcs04ChannelEventsPacketAttributesDstChannelIdAttribute',
    channelOrdering: 'IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute'
  },
  /**
   * Lookup508: ibc::core::ics04_channel::events::ChannelClosed
   **/
  IbcCoreIcs04ChannelEventsChannelClosed: {
    portId: 'IbcCoreIcs04ChannelEventsChannelAttributesPortIdAttribute',
    channelId: 'IbcCoreIcs04ChannelEventsChannelAttributesChannelIdAttribute',
    counterpartyPortId: 'IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyPortIdAttribute',
    maybeCounterpartyChannelId: 'Option<IbcCoreIcs04ChannelEventsChannelAttributesCounterpartyChannelIdAttribute>',
    connectionId: 'IbcCoreIcs04ChannelEventsChannelAttributesConnectionIdAttribute',
    channelOrdering: 'IbcCoreIcs04ChannelEventsPacketAttributesChannelOrderingAttribute'
  },
  /**
   * Lookup510: ibc::events::ModuleEvent
   **/
  IbcEventsModuleEvent: {
    kind: 'Text',
    moduleName: 'Text',
    attributes: 'Vec<IbcEventsModuleEventAttribute>'
  },
  /**
   * Lookup513: ibc::events::ModuleEventAttribute
   **/
  IbcEventsModuleEventAttribute: {
    key: 'Text',
    value: 'Text'
  },
  /**
   * Lookup515: pallet_ibc::errors::IbcError
   **/
  PalletIbcErrorsIbcError: {
    _enum: {
      ContextError: {
        message: 'Bytes',
      },
      UnknownMessageTypeUrl: {
        message: 'Bytes',
      },
      MalformedMessageBytes: {
        message: 'Bytes'
      }
    }
  },
  /**
   * Lookup516: pallet_ics20_transfer::pallet::Event<T>
   **/
  PalletIcs20TransferEvent: {
    _enum: {
      SendPacket: 'IbcCoreIcs04ChannelEventsSendPacket',
      UnsupportedEvent: 'Null',
      TransferNativeToken: '(AccountId32,AccountId32,u128)',
      TransferNoNativeToken: '(AccountId32,AccountId32,u128)',
      BurnToken: '(u32,AccountId32,u128)',
      MintToken: '(u32,AccountId32,u128)'
    }
  },
  /**
   * Lookup518: pallet_eth2_light_client::pallet::Event<T>
   **/
  PalletEth2LightClientEvent: {
    _enum: {
      Init: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        headerInfo: 'EthTypesExecutionHeaderInfo',
      },
      SubmitBeaconChainLightClientUpdate: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        submitter: 'AccountId32',
        beaconBlockHeader: 'EthTypesEth2BeaconBlockHeader',
      },
      SubmitExecutionHeader: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        headerInfo: 'EthTypesBlockHeader',
      },
      UpdateTrustedSigner: {
        trustedSigner: 'AccountId32'
      }
    }
  },
  /**
   * Lookup519: eth_types::pallet::ExecutionHeaderInfo<sp_core::crypto::AccountId32>
   **/
  EthTypesExecutionHeaderInfo: {
    parentHash: 'H256',
    blockNumber: 'u64',
    submitter: 'AccountId32'
  },
  /**
   * Lookup520: pallet_receipt_registry::pallet::Event<T>
   **/
  PalletReceiptRegistryEvent: {
    _enum: {
      SubmitProcessedReceipts: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        blockNumber: 'u64',
        receiptHash: 'TypesPrimitivesH256',
      },
      AddedContractAddress: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        address: 'TypesPrimitivesH160',
      },
      RemovedContractAddress: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        address: 'TypesPrimitivesH160',
      },
      UpdateProofFee: {
        typedChainId: 'WebbProposalsHeaderTypedChainId',
        proofDeposit: 'u128',
        proofReward: 'u128'
      }
    }
  },
  /**
   * Lookup521: types::primitives::H256
   **/
  TypesPrimitivesH256: '[u8;32]',
  /**
   * Lookup522: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
      },
      Locked: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup523: orml_asset_registry::module::Event<T>
   **/
  OrmlAssetRegistryModuleEvent: {
    _enum: {
      RegisteredAsset: {
        assetId: 'u32',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
      },
      UpdatedAsset: {
        assetId: 'u32',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata'
      }
    }
  },
  /**
   * Lookup524: btc_relay::pallet::Event<T>
   **/
  BtcRelayEvent: {
    _enum: {
      Initialized: {
        blockHeight: 'u32',
        blockHash: 'BitcoinH256Le',
        relayerId: 'AccountId32',
      },
      StoreMainChainHeader: {
        blockHeight: 'u32',
        blockHash: 'BitcoinH256Le',
        relayerId: 'AccountId32',
      },
      StoreForkHeader: {
        chainId: 'u32',
        forkHeight: 'u32',
        blockHash: 'BitcoinH256Le',
        relayerId: 'AccountId32',
      },
      ChainReorg: {
        newChainTipHash: 'BitcoinH256Le',
        newChainTipHeight: 'u32',
        forkDepth: 'u32',
      },
      ForkAheadOfMainChain: {
        mainChainHeight: 'u32',
        forkHeight: 'u32',
        forkId: 'u32'
      }
    }
  },
  /**
   * Lookup525: security::pallet::Event<T>
   **/
  SecurityEvent: {
    _enum: {
      UpdateActiveBlock: {
        blockNumber: 'u32',
      },
      Activated: 'Null',
      Deactivated: 'Null'
    }
  },
  /**
   * Lookup526: issue::pallet::Event<T>
   **/
  IssueEvent: {
    _enum: {
      RequestIssue: {
        issueId: 'H256',
        requester: 'AccountId32',
        amount: 'u128',
        fee: 'u128',
        griefingCollateral: 'u128',
        griefingCurrency: 'InterbtcPrimitivesCurrencyId',
        vaultId: 'InterbtcPrimitivesVaultId',
        vaultAddress: 'BitcoinAddress',
        vaultPublicKey: 'BitcoinAddressPublicKey',
      },
      IssueAmountChange: {
        issueId: 'H256',
        amount: 'u128',
        fee: 'u128',
        confiscatedGriefingCollateral: 'u128',
      },
      ExecuteIssue: {
        issueId: 'H256',
        requester: 'AccountId32',
        vaultId: 'InterbtcPrimitivesVaultId',
        amount: 'u128',
        fee: 'u128',
      },
      CancelIssue: {
        issueId: 'H256',
        requester: 'AccountId32',
        griefingCollateral: 'u128',
      },
      IssuePeriodChange: {
        period: 'u32'
      }
    }
  },
  /**
   * Lookup527: oracle::pallet::Event<T>
   **/
  OracleEvent: {
    _enum: {
      FeedValues: {
        oracleId: 'AccountId32',
        values: 'Vec<(InterbtcPrimitivesOracleKey,u128)>',
      },
      AggregateUpdated: {
        values: 'Vec<(InterbtcPrimitivesOracleKey,Option<u128>)>',
      },
      OracleAdded: {
        oracleId: 'AccountId32',
        name: 'Bytes',
      },
      OracleRemoved: {
        oracleId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup530: redeem::pallet::Event<T>
   **/
  RedeemEvent: {
    _enum: {
      RequestRedeem: {
        redeemId: 'H256',
        redeemer: 'AccountId32',
        vaultId: 'InterbtcPrimitivesVaultId',
        amount: 'u128',
        fee: 'u128',
        premium: 'u128',
        btcAddress: 'BitcoinAddress',
        transferFee: 'u128',
      },
      LiquidationRedeem: {
        redeemer: 'AccountId32',
        amount: 'u128',
      },
      ExecuteRedeem: {
        redeemId: 'H256',
        redeemer: 'AccountId32',
        vaultId: 'InterbtcPrimitivesVaultId',
        amount: 'u128',
        fee: 'u128',
        transferFee: 'u128',
      },
      CancelRedeem: {
        redeemId: 'H256',
        redeemer: 'AccountId32',
        vaultId: 'InterbtcPrimitivesVaultId',
        slashedAmount: 'u128',
        status: 'InterbtcPrimitivesRedeemRedeemRequestStatus',
      },
      MintTokensForReimbursedRedeem: {
        redeemId: 'H256',
        vaultId: 'InterbtcPrimitivesVaultId',
        amount: 'u128',
      },
      RedeemPeriodChange: {
        period: 'u32',
      },
      SelfRedeem: {
        vaultId: 'InterbtcPrimitivesVaultId',
        amount: 'u128',
        fee: 'u128'
      }
    }
  },
  /**
   * Lookup531: interbtc_primitives::redeem::RedeemRequestStatus
   **/
  InterbtcPrimitivesRedeemRedeemRequestStatus: {
    _enum: {
      Pending: 'Null',
      Completed: 'Null',
      Reimbursed: 'bool',
      Retried: 'Null'
    }
  },
  /**
   * Lookup532: replace::pallet::Event<T>
   **/
  ReplaceEvent: {
    _enum: {
      RequestReplace: {
        oldVaultId: 'InterbtcPrimitivesVaultId',
        amount: 'u128',
        griefingCollateral: 'u128',
      },
      WithdrawReplace: {
        oldVaultId: 'InterbtcPrimitivesVaultId',
        withdrawnTokens: 'u128',
        withdrawnGriefingCollateral: 'u128',
      },
      AcceptReplace: {
        replaceId: 'H256',
        oldVaultId: 'InterbtcPrimitivesVaultId',
        newVaultId: 'InterbtcPrimitivesVaultId',
        amount: 'u128',
        collateral: 'u128',
        btcAddress: 'BitcoinAddress',
      },
      ExecuteReplace: {
        replaceId: 'H256',
        oldVaultId: 'InterbtcPrimitivesVaultId',
        newVaultId: 'InterbtcPrimitivesVaultId',
      },
      CancelReplace: {
        replaceId: 'H256',
        newVaultId: 'InterbtcPrimitivesVaultId',
        oldVaultId: 'InterbtcPrimitivesVaultId',
        griefingCollateral: 'u128',
      },
      ReplacePeriodChange: {
        period: 'u32'
      }
    }
  },
  /**
   * Lookup533: vault_registry::pallet::Event<T>
   **/
  VaultRegistryEvent: {
    _enum: {
      RegisterVault: {
        vaultId: 'InterbtcPrimitivesVaultId',
        collateral: 'u128',
      },
      IncreaseLockedCollateral: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        delta: 'u128',
        total: 'u128',
      },
      DecreaseLockedCollateral: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        delta: 'u128',
        total: 'u128',
      },
      UpdatePublicKey: {
        accountId: 'AccountId32',
        publicKey: 'BitcoinAddressPublicKey',
      },
      RegisterAddress: {
        vaultId: 'InterbtcPrimitivesVaultId',
        address: 'BitcoinAddress',
      },
      IncreaseToBeIssuedTokens: {
        vaultId: 'InterbtcPrimitivesVaultId',
        increase: 'u128',
      },
      DecreaseToBeIssuedTokens: {
        vaultId: 'InterbtcPrimitivesVaultId',
        decrease: 'u128',
      },
      IssueTokens: {
        vaultId: 'InterbtcPrimitivesVaultId',
        increase: 'u128',
      },
      IncreaseToBeRedeemedTokens: {
        vaultId: 'InterbtcPrimitivesVaultId',
        increase: 'u128',
      },
      DecreaseToBeRedeemedTokens: {
        vaultId: 'InterbtcPrimitivesVaultId',
        decrease: 'u128',
      },
      IncreaseToBeReplacedTokens: {
        vaultId: 'InterbtcPrimitivesVaultId',
        increase: 'u128',
      },
      DecreaseToBeReplacedTokens: {
        vaultId: 'InterbtcPrimitivesVaultId',
        decrease: 'u128',
      },
      DecreaseTokens: {
        vaultId: 'InterbtcPrimitivesVaultId',
        userId: 'AccountId32',
        decrease: 'u128',
      },
      RedeemTokens: {
        vaultId: 'InterbtcPrimitivesVaultId',
        redeemedAmount: 'u128',
      },
      RedeemTokensPremium: {
        vaultId: 'InterbtcPrimitivesVaultId',
        redeemedAmount: 'u128',
        collateral: 'u128',
        userId: 'AccountId32',
      },
      RedeemTokensLiquidatedVault: {
        vaultId: 'InterbtcPrimitivesVaultId',
        tokens: 'u128',
        collateral: 'u128',
      },
      RedeemTokensLiquidation: {
        redeemerId: 'AccountId32',
        burnedTokens: 'u128',
        transferredCollateral: 'u128',
      },
      ReplaceTokens: {
        oldVaultId: 'InterbtcPrimitivesVaultId',
        newVaultId: 'InterbtcPrimitivesVaultId',
        amount: 'u128',
        additionalCollateral: 'u128',
      },
      LiquidateVault: {
        vaultId: 'InterbtcPrimitivesVaultId',
        issuedTokens: 'u128',
        toBeIssuedTokens: 'u128',
        toBeRedeemedTokens: 'u128',
        toBeReplacedTokens: 'u128',
        backingCollateral: 'u128',
        status: 'VaultRegistryVaultStatus',
        replaceCollateral: 'u128',
      },
      BanVault: {
        vaultId: 'InterbtcPrimitivesVaultId',
        bannedUntil: 'u32',
      },
      SetAcceptNewIssues: {
        vaultId: 'InterbtcPrimitivesVaultId',
        acceptNewIssues: 'bool',
      },
      SetSecureCollateralThreshold: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        threshold: 'u128',
      },
      SetPremiumRedeemThreshold: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        threshold: 'u128',
      },
      SetLiquidationCollateralThreshold: {
        currencyPair: 'InterbtcPrimitivesVaultCurrencyPair',
        threshold: 'u128',
      },
      SetCustomSecureThreshold: {
        vaultId: 'InterbtcPrimitivesVaultId',
        customThreshold: 'Option<u128>'
      }
    }
  },
  /**
   * Lookup534: vault_registry::types::VaultStatus
   **/
  VaultRegistryVaultStatus: {
    _enum: {
      Active: 'bool',
      Liquidated: 'Null'
    }
  },
  /**
   * Lookup535: reward::pallet::Event<T, I>
   **/
  RewardEvent: {
    _enum: {
      DepositStake: {
        poolId: 'InterbtcPrimitivesCurrencyId',
        stakeId: 'InterbtcPrimitivesVaultId',
        amount: 'i128',
      },
      DistributeReward: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'i128',
      },
      WithdrawStake: {
        poolId: 'InterbtcPrimitivesCurrencyId',
        stakeId: 'InterbtcPrimitivesVaultId',
        amount: 'i128',
      },
      WithdrawReward: {
        poolId: 'InterbtcPrimitivesCurrencyId',
        stakeId: 'InterbtcPrimitivesVaultId',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'i128'
      }
    }
  },
  /**
   * Lookup538: staking::pallet::Event<T>
   **/
  StakingEvent: {
    _enum: {
      DepositStake: {
        vaultId: 'InterbtcPrimitivesVaultId',
        nominatorId: 'AccountId32',
        amount: 'i128',
      },
      DistributeReward: {
        currencyId: 'InterbtcPrimitivesCurrencyId',
        vaultId: 'InterbtcPrimitivesVaultId',
        amount: 'i128',
      },
      WithdrawStake: {
        vaultId: 'InterbtcPrimitivesVaultId',
        nominatorId: 'AccountId32',
        amount: 'i128',
      },
      WithdrawReward: {
        nonce: 'u32',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        vaultId: 'InterbtcPrimitivesVaultId',
        nominatorId: 'AccountId32',
        amount: 'i128',
      },
      ForceRefund: {
        vaultId: 'InterbtcPrimitivesVaultId',
      },
      IncreaseNonce: {
        vaultId: 'InterbtcPrimitivesVaultId',
        newNonce: 'u32'
      }
    }
  },
  /**
   * Lookup540: nomination::pallet::Event<T>
   **/
  NominationEvent: {
    _enum: {
      NominationOptIn: {
        vaultId: 'InterbtcPrimitivesVaultId',
      },
      NominationOptOut: {
        vaultId: 'InterbtcPrimitivesVaultId',
      },
      DepositCollateral: {
        vaultId: 'InterbtcPrimitivesVaultId',
        nominatorId: 'AccountId32',
        amount: 'u128',
      },
      WithdrawCollateral: {
        vaultId: 'InterbtcPrimitivesVaultId',
        nominatorId: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup541: clients_info::pallet::Event<T>
   **/
  ClientsInfoEvent: {
    _enum: {
      NotifyClientRelease: {
        release: 'ClientsInfoClientRelease',
      },
      ApplyClientRelease: {
        release: 'ClientsInfoClientRelease'
      }
    }
  },
  /**
   * Lookup542: loans::pallet::Event<T>
   **/
  LoansEvent: {
    _enum: {
      DepositCollateral: {
        accountId: 'AccountId32',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'u128',
      },
      WithdrawCollateral: {
        accountId: 'AccountId32',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'u128',
      },
      Deposited: {
        accountId: 'AccountId32',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'u128',
      },
      Redeemed: {
        accountId: 'AccountId32',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'u128',
      },
      Borrowed: {
        accountId: 'AccountId32',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'u128',
      },
      RepaidBorrow: {
        accountId: 'AccountId32',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'u128',
      },
      LiquidatedBorrow: {
        liquidator: 'AccountId32',
        borrower: 'AccountId32',
        liquidationCurrencyId: 'InterbtcPrimitivesCurrencyId',
        collateralCurrencyId: 'InterbtcPrimitivesCurrencyId',
        repayAmount: 'u128',
        collateralUnderlyingAmount: 'u128',
      },
      ReservesReduced: {
        receiver: 'AccountId32',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'u128',
        newReserveAmount: 'u128',
      },
      ReservesAdded: {
        payer: 'AccountId32',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'u128',
        newReserveAmount: 'u128',
      },
      NewMarket: {
        underlyingCurrencyId: 'InterbtcPrimitivesCurrencyId',
        market: 'LoansMarket',
      },
      ActivatedMarket: {
        underlyingCurrencyId: 'InterbtcPrimitivesCurrencyId',
      },
      UpdatedMarket: {
        underlyingCurrencyId: 'InterbtcPrimitivesCurrencyId',
        market: 'LoansMarket',
      },
      RewardAdded: {
        payer: 'AccountId32',
        amount: 'u128',
      },
      RewardWithdrawn: {
        receiver: 'AccountId32',
        amount: 'u128',
      },
      MarketRewardSpeedUpdated: {
        underlyingCurrencyId: 'InterbtcPrimitivesCurrencyId',
        supplyRewardPerBlock: 'u128',
        borrowRewardPerBlock: 'u128',
      },
      DistributedSupplierReward: {
        underlyingCurrencyId: 'InterbtcPrimitivesCurrencyId',
        supplier: 'AccountId32',
        rewardDelta: 'u128',
        supplyRewardIndex: 'u128',
      },
      DistributedBorrowerReward: {
        underlyingCurrencyId: 'InterbtcPrimitivesCurrencyId',
        borrower: 'AccountId32',
        rewardDelta: 'u128',
        borrowRewardIndex: 'u128',
      },
      RewardPaid: {
        receiver: 'AccountId32',
        amount: 'u128',
      },
      IncentiveReservesReduced: {
        receiver: 'AccountId32',
        currencyId: 'InterbtcPrimitivesCurrencyId',
        amount: 'u128',
      },
      InterestAccrued: {
        underlyingCurrencyId: 'InterbtcPrimitivesCurrencyId',
        totalBorrows: 'u128',
        totalReserves: 'u128',
        borrowIndex: 'u128',
        utilizationRatio: 'Permill',
        borrowRate: 'u128',
        supplyRate: 'u128',
        exchangeRate: 'u128'
      }
    }
  },
  /**
   * Lookup543: pallet_dex::pallet::Event<T>
   **/
  PalletDexEvent: {
    _enum: {
      SubmitProcessedReceipts: {
        blockNumber: 'u64',
      },
      OrderCreated: {
        orderIndex: 'u64',
        order: 'PalletDexOrder',
      },
      OrderTaken: {
        account: 'AccountId32',
        orderIndex: 'u64',
        order: 'PalletDexOrder',
      },
      OrderCanceled: {
        orderIndex: 'u64',
      },
      Deposited: {
        assetId: 'u32',
        amount: 'u128',
      },
      Withdrawed: {
        assetId: 'u32',
        amount: 'u128',
      },
      NativeDeposited: {
        amount: 'u128',
      },
      NativeWithdrawed: {
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup544: pallet_dex::Order<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletDexOrder: {
    counter: 'u64',
    address: 'AccountId32',
    pair: '(u32,u32)',
    expirationBlock: 'u32',
    orderType: 'PalletDexOrderType',
    amountOffered: 'u128',
    amoutRequested: 'u128'
  },
  /**
   * Lookup545: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup547: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup548: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup549: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup550: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup551: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup552: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup553: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup554: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup558: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup559: runtime_common::chain_spec::RuntimeConfig
   **/
  RuntimeCommonChainSpecRuntimeConfig: {
    blockTimeInMillis: 'u64',
    sessionTimeInSeconds: 'u64'
  },
  /**
   * Lookup561: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup562: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup565: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup568: pallet_balances::types::IdAmount<Id, Balance>
   **/
  PalletBalancesIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup570: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes']
  },
  /**
   * Lookup577: pallet_im_online::BoundedOpaqueNetworkState<PeerIdEncodingLimit, MultiAddrEncodingLimit, AddressesLimit>
   **/
  PalletImOnlineBoundedOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup582: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup583: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup584: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,PalletStakingExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup586: pallet_staking::StakingLedger<T>
   **/
  PalletStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingUnlockChunk>',
    claimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup588: pallet_staking::UnlockChunk<Balance>
   **/
  PalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup591: pallet_staking::Nominations<T>
   **/
  PalletStakingNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup593: pallet_staking::ActiveEraInfo
   **/
  PalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup594: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup599: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup601: pallet_staking::slashing::SlashingSpans
   **/
  PalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup602: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup605: pallet_staking::pallet::pallet::Error<T>
   **/
  PalletStakingPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow', 'BoundNotMet']
  },
  /**
   * Lookup609: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup610: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup611: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup612: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup614: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup615: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletAssetsAssetDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    freezer: 'AccountId32',
    supply: 'u128',
    deposit: 'u128',
    minBalance: 'u128',
    isSufficient: 'bool',
    accounts: 'u32',
    sufficients: 'u32',
    approvals: 'u32',
    status: 'PalletAssetsAssetStatus'
  },
  /**
   * Lookup616: pallet_assets::types::AssetStatus
   **/
  PalletAssetsAssetStatus: {
    _enum: ['Live', 'Frozen', 'Destroying']
  },
  /**
   * Lookup617: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra, sp_core::crypto::AccountId32>
   **/
  PalletAssetsAssetAccount: {
    balance: 'u128',
    status: 'PalletAssetsAccountStatus',
    reason: 'PalletAssetsExistenceReason',
    extra: 'Null'
  },
  /**
   * Lookup618: pallet_assets::types::AccountStatus
   **/
  PalletAssetsAccountStatus: {
    _enum: ['Liquid', 'Frozen', 'Blocked']
  },
  /**
   * Lookup619: pallet_assets::types::ExistenceReason<Balance, sp_core::crypto::AccountId32>
   **/
  PalletAssetsExistenceReason: {
    _enum: {
      Consumer: 'Null',
      Sufficient: 'Null',
      DepositHeld: 'u128',
      DepositRefunded: 'Null',
      DepositFrom: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup621: pallet_assets::types::Approval<Balance, DepositBalance>
   **/
  PalletAssetsApproval: {
    amount: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup622: pallet_assets::types::AssetMetadata<DepositBalance, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetsAssetMetadata: {
    deposit: 'u128',
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    isFrozen: 'bool'
  },
  /**
   * Lookup624: pallet_assets::pallet::Error<T, I>
   **/
  PalletAssetsError: {
    _enum: ['BalanceLow', 'NoAccount', 'NoPermission', 'Unknown', 'Frozen', 'InUse', 'BadWitness', 'MinBalanceZero', 'UnavailableConsumer', 'BadMetadata', 'Unapproved', 'WouldDie', 'AlreadyExists', 'NoDeposit', 'WouldBurn', 'LiveAsset', 'AssetNotLive', 'IncorrectStatus', 'NotFrozen', 'CallbackFailed']
  },
  /**
   * Lookup625: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup626: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup629: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup632: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup633: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup636: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<ggxchain_runtime_brooklyn::RuntimeCall>, BlockNumber, ggxchain_runtime_brooklyn::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'GgxchainRuntimeBrooklynOriginCaller'
  },
  /**
   * Lookup638: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup640: pallet_indices::pallet::Error<T>
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup643: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, ggxchain_runtime_brooklyn::pos::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'GgxchainRuntimeBrooklynPosProxyType',
    delay: 'u32'
  },
  /**
   * Lookup647: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup649: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup651: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup653: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup654: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup662: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup664: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup665: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup666: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup669: pallet_election_provider_multi_phase::ReadySolution<AccountId, MaxWinners>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: 'SpNposElectionsElectionScore',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup671: pallet_election_provider_multi_phase::RoundSnapshot<sp_core::crypto::AccountId32, DataProvider>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup677: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, ggxchain_runtime_brooklyn::pos::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
    callFee: 'u128'
  },
  /**
   * Lookup678: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed', 'FallbackFailed', 'BoundNotMet', 'TooManyWinners']
  },
  /**
   * Lookup679: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup680: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup681: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup683: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
   **/
  PalletConvictionVotingVoteVoting: {
    _enum: {
      Casting: 'PalletConvictionVotingVoteCasting',
      Delegating: 'PalletConvictionVotingVoteDelegating'
    }
  },
  /**
   * Lookup684: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
   **/
  PalletConvictionVotingVoteCasting: {
    votes: 'Vec<(u32,PalletConvictionVotingVoteAccountVote)>',
    delegations: 'PalletConvictionVotingDelegations',
    prior: 'PalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup688: pallet_conviction_voting::types::Delegations<Balance>
   **/
  PalletConvictionVotingDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup689: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletConvictionVotingVotePriorLock: '(u32,u128)',
  /**
   * Lookup690: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletConvictionVotingVoteDelegating: {
    balance: 'u128',
    target: 'AccountId32',
    conviction: 'PalletConvictionVotingConviction',
    delegations: 'PalletConvictionVotingDelegations',
    prior: 'PalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup694: pallet_conviction_voting::pallet::Error<T, I>
   **/
  PalletConvictionVotingError: {
    _enum: ['NotOngoing', 'NotVoter', 'NoPermission', 'NoPermissionYet', 'AlreadyDelegating', 'AlreadyVoting', 'InsufficientFunds', 'NotDelegating', 'Nonsense', 'MaxVotesReached', 'ClassNeeded', 'BadClass']
  },
  /**
   * Lookup695: pallet_referenda::types::ReferendumInfo<TrackId, ggxchain_runtime_brooklyn::OriginCaller, Moment, frame_support::traits::preimages::Bounded<ggxchain_runtime_brooklyn::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfo: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatus',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup696: pallet_referenda::types::ReferendumStatus<TrackId, ggxchain_runtime_brooklyn::OriginCaller, Moment, frame_support::traits::preimages::Bounded<ggxchain_runtime_brooklyn::RuntimeCall>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatus: {
    track: 'u16',
    origin: 'GgxchainRuntimeBrooklynOriginCaller',
    proposal: 'FrameSupportPreimagesBounded',
    enactment: 'FrameSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PalletReferendaDeposit',
    decisionDeposit: 'Option<PalletReferendaDeposit>',
    deciding: 'Option<PalletReferendaDecidingStatus>',
    tally: 'PalletConvictionVotingTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup697: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
   **/
  PalletReferendaDeposit: {
    who: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup700: pallet_referenda::types::DecidingStatus<BlockNumber>
   **/
  PalletReferendaDecidingStatus: {
    since: 'u32',
    confirming: 'Option<u32>'
  },
  /**
   * Lookup708: pallet_referenda::types::TrackInfo<Balance, Moment>
   **/
  PalletReferendaTrackInfo: {
    name: 'Text',
    maxDeciding: 'u32',
    decisionDeposit: 'u128',
    preparePeriod: 'u32',
    decisionPeriod: 'u32',
    confirmPeriod: 'u32',
    minEnactmentPeriod: 'u32',
    minApproval: 'PalletReferendaCurve',
    minSupport: 'PalletReferendaCurve'
  },
  /**
   * Lookup709: pallet_referenda::types::Curve
   **/
  PalletReferendaCurve: {
    _enum: {
      LinearDecreasing: {
        length: 'Perbill',
        floor: 'Perbill',
        ceil: 'Perbill',
      },
      SteppedDecreasing: {
        begin: 'Perbill',
        end: 'Perbill',
        step: 'Perbill',
        period: 'Perbill',
      },
      Reciprocal: {
        factor: 'i64',
        xOffset: 'i64',
        yOffset: 'i64'
      }
    }
  },
  /**
   * Lookup711: pallet_referenda::pallet::Error<T, I>
   **/
  PalletReferendaError: {
    _enum: ['NotOngoing', 'HasDeposit', 'BadTrack', 'Full', 'QueueEmpty', 'BadReferendum', 'NothingToDo', 'NoTrack', 'Unfinished', 'NoPermission', 'NoDeposit', 'BadStatus', 'PreimageNotExist']
  },
  /**
   * Lookup712: pallet_whitelist::pallet::Error<T>
   **/
  PalletWhitelistError: {
    _enum: ['UnavailablePreImage', 'UndecodableCall', 'InvalidCallWeightWitness', 'CallIsNotWhitelisted', 'CallAlreadyWhitelisted']
  },
  /**
   * Lookup714: pallet_society::Bid<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBid: {
    who: 'AccountId32',
    kind: 'PalletSocietyBidKind',
    value: 'u128'
  },
  /**
   * Lookup715: pallet_society::BidKind<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBidKind: {
    _enum: {
      Deposit: 'u128',
      Vouch: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup717: pallet_society::VouchingStatus
   **/
  PalletSocietyVouchingStatus: {
    _enum: ['Vouching', 'Banned']
  },
  /**
   * Lookup719: pallet_society::Vote
   **/
  PalletSocietyVote: {
    _enum: ['Skeptic', 'Reject', 'Approve']
  },
  /**
   * Lookup720: pallet_society::pallet::Error<T, I>
   **/
  PalletSocietyError: {
    _enum: ['BadPosition', 'NotMember', 'AlreadyMember', 'Suspended', 'NotSuspended', 'NoPayout', 'AlreadyFounded', 'InsufficientPot', 'AlreadyVouching', 'NotVouching', 'Head', 'Founder', 'AlreadyBid', 'AlreadyCandidate', 'NotCandidate', 'MaxMembers', 'NotFounder', 'NotHead']
  },
  /**
   * Lookup721: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup724: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup727: fp_rpc::TransactionStatus
   **/
  FpRpcTransactionStatus: {
    transactionHash: 'H256',
    transactionIndex: 'u32',
    from: 'H160',
    to: 'Option<H160>',
    contractAddress: 'Option<H160>',
    logs: 'Vec<EthereumLog>',
    logsBloom: 'EthbloomBloom'
  },
  /**
   * Lookup730: ethereum::receipt::ReceiptV3
   **/
  EthereumReceiptReceiptV3: {
    _enum: {
      Legacy: 'EthereumReceiptEip658ReceiptData',
      EIP2930: 'EthereumReceiptEip658ReceiptData',
      EIP1559: 'EthereumReceiptEip658ReceiptData'
    }
  },
  /**
   * Lookup731: ethereum::receipt::EIP658ReceiptData
   **/
  EthereumReceiptEip658ReceiptData: {
    statusCode: 'u8',
    usedGas: 'U256',
    logsBloom: 'EthbloomBloom',
    logs: 'Vec<EthereumLog>'
  },
  /**
   * Lookup732: ethereum::block::Block<ethereum::transaction::TransactionV2>
   **/
  EthereumBlock: {
    header: 'EthereumHeader',
    transactions: 'Vec<EthereumTransactionTransactionV2>',
    ommers: 'Vec<EthereumHeader>'
  },
  /**
   * Lookup733: ethereum::header::Header
   **/
  EthereumHeader: {
    parentHash: 'H256',
    ommersHash: 'H256',
    beneficiary: 'H160',
    stateRoot: 'H256',
    transactionsRoot: 'H256',
    receiptsRoot: 'H256',
    logsBloom: 'EthbloomBloom',
    difficulty: 'U256',
    number: 'U256',
    gasLimit: 'U256',
    gasUsed: 'U256',
    timestamp: 'u64',
    extraData: 'Bytes',
    mixHash: 'H256',
    nonce: 'EthereumTypesHashH64'
  },
  /**
   * Lookup738: pallet_ethereum::pallet::Error<T>
   **/
  PalletEthereumError: {
    _enum: ['InvalidSignature', 'PreLogExists']
  },
  /**
   * Lookup739: pallet_evm::CodeMetadata
   **/
  PalletEvmCodeMetadata: {
    _alias: {
      size_: 'size',
      hash_: 'hash'
    },
    size_: 'u64',
    hash_: 'H256'
  },
  /**
   * Lookup741: pallet_evm::pallet::Error<T>
   **/
  PalletEvmError: {
    _enum: ['BalanceLow', 'FeeOverflow', 'PaymentOverflow', 'WithdrawFailed', 'GasPriceTooLow', 'InvalidNonce', 'GasLimitTooLow', 'GasLimitTooHigh', 'Undefined', 'Reentrancy', 'TransactionMustComeFromEOA']
  },
  /**
   * Lookup742: pallet_hotfix_sufficients::pallet::Error<T>
   **/
  PalletHotfixSufficientsError: {
    _enum: ['MaxAddressCountExceeded']
  },
  /**
   * Lookup743: runtime_common::pos::currency::pallet::Error<T>
   **/
  RuntimeCommonPosCurrencyPalletError: {
    _enum: ['InflationAlreadyDecayedThisYear']
  },
  /**
   * Lookup745: runtime_common::pos::session_payout::pallet::Error<T>
   **/
  RuntimeCommonPosSessionPayoutPalletError: {
    _enum: ['NotStash', 'NotController']
  },
  /**
   * Lookup746: substrate_account_filter::pallet::Error<T>
   **/
  SubstrateAccountFilterError: {
    _enum: ['AlreadyAllowed', 'DuplicateVote', 'NotAllowedToVote', 'VotesCounterOverflow', 'AllowedAccountsOverflow']
  },
  /**
   * Lookup748: pallet_contracts::wasm::PrefabWasmModule<T>
   **/
  PalletContractsWasmPrefabWasmModule: {
    instructionWeightsVersion: 'Compact<u32>',
    initial: 'Compact<u32>',
    maximum: 'Compact<u32>',
    code: 'Bytes',
    determinism: 'PalletContractsWasmDeterminism'
  },
  /**
   * Lookup750: pallet_contracts::wasm::OwnerInfo<T>
   **/
  PalletContractsWasmOwnerInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>'
  },
  /**
   * Lookup751: pallet_contracts::storage::ContractInfo<T>
   **/
  PalletContractsStorageContractInfo: {
    trieId: 'Bytes',
    depositAccount: 'AccountId32',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128'
  },
  /**
   * Lookup753: pallet_contracts::storage::DeletionQueueManager<T>
   **/
  PalletContractsStorageDeletionQueueManager: {
    insertCounter: 'u32',
    deleteCounter: 'u32'
  },
  /**
   * Lookup754: pallet_contracts::schedule::Schedule<T>
   **/
  PalletContractsSchedule: {
    limits: 'PalletContractsScheduleLimits',
    instructionWeights: 'PalletContractsScheduleInstructionWeights',
    hostFnWeights: 'PalletContractsScheduleHostFnWeights'
  },
  /**
   * Lookup755: pallet_contracts::schedule::Limits
   **/
  PalletContractsScheduleLimits: {
    eventTopics: 'u32',
    globals: 'u32',
    locals: 'u32',
    parameters: 'u32',
    memoryPages: 'u32',
    tableSize: 'u32',
    brTableSize: 'u32',
    subjectLen: 'u32',
    payloadLen: 'u32',
    runtimeMemory: 'u32'
  },
  /**
   * Lookup756: pallet_contracts::schedule::InstructionWeights<T>
   **/
  PalletContractsScheduleInstructionWeights: {
    _alias: {
      r_if: 'r#if'
    },
    version: 'u32',
    fallback: 'u32',
    i64const: 'u32',
    i64load: 'u32',
    i64store: 'u32',
    select: 'u32',
    r_if: 'u32',
    br: 'u32',
    brIf: 'u32',
    brTable: 'u32',
    brTablePerEntry: 'u32',
    call: 'u32',
    callIndirect: 'u32',
    callPerLocal: 'u32',
    localGet: 'u32',
    localSet: 'u32',
    localTee: 'u32',
    globalGet: 'u32',
    globalSet: 'u32',
    memoryCurrent: 'u32',
    memoryGrow: 'u32',
    i64clz: 'u32',
    i64ctz: 'u32',
    i64popcnt: 'u32',
    i64eqz: 'u32',
    i64extendsi32: 'u32',
    i64extendui32: 'u32',
    i32wrapi64: 'u32',
    i64eq: 'u32',
    i64ne: 'u32',
    i64lts: 'u32',
    i64ltu: 'u32',
    i64gts: 'u32',
    i64gtu: 'u32',
    i64les: 'u32',
    i64leu: 'u32',
    i64ges: 'u32',
    i64geu: 'u32',
    i64add: 'u32',
    i64sub: 'u32',
    i64mul: 'u32',
    i64divs: 'u32',
    i64divu: 'u32',
    i64rems: 'u32',
    i64remu: 'u32',
    i64and: 'u32',
    i64or: 'u32',
    i64xor: 'u32',
    i64shl: 'u32',
    i64shrs: 'u32',
    i64shru: 'u32',
    i64rotl: 'u32',
    i64rotr: 'u32'
  },
  /**
   * Lookup757: pallet_contracts::schedule::HostFnWeights<T>
   **/
  PalletContractsScheduleHostFnWeights: {
    _alias: {
      r_return: 'r#return'
    },
    caller: 'SpWeightsWeightV2Weight',
    isContract: 'SpWeightsWeightV2Weight',
    codeHash: 'SpWeightsWeightV2Weight',
    ownCodeHash: 'SpWeightsWeightV2Weight',
    callerIsOrigin: 'SpWeightsWeightV2Weight',
    callerIsRoot: 'SpWeightsWeightV2Weight',
    address: 'SpWeightsWeightV2Weight',
    gasLeft: 'SpWeightsWeightV2Weight',
    balance: 'SpWeightsWeightV2Weight',
    valueTransferred: 'SpWeightsWeightV2Weight',
    minimumBalance: 'SpWeightsWeightV2Weight',
    blockNumber: 'SpWeightsWeightV2Weight',
    now: 'SpWeightsWeightV2Weight',
    weightToFee: 'SpWeightsWeightV2Weight',
    gas: 'SpWeightsWeightV2Weight',
    input: 'SpWeightsWeightV2Weight',
    inputPerByte: 'SpWeightsWeightV2Weight',
    r_return: 'SpWeightsWeightV2Weight',
    returnPerByte: 'SpWeightsWeightV2Weight',
    terminate: 'SpWeightsWeightV2Weight',
    random: 'SpWeightsWeightV2Weight',
    depositEvent: 'SpWeightsWeightV2Weight',
    depositEventPerTopic: 'SpWeightsWeightV2Weight',
    depositEventPerByte: 'SpWeightsWeightV2Weight',
    debugMessage: 'SpWeightsWeightV2Weight',
    debugMessagePerByte: 'SpWeightsWeightV2Weight',
    setStorage: 'SpWeightsWeightV2Weight',
    setStoragePerNewByte: 'SpWeightsWeightV2Weight',
    setStoragePerOldByte: 'SpWeightsWeightV2Weight',
    setCodeHash: 'SpWeightsWeightV2Weight',
    clearStorage: 'SpWeightsWeightV2Weight',
    clearStoragePerByte: 'SpWeightsWeightV2Weight',
    containsStorage: 'SpWeightsWeightV2Weight',
    containsStoragePerByte: 'SpWeightsWeightV2Weight',
    getStorage: 'SpWeightsWeightV2Weight',
    getStoragePerByte: 'SpWeightsWeightV2Weight',
    takeStorage: 'SpWeightsWeightV2Weight',
    takeStoragePerByte: 'SpWeightsWeightV2Weight',
    transfer: 'SpWeightsWeightV2Weight',
    call: 'SpWeightsWeightV2Weight',
    delegateCall: 'SpWeightsWeightV2Weight',
    callTransferSurcharge: 'SpWeightsWeightV2Weight',
    callPerClonedByte: 'SpWeightsWeightV2Weight',
    instantiate: 'SpWeightsWeightV2Weight',
    instantiateTransferSurcharge: 'SpWeightsWeightV2Weight',
    instantiatePerInputByte: 'SpWeightsWeightV2Weight',
    instantiatePerSaltByte: 'SpWeightsWeightV2Weight',
    hashSha2256: 'SpWeightsWeightV2Weight',
    hashSha2256PerByte: 'SpWeightsWeightV2Weight',
    hashKeccak256: 'SpWeightsWeightV2Weight',
    hashKeccak256PerByte: 'SpWeightsWeightV2Weight',
    hashBlake2256: 'SpWeightsWeightV2Weight',
    hashBlake2256PerByte: 'SpWeightsWeightV2Weight',
    hashBlake2128: 'SpWeightsWeightV2Weight',
    hashBlake2128PerByte: 'SpWeightsWeightV2Weight',
    ecdsaRecover: 'SpWeightsWeightV2Weight',
    ecdsaToEthAddress: 'SpWeightsWeightV2Weight',
    sr25519Verify: 'SpWeightsWeightV2Weight',
    sr25519VerifyPerByte: 'SpWeightsWeightV2Weight',
    reentranceCount: 'SpWeightsWeightV2Weight',
    accountReentranceCount: 'SpWeightsWeightV2Weight',
    instantiationNonce: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup758: pallet_contracts::pallet::Error<T>
   **/
  PalletContractsError: {
    _enum: ['InvalidScheduleVersion', 'InvalidCallFlags', 'OutOfGas', 'OutputBufferTooSmall', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeTooLarge', 'CodeNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'RandomSubjectTooLong', 'TooManyTopics', 'NoChainExtension', 'DuplicateContract', 'TerminatedInConstructor', 'ReentranceDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected', 'Indeterministic']
  },
  /**
   * Lookup761: ibc::core::ics24_host::path::ClientConsensusStatePath
   **/
  IbcCoreIcs24HostPathClientConsensusStatePath: {
    clientId: 'Text',
    epoch: 'u64',
    height: 'u64'
  },
  /**
   * Lookup763: ibc::core::ics03_connection::connection::sealed::ConnectionEnd
   **/
  IbcCoreIcs03ConnectionConnectionSealedConnectionEnd: {
    state: 'IbcCoreIcs03ConnectionConnectionState',
    clientId: 'Text',
    counterparty: 'IbcCoreIcs03ConnectionConnectionCounterparty',
    versions: 'Vec<IbcCoreIcs03ConnectionVersion>',
    delayPeriodSecs: 'u64',
    delayPeriodNanos: 'u32'
  },
  /**
   * Lookup764: ibc::core::ics03_connection::connection::State
   **/
  IbcCoreIcs03ConnectionConnectionState: {
    _enum: ['Uninitialized', 'Init', 'TryOpen', 'Open']
  },
  /**
   * Lookup765: ibc::core::ics03_connection::connection::Counterparty
   **/
  IbcCoreIcs03ConnectionConnectionCounterparty: {
    clientId: 'Text',
    connectionId: 'Option<Text>',
    prefix: 'IbcCoreIcs23CommitmentCommitmentCommitmentPrefix'
  },
  /**
   * Lookup766: ibc::core::ics23_commitment::commitment::CommitmentPrefix
   **/
  IbcCoreIcs23CommitmentCommitmentCommitmentPrefix: {
    bytes: 'Bytes'
  },
  /**
   * Lookup768: ibc::core::ics03_connection::version::Version
   **/
  IbcCoreIcs03ConnectionVersion: {
    identifier: 'Text',
    features: 'Vec<Text>'
  },
  /**
   * Lookup770: ibc::core::ics24_host::path::ChannelEndsPath
   **/
  IbcCoreIcs24HostPathChannelEndsPath: '(Text,Text)',
  /**
   * Lookup771: ibc::core::ics04_channel::channel::ChannelEnd
   **/
  IbcCoreIcs04ChannelChannelChannelEnd: {
    state: 'IbcCoreIcs04ChannelChannelState',
    ordering: 'IbcCoreIcs04ChannelChannelOrder',
    remote: 'IbcCoreIcs04ChannelChannelCounterparty',
    connectionHops: 'Vec<Text>',
    version: 'Text'
  },
  /**
   * Lookup772: ibc::core::ics04_channel::channel::State
   **/
  IbcCoreIcs04ChannelChannelState: {
    _enum: ['Uninitialized', 'Init', 'TryOpen', 'Open', 'Closed']
  },
  /**
   * Lookup773: ibc::core::ics04_channel::channel::Counterparty
   **/
  IbcCoreIcs04ChannelChannelCounterparty: {
    portId: 'Text',
    channelId: 'Option<Text>'
  },
  /**
   * Lookup778: ibc::core::ics24_host::path::SeqSendsPath
   **/
  IbcCoreIcs24HostPathSeqSendsPath: '(Text,Text)',
  /**
   * Lookup779: ibc::core::ics24_host::path::SeqRecvsPath
   **/
  IbcCoreIcs24HostPathSeqRecvsPath: '(Text,Text)',
  /**
   * Lookup780: ibc::core::ics24_host::path::SeqAcksPath
   **/
  IbcCoreIcs24HostPathSeqAcksPath: '(Text,Text)',
  /**
   * Lookup781: ibc::core::ics24_host::path::AcksPath
   **/
  IbcCoreIcs24HostPathAcksPath: {
    portId: 'Text',
    channelId: 'Text',
    sequence: 'u64'
  },
  /**
   * Lookup784: ibc::core::ics24_host::path::ReceiptsPath
   **/
  IbcCoreIcs24HostPathReceiptsPath: {
    portId: 'Text',
    channelId: 'Text',
    sequence: 'u64'
  },
  /**
   * Lookup785: ibc::core::ics04_channel::packet::Receipt
   **/
  IbcCoreIcs04ChannelPacketReceipt: {
    _enum: ['Ok']
  },
  /**
   * Lookup786: ibc::core::ics24_host::path::CommitmentsPath
   **/
  IbcCoreIcs24HostPathCommitmentsPath: {
    portId: 'Text',
    channelId: 'Text',
    sequence: 'u64'
  },
  /**
   * Lookup788: pallet_ibc::pallet::Error<T>
   **/
  PalletIbcError: {
    _enum: ['DecodeStringFailed', 'UnknownClientType', 'InvalidPortId', 'InvalidChannelId', 'InvalidHeight', 'InvalidClientId', 'InvalidConnectionId', 'InvalidTimestamp', 'InvalidVersion', 'InvalidModuleId', 'Other']
  },
  /**
   * Lookup789: pallet_ics20_transfer::denom::PrefixedDenom
   **/
  PalletIcs20TransferDenomPrefixedDenom: {
    tracePath: 'Bytes',
    baseDenom: 'Bytes'
  },
  /**
   * Lookup790: pallet_ics20_transfer::pallet::Error<T>
   **/
  PalletIcs20TransferError: {
    _enum: ['ParserMsgTransferError', 'InvalidTokenId', 'WrongAssetId', 'DecodeStringFailed', 'TokenTransferError', 'DenomTraceNotFound']
  },
  /**
   * Lookup793: pallet_beefy::pallet::Error<T>
   **/
  PalletBeefyError: {
    _enum: ['InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup794: sp_consensus_beefy::mmr::BeefyAuthoritySet<primitive_types::H256>
   **/
  SpConsensusBeefyMmrBeefyAuthoritySet: {
    id: 'u64',
    len: 'u32',
    root: 'H256'
  },
  /**
   * Lookup796: eth_types::pallet::ClientMode
   **/
  EthTypesClientMode: {
    _enum: ['SubmitLightClientUpdate', 'SubmitHeader']
  },
  /**
   * Lookup797: webb_consensus_types::network_config::NetworkConfig
   **/
  WebbConsensusTypesNetworkConfig: {
    genesisValidatorsRoot: '[u8;32]',
    bellatrixForkVersion: '[u8;4]',
    bellatrixForkEpoch: 'u64',
    capellaForkVersion: '[u8;4]',
    capellaForkEpoch: 'u64'
  },
  /**
   * Lookup798: pallet_eth2_light_client::pallet::Error<T>
   **/
  PalletEth2LightClientError: {
    _enum: ['AlreadyInitialized', 'LightClientUpdateNotAllowed', 'BlockAlreadySubmitted', 'UnknownParentHeader', 'NotTrustedSigner', 'ValidateUpdatesParameterError', 'TrustlessModeError', 'InvalidSyncCommitteeBitsSum', 'SyncCommitteeBitsSumLessThanThreshold', 'InvalidNetworkConfig', 'InvalidBlsSignature', 'InvalidExecutionBlock', 'ActiveHeaderSlotLessThanFinalizedSlot', 'UpdateHeaderSlotLessThanFinalizedHeaderSlot', 'UpdateSignatureSlotLessThanAttestedHeaderSlot', 'InvalidUpdatePeriod', 'InvalidFinalityProof', 'InvalidExecutionBlockHashProof', 'NextSyncCommitteeNotPresent', 'InvalidNextSyncCommitteeProof', 'FinalizedExecutionHeaderNotPresent', 'FinalizedBeaconHeaderNotPresent', 'UnfinalizedHeaderNotPresent', 'SyncCommitteeUpdateNotPresent', 'HeaderHashDoesNotExist', 'BlockHashesDoNotMatch', 'InvalidSignaturePeriod', 'CurrentSyncCommitteeNotSet', 'NextSyncCommitteeNotSet', 'InvalidClientMode', 'HashesGcThresholdInsufficient', 'ChainCannotBeClosed']
  },
  /**
   * Lookup801: types::receipt::log::Log
   **/
  TypesReceiptLog: {
    address: 'TypesPrimitivesH160',
    topics: 'Vec<TypesPrimitivesH256>',
    data: 'Bytes'
  },
  /**
   * Lookup806: pallet_receipt_registry::pallet::Error<T>
   **/
  PalletReceiptRegistryError: {
    _enum: ['ConvertToStringFailed', 'DeserializeFail', 'HeaderHashDoesNotExist', 'BlockHashesDoNotMatch', 'VerifyProofFail', 'NoMonitoredAddressesForChain', 'TooManyAddresses']
  },
  /**
   * Lookup807: currency::pallet::Error<T>
   **/
  CurrencyError: {
    _enum: ['TryIntoIntError', 'InvalidCurrency']
  },
  /**
   * Lookup810: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup812: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup814: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup816: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup817: orml_asset_registry::module::Error<T>
   **/
  OrmlAssetRegistryModuleError: {
    _enum: ['AssetNotFound', 'BadVersion', 'InvalidAssetId', 'ConflictingLocation', 'ConflictingAssetId']
  },
  /**
   * Lookup818: btc_relay::types::RichBlockHeader<BlockNumber>
   **/
  BtcRelayRichBlockHeader: {
    blockHeader: 'BitcoinBlockHeader',
    blockHeight: 'u32',
    chainId: 'u32',
    paraHeight: 'u32'
  },
  /**
   * Lookup819: bitcoin::types::BlockChain
   **/
  BitcoinBlockChain: {
    chainId: 'u32',
    startHeight: 'u32',
    maxHeight: 'u32'
  },
  /**
   * Lookup820: btc_relay::pallet::Error<T>
   **/
  BtcRelayError: {
    _enum: ['AlreadyInitialized', 'InvalidStartHeight', 'MissingBlockHeight', 'InvalidHeaderSize', 'DuplicateBlock', 'PrevBlock', 'InvalidChainID', 'LowDiff', 'DiffTargetHeader', 'MalformedTxid', 'BitcoinConfirmations', 'ParachainConfirmations', 'OngoingFork', 'MalformedMerkleProof', 'InvalidMerkleProof', 'Shutdown', 'InvalidTxid', 'InvalidPaymentAmount', 'MalformedTransaction', 'InvalidPayment', 'InvalidOutputFormat', 'InvalidOpReturn', 'InvalidTxVersion', 'UnknownErrorcode', 'ForkIdNotFound', 'BlockNotFound', 'AlreadyReported', 'UnauthorizedRelayer', 'ChainCounterOverflow', 'BlockHeightOverflow', 'ChainsUnderflow', 'EndOfFile', 'MalformedHeader', 'InvalidBlockVersion', 'MalformedWitnessOutput', 'MalformedP2PKHOutput', 'MalformedP2SHOutput', 'MalformedOpReturnOutput', 'UnsupportedOutputFormat', 'UnsupportedInputFormat', 'InvalidBtcHash', 'InvalidScript', 'InvalidBtcAddress', 'ArithmeticOverflow', 'ArithmeticUnderflow', 'TryIntoIntError', 'InvalidTransaction', 'InvalidOpReturnTransaction', 'InvalidCompact', 'WrongForkBound', 'BoundExceeded', 'InvalidCoinbasePosition']
  },
  /**
   * Lookup821: security::pallet::Error<T>
   **/
  SecurityError: 'Null',
  /**
   * Lookup822: fee::types::Version
   **/
  FeeVersion: {
    _enum: ['V0']
  },
  /**
   * Lookup823: fee::pallet::Error<T>
   **/
  FeeError: {
    _enum: ['TryIntoIntError', 'AboveMaxExpectedValue']
  },
  /**
   * Lookup824: interbtc_primitives::issue::IssueRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, interbtc_primitives::CurrencyId>
   **/
  InterbtcPrimitivesIssueIssueRequest: {
    vault: 'InterbtcPrimitivesVaultId',
    opentime: 'u32',
    period: 'u32',
    griefingCollateral: 'u128',
    griefingCurrency: 'InterbtcPrimitivesCurrencyId',
    amount: 'u128',
    fee: 'u128',
    requester: 'AccountId32',
    btcAddress: 'BitcoinAddress',
    btcPublicKey: 'BitcoinAddressPublicKey',
    btcHeight: 'u32',
    status: 'InterbtcPrimitivesIssueIssueRequestStatus'
  },
  /**
   * Lookup825: interbtc_primitives::issue::IssueRequestStatus
   **/
  InterbtcPrimitivesIssueIssueRequestStatus: {
    _enum: ['Pending', 'Completed', 'Cancelled']
  },
  /**
   * Lookup826: issue::types::Version
   **/
  IssueVersion: {
    _enum: ['V0', 'V1', 'V2', 'V3', 'V4']
  },
  /**
   * Lookup827: issue::pallet::Error<T>
   **/
  IssueError: {
    _enum: ['IssueIdNotFound', 'CommitPeriodExpired', 'TimeNotExpired', 'IssueCompleted', 'IssueCancelled', 'VaultNotAcceptingNewIssues', 'WaitingForRelayerInitialization', 'InvalidExecutor', 'AmountBelowDustAmount']
  },
  /**
   * Lookup829: oracle::TimestampedValue<sp_arithmetic::fixed_point::FixedU128, Moment>
   **/
  OracleTimestampedValue: {
    value: 'u128',
    timestamp: 'u64'
  },
  /**
   * Lookup830: oracle::types::Version
   **/
  OracleVersion: {
    _enum: ['V0']
  },
  /**
   * Lookup831: oracle::pallet::Error<T>
   **/
  OracleError: {
    _enum: ['InvalidOracleSource', 'MissingExchangeRate', 'TryIntoIntError']
  },
  /**
   * Lookup832: interbtc_primitives::redeem::RedeemRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, interbtc_primitives::CurrencyId>
   **/
  InterbtcPrimitivesRedeemRedeemRequest: {
    vault: 'InterbtcPrimitivesVaultId',
    opentime: 'u32',
    period: 'u32',
    fee: 'u128',
    transferFeeBtc: 'u128',
    amountBtc: 'u128',
    premium: 'u128',
    redeemer: 'AccountId32',
    btcAddress: 'BitcoinAddress',
    btcHeight: 'u32',
    status: 'InterbtcPrimitivesRedeemRedeemRequestStatus'
  },
  /**
   * Lookup833: redeem::types::Version
   **/
  RedeemVersion: {
    _enum: ['V0']
  },
  /**
   * Lookup834: redeem::pallet::Error<T>
   **/
  RedeemError: {
    _enum: ['AmountExceedsUserBalance', 'UnauthorizedRedeemer', 'UnauthorizedVault', 'TimeNotExpired', 'RedeemCancelled', 'RedeemCompleted', 'RedeemIdNotFound', 'TryIntoIntError', 'AmountBelowDustAmount']
  },
  /**
   * Lookup835: interbtc_primitives::replace::ReplaceRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, interbtc_primitives::CurrencyId>
   **/
  InterbtcPrimitivesReplaceReplaceRequest: {
    oldVault: 'InterbtcPrimitivesVaultId',
    newVault: 'InterbtcPrimitivesVaultId',
    amount: 'u128',
    griefingCollateral: 'u128',
    collateral: 'u128',
    acceptTime: 'u32',
    period: 'u32',
    btcAddress: 'BitcoinAddress',
    btcHeight: 'u32',
    status: 'InterbtcPrimitivesReplaceReplaceRequestStatus'
  },
  /**
   * Lookup836: interbtc_primitives::replace::ReplaceRequestStatus
   **/
  InterbtcPrimitivesReplaceReplaceRequestStatus: {
    _enum: ['Pending', 'Completed', 'Cancelled']
  },
  /**
   * Lookup837: replace::types::Version
   **/
  ReplaceVersion: {
    _enum: ['V0']
  },
  /**
   * Lookup838: replace::pallet::Error<T>
   **/
  ReplaceError: {
    _enum: ['ReplaceAmountZero', 'AmountBelowDustAmount', 'NoPendingRequest', 'UnauthorizedVault', 'ReplaceSelfNotAllowed', 'VaultHasEnabledNomination', 'ReplacePeriodNotExpired', 'ReplaceCompleted', 'ReplaceCancelled', 'ReplaceIdNotFound', 'InvalidWrappedCurrency']
  },
  /**
   * Lookup839: vault_registry::types::SystemVault<Balance, interbtc_primitives::CurrencyId>
   **/
  VaultRegistrySystemVault: {
    toBeIssuedTokens: 'u128',
    issuedTokens: 'u128',
    toBeRedeemedTokens: 'u128',
    collateral: 'u128',
    currencyPair: 'InterbtcPrimitivesVaultCurrencyPair'
  },
  /**
   * Lookup840: vault_registry::types::Vault<sp_core::crypto::AccountId32, BlockNumber, Balance, interbtc_primitives::CurrencyId, sp_arithmetic::fixed_point::FixedU128>
   **/
  VaultRegistryVault: {
    id: 'InterbtcPrimitivesVaultId',
    status: 'VaultRegistryVaultStatus',
    bannedUntil: 'Option<u32>',
    secureCollateralThreshold: 'Option<u128>',
    toBeIssuedTokens: 'u128',
    issuedTokens: 'u128',
    toBeRedeemedTokens: 'u128',
    toBeReplacedTokens: 'u128',
    replaceCollateral: 'u128',
    activeReplaceCollateral: 'u128',
    liquidatedCollateral: 'u128'
  },
  /**
   * Lookup841: vault_registry::types::Version
   **/
  VaultRegistryVersion: {
    _enum: ['V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6']
  },
  /**
   * Lookup842: vault_registry::pallet::Error<T>
   **/
  VaultRegistryError: {
    _enum: ['InsufficientCollateral', 'ExceedingVaultLimit', 'InsufficientTokensCommitted', 'VaultBanned', 'InsufficientVaultCollateralAmount', 'VaultAlreadyRegistered', 'VaultNotFound', 'VaultNotBelowLiquidationThreshold', 'InvalidPublicKey', 'CurrencyCeilingExceeded', 'VaultLiquidated', 'VaultNotRecoverable', 'NoBitcoinPublicKey', 'PublicKeyAlreadyRegistered', 'NoTokensIssued', 'NoVaultWithSufficientCollateral', 'NoVaultWithSufficientTokens', 'NoVaultUnderThePremiumRedeemThreshold', 'InvalidCurrency', 'ThresholdNotSet', 'CeilingNotSet', 'ThresholdNotAboveGlobalThreshold', 'TryIntoIntError', 'VaultNotAcceptingIssueRequests', 'MinimumCollateralNotSet']
  },
  /**
   * Lookup849: reward::pallet::Error<T, I>
   **/
  RewardError: {
    _enum: ['TryIntoIntError', 'InsufficientFunds', 'ZeroTotalStake', 'MaxRewardCurrencies']
  },
  /**
   * Lookup856: staking::pallet::Error<T>
   **/
  StakingError: {
    _enum: ['TryIntoIntError', 'InsufficientFunds', 'SlashZeroTotalStake']
  },
  /**
   * Lookup861: nomination::pallet::Error<T>
   **/
  NominationError: {
    _enum: ['VaultAlreadyOptedInToNomination', 'VaultNotOptedInToNomination', 'VaultNotFound', 'CannotWithdrawCollateral', 'VaultNominationDisabled', 'NominationExceedsLimit', 'CollateralizationTooLow']
  },
  /**
   * Lookup862: clients_info::pallet::Error<T>
   **/
  ClientsInfoError: 'Null',
  /**
   * Lookup864: loans::types::BorrowSnapshot<Balance>
   **/
  LoansBorrowSnapshot: {
    principal: 'u128',
    borrowIndex: 'u128'
  },
  /**
   * Lookup865: loans::types::RewardMarketState<BlockNumber, Balance>
   **/
  LoansRewardMarketState: {
    index: 'u128',
    block: 'u32'
  },
  /**
   * Lookup866: loans::Versions
   **/
  LoansVersions: {
    _enum: ['V0']
  },
  /**
   * Lookup867: loans::pallet::Error<T>
   **/
  LoansError: {
    _enum: ['InsufficientLiquidity', 'InsufficientDeposit', 'TooMuchRepay', 'InsufficientCollateral', 'LiquidatorIsBorrower', 'DepositsAreNotCollateral', 'InsufficientShortfall', 'InsufficientReserves', 'InvalidRateModelParam', 'MarketNotActivated', 'InvalidLendTokenId', 'MarketDoesNotExist', 'MarketAlreadyActivated', 'MarketAlreadyExists', 'NewMarketMustHavePendingState', 'SupplyCapacityExceeded', 'BorrowCapacityExceeded', 'InsufficientCash', 'InvalidFactor', 'InvalidSupplyCap', 'InvalidExchangeRate', 'InvalidAmount', 'DepositAllCollateralFailed', 'WithdrawAllCollateralFailed', 'TokensAlreadyLocked', 'LockedTokensCannotBeRedeemed']
  },
  /**
   * Lookup868: pallet_dex::TokenInfo<Balance>
   **/
  PalletDexTokenInfo: {
    amount: 'u128',
    reserved: 'u128'
  },
  /**
   * Lookup873: pallet_dex::pallet::Error<T>
   **/
  PalletDexError: {
    _enum: ['OrderIndexOverflow', 'InvalidOrderIndex', 'InsufficientBalance', 'NotOwner', 'AssetIdNotInTokenIndex', 'AssetIdNotInTokenInfoes', 'TokenBalanceOverflow', 'WithdrawBalanceMustKeepOrderSellAmount', 'UserAssetNotExist', 'PairOrderNotFound', 'PairAssetIdMustNotEqual', 'NotEnoughBalance', 'ExpirationMustBeInFuture']
  },
  /**
   * Lookup875: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup877: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup878: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup879: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup882: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup883: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup884
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup885: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  // NOTE(Bohdan): comment because previous key has the same name
  // PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>'
};
