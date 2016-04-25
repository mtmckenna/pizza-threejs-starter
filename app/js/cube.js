var THREE = require("three");

export default class {
  constructor(cubeData) {
    var geometry = new THREE.CubeGeometry(cubeData.x,
                                           cubeData.y,
                                           cubeData.z);

    var material = new THREE.MeshBasicMaterial({
      color: cubeData.color,
      wireframe: true,
      wireframeLinewidth: cubeData.lineWidth
    });

    this.mesh = new THREE.Mesh(geometry, material);
  }
}
