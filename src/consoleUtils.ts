export async function readConsole() {
  return new Promise<string>(res => {
    const stdin = process.openStdin();
    const l = (input: string[]) => {
      stdin.pause();
      stdin.removeListener('data', l);
      res(input.toString().trim());
    };
    stdin.addListener('data', l);
  });
}

export async function getYNAnswer(): Promise<boolean> {
  const answer = await readConsole();
  if (/^$|^y$/i.test(answer)) {
    return true;
  } else if (/n/i.test(answer)) {
    return false;
  } else {
    return getYNAnswer();
  }
}
