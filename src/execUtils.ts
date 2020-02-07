import { exec } from 'child_process';

export async function Exec(command: string): Promise<{ stdout: string; stderr: string }> {
  return new Promise((res, rej) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        return rej(err);
      }
      res({ stdout, stderr });
    });
  });
}
