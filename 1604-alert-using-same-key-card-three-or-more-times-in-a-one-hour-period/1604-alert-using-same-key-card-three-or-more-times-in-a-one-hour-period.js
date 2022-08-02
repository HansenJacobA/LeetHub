/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    const guilty = {};
    const list = [];
    const nameToTime = {};
    for (let i = 0; i < keyName.length; i += 1) {
        if (nameToTime[keyName[i]] === undefined) {
            nameToTime[keyName[i]] = [keyTime[i]];
            continue;
        }
        nameToTime[keyName[i]].push(keyTime[i]);
    }
    for (const name in nameToTime) {
        const times = nameToTime[name];
        times.sort();
        for (let i = 0; i < times.length - 1; i += 1) {
            const time1 = parseInt(times[i].split(':').join(''));
            let countFromTime1 = 1;
            for (let j = i + 1; j < times.length; j += 1) {
                const time2 = parseInt(times[j].split(':').join(''));
                if (Math.abs(time1 - time2) <= 100) {
                    countFromTime1 += 1;
                }
            }
            if (countFromTime1 > 2) {
                list.push(name);
                break;
            }
        }
    }
    return list.sort();
};