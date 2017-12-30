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
import Panel from '@/components/Panel'
export default {
  props: ['youtubeId'],
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
