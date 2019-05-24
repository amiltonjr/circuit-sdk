// Type definitions for Circuit SDK v1.2.5603
// Project: circuit-sdk
// Definitions by: Amilton Junior <ttps://github.com/amiltonjr/circuit-sdk>

export namespace Circuit {

    export class AtcRemoteCall {
        constructor(conversation: any);

        isPresent(): any;

    }

    export class BaseCall {
        constructor(conversation: any, isRemote: any);

        addParticipant(participant: any, pcState: any, update: any): any;

        callHeaderType(): any;

        callTypeCss(): any;

        canToggleVideo(): any;

        checkCstaState(states: any): any;

        clearAtcHandoverInProgress(): void;

        clearHoldInProgress(): void;

        clearRetrieveInProgress(): void;

        getCstaState(): any;

        getParticipant(userId: any): any;

        getPosition(): any;

        getRedirectingUser(): any;

        getRedirectionType(): any;

        hasLocalScreenShare(): any;

        hasLocalVideo(): any;

        hasOtherParticipants(): any;

        hasParticipant(userId: any): any;

        hasRemoteMedia(): any;

        hasRemoteScreenShare(): any;

        hasRemoteVideo(): any;

        hasVideo(): any;

        isAtcConferenceCall(): any;

        isCallingOut(): any;

        isConferenceCallAllowed(): any;

        isConsultAllowed(): any;

        isEstablished(): any;

        isForwarded(): any;

        isHeld(): any;

        isHoldAllowed(): any;

        isHoldInProgress(): any;

        isHolding(): any;

        isMakeCallAllowed(): any;

        isMuted(): any;

        isOutgoingState(): any;

        isPickedUp(): any;

        isPickupNotification(): any;

        isPresent(): any;

        isReconnectAllowed(): any;

        isRetrieveAllowed(): any;

        isRetrieveInProgress(): any;

        isTransferAllowed(): any;

        isTransferCallAllowed(): any;

        mute(): any;

        outgoingFailed(): any;

        removeParticipant(userId: any): any;

        sameAs(call: any): any;

        setAtcHandoverInProgress(): void;

        setCstaState(state: any): void;

        setDisconnectCause(cause: any, reason: any): void;

        setHoldInProgress(): void;

        setParticipantState(userId: any, state: any): any;

        setPeerUsersAsParticipants(): any;

        setRedirectingUser(phoneNumber: any, fqNumber: any, displayName: any, userId: any, redirectionType: any): void;

        setRedirectionType(type: any): void;

        setRetrieveInProgress(): void;

        terminate(): void;

        toString(): any;

        toggleMute(): any;

        unmute(): any;

        updateMediaType(): void;

        updateParticipant(participant: any, pcState: any): any;

        updateSecurityStatus(status: any): void;

    }

    export class BaseEventTarget {
        constructor(logger: any);

        createEvent(type: any): any;

        dispatchEvent(type: any): void;

    }

    export class Client {
        constructor(config: any);

        addEventListener(e: any, evt: any);

        removeEventListener(e: any, evt: any);

    }

    export class ClientApiHandler {
        constructor(config: any);

    }

    export class ConnectionHandler {
        constructor(config: any);

    }

    export class ExtensionConnHandler {
        constructor();

    }

    export class IceCandidate {
        constructor(candidate: any);

        equals(other: any): any;

        getParsedAttribute(): any;

        getRelayClientTransportType(): any;

        getValue(): any;

        isRtcp(): any;

        isRtp(): any;

        isTcpTlsRelay(): any;

        toString(): any;

    }

    export class LocalCall {
        constructor(conversation: any, options: any);

        addParticipant(participant: any, ...args: any[]): any;

        clearHoldInProgress(): void;

        clearRetrieveInProgress(): void;

        hasLocalScreenShare(): any;

        hasRemoteMedia(): any;

        hasRemoteScreenShare(): any;

        isConsultAllowed(): any;

        isHoldInProgress(): any;

        isHolding(...args: any[]): any;

        isLocalMuteAllowed(): any;

        isMuted(): any;

        isRetrieveInProgress(): any;

        isTransferAllowed(): any;

        isTransferCallAllowed(): any;

        mute(cb: any): any;

        removeParticipant(...args: any[]): any;

        setActiveSpeakers(activeSpeakers: any): any;

        setHoldInProgress(): void;

        setParticipantRemoteVideoStream(participant: any): void;

        setRetrieveInProgress(): void;

        toggleMute(): any;

        unmute(cb: any): any;

        updateCallState(): void;

        updateParticipant(participant: any, ...args: any[]): any;

    }

    export class RemoteCall {
        constructor(conversation: any);

        setActiveClient(apiParticipant: any): void;

    }

    export class UserToUserHandler {
        constructor(clientApiHandler: any);

    }

    export const BusyHandlingOptions: {
        BusySignal: {
            name: string;
            ui: string;
        };
        DefaultRouting: {
            name: string;
            ui: string;
        };
        SendToAlternativeNumber: {
            name: string;
            ui: string;
        };
        SendToVM: {
            name: string;
            ui: string;
        };
    };

    export const CallStats: {
        audioOutputLevel: string;
        bytesReceived: string;
        bytesSent: string;
        googAvailableSendBandwidth: string;
        googFrameHeightReceived: string;
        googFrameHeightSent: string;
        googFrameRateDecoded: string;
        googFrameRateSent: string;
        googFrameWidthReceived: string;
        googFrameWidthSent: string;
        googJitterReceived: string;
        googResidualEchoLikelihoodRecentMax: string;
        googRtt: string;
        googTransmitBitrate: string;
        packetsLost: string;
        packetsReceived: string;
        packetsSent: string;
    };

    export const ChromeExtension: {
        BgExchangeMsgType: {
            AUTODISCOVER_GET_SERVER: string;
            CONNECT: string;
            CONNECTION_STATUS: string;
            CONTACT_FOLDERS_SYNC_STATE: string;
            DISCONNECT: string;
            GET_ALL_PERSONAL_CONTACTS: string;
            GET_APPOINTMENTS: string;
            GET_CAPABILITIES: string;
            GET_CONNECTION_STATUS: string;
            GET_CONTACT: string;
            GET_OOO_MSG: string;
            GET_RENEWED_TOKEN: string;
            GET_STORED_CREDENTIALS: string;
            ON_RENEWED_TOKEN: string;
            SEARCH_CONTACTS: string;
            STORE_EXCH_CREDENTIALS: string;
            SYNC_ALL_PERSONAL_CONTACTS: string;
        };
        BgHeadsetAppMsgType: {
            GET_HEADSET_APP_STATUS: string;
            HEADSET_APP_LAUNCHED: string;
            HEADSET_APP_UNINSTALLED: string;
            LAUNCH_HEADSET_APP: string;
            RESTART_HEADSET_APP: string;
        };
        BgInternalMsgType: {
            BRING_TO_FRONT: string;
            EXTENSION_DISCONNECTED: string;
            GET_FILE: string;
            GET_WINDOW_SIZE: string;
            INIT_MSG: string;
            INIT_MSG_ACK: string;
            INJECT_SIGNATURE: string;
            IS_ALIVE: string;
        };
        BgLogMsgType: {
            LOG: string;
        };
        BgMsgType: {
            EVENT: string;
            REQUEST: string;
            RESPONSE: string;
        };
        BgPrivacySettingsError: {
            CONTROLLED_BY_OTHER_EXTENSIONS: string;
            NOT_AUTHORIZED: string;
            NOT_CONTROLLABLE: string;
        };
        BgPrivacySettingsMsgType: {
            GET_IP_HANDLING_POLICY: string;
            IP_HANDLING_POLICY_CHANGED: string;
            SET_IP_HANDLING_POLICY: string;
        };
        BgScreenShareMsgType: {
            CHOOSE_DESKTOP_MEDIA: string;
            CHOOSE_DESKTOP_MEDIA_CANCELLED: string;
            CHOOSE_DESKTOP_MEDIA_DONE: string;
        };
        BgTarget: {
            EXCHANGE_CONNECTOR: string;
            HEADSET_APP: string;
            INTERNAL: string;
            LOG: string;
            PRIVACY_SETTINGS: string;
            SCREEN_SHARE: string;
        };
        DOMEvent: {
            FROM_EXTENSION: string;
            TO_EXTENSION: string;
        };
        Exchange: {
            CONFIGURED_PASSWORD_MASKED: string;
        };
        ExchangeConnResponse: {
            COULD_NOT_CONNECT: string;
            FAILED: string;
            MAILBOX_NOT_FOUND: string;
            NO_RESULT: string;
            NTLM_NOT_SUPPORTED: string;
            OK: string;
            TIMED_OUT: string;
            UNAUTHORIZED: string;
            UNSUPPORTED_METHOD: string;
        };
        HeadsetAppStatus: {
            DISABLED: string;
            INSTALLED: string;
            NOT_INSTALLED: string;
            NO_MANAGEMENT_PERMISSION: string;
            UNKNOWN: string;
        };
        PortMsg: {
            CONNECT: string;
            DISCONNECT: string;
            MSG: string;
        };
        ResponseError: {
            INTERNAL_ERROR: string;
            TIMEOUT: string;
            UNREGISTERED: string;
            UNSUPPORTED_REQUEST: string;
        };
        SIGNATURE: string;
    };

