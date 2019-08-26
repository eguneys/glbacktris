#version 300 es

#include fcolors
#include fdefs

#define statePlay 0.0
#define stateOver 1.0
 
precision mediump float;

uniform vec2 uResolution;
uniform float uTime;
uniform float uState;

in vec2 vQuadCoord;

out vec4 outColor;

#include futil
#include feffects

void main() {

  vec2 p = vQuadCoord;
  p.x *= uResolution.x/uResolution.y;

  vec4 col = vec4(0.5, 0.5, 0.5, 0.0);

  // colGlowyCircle(col, p);
  // hsprites(col, p);
  if (uState == statePlay) {
    col = colPurpleG;
  } else {
    hsprites(col, p);
  }


  outColor = col;
}
