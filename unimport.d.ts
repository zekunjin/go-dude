export {}
declare global {
  const CONFIG_FILENAME: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/consts')['CONFIG_FILENAME']
  const YAML: typeof import('yaml')['default']
  const backupDockerComposeFile: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['backupDockerComposeFile']
  const build: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/commands/build')['default']
  const check: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/commands/check')['default']
  const checkVersion: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['checkVersion']
  const colors: typeof import('consola/utils')['colors']
  const consola: typeof import('consola')['default']
  const dayjs: typeof import('dayjs')['default']
  const defineCommand: typeof import('ctizen')['defineCommand']
  const deploymentLabelSelectors: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/k8s')['deploymentLabelSelectors']
  const destr: typeof import('destr')['destr']
  const dirname: typeof import('pathe')['dirname']
  const dockerBuild: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerBuild']
  const dockerComposeServiceImage: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerComposeServiceImage']
  const dockerLoadImage: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerLoadImage']
  const dockerLogin: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerLogin']
  const dockerPs: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerPs']
  const dockerPush: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerPush']
  const dockerRemoveImage: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerRemoveImage']
  const dockerRemoveImageTar: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerRemoveImageTar']
  const dockerSaveImage: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerSaveImage']
  const dockerTag: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerTag']
  const dockerVersion: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['dockerVersion']
  const ensureDockerComposeFile: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['ensureDockerComposeFile']
  const ensureFile: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['ensureFile']
  const execAsync: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['execAsync']
  const execBuildScript: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['execBuildScript']
  const filename: typeof import('pathe/utils')['filename']
  const fse: typeof import('fs-extra')['default']
  const generteImageTagFromGitCommitHash: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['generteImageTagFromGitCommitHash']
  const getDockerComposeFileName: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['getDockerComposeFileName']
  const getDockerComposeFilePath: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['getDockerComposeFilePath']
  const getLatestCommit: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/git')['getLatestCommit']
  const gitCmd: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/git')['gitCmd']
  const hasUncommit: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/git')['hasUncommit']
  const isFileExist: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['isFileExist']
  const isString: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['isString']
  const join: typeof import('pathe')['join']
  const kubeExecAsync: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/k8s')['kubeExecAsync']
  const kubeGetContainers: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/k8s')['kubeGetContainers']
  const kubeGetPo: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/k8s')['kubeGetPo']
  const kubeSetImage: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/k8s')['kubeSetImage']
  const load: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/commands/load')['default']
  const loadConfig: typeof import('c12')['loadConfig']
  const nanoid: typeof import('nanoid')['nanoid']
  const parseArgs: typeof import('citty')['parseArgs']
  const parseDockerCompose: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['parseDockerCompose']
  const push: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/commands/push')['default']
  const readConf: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['readConf']
  const readName: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['readName']
  const renameSshFile: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['renameSshFile']
  const renderUsage: typeof import('citty')['renderUsage']
  const replaceImage: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['replaceImage']
  const resolvePath: typeof import('mlly')['resolvePath']
  const run: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/commands/push')['run']
  const runCommand: typeof import('citty')['runCommand']
  const semver: typeof import('semver')['default']
  const serviceDockerRun: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['serviceDockerRun']
  const serviceDockerVersion: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/docker/index')['serviceDockerVersion']
  const showUsage: typeof import('citty')['showUsage']
  const sshConnect: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/ssh')['sshConnect']
  const sshExecAsync: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/ssh')['sshExecAsync']
  const sshExist: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/ssh')['sshExist']
  const upload: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['upload']
  const uploadImage: typeof import('C:/Users/zekun.jin/Documents/Projects/go-dude/utils/common')['uploadImage']
}