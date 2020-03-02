<template>
  <article class="app">
    <h1 class="title">Calculadora de cabrestos</h1>
    <article class="language-switcher">
      <button class="btn btn-outline-info" @click="swtichLanguage('es')">Español</button>
      <button class="btn btn-outline-info" @click="swtichLanguage('pt')">Portugues</button>
    </article>
    <section class="top">
      <section class="form">
        <article class="form-group">
          <label for="flagSupportLengthMeters">{{ $t("supportLength") }}:</label>
          <input
            name="flagSupportLengthMeters"
            type="number"
            inputmode="numeric"
            v-model="flagSupportLengthMeters"
            class="form-control"
            required
          />
        </article>
        <article class="form-group">
          <label for="centerLineLengthMeters">{{ $t("centerLineLength") }}:</label>
          <input
            name="centerLineLengthMeters"
            type="number"
            inputmode="numeric"
            v-model="centerLineLengthMeters"
            class="form-control"
            required
          />
        </article>
        <article class="form-group">
          <label for="lineSeparationCm">{{ $t("separation") }}:</label>
          <input
            name="lineSeparationCm"
            type="number"
            inputmode="numeric"
            v-model="lineSeparationCm"
            class="form-control"
            required
          />
        </article>
        <article class="form-group buttons">
          <button @click="calculate" class="btn btn-primary" :disabled="!valid">Calcular</button>
          <button @click="reset" class="btn btn-warning">Reiniciar</button>
        </article>
      </section>
      <section class="logo">
        <a href="https://www.facebook.com/Disproyect">
          <img src="./assets/logo.png" />
          <h3>https://www.facebook.com/Disproyect/</h3>
        </a>
      </section>
    </section>
    <section class="results" v-if="resultsFilled">
      <h2>Resultados</h2>
      <button class="copy btn btn-success" @click="copy">Copiar</button>
      <article class="result-container" ref="results">
        <section class="suggestion">
          <h3>Usando configuración ideal:</h3>
          <ul>
            <li>
              <span class="entry">{{ $t("supportLength") }}</span>
              {{ suggestion.flagSupportLength / 100 }}m
            </li>
            <li>
              <span class="entry">{{ $t("centerLineLength") }}</span>
              {{ suggestion.centerLineLength / 100 }}m
            </li>
            <li>
              <span class="entry">{{ $t("separation") }}</span>
              {{ suggestion.lineSeparation }}cm
            </li>
          </ul>
        </section>
        <article class="result-table">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">##</th>
                <th scope="col">{{ $t("length") }}</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(result, index) in results">
                <tr :key="index">
                  <td class="bold" scope="row">{{ index + 1 }}</td>
                  <td>{{ (result / 100).toFixed(2) }}</td>
                </tr>
              </template>
              <tr>
                <td class="bold" scope="row">Total</td>
                <td>{{ (totalAmount / 100).toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
        </article>
      </article>
    </section>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CabrestosHelper } from "./util/cabrestosHelper";

@Component({})
export default class App extends Vue {
  flagSupportLengthMeters: number | string = 0;
  centerLineLengthMeters: number | string = 0;
  lineSeparationCm: number | string = 0;
  suggestion: CabrestosHelper | null = null;
  results: number[] | null = null;
  locale = "es";

  beforeMount() {
    this.$i18n.locale = navigator.language;
  }

  swtichLanguage(language: string) {
    this.locale = this.$i18n.locale = language;
  }
  reset() {
    this.flagSupportLengthMeters = 0;
    this.centerLineLengthMeters = 0;
    this.lineSeparationCm = 0;
    this.results = null;
    this.suggestion = null;
  }

  calculate() {
    if (this.valid) {
      let util = CabrestosHelper.fromStandardInput(
        // eslint-disable-next-line
        Number(this.flagSupportLengthMeters!),
        // eslint-disable-next-line
        Number(this.lineSeparationCm!),
        // eslint-disable-next-line
        Number(this.centerLineLengthMeters!)
      );
      if (!util.validateInput()) {
        util = util.generateSuggestion();
      }
      this.suggestion = util;
      this.results = util.calculateCabrestos();
      setTimeout(() => {
        (this.$refs.results as Element).scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 100);
    }
  }

  copy() {
    const range = document.createRange();
    range.selectNodeContents(this.$refs.results as Element);
    const select = window.getSelection();
    if (select) {
      select.removeAllRanges();
      select.addRange(range);
      document.execCommand("copy");
      select.removeAllRanges();
    }
  }

  get resultsFilled() {
    return this.results && this.results.length > 0;
  }

  get valid() {
    return (
      this.flagSupportLengthMeters !== 0 &&
      this.centerLineLengthMeters !== 0 &&
      this.lineSeparationCm !== 0
    );
  }

  get totalAmount() {
    if (this.resultsFilled) {
      return this.results!.reduce((acc, val) => acc + val, 0);
    }
    return 0;
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto|Trade+Winds&display=swap");
html {
  font-size: 16px;
}
* {
  font-size: 16px;
  font-family: "Roboto", "Times New Roman", Times, serif;
  font-weight: 300;
}
:disabled {
  pointer-events: none;
}
</style>
<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/forms";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/tables";
@import "~bootstrap/scss/reboot";

.app {
  @extend .container;
  position: relative;
  .language-switcher {
    text-align: center;
    margin-bottom: 1rem;
    .btn {
      font-size: 0.8rem;
      margin-right: 1rem;
    }

    @include media-breakpoint-up(sm) {
      text-align: left;
    }
  }
  .title {
    text-align: center;
    font-size: 2.5rem;
    font-family: "Trade Winds", "Roboto", "serif";
  }
  h3 {
    font-size: 1rem;
    margin-top: 0;
    font-family: "Trade Winds", "Roboto", "serif";
  }
  .top {
    display: flex;
    width: 100%;
    flex-direction: column;
    .form {
      order: 2;
      margin-top: 1rem;
      .buttons {
        text-align: center;
        .btn-primary {
          margin-right: 1rem;
          &:disabled {
            background-color: grey;
            border-color: grey;
          }
        }
      }
    }
    .logo {
      position: relative;
      text-align: center;
      order: 1;
      img {
        height: 200px;
      }
    }
    @include media-breakpoint-up(sm) {
      flex-direction: row;
      .form {
        order: 1;
        flex-grow: 1;
      }
      .logo {
        order: 2;
        flex-grow: 1;
        img {
          height: 300px;
        }
      }
    }
  }
  .results {
    border-top: 5px dotted gray;
    margin-top: 1rem;
    h2 {
      font-size: 2rem;
      font-family: "Trade Winds", "Roboto", "serif";
      margin: 1rem 0;
      text-align: center;
    }
    h3 {
      font-size: 1.5rem;
      margin-top: 0;
      font-family: "Trade Winds", "Roboto", "serif";
    }
    .copy {
      margin-bottom: 0.5rem;
      float: right;
    }
    .result-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      .suggestion {
        ul {
          li {
            margin-top: 0.5rem;
            .entry {
              font-weight: bold;
            }
          }
        }
      }
      .result-table {
        margin-top: 1rem;
        text-align: right;
        .table {
          .bold {
            font-weight: bold;
          }
        }
      }
      @include media-breakpoint-up(sm) {
        flex-direction: row;
        .result-table {
          margin-top: 0;
          order: 1;
          width: 40%;
        }
        .suggestion {
          order: 2;
          padding-left: 1rem;
        }
      }
    }
  }
}
</style>
