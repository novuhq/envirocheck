import { check as checkTcpPort } from 'tcp-port-used'
import * as chalk from 'chalk'
import * as ora from 'ora'
const log = console.log

export abstract class DependencyCheckerBase {
  protected errors: string[] = []

  protected constructor(protected port: number, protected checkerName: string) {}

  async check(): Promise<boolean> {
    let spinner = ora(`Validate ${this.checkerName} is running`).start()

    const res = await this.checkPort(this.port)

    if (!res) {
      spinner.fail(`${this.checkerName} is down, reasons: \n ${this.errors.toString()}`)

      return res
    }

    spinner.succeed(`${this.checkerName} is running in port ${this.port}`)
    return res
  }

  protected async checkPort(port: number): Promise<boolean> {
    const res = await checkTcpPort(port)

    if (!res) {
      this.errors.push(`${this.checkerName} is not running in port ${this.port}`)
    }

    return res
  }
}
