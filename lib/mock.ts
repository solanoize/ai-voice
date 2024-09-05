import { IValue } from "./interfaces";
import { generateUUID } from "./utils";

export const MOCK_DATA_MODEL_PROVIDER: IValue[] = [
  {
    value: "vapi",
    label: "Vapi",
  },
  {
    value: "openai",
    label: "Open AI",
  },
  {
    value: "togetherai",
    label: "Together AI",
  },
  {
    value: "anyscale",
    label: "AnyScale",
  },
  {
    value: "deepinfra",
    label: "Deep Infra",
  },
];

export const MOCK_DATA_MODEL: IValue[] = [
  {
    label: "GPT 3.5 Turbo Cluster",
    value: "gpt3.5-turbo-cluster",
  },
  {
    label: "GPT 4o Cluster",
    value: "gpt4o-cluster",
  },
];

export const MOCK_DATA_MODEL_KNOWLEDGE: IValue[] = [
  {
    label: "promise.pdf",
    value: "Promise PDF",
  },
];

export const MOCK_DATA_PROVIDER_CONFIGURATION: IValue[] = [
  {
    value: "openai",
    label: "openai",
  },
  {
    value: "cartesia",
    label: "cartesia",
  },
];

export const MOCK_DATA_VOICE_CONFIGURATION: IValue[] = [
  {
    value: "nova",
    label: "nova",
  },
  {
    value: "onyx",
    label: "onyx",
  },
];

export const MOCK_DATA_TRANSCRIPTION_PROVIDER: IValue[] = [
  {
    value: "deepgram",
    label: "deepgram",
  },
  {
    value: "talkscriber",
    label: "talkscriber",
  },
  {
    value: "gladia",
    label: "gladia",
  },
];

export const MOCK_DATA_TRANSCRIPTION_LANGUAGE: IValue[] = [
  {
    value: "id",
    label: "Indonesian",
  },
  {
    value: "en",
    label: "English",
  },
  {
    value: "jp",
    label: "Japan",
  },
];

export const MOCK_DATA_TRANSCRIPTION_MODEL: IValue[] = [
  {
    value: "Whisper",
    label: "whisper",
  },
];

export const MOCK_DATA_BACKGROUND_SOUND: IValue[] = [
  {
    label: "Off",
    value: "off",
  },
  {
    label: "Office",
    value: "office",
  },
  {
    label: "Default",
    value: "default",
  },
];

export const MOCK_DATA_FUNCTION_TOOLS: IValue[] = [
  {
    label: "Tool 1",
    value: "tool1",
  },
  {
    label: "Tool 2",
    value: "tool2",
  },
  {
    label: "Tool 3",
    value: "tool3",
  },
];

export const MOCK_DATA_SYSTEM_PROMPT: string = `You are a voice assistant for Mary's Dental, a dental office located at 123 North Face Place, Anaheim, California. The hours are 8 AM to 5PM daily, but they are closed on Sundays.

Mary's dental provides dental services to the local Anaheim community. The practicing dentist is Dr. Mary Smith.

You are tasked with answering questions about the business, and booking appointments. If they wish to book an appointment, your goal is to gather necessary information from callers in a friendly and efficient manner like follows:

1. Ask for their full name.
2. Ask for the purpose of their appointment.
3. Request their preferred date and time for the appointment.
4. Confirm all details with the caller, including the date and time of the appointment.

- Be sure to be kind of funny and witty!
- Keep all your responses short and simple. Use casual language, phrases like "Umm...", "Well...", and "I mean" are preferred.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`;

export const MOCK_ASSISTANCE_LIST = [
  { uuid: generateUUID(), name: "Alice" },
  { uuid: generateUUID(), name: "Bob" },
  { uuid: generateUUID(), name: "Charlie" },
  { uuid: generateUUID(), name: "David" },
  // { uuid: generateUUID(), name: "Eve" },
  // { uuid: generateUUID(), name: "Frank" },
  // { uuid: generateUUID(), name: "Grace" },
  // { uuid: generateUUID(), name: "Hank" },
  // { uuid: generateUUID(), name: "Ivy" },
  // { uuid: generateUUID(), name: "Jack" },
];

