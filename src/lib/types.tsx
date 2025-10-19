export type jobMod = {
    jobName: string; 
    jobAbbreviation: string;
    mainStat: string;
    hpMod: number; 
    mpMod: number; 
    strMod: number;
    vitMod: number;
    dexMod: number;
    intMod: number; 
    mndMod: number;
}

export type levelMod = {
    level: number; 
    mainMod: number; 
    subMod: number; 
    divMod: number; 
    hpMod: number;
    mpMod: number;
}

export type clanMod = {
    id: number; 
    clan: string; 
    race: string; 
    strMod: number;
    dexMod: number; 
    vitMod: number; 
    intMod: number;
    mdnMod: number;
}

