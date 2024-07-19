function stringChop(str, size) {
  // your code here
  let ans=[];
  if(str.length==0)
	  return ans;
  str=str.split("");
  
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
