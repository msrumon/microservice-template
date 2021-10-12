# Microservices

[This](https://en.wikipedia.org/wiki/Microservices) is what WikiPedia says.

## Development

To run this project locally, you can leverage [Skaffold](https://skaffold.dev). After installing the tool, run:

```bash
skaffold run
```

## Secrets for GitHub Actions

The following secrets must be set:

- `PROVIDER_INGRESS_MANIFEST`: The path to the ingress manifest for the provider. List can be found [here](https://kubernetes.github.io/ingress-nginx/deploy/#provider-specific-steps).
- `PROVIDER_KUBECONFIG_CONTENTS`: The contents of the kubeconfig file for the provider.
- `PROVIDER_KUBECONFIG_CONTEXT`: The context to use in the kubeconfig file for the provider.
- `SECRETS_NATS_DB`: Secrets for NATS database store. More details [here](https://github.com/Azure/k8s-create-secret/blob/94a785a90eb0150ae590c1621449f3a5d782b975/action.yml#L27-L29).

## Running the GitHub Actions workflows locally

There is [this](https://github.com/nektos/act) package, which can be used to run the GitHub Actions workflows locally.
