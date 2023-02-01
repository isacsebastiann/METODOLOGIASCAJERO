//3. Mostrar la suma elementos mayores a 10
let nums=[12,20,3,4,6];
let sum=0;
for(let i=0; i<nums.length; i++)
{
    if(nums[i]>10)
    {
        sum+=nums[i];
    }
}
console.log(sum);