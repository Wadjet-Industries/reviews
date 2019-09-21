# Wadjet Industries

> Project description

## Related Projects

  - https://github.com/Wadjet-Industries/menus
  - https://github.com/Wadjet-Industries/photos
  - https://github.com/Wadjet-Industries/reservations

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [API Routes](#API)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### API 
  
|Method|Command|
|-|-|
|GET| `/api/listing/:listing`|  
|POST| `/api/listing/`  |
|PUT| `/api/listing/:listing`  |
|DELETE| `/api/listing/:listing`|

Data returns under the `rows` property of the response object.

## Databases
  
### Using Postgres script file
- run PostGres script file from terminal 
>>`psql -U username -a -f database/postgres.sql`  
  
|Action|PSQL Command|  
|-|-|  
|View databases|`\l`|
|Select database|`\c database_name`|
|View tables|`\dt`|
|View table schema|`d table_name`|

### Using Cassandra
- Running a Cassandra script file from within `cqlsh`
> cqlsh> `SOURCE 'database/cassandra.cql'`

|Action|CQLSH Command|  
|-|-|  
|Drop keyspace|`drop keyspace reviewsmod`|
|View keyspaces|`describe keyspaces`|
  
**Reference**:  
http://cassandra.apache.org/doc/latest/tools/cqlsh.html#cqlsh