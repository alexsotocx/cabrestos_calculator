import { CabrestosHelper } from "@/util/cabrestosHelper";

describe("CabrestosHelper", () => {
  const flagLengthMeters = 1;
  const cLineMeters = 10;
  const notDivisor = 30;
  const divisor = 20;

  const invalidInput = new CabrestosHelper(
    flagLengthMeters,
    notDivisor,
    cLineMeters
  );
  const validInput = new CabrestosHelper(
    flagLengthMeters,
    divisor,
    cLineMeters
  );

  describe("validateInput", () => {
    test("false when the separation is not a divisor of the full length", () => {
      expect(invalidInput.validateInput()).toBeFalsy();
    });

    test("true when the separation is a divisor of the full length", () => {
      expect(validInput.validateInput()).toBeTruthy();
    });
  });

  describe("generateSuggestionInput", () => {
    test("returns the closest valid input for the given configuration", () => {
      const suggestion = invalidInput.generateSuggestion();
      expect(suggestion).not.toBe(invalidInput);
      expect(suggestion.validateInput()).toEqual(true);
      expect(suggestion.flagSupportLengthMeters).toEqual(1.2);
      expect(suggestion.centerLineLengthMeters).toEqual(cLineMeters);
      expect(suggestion.lineSeparationCentimeters).toEqual(notDivisor);
    });

    test("if configuration is already valid returns itself", () => {
      const suggestion = validInput.generateSuggestion();
      expect(suggestion).toBe(validInput);
    });
  });

  describe("calculateCabrestos", () => {
    const evenConfiguration = new CabrestosHelper(1, 20, 5);
    const oddConfiguration = new CabrestosHelper(1, 25, 5);

    test("raises exception if configuration is not valid", () => {
      expect(() => invalidInput.calculateCabrestos()).toThrow();
    });

    test("with even configuration", () => {
      const cal = evenConfiguration.calculateCabrestos();
      expect(cal.length).toEqual(6);
      expect(cal).toEqual([5.02, 5.01, 5.0, 5.0, 5.01, 5.02]);
    });

    test("with odd configuration", () => {
      const cal = oddConfiguration.calculateCabrestos();
      expect(cal.length).toEqual(5);
      expect(cal).toEqual([5.02, 5.01, 5.0, 5.01, 5.02]);
    });
  });
});
