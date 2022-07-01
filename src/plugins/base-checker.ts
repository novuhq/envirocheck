import { check as checkTcpPort } from 'tcp-port-used';

export abstract class DependencyCheckerBase {
  check(): Promise<boolean> {
    throw new Error('Not implemented');
  }

  protected checkPort(port: number): Promise<boolean> {
    return checkTcpPort(port);
  }
}

