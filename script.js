function stringChop(str, size) {
  // your code here
  str=str.split("");
  let ans=[];
  while(str.length>0){
      let tem=str.splice(0,size);
      ans.push(tem.join(""));
  }
  return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));  
