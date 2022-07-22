import { check as checkTcpPort } from 'tcp-port-used'
import chalk from 'chalk'
import * as ora from 'ora'
const log = console.log

export abstract class DependencyCheckerBase {
  protected errors: string[] = []

  protected constructor(protected port: number, protected checkerName: string) {}

  async check(): Promise<boolean> {
    let spinner = ora(`start ${this.checkerName} check`).start()
    log()

    const res = await this.checkPort(this.port)

    if (!res) {
      log(`${chalk.red(`✖ ${this.checkerName} is down, reasons:`)}`)
      log(`${chalk.yellow(this.errors.toString())}`)
    } else {
      log(`${chalk.green(`✔ ${this.checkerName} is up`)}`)
    }

    spinner.stop()
    return res
  }

  protected async checkPort(port: number): Promise<boolean> {
    log(`validate port ${this.port}`)
    const res = await checkTcpPort(port)

    if (!res) {
      this.errors.push(`${this.checkerName} is not running in port ${this.port}`)
    }

    return res
  }
}
