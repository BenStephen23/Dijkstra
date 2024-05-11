function dijkstra(graph, start) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
    
    // Initialize distances to infinity for all vertices except the start
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    
    // Add the start vertex to the priority queue
    priorityQueue.enqueue(start, 0);
    
    while (!priorityQueue.isEmpty()) {
        const currentVertex = priorityQueue.dequeue();
        
        // Iterate through neighbors of the current vertex
        for (let neighbor in graph[currentVertex]) {
            // Calculate the new tentative distance
            const distance = distances[currentVertex] + graph[currentVertex][neighbor];
            
            // Update distance if shorter path is found
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                priorityQueue.enqueue(neighbor, distance);
            }
        }
    }
    
    return distances;
}

// Priority Queue implementation (for demonstration purposes)
class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    
    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }
    
    dequeue() {
        return this.queue.shift().element;
    }
    
    isEmpty() {
        return this.queue.length === 0;
    }
}


const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
 };
 
 const shortestDistances = dijkstra(graph, 'A');
 console.log(shortestDistances);
 