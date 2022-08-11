<template>
  <section id="work" class="py-12">
    <h2 class="text-center text-3xl md:text-5xl mb-12 font-medium mt-10">
      My Work
    </h2>

    <div class="flex flex-wrap justify-center my-10 mx-10">
      <!-- <tab-button :is-active="false" title="React" />
      <tab-button :is-active="false" title="Vue" />
      <tab-button :is-active="false" title="Flutter" />
      <tab-button :is-active="false" title="Laravel" />
      <tab-button :is-active="false" title="Node" /> -->
      <tab-button
        v-for="tech in technologies"
        :key="tech"
        :is-active="tech == active"
        :title="tech"
        @click.native="techChange(tech)"
      />
    </div>

    <div
      class="container mx-auto md:flex justify-center md:px-10 lg:px-20 mb-10"
    >
      <div class="w-full h-full flex flex-wrap items-center lg:-mx-4">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="w-full md:w-1/2 lg:w-1/3 p-4"
          data-aos="fade-up"
        >
          <div class="bg-white rounded-md p-4 shadow-sm">
            <img
              class="w-full object-cover rounded-md"
              style="max-height: 300px; aspect-ratio: 16/10"
              :src="project.image"
              alt=""
            />

            <div class="mt-4">
              <h3 class="font-medium mb-2">{{ project.title }}</h3>
              <p class="text-sm">
                {{ project.description }}
              </p>
              <div class="flex mt-1">
                <div
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="bg-blue-100 rounded-md px-2 py-1 text-blue-500 text-sm mt-2 mr-2 capitalize"
                >
                  {{ tech }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TabButton from './home/TabButton.vue'

export default {
  ssr: false,
  components: { TabButton },
  data: () => {
    return {
      active: 'all',
      technologies: ['react', 'vue', 'flutter', 'laravel', 'node', 'all'],
      projects: [],
      allProjects: [
        {
          title: 'Project 1',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab vero, debitis alias est enim ipsa explicabo nulla culpa eaque.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['node', 'react'],
        },
        {
          title: 'Project 2',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab vero, debitis alias est enim ipsa explicabo nulla culpa eaque.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['laravel', 'vue'],
        },
        {
          title: 'Project 3',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab vero, debitis alias est enim ipsa explicabo nulla culpa eaque.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['vue'],
        },
        {
          title: 'Project 4',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab vero, debitis alias est enim ipsa explicabo nulla culpa eaque.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['laravel'],
        },
        {
          title: 'Project 5',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab vero, debitis alias est enim ipsa explicabo nulla culpa eaque.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['flutter'],
        },
        {
          title: 'Project 6',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab vero, debitis alias est enim ipsa explicabo nulla culpa eaque.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['node'],
        },
        {
          title: 'Project 7',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab vero, debitis alias est enim ipsa explicabo nulla culpa eaque.',
          image:
            'https://i.picsum.photos/id/912/500/500.jpg?hmac=usaNwSoto8KFh0Td59s9FhTxFpzqsoTfvGAK50ZzMBc',
          technologies: ['node'],
        },
      ],
    }
  },
  created() {
    this.projects = this.allProjects
  },
  methods: {
    techChange(tech) {
      this.active = tech

      if (tech === 'all') {
        this.projects = this.allProjects
      } else {
        this.projects = this.allProjects.filter(
          (project) => project.technologies.findIndex((t) => t === tech) !== -1
        )
      }
    },
  },
}
</script>
