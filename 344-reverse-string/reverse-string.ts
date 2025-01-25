/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const half = Math.floor(s.length/2)
    for(let i = 0; i<half;i++){
        const e = s[i];
        s[i]=s[s.length-1-i]
        s[s.length-1-i] = e
        // [s[i],s[s.length-i-1]]=[s[s.length-i-1],s[i]]
    }
    // return s;
};