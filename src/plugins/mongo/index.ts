import { DependencyCheckerBase } from '../base-checker'

export class MongoChecker extends DependencyCheckerBase {
  constructor() {
    super(27017, 'mongodb')
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
