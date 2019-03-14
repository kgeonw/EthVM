/* tslint:disable */
export enum BalanceType {
    TX_FEE = "TX_FEE",
    REWARD = "REWARD",
    ETHER = "ETHER",
    ERC20 = "ERC20",
    ERC721 = "ERC721"
}

export enum ContractTypeEnum {
    GENERIC = "GENERIC",
    ERC20 = "ERC20",
    ERC721 = "ERC721"
}

export enum Duration {
    ALL = "ALL",
    YEAR = "YEAR",
    MONTH = "MONTH",
    WEEK = "WEEK",
    DAY = "DAY"
}

export enum SearchType {
    Transaction = "Transaction",
    Address = "Address",
    Block = "Block",
    None = "None"
}

export enum TokenExchangeRateFilter {
    price_high = "price_high",
    price_low = "price_low",
    volume_high = "volume_high",
    volume_low = "volume_low",
    market_cap_high = "market_cap_high",
    market_cap_low = "market_cap_low",
    market_cap_rank = "market_cap_rank"
}

export class AccountMetadata {
    id?: string;
    inTxCount?: number;
    isContractCreator?: boolean;
    isMiner?: boolean;
    outTxCount?: number;
    totalTxCount?: number;
}

export class Action {
    TraceCallActionRecord?: TraceCallActionRecord;
    TraceCreateActionRecord?: TraceCreateActionRecord;
    TraceDestroyActionRecord?: TraceDestroyActionRecord;
    TraceRewardActionRecord?: TraceRewardActionRecord;
}

export class AddressBalance {
    address?: string;
    balance?: Decimal;
}

export class AggregateBlockMetric {
    id?: AggregateBlockMetricKey;
    bigInteger?: string;
    date?: Long;
    double?: number;
    float?: number;
    int?: number;
    long?: number;
    name?: string;
}

export class AggregateBlockMetricKey {
    date?: Long;
    name?: string;
}

export class Balance {
    id?: BalanceKey;
    address?: string;
    amount?: string;
    balanceType?: BalanceType;
}

export class BalanceKey {
    balanceType?: BalanceType;
    address?: string;
}

export class Block {
    header?: Header;
    totalDifficulty?: string;
    transactions?: Transaction[];
    uncles?: Uncle[];
    rewards?: Reward[];
}

export class BlockMetric {
    id?: Decimal;
    avgGasLimit?: string;
    avgGasPrice?: string;
    avgTxFees?: string;
    blockTime?: string;
    difficulty?: string;
    hash?: string;
    number?: number;
    numFailedTxs?: number;
    numPendingTxs?: number;
    numSuccessfulTxs?: number;
    numUncles?: number;
    timestamp?: number;
    totalDifficulty?: string;
    totalTxs?: number;
}

export class Contract {
    id?: string;
    address?: string;
    creator?: string;
    data?: Buffer;
    destructed?: ContractDestructed;
    metadata?: ContractMetadata;
    type?: ContractType;
}

export class ContractDestructed {
    address?: string;
    balance?: Buffer;
    refundAddress?: Buffer;
}

export class ContractMetadata {
    decimals?: number;
    ens_address?: string;
    name?: string;
    symbol?: string;
    website?: string;
    logo?: Logo;
    social?: Social;
    support?: Support;
}

export class ContractType {
    string?: ContractTypeEnum;
}

export class Header {
    author?: string;
    difficulty?: string;
    extraData?: string;
    gasLimit?: string;
    gasUsed?: string;
    hash?: string;
    logsBloom?: string;
    nonce?: string;
    number?: number;
    parentHash?: string;
    receiptsRoot?: string;
    sha3Uncles?: string;
    size?: number;
    stateRoot?: string;
    timestamp?: number;
    transactionsRoot?: string;
}

export class Log {
    address?: string;
    data?: string;
    topics?: string[];
}

export class Logo {
    src?: string;
}

export class ProcessingMetadata {
    id?: ProcessingMetadataKey;
    boolean?: boolean;
    bigInteger?: string;
    double?: Decimal;
    float?: Decimal;
    int?: number;
    long?: number;
    name?: string;
    string?: string;
}

export class ProcessingMetadataKey {
    name?: string;
}

export abstract class IQuery {
    abstract accountMetadataByHash(hash: string): AccountMetadata | Promise<AccountMetadata>;

    abstract balanceByHash(hash: string): Balance | Promise<Balance>;

    abstract blockMetricByHash(hash?: string): BlockMetric | Promise<BlockMetric>;

    abstract blockMetrics(limit?: number, page?: number): BlockMetric[] | Promise<BlockMetric[]>;

    abstract blocks(limit?: number, page?: number): Block[] | Promise<Block[]>;

    abstract blockByHash(hash?: string): Block | Promise<Block>;

    abstract blockByNumber(number?: number): Block | Promise<Block>;

    abstract minedBlocksByAddress(address?: string, limit?: number, page?: number): Block[] | Promise<Block[]>;

    abstract totalNumberOfBlocks(): number | Promise<number>;

    abstract contractByHash(hash?: string): Contract | Promise<Contract>;

    abstract contractsCreatedBy(creator?: string, limit?: number, page?: number): Contract[] | Promise<Contract[]>;

    abstract quote(token: string, to: string): Quote | Promise<Quote>;

    abstract tokenExchangeRates(filter: TokenExchangeRateFilter, limit?: number, page?: number): TokenExchangeRate[] | Promise<TokenExchangeRate[]>;

    abstract totalNumTokenExchangeRates(): number | Promise<number>;

    abstract tokenExchangeRateBySymbol(symbol: string): TokenExchangeRate | Promise<TokenExchangeRate>;

    abstract tokenExchangeRateByAddress(address: string): TokenExchangeRate | Promise<TokenExchangeRate>;

