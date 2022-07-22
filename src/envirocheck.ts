import * as fs from 'fs'
import { parse } from 'yaml'
import { DependencyCheckerBase } from './plugins/base-checker'
import { MongoChecker } from './plugins/mongo'
import { RedisChecker } from './plugins/redis'

const plugins: { [key: string]: DependencyCheckerBase } = {
  redis: new RedisChecker(),
  mongodb: new MongoChecker()
}
;(async () => {
  const isEnvironmentConfigFileExists = fs.existsSync('.envirocheck.yml')
  if (!isEnvironmentConfigFileExists) {
    throw new Error("Can't find .envirocheck.yml file")
  }

  const environment = fs.readFileSync('.envirocheck.yml', 'utf8')
  const { dependencies } = parse(environment)

  for (const dependency of dependencies) {
    const plugin = plugins[dependency]

    if (plugin) {
      await plugin.check()
    }
  }
})()
