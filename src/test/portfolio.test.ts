import { describe, expect, it } from "vitest";
import { contact, filterProjects, projects, publications } from "@/content/portfolio";

describe("portfolio content", () => {
  it("keeps all 27 projects from the original site", () => {
    expect(projects).toHaveLength(27);
  });
  it("filters ML projects only", () => {
    const ml = filterProjects(projects, "ml");
    expect(ml.length).toBe(8);
    expect(ml.every((p) => p.cat === "ml")).toBe(true);
  });
  it("all repo links are https GitHub URLs", () => {
    for (const p of projects) if (p.repo) expect(p.repo).toMatch(/^https:\/\/github\.com\//);
  });
  it("keeps contact email and both 2026 publications", () => {
    expect(contact.email).toBe("silvanusalvan41@gmail.com");
    expect(publications.map((p) => p.venue)).toEqual(["ICTIIA", "IC2IE"]);
  });
});
