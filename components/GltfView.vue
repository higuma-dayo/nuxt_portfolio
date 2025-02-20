<template>
  <div
    class="relative flex h-screen w-auto flex-col items-center justify-center"
    ref="canvasWrapper"
  >
    <Loading ref="loading"/>
    <canvas id="canvas" class="h-full w-full"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Loading from './Loading.vue'
const isElement = (x) => x instanceof Element

export default {
  name: 'GltfViewer',
  components: {
    Loading,
  },
  data() {
    return {
      renderer: null,
      scene: null,
      camera: null,
      mixer: null,
      animations: [],
      gltfUrl: './models/transformer.glb',
      // animationFrameId: null,
      // isScrollControlled: false,
      // mouseX: 0,
      // mouseY: 0,
      // touchStartX: null,
      // touchStartY: null,
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

        // this.startAnimationLoop() // アニメーションループを開始
      })
      .catch((error) => {
        console.error('Initialization failed:', error)
      })

    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onScroll)

    // マウス位置の初期値と目標値
    // this.currentX = this.camera?.position.x || 1.95;
    // this.currentY = this.camera?.position.y || 0.26;
    // this.targetX = this.currentX;
    // this.targetY = this.currentY;
    
    // 滑らかな動きを実現するためのRAF
    // this.rafId = requestAnimationFrame(this.updateCamera);
    
    // window.addEventListener('mousemove', this.onMouseMove);

    // スマホ用
    // window.addEventListener('touchstart', this.onTouchStart);
    // window.addEventListener('touchmove', this.onTouchMove);
    // window.addEventListener('touchend', this.onTouchEnd);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onScroll)

    if (this.renderer) {
      this.renderer.dispose()
    }

    // this.stopAnimationLoop() // コンポーネント破棄時にアニメーションループを停止

    // RAFをキャンセル
    // if (this.rafId) {
    //   cancelAnimationFrame(this.rafId);
    // }

    // window.removeEventListener('mousemove', this.onMouseMove);

    // スマホ用
    // window.removeEventListener('touchstart', this.onTouchStart);
    // window.removeEventListener('touchmove', this.onTouchMove);
    // window.removeEventListener('touchend', this.onTouchEnd);
  },
  methods: {
    isMobile() {
      return window.innerWidth <= 640
    },
    isTablet() {
      return window.innerWidth <= 1023
    },
    // onMouseMove(event) {
    //   // マウス位置を-1から1の範囲に正規化
    //   this.mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    //   this.mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
    //   // 目標位置を設定
    //   this.targetX = 1.95 + this.mouseX * 0.25;
    //   this.targetY = 0.26 + this.mouseY * 0.24;
    // },
    // マウスでグリグリ(重くなったので一旦保留)
    // updateCamera() {
    //   if (this.camera) {
    //     // 線形補間で現在位置を更新
    //     const easing = 0.08;
    //     this.currentX += (this.targetX - this.currentX) * easing;
    //     this.currentY += (this.targetY - this.currentY) * easing;
        
    //     // 範囲制限
    //     this.currentX = Math.min(Math.max(this.currentX, 1.7), 2.2);
    //     this.currentY = Math.min(Math.max(this.currentY, 0.02), 0.5);
        
    //     // カメラ位置を更新
    //     this.camera.position.x = this.currentX;
    //     this.camera.position.y = this.currentY;
        
    //     // レンダリング
    //     if (this.renderer && this.scene) {
    //       this.renderer.render(this.scene, this.camera);
    //     }
    //   }
      
    //   // 次のフレームを要求
    //   this.rafId = requestAnimationFrame(this.updateCamera);
    // },
    // スマホ用(重くなったので一旦保留)
    // onTouchStart(event) {
    //   // タッチ開始時の処理
    //   if (event.touches.length > 0) {
    //     this.touchStartX = event.touches[0].clientX;
    //     this.touchStartY = event.touches[0].clientY;
    //   }
    // },
    // onTouchMove(event) {
    //   // タッチ移動時の処理
    //   if (event.touches.length > 0) {
    //     const touchX = event.touches[0].clientX;
    //     const touchY = event.touches[0].clientY;

    //     // タッチ開始位置からの移動量を計算
    //     const deltaX = touchX - this.touchStartX;
    //     const deltaY = touchY - this.touchStartY;

    //     // マウス位置を-1から1の範囲に正規化
    //     this.mouseX = (deltaX / window.innerWidth) * 2 - 1;
    //     this.mouseY = -(deltaY / window.innerHeight) * 2 + 1;

    //     // 目標位置を設定
    //     this.targetX = 1.95 + this.mouseX * 0.25;
    //     this.targetY = 0.26 + this.mouseY * 0.24;
    //   }
    // },
    // onTouchEnd(event) {
    //   // タッチ終了時の処理
    //   this.touchStartX = null;
    //   this.touchStartY = null;
    // },
    // アニメーションループを開始(重くなったので一旦保留)
    // startAnimationLoop() {
    //   const animate = () => {
    //     this.animationFrameId = requestAnimationFrame(animate)

    //     if (this.mixer) {
    //       const deltaTime = this.clock?.getDelta() || 0 // 前回のフレームからの経過時間を取得
    //       this.mixer.update(deltaTime) // アニメーションを更新

    //       // 2.35秒を超えたら 0 秒に戻す
    //       // isScrollControlled = trueになったらループ再生を抜ける
    //       const action = this.mixer.clipAction(this.animations[0])
    //       if (!this.isScrollControlled && action) {
    //         if (action.time > 2.35) {
    //           action.time = 0
    //           this.mixer.setTime(0) // Mixer全体の時間もリセット
    //         }
    //       }
    //     }

    //     if (this.renderer && this.scene && this.camera) {
    //       this.renderer.render(this.scene, this.camera)
    //     }
    //   }

    //   this.clock = new THREE.Clock() // 時間計測用のクロックを初期化
    //   animate()
    // },

    // アニメーションループを停止
    // stopAnimationLoop() {
    //   if (this.animationFrameId) {
    //     cancelAnimationFrame(this.animationFrameId)
    //     this.animationFrameId = null
    //   }
    // },
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

      const width = this.isTablet()
      ? canvasWrapper.clientWidth
      : canvasWrapper.clientWidth * 2

    const height = this.isTablet()
      ? canvasWrapper.clientHeight
      : canvasWrapper.clientHeight * 2

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

      // 霧
      this.scene.fog = new THREE.Fog( 0xcccccc, 10, 45 );

      try {
        // モデルが読み込まれるまでローディング中にする
        await this.showLoading(async () => {
          await this.loadGLTF()
        })
      } catch (error) {
        console.error('Error loading GLTF:', error)
      }

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

        // 進捗コールバックを追加
        const loading = this.$refs.loading

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
                this.camera.fov = this.isTablet()
                ? this.isMobile() ? this.camera.fov * 3 : this.camera.fov * 2 // スマホの場合、画角を広くする
                : this.camera.fov * 2
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
          // 進捗コールバックを追加
          (xhr) => {
            if (loading && xhr.lengthComputable) {
              const progressRatio = xhr.loaded / xhr.total
              loading.updateProgress(progressRatio)
            }
          },
          (error) => {
            reject(error)
          }
        )
      })
    },
    // ローディング画面
    async showLoading(task) {
      const loading = this.$refs.loading
      if (loading) loading.start()

      try {
        await task()
      } finally {
        if (loading) loading.finish()
      }
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

      const width = this.isTablet()
      ? window.innerWidth
      : window.innerWidth * 2

    const height = this.isTablet()
      ? window.innerHeight
      : window.innerHeight * 2

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
      ) {
        return
      }
      const scrollY = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      // スクロール位置に基づいて再生時間を計算（アニメーション全体の時間をスクロールにマッピング）
      const scrollProgress = Math.min(scrollY / maxScroll, 1) // 0から1の範囲に正規化
      const animationDuration = this.animations[0]?.duration ?? 0 // アニメーションの総時間
      let rawTime = scrollProgress * animationDuration // アニメーションの再生位置
      // アニメーションの再生位置を設定
      const action = this.mixer.clipAction(this.animations[0])
      if (!action) return

      // if (scrollProgress <= 0.1) {
      //   this.isScrollControlled = false
      //   // スクロール量が0.1以下の時に無限ループ再生
      //   action.setLoop(THREE.LoopRepeat, Infinity)
      //   action.paused = false;
      // } else {
        // this.isScrollControlled = true
        // 通常のスクロール連動再生
        action.setLoop(THREE.LoopOnce, 0)
        action.paused = true // アニメーションを停止した状態で再生位置を変更

        // スキップ範囲の処理
        const skipRanges = [
          { start: 4.08, end: 4.13 },
          { start: 4.50, end: 4.55 }
        ]

        for (const range of skipRanges) {
          if (rawTime >= range.start && rawTime < range.end) {
            rawTime = range.end
            break
          }
        }

        action.time = rawTime // 再生時間を設定
        this.mixer.update(0) // 更新
      // }

      // レンダリング
      if (this.renderer && this.scene && this.camera) {
        this.renderer.render(this.scene, this.camera)
      }
    },
  },
}
</script>