    export const Constants: {
        AccountActionType: {
            ADD_ACCOUNT_PERMISSION: string;
            ASSIGN_ACCOUNT_TEMPLATE: string;
            ASSIGN_TELEPHONY_CONFIGURATION: string;
            DELETE_TELEPHONY_CONFIGURATION: string;
            GET_ACCOUNTS: string;
            GET_ACCOUNT_BY_ID: string;
            GET_ACCOUNT_BY_USER_ID: string;
            GET_ASSIGNED_PACKAGES: string;
            GET_PACKAGE_TEMPLATES: string;
            GET_SEARCH_TAGS: string;
            GET_TECHNICAL_ADMIN_USER_ID: string;
            MIGRATE_ACCOUNT: string;
            MIGRATE_MULTIPLE_USERS: string;
            REMOVE_ACCOUNT_PERMISSION: string;
            RENEW_ASSOCIATED_TELEPHONY_USER: string;
            SUSPEND_ACCOUNT: string;
            UNSUSPEND_ACCOUNT: string;
            VALIDATE_ASSIGN_ACCOUNT_TEMPLATE: string;
            VALIDATE_MIGRATE_ACCOUNT: string;
        };
        AccountEventType: {
            MIGRATE_MULTIPLE_USERS: string;
            TC_BALANCING_NEEDED: string;
            TC_START_REASSIGNMENT: string;
            TELEPHONY_CONFIGURATION_UPDATED: string;
        };
        AccountStatus: {
            ACTIVE: string;
            CREATED: string;
            DELETED: string;
            INITIAL: string;
            INVITED: string;
            NONE: string;
            SUSPENDED: string;
        };
        AccountTemplateName: {
            ADMIN: string;
            MEETING_POINT: string;
            USER: string;
            XMPP_FEDERATED_USER: string;
        };
        ActivityStreamActionType: {
            CREATE_MENTION: string;
            GET_ACTIVITIES_BY_USER: string;
            GET_MENTIONS_BY_USER: string;
            MARK_ALL_READ: string;
            UPDATE_ACTIVITY_READ: string;
        };
        ActivityStreamEventType: {
            ACTIVITY_CREATED: string;
            ACTIVITY_DELETED: string;
            ACTIVITY_MARKED_READ: string;
            ACTIVITY_MARKED_UNREAD: string;
            ACTIVITY_MARK_ALL_READ: string;
        };
        AdminManagedCMRSettingKey: {
            AUTHENTICATION_PASSWORD: string;
            CMR_MANUAL_QOS_PORTS: string;
            CMR_TCP_AUDIO_DSCP: string;
            CMR_TCP_AUDIO_END_PORT: string;
            CMR_TCP_AUDIO_START_PORT: string;
            CMR_TCP_QOS: string;
            CMR_TCP_VIDEO_DSCP: string;
            CMR_TCP_VIDEO_END_PORT: string;
            CMR_TCP_VIDEO_START_PORT: string;
            CMR_UDP_AUDIO_DSCP: string;
            CMR_UDP_AUDIO_END_PORT: string;
            CMR_UDP_AUDIO_START_PORT: string;
            CMR_UDP_QOS: string;
            CMR_UDP_VIDEO_DSCP: string;
            CMR_UDP_VIDEO_END_PORT: string;
            CMR_UDP_VIDEO_START_PORT: string;
            DASHBOARD_PASSWORD: string;
            DATE: string;
            ENCRYPTION_PASSWORD: string;
            ENERGY_SAVING: string;
            MANUAL_TIME: string;
            NO_AUDIO_CONNECTED_ENABLED: string;
            NO_VIDEO_CONNECTED_ENABLED: string;
            NTP_SERVER: string;
            REMOTE_ACCESS: string;
            RESTART_PENDING: string;
            SNMP_USERNAME: string;
            SUSPEND_AFTER: string;
            SW_UPDATE_INFO: string;
            SW_UPDATE_PENDING: string;
            TIME: string;
            TIMEZONE: string;
            TRAPS_ENABLED: string;
            TRAP_DESTINATION_1: string;
            TRAP_DESTINATION_2: string;
        };
        AdministrationActionType: {
            ACTIVATE_INVITED_USER: string;
            ADD_API_TECHNICAL_USER: string;
            ADD_CLASSLESS_INTER_DOMAIN_ROUTING_BLOCK: string;
            ADD_CUSTOM_APP: string;
            ADD_MEETING_POINT: string;
            ADD_MEETING_POINT_V2: string;
            ADD_SYSTEM_NOTIFICATION: string;
            ADD_TELEPHONY_ROUTING_RULE: string;
            ADD_TELEPHONY_TRUNK_GROUP: string;
            ADD_TELEPHONY_TRUNK_TO_GROUP: string;
            ADD_TRUNK: string;
            ADD_TRUNK_WITHOUT_PARAMETERS: string;
            ADD_USER: string;
            ASSIGN_OPENSCAPE_ITSP_TO_SITE: string;
            CANCEL_TRUNK_SOFT_SUSPENSION: string;
            CHECK_INVALID_TENANTS: string;
            CREATE_APPLICATION_FRAMEWORK_CONFIGURATION: string;
            CREATE_AUTOMATED_ATTENDANT_CONFIGURATION: string;
            CREATE_EXECUTIVE_ASSISTANT_GROUP: string;
            CREATE_HUNT_GROUP: string;
            CREATE_OPENSCAPE_ITSP: string;
            CREATE_OPENSCAPE_SITE: string;
            CREATE_OPENSCAPE_USER: string;
            CREATE_PICKUP_GROUP: string;
            CREATE_PROVISIONED_USER: string;
            DELETE_APPLICATION_FRAMEWORK_CONFIGURATIONS: string;
            DELETE_AUTOMATED_ATTENDANT_CONFIGURATIONS: string;
            DELETE_EXECUTIVE_ASSISTANT_GROUPS: string;
            DELETE_EXTENSION: string;
            DELETE_HUNT_GROUP: string;
            DELETE_OPENSCAPE_ITSP: string;
            DELETE_OPENSCAPE_MSN_NUMBER: string;
            DELETE_OPENSCAPE_SITES: string;
            DELETE_OPENSCAPE_USER: string;
            DELETE_PICKUP_GROUPS: string;
            DELETE_PRIVATE_NUMBER_RANGE: string;
            DELETE_PUBLIC_NUMBER_RANGE: string;
            DELETE_TENANT_LOGIN_PROVIDER: string;
            DELETE_USER: string;
            DISABLE_PARTNER_ADMINISTRATION: string;
            ENABLE_PARTNER_ADMINISTRATION: string;
            EXPORT_DATA_TENANT: string;
            EXPORT_DATA_USER: string;
            FIND_OPENSCAPE_SITES_BY_ITSP: string;
            FIND_TENANT_SETTING: string;
            GET_ALL_TENANT_LOGIN_PROVIDERS: string;
            GET_APPLICATION_FRAMEWORK_CONFIGURATION: string;
            GET_APPLICATION_FRAMEWORK_CONFIGURATIONS: string;
            GET_AUTOMATED_ATTENDANT_CONFIGURATION: string;
            GET_AUTOMATED_ATTENDANT_CONFIGURATIONS: string;
            GET_CLASSLESS_INTER_DOMAIN_ROUTING_BLOCK: string;
            GET_CLASSLESS_INTER_DOMAIN_ROUTING_BLOCKS: string;
            GET_CMR_INFO_BY_ID: string;
            GET_CMR_INFO_BY_IDS: string;
            GET_CMR_SETTINGS: string;
            GET_CMR_SHARED_TENANT_INFO: string;
            GET_COMPOSER_CONNECTION_DETAILS: string;
            GET_CUSTOM_APPS: string;
            GET_EXECUTIVE_ASSISTANT_GROUP: string;
            GET_EXECUTIVE_ASSISTANT_GROUP_MEMBER_CANDIDATES: string;
            GET_HUNT_GROUP: string;
            GET_HUNT_GROUP_MEMBER_CANDIDATES: string;
            GET_HUNT_GROUP_PILOT_CANDIDATES: string;
            GET_OPENSCAPE_ITSP: string;
            GET_OPENSCAPE_ITSPS: string;
            GET_OPENSCAPE_ITSP_TEMPLATES: string;
            GET_OPENSCAPE_SITE: string;
            GET_OPENSCAPE_TENANT: string;
            GET_OPENSCAPE_USER: string;
            GET_OPENSCAPE_USER_V2: string;
            GET_PARTNER_MANAGEABLE_TENANTS: string;
            GET_PICKUP_GROUP: string;
            GET_PICKUP_GROUP_MEMBER_CANDIDATES: string;
            GET_PROVISIONED_TENANT_USERS: string;
            GET_RESELLER_INFO: string;
            GET_SHARED_KEY: string;
            GET_SYSTEM_NOTIFICATIONS: string;
            GET_TECHNICAL_CREDENTIALS: string;
            GET_TELEPHONY_ROUTING_RULES: string;
            GET_TELEPHONY_TRUNK_GROUP: string;
            GET_TELEPHONY_TRUNK_GROUPS: string;
            GET_TELEPHONY_TRUNK_STATUS: string;
            GET_TENANT: string;
            GET_TENANT_BRIDGE_NUMBERS: string;
            GET_TENANT_EXECUTIVE_ASSISTANT_GROUPS: string;
            GET_TENANT_EXTENSIONS: string;
            GET_TENANT_HUNT_GROUPS: string;
            GET_TENANT_LOGIN_PROVIDER_BY_PROVIDERID_AND_TENANTID: string;
            GET_TENANT_LOGIN_PROVIDER_CONFIGURATION_BY_PROVIDERID: string;
            GET_TENANT_PICKUP_GROUPS: string;
            GET_TENANT_SETTINGS: string;
            GET_TENANT_TELEPHONY_CONFIGURATION: string;
            GET_TENANT_VOICEMAIL_NUMBERS: string;
            GET_THIRD_PARTY_DEVICE_INFO: string;
            GET_TRUNK_ACTIVE_CALLS: string;
            GET_VACANT_HOME_DIRECTORY_NUMBERS: string;
            GET_VACANT_HOME_DIRECTORY_NUMBERS_OF_SITE: string;
            HAS_RESERVED_DNS_IN_SITE_RANGES: string;
            INVITE_MULTIPLE_PARTNER_USERS: string;
            INVITE_MULTIPLE_USERS: string;
            INVITE_PARTNER_USER: string;
            INVITE_USER: string;
            IS_MSN_RESERVED: string;
            REGENERATE_API_KEY: string;
            REMOVE_CLASSLESS_INTER_DOMAIN_ROUTING_BLOCK: string;
            REMOVE_PROVISIONED_USER: string;
            REMOVE_SYSTEM_NOTIFICATION: string;
            REMOVE_TELEPHONY_ROUTING_RULE: string;
            REMOVE_TELEPHONY_TRUNK_FROM_GROUP: string;
            REMOVE_TELEPHONY_TRUNK_GROUP: string;
            RESEND_USER_INVITATION: string;
            SAVE_TENANT_LOGIN_PROVIDER: string;
            SEND_CMR_COMMAND: string;
            SEND_TENANT_LOGIN_PROVIDER_EMAIL_NOTIFICATIONS: string;
            SET_ADMIN_MANAGED_CMR_SETTINGS: string;
            SET_ADMIN_MANAGED_CMR_SETTINGS_BY_IDS: string;
            SET_CMR_SETTINGS: string;
            SET_EXTENSION_STATE: string;
            SET_SUPPORT_EMAIL_ADDRESS: string;
            SET_SUPPORT_TYPE: string;
            SET_TELEPHONY_STATUS: string;
            SET_TELEPHONY_TRUNK_DATA: string;
            SET_TENANT_BRIDGE_NUMBERS: string;
            SET_TENANT_SETTINGS: string;
            SET_TENANT_VOICEMAIL_NUMBERS: string;
            SET_TRUNK_PASSWORD: string;
            SHARE_CMR: string;
            SHARE_TRUNK_GROUP: string;
            START_TRUNK_SOFT_SUSPENSION: string;
            SUSPEND_USER: string;
            TEST_TELEPHONY_ROUTING_RULES: string;
            UNASSIGN_OPENSCAPE_ITSP_TO_SITE: string;
            UNSHARE_CMR: string;
            UNSHARE_TRUNK_GROUP: string;
            UNSUSPEND_USER: string;
            UPDATE_APPLICATION_FRAMEWORK_CONFIGURATION: string;
            UPDATE_AUTOMATED_ATTENDANT_CONFIGURATION: string;
            UPDATE_CLASSLESS_INTER_DOMAIN_ROUTING_BLOCK: string;
            UPDATE_HUNT_GROUP: string;
            UPDATE_HUNT_GROUP_LIST: string;
            UPDATE_MEETING_POINT_V2: string;
            UPDATE_OPENSCAPE_ITSP: string;
            UPDATE_OPENSCAPE_SITE: string;
            UPDATE_OPENSCAPE_USER: string;
            UPDATE_PICKUP_GROUP: string;
            UPDATE_PROVISIONED_USER: string;
            UPDATE_SYSTEM_NOTIFICATION: string;
            UPDATE_TELEPHONY_ROUTING_RULE: string;
            UPDATE_TELEPHONY_TRUNK_GROUP: string;
            UPDATE_TENANT: string;
            UPDATE_TENANT_LOGIN_PROVIDER: string;
            UPDATE_TENANT_TELEPHONY_CONFIGURATION: string;
            UPDATE_TRUNK: string;
            UPDATE_USER: string;
            UPLOAD_EXTENSION_CONFIGURATION: string;
            VALIDATE_USER_INVITATION_TOKEN: string;
        };
        AdministrationEventType: {
            INVITE_MULTIPLE_PARTNER_USERS: string;
            INVITE_MULTIPLE_USERS: string;
        };
        AtcCapabilities: {
            CLEAR_CONNECTION_BUSY: string;
            EXTENDED_ALERTING: string;
            PBX_CALL_LOG: string;
        };
        AttachmentOrderDirection: {
            ASC: string;
            DSC: string;
        };
        AttachmentOrderType: {
            CREATION: string;
            FILEEXTENSION: string;
            FILENAME: string;
            MIMETYPE: string;
            SIZE: string;
        };
        AudioVideoDeviceCategories: {
            AUDIO_INPUT: string;
            AUDIO_OUTPUT: string;
            RINGING_OUTPUT: string;
            VIDEO_INPUT: string;
        };
        AvatarBadgeType: {
            COMMUNITY: string;
            EVENT: string;
            SKYPE: string;
        };
        BridgeLocale: {
            DE_DE: string;
            EN_GB: string;
            EN_US: string;
            ES_ES: string;
            FR_FR: string;
            IT_IT: string;
            NL_NL: string;
            PT_BR: string;
            RU_RU: string;
            ZH_HANS_CN: string;
        };
        BridgeNumberType: {
            LOCAL: string;
            TOLL: string;
            TOLL_FREE: string;
        };
        CMRSettingKey: {
            AUDIO_DEVICE: string;
            CMR_ADDRESS: string;
            CMR_APP_VERSION: string;
            CMR_MAC_ADDRESS: string;
            CMR_OS_VERSION: string;
            CMR_PLATFORM_VERSION: string;
            PLAYBACK_DEVICE: string;
            PRIMARY_DISPLAY: string;
            RECORDING_DEVICE: string;
            SECONDARY_DISPLAY: string;
            UPDATE_SERVER_STATUS: string;
            VIDEO_DEVICE: string;
        };
        CPaaSActionType: {
            ADD_USER_TO_OAUTH_APPLICATION: string;
            CREATE_INCOMING_WEBHOOK: string;
            CREATE_OAUTH_APPLICATION: string;
            DELETE_INCOMING_WEBHOOK: string;
            DELETE_OAUTH_APPLICATION: string;
            DELETE_USER_FROM_OAUTH_APPLICATION: string;
            GET_INCOMING_WEBHOOK: string;
            GET_INCOMING_WEBHOOKS: string;
            GET_OAUTH_APPLICATION: string;
            GET_OAUTH_APPLICATIONS: string;
            RECREATE_CLIENT_SECRET: string;
            SUBMIT_FORM_DATA: string;
            SUSPEND_INCOMING_WEBHOOK: string;
            SUSPEND_OAUTH_APPLICATION: string;
            UNSUSPEND_INCOMING_WEBHOOK: string;
            UNSUSPEND_OAUTH_APPLICATION: string;
            UPDATE_INCOMING_WEBHOOK: string;
            UPDATE_OAUTH_APPLICATION: string;
        };
        CPaaSEventType: {
            SUBMIT_FORM_DATA: string;
        };
        CPaaSFormMetaDataControlType: {
            BUTTON: string;
            CHECKBOX: string;
            DROPDOWN: string;
            INPUT: string;
            LABEL: string;
            RADIO: string;
            SPACER: string;
        };
        CPasSIncomingWebhookFilter: {
            CONVERSATION: string;
            TENANT: string;
            USER: string;
        };
        ChangePasswordResult: {
            ALREADY_CHANGED: string;
            NEW_INVALID: string;
            OK: string;
            OLD_INVALID: string;
            OPERATION_ERROR: string;
        };
        ChangedUserData: {
            LABEL_IDS: string;
            LAST_READ_TS: string;
            SYSTEM_LABEL_IDS: string;
        };
        ClientCapability: {
            GUEST_EXPERIENCE: number;
            MUTABLE_APN: number;
            SYSTEM_MESSAGES: number;
            TC_START_REASSIGNMENT: number;
        };
        CloudTelephonyCmpNextError: {
            CALL_PICKUP_GROUP_DUPLICATE_NAME: string;
            COUNTRY_DETAILS_NOT_FOUND: string;
            OPENSCAPE_SITE_DID_AREA_CODES_INCONSISTENT: string;
            OPENSCAPE_SITE_DID_AREA_CODE_NOT_EMPTY: string;
            OSV_OPERATION_FAILED: string;
        };
        CloudTelephonyErrorType: {
            CMP_NEXT: string;
            CMP_NEXT_VALIDATION: string;
            VALIDATION: string;
        };
        CloudTelephonyValidationError: {
            AA_OPERATOR_INVALID: string;
            AREA_CODES_INCONSISTENT: string;
            CALLERID_NOT_FOUND_IN_PUBLIC_NUMBERS: string;
            DELETE_ITSP_ALREADY_ASSIGNED: string;
            DN_NOT_FOUND_IN_SITE: string;
            DN_NOT_FOUND_IN_TENANT: string;
            DUPLICATE_SITE_NAME: string;
            EA_INVALID_CREATE_UPDATE_CONFIGURATION: string;
            EXISTING_USERS_IN_PRIVATE_RANGE: string;
            EXISTING_USERS_IN_PUBLIC_RANGE: string;
            EXISTING_USERS_IN_RANGE: string;
            MSN_AS_EXISTING_USER: string;
            OVERLAPPING_PRIVATE_RANGES_ACROSS_TENANT: string;
            OVERLAPPING_PRIVATE_RANGES_WITHIN_SITE: string;
            OVERLAPPING_PUBLIC_RANGES_ACROSS_DEPLOYMENT: string;
            OVERLAPPING_PUBLIC_RANGES_WITHIN_SITE: string;
            UNKNOWN: string;
        };
        ContentType: {
            ACCOUNT: string;
            ACTIVITYSTREAM: string;
            ADMINISTRATION: string;
            CONVERSATION: string;
            CONVERSATION_USER_DATA: string;
            CPAAS: string;
            EXTENSION: string;
            GUEST: string;
            INSTRUMENTATION: string;
            KEEPALIVE: string;
            MS_CONNECTOR: string;
            NONE: string;
            PROVISIONING: string;
            RTC_CALL: string;
            RTC_CONNECTION: string;
            RTC_SESSION: string;
            SANITY_CHECK: string;
            SEARCH: string;
            SPACE: string;
            SYSTEM: string;
            TEAM: string;
            THIRDPARTYCONNECTORS: string;
            USER: string;
            USER_DATA: string;
            USER_TO_USER: string;
            VERSION: string;
            WEB_HOOK: string;
        };
        ConversationActionType: {
            ADD_FILTER: string;
            ADD_JOURNAL_ENTRY: string;
            ADD_LABELS: string;
            ADD_PARTICIPANT: string;
            ADD_SCHEDULE_ITEM: string;
            ADD_TEXT_ITEM: string;
            ASSIGN_LABELS: string;
            CLEAR_FLAG_ITEM: string;
            CREATE: string;
            DELETE: string;
            DELETE_ATTACHMENTS: string;
            DELETE_JOURNAL_ENTRY: string;
            DELETE_RECORDING: string;
            DELETE_SCHEDULE_ITEM: string;
            DELETE_TEXT_ITEM: string;
            DROP_MODERATOR_RIGHTS: string;
            EDIT_FILTER: string;
            EDIT_LABEL: string;
            GET_ALL_USER_SCHEDULE_ITEMS: string;
            GET_ATTACHMENTS: string;
            GET_CONFERENCE_INVITATION_EXAMPLE: string;
            GET_CONFERENCE_INVITATION_TEXT: string;
            GET_CONVERSATIONS: string;
            GET_CONVERSATIONS_BY_FILTER: string;
            GET_CONVERSATIONS_BY_IDS: string;
            GET_CONVERSATION_BY_ID: string;
            GET_CONVERSATION_BY_USER: string;
            GET_CONVERSATION_DETAILS: string;
            GET_CONVERSATION_FEED: string;
            GET_CONVERSATION_PARTICIPANTS: string;
            GET_CONVERSATION_SUMMARY: string;
            GET_CONVERSATION_THREADS: string;
            GET_CONVERSATION_TOPICS: string;
            GET_CONVERSATION_USER_DATA: string;
            GET_FAVORITE_CONVERSATION_IDS: string;
            GET_FILTERS: string;
            GET_FLAGGED_ITEMS: string;
            GET_ITEMS_BY_CONVERSATION: string;
            GET_ITEMS_BY_CONVERSATION_ITEM_ID: string;
            GET_ITEMS_BY_IDS: string;
            GET_ITEM_BY_ID: string;
            GET_JOIN_DETAILS: string;
            GET_JOURNAL_ENTRIES: string;
            GET_LABELS: string;
            GET_LABEL_PAGE: string;
            GET_MARKED_CONVERSATIONS_LIST: string;
            GET_OPEN_CONVERSATIONS: string;
            GET_SUPPORT_CONVERSATION: string;
            GET_SUPPORT_CONVERSATION_ID: string;
            GET_TEASER_MESSAGES: string;
            GET_TELEPHONY_CONVERSATION_ID: string;
            GET_THREADS_BY_IDS: string;
            GET_THREADS_BY_ITEM_IDS: string;
            GET_THREAD_COMMENTS: string;
            GET_USER_DATA_SINCE: string;
            GRANT_MODERATOR_RIGHTS: string;
            JOIN_OPEN_CONVERSATION: string;
            LIKE_TEXT_ITEM: string;
            MARK_CONVERSATION: string;
            MODERATE_CONVERSATION: string;
            PIN_TOPIC: string;
            REMOVE_FILTERS: string;
            REMOVE_LABELS: string;
            REMOVE_PARTICIPANT: string;
            SET_CONVERSATION_AVATAR: string;
            SET_CONVERSATION_RETENTION_POLICY: string;
            SET_FAVORITE_POSITION: string;
            SET_FLAG_ITEM: string;
            SET_READ_POINTER: string;
            SUBSCRIBE: string;
            TAKE_MODERATION_RIGHT: string;
            TYPING: string;
            UNASSIGN_LABELS: string;
            UNLIKE_TEXT_ITEM: string;
            UNMARK_CONVERSATION: string;
            UNMODERATE_CONVERSATION: string;
            UNPIN_TOPIC: string;
            UNSUBSCRIBE: string;
            UPDATE: string;
            UPDATE_GUEST_ACCESS: string;
            UPDATE_RTC_ITEM_ATTACHMENTS: string;
            UPDATE_SCHEDULE_ITEM: string;
            UPDATE_TEXT_ITEM: string;
        };
        ConversationEventType: {
            ADD_ITEM: string;
            CLEAR_FLAGGED_ITEM: string;
            CONVERSATION_MARKED: string;
            CONVERSATION_UNMARKED: string;
            CREATE: string;
            DELETE: string;
            DRAFT_MESSAGE_DISCARDED: string;
            DRAFT_MESSAGE_PUBLISHED: string;
            DRAFT_MESSAGE_SAVED: string;
            FAVORITE_POSITION_CHANGED: string;
            FLAG_ITEM: string;
            JOURNAL_ENTRY_DELETED: string;
            READ_ITEMS: string;
            TYPING: string;
            UPDATE: string;
            UPDATE_ITEM: string;
            USER_DATA_CHANGED: string;
        };
        ConversationFilter: {
            ALL: string;
            ARCHIVED: string;
            MARKED: string;
            OPEN_MEMBER: string;
            UNARCHIVED: string;
        };
        ConversationItemType: {
            RTC: string;
            SYSTEM: string;
            TEXT: string;
        };
        ConversationItemTypeMapping: {
            CALL_SUMMARY: string;
            DIVIDER: string;
            GAP: string;
            MARKER: string;
            RTC: string;
            SYSTEM: string;
            TEXT: string;
            VOICEMAIL: string;
        };
        ConversationMarkFilter: {
            FAVORITE: string;
            MUTE: string;
        };
        ConversationParticipantType: {
            ACTIVE: string;
            FORMER: string;
            GUEST: string;
            MODERATOR: string;
            REGULAR: string;
        };
        ConversationType: {
            DIRECT: string;
            GROUP: string;
            LARGE: string;
            OPEN: string;
        };
        ConversationUserDataEventType: {
            FILTERS_REMOVED: string;
            FILTER_ADDED: string;
            FILTER_EDITED: string;
            LABELS_ADDED: string;
            LABELS_REMOVED: string;
            LABEL_EDITED: string;
        };
        CurtainState: {
            FINAL: string;
            INITIAL: string;
            OPEN: string;
            PAUSED: string;
        };
        DataRetentionState: {
            DELETED: string;
            OUTDATED: string;
            UNTOUCHED: string;
        };
        DefaultUISettingsValues: {
            DETAILS: boolean;
            INFO: boolean;
            PARTICIPANTS: boolean;
            PINNED_TOPICS: boolean;
        };
        DeviceType: {
            APPLICATION: string;
            MOBILE: string;
            PHONE: string;
            SDK: string;
            SESSION_GUEST: string;
            UNKNOWN: string;
            WEB: string;
        };
        DeviceTypeAssigned: {
            NONE: string;
            THIRD_PARTY: string;
            UNIFY: string;
        };
        DisconnectCause: {
            CALL_SETUP_FAILED: string;
            CONNECTION_LOST: string;
            HANGUP: string;
            NEGOTIATION_FAILED: string;
            REMOTE_SDP_FAILED: string;
            SECURITY_NEGOTIATION_FAILED: string;
            STREAM_LOST: string;
            TRANSPORT_NEGOTIATION_FAILED: string;
        };
        DisconnectReason: {
            CALL_LOST: string;
            LOGOUT: string;
            PAGE_UNLOADED: string;
        };
        DraftType: {
            BRIDGE: string;
            LARGE: string;
            OPEN: string;
            PRIVATE: string;
        };
        EmailAddressType: {
            HOME: string;
            OTHER: string;
            WORK: string;
        };
        EnhancedMessageNotificationsSetting: {
            ALL: number;
            DIRECT: number;
            FAVORITE: number;
            MENTION: number;
            NONE: number;
        };
        ErrorCode: {
            AUTHORIZATION_FAILED: string;
            CLOUD_TELEPHONY_ERROR: string;
            CONSTRAINT_VIOLATION: string;
            DUPLICATED_ENTITY_ERROR: string;
            MAX_NUM_CONV_PARTICIPANTS: string;
            PERMISSION_DENIED: string;
            RTC_CONCURRENT_INCOMING_CALL: string;
            RTC_MEDIA_NODE_UNREACHABLE: string;
            RTC_NO_MEDIA_NODES_AVAILABLE: string;
            THIRDPARTY_ERROR: string;
            UNEXPECTED_ERROR: string;
        };
        ExternalUnshareProviderType: {
            SYNCPLICITY: string;
        };
        FilterBoolConnector: {
            AND: string;
            OR: string;
        };
        FilterTarget: {
            CONVERSATION_TYPE: string;
            LABEL_ID: string;
        };
        FilterTargetComparator: {
            EQ: string;
            NOT: string;
        };
        GetAccountsFilterCriteria: {
            DISPLAY_NAME: string;
            FIRST_NAME: string;
            LAST_NAME: string;
            PRIMARY_EMAIL: string;
            STATUS: string;
            TAG: string;
            TELEPHONY_TRUNK_GROUP_ID: string;
            TELEPHONY_USER_ID: string;
        };
        GetAccountsOrdering: {
            ASCENDING: string;
            DESCENDING: string;
        };
        GetAccountsSorting: {
            BY_FIRST_NAME: string;
            BY_LAST_LOGIN: string;
            BY_LAST_NAME: string;
            BY_LOCATION: string;
            BY_NAME: string;
            BY_PHONE_NUMBER: string;
            BY_PRIMARY_EMAIL: string;
        };
        GetConversationParticipantCriteria: {
            DISPLAY_NAME: string;
            TYPE: string;
        };
        GetStuffType: {
            ACCOUNTS: string;
            FIRST_WEB_LOGIN: string;
            GLOBAL_PROPERTIES: string;
            HAS_TENANT_MEETING_POINTS: string;
            NOTIFICATION_SUBSCRIPTIONS: string;
            PENDING_SYSTEM_NOTIFICATIONS: string;
            PRESENCE_STATE: string;
            RECENT_SEARCHES: string;
            SETTINGS: string;
            SUPPORT_CONVERSATION_ID: string;
            SUPPORT_INFO: string;
            TELEPHONY_CONVERSATION_ID: string;
            TENANT: string;
            TENANT_DATA: string;
            USER: string;
        };
        GetUsersOrdering: {
            ASCENDING: string;
            DESCENDING: string;
        };
        GetUsersSearchFor: {
            NAME: string;
            PRIMARY_EMAIL: string;
            ROLE: string;
            STATUS: string;
        };
        GetUsersSorting: {
            DATA_USAGE: string;
            EMAIL: string;
            LAST_ACCESS: string;
            PHONE_NUMBER_ASSIGNED: string;
            ROLE: string;
            STATUS: string;
            USER_NAME: string;
        };
        GlobalPropertyName: {
            ADD_TELEPHONY_CONNECTOR_DISABLED: string;
            ATTACHMENT_UPLOAD_MAX_SIZE: string;
            CHROME_EXTENSION_ID: string;
            CLIENT_AUTOUPDATE_MAX_TIME: string;
            CONV_PARTICIPANTS_ADD_LIMIT: string;
            CONV_PARTICIPANTS_MAX_SIZE: string;
            XMPP_FEDERATION_ENABLED: string;
        };
        GtcTrunkType: {
            ATC_TRUNK_TYPE: string;
            EMBEDDED_TC_TRUNK_TYPE: string;
            ETC_TRUNK_TYPE: string;
            GTC_TRUNK_TYPE: string;
            OSBIZ_TRUNK_TYPE: string;
            SUB_TRUNK_TYPE: string;
        };
        GuestActionType: {
            GET_REGIONS: string;
            REGISTER_SESSION_GUEST: string;
            VALIDATE_SESSION_INVITE_TOKEN: string;
        };
        HuntType: {
            CIRCULAR_WITH_HUNT: string;
            INIT: string;
            LINEAR: string;
            MANUAL: string;
            PARALLEL: string;
            PARALLEL_SA: string;
            UCD: string;
        };
        IncludedUserData: {
            LABEL_IDS: string;
            LAST_READ_TS: string;
            SYSTEM_LABEL_IDS: string;
            UNREAD_COUNT: string;
        };
        InstrumentationActionType: {
            SUBMIT_CLIENT_DATA: string;
            SUBMIT_QOS_DATA: string;
        };
        InvitationResponseCode: {
            ACCOUNT_ASSIGNMENT_FAILED: string;
            EMAIL_ALREADY_EXISTS: string;
            EMAIL_ALREADY_EXISTS_ON_SAME_TENANT: string;
            ERROR: string;
            INVALID_USER_STATE: string;
            INVITATION_NOT_SEND: string;
            INVITATION_SEND: string;
            LICENSE_ERROR: string;
            LICENSE_LIMIT_EXCEEDED: string;
            SYSTEM_OVERLOADED: string;
            UNTRUSTED_PARTNER_TENANT: string;
            XMPP_FEDERATED_USER_NOT_FOUND: string;
        };
        InvitationStatusCode: {
            FINISHED: string;
            RUNNING: string;
        };
        InviteCancelCause: {
            ACCEPT: string;
            BUSY: string;
            DECLINE: string;
            REVOKED: string;
        };
        InviteFailedCause: {
            BUSY: string;
            DECLINE: string;
            INVALID_NUMBER: string;
            NOT_REACHABLE: string;
            REVOKED: string;
            TEMPORARILY_UNAVAILABLE: string;
            TIMEOUT: string;
        };
        InviteRejectCause: {
            BUSY: string;
            DECLINE: string;
            TIMEOUT: string;
        };
        JournalFilter: {
            ALL: string;
            DIALED: string;
            DIVERTED: string;
            MISSED: string;
            RECEIVED: string;
            VOICEMAILS: string;
        };
        LabFeatureName: {
            ACTIVE_WHITEBOARD: string;
            ADD_CMR_NEW_FLOW: string;
            ADD_CMR_VIA_QR_CODE: string;
            ANR_WATCHDOG: string;
            ANSWER_CALL_SCREEN: string;
            AUTHENTICATION_SETTINGS: string;
            BROADCAST_MESSAGES: string;
            CONFERENCE_POLL: string;
            DARK_MODE: string;
            DIRECT_TO_CONF_UPGRADE: string;
            DISABLE_CALL_KIT: string;
            DUTCH_LANGUAGE: string;
            DYNAMIC_RESOLUTION: string;
            EDGE_WEBRTC: string;
            EXPORT_LEGAL_DATA: string;
            FLOATING_ONGOING_CALL_CONTROL: string;
            GOOGLE_CONTACTS: string;
            GUEST_ON_BOARDING: string;
            HASHTAGS: string;
            HEADER_STATUS_NOTIFICATION: string;
            INCOMING_WEBHOOKS: string;
            IN_CALL_SIDEBAR: string;
            IN_CONTEXT_SIDEBAR_PARTICIPANTS: string;
            IP_HANDLING_POLICY: string;
            JABRA_NODE_MODULE_SDK: string;
            JPL_HEADSET_INTEGRATION: string;
            LANDSCAPE_MODE: string;
            LEAK_CANARY: string;
            LOCK_SCREEN_CALL_CONTROL: string;
            MUTABLE_APN: string;
            NEW_LOGIN_VIEW: string;
            NEW_PHONE_CALLS_VIEW: string;
            OPEN_XCHANGE: string;
            ORGANISE_CONTENT: string;
            OSBIZ_EXTENDED_TELEPHONY: string;
            PARTICIPANT_DRAWING: string;
            POPOUT_CONVERSATION: string;
            QUEUE_ANNOUNCEMENT_FOR_HUNT_GROUP: string;
            SCOPE_SEARCHES: string;
            SCREEN_SHARE: string;
            SECOND_LOCAL_CALL: string;
            SHARE_TC_POOL_WITH_TENANT: string;
            SHORT_LINKS: string;
            SINGLE_PUBLIC_NUMBERS: string;
            SPACES: string;
            STARTED_MEETING_SUMMARY: string;
            STATISTICS: string;
            SUBSCRIBER_TELEPHONY_CONNECTOR: string;
            TEAMS: string;
            TENANT_ADMIN_USER_TABLE_ENHANCEMENT: string;
            TRANSCRIPTION_AND_TRANSLATION: string;
            UCAAS_EXECUTIVE_ASSISTANT_GROUPS: string;
            UNIFIED_PLAN_SDP: string;
            VIDEO_PLAYER: string;
        };
        Locale: {
            DE_DE: string;
            EN_US: string;
            ES_ES: string;
            FR_FR: string;
            IT_IT: string;
            NL_NL: string;
            PT_BR: string;
            RU_RU: string;
            ZH_HANS_CN: string;
        };
        MeetingRoomFeatureName: {
            DISPLAY_MULTIPLE_VIDEO_STREAMS: string;
        };
        MessageNotificationsSetting: {
            ALL: number;
            DIRECT_AND_MENTIONS: number;
            NONE: number;
        };
        MigrateMultipleStatusCode: {
            FINISHED: string;
            RUNNING: string;
        };
        MigrateResponseCode: {
            ACCOUNT_DOES_NOT_EXIST: string;
            ACCOUNT_TEMPLATE_DOES_NOT_EXIST: string;
            ERROR: string;
            ILLEGAL_ACCOUNT_TEMPLATE_ASSIGNMENT: string;
            MAXIMUM_ACCOUNTS_REACHED: string;
            NULL_PARAMETER: string;
            OK: string;
            OK_NO_CHANGES: string;
            TECHNICAL_ACCOUNT_NOT_ALLOWED: string;
        };
        ModerationTakenResult: {
            ALREADY_HAS_MODERATOR: string;
            NO_FULL_CONVERSATION_MEMBER: string;
            NO_MODERATED_CONVERTION: string;
            OK: string;
            TAKE_MODERATION_FORBIDDEN: string;
        };
        NodeState: {
            DOWN: string;
            MAINTENANCE: string;
            OVERLOAD: string;
            UP: string;
        };
        NodeType: {
            ACCESS: string;
            APPLICATION: string;
            LOAD_BALANCER: string;
            MANAGEMENT: string;
            MEDIA_ACCESS: string;
            OPERATIONS: string;
            STORAGE: string;
            ZOOKEEPER: string;
        };
        NotificationSubscriptionAction: {
            SUBSCRIBE: string;
            UNSUBSCRIBE: string;
        };
        NotificationSubscriptionType: {
            ONLINE_STATUS: string;
        };
        OAuthGrantTypes: {
            AUTHORIZATION_CODE: string;
            CLIENT_CREDENTIALS: string;
            IMPLICIT: string;
            RESOURCE_OWNER: string;
            RESOURCE_OWNER_CREDENTIALS: string;
        };
        OAuthScope: {
            ALL: string;
            CALLS: string;
            MENTION_EVENT: string;
            READ_CONVERSATIONS: string;
            READ_USER: string;
            READ_USER_PROFILE: string;
            USER_MANAGEMENT: string;
            WRITE_CONVERSATIONS: string;
            WRITE_USER_PROFILE: string;
        };
        OpenscapeDirectoryNumberUsage: {
            AA_MEMBER: string;
            MLHG_MEMBER: string;
            MLHG_PILOT: string;
            PICKUP_MEMBER: string;
        };
        OrderBy: {
            TIMESTAMP_ASC: string;
            TIMESTAMP_DESC: string;
        };
        OrderType: {
            CREATION: string;
            MODIFICATION: string;
        };
        PermissionType: {
            FEATURE: string;
            OVERALL_PACKAGE_FEATURE: string;
            OVERALL_PACKAGE_QUOTA: string;
            RESTRICTION: string;
            TENANT_QUOTA: string;
            USER_QUOTA: string;
        };
        PhoneDialoutMode: {
            ALL_USERS: string;
            PHONE_USERS_ONLY: string;
        };
        PhoneNumberNpi: {
            PRIVATE: string;
            PUBLIC: string;
        };
        PhoneNumberType: {
            FAX: string;
            HOME: string;
            MOBILE: string;
            OTHER: string;
            UCAAS: string;
            WORK: string;
        };
        PresenceState: {
            AVAILABLE: string;
            AWAY: string;
            BUSY: string;
            DND: string;
            OFFLINE: string;
        };
        ProviderType: {
            CREDENTIALS: string;
            OPENID: string;
            SAML: string;
        };
        QOSMediaType: {
            AUDIO: string;
            SCREEN_SHARE: string;
            VIDEO: string;
        };
        QuestionEventType: {
            CREATED: string;
            REVOKED: string;
            UPDATED: string;
        };
        QuestionState: {
            ANSWERED: string;
            ANSWER_LATER: string;
            DISCARDED: string;
            RAISED: string;
        };
        RTCCallActionType: {
            ANSWER: string;
            CHANGE_MEDIA_ACCEPT: string;
            CHANGE_MEDIA_REJECT: string;
            CHANGE_MEDIA_TYPE: string;
            ICE_CANDIDATES: string;
            INVITE_REJECT: string;
            JOIN: string;
            LEAVE: string;
            PREPARE: string;
            RENEW_TURN_CREDENTIALS: string;
            SEND_PROGRESS: string;
            SUBMIT_RTC_QUALITY_RATING: string;
            TERMINATE: string;
        };
        RTCCallEventType: {
            CHANGE_MEDIA_TYPE_FORCED: string;
            CHANGE_MEDIA_TYPE_REQUESTED: string;
            ICE_CANDIDATES: string;
            IFRAME_STATISTICS: string;
            INVITE: string;
            INVITE_CANCEL: string;
            INVITE_FAILED: string;
            PROGRESS: string;
            RTC_QUALITY_RATING_EVENT: string;
            SDP_ANSWER: string;
            SDP_FAILED: string;
        };
        RTCItemMissed: {
            CANCELED: string;
            DECLINED: string;
            INVALID_NUMBER: string;
            TEMPORARILY_UNAVAILABLE: string;
            TIMEOUT: string;
            UNREACHABLE: string;
            USER_BUSY: string;
        };
        RTCItemMoved: {
            MOVED_FROM: string;
            MOVED_TO: string;
        };
        RTCItemType: {
            ENDED: string;
            MISSED: string;
            MOVED: string;
            PARTICIPANT_JOINED: string;
            PARTICIPANT_LEFT: string;
            STARTED: string;
        };
        RTCParticipantType: {
            EXTERNAL: string;
            MEETING_POINT: string;
            SESSION_GUEST: string;
            TELEPHONY: string;
            TEST_CALL: string;
            USER: string;
            VOICE_MAIL: string;
        };
        RTCProgressType: {
            ALERTING: string;
            EARLY_CONNECT: string;
            PROGRESS: string;
        };
        RTCSessionActionType: {
            ACCEPT_SCREEN_CONTROL: string;
            ADD_PARTICIPANT: string;
            ADD_WHITEBOARD_ELEMENT: string;
            CLEAR_WHITEBOARD: string;
            CLEAR_WHITEBOARD_BACKGROUND: string;
            CLOSE_CURTAIN: string;
            CLOSE_POLL: string;
            DISABLE_POLL: string;
            DISABLE_WHITEBOARD: string;
            EDIT_POLL: string;
            ENABLE_POLL: string;
            ENABLE_WHITEBOARD: string;
            GET_ACTIVE_SESSIONS: string;
            GET_NODE_STATE: string;
            GET_POLL: string;
            GET_QUESTIONS: string;
            GET_SESSION: string;
            GET_SESSIONID_BY_PIN: string;
            GET_WHITEBOARD: string;
            INVITE_TO_STAGE: string;
            INVITE_TO_STAGE_ANSWER: string;
            INVITE_TO_STAGE_CANCEL: string;
            LOCK: string;
            MAKE_POLL_RESULTS_VISIBLE: string;
            MOVE: string;
            MUTE: string;
            MUTE_SESSION: string;
            OFFER_SCREEN_CONTROL: string;
            OPEN_CURTAIN: string;
            RAISE_QUESTION: string;
            REJECT_SCREEN_CONTROL: string;
            REJECT_SCREEN_CONTROL_REQUEST: string;
            REMOVE_FROM_STAGE: string;
            REMOVE_PARTICIPANT: string;
            REMOVE_WHITEBOARD_ELEMENT: string;
            REQUEST_SCREEN_CONTROL: string;
            RESUME_POLL: string;
            SEND_CLIENT_INFO: string;
            SET_WHITEBOARD_BACKGROUND: string;
            START_POLL: string;
            START_RECORDING: string;
            STOP_POLL: string;
            STOP_RECORDING: string;
            STOP_SCREEN_CONTROL: string;
            SWITCH_RECORDING_LAYOUT: string;
            TOGGLE_WHITEBOARD_OVERLAY: string;
            UNDO_WHITEBOARD: string;
            UPDATE_QUESTION_STATE: string;
            UPDATE_WHITEBOARD_ELEMENT: string;
            VOTE_POLL: string;
        };
        RTCSessionEventType: {
            ACTIVE_SPEAKER: string;
            CURTAIN_EVENT: string;
            HANDOVER_SCREEN_CONTROL: string;
            INVITE_TO_STAGE_CANCEL_EVENT: string;
            INVITE_TO_STAGE_EVENT: string;
            PARTICIPANT_JOINED: string;
            PARTICIPANT_LEFT: string;
            PARTICIPANT_UPDATED: string;
            POLL_CLOSED: string;
            POLL_DISABLED: string;
            POLL_ENABLED: string;
            POLL_RESUMED: string;
            POLL_STARTED: string;
            POLL_STOPPED: string;
            POLL_UPDATED: string;
            QUESTION_EVENT: string;
            SCREEN_CONTROL_ACCEPTED: string;
            SCREEN_CONTROL_FAILED: string;
            SCREEN_CONTROL_OFFERED: string;
            SCREEN_CONTROL_REJECTED: string;
            SCREEN_CONTROL_REQUESTED: string;
            SCREEN_CONTROL_REQUEST_REJECTED: string;
            SCREEN_CONTROL_TERMINATED: string;
            SESSION_ATTRIBUTES_CHANGED_EVENT: string;
            SESSION_MOVED: string;
            SESSION_RECORDING_FAILED: string;
            SESSION_RECORDING_INFO: string;
            SESSION_RECORDING_STARTED: string;
            SESSION_RECORDING_STOPPED: string;
            SESSION_STARTED: string;
            SESSION_TERMINATED: string;
            SESSION_TERMINATION_TIMER_CANCELLED: string;
            SESSION_TERMINATION_TIMER_STARTED: string;
            SESSION_UPDATED: string;
            VIDEO_ACTIVE_SPEAKER: string;
            WHITEBOARD_BACKGROUND_CLEARED: string;
            WHITEBOARD_BACKGROUND_SET: string;
            WHITEBOARD_CLEARED: string;
            WHITEBOARD_CONVERSION_FAILED: string;
            WHITEBOARD_DISABLED: string;
            WHITEBOARD_ELEMENT_ADDED: string;
            WHITEBOARD_ELEMENT_REMOVED: string;
            WHITEBOARD_ELEMENT_UPDATED: string;
            WHITEBOARD_ENABLED: string;
            WHITEBOARD_OVERLAY_TOGGLED: string;
            WHITEBOARD_SYNC: string;
        };
        RTCSessionParticipantFlag: {
            CPU_LOAD: string;
            CPU_LOAD_TRANSCODE: string;
            MAX_COUNT: string;
            NO_LICENSE: string;
        };
        RTCSessionParticipantLeftCause: {
            CALL_SETUP_FAILED: string;
            CONDITIONAL_TERMINATE: string;
            CONNECTION_LOST: string;
            FORCED_TERMINATE: string;
            LEFT: string;
            MAX_PARTICIPANTS_REACHED: string;
            NEGOTIATION_FAILED: string;
            OFFER_NOT_ACCEPTED: string;
            REMOTE_SDP_FAILED: string;
            REMOVED: string;
            SECURITY_NEGOTIATION_FAILED: string;
            STREAM_LOST: string;
            TRANSPORT_NEGOTIATION_FAILED: string;
            USER_LEFT_STAGE: string;
        };
        RTCSessionTerminatedCause: {
            CONDITIONAL: string;
            FORCED: string;
            NO_USERS_LEFT: string;
        };
        RealtimeMediaType: {
            AUDIO: string;
            DESKTOP_SHARING: string;
            VIDEO: string;
        };
        RecordingInfoReason: {
            LENGTH_LIMIT_REACHED: string;
            MAX_INPUT_TIMEOUT: string;
            NONE: string;
            NO_INPUT_TIMEOUT: string;
            NO_MORE_DISK_SPACE_LEFT: string;
            NO_STREAMING_DATA: string;
            STOPPED_AUTOMATICALLY: string;
            STOPPED_MANUALLY: string;
            UNKNOWN_ERROR: string;
        };
        RecordingInfoState: {
            FINISHED: string;
            INITIAL: string;
            STARTED: string;
            START_PENDING: string;
            STOPPED: string;
        };
        RecordingState: {
            IDLE: string;
            LISTENING: string;
            PROCESSING: string;
        };
        RecordingStoppedReason: {
            LENGTH_LIMIT_REACHED: string;
            NO_INPUT: string;
        };
        RecordingTriggerReason: {
            CURTAIN: string;
            USER: string;
        };
        RecordingUploadState: {
            DELETED: string;
            FAILED: string;
            FINISHED: string;
            IN_PROGRESS: string;
            RETRYING: string;
        };
        RecordingVideoLayoutName: {
            SINGLE: string;
            VIDEO_SCREEN_25_75: string;
            VIDEO_SCREEN_50_50: string;
            VIDEO_SCREEN_75_25: string;
        };
        RemoveTrunkGroupResult: {
            REFERENCES_EXIST: string;
            SUCCESS: string;
            UNKNOWN_ERROR: string;
        };
        RetentionPolicyStatus: {
            ENABLED: string;
            LEGALHOLD_DISABLED: string;
            USER_DISABLED: string;
            USER_LEGALHOLD_DISABLED: string;
        };
        RetrieveAction: {
            CONVERSATIONS: string;
            CONVERSATIONS_AND_IDS: string;
            CONVERSATION_IDS: string;
        };
        ReturnCode: {
            AUTHORIZATION_FAILED: string;
            AUTHORIZATION_REQUIRED: string;
            BACKEND_UNAVAILABLE: string;
            CHOOSE_DESKTOP_MEDIA_CANCELLED: string;
            CLOUD_TELEPHONY_EXCEPTION: string;
            CONVERSION_EXCEPTION: string;
            DISCONNECTED: string;
            ENTITY_ALREADY_EXISTS: string;
            FAILED_TO_SEND: string;
            FRAME_SIZE_TO_LONG: string;
            INVALID_CLIENT: string;
            INVALID_MESSAGE: string;
            MISSING_REQUIRED_PARAMETER: string;
            NO_MESSAGE_HANDLER: string;
            NO_RESULT: string;
            OK: string;
            OLD_VERSION: string;
            OPERATION_NOT_SUPPORTED: string;
            OVERLOADED: string;
            PROTOBUF_CONVERSION_EXCEPTION: string;
            REQUEST_CANCELED: string;
            REQUEST_TIMEOUT: string;
            SDK_ERROR: string;
            SERVICE_EXCEPTION: string;
            SERVICE_UNAVAILABLE: string;
            STORAGE_OVERLOADED: string;
            UNEXPECTED_RESPONSE: string;
            USER_NOT_FOUND: string;
        };
        RtcActionInfoType: {
            EVENT: string;
            REQUEST_RESPONSE: string;
        };
        RtcClientInfoReason: {
            CALL_CONNECTED: string;
            DISCONNECTED: string;
            FAILED_TO_SEND: string;
            JOIN_DELAY: string;
            NO_NETWORK_CONNECTION: string;
            REQUEST_TIMEOUT: string;
        };
        RtcClientInfoType: {
            CALL_CONNECTED: string;
            DEVICE_DIAGNOSTICS: string;
            OFFLINE_JOIN_FAILURE: string;
        };
        RtcDiagnosticsAction: {
            ICE_CANDIDATES: string;
            JOIN: string;
            PREPARE: string;
            REMOTE_ICE_CANDIDATES: string;
            RENEW_TURN_CREDENTIALS: string;
            SDP_ANSWER: string;
            SDP_CONNECTED: string;
        };
        RtcSupportedFeatures: {
            CALL_PICKUP: string;
            MID_STREAM_MAPPING: string;
            SCREEN_CONTROL: string;
            SCREEN_CONTROLLER: string;
            SCREEN_SHARE_AND_ACTIVE_SPEAKER_VIDEO: string;
            UPGRADE_TO_CONFERENCE: string;
        };
        SdpFailedCause: {
            CHANGE_MEDIA_REJECT: string;
            CONNECTION_LOST: string;
            JOIN_FORBIDDEN: string;
            MAX_PARTICIPANTS_REACHED: string;
            SERVICE_ERROR: string;
            SESSION_STARTED_FAILED: string;
            SESSION_TERMINATED: string;
        };
        SearchActionType: {
            ADD_RECENT_SEARCH: string;
            CANCEL_SEARCH: string;
            GET_RECENT_SEARCHES: string;
            SEARCH_CONVERSATION_PARTICIPANTS: string;
            START_ADVANCED_USER_SEARCH: string;
            START_BASIC_SEARCH: string;
            START_DETAIL_SEARCH: string;
            START_USER_SEARCH: string;
        };
        SearchContext: {
            MEETING_POINT: string;
            USER: string;
        };
        SearchDirection: {
            AFTER: string;
            BEFORE: string;
            BOTH: string;
        };
        SearchEventType: {
            BASIC_SEARCH_RESULT: string;
            DETAILED_SEARCH_RESULT: string;
            RECENT_SEARCH_ADDED: string;
            SEARCH_STATUS: string;
        };
        SearchResultType: {
            ATTACHMENT_MATCH: string;
            ITEM_MATCH: string;
            TOPIC_MATCH: string;
            USER_MATCH: string;
        };
        SearchScope: {
            ALL: string;
            CONVERSATIONS: string;
            DATE: string;
            FILES: string;
            FILTER: string;
            LABEL: string;
            MEMBERS: string;
            MESSAGES: string;
            PEOPLE: string;
            SENT_BY: string;
        };
        SearchStatusCode: {
            CANCELED: string;
            ERROR: string;
            FINISHED: string;
            MORE_RESULT: string;
            NO_RESULT: string;
            TIMEOUT: string;
        };
        SearchTypes: {
            CONVERSATION: string;
            USER: string;
        };
        SessionAttributesChangedEventType: {
            EVENT_ATTENDEE_COUNT_CHANGED: string;
            SCREEN_CONTROL_ENDED: string;
            SCREEN_CONTROL_ESTABLISHED: string;
            SCREEN_CONTROL_REQUESTED: string;
            SCREEN_CONTROL_REQUEST_CLEARED: string;
        };
        SessionClosedReason: {
            DELETED: string;
            NEW_CONNECTION_DETECTED: string;
            SUSPENDED: string;
            TENANT_DELETED: string;
            TENANT_SUSPENDED: string;
            UPGRADE_REQUIRED: string;
        };
        SessionInviteInfoResult: {
            INVALID: string;
            VALID_NOSESSION: string;
            VALID_NO_GUEST_ACCESS: string;
            VALID_SESSION: string;
        };
        SetPasswordResult: {
            NOT_OK: string;
            OK: string;
        };
        SetRoleRole: {
            ADMIN: string;
            USER: string;
        };
        Skype4BAuthentication: {
            AZUREAD: string;
            BASIC: string;
        };
        SortingType: {
            ALPHABETICALLY_ASC: string;
            ALPHABETICALLY_DESC: string;
            POPULARITY_ASC: string;
            POPULARITY_DESC: string;
            RECENT_ACTIVITY_ASC: string;
            RECENT_ACTIVITY_DESC: string;
            TIMESTAMP_ASC: string;
        };
        SpaceActionType: {
            CREATE: string;
            GET_ACTION: string;
        };
        StageAction: {
            USER_ENTERED_STAGE: string;
            USER_LEFT_STAGE: string;
        };
        StageState: {
            ACCEPTED: string;
            INITIAL: string;
            INVITED: string;
            LEFT_CONFERENCE: string;
            REJECTED: string;
            TIMEOUT: string;
            WAS_ON_STAGE: string;
        };
        StatisticsQosMetric: {
            JI: string;
            LA: string;
            MOS: string;
            PLL: string;
            PLR: string;
        };
        StatisticsTimePeriod: {
            FOUR_WEEKS: string;
            ONE_WEEK: string;
            THREE_WEEKS: string;
            TODAY: string;
            TWO_WEEKS: string;
        };
        StatisticsTypes: {
            ACCOUNT_FLUX: string;
            ACCOUNT_STATUS: string;
            CDR_STATS: string;
            DAILY_LOGINS_BY_DEVICE_SUB_TYPE: string;
            DAILY_LOGINS_BY_DEVICE_TYPE_VERSION: string;
            DISCONNECT_CAUSE_BY_DEV_TYPE: string;
            DOCUMENTATION: string;
            ITEM_ACTIVITY: string;
            MINUTES_BY_MEDIA_STACKED: string;
            QOS_METRIC_HISTOGRAM: string;
            RATINGS_INTERVAL_STATS: string;
            RATINGS_PIE_STATS: string;
            USER_ADOPTION: string;
        };
        StcCapabilities: {
            STC_TRANSFER: string;
        };
        SubmitDataResult: {
            NO_CLIENTID: string;
            NO_DATA: string;
            NO_USERID: string;
            OK: string;
            PROCESSING_ERROR: string;
            UNKNOWN: string;
        };
        SupportType: {
            CONVERSATION: string;
            EMAIL: string;
            NO_SUPPORT: string;
            PARTNER_ADMIN_EMAIL: string;
        };
        SystemActionType: {
            GET_GLOBAL_PROPERTIES: string;
            GET_GLOBAL_PROPERTY: string;
        };
        SystemEventType: {
            BROADCAST: string;
            BROADCAST_REMOVED: string;
            MAINTENANCE: string;
            MAINTENANCE_ADDED: string;
            MAINTENANCE_REMOVED: string;
        };
        SystemItemType: {
            AVATAR_CHANGED: string;
            CONFERENCE_DETAILS_CHANGED: string;
            CONVERSATION_CREATED: string;
            CONVERSATION_MODERATED: string;
            CONVERSATION_RENAMED: string;
            GUEST_ACCESS_DISABLED: string;
            GUEST_ACCESS_ENABLED: string;
            GUEST_INVITED: string;
            GUEST_INVITE_RESENT: string;
            GUEST_JOINED: string;
            MODERATOR_RIGHTS_DROPPED: string;
            MODERATOR_RIGHTS_GRANTED: string;
            PARTICIPANT_ADDED: string;
            PARTICIPANT_REMOVED: string;
            RETENTION_ITEMS_REMOVED: string;
            RETENTION_POLICY_CHANGED: string;
        };
        SystemLabel: {
            ARCHIVED: string;
        };
        SystemNotificationType: {
            BROADCAST: string;
            MAINTENANCE: string;
        };
        SystemPermission: {
            ACCOUNTS: string;
            ANALYTICS: string;
            CLIENT_LOGON: string;
            CONTENT_MODERATOR: string;
            CREATE_COMMUNITY: string;
            DEVELOPER_CONSOLE_ACCESS: string;
            FREE_TRIAL: string;
            GUEST_ACCESS: string;
            HD_SCREENSHARE: string;
            HD_VIDEO: string;
            IE_PLUGIN_SUPPORT: string;
            IE_PLUGIN_SUPPORT_LIMITATION: string;
            IGNORE: string;
            INTEGRATIONS: string;
            INVITE_PARTNER: string;
            INVITE_USER: string;
            LARGE_CONFERENCE: string;
            LDAP_AGENT: string;
            MANAGE_TENANT: string;
            MAX_PACKAGE_ACCOUNTS: string;
            MOBILE_BREAKOUT: string;
            MODERATION: string;
            OUTLOOK_PLUGIN: string;
            PARTNER_ADMIN: string;
            PSTN_DIAL_IN: string;
            RECORDING: string;
            ROLE_MEETING_POINT: string;
            ROLE_SESSION_GUEST: string;
            ROLE_SUPPORT: string;
            ROLE_SYSTEM_ADMIN: string;
            ROLE_TECHNICAL: string;
            ROLE_TELEPHONY_CONNECTOR: string;
            ROLE_TENANT_ADMIN: string;
            ROLE_USER: string;
            ROLE_VIRTUAL_TELEPHONY_CONNECTOR: string;
            RTC_PARTICIPANTS: string;
            RTC_WHITE_BOARD: string;
            S4B_INTEGRATION: string;
            SCREEN_CONTROL: string;
            SSO: string;
            SUPPORT_CONVERSATION: string;
            SUPPORT_FORUM: string;
            TELEPHONY: string;
            TENANT_ANALYTICS: string;
            TENANT_STORAGE: string;
            UCAAS: string;
            UCAAS_MLHG_QUEUING: string;
            USER_STORAGE: string;
            VIEW_OPEN_CONVERSATION: string;
        };
        TeamEventType: {
            NOTIFY: string;
            NOTIFY_CANCEL: string;
        };
        TelephonyChangeType: {
            ADDED: string;
            REMOVED: string;
            UPDATED: string;
        };
        TelephonyConfigurationDefaultRouting: {
            ANY: string;
            NONE: string;
        };
        TelephonyRoutingRuleApplication: {
            BOTH: string;
            CONF_DIAL_OUT: string;
            TELEPHONY: string;
        };
        TelephonyRoutingRuleCriteria: {
            DESTINATION: string;
            ORIGIN: string;
        };
        TelephonyRoutingRuleOperator: {
            AND: string;
            OR: string;
        };
        TelephonyRoutingRuleResult: {
            MATCH: string;
            NO_MATCH: string;
            SELECTED: string;
        };
        TenantConfigurableTextType: {
            GUEST_ACCESS_ACCEPTANCE_TEXT: string;
            USER_INVITE_ACCEPTANCE_TEXT: string;
        };
        TenantSettingsType: {
            C4O_AUTO_UPDATE: string;
            C4O_PRESENCE_SETTINGS: string;
            CLIENT_AUTO_UPDATE: string;
            CLOUD_ISTP_DRAFT_NUMBER_LIMIT_ENABLED: string;
            CONVERSATION_RETENTION_POLICY_CHANGEABLE: string;
            CREDENTIALS_LOGIN_ENABLED: string;
            DATA_RETENTION_PERIOD: string;
            DATA_RETENTION_STRATEGY: string;
            DA_AUTO_UPDATE: string;
            DT_LEGAL_INFORMATION: string;
            EXTENSION_BOX_ENABLED: string;
            EXTENSION_CONCEPTBOARD_ENABLED: string;
            EXTENSION_EMBRAVA_ENABLED: string;
            EXTENSION_GOOGLE_CONTACTS_ENABLED: string;
            EXTENSION_GOOGLE_DRIVE_ENABLED: string;
            EXTENSION_JABRA_ENABLED: string;
            EXTENSION_JPL_ENABLED: string;
            EXTENSION_MICROSOFT_EXCHANGE_ENABLED: string;
            EXTENSION_ONE_DRIVE_ENABLED: string;
            EXTENSION_OPEN_XCHANGE_ENABLED: string;
            EXTENSION_PLANTRONICS_ENABLED: string;
            EXTENSION_SENNHEISER_ENABLED: string;
            EXTENSION_SKYPE_FOR_BUSINESS_ENABLED: string;
            EXTENSION_SYNCPLICITY_ENABLED: string;
            EXTENSION_VDI_ENABLED: string;
            EXTENSION_ZAPIER_ENABLED: string;
            FILESHARE_DISABLED: string;
            HELP_URL: string;
            INCOMING_WEBHOOKS_ENABLED: string;
            LOGIN_METHODS_AVAILABLE: string;
            LOOKUP_API_BLACKLISTED_DOMAINS: string;
            MUTE_ON_ENTRY: string;
            MUTE_ON_ENTRY_CMR: string;
            MUTE_ON_ENTRY_OUTCALL: string;
            OAUTH_ACCESS_ENABLED: string;
            PHONE_DIALOUT_CALLER_ID_PREFIX: string;
            PHONE_DIALOUT_ENABLED: string;
            PHONE_DIALOUT_MODE: string;
            PLANTRONICS_HUB_DOWNLOAD_URL: string;
            PLUGIN_CHROME_EXTENSION_ENABLED: string;
            PLUGIN_DESKTOP_APP_ENABLED: string;
            PLUGIN_IE_PLUGIN_ENABLED: string;
            PLUGIN_MICROSOFT_OUTLOOK_INTEGRATION_ENABLED: string;
            PLUGIN_SELF_MANAGED_ENABLED: string;
            REMOTE_CONTROL_ENABLED: string;
            REMOTE_CONTROL_EXTERNAL_ENABLED: string;
            ROOT_DEVICES_ALLOWED: string;
            SCREENSHARE_DISABLED: string;
            SDK_USAGE_ENABLED: string;
            SKYPE4B_CLIENT_ID: string;
            SKYPE4B_ROOT_URL: string;
            SSO_REDIRECT_URL: string;
            SUPPRESS_JOIN_INDICATION_THRESHOLD: string;
            TELEPHONY_CONFIG_CONVERSATION: string;
        };
        TextItemContentType: {
            PLAIN: string;
            RICH: string;
        };
        TextItemState: {
            CLUSTERED: string;
            CREATED: string;
            DELETED: string;
            EDITED: string;
        };
        ThirdPartyConnectorType: {
            BOX: string;
            CLIENT_THIRDPARTY: string;
            CONCEPTBOARD: string;
            EXCHANGE_CONNECTOR: string;
            GOOGLE_CONTACTS: string;
            GOOGLE_DRIVE: string;
            ONE_DRIVE: string;
            OPEN_XCHANGE: string;
            SYNCPLICITY: string;
            ZAPIER: string;
        };
        ThirdPartyConnectorsActionType: {
            CONNECT: string;
            CONNECT_STORAGE: string;
            DISCONNECT: string;
            GET_CONNECTION_STATUS: string;
            GET_EDIT_URL: string;
            GET_FOLDER_ITEMS: string;
            GET_FOLDER_ITEMS_WITH_CURSOR: string;
            GET_OAUTH_DATA: string;
            GET_SETTINGS: string;
            REFRESH_CONNECTION: string;
            SAVE_SETTINGS: string;
            SEND_AUTH_CODE: string;
            SHARE_FOLDER_ITEMS: string;
            UNSHARE_FOLDER_ITEMS: string;
        };
        ThirdPartyContentType: {
            SKYPE4B: string;
        };
        ThirdPartyError: {
            ALREADY_CONNECTED: string;
            BAD_REQUEST: string;
            EMPTY_PASSWORD: string;
            EMPTY_SERVER_ADDRESS: string;
            EMPTY_SETTINGS: string;
            EMPTY_USERNAME: string;
            GENERAL_ERROR: string;
            INSUFFICIENT_PERMISSION: string;
            INVALID_ITEMIDS: string;
            INVALID_SERVER_ADDRESS: string;
            NOT_AUTHORIZED: string;
            NOT_CONNECTED: string;
            RESOURCE_NOT_FOUND: string;
            SERVER_DOWN: string;
            SESSION_EXPIRED: string;
            TOO_MANY_REQUESTS: string;
            UNSUPPORTED_FILE_TYPE: string;
            UNSUPPORTED_PROVIDER: string;
            WRONG_SERVER: string;
        };
        ThirdPartyEventType: {
            CONNECTED_TO_THIRDPARTY: string;
            DISCONNECTED_FROM_THIRDPARTY: string;
        };
        TimestampFilter: {
            CREATION: string;
            MODIFICATION: string;
        };
        TranscriptionError: {
            INVALID_CALL: string;
            INVALID_PROVIDER: string;
            RECORDING_ABORTED: string;
            RECORDING_IN_PROGRESS: string;
            RECORDING_NOT_STARTED: string;
            RECORDING_NOT_SUPPORTED: string;
        };
        TrunkState: {
            DOWN: string;
            NOT_REQUESTED: string;
            REQUESTED: string;
            SUSPENDING: string;
            UP: string;
        };
        UISettings: {
            DETAILS: string;
            INFO: string;
            PARTICIPANTS: string;
            PINNED_TOPICS: string;
        };
        UcaasDeviceStatus: {
            CONFIGURED: string;
            NOT_CONFIGURED: string;
            NO_DEVICE: string;
        };
        UserActionType: {
            ADD_RECENT_USED_CMR: string;
            CHANGE_PASSWORD: string;
            EMAIL_UPDATE: string;
            GENERATE_EMAIL_UPDATE_TOKEN: string;
            GET_ATTACHMENTS: string;
            GET_DEVICES: string;
            GET_LDAP_TECHNICAL_USER_PRESENCE: string;
            GET_LOGGED_ON: string;
            GET_PRESENCE: string;
            GET_RECENT_USED_CMRS: string;
            GET_SECURITY_TOKEN_INFO: string;
            GET_STUFF: string;
            GET_TELEPHONY_DATA: string;
            GET_TENANT_ID_TO_NAME_MAP: string;
            GET_TENANT_SETTINGS: string;
            GET_USERS_BY_IDS: string;
            GET_USERS_BY_MAILS: string;
            GET_USER_BY_ID: string;
            GET_USER_BY_MAIL: string;
            GET_USER_EXTENSIONS: string;
            GET_USER_SETTINGS: string;
            GO_TO_SLEEP: string;
            IS_ALLOWED_TO_ADD_CMR: string;
            LOGON: string;
            LOGOUT: string;
            OAUTH_GET_GRANTED_ACCESS_TOKENS: string;
            OAUTH_REVOKE_ACCESS_TOKEN: string;
            RENEW_TOKEN: string;
            RESET_OPENSCAPE_DEVICE_PINS: string;
            REVOKE_MANAGED_DEVICES: string;
            REVOKE_SECURITY_TOKEN: string;
            SET_CLIENT_CAPABILITIES: string;
            SET_PASSWORD: string;
            SET_PRESENCE: string;
            SET_USER_EXTENSION_STATE: string;
            SET_USER_SETTINGS: string;
            SUBSCRIBE_DEVICES: string;
            SUBSCRIBE_PRESENCE: string;
            SUBSCRIBE_TENANT_PRESENCE: string;
            UNSUBSCRIBE_DEVICES: string;
            UNSUBSCRIBE_PRESENCE: string;
            UNSUBSCRIBE_TENANT_PRESENCE: string;
            UPDATE: string;
            WAKE_UP: string;
        };
        UserDataActionType: {
            GET_USER_DATA: string;
        };
        UserEventType: {
            ATC_REFRESH_FAILED: string;
            CMR_COMMAND: string;
            CMR_SETTINGS_UPDATED: string;
            DEVICE_LIST_CHANGED: string;
            NOTIFICATION_SUBSCRIPTION_CHANGE: string;
            PASSWORD_CHANGED: string;
            SESSION_CLOSED: string;
            SESSION_EXPIRES: string;
            SESSION_EXPIRING: string;
            TELEPHONY_CHANGED: string;
            TELEPHONY_DATA: string;
            TENANT_CONFIGURATION_UPDATED: string;
            TENANT_PRESENCE_CHANGE: string;
            UCAAS_DEVICE_UPDATED: string;
            USER_PRESENCE_CHANGE: string;
            USER_SETTING_UPDATED: string;
            USER_UPDATED: string;
        };
        UserRole: {
            BOT: string;
            GUEST: string;
            MEETING_POINT: string;
            SESSION_GUEST: string;
            SUPPORT: string;
            SYSTEM_ADMIN: string;
            TELEPHONY_CONNECTOR: string;
            TENANT_ADMIN: string;
            USER: string;
            VIRTUAL_TELEPHONY_CONNECTOR: string;
        };
        UserRoutingMessageType: {
            ATC: string;
            CMP: string;
            CONTACT_CARD: string;
            DESKTOP_APP: string;
            MOBILE_BREAKOUT: string;
            SDK: string;
            STC: string;
        };
        UserSettingArea: {
            ALL: string;
            CLIENT: string;
            DESKTOP: string;
            EMAIL: string;
            PRIVACY: string;
        };
        UserSettingDataType: {
            BOOLEAN: string;
            NUMBER: string;
            STRING: string;
            TIMESTAMP: string;
        };
        UserSettingKey: {
            ATC_ROUTING: string;
            AUDIO_WEB_SOUNDS: string;
            DESKTOP_CONVERSATION_CHANGE: string;
            DESKTOP_MESSAGE_NOTIFICATIONS_SETTING: string;
            DESKTOP_MISSED_MESSAGE: string;
            DESKTOP_RTC: string;
            DESKTOP_SYSINFO: string;
            EMAIL_INVITES: string;
            EMAIL_MISSED_RTC: string;
            EMAIL_SUMMARY: string;
            EMAIL_UPDATE: string;
            ENHANCED_DESKTOP_MESSAGE_NOTIFICATION: string;
            ENHANCED_MOBILE_MESSAGE_NOTIFICATION: string;
            FIRST_WEB_LOGIN_TIMESTAMP: string;
            HIDE_PROFILE_EXTERNAL_ENABLED: string;
            KEYBOARD_SHORTCUTS_ENABLED: string;
            MOBILE_ENABLE_VIDEO_WIFI_ONLY: string;
            MOBILE_MESSAGE_NOTIFICATIONS_SETTING: string;
            OPT_OUT_PRESENCE: string;
            PLAY_PICKUP_SOUND: string;
            PLAY_SOUND_MESSAGE_NOTIFICATIONS: string;
            PLAY_SOUND_RTC: string;
            PLAY_SYSTEM_SOUNDS: string;
            RELEASE_NOTES_MOBILE_VERSION: string;
            RELEASE_NOTES_WEB_VERSION: string;
            SECOND_TELEPHONY_CALL_ROUTING: string;
            SHARE_LOCATION: string;
            STATUS_MESSAGE_TEXT: string;
            TM_IOS_SEARCH: string;
            TM_WEB_ACTIVE_SPEAKER_VIDEO: string;
            TM_WEB_ADD_CONVERSATION_TITLE: string;
            TM_WEB_ADD_MULTIPLE_USERS: string;
            TM_WEB_ADMIN_TELEPHONY_ENABLED: string;
            TM_WEB_CALL_ACTION_BUTTONS: string;
            TM_WEB_CONFERENCE_DIAL_IN: string;
            TM_WEB_EMERGENCY_CALL_DISCLAIMER: string;
            TM_WEB_ENTER_NAME: string;
            TM_WEB_FIRST_CALL_ACTIONS: string;
            TM_WEB_FIRST_CALL_FULLSCREEN: string;
            TM_WEB_FIRST_CALL_GO_TO_FEED: string;
            TM_WEB_FIRST_CONF_RING_ALL: string;
            TM_WEB_FIRST_CONV_ADD_PARTCPNTS: string;
            TM_WEB_FIRST_CONV_SET_NAME: string;
            TM_WEB_FIRST_CONV_START_CONV: string;
            TM_WEB_FIRST_DIRECT_CONVERSATION: string;
            TM_WEB_FIRST_DIRECT_CONV_ADD: string;
            TM_WEB_FIRST_DIRECT_CONV_SAY_HI: string;
            TM_WEB_FIRST_DIRECT_PRIVATE_CONV: string;
            TM_WEB_FIRST_GROUP_CONVERSATION: string;
            TM_WEB_FOCUS_MODE: string;
            TM_WEB_FULL_SCREEN_MODES: string;
            TM_WEB_GUEST_ACCESS: string;
            TM_WEB_INVITE_USERS: string;
            TM_WEB_LEAVING_CONVERSATION: string;
            TM_WEB_MUTE_CONVERSATION: string;
            TM_WEB_OPEN_CONVERSATION: string;
            TM_WEB_REMOVING_PARTICIPANTS: string;
            TM_WEB_RESERVE_1: string;
            TM_WEB_RESERVE_2: string;
            TM_WEB_RICH_TEXT_EDITING: string;
            TM_WEB_SCREEN_SHARING_ENABLED: string;
            TM_WEB_SEARCH_FILTER: string;
            TM_WEB_SHARE_CONFERENCE_DETAILS: string;
            TM_WEB_START_CONV_WITH: string;
            TM_WEB_START_RECORDING: string;
            TM_WEB_STOP_RECORDING_INIT: string;
            TM_WEB_STOP_RECORDING_PART: string;
            TM_WEB_SUPPORT_FEEDBACK: string;
            TM_WEB_SUPPORT_ISSUE: string;
            TM_WEB_TELPHONY_NUMBER_ASSIGNED: string;
            TM_WEB_THIRD_COLUMN: string;
            TM_WEB_VIEW_MUTED_CONVERSATIONS: string;
            VOICEMAIL_CUSTOMGREETING_ENABLED: string;
            VOICEMAIL_CUSTOMGREETING_URI: string;
            VOICEMAIL_ENABLED: string;
            VOICEMAIL_TIMEOUT: string;
        };
        UserState: {
            ACTIVE: string;
            DELETED: string;
            INACTIVE: string;
            PURGED: string;
            SUSPENDED: string;
        };
        UserType: {
            BOT: string;
            GUEST: string;
            MEETING_POINT: string;
            REGULAR: string;
            SESSION_GUEST: string;
            SUPPORT: string;
            TECHNICAL: string;
            TELEPHONY: string;
            XMPP: string;
        };
        VersionActionType: {
            GET_VERSION: string;
        };
        WSMessageType: {
            EVENT: string;
            REQUEST: string;
            RESPONSE: string;
        };
    };

