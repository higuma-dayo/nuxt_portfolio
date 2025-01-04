<template>
  <div
    class="relative flex h-screen w-auto flex-col items-center justify-center overflow-hidden"
    ref="canvasWrapper"
  >
    <canvas id="canvas" class="h-full w-full"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
const isElement = (x) => x instanceof Element

export default {
  name: 'GltfViewer',
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      mixer: null,
      animations: [],
      gltfUrl: './models/iphone.glb',
    }
  },
  computed: {
    isBrowser() {
      return typeof window !== 'undefined'
    },
  },
  mounted() {
    // ブラウザ環境でのみ実行
    if (!this.isBrowser) return

    this.init()
      .then(() => {
        // 初期化が完了してからレンダリングを開始
        if (this.renderer && this.scene && this.camera) {
          this.renderer.render(this.scene, this.camera)
        }
      })
      .catch((error) => {
        console.error('Initialization failed:', error)
      })

    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onScroll)

    if (this.renderer) {
      this.renderer.dispose()
    }
  },
  methods: {
    // 初期化
    async init() {
      if (!this.isBrowser) return

      const canvas = document.getElementById('canvas')
      if (!canvas) {
        throw new Error('Canvas element not found')
      }

      const { canvasWrapper } = this.$refs
      if (!isElement(canvasWrapper)) {
        throw new Error('Canvas wrapper not found')
      }

      const width = canvasWrapper.clientWidth
      const height = canvasWrapper.clientHeight

      // 初期設定
      this.scene = new THREE.Scene()
      // 仮のデフォルトカメラ設定
      this.camera = new THREE.PerspectiveCamera(
        75, // fov
        width / height,
        0.1, // near
        1000, // far
      )
      this.camera.position.set(0, 0, 5)

      this.renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
      })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(width, height)

      // Blenderに近い見え方にする為の設定
      this.renderer.outputColorSpace = THREE.SRGBColorSpace
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping
      this.renderer.toneMappingExposure = Math.pow(2, -3)
      this.renderer.shadowMap.enabled = true

      // 照明設定
      this.createLight()

      // モデルロード
      await this.loadGLTF()

      // 初期表示時でも再生位置を更新
      this.onScroll()
    },
    // モデルロード
    async loadGLTF() {
      if (!this.isBrowser) return

      return new Promise((resolve, reject) => {
        // DRACOLoaderの初期化
        const dracoLoader = new DRACOLoader()
        // デコーダーのパスを設定（three.jsに付属のデコーダーをコピーして使用）
        dracoLoader.setDecoderPath('./models/')
        // オプション：WebAssemblyを使用する場合
        dracoLoader.setDecoderConfig({ type: 'wasm' })

        const loader = new GLTFLoader()

        loader.setDRACOLoader(dracoLoader)

        loader.load(
          this.gltfUrl,
          (gltf) => {
            this.animations = gltf.animations
            const model = gltf.scene

            // 影の設定を有効にする
            model.traverse((obj) => {
              if (obj.type === 'Mesh') {
                obj.receiveShadow = true

                // 不要な計算を避ける為、影を落とさない'Floor'(Blenderでのオブジェクト名)は除外する
                if (obj.name !== 'Floor') {
                  obj.castShadow = true
                }
              } else if (obj.type === 'DirectionalLight') {
                obj.castShadow = true
              }
            })

            // gltf内のカメラ設定を適用
            if (gltf.cameras.length > 0) {
              const loadedCamera = gltf.cameras[0]

              // PerspectiveCameraの場合
              if (loadedCamera instanceof THREE.PerspectiveCamera) {
                this.camera = loadedCamera
              }
              // 他のカメラタイプの場合、PerspectiveCameraに変換
              else {
                this.camera = new THREE.PerspectiveCamera(
                  75, // fov
                  window.innerWidth / window.innerHeight,
                  0.1, // near
                  1000, // far
                )
                // 基本的なプロパティをコピー
                this.camera.position.copy(loadedCamera.position)
                this.camera.rotation.copy(loadedCamera.rotation)
              }

              // カメラのアスペクト比をウィンドウのアスペクト比に合わせる
              this.camera.aspect = window.innerWidth / window.innerHeight
              this.camera.updateProjectionMatrix()
            }

            // gltf内のアニメーション設定を適用
            if (this.animations?.length && this.scene) {
              this.mixer = new THREE.AnimationMixer(gltf.scene)

              for (const animation of this.animations) {
                const action = this.mixer.clipAction(animation)
                action.setLoop(THREE.LoopOnce, 0)
                action.clampWhenFinished = true
                action.play()
              }
            }

            if (this.scene) {
              this.scene.add(model)
              dracoLoader.dispose()
              resolve()
            }
          },
          undefined,
          reject,
        )
      })
    },
    // 照明設定
    createLight() {
      if (!this.scene || !this.isBrowser) return

      // 一方向から均等に照らすライト
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(0, 60, 0)

      // シーン全体を均等に照らすライト
      const ambientLight = new THREE.AmbientLight(0xffffff, 20)

      // 空と地面から異なる色の光を照らすライト。上方向（空側）と下方向（地面側）に異なる色を設定
      const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 5)

      this.scene.add(directionalLight)
      this.scene.add(ambientLight)
      this.scene.add(hemisphereLight)
    },
    // リサイズ
    onResize() {
      if (!this.renderer || !this.camera || !this.isBrowser) return

      const width = window.innerWidth
      const height = window.innerHeight

      // WebGLRendererが描画するキャンバスのサイズをウィンドウの幅と高さに合わせる
      this.renderer.setSize(width, height)
      // ピクセル比率をデバイスの画面解像度に合わせる
      this.renderer.setPixelRatio(window.devicePixelRatio)

      // カメラのアスペクト比をウィンドウのアスペクト比に合わせる
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()

      if (this.scene) {
        this.renderer.render(this.scene, this.camera)
      }
    },
    // スクロールされたらアニメーションの再生位置を更新
    onScroll() {
      if (
        !this.mixer ||
        !this.animations ||
        !this.renderer ||
        !this.scene ||
        !this.camera ||
        !this.isBrowser
      )
        return
      const scrollY = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      // スクロール位置に基づいて再生時間を計算（アニメーション全体の時間をスクロールにマッピング）
      const scrollProgress = Math.min(scrollY / maxScroll, 1) // 0から1の範囲に正規化
      const animationDuration = this.animations[0]?.duration ?? 0 // アニメーションの総時間
      const newTime = scrollProgress * animationDuration // アニメーションの再生位置
      // アニメーションの再生位置を設定
      const action = this.mixer.clipAction(this.animations[0])
      if (action) {
        action.paused = true // アニメーションを停止した状態で再生位置を変更
        action.time = newTime // 再生時間を設定
        this.mixer.update(0) // 更新
      }
      // レンダリング
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera)
      }
    },
  },
}
</script>
