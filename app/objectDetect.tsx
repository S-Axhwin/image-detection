"use client";

import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDLoad, ObjectDetection as CocoSSDModel } from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import { renderPredictions } from "@/utils/render-predictions";


const ObjectDetection = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [detectInterval, setDetectInterval] = useState<NodeJS.Timeout | null>(null);

    const webcamRef = useRef<Webcam>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    async function runCoco() {
        setIsLoading(true);
        const net = await cocoSSDLoad();
        setIsLoading(false);

        const interval = setInterval(() => {
            runObjectDetection(net);
        }, 10);
        setDetectInterval(interval);
    }

    async function runObjectDetection(net: CocoSSDModel) {
        if (
            canvasRef.current &&
            webcamRef.current !== null &&
            webcamRef.current.video?.readyState === 4
        ) {
            canvasRef.current.width = webcamRef.current.video.videoWidth;
            canvasRef.current.height = webcamRef.current.video.videoHeight;

            const detectedObjects = await net.detect(
                webcamRef.current.video,
                undefined,
                0.8
            );
            const context = canvasRef.current.getContext("2d");
            renderPredictions(detectedObjects, context);
        }
    }

    const showmyVideo = () => {
        if (
            webcamRef.current !== null &&
            webcamRef.current.video?.readyState === 4
        ) {
            const myVideoWidth = webcamRef.current.video.videoWidth;
            const myVideoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = myVideoWidth;
            webcamRef.current.video.height = myVideoHeight;
        }
    };

    useEffect(() => {
        runCoco();
        showmyVideo();

        return () => {
            if (detectInterval) {
                clearInterval(detectInterval);
            }
        };
    }, []);

    return (
        <div className="mt-8">
            {isLoading ? (
                <div className="gradient-text">Loading AI Model...</div>
            ) : (
                <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
                    {/* webcam */}
                    <Webcam
                        ref={webcamRef}
                        className="rounded-md w-full lg:h-[720px]"
                        muted
                    />
                    {/* canvas */}
                    <canvas
                        ref={canvasRef}
                        className="absolute top-0 left-0 z-99999 w-full lg:h-[720px]"
                    />
                </div>
            )}
        </div>
    );
};

export default ObjectDetection;
