// 1. *Reverse a string*  
//   Input: "hello" → Output: "olleh"

function strReverse(str){
    let result=str.split('').reverse().join('')
    return result
}
console.log(strReverse("hello"))

// 2. *Capitalize first letter*  
//   Input: "javascript" → Output: "Javascript"
function capitalizeFisrt(str){
  return str[0].toUpperCase()+str.slice(1,str.length)
}
console.log(capitalizeFisrt("javascript"))
// 3. *Count vowels in a string*  
//   Input: "hello" → Output: 2

function countVowels(str){
  let count=0;
  for(i of str){
    if(i.toLowerCase()=="a"||i.toLowerCase()=="e"||i.toLowerCase()=="i"||i.toLowerCase()=="o"||i.toLowerCase()=="u"){
      count++
    }
  }
  return count;
}
console.log(countVowels("javascript"))
// 4. *Check for palindrome*  
//   Input: "madam" → Output: true
function isPalindrome(str){
    let result=str.split('').reverse().join('')
    return result==str
}
console.log(isPalindrome("madam"))
// 5. *Replace all spaces with dashes*  
//   Input: "hello world" → Output: "hello-world"
function replaceDash(str){
  str=str.split('')
  for(i in str){
    if(str[i]==" "){
      str[i]="-"
    }
  }
  return str.join('');
}
console.log(replaceDash("javas cript"))
// 6. *Find the longest word in a sentence*  
//   Input: "I love programming" → Output: "programming"

function largestWord(str){
  let arr=str.split(' ')
  let result=""
  for(i of arr){
    if(result.length<i.length){
      result=i
    }
  }
  return result;
}
console.log(largestWord("helloaaddffssd javascript"))

// 7.*Repeat a string N times*  
//   Input: "abc", 3 → Output: "abcabcabc"
function repeatStr(str,n){
  let result=""
  for(i=0;i<n;i++){
    result+=str
  }
  return result;
}
console.log(repeatStr("abc",3))

// 8. *Check if string contains a substring*  
//   Input: "hello world", "world" → Output: true
function subStr(str,sstr){
  return str.includes(sstr)
}
console.log(subStr("naresh","zzz"))

// 9. *Convert string to title case*  
//   Input: "hello world" → Output: "Hello World"
function convertTitleCase(str){
  let arr=str.split(' ')
  for(i in arr){
      arr1=arr[i].split('')
      arr1[0]=arr1[0].toUpperCase()
      arr[i]=arr1.join('')
  }

  return arr.join(' ');
}
console.log(convertTitleCase("hello jan billa"))