    export const DefaultAvatars: {
    };

    export const Enums: {
        AccountStatus: {
            ACTIVE: string;
            CREATED: string;
            DELETED: string;
            INITIAL: string;
            INVITED: string;
            NONE: string;
            SUSPENDED: string;
        };
        AgentState: {
            NotReady: string;
            Ready: string;
        };
        AtcInfoMessage: {
            ENABLE_PBX_CALL_LOG: string;
            GET_GTC_VERSION_REQUEST: string;
            GET_GTC_VERSION_RESPONSE: string;
            SET_ROUTE_TO_DESK: string;
        };
        AtcMessage: {
            ADVANCING: string;
            CSTA: string;
            INFO: string;
            PRIMARYCLIENT: string;
            SETTINGS: string;
        };
        AtcRegistrationState: {
            Disconnected: string;
            ForcedUnregistered: string;
            Registered: string;
            Registering: string;
            Unregistered: string;
        };
        CallClientTerminatedReason: {
            ANOTHER_CLIENT_ANSWERED: string;
            ANOTHER_CLIENT_PULLED_CALL: string;
            ANOTHER_CLIENT_REJECTED: string;
            CALLER_LEFT_CONFERENCE: string;
            CALL_MOVED_TO_ANOTHER_CONV: string;
            CLIENT_ENDED_PRFX: string;
            DISCONNECTED: string;
            ENDED_BY_ANOTHER_USER: string;
            FAILED_TO_SEND: string;
            ICE_TIMED_OUT: string;
            LOST_MEDIA_STREAM: string;
            LOST_WEBSOCKET_CONNECTION: string;
            MEDIA_RENEGOTIATION: string;
            NO_USERS_LEFT: string;
            PAGE_UNLOADED: string;
            REQUEST_TIMEOUT: string;
            REQUEST_TO_SERVER_FAILED: string;
            RTC_SESSION_START_FAILED: string;
            SET_REMOTE_SDP_FAILED: string;
            USER_ENDED: string;
            USER_LOGGED_OUT: string;
        };
        CallDirection: {
            INCOMING: string;
            NONE: string;
            OUTGOING: string;
        };
        CallServerTerminatedReason: {
            SERVER_ENDED_PRFX: string;
        };
        CallState: {
            Active: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            ActiveRemote: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Answering: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Busy: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Connecting: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Declined: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Delivered: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Failed: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Held: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            HoldOnHold: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Holding: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Idle: {
                established: boolean;
                name: string;
                ui: string;
            };
            Initiated: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            NotAnswered: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            NotStarted: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Ringing: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Started: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Terminated: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Waiting: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
        };
        CallStateName: {
            Active: string;
            ActiveRemote: string;
            Answering: string;
            Busy: string;
            Connecting: string;
            Declined: string;
            Delivered: string;
            Failed: string;
            Held: string;
            HoldOnHold: string;
            Holding: string;
            Idle: string;
            Initiated: string;
            NotAnswered: string;
            NotStarted: string;
            Ringing: string;
            Started: string;
            Terminated: string;
            Waiting: string;
        };
        ConnectionState: {
            Connected: string;
            Connecting: string;
            Disconnected: string;
            Reconnecting: string;
        };
        ContactCardMessage: {
            CLICK_TO_ANSWER_REQUEST: string;
            CLICK_TO_ANSWER_RESPONSE: string;
            CLICK_TO_CALL_REQUEST: string;
            CLICK_TO_CALL_RESPONSE: string;
            CONVERSATION_NAVIGATE_REQUEST: string;
            CONVERSATION_NAVIGATE_RESPONSE: string;
            JOIN_CONFERENCE_REQUEST: string;
            JOIN_CONFERENCE_RESPONSE: string;
            MUTE_DEVICE_REQUEST: string;
            MUTE_DEVICE_RESPONSE: string;
        };
        ContactCardResponseCode: {
            BUSY: string;
            CALL_DECLINED: string;
            CALL_FAILED: string;
            CALL_NOT_FOUND: string;
            CONVERSATION_NAVIGATE_FAILED: string;
            CONVERSATION_NOT_FOUND: string;
            JOIN_CONFERENCE_FAILED: string;
            MUTE_DEVICE_FAILED: string;
            OK: string;
            TELEPHONY_NOT_AVAILABLE: string;
            USER_NOT_FOUND: string;
        };
        ConversationItemType: {
            RTC: string;
            SYSTEM: string;
            TEXT: string;
        };
        ConversationParticipantType: {
            ACTIVE: string;
            FORMER: string;
            GUEST: string;
            MODERATOR: string;
            REGULAR: string;
        };
        ConversationType: {
            COMMUNITY: string;
            DIRECT: string;
            GROUP: string;
            LARGE: string;
        };
        CstaCallState: {
            Active: {
                established: boolean;
                name: string;
            };
            Busy: {
                established: boolean;
                name: string;
            };
            Conference: {
                established: boolean;
                name: string;
            };
            ConferenceHolding: {
                established: boolean;
                name: string;
            };
            Connecting: {
                established: boolean;
                name: string;
            };
            Delivered: {
                established: boolean;
                name: string;
            };
            ExtendedRinging: {
                established: boolean;
                name: string;
            };
            Failed: {
                established: boolean;
                name: string;
            };
            Held: {
                established: boolean;
                name: string;
            };
            HoldOnHold: {
                established: boolean;
                name: string;
            };
            Holding: {
                established: boolean;
                name: string;
            };
            Idle: {
                established: boolean;
                name: string;
                ui: string;
            };
            Initiated: {
                established: boolean;
                name: string;
            };
            Offered: {
                established: boolean;
                name: string;
            };
            Parked: {
                established: boolean;
                name: string;
            };
            Ringing: {
                established: boolean;
                name: string;
            };
            Terminated: {
                established: boolean;
                name: string;
            };
            TransferFailed: {
                established: boolean;
                name: string;
            };
        };
        DeviceType: {
            APPLICATION: string;
            MOBILE: string;
            PHONE: string;
            SDK: string;
            SESSION_GUEST: string;
            UNKNOWN: string;
            WEB: string;
        };
        FaqArticle: {
            ACCESSIBILITY: string;
            AGC: string;
            DEVICE_ACCESS: string;
            JABRA: string;
            LOGIN: string;
            MODERATION: string;
            PLANTRONICS: string;
            SHORTCUTS: string;
            TELEPHONY: string;
        };
        FormControlType: {
            BUTTON: string;
            CHECKBOX: string;
            DROPDOWN: string;
            INPUT: string;
            LABEL: string;
            RADIO: string;
            SPACER: string;
        };
        GetAccountsFilterCriteria: {
            DISPLAY_NAME: string;
            FIRST_NAME: string;
            LAST_NAME: string;
            PRIMARY_EMAIL: string;
            STATUS: string;
            TAG: string;
            TELEPHONY_TRUNK_GROUP_ID: string;
            TELEPHONY_USER_ID: string;
        };
        GetAccountsOrdering: {
            ASCENDING: string;
            DESCENDING: string;
        };
        GetAccountsSorting: {
            BY_FIRST_NAME: string;
            BY_LAST_LOGIN: string;
            BY_LAST_NAME: string;
            BY_LOCATION: string;
            BY_NAME: string;
            BY_PHONE_NUMBER: string;
            BY_PRIMARY_EMAIL: string;
        };
        IdleState: {
            Active: string;
            Idle: string;
        };
        JournalEntryTypes: {
            MISSED: string;
            REGULAR: string;
        };
        Locale: {
            DE_DE: string;
            EN_US: string;
            ES_ES: string;
            FR_FR: string;
            IT_IT: string;
            NL_NL: string;
            PT_BR: string;
            RU_RU: string;
            ZH_HANS_CN: string;
        };
        LogLevel: {
            Debug: number;
            Error: number;
            Info: number;
            Off: number;
            Warning: number;
        };
        MeetingPointMessage: {
            CHANGE_LAYOUT_REQUEST: string;
            CHANGE_LAYOUT_RESPONSE: string;
            GET_MEETINGPOINT_INVITER_REQUEST: string;
            GET_MEETINGPOINT_INVITER_RESPONSE: string;
            INVITE_REQUEST: string;
            INVITE_RESPONSE: string;
            MUTE_REQUEST: string;
            MUTE_RESPONSE: string;
            START_HD_VIDEO_REQUEST: string;
            START_HD_VIDEO_RESPONSE: string;
            SWAP_DISPLAYS_REQUEST: string;
            SWAP_DISPLAYS_RESPONSE: string;
            TOGGLE_SCREENSHARING: string;
            TOGGLE_SHOW_VIDEO: string;
            TOGGLE_VIDEO_REQUEST: string;
            TOGGLE_VIDEO_RESPONSE: string;
            TOGGLE_WHITEBOARD: string;
            UNMUTE_REQUEST: string;
            UNMUTE_RESPONSE: string;
        };
        MeetingPointResponseCode: {
            CHANGE_LAYOUT_FAILED: string;
            FAILED: string;
            INVALID_PIN: string;
            INVITE_FAILED: string;
            MEETINGPOINT_BUSY: string;
            MISSING_REQUIRED_PARAMETER: string;
            MUTE_FAILED: string;
            NOT_CMP_USER: string;
            NOT_FOUND: string;
            NOT_SUPPORTED: string;
            OK: string;
            SWAP_DISPLAYS_FAILED: string;
            TOGGLE_SCREENSHARING_FAILED: string;
            TOGGLE_SHOW_VIDEO_FAILED: string;
            TOGGLE_VIDEO_FAILED: string;
            TOGGLE_WHITEBOARD_FAILED: string;
            UNMUTE_FAILED: string;
        };
        MissedReasonTypes: {
            BUSY: string;
            CANCELLED: string;
            DECLINED: string;
            DEFAULT: string;
            DEST_OUT_OF_ORDER: string;
            REORDER_TONE: string;
            TRANSFERRED: string;
        };
        MobileBreakoutMessage: {
            DIAL: string;
        };
        ParticipantAction: {
            Drop: {
                icon: string;
                localize: string;
                name: string;
                type: string;
            };
            Mute: {
                icon: string;
                localize: string;
                name: string;
                type: string;
            };
            RemoveFromStage: {
                icon: string;
                localize: string;
                name: string;
                type: string;
            };
            StartVideo: {
                icon: string;
                localize: string;
                name: string;
                type: string;
            };
            StopVideo: {
                icon: string;
                localize: string;
                name: string;
                type: string;
            };
            Unmute: {
                icon: string;
                localize: string;
                name: string;
                type: string;
            };
        };
        ParticipantCriteria: {
            DISPLAY_NAME: string;
            TYPE: string;
        };
        ParticipantState: {
            Active: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Busy: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Calling: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Connecting: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            ConnectionLost: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Declined: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Delivered: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Idle: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Inactive: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Initiated: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Joined: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Muted: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            OffStage: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Offline: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            OnStage: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Removed: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Ringing: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Terminated: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
            Timeout: {
                css: string;
                established: boolean;
                name: string;
                ui: string;
            };
        };
        PresenceState: {
            AVAILABLE: string;
            AWAY: string;
            BUSY: string;
            DND: string;
            OFFLINE: string;
        };
        RTCItemType: {
            ENDED: string;
            MISSED: string;
            MOVED: string;
            PARTICIPANT_JOINED: string;
            PARTICIPANT_LEFT: string;
            STARTED: string;
        };
        RTCParticipantType: {
            EXTERNAL: string;
            MEETING_POINT: string;
            SESSION_GUEST: string;
            TELEPHONY: string;
            TEST_CALL: string;
            USER: string;
            VOICE_MAIL: string;
        };
        RecordingInfoState: {
            FINISHED: string;
            INITIAL: string;
            STARTED: string;
            START_PENDING: string;
            STOPPED: string;
        };
        RecordingVideoLayoutName: {
            SINGLE: string;
            VIDEO_SCREEN_25_75: string;
            VIDEO_SCREEN_50_50: string;
            VIDEO_SCREEN_75_25: string;
        };
        RedirectionTypes: {
            CallForward: {
                name: string;
                ui: string;
            };
            CallPickedUp: {
                name: string;
                ui: string;
            };
            CallPickupNotification: {
                name: string;
                ui: string;
            };
        };
        RetrieveAction: {
            CONVERSATIONS: string;
            CONVERSATIONS_AND_IDS: string;
            CONVERSATION_IDS: string;
        };
        ScreenDisplayAction: {
            SwapDisplays: {
                icon: string;
                localize: string;
                name: string;
                type: string;
            };
            ToggleScreenShare: {
                localize: string;
                name: string;
                type: string;
            };
            ToggleVideo: {
                localize: string;
                name: string;
                type: string;
            };
            ToggleWhiteboard: {
                localize: string;
                name: string;
                type: string;
            };
        };
        ScreenLayoutAction: {
            ToggleFocusLayout: {
                localize: string;
                name: string;
                type: string;
            };
            ToggleLargeLayout: {
                localize: string;
                name: string;
                type: string;
            };
            ToggleSplitLayout: {
                localize: string;
                name: string;
                type: string;
            };
        };
        SdpStatus: {
            AnswerApplied: string;
            AnswerPending: string;
            AnswerReceived: string;
            AnswerSent: string;
            Connected: string;
            Disconnected: string;
            None: string;
            OfferPending: string;
            OfferReceived: string;
            OfferSent: string;
            PrAnswerReceived: string;
        };
        SearchContext: {
            MEETING_POINT: string;
            USER: string;
        };
        SearchDirection: {
            AFTER: string;
            BEFORE: string;
            BOTH: string;
        };
        SearchScope: {
            ALL: string;
            CONVERSATIONS: string;
            DATE: string;
            FILES: string;
            FILTER: string;
            LABEL: string;
            MEMBERS: string;
            MESSAGES: string;
            PEOPLE: string;
            SENT_BY: string;
        };
        SearchStatusCode: {
            CANCELED: string;
            ERROR: string;
            FINISHED: string;
            MORE_RESULT: string;
            NO_RESULT: string;
            TIMEOUT: string;
        };
        SessionClosedReason: {
            DELETED: string;
            NEW_CONNECTION_DETECTED: string;
            SUSPENDED: string;
            TENANT_DELETED: string;
            TENANT_SUSPENDED: string;
            UPGRADE_REQUIRED: string;
        };
        StcMessage: {
            TRANSFER: string;
        };
        SystemItemType: {
            AVATAR_CHANGED: string;
            CONFERENCE_DETAILS_CHANGED: string;
            CONVERSATION_CREATED: string;
            CONVERSATION_MODERATED: string;
            CONVERSATION_RENAMED: string;
            GUEST_ACCESS_DISABLED: string;
            GUEST_ACCESS_ENABLED: string;
            GUEST_INVITED: string;
            GUEST_INVITE_RESENT: string;
            GUEST_JOINED: string;
            MODERATOR_RIGHTS_DROPPED: string;
            MODERATOR_RIGHTS_GRANTED: string;
            PARTICIPANT_ADDED: string;
            PARTICIPANT_REMOVED: string;
            RETENTION_ITEMS_REMOVED: string;
            RETENTION_POLICY_CHANGED: string;
        };
        SystemPermission: {
            ACCOUNTS: string;
            ANALYTICS: string;
            CLIENT_LOGON: string;
            CONTENT_MODERATOR: string;
            CREATE_COMMUNITY: string;
            DEVELOPER_CONSOLE_ACCESS: string;
            FREE_TRIAL: string;
            GUEST_ACCESS: string;
            HD_SCREENSHARE: string;
            HD_VIDEO: string;
            IE_PLUGIN_SUPPORT: string;
            IE_PLUGIN_SUPPORT_LIMITATION: string;
            IGNORE: string;
            INTEGRATIONS: string;
            INVITE_PARTNER: string;
            INVITE_USER: string;
            LARGE_CONFERENCE: string;
            LDAP_AGENT: string;
            MANAGE_TENANT: string;
            MAX_PACKAGE_ACCOUNTS: string;
            MOBILE_BREAKOUT: string;
            MODERATION: string;
            OUTLOOK_PLUGIN: string;
            PARTNER_ADMIN: string;
            PSTN_DIAL_IN: string;
            RECORDING: string;
            ROLE_MEETING_POINT: string;
            ROLE_SESSION_GUEST: string;
            ROLE_SUPPORT: string;
            ROLE_SYSTEM_ADMIN: string;
            ROLE_TECHNICAL: string;
            ROLE_TELEPHONY_CONNECTOR: string;
            ROLE_TENANT_ADMIN: string;
            ROLE_USER: string;
            ROLE_VIRTUAL_TELEPHONY_CONNECTOR: string;
            RTC_PARTICIPANTS: string;
            RTC_WHITE_BOARD: string;
            S4B_INTEGRATION: string;
            SCREEN_CONTROL: string;
            SSO: string;
            SUPPORT_CONVERSATION: string;
            SUPPORT_FORUM: string;
            TELEPHONY: string;
            TENANT_ANALYTICS: string;
            TENANT_STORAGE: string;
            UCAAS: string;
            UCAAS_MLHG_QUEUING: string;
            USER_STORAGE: string;
            VIEW_OPEN_CONVERSATION: string;
        };
        Targets: {
            Cell: {
                css: string;
                name: string;
                ui: string;
            };
            Desk: {
                css: string;
                name: string;
                ui: string;
            };
            Other: {
                css: string;
                name: string;
                ui: string;
            };
            VM: {
                css: string;
                name: string;
                ui: string;
            };
            WebRTC: {
                css: string;
                name: string;
                ui: string;
            };
        };
        TextItemContentType: {
            PLAIN: string;
            RICH: string;
        };
        TransferCallFailedCauses: {
            Busy: {
                name: string;
                ui: string;
            };
            DND: {
                name: string;
                ui: string;
            };
            Unreachable: {
                name: string;
                ui: string;
            };
        };
        UserState: {
            ACTIVE: string;
            DELETED: string;
            INACTIVE: string;
            PURGED: string;
            SUSPENDED: string;
        };
        UserType: {
            BOT: string;
            GUEST: string;
            MEETING_POINT: string;
            REGULAR: string;
            SESSION_GUEST: string;
            SUPPORT: string;
            TECHNICAL: string;
            TELEPHONY: string;
            XMPP: string;
        };
        VideoCodecs: {
            H264: string;
            VP8: string;
            VP9: string;
        };
        VideoResolution: {
            FHD: string;
            HD: string;
            NONE: string;
            VGA: string;
        };
        VideoResolutionLevel: {
            VIDEO_1080: string;
            VIDEO_480: string;
            VIDEO_720: string;
        };
    };

