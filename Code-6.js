/*


0 <= array-values < n
// Input
n -> 4
arr -> [3,1,0,2]
temp - Int



//Process
arr[i] = arr[arr[i]]

arr[0] = arr[arr[0]] = arr[3] = 2
arr[1] = arr[arr[1]] = arr[1] = 1
arr[2] = arr[arr[2]] = arr[0] = 3
arr[3] = arr[arr[3]] = arr[2] = 0


//Output
arr -> [2,1,3,0]

O[1]

*/