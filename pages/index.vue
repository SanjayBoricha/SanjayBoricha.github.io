<template>
  <div>
    <div class="h-screen bg-white" style="min-height: 600px">
      <div class="container md:flex px-6 lg:px-20 mx-auto h-full">
        <div class="w-full flex justify-center flex-col h-full">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-light text-gray-600 hero-text leading-normal sm:leading-normal lg:leading-normal md:leading-normal"
            data-aos="fade-up"
          >
            Hello, I am <strong class="font-medium">Sanjay</strong>, <br />
            a
            <strong class="text-gray-800 font-medium">
              Full Stack Developer
            </strong>
          </h1>

          <div class="mt-4">
            <a
              href="#work"
              class="bg-blue-600 text-white rounded-md shadow-sm px-6 py-3"
            >
              View My Work
            </a>
          </div>
          <div class="flex rounded-lg mt-12 md:mt-16"></div>
        </div>
      </div>
    </div>

    <Projects />

    <SkillsAndExperience />

    <footer class="w-full bg-back px-4 md:px-10 py-5 flex justify-center">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/sanjay-boricha/"
        class="flex h-16 w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white"
      >
        <LinkedIn class="social-icon h-8 w-8" />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/sanjayboricha.dev"
        class="flex h-16 w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white"
      >
        <Instagram class="social-icon h-8 w-8" />
      </a>
      <a
        target="_blank"
        href="https://github.com/SanjayBoricha"
        class="flex h-16 w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white"
      >
        <Github class="social-icon h-8 w-8" />
      </a>
      <a
        href="mailto:sanjayboricha1001@gmail.com"
        class="flex h-16 w-16 items-center justify-center social-media-link mr-2 rounded-lg bg-white"
      >
        <Mail class="social-icon h-8 w-8" />
      </a>
    </footer>
  </div>
</template>

<script>
import AOS from 'aos'
import LinkedIn from '~/components/social-icons/LinkedIn'
import Instagram from '~/components/social-icons/Instagram'
// import Twitter from '~/components/social-icons/Twitter'
import Github from '~/components/social-icons/Github'
import Mail from '~/components/social-icons/Mail'
import Projects from '~/components/Projects.vue'
import SkillsAndExperience from '~/components/SkillsAndExperience.vue'

export default {
  components: {
    LinkedIn,
    Instagram,
    // Twitter,
    Github,
    Mail,
    Projects,
    SkillsAndExperience,
  },
  mounted() {
    AOS.init()
  },
}
</script>

<style lang="css">
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
}
.social-media-link {
  margin: 10px;
}
.social-icon {
  fill: rgba(37, 99, 235, 1);
}
.hero-text {
  /* font-size: 72px; */
  /* background: -webkit-linear-gradient(45deg, #fc466b, #3f5efb); */
  background: -webkit-linear-gradient(45deg, #2b32b2, #1488cc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
