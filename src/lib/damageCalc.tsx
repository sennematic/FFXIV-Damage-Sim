//Functions for handling damage calculations live here
import {jobMod, levelMod, clanMod} from "./types"

const levelMod100:levelMod = {
    level: 100, 
    mainMod: 440, 
    subMod: 420, 
    divMod: 2780, 
    hpMod: 4000,
    mpMod: 10000
}

function getDirectHitChance(directHitRate:number, level: number, job:jobMod) {
    const mainStatMod = Math.floor(Math.floor(500 * directHitRate - levelMod100.mainMod)/levelMod100.divMod)/10;
    const subStatMod = Math.floor(550 * (directHitRate - levelMod100.subMod)/levelMod100.divMod)/10;
    if(level !== 100) {
        return "Error - Invalid level"
    } else {
        return mainStatMod
    }
}; 

function getCriticalHitChance(criticalHitRate:number, level: number, job:jobMod) {
    const mainStatMod = Math.floor(Math.floor(200*criticalHitRate-levelMod100.mainMod)/levelMod100.divMod+50)/10;
    const subStatMod = Math.floor(200*(criticalHitRate-levelMod100.subMod)/levelMod100.divMod+50)/10;
    
    if (level !== 100) {
        return "Error - Invalid level"
    } else {
        return mainStatMod
    }
};

function getDamageDealt(potency:number, determinationModifier:number, attackPowerModifier: number) {
    return Math.floor(Math.floor(Math.floor(potency * determinationModifier * attackPowerModifier)/100)/1000);
};

function getWeaponDamage(level:number, job:jobMod, weaponPower:number) {
    let jobModAttribute: number;
    switch (job.mainStat) { 
        case "Strength": {
            jobModAttribute = job.strMod;
        }
        case "Dexterity": {
            jobModAttribute = job.dexMod;
        }
        case "Mind":{
            jobModAttribute = job.mndMod;
        }
        case "Intelligence":{
            jobModAttribute = job.intMod;
        }
        default: {
            jobModAttribute = job.strMod;
        }
    };

    return Math.floor((levelMod100.mainMod * jobModAttribute/1000)+weaponPower);
}; 

export {getDirectHitChance, getCriticalHitChance, getDamageDealt, getWeaponDamage};