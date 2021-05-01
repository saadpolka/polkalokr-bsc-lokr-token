const { expect } = require("chai");
const { poll } = require("ethers/lib/utils");
const { waffle,ethers } = require("hardhat");
const { userInfo } = require("os");
const provider = waffle.provider;
const web3 = require("web3");



describe('PolkalokrToken', () =>{

    const [owner, accountOne] = provider.getWallets();
    let PolkalokrV1;
    let polakalokrv1;

    beforeEach( async () =>{
        Polkalokr = await ethers.getContractFactory("PolkalokrToken");
        polakalokr = await upgrades.deployProxy(Polkalokr,{initializer: 'initialize'});
})


    // it('should getbalance from v2', async () =>{
    //     const balance = await polakalokr.getBalance(owner.address);
    //     console.log("Owner balance ===>",balance.toString());
    // })
    it('Should mint toknes', async () =>{
        let balance = await polakalokr.totalSupply();
        console.log('total supply Before Mint ===>',balance.toString());
        await polakalokr.mint(owner.address,10000000);
        balance = await polakalokr.totalSupply();
        console.log('total supply  After Mint ===>',balance.toString());
    })
    it('Should only mint toknes by owner', async () =>{
        await expect( polakalokr.connect(accountOne).mint(accountOne.address,1000000000000000)).to.be.revertedWith("minting forbidden");
    })
    it('Should burn tokens', async () =>{
        let balance = await polakalokr.balanceOf(owner.address);
    
        console.log("Owner balance Before Burn ==>",balance.toString());
        await polakalokr.burn(owner.address,1000000000000);
         balance = await polakalokr.balanceOf(owner.address);
        console.log("Owner balance After Burn ==>",balance.toString());
    })

   
})