import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "../styles/timeline.scss";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline: React.FC<{ data: TimelineEntry[] }> = ({ data }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    // measure total timeline height

    useEffect(() => {
        const dots = document.querySelectorAll(".timeline-dark__dot-wrapper");
        if (dots.length >= 2) {
            const first = dots[0].getBoundingClientRect();
            const last = dots[dots.length - 1].getBoundingClientRect();
            setHeight(Math.abs(last.top - first.top)+25);
        }
    }, []);

        const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ["start 50%", "end 90%"],
        });

        const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
        const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

        return (
            <div className="timeline-dark" ref={containerRef}>
                <div ref={ref} className="timeline-dark__body">
                    {data.map((item, index) => (
                        <div key={index} className="timeline-dark__entry">
                            {/* Left sticky column */}
                            <div className="timeline-dark__entry-left">
                                <div className="timeline-dark__dot-wrapper">
                                    <div className="timeline-dark__dot" />
                                </div>
                            </div>

                            {/* Right content section */}
                            <div className="timeline-dark__entry-content">
                                <h3 className="timeline-dark__entry-title--mobile">{item.title}</h3>
                                {item.content}
                            </div>
                        </div>
                    ))}

                    {/* Vertical animated line */}
                    <div
                        className="timeline-dark__line"
                        style={{ height: `${height}px` }}
                    >
                        <motion.div
                            style={{
                                height: heightTransform,
                                opacity: opacityTransform,
                            }}
                            className="timeline-dark__line-progress"
                        />
                    </div>
                </div>
            </div>
        );
    };
