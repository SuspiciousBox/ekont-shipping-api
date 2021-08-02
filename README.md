# ekont-shipping-api


# himera88 web app nextjs

## System Requirements

- Linux / macOS
- Docker
- sudo access

## Development setup

Check if the docker group exists on your system:

```
sudo grep docker /etc/group
```

Add the group if it does not exist (no group output from the previous command):

```
sudo groupadd docker
```

Once you're sure the group exists, add your system user to it:

```
sudo usermod -aG docker your_system_username
```

## Development workflow

Start a shell inside a temporary nodejs container:

```
./dev.sh
```

The rest of the commands are meant to be run via the containerized shell.

Download or update dependencies:

```
npm ci
```

Install new dependencies (example):

```
npm i lodash
```

Run locally (development):

```
npm run dev
```

## Important Notes

- Use `npm ci` for updating your local `node_modules` via `package.json` instead of `npm i` in order to avoid changing `package-lock.json`.
- If you want to install a new package or do something else that is expected to change `package-lock.json`, or you deleted that file for some reason - then use `npm i`.
