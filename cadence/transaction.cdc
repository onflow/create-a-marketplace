import NFTStorefront from 0x03

// This transaction sets up account 0x01 for the marketplace tutorial
// by publishing a Vault reference and creating an empty NFT Collection.
transaction {
  prepare(acct: auth(Storage) &Account) {

    // Save the newly created storefront resource into account storage
    acct.storage.save(<-NFTStorefront.createStorefront(), to: NFTStorefront.StorefrontStoragePath)

    log("Storefront created")
  }
}
