# Cryptozombies

Tutorial at <https://cryptozombies.io/en/course/>

Source code at <https://github.com/loomnetwork/cryptozombies-lesson-code>

## Startup

```js
truffle init
```

This will create the following structure:

```_
├── contracts
    └── Migrations.sol
├── migrations
    └── 1_initial_migration.js
├── test
truffle-config.js
```

To keep `\contracts` in `\src` directory, add this line to `truffle-config.js`:

```js
contracts_directory: "./src/contracts/";
```

To deploy to a network, install

```js
@truffle/hdwallet-provider
```

After proper configuration in `truffle-config.js`, deploy the contracts with

```js
truffle migrate --network <network>
```

Configure for Ganache with

```js
networks: {
    development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*"
      }
    ...
```

Truffle will access `development` network by default, but other can be selected with

```sh
truffle test --network <network-name>
```

## Notes

We have visibility modifiers that control when and where the function can be called from: `private` means it's only callable from other functions inside the contract; `internal` is like private but can also be called by contracts that inherit from this one; `external` can only be called outside the contract; and finally `public` can be called anywhere, both internally and externally.

We also have state modifiers, which tell us how the function interacts with the blockchain: `view` tells us that by running the function, no data will be saved/changed. `pure` tells us that not only does the function not save any data to the blockchain, but it also doesn't read any data from the blockchain. Both of these don't cost any gas to call if they're called externally from outside the contract (but they do cost gas if called internally by another function).

Then we have custom modifiers. For these we can define custom logic to determine how they affect a function.
These modifiers can all be stacked together on a function definition as follows:

```sol
function test() external view onlyOwner anotherModifier { /* ... */ }
```
