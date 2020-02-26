export class CabrestosHelper {
  constructor(
    readonly flagSupportLengthMeters: number,
    readonly lineSeparationCentimeters: number,
    readonly centerLineLengthMeters: number
  ) {}

  validateInput(): boolean {
    return this.flagSupportCM() % this.lineSeparationCentimeters === 0;
  }

  generateSuggestion(): CabrestosHelper {
    if (this.validateInput()) {
      return this;
    }
    const validFlagSLengthCM =
      Math.ceil(this.flagSupportCM() / this.lineSeparationCentimeters) *
      this.lineSeparationCentimeters;
    return new CabrestosHelper(
      validFlagSLengthCM / 100,
      this.lineSeparationCentimeters,
      this.centerLineLengthMeters
    );
  }

  calculateCabrestos(): number[] {
    if (!this.validateInput()) {
      throw new Error("Invalid Configuration");
    }
    const output: number[] = [];
    const distanceCMToCenter = this.flagSupportCM() / 2;
    const cabrestosTotal =
      this.flagSupportCM() / this.lineSeparationCentimeters + 1;
    for (let i = 0; i < cabrestosTotal; i++) {
      const length = Math.abs(
        distanceCMToCenter - i * this.lineSeparationCentimeters
      );
      const distance = this.distancePit(
        length,
        this.centerLineLengthMeters * 100
      );
      output.push(Number((distance / 100).toFixed(2)));
    }
    return output;
  }

  private flagSupportCM() {
    return this.flagSupportLengthMeters * 100;
  }

  private distancePit(length: number, high: number): number {
    return Math.sqrt(length * length + high * high);
  }
}
