<template>
  <div id="app">
    <!-- Bootstrap responsive navbar - collapses to hamburger menu -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.html">Make It Sewstainable</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="index.html">Home</a>
          <a class="nav-item nav-link" href="gallery.html">Gallery</a>
          <a class="nav-item nav-link" href="#">Blog</a>
          <a class="nav-item nav-link" href="faq.html">FAQ</a>
        </div>
      </div>
    </nav>
    <main>
      <h1>Project Gallery</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <!-- Bootstrap 3 column grid with equal sizing
          Bootstrap responsive thumbnail images used inside grid -->
      <!-- <div class="flex-container">
          <div v-for="image in images" >
            <img v-bind:src="image" alt="gallery image" class="img-thumbnail" data-toggle="tooltip" title="Learn how to make this">
            <div class="caption">
              <h3>Sourcing Sustainable Materials</h3>
            </div>
          </div>
      </div> -->
      <app-gallery v-bind:images="images" v-bind:imagesAlt="imagesAlt"></app-gallery>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      images: ['src/assets/gallery1.jpg',
               'src/assets/gallery2.jpg',
               'src/assets/gallery3.jpg'
             ],
      imagesAlt: ['Tote bag',
                  'Knitted hat',
                  'Scrap Quilt'
             ],
      imagesTitle: ['Make a Tote Bag',
                    'Knit a Hat',
                    'Quilt Your Scraps'
             ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body, html {
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
}

main {
  font-family: Helvetica, sans-serif;
  font-size: 1em;
  margin: 2em;
}

/* .img-thumbnail {
  padding: 0.5rem;
  margin: 0.5rem;
} */

.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  /* width: 100%; */
}

.flex-container div {
  padding: 0.5rem;
  width: 33%;
  font-size: 0.75rem;
  min-width: 200px;
}
</style>
