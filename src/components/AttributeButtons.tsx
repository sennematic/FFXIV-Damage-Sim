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
    attribute: string;
}
export const HitRateButton = ({statValue, level, job, attribute}:ButtonProps) => {
    function GetHitRate(attributeToUse:string){
        switch (attributeToUse) {
            case "Direct Hit Rate":
                return getDirectHitChance(statValue,level,job);
            case "Critical Hit Rate":
                return getCriticalHitChance(statValue,level,job);
            default: 
                0
        }
    };

    const finalHitRate = GetHitRate(attribute) || 0;
    
    const handleClick = () => {
        console.log(getDirectHitChance(statValue,level,job))
    };
    return (
        <button onClick={handleClick} className="p-2 m-2 bg-blue-900 rounded">
            {attribute}: {finalHitRate.toString()}%
        </button>
    )
    
};