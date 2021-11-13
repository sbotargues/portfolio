import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true, start: 1}
) {
  const { receiveShadow, castShadow, start} = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'macphill'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)
        console.log(obj)
        obj.traverse(function (child) {
          if (child.isGroup) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
            child.start = start

          }
        })
        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
            child.start = start
          }
        })
        obj.traverse(function (child) {
          if (child.isObject3D) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
            child.start = start
          }
        })
        obj.traverse(function (child) {
          if (child.isGroup) {
            child.start = start
          }
        })
        resolve(obj)
      },
      undefined,
      function (error) {
        reject(error)
      }
    )
  })
}
