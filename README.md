<span id="DOC_GENERATION_MARKER_0"></span>

# SUF Node

- **[consoleUtils](#consoleutils)**

  - [readConsole](#readconsole)
  - [getYNAnswer](#getynanswer)

- **[execUtils](#executils)**

  - [Exec](#exec)

- **[fsUtils](#fsutils)**

  - [Walk](#walk)
  - [Exits](#exits)

### consoleUtils

##### readConsole

```typescript
function readConsole(): Promise<string>;
```

##### getYNAnswer

```typescript
function getYNAnswer(): Promise<boolean>;
```

### execUtils

##### Exec

```typescript
function Exec(command: string): Promise<{
    stdout: string;
    stderr: string;
}
```

### fsUtils

##### Walk

```typescript
/**
 * Returns an array with all the file names in the given directory
 */
function Walk(dir: string): Promise<string[]>;
```

##### Exits

```typescript
function Exits(path: string): Promise<boolean>;
```

_Generated with_ **[suf-cli](https://www.npmjs.com/package/suf-cli)**
<span id="DOC_GENERATION_MARKER_1"></span>

<span id="LICENSE_GENERATION_MARKER_0"></span>
Copyright (c) 2020 Leonard Grosoli Licensed under the MIT license.
<span id="LICENSE_GENERATION_MARKER_1"></span>