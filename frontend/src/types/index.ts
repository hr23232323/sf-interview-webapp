export type DebtToEarningsData = {
    institutionName : string;
    city :string;
    state :string;
    zip :string;
    institutionType :string;
    cipCode :string;
    cipName :string;
    credentialLevel :string;
    debtToEarningsAnnualRate :number;
    meanAnnualEarningsFromSsa :number;
    medianAnnualEarningsfromSsa :number;
    };

export enum FilterableProperties {
    INSTITUTIONTYPE = "institutionType",
    CREDENTIALLEVEL = "credentialLevel",
}

export type Filter = {
    value : string;
    propertyName : FilterableProperties;
    findFunction : (dataPoint: DebtToEarningsData) => boolean
}
