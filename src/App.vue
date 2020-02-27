<template>
  <article class="app">
    <section class="form">
      <article class="form-group">
        <label for="flagSupportLengthMeters">Ancho de la antena(m):</label>
        <input
          name="flagSupportLengthMeters"
          type="number"
          inputmode="numeric"
          v-model="flagSupportLengthMeters"
          required
        />
      </article>
      <article class="form-group">
        <label for="centerLineLengthMeters">Longitud del cabresto central(m):</label>
        <input
          name="centerLineLengthMeters"
          type="number"
          inputmode="numeric"
          v-model="centerLineLengthMeters"
          required
        />
      </article>
      <article class="form-group">
        <label for="lineSeparationCm">Separación entre cabrestos(cm):</label>
        <input
          name="lineSeparationCm"
          type="number"
          inputmode="numeric"
          v-model="lineSeparationCm"
          required
        />
      </article>
      <article class="form-group">
        <button @click="calculate" :disabled="!valid">Calcular</button>
      </article>
    </section>
    <section class="suggestion"></section>
    <section class="results" v-if="resultsFilled">
      <table>
        <thead>
          <tr>
            <th>##</th>
            <th>Longitud(m)</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(result, index) in results">
            <tr :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ (result / 100).toFixed(2) }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CabrestosHelper } from "./util/cabrestosHelper";

@Component({
  components: {}
})
export default class App extends Vue {
  flagSupportLengthMeters: number | null = null;
  centerLineLengthMeters: number | null = null;
  lineSeparationCm: number | null = null;

  results: number[] | null = null;

  calculate() {
    if (this.valid) {
      const util = CabrestosHelper.fromStandardInput(
        this.flagSupportLengthMeters!,
        this.lineSeparationCm!,
        this.centerLineLengthMeters!
      );
      this.results = util.calculateCabrestos();
    }
  }

  get resultsFilled() {
    return this.results && this.results.length > 0;
  }

  get valid() {
    return (
      this.flagSupportLengthMeters != null &&
      this.centerLineLengthMeters != null &&
      this.lineSeparationCm != null
    );
  }
}
</script>

<style lang="stylus" scoped></style>
