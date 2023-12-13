<template>
  <form id="searchForm" class="flex flex-col gap-4 md:flex-row md:justify-between max-w-screen-sm mx-auto"
    @submit.prevent="handleSubmit">
    <div class="relative z-0 w-full mb-5 group">
      <input v-model="searchInput" type="text" name="floating_email" id="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" " required />
      <label for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Busca
        tu gif
      </label>
    </div>

    <select name="ratings" id="ratingSelect" v-model="ratingSelect"
      class="flex-row justify-center text-white bg-gray-500 cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2 hover:shadow-lg transition-all duration-200 ease-in-out gap-x-2 opacity-90 hover:opacity-100">
      <option value="off">Niños</option>
      <option value="low">Amigable</option>
      <option value="medium">Medio</option>
      <option value="high">Alto</option>
    </select>

    <button type="submit" class="opacity-0 w-0"></button>
  </form>

  <section v-if="results.length > 0"
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 p-4 m-4">
    <div v-for="{ content_description, media_formats, id } in results" :key="id"
      class="rounded-md w-full mx-auto overflow-hidden bg-gradient-to-b from-slate-600 to-slate-500">
      <h3 class="text-lg py-2 text-center">{{ content_description }}</h3>
      <img :src="media_formats.gif.url" :alt="content_description" class="object-cover min-w-full min-h-full" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getGifsByKeyword } from '../services/searchFormService';

type media_formats = {
  gif: {
    dims: number[];
    length: number;
    duration: number;
    preview: string;
    size: number;
    url: string;
  };
};

interface TenorGif {
  content_description: string;
  created: number;
  flags: any[];
  hasaudio: boolean;
  id: string;
  media_formats: media_formats;
  itemurl: string;
  tags: string[];
  title: string;
  url: string;
}

type Results = TenorGif[];

const searchInput = ref("");
const ratingSelect = ref("off");

const results = ref<Results>([]);

const handleSubmit = async () => {
  const keyword = searchInput.value;
  const rating = ratingSelect.value;

  if (keyword.length < 3) {
    throw new Error('Debes pasar un valor correcto en el input');
  }

  try {
    const data = await getGifsByKeyword({ keyword, rating });

    results.value = data.results as Results;
  } catch (error) {
    console.error(error);
  }
};
</script>
