import { COURSES } from "./site";

export const INTERESTS = {
  masterclass: "Spoken English Masterclass",
  everyday: COURSES[0].name,
  career: COURSES[1].name,
};

export type Interest = keyof typeof INTERESTS;

export function getInterest(value: unknown): Interest {
  return value === "everyday" || value === "career" ? value : "masterclass";
}

export const registerHref = (interest: Interest = "masterclass") =>
  interest === "masterclass" ? "/masterclass/register" : `/masterclass/register?interest=${interest}`;

export const REVIEWS = [
  { name: "Siddarth C", quote: "I have improved my communication skills and feel better now." },
  { name: "Mani Mono", quote: "The teacher encourages everyone to speak without fear." },
  { name: "Shaik Irfan", quote: "I have improved my communication skills and interview skills." },
];

export const CLIPS = [
  { id: "classroom-01", title: "Speaking without fear", duration: "0:34" },
  { id: "classroom-02", title: "Practice builds confidence", duration: "0:42" },
  { id: "classroom-03", title: "Clear, simple teaching", duration: "0:45" },
  { id: "classroom-04", title: "Learning to express myself", duration: "0:37" },
];
