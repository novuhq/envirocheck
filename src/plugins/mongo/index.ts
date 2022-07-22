import { DependencyCheckerBase } from '../base-checker'

export class MongoChecker extends DependencyCheckerBase {
  constructor() {
    super(27018, 'mongodb')
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
