String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}

module.exports = (str) => {
    str.toLowerCase();
    words = str.split(' ')
    // Looping through each word
    for(i=0;i<words.length;i++){
        // get random char in a word
        var si = words[i]
        for(j=0;j<si.length;j++){
            r = Math.floor(Math.random()*(si.length))
            // make it uppercase
            test = si.charAt(r)
            test = test.toUpperCase();
            si = si.replaceAt(r,test)
            
        }
        words[i] = si
    }
    // join the words 
    fstr = words.join(" ")
    return `${fstr}`
}