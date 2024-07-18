const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether');   // convert ether to wei
}

describe('Token', () => {
    let token;
    
    beforeEach( async () => {
         // Fetch Token from Blockchain, we get the Factory and we deploy it
         const Token = await ethers.getContractFactory('Token');
         token = await Token.deploy('My Token', 'DAPP', '1000000');

    })

    describe('Deployment', () => {
        const name = 'My Token';
        const symbol = 'DAPP';
        const decimals = '18';
        const totalSupply = tokens('1000000'));
        
        it('has correct name', async () => {
            // Read Token name
            // const name = await token.name();
            // Check that name is correct
            expect(await token.name()).to.equal('My Token');
        })
    
        it('has correct symbol', async () => {
            // Read Token name
            // const symbol = await token.symbol();
            // Check that name is correct
            expect(await token.symbol()).to.equal('DAPP');
        })
    
        it('has correct decimals', async () => {
            // Read Token name
            // const symbol = await token.symbol();
            // Check that name is correct
            expect(await token.decimals()).to.equal('18');
        })
    
        it('has correct total supply', async () => {
            // Read Token name
            // const symbol = await token.symbol();
            // Check that name is correct
            // const value = tokens('1000000');
            expect(await token.totalSupply()).to.equal(totalSupply);
        })

    })    
})
