#!/usr/bin/env node

const program = require('commander')
const clone = require('./src/clone')
const setup = require('./src/setup')
const sync = require('./src/sync')

program
  .command('setup')
  .description('Configure Postman CLI for first use')
  .action(setup)

program
  .command('bootstrap')
  .description('Generate local files from Postman Collection')
  .action(sync)

program
  .command('sync')
  .description('Sync local files to Postman Collection')
  .action(sync)

program
  .command('update')
  .description('Update collection in the Postman app')
  .action(sync)

program
  .command('clone')
  .description('Clone collection into My Workspace')
  .action(clone)

program.parse(process.argv)

// todo
// - [ ] sync environment
