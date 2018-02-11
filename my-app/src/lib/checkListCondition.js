/**
 * Created by User on 2018-02-10.
 */
export const checkListCondition = (array,flagField) => {
    return array.reduce((acc, curr)=>{
        return curr[flagField] ? [...acc,curr] : acc;
    },[])
}