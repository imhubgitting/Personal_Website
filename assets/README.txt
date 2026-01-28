CV & Resume Placeholders
========================

Your website has TWO download buttons:
1. "Download my CV" button
2. "Download my Resume" button

To add your files:

1. Place your CV PDF in this folder (e.g., "cv.pdf" or "Gavin_Antonacci_CV.pdf")
2. Place your Resume PDF in this folder (e.g., "resume.pdf" or "Gavin_Antonacci_Resume.pdf")

3. Update the links in index.html:
   - Line with href="assets/cv/placeholder.pdf" -> Change to your CV filename
   - Line with href="assets/cv/resume.pdf" -> Change to your resume filename

Example:
<a href="assets/cv/Gavin_Antonacci_CV.pdf" download class="cv-button">
<a href="assets/cv/Gavin_Antonacci_Resume.pdf" download class="cv-button resume-button">

Note: If you only need one download button, you can delete the other button from index.html
or use the same file for both buttons.
