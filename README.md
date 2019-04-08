# string-tag**

**A tiny tool to create string tags.**

## Example

```javascript
import stringTag from "string-tag";

class MyString extends String {}

const ms = stringTag(MyString);

var str = ms`this is a custom string of ${MyString.name}`;

console.assert(str instanceof MyString);
console.assert(str.valueOf() === "this is a custom string of MyString");
```

## API

```typescript
export type StringTag<T> = (strings: string[], ...data: any[]) => T;
export function stringTag<T = string>(ctor?: new (...args: any[]) => T): StringTag<T>;
export default stringTag;
```