    export const Injectors: {
    };

    export const NodeSDK: {
        logger: {
            debug: any;
            error: any;
            info: any;
            warn: any;
            warning: any;
        };
        proxyAgent: any;
        rejectUnauthorized: boolean;
    };

    export const RoutingOptions: {
        AlternativeNumber: {
            desc: string;
            name: string;
            ui: string;
        };
        DefaultRouting: {
            desc: string;
            name: string;
            newDesc: string;
            ui: string;
        };
        DeskPhone: {
            desc: string;
            name: string;
            ui: string;
        };
        Other: {
            desc: string;
            name: string;
            ui: string;
        };
        VM: {
            desc: string;
            name: string;
            ui: string;
        };
    };

    export const RtpStatsConfig: {
        COLLECTION_INTERVAL: number;
        DELAY_RTT_PROCESSING: number;
        DELAY_UPON_ANSWER: number;
    };

    export const isElectron: boolean;

    export const isSDK: boolean;

    export const productBrand: string;

    export const productName: string;

    export const supportedEvents: string[];

    export const version: string;

    export function AtcCallInfo(): any;

    export function AtcRegistrationSvcImpl($rootScope: any, $timeout: any, LogSvc: any, PubSubSvc: any, RegistrationSvc: any, ConversationSvc: any): any;

