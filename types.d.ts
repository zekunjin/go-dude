interface ImageRepo {
  host: string
  username: string
  password: string
  project: string
}

interface DudeConfig {
  name?: string
  dockerCompose?: false | {
    file: string
    command?: string
  }
  k8s: {
    deployment: string
    pod?: string
    container?: string
    namespace?: string
  }
  ssh: {
    host: string
    username: string
    password: string
    port: number
  }
  build: {
    script?: string
    output: string
  }
  repos?: ImageRepo[]
}

interface DockerComposeService {
  image: string
  volumns?: string[]
  ports?: string[]
  network_mode:? string
}

interface DockerCompose {
  version: string
  services: Record<string, DockerComposeService>
}

interface DockerVersion {
  Client: {
    Platform: { Name: string }
    Version: string
  },
  Server: {
    Platform: { Name: string }
    Version: string
  }
}

interface DockerPs {
  Command: string
  CreatedAt: string
  ID: string
  Image: string
  Labels: string
  LocalVolumes: strin
  Mounts: string
  Names: string
  Networks: string
  Ports: string
  RunningFor: string
  Size: string
  State: string
  Status: string
}

interface KubectlGetPo {
  apiVersion: string
  items: {
    apiVersion: string
    kind: string
    metadata: {}
    spec: {
      containers: {}[]
    }
    status: {
      containerStatuses: K8sContainerStatus[]
    }
  }[]
}

interface K8sContainerStatus {
  containerID: string
  image: string
  imageID: string
  lastState: string
  name: string
  ready: string
  restartCount: number
  started: boolean
  state: Record<string, { startedAt: string }>
}

interface NpmView {
  _id: string
  name: string
  version: string
}