# Envirocheck - Work In Progress 🚧

Easily make sure required environment services are running before start a project. Envirocheck will validate all needed services are running and provide instructions on how to install the missing services.

### Usage

```bash
npm install envirocheck
```

Define your dependencies in the `.envirocheck.yml` file:

```yaml
name: Sample Project Name
dependencies:
 - mongodb
 - redis
```

Add `envirocheck` in your `package.json` file:


```json
"scripts": {
   "start:dev": "envirocheck && <YOUR_RUN_SCRIPT>"
}
```

### Features

 Coming Soon
