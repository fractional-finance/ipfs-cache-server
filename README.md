# ipfs-cache-server

## Redis setup

ensure that you have redis installed

```sh
brew install redis
```

## Project Setup

```sh
yarn install
```

### Start your local redis server

```sh
redis-server
```

should see similar:

````
                _._
           _.-``__ ''-._
      _.-``    `.  `_.  ''-._           Redis 7.0.5 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 19387
  `-._    `-._  `-./  _.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |           https://redis.io
  `-._    `-._`-.__.-'_.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |
  `-._    `-._`-.__.-'_.-'    _.-'
      `-._    `-.__.-'    _.-'
          `-._        _.-'
              `-.__.-'

````

### Start the cache server

```sh
yarn start
```

### Posting to the database

Use any API platform to query the DB

currently we are using postman

example post request:

```js
localhost:3000/ipfs?hashes=QmSFppjRvQFJCsiDdCy5LTM97RJ2hdNTTbWeqmStGcoby5&hashes=QmZakaj5dGkuqnR94ckQRMpDY3USwDYBAeqfikE52cZPRX&hashes=Qmb7dWLMezoRi8KvEUpcHEwUTuqwoP8CGSAh1Kh7PH9yP8

```
