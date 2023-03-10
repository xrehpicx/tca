oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tca
$ tca COMMAND
running command...
$ tca (--version)
tca/0.0.0 darwin-arm64 node-v18.13.0
$ tca --help [COMMAND]
USAGE
  $ tca COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tca hello PERSON`](#tca-hello-person)
* [`tca hello world`](#tca-hello-world)
* [`tca help [COMMANDS]`](#tca-help-commands)
* [`tca plugins`](#tca-plugins)
* [`tca plugins:install PLUGIN...`](#tca-pluginsinstall-plugin)
* [`tca plugins:inspect PLUGIN...`](#tca-pluginsinspect-plugin)
* [`tca plugins:install PLUGIN...`](#tca-pluginsinstall-plugin-1)
* [`tca plugins:link PLUGIN`](#tca-pluginslink-plugin)
* [`tca plugins:uninstall PLUGIN...`](#tca-pluginsuninstall-plugin)
* [`tca plugins:uninstall PLUGIN...`](#tca-pluginsuninstall-plugin-1)
* [`tca plugins:uninstall PLUGIN...`](#tca-pluginsuninstall-plugin-2)
* [`tca plugins update`](#tca-plugins-update)

## `tca hello PERSON`

Say hello

```
USAGE
  $ tca hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/rafaath/tca/blob/v0.0.0/dist/commands/hello/index.ts)_

## `tca hello world`

Say hello world

```
USAGE
  $ tca hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ tca hello world
  hello world! (./src/commands/hello/world.ts)
```

## `tca help [COMMANDS]`

Display help for tca.

```
USAGE
  $ tca help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tca.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.2/src/commands/help.ts)_

## `tca plugins`

List installed plugins.

```
USAGE
  $ tca plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tca plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.0/src/commands/plugins/index.ts)_

## `tca plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tca plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ tca plugins add

EXAMPLES
  $ tca plugins:install myplugin 

  $ tca plugins:install https://github.com/someuser/someplugin

  $ tca plugins:install someuser/someplugin
```

## `tca plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tca plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ tca plugins:inspect myplugin
```

## `tca plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tca plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ tca plugins add

EXAMPLES
  $ tca plugins:install myplugin 

  $ tca plugins:install https://github.com/someuser/someplugin

  $ tca plugins:install someuser/someplugin
```

## `tca plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ tca plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ tca plugins:link myplugin
```

## `tca plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tca plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tca plugins unlink
  $ tca plugins remove
```

## `tca plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tca plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tca plugins unlink
  $ tca plugins remove
```

## `tca plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tca plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tca plugins unlink
  $ tca plugins remove
```

## `tca plugins update`

Update installed plugins.

```
USAGE
  $ tca plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
