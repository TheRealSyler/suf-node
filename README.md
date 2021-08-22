Node Helper functions.

<span id="BADGE_GENERATION_MARKER_0"></span>
[![codecov](https://codecov.io/gh/TheRealSyler/suf-node/branch/master/graph/badge.svg)](https://codecov.io/gh/TheRealSyler/suf-node) [![githubIssues](https://img.shields.io/github/issues/TheRealSyler/suf-node)](https://github.com/TheRealSyler/suf-node) [![npmV](https://img.shields.io/npm/v/suf-node)](https://www.npmjs.com/package/suf-node)
<span id="BADGE_GENERATION_MARKER_1"></span>

<span id="DOC_GENERATION_MARKER_0"></span>

# suf Node Functions

- **[consoleUtils](#consoleutils)**

  - [readConsole](#readconsole)
  - [getYNAnswer](#getynanswer)

- **[execUtils](#executils)**

  - [ExecOptions](#execoptions)
  - [ExecOut](#execout)
  - [Exec](#exec)

- **[fsUtils](#fsutils)**

  - [Walk](#walk)
  - [Exits](#exits)

### consoleUtils

##### readConsole

```ts
function readConsole(): Promise<string>;
```

##### getYNAnswer

```ts
function getYNAnswer(defaultAnswer?: boolean): Promise<boolean>;
```

### execUtils

##### ExecOptions

```ts
interface ExecOptions {
    linkStdout?: boolean;
}
```

##### ExecOut

```ts
interface ExecOut {
    stdout: string;
    stderr: string;
}
```

##### Exec

```ts
function Exec(command: string, options?: ExecOptions): Promise<ExecOut>;
```

### fsUtils

##### Walk

```ts
function Walk(dir: string): Promise<string[]>;
```

##### Exits

```ts
function Exits(path: string): Promise<boolean>;
```

_Generated with_ **[suf-cli](https://www.npmjs.com/package/suf-cli)**
<span id="DOC_GENERATION_MARKER_1"></span>

<span id="LICENSE_GENERATION_MARKER_0"></span>
Copyright (c) 2020 Leonard Grosoli Licensed under the MIT license.
<span id="LICENSE_GENERATION_MARKER_1"></span>
