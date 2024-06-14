1. first write the function breadthFirstSearch with root as parameter
``` javascript
const breadthFirstSearch = (root) => {

}
```

2. if root is null then return nothing 
3. we need values and ques variable initially set to empty array
4. now we need to loop through all the node till queue.length not greater than 0
5. first of all we need to shift the value of queue and store it in a variable node
6. now push that node value to the values array
7. now check if the left node is null or not if its not null push the node to the queue
8. now check if the right node is null or not, if its not push the node to the queue
9. repeat till there are no node in the queue array
10. return values

***Note: In breadth first traversal we are moving along the breadth first then the depth***