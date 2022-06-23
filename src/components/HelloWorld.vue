<template>
  <div class="hello">
    <Card>
      <template #header>
        <h1>My Test Counter</h1>
      </template>
      <template #content>
        <h2>{{currentCount}}</h2>
      </template>
      <template #footer>
        <div class="button-cont">
          <Button icon="pi pi-minus" @click="decrement()" />
          <Button icon="pi pi-plus" @click="increment()" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters, mapMutations } from 'vuex';

@Options({
  computed: {
    ...mapGetters(['currentCount'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement'])
  }
})
export default class HelloWorld extends Vue {
  currentCount!: number;
  increment!: () => void;
  decrement!: () => void;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.button-cont {
  display: flex;
  justify-content: space-evenly;
}
</style>
