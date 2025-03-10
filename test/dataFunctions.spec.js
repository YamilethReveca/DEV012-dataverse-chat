
import { sortData, filterData, sortBounty, computeStats, computeStatsBounty } from '../src/lib/dataFunctions.js'
import { names, crew, arrBounty, origin } from './data.js';

describe("sortData", () => {
  it('returns characters sorted by name in ascending or descending order`', () => {
    const resultNames = [
      { name: "Eustass Kid" },
      { name: "Monkey D. Luffy" },
      { name: "Nami" },
      { name: "Roronoa Zoro" },
      { name: "Sir Crocodile" }
    ];
    const resultNames2 = [
      { name: "Sir Crocodile" },
      { name: "Roronoa Zoro" },
      { name: "Nami" },
      { name: "Monkey D. Luffy" },
      { name: "Eustass Kid" }
    ];

    expect(sortData(names, "name", "asc")).toStrictEqual(resultNames)
    expect(sortData(names, "name", "desc")).toStrictEqual(resultNames2)
  });
});

describe("sortBounty", () => {
  it("returns bounty sorted by numbers in ascending order", () => {

    const resultBounty = [
      { facts: { bounty: "30,000,000" } },
      { facts: { bounty: "66,000,000" } },
      { facts: { bounty: "320,000,000" } },
      { facts: { bounty: "330,000,000" } },
      { facts: { bounty: "1,500,000,000" } },
    ];
    const resultBounty2 = [
      { facts: { bounty: "1,500,000,000" } },
      { facts: { bounty: "330,000,000" } },
      { facts: { bounty: "320,000,000" } },
      { facts: { bounty: "66,000,000" } },
      { facts: { bounty: "30,000,000" } },
    ];
    expect(sortBounty(arrBounty, "asc")).toStrictEqual(resultBounty);
    expect(sortBounty(arrBounty, "desc")).toStrictEqual(resultBounty2);
  });
});

describe("filterData", () => {

  it('characters filtered by Crew', () => {

    const resultCrew = [
      { facts: { crewOrigin: "Straw Hat Pirates" } },
      { facts: { crewOrigin: "Straw Hat Pirates" } },
      { facts: { crewOrigin: "Straw Hat Pirates" } },
    ]

    expect(filterData(crew, "crewOrigin", "Straw Hat Pirates")).toStrictEqual(resultCrew);
  });
});
describe("computeStats", () => {

  it("percentage of characters from East Blue and from Straw Hat Pirates crew", () => {

    expect(computeStats(origin, "seaOfOrigin", "East Blue")).toStrictEqual("60.00");
    expect(computeStats(origin, "crewOrigin", "Straw Hat Pirates")).toStrictEqual("100.00");

  });
});
describe("computeStatsBounty", () => {

  it("percentage of characters whose bounty is over 315,000,000", () => {

    expect(computeStatsBounty(arrBounty, "bounty", 315000000)).toStrictEqual("60.00");
  });
});
