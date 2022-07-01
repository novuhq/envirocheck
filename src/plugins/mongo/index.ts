import { DependencyCheckerBase } from '../base-checker';

export class MongoChecker extends DependencyCheckerBase {
  async check(): Promise<boolean> {
    try {
      const inUse = await this.checkPort(27017);

      return inUse;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
