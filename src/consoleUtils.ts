export async function readConsole() {
  return new Promise<string>((res) => {
    const stdin = process.openStdin();
    const l = (input: string[]) => {
      stdin.pause();
      stdin.removeListener('data', l);
      res(input.toString().trim());
    };
    stdin.addListener('data', l);
  });
}

export async function getYNAnswer(defaultAnswer = true): Promise<boolean> {
  const answer = await readConsole();
  if (/^$/.test(answer)) {
    return defaultAnswer;
  }
  if (/^y$/i.test(answer)) {
    return true;
  }
  if (/n/i.test(answer)) {
    return false;
  }

  return getYNAnswer();
}
