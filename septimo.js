//7. Mostrar la suma de los elementos donde  elíndice y el elemento sean iguales
let nums=[2,1,4,3];
let sum=0;
for(let i=0; i<nums.length; i++)
{
    if(nums[i]==i)
    {
        sum+=nums[i]
    }
}
console.log(sum);
