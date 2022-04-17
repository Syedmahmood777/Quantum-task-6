# Quantum-task-6
Task #6 of the Quantumhunts Internship Program

The following task was to:
1. Create a video js webpage.
2. Have two mp4 files
3. Play them as a merged video in the webpage (like an youtube ad). Once file 1 plays, file 2 should resume playing it.
4. If the video is replayed, it would still play file 1 followed by file 2.
5. https://videojs.com/ is the url to access the source files for the library.

The Design:
This site has a simpler design to show how merging video function works
It emulates an advertisement in the middle of a video


HTML:
HTML used is very simple in this page,it contains container and divs for the videos to be in.
It includes BootStrap and Video.Js through CDN to have the video player settings of the video.js library
The videos can be changed by changing the src of the videos as they desire
First video is considered the main and second video is considered as the advertisement

CSS:
CSS isn't much but just for background liner gradient and basic styling

JavaScript:
It contains of the function of merge and duration of the videos are gathered to process the "change" function which helps in attaining the final objective
It has 2-3 eventlisteners to track the duration of video,current time and when the video ends
