import { readdir, stat, exists } from 'fs';
import { resolve } from 'path';

export async function Walk(dir: string) {
  return new Promise<string[]>((_resolve, reject) => {
    let results: string[] = [];
    readdir(dir, function(err, list) {
      if (err) return reject(err);
      let pending = list.length;
      let completed = true;
      if (!pending) {
        return _resolve(list);
      }
      list.forEach(function(file) {
        file = resolve(dir, file);
        stat(file, async function(err, stat) {
          if (err) return reject(err);
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
