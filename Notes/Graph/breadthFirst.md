1. write a function breadthFS with graph and start as parameters
2. we need to variables queue and visited
    1. initially queue is an array with the starting element
    2. visited is a Set object 
3. loop till the length of loop is 0
4. shift the queue and store the node in a node variable 
5. again have a loop which goes through the neighbours of the graph node
6. check if the neighbours are visited or not 
7. if neighbours are not visited then add to the visited set and push to the queue array
8. repeat the above steps
9. return visited 