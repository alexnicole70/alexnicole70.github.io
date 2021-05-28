<template>
  <div>
    <div class="top-group d-flex flex-row">
      <div class="video-player d-flex flex-column" style="width: 30%">
        <video controls width="100%">
          <source
            src="../assets/projects/es-prototype/final_video.mp4"
            type="video/mp4"
          />

          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
      <div class="d-flex flex-column prototype-link" style="width: 30%">
        <h3>Click the link below for interactive prototype:</h3>
        <h5>
          <a
            href="https://www.figma.com/proto/h6CEvMNsQso1UKlzyrbTY1/Untitled?page-id=0%3A1&node-id=11%3A221&scaling=min-zoom"
            >Figma</a
          >
        </h5>
      </div>
    </div>
    <div class="image-group">
      <div class="d-flex flex-row">
        <img
          src="../assets/projects/es-prototype/mockup-1.jpg"
          alt="Mockup pic 1"
          class="img-fluid"
        />
      </div>
      <div class="d-flex flex-row">
        <div class="d-flex flex-column" style="width: 50%">
          <img
            src="../assets/projects/es-prototype/mockup-2.jpg"
            alt="Mockup pic 2"
            class="img-fluid"
          />
        </div>
        <div class="d-flex flex-column" style="width: 50%">
          <img
            src="../assets/projects/es-prototype/mockup-3.jpg"
            alt="Mockup pic 3"
            class="img-fluid"
          />
        </div>
      </div>
      <div class="d-flex flex-row">
        <img
          src="../assets/projects/es-prototype/mockup-4.jpg"
          alt="Mockup pic 4"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.top-group {
  justify-content: space-evenly;
  padding: 3vw;
  .prototype-link {
    justify-content: center;
    align-items: flex-start;
    h3 {
      font-family: europa, sans-serif;
      font-size: 2vw;
      font-weight: 700;
      font-style: normal;
      color: #94cfc8;
    }
    h5 {
      font-family: europa, sans-serif;
      font-size: 1.5vw;
      font-weight: 400;
      font-style: normal;
    }
  }
}
</style>
