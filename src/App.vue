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
        <button @click="reset">Reiniciar</button>
      </article>
    </section>
    <section class="suggestion" v-if="suggestion">
      <p>Usando configuración ideal:</p>
      <ul>
        <li>
          <span class="entry">Ancho de la antena:</span>
          {{ suggestion.flagSupportLength / 100 }}m
        </li>
        <li>
          <span class="entry">Longitud del cabresto central(m):</span>
          {{ suggestion.centerLineLength / 100 }}m
        </li>
        <li>
          <span class="entry">Separación entre cabrestos(cm):</span>
          {{ suggestion.lineSeparation }}cm
        </li>
      </ul>
    </section>
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
  suggestion: CabrestosHelper | null = null;
  results: number[] | null = null;

  reset() {
    this.flagSupportLengthMeters = null;
    this.centerLineLengthMeters = null;
    this.lineSeparationCm = null;
    this.results = null;
    this.suggestion = null;
  }

  calculate() {
    if (this.valid) {
      let util = CabrestosHelper.fromStandardInput(
        // eslint-disable-next-line
        this.flagSupportLengthMeters!,
        // eslint-disable-next-line
        this.lineSeparationCm!,
        // eslint-disable-next-line
        this.centerLineLengthMeters!
      );
      if (!util.validateInput()) {
        util = this.suggestion = util.generateSuggestion();
      }
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