    export function CallControlSvcImpl($rootScope: any, $q: any, $timeout: any, LogSvc: any, PubSubSvc: any, CircuitCallControlSvc: any, ConversationSvc: any, CstaSvc: any, MeetingPointSvc: any, NotificationSvc: any, UserSvc: any, UserProfileSvc: any): any;

    export function CallStatsHandler(peerConnections: any): any;

    export function CallStatsHandlerUnified(peerConnections: any): any;

    export function CircuitCallControlSvcImpl($rootScope: any, $timeout: any, $interval: any, $window: any, $q: any, LogSvc: any, PubSubSvc: any, UserSvc: any, ConversationSvc: any, NotificationSvc: any, InstrumentationSvc: any, DeviceDiagnosticSvc: any): any;

    export function ConnectionController(config: any): any;

    export function CstaParser(): any;

    export function CstaSvcImpl($rootScope: any, $timeout: any, LogSvc: any, PubSubSvc: any, CircuitCallControlSvc: any, AtcRegistrationSvc: any, UserSvc: any, ConversationSvc: any): any;

    export function DeviceDiagnosticSvcImpl($rootScope: any, $timeout: any, LogSvc: any, PubSubSvc: any, LocalStoreSvc: any): any;

    export function Error(code: any, err: any): void;

    export function ExtensionSvcImpl($rootScope: any, $timeout: any, $window: any, $q: any, LogSvc: any, PubSubSvc: any, PopupSvc: any, RegistrationSvc: any): any;