export const MOCK_ASSISTANCE_CART_COST = [
  { val: "vapifixedcost", cost: 27, fill: "#14b8a6" },
  { val: "talkscriber", cost: 34, fill: "#ef4444" },
  { val: "gpt4o", cost: 23, fill: "#2563eb" },
  { val: "openai", cost: 14, fill: "#fde047" },
  { val: "web", cost: 89, fill: "#a855f7" },
];

export const MOCK_ASSISTANCE_CART_LATENCY = [
  { val: "vapifixedcost", latency: 275, fill: "#14b8a6" },
  { val: "talkscriber", latency: 345, fill: "#ef4444" },
  { val: "gpt4o", latency: 235, fill: "#2563eb" },
  { val: "openai", latency: 14, fill: "#fde047" },
  { val: "web", latency: 389, fill: "#a855f7" },
];

export const MOCK_ASSISTANCE_CART_COST_CONFIG = {
  cost: {
    label: "Cost",
  },
  vapifixedcost: {
    label: "Vapi Fixed Cost",
    color: "#14b8a6",
  },
  talkscriber: {
    label: "talkscriber",
    color: "hsl(#ef4444)",
  },
  gpt4o: {
    label: "gpt 4o",
    color: "#2563eb",
  },
  openai: {
    label: "openai",
    color: "#fde047",
  },
  web: {
    label: "web",
    color: "#a855f7",
  },
};

export const MOCK_ASSISTANCE_CART_LATENCY_CONFIG = {
  latency: {
    label: "latency",
  },
  vapifixedcost: {
    label: "Vapi Fixed Cost",
    color: "#14b8a6",
  },
  talkscriber: {
    label: "talkscriber",
    color: "hsl(#ef4444)",
  },
  gpt4o: {
    label: "gpt 4o",
    color: "#2563eb",
  },
  openai: {
    label: "openai",
    color: "#fde047",
  },
  web: {
    label: "web",
    color: "#a855f7",
  },
};

export const MOCK_CLIENT_MESSAGE: IValue[] = [
  {
    value: "conversation-update",
    label: "conversation-update",
  },
  {
    value: "function-call",
    label: "function-call",
  },
  {
    value: "function-call-result",
    label: "function-call-result",
  },
  {
    value: "hang",
    label: "hang",
  },
  {
    value: "metadata",
    label: "metadata",
  },
  {
    value: "model-output",
    label: "model-output",
  },
  {
    value: "speech-update",
    label: "speech-update",
  },
  {
    value: "status-update",
    label: "status-update",
  },
];

export const MOCK_SERVER_MESSAGE: IValue[] = [
  {
    value: "end-of-call-report",
    label: "end-of-call-report",
  },
  {
    value: "status-update",
    label: "status-update",
  },
  {
    value: "hang",
    label: "hang",
  },
];

export const MOCK_IDLE_MESSAGES: IValue[] = [
  {
    value: "Are you still there?",
    label: "Are you still there?",
  },
  {
    value: "let-me-know-if-theres-anything-you-need",
    label: "Let meknow if there's anything you need.",
  },
  {
    value: "im-ready-to-help-whenever-you-are",
    label: "I'm ready to help whenever you are.",
  },
  {
    value: "is-there-something-specific-youre-looking-for",
    label: "Is there something specific your're looking for?",
  },
];

export const MOCK_FILE_LIST = [
  { uuid: generateUUID(), name: "Promise.pdf" },
  { uuid: generateUUID(), name: "Async.pdf" },
  { uuid: generateUUID(), name: "Curriculum.pdf" },
  { uuid: generateUUID(), name: "Profile.pdf" },
];
