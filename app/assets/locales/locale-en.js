/**
 * Created by necklace on 2016/12/27.
 */
export const en_US = {
    languages_zh: "简体中文",
    languages_en: "English",
    btn_ok: "OK",
    btn_cancel: "Cancel",
    navigation_setting: "Setting",
    menu_index: "Home",
    menu_transaction: "Transaction",
    menu_transfer: "Transfer",
    menu_lastOperate: "Recent",
    menu_scan: "Scan",
    menu_createAccount: "Create",
    menu_settings: "Settings",
    settings_labLanguage: "Language",
    settings_labAPI: "API Server",
    settings_labFaucet: "Faucet",
    settings_labShowUnit: "Preferred unit of account",
    settings_labLockTime: "Wallet auto-lock time (seconds)",
    settings_labDisableChat: "Disable chat",
    settings_labShowWalletManage: "Wallet",
    settings_labDefaultSetting: "Reset settings",
    settings_add: "Add",
    settings_currentWallet: "Current Wallet",
    wallet_accountName: "账户名",
    wallet_accountName_ph: "请输入账户名",
    wallet_createErrMsg: "This is a premium name which is not supported by this faucet. Please enter a regular name containing least one dash, a number or no vowels.",
    wallet_createErrMsg2: 'This is a premium name which is more expensive than a name containing a dash (-) or a number.',
    wallet_createErrMsg3: "Please enter valid account name",
    wallet_createErrMsg4: "Password must be 8 characters or more",
    wallet_createErrMsg5: "Confirmation doesn't match Password",
    wallet_createErrMsg6: "Incorrect password",
    wallet_createCatch: "Failed to create wallet:{err}",
    wallet_mustBeLTM: "The fee paying account must be a lifetime member to perform that operation.",
    wallet_nameExist: "账户名已被他人使用",
    wallet_passworkErrMsg: "你输入的密码不正确",
    wallet_nameNotFound: "账户未找到",
    wallet_importKey: "Import the private key",
    wallet_importKey_imported: "This wallet has already been imported",
    wallet_backup: "Backup",
    wallet_backup_err: "Warning! You browser doesn't support some some file operations required to restore backup, we recommend you to use Chrome or Firefox browsers to restore your backup.",
    wallet_backup_download: "Download",
    wallet_backup_noBlob: "File saving is not supported",
    wallet_backup_invalidBackup: "Invalid backup to download conversion",
    wallet_importBackup: "Restore the backup",
    wallet_importBackup_invalidFormat: "Invalid Format",
    wallet_importBackup_reset: "Reset",
    wallet_importBackup_ok: "Confirm Restore",
    wallet_importBackup_success: "Successfully restored {name} wallet",
    wallet_importBackup_name: "Wallet Name",
    wallet_importBackup_name_ph: "Please enter new wallet name",
    wallet_modifyPassword: "Change your password",
    wallet_accountPrivateKey: "账号私钥",
    wallet_accountPrivateKey_ph: "请输入账号私钥",
    wallet_backupDescription: "单击下面的按钮将生成一个扩展名为.bin的备份文件。 此文件使用您的钱包密码加密，并包含您帐户的所有私钥。 它可以用于恢复您的钱包，或将其移动到不同的计算机/浏览器。",
    wallet_importBackupDes: "选择以前备份的.bin文件以恢复钱包。",
    wallet_oldPassword: "旧密码",
    wallet_oldPassword_ph: "请输入旧密码",
    wallet_newPassword: "新密码",
    wallet_newPassword_ph: "请输入新密码",
    wallet_confirmPassword: "确认密码",
    wallet_confirmPassword_ph: "请输入确认密码",
    wallet_password: "钱包密码",
    wallet_password_ph: "请输入钱包密码",
    wallet_selectFile: "选择钱包文件",
    wallet_selectAccount: "选择支付账户",
    wallet_selectAccount_ph: "Select Account",
    index_account: "账户",
    index_account_ph: "请输入账户名筛选",
    index_order: "委单",
    index_debt: "债仓",
    index_marketValue: "市值",
    transaction_latest: "最新价",
    transaction_volume: "成交量",
    transaction_pay: "买入",
    transaction_sell: "卖出",
    transaction_orders: "委托管理",
    transaction_currentBalance: "当前{symbol}余额",
    transaction_canBuy: "可买{symbol}",
    transaction_canSell: "可卖{symbol}",
    transaction_marketPrice: "市价单",
    transaction_limitPrice: "限价单",
    transaction_price: "价格 {symbol}",
    transaction_amount: "金额 {symbol}",
    transaction_count: "数量 {symbol}",
    transaction_turnover: "成交额 {symbol}",
    transaction_chargefee: "手续费 {symbol}",
    transaction_confirmSell: "立即售出",
    transaction_confirmPay: "立即买入",
    transaction_depthPrice: "价格",
    transaction_confirm: "请确认交易",
    transaction_confirm_accountName: "账户名",
    transaction_confirm_registerName: "注册人",
    transaction_confirm_recommender: "终身会员推荐人",
    transaction_confirm_unlock: "解锁钱包",
    transaction_seller: "Seller",
    transaction_expiration: "Expiration",
    transaction_orderId: "Order Id",
    transaction_fundingAccount: "Funding account",
    transaction_deltaCollateral: "Collateral change",
    transaction_deltaDebt: "Debt change",
    transaction_no_listing: "Unlisted",
    transaction_white_listed: "Whitelisted",
    transaction_black_listed: "Blacklisted",
    transaction_white_and_black_listed: "Whitelisted and blacklisted",
    transaction_market_fee: "Market fee",
    transaction_max_market_fee: "Maximum market fee",
    transaction_publisher: "Publisher",
    transaction_new_url: "Website",
    transaction_claimed: "Total claimed",
    transaction_deposit_to: "Deposited to account",
    transaction_balance_id: "Balance ID",
    transaction_balance_owner: "Balance owner key",
    transaction_blinding_factor: "Blinding factor",
    transaction_outputs: "Outputs",
    transaction_inputs: "Inputs",
    transaction_broadcast_fail: "Failed to broadcast the transaction:",
    transaction_broadcast_success: "Transaction has been broadcast",
    transaction_waiting: "Waiting for confirmation..",
    transaction_broadcasting: "Broadcasting transaction..",
    transaction_received: "received",
    transaction_withdraw_permission_create: "Gave withdrawal permission for account",
    transaction_withdraw_permission_update: "Updated withdrawal permission for account",
    transaction_withdraw_permission_claim: "Claimed withdrawal permission for account",
    transaction_withdraw_permission_delete: "Deleted withdrawal permissions for account",
    transaction_global_parameters_update: "Updated global parameters",
    transaction_vesting_balance_create: "created vesting balance of",
    transaction_committee_member_create: "Created the committee member",
    transaction_committee_member_update: "Update committee member",
    transaction_asset_claim_fees: "claimed asset fees of {balance_amount} from {asset} fee pool",
    transaction_custom: "Created a custom operation",
    lastOperation_operation: "操作",
    lastOperation_info: "信息",
    scan_defaultMsg: "系统不支持直接摄像头识别，请选择照相或图片",
    scan_selectImg: "选择图片",
    scan_noCamera: "未发现摄像头",
    scan_noQrcode: "未能识别二维码，请重新选择图片",
    scan_yesQrcode: "识别到二维码",
    transfer_from: "From",
    transfer_from_ph: "Place enter from account name",
    transfer_to: "To",
    transfer_to_ph: "Place enter to-account name",
    transfer_member_unknown:"Unknown member",
    transfer_member_lifetime:"Lifetime member",
    transfer_member_basic:"Basic member",
    transfer_member_annual: "Annual subscriber",
    transfer_amount: "Amount",
    transfer_amount_ph: "Place enter amount",
    transfer_balance: "Balance",
    transfer_memo: "Memo",
    transfer_memo_ph: "Place enter memo",
    transfer_chargefee: "Fee",
    transfer_send: "Send",
    transfer_memoUnlock: "Unlock your wallet in order to see this memo",
    balance_assets: "Assets",
    balance_conversion: "换算值",
    //trxTypes
    trxTypes_transfer: "Transfer",
    trxTypes_limit_order_create: "Place order",
    trxTypes_limit_order_cancel: "Cancel order",
    trxTypes_call_order_update: "Update margin",
    trxTypes_account_create: "Create account",
    trxTypes_account_update: "Update account",
    trxTypes_account_whitelist: "Account whitelist",
    trxTypes_account_upgrade: "Upgrade Account",
    trxTypes_account_transfer: "Transfer Account",
    trxTypes_asset_create: "Create asset",
    trxTypes_asset_update: "Update asset",
    trxTypes_asset_update_bitasset: "Update SmartCoin",
    trxTypes_asset_update_feed_producers: "Update asset feed producers",
    trxTypes_asset_issue: "Issue asset",
    trxTypes_asset_reserve: "Reserve asset",
    trxTypes_asset_fund_fee_pool: "Fund asset fee pool",
    trxTypes_asset_settle: "Asset settlement",
    trxTypes_asset_global_settle: "Global asset settlement",
    trxTypes_asset_publish_feed: "Publish feed",
    trxTypes_committee_member_create: "Create committee member",
    trxTypes_committee_member_update: "Update committee member",
    trxTypes_witness_create: "Create witness",
    trxTypes_witness_update: "Update witness",
    trxTypes_witness_withdraw_pay: "Witness pay withdrawal",
    trxTypes_proposal_create: "Create proposal",
    trxTypes_proposal_update: "Update proposal",
    trxTypes_proposal_delete: "Delete proposal",
    trxTypes_withdraw_permission_create: "Create withdrawal permission",
    trxTypes_withdraw_permission_update: "Update withdrawal permission",
    trxTypes_withdraw_permission_claim: "Claim withdrawal permission",
    trxTypes_withdraw_permission_delete: "Delete withdrawal permission",
    trxTypes_fill_order: "Fill order",
    trxTypes_committee_member_update_global_parameters: "Global parameters update",
    trxTypes_vesting_balance_create: "Create vesting balance",
    trxTypes_vesting_balance_withdraw: "Withdraw vesting balance",
    trxTypes_worker_create: "Create budget item",
    trxTypes_custom: "Custom",
    trxTypes_assert: "Assert operation",
    trxTypes_balance_claim: "Claim balance",
    trxTypes_override_transfer: "Override transfer",
    trxTypes_transfer_to_blind: "Transfer to blinded account",
    trxTypes_blind_transfer: "Blinded transfer",
    trxTypes_transfer_from_blind: "Transfer from blinded account",
    trxTypes_asset_claim_fees: "Claim asset fees",
    //exchanges
    exchange_price: "Price",
    exchange_sell: "Sell",
    exchange_buyMin: "Buy at least",
    //blocks
    block_feePayer: "Fee paying account",
    block_Publickey: "Public key",
    block_commonOptions: "Common Options",
    block_authorizingAccount: "Authorizing account",
    block_listedAccount: "Listed account",
    block_new_listing: "New listing",
    block_account_upgrade: "Account to upgrade",
    block_lifetime: "Upgrade to lifetime member",
    block_asset_update: "Asset to update",
    block_new_options: "New options",
    block_new_producers: "New feed producers",
    //accounts
    account_name: "Account Name",
    account_registrar: "Registrar",
    account_lifetimeReferrer: "Lifetime Referrer",
    account_votesProxy: "Proxy Voting Account",
    account_votesNoProxy: "No Proxy",
    account_numCommittee: "Desired Committee Members",
    account_num_witnesses: "Desired Witnesses",
    account_votes: "Votes",
    account_memoKey: "Memo Key",
    account_no_price: "Unknown",
    account_no_orders:"No open orders",
    account_totalBalance: "Total Balance",
    account_more: "see more",
    account_not_yours: "Not your account",
    //assets
    assets_issuer: "Issuer",
    assets_new_issuer: "New owner account",
    assets_symbol: "Symbol",
    assets_precision: "Precision",
    assets_max_supply: "Maximum supply",
    assets_description: "Description",
    assets_asset_issue: "Amount to issue",
    //markets
    markets_core_rate: "Core rate",
    //explorer
    explorer_accounts_title: "Accounts",
    explorer_accounts_filter: "Filter accounts",
    explorer_assets_title: "assets",
    explorer_maximum_short_squeeze_ratio: "Maximum short squeeze ratio (MSSR)",
    explorer_maintenance_collateral_ratio: "Maintenance collateral ratio (MCR)",
    explorer_settlement_price: "Settlement price",
    explorer_committee_members_title: "Committee members",
    explorer_witness: "Witness",
    explorer_op: "Operation",
    //proposal_create
    proposal_create_review_period: "Review period begin",
    proposal_create_expiration_time: "Expiration time",
    proposal_create_fee_paying_account: "Fee paying account",
    proposal_create_proposed_operations: "Proposed operations",
    //proposal
    proposal_update_active_approvals_to_add: "Active approvals to add",
    proposal_update_active_approvals_to_remove: "Active approvals to remove",
    proposal_update_owner_approvals_to_add: "Owner approvals to add",
    proposal_update_owner_approvals_to_remove: "Owner approvals to remove",
    proposal_update_key_approvals_to_add: "Key approvals to add",
    proposal_update_key_approvals_to_remove: "Key approvals to remove",
    //operation
    operation_pending: "pending {blocks} blocks",
    operation_no_recent: "No recent transactions",
    operation_reg_account: "{registrar} registered the account {new_account}",
    operation_transfer: "{from} sent {amount} to {to}",
    operation_proposal_create: "{account} created a proposed transaction",
    operation_proposal_update: "{account} updated a proposed transaction",
    operation_proposal_delete: "{account} deleted a proposed transaction",
    operation_fill_order: "{account} bought {received} at {price}",
    operation_vesting_balance_withdraw: "{account} withdrew vesting balance of {amount}",
    operation_balance_claim: "{account} claimed a balance of {amount}",
    operation_publish_feed: "{account} published feed price of {price}",
    operation_set_proxy: "{account} set {proxy} as their voting proxy",
    operation_update_account: "{account} updated their account data",
    operation_limit_order_sell: "{account} placed an order to sell {amount} at {price}",
    operation_limit_order_buy: "{account} placed an order to buy {amount} at {price}",
    operation_limit_order_cancel: "{account} cancelled order #{order}",
    operation_call_order_update: "{account} changed {debtSymbol} debt by {debt} and collateral by {collateral}",
    operation_asset_reserve: "{account} reserved (burnt) {amount}",
    operation_asset_issue: "{account} issued {amount} to {to}",
    operation_asset_fund_fee_pool: "{account} funded {asset} fee pool with {amount}",
    operation_asset_create: "{account} created the asset {asset}",
    operation_asset_update: "{account} updated the asset {asset}",
    operation_lifetime_upgrade_account: "{account} was upgraded to lifetime member",
    operation_annual_upgrade_account: "{account} was upgraded to annual member",
    operation_unlisted_by: "{lister} unlisted the account {listee}",
    operation_whitelisted_by: "{lister} whitelisted the account {listee}",
    operation_blacklisted_by: "{lister} blacklisted the account {listee}",
    operation_transfer_account: "{account} ownership transferred to {to}",
    operation_asset_update_feed_producers: "{account} updated the feed producers for the asset {asset}",
    operation_asset_settle: "{account} requested settlement of {amount}",
    operation_asset_global_settle: "{account} requested global settlement of {asset} at {price}",
    operation_witness_create: "{account} was upgraded to become a witness",
    operation_witness_update: "{account} update its witness info",
    operation_witness_pay: "Withdrew witness pay to account",
    operation_witness_receive: "Received witness from witness",
    operation_committee_member_update_global_parameters: "{account} updated the global committee parameters",
    operation_worker_create: "{account} created a worker proposal with daily pay of {pay}",
    operation_override_transfer: "{issuer} transferred {amount} from {from} to {to}"
}