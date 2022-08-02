/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const counts = {};
    const formattedCounts = [];
    for (let i = 0; i < cpdomains.length; i += 1) {
        const info = cpdomains[i].split(' ');
        const number = parseInt(info[0]);
        const domains = info[1].split('.');
        
        for (let j = domains.length - 1; j >= 0; j -= 1) {
            const subDomain = domains.slice(j).join('.');
            if (counts[subDomain] === undefined) {
                counts[subDomain] = number;
                continue;
            }
            counts[subDomain] += number;
        }
    }
    
    for (const key in counts) {
        formattedCounts.push((counts[key]).toString() + ' ' + key);
    }
    return formattedCounts;
};