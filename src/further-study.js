// Unit 2 Assessment: further-study.js

// Return a sequence of words arranged according to the rules below.
//
// The sequence starts with the first word in the given array. The next word
// will start with the last letter of the preceding word. For example, these
// are all valid sequences of words:
//
//   king, goblin, nose, eat
//   cute, etcetera, antsy, yak, karat
//
// Sometimes, you'll get a word where there are mutliple candidates for the
// next word. For example, if the words are:
//
//   noon, naan, nun
//
// Then the first word in the sequence is 'noon'.
//
//   noon
//
// And the word after that should be the *first* word that starts with 'n'. So,
// even though both 'naan' and 'nun' start with 'n', the next word should be
// 'naan' because 'naan' appears before 'nun'. The final sequence of words will
// be:
//
//   noon, naan, nun
//
// The sequence will continue in this fashion until it runs out of words or it
// can't find words that'll fit the pattern.
//
// Ex.:
//   buildWordChain(['zoo', 'sour', 'racket', 'octos']);
//   => ['zoo', 'octos', 'sour', 'racket']



// function buildWordChain(words) {
//     // Add first word to arr and remove from words
//     const arr = [words[0]];
//     words.splice(0, 1);

//     // Iterate over remainding words to see if first letter of word in words is equal to last letter of last word in arr
//     while (words.length > 0) {
//         for (const word of words) {
//             if (word[0] === arr[arr.length - 1][arr[arr.length - 1].length - 1]) {
//                 arr.push(word);
//                 words.splice(words.indexOf(word), 1)
                
//             } else {
//                 return arr;
//             }
//         }
//     }
//     return arr;
// }



// function buildWordChain(words) {
//     // for every word in words
//     for (let i = 0; i < words.length; i++) {
//         // for every word following word[i] in words
//         console.log(``);
//         innerloop: for (let j = i + 1; j < words.length; j++) {
//             console.log(`words[i]:`, words[i])
//             console.log(`words[j]:`, words[j])
//             if (words[i][words[i].length - 1] === words[j][0]) {
//                 console.log(`last letter of words[i] is the same as first letter of words[j]`)
//                 console.log(`words pre slice`, words)
//                 let word = words.splice(j, 1)[0];
//                 words.splice(i + 1, 0, word)
//                 console.log(`words post slice;`, words);
//                 break innerloop;
//             } else {
//                 console.log(`not the same`)
//             }
//             console.log(``)
//         }
//     }
//     console.log(words);
//     return words;
// }



function buildWordChain(words) {
    const arr = [words[0]];
    words.splice(0, 1);
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === arr[arr.length - 1][arr[arr.length - 1].length - 1]) {
            arr.push(words.splice(i, 1)[0])
            i = -1;
        }
    }
    return arr;
}
// function buildWordChain(words) {
//     const arr = [words[0]];
//     words.splice(0, 1);
//     // console.log(words)
//     for (let i = 0; i < words.length; i++) {
//         // console.log()
//         // console.log(`Iteration ${i + 1}`)
//         // console.log(`word[i]:`, words[i])
//         // console.log(`arr:`, arr)
//         console.log(`Last letter of last word in arr:`, arr[arr.length - 1][arr[arr.length - 1].length - 1])
//         if (words[i][0] === arr[arr.length - 1][arr[arr.length - 1].length - 1]) {
//             arr.push(words.splice(i, 1)[0])
//             console.log(`arr post push:`, arr)
//             i = -1;
//         } else {
//             console.log(`First letter of word[i] is not equal to last letter of last word of arr`)
//         }
//         console.log(`i:`, i)
//     }
//     return arr;
// }
buildWordChain(['zoo', 'sour', 'racket', 'octos'])
// console.log(buildWordChain(['zoo', 'sour', 'racket', 'octos']))

export { buildWordChain };
