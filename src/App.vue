<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import MainOfficeMenu from './constant/MainOffice.const'

</script>

<template>
  <div id="app">
    <p-toolbar>
      <template #start>
        <div class="logo">
          <img src="/image/logo.svg" />
        </div>
      </template>

      <template #end>
        <p class="text-white px-3">CN管理画面</p>
        <img class="px-3" src="/image/icon_question.png" alt="">
        <img class="px-3" src="/image/icon_user.png" alt="">
      </template>
    </p-toolbar>
    <div class="flex flex-row">
      <div class="sidebar">
        <div class="flex flex-column align-content-center" v-for="menuItem in MainOfficeMenu">
          <div class="flex align-items-center justify-content-start p-4">
            <img :src="menuItem.icon" />
            <span class="text-white">{{ menuItem.title }}</span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="flex flex-column align-content-center flex-wrap card-container yellow-container">
          <div
            class="flex align-items-center justify-content-start w-12rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">
            1</div>
          <div
            class="flex align-items-center justify-content-start w-12rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">
            2</div>
          <div
            class="flex align-items-center justify-content-start w-12rem h-4rem bg-yellow-500 font-bold text-gray-900 border-round m-2">
            3</div>
        </div>
      </div>
      <div class="breadcrumb">breadcrumb</div>
    </div>
  </div>

</template>

<style>
body {
  padding: 0px;
  margin: 0px;
}

.p-toolbar {
  background-color: #A5E3B1 !important;
  height: 80px;
}

.logo {
  width: 200px;
  height: 55.438px;
  text-align: center;
  padding-left: 3px;
}

.logo img {
  width: 200px;
  height: 40.438px;
}

.sidebar {
  background-color: #A5E3B1 !important;
  width: 246px;
  height: calc(100vh - 80px + 1px);
  margin-top: -1px !important;
}

.breadcrumb {
  height: calc(100vh - 80px + 1px);
  width: 197px;
  background-color: #E7F7EA;
}
</style>
