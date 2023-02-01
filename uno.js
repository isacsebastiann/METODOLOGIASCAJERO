//sumar numeros impares
let nums=[1,2,3,4,6];
let sum=0;
for(let i=0; i<nums.length; i++)
{
    if(nums[i]%2!=0)
    {
        sum+=nums[i];
    }
}
console.log(sum);