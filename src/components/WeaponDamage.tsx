import react from "react";
import {useState} from "react";
import {jobMod, levelMod, clanMod} from "../lib/types";
import {getDirectHitChance, getCriticalHitChance, getDamageDealt, getWeaponDamage} from "../lib/damageCalc";
const jobTest = {
    jobName: "Test",
    jobAbbreviation: "TST",
    mainStat: "Strength",
    hpMod: 115,
    mpMod: 100,
    strMod: 115,
    vitMod: 105,
    dexMod: 100,
    intMod: 45,
    mndMod: 65,
};

interface ButtonProps {
    statValue:number;
    level:number; 
    job:jobMod;
}
export const DirectHitRateButton = ({statValue, level, job}:ButtonProps) => {
    const test= getDirectHitChance(statValue,100,jobTest)
    const handleClick = () => {
        console.log(getDirectHitChance(statValue,100,jobTest))
    };
    return (
        <button onClick={handleClick} className="p-2 m-2">
            DH rate: {test.toString()}
        </button>
    )
};