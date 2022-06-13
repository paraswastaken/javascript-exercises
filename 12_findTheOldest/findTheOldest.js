const findTheOldest = function(people) {
    let out = people.reduce((oldest, obj)=>{
        if(!("yearOfDeath" in oldest)){
            oldestObj = (new Date().getFullYear()) - oldest.yearOfBirth;
        }
        else oldestObj = oldest.yearOfDeath - oldest.yearOfBirth;
        if(!("yearOfDeath" in obj)){
            currObj = (new Date().getFullYear()) - obj.yearOfBirth;
        }
        else currObj = obj.yearOfDeath - obj.yearOfBirth;
        if(currObj > oldestObj){return obj}
        return oldest;
    }, people[0]);
    return out;
};

// Do not edit below this line
module.exports = findTheOldest;
