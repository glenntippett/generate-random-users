# Generate Random Users

### How to use
The package is a wrapper around the [Random User API](https://randomuser.me/).

```bash
yarn add generate-random-user
```

```js
import { generateUsers } from 'generate-random-user';

// Generate a random user
generateUsers();

// Returns Promise<array>

// Pass numOfUsers to generate that many users
generateUsers({ numOfUsers: 5 });

// Specify a gender
generateUsers({ gender: 'female' })
```
