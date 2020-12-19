# Password-generator

Description
------------

This is my personal portfolio. It gives a small snippet about me, ways to contact me, and several photos I've taken.

 Table of contents
---------------
[Tools used](#Tools-used)<br />
[View the site](#Deployed-here)<br />
[What is added](#What-is-added)
  * [Index page](#Index)
  * [Portfolio page](#Portfolio)
  * [Contact page](#Contact)

[Lessons learned](#Lessons-learned) <br />
[Credits](#Credits)<br />
[License](#License)

Tools used
-------------------

* Bootstrap - Has premade layouts and components useful for making a webpage without having to start from scratch. 
* CSS - Style the page with custom colors and spacing.
* GitBash - Assist with version control via commits, push, and pull to and from GitHub.
* GitHub - Site where the repository lies for deployment and edits.
* HTML - Houses the entirety of the webpage and allows browsers to interpret the code as a webpage.
* VS Code - Application used to write and edit code for the webpage.

Deployed here
-------------

Below is the link to the deployed webpage. 
[Link to site](https://vincent-nguyen8931.github.io/My-Portfolio/)


What is added
------------------


This portfolio has three html pages. The first step is to change the title of each page to match what the html is going to contain.

Next find a suitable navbar from Bootstrap and apply the below code snippet to each page. Modifications made were:
* add my name to the navbar-brand line.
* use in-line css to make the text white in navbar-brand.
* push the page links to the far right of the page in the navbar-nav line. 
* change which link becomes active depending on the page the user is on.

```
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <aside class="container-fluid">
      <!-- The style inline CSS is to change the text to white. This did not work when placed in the CSS and could be due to an override with how the navbar is setup. -->
      <a class="navbar-brand" style="color: white;">Vincent Nguyen</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span></button>
      <section class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <article class="navbar-nav ms-auto"> <!-- Push links to far right -->
          <a class="nav-link" href="contact.html">Contact</a>
          <a class="nav-link" href="portfolio.html">Portfolio</a>
          <a class="nav-link active" href="index.html">About</a> <!-- Darkens link that user is on to give another method to determine what page they're on.-->
        </article>
      </section>
    </aside>
  </nav>
  ```

Index
------------------

The index page main is created from the below code.
```
<main class="container" id="body-info">
  <header>
    <h1>About me</h1> <!-- Title of page user is on. -->
    <hr>
  </header>
  <section class="row">
    <article class="col">
      <!-- Place image of myself here to give visitors a face to the name. -->
      <img src="./Images/Self-image.jpg" id="index-img" class="float-start" alt="Picture of Vincent Nguyen">
      <!-- Biography information here. Lists out my work experience and degree. -->
      <p>Graduated from CSU Stanislaus with a Bachelors of Science in Computer Science.</p><br />
      <p>Worked in the government as an Emergency management specialist. Our job required tracking, managing, and mitigating chemical, biological, radiological, and nuclear (CBRN) substances and threats.</p><br />
      <p>You can reach me at:
        <ul> <!-- List out ways to contact me. -->
          <li>E-mail: <a href="mailto:vincent.nguyen8931@gmail.com">vincent.nguyen8931@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/vincent-nguyen-74226a107/">https://www.linkedin.com/in/vincent-nguyen-74226a107/</a></li>
          <li>Github: <a href="https://github.com/vincent-nguyen8931">https://github.com/vincent-nguyen8931</a></li>
        </ul>
      </p>
    </article>
  </section>
</main>
```
Place personal image here.
```
<!-- Place image of myself here to give visitors a face to the name. -->
      <img src="./Images/Self-image.jpg" id="index-img" class="float-start" alt="Picture of Vincent Nguyen">
```

Biography placed after.
```
<!-- Biography information here. Lists out my work experience and degree. -->
<p>Graduated from CSU Stanislaus with a Bachelors of Science in Computer Science.</p><br />
<p>Worked in the government as an Emergency management specialist. Our job required tracking, managing, and mitigating chemical, biological, radiological, and nuclear (CBRN) substances and threats.</p><br />
```

Social links at the end.
```
<p>You can reach me at:
  <ul> <!-- List out ways to contact me. -->
    <li>E-mail: <a href="mailto:vincent.nguyen8931@gmail.com">vincent.nguyen8931@gmail.com</a></li>
    <li>LinkedIn: <a href="https://www.linkedin.com/in/vincent-nguyen-74226a107/">https://www.linkedin.com/in/vincent-nguyen-74226a107/</a></li>
    <li>Github: <a href="https://github.com/vincent-nguyen8931">https://github.com/vincent-nguyen8931</a></li>
  </ul>
</p>
```

Portfolio
----------------
The portfolio page main is created from the below code.

```
<main class="container" id="body-info">
  <header>
    <h1>Portfolio</h1> <!-- Title of page user is on. -->
    <hr>
  </header>
  <!-- Personal images taken by me. There are varying categories for each row.-->
  <!-- Row 1 of images. My cat pictures. -->
  <section class="row">
    <article class="col">
      <img src="./Images/Cat-1.jpg" id="portfolio-img1" class="float-start" alt="Cat sleeping long ways.">
      <img src="./Images/Cat-2.jpg" id="portfolio-img2" class="float-start" alt="Cat sleeping in a ball.">
    </article>
  </section>
  <!-- Row 2 of images. Universal Studios Japan Hogwarts pictures. -->
  <section class="row">
    <article class="col">
      <img src="./Images/Hogwarts-1.jpg" id="portfolio-img3" alt="Hogwarts castle in Japan Universal Studios." class="float-start">
      <img src="./Images/Hogwarts-2.jpg" id="portfolio-img4" alt="Snow covered roofs of Diagon Alley." class="float-start">
    </article>
  </section>
  <!-- Row 3 of images. Lotte World pictures. -->
  <section class="row">
    <article class="col">                    
      <img src="./Images/Lotte-World-1.jpg" id="portfolio-img5" alt="Exterior of Lotte World Castle." class="float-start">
      <img src="./Images/Lotte-World-2.jpg" id="portfolio-img6" alt="Interior of Lotte World with tram visible." class="float-start">
    </article>
  </section>
</main>
```
This is how the image is placed onto the page. These may be duplicated for as many rows desired.
```
  <!-- Row 1 of images. My cat pictures. -->
  <section class="row">
    <article class="col">
      <img src="./Images/Cat-1.jpg" id="portfolio-img1" class="float-start" alt="Cat sleeping long ways.">
      <img src="./Images/Cat-2.jpg" id="portfolio-img2" class="float-start" alt="Cat sleeping in a ball.">
    </article>
```

Contact
--------------
The contact page main is created from the below code.
```
<main class="container" id="body-info">
  <header>
    <h1>Contact</h1> <!-- Title of page user is on. -->
    <hr>
  </header>
  <!-- This is where the input field for visitor's name. -->
  <article class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name">
  </article>
  <!-- This is where the input field for visitor's e-mail. -->
  <article class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">E-mail</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail">
  </article>
  <!-- This is where the input field for visitor's message. -->
  <article class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Message</label>
    <textarea class="form-control" id="exampleFormControlInput1" rows="3" placeholder="Message"></textarea>
  </article>
  <!-- When submit is hit, the visitor will be taken to their computer's default e-mail applicaton. -->
  <button type="button" class="btn btn-info"><a href="mailto:vincent.nguyen8931@gmail.com" id="e-mail-btn">Submit</button></a>
</main>
```

Input fields are created with the code below. Duplicate the code for as many desired input fields. Edit the input field's name and placeholder to information desired.
```
<!-- This is where the input field for visitor's name. -->
<article class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name">
</article>
```

Lessons Learned
----------------

When attemping to make the code check for characters i ran into several issues

* comparing to alphabet
* uncmparing to alpahbet
* indexof
* accepting only numbers via ===
* not accepting letters via ===
* charCodaAt()

```
  // if (charLimit === 1 ||
  //   charLimit === 2 ||
  //   charLimit === 3 ||
  //   charLimit === 4 ||
  //   charLimit === 5 ||
  //   charLimit === 6 ||
  //   charLimit === 7 ||
  //   charLimit === 8 ||
  //   charLimit === 9 ||
  //   charLimit === 0) {
```


When applying the link spacing changes to the navbar, I applied the ms-auto to a specific link as shown below. The results is not the entire row of links being moved to the right but rather the link alone being moved relative to its position. This space was not very big and not what I was looking for.
```
<article class="navbar-nav"> 
  <a class="nav-link ms-auto" href="contact.html">Contact</a>
  <a class="nav-link" href="portfolio.html">Portfolio</a>
  <a class="nav-link active" href="index.html">About</a> 
</article>
```

Below is the code snippet from my portfolio images. Originally I placed one margin change to all images believeing it would apply the spacing I was looking for in every image. This would not be the case due to the difference of how the images on the index and portfolio htmls are placed. In index, the text is wrapped around the image to the right side. In portfolio, each image only has one image next to it before another row begins. I created an id for images in portfolio and index htmls to create different margins in the css.

```
<!-- Row 1 of images. My cat pictures. -->
<section class="row">
  <article class="col">
    <img src="./Images/Cat-1.jpg" id="portfolio-img1" class="float-start" alt="Cat sleeping long ways.">
    <img src="./Images/Cat-2.jpg" id="portfolio-img2" class="float-start" alt="Cat sleeping in a ball.">
  </article>
</section>
<!-- Row 2 of images. Universal Studios Japan Hogwarts pictures. -->
<section class="row">
  <article class="col">
    <img src="./Images/Hogwarts-1.jpg" id="portfolio-img3" alt="Hogwarts castle in Japan Universal Studios." class="float-start">
    <img src="./Images/Hogwarts-2.jpg" id="portfolio-img4" alt="Snow covered roofs of Diagon Alley." class="float-start">
  </article>
</section>
```
This is the code with the image and text from index for comparison.
```
<section class="row">
  <article class="col">
    <!-- Place image of myself here to give visitors a face to the name. -->
    <img src="./Images/Self-image.jpg" id="index-img" class="float-start" alt="Picture of Vincent Nguyen">
    <!-- Biography information here. Lists out my work experience and degree. -->
    <p>Graduated from CSU Stanislaus with a Bachelors of Science in Computer Science.</p><br />
    <p>Worked in the government as an Emergency management specialist. Our job required tracking, managing, and mitigating chemical, biological, radiological, and nuclear (CBRN) substances and threats.</p><br />
  </article>
</section>
```
Credits
---------------
LinkedIn: [https://www.linkedin.com/in/vincent-nguyen-74226a107/](https://www.linkedin.com/in/vincent-nguyen-74226a107/)

License
----------
MIT License

Copyright (c) [2020] [Vincent Nguyen]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.