/**
 * Created by User on 2018-02-10.
 */
export const calculateAverage = (array) => {
    const aggregateAndTotalCount = array.reduce((acc,curr) => {
        return {aggregate: acc.aggregate += curr.age, totalEntries: acc.totalEntries += 1 };
    },{
        aggregate:0,
        totalEntries:0
    })
    return aggregateAndTotalCount.aggregate/aggregateAndTotalCount.totalEntries;
}