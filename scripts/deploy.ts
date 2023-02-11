import { ethers, hardhatArguments } from 'hardhat'
import * as Config from './config'

async function main() {
  await Config.initConfig()
  const network = hardhatArguments.network ? hardhatArguments.network : 'dev'
  const [deployer] = await ethers.getSigners()
  console.log('deploy from address: ', deployer.address)

  // const Floppy = await ethers.getContractFactory('Floppy')
  // const floppy = await Floppy.deploy()
  // console.log('Floppy address: ', floppy.address)
  // Config.setConfig(network + '.Floppy', floppy.address)

  // const Vault = await ethers.getContractFactory ('Vault')
  // const vault = await Vault.deploy()
  // console.log('Floppy address: ', vault.address)
  // Config.setConfig(network + '.Vault', vault.address)

  // const USDT = await ethers.getContractFactory('USDT')
  // const usdt = await USDT.deploy()
  // console.log('USDT address: ', usdt.address)
  // Config.setConfig(network + '.USDT', usdt.address)

  const Ico = await ethers.getContractFactory('FLPCrowdSale')
  const ico = await Ico.deploy(
    10000,
    10000,
    '0x0C02446CE83F6673C57449b9e893920F5dE1Bd23',
    '0x0D5DF3d2E23D1f9940D78326f15c8d01EB809892'
  )
  console.log('ICO address: ', ico.address)
  Config.setConfig(network + '.ico', ico.address)

  await Config.updateConfig()
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
