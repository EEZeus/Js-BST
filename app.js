class Node{
    constructor(value){
        this.right = null;
        this.left = null;
        this.value = value;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    lookup(value){
        let current = this.root;
        while(current){
            if(current.value === value)
            return current;
            else if(current.value > value)
            current = current.left;
            else if(current.value < value)
            current = current.right;
        }
        return undefined;
    }
    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
        }
        else{
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(!current.left){
                        current.left = newNode;
                        break;
                    }else{
                        current = current.left;
                    }
                }
                else if(value > current.value){
                    if(!current.right){
                        current.right = newNode;
                        break;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }
}

let bst = new BST();
bst.insert(10);
bst.insert(15);
bst.insert(20);
bst.insert(16);
bst.insert(22);
bst.insert(17);
bst.insert(14);
