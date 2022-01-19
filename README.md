# TypeORM Quickstart

This repository demonstrates how to configure and use [TypeORM](https://typeorm.io/) (with the [MySQL[JS] driver](https://github.com/mysqljs/mysql)) with [MariaDB](https://mariadb.com). 

## Requirements 

* [Node.js](https://nodejs.org/en/download/)
* [MariaDB](https://mariadb.com) - to get started with MariaDB check out [this guide](https://github.com/mariadb-developers/mariadb-getting-started)!

## Samples

JavaScript
* [Part 1: Using Entities and Connecting to MariaDB with TypeORM](javascript/part1)
* Part 2: Managing Entity Relationships - Coming Soon!
* Part 3: Advanced Querying - Coming Soon!

TypeScript
* Part 1: Using Entities and Connecting to MariaDB with TypeORM - Coming Soon!
* Part 2: Managing Entity Relationships - Coming Soon!
* Part 3: Advanced Querying - Coming Soon!

## Get Started

To use the samples in this repository you must perform the following steps:

1. Clone this repository.

    ```bash 
    $ git clone https://github.com/mariadb-developers/nodejs-typeorm-quickstart.git
    ```

2. Create the database and tables contained in [schema.sql](schema.sql) in _your_ MariaDB database instance.

    For example, using the MariaDB command-line client:
    ```bash
    $ mariadb --host 127.0.0.1 --port 3306 --user <user> --password <password> < schema.sql
    ```

    or just copy, paste and execute the contents of [schema.sql](schema.sql) in your preferred client.

2. Install the required packages (mysql and typeorm).

    ```bash
    $ npm i
    ```

3. Run the desired sample.

    For example:
    ```bash
    $ node javascript/part1/index.js
    ```
    or 
    ```bash 
    $ node typescript/part2/index.ts
    ```

    and so on.


    **Note:** Remember to update the database configuration to point to _your_ MariaDB database.


## Support and Contribution

Please feel free to submit PR's, issues or requests to this project directly.

If you have any other questions, comments, or looking for more information on MariaDB please check out:

* [MariaDB Developer Hub](https://mariadb.com/developers)
* [MariaDB Community Slack](https://r.mariadb.com/join-community-slack)

Or reach out to us directly via:

* [developers@mariadb.com](mailto:developers@mariadb.com)
* [MariaDB Twitter](https://twitter.com/mariadb)

## License <a name="license"></a>
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=plastic)](https://opensource.org/licenses/MIT)