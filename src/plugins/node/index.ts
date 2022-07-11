import { DependencyCheckerBase } from '../base-checker'
import { execPromise } from './utils'

export class NodeChecker extends DependencyCheckerBase {
  async check(): Promise<boolean> {
    try {
      const { stderr, stdout } = await execPromise('node -v')

      if (stderr) {
        return false
      }

      /**
       * using stdout to parse the current node version in environment
       * where envirocheck is running.
       */

      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }
}
