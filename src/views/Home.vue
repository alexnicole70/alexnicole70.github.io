<template>
  <div class="content">
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#hobbies">Hobbies</a>
      <a href="#work-experience">Work Experience</a>
      <a href="volunteer/stars.html">Volunteering</a>
    </div>

    <div class="intro">
      <div class="inner introduction-background"></div>

      <div class="inner introduction">
        <div class="introduction-text">
          <h1><strong>Hi! My name is Alexandria</strong></h1>

          <p>
            I'm a recent graduate who's passionate about
            <span style="color: #db939b">Designing</span>,
            <span style="color: #7ddbc6">Photography</span> and
            <span style="color: #dba767">French</span>.
          </p>

          <p>
            I'm looking forward to pursuing a career in
            <u> marketing and communications</u>!
          </p>
        </div>
        <div class="profile-pic">
          <img
            src="@/assets/profile_pic.png"
            alt="my picture"
            class="profile-pic"
          />
        </div>
      </div>
    </div>

    <div class="short">
      <div class="designing-short">
        <h1>Designing</h1>

        <p>
          I love retouching my photographs to make them more interesting and
          telling.
        </p>
        <p>
          Some areas of interest include: landscape, beauty and food
          manipulation. I also do pattern and magazine design.
        </p>

        <p>
          Click <a href="design/design.html" target="_blank">here</a> to see
          designs
        </p>
      </div>

      <div class="photography-short">
        <h1>Photography</h1>

        <p>
          I love taking pictures that capture the lived-moments during my
          travels. I just love to have something to look back on which really
          capture the emotions I felt back then.
        </p>

        <p>Click <a href="#photos-eg" target="_blank">here</a> to see photos</p>
      </div>

      <div class="french-short">
        <h1>French</h1>

        <p>
          Strangely enough, learning French is my favourite past-time. Language
          learning is just so structured. It's a comforting escape from the
          uncertainty of the world at times.
        </p>

        <p>
          Click <a href="french/french.html" target="_blank">here</a> find out
          more about journey through learning the language and the reasons why I
          love it.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
body {
  background-color: #f7e999;
  background-size: 500px auto;
  background-repeat: repeat;
}

.content {
  width: 80%;
  margin: 0 auto;
}

/* Add a black background color to the top navigation */
.topnav {
  background-color: #1eb7fa;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #fc7988;
  color: white;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #f07382;
  color: white;
}

.introduction {
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  background: rgba(255, 255, 255, 0.7);
}

.stack-top {
  z-index: 9;
}

.introduction h1 {
  color: #88c0db;
  font-size: 40px;
  text-align: center;
  padding-top: 10px;
  margin-top: 0px;
  font-family: "Domine", serif;
  padding: 20px;
  margin-left: 70px;
}

.introduction p {
  text-align: center;
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin-left: 70px;
  font-size: x-large;
}

.profile-pic {
  max-width: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0 120px 0 0;
}

.short {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.short h1 {
  text-align: center;
  font-family: "Domine", serif;
  color: white;
}

.short p {
  color: white;
  padding: 0 20px 0 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: large;
}

.short h3 {
  color: white;
  padding: 0 20px 0 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 200;
}

.designing-short {
  float: left;
  background-color: #f07382;
  font-size: 14px;
  width: 33%;
}

.photography-short {
  float: left;
  background-color: #1eb7fa;
  width: 34%;
}

.french-short {
  float: left;
  background-color: #88c0db;
  width: 33%;
}
</style>
