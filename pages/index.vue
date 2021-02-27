<template>
  <div class="h-screen bg-brown">
    <div class="container h-full md:flex h-full px-6 md:px-16 lg:px-20">
      <div class="w-full md:w-1/2 flex justify-center flex-col h-full">
        <h1
          class="leading-normal text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          Sanjay Boricha
        </h1>
        <h2
          class="leading-normal text-2xl md:text-3xl font-semibold text-white"
        >
          Full Stack Developer
        </h2>

        <div class="flex rounded-lg mt-12 md:mt-16">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sanjay-boricha-528239180"
            class="inline-block h-16 w-16 flex items-center justify-center social-media-link mr-2 rounded-lg"
          >
            <LinkedIn class="social-icon h-8 w-8" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/sboricha1619"
            class="inline-block h-16 w-16 flex items-center justify-center social-media-link mr-2 rounded-lg"
          >
            <Instagram class="social-icon h-8 w-8" />
          </a>
          <!-- <a
            target="_blank"
            href="https://twitter.com/sboricha1619"
            class="inline-block h-16 w-16 flex items-center justify-center social-media-link mr-2 rounded-lg"
          >
            <Twitter class="social-icon h-8 w-8" />
          </a> -->
          <a
            target="_blank"
            href="https://github.com/SanjayBoricha"
            class="inline-block h-16 w-16 flex items-center justify-center social-media-link mr-2 rounded-lg"
          >
            <Github class="social-icon h-8 w-8" />
          </a>
          <a
            href="mailto:sanjayboricha1001@gmail.com"
            class="inline-block h-16 w-16 flex items-center justify-center social-media-link mr-2 rounded-lg"
          >
            <Mail class="social-icon h-8 w-8" />
          </a>
        </div>
      </div>
      <div class="w-1/2 hidden md:block"></div>
    </div>
  </div>
</template>

<script>
import LinkedIn from '~/components/LinkedIn'
import Instagram from '~/components/Instagram'
// import Twitter from '~/components/Twitter'
import Github from '~/components/Github'
import Mail from '~/components/Mail'

export default {
  components: {
    LinkedIn,
    Instagram,
    // Twitter,
    Github,
    Mail,
  },
}
</script>

<style lang="css">
body {
  font-family: 'Poppins', sans-serif;
}
.social-media-links {
  /* top: 50%;
  transform: translate(0, -50%); */
  background-color: rgba(0, 0, 0, 0.1);
}
.social-media-link {
  background-color: rgba(0, 0, 0, 0.1);
}
.social-icon {
  fill: white;
}
</style>
