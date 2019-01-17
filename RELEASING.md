# Releasing

* On `master`, update `package.json` with new version number. Follow [semver](http://semver.org/).

```json
  "version": "63.12.0+cos1",
```

Use the `+cosN` to denote a COS divergence from the upstream package.

* Commit with message "Bump version".

```
git commit -m "Bump version"
```

* Add git tag.

```
git tag v63.12.0+cos1
```


* Push to GitHub.

```
git push --tags origin cos
```

* Publish to npm.

```
npm publish --access=public
```