    export function FileUpload(config: any): any;

    export function PubSubSvcImpl(LogSvc: any): any;

    export function RtcPeerConnections(pcConfig: any, pcConstraints: any, options: any): any;

    export function RtcPeerConnectionsUnified(pcConfig: any, options: any): any;

    export function RtcSessionController(options: any): any;

    export function SdkHelperSvcImpl($rootScope: any, $q: any, LogSvc: any, PubSubSvc: any): any;

    export function SdkServices(clientApiHandler: any, userToUserHandler: any): any;

    export function UtilSvcImpl($rootScope: any, $q: any, $timeout: any, LogSvc: any, ...args: any[]): any;

    export function isCompatible(): any;

    export function setLogger(appLogger: any, ...args: any[]): void;

    export function supportedFeatures(): any;

    export namespace AtcCallInfo {}

    export namespace AtcRegistrationSvcImpl {}

    export namespace AtcRemoteCall {
        namespace parent {
            function addParticipant(participant: any, pcState: any, update: any): any;

            function callHeaderType(): any;

            function callTypeCss(): any;

            function canToggleVideo(): any;

            function checkCstaState(states: any): any;

            function clearAtcHandoverInProgress(): void;

            function clearHoldInProgress(): void;

            function clearRetrieveInProgress(): void;

            function getCstaState(): any;

            function getParticipant(userId: any): any;

            function getPosition(): any;

            function getRedirectingUser(): any;

            function getRedirectionType(): any;

            function hasLocalScreenShare(): any;

            function hasLocalVideo(): any;

            function hasOtherParticipants(): any;

            function hasParticipant(userId: any): any;

            function hasRemoteMedia(): any;

            function hasRemoteScreenShare(): any;

            function hasRemoteVideo(): any;

            function hasVideo(): any;

            function isAtcConferenceCall(): any;

            function isCallingOut(): any;

            function isConferenceCallAllowed(): any;

            function isConsultAllowed(): any;

            function isEstablished(): any;

            function isForwarded(): any;

            function isHeld(): any;

            function isHoldAllowed(): any;

            function isHoldInProgress(): any;

            function isHolding(): any;

            function isMakeCallAllowed(): any;

            function isMuted(): any;

            function isOutgoingState(): any;

            function isPickedUp(): any;

            function isPickupNotification(): any;

            function isPresent(): any;

            function isReconnectAllowed(): any;

            function isRetrieveAllowed(): any;

            function isRetrieveInProgress(): any;

            function isTransferAllowed(): any;

            function isTransferCallAllowed(): any;

            function mute(): any;

            function outgoingFailed(): any;

            function removeParticipant(userId: any): any;

            function sameAs(call: any): any;

            function setAtcHandoverInProgress(): void;

            function setCstaState(state: any): void;

            function setDisconnectCause(cause: any, reason: any): void;

            function setHoldInProgress(): void;

            function setParticipantState(userId: any, state: any): any;

            function setPeerUsersAsParticipants(): any;

            function setRedirectingUser(phoneNumber: any, fqNumber: any, displayName: any, userId: any, redirectionType: any): void;

            function setRedirectionType(type: any): void;

            function setRetrieveInProgress(): void;

            function terminate(): void;

            function toString(): any;

            function toggleMute(): any;

            function unmute(): any;

            function updateMediaType(): void;

            function updateParticipant(participant: any, pcState: any): any;

            function updateSecurityStatus(status: any): void;

            namespace addParticipant {}

            namespace callHeaderType {}

            namespace callTypeCss {}

            namespace canToggleVideo {}

            namespace checkCstaState {}

            namespace clearAtcHandoverInProgress {}

            namespace clearHoldInProgress {}

            namespace clearRetrieveInProgress {}

            namespace getCstaState {}

            namespace getParticipant {}

            namespace getPosition {}

            namespace getRedirectingUser {}

            namespace getRedirectionType {}

            namespace hasLocalScreenShare {}

            namespace hasLocalVideo {}

            namespace hasOtherParticipants {}

            namespace hasParticipant {}

            namespace hasRemoteMedia {}

            namespace hasRemoteScreenShare {}

            namespace hasRemoteVideo {}

            namespace hasVideo {}

            namespace isAtcConferenceCall {}

            namespace isCallingOut {}

            namespace isConferenceCallAllowed {}

            namespace isConsultAllowed {}

            namespace isEstablished {}

            namespace isForwarded {}

            namespace isHeld {}

            namespace isHoldAllowed {}

            namespace isHoldInProgress {}

            namespace isHolding {}

            namespace isMakeCallAllowed {}

            namespace isMuted {}

            namespace isOutgoingState {}

            namespace isPickedUp {}

            namespace isPickupNotification {}

            namespace isPresent {}

            namespace isReconnectAllowed {}

            namespace isRetrieveAllowed {}

            namespace isRetrieveInProgress {}

            namespace isTransferAllowed {}

            namespace isTransferCallAllowed {}

            namespace mute {}

            namespace outgoingFailed {}

            namespace removeParticipant {}

            namespace sameAs {}

            namespace setAtcHandoverInProgress {}

            namespace setCstaState {}

            namespace setDisconnectCause {}

            namespace setHoldInProgress {}

            namespace setParticipantState {}

            namespace setPeerUsersAsParticipants {}

            namespace setRedirectingUser {}

            namespace setRedirectionType {}

            namespace setRetrieveInProgress {}

            namespace terminate {}

            namespace toString {}

            namespace toggleMute {}

            namespace unmute {}

            namespace updateMediaType {}

            namespace updateParticipant {}

            namespace updateSecurityStatus {}

        }

            function addParticipant(participant: any, pcState: any, update: any): any;

            function callHeaderType(): any;

            function callTypeCss(): any;

            function canToggleVideo(): any;

            function checkCstaState(states: any): any;

            function clearAtcHandoverInProgress(): void;

            function clearHoldInProgress(): void;

            function clearRetrieveInProgress(): void;

            function getCstaState(): any;

            function getParticipant(userId: any): any;

            function getPosition(): any;

            function getRedirectingUser(): any;

            function getRedirectionType(): any;

            function hasLocalScreenShare(): any;

            function hasLocalVideo(): any;

            function hasOtherParticipants(): any;

            function hasParticipant(userId: any): any;

            function hasRemoteMedia(): any;

            function hasRemoteScreenShare(): any;

            function hasRemoteVideo(): any;

            function hasVideo(): any;

            function isAtcConferenceCall(): any;

            function isCallingOut(): any;

            function isConferenceCallAllowed(): any;

            function isConsultAllowed(): any;

            function isEstablished(): any;

            function isForwarded(): any;

            function isHeld(): any;

            function isHoldAllowed(): any;

            function isHoldInProgress(): any;

            function isHolding(): any;

            function isMakeCallAllowed(): any;

            function isMuted(): any;

            function isOutgoingState(): any;

            function isPickedUp(): any;

            function isPickupNotification(): any;

            function isPresent(): any;

            function isReconnectAllowed(): any;

            function isRetrieveAllowed(): any;

            function isRetrieveInProgress(): any;

            function isTransferAllowed(): any;

            function isTransferCallAllowed(): any;

            function mute(): any;

            function outgoingFailed(): any;

            function removeParticipant(userId: any): any;

            function sameAs(call: any): any;

            function setAtcHandoverInProgress(): void;

            function setCstaState(state: any): void;

            function setDisconnectCause(cause: any, reason: any): void;

            function setHoldInProgress(): void;

            function setParticipantState(userId: any, state: any): any;

            function setPeerUsersAsParticipants(): any;

            function setRedirectingUser(phoneNumber: any, fqNumber: any, displayName: any, userId: any, redirectionType: any): void;

            function setRedirectionType(type: any): void;

            function setRetrieveInProgress(): void;

            function terminate(): void;

            function toString(): any;

            function toggleMute(): any;

            function unmute(): any;

            function updateMediaType(): void;

            function updateParticipant(participant: any, pcState: any): any;

            function updateSecurityStatus(status: any): void;

            namespace addParticipant {}

            namespace callHeaderType {}

            namespace callTypeCss {}

            namespace canToggleVideo {}

            namespace checkCstaState {}

            namespace clearAtcHandoverInProgress {}

            namespace clearHoldInProgress {}

            namespace clearRetrieveInProgress {}

            namespace getCstaState {}

            namespace getParticipant {}

            namespace getPosition {}

            namespace getRedirectingUser {}

            namespace getRedirectionType {}

            namespace hasLocalScreenShare {}

            namespace hasLocalVideo {}

            namespace hasOtherParticipants {}

            namespace hasParticipant {}

            namespace hasRemoteMedia {}

            namespace hasRemoteScreenShare {}

            namespace hasRemoteVideo {}

            namespace hasVideo {}

            namespace isAtcConferenceCall {}

            namespace isCallingOut {}

            namespace isConferenceCallAllowed {}

            namespace isConsultAllowed {}

            namespace isEstablished {}

            namespace isForwarded {}

            namespace isHeld {}

            namespace isHoldAllowed {}

            namespace isHoldInProgress {}

            namespace isHolding {}

            namespace isMakeCallAllowed {}

            namespace isMuted {}

            namespace isOutgoingState {}

            namespace isPickedUp {}

            namespace isPickupNotification {}

            namespace isPresent {}

            namespace isReconnectAllowed {}

            namespace isRetrieveAllowed {}

            namespace isRetrieveInProgress {}

            namespace isTransferAllowed {}

            namespace isTransferCallAllowed {}

            namespace mute {}

            namespace outgoingFailed {}

            namespace removeParticipant {}

            namespace sameAs {}

            namespace setAtcHandoverInProgress {}

            namespace setCstaState {}

            namespace setDisconnectCause {}

            namespace setHoldInProgress {}

            namespace setParticipantState {}

            namespace setPeerUsersAsParticipants {}

            namespace setRedirectingUser {}

            namespace setRedirectionType {}

            namespace setRetrieveInProgress {}

            namespace terminate {}

            namespace toString {}

            namespace toggleMute {}

            namespace unmute {}

            namespace updateMediaType {}

            namespace updateParticipant {}

            namespace updateSecurityStatus {}

    }

    export namespace BaseCall {
            function addParticipant(participant: any, pcState: any, update: any): any;

            function callHeaderType(): any;

            function callTypeCss(): any;

            function canToggleVideo(): any;

            function checkCstaState(states: any): any;

            function clearAtcHandoverInProgress(): void;

            function clearHoldInProgress(): void;

            function clearRetrieveInProgress(): void;

            function getCstaState(): any;

            function getParticipant(userId: any): any;

            function getPosition(): any;

            function getRedirectingUser(): any;

            function getRedirectionType(): any;

            function hasLocalScreenShare(): any;

            function hasLocalVideo(): any;

            function hasOtherParticipants(): any;

            function hasParticipant(userId: any): any;

            function hasRemoteMedia(): any;

            function hasRemoteScreenShare(): any;

            function hasRemoteVideo(): any;

            function hasVideo(): any;

            function isAtcConferenceCall(): any;

            function isCallingOut(): any;

            function isConferenceCallAllowed(): any;

            function isConsultAllowed(): any;

            function isEstablished(): any;

            function isForwarded(): any;

            function isHeld(): any;

            function isHoldAllowed(): any;

            function isHoldInProgress(): any;

            function isHolding(): any;

            function isMakeCallAllowed(): any;

            function isMuted(): any;

            function isOutgoingState(): any;

            function isPickedUp(): any;

            function isPickupNotification(): any;

            function isPresent(): any;

            function isReconnectAllowed(): any;

            function isRetrieveAllowed(): any;

            function isRetrieveInProgress(): any;

            function isTransferAllowed(): any;

            function isTransferCallAllowed(): any;

            function mute(): any;

            function outgoingFailed(): any;

            function removeParticipant(userId: any): any;

            function sameAs(call: any): any;

            function setAtcHandoverInProgress(): void;

            function setCstaState(state: any): void;

            function setDisconnectCause(cause: any, reason: any): void;

            function setHoldInProgress(): void;

            function setParticipantState(userId: any, state: any): any;

            function setPeerUsersAsParticipants(): any;

            function setRedirectingUser(phoneNumber: any, fqNumber: any, displayName: any, userId: any, redirectionType: any): void;

            function setRedirectionType(type: any): void;

            function setRetrieveInProgress(): void;

            function terminate(): void;

            function toString(): any;

            function toggleMute(): any;

            function unmute(): any;

            function updateMediaType(): void;

            function updateParticipant(participant: any, pcState: any): any;

            function updateSecurityStatus(status: any): void;

            namespace addParticipant {}

            namespace callHeaderType {}

            namespace callTypeCss {}

            namespace canToggleVideo {}

            namespace checkCstaState {}

            namespace clearAtcHandoverInProgress {}

            namespace clearHoldInProgress {}

            namespace clearRetrieveInProgress {}

            namespace getCstaState {}

            namespace getParticipant {}

            namespace getPosition {}

            namespace getRedirectingUser {}

            namespace getRedirectionType {}

            namespace hasLocalScreenShare {}

            namespace hasLocalVideo {}

            namespace hasOtherParticipants {}

            namespace hasParticipant {}

            namespace hasRemoteMedia {}

            namespace hasRemoteScreenShare {}

            namespace hasRemoteVideo {}

            namespace hasVideo {}

            namespace isAtcConferenceCall {}

            namespace isCallingOut {}

            namespace isConferenceCallAllowed {}

            namespace isConsultAllowed {}

            namespace isEstablished {}

            namespace isForwarded {}

            namespace isHeld {}

            namespace isHoldAllowed {}

            namespace isHoldInProgress {}

            namespace isHolding {}

            namespace isMakeCallAllowed {}

            namespace isMuted {}

            namespace isOutgoingState {}

            namespace isPickedUp {}

            namespace isPickupNotification {}

            namespace isPresent {}

            namespace isReconnectAllowed {}

            namespace isRetrieveAllowed {}

            namespace isRetrieveInProgress {}

            namespace isTransferAllowed {}

            namespace isTransferCallAllowed {}

            namespace mute {}

            namespace outgoingFailed {}

            namespace removeParticipant {}

            namespace sameAs {}

            namespace setAtcHandoverInProgress {}

            namespace setCstaState {}

            namespace setDisconnectCause {}

            namespace setHoldInProgress {}

            namespace setParticipantState {}

            namespace setPeerUsersAsParticipants {}

            namespace setRedirectingUser {}

            namespace setRedirectionType {}

            namespace setRetrieveInProgress {}

            namespace terminate {}

            namespace toString {}

            namespace toggleMute {}

            namespace unmute {}

            namespace updateMediaType {}

            namespace updateParticipant {}

            namespace updateSecurityStatus {}

    }

    export namespace BaseEventTarget {

            function createEvent(type: any): any;

            function dispatchEvent(type: any): void;

            namespace createEvent {}

            namespace dispatchEvent {}

    }

    export namespace CallControlSvcImpl {}

    export namespace CallStatsHandler {

        function overridePromise($q: any): void;

    }

    export namespace CallStatsHandlerUnified {

        function overridePromise($q: any): void;

    }

    export namespace CircuitCallControlSvcImpl {

    }

    export namespace ClientApiHandlerSingleton {
        function getInstance(): any;

        namespace getInstance {}

    }

    export namespace ConnectionController {

    }

    export namespace ConnectionHandler {
        namespace parent {
            function createEvent(type: any): any;

            function dispatchEvent(type: any): void;

            namespace createEvent {}

            namespace dispatchEvent {}

        }


            const name: string;

            function createEvent(type: any): any;

            function dispatchEvent(type: any): void;

            namespace createEvent {}

            namespace dispatchEvent {}

    }

    export namespace CstaParser {

    }

    export namespace CstaSvcImpl {

    }

    export namespace DeviceDiagnosticSvcImpl {

    }

    export namespace Error {

            const message: string;

            const name: string;

            function toString(): any;

    }

    export namespace ExtensionConnHandler {
        namespace parent {
            function createEvent(type: any): any;

            function dispatchEvent(type: any): void;

            namespace createEvent {}

            namespace dispatchEvent {}

        }

            const name: string;

            function createEvent(type: any): any;

            function dispatchEvent(type: any): void;

            namespace createEvent {}

            namespace dispatchEvent {}

    }

    export namespace ExtensionConnHandlerSingleton {
        function getInstance(): any;

        namespace getInstance {}

    }

    export namespace ExtensionSvcImpl {

    }

    export namespace FileUpload {

    }

    export namespace IceCandidate {

            function equals(other: any): any;

            function getParsedAttribute(): any;

            function getRelayClientTransportType(): any;

            function getValue(): any;

            function isRtcp(): any;

            function isRtp(): any;

            function isTcpTlsRelay(): any;

            function toString(): any;

            namespace equals {}

            namespace getParsedAttribute {}

            namespace getRelayClientTransportType {}

            namespace getValue {}

            namespace isRtcp {}

            namespace isRtp {}

            namespace isTcpTlsRelay {}

            namespace toString {}

    }

    export namespace LocalCall {
        namespace parent {
            function addParticipant(participant: any, pcState: any, update: any): any;

            function callHeaderType(): any;

            function callTypeCss(): any;

            function canToggleVideo(): any;

            function checkCstaState(states: any): any;

            function clearAtcHandoverInProgress(): void;

            function clearHoldInProgress(): void;

            function clearRetrieveInProgress(): void;

            function getCstaState(): any;

            function getParticipant(userId: any): any;

            function getPosition(): any;

            function getRedirectingUser(): any;

            function getRedirectionType(): any;

            function hasLocalScreenShare(): any;

            function hasLocalVideo(): any;

            function hasOtherParticipants(): any;

            function hasParticipant(userId: any): any;

            function hasRemoteMedia(): any;

            function hasRemoteScreenShare(): any;

            function hasRemoteVideo(): any;

            function hasVideo(): any;

            function isAtcConferenceCall(): any;

            function isCallingOut(): any;

            function isConferenceCallAllowed(): any;

            function isConsultAllowed(): any;

            function isEstablished(): any;

            function isForwarded(): any;

            function isHeld(): any;

            function isHoldAllowed(): any;

            function isHoldInProgress(): any;

            function isHolding(): any;

            function isMakeCallAllowed(): any;

            function isMuted(): any;

            function isOutgoingState(): any;

            function isPickedUp(): any;

            function isPickupNotification(): any;

            function isPresent(): any;

            function isReconnectAllowed(): any;

            function isRetrieveAllowed(): any;

