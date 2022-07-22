import { DependencyCheckerBase } from '../base-checker'

export class RedisChecker extends DependencyCheckerBase {
  constructor() {
    super(6379, 'redis')
  }
  async check(): Promise<boolean> {
    try {
      return super.check()
    } catch (e) {
      console.error(e)
      return false
    }
  }
}
