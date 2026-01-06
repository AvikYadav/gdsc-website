"use client";


import {useEffect, useRef} from "react";
import Matter from "matter-js";

export default function PhysicsDecoration() {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        const {
            Engine,
            Render,
            World,
            Bodies,
            Runner,
        } = Matter;

        // Engine
        const engine = Engine.create();
        engine.gravity.y = 0.7;
        engine.constraintIterations = 12;
        engine.positionIterations = 12;


        const width = window.innerWidth;
        const height = window.innerHeight;

        // Renderer
        const render = Render.create({
            element: sceneRef.current,
            engine,
            options: {
                width,
                height,
                wireframes: false,
                background: "transparent",
                pixelRatio: window.devicePixelRatio,
            },
        });

        const wallThickness = 50;

        const walls = [
            // top
            Matter.Bodies.rectangle(
                width / 2,
                -wallThickness / 2,
                width,
                wallThickness,
                {isStatic: true}
            ),

            // bottom
            Matter.Bodies.rectangle(
                width / 2,
                height + wallThickness / 2,
                width,
                wallThickness,
                {isStatic: true}
            ),

            // left
            Matter.Bodies.rectangle(
                -wallThickness / 2,
                height / 2,
                wallThickness,
                height,
                {isStatic: true}
            ),

            // right
            Matter.Bodies.rectangle(
                width + wallThickness / 2,
                height / 2,
                wallThickness,
                height,
                {isStatic: true}
            ),
        ];
        Matter.World.add(engine.world, walls);

// tracking mouse position
        let mousePos = {x: 0, y: 0};

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);


        // ROPE ANCHOR POINTS

        const anchor1 = {x: width * 0.65, y: 0};
        const anchor2 = {x: width * 0.72, y: 0};
        const anchor3 = {x: width * 0.8, y: 0};


        // CIRCLES


        const greenWidth = 127;
        const greenHeight = 170;


        const visualRect = Matter.Bodies.rectangle(
            0,
            0,
            greenWidth,
            greenHeight,
            {
                isStatic: true,   // no gravity, no forces
                isSensor: true,   // no collisions
                render: {
                    zIndex: 20,

                    sprite: {

                        texture: "/contacts/green.png",
                        xScale: 1,
                        yScale: 1,
                        xOffset: 0,
                        yOffset: -0,
                    },
                }
            }
        );


        const green = Bodies.rectangle(
            anchor2.x,
            anchor2.y + greenHeight / 2 + 40,
            greenWidth,
            greenHeight,
            {
                frictionAir: 0.03,
                restitution: 0.2,
                frictionAngular: 0.2,
                inertia: Infinity,
                render: {
                    zIndex: 20,
                    //debug here for hitbox
                    // strokeStyle: "#00ffff",
                    // lineWidth: 2,
                    fillStyle: "transparent",

                },
            }
        );
