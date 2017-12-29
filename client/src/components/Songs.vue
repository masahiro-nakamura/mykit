<template>
<div>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn
          slot="action"
          @click="navigateTo({name: 'songs-create'})"
          class="cyan accent-2"
          light
          small
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>
        <div
          v-for="song in songs"
          class="song"
          :key="song.id">
          <v-layout>
            <v-flux xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-album">
                {{song.album}}
              </div>
              <v-btn
                dark class="cyan"
                @click="navigateTo({
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                })">
                View
              </v-btn>
            </v-flux>
            <v-flux xs6>
              <img class="album-image" :src="song.albumImageUrl" />
            </v-flux>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-album {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
