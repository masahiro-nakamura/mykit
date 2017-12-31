<template>
  <panel title="YouTube Video">
    <v-layout>
      <youtube
        :video-id="youtubeId"
        :player-width="500"
        :player-height="330">
      </youtube>
    </v-layout>
  </panel>
</template>

<script>
export default {
  props: ['youtubeId']
}
</script>

<style scoped>
</style>
