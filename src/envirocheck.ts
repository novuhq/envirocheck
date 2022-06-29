import * as fs from 'fs';
import { parse, stringify } from 'yaml'
import { checkIfMongoDBIsOnline } from './plugins/mongo';
import { checkIfRedisIsRunning } from './plugins/redis';

const plugins: { [key: string]: () => Promise<boolean> } = {
  'redis': checkIfRedisIsRunning,
  'mongo': checkIfMongoDBIsOnline
};

(async () => {
  const environment = fs.readFileSync('.envirocheck.yml', 'utf8');
  const { dependencies } = parse(environment);

  for (const dependency of dependencies) {
    const plugin = plugins[dependency] ;

    if (plugin) {
      const result = await plugin();

      if (!result) {
        console.log(`${dependency} is not running`);
      }
    }
  }
  console.log('HI')
})()