            function isRetrieveInProgress(): any;

            function isTransferAllowed(): any;

            function isTransferCallAllowed(): any;

            function mute(): any;

            function outgoingFailed(): any;

            function removeParticipant(userId: any): any;

            function sameAs(call: any): any;

            function setAtcHandoverInProgress(): void;

            function setCstaState(state: any): void;

            function setDisconnectCause(cause: any, reason: any): void;

            function setHoldInProgress(): void;

            function setParticipantState(userId: any, state: any): any;

            function setPeerUsersAsParticipants(): any;

            function setRedirectingUser(phoneNumber: any, fqNumber: any, displayName: any, userId: any, redirectionType: any): void;

            function setRedirectionType(type: any): void;

            function setRetrieveInProgress(): void;

            function terminate(): void;

            function toString(): any;

            function toggleMute(): any;

            function unmute(): any;

            function updateMediaType(): void;

            function updateParticipant(participant: any, pcState: any): any;

            function updateSecurityStatus(status: any): void;

            namespace addParticipant {}

            namespace callHeaderType {}

            namespace callTypeCss {}

            namespace canToggleVideo {}

            namespace checkCstaState {}

            namespace clearAtcHandoverInProgress {}

            namespace clearHoldInProgress {}

            namespace clearRetrieveInProgress {}

            namespace getCstaState {}

            namespace getParticipant {}

            namespace getPosition {}

            namespace getRedirectingUser {}

            namespace getRedirectionType {}

            namespace hasLocalScreenShare {}

            namespace hasLocalVideo {}

            namespace hasOtherParticipants {}

            namespace hasParticipant {}

            namespace hasRemoteMedia {}

            namespace hasRemoteScreenShare {}

            namespace hasRemoteVideo {}

            namespace hasVideo {}

            namespace isAtcConferenceCall {}

            namespace isCallingOut {}

            namespace isConferenceCallAllowed {}

            namespace isConsultAllowed {}

            namespace isEstablished {}

            namespace isForwarded {}

            namespace isHeld {}

            namespace isHoldAllowed {}

            namespace isHoldInProgress {}

            namespace isHolding {}

            namespace isMakeCallAllowed {}

            namespace isMuted {}

            namespace isOutgoingState {}

            namespace isPickedUp {}

            namespace isPickupNotification {}

            namespace isPresent {}

            namespace isReconnectAllowed {}

            namespace isRetrieveAllowed {}

            namespace isRetrieveInProgress {}

            namespace isTransferAllowed {}

            namespace isTransferCallAllowed {}

            namespace mute {}

            namespace outgoingFailed {}

            namespace removeParticipant {}

            namespace sameAs {}

            namespace setAtcHandoverInProgress {}

            namespace setCstaState {}

            namespace setDisconnectCause {}

            namespace setHoldInProgress {}

            namespace setParticipantState {}

            namespace setPeerUsersAsParticipants {}

            namespace setRedirectingUser {}

            namespace setRedirectionType {}

            namespace setRetrieveInProgress {}

            namespace terminate {}

            namespace toString {}

            namespace toggleMute {}

            namespace unmute {}

            namespace updateMediaType {}

            namespace updateParticipant {}

            namespace updateSecurityStatus {}

        }

            function addParticipant(participant: any, ...args: any[]): any;

            function callHeaderType(): any;

            function callTypeCss(): any;

            function canToggleVideo(): any;

            function checkCstaState(states: any): any;

            function clearAtcHandoverInProgress(): void;

            function clearHoldInProgress(): void;

            function clearRetrieveInProgress(): void;

            function getCstaState(): any;

            function getParticipant(userId: any): any;

            function getPosition(): any;

            function getRedirectingUser(): any;

            function getRedirectionType(): any;

            function hasLocalScreenShare(): any;

            function hasLocalVideo(): any;

            function hasOtherParticipants(): any;

            function hasParticipant(userId: any): any;

            function hasRemoteMedia(): any;

            function hasRemoteScreenShare(): any;

            function hasRemoteVideo(): any;

            function hasVideo(): any;

            function isAtcConferenceCall(): any;

            function isCallingOut(): any;

            function isConferenceCallAllowed(): any;

            function isConsultAllowed(): any;

            function isEstablished(): any;

            function isForwarded(): any;

            function isHeld(): any;

            function isHoldAllowed(): any;

            function isHoldInProgress(): any;

            function isHolding(...args: any[]): any;

            function isLocalMuteAllowed(): any;

            function isMakeCallAllowed(): any;

            function isMuted(): any;

            function isOutgoingState(): any;

            function isPickedUp(): any;

            function isPickupNotification(): any;

            function isPresent(): any;

            function isReconnectAllowed(): any;

            function isRetrieveAllowed(): any;

            function isRetrieveInProgress(): any;

            function isTransferAllowed(): any;

            function isTransferCallAllowed(): any;

            function mute(cb: any): any;

            function outgoingFailed(): any;

            function removeParticipant(...args: any[]): any;

            function sameAs(call: any): any;

            function setActiveSpeakers(activeSpeakers: any): any;

            function setAtcHandoverInProgress(): void;

            function setCstaState(state: any): void;

            function setDisconnectCause(cause: any, reason: any): void;

            function setHoldInProgress(): void;

            function setParticipantRemoteVideoStream(participant: any): void;

            function setParticipantState(userId: any, state: any): any;

            function setPeerUsersAsParticipants(): any;

            function setRedirectingUser(phoneNumber: any, fqNumber: any, displayName: any, userId: any, redirectionType: any): void;

            function setRedirectionType(type: any): void;

            function setRetrieveInProgress(): void;

            function terminate(): void;

            function toString(): any;

            function toggleMute(): any;

            function unmute(cb: any): any;

            function updateCallState(): void;

            function updateMediaType(): void;

            function updateParticipant(participant: any, ...args: any[]): any;

            function updateSecurityStatus(status: any): void;

            namespace addParticipant {}

            namespace callHeaderType {}

            namespace callTypeCss {}

            namespace canToggleVideo {}

            namespace checkCstaState {}

            namespace clearAtcHandoverInProgress {}

            namespace clearHoldInProgress {}

            namespace clearRetrieveInProgress {}

            namespace getCstaState {}

            namespace getParticipant {}

            namespace getPosition {}

            namespace getRedirectingUser {}

            namespace getRedirectionType {}

            namespace hasLocalScreenShare {}

            namespace hasLocalVideo {}

            namespace hasOtherParticipants {}

            namespace hasParticipant {}

            namespace hasRemoteMedia {}

            namespace hasRemoteScreenShare {}

            namespace hasRemoteVideo {}

            namespace hasVideo {}

            namespace isAtcConferenceCall {}

            namespace isCallingOut {}

            namespace isConferenceCallAllowed {}

            namespace isConsultAllowed {}

            namespace isEstablished {}

            namespace isForwarded {}

            namespace isHeld {}

            namespace isHoldAllowed {}

            namespace isHoldInProgress {}

            namespace isHolding {}

            namespace isLocalMuteAllowed {}

            namespace isMakeCallAllowed {}

            namespace isMuted {}

            namespace isOutgoingState {}

            namespace isPickedUp {}

            namespace isPickupNotification {}

            namespace isPresent {}

            namespace isReconnectAllowed {}

            namespace isRetrieveAllowed {}

            namespace isRetrieveInProgress {}

            namespace isTransferAllowed {}

            namespace isTransferCallAllowed {}

            namespace mute {}

            namespace outgoingFailed {}

            namespace removeParticipant {}

            namespace sameAs {}

            namespace setActiveSpeakers {}

            namespace setAtcHandoverInProgress {}

            namespace setCstaState {}

            namespace setDisconnectCause {}

            namespace setHoldInProgress {}

            namespace setParticipantRemoteVideoStream {}

            namespace setParticipantState {}

            namespace setPeerUsersAsParticipants {}

            namespace setRedirectingUser {}

            namespace setRedirectionType {}

            namespace setRetrieveInProgress {}

            namespace terminate {}

            namespace toString {}

            namespace toggleMute {}

            namespace unmute {}

            namespace updateCallState {}

            namespace updateMediaType {}

            namespace updateParticipant {}

            namespace updateSecurityStatus {}

    }

    export namespace PhoneNumberFormatter {
        function format(phoneNumber: any): any;

        namespace format {}

    }

    export namespace PrivateData {
        const SUPPORTED_PRIVATE_DATA_FIELDS: string[];

        function convertPrivateDataToContent(item: any, ignoreFields: any): any;

        function retrievePrivateDataFromContent(item: any): void;

        namespace convertPrivateDataToContent {}

        namespace retrievePrivateDataFromContent {}

    }

    export namespace Proto {
        const requestNr: number;

        function ParseEvent(event: any, apiVersion: any): any;

        function Request(contentType: any, content: any, tenantContext: any): any;

        function getMediaType(data: any): any;

        function isOfflineFailure(err: any): any;

        function normalizeWhiteboard(whiteboard: any): void;

        namespace ParseEvent {}

        namespace Request {}

        namespace getMediaType {}

        namespace isOfflineFailure {}

        namespace normalizeWhiteboard {}

    }

    export namespace PubSubSvcImpl {

    }

    export namespace RemoteCall {
        namespace parent {
            function addParticipant(participant: any, pcState: any, update: any): any;

            function callHeaderType(): any;

            function callTypeCss(): any;

            function canToggleVideo(): any;

            function checkCstaState(states: any): any;

            function clearAtcHandoverInProgress(): void;

            function clearHoldInProgress(): void;

            function clearRetrieveInProgress(): void;

            function getCstaState(): any;

            function getParticipant(userId: any): any;

            function getPosition(): any;

            function getRedirectingUser(): any;

            function getRedirectionType(): any;

            function hasLocalScreenShare(): any;

            function hasLocalVideo(): any;

            function hasOtherParticipants(): any;

            function hasParticipant(userId: any): any;

            function hasRemoteMedia(): any;

            function hasRemoteScreenShare(): any;

            function hasRemoteVideo(): any;

            function hasVideo(): any;

            function isAtcConferenceCall(): any;

            function isCallingOut(): any;

            function isConferenceCallAllowed(): any;

            function isConsultAllowed(): any;

            function isEstablished(): any;

            function isForwarded(): any;

            function isHeld(): any;

            function isHoldAllowed(): any;

            function isHoldInProgress(): any;

            function isHolding(): any;

            function isMakeCallAllowed(): any;

            function isMuted(): any;

            function isOutgoingState(): any;

            function isPickedUp(): any;

            function isPickupNotification(): any;

            function isPresent(): any;

            function isReconnectAllowed(): any;

            function isRetrieveAllowed(): any;

            function isRetrieveInProgress(): any;

            function isTransferAllowed(): any;

            function isTransferCallAllowed(): any;

            function mute(): any;

            function outgoingFailed(): any;

            function removeParticipant(userId: any): any;

            function sameAs(call: any): any;

            function setAtcHandoverInProgress(): void;

            function setCstaState(state: any): void;

            function setDisconnectCause(cause: any, reason: any): void;

            function setHoldInProgress(): void;

            function setParticipantState(userId: any, state: any): any;

            function setPeerUsersAsParticipants(): any;

            function setRedirectingUser(phoneNumber: any, fqNumber: any, displayName: any, userId: any, redirectionType: any): void;

            function setRedirectionType(type: any): void;

            function setRetrieveInProgress(): void;

            function terminate(): void;

            function toString(): any;

            function toggleMute(): any;

            function unmute(): any;

            function updateMediaType(): void;

            function updateParticipant(participant: any, pcState: any): any;

            function updateSecurityStatus(status: any): void;

            namespace addParticipant {}

            namespace callHeaderType {}

            namespace callTypeCss {}

            namespace canToggleVideo {}

            namespace checkCstaState {}

            namespace clearAtcHandoverInProgress {}

            namespace clearHoldInProgress {}

            namespace clearRetrieveInProgress {}

            namespace getCstaState {}

            namespace getParticipant {}

            namespace getPosition {}

            namespace getRedirectingUser {}

            namespace getRedirectionType {}

            namespace hasLocalScreenShare {}

            namespace hasLocalVideo {}

            namespace hasOtherParticipants {}

            namespace hasParticipant {}

            namespace hasRemoteMedia {}

            namespace hasRemoteScreenShare {}

            namespace hasRemoteVideo {}

            namespace hasVideo {}

            namespace isAtcConferenceCall {}

            namespace isCallingOut {}

            namespace isConferenceCallAllowed {}

            namespace isConsultAllowed {}

            namespace isEstablished {}

            namespace isForwarded {}

            namespace isHeld {}

            namespace isHoldAllowed {}

            namespace isHoldInProgress {}

            namespace isHolding {}

            namespace isMakeCallAllowed {}

            namespace isMuted {}

            namespace isOutgoingState {}

            namespace isPickedUp {}

            namespace isPickupNotification {}

            namespace isPresent {}

            namespace isReconnectAllowed {}

            namespace isRetrieveAllowed {}

            namespace isRetrieveInProgress {}

            namespace isTransferAllowed {}

            namespace isTransferCallAllowed {}

            namespace mute {}

            namespace outgoingFailed {}

            namespace removeParticipant {}

            namespace sameAs {}

            namespace setAtcHandoverInProgress {}

            namespace setCstaState {}

            namespace setDisconnectCause {}

            namespace setHoldInProgress {}

            namespace setParticipantState {}

            namespace setPeerUsersAsParticipants {}

            namespace setRedirectingUser {}

            namespace setRedirectionType {}

            namespace setRetrieveInProgress {}

            namespace terminate {}

            namespace toString {}

            namespace toggleMute {}

            namespace unmute {}

            namespace updateMediaType {}

            namespace updateParticipant {}

            namespace updateSecurityStatus {}

        }

            function addParticipant(participant: any, pcState: any, update: any): any;

            function callHeaderType(): any;

            function callTypeCss(): any;

            function canToggleVideo(): any;

            function checkCstaState(states: any): any;

            function clearAtcHandoverInProgress(): void;

            function clearHoldInProgress(): void;

            function clearRetrieveInProgress(): void;

            function getCstaState(): any;

            function getParticipant(userId: any): any;

            function getPosition(): any;

            function getRedirectingUser(): any;

            function getRedirectionType(): any;

            function hasLocalScreenShare(): any;

            function hasLocalVideo(): any;

            function hasOtherParticipants(): any;

            function hasParticipant(userId: any): any;

            function hasRemoteMedia(): any;

            function hasRemoteScreenShare(): any;

            function hasRemoteVideo(): any;

            function hasVideo(): any;

            function isAtcConferenceCall(): any;

            function isCallingOut(): any;

            function isConferenceCallAllowed(): any;

            function isConsultAllowed(): any;

            function isEstablished(): any;

            function isForwarded(): any;

            function isHeld(): any;

            function isHoldAllowed(): any;

            function isHoldInProgress(): any;

            function isHolding(): any;

            function isMakeCallAllowed(): any;

            function isMuted(): any;

            function isOutgoingState(): any;

            function isPickedUp(): any;

            function isPickupNotification(): any;

            function isPresent(): any;

            function isReconnectAllowed(): any;

            function isRetrieveAllowed(): any;

            function isRetrieveInProgress(): any;

            function isTransferAllowed(): any;

            function isTransferCallAllowed(): any;

            function mute(): any;

            function outgoingFailed(): any;

            function removeParticipant(userId: any): any;

            function sameAs(call: any): any;

            function setActiveClient(apiParticipant: any): void;

            function setAtcHandoverInProgress(): void;

            function setCstaState(state: any): void;

            function setDisconnectCause(cause: any, reason: any): void;

            function setHoldInProgress(): void;

            function setParticipantState(userId: any, state: any): any;

            function setPeerUsersAsParticipants(): any;

            function setRedirectingUser(phoneNumber: any, fqNumber: any, displayName: any, userId: any, redirectionType: any): void;

            function setRedirectionType(type: any): void;

            function setRetrieveInProgress(): void;

            function terminate(): void;

            function toString(): any;

            function toggleMute(): any;

            function unmute(): any;

            function updateMediaType(): void;

            function updateParticipant(participant: any, pcState: any): any;

            function updateSecurityStatus(status: any): void;

            namespace addParticipant {}

            namespace callHeaderType {}

            namespace callTypeCss {}

            namespace canToggleVideo {}

            namespace checkCstaState {}

            namespace clearAtcHandoverInProgress {}

            namespace clearHoldInProgress {}

            namespace clearRetrieveInProgress {}

            namespace getCstaState {}

            namespace getParticipant {}

            namespace getPosition {}

            namespace getRedirectingUser {}

            namespace getRedirectionType {}

            namespace hasLocalScreenShare {}

            namespace hasLocalVideo {}

            namespace hasOtherParticipants {}

            namespace hasParticipant {}

            namespace hasRemoteMedia {}

            namespace hasRemoteScreenShare {}

            namespace hasRemoteVideo {}

            namespace hasVideo {}

            namespace isAtcConferenceCall {}

            namespace isCallingOut {}

            namespace isConferenceCallAllowed {}

            namespace isConsultAllowed {}

            namespace isEstablished {}

            namespace isForwarded {}

            namespace isHeld {}

            namespace isHoldAllowed {}

            namespace isHoldInProgress {}

            namespace isHolding {}

            namespace isMakeCallAllowed {}

            namespace isMuted {}

            namespace isOutgoingState {}

            namespace isPickedUp {}

            namespace isPickupNotification {}

            namespace isPresent {}

            namespace isReconnectAllowed {}

            namespace isRetrieveAllowed {}

            namespace isRetrieveInProgress {}

            namespace isTransferAllowed {}

            namespace isTransferCallAllowed {}

            namespace mute {}

            namespace outgoingFailed {}

            namespace removeParticipant {}

            namespace sameAs {}

            namespace setActiveClient {}

            namespace setAtcHandoverInProgress {}

            namespace setCstaState {}

            namespace setDisconnectCause {}

            namespace setHoldInProgress {}

            namespace setParticipantState {}

            namespace setPeerUsersAsParticipants {}

            namespace setRedirectingUser {}

            namespace setRedirectionType {}

            namespace setRetrieveInProgress {}

            namespace terminate {}

            namespace toString {}

            namespace toggleMute {}

            namespace unmute {}

            namespace updateMediaType {}

            namespace updateParticipant {}

            namespace updateSecurityStatus {}

    }

    export namespace RtcParticipant {
        function createFromUser(user: any, pcState: any): any;

        function hasSameMediaType(p1: any, p2: any): any;

        function hasVideoStream(participant: any): any;

        function isActive(participant: any): any;

        function setActions(participant: any, conversation: any, localUser: any): void;

        namespace createFromUser {}

        namespace hasSameMediaType {}

        namespace hasVideoStream {}

        namespace isActive {}

        namespace setActions {}

    }

    export namespace RtcPeerConnections {

    }

    export namespace RtcPeerConnectionsUnified {

    }

    export namespace RtcSessionController {
        const DEFAULT_CANDIDATES_TIMEOUT: number;

        const DEFAULT_ENABLE_AUDIO_AGC: boolean;

        const DEFAULT_TRICKLE_ICE_TIMEOUT: number;

        const DEFAULT_UPSCALE_FACTOR: number;

        const LOCAL_STREAMS: {
            AUDIO_VIDEO: number;
            DESKTOP: number;
        };

        const allowAllIceCandidatesScreenShare: boolean;

        const allowOnlyRelayCandidates: boolean;

        const candidatesTimeout: number;

        const cmrScreenshareUpscaleFactor: number;

        const customTurnServers: any[];

        const disableDesktopPc: boolean;

        const disableTrickleIce: boolean;

        const enableAudioAGC: boolean;

        const maxVideoExtraChannels: number;

        const mediaNode: any;

        const minVideoExtraChannels: number;

        const playbackDevices: any[];


        const recordingDevices: any[];

        const ringingDevices: any[];

        const screenshareUpscaleFactor: number;

        const sdpParameters: {
            audio: {
                maxaveragebitrate: number;
                maxplaybackrate: number;
                "sprop-maxcapturerate": number;
                usedtx: number;
            };
            hdScreenShare: {
                maxBw: number;
                maxFrameRate: number;
                minFrameRate: number;
            };
            hdVideo: {
                "1080p": {
                    maxBw: number;
                };
                "480p": {
                    maxBw: number;
                };
                "720p": {
                    maxBw: number;
                };
                maxBw: number;
            };
            preferredVideoCodec: string;
            receiveVideo: {
                maxBw: number;
                maxBwMobile: number;
            };
            rtcpMuxPolicy: string;
            screenShare: {
                maxBw: number;
                maxFrameRate: number;
                minFrameRate: number;
            };
            video: {
                maxBw: number;
            };
        };

        const trickleIceTimeout: number;

        const videoDevices: any[];

        const webRTCIPHandlingPolicy: any;

        const xGoogle: {
            hdScreenShare: {
                maxBitRate: number;
                maxQuantization: number;
                minBitRate: number;
            };
            hdVideo: {
                "1080p": {
                    maxBitRate: number;
                    minBitRate: number;
                };
                "480p": {
                    maxBitRate: number;
                    minBitRate: number;
                };
                "720p": {
                    maxBitRate: number;
                    minBitRate: number;
                };
                maxBitRate: number;
                maxQuantization: number;
                minBitRate: number;
                startBitRate: number;
            };
            screenShare: {
            };
            video: {
                minBitRate: number;
            };
        };