    abstract processingMetadataById(id: string): ProcessingMetadata | Promise<ProcessingMetadata>;

    abstract search(hash: string): Search | Promise<Search>;

    abstract totalTxs(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract totalSuccessfulTxs(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract averageDifficulty(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract totalFailedTxs(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract totalGasPrice(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract averageGasLimit(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract averageGasPrice(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract totalTxsFees(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract averageTxFee(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract averageMinerReward(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract averageBlockTime(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract averageHashRate(duration: Duration): Statistic[] | Promise<Statistic[]>;

    abstract addressTokenTransfers(address: string, limit?: number, page?: number): TokenTransfer[] | Promise<TokenTransfer[]>;

    abstract addressTokenTransfersByHolder(address: string, holder: string, filter?: string, limit?: number, page?: number): TokenTransfer[] | Promise<TokenTransfer[]>;

    abstract tx(hash: string): Transaction | Promise<Transaction>;

    abstract txs(limit?: number, order?: string, fromBlock?: number): Transaction[] | Promise<Transaction[]>;

    abstract txsForBlock(hash: string): Transaction[] | Promise<Transaction[]>;

    abstract txsForAddress(hash: string, filter?: string, limit?: number, page?: number): Transaction[] | Promise<Transaction[]>;

    abstract totalNumberOfTransactions(): number | Promise<number>;

    abstract uncleByHash(hash: string): Uncle | Promise<Uncle>;

    abstract uncles(limit?: number, page?: number, fromUncle?: number): Uncle[] | Promise<Uncle[]>;

    abstract totalNumberOfUncles(): number | Promise<number>;

    abstract latestUncleBlockNumber(): number | Promise<number>;

    abstract temp__(): boolean | Promise<boolean>;
}

export class Quote {
    to?: string;
    price?: string;
    last_update?: Decimal;
    vol_24h?: string;
}

export class Receipt {
    blockHash?: string;
    blockNumber?: number;
    contractAddress?: string;
    cumulativeGasUsed?: string;
    gasUsed?: string;
    logsBloom?: string;
    numInternalTxs?: number;
    root?: string;
    transactionHash?: string;
    transactionIndex?: string;
    logs?: Log[];
    traces?: Trace[];
}

export class Result {
    address?: string;
    code?: string;
    gasUsed?: string;
    output?: string;
}

export class Reward {
    author?: string;
    rewardType?: string;
    value?: string;
}

export class Search {
    type?: SearchType;
    address?: AddressBalance;
    block?: Block;
    tx?: Transaction;
}

export class Social {
    blog?: string;
    chat?: string;
    facebook?: string;
    forum?: string;
    github?: string;
    gitter?: string;
    instagram?: string;
    linkedin?: string;
    reddit?: string;
    slack?: string;
    telegram?: string;
    twitter?: string;
    youtube?: string;
}

export class Statistic {
    date?: Long;
    value?: StatisticValue;
}

export abstract class ISubscription {
    abstract newBlock(): Block[] | Promise<Block[]>;
}

export class Support {
    email?: string;
    url?: string;
}

export class TokenExchangeRate {
    id?: string;
    address?: string;
    circulatingSupply?: string;
    currentPrice?: Decimal;
    high24h?: Decimal;
    image?: string;
    lastUpdated?: string;
    low24h?: Decimal;
    marketCap?: Decimal;
    marketCapChange24h?: Decimal;
    marketCapChangePercentage24h?: Decimal;
    marketCapRank?: number;
    name?: string;
    priceChange24h?: Decimal;
    priceChangePercentage24h?: Decimal;
    symbol?: string;
    totalSupply?: number;
    totalVolume?: Decimal;
}

export class TokenTransfer {
    id?: TokenTransferKey;
    amount?: string;
    contract?: string;
    from?: string;
    timestamp?: number;
    to?: string;
    tokenId?: string;
    transferType?: BalanceType;
}

export class TokenTransferKey {
    hash?: string;
}

export class Trace {
    blockHash?: string;
    blockNumber?: number;
    error?: string;
    subtraces?: number;
    traceAddress?: number[];
    transactionHash?: string;
    transactionPosition?: number;
    type?: string;
    action?: Action;
    result?: Result;
}

export class TraceCallActionRecord {
    callType?: string;
    from?: string;
    gas?: string;
    input?: string;
    to?: string;
    value?: string;
}

export class TraceCreateActionRecord {
    from?: string;
    gas?: string;
    init?: string;
    value?: string;
}

export class TraceDestroyActionRecord {
    address?: string;
    balance?: string;
    refundAddress?: string;
}

export class TraceRewardActionRecord {
    author?: string;
    value?: string;
    rewardType?: string;
}

export class Transaction {
    id?: string;
    blockHash?: string;
    blockNumber?: number;
    creates?: string;
    from?: string;
    gas?: string;
    gasPrice?: string;
    hash?: string;
    input?: string;
    nonce?: string;
    r?: string;
    s?: string;
    timestamp?: number;
    to?: string;
    transactionIndex?: number;
    v?: number;
    value?: string;
    receipt?: Receipt;
}

export class Uncle {
    id?: string;
    author?: string;
    blockNumber?: number;
    difficulty?: string;
    extraData?: string;
    gasLimit?: string;
    gasUsed?: string;
    hash?: string;
    logsBloom?: string;
    nonce?: string;
    number?: number;
    parentHash?: string;
    receiptsRoot?: string;
    sha3Uncles?: string;
    size?: number;
    stateRoot?: string;
    timestamp?: number;
    transactionsRoot?: string;
    uncleIndex?: number;
    uncleReward?: string;
}

export type Buffer = any;
export type Date = any;
export type Decimal = any;
export type JSON = any;
export type Long = any;
export type StatisticValue = any;