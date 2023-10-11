import { program } from 'commander'
import consola from 'consola'
import { version } from '../../package.json'
import { checkVersion, execBuildScript, generteImageTagFromGitCommitHash, readConf, readName } from '../shared/common'
import { dockerBuild, dockerSaveImage, dockerRemoveImage, dockerLogin, dockerPush, dockerTag } from '../shared/docker'
import { sshExist } from '../shared/ssh'
import push from './push'

const selectImage = async (config: DudeConfig, images?: string[]) => {
  if (!config?.ssh?.host) { return }
  if (!images?.length) { return }

  let [image] = images

  if (images.length > 1) {
    image = await consola.prompt('Pick a service template.', {
      type: 'select',
      options: images
    }) as unknown as string
  }

  return image
}

const pushImage = async (config: DudeConfig, image: string | undefined, option: any) => {
  if (!image) { return }
  if (!sshExist(config)) { return }
  const confirmed = await consola.prompt(`Push ${image} to ${config.ssh.host}?`, {
    type: 'confirm'
  })
  if (confirmed) { await push(image, { ...option, tag: undefined }) }
}

program.command('build')
  .version(version)
  .description('build project')
  .option('-c --config <char>', 'Declare dude config file.')
  .option('-p --platform <char>', 'Declare target image build platform.')
  .option('-t --tag <char>', 'Named image tag without git hash.')
  .action(async (option) => {
    await checkVersion()
    const config = await readConf(option.config)
    const name = await readName(config)

    if (config.build?.script) { await execBuildScript(config) }

    let tag = option?.tag

    if (!tag) {
      tag = await generteImageTagFromGitCommitHash()
    }

    let image: string | undefined = await dockerBuild(name, tag, option?.platform)

    if (config.repos && config.repos.length > 0) {
      await dockerTag(config, name, tag)
      await dockerLogin(config)
      const images = await dockerPush(config, name, tag)
      await dockerRemoveImage(config, name, tag)()

      image = await selectImage(config, images)
      await pushImage(config, image, option)

      return
    }

    await dockerSaveImage(name, tag)
    await dockerRemoveImage(config, name, tag)()

    await pushImage(config, image, option)
  })
