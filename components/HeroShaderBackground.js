"use client";

import { useEffect, useRef } from "react";

const vertexSrc = `
  attribute vec2 aPosition;
  void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

// const fragmentSrc = `
//   precision highp float;
//   uniform float uTime;
//   uniform vec2 uResolution;

//   vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
//   vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
//   vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}

//   float snoise(vec2 v){
//     const vec4 C = vec4(0.211324865405187, 0.366025403784439,
//              -0.577350269189626, 0.024390243902439);
//     vec2 i  = floor(v + dot(v, C.yy));
//     vec2 x0 = v - i + dot(i, C.xx);
//     vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
//     vec4 x12 = x0.xyxy + C.xxzz;
//     x12.xy -= i1;
//     i = mod289(i);
//     vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
//           + i.x + vec3(0.0, i1.x, 1.0));
//     vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
//     m = m*m; m = m*m;
//     vec3 x = 2.0 * fract(p * C.www) - 1.0;
//     vec3 h = abs(x) - 0.5;
//     vec3 ox = floor(x + 0.5);
//     vec3 a0 = x - ox;
//     m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
//     vec3 g;
//     g.x  = a0.x  * x0.x  + h.x  * x0.y;
//     g.yz = a0.yz * x12.xz + h.yz * x12.yw;
//     return 130.0 * dot(m, g);
//   }

//   float fbm(vec2 p) {
//     float value = 0.0;
//     float amplitude = 0.5;
//     for (int i = 0; i < 5; i++) {
//       value += amplitude * snoise(p);
//       p *= 2.0;
//       amplitude *= 0.5;
//     }
//     return value;
//   }

//   void main() {
//     vec2 uv = gl_FragCoord.xy / uResolution.xy;
//     vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
//     vec2 p = (uv - 0.5) * aspect * 3.0;

//     float t = uTime * 0.05;

//     vec2 q = vec2(fbm(p + vec2(0.0, t)), fbm(p + vec2(5.2, 1.3) - t));
//     vec2 r = vec2(
//       fbm(p + 4.0 * q + vec2(1.7, 9.2) + 0.15 * t),
//       fbm(p + 4.0 * q + vec2(8.3, 2.8) - 0.12 * t)
//     );

//     float veins = fbm(p + 4.0 * r);
//     float ridge = pow(1.0 - abs(veins), 8.0);
//     float glow = smoothstep(0.15, 0.9, r.x + r.y);

//     vec3 red = vec3(1.0, 0.12, 0.08);
//     vec3 darkRed = vec3(0.22, 0.0, 0.0);
//     vec3 black = vec3(0.0);

//     vec3 color = mix(black, darkRed, glow * 0.6);
//     color = mix(color, red, ridge * glow);

//     float vignette = smoothstep(1.3, 0.2, length(p / aspect));
//     color *= vignette * 1.2;

//     gl_FragColor = vec4(color, 1.0);
//   }
// `;


const fragmentSrc = `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;

  vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // Only 2 octaves — this is the key change. More octaves = more scribble.
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.55;
    for (int i = 0; i < 2; i++) {
      value += amplitude * snoise(p);
      p *= 1.8;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);

    // Smaller multiplier = bigger, broader folds instead of dense tangles
    vec2 p = (uv - 0.5) * aspect * 1.1;

    float t = uTime * 0.04;

    // Gentle horizontal drift, like fabric being pulled slowly
    vec2 q = vec2(fbm(p + vec2(t, 0.0)), fbm(p + vec2(1.4, -t * 0.6)));
    vec2 r = vec2(
      fbm(p + 1.6 * q + vec2(0.8, 3.1) + t * 0.15),
      fbm(p + 1.6 * q + vec2(4.5, 1.2) - t * 0.1)
    );

    float field = fbm(p * 0.8 + 1.4 * r);

    // Soft flowing bands instead of thin ridgelines: smoothstep, not pow()
    float waveA = smoothstep(0.05, 0.55, field);
    float waveB = smoothstep(0.35, 0.85, r.x + r.y * 0.5);
    float sheen = waveA * 0.7 + waveB * 0.5;

    vec3 black = vec3(0.0);
    vec3 darkRed = vec3(0.18, 0.01, 0.01);
    vec3 red = vec3(0.85, 0.1, 0.07);
    vec3 highlight = vec3(1.0, 0.35, 0.2);

    vec3 color = mix(black, darkRed, sheen);
    color = mix(color, red, smoothstep(0.4, 0.9, sheen));
    color = mix(color, highlight, smoothstep(0.75, 1.0, sheen) * 0.5);

    // Horizontal-biased vignette to match the wide, centered glow
    vec2 vp = (uv - 0.5) * vec2(1.0, 1.6);
    float vignette = smoothstep(0.75, 0.05, length(vp));
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;
function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function HeroShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // Fullscreen triangle covering the viewport
    const positions = new Float32Array([-1, -1, 3, -1, -1, 3]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uResolution = gl.getUniformLocation(program, "uResolution");

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth * dpr;
      const height = canvas.clientHeight * dpr;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    }

    let frameId;
    const start = performance.now();

    function render() {
      resize();
      const elapsed = (performance.now() - start) / 1000;
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      frameId = requestAnimationFrame(render);
    }
    render();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 w-full h-full bg-black"
    />
  );
}