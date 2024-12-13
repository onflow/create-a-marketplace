import "NFTStorefrontV2"

// This transaction sets up the emulator account for the marketplace tutorial
// by publishing a Vault reference and creating an empty NFT Collection.
transaction {
  prepare(acct: auth(Storage) &Account) {

    // Save the newly created storefront resource into account storage
    acct.storage.save(<-NFTStorefrontV2.createStorefront(), to: NFTStorefrontV2.StorefrontStoragePath)

    log("Storefront created")
  }
}