//debug for irregular shape
        // const green = Matter.Bodies.rectangle(
        //   anchor2.x,
        //   anchor2.y + greenHeight / 2 + 40,
        //   greenWidth,
        //   greenHeight,
        //   {
        //     frictionAir: 0.03,
        //     restitution: 0.2,
        //     inertia: Infinity,
        //     render: {
        //       fillStyle: "#ff4fd8",   // 🔥 pink rectangle
        //       strokeStyle: "#000",
        //       lineWidth: 1,
        //     },
        //   }
        // );


        const yellowRadius = 120;

        const yellow = Bodies.circle(anchor1.x, anchor1.y + 340, yellowRadius, {
            frictionAir: 0.03,
            restitution: 0.2,
            inertia: Infinity,
            frictionAngular: 0.2,

            render: {
                zIndex: 20,
                sprite: {
                    texture: "/contacts/yellow.png",
                    xScale: (yellowRadius * 2) / 212,
                    yScale: (yellowRadius * 2) / 212,
                },
                // render: {
                //   fillStyle: "#ff4fd8",   // pink rectangle
                //   strokeStyle: "#000",
                //   lineWidth: 1,
                //
            },
        });


        const redRadius = 120;

        const red = Bodies.circle(anchor3.x, anchor3.y + 360, redRadius, {
            frictionAir: 0.03,
            restitution: 0.2,
            inertia: Infinity,
            frictionAngular: 0.2,

            render: {
                zIndex: 20,
                sprite: {
                    texture: "/contacts/red.png",
                    xScale: (redRadius * 2) / 212,
                    yScale: (redRadius * 2) / 212,
                },
                // render: {
                //     fillStyle: "#ff4fd8",   // pink rectangle
                //     strokeStyle: "#000",
                //     lineWidth: 1,

            },
        });


        //ROPES (CONSTRAINTS)


        function createRope({
                                world,
                                anchor,
                                body,
                                bodyOffset,
                                length,
                                segments = 18, // more segments = less stretch
                            }) {
            const segmentLength = length / segments;
            const parts = [];
            const constraints = [];

            let prev = null;

            for (let i = 0; i < segments; i++) {
                const part = Matter.Bodies.rectangle(
                    anchor.x,
                    anchor.y + i * segmentLength,
                    3,
                    segmentLength,
                    {
                        collisionFilter: {group: -1},
                        frictionAir: 0.65,      //  kills motion inside rope
                        restitution: 0,
                        inertia: Infinity,
                        render: {visible: false},
                    }
                );

                parts.push(part);

                if (prev) {
                    constraints.push(
                        Matter.Constraint.create({
                            bodyA: prev,
                            bodyB: part,
                            length: segmentLength,
                            stiffness: 1,          // stress and strain setting
                            damping: 0,
                            render: {
                                strokeStyle: "black",
                                lineWidth: 2,
                            }
                        })
                    );
                }

                prev = part;
            }

            // Anchor to top
            constraints.unshift(
                Matter.Constraint.create({
                    pointA: anchor,
                    bodyB: parts[0],
                    length: segmentLength,
                    stiffness: 1,
                    damping: 0,
                    render: {
                        strokeStyle: "black",
                        lineWidth: 2,
                    },
                })
            );

            // Attach to body
            constraints.push(
                Matter.Constraint.create({
                    bodyA: parts[parts.length - 1],
                    bodyB: body,
                    pointB: bodyOffset,
                    length: 0,
                    stiffness: 1,
                    damping: 0,
                    render: {
                        strokeStyle: "black",
                        lineWidth: 2,
                    },
                })
            );

            Matter.World.add(world, [...parts, ...constraints]);
        }


        createRope({
            world: engine.world,
            anchor: anchor2,
            body: green,
            bodyOffset: {
                x: -greenWidth * 0.38,
                y: -greenHeight / 1.7,
            },
            length: 340,
            segments: 12,
        });
        createRope({
            world: engine.world,
            anchor: anchor3,
            body: red,
            bodyOffset: {
                x: 0,
                y: -redRadius,
            },
            length: 440,
            segments: 20,
        });
        createRope({
            world: engine.world,
            anchor: anchor1,
            body: yellow,
            bodyOffset: {
                x: 0,
                y: -yellowRadius,
            },
            length: 400,
            segments: 17,
        });

        // rope ---> rigid rod
        // const ropeGreen = Constraint.create({
        //        pointA: anchor2,
        //
        //        bodyB: green,
        //
        //        pointB: {
        //          x: greenWidth * 0.25,
        //          y: -greenHeight / 2,
        //        },
        //
        //        length: 340,
        //        stiffness: 0.9,
        //
        //        render: {
        //          strokeStyle: "#000",
        //          lineWidth: 2,
        //        },
        //      });
        //
        //
        //
        //
        //
        //    const ropeYellow = Constraint.create({
        //      pointA: anchor1,
        //      bodyB: yellow,
        //      length: 460,
        //      pointB: { x: 0, y: -yellowRadius },
        //
        //      stiffness: 0.9,
        //      render: {
        //        zIndex: 5,
        //        strokeStyle: "#000000",
        //        lineWidth: 2,
        //      }
        //    });
        //
        //    const ropeRed = Constraint.create({
        //      pointA: anchor3,
        //      bodyB: red,
        //      length: 680,
        //      pointB: { x: 0, y: -redRadius },
        //
        //      stiffness: 0.9,
        //      render: {
        //        zIndex: 5,
        //        strokeStyle: "#000000",
        //        lineWidth: 2,
        //      }
        //
        //    });

        // Add everything
        World.add(engine.world, [
            green,
            yellow,
            red,
            visualRect,
        ]);


        // Run engine
        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);
        Render.create({
            options: {
                wireframes: true
            }
        });
        engine.gravity.y = 0;

        setTimeout(() => {
            engine.gravity.y = 1;
        }, 0);

        Matter.Events.on(engine, "afterUpdate", () => {
            Matter.Body.setPosition(visualRect, green.position);
            Matter.Body.setAngle(visualRect, green.angle);
        });

        // magnetic field

        const bodies = [green, yellow, red];

        Matter.Events.on(engine, "beforeUpdate", () => {
            bodies.forEach(body => {
                const dx = body.position.x - mousePos.x;
                const dy = body.position.y - mousePos.y;

                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = 250; // interaction radius

                if (distance < minDistance) {
                    const strength = 0.08; // 👈 tweak this
                    const force = {
                        x: (dx / distance) * strength,
                        y: (dy / distance) * strength,
                    };

                    Matter.Body.applyForce(body, body.position, force);
                }
            });
        });


        // Resize
        const handleResize = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;

            render.canvas.width = w;
            render.canvas.height = h;
            render.options.width = w;
            render.options.height = h;
        };


        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            Matter.Events.off(engine, "beforeUpdate");
            Render.stop(render);
            World.clear(engine.world, false);
            Engine.clear(engine);
            render.canvas.remove();
        };
    }, []);


    return (
        <div
            ref={sceneRef}
            className="fixed inset-0 pointer-events-none z-20"
        />
    );
}
