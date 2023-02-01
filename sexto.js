//6. Mostrar la suma elementos que no seanmúltiplos de 7
let nums=[1,7,2,14];
let sum=0;
for(let i=0; i<nums.length; i++)
{
    if(nums[i]%7!=0)
    {
        sum+=nums[i];
    }
}
console.log(sum);