- \*\*W3 Accesibility role defintions
  - https://www.w3.org/TR/wai-aria-1.0/roles
- \*\*React Testing Library docs:
  - https://testing-library.com/docs/react-testing-library/intro/
- \*\*userEvents:
  - Whenever we use `userEvents` in our test, we need to create session using `setup` method.
  - example: `const user = userEvent.setup()`
  - in userEvent 14.x, userEvent `always returns a promise`, which means when we use any method on `userEvent`, we need to `await` it and then make an assertion
  - \*\*\*For example:

```
import { userEvent } from "@testing-library/user-event";
const user = userEvent.setup();
await user.click();
```

- **testing library API**
  - [About Queries](https://testing-library.com/docs/queries/about/)
  - [RTL cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)
  - [RTL Query priority](https://testing-library.com/docs/queries/about/#priority)
- \*\*Mock Service Worker (msw):
  - https://mswjs.io/
  - intercept network calls and return dummy JSON responses for testing
  - Setup:
    - install msw `npm install msw`
    - create handlers
    - create test server
      - Make sure test server listens during all tests
      - reset after each test
  - Anything we want to appear asynchronously on the page, we need to use `await` and `findBy`
  - Example: in below line of code, images are relying on img path coming from server, so we have to use `findAllByRole`.
  - `findAllByRole` returns promise, so we need to use `await-async`
  -
