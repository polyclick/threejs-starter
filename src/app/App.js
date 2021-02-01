import Stats from 'stats.js'
import { GUI } from 'dat.gui'
import { AxesHelper, Clock, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default class App {

  constructor() {

    this.config = {
      // add gui parameters here
    }

    this.setup()

    this.createGUI()
    this.createWorld()

    this.update()
  }

  setup() {

    // Clock
    this.clock = new Clock()
    this.clock.start()

    // Scene
    this.scene = new Scene()

    // Camera
    this.camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000)
    this.camera.position.z = 150
    this.camera.position.y = 150
    this.scene.add(this.camera)

    // Renderer
    this.renderer = new WebGLRenderer({ antialias: true })
    this.renderer.setClearColor(0xffffff)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)

    // Orbit Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.update()
  }


  createGUI() {

    // Dat Gui
    const gui = new GUI()

    // Stats
    this.stats = new Stats()
    this.stats.showPanel(0)
    document.body.appendChild(this.stats.dom)
  }


  createWorld() {

    // Floor plane
    const floorMesh = new Mesh(
      new PlaneGeometry(1000, 1000, 50, 50),
      new MeshBasicMaterial({ color: 0xcccccc, wireframe: true })
    )
    floorMesh.rotation.x = Math.PI / 2
    this.scene.add(floorMesh)

    // Axes Helper
    const axesHelper = new AxesHelper(100)
    this.scene.add(axesHelper)

  }


  update() {
    requestAnimationFrame(() => this.update())

    this.stats.begin()

    this.controls.update()

    this.renderer.render(this.scene, this.camera)

    this.stats.end()
  }

}