        function overridePromise($q: any): void;

        function processClientSettings(settings: any): void;

        namespace processClientSettings {}

    }

    export namespace ScreenSharingController {
        function getScreen(successCb: any, errorCb: any): void;

        function injectExtensionSvc(): void;

        function injectTemasysSvc(): void;

        function installExtension(): void;

        function isFirefoxLegacy(): any;

        function isScreensharingAvailable(): any;

        function setControllingScreen(successCb: any, errorCb: any): void;

        function unregEvtHandlers(): void;

        namespace getScreen {}

        namespace injectExtensionSvc {}

        namespace injectTemasysSvc {}

        namespace installExtension {}

        namespace isFirefoxLegacy {}

        namespace isScreensharingAvailable {}

        namespace setControllingScreen {}

        namespace unregEvtHandlers {}

    }

    export namespace SdkHelperSvcImpl {

    }

    export namespace SdkServices {

    }

    export namespace UserToUserHandlerSingleton {
        function getInstance(): any;

        namespace getInstance {}

    }

    export namespace UtilSvcImpl {

    }

    export namespace Utils {
        const ALPHANUMERIC_PATTERN: string;

        const CIRCUIT_CONVERSATION_HASH_PATTERN: RegExp;

        const CIRCUIT_EMAIL_HASH_PATTERN: RegExp;

        const CIRCUIT_LINKS_HASH_PATTERN: RegExp;

        const CountriesArray: {
            code: string;
            name: string;
        }[];

        const CountryCodeToCountryNameResourceMap: {
            AD: string;
            AE: string;
            AF: string;
            AG: string;
            AI: string;
            AL: string;
            AM: string;
            AN: string;
            AO: string;
            AQ: string;
            AR: string;
            AS: string;
            AT: string;
            AU: string;
            AW: string;
            AZ: string;
            BA: string;
            BB: string;
            BD: string;
            BE: string;
            BF: string;
            BG: string;
            BH: string;
            BI: string;
            BJ: string;
            BM: string;
            BN: string;
            BO: string;
            BR: string;
            BS: string;
            BT: string;
            BW: string;
            BY: string;
            BZ: string;
            CA: string;
            CD: string;
            CF: string;
            CG: string;
            CH: string;
            CI: string;
            CL: string;
            CM: string;
            CN: string;
            CO: string;
            CR: string;
            CU: string;
            CV: string;
            CY: string;
            CZ: string;
            DE: string;
            DJ: string;
            DK: string;
            DM: string;
            DO: string;
            DZ: string;
            EC: string;
            EE: string;
            EG: string;
            EH: string;
            ER: string;
            ES: string;
            ET: string;
            FI: string;
            FJ: string;
            FK: string;
            FM: string;
            FO: string;
            FR: string;
            GA: string;
            GB: string;
            GD: string;
            GE: string;
            GF: string;
            GH: string;
            GI: string;
            GL: string;
            GM: string;
            GN: string;
            GP: string;
            GQ: string;
            GR: string;
            GS: string;
            GT: string;
            GU: string;
            GW: string;
            GY: string;
            HK: string;
            HN: string;
            HR: string;
            HT: string;
            HU: string;
            IC: string;
            ID: string;
            IE: string;
            IL: string;
            IN: string;
            IO: string;
            IQ: string;
            IR: string;
            IS: string;
            IT: string;
            JM: string;
            JO: string;
            JP: string;
            KE: string;
            KG: string;
            KH: string;
            KI: string;
            KM: string;
            KN: string;
            KP: string;
            KR: string;
            KW: string;
            KY: string;
            KZ: string;
            LA: string;
            LB: string;
            LC: string;
            LI: string;
            LK: string;
            LR: string;
            LS: string;
            LT: string;
            LU: string;
            LV: string;
            LY: string;
            MA: string;
            MC: string;
            MD: string;
            ME: string;
            MG: string;
            MH: string;
            MK: string;
            ML: string;
            MM: string;
            MN: string;
            MO: string;
            MP: string;
            MQ: string;
            MR: string;
            MS: string;
            MT: string;
            MU: string;
            MV: string;
            MW: string;
            MX: string;
            MY: string;
            MZ: string;
            NA: string;
            NC: string;
            NE: string;
            NF: string;
            NG: string;
            NI: string;
            NL: string;
            NO: string;
            NP: string;
            NR: string;
            NZ: string;
            OM: string;
            PA: string;
            PE: string;
            PF: string;
            PG: string;
            PH: string;
            PK: string;
            PL: string;
            PM: string;
            PN: string;
            PR: string;
            PS: string;
            PT: string;
            PW: string;
            PY: string;
            QA: string;
            RE: string;
            RO: string;
            RU: string;
            RW: string;
            SA: string;
            SB: string;
            SC: string;
            SD: string;
            SE: string;
            SG: string;
            SH: string;
            SI: string;
            SJ: string;
            SK: string;
            SL: string;
            SM: string;
            SN: string;
            SO: string;
            SR: string;
            SS: string;
            ST: string;
            SV: string;
            SY: string;
            SZ: string;
            TC: string;
            TD: string;
            TG: string;
            TH: string;
            TJ: string;
            TK: string;
            TL: string;
            TM: string;
            TN: string;
            TO: string;
            TR: string;
            TT: string;
            TV: string;
            TW: string;
            TZ: string;
            UA: string;
            UG: string;
            UK: string;
            UM: string;
            US: string;
            UY: string;
            UZ: string;
            VA: string;
            VC: string;
            VE: string;
            VG: string;
            VI: string;
            VN: string;
            VU: string;
            WF: string;
            WS: string;
            XK: string;
            XS: string;
            YE: string;
            YT: string;
            ZA: string;
            ZM: string;
            ZW: string;
        };

        const DEFAULT_HELP_URL: string;

        const ELECTRON_FULLSCREEN_SHORTCUT: string;

        const EMAIL_ADDRESS_INCLUDED_PATTERN: RegExp;

        const EMAIL_ADDRESS_PATTERN: RegExp;

        const EMOTICON_MAPPING: {
            ":(": number;
            ":)": number;
            ":D": number;
            ":O": number;
            ":angry": number;
            ":awesome": number;
            ":heart": number;
            ":zzz": number;
            ";(": number;
            ";)": number;
        };

        const EXACT_URL_PATTERN: RegExp;

        const FQDN_PATTERN: RegExp;

        const GNF_PHONE_PATTERN: RegExp;

        const IPV4_ADDRESS_PATTERN: RegExp;

        const NUMERIC_PATTERN: string;

        const NUMERIC_SIGN_PATTERN: string;

        const PHONE_DIAL_PATTERN: RegExp;

        const PHONE_DIAL_WITH_PIN_PATTERN: RegExp;

        const PHONE_PAC: RegExp;

        const PHONE_PATTERN: RegExp;

        const PHONE_WITH_EXTENSION_PATTERN: RegExp;

        const PROTOCOL_PATTERN: RegExp;

        const PSEUDO_URL_PATTERN: RegExp;

        const RICH_TEXT_LINK_CLASS: string;

        const SEPARATORS_PATTERN: string;

        const TABBABLE_ELEMENTS_PATTERN: string;

        const TCP_PORT_NUMBERS_PATTERN: RegExp;

        const URL_PATTERN: RegExp;

        const URL_SEPARATORS_PATTERN: RegExp;

        const invalidFileTypes: string[];

        const isMacOs: boolean;

        const isWindowsOs: boolean;

        const sanitizer: any;

        function TabSelector(tabNames: any): any;

        function appIsFocused(): any;

        function binaryInsert(array: any, arrayElement: any, compareValueFunction: any, idField: any): any;

        function buildAttachmentMetaData(files: any): any;

        function bytesToSize(bytes: any, precision: any): any;

        function checkUserDomain(domain: any, startsWith: any): any;

        function cleanPhoneNumber(number: any): any;

        function cleanPhoneNumberDigitsWithPin(number: any): any;

        function compareElements(el1: any, el2: any): any;

        function compareStrings(str1: any, str2: any): any;

        function convertItemText(content: any, type: any, keepEmoticonHtml: any): any;

        function convertSymbolCodes(content: any): any;

        function convertVersionToNumber(version: any): any;

        function copyToClipboard(copyText: any, cb: any, asText: any): void;

        function createMentionedUsersArray(msg: any, convUsers: any): any;

        function createTransactionId(): any;

        function delayOrTimestamp(delayMS: any, timestamp: any): any;

        function enhanceEncodeURI(s: any): any;

        function escapedHtmlToText(str: any): any;

        function extractConfigurableText(configurableTexts: any, type: any, language: any): any;

        function flattenObj(obj: any): any;

        function formatPIN(tenantPIN: any, sessionPIN: any, noDelimiters: any): any;

        function generateCallId(): any;

        function getBaseObject(obj: any, updateBaseObj: any): any;

        function getBrowserInfo(): any;

        function getEmails(str: any): any;

        function getImageFileExtension(file: any): any;

        function getLegalRegion(regionId: any): any;

        function getLocalTime(timeZoneOffset: any): any;

        function getMimeTypes(fileName: any): any;

        function getNormalizedFileExtension(file: any): any;

        function getOSInfo(osVersion: any): any;

        function getOrigin(): any;

        function hasEmptyPrototype(obj: any): any;

        function hasScrollbar(container: any): any;

        function inherit(Child: any, Parent: any): void;

        function isCircuitLink(host: any, link: any): any;

        function isDescendantOrEqual(child: any, ancestor: any): any;

        function isEmptyObject(obj: any): any;

        function isMSDoc(content: any): any;

        function isMobile(): any;

        function isPromise(obj: any): any;

        function isSupportedImage(mimeType: any): any;

        function isVideoSupportedByBrowser(mimeType: any): any;

        function isXCodeDoc(content: any): any;

        function isYourCircuitDomain(): any;

        function linkifyContent(content: any, contentType: any): any;

        function linkifyText(text: any): any;

        function mapKeypadCodeToDtmf(event: any, browserInfo: any): any;

        function matchEmailPattern(str: any): any;

        function matchNames(str: any, query: any, flag: any): any;

        function matchPhonePattern(str: any): any;

        function matchUrlPattern(str: any): any;

        function normalizeDn(dn: any): any;

        function normalizeLocale(proto: any): any;

        function normalizeLocaleProto(locale: any): any;

        function parseIpWithPort(ip: any): any;

        function parseQS(qs: any): any;

        function randomBoolean(): any;

        function randomNumber(min: any, max: any): any;

        function removeArrayElement(array: any, elem: any): void;

        function removeMentionHtml(content: any): any;

        function retrieveTextOnly(content: any, type: any): any;

        function rstring(): any;

        function sanitize(content: any): any;

        function sanitizeSymbols(content: any): any;

        function selectMediaDevice(available: any, preferred: any, matchByLabel: any): any;

        function shallowCopy(src: any): any;

        function sslProxify(url: any): any;

        function standardizeEmoticon(text: any): any;

        function stripParenthesis(token: any): any;

        function syncBaseObject(obj: any): void;

        function textToHtmlEscaped(str: any, handleTextNewLines: any): any;

        function throttle(func: any, wait: any, options: any, ...args: any[]): any;

        function toPlainText(content: any, type: any): any;

        function toPlainTextWithEmoticonHtml(content: any, type: any): any;

        function toQS(obj: any): any;

        function trimCallForMobile(call: any): any;

        function trimConvForMobile(conv: any): any;

        function trimTextWithEmoticonsBeforeMatch(text: any, textToMatch: any, maxCharactersBeforeMatch: any): any;

        function truncateFileName(fileName: any): any;

        function validatePreviewProtocol(html: any): any;

        namespace TabSelector {}

        namespace appIsFocused {}

        namespace binaryInsert {}

        namespace buildAttachmentMetaData {}

        namespace bytesToSize {}

        namespace checkUserDomain {}

        namespace cleanPhoneNumber {}

        namespace cleanPhoneNumberDigitsWithPin {}

        namespace compareElements {}

        namespace compareStrings {}

        namespace convertItemText {}

        namespace convertSymbolCodes {}

        namespace convertVersionToNumber {}

        namespace copyToClipboard {}

        namespace createMentionedUsersArray {}

        namespace createTransactionId {}

        namespace delayOrTimestamp {}

        namespace enhanceEncodeURI {}

        namespace escapedHtmlToText {}

        namespace extractConfigurableText {}

        namespace flattenObj {}

        namespace formatPIN {}

        namespace generateCallId {}

        namespace getBaseObject {}

        namespace getBrowserInfo {}

        namespace getEmails {}

        namespace getImageFileExtension {}

        namespace getLegalRegion {}

        namespace getLocalTime {}

        namespace getMimeTypes {}

        namespace getNormalizedFileExtension {}

        namespace getOSInfo {}

        namespace getOrigin {}

        namespace hasEmptyPrototype {}

        namespace hasScrollbar {}

        namespace inherit {}

        namespace isCircuitLink {}

        namespace isDescendantOrEqual {}

        namespace isEmptyObject {}

        namespace isMSDoc {}

        namespace isMobile {}

        namespace isPromise {}

        namespace isSupportedImage {}

        namespace isVideoSupportedByBrowser {}

        namespace isXCodeDoc {}

        namespace isYourCircuitDomain {}

        namespace linkifyContent {}

        namespace linkifyText {}

        namespace mapKeypadCodeToDtmf {}

        namespace matchEmailPattern {}

        namespace matchNames {}

        namespace matchPhonePattern {}

        namespace matchUrlPattern {}

        namespace normalizeDn {}

        namespace normalizeLocale {}

        namespace normalizeLocaleProto {}

        namespace parseIpWithPort {}

        namespace parseQS {}

        namespace randomBoolean {}

        namespace randomNumber {}

        namespace removeArrayElement {}

        namespace removeMentionHtml {}

        namespace retrieveTextOnly {}

        namespace rstring {}

        namespace sanitize {}

        namespace sanitizeSymbols {}

        namespace selectMediaDevice {}

        namespace shallowCopy {}

        namespace sslProxify {}

        namespace standardizeEmoticon {}

        namespace stripParenthesis {}

        namespace syncBaseObject {}

        namespace textToHtmlEscaped {}

        namespace throttle {}

        namespace toPlainText {}

        namespace toPlainTextWithEmoticonHtml {}

        namespace toQS {}

        namespace trimCallForMobile {}

        namespace trimConvForMobile {}

        namespace trimTextWithEmoticonsBeforeMatch {}

        namespace truncateFileName {}

        namespace validatePreviewProtocol {}

    }

    export namespace WebRTCAdapter {
        const audioOutputSelectionSupported: boolean;

        const browser: string;

        const enabled: boolean;

        const getMediaSourcesSupported: boolean;

        const groupPeerConnectionsSupported: boolean;

        const hasDeviceNameOnTrackLabel: boolean;

        const unifiedPlanEnabled: boolean;

        function IceCandidate(): void;

        function PeerConnection(): void;

        function SessionDescription(): void;

        function attachSinkIdToAudioElement(audioElement: any, sinkId: any, cb: any): void;

        function clearMediaSourcesCache(): void;

        function closePc(): void;

        function createObjectURL(): any;

        function getAudioOptions(): any;

        function getAudioStreamTrackId(): any;

        function getAudioTrackId(): any;

        function getAudioTrackLabel(): any;

        function getDesktopOptions(): any;

        function getMediaSources(cb: any): void;

        function getStreamId(): any;

        function getTrackId(): any;

        function getUserMedia(constraints: any, successCallback: any, errorCallback: any): void;

        function getVideoOptions(): any;

        function getVideoStreamTrackId(): any;

        function getVideoTrackId(): any;

        function getVideoTrackLabel(): any;

        function init(): any;

        function overridePromise($q: any): void;

        function stopLocalVideoTrack(): void;

        function stopMediaStream(): void;

        function toggleAudio(): any;

        namespace IceCandidate {}

        namespace PeerConnection {}

        namespace SessionDescription {}

        namespace attachSinkIdToAudioElement {}

        namespace clearMediaSourcesCache {}

        namespace closePc {}

        namespace createObjectURL {}

        namespace getAudioOptions {}

        namespace getAudioStreamTrackId {}

        namespace getAudioTrackId {}

        namespace getAudioTrackLabel {}

        namespace getDesktopOptions {}

        namespace getMediaSources {}

        namespace getStreamId {}

        namespace getTrackId {}

        namespace getUserMedia {}

        namespace getVideoOptions {}

        namespace getVideoStreamTrackId {}

        namespace getVideoTrackId {}

        namespace getVideoTrackLabel {}

        namespace init {}

        namespace stopLocalVideoTrack {}

        namespace stopMediaStream {}

        namespace toggleAudio {}

    }

    export namespace isCompatible {

    }

    export namespace logger {
        function debug(...args: any[]): void;

        function error(error: any, obj: any): void;

        function getLevel(): any;

        function info(...args: any[]): void;

        function logMsg(minLevel: any, txt: any, msg: any): void;

        function msgRcvd(...args: any[]): void;

        function msgSend(...args: any[]): void;

        function setExtensionVersion(version: any): void;

        function setLevel(level: any): void;

        function warn(...args: any[]): void;

        function warning(...args: any[]): void;

        namespace debug {}

        namespace error {}

        namespace getLevel {}

        namespace info {}

        namespace logMsg {}

        namespace msgRcvd {}

        namespace msgSend {}

        namespace setExtensionVersion {}

        namespace setLevel {}

        namespace warn {}

        namespace warning {}

    }

    export namespace sdpParser {
        function addEmptyVideoLine(sdp: any): any;

        function addEndOfCandidatesLine(sdp: any): any;

        function disableMultiplex(sdp: any): any;

        function findMediaLineIndex(sdp: any, id: any): any;

        function fixTrickleIceOption(sdp: any, enabled: any): any;

        function getConnectionMode(sdp: any, option: any): any;

        function getIceCandidates(sdp: any): any;

        function getMediaIds(sdp: any): any;

        function getOrigin(sdp: any): any;

        function getSsrcList(sdp: any): any;

        function getVideoConnectionModes(sdp: any): any;

        function hasVideo(sdp: any): any;

        function iceTotalCandidatesCount(sdp: any): any;

        function isHold(sdp: any): any;

        function isMultiplexEnabled(sdp: any): any;

        function isNoOfferSdp(rtcSdp: any): any;

        function isTrickleIceOption(sdp: any): any;

        function parse(sdp: any): any;

        function removeAudioLevelAttr(sdp: any): any;

        function removeAudioMediaProtocols(sdp: any, protocols: any): any;

        function removeEndOfCandidatesLine(sdp: any): any;

        function removeVideo(sdp: any): any;

        function removeVideoBandwidth(sdp: any): any;

        function setConnectionMode(sdp: any, mediaType: any, connectionMode: any): any;

        function setMediaIdAttribute(sdp: any, mLineIndex: any, value: any, overwrite: any): any;

        function setOpusParameters(sdp: any, parameters: any): any;

        function setPreferredVideoCodec(sdp: any, codec: any): any;

        function setVideoBandwidth(sdp: any, bw: any, overwrite: any, mIndex: any): any;

        function setXGoogle(sdp: any, x: any, mIndex: any): any;

        function stringify(sdp: any): any;

        function validateIceCandidates(sdp: any, removeUdpVideoIce: any, trickleIce: any): any;

        function verifyFingerprintInMLines(sdp: any): any;

        namespace addEmptyVideoLine {}

        namespace addEndOfCandidatesLine {}

        namespace disableMultiplex {}

        namespace findMediaLineIndex {}

        namespace fixTrickleIceOption {}

        namespace getConnectionMode {}

        namespace getIceCandidates {}

        namespace getMediaIds {}

        namespace getOrigin {}

        namespace getSsrcList {}

        namespace getVideoConnectionModes {}

        namespace hasVideo {}

        namespace iceTotalCandidatesCount {}

        namespace isHold {}

        namespace isMultiplexEnabled {}

        namespace isNoOfferSdp {}

        namespace isTrickleIceOption {}

        namespace parse {}

        namespace removeAudioLevelAttr {}

        namespace removeAudioMediaProtocols {}

        namespace removeEndOfCandidatesLine {}

        namespace removeVideo {}

        namespace removeVideoBandwidth {}

        namespace setConnectionMode {}

        namespace setMediaIdAttribute {}

        namespace setOpusParameters {}

        namespace setPreferredVideoCodec {}

        namespace setVideoBandwidth {}

        namespace setXGoogle {}

        namespace stringify {}

        namespace validateIceCandidates {}

        namespace verifyFingerprintInMLines {}

    }

    export namespace setLogger {

    }

    export namespace storeManager {
        function getItem(key: any): any;

        function removeItem(key: any): any;

        function setItem(key: any, value: any): any;

        namespace getItem {}

        namespace removeItem {}

        namespace setItem {}

    }

    export namespace supportedFeatures {

    }

}
