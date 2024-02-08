class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }

     prettyPrint(node, prefix = "", isLeft = true){
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };

    sortAndDup(arr){
        const removeDups = [...new Set(arr)];
        
        const sort = removeDups.sort((a,b)=>{
            if(a >b){
                return 1
            }else{
                return -1;
            }
        })
        return sort;
    }

    buildTreeRecursive(sortedArr, start, end){
        if(start > end){
            return null
        }else{
            let mid = Math.floor((start+end)/2);
            let node = new Node(sortedArr[mid]);

            node.left = this.buildTreeRecursive(sortedArr, start, mid - 1);
            node.right = this.buildTreeRecursive(sortedArr, mid + 1, end);
            this.prettyPrint(node)
            return node;
        }
    }

    buildTree(arr){
        const processedArr = this.sortAndDup(arr);

        this.root = this.buildTreeRecursive(processedArr, 0, processedArr.length -1);
    }
}

const newTree = new Tree();
let testArr = [1000,2,1,5,6,3,10,2,4,5,3,5,55,33,11];

newTree.buildTree(testArr);