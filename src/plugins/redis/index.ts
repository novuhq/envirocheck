import { DependencyCheckerBase } from '../base-checker';

export class RedisChecker extends DependencyCheckerBase {
  async check(): Promise<boolean> {
    try {
      const inUse = await this.checkPort(6379);

      return inUse;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
