from svgpathtools import svg2paths, Path
import numpy


paths, attrs = svg2paths("Ellipse 1.svg")
points = [seg.point(t) for seg in paths[0] for t in numpy.linspace(0,1,60)]

vertices = [
    {"x": float(p.real), "y": float(p.imag)}
    for p in points
]

xs = [v["x"] for v in vertices]
ys = [v["y"] for v in vertices]

cx = sum(xs) / len(xs)
cy = sum(ys) / len(ys)

centered_vertices = [
    {"x": v["x"] - cx, "y": v["y"] - cy}
    for v in vertices
]
print(centered_vertices)