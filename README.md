# MLProject: Real-Time Object Detection with COCO-SSD

This project is a React-based web application that uses TensorFlow.js and the COCO-SSD model to perform real-time object detection through a webcam feed. Detected objects are highlighted with bounding boxes, and "person" detections are specially styled for easy identification.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Dependencies](#dependencies)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/S-Axhwin/image-detection.git
   cd image-detection

	2.	Install Dependencies:
Make sure you have bun run time installed, then run:

bun install


	3.	Run the Application:
Start the development server with:

bun dev


	4.	Access the Application:
Open your web browser and go to http://localhost:3000.

Usage

After starting the application, allow camera access when prompted. The app will:

	•	Display the webcam feed with real-time object detection.
	•	Highlight detected objects with bounding boxes, using a red bounding box for “person” detections.

Project Structure

Here’s an overview of the main directories and files in the project:

my-app/
├── app/
│   ├── ai/
│   │   └── objectDetect.tsx       # Main component for object detection
│   ├── components/
│   │   └── ui/
│   │       └── theme-provider.tsx # Theme provider for UI styling
│   ├── fonts/                     # Fonts for the app
│   └── globals.css                # Global styles
├── utils/
│   └── render-predictions.ts      # Utility function for drawing bounding boxes
├── public/                        # Public assets
├── .eslintrc.json                 # Linter configuration
├── package.json                   # Project dependencies
└── README.md                      # Project documentation

Components

	•	ObjectDetection: The main component (objectDetect.tsx) that sets up the webcam feed, loads the COCO-SSD model, and displays real-time detections on a canvas overlay.
	•	renderPredictions: A utility function in utils/render-predictions.ts that draws bounding boxes and labels for detected objects on the canvas. It highlights “person” detections with a red box.

Dependencies

The main dependencies for this project include:

	•	React: UI library for building the interface.
	•	TensorFlow.js: JavaScript library for machine learning.
	•	@tensorflow-models/coco-ssd: Pre-trained object detection model.
	•	react-webcam: Component to access the webcam.
