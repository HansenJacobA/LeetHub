const encode = strs => {
    // const separator = "_";
    // const result = strs.map(str => `${str.length}${separator}${str}`).join("");
    // return result;
    return strs
};

const decode = s => {
    return s
	// const separator = "_";
	// const result = [];
	// let i = 0;
	// while (i < s.length) {
	// let leftIdx = i;
	// while (s[i] !== separator) {
	// i++;
	// }
	// const len = Number(s.slice(leftIdx, i));
	// const word = s.slice(i + 1, i + len + 1);
	// result.push(word);
	// i = i + len + 1; 
	// }
	// return result;
};

// const encode = strs => {
//     const separator = "_";
//     const result = strs.map(str => `${str.length}${separator}${str}`).join("");
//     return result;
// };

// const decode = s => {
// 	const separator = "_";
//     const result = [];
//     let i = 0;
//     while (i < s.length) {
//         let leftIdx = i;
//         while (s[i] !== separator) {
//             i++;
//         }
//         const len = Number(s.slice(leftIdx, i));
//         const word = s.slice(i + 1, i + len + 1);
//         result.push(word);
//         i = i + len + 1; 
//     }
//     return result;
// };