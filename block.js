const SHA256 = require('crypto-js/sha256')

class block{
  
    constructor( nodeNumber, data, timestamp, nodeId, referenceNodeId,genesisReferenceNodeId,previousHash)
    {
        this.timestamp=timestamp;
        this.data=data;
        this.nodeNumber=nodeNumber;
        this.nodeId=nodeId;
        this.referenceNodeId=referenceNodeId;
        this.childReferenceNodeId=null;
        this.genesisReferenceNodeId=genesisReferenceNodeId;
        this.previousHash='';
        this.HashValue=this.calculateHash();
    }

    calculateHash()
    {
             return SHA256(this.timestamp + this.data + this.nodeNumber + this.nodeId + this.referenceNodeId + this.childReferenceNodeId + this.genesisReferenceNodeId).toString();

    }

}

class BlockChain{
    constructor(owner)
    {
        this.chain=[];
        this.owner=owner;
        this.hash=this.calhash();
    }
    calhash()
    {
        return SHA256(this.owner).toString();
    }

    

    createGenesisBlock()
    {
        return new block()
    }

    getLatestBlock()
    {
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock)
    {
        newBlock.previousHash = this.getLatestBlock().HashValue;
        newBlock.HashValue= newBlock.calculateHash();
        this.chain.push(newBlock);


    }

     changeOwner(newOwner)
    {
        
        this.owner=newOwner;
        this.hash=this.calhash();

        
    }
    

}


