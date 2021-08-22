import { readdir, stat, exists } from 'fs';
import { basename, resolve } from 'path';

/**
 * Returns an array with all the file names in the given directory
 */
export async function Walk(dir: string) {
  return new Promise<string[]>((_resolve, reject) => {
    let results: string[] = [];
    readdir(dir, (err, list) => {
      if (err)
        return reject(err);
      let pending = list.length;
      let completed = true;
      if (!pending) {
        return _resolve(list);
      }
      list.forEach((file) => {
        file = resolve(dir, file);
        stat(file, async (err, stat) => {
          if (err)
            return reject(err);
          if (stat && stat.isDirectory()) {
            completed = false;
            const a = await Walk(file);
            results.push(...a);
            if (!--pending) {
              return _resolve(results);
            }
          } else {
            results.push(file);
            if (!--pending && completed) {
              return _resolve(results);
            }
          }
        });
      });
    });
  });
}

export async function Exits(path: string) {
  return new Promise<boolean>(res => {
    exists(path, exists => {
      res(exists);
    });
  });
}
