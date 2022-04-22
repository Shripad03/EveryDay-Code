// Javascript program to implement a queue using an array
class Queue {

    constructor(c) {
        this.front = this.rear = 0;
        this.capacity = c;
        this.queue = new Array(this.capacity);
    }

    queueEnqueue(data) {
        if (this.capacity === this.rear) {
            document.write('Queue is full...<br>');
        }
        else {
            this.queue[this.rear] = data;
            this.rear++;
        }
    }

    queueDequeue() {
        if (this.front === this.rear) {
            document.write('Queue is empty...<br>');
        }
        else {
            for (let i = 0; i < this.rear - 1; i++) {
                this.queue[i] = this.queue[i + 1];
            }

            if (this.rear < this.capacity)
                this.queue[this.rear] = 0;

            this.rear--;
        }
        return;
    }
    queueDisplay() {
        let i;
        if (this.front == this.rear) {
            document.write("<br>Queue is empty..");
            return;
        }
        for (i = this.front; i < this.rear; i++) {
            document.write(this.queue[i] + "<--");
        }
        return;
    }
    queueFront() {
        if (this.front == this.rear) {
            document.write("<br>Queue is Empty<br>");
            return;
        }
        document.write("<br>Front Element is: " +
            this.queue[this.front]);
        return;
    }
}



var q = new Queue(5);
q.queueDisplay();

// Inserting elements in the queue
q.queueEnqueue(20);
q.queueEnqueue(30);
q.queueEnqueue(40);
q.queueEnqueue(50);

// Print Queue elements
q.queueDisplay();

// Insert element in the queue
q.queueEnqueue(60);

// Print Queue elements
q.queueDisplay();

q.queueDequeue();