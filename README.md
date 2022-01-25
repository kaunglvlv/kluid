![kluid](logo.png)

Convenient way to generate and copy a new unique identifier to clipboard.

Supported UID Types
---

* [uuid](https://github.com/uuidjs/uuid)
* [ksuid](https://github.com/novemberborn/ksuid)
* [ulid](https://github.com/ulid/javascript)

Installation
------------

```
npm install kluid -g
```

Usage
-----

### Create a new uuid (default)

```
kluid
```

### Create an empty uuid (`00000000-0000-0000-0000-000000000000`)

```
kluid --empty
```

*Note: this will only work on `uuid`*

### Create another type of uid 

```
kluid --use ulid
```

Supported: `uuid`, `ksuid`, `ulid`

### Help

```
kluid --help
```
