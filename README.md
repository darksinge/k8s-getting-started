# Simple TODOs

Simple, and fake, TODO app that uses [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/).

---

Branches in this repository:

1. `basic-app`: Simple, barebones express app.
1. `deployment`: Contains Kubernetes manifest file to deploy the app to a cluster.
1. `redis`: Adds a Redis cache to the app to speed up requests. Introduces concept of a Service in K8s.
1. `secrets-1`: Adds a route that requires a code to get a 200 response from the API, but it has a bug.
1. `secrets-2`: Adds a tiny change to help "secure" the `/secret` route.
