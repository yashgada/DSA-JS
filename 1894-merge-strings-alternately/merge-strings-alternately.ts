function mergeAlternately(word1: string, word2: string): string {
    let p1 = 0;
    let p2 = 0;
    let result = '';
    while(p1<word1.length && p2<word2.length){
    result+=word1[p1++]
    result+=word2[p2++]
    }
    if(p1<word1.length) result+=word1.slice(p1)
    if(p2<word2.length) result+=word2.slice(p2)
    return result;
};