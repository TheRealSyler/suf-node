import { basename } from 'path'
import { Exits, Walk } from '../fsUtils'

test("Walk", async () => {
  const dirs = await Walk(__dirname)

  expect(JSON.stringify(dirs.map(f => basename(f)))).toEqual(JSON.stringify(['fsUtils.spec.ts']))
})

test("Exists", async () => {
  expect(await Exits(__dirname)).toEqual(true);
  expect(await Exits('./a_aaw_d_wsd')).toEqual(false);
})