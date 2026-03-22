'use strict';

const birthdayString1 = '2007-01-03';
const birthdayString2 = '2012-03-22';
const birthdayString3 = '2020-05-15';

function checkAge(dataStr, diffAge) {
    
    const now = new Date();
    const birthDate = new Date(dataStr);

    const differenceYears = now.getFullYear() - birthDate.getFullYear();
    
    if (differenceYears < diffAge) {
        return false;
    } else if (differenceYears > diffAge) {
        return true;
    } else {
        const differenceMonth = now.getMonth() - birthDate.getMonth();
        if (differenceMonth < 0) {
            return false;
        } else if (differenceMonth > 0) {
            return true;
        } else {
            if ((birthDate.getDate() - now.getDate()) < 0) {
                return false;
            } else {
                return true;
            }
        }
    }
}

console.log(checkAge(birthdayString1, 14));
console.log(checkAge(birthdayString2, 14));
console.log(checkAge(birthdayString3, 14));