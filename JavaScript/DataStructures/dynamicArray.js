class DynamicArray {
    constructor() {
        this.arr = [];
        this.len = 0;
        this.capacity = 1;
    }

    get size() {
        return this.len;
    }

    get display() {
        return this.arr;
    }

    append(ele) {
        if (this.len < this.capacity) {
            this.arr[this.len] = ele;
        } else {
            this.capacity *= 2;
            this.arr[this.len] = ele;
        }
        this.len++;
    }

    pop() {
        this.len--;
        const arr = new Array(this.len);

        for (let i = 0; i < this.len; i++) {
            arr[i] = this.arr[i];
        }
        this.arr = [...arr];
    }

    insert(index, ele) {
        if (index < 0) {
            return -1;
        }

        this.len++;

        if (this.len >= this.capacity) {
            this.capacity *= 2;
        }

        if (index >= this.len) {
            this.arr[this.len - 1] = ele;
            return;
        }

        const newArr = new Array(this.len);
        
        let newIndex = 0;
        let oldIndex = 0;

        while (newIndex < this.len) {
            if (newIndex == index) {
                newArr[newIndex] = ele;
                newIndex++;
            } else {
                newArr[newIndex] = this.arr[oldIndex];
                newIndex++;
                oldIndex++
            }     
        }
        this.arr = newArr;
    }

    removeAtIndex(index) {
        if (index >= this.len || index < 0) {
            return -1;
        }
        this.len--;

        const newArr = new Array(this.len);

        let oldIndex = 0;
        let newIndex = 0;

        while (newIndex < this.len) {
            if (newIndex == index) {
                oldIndex++;
                index--;
            } else {
                newArr[newIndex] = this.arr[oldIndex];
                newIndex++;
                oldIndex++;
            }
        }
        this.arr = newArr;
    }

    remove(ele) {
        if (this.has(ele) == false) {
            return -1;
        }
        this.len--;
        this.removeAtIndex(this.arr.indexOf(ele));
    }

    has(ele) {
        return this.arr.indexOf(ele) != -1;
    }
}

const dynArr = new DynamicArray();

dynArr.append(1);
dynArr.append(1);
dynArr.append(1);
dynArr.append(1);

dynArr.pop();

dynArr.insert(2, 5);

dynArr.removeAtIndex(0);

dynArr.remove(5)

console.log(dynArr.has(1));

console.log(dynArr.size);
console.log(dynArr.display);