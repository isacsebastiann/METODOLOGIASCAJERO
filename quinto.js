//5. Mostrar la suma elementos múltiplos de 3
let nums=[3,6,9,1];
let sum=0;
for(let i=0; i<nums.length; i++)
{
    if(nums[i]%3==0)
    {
        sum+=nums[i];
    }
}
console.log(sum);