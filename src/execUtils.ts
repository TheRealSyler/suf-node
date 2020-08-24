import { exec } from 'child_process';

export interface ExecOptions {
  linkStdout: boolean;
}

export interface ExecOut {
  stdout: string;
  stderr: string;
}

export async function Exec(command: string, options?: ExecOptions): Promise<ExecOut> {
  return new Promise((res, rej) => {
    const ref = exec(command, {}, (err, stdout, stderr) => {
      if (err) {
        return rej(err);
      }
      res({ stdout, stderr });
    });
    if (options?.linkStdout) {
      ref.stdout?.on('data', (d) => process.stdout.write(d));
    }
  });
